'use server';

import { revalidatePath } from 'next/cache';
import { count, eq } from 'drizzle-orm';
import { db } from '../db';
import { users } from '../db/schema';
import { requireAdmin, requireSession, hashPassword, verifyPassword } from '../auth';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PW = 8;

export type UserActionState = { ok?: boolean; error?: string; message?: string };

const asRole = (v: unknown): 'admin' | 'editor' => (v === 'admin' ? 'admin' : 'editor');

async function adminCount(): Promise<number> {
  const [row] = await db.select({ v: count() }).from(users).where(eq(users.role, 'admin'));
  return row.v;
}

// ── Create a user (admin only) ────────────────────────────────────────────
export async function createUser(_prev: UserActionState, formData: FormData): Promise<UserActionState> {
  await requireAdmin();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const name = String(formData.get('name') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const role = asRole(formData.get('role'));

  if (!EMAIL_RE.test(email)) return { error: 'Enter a valid email.' };
  if (!name) return { error: 'Enter a name.' };
  if (password.length < MIN_PW) return { error: `Password must be at least ${MIN_PW} characters.` };

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length) return { error: 'A user with that email already exists.' };

  await db.insert(users).values({ email, name, passwordHash: await hashPassword(password), role });
  revalidatePath('/admin/users');
  return { ok: true, message: `Created ${email}.` };
}

// ── Change a user's role (admin only) ─────────────────────────────────────
export async function updateUserRole(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get('id') ?? '');
  const role = asRole(formData.get('role'));
  if (!id) return;

  if (role === 'editor') {
    const [target] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    if (target?.role === 'admin' && (await adminCount()) <= 1) return; // keep at least one admin
  }
  await db.update(users).set({ role }).where(eq(users.id, id));
  revalidatePath('/admin/users');
}

// ── Reset a user's password (admin only) ──────────────────────────────────
export async function resetUserPassword(_prev: UserActionState, formData: FormData): Promise<UserActionState> {
  await requireAdmin();
  const id = String(formData.get('id') ?? '');
  const password = String(formData.get('password') ?? '');
  if (!id) return { error: 'Missing user.' };
  if (password.length < MIN_PW) return { error: `Password must be at least ${MIN_PW} characters.` };

  await db.update(users).set({ passwordHash: await hashPassword(password) }).where(eq(users.id, id));
  revalidatePath('/admin/users');
  return { ok: true, message: 'Password updated.' };
}

// ── Delete a user (admin only) ────────────────────────────────────────────
export async function deleteUser(formData: FormData) {
  const session = await requireAdmin();
  const id = String(formData.get('id') ?? '');
  if (!id || id === session.sub) return; // can't delete yourself

  const [target] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  if (!target) return;
  if (target.role === 'admin' && (await adminCount()) <= 1) return; // keep at least one admin

  await db.delete(users).where(eq(users.id, id));
  revalidatePath('/admin/users');
}

// ── Change your own password (any signed-in user) ─────────────────────────
export async function changeOwnPassword(_prev: UserActionState, formData: FormData): Promise<UserActionState> {
  const session = await requireSession();
  const current = String(formData.get('current') ?? '');
  const next = String(formData.get('next') ?? '');
  const confirm = String(formData.get('confirm') ?? '');

  if (next.length < MIN_PW) return { error: `New password must be at least ${MIN_PW} characters.` };
  if (next !== confirm) return { error: 'New passwords do not match.' };

  const [user] = await db.select().from(users).where(eq(users.id, session.sub)).limit(1);
  if (!user || !(await verifyPassword(current, user.passwordHash))) {
    return { error: 'Current password is incorrect.' };
  }

  await db.update(users).set({ passwordHash: await hashPassword(next) }).where(eq(users.id, session.sub));
  return { ok: true, message: 'Password changed.' };
}
