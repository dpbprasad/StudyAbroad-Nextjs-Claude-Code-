/**
 * Single source of truth for site-wide constants used by SEO
 * (metadata, canonical URLs, sitemap, robots, structured data).
 * Change the domain in ONE place if it ever moves.
 */
export const SITE_URL = 'https://www.studyabroad.lk';

export const SITE_NAME = 'Study Abroad (Pvt) Ltd';

export const SITE_DESCRIPTION =
  "Study Abroad (Pvt) Ltd is Sri Lanka's leading student visa and university placement consultancy. Admissions, recruitment and visa guidance for the UK, Canada, USA, Australia, Germany, Netherlands, Sweden and New Zealand. Established in 2007.";

/** Business / contact details — reused in structured data and the footer. */
export const BUSINESS = {
  legalName: 'Study Abroad (Pvt) Ltd',
  foundingDate: '2007',
  email: 'info@studyabroad.lk',
  phone: '+94774963373',
  phoneDisplay: '+94 77 496 3373',
  address: {
    street: 'No. 109, Kirulapone Avenue',
    locality: 'Colombo 05',
    postalCode: '00500',
    country: 'LK',
    countryName: 'Sri Lanka',
  },
  geo: { lat: 6.8827997, lng: 79.8753515 },
  /** Official social profile URLs — kept in sync with the footer; emitted as schema.org sameAs. */
  sameAs: [
    'https://www.facebook.com/studyabroad.sl',
    'https://www.instagram.com/studyabroadpvtltd',
    'https://www.youtube.com/@StudyAbroadpvtltd',
    'https://www.tiktok.com/@study_abroad_pvt_ltd',
    'https://www.linkedin.com/company/study-abroad-pvt-ltd/',
  ] as string[],
};
