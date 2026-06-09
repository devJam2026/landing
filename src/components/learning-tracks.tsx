"use client";

import React from "react";
import { Brain, Code, Network, Infinity as InfinityIcon } from "lucide-react";

export default function LearningTracks() {
  const tracks = [
    {
      title: "AI Engineering",
      tagline: "LLMs, RAG, Agents, MCP, Machine Learning & more.",
      icon: Brain,
      borderColor: "hover:border-violet-500/30",
      glowColor: "group-hover:bg-violet-500/5",
      iconColor: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/10 dark:border-violet-500/20",
      arrowColor: "text-violet-600 dark:text-violet-400 group-hover:text-violet-500 dark:group-hover:text-violet-300",
      href: "#labs",
    },
    {
      title: "Frontend Engineering",
      tagline: "React, Next.js, TypeScript, Micro Frontends, Performance & Architecture.",
      icon: Code,
      borderColor: "hover:border-blue-500/30",
      glowColor: "group-hover:bg-blue-500/5",
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/10 dark:border-blue-500/20",
      arrowColor: "text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300",
      href: "#labs",
    },
    {
      title: "System Design",
      tagline: "Scalability, Distributed Systems, Design Patterns, Databases, Caching & more.",
      icon: Network,
      borderColor: "hover:border-orange-500/30",
      glowColor: "group-hover:bg-orange-500/5",
      iconColor: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/10 dark:border-orange-500/20",
      arrowColor: "text-orange-600 dark:text-orange-400 group-hover:text-orange-500 dark:group-hover:text-orange-300",
      href: "#labs",
    },
    {
      title: "DevOps & CI/CD",
      tagline: "Docker, GitHub Actions, Azure DevOps, Pipelines, Testing & more.",
      icon: InfinityIcon,
      borderColor: "hover:border-green-500/30",
      glowColor: "group-hover:bg-green-500/5",
      iconColor: "text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/10 dark:border-green-500/20",
      arrowColor: "text-green-600 dark:text-green-400 group-hover:text-green-500 dark:group-hover:text-green-300",
      href: "#labs",
    },
  ];

  return (
    <section id="tracks" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-12 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase">
            Learning Tracks
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Four Pillars of DevJam
          </h2>
        </div>
        <a
          href="#labs"
          className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 flex items-center gap-1 transition-colors duration-200"
        >
          View all tracks <span className="text-[10px]">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <a
              key={track.title}
              href={track.href}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 ${track.borderColor}`}
            >
              {/* Card glow background overlay */}
              <div className={`absolute inset-0 -z-10 transition-colors duration-300 ${track.glowColor}`} />
              
              <div>
                {/* Icon wrapper */}
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${track.iconColor} shadow-inner`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {track.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {track.tagline}
                </p>
              </div>

              {/* Action and link indicators */}
              <div className="flex items-center justify-between border-t border-card-border pt-4 mt-2">
                <span className="text-xs font-extrabold tracking-wider uppercase text-text-muted group-hover:text-foreground transition-colors duration-200">
                  Explore
                </span>
                <span className={`text-base transition-transform duration-300 group-hover:translate-x-1 ${track.arrowColor}`}>
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
