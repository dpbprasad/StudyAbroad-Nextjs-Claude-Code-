'use client';

import { useEffect } from 'react';
import { Button } from '../components/ui/Button';

/**
 * Route-level error boundary. Catches runtime errors in any page segment and
 * shows a branded fallback with a retry, instead of a blank crash.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for debugging / future error reporting.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-center justify-center bg-white px-4 py-16 lg:min-h-[calc(100svh-6rem)]">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </span>
        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          An unexpected error occurred on our end. Please try again — if it keeps happening, contact us and we’ll help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="secondary">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
