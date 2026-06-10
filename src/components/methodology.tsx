"use client";

import React from "react";
import { ArrowRight, ArrowDown, BookOpen, Code, MessageSquare, Rocket, TrendingUp } from "lucide-react";

export default function LearningMethodology() {
  const steps = [
    {
      title: "Learn",
      icon: BookOpen,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      description: "Deconstruct underlying mechanics, specifications, math, and system design theory.",
    },
    {
      title: "Build",
      icon: Code,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      description: "Implement highly optimized, self-contained codebases and utilities from scratch.",
    },
    {
      title: "Explain",
      icon: MessageSquare,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      description: "Articulate architectural trade-offs and defend decisions in simulated panel rounds.",
    },
    {
      title: "Deploy",
      icon: Rocket,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      description: "Dockerize systems, configure workflows, and run automated verification testing.",
    },
    {
      title: "Scale",
      icon: TrendingUp,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      description: "Optimize execution paths, cache models, load balance nodes, and scale storage.",
    },
  ];

  return (
    <section id="methodology" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          Learning Methodology
        </span>
        <h2 className="text-3xl font-black text-foreground mt-2">
          Engineered for Mastery
        </h2>
        <p className="text-sm text-text-muted mt-3 leading-relaxed">
          Every project in the DevJam ecosystem follows a structured engineering lifecycle. We don&apos;t just stop at compiling code; we trace the entire pipeline from design to production scale.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-4 w-full">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.title}>
              {/* Step Card */}
              <div className="flex-1 premium-card rounded-xl p-5 flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-300 hover:scale-102">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${step.color} shadow-sm`}>
                  <Icon className="h-5 w-5" />
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-text-muted/60">0{idx + 1}.</span>
                  <h3 className="text-base font-extrabold text-foreground">{step.title}</h3>
                </div>
                
                <p className="text-xs text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center text-text-muted/40 py-2 lg:py-0 lg:h-32">
                  <ArrowRight className="hidden lg:block h-5 w-5 animate-pulse" />
                  <ArrowDown className="lg:hidden h-5 w-5 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
