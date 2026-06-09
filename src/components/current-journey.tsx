"use client";

import React from "react";

export default function CurrentJourney() {
  const tracks = [
    { name: "AI Engineering", progress: 70, color: "bg-orange-500 shadow-orange-500/20" },
    { name: "Frontend Mastery", progress: 100, color: "bg-cyan-500 shadow-cyan-500/20" },
    { name: "System Design", progress: 60, color: "bg-orange-500 shadow-orange-500/20" },
    { name: "DevOps & CI/CD", progress: 40, color: "bg-cyan-500 shadow-cyan-500/20" },
  ];

  return (
    <section id="journey" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-6 scroll-mt-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column - Current Journey Progress (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Current Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-1">
              Tracking Progress
            </h2>
            <p className="text-xs text-text-muted mt-2 max-w-xl leading-relaxed">
              Documenting and quantifying key competencies as the platform grows. Follow the real-time path across core engineering tracks.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-5">
            {tracks.map((track) => (
              <div key={track.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold font-mono">
                  <span className="text-foreground">{track.name}</span>
                  <span className="text-text-muted">{track.progress}%</span>
                </div>
                
                {/* Progress bar container */}
                <div className="h-2 w-full bg-input-bg rounded-full overflow-hidden border border-card-border/40">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${track.color}`}
                    style={{ width: `${track.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Now Building Card (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full h-full justify-between">
          <div className="lg:mb-1">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Platform Status
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-1">
              Active Build
            </h2>
          </div>

          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden h-full min-h-[300px]">
            {/* Ambient background glow inside card */}
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/5 dark:bg-cyan-500/[0.02] blur-2xl -z-10" />

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted/80">Currently Building</span>
              <h3 className="text-xl font-bold text-foreground">Mini Attention Notebook</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-b border-card-border/60 py-4 font-mono text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Status</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                  <span className="font-bold text-foreground">In Progress</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">ETA</span>
                <span className="font-bold text-foreground mt-0.5">2 Weeks</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Focus</span>
              <p className="text-xs text-text-muted leading-relaxed">
                Implementing a clean, Python-based interactive visual guide to attention matrices, QKV projection layers, causal masking weights, and head dimensions.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-card-border/60 pt-4 mt-auto">
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Domain</span>
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                AI Engineering
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
