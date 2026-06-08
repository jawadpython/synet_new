import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  rtl?: boolean;
};

export function ArrowLink({ href, children, className, rtl = false }: ArrowLinkProps) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-150 hover:text-blue-700 hover:underline",
        className,
      )}
    >
      {children}
      <Arrow className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
