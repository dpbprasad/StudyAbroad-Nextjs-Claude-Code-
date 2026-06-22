import React from 'react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: 'Explore Study Destinations',
    desc: 'Discover top universities and programs across 10+ countries, matched to your profile and goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Find Your University',
    desc: 'Get matched to the right universities and programs for your profile, budget, and career goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: 'Scholarships & Funding Options',
    desc: 'Unlock global funding opportunities and scholarships to make world-class education accessible.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Visa Assistance',
    desc: 'From accommodation to arrival planning, we guide you through every step before you board.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const IndexSectionHeaders2: React.FC = () => {
  return (
    <Section bg="white">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 80} className="group flex items-start gap-5">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-smooth group-hover:scale-105">
              {feature.icon}
            </span>
            <div>
              <h3 className="mb-1.5 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{feature.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default IndexSectionHeaders2;
