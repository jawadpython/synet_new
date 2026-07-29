import Image from "next/image";
import { cn } from "@/lib/utils";

type SynetLogoProps = {
  size?: "default" | "large";
  showWordmark?: boolean;
  className?: string;
  light?: boolean;
};

export function SynetLogo({
  size = "default",
  showWordmark = false,
  className,
}: SynetLogoProps) {
  // Full circular brand mark already includes the SYNET wordmark.
  const height = size === "large" ? 52 : 44;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="SYNET — IT Solutions & Training"
        width={height}
        height={height}
        className="object-contain"
        style={{ height, width: "auto" }}
        priority
      />
      {showWordmark ? (
        <span className="sr-only">SYNET</span>
      ) : null}
    </span>
  );
}
