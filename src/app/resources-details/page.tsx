import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResourceArticle from '../../components/sections/ResourceArticle';

const ARTICLES: Record<string, { title: string; description: string }> = {
  accommodation: {
    title: 'Accommodation Support',
    description:
      'Find safe, affordable student housing abroad with Study Abroad (Pvt) Ltd — university housing, trusted partners and tips for a smooth move.',
  },
  'life-abroad': {
    title: 'Life Abroad',
    description:
      'Prepare for student life abroad — handling daily responsibilities, culture shock, friendships and university orientation, with guidance from Study Abroad (Pvt) Ltd.',
  },
};

export async function generateMetadata(
  { searchParams }: { searchParams: Promise<{ article?: string }> },
): Promise<Metadata> {
  const { article } = await searchParams;
  const entry = article ? ARTICLES[article] : undefined;

  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      alternates: { canonical: `/resources-details?article=${article}` },
    };
  }

  return {
    title: 'Resources & Guides',
    description: 'Helpful guides and tips for studying abroad from Study Abroad (Pvt) Ltd.',
    alternates: { canonical: '/resources-details' },
  };
}

export default function ResourcesDetails() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-white" />}>
        <ResourceArticle />
      </Suspense>
    </>
  );
}
