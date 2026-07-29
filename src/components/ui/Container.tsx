import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("site-container", className)}>
      {children}
    </Component>
  );
}
