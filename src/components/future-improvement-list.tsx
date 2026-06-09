import React from "react";
import { Check } from "lucide-react";

interface FutureImprovementListProps {
  improvements: string[];
  isCyan?: boolean;
}

export default function FutureImprovementList({ improvements, isCyan = false }: FutureImprovementListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
      {improvements.map((improvement, index) => (
        <li
          key={index}
          className="flex items-start gap-3 p-3 rounded-lg border border-card-border/40 bg-card-bg/10 hover:bg-card-bg/30 hover:border-card-border transition-all duration-200"
        >
          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md mt-0.5 ${
            isCyan ? "bg-cyan-500/10 text-cyan-400" : "bg-orange-500/10 text-orange-500"
          }`}>
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs text-text-muted hover:text-foreground transition-colors">
            {improvement}
          </span>
        </li>
      ))}
    </ul>
  );
}
