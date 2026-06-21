import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

/** Labelled text input with error slot. Label above field, error below. design.md §5.4 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, required, id, name, className, ...props },
  ref,
) {
  const inputId = id || name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-800">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          'h-11 w-full rounded-lg border bg-white px-3.5 text-base text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:ring-2',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
            : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/30',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
