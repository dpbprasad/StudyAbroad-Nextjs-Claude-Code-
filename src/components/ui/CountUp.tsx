"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * Counts up to a numeric value when scrolled into view, preserving any
 * prefix/suffix (e.g. "19+", "2K+", "99%"). Reduced-motion shows the final value.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) {
      setCount(target);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1300;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, match]);

  return (
    <span ref={ref} className={className}>
      {match ? count : value}
      {match ? suffix : ''}
    </span>
  );
}
