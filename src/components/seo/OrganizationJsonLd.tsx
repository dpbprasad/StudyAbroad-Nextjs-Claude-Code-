import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, BUSINESS } from '../../lib/site';

/**
 * Site-wide structured data (JSON-LD) as a @graph: Organization/LocalBusiness
 * + WebSite. Helps Google (Knowledge Panel, local pack, Maps) and generative
 * engines (ChatGPT, Perplexity, AI Overviews) understand the business.
 * Rendered once, site-wide, from the root layout.
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        image: `${SITE_URL}/images/hero-bg.jpg`,
        description: SITE_DESCRIPTION,
        slogan: 'Global Minds. Global Futures.',
        foundingDate: BUSINESS.foundingDate,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        areaServed: { '@type': 'Country', name: BUSINESS.address.countryName },
        knowsAbout: [
          'Study abroad consulting',
          'Student visa guidance',
          'University admissions',
          'Overseas higher education',
          'Scholarship guidance',
        ],
        ...(BUSINESS.sameAs.length > 0 ? { sameAs: BUSINESS.sameAs } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
