import React from "react";
import Link from "next/link";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionText?: string;
}

export default function SectionHeader({
  kicker,
  title,
  description,
  actionHref,
  actionText,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
      <div>
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          {kicker}
        </span>
        <h2 className="text-3xl font-black text-foreground mt-1">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-text-muted mt-2 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actionHref && actionText && (
        <Link
          href={actionHref}
          className="text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:text-orange-500 flex items-center gap-1 transition-colors duration-200 shrink-0"
        >
          {actionText} <span className="text-[10px]">→</span>
        </Link>
      )}
    </div>
  );
}
