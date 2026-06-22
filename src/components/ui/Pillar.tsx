import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** Icon + title + description row. Used in Why Us, Services, Accommodation. design.md §11 */
export function Pillar({
  icon,
  title,
  description,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn('group flex items-start gap-5', className)}>
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-smooth group-hover:scale-105">
        {icon}
      </span>
      <div>
        <h3 className="mb-1.5 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-[15px] leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
