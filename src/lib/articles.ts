/**
 * Single source of truth for resource/blog articles.
 * Used by the home "Recent Articles" carousel, the Resources list page, and the
 * article detail page — so an article's metadata lives in ONE place.
 * (The long-form body content for the detail page lives in ResourceArticle.tsx,
 * keyed by `id`.)
 */
export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  /** Card description (home + Resources cards). */
  desc: string;
  /** Detail-page sub-heading. */
  tagline: string;
  /** Detail-page short excerpt. */
  excerpt: string;
}

export const articles: Article[] = [
  {
    id: 'accommodation',
    title: 'Accommodation Support',
    date: '11 Jun 2026',
    category: 'Accommodation',
    image: '/images/articles/accommodation.jpg',
    desc: 'Discover safe, affordable, and conveniently located student housing with Study Abroad (Pvt) Ltd. Our accommodation services connect you with trusted partners and university housing for a comfortable transition.',
    tagline: 'Why Students Choose Our Accommodation Service',
    excerpt: 'How we help you understand and compare accommodation options in your study destination.',
  },
  {
    id: 'life-abroad',
    title: 'Life Abroad',
    date: '10 Jun 2026',
    category: 'Life Abroad',
    image: '/images/articles/life-abroad.jpg',
    desc: 'Embrace the adventure of study abroad. Learn how to handle daily responsibilities, overcome culture shock, build international friendships, and navigate university orientations to feel right at home.',
    tagline: 'Feeling Lost? How to Make it Work',
    excerpt: 'Preparing students for independent living, culture, budgeting, wellbeing, and more.',
  },
];
