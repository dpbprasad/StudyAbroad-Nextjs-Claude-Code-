'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from '../db';
import { siteContent } from '../db/schema';
import { requireSession } from '../auth';
import { HERO_KEYS, SITE_CONTENT_TAG, STAT_KEYS, CONTACT_KEYS } from '../content';

export type ContentState = { ok?: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function upsert(key: string, value: string) {
  await db
    .insert(siteContent)
    .values({ key, value })
    .onConflictDoUpdate({ target: siteContent.key, set: { value, updatedAt: new Date() } });
}

export async function updateHeroContent(
  _prev: ContentState,
  formData: FormData,
): Promise<ContentState> {
  await requireSession();

  const heading = String(formData.get('heading') ?? '').trim();
  const paragraph = String(formData.get('paragraph') ?? '').trim();

  if (!heading) return { error: 'Heading is required.' };
  if (!paragraph) return { error: 'Paragraph is required.' };
  if (heading.length > 200) return { error: 'Heading is too long (max 200 characters).' };
  if (paragraph.length > 600) return { error: 'Paragraph is too long (max 600 characters).' };

  try {
    await upsert(HERO_KEYS.heading, heading);
    await upsert(HERO_KEYS.paragraph, paragraph);
  } catch {
    return { error: 'Could not save. Please try again.' };
  }

  // Refresh the cached hero + the home page so the change shows immediately.
  revalidateTag(SITE_CONTENT_TAG);
  revalidatePath('/');
  return { ok: true };
}

/* ------------------------------ Stats ------------------------------ */
export async function updateStats(_prev: ContentState, formData: FormData): Promise<ContentState> {
  await requireSession();

  for (const key of STAT_KEYS) {
    const value = String(formData.get(`${key}_value`) ?? '').trim();
    const label = String(formData.get(`${key}_label`) ?? '').trim();
    if (!value || !label) return { error: 'Every stat needs a value and a label.' };
    if (value.length > 12) return { error: 'Stat values should be short (max 12 characters).' };
    if (label.length > 40) return { error: 'Stat labels are too long (max 40 characters).' };
  }

  try {
    for (const key of STAT_KEYS) {
      await upsert(`${key}_value`, String(formData.get(`${key}_value`)).trim());
      await upsert(`${key}_label`, String(formData.get(`${key}_label`)).trim());
    }
  } catch {
    return { error: 'Could not save. Please try again.' };
  }

  revalidateTag(SITE_CONTENT_TAG);
  revalidatePath('/');
  return { ok: true };
}

/* ----------------------------- Contact ----------------------------- */
export async function updateContact(_prev: ContentState, formData: FormData): Promise<ContentState> {
  await requireSession();

  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const street = String(formData.get('street') ?? '').trim();
  const locality = String(formData.get('locality') ?? '').trim();
  const postal = String(formData.get('postal') ?? '').trim();

  if (!EMAIL_RE.test(email)) return { error: 'Enter a valid email address.' };
  if (!phone) return { error: 'Enter a phone number.' };
  if (!street || !locality) return { error: 'Enter the street and city.' };

  try {
    await upsert(CONTACT_KEYS.email, email);
    await upsert(CONTACT_KEYS.phone, phone);
    await upsert(CONTACT_KEYS.street, street);
    await upsert(CONTACT_KEYS.locality, locality);
    await upsert(CONTACT_KEYS.postal, postal);
  } catch {
    return { error: 'Could not save. Please try again.' };
  }

  // Contact shows in the footer (every page) + contact section + structured data.
  revalidateTag(SITE_CONTENT_TAG);
  revalidatePath('/', 'layout');
  return { ok: true };
}
