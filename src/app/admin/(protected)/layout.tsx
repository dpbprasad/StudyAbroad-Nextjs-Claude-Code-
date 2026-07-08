import type { Metadata } from 'next';
import Link from 'next/link';
import { requireSession } from '../../../lib/auth';
import { logout } from '../../../lib/actions/auth';
import { AdminNav } from './AdminNav';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <img src="/logo.svg" alt="Study Abroad" className="h-8 w-auto object-contain" />
            <AdminNav role={session.role} />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/account"
              className="hidden rounded-lg px-2 py-1 text-right transition-colors hover:bg-slate-100 sm:block"
              title="Your account"
            >
              <p className="text-sm font-medium leading-tight text-slate-800">{session.name}</p>
              <p className="text-xs capitalize leading-tight text-slate-500">{session.role}</p>
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
