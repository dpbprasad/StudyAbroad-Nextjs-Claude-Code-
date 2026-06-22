import React from 'react';
import Link from 'next/link';
import { SplitSection } from '../ui/SplitSection';
import { Pillar } from '../ui/Pillar';
import { Reveal } from '../ui/Reveal';

interface IndexSectionFeatures6Props {
    imageLeft?: boolean;
}

const pillars = [
  {
    title: 'Decades of Word-of-Mouth Trust',
    description:
      'Built on student referrals and parent confidence, delivering personalized academic guidance since 2007.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Director-Led Visa Compliance',
    description:
      'Every documentation audit and case file undergoes direct managing director supervision for maximum visa approval.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Bespoke University Pathways',
    description:
      'Access our extensive network of top institutions across the UK, USA, Canada, and Europe for tailored placements.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

const IndexSectionFeatures6: React.FC<IndexSectionFeatures6Props> = ({ imageLeft = false }) => {
  return (
    <SplitSection
      imageLeft={imageLeft}
      bg="subtle"
      image="https://images.unsplash.com/photo-1702471897388-5d9c50ea434e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8d29ya3xlbnwwfDJ8fHwxNzQ4OTYzODEzfDA&ixlib=rb-4.1.0&q=80&h=640&w=640"
      imageAlt="Study Abroad counsellors guiding students"
      eyebrow="Why Choose Us"
      title={
        <>
          Why students choose
          <br />
          Study Abroad (Pvt) Ltd
        </>
      }
    >
      <Reveal>
        <div className="flex flex-col gap-7">
          {pillars.map((pillar) => (
            <Pillar key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/aboutus"
            className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </SplitSection>
  );
};

export default IndexSectionFeatures6;
