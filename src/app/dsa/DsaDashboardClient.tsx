"use client";
import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { dsaTracks, dsaModules } from "../../data/dsa/roadmap";
import { Sparkles, TrendingUp, Award, CheckCircle2, LayoutGrid } from "lucide-react";

export default function DsaDashboardClient() {
  // Mastery tracking states
  const [completedArticles, setCompletedArticles] = useState<Record<string, boolean>>({
    "Complexity Matters": true,
    "Array Fundamentals": true,
    "String Hashing": false,
  });

  const [completedPlaygrounds, setCompletedPlaygrounds] = useState<Record<string, boolean>>({
    "Complexity Visualizer": true,
    "Array Explorer": false,
    "BST Traversal": false,
  });

  const [completedProblems, setCompletedProblems] = useState<Record<string, boolean>>({
    "Two Sum": true,
    "Valid Parentheses": true,
    "Climbing Stairs": false,
  });

  const [completedProjects, setCompletedProjects] = useState<Record<string, boolean>>({
    "Benchmark Tool": false,
    "Expense Analyzer": false,
  });

  const totalArticles = 20;
  const totalPlaygrounds = 10;
  const totalProblems = 3;
  const totalProjects = 5;

  const countCompleted = (dict: Record<string, boolean>) => {
    return Object.values(dict).filter(Boolean).length;
  };

  const articlesReadCount = countCompleted(completedArticles);
  const playgroundsDoneCount = countCompleted(completedPlaygrounds);
  const problemsSolvedCount = countCompleted(completedProblems);
  const projectsBuiltCount = countCompleted(completedProjects);

  const calculateMastery = () => {
    const articleRatio = articlesReadCount / totalArticles;
    const playgroundRatio = playgroundsDoneCount / totalPlaygrounds;
    const problemRatio = (problemsSolvedCount + projectsBuiltCount) / (totalProblems + totalProjects);
    
    const score = (0.2 * articleRatio + 0.3 * playgroundRatio + 0.5 * problemRatio) * 100;
    return Math.min(100, Math.round(score));
  };

  const masteryPercent = calculateMastery();

  const handleToggleArticle = (name: string) => {
    setCompletedArticles((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleTogglePlayground = (name: string) => {
    setCompletedPlaygrounds((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleToggleProblem = (name: string) => {
    setCompletedProblems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleToggleProject = (name: string) => {
    setCompletedProjects((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full" data-track="dsa">
      <PageHero
        kicker="DSA Track"
        title="Practice & Tracker"
        description="Accelerate your competitive foundations. Complete visual playgrounds, solve code problems, and build portfolio projects."
      />

      {/* Quick tool selectors */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          href="/dsa/patterns"
          data-track="dsa"
          data-module="patterns"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-500/25 bg-cyan-400/5 hover:bg-cyan-400/10 px-4 py-2.5 text-xs font-bold text-cyan-400 transition-all cursor-pointer"
        >
          <Sparkles className="h-4 w-4" />
          Pattern Recognition Engine
        </Link>
        <Link
          href="/dsa/practice"
          data-track="dsa"
          data-module="practice"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-orange-500 transition-all cursor-pointer"
        >
          <TrendingUp className="h-4 w-4" />
          Problem Explorer
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
        
        {/* Left Column: Progress Checklists (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Mastery progress circle card */}
          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Mastery Dashboard</span>
            
            <div className="flex items-center gap-6">
              {/* Glowing percentage */}
              <div className="text-4xl sm:text-5xl font-black text-foreground font-mono tracking-tight select-all">
                {masteryPercent}%
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-foreground">DSA Competency Level</span>
                <span className="text-[10px] text-text-muted">
                  Articles Read: {articlesReadCount}/{totalArticles} • Playgrounds: {playgroundsDoneCount}/{totalPlaygrounds}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full bg-input-bg rounded-full overflow-hidden border border-card-border/60">
              <div
                className="h-full bg-cyan-400 rounded-full transition-all duration-500 shadow-md shadow-cyan-400/25"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
          </div>

          {/* Progress Checklists card */}
          <div className="premium-card rounded-2xl p-6 flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase border-b border-card-border pb-3.5 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Competency Checklist
            </h3>

            {/* Articles checklist */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">Articles Read</h4>
              <div className="flex flex-col gap-2.5 pl-1">
                {Object.entries(completedArticles).map(([name, isChecked]) => (
                  <button
                    key={name}
                    onClick={() => handleToggleArticle(name)}
                    data-track="dsa"
                    data-action="toggle-article"
                    className="flex items-center gap-2.5 text-xs text-text-muted hover:text-foreground text-left cursor-pointer transition-colors"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border border-text-muted/40 shrink-0" />
                    )}
                    <span className={isChecked ? "line-through opacity-60" : ""}>{name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Playgrounds checklist */}
            <div className="flex flex-col gap-3 border-t border-card-border/60 pt-4">
              <h4 className="text-xs font-bold text-foreground">Playgrounds Completed</h4>
              <div className="flex flex-col gap-2.5 pl-1">
                {Object.entries(completedPlaygrounds).map(([name, isChecked]) => (
                  <button
                    key={name}
                    onClick={() => handleTogglePlayground(name)}
                    data-track="dsa"
                    data-action="toggle-playground"
                    className="flex items-center gap-2.5 text-xs text-text-muted hover:text-foreground text-left cursor-pointer transition-colors"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border border-text-muted/40 shrink-0" />
                    )}
                    <span className={isChecked ? "line-through opacity-60" : ""}>{name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Problems checklist */}
            <div className="flex flex-col gap-3 border-t border-card-border/60 pt-4">
              <h4 className="text-xs font-bold text-foreground">Problems Solved</h4>
              <div className="flex flex-col gap-2.5 pl-1">
                {Object.entries(completedProblems).map(([name, isChecked]) => (
                  <button
                    key={name}
                    onClick={() => handleToggleProblem(name)}
                    data-track="dsa"
                    data-action="toggle-problem"
                    className="flex items-center gap-2.5 text-xs text-text-muted hover:text-foreground text-left cursor-pointer transition-colors"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border border-text-muted/40 shrink-0" />
                    )}
                    <span className={isChecked ? "line-through opacity-60" : ""}>{name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects checklist */}
            <div className="flex flex-col gap-3 border-t border-card-border/60 pt-4">
              <h4 className="text-xs font-bold text-foreground">Portfolio Projects Built</h4>
              <div className="flex flex-col gap-2.5 pl-1">
                {Object.entries(completedProjects).map(([name, isChecked]) => (
                  <button
                    key={name}
                    onClick={() => handleToggleProject(name)}
                    data-track="dsa"
                    data-action="toggle-project"
                    className="flex items-center gap-2.5 text-xs text-text-muted hover:text-foreground text-left cursor-pointer transition-colors"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="h-4.5 w-4.5 text-orange-500 shrink-0" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border border-text-muted/40 shrink-0" />
                    )}
                    <span className={isChecked ? "line-through opacity-60" : ""}>{name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Dynamic Roadmap Tracks & Modules (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                Learning Roadmap Tracks
              </h3>
              <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                Progress through structured paths to master concepts, algorithms, and FAANG interviews.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {Object.values(dsaTracks).map((track) => (
                <div key={track.slug} className="flex flex-col gap-4">
                  <div className="border-b border-card-border/60 pb-2">
                    <h4 className="text-xs font-bold text-orange-500 font-mono uppercase tracking-wider">{track.title}</h4>
                    <p className="text-[10px] text-text-muted mt-0.5 leading-relaxed">{track.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {track.modules.map((mSlug) => {
                      const mod = dsaModules[mSlug];
                      if (!mod) return null;
                      const isComingSoon = mod.status === "coming-soon";
                      const isInProgress = mod.status === "in-progress";

                      return isComingSoon ? (
                        <div
                          key={mSlug}
                          className="block p-4 rounded-xl border border-card-border/40 bg-[#050811]/10 opacity-50 relative overflow-hidden select-none"
                        >
                          <div className="absolute right-2 top-2 bg-text-muted/10 border border-text-muted/20 px-1.5 py-0.5 rounded text-[7px] font-mono text-text-muted uppercase tracking-wider font-extrabold">
                            Soon
                          </div>
                          <h5 className="text-xs font-extrabold text-text-muted mb-1">{mod.title}</h5>
                          <p className="text-[10px] text-text-muted/60 leading-relaxed line-clamp-2">
                            {mod.description}
                          </p>
                        </div>
                      ) : (
                        <Link
                          key={mSlug}
                          href={`/dsa/${mod.slug}`}
                          data-track="dsa"
                          data-module={mod.slug}
                          className="block p-4 rounded-xl border border-card-border bg-[#050811]/45 hover:bg-[#070b16]/65 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200 group cursor-pointer relative"
                        >
                          {isInProgress ? (
                            <div className="absolute right-2 top-2 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded text-[7px] font-mono text-amber-500 uppercase tracking-wider font-extrabold">
                              Active
                            </div>
                          ) : (
                            <div className="absolute right-2 top-2 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[7px] font-mono text-emerald-400 uppercase tracking-wider font-extrabold">
                              Ready
                            </div>
                          )}
                          <h5 className="text-xs font-extrabold text-foreground mb-1 group-hover:text-orange-500 transition-colors">{mod.title}</h5>
                          <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                            {mod.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
