"use client";

import { useActionState } from 'react';
import { updateContact, type ContentState } from '../../../../../lib/actions/content';

type Contact = { email: string; phoneDisplay: string; street: string; locality: string; postalCode: string };

const fieldClass =
  'w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500';

export function ContactForm({ contact }: { contact: Contact }) {
  const [state, action, pending] = useActionState<ContentState, FormData>(updateContact, {});

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input name="email" type="email" defaultValue={contact.email} required className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input name="phone" defaultValue={contact.phoneDisplay} required className={fieldClass} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">Street address</span>
        <input name="street" defaultValue={contact.street} required className={fieldClass} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">City / area</span>
          <input name="locality" defaultValue={contact.locality} required className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">Postal code</span>
          <input name="postal" defaultValue={contact.postalCode} className={fieldClass} />
        </label>
      </div>

      {state.error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">{state.error}</p>
      )}
      {state.ok && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-green-200">Saved — updated across the site.</p>
      )}

      <div>
        <button type="submit" disabled={pending}
          className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60">
          {pending ? 'Saving…' : 'Save changes'}
        </button>
      </div>
    </form>
  );
}
