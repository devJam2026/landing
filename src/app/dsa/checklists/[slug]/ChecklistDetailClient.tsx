"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Search, RefreshCw, Bookmark, CheckCircle2, 
  HelpCircle, AlertCircle, Play, Filter 
} from "lucide-react";
import PageHero from "@/components/page-hero";
import ProgressRing from "@/components/dsa/ProgressRing";
import DifficultyBreakdown from "@/components/dsa/DifficultyBreakdown";
import PatternBreakdown from "@/components/dsa/PatternBreakdown";
import ChecklistStats from "@/components/dsa/ChecklistStats";
import ChecklistProblemCard from "@/components/dsa/ChecklistProblemCard";

import { Checklist, getChecklistItems } from "@/data/dsa/checklists";
import { dsaProgressService } from "@/lib/dsaProgressService";

interface ChecklistDetailClientProps {
  checklist: Checklist;
}

export default function ChecklistDetailClient({ checklist }: ChecklistDetailClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Local copies of progress lists to enable instant UI updates
  const [solvedSlugs, setSolvedSlugs] = useState<string[]>([]);
  const [attemptedSlugs, setAttemptedSlugs] = useState<string[]>([]);
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>([]);

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<"All" | "Easy" | "Medium" | "Hard">("All");

  const checklistItems = useMemo(() => {
    return getChecklistItems(checklist.slug);
  }, [checklist.slug]);

  // Load local storage progress on mount
  useEffect(() => {
    setSolvedSlugs(dsaProgressService.getSolvedProblems());
    setAttemptedSlugs(dsaProgressService.getAttemptedProblems());
    setBookmarkedSlugs(dsaProgressService.getBookmarkedProblems());
    setIsLoaded(true);
  }, []);

  // Sync callbacks
  const handleToggleSolved = (slug: string) => {
    if (solvedSlugs.includes(slug)) {
      dsaProgressService.unmarkSolved(slug);
      setSolvedSlugs(prev => prev.filter(s => s !== slug));
    } else {
      dsaProgressService.markSolved(slug);
      setSolvedSlugs(prev => [...prev, slug]);
      // Remove from attempted in state too
      setAttemptedSlugs(prev => prev.filter(s => s !== slug));
    }
  };

  const handleToggleAttempted = (slug: string) => {
    if (attemptedSlugs.includes(slug)) {
      dsaProgressService.unmarkAttempted(slug);
      setAttemptedSlugs(prev => prev.filter(s => s !== slug));
    } else {
      dsaProgressService.markAttempted(slug);
      setAttemptedSlugs(prev => [...prev, slug]);
    }
  };

  const handleToggleBookmark = (slug: string) => {
    const bookmarked = dsaProgressService.toggleBookmark(slug);
    if (bookmarked) {
      setBookmarkedSlugs(prev => [...prev, slug]);
    } else {
      setBookmarkedSlugs(prev => prev.filter(s => s !== slug));
    }
  };

  const handleResetProgress = () => {
    if (confirm(`Are you sure you want to reset all solved and attempted progress for the ${checklist.title} checklist?`)) {
      dsaProgressService.resetChecklistProgress(checklist.slug);
      // Reload states
      setSolvedSlugs(dsaProgressService.getSolvedProblems());
      setAttemptedSlugs(dsaProgressService.getAttemptedProblems());
    }
  };

  // Compute stats on active checklist
  const stats = useMemo(() => {
    const totalCount = checklistItems.length;
    if (totalCount === 0) {
      return {
        solved: 0,
        attempted: 0,
        remaining: 0,
        percent: 0,
        easySolved: 0,
        easyTotal: 0,
        mediumSolved: 0,
        mediumTotal: 0,
        hardSolved: 0,
        hardTotal: 0,
        patterns: {} as Record<string, { solved: number; total: number }>,
      };
    }

    const solved = checklistItems.filter(item => solvedSlugs.includes(item.problemSlug)).length;
    const attempted = checklistItems.filter(item => attemptedSlugs.includes(item.problemSlug)).length;
    const remaining = Math.max(0, totalCount - solved);
    const percent = Math.round((solved / totalCount) * 100);

    // Difficulty stats
    const easyTotal = checklistItems.filter(item => item.difficulty === "Easy").length;
    const easySolved = checklistItems.filter(item => item.difficulty === "Easy" && solvedSlugs.includes(item.problemSlug)).length;
    
    const mediumTotal = checklistItems.filter(item => item.difficulty === "Medium").length;
    const mediumSolved = checklistItems.filter(item => item.difficulty === "Medium" && solvedSlugs.includes(item.problemSlug)).length;

    const hardTotal = checklistItems.filter(item => item.difficulty === "Hard").length;
    const hardSolved = checklistItems.filter(item => item.difficulty === "Hard" && solvedSlugs.includes(item.problemSlug)).length;

    // Pattern stats
    const patterns: Record<string, { solved: number; total: number }> = {};
    checklistItems.forEach(item => {
      item.patternTags.forEach(tag => {
        if (!patterns[tag]) {
          patterns[tag] = { solved: 0, total: 0 };
        }
        patterns[tag].total++;
        if (solvedSlugs.includes(item.problemSlug)) {
          patterns[tag].solved++;
        }
      });
    });

    return {
      solved,
      attempted,
      remaining,
      percent,
      easySolved,
      easyTotal,
      mediumSolved,
      mediumTotal,
      hardSolved,
      hardTotal,
      patterns
    };
  }, [checklistItems, solvedSlugs, attemptedSlugs]);

  // Filtered problem items list
  const filteredItems = useMemo(() => {
    return checklistItems.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.patternTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDifficulty =
        filterDifficulty === "All" || item.difficulty === filterDifficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [checklistItems, searchQuery, filterDifficulty]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full flex flex-col gap-6" data-track="dsa">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between mb-2">
        <Link
          href="/dsa/checklists"
          className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
        >
          <ArrowLeft className="h-4 w-4 text-orange-500" />
          Back to Checklists Overview
        </Link>
        <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
          Checklist Progress
        </span>
      </div>

      <PageHero
        kicker="Interactive Checklist"
        title={checklist.title}
        description={checklist.description}
      />

      {/* Notice Banner */}
      <div className="flex gap-3 bg-amber-500/10 border border-amber-500/35 rounded-2xl px-4 py-3 text-xs text-amber-500 leading-relaxed font-sans max-w-full">
        <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">Browser Scoped Tracking:</span>
          Progress is currently stored in this browser. Account sync and cloud database backup will be available in a future release.
        </div>
      </div>

      {/* Main Grid: Left Side Sidebar Stats / Right Side Problems List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
        
        {/* Sticky Sidebar (5/12 width) - Stacked on mobile */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
          
          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 relative overflow-hidden bg-[#050811]/90 shadow-xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />
            
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 self-start">
              Checklist Mastery
            </span>

            {isLoaded ? (
              <ProgressRing percent={stats.percent} size={130} strokeWidth={8} />
            ) : (
              <div className="h-[130px] w-[130px] rounded-full border border-dashed border-card-border/50 animate-pulse flex items-center justify-center text-xs text-text-muted font-mono">
                Loading...
              </div>
            )}

            <ChecklistStats
              solvedCount={isLoaded ? stats.solved : 0}
              attemptedCount={isLoaded ? stats.attempted : 0}
              totalCount={checklistItems.length}
            />

            <div className="w-full flex justify-between items-center pt-2 border-t border-card-border/40">
              <span className="text-[9px] text-text-muted font-mono uppercase">
                Progress Active
              </span>
              <button
                onClick={handleResetProgress}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer select-none"
              >
                <RefreshCw className="h-3 w-3" /> Reset Progress
              </button>
            </div>
          </div>

          {/* Difficulty & Pattern breakdowns */}
          <div className="premium-card rounded-2xl p-6 flex flex-col gap-6 bg-[#050811]/90 border-card-border/60 shadow-xl">
            <DifficultyBreakdown
              easyCount={stats.easySolved}
              easyTotal={stats.easyTotal}
              mediumCount={stats.mediumSolved}
              mediumTotal={stats.mediumTotal}
              hardCount={stats.hardSolved}
              hardTotal={stats.hardTotal}
            />

            <div className="border-t border-card-border/40 pt-4">
              <PatternBreakdown patternStats={stats.patterns} />
            </div>
          </div>

        </div>

        {/* Problems Directory (8/12 width) */}
        <div className="lg:col-span-8 flex flex-col gap-5 w-full">
          
          {/* Filters card */}
          <div className="premium-card rounded-xl p-4 border-card-border/60 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#050811]/90 shadow-xl">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search by problem name or patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#030712] border border-card-border focus:border-cyan-500 text-foreground placeholder:text-text-muted focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-text-muted font-bold flex items-center gap-1">
                <Filter className="h-3.5 w-3.5" /> Difficulty:
              </span>
              <div className="flex bg-[#030712] border border-card-border p-1 rounded-xl items-center">
                {(["All", "Easy", "Medium", "Hard"] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setFilterDifficulty(diff)}
                    className={`px-3 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      filterDifficulty === diff
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-text-muted hover:text-foreground border border-transparent"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Table View / Mobile Cards layout */}
          {isLoaded ? (
            filteredItems.length > 0 ? (
              <>
                {/* Desktop view: Table */}
                <div className="hidden md:block premium-card rounded-2xl overflow-hidden border-card-border/60 shadow-xl bg-[#050811]/90">
                  <div className="overflow-x-auto w-full">
                    <table className="min-w-full text-left font-sans text-xs">
                      <thead className="border-b border-card-border bg-[#050811] text-[10px] uppercase font-mono tracking-wider text-text-muted">
                        <tr>
                          <th className="px-5 py-4 font-bold w-12 text-center">Status</th>
                          <th className="px-5 py-4 font-bold"># Problem</th>
                          <th className="px-5 py-4 font-bold">Difficulty</th>
                          <th className="px-5 py-4 font-bold">Category</th>
                          <th className="px-5 py-4 font-bold">Pattern Tags</th>
                          <th className="px-5 py-4 font-bold text-center w-12">Bookmark</th>
                          <th className="px-5 py-4 font-bold text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-card-border/30">
                        {filteredItems.map((item) => {
                          const isSolved = solvedSlugs.includes(item.problemSlug);
                          const isAttempted = attemptedSlugs.includes(item.problemSlug);
                          const isBookmarked = bookmarkedSlugs.includes(item.problemSlug);

                          const diffBadgeColor =
                            item.difficulty === "Easy"
                              ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                              : item.difficulty === "Medium"
                              ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
                              : "text-rose-500 bg-rose-500/10 border-rose-500/20";

                          return (
                            <tr
                              key={item.problemSlug}
                              data-track="dsa"
                              data-checklist={checklist.slug}
                              data-problem={item.problemSlug}
                              data-difficulty={item.difficulty}
                              className={`hover:bg-[#060a13]/30 transition-colors ${
                                isSolved
                                  ? "bg-green-500/[0.01]"
                                  : isAttempted
                                  ? "bg-orange-500/[0.01]"
                                  : ""
                              }`}
                            >
                              {/* Status check */}
                              <td className="px-5 py-4 text-center">
                                <button
                                  onClick={() => handleToggleSolved(item.problemSlug)}
                                  className="text-text-muted hover:text-green-400 transition-colors cursor-pointer"
                                  title={isSolved ? "Mark unsolved" : "Mark solved"}
                                >
                                  {isSolved ? (
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mx-auto" />
                                  ) : (
                                    <div className="h-5 w-5 rounded-full border border-card-border/60 mx-auto hover:border-green-400/40" />
                                  )}
                                </button>
                              </td>

                              {/* Problem number & Title */}
                              <td className="px-5 py-4">
                                <div className="flex items-center gap-2.5">
                                  <span className="font-mono text-text-muted font-bold">
                                    {item.order}
                                  </span>
                                  <span className="font-bold text-foreground text-sm hover:text-orange-500 transition-colors">
                                    {item.title}
                                  </span>
                                </div>
                              </td>

                              {/* Difficulty */}
                              <td className="px-5 py-4">
                                <span className={`inline-flex items-center text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${diffBadgeColor}`}>
                                  {item.difficulty}
                                </span>
                              </td>

                              {/* Category */}
                              <td className="px-5 py-4 font-semibold text-text-muted">
                                {item.category}
                              </td>

                              {/* Pattern Tags */}
                              <td className="px-5 py-4">
                                <div className="flex flex-wrap gap-1 max-w-xs">
                                  {item.patternTags.map((tag) => (
                                    <span
                                      key={tag}
                                      data-track="dsa"
                                      data-pattern={tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                                      className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded truncate"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </td>

                              {/* Bookmark */}
                              <td className="px-5 py-4 text-center">
                                <button
                                  onClick={() => handleToggleBookmark(item.problemSlug)}
                                  className={`transition-colors cursor-pointer ${
                                    isBookmarked
                                      ? "text-orange-500 hover:text-orange-400"
                                      : "text-text-muted hover:text-foreground"
                                  }`}
                                  title="Bookmark"
                                >
                                  <Bookmark className="h-4.5 w-4.5 mx-auto" fill={isBookmarked ? "currentColor" : "none"} />
                                </button>
                              </td>

                              {/* Actions */}
                              <td className="px-5 py-4 text-right">
                                <div className="inline-flex gap-2">
                                  <button
                                    onClick={() => handleToggleAttempted(item.problemSlug)}
                                    disabled={isSolved}
                                    className={`p-1.5 rounded border transition-colors cursor-pointer ${
                                      isAttempted
                                        ? "border-orange-500/30 text-orange-400 bg-orange-500/5"
                                        : "border-card-border text-text-muted hover:text-foreground bg-[#030712]"
                                    }`}
                                    title="Mark Attempting"
                                  >
                                    <HelpCircle className="h-3.5 w-3.5" />
                                  </button>
                                  <Link
                                    href={`/dsa/practice/${item.problemSlug}`}
                                    className="p-1.5 rounded border border-card-border text-text-muted hover:text-orange-500 hover:border-orange-500/40 bg-[#030712] transition-all cursor-pointer"
                                    title="Solve Problem"
                                  >
                                    <Play className="h-3.5 w-3.5 fill-current" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile view: Cards list */}
                <div className="grid grid-cols-1 gap-4 block md:hidden">
                  {filteredItems.map((item) => {
                    const isSolved = solvedSlugs.includes(item.problemSlug);
                    const isAttempted = attemptedSlugs.includes(item.problemSlug);
                    const isBookmarked = bookmarkedSlugs.includes(item.problemSlug);

                    return (
                      <ChecklistProblemCard
                        key={item.problemSlug}
                        item={item}
                        isSolved={isSolved}
                        isAttempted={isAttempted}
                        isBookmarked={isBookmarked}
                        onToggleSolved={() => handleToggleSolved(item.problemSlug)}
                        onToggleAttempted={() => handleToggleAttempted(item.problemSlug)}
                        onToggleBookmark={() => handleToggleBookmark(item.problemSlug)}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              // Empty search/filter state
              <div className="premium-card rounded-2xl p-12 border-dashed border-card-border flex flex-col justify-center items-center text-center bg-[#050811]/90 shadow-xl">
                <HelpCircle className="h-10 w-10 text-text-muted/40 mb-3" />
                <h3 className="text-base font-bold text-foreground">No Problems Found</h3>
                <p className="text-xs text-text-muted leading-relaxed mt-1 max-w-xs">
                  We couldn&rsquo;t find any problems matching your search query or selected difficulty tags in this checklist.
                </p>
              </div>
            )
          ) : (
            // Loading placeholder
            <div className="premium-card rounded-2xl p-12 border border-card-border flex flex-col justify-center items-center text-center bg-[#050811]/90 shadow-xl">
              <span className="text-xs text-text-muted font-mono animate-pulse">
                Initializing Practice Checklist data...
              </span>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
