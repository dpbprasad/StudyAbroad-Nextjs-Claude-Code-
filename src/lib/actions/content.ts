'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from '../db';
import { siteContent } from '../db/schema';
import { requireSession } from '../auth';
import { HERO_KEYS, HERO_CONTENT_TAG } from '../content';

export type ContentState = { ok?: boolean; error?: string };

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
  revalidateTag(HERO_CONTENT_TAG);
  revalidatePath('/');
  return { ok: true };
}
