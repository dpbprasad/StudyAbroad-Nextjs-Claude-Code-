"use client";

import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Status = 'idle' | 'submitting' | 'success' | 'error';

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
    <section className="bg-brand-900 print:hidden">
      <Container>
        <div className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Stay in the loop
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-300">
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
                    className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-inset ring-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-slate-100 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewsletterBanner;
