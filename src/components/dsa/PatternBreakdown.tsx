import React from "react";

interface PatternBreakdownProps {
  patternStats: Record<string, { solved: number; total: number }>;
}

export default function PatternBreakdown({ patternStats = {} }: PatternBreakdownProps) {
  const statsArray = Object.entries(patternStats)
    .map(([pattern, counts]) => ({
      pattern,
      ...counts,
      pct: counts.total === 0 ? 0 : Math.round((counts.solved / counts.total) * 100),
    }))
    .sort((a, b) => b.pct - a.pct || b.total - a.total); // Sort by percentage complete then total

  if (statsArray.length === 0) {
    return (
      <div className="text-xs text-text-muted italic">
        No patterns mapping available.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full" data-track="dsa">
      <h4 className="text-[10px] uppercase font-bold text-text-muted tracking-wider font-mono">
        Pattern Competencies
      </h4>
      
      <div className="flex flex-wrap gap-2.5 max-h-[220px] overflow-y-auto pr-1">
        {statsArray.map(({ pattern, solved, total }) => {
          const isComplete = solved === total && total > 0;
          const isStarted = solved > 0;

          const badgeColor = isComplete
            ? "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10"
            : isStarted
            ? "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:bg-orange-500/10"
            : "border-card-border/60 text-text-muted bg-[#050811]/40 hover:text-foreground";

          return (
            <div
              key={pattern}
              data-track="dsa"
              data-pattern={pattern.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold font-sans transition-all select-none ${badgeColor}`}
            >
              <span>{pattern}</span>
              <span className="font-mono text-[10px] opacity-80 bg-[#030712]/60 px-1.5 py-0.5 rounded border border-card-border/40">
                {solved}/{total}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
