import React from 'react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { CountUp } from '../ui/CountUp';
import { BUSINESS } from '../../lib/site';
import { getStats } from '../../lib/content';

const StatsBand = async () => {
  // Years of experience is auto-calculated so it never goes stale; the other
  // three stats are editable from the admin dashboard.
  const yearsOfExperience = new Date().getFullYear() - Number(BUSINESS.foundingDate);
  const editable = await getStats();
  const stats = [{ value: `${yearsOfExperience}+`, label: 'Years of Experience' }, ...editable];

  return (
    <Section bg="brand">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={i * 100} className="text-center">
            <CountUp value={stat.value} className="block font-display text-5xl font-bold tabular-nums text-white lg:text-6xl" />
            <p className="mt-2 text-base text-slate-300 lg:text-lg">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default StatsBand;
