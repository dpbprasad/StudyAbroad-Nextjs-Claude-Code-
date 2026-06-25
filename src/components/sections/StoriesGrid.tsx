"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { testimonials } from '../../lib/testimonials';

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

// Measure before paint on the client (avoids a layout flash); plain effect on the server.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const StoriesGrid: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(9);
    const gridRef = useRef<HTMLDivElement>(null);

    const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

    const visibleStories = testimonials.slice(0, visibleCount);

    /*
     * Row-major masonry via CSS grid row-spans.
     * DOM order stays the sorted order (newest → oldest), so cards read
     * left-to-right newest-first and the markup is SSR-stable (no post-hydration
     * reshuffle, no multi-column paint bug). JS only sets each card's row-span
     * from its measured height; it never reorders the DOM.
     */
    useIsomorphicLayoutEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Enable masonry packing in JS only. The server/no-JS markup keeps normal
        // auto-height rows so cards (and the buttons below) are laid out correctly
        // before hydration — no collapsed-grid flash.
        grid.style.gridAutoRows = '1px';

        const recalc = () => {
            const rowGap = parseFloat(getComputedStyle(grid).rowGap) || 0;
            grid.querySelectorAll<HTMLElement>('[data-masonry-item]').forEach((item) => {
                const content = item.firstElementChild as HTMLElement | null;
                if (!content) return;
                const span = Math.ceil((content.offsetHeight + rowGap) / (1 + rowGap));
                item.style.gridRowEnd = `span ${span}`;
            });
        };

        recalc();

        // Re-measure when a card's height changes (fonts/images loading) or on resize.
        const ro = new ResizeObserver(recalc);
        grid.querySelectorAll<HTMLElement>('[data-masonry-item] > *').forEach((c) => ro.observe(c));
        window.addEventListener('resize', recalc);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', recalc);
        };
    }, [visibleCount]);

    return (
        <Section bg="white">
            <div
                ref={gridRef}
                className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
                {visibleStories.map((t, idx) => (
                    <div key={t.name} data-masonry-item>
                        <Reveal delay={Math.min(idx, 6) * 70}>
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
                        </Reveal>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 text-center">
                {visibleCount < testimonials.length && (
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
