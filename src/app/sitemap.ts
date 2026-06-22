import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

/**
 * Static sitemap of the public, indexable routes.
 * `/theme-playground` is intentionally excluded (dev only).
 * Query-driven detail pages (country-details, resources-details) share one
 * route each and are reached from their index pages; their key variants are
 * listed so search engines discover the destination/article content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-22');

  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
  ) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });

  const countries = [
    'new-zealand', 'canada', 'united-kingdom', 'usa',
    'australia', 'germany', 'netherlands', 'sweden',
  ];
  const articles = ['accommodation', 'life-abroad'];

  return [
    page('/', 1.0, 'weekly'),
    page('/aboutus', 0.8),
    page('/services', 0.9),
    page('/countries', 0.8),
    page('/country-details?country=overview', 0.7),
    ...countries.map((c) => page(`/country-details?country=${c}`, 0.6)),
    page('/resources', 0.6),
    ...articles.map((a) => page(`/resources-details?article=${a}`, 0.5)),
    page('/stories', 0.7),
    page('/faq', 0.7),
    page('/contact', 0.8),
  ];
}
