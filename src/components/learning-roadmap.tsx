"use client";

import React, { useState } from "react";
import { CheckCircle2, Circle, ArrowDown } from "lucide-react";

export default function LearningRoadmap() {
  const steps = [
    {
      id: "ai-foundations",
      title: "AI Foundations",
      status: "Completed",
      desc: "Mathematical foundations, vectors, matrices, basic backpropagation, and neural networks representation.",
      progress: "100%",
    },
    {
      id: "transformers",
      title: "Transformers",
      status: "Completed",
      desc: "Understanding self-attention layers, Query-Key-Value projections, multi-head attention, and causal masking.",
      progress: "100%",
    },
    {
      id: "rag",
      title: "RAG Systems",
      status: "Active",
      desc: "Document chunking, vector database embeddings, semantic search, prompt context expansion, and reranking pipelines.",
      progress: "80%",
    },
    {
      id: "agents",
      title: "AI Agents",
      status: "Planned",
      desc: "ReAct execution loops, autonomous planning, function/tool registries, and client-side tool execution.",
      progress: "0%",
    },
    {
      id: "multi-agent",
      title: "Multi-Agent",
      status: "Planned",
      desc: "Hierarchical agent networks, task delegation, custom communication channels, and centralized state monitoring.",
      progress: "0%",
    },
    {
      id: "production-ai",
      title: "Production AI",
      status: "Planned",
      desc: "Optimizing token latencies, model quantization (GGUF/AWQ), semantic caches, and security guardrails.",
      progress: "0%",
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[2]); // Default to RAG

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Active":
        return "text-orange-500 bg-orange-500/10 border-orange-500/20 animate-pulse";
      default:
        return "text-text-muted bg-input-bg border-card-border";
    }
  };

  return (
    <section id="roadmap" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Curriculum
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Learning Roadmap
          </h2>
        </div>
        <span className="text-xs text-text-muted font-bold font-mono">
          Click nodes to view syllabus details
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Left Column - Visual Horizontal/Vertical Timeline (8/12 width) */}
        <div className="lg:col-span-8 w-full">
          {/* Timeline Wrapper */}
          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 overflow-x-auto w-full relative">
            
            {/* Ambient Background connecting pipe for desktop */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-card-border/60 -translate-y-1/2 hidden md:block -z-10" />

            {steps.map((step, idx) => {
              const isSelected = activeStep.id === step.id;
              
              return (
                <React.Fragment key={step.id}>
                  {/* Step Node Circle */}
                  <button
                    onClick={() => setActiveStep(step)}
                    className={`flex flex-col items-center gap-2 relative z-10 focus:outline-none cursor-pointer min-w-[110px] transition-all duration-300 ${
                      isSelected ? "scale-105" : "hover:scale-102"
                    }`}
                  >
                    {/* Node circle */}
                    <div
                      className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/35 scale-110"
                          : step.status === "Completed"
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                          : step.status === "Active"
                          ? "bg-orange-500/10 border-orange-500 text-orange-500"
                          : "bg-background border-card-border text-text-muted"
                      }`}
                    >
                      {step.status === "Completed" ? (
                        <CheckCircle2 className="h-5 w-5 fill-current text-white" />
                      ) : (
                        <span className="font-mono text-xs font-black">{idx + 1}</span>
                      )}
                    </div>

                    {/* Node text */}
                    <span
                      className={`text-[10px] sm:text-xs font-bold transition-colors duration-300 ${
                        isSelected ? "text-foreground font-black" : "text-text-muted hover:text-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>

                  {/* Flow Arrow (Vertical for mobile, none/hidden on desktop due to background pipe) */}
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center md:hidden my-1 text-card-border/80">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* Right Column - Syllabus Focus Node Details Card (4/12 width) */}
        <div className="lg:col-span-4 w-full">
          <div className="premium-card rounded-2xl p-6 md:p-8 border-orange-500/10 bg-card-bg/60 flex flex-col gap-5 min-h-[280px] hover:border-orange-500/25 transition-all duration-300 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-card-border pb-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted/80">Syllabus Details</span>
              <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${getStatusBadge(activeStep.status)}`}>
                {activeStep.status}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">{activeStep.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed mt-1">
                {activeStep.desc}
              </p>
            </div>

            {activeStep.status !== "Planned" && (
              <div className="flex flex-col gap-2 border-t border-card-border/60 pt-4 mt-auto">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-text-muted">
                  <span>Track Completion Progress</span>
                  <span>{activeStep.progress}</span>
                </div>
                <div className="h-1.5 w-full bg-input-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: activeStep.progress }}
                  />
                </div>
              </div>
            )}

            {activeStep.status === "Planned" && (
              <div className="flex items-center gap-2 border-t border-card-border/60 pt-4 mt-auto text-[10px] font-bold text-text-muted/80">
                <Circle className="h-3 w-3 text-text-muted/50" />
                <span>Planned Lab Module Development</span>
              </div>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
