import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export function Select({ className, hasError, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          "min-h-11 w-full appearance-none rounded-[2px] border bg-white px-4 py-3 pe-10 text-base text-neutral-900",
          "transition-colors duration-150",
          "hover:border-neutral-400",
          "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600",
          "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
          hasError ? "border-error-600 ring-2 ring-error-600" : "border-neutral-200",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute end-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
        aria-hidden="true"
      />
    </div>
  );
}
