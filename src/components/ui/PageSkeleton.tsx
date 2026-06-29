/**
 * Loading skeleton for the query-driven detail pages (country-details,
 * resources-details). Mirrors the PageHeader band + sidebar/content layout so
 * the shell stays stable while the client component hydrates.
 */
export function PageSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      {/* Header band */}
      <div className="bg-brand-900 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-3 w-40 rounded bg-white/20" />
          <div className="mt-5 h-9 w-72 max-w-full rounded bg-white/25" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sidebar (desktop) */}
          <div className="hidden space-y-3 lg:block">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-9 rounded-lg bg-slate-100" />
            ))}
          </div>
          {/* Body lines */}
          <div className="space-y-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-4 rounded bg-slate-100"
                style={{ width: `${[92, 84, 96, 70, 88, 62, 90, 80, 55][i]}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSkeleton;
