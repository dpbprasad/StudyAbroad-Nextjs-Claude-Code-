"use client";

import { useActionState, useEffect, useRef } from 'react';
import {
  updateUserRole,
  deleteUser,
  resetUserPassword,
  type UserActionState,
} from '../../../../lib/actions/users';

type Props = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  created: string;
  currentUserId: string;
  adminCount: number;
};

const smallControl =
  'rounded-lg border border-slate-300 px-2.5 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100';

export function UserRow({ id, name, email, role, created, currentUserId, adminCount }: Props) {
  const isSelf = id === currentUserId;
  const isLastAdmin = role === 'admin' && adminCount <= 1;

  const [resetState, resetAction, resetPending] = useActionState<UserActionState, FormData>(
    resetUserPassword,
    {},
  );
  const resetRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (resetState.ok && resetRef.current) resetRef.current.value = '';
  }, [resetState.ok]);

  return (
    <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium text-slate-900">
            {name} {isSelf && <span className="text-xs font-normal text-slate-400">(you)</span>}
          </p>
          <p className="truncate text-sm text-slate-500">
            {email} · joined {created}
          </p>
        </div>

        {isLastAdmin ? (
          <span
            title="The only admin — role can't be changed"
            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-brand-200"
          >
            Admin
          </span>
        ) : (
          <form action={updateUserRole} className="flex items-center gap-2">
            <input type="hidden" name="id" value={id} />
            <select
              name="role"
              defaultValue={role}
              className="rounded-lg border border-slate-300 px-2 py-1 text-sm text-slate-700"
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
            <button type="submit" className={smallControl}>
              Update
            </button>
          </form>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-2 border-t border-slate-100 pt-3">
        <form action={resetAction} className="flex items-end gap-2">
          <input type="hidden" name="id" value={id} />
          <label className="flex flex-col gap-1">
            <span className="text-xs text-slate-500">Reset password</span>
            <input
              ref={resetRef}
              name="password"
              type="text"
              placeholder="New password"
              minLength={8}
              autoComplete="off"
              className="rounded-lg border border-slate-300 px-2 py-1 text-sm text-slate-900"
            />
          </label>
          <button type="submit" disabled={resetPending} className={`${smallControl} disabled:opacity-60`}>
            {resetPending ? 'Setting…' : 'Set'}
          </button>
          {resetState.ok && <span className="pb-1 text-xs text-green-600">{resetState.message}</span>}
          {resetState.error && <span className="pb-1 text-xs text-red-600">{resetState.error}</span>}
        </form>

        {!isSelf && !isLastAdmin && (
          <form
            action={deleteUser}
            onSubmit={(e) => {
              if (!window.confirm(`Delete ${email}? This cannot be undone.`)) e.preventDefault();
            }}
            className="ml-auto"
          >
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              className="rounded-lg border border-red-200 px-2.5 py-1 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              Delete
            </button>
          </form>
        )}
      </div>
    </li>
  );
}
