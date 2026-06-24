import type { Metadata } from 'next';
import { PageHeader } from '../../components/ui/PageHeader';
import StoriesGrid from '../../components/sections/StoriesGrid';

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Real success stories from Sri Lankan students placed by Study Abroad (Pvt) Ltd in the UK, Canada, USA, New Zealand and beyond — in their own words.',
  keywords: ['study abroad success stories', 'student testimonials sri lanka', 'student visa success stories'],
  alternates: { canonical: '/stories' },
};

export default function Stories() {
  return (
    <>
      <PageHeader
        title="Success Stories"
        subtitle="Real student voices from across our study destinations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Stories' }]}
      />
      <StoriesGrid />
    </>
  );
}
