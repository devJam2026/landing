"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { 
  ArrowLeft, Search, Filter, 
  ChevronDown, ChevronUp, AlertCircle, 
  HelpCircle as QuestionIcon, Code 
} from "lucide-react";
import { dsaInterviewQuestions } from "@/data/dsa/interviewQuestions";

const CATEGORIES = [
  "All",
  "Arrays and Hashing",
  "Two Pointers",
  "Sliding Window",
  "Binary Search",
  "Linked List",
  "Stack and Queue",
  "Trees",
  "Graphs",
  "Heap",
  "Backtracking",
  "Dynamic Programming",
  "Greedy",
  "Trie",
  "Bit Manipulation",
  "Advanced DSA"
];

export default function InterviewPrepClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"All" | "Easy" | "Medium" | "Hard">("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const filteredQuestions = useMemo(() => {
    return dsaInterviewQuestions.filter((q) => {
      const matchesSearch = 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.faangDiscussion.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "All" || q.category === selectedCategory;

      const matchesDifficulty = 
        selectedDifficulty === "All" || q.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

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
        <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
          FAANG Preparation
        </span>
      </div>

      <PageHero
        kicker="Interview Prep Panel"
        title="DSA Interview Defense Q&A"
        description="Master complex algorithmic conceptual transitions. Learn how to explain trade-offs, identify structural bottlenecks, and defend your designs in systems/FAANG interviews."
      />

      {/* Interactive controls */}
      <div className="premium-card rounded-2xl p-6 border-card-border/60 flex flex-col gap-5 bg-[#050811]/90 shadow-xl">
        {/* Row 1: Search and Difficulty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search questions, answers, or FAANG discussion keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#030712] border border-card-border focus:border-cyan-500 text-foreground placeholder:text-text-muted focus:outline-none"
            />
          </div>

          {/* Difficulty filter buttons */}
          <div className="flex bg-[#030712] border border-card-border p-1 rounded-xl items-center w-full">
            {(["All", "Easy", "Medium", "Hard"] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedDifficulty === diff
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/25"
                    : "text-text-muted hover:text-foreground"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Category tags wrapping layout */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5" /> Filter by Category
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                    : "bg-[#030712] border-card-border text-text-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions counter */}
      <div className="text-xs font-bold text-text-muted flex justify-between items-center px-1">
        <span>Showing {filteredQuestions.length} Questions</span>
        {(filteredQuestions.length !== dsaInterviewQuestions.length || searchQuery !== "" || selectedCategory !== "All" || selectedDifficulty !== "All") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedDifficulty("All");
            }}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Accordion list */}
      <div className="flex flex-col gap-4 mb-12">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            const diffColor = 
              q.difficulty === "Easy"
                ? "text-green-400 border-green-500/20 bg-green-500/5"
                : q.difficulty === "Medium"
                ? "text-orange-400 border-orange-500/20 bg-orange-500/5"
                : "text-red-400 border-red-500/20 bg-red-500/5";

            return (
              <div 
                key={q.id}
                data-track="dsa"
                data-difficulty={q.difficulty}
                data-pattern={q.category}
                className="premium-card rounded-2xl border-card-border bg-[#050811]/90 overflow-hidden shadow-md transition-all duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(q.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex gap-3 items-start">
                    <QuestionIcon className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 text-[8px] font-mono font-bold uppercase rounded border ${diffColor}`}>
                          {q.difficulty}
                        </span>
                        <span className="px-2 py-0.5 text-[8px] font-mono font-bold text-text-muted bg-[#030712] rounded border border-card-border/60">
                          {q.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-extrabold text-foreground leading-snug">{q.question}</h4>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-text-muted" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-text-muted" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-card-border/50 flex flex-col gap-4 text-xs leading-relaxed animate-in slide-in-from-top-2 duration-150">
                    <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-cyan-400">
                      <span className="font-mono text-[9px] uppercase font-bold text-cyan-400">Standard Answer</span>
                      <p className="text-text-muted leading-relaxed text-[11px] font-sans">{q.answer}</p>
                    </div>

                    <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-orange-500">
                      <span className="font-mono text-[9px] uppercase font-bold text-orange-500">FAANG System Review & Trade-offs</span>
                      <p className="text-text-muted leading-relaxed text-[11px] font-sans">{q.faangDiscussion}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-3.5 rounded-xl border border-red-500/10 bg-red-500/5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] font-bold text-red-400 uppercase">Common Mistakes</span>
                        <p className="text-text-muted text-[10px] leading-relaxed font-sans">{q.commonMistakes}</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-cyan-500/10 bg-cyan-500/5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase">Follow-up Questions</span>
                        <p className="text-text-muted text-[10px] leading-relaxed font-sans">{q.followUps}</p>
                      </div>
                    </div>

                    {/* Related practice problems */}
                    {q.relatedProblems.length > 0 && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-card-border/40 text-[10px] font-mono text-text-muted">
                        <span className="flex items-center gap-1">
                          <Code className="h-3.5 w-3.5 text-text-muted animate-pulse" /> 
                          Related Practice:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {q.relatedProblems.map((probSlug) => (
                            <Link
                              key={probSlug}
                              href={`/dsa/practice/${probSlug}`}
                              data-track="dsa"
                              data-problem={probSlug}
                              className="text-cyan-400 hover:text-cyan-300 hover:underline capitalize"
                            >
                              {probSlug.replace(/-/g, " ")}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="premium-card rounded-2xl p-12 border-dashed border-card-border flex flex-col justify-center items-center text-center">
            <AlertCircle className="h-10 w-10 text-text-muted/40 mb-3" />
            <h3 className="text-base font-bold text-foreground">No Questions Found</h3>
            <p className="text-xs text-text-muted leading-relaxed mt-1 max-w-xs">
              We couldn&rsquo;t find any questions matching your search query or selected category tags.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
