import Link from 'next/link';
import { CONTENT_SECTIONS, contentHref } from '../../../../lib/admin-nav';

export const dynamic = 'force-dynamic';

export default function ContentOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Content</h1>
        <p className="mt-1 text-sm text-slate-500">Edit what appears on the public website. Choose a section.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTENT_SECTIONS.map((s) => (
          <Link
            key={s.slug}
            href={contentHref(s.slug)}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-300"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-slate-900">{s.label}</h2>
              {!s.ready && (
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-400">soon</span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
              {s.ready ? 'Edit' : 'Preview'}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6" /></svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
