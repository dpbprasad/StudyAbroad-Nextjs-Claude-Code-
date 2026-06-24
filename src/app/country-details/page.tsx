import type { Metadata } from 'next';
import { Suspense } from 'react';
import CountryDetail from '../../components/sections/CountryDetail';

const COUNTRY_NAMES: Record<string, string> = {
  'new-zealand': 'New Zealand',
  canada: 'Canada',
  'united-kingdom': 'United Kingdom',
  usa: 'USA',
  australia: 'Australia',
  germany: 'Germany',
  netherlands: 'Netherlands',
  sweden: 'Sweden',
};

export async function generateMetadata(
  { searchParams }: { searchParams: Promise<{ country?: string }> },
): Promise<Metadata> {
  const { country } = await searchParams;
  const slug = country ?? 'overview';
  const name = COUNTRY_NAMES[slug];

  if (name) {
    return {
      title: `Study in ${name} from Sri Lanka`,
      description: `Plan your studies in ${name} with Study Abroad (Pvt) Ltd — university admissions, student visa guidance, costs and intakes. Trusted Sri Lankan consultancy since 2007.`,
      keywords: [`study in ${name.toLowerCase()}`, `${name.toLowerCase()} student visa sri lanka`, `universities in ${name.toLowerCase()}`],
      alternates: { canonical: `/country-details?country=${slug}` },
    };
  }

  return {
    title: 'Study Destinations',
    description:
      'Explore top study-abroad destinations — the UK, Canada, USA, Australia, Germany, Netherlands, Sweden and New Zealand — with expert guidance from Study Abroad (Pvt) Ltd.',
    keywords: ['study abroad destinations', 'best countries to study abroad', 'study overseas from sri lanka'],
    alternates: { canonical: '/country-details' },
  };
}

export default function CountryDetails() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-white" />}>
        <CountryDetail />
      </Suspense>
    </>
  );
}
