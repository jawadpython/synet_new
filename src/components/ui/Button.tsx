import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "white"
  | "outline-white"
  | "outline-blue"
  | "ghost";
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
    "border border-blue-600 bg-blue-600 text-white hover:border-blue-700 hover:bg-blue-700 active:bg-blue-700 disabled:border-neutral-200 disabled:bg-neutral-200 disabled:text-neutral-400",
  secondary:
    "border border-neutral-200 bg-transparent text-navy-800 hover:border-navy-800 hover:bg-neutral-50 active:bg-neutral-50 disabled:border-neutral-200 disabled:text-neutral-400",
  tertiary:
    "bg-transparent text-blue-600 hover:text-blue-700 disabled:text-neutral-400",
  white:
    "border border-white bg-white text-navy-800 hover:bg-neutral-50 active:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-400",
  "outline-white":
    "border border-white/80 bg-transparent text-white hover:bg-white/10 active:bg-white/10 disabled:border-neutral-400 disabled:text-neutral-400",
  "outline-blue":
    "border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 disabled:border-neutral-200 disabled:text-neutral-400",
  ghost:
    "bg-transparent text-blue-600 hover:text-blue-700 disabled:text-neutral-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-xs font-semibold",
  md: "min-h-11 px-5 py-3 text-sm font-semibold",
  lg: "min-h-12 px-6 py-3.5 text-sm font-semibold",
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
    "inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-200",
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
