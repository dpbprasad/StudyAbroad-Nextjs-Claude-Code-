import type { Metadata } from 'next';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import ResourcesSectionBlog3 from '../../components/blog/ResourcesSectionBlog3';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export const metadata: Metadata = {
  title: 'Resources & Guides',
  description:
    'Helpful guides and tips for studying abroad — accommodation, life abroad, and preparing for your move. Practical advice from Study Abroad (Pvt) Ltd.',
  keywords: ['study abroad resources', 'study abroad tips sri lanka', 'student accommodation guide', 'life abroad guide'],
  alternates: { canonical: '/resources' },
};

export default function Resources() {
  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="Resources"
        subtitle="Useful tips and guides for your study-abroad journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />
      <ResourcesSectionBlog3 />
      <CountriesSectionFooters2 />
    </>
  );
}
