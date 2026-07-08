import { readStats } from '../../../../../lib/content';
import { StatsForm } from './StatsForm';

export const dynamic = 'force-dynamic';

export default async function StatsPage() {
  const stats = await readStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Homepage stats</h1>
        <p className="mt-1 text-sm text-slate-500">
          The headline numbers in the stats band. &ldquo;Years of Experience&rdquo; is calculated
          automatically and isn&apos;t editable here.
        </p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <StatsForm stats={stats} />
      </section>
    </div>
  );
}
