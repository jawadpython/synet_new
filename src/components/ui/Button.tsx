import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "white" | "outline-white";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-[#003d6b] disabled:bg-neutral-200 disabled:text-neutral-400",
  secondary:
    "border border-navy-800 bg-white text-navy-800 hover:bg-neutral-50 active:bg-neutral-100 disabled:border-neutral-200 disabled:text-neutral-400",
  tertiary:
    "bg-transparent text-blue-600 hover:text-blue-700 hover:underline disabled:text-neutral-400",
  white:
    "bg-white text-navy-800 hover:bg-neutral-100 active:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-400",
  "outline-white":
    "border border-white bg-transparent text-white hover:bg-white/10 active:bg-white/10 disabled:border-neutral-400 disabled:text-neutral-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-sm font-semibold",
  md: "min-h-11 px-6 py-3 text-sm font-semibold",
  lg: "min-h-12 px-8 py-3 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[4px] transition-colors duration-150",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const { ...linkProps } = props as Omit<ButtonAsLink, keyof ButtonBaseProps | "href">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
