import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { SITE_URL } from '../../lib/site';

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
  const breadcrumbJsonLd =
    breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
          })),
        }
      : null;

  return (
    <section className="relative overflow-hidden bg-brand-900 print:overflow-visible print:bg-white">
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl print:hidden" aria-hidden="true" />
      <Container>
        <div className="relative py-12 lg:py-16 print:py-0">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4 animate-fade-up print:hidden">
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
          <h1 className="animate-fade-up font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] print:text-slate-900" style={{ animationDelay: '100ms' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 print:text-slate-600" style={{ animationDelay: '200ms' }}>
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
