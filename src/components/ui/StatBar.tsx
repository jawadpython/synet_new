import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/i18n/types";

type StatBarProps = {
  stats: Stat[];
  background?: "neutral-100" | "white";
  className?: string;
};

export function StatBar({
  stats,
  background = "neutral-100",
  className,
}: StatBarProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 rounded-[4px] p-6 md:grid-cols-4 md:gap-8 md:p-8",
        background === "neutral-100" && "bg-neutral-100",
        background === "white" && "bg-white",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-start">
          <p className="text-display-md text-navy-800">{stat.value}</p>
          <p className="mt-1 text-sm text-neutral-700">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
