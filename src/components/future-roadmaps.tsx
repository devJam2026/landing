"use client";

import React from "react";
import Link from "next/link";
import { Compass, BookOpen, Layers, Cpu, Terminal, Clock, Sparkles } from "lucide-react";

export default function FutureRoadmaps() {
  const roadmaps = [
    {
      name: "Frontend Architect",
      description: "Scale high-performance web applications using modern routing, code compilation, and micro frontend modules.",
      topics: ["Micro Frontends", "State Reconciliation", "Hydration Optimizations", "Webpack & Turbopack"],
      icon: Layers,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
      status: "Soon",
      href: "/roadmaps",
    },
    {
      name: "System Design",
      description: "Architect high-availability distributed backends with robust cache tiers, queue workers, and databases.",
      topics: ["Load Balancing", "DB Replication Lag", "Redis Caching Layers", "Sharding & Partitioning"],
      icon: Compass,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
      status: "Soon",
      href: "/roadmaps",
    },
    {
      name: "AI Engineer",
      description: "Transition from basic prompts to production multi-agent pipelines, RAG stores, and execution trees.",
      topics: ["Vector Store chunking", "Multi-Agent routing", "Tool usage trees", "Prompt evaluation"],
      icon: Cpu,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
      status: "Soon",
      href: "/roadmaps",
    },
    {
      name: "DSA",
      description: "Prepare for coding interviews with structured problem-solving, graph structures, and dynamic programming.",
      topics: ["Graph Traversals", "Dynamic Programming", "Trees & Heaps", "Big-O Analysis"],
      icon: BookOpen,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
      status: "Active",
      href: "/dsa",
    },
    {
      name: "DevOps & Cloud",
      description: "Automate build, test, and release cycles using virtual containers, secure pipelines, and infrastructure as code.",
      topics: ["Containerization", "Test Pipelines", "AWS & Docker deploy", "Infrastructure as Code"],
      icon: Terminal,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
      status: "Soon",
      href: "/roadmaps",
    },
  ];

  return (
    <section id="future-roadmaps" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Curriculum
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Future Roadmaps
          </h2>
        </div>
        <span className="text-xs text-text-muted font-bold font-mono">
          Structured roadmap modules launching soon
        </span>
      </div>

      {/* Roadmaps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
        {roadmaps.map((roadmap) => {
          const Icon = roadmap.icon;
          const isActive = roadmap.status === "Active";

          return (
            <div
              key={roadmap.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-5 ${
                roadmap.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${roadmap.iconColor} shadow-inner`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  
                  {/* Status Badge */}
                  {isActive ? (
                    <span className="text-[8px] sm:text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border text-cyan-400 bg-cyan-400/5 border-cyan-500/15 flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-[8px] sm:text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border text-amber-500 bg-amber-500/5 border-amber-500/15 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" />
                      Soon
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-foreground mb-2">
                  {roadmap.name}
                </h3>

                <p className="text-[11px] text-text-muted leading-relaxed mb-4">
                  {roadmap.description}
                </p>

                {/* Topics bullet list */}
                <div className="mb-2">
                  <h4 className="text-[9px] uppercase font-bold text-text-muted tracking-wider mb-2">
                    Key Topics
                  </h4>
                  <ul className="flex flex-col gap-1 text-[9px] font-mono text-text-muted">
                    {roadmap.topics.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className={`h-1 w-1 rounded-full shrink-0 ${roadmap.isCyan ? "bg-cyan-400" : "bg-orange-500"}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-card-border/60 pt-3.5 mt-4 flex justify-between items-center">
                <span className="text-[9px] font-bold text-text-muted/65 uppercase tracking-wider">
                  {isActive ? "Active Syllabus" : "Roadmap Preview"}
                </span>
                <Link
                  href={roadmap.href}
                  className={`text-[9px] font-extrabold transition-colors uppercase tracking-wider flex items-center gap-0.5 ${
                    isActive ? "text-cyan-400 hover:text-cyan-300" : "text-text-muted/60 hover:text-foreground"
                  }`}
                >
                  {isActive ? "Open" : "View"}
                  <span className="text-[8px]">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
