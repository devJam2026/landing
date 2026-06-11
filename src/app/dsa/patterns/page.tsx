"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { HelpCircle, Sparkles, AlertCircle, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { dsaPatterns } from "../../../data/dsa/patterns";

function PatternEngineContent() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic");

  // Question options states
  const [isSorted, setIsSorted] = useState<boolean | null>(null);
  const [isContiguous, setIsContiguous] = useState<boolean | null>(null);
  const [isUnweightedShortest, setIsUnweightedShortest] = useState<boolean | null>(null);
  const [isRecursiveOptimal, setIsRecursiveOptimal] = useState<boolean | null>(null);
  const [isTopKMinMax, setIsTopKMinMax] = useState<boolean | null>(null);
  const [isConnectedGrid, setIsConnectedGrid] = useState<boolean | null>(null);

  const handleReset = () => {
    setIsSorted(null);
    setIsContiguous(null);
    setIsUnweightedShortest(null);
    setIsRecursiveOptimal(null);
    setIsTopKMinMax(null);
    setIsConnectedGrid(null);
  };

  // Keep questionnaire interactive; reset inputs when focus changes to allow manual toggling
  useEffect(() => {
    handleReset();
  }, [topicParam]);

  // Classification engine rules
  const getRecommendedPattern = () => {
    if (isContiguous === true) {
      return dsaPatterns.find((p) => p.name === "Sliding Window");
    }
    if (isSorted === true) {
      if (isTopKMinMax === false && isRecursiveOptimal === false) {
        return dsaPatterns.find((p) => p.name === "Binary Search") || dsaPatterns.find((p) => p.name === "Two Pointers");
      }
      return dsaPatterns.find((p) => p.name === "Two Pointers");
    }
    if (isUnweightedShortest === true || isConnectedGrid === true) {
      return dsaPatterns.find((p) => p.name === "Graph Traversals (BFS / DFS)");
    }
    if (isRecursiveOptimal === true) {
      return dsaPatterns.find((p) => p.name === "Dynamic Programming");
    }
    if (isTopKMinMax === true) {
      return dsaPatterns.find((p) => p.name === "Heap / Priority Queue");
    }

    // Fallbacks
    if (isSorted === false && isContiguous === false && isRecursiveOptimal === false) {
      return dsaPatterns.find((p) => p.name === "Two Pointers");
    }

    return null;
  };

  const recommended = getRecommendedPattern();

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          
          {/* Breadcrumb / Back button */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to DSA Dashboard
            </Link>
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Diagnostics Engine
            </span>
          </div>

          <PageHero
            kicker="DSA Diagnostics"
            title="Pattern Recognition Engine"
            description="Deconstruct problems, identify key algorithmic triggers, and instantly isolate the optimal DSA strategy instead of memorizing solutions."
          />

          {/* Active Diagnostics Focus Banner */}
          {topicParam && (
            <div className="mb-6 flex items-center justify-between bg-cyan-500/10 border border-cyan-500/30 rounded-xl px-4 py-3 text-xs text-cyan-400">
              <div className="flex items-center gap-2">
                <span className="font-bold">Diagnostic Focus:</span>
                <span className="capitalize font-mono font-bold bg-[#030712] border border-cyan-500/25 px-2 py-0.5 rounded text-[10px]">
                  {topicParam} Attributes
                </span>
              </div>
              <Link
                href="/dsa/patterns"
                className="font-bold hover:text-cyan-300 hover:underline"
              >
                Clear Focus ×
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
            {/* Left Column: Questionnaire Diagnostic Panel (7/12 width) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-card-border pb-4">
                  <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Problem Attributes Diagnostic
                  </h3>
                  <button
                    onClick={handleReset}
                    className="text-[10px] font-bold text-text-muted hover:text-foreground hover:underline uppercase transition-all cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>

                {/* Question 1 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">1. Is the input array/collection sorted?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsSorted(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isSorted === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsSorted(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isSorted === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">2. Do we need to find contiguous sub-segments, sub-arrays, or sub-strings?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsContiguous(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isContiguous === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsContiguous(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isContiguous === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">3. Do we need to calculate the shortest path on an unweighted grid or coordinate network?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsUnweightedShortest(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isUnweightedShortest === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsUnweightedShortest(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isUnweightedShortest === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">4. Are there overlapping recursive states, optimal subproblem branches, or take/skip choices at each index?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsRecursiveOptimal(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isRecursiveOptimal === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsRecursiveOptimal(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isRecursiveOptimal === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">5. Do we need to continually extract the minimum, maximum, or top-K frequent elements from a dynamic stream?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsTopKMinMax(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isTopKMinMax === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsTopKMinMax(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isTopKMinMax === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-foreground">6. Is it a coordinate board grid or connected nodes graph component check?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsConnectedGrid(true)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isConnectedGrid === true ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsConnectedGrid(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isConnectedGrid === false ? "bg-orange-500 border-orange-500 text-white" : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Classification Outputs (5/12 width) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full animate-in fade-in duration-200">
              {recommended ? (
                <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col gap-5 border-cyan-500/20 shadow-xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />

                  <div className="flex items-center justify-between border-b border-card-border pb-3.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Classification Resolved</span>
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-foreground">{recommended.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed mt-2">
                      {recommended.description}
                    </p>
                  </div>

                  {/* Why it matches */}
                  <div className="bg-[#050811]/60 border border-card-border/50 rounded-lg p-4">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      <HelpCircle className="h-3.5 w-3.5" />
                      Algorithmic Reasoning
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans">
                      {recommended.reasoning}
                    </p>
                  </div>

                  {/* Triggers */}
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-text-muted tracking-wider mb-2.5">
                      Matching Triggers
                    </h4>
                    <ul className="flex flex-col gap-2 text-xs text-text-muted">
                      {recommended.triggers.map((t) => (
                        <li key={t} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LeetCode problems */}
                  <div className="border-t border-card-border/60 pt-4">
                    <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2">
                      Target Practice Problems
                    </h4>
                    <ul className="flex flex-col gap-1.5 text-xs font-mono text-text-muted">
                      {recommended.leetcodeProblems.map((p) => (
                        <li key={p} className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                          <ArrowRight className="h-3 w-3 text-cyan-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Read Article Button */}
                  {recommended.slug && (
                    <div className="border-t border-card-border/60 pt-4 mt-2">
                      <Link
                        href={`/articles/${recommended.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 hover:bg-cyan-500/20 transition-all cursor-pointer"
                      >
                        Read Mastering {recommended.name} Article →
                      </Link>
                    </div>
                  )}

                </div>
              ) : (
                <div className="premium-card rounded-2xl p-6 md:p-8 border-card-border/50 bg-[#060a13]/10 flex flex-col justify-center items-center text-center min-h-[350px]">
                  <AlertCircle className="h-10 w-10 text-text-muted/40 mb-3" />
                  <h3 className="text-base font-bold text-foreground">Awaiting Diagnostics</h3>
                  <p className="text-xs text-text-muted leading-relaxed mt-1 max-w-xs">
                    Select attributes on the left pane representing the problem complexity constraints to classify and reveal the optimal strategy.
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function PatternEnginePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#030712] text-text-muted flex items-center justify-center text-xs">
        Loading Diagnostics Engine...
      </div>
    }>
      <PatternEngineContent />
    </Suspense>
  );
}
