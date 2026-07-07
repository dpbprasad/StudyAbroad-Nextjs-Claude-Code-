"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

/**
 * Fade-up on scroll into view. Subtle, runs once, reduced-motion aware.
 * Wrap a section's content or map cards with a staggered `delay`. design.md §4
 *
 * Tuned to stay in sync with the scroll: it triggers the moment the element
 * reaches the viewport (with a small head-start so fast flicks don't out-run
 * it) and uses a short travel + duration so the motion lands quickly instead
 * of trailing behind.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false); // animation finished → drop will-change

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      setSettled(true);
      return;
    }
    // Already in view on mount (above-the-fold) → reveal immediately. Don't rely on
    // an IntersectionObserver callback alone; for tall/first elements it can fail to
    // fire until the next scroll, leaving the element stuck invisible.
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportH && rect.bottom > 0) {
      setShown(true);
      return;
    }
    // Fire as soon as the element reaches the viewport. threshold 0 = the instant
    // its top edge crosses in (no "wait until 12% visible" lag); the +40px bottom
    // margin starts it a touch early so a quick flick never scrolls past an
    // element that hasn't animated yet.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Promote to its own layer only while it's actually animating, then drop the
  // hint. Leaving `will-change` on every wrapper permanently keeps dozens of
  // composited layers alive, which can make the scroll itself feel less smooth.
  useEffect(() => {
    if (!shown || settled) return;
    const t = window.setTimeout(() => setSettled(true), delay + 800);
    return () => window.clearTimeout(t);
  }, [shown, settled, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-smooth motion-reduce:transition-none',
        !settled && 'will-change-[opacity,transform]',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
