import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** Page-width wrapper — see design.md §3.2 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
