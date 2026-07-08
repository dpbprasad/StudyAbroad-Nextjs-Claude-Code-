import Link from 'next/link';
import { count, desc, eq } from 'drizzle-orm';
import { db } from '../../../lib/db';
import { leads, newsletterSubscribers } from '../../../lib/db/schema';
import { formatDateTime } from '../../../lib/format';
import { StatusBadge } from './StatusBadge';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [totalRes, newRes, contactedRes, subsRes] = await Promise.all([
    db.select({ v: count() }).from(leads),
    db.select({ v: count() }).from(leads).where(eq(leads.status, 'new')),
    db.select({ v: count() }).from(leads).where(eq(leads.status, 'contacted')),
    db.select({ v: count() }).from(newsletterSubscribers),
  ]);
  const recent = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(5);

  const stats = [
    { label: 'Total leads', value: totalRes[0].v, href: '/admin/leads' },
    { label: 'New', value: newRes[0].v, href: '/admin/leads?status=new' },
    { label: 'Contacted', value: contactedRes[0].v, href: '/admin/leads?status=contacted' },
    { label: 'Subscribers', value: subsRes[0].v, href: '/admin/subscribers' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-300"
          >
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{s.value}</p>
          </Link>
        ))}
      </div>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-semibold text-slate-900">Recent leads</h2>
          <Link href="/admin/leads" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            View all →
          </Link>
        </div>

        {recent.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-slate-500">No leads yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {recent.map((lead) => (
              <li key={lead.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">
                    {lead.firstName} {lead.lastName}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {lead.email} · {formatDateTime(lead.createdAt)}
                  </p>
                </div>
                <StatusBadge status={lead.status} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
