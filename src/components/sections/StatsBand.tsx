import React from 'react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { CountUp } from '../ui/CountUp';
import { BUSINESS } from '../../lib/site';

// Auto-calculated from the founding year so it never goes stale.
const yearsOfExperience = new Date().getFullYear() - Number(BUSINESS.foundingDate);

const stats = [
  { value: `${yearsOfExperience}+`, label: 'Years of Experience' },
  { value: '2K+', label: 'Success Stories' },
  { value: '99%', label: 'Visa Success Rate' },
  { value: '100+', label: 'University Partners' },
];

const StatsBand: React.FC = () => {
  return (
    <Section bg="brand">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="text-center">
            <CountUp value={stat.value} className="block font-display text-5xl font-bold tabular-nums text-white lg:text-6xl" />
            <p className="mt-2 text-base text-slate-300 lg:text-lg">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default StatsBand;
