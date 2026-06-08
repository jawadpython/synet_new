import { cn } from "@/lib/utils";
import type { Course } from "@/lib/training/types";

const accents: Record<Course["imageVariant"], string> = {
  network: "border-s-blue-600",
  security: "border-s-navy-800",
  linux: "border-s-navy-700",
  cloud: "border-s-blue-600",
  sap: "border-s-navy-800",
  microsoft: "border-s-blue-500",
  corporate: "border-s-navy-600",
};

type CourseThumbnailProps = {
  variant: Course["imageVariant"];
  className?: string;
};

export function CourseThumbnail({ variant, className }: CourseThumbnailProps) {
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
