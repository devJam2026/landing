"use client";

import React, { useState } from "react";
import { dsaVisualizations } from "../../../data/dsa/visualizations";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

interface VisualTracerProps {
  conceptSlug: string;
}

export default function VisualTracer({ conceptSlug }: VisualTracerProps) {
  // Find visualization matching this concept slug
  const visualization = Object.values(dsaVisualizations).find(
    (v) => v.conceptSlug === conceptSlug
  );

  const [step, setStep] = useState(0);

  if (!visualization) {
    // Return the Coming Soon card with animation label
    return (
      <div className="premium-card rounded-xl border border-dashed border-card-border p-6 flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#060a13]/10 min-h-[200px]">
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-bold text-cyan-400 uppercase tracking-widest animate-pulse">
          <Sparkles className="h-3 w-3" /> Coming Soon
        </div>
        <AlertCircle className="h-8 w-8 text-text-muted/40 mb-3" />
        <h4 className="text-xs font-bold text-foreground">Interactive Tracing Sandbox</h4>
        <p className="text-[11px] text-text-muted leading-relaxed mt-1 max-w-xs">
          Interactive step-by-step layout is currently under deployment. Complete trace state maps will be accessible in the next release.
        </p>
      </div>
    );
  }

  const steps = visualization.steps;
  const activeStep = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="premium-card premium-card-cyan rounded-xl border border-cyan-500/25 p-5 flex flex-col gap-4 bg-[#050811]/90 shadow-xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-card-border pb-3">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-cyan-400">Interactive Visualizer</span>
          <h4 className="text-sm font-black text-foreground">{visualization.title}</h4>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={step === 0}
            className="p-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-mono text-[10px] text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-400/5 border border-cyan-500/10">
            {step + 1} / {steps.length}
          </span>
          <button
            onClick={handleNext}
            disabled={step === steps.length - 1}
            className="p-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Active step explanation */}
      <div className="bg-[#030712] border border-card-border/50 rounded-lg p-3.5 flex gap-2.5 items-start">
        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[9px] font-extrabold uppercase text-text-muted tracking-wider">{activeStep.label}</span>
          <p className="text-xs text-foreground/80 leading-relaxed font-sans">{activeStep.explanation}</p>
        </div>
      </div>

      {/* State display */}
      <div className="border border-card-border rounded-lg bg-background/30 overflow-hidden font-mono text-[10px]">
        <div className="grid grid-cols-2 bg-[#060a13] border-b border-card-border px-3.5 py-1.5 font-bold text-text-muted">
          <span>State Key</span>
          <span>Value</span>
        </div>
        <div className="divide-y divide-card-border/40">
          {Object.entries(activeStep.state).map(([key, val]) => (
            <div key={key} className="grid grid-cols-2 px-3.5 py-2 items-center">
              <span className="text-orange-400 font-bold">{key}</span>
              <span className="text-cyan-400 truncate">{JSON.stringify(val)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[9px] text-text-muted/60 leading-relaxed">
        💡 Use the arrows above to trace states dynamically.
      </div>
    </div>
  );
}
