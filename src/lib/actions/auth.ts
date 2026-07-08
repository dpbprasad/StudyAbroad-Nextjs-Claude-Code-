'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '../db';
import { users } from '../db/schema';
import { verifyPassword } from '../auth';
import { signSession, SESSION_COOKIE, SESSION_MAX_AGE } from '../session';

export type LoginState = { error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');
  const next = String(formData.get('next') ?? '');

  if (!email || !password) return { error: 'Enter your email and password.' };

  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  // Same generic message whether the email or password is wrong (no user enumeration).
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: 'Invalid email or password.' };
  }

  const token = await signSession({
    sub: user.id,
    email: user.email,
    name: user.name,
    role: user.role === 'admin' ? 'admin' : 'editor',
  });

  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });

  // Only allow same-site admin destinations.
  redirect(next.startsWith('/admin') ? next : '/admin');
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect('/admin/login');
}
