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
    "bg-[#0071e3] text-white hover:bg-[#0077ed] active:scale-[0.98]",
  secondary:
    "bg-transparent text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-white active:scale-[0.98]",
  ghost:
    "bg-transparent text-[#1d1d1f] hover:bg-[#f5f5f7] active:scale-[0.98]",
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
      className={`inline-flex items-center justify-center rounded-full px-[22px] py-[10px] text-[17px] font-normal tracking-normal transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

