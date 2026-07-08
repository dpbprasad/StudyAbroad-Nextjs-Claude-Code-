"use client";

import { useActionState, useEffect, useRef } from 'react';
import { changeOwnPassword, type UserActionState } from '../../../../lib/actions/users';

const fieldClass =
  'w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500';

export function ChangePasswordForm() {
  const [state, action, pending] = useActionState<UserActionState, FormData>(changeOwnPassword, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">Current password</span>
        <input name="current" type="password" required autoComplete="current-password" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">New password</span>
        <input name="next" type="password" required minLength={8} autoComplete="new-password" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700">Confirm new password</span>
        <input name="confirm" type="password" required minLength={8} autoComplete="new-password" className={fieldClass} />
      </label>

      {state.error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">
          {state.error}
        </p>
      )}
      {state.ok && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-green-200">
          {state.message}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {pending ? 'Saving…' : 'Change password'}
        </button>
      </div>
    </form>
  );
}
