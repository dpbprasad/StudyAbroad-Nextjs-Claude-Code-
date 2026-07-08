import type { Metadata } from 'next';
import { requireSession } from '../../../lib/auth';
import { AdminShell } from './AdminShell';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();

  return (
    <AdminShell name={session.name} email={session.email} role={session.role}>
      {children}
    </AdminShell>
  );
}
