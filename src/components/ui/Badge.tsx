import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "blue" | "neutral";
  className?: string;
};

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[2px] px-2 py-1 text-xs font-semibold uppercase tracking-wide",
        variant === "blue" && "bg-blue-100 text-blue-600",
        variant === "neutral" && "bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
