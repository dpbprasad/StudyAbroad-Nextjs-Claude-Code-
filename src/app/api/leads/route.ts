import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '../../../lib/db';
import { leads } from '../../../lib/db/schema';

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

  try {
    const [row] = await db
      .insert(leads)
      .values({
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
      })
      .returning({ id: leads.id });

    // TODO(zoho): forward to Zoho Web-to-Lead here once the endpoint is provided,
    // then mark zohoSynced / zohoSyncedAt. Until then the lead is safely stored.

    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    console.error('Failed to store lead:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our side. Please try again.' },
      { status: 500 },
    );
  }
}
