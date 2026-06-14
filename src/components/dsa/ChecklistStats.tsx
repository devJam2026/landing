import React from "react";

interface ChecklistStatsProps {
  solvedCount: number;
  attemptedCount: number;
  totalCount: number;
}

export default function ChecklistStats({
  solvedCount = 0,
  attemptedCount = 0,
  totalCount = 0,
}: ChecklistStatsProps) {
  const remainingCount = Math.max(0, totalCount - solvedCount);

  return (
    <div className="grid grid-cols-3 gap-4 w-full" data-track="dsa">
      {/* Solved Card */}
      <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-green-500/20 bg-green-500/5">
        <span className="text-[9px] uppercase font-bold text-green-400 font-mono tracking-wider">
          Solved
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-green-400 font-mono leading-none">
            {solvedCount}
          </span>
          <span className="text-[10px] text-text-muted font-mono">
            / {totalCount}
          </span>
        </div>
      </div>

      {/* Attempted Card */}
      <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-orange-500/20 bg-orange-500/5">
        <span className="text-[9px] uppercase font-bold text-orange-400 font-mono tracking-wider">
          Attempted
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-orange-400 font-mono leading-none">
            {attemptedCount}
          </span>
          <span className="text-[10px] text-text-muted font-mono">
            in-progress
          </span>
        </div>
      </div>

      {/* Remaining Card */}
      <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-card-border/50 bg-[#050811]/40">
        <span className="text-[9px] uppercase font-bold text-text-muted font-mono tracking-wider">
          Remaining
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-foreground font-mono leading-none">
            {remainingCount}
          </span>
          <span className="text-[10px] text-text-muted font-mono">
            pending
          </span>
        </div>
      </div>
    </div>
  );
}
