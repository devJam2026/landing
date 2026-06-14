"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import ProgressRing from "@/components/dsa/ProgressRing";
import { ArrowLeft, AlertCircle, Play } from "lucide-react";
import { dsaChecklists, getChecklistItems, ChecklistItem } from "@/data/dsa/checklists";
import { dsaProgressService } from "@/lib/dsaProgressService";

export default function ChecklistsOverviewClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [totalProblemsCount, setTotalProblemsCount] = useState(0);

  // Store individual checklist progress percentages
  const [checklistProgress, setChecklistProgress] = useState<Record<string, { percent: number; solved: number; total: number }>>({});

  useEffect(() => {
    // Prevent SSR hydration mismatches by resolving state after client mounts
    const solved = dsaProgressService.getSolvedProblems();
    setSolvedCount(solved.length);

    // Compute unique problems referenced across all checklists
    const uniqueSlugs = new Set<string>();
    const progressMap: Record<string, { percent: number; solved: number; total: number }> = {};

    dsaChecklists.forEach((c) => {
      const summary = dsaProgressService.getChecklistProgress(c.slug);
      progressMap[c.slug] = {
        percent: summary.percent,
        solved: summary.solvedCount,
        total: summary.totalCount
      };
      
      const items = getChecklistItems(c.slug);
      items.forEach((item: ChecklistItem) => uniqueSlugs.add(item.problemSlug));
    });

    setTotalProblemsCount(uniqueSlugs.size);
    setChecklistProgress(progressMap);
    setIsLoaded(true);
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6" data-track="dsa">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between mb-2">
        <Link
          href="/dsa"
          className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
        >
          <ArrowLeft className="h-4 w-4 text-orange-500" />
          Back to DSA Dashboard
        </Link>
        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wider">
          Practice Lists
        </span>
      </div>

      <PageHero
        kicker="Curated Compilations"
        title="Technical Interview Checklists"
        description="Master coding interview benchmarks. Work through popular structures, monitor overall percentage progress, and benchmark dynamic performance stats."
      />

      {/* Browser Local Storage notice banner */}
      <div className="flex gap-3 bg-amber-500/10 border border-amber-500/35 rounded-2xl px-4 py-3 text-xs text-amber-500 leading-relaxed font-sans max-w-full">
        <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">Browser Scoped Tracking:</span>
          Progress is currently stored in this browser. Account sync and cloud database backup will be available in a future release.
        </div>
      </div>

      {/* Stats Summary Widget */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
        <div className="premium-card rounded-2xl p-5 border-card-border/60 bg-[#050811]/90 flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted">Total Checklists</span>
          <span className="text-3xl font-black text-foreground font-mono">{dsaChecklists.length}</span>
        </div>
        <div className="premium-card rounded-2xl p-5 border-card-border/60 bg-[#050811]/90 flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted">Tracked Problems</span>
          <span className="text-3xl font-black text-foreground font-mono">{isLoaded ? totalProblemsCount : "..."}</span>
        </div>
        <div className="premium-card rounded-2xl p-5 border-card-border/60 bg-[#050811]/90 flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted">Completed Solves</span>
          <span className="text-3xl font-black text-cyan-400 font-mono">{isLoaded ? solvedCount : "..."}</span>
        </div>
      </div>

      {/* Checklists Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        {dsaChecklists.map((c) => {
          const stats = checklistProgress[c.slug] || { percent: 0, solved: 0, total: 0 };
          return (
            <div
              key={c.slug}
              data-track="dsa"
              data-checklist={c.slug}
              className="premium-card premium-card-cyan rounded-2xl p-6 border-card-border/60 flex flex-col justify-between gap-6 bg-[#050811]/90 shadow-xl transition-all duration-200 hover:border-cyan-500/25 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />

              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-black text-foreground">{c.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">{c.description}</p>
                </div>

                {isLoaded ? (
                  <ProgressRing percent={stats.percent} size={76} strokeWidth={6} />
                ) : (
                  <div className="h-[76px] w-[76px] rounded-full border border-dashed border-card-border/50 animate-pulse flex items-center justify-center text-[10px] text-text-muted font-mono">
                    ...
                  </div>
                )}
              </div>

              <div className="border-t border-card-border/40 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-mono text-text-muted font-bold">
                  {stats.solved} / {stats.total} Solved
                </span>
                <Link
                  href={`/dsa/checklists/${c.slug}`}
                  data-track="dsa"
                  data-checklist={c.slug}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/20 transition-all cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Open Checklist
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
