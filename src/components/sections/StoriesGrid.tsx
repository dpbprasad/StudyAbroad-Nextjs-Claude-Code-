"use client";

import React, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { testimonials as allTestimonials } from '../../lib/testimonials';

const GOOGLE_REVIEWS_URL = 'https://share.google/uUZ4JGwh0nQbpeqQw';

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

const Stars = ({ className = '' }: { className?: string }) => (
  <div className={`flex gap-0.5 text-gold-400 ${className}`} aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
      </svg>
    ))}
  </div>
);

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const yearOrNull = (y?: string) => {
  const n = Number(y);
  return y && Number.isFinite(n) ? n : null;
};

const StoriesGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const gridRef = useRef<HTMLDivElement>(null);
  // When more cards remain, we clip the masonry at the shortest column's end so
  // no column shows an empty gap, and fade that edge. null → show everything.
  const [cutHeight, setCutHeight] = useState<number | null>(null);

  const sorted = useMemo(() => {
    return [...allTestimonials].sort((a, b) => {
      const ya = yearOrNull(a.year);
      const yb = yearOrNull(b.year);
      if (ya === null && yb === null) return 0;
      if (ya === null) return 1; // undated → always last
      if (yb === null) return -1;
      return sortOrder === 'newest' ? yb - ya : ya - yb;
    });
  }, [sortOrder]);

  const visibleStories = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  const handleLoadMore = () => setVisibleCount((p) => p + 6);
  const changeSort = (o: 'newest' | 'oldest') => {
    setSortOrder(o);
    setVisibleCount(9);
  };

  useIsomorphicLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.style.gridAutoRows = '1px';

    const recalc = () => {
      const rowGap = parseFloat(getComputedStyle(grid).rowGap) || 0;
      const items = Array.from(grid.querySelectorAll<HTMLElement>('[data-masonry-item]'));
      items.forEach((item) => {
        const content = item.firstElementChild as HTMLElement | null;
        if (!content) return;
        const span = Math.ceil((content.offsetHeight + rowGap) / (1 + rowGap));
        item.style.gridRowEnd = `span ${span}`;
      });

      // Clip at the shortest column's bottom so every column is full up to the
      // cut (no empty gap). Only when there are more cards to reveal + >1 column.
      if (hasMore && items.length) {
        const gridTop = grid.getBoundingClientRect().top;
        const cols: Record<number, number> = {};
        items.forEach((it) => {
          const r = it.getBoundingClientRect();
          const left = Math.round(r.left);
          cols[left] = Math.max(cols[left] || 0, r.bottom - gridTop);
        });
        const bottoms = Object.values(cols);
        setCutHeight(bottoms.length > 1 ? Math.floor(Math.min(...bottoms)) : null);
      } else {
        setCutHeight(null);
      }
    };

    recalc();
    const ro = new ResizeObserver(recalc);
    grid.querySelectorAll<HTMLElement>('[data-masonry-item] > *').forEach((c) => ro.observe(c));
    window.addEventListener('resize', recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', recalc);
    };
  }, [visibleCount, sortOrder, hasMore]);

  return (
    <Section bg="white">
      {/* Sort toggle */}
      <div className="mb-8 flex items-center justify-end gap-3">
        <span className="text-sm font-medium text-slate-500">Sort by</span>
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-sm">
          {(['newest', 'oldest'] as const).map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => changeSort(o)}
              aria-pressed={sortOrder === o}
              className={`rounded-full px-4 py-1.5 font-semibold transition-colors ${
                sortOrder === o ? 'bg-brand-600 text-white shadow-card' : 'text-slate-600 hover:text-brand-700'
              }`}
            >
              {o === 'newest' ? 'Newest' : 'Oldest'}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry — clipped at the shortest column + faded while more remain */}
      <div className="relative">
        <div
          ref={gridRef}
          className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          style={cutHeight ? { maxHeight: cutHeight, overflow: 'hidden' } : undefined}
        >
          {visibleStories.map((t) => (
            <div key={t.name} data-masonry-item>
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white text-center shadow-card ring-1 ring-slate-200 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card-md">
                {/* Navy top band with a curved notch that cradles the avatar */}
                <div className="relative h-16 bg-brand-900" aria-hidden="true">
                  <div className="absolute left-1/2 top-2 h-28 w-28 -translate-x-1/2 rounded-full bg-white" />
                </div>
                <img
                  className="absolute left-1/2 top-4 z-10 h-24 w-24 -translate-x-1/2 rounded-full object-cover"
                  src={t.image}
                  alt={t.name}
                />
                <div className="px-6 pb-7 pt-16 lg:px-8">
                  <p className="text-sm font-semibold text-brand-600">{t.program}</p>
                  {t.university && <p className="mt-0.5 text-xs text-slate-600">{t.university}</p>}
                  <p className="mt-1 text-xs text-slate-500">{[t.country, t.year].filter(Boolean).join(' • ')}</p>
                  <Stars className="mt-3 justify-center" />
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-slate-700">
                    {t.text}
                  </blockquote>
                  <p className="mt-5 border-t border-slate-100 pt-4 font-semibold text-slate-900">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade over the cut edge */}
        {cutHeight && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" aria-hidden="true" />
        )}
      </div>

      <div className="mt-10 flex flex-col items-center gap-5 text-center">
        {hasMore && (
          <Button onClick={handleLoadMore} variant="secondary">Load More</Button>
        )}
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-700"
        >
          <GoogleIcon />
          Read our reviews on Google
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default StoriesGrid;
