import { desc } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { newsletterSubscribers } from '../../../../lib/db/schema';
import { formatDate } from '../../../../lib/format';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
  const rows = await db
    .select()
    .from(newsletterSubscribers)
    .orderBy(desc(newsletterSubscribers.createdAt));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">Newsletter subscribers</h1>
        <span className="text-sm text-slate-500">
          {rows.length} {rows.length === 1 ? 'subscriber' : 'subscribers'}
        </span>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
          No subscribers yet. They&apos;ll appear here once a newsletter sign-up form is live.
        </p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Source</th>
                <th className="px-5 py-3 font-medium">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((s) => (
                <tr key={s.id}>
                  <td className="px-5 py-3 font-medium text-slate-900">{s.email}</td>
                  <td className="px-5 py-3 capitalize text-slate-600">{s.status}</td>
                  <td className="px-5 py-3 text-slate-600">{s.source ?? '—'}</td>
                  <td className="px-5 py-3 text-slate-600">{formatDate(s.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
