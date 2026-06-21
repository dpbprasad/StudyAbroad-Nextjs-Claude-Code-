import React from 'react';
import { Section } from '../ui/Section';

const stats = [
  { value: '19+', label: 'Years of Experience' },
  { value: '2K+', label: 'Success Stories' },
  { value: '99%', label: 'Visa Success Rate' },
  { value: '100+', label: 'University Partners' },
];

const IndexSectionStats11: React.FC = () => {
  return (
    <Section bg="brand">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-5xl font-bold tabular-nums text-white lg:text-6xl">
              {stat.value}
            </div>
            <p className="mt-2 text-base text-slate-300 lg:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default IndexSectionStats11;
