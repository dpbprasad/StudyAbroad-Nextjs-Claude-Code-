import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

type Crumb = { label: string; href?: string };

/** Navy page-header band for sub-pages: breadcrumb + title (+ optional subtitle).
 *  Separates content from the white nav and gives each page a consistent top. design.md §navigation */
export function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="relative py-12 lg:py-16">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                {breadcrumbs.map((c, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={i} className="flex items-center gap-1.5">
                      {c.href && !isLast ? (
                        <Link href={c.href} className="text-slate-400 transition-colors hover:text-white">
                          {c.label}
                        </Link>
                      ) : (
                        <span className="font-medium text-white" aria-current={isLast ? 'page' : undefined}>
                          {c.label}
                        </span>
                      )}
                      {!isLast && (
                        <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {subtitle && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
        </div>
      </Container>
    </section>
  );
}
