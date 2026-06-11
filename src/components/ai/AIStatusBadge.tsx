import React from "react";
import { AIContentStatus } from "@/data/ai/tracks";

interface AIStatusBadgeProps {
  status: AIContentStatus;
  className?: string;
}

export default function AIStatusBadge({ status, className = "" }: AIStatusBadgeProps) {
  let badgeStyles = "";
  let label = "";

  switch (status) {
    case "complete":
      badgeStyles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      label = "Complete";
      break;
    case "in-progress":
      badgeStyles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      label = "In Progress";
      break;
    case "placeholder":
      badgeStyles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      label = "Planned";
      break;
    case "coming-soon":
    default:
      badgeStyles = "bg-gray-500/10 border-gray-500/20 text-text-muted";
      label = "Coming Soon";
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider ${badgeStyles} ${className}`}
    >
      {label}
    </span>
  );
}
