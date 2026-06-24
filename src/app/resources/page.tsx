import type { Metadata } from 'next';
import SiteHeader from '../../components/layout/SiteHeader';
import { PageHeader } from '../../components/ui/PageHeader';
import ResourcesList from '../../components/sections/ResourcesList';
import SiteFooter from '../../components/layout/SiteFooter';

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
      <SiteHeader />
      <PageHeader
        title="Resources"
        subtitle="Useful tips and guides for your study-abroad journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />
      <ResourcesList />
      <SiteFooter />
    </>
  );
}
