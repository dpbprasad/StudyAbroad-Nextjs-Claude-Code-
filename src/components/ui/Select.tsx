import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Option = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
};

/** Labelled select. design.md §5.4 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, options, placeholder, required, id, name, className, value, ...props },
  ref,
) {
  const selectId = id || name;
  const errorId = error && selectId ? `${selectId}-error` : undefined;
  const isEmpty = value === '' || value === undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-slate-800">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        name={name}
        required={required}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          'h-11 w-full rounded-lg border bg-white px-3.5 text-base transition focus:outline-none focus:ring-2',
          isEmpty ? 'text-slate-400' : 'text-slate-900',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
            : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/30',
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-slate-900">
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
