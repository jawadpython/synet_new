import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { serviceEnvironmentMap } from "@/lib/site/environment-visuals";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/solutions/types";

type ServiceVisualProps = {
  variant: Service["imageVariant"];
  className?: string;
};

export function ServiceVisual({ variant, className }: ServiceVisualProps) {
  const environment = serviceEnvironmentMap[variant] ?? "workspace";

  return (
    <EnvironmentPhoto
      environment={environment}
      className={cn("w-full", className)}
      aspectClassName=""
    />
  );
}
