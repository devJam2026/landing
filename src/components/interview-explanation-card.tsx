import React from "react";
import { MessageSquareQuote } from "lucide-react";

interface InterviewExplanationCardProps {
  quote: string;
  isCyan?: boolean;
}

export default function InterviewExplanationCard({ quote, isCyan = false }: InterviewExplanationCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border p-5 md:p-6 bg-card-bg/20 shadow-inner ${
      isCyan ? "border-cyan-500/20 shadow-cyan-500/5" : "border-orange-500/20 shadow-orange-500/5"
    }`}>
      {/* Decorative background glow */}
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl -z-10 ${
        isCyan ? "bg-cyan-500/5" : "bg-orange-500/5"
      }`} />
      
      <div className="flex gap-4 items-start">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-input-bg/85 ${
          isCyan ? "text-cyan-400 border-cyan-500/10" : "text-orange-500 border-orange-500/10"
        }`}>
          <MessageSquareQuote className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-muted mb-2">
            Interview Defense Strategy
          </h4>
          <blockquote className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed italic border-l-2 pl-4 border-card-border/80">
            {quote}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
