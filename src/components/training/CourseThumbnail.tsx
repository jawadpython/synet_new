import Image from "next/image";
import { getCourseThumbnailVisual } from "@/lib/site/training-visuals";
import { cn } from "@/lib/utils";
import type { Course } from "@/lib/training/types";

type CourseThumbnailProps = {
  variant: Course["imageVariant"];
  className?: string;
};

export function CourseThumbnail({ variant, className }: CourseThumbnailProps) {
  const visual = getCourseThumbnailVisual(variant);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden bg-navy-900/10",
        className,
      )}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}
