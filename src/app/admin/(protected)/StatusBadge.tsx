const styles: Record<string, string> = {
  new: 'bg-brand-50 text-brand-700 ring-brand-200',
  contacted: 'bg-green-50 text-green-700 ring-green-200',
  archived: 'bg-slate-100 text-slate-500 ring-slate-200',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ${
        styles[status] ?? styles.new
      }`}
    >
      {status}
    </span>
  );
}
