import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-md border bg-white px-4 py-3 text-base text-navy-800",
        "placeholder:text-neutral-400",
        "transition-colors duration-150",
        "hover:border-neutral-400",
        "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
        "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
        hasError ? "border-error-600 ring-2 ring-error-600/20" : "border-neutral-200",
        className,
      )}
      {...props}
    />
  );
}
