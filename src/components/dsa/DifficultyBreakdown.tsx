import React from "react";

interface DifficultyBreakdownProps {
  easyCount: number;
  easyTotal: number;
  mediumCount: number;
  mediumTotal: number;
  hardCount: number;
  hardTotal: number;
}

export default function DifficultyBreakdown({
  easyCount = 0,
  easyTotal = 0,
  mediumCount = 0,
  mediumTotal = 0,
  hardCount = 0,
  hardTotal = 0,
}: DifficultyBreakdownProps) {
  const getPercent = (count: number, total: number) => {
    return total === 0 ? 0 : Math.round((count / total) * 100);
  };

  const easyPct = getPercent(easyCount, easyTotal);
  const mediumPct = getPercent(mediumCount, mediumTotal);
  const hardPct = getPercent(hardCount, hardTotal);

  return (
    <div className="flex flex-col gap-4 w-full" data-track="dsa">
      <h4 className="text-[10px] uppercase font-bold text-text-muted tracking-wider font-mono">
        Difficulty Breakdown
      </h4>
      
      <div className="flex flex-col gap-3">
        {/* Easy */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-emerald-400">Easy</span>
            <span className="font-mono text-text-muted">
              {easyCount}/{easyTotal} <span className="text-[10px] font-bold text-emerald-400/80">({easyPct}%)</span>
            </span>
          </div>
          <div className="h-1.5 w-full bg-card-border/30 rounded-full overflow-hidden border border-card-border/10">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500 shadow-sm shadow-emerald-500/20"
              style={{ width: `${easyPct}%` }}
            />
          </div>
        </div>

        {/* Medium */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-amber-400">Medium</span>
            <span className="font-mono text-text-muted">
              {mediumCount}/{mediumTotal} <span className="text-[10px] font-bold text-amber-400/80">({mediumPct}%)</span>
            </span>
          </div>
          <div className="h-1.5 w-full bg-card-border/30 rounded-full overflow-hidden border border-card-border/10">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-500 shadow-sm shadow-amber-500/20"
              style={{ width: `${mediumPct}%` }}
            />
          </div>
        </div>

        {/* Hard */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-rose-400">Hard</span>
            <span className="font-mono text-text-muted">
              {hardCount}/{hardTotal} <span className="text-[10px] font-bold text-rose-400/80">({hardPct}%)</span>
            </span>
          </div>
          <div className="h-1.5 w-full bg-card-border/30 rounded-full overflow-hidden border border-card-border/10">
            <div
              className="h-full bg-rose-500 rounded-full transition-all duration-500 shadow-sm shadow-rose-500/20"
              style={{ width: `${hardPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
