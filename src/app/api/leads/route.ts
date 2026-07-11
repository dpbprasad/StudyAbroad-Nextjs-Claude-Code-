import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '../../../lib/db';
import { leads } from '../../../lib/db/schema';
import { sendMail } from '../../../lib/mailer';
import { buildLeadNotification, buildLeadAutoReply } from '../../../lib/emails';

// Neon's HTTP driver runs on the edge too, but nodejs is the safe default on Netlify.
export const runtime = 'nodejs';

// Empty strings from optional selects/inputs become undefined (stored as NULL).
const optionalStr = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

const leadSchema = z.object({
  formType: z.enum(['consultation', 'contact']).default('consultation'),
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z
    .string()
    .trim()
    .max(200)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'),
  phone: z.string().trim().min(1, 'Phone is required').max(50),
  levelOfStudy: optionalStr(100),
  currentQualification: optionalStr(100),
  preferredCountry: optionalStr(100),
  message: optionalStr(5000),
  source: optionalStr(300),
  company: z.string().optional(), // honeypot — humans leave this empty
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Please check the form and try again.' },
      { status: 400 },
    );
  }

  const v = parsed.data;

  // Honeypot filled → almost certainly a bot. Pretend success, store nothing.
  if (v.company) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    formType: v.formType,
    firstName: v.firstName,
    lastName: v.lastName,
    email: v.email,
    phone: v.phone,
    levelOfStudy: v.levelOfStudy,
    currentQualification: v.currentQualification,
    preferredCountry: v.preferredCountry,
    message: v.message,
    source: v.source,
  };

  // Capture the enquiry: store a copy in the DB, email the company (reply-to the
  // applicant), and auto-reply to the applicant — all concurrently, so a slow
  // database never delays the emails or pushes a serverless function past its
  // timeout. Each is best-effort; the enquiry survives if any one succeeds.
  const notifyTo = process.env.LEADS_NOTIFY_TO || process.env.MAIL_FROM || process.env.SMTP_USER;
  const [saveRes, notifyRes, replyRes] = await Promise.allSettled([
    db ? db.insert(leads).values(lead) : Promise.reject(new Error('no database configured')),
    notifyTo
      ? sendMail({ to: notifyTo, replyTo: v.email, ...buildLeadNotification(lead) })
      : Promise.resolve({ ok: false as const }),
    sendMail({ to: v.email, ...buildLeadAutoReply(lead) }),
  ]);

  const saved = saveRes.status === 'fulfilled';
  const emailed =
    (notifyRes.status === 'fulfilled' && notifyRes.value.ok) ||
    (replyRes.status === 'fulfilled' && replyRes.value.ok);

  if (saveRes.status === 'rejected') console.error('Failed to store lead:', saveRes.reason);
  if (notifyRes.status === 'rejected') console.error('Lead notification failed:', notifyRes.reason);
  if (replyRes.status === 'rejected') console.error('Lead auto-reply failed:', replyRes.reason);

  // Only fail the request if we captured the enquiry nowhere.
  if (!saved && !emailed) {
    return NextResponse.json(
      { error: 'Something went wrong on our side. Please try again, or email us directly.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
