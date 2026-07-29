import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/i18n/types";

type StatBarProps = {
  stats: Stat[];
  background?: "neutral-100" | "white" | "transparent";
  className?: string;
};

export function StatBar({
  stats,
  background = "transparent",
  className,
}: StatBarProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-neutral-200",
        background === "neutral-100" && "rounded-xl bg-neutral-100 p-6 md:p-8",
        background === "white" && "rounded-xl border border-neutral-200 bg-white p-6 md:p-8",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center md:px-6 md:text-start lg:px-8"
        >
          <p className="font-heading text-2xl font-medium text-blue-600 md:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1.5 text-sm text-neutral-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
