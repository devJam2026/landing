import React from "react";
import Link from "next/link";
import { CheckCircle2, Bookmark, HelpCircle, Play } from "lucide-react";
import { ChecklistItem } from "@/data/dsa/checklists";

interface ChecklistProblemCardProps {
  item: ChecklistItem;
  isSolved: boolean;
  isAttempted: boolean;
  isBookmarked: boolean;
  onToggleSolved: () => void;
  onToggleAttempted: () => void;
  onToggleBookmark: () => void;
}

export default function ChecklistProblemCard({
  item,
  isSolved = false,
  isAttempted = false,
  isBookmarked = false,
  onToggleSolved,
  onToggleAttempted,
  onToggleBookmark,
}: ChecklistProblemCardProps) {
  const diffColor =
    item.difficulty === "Easy"
      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
      : item.difficulty === "Medium"
      ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
      : "text-rose-500 bg-rose-500/10 border-rose-500/20";

  return (
    <div
      data-track="dsa"
      data-checklist={item.source.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      data-problem={item.problemSlug}
      data-difficulty={item.difficulty}
      className={`premium-card rounded-xl p-5 border flex flex-col gap-4 bg-[#050811]/90 shadow-md ${
        isSolved
          ? "border-green-500/20 shadow-green-500/5 bg-green-500/[0.01]"
          : isAttempted
          ? "border-orange-500/20 shadow-orange-500/5 bg-orange-500/[0.01]"
          : "border-card-border/60"
      }`}
    >
      {/* Title & Bookmark Header */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-text-muted font-bold">
              #{item.order}
            </span>
            <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${diffColor}`}>
              {item.difficulty}
            </span>
          </div>
          <h4 className="text-sm font-black text-foreground mt-1 leading-snug">
            {item.title}
          </h4>
        </div>
        
        <button
          onClick={onToggleBookmark}
          className={`p-2 rounded-lg border transition-colors cursor-pointer ${
            isBookmarked
              ? "border-orange-500/30 text-orange-500 bg-orange-500/10"
              : "border-card-border bg-[#030712] text-text-muted hover:text-foreground"
          }`}
          title="Bookmark Problem"
        >
          <Bookmark className="h-4.5 w-4.5" fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Metadata tags */}
      <div className="flex flex-wrap gap-2 text-[10px] font-bold font-mono">
        <span className="text-text-muted bg-[#030712] border border-card-border px-2 py-1 rounded">
          {item.category}
        </span>
        {item.patternTags.map((tag) => (
          <span
            key={tag}
            data-track="dsa"
            data-pattern={tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons with Large Touch Targets */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-card-border/40 text-xs font-bold">
        {/* Solved toggle */}
        <button
          onClick={onToggleSolved}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-all cursor-pointer select-none ${
            isSolved
              ? "bg-green-500/20 border-green-500 text-green-400"
              : "bg-[#030712] border-card-border text-text-muted hover:text-foreground"
          }`}
        >
          <CheckCircle2 className="h-4 w-4" />
          {isSolved ? "Solved" : "Mark Solved"}
        </button>

        {/* Attempted toggle */}
        <button
          onClick={onToggleAttempted}
          disabled={isSolved}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer select-none ${
            isAttempted
              ? "bg-orange-500/20 border-orange-500 text-orange-400"
              : "bg-[#030712] border-card-border text-text-muted hover:text-foreground"
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          {isAttempted ? "Attempting" : "Mark Attempted"}
        </button>
      </div>

      {/* Play/Solve Link */}
      <Link
        href={`/dsa/practice/${item.problemSlug}`}
        className="flex items-center justify-center gap-2 py-2.5 w-full rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs shadow-md shadow-orange-600/20 transition-all cursor-pointer select-none mt-1"
      >
        <Play className="h-3.5 w-3.5 fill-current" />
        Solve Problem
      </Link>
    </div>
  );
}
