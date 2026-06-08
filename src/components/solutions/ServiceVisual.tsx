import { cn } from "@/lib/utils";
import type { Service } from "@/lib/solutions/types";

const accents: Record<Service["imageVariant"], string> = {
  network: "border-s-blue-600",
  security: "border-s-navy-800",
  voip: "border-s-blue-500",
  web: "border-s-navy-600",
  cloud: "border-s-blue-600",
  support: "border-s-navy-700",
  cctv: "border-s-navy-800",
};

type ServiceVisualProps = {
  variant: Service["imageVariant"];
  className?: string;
};

export function ServiceVisual({ variant, className }: ServiceVisualProps) {
  return (
    <div
      className={cn(
        "border border-neutral-200 bg-neutral-100 border-s-4",
        accents[variant],
        className,
      )}
      aria-hidden="true"
    />
  );
}
