"use client";

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export type Accreditation =
  | { id: string; type: 'icef'; accountId: string }
  | { id: string; type: 'image'; src: string; alt: string };

const BADGE_H = 'h-32'; // 128px — keep all badges a consistent height

function BadgeItem({ item }: { item: Accreditation }) {
  if (item.type === 'image') {
    return <img src={item.src} alt={item.alt} className={`${BADGE_H} w-auto object-contain`} />;
  }
  // ICEF live badge — only in production (script serves on the registered domain);
  // static PNG fallback in dev to avoid its localhost JSON error.
  if (process.env.NODE_ENV === 'production') {
    return (
      <>
        <span id="iasBadge" data-account-id={item.accountId} className="inline-block" />
        <Script src="https://www-cdn.icef.com/scripts/iasbadgeid.js" strategy="lazyOnload" />
      </>
    );
  }
  return <img src="/images/icef-badge.png" alt="ICEF Accredited Agency" className={`${BADGE_H} w-auto object-contain`} />;
}

/**
 * Accreditation badges. Single badge → static. Multiple → calm auto-rotation
 * (no controls): pauses on hover/focus, disabled for reduced-motion, manual
 * swipe enabled. Empty → null (footer hides the column). design.md §13.
 * (Swipe-hint gesture removed for now — to revisit later.)
 */
export function AccreditationSlider({ items }: { items: Accreditation[] }) {
  const multiple = items.length > 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef(0);

  // reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // calm auto-rotation
  useEffect(() => {
    if (!multiple || paused || reduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [multiple, paused, reduced, items.length]);

  if (items.length === 0) return null;

  if (!multiple) {
    return <div className={`flex ${BADGE_H} items-center`}>{<BadgeItem item={items[0]} />}</div>;
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      setIndex((i) =>
        dx < 0 ? (i + 1) % items.length : (i - 1 + items.length) % items.length,
      );
    }
  };

  return (
    <div
      className="relative w-36 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={`${BADGE_H} overflow-hidden`} aria-roledescription="carousel" aria-label="Accreditations">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex h-full w-full flex-shrink-0 items-center justify-center">
              <BadgeItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
