"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { 
  CheckCircle2, AlertTriangle, Eye, 
  FileText, ListFilter, Play, 
  BookOpen, Search, HelpCircle as HelpIcon, ArrowLeft
} from "lucide-react";
import { dsaPatterns } from "@/data/dsa/patterns";
import { dsaVisualizations } from "@/data/dsa/visualizations";
import { dsaInterviewQuestions } from "@/data/dsa/interviewQuestions";
import { dsaProblems } from "@/data/dsa/problems";
import { articles } from "@/data/articles";
import { dsaConcepts } from "@/data/dsa/concepts";

type FilterType = 
  | "all" 
  | "complete" 
  | "in-progress" 
  | "coming-soon" 
  | "missing-playground" 
  | "missing-visualization" 
  | "missing-interview";

export default function PatternCoverageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper resolvers for each pattern's coverage metrics
  const patternMetrics = useMemo(() => {
    return dsaPatterns.map(pattern => {
      const slug = pattern.slug || "";
      const name = pattern.name.toLowerCase();
      const moduleMapping = pattern.roadmapModuleMapping || "";

      // 1. Concept Page: Exists if key matches in dsaConcepts
      const hasConceptPage = !!dsaConcepts[moduleMapping] || !!dsaConcepts[slug];
      const conceptSlug = dsaConcepts[moduleMapping]?.slug || dsaConcepts[slug]?.slug || null;

      // 2. Visualization: Exists in dsaVisualizations
      const matchingVis = Object.values(dsaVisualizations).find(v => 
        v.conceptSlug === moduleMapping || 
        v.slug === slug || 
        v.conceptSlug === slug
      );
      const hasVisualization = !!matchingVis;

      // 3. Article: Exists in articles dataset
      const matchingArticle = articles.find(a => a.slug === slug || a.title.toLowerCase().includes(name));
      const hasArticle = !!matchingArticle;

      // 4. Practice problems matching this pattern (mapped from problem database)
      const matchingPracticeProblems = dsaProblems.filter(prob => 
        prob.pattern?.toLowerCase().includes(name) || 
        prob.pillarSlug.toLowerCase() === moduleMapping.toLowerCase()
      );

      // 5. Interactive Playground: We have a practice page if we have at least 1 practice problem
      const playgroundProblem = matchingPracticeProblems[0] || null;
      const hasPlayground = !!playgroundProblem;

      // 6. Interview Questions matching this pattern
      const matchingInterviewQuestions = dsaInterviewQuestions.filter(q => 
        q.category.toLowerCase().includes(name) || 
        q.category.toLowerCase().includes(moduleMapping.toLowerCase())
      );
      const hasInterviewQuestions = matchingInterviewQuestions.length > 0;

      return {
        ...pattern,
        hasConceptPage,
        conceptSlug,
        hasVisualization,
        visSlug: matchingVis?.slug || null,
        hasArticle,
        articleSlug: matchingArticle?.slug || null,
        practiceCount: matchingPracticeProblems.length,
        playgroundSlug: playgroundProblem?.slug || null,
        interviewCount: matchingInterviewQuestions.length,
        hasPlayground,
        hasInterviewQuestions
      };
    });
  }, []);

  // Filtered patterns
  const filteredPatterns = useMemo(() => {
    return patternMetrics.filter(pattern => {
      // Search query filter
      const matchesSearch = 
        pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pattern.roadmapModuleMapping || "").toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Status/Metric filters
      switch (activeFilter) {
        case "complete":
          return pattern.status === "complete";
        case "in-progress":
          return pattern.status === "in-progress";
        case "coming-soon":
          return pattern.status === "coming-soon";
        case "missing-playground":
          return !pattern.hasPlayground && pattern.status !== "coming-soon";
        case "missing-visualization":
          return !pattern.hasVisualization && pattern.status !== "coming-soon";
        case "missing-interview":
          return !pattern.hasInterviewQuestions && pattern.status !== "coming-soon";
        default:
          return true;
      }
    });
  }, [patternMetrics, activeFilter, searchQuery]);

  // Statistics summaries
  const stats = useMemo(() => {
    const total = patternMetrics.length;
    const complete = patternMetrics.filter(p => p.status === "complete").length;
    const partial = patternMetrics.filter(p => p.status === "in-progress").length;
    const comingSoon = patternMetrics.filter(p => p.status === "coming-soon").length;

    // Missing asset assets
    const missingPlayground = patternMetrics.filter(p => !p.hasPlayground && p.status !== "coming-soon").length;
    const missingVis = patternMetrics.filter(p => !p.hasVisualization && p.status !== "coming-soon").length;
    const missingQuestions = patternMetrics.filter(p => !p.hasInterviewQuestions && p.status !== "coming-soon").length;

    return {
      total,
      complete,
      partial,
      comingSoon,
      missingPlayground,
      missingVis,
      missingQuestions
    };
  }, [patternMetrics]);

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
        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wider">
          System Audit
        </span>
      </div>

      <PageHero
        kicker="DSA Coverage Map"
        title="DSA Pattern Coverage & Quality Audit"
        description="Detailed quality matrices showing visualization availability, interactive playground status, interview coverage, and production readiness for each LeetCode pattern."
      />

      {/* Metrics summary widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-card-border/50">
          <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Total Patterns</span>
          <span className="text-2xl font-black text-foreground">{stats.total}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-green-500/20 bg-green-500/5">
          <span className="text-[10px] uppercase font-bold text-green-400 tracking-wider">Complete</span>
          <span className="text-2xl font-black text-green-400">{stats.complete}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-orange-500/20 bg-orange-500/5">
          <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Partial / Progress</span>
          <span className="text-2xl font-black text-orange-400">{stats.partial}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-gray-500/20 bg-gray-500/5">
          <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Coming Soon</span>
          <span className="text-2xl font-black text-text-muted">{stats.comingSoon}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-red-500/20 bg-red-500/5 cursor-pointer hover:border-red-500/40 transition-colors" onClick={() => setActiveFilter("missing-playground")}>
          <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider flex items-center gap-1">
            No Playground
          </span>
          <span className="text-2xl font-black text-red-400">{stats.missingPlayground}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-red-500/20 bg-red-500/5 cursor-pointer hover:border-red-500/40 transition-colors" onClick={() => setActiveFilter("missing-visualization")}>
          <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">No Visualization</span>
          <span className="text-2xl font-black text-red-400">{stats.missingVis}</span>
        </div>
        <div className="premium-card rounded-xl p-4 flex flex-col gap-1 border-red-500/20 bg-red-500/5 cursor-pointer hover:border-red-500/40 transition-colors" onClick={() => setActiveFilter("missing-interview")}>
          <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">No Q&A</span>
          <span className="text-2xl font-black text-red-400">{stats.missingQuestions}</span>
        </div>
      </div>

      {/* Search and Filters Controls */}
      <div className="premium-card rounded-xl p-4 mb-6 border-card-border/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-text-muted font-bold flex items-center gap-1.5 mr-2">
            <ListFilter className="h-4 w-4" /> Filters:
          </span>
          {(
            [
              { id: "all", label: "All" },
              { id: "complete", label: "Complete" },
              { id: "in-progress", label: "Partial" },
              { id: "coming-soon", label: "Coming Soon" },
              { id: "missing-playground", label: "Missing Playground" },
              { id: "missing-visualization", label: "Missing Visualization" },
              { id: "missing-interview", label: "Missing Interview Questions" }
            ] as const
          ).map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                activeFilter === f.id
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                  : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search patterns or modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-[#030712] border border-card-border focus:border-cyan-500 text-foreground placeholder:text-text-muted focus:outline-none"
          />
        </div>
      </div>

      {/* Desktop view of patterns (table) */}
      <div className="hidden md:block premium-card rounded-2xl overflow-hidden border-card-border/60 shadow-xl mb-12">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-left font-sans text-xs">
            <thead className="border-b border-card-border bg-[#050811] text-[10px] uppercase font-mono tracking-wider text-text-muted">
              <tr>
                <th className="px-5 py-4 font-bold">Pattern Name</th>
                <th className="px-5 py-4 font-bold">Status</th>
                <th className="px-5 py-4 font-bold">Complexity</th>
                <th className="px-5 py-4 font-bold">Concept Page</th>
                <th className="px-5 py-4 font-bold">Visualization</th>
                <th className="px-5 py-4 font-bold font-sans">Playground</th>
                <th className="px-5 py-4 font-bold">Interview Qs</th>
                <th className="px-5 py-4 font-bold font-sans">Benchmark Problems</th>
                <th className="px-5 py-4 font-bold">Article</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/30">
              {filteredPatterns.length > 0 ? (
                filteredPatterns.map((pattern, idx) => (
                  <tr key={idx} className="hover:bg-[#060a13]/30 transition-colors">
                    {/* Name */}
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-foreground text-sm">{pattern.name}</span>
                        <span className="text-[10px] font-mono text-text-muted font-bold capitalize">
                          Module: {pattern.roadmapModuleMapping || "misc"}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      {pattern.status === "complete" && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                          <CheckCircle2 className="h-3 w-3" /> Complete
                        </span>
                      )}
                      {pattern.status === "in-progress" && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                          <AlertTriangle className="h-3 w-3" /> In Progress
                        </span>
                      )}
                      {pattern.status === "coming-soon" && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-text-muted bg-gray-500/10 border border-gray-500/20 px-2 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                    </td>

                    {/* Complexity */}
                    <td className="px-5 py-4 font-mono text-text-muted">
                      {pattern.complexity || "O(N) / O(1)"}
                    </td>

                    {/* Concept Page */}
                    <td className="px-5 py-4">
                      {pattern.conceptSlug ? (
                        <Link 
                          href={`/dsa/${pattern.conceptSlug}`}
                          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold hover:underline"
                        >
                          <BookOpen className="h-3.5 w-3.5" /> View
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-bold">
                          Missing
                        </span>
                      )}
                    </td>

                    {/* Visualization */}
                    <td className="px-5 py-4">
                      {pattern.hasVisualization ? (
                        <Link 
                          href={`/dsa/${pattern.conceptSlug || pattern.slug}#visualizer`}
                          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold hover:underline"
                        >
                          <Eye className="h-3.5 w-3.5" /> Ready
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-bold">
                          Missing
                        </span>
                      )}
                    </td>

                    {/* Playground */}
                    <td className="px-5 py-4">
                      {pattern.hasPlayground ? (
                        <Link 
                          href={`/dsa/practice/${pattern.playgroundSlug}`}
                          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold hover:underline"
                        >
                          <Play className="h-3.5 w-3.5" /> Open
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-bold">
                          Missing
                        </span>
                      )}
                    </td>

                    {/* Interview Qs */}
                    <td className="px-5 py-4">
                      {pattern.interviewCount > 0 ? (
                        <Link 
                          href="/dsa/interview"
                          className="inline-flex items-center gap-1.5 text-foreground hover:text-cyan-400 font-bold"
                        >
                          <HelpIcon className="h-3.5 w-3.5 text-cyan-400" />
                          <span className="font-mono bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-[10px] text-cyan-400 font-bold">
                            {pattern.interviewCount} Qs
                          </span>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-bold">
                          None
                        </span>
                      )}
                    </td>

                    {/* Benchmark Problems */}
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1 max-w-xs">
                        <span className="font-bold font-mono text-[10px]">
                          Total: {pattern.leetcodeProblems.length || 0}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {pattern.leetcodeProblems.slice(0, 2).map((prob, pi) => (
                            <span key={pi} className="text-[9px] font-mono text-text-muted bg-[#050811] border border-card-border/50 px-1.5 py-0.5 rounded truncate max-w-[120px]">
                              {prob.replace(/^LC\s\d+\.\s*/i, "")}
                            </span>
                          ))}
                          {pattern.leetcodeProblems.length > 2 && (
                            <span className="text-[9px] font-mono text-text-muted bg-[#050811] px-1.5 py-0.5 rounded">
                              +{pattern.leetcodeProblems.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Article */}
                    <td className="px-5 py-4">
                      {pattern.hasArticle ? (
                        <Link 
                          href={`/articles/${pattern.slug}`}
                          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold hover:underline"
                        >
                          <FileText className="h-3.5 w-3.5" /> Read
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10 font-bold">
                          Missing
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="px-5 py-8 text-center text-text-muted font-bold">
                    No patterns match the selected filters or search queries.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile view of patterns (cards) */}
      <div className="grid grid-cols-1 gap-4 block md:hidden mb-12">
        {filteredPatterns.length > 0 ? (
          filteredPatterns.map((pattern, idx) => (
            <div key={idx} className="premium-card rounded-xl border border-card-border p-5 flex flex-col gap-4 bg-[#050811]/90" data-track="dsa" data-pattern={pattern.slug || pattern.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-black text-foreground">{pattern.name}</span>
                  <span className="text-[9px] font-mono text-text-muted font-bold uppercase">
                    Module: {pattern.roadmapModuleMapping || "misc"}
                  </span>
                </div>
                <div>
                  {pattern.status === "complete" && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded">
                      Complete
                    </span>
                  )}
                  {pattern.status === "in-progress" && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 rounded">
                      In Progress
                    </span>
                  )}
                  {pattern.status === "coming-soon" && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-text-muted bg-gray-500/10 border border-gray-500/20 px-1.5 py-0.5 rounded">
                      Soon
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans">{pattern.description}</p>
              
              <div className="grid grid-cols-2 gap-3 bg-[#030712]/50 border border-card-border/60 rounded-lg p-3 text-[10px] font-mono">
                <div className="flex flex-col gap-1">
                  <span className="opacity-60 text-text-muted">Complexity:</span>
                  <span className="text-foreground">{pattern.complexity || "O(N) / O(1)"}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="opacity-60 text-text-muted">Benchmark Qs:</span>
                  <span className="text-foreground font-bold">{pattern.leetcodeProblems.length || 0} Problems</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3 border-t border-card-border/40 text-[10px] font-bold">
                {pattern.conceptSlug ? (
                  <Link href={`/dsa/${pattern.conceptSlug}`} className="text-cyan-400 hover:underline">
                    Concept Page
                  </Link>
                ) : (
                  <span className="text-red-400/80">No Concept</span>
                )}
                {pattern.hasVisualization ? (
                  <Link href={`/dsa/${pattern.conceptSlug || pattern.slug}#visualizer`} className="text-cyan-400 hover:underline">
                    Visualization
                  </Link>
                ) : (
                  <span className="text-red-400/80">No Vis</span>
                )}
                {pattern.hasPlayground ? (
                  <Link href={`/dsa/practice/${pattern.playgroundSlug}`} className="text-cyan-400 hover:underline">
                    Playground
                  </Link>
                ) : (
                  <span className="text-red-400/80">No Playground</span>
                )}
                {pattern.interviewCount > 0 ? (
                  <Link href="/dsa/interview" className="text-cyan-400 hover:underline">
                    {pattern.interviewCount} Qs
                  </Link>
                ) : (
                  <span className="text-red-400/80">No Qs</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="premium-card p-10 border-dashed border-card-border text-center flex flex-col justify-center items-center">
            <HelpIcon className="h-8 w-8 text-text-muted/40 mb-2" />
            <h3 className="text-sm font-bold text-foreground">No Patterns Found</h3>
            <p className="text-xs text-text-muted mt-1">Try relaxing your search query or selecting a different filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
