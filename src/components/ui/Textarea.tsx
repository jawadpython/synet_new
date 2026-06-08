import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export function Textarea({ className, hasError, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full resize-y rounded-[4px] border bg-white px-4 py-3 text-base text-neutral-900",
        "placeholder:text-neutral-500",
        "transition-colors duration-150",
        "hover:border-neutral-400",
        "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600",
        "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
        hasError ? "border-error-600 ring-2 ring-error-600" : "border-neutral-200",
        className,
      )}
      {...props}
    />
  );
}
