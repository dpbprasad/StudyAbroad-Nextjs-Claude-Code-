import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '../../../lib/db';
import { newsletterSubscribers } from '../../../lib/db/schema';

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

  try {
    // Re-subscribing an existing email just refreshes their status (no duplicate row).
    await db
      .insert(newsletterSubscribers)
      .values({ email: email.toLowerCase(), source, status: 'subscribed' })
      .onConflictDoUpdate({
        target: newsletterSubscribers.email,
        set: { status: 'subscribed' },
      });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to store subscriber:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
