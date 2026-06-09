"use client";

import React from "react";
import { Play, Code2, Terminal } from "lucide-react";

export default function WhyDevJam() {
  const pillars = [
    {
      title: "Interactive Labs First",
      description: "Visual simulators for complex systems. Play with tokenizers, component reconciliation trees, system packet load-balancing, and deploy pipelines in real-time.",
      icon: Play,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
    {
      title: "Open Source Always",
      description: "No hidden layers or black boxes. Direct access to git repositories, complete configurations, clean modules, and educational self-contained notebooks.",
      icon: Code2,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
    },
    {
      title: "Practical Engineering",
      description: "No theory overload or fluff. Deep-dive architecture notes, production roadmaps, and configurations built from years of engineering experience.",
      icon: Terminal,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
  ];

  return (
    <section id="why" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-6 scroll-mt-20 w-full">
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          Why DevJam?
        </span>
        <h2 className="text-3xl font-black text-foreground mt-1">
          Learn by Building
        </h2>
        <p className="text-sm text-text-muted mt-3 leading-relaxed">
          Traditional tutorials focus on passive reading. DevJam is engineered for developers who learn best by tweaking parameters, running scripts, and inspecting active architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`group relative flex flex-col items-center text-center md:items-start md:text-left rounded-xl p-6 ${
                pillar.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${pillar.color} shadow-sm`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
