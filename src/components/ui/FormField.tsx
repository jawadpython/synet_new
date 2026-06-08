import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  id,
  label,
  required,
  hint,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
        {label}
        {required && (
          <span className="text-error-600 ms-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-neutral-500">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-error-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
