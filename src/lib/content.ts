import 'server-only';
import { unstable_cache } from 'next/cache';
import { inArray } from 'drizzle-orm';
import { db } from './db';
import { siteContent } from './db/schema';

/** DB keys for the editable hero fields. */
export const HERO_KEYS = {
  heading: 'hero_heading',
  paragraph: 'hero_paragraph',
} as const;

/** Shown when nothing has been saved yet (also the fallback if the DB is down). */
export const HERO_DEFAULTS = {
  heading: 'Your Gateway to World-Class Education',
  paragraph:
    'Your trusted partner for international education, admissions, recruitment, placements, and global opportunities.',
};

export type HeroContent = typeof HERO_DEFAULTS;

/** Fresh read (uncached) — used by the admin form so edits show immediately. */
export async function readHeroContent(): Promise<HeroContent> {
  try {
    const rows = await db
      .select()
      .from(siteContent)
      .where(inArray(siteContent.key, [HERO_KEYS.heading, HERO_KEYS.paragraph]));
    const map = new Map(rows.map((r) => [r.key, r.value]));
    return {
      heading: map.get(HERO_KEYS.heading) || HERO_DEFAULTS.heading,
      paragraph: map.get(HERO_KEYS.paragraph) || HERO_DEFAULTS.paragraph,
    };
  } catch {
    return { ...HERO_DEFAULTS };
  }
}

/**
 * Cached read for the public home page, so it stays static/fast. Invalidated
 * by revalidateTag('hero-content') when an admin saves.
 */
export const getHeroContent = unstable_cache(readHeroContent, ['hero-content'], {
  tags: ['hero-content'],
});

export const HERO_CONTENT_TAG = 'hero-content';
