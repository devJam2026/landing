"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { Search, Play } from "lucide-react";
import { dsaProblems } from "../../../data/dsa/problems";

export default function ProblemExplorerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredProblems = dsaProblems.filter((prob) => {
    const matchesDifficulty = selectedDifficulty === "All" || prob.difficulty === selectedDifficulty;
    const matchesSearch =
      prob.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prob.statement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prob.pillarSlug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          <PageHero
            kicker="DSA Practice"
            title="Problem Explorer"
            description="Master coding interviews step-by-step. Write code, visualize iterations, trace variable tables, and defend strategies against senior panel reviews."
          />

          {/* Search bar & Difficulty filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 w-full">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search problems by name, statement, or tags..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-card-border bg-[#060a13]/60 text-xs text-foreground focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    selectedDifficulty === difficulty
                      ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10"
                      : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Problems List Grid */}
          {filteredProblems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
              {filteredProblems.map((prob) => {
                const badgeColor =
                  prob.difficulty === "Easy"
                    ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                    : prob.difficulty === "Medium"
                    ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
                    : "text-rose-500 bg-rose-500/10 border-rose-500/20";

                return (
                  <Card key={prob.slug} isCyan={prob.difficulty === "Medium"}>
                    <div className="flex flex-col justify-between h-full gap-5">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
                            {prob.difficulty}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-text-muted font-mono bg-[#050912] border border-card-border px-2 py-0.5 rounded">
                            {prob.pillarSlug}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {prob.title}
                        </h3>

                        <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                          {prob.statement}
                        </p>
                      </div>

                      {/* Complexity details */}
                      <div className="grid grid-cols-2 gap-3 bg-[#050811]/50 border border-card-border/60 rounded-lg p-3 text-[10px] font-mono text-text-muted">
                        <div>
                          <span className="opacity-60 block">TIME:</span>
                          <span className="text-foreground font-bold">{prob.timeComplexity}</span>
                        </div>
                        <div>
                          <span className="opacity-60 block">SPACE:</span>
                          <span className="text-foreground font-bold">{prob.spaceComplexity}</span>
                        </div>
                      </div>

                      {/* Action trigger footer */}
                      <div className="border-t border-card-border/60 pt-4 mt-auto flex items-center justify-between">
                        <span className="text-[9px] font-mono text-text-muted uppercase">Ready for dry run</span>
                        <Link
                          href={`/dsa/practice/${prob.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <Play className="h-3 w-3 fill-current" />
                          Solve Problem
                        </Link>
                      </div>

                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-text-muted border border-card-border/50 rounded-xl bg-[#060a13]/20 mb-12">
              No matching problems found for search query or filter.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
