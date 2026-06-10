"use client";

import React from "react";
import { GithubIcon } from "./brand-icons";
import { AlertCircle, GitPullRequest, Settings, Users2 } from "lucide-react";

export default function OpenSourceSection() {
  const contributions = [
    {
      title: "Raising Issues",
      desc: "Report architectural bugs, documentation gaps, or performance regressions.",
      icon: AlertCircle,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    },
    {
      title: "Submitting Pull Requests",
      desc: "Implement new interactive labs, resolve open issues, or refine layout responsiveness.",
      icon: GitPullRequest,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    },
    {
      title: "Suggesting Improvements",
      desc: "Pitch new learning tracks, interactive visualization utilities, or framework upgrades.",
      icon: Settings,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    },
    {
      title: "Building Together",
      desc: "Collaborate with a community of principal engineers, staff builders, and designers.",
      icon: Users2,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    },
  ];

  return (
    <section id="open-source" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      <div className="relative overflow-hidden rounded-2xl premium-card p-6 md:p-10 bg-card-bg/40 border border-card-border/60">
        {/* Glow background effects */}
        <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/[0.03] blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-orange-500/[0.03] blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Vision & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div>
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                Collaborative Growth
              </span>
              <h2 className="text-3xl font-black text-foreground mt-2">
                DevJam is Open Source
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-3 leading-relaxed max-w-md">
                We believe the best way to learn engineering is by building in the open. DevJam is fully community-driven. You can clone the site, review the codebases, or submit changes to help make the platform a world-class reference.
              </p>
            </div>
            
            <a
              href="https://github.com/devJam2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <GithubIcon className="h-5 w-5" />
              Contribute on GitHub
            </a>
          </div>

          {/* Right Column: Grid of Ways to Contribute */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {contributions.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex gap-4 p-4 rounded-xl border border-card-border bg-[#050811]/40 hover:bg-[#070b16]/65 hover:border-card-border transition-all duration-200"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${c.color} shadow-sm`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-foreground mb-1">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
