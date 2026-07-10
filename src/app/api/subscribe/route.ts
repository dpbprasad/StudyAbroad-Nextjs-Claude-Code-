import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '../../../lib/db';
import { newsletterSubscribers } from '../../../lib/db/schema';
import { sendMail } from '../../../lib/mailer';
import { buildSubscriberNotification, buildSubscriberWelcome } from '../../../lib/emails';

export const runtime = 'nodejs';

const schema = z.object({
  email: z
    .string()
    .trim()
    .max(200)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'),
  source: z.string().trim().max(300).optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Please enter a valid email.' },
      { status: 400 },
    );
  }

  const { email, source, company } = parsed.data;

  // Honeypot filled → bot. Pretend success, store nothing.
  if (company) return NextResponse.json({ ok: true });

  const clean = email.toLowerCase();

  // 1) Store the subscriber (best-effort).
  let saved = false;
  try {
    // Re-subscribing an existing email just refreshes their status (no duplicate row).
    await db
      .insert(newsletterSubscribers)
      .values({ email: clean, source, status: 'subscribed' })
      .onConflictDoUpdate({ target: newsletterSubscribers.email, set: { status: 'subscribed' } });
    saved = true;
  } catch (err) {
    console.error('Failed to store subscriber:', err);
  }

  // 2) Notify the company + send a welcome to the subscriber (best-effort).
  let emailed = false;
  try {
    const notifyTo = process.env.LEADS_NOTIFY_TO || process.env.MAIL_FROM || process.env.SMTP_USER;
    const results = await Promise.allSettled([
      notifyTo ? sendMail({ to: notifyTo, ...buildSubscriberNotification(clean, source) }) : Promise.resolve({ ok: false as const }),
      sendMail({ to: clean, ...buildSubscriberWelcome(clean) }),
    ]);
    emailed = results.some((r) => r.status === 'fulfilled' && r.value.ok);
  } catch (err) {
    console.error('Failed to send subscriber emails:', err);
  }

  if (!saved && !emailed) {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
