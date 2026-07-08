'use server';

import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { db } from '../db';
import { leads } from '../db/schema';
import { requireSession } from '../auth';

const STATUSES = ['new', 'contacted', 'archived'] as const;
type Status = (typeof STATUSES)[number];

export async function updateLeadStatus(formData: FormData) {
  await requireSession(); // must be logged in

  const id = String(formData.get('id') ?? '');
  const status = String(formData.get('status') ?? '') as Status;
  if (!id || !STATUSES.includes(status)) return;

  await db.update(leads).set({ status }).where(eq(leads.id, id));
  revalidatePath('/admin/leads');
  revalidatePath('/admin');
}
