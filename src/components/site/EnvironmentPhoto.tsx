"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { EnvironmentKey } from "@/lib/site/environment-visuals";
import { getEnvironment, USE_LOCAL_ENVIRONMENT_PHOTOS } from "@/lib/site/environment-visuals";

type EnvironmentPhotoProps = {
  environment: EnvironmentKey;
  className?: string;
  aspectClassName?: string;
  imgClassName?: string;
  alt?: string;
  priority?: boolean;
  /** Try local file first; falls back to placeholder on error */
  preferLocal?: boolean;
};

export function EnvironmentPhoto({
  environment,
  className,
  aspectClassName = "aspect-video",
  imgClassName,
  alt,
  priority = false,
  preferLocal = USE_LOCAL_ENVIRONMENT_PHOTOS,
}: EnvironmentPhotoProps) {
  const asset = getEnvironment(environment);
  const [src, setSrc] = useState(preferLocal ? asset.localSrc : asset.fallbackSrc);
  const [ready, setReady] = useState(false);

  return (
    <div className={cn("synet-media group/photo relative overflow-hidden bg-navy-900/10", aspectClassName, className)}>
      <img
        src={src}
        alt={alt ?? asset.alt}
        className={cn(
          "h-full w-full object-cover transition-[transform,opacity] duration-700 ease-out",
          ready ? "opacity-100" : "opacity-0",
          "group-hover/photo:scale-[1.04]",
          imgClassName,
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setReady(true)}
        onError={() => {
          if (src !== asset.fallbackSrc) {
            setReady(false);
            setSrc(asset.fallbackSrc);
          }
        }}
      />
    </div>
  );
}
