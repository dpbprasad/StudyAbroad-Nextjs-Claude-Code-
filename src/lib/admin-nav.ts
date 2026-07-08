/** Editable content sections — drives the sidebar "Content" submenu and the
 *  content overview page. `ready` flags which editors are built vs coming next. */
export type ContentSection = {
  slug: string;
  label: string;
  desc: string;
  ready: boolean;
};

export const CONTENT_SECTIONS: ContentSection[] = [
  { slug: 'hero', label: 'Homepage Hero', desc: 'Headline & intro paragraph', ready: true },
  { slug: 'contact', label: 'Contact details', desc: 'Address, phone, email', ready: true },
  { slug: 'stats', label: 'Homepage stats', desc: 'Headline numbers', ready: true },
  { slug: 'testimonials', label: 'Testimonials', desc: 'Success stories', ready: false },
  { slug: 'articles', label: 'Articles', desc: 'Resource / blog posts', ready: false },
  { slug: 'countries', label: 'Countries', desc: 'Destination pages', ready: false },
  { slug: 'faq', label: 'FAQ', desc: 'Questions & answers', ready: false },
];

export const contentHref = (slug: string) => `/admin/content/${slug}`;
