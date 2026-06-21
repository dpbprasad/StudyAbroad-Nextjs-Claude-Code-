import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** Small uppercase category label above section headers, with a gold tick. design.md §5.3 */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand-600',
        className,
      )}
    >
      <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
      {children}
    </span>
  );
}
