import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** Headline metric (students placed, success rate, etc.). design.md §8 trust */
export function Stat({
  value,
  label,
  className,
}: {
  value: ReactNode;
  label: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="font-display text-4xl md:text-5xl font-semibold text-brand-700 tabular-nums">
        {value}
      </span>
      <span className="mt-1 text-sm text-slate-500">{label}</span>
    </div>
  );
}
