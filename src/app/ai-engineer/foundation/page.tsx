import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import AIExternalLink from "@/components/ai/AIExternalLink";
import { aiProjects } from "@/data/ai/projects";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

export default function AiEngineerFoundationPage() {
  const foundationProjects = Object.values(aiProjects).filter(
    (p) => p.trackSlug === "foundation"
  );

  const totalProjectsCount = foundationProjects.length;
  const completedProjectsCount = foundationProjects.filter((p) => p.github.status === "available").length;

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/ai-engineer"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to AI Dashboard
            </Link>
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Track 1 Roadmap
            </span>
          </div>

          <PageHero
            kicker="11-Project Series"
            title="Foundation Track"
            description="Build hands-on prototypes solving real-world AI constraints: tokenizers, context budgets, structured parsers, and custom model evaluations."
          />

          {/* Progress Overview Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-card-border/60 bg-[#060a13]/40 p-5 rounded-xl flex flex-col gap-2 shadow-lg backdrop-blur-sm">
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">Foundation Progress</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-foreground font-mono">{completedProjectsCount} / {totalProjectsCount}</span>
                <span className="text-xs text-text-muted">Projects Verified</span>
              </div>
              <div className="h-1.5 w-full bg-[#030712] rounded-full overflow-hidden mt-1 border border-card-border/40">
                <div
                  className="h-full bg-orange-500 rounded-full transition-all duration-300"
                  style={{ width: `${(completedProjectsCount / totalProjectsCount) * 100}%` }}
                />
              </div>
            </div>

            <div className="border border-card-border/60 bg-[#060a13]/40 p-5 rounded-xl flex flex-col gap-2 shadow-lg backdrop-blur-sm">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Track Status</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl font-bold text-foreground">In Progress</span>
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed">
                4 completed projects verified by codebase evidence. Remaining 7 projects mapped as placeholders.
              </p>
            </div>

            <div className="border border-card-border/60 bg-[#060a13]/40 p-5 rounded-xl flex flex-col gap-2 shadow-lg backdrop-blur-sm">
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">Core Philosophy</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl font-bold text-foreground">Learn by Building</span>
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed">
                We avoid abstract prompt checklists. You learn AI system scaling by building functioning prototypes.
              </p>
            </div>
          </div>

          {/* 11-Project Timeline Roadmap */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Sparkles className="h-4 w-4 text-orange-500" />
              Project Execution Timeline
            </h3>

            <div className="flex flex-col gap-6">
              {foundationProjects.map((p) => {
                const isCompleted = p.github.status === "available";
                return (
                  <div
                    key={p.slug}
                    className={`p-6 rounded-xl border bg-[#050811]/45 flex flex-col gap-4 transition-all duration-200 ${
                      isCompleted
                        ? "border-orange-500/30 shadow-md shadow-orange-500/5 hover:border-orange-500/50"
                        : "border-card-border/60 opacity-80"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-xs font-bold ${
                          isCompleted
                            ? "border-orange-500/20 bg-orange-500/10 text-orange-400"
                            : "border-card-border bg-[#030712] text-text-muted"
                        }`}>
                          {p.id}
                        </div>
                        <div>
                          <h4 className="text-xs font-extrabold text-foreground leading-snug">{p.title}</h4>
                          <span className="text-[9px] font-mono text-cyan-400 block mt-0.5">Concept: {p.concept}</span>
                        </div>
                      </div>
                      
                      <AIStatusBadge status={p.status} />
                    </div>

                    {/* Body */}
                    <p className="text-xs text-text-muted leading-relaxed">
                      {p.description}
                    </p>

                    {/* What it teaches & tech stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-card-border/40 pt-4 text-[11px]">
                      <div>
                        <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider">What it teaches</span>
                        <p className="text-text-muted leading-relaxed">{p.whatItTeaches}</p>
                      </div>
                      <div>
                        <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider">Tech Stack</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {p.techStack.map((tech, idx) => (
                            <span key={idx} className="bg-[#030712] border border-card-border/40 px-2 py-0.5 rounded text-[10px] text-text-muted font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="border-t border-card-border/40 pt-3 flex justify-between items-center text-[10px] font-mono">
                      <div className="flex gap-4">
                        <AIExternalLink link={p.github} />
                        <AIExternalLink link={p.liveDemo} />
                        {p.lab && <AIExternalLink link={p.lab} />}
                      </div>

                      {isCompleted && p.evidence?.repoExists && (
                        <span className="text-emerald-400 font-bold inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Verified
                        </span>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
