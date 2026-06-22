import React from 'react';
import Link from 'next/link';
import { SplitSection } from '../ui/SplitSection';
import { Pillar } from '../ui/Pillar';
import { Reveal } from '../ui/Reveal';

interface IndexSectionServicesTestProps {
    imageLeft?: boolean;
}

const pillars = [
  {
    title: 'Academic Planning & Admissions Placement',
    description:
      'Map your optimal course pathway, match with top accredited global universities, and secure offer letters with expert application guidance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Director-Led Visa & Financial Compliance',
    description:
      'Receive step-by-step financial portfolio audits, proof of funds formatting, and mock interview practice under direct director oversight.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Travel & Post-Arrival Integration',
    description:
      'Settle in smoothly with luggage allowances, pre-departure orientation, airport pickups, and safe accommodation matching.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const IndexSectionServicesTest: React.FC<IndexSectionServicesTestProps> = ({ imageLeft = false }) => {
  return (
    <SplitSection
      imageLeft={imageLeft}
      bg="subtle"
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=640&h=640"
      imageAlt="Study Abroad counsellor advising a student"
      eyebrow="Our Services"
      title="Our Study Abroad & Visa Services"
    >
      <Reveal>
        <div className="flex flex-col gap-7">
          {pillars.map((pillar) => (
            <Pillar key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Explore Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </SplitSection>
  );
};

export default IndexSectionServicesTest;
