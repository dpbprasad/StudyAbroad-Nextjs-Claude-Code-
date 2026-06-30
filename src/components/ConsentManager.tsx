'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

/**
 * Cookie-consent gate. Non-essential third parties (Zoho live chat today,
 * analytics later) load ONLY after the visitor accepts. The choice is stored in
 * localStorage so the banner shows once. To add analytics later, render its
 * <Script> in the same `accepted` block.
 */
const KEY = 'cookie-consent';
type Consent = 'accepted' | 'declined';

const ZOHO_SRC =
  'https://salesiq.zohopublic.com/widget?wc=siq174f78e9bbdc7a369582d2b56f29d0011d877dfa15b1bfae5334a66e91a7db68';

export default function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Consent | null = null;
    try {
      stored = localStorage.getItem(KEY) as Consent | null;
    } catch {
      /* localStorage unavailable */
    }
    setConsent(stored);
    setReady(true);
  }, []);

  const choose = (value: Consent) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
  };

  return (
    <>
      {/* Non-essential: Zoho SalesIQ live chat — only after consent */}
      {consent === 'accepted' && (
        <>
          <Script id="zoho-salesiq-init" strategy="afterInteractive">
            {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
          </Script>
          <Script id="zsiqscript" src={ZOHO_SRC} strategy="afterInteractive" />
        </>
      )}

      {/* Consent banner — shown until a choice is made */}
      {ready && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 print:hidden">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card-lg sm:flex-row sm:items-center sm:gap-4 sm:p-5">
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              We use cookies to power our live chat and improve your experience. See our{' '}
              <Link href="/privacy-policy" className="font-medium text-brand-600 underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => choose('declined')}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
              >
                Decline
              </button>
              <button
                onClick={() => choose('accepted')}
                className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
