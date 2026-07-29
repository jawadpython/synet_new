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
        "inline-block rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        variant === "blue" && "bg-blue-600 text-white",
        variant === "neutral" && "bg-neutral-100 text-neutral-500",
        className,
      )}
    >
      {children}
    </span>
  );
}
