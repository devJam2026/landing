import React from "react";

interface TechStackBadgeProps {
  techs: string[];
}

export default function TechStackBadge({ techs }: TechStackBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span
          key={tech}
          className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-card-border bg-input-bg text-text-muted hover:text-foreground hover:border-orange-500/30 dark:hover:border-cyan-500/20 transition-all duration-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
