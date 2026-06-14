"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { Search, Play, ArrowLeft, HelpCircle } from "lucide-react";
import { dsaProblems } from "../../../data/dsa/problems";

const formatDataStructureName = (slug: string) => {
  const mapping: Record<string, string> = {
    arrays: "Arrays",
    strings: "Strings",
    "linked-lists": "Linked Lists",
    stacks: "Stacks",
    queues: "Queues",
    trees: "Trees",
    heaps: "Heaps",
    graphs: "Graphs",
    tries: "Tries",
    "hash-tables": "Hash Tables",
    dp: "Dynamic Programming",
    backtracking: "Backtracking",
    "binary-search": "Binary Search",
    greedy: "Greedy",
    bits: "Bit Manipulation",
    misc: "Miscellaneous",
  };
  return mapping[slug.toLowerCase()] || slug.replace(/-/g, " ");
};

export default function ProblemExplorerClient() {
  const searchParams = useSearchParams();
  const activeTopic = searchParams.get("topic");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedDataStructure, setSelectedDataStructure] = useState("All");
  const [selectedPattern, setSelectedPattern] = useState("All");

  // Synchronize dropdown state with URL query parameter
  useEffect(() => {
    if (activeTopic) {
      setSelectedDataStructure(activeTopic);
    } else {
      setSelectedDataStructure("All");
    }
  }, [activeTopic]);

  // Extract unique data structures and patterns dynamically
  const uniqueDataStructures = Array.from(
    new Set(dsaProblems.map((p) => p.pillarSlug).filter(Boolean))
  ).sort();

  const uniquePatterns = Array.from(
    new Set(dsaProblems.map((p) => p.pattern).filter(Boolean))
  ).sort();

  const filteredProblems = dsaProblems.filter((prob) => {
    const matchesDifficulty = selectedDifficulty === "All" || prob.difficulty === selectedDifficulty;
    const matchesDataStructure = selectedDataStructure === "All" || prob.pillarSlug.toLowerCase() === selectedDataStructure.toLowerCase();
    const matchesPattern = selectedPattern === "All" || prob.pattern === selectedPattern;
    const matchesSearch =
      prob.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prob.statement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prob.pillarSlug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prob.pattern && prob.pattern.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDifficulty && matchesDataStructure && matchesPattern && matchesSearch;
  });

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full" data-track="dsa">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/dsa"
          className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
        >
          <ArrowLeft className="h-4 w-4 text-orange-500" />
          Back to DSA Dashboard
        </Link>
        <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
          Practice Terminal
        </span>
      </div>

      <PageHero
        kicker="DSA Practice"
        title="Problem Explorer"
        description="Master coding interviews step-by-step. Write code, visualize iterations, trace variable tables, and defend strategies against senior panel reviews."
      />

      {/* Active Filter Banner (for URL sync clear) */}
      {activeTopic && (
        <div className="mb-6 flex items-center justify-between bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3 text-xs text-orange-500 font-sans">
          <div className="flex items-center gap-2">
            <span className="font-bold">Active Topic Filter:</span>
            <span className="capitalize font-mono font-bold bg-[#030712] border border-orange-500/25 px-2 py-0.5 rounded text-[10px]">
              {formatDataStructureName(activeTopic)}
            </span>
          </div>
          <Link
            href="/dsa/practice"
            className="font-bold hover:text-orange-400 hover:underline"
          >
            Clear Filter ×
          </Link>
        </div>
      )}

      {/* Filter Bar (Search, Difficulty, DS dropdown, Pattern dropdown) */}
      <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between mb-8 w-full">
        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, tags, patterns..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-card-border bg-[#060a13]/60 text-xs text-foreground focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>

        {/* Dropdowns & Difficulty */}
        <div className="flex flex-wrap gap-3 items-center w-full xl:w-auto">
          
          {/* Data Structure Dropdown */}
          <div className="flex items-center gap-1.5 min-w-[150px]">
            <span className="text-[10px] uppercase font-bold text-text-muted font-mono">DS:</span>
            <select
              value={selectedDataStructure}
              onChange={(e) => setSelectedDataStructure(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-xs font-bold transition-all border bg-[#060a13]/60 border-card-border text-foreground hover:border-orange-500/50 focus:outline-none cursor-pointer"
            >
              <option value="All">All Data Structures</option>
              {uniqueDataStructures.map((ds) => (
                <option key={ds} value={ds}>
                  {formatDataStructureName(ds)}
                </option>
              ))}
            </select>
          </div>

          {/* Algorithmic Pattern Dropdown */}
          <div className="flex items-center gap-1.5 min-w-[160px]">
            <span className="text-[10px] uppercase font-bold text-text-muted font-mono">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-xs font-bold transition-all border bg-[#060a13]/60 border-card-border text-foreground hover:border-orange-500/50 focus:outline-none cursor-pointer"
            >
              <option value="All">All Patterns</option>
              {uniquePatterns.map((pat) => (
                <option key={pat} value={pat}>
                  {pat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Pilla */}
          <div className="flex gap-1.5 ml-auto xl:ml-0">
            {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
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
      </div>

      {/* Problems List Grid */}
      {filteredProblems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12 animate-in fade-in duration-200">
          {filteredProblems.map((prob) => {
            const badgeColor =
              prob.difficulty === "Easy"
                ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                : prob.difficulty === "Medium"
                ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
                : "text-rose-500 bg-rose-500/10 border-rose-500/20";

            return (
              <Card key={prob.slug} isCyan={prob.difficulty === "Medium"}>
                <div className="flex flex-col justify-between h-full gap-5" data-track="dsa" data-problem={prob.slug} data-difficulty={prob.difficulty} data-pattern={prob.pattern}>
                  <div>
                    {/* Header metadata */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
                        {prob.difficulty}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-text-muted font-mono bg-[#050912] border border-card-border px-2 py-0.5 rounded">
                        {formatDataStructureName(prob.pillarSlug)}
                      </span>
                      {prob.pattern && (
                        <span className="text-[9px] font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 truncate max-w-[150px]">
                          {prob.pattern}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
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
                      data-track="dsa"
                      data-problem={prob.slug}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
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
        <div className="premium-card rounded-2xl p-12 border-dashed border-card-border flex flex-col justify-center items-center text-center mb-12">
          <HelpCircle className="h-10 w-10 text-text-muted/40 mb-3" />
          <h3 className="text-base font-bold text-foreground">No Problems Found</h3>
          <p className="text-xs text-text-muted leading-relaxed mt-1 max-w-xs">
            We couldn&rsquo;t find any problems matching your current search query or filter tags.
          </p>
        </div>
      )}
    </section>
  );
}
