"use client";

import React from "react";
import { BookOpen, Code2, Layers, ShieldQuestion, Terminal } from "lucide-react";

export default function WhyDevJam() {
  const points = [
    {
      title: "Concepts",
      description: "Understand the core mathematical structures, protocols, and architectural foundations, not just basic API syntax.",
      icon: BookOpen,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
    {
      title: "Projects",
      description: "Build visual tokenizers, neural playground widgets, and context budget analyzers that simulate production constraints.",
      icon: Code2,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
    },
    {
      title: "Architecture",
      description: "Map data lifecycles, module boundaries, system flows, and component dependency graphs with visual models.",
      icon: Layers,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
    {
      title: "Interview Thinking",
      description: "Master senior system designs, trade-off analysis, edge-case remediation, and robust architecture explanations.",
      icon: ShieldQuestion,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
    },
    {
      title: "Production Engineering",
      description: "Implement continuous automation pipelines, telemetry, docker containers, and multi-tenant scaling optimizations.",
      icon: Terminal,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
  ];

  return (
    <section id="why" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          The DevJam Vision
        </span>
        <h2 className="text-3xl font-black text-foreground mt-2 leading-tight">
          Most tutorials teach syntax. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
            DevJam teaches real engineering.
          </span>
        </h2>
        <p className="text-sm text-text-muted mt-3 leading-relaxed">
          Skip the basic boilerplate. DevJam is engineered to guide builders through foundational concepts, interactive visualizer labs, senior architecture, and defensive engineering logic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className={`group relative flex flex-col items-center text-center md:items-start md:text-left rounded-xl p-5 ${
                point.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${point.color} shadow-sm`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
