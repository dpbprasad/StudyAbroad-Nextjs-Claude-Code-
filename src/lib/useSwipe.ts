"use client";

import { useRef } from 'react';
import type { TouchEvent } from 'react';

/**
 * Horizontal touch-swipe detector for carousels (mobile / tablet).
 * Returns handlers to spread onto the swipeable element:
 *   const swipe = useSwipe(next, prev);  <div {...swipe}>…</div>
 *
 * Only fires on a mostly-horizontal drag past the threshold, so vertical
 * page scrolling is never hijacked. Matches the pattern already used by
 * AccreditationSlider. Desktop keeps using the prev/next buttons.
 */
export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 45,
) {
  const start = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart: (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      start.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: (e: TouchEvent) => {
      const t = e.changedTouches[0];
      if (!start.current || !t) return;
      const dx = t.clientX - start.current.x;
      const dy = t.clientY - start.current.y;
      start.current = null;
      // mostly-horizontal + far enough → swipe; else let it be a tap/scroll
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
        (dx < 0 ? onSwipeLeft : onSwipeRight)();
      }
    },
  };
}
