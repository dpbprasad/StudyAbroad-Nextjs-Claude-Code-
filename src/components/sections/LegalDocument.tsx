import React from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { PageHeader } from '../ui/PageHeader';
import {
  legalDocs,
  type LegalKey,
  type Block,
  type ListItem,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
} from '../../lib/legal';

/**
 * Renders inline markdown links `[label](href)` and highlights unresolved
 * `[placeholder]` tokens (draft content still under review).
 */
function renderText(text: string): React.ReactNode[] {
  const re = /\[([^\]]+)\]\(([^)]+)\)|\[([^\]]+)\]/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[2] !== undefined) {
      const label = m[1];
      const href = m[2];
      const internal = href.startsWith('/');
      out.push(
        internal ? (
          <Link key={k++} href={href} className="font-medium text-brand-600 underline-offset-2 hover:text-brand-700 hover:underline">
            {label}
          </Link>
        ) : (
          <a
            key={k++}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-medium text-brand-600 underline-offset-2 hover:text-brand-700 hover:underline"
          >
            {label}
          </a>
        ),
      );
    } else {
      // unresolved placeholder
      out.push(
        <mark key={k++} className="rounded bg-gold-100 px-1 py-0.5 text-[0.9em] font-medium text-gold-800">
          {m[3]}
        </mark>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const ListItemView: React.FC<{ item: ListItem }> = ({ item }) => {
  if (typeof item === 'string') {
    return (
      <li className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
        <span>{renderText(item)}</span>
      </li>
    );
  }
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
      <span>
        <span className="font-semibold text-slate-900">
          {item.href ? (
            <a href={item.href} className="text-brand-700 hover:underline">{item.label}</a>
          ) : (
            <>{item.label}</>
          )}
          :
        </span>{' '}
        {renderText(item.text)}
      </span>
    </li>
  );
};

const BlockView: React.FC<{ block: Block }> = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p>{renderText(block.text)}</p>;
    case 'subheading':
      return <h3 className="text-base font-semibold text-slate-900">{renderText(block.text)}</h3>;
    case 'list':
      return (
        <ul className="space-y-2.5">
          {block.items.map((it, i) => (
            <ListItemView key={i} item={it} />
          ))}
        </ul>
      );
    case 'note':
      return (
        <div className="rounded-xl border-l-4 border-brand-300 bg-slate-50 p-4 text-sm text-slate-700">
          {renderText(block.text)}
        </div>
      );
    case 'callout':
      return (
        <div className="rounded-xl border-l-4 border-gold-400 bg-gold-50 p-5 font-medium text-slate-800">
          {renderText(block.text)}
        </div>
      );
  }
};

export function LegalDocument({ active }: { active: LegalKey }) {
  const doc = legalDocs[active];

  return (
    <>
      <PageHeader
        title={doc.title}
        subtitle={doc.title === 'Privacy Policy'
          ? 'How we collect, use, and protect your information.'
          : 'The terms that govern your use of our website and services.'}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: doc.title }]}
      />

      <Section bg="white">
        {/* Tabs — each links to its own URL */}
        <div className="mb-8 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 print:hidden">
          {(['privacy', 'terms'] as LegalKey[]).map((key) => {
            const tab = legalDocs[key];
            const isActive = key === active;
            return (
              <Link
                key={key}
                href={tab.path}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  isActive ? 'bg-brand-600 text-white shadow-card' : 'text-slate-600 hover:text-brand-700'
                }`}
              >
                {tab.title}
              </Link>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Desktop table of contents */}
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start print:hidden">
            <div className="rounded-2xl border border-slate-200 bg-white p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
              <nav className="flex flex-col">
                {doc.sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
                  >
                    {i + 1}. {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document body */}
          <div className="min-w-0">
            {/* Mobile / tablet table of contents (collapsible) */}
            <details className="group mb-8 rounded-2xl border border-slate-200 bg-white lg:hidden print:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700">
                On this page
                <svg className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <nav className="flex flex-col border-t border-slate-100 p-2">
                {doc.sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
                  >
                    {i + 1}. {s.heading}
                  </a>
                ))}
              </nav>
            </details>

            <p className="mb-10 text-sm text-slate-500">
              Effective date: <span className="font-medium text-slate-700">{renderText(LEGAL_EFFECTIVE_DATE)}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              Last updated: <span className="font-medium text-slate-700">{renderText(LEGAL_LAST_UPDATED)}</span>
            </p>

            <div className="space-y-12">
              {doc.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    {i + 1}. {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
                    {s.blocks.map((b, bi) => (
                      <BlockView key={bi} block={b} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default LegalDocument;
