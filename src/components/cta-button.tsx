import React from "react";
import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: CtaButtonProps) {
  const baseClasses =
    "w-full sm:w-48 inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/35 hover:-translate-y-0.5"
      : "border border-card-border bg-card-bg/40 text-foreground hover:border-cyan-500/30 hover:text-cyan-400 hover:-translate-y-0.5";

  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} target={target} rel={rel}>
      {children}
    </Link>
  );
}
