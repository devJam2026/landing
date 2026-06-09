"use client";

import React from "react";
import { Rocket } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 my-4 md:my-7 w-full">
      <div className="relative overflow-hidden rounded-2xl premium-card p-8 md:p-12">
        {/* Glow effect */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-600/10 dark:bg-orange-600/[0.04] blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-cyan-600/10 dark:bg-cyan-600/[0.04] blur-3xl -z-10 animate-pulse-slow" />
        
        <div className="relative flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-inner">
              <Rocket className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Building in public. Sharing knowledge. Creating impact.
              </h3>
              <p className="text-text-muted text-sm max-w-xl leading-relaxed">
                Join the journey and let&apos;s build the future together. Explore interactive modules, play with parameters, and visualize engineering fundamentals.
              </p>
            </div>
          </div>
          
          <a
            href="#labs"
            className="w-full lg:w-auto inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-pointer"
          >
            Explore DevJam Labs
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
