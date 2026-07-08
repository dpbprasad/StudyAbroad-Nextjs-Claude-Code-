import type { Metadata } from 'next';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Admin sign in',
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <img src="/logo.svg" alt="Study Abroad" className="mx-auto h-12 w-auto object-contain" />
          <h1 className="mt-5 text-xl font-semibold text-slate-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to manage leads and content</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
          <LoginForm next={next ?? ''} />
        </div>
      </div>
    </div>
  );
}
