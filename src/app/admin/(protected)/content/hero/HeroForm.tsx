"use client";

import { useActionState } from 'react';
import { updateHeroContent, type ContentState } from '../../../../../lib/actions/content';

const fieldClass =
  'w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500';

export function HeroForm({ heading, paragraph }: { heading: string; paragraph: string }) {
  const [state, action, pending] = useActionState<ContentState, FormData>(updateHeroContent, {});

  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">Heading</span>
        <textarea name="heading" rows={2} defaultValue={heading} maxLength={200} className={fieldClass} />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">Paragraph</span>
        <textarea name="paragraph" rows={3} defaultValue={paragraph} maxLength={600} className={fieldClass} />
      </label>

      {state.error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">{state.error}</p>
      )}
      {state.ok && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-green-200">Saved — the homepage is updated.</p>
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
