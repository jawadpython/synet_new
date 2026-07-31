import Image from "next/image";
import { cn } from "@/lib/utils";

type SynetLogoProps = {
  size?: "default" | "large";
  variant?: "header" | "icon";
  className?: string;
};

export function SynetLogo({
  size = "default",
  variant = "header",
  className,
}: SynetLogoProps) {
  const isIcon = variant === "icon";
  const height = isIcon
    ? size === "large"
      ? 44
      : 36
    : size === "large"
      ? 48
      : 40;

  const width = isIcon ? height : Math.round(height * 4.4);
  const src = isIcon ? "/images/logo-icon.png" : "/images/logo-header-v2.png";

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={src}
        alt="SYNET — IT Solutions & Training"
        width={width}
        height={height}
        className="object-contain object-left"
        style={{ height, width: "auto" }}
        sizes={isIcon ? `${height}px` : "(max-width: 768px) 180px, 240px"}
        priority
      />
    </span>
  );
}
