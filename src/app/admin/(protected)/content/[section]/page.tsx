import { notFound } from 'next/navigation';
import { CONTENT_SECTIONS } from '../../../../../lib/admin-nav';

export const dynamic = 'force-dynamic';

/** Handles the content sections whose editors aren't built yet (Hero has its
 *  own /content/hero route which takes precedence). */
export default async function ContentSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const meta = CONTENT_SECTIONS.find((s) => s.slug === section);
  if (!meta) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{meta.label}</h1>
        <p className="mt-1 text-sm text-slate-500">{meta.desc}</p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
          </svg>
        </div>
        <h2 className="font-semibold text-slate-900">Editor coming soon</h2>
        <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
          The <strong>{meta.label}</strong> editor is planned for the next phase. This content is managed in code for now.
        </p>
      </section>
    </div>
  );
}
