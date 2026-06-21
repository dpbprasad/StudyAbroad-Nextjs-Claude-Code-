import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

type Bg = 'white' | 'subtle' | 'tint' | 'brand';

const bgMap: Record<Bg, string> = {
  white: 'bg-white',
  subtle: 'bg-[var(--color-bg-subtle)]',
  tint: 'bg-brand-50',
  brand: 'bg-brand-900 text-slate-200',
};

/** Standard vertical section with symmetrical padding + optional container.
 *  Background variants give page rhythm (white ↔ subtle ↔ tint). See design.md §3.2. */
export function Section({
  id,
  className,
  bg = 'white',
  container = true,
  children,
}: {
  id?: string;
  className?: string;
  bg?: Bg;
  container?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn('py-16 md:py-24 lg:py-28', bgMap[bg], className)}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
