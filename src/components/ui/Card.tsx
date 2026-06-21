import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** Default content card — white surface, slate border, soft lift on hover. design.md §5.2 */
export function Card({
  as: Tag = 'div' as ElementType,
  interactive = true,
  className,
  children,
}: {
  as?: ElementType;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        'group relative flex flex-col rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-card transition duration-300',
        interactive && 'hover:-translate-y-1 hover:shadow-card-md',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
