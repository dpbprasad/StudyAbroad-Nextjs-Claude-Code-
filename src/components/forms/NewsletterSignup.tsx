"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

/* Newsletter endpoint — PENDING (e.g. Zoho Campaigns list-subscribe URL).
   Until set, the form validates and shows a friendly "opening soon" notice. */
const NEWSLETTER_ENDPOINT = '';
const NEWSLETTER_READY = Boolean(NEWSLETTER_ENDPOINT);

type Status = 'idle' | 'invalid' | 'submitting' | 'success' | 'pending' | 'error';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('invalid');
      return;
    }
    if (!NEWSLETTER_READY) {
      setStatus('pending');
      return;
    }
    setStatus('submitting');
    try {
      await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ email }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-sm font-medium text-white">
        Thanks! You're subscribed — watch your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full md:w-auto" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'invalid') setStatus('idle');
          }}
          placeholder="Your email address"
          aria-label="Email address"
          aria-invalid={status === 'invalid'}
          autoComplete="email"
          className="h-11 w-full rounded-full border border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-slate-400 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 sm:w-72"
        />
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </div>
      {status === 'invalid' && <p className="mt-2 text-sm text-red-400" role="alert">Please enter a valid email address.</p>}
      {status === 'pending' && <p className="mt-2 text-sm text-slate-400">Subscriptions open soon — thanks for your interest!</p>}
      {status === 'error' && <p className="mt-2 text-sm text-red-400" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
