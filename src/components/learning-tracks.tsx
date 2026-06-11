"use client";

import React from "react";
import Link from "next/link";
import { Brain, Code, Network, Infinity as InfinityIcon, Binary } from "lucide-react";

export default function LearningTracks() {
  const tracks = [
    {
      title: "Frontend Architect",
      tagline: "From browser fundamentals to scalable frontend systems.",
      icon: Code,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      arrowColor: "text-cyan-400 group-hover:text-cyan-300",
      href: "/roadmaps",
      isCyan: true,
    },
    {
      title: "System Design",
      tagline: "Learn how distributed systems are designed and scaled.",
      icon: Network,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      arrowColor: "text-orange-500 group-hover:text-orange-400",
      href: "/roadmaps",
      isCyan: false,
    },
    {
      title: "AI Engineer",
      tagline: "Master LLMs, RAG, Agents and AI Systems.",
      icon: Brain,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      arrowColor: "text-cyan-400 group-hover:text-cyan-300",
      href: "/ai-engineer",
      isCyan: true,
    },
    {
      title: "DSA",
      tagline: "Prepare for coding interviews with structured problem-solving.",
      icon: Binary,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      arrowColor: "text-orange-500 group-hover:text-orange-400",
      href: "/dsa",
      isCyan: false,
    },
    {
      title: "DevOps & Cloud",
      tagline: "Deploy, monitor and scale production systems.",
      icon: InfinityIcon,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      arrowColor: "text-cyan-400 group-hover:text-cyan-300",
      href: "/roadmaps",
      isCyan: true,
    },
  ];

  return (
    <section id="tracks" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Learning Tracks
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Five Pillars of DevJam
          </h2>
        </div>
        <Link
          href="/roadmaps"
          className="text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:text-orange-500 flex items-center gap-1 transition-colors duration-200"
        >
          View all tracks <span className="text-[10px]">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <Link
              key={track.title}
              href={track.href}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-5 ${
                track.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              <div>
                {/* Icon wrapper */}
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${track.iconColor} shadow-inner`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                
                <h3 className="text-base font-bold text-foreground mb-2">
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
