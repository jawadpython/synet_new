import type { Course } from "@/lib/training/types";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { normalizePriceTiers } from "@/lib/training/pricing";
import { cn } from "@/lib/utils";

type CoursePriceTiersProps = {
  course: Course;
  copy: TrainingPagesCopy;
  compact?: boolean;
};

export function CoursePriceTiers({ course, copy, compact = false }: CoursePriceTiersProps) {
  const tiers = normalizePriceTiers(course.priceTiers);

  return (
    <div>
      <p className={cn("font-semibold text-navy-800", compact ? "text-sm" : "text-sm")}>
        {copy.priceTiers.heading}
      </p>
      <ul className={cn("mt-2", compact ? "space-y-1.5" : "space-y-2")}>
        {tiers.map((tier) => (
          <li
            key={tier.id}
            className="flex items-baseline justify-between gap-3 border-b border-neutral-100 py-1.5 last:border-0"
          >
            <span className="text-sm text-neutral-600">{copy.priceTiers[tier.id]}</span>
            <span className={cn("font-semibold text-navy-800", compact ? "text-sm" : "text-base")}>
              {tier.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
