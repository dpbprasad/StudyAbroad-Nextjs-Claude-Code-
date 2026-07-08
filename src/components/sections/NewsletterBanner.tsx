"use client";

import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Section } from '../ui/Section';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const MailIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l8.69 5.6a2 2 0 002.12 0l8.69-5.6" />
    <rect x="2.25" y="4.5" width="19.5" height="15" rx="2.5" />
  </svg>
);

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error');
      setError('Please enter a valid email.');
      return;
    }
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          company: honeypotRef.current?.value ?? '', // honeypot
          source: pathname ?? undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error);
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <Section bg="subtle" className="py-14 md:py-16 lg:py-20 print:hidden">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 px-6 py-10 shadow-card-lg sm:px-10 sm:py-12 lg:px-14">
        {/* Soft decorative accents for depth */}
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/[0.07]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/[0.05]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-lg">
            <span
              aria-hidden
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20"
            >
              <MailIcon />
            </span>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Stay in the loop
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-100">
              Scholarship alerts, application deadlines, and study-abroad tips — straight to your inbox.
              No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {status === 'success' ? (
              <p className="rounded-xl bg-white/10 px-5 py-4 text-center font-medium text-white ring-1 ring-white/20">
                You&apos;re subscribed — thanks for joining! 🎉
              </p>
            ) : (
              <form onSubmit={submit} noValidate className="flex flex-col gap-3">
                {/* Honeypot anti-spam field */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-lg border-0 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-inset ring-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-100">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterBanner;
