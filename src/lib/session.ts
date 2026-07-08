import { SignJWT, jwtVerify } from 'jose';

/**
 * Session token helpers — pure jose, no Node-only or next/headers imports, so
 * this module is safe to use from Edge middleware AND server components.
 */

export const SESSION_COOKIE = 'admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days (seconds)

export type Role = 'admin' | 'editor';
export type SessionPayload = {
  sub: string; // user id
  email: string;
  name: string;
  role: Role;
};

function secretKey(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error('AUTH_SECRET is not set');
  return new TextEncoder().encode(s);
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ email: payload.email, name: payload.name, role: payload.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secretKey());
}

export async function verifySession(token: string | undefined): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    if (!payload.sub || !payload.email) return null;
    return {
      sub: String(payload.sub),
      email: String(payload.email),
      name: String(payload.name ?? ''),
      role: payload.role === 'admin' ? 'admin' : 'editor',
    };
  } catch {
    return null;
  }
}
