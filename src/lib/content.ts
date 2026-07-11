import 'server-only';
import { unstable_cache } from 'next/cache';
import { inArray } from 'drizzle-orm';
import { db } from './db';
import { siteContent } from './db/schema';

/** One cache tag for all editable site content; any save revalidates it. */
export const SITE_CONTENT_TAG = 'site-content';
/** Back-compat alias (hero action imported this name). */
export const HERO_CONTENT_TAG = SITE_CONTENT_TAG;

// Cap how long a content read may block page rendering. If the database is
// slow/unreachable (e.g. a cold Neon compute), we abandon the query and let the
// caller fall back to built-in defaults, so the public site never hangs.
const DB_READ_TIMEOUT_MS = 2500;

async function readKeys(keys: string[]): Promise<Record<string, string>> {
  if (!db) return {}; // no database configured → use defaults
  const query = db.select().from(siteContent).where(inArray(siteContent.key, keys));
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('db-read-timeout')), DB_READ_TIMEOUT_MS),
  );
  const rows = await Promise.race([query, timeout]);
  return Object.fromEntries(rows.map((r) => [r.key, r.value]));
}

/* ----------------------------- Hero ----------------------------- */
export const HERO_KEYS = { heading: 'hero_heading', paragraph: 'hero_paragraph' } as const;
export const HERO_DEFAULTS = {
  heading: 'Your Gateway to World-Class Education',
  paragraph:
    'Your trusted partner for international education, admissions, recruitment, placements, and global opportunities.',
};
export type HeroContent = typeof HERO_DEFAULTS;

export async function readHeroContent(): Promise<HeroContent> {
  try {
    const map = await readKeys([HERO_KEYS.heading, HERO_KEYS.paragraph]);
    return {
      heading: map[HERO_KEYS.heading] || HERO_DEFAULTS.heading,
      paragraph: map[HERO_KEYS.paragraph] || HERO_DEFAULTS.paragraph,
    };
  } catch {
    return { ...HERO_DEFAULTS };
  }
}
export const getHeroContent = unstable_cache(readHeroContent, ['hero-content'], { tags: [SITE_CONTENT_TAG] });

/* ----------------------------- Stats ---------------------------- */
// The first stat (years of experience) is auto-calculated elsewhere; these 3 are editable.
export const STAT_KEYS = ['stat_1', 'stat_2', 'stat_3'] as const;
export const STAT_DEFAULTS = [
  { value: '2K+', label: 'Success Stories' },
  { value: '99%', label: 'Visa Success Rate' },
  { value: '100+', label: 'University Partners' },
];
export type Stat = { value: string; label: string };

export async function readStats(): Promise<Stat[]> {
  try {
    const keys = STAT_KEYS.flatMap((k) => [`${k}_value`, `${k}_label`]);
    const map = await readKeys(keys);
    return STAT_KEYS.map((k, i) => ({
      value: map[`${k}_value`] || STAT_DEFAULTS[i].value,
      label: map[`${k}_label`] || STAT_DEFAULTS[i].label,
    }));
  } catch {
    return STAT_DEFAULTS.map((s) => ({ ...s }));
  }
}
export const getStats = unstable_cache(readStats, ['site-stats'], { tags: [SITE_CONTENT_TAG] });

/* ---------------------------- Contact --------------------------- */
export const CONTACT_KEYS = {
  email: 'contact_email',
  phone: 'contact_phone',
  street: 'contact_street',
  locality: 'contact_locality',
  postal: 'contact_postal',
} as const;
export const CONTACT_DEFAULTS = {
  email: 'info@studyabroad.lk',
  phoneDisplay: '+94 77 496 3373',
  street: 'No. 109, Kirulapone Avenue',
  locality: 'Colombo 05',
  postalCode: '00500',
};
export type ContactInfo = typeof CONTACT_DEFAULTS;

export async function readContact(): Promise<ContactInfo> {
  try {
    const map = await readKeys(Object.values(CONTACT_KEYS));
    return {
      email: map[CONTACT_KEYS.email] || CONTACT_DEFAULTS.email,
      phoneDisplay: map[CONTACT_KEYS.phone] || CONTACT_DEFAULTS.phoneDisplay,
      street: map[CONTACT_KEYS.street] || CONTACT_DEFAULTS.street,
      locality: map[CONTACT_KEYS.locality] || CONTACT_DEFAULTS.locality,
      postalCode: map[CONTACT_KEYS.postal] || CONTACT_DEFAULTS.postalCode,
    };
  } catch {
    return { ...CONTACT_DEFAULTS };
  }
}
export const getContact = unstable_cache(readContact, ['site-contact'], { tags: [SITE_CONTENT_TAG] });

/** tel: href from a display phone number (keep digits and a leading +). */
export const telHref = (display: string) => 'tel:' + display.replace(/[^\d+]/g, '');
