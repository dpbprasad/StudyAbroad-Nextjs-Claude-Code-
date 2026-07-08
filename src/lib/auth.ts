import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { SESSION_COOKIE, verifySession, type SessionPayload } from './session';

/** Node-only auth helpers (bcrypt + cookie reading). Never imported by middleware. */

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/** Current admin session (or null) — for server components / actions. */
export async function getSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifySession(token);
}

/** Require a session or redirect to login. Returns the session when present. */
export async function requireSession(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session) redirect('/admin/login');
  return session;
}
