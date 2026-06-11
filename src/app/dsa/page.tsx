"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { Award, LayoutGrid, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { dsaPillars } from "../../data/dsa/pillars";

export default function DsaDashboardPage() {
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
  const totalProblems = 3; // Two Sum, Valid Parentheses, Climbing Stairs
  const totalProjects = 5;

  const countCompleted = (dict: Record<string, boolean>) => {
    return Object.values(dict).filter(Boolean).length;
  };

  const articlesReadCount = countCompleted(completedArticles);
  const playgroundsDoneCount = countCompleted(completedPlaygrounds);
  const problemsSolvedCount = countCompleted(completedProblems);
  const projectsBuiltCount = countCompleted(completedProjects);

  // Compute mastery score: 20% Articles, 30% Playgrounds, 50% Problems/Projects combined (problems + projects)
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
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background radial glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          <PageHero
            kicker="DSA Track"
            title="Practice & Tracker"
            description="Accelerate your competitive foundations. Complete visual playgrounds, solve code problems, and build portfolio projects."
          />

          {/* Quick tool selectors */}
          <div className="flex gap-4 mb-8">
            <Link
              href="/dsa/patterns"
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/25 bg-cyan-400/5 hover:bg-cyan-400/10 px-4 py-2.5 text-xs font-bold text-cyan-400 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              Pattern Recognition Engine
            </Link>
            <Link
              href="/dsa/practice"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-orange-500 transition-all"
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

            {/* Right Column: 12 Pillars Roadmap Previews (7/12 width) */}
            <div className="lg:col-span-7 flex flex-col gap-6 w-full">
              <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase flex items-center gap-2">
                    <LayoutGrid className="h-4 w-4" />
                    Syllabus Pillars Index
                  </h3>
                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                    Access all 12 modules representing competitive foundations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dsaPillars.map((pillar) => (
                    <Link
                      key={pillar.slug}
                      href={`/dsa/${pillar.slug}`}
                      className="block p-4 rounded-xl border border-card-border bg-[#050811]/45 hover:bg-[#070b16]/65 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200 group cursor-pointer"
                    >
                      <h4 className="text-xs font-extrabold text-foreground mb-1 group-hover:text-orange-500 transition-colors">{pillar.name}</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed mb-3 line-clamp-2">
                        {pillar.description}
                      </p>
                      <div className="flex items-center justify-between text-[8px] font-mono text-text-muted border-t border-card-border/40 pt-2">
                        <span>Articles: {pillar.articlesCount}</span>
                        <span>Labs: {pillar.playgroundsCount}</span>
                        <span>Practice: {pillar.problemsCount}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
