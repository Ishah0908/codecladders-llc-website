import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:-translate-y-0.5 hover:shadow-xl hover:bg-[var(--color-primary-strong)]",
  secondary:
    "bg-white text-[var(--color-ink-900)] border border-[var(--color-ink-200)] hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]",
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
