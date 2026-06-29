import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

const popular = [
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/country-details?country=overview' },
  { label: 'Success Stories', href: '/stories' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
];

export default function NotFound() {
  return (
    <Section bg="white">
      <div className="mx-auto flex max-w-xl flex-col items-center py-12 text-center md:py-20">
        <p className="font-display text-7xl font-bold tracking-tight text-brand-600 md:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          This page took a gap year
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">Talk to us</Button>
        </div>

        <div className="mt-12 w-full border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Popular pages</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {popular.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
