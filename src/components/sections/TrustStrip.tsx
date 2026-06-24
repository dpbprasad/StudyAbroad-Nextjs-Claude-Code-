import React from 'react';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type Pillar = { title: string; desc: string; color: string; icon: React.ReactNode };

const pillars: Pillar[] = [
  {
    title: 'Experience',
    color: '#0A295A',
    desc: 'Years of proven success and global exposure.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Expertise',
    color: '#196054',
    desc: 'Specialized knowledge for your global journey.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    color: '#D21010',
    desc: 'Trusted guidance at every step.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

/** Trust strip — three credibility pillars shown just under the hero. design.md §11 */
const TrustStrip: React.FC = () => (
  <section className="bg-[var(--color-bg-subtle)] py-12 lg:py-14">
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-slate-300/70">
        {pillars.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className="flex flex-col items-center px-6 py-6 text-center sm:py-2"
          >
            <span
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_6px_16px_rgba(15,23,42,0.18)]"
              style={{ backgroundColor: p.color }}
            >
              {p.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-brand-700">{p.title}</h3>
            <p className="mt-1.5 max-w-xs text-[15px] leading-relaxed text-slate-600">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default TrustStrip;
