import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

/**
 * Two-up section: a full-bleed image on one side, content on the other.
 * Used by Why Us and Services. design.md §11.
 *
 * Note: the image uses a CSS background (no next/image) to avoid remote-domain
 * config for the current Unsplash placeholders — swap to next/image during the
 * dedicated imagery pass once real photos + next.config domains are in place.
 */
export function SplitSection({
  image,
  imageAlt,
  imageLeft = false,
  eyebrow,
  title,
  children,
  bg = 'white',
}: {
  image: string;
  imageAlt?: string;
  imageLeft?: boolean;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  bg?: 'white' | 'subtle';
}) {
  return (
    <section className={cn('relative overflow-hidden', bg === 'subtle' ? 'bg-[var(--color-bg-subtle)]' : 'bg-white')}>
      {/* Image half (full-bleed on lg) */}
      <div
        role="img"
        aria-label={imageAlt}
        className={cn(
          'relative h-72 w-full bg-cover bg-center sm:h-96 lg:absolute lg:top-0 lg:bottom-0 lg:h-auto lg:w-1/2',
          imageLeft ? 'lg:left-0' : 'lg:right-0',
        )}
        style={{ backgroundImage: `url("${image}")` }}
      />

      {/* Content half */}
      <Container>
        <div className={cn('py-16 lg:w-1/2 lg:py-24', imageLeft ? 'lg:ml-auto lg:pl-12' : 'lg:pr-12')}>
          <div className="lg:max-w-xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="mb-8 mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
