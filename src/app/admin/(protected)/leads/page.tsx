import Link from 'next/link';
import { desc, eq } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { leads, type Lead } from '../../../../lib/db/schema';
import { updateLeadStatus } from '../../../../lib/actions/leads';
import { formatDateTime } from '../../../../lib/format';
import { StatusBadge } from '../StatusBadge';

export const dynamic = 'force-dynamic';

const FILTERS = [
  { key: undefined, label: 'All' },
  { key: 'new', label: 'New' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'archived', label: 'Archived' },
] as const;

const btn =
  'rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100';

function StatusAction({ id, status, label }: { id: string; status: string; label: string }) {
  return (
    <form action={updateLeadStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="status" value={status} />
      <button type="submit" className={btn}>
        {label}
      </button>
    </form>
  );
}

function actionsFor(lead: Lead) {
  switch (lead.status) {
    case 'new':
      return [
        <StatusAction key="c" id={lead.id} status="contacted" label="Mark contacted" />,
        <StatusAction key="a" id={lead.id} status="archived" label="Archive" />,
      ];
    case 'contacted':
      return [
        <StatusAction key="r" id={lead.id} status="new" label="Reopen" />,
        <StatusAction key="a" id={lead.id} status="archived" label="Archive" />,
      ];
    default: // archived
      return [<StatusAction key="r" id={lead.id} status="new" label="Reopen" />];
  }
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-slate-700">{children}</dd>
    </div>
  );
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const active = ['new', 'contacted', 'archived'].includes(status ?? '') ? status : undefined;

  const rows = active
    ? await db.select().from(leads).where(eq(leads.status, active)).orderBy(desc(leads.createdAt))
    : await db.select().from(leads).orderBy(desc(leads.createdAt));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">Leads</h1>
        <span className="text-sm text-slate-500">
          {rows.length} {rows.length === 1 ? 'lead' : 'leads'}
        </span>
      </div>

      {/* Filter tabs */}
      <div className="inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-white p-1">
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          return (
            <Link
              key={f.label}
              href={f.key ? `/admin/leads?status=${f.key}` : '/admin/leads'}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-brand-700'
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
          No leads{active ? ` with status "${active}"` : ''} yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {rows.map((lead) => (
            <li key={lead.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {lead.firstName} {lead.lastName}
                  </p>
                  <p className="text-sm text-slate-500">
                    {formatDateTime(lead.createdAt)} · <span className="capitalize">{lead.formType}</span> form
                  </p>
                </div>
                <StatusBadge status={lead.status} />
              </div>

              <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <Field label="Email">
                  <a href={`mailto:${lead.email}`} className="text-brand-600 hover:underline">
                    {lead.email}
                  </a>
                </Field>
                <Field label="Phone">
                  <a href={`tel:${lead.phone}`} className="text-brand-600 hover:underline">
                    {lead.phone}
                  </a>
                </Field>
                {lead.levelOfStudy && <Field label="Level of study">{lead.levelOfStudy}</Field>}
                {lead.currentQualification && (
                  <Field label="Qualification">{lead.currentQualification}</Field>
                )}
                {lead.preferredCountry && <Field label="Preferred country">{lead.preferredCountry}</Field>}
                {lead.source && <Field label="Source">{lead.source}</Field>}
              </dl>

              {lead.message && (
                <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                  {lead.message}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                {actionsFor(lead)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
