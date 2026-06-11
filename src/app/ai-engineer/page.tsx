import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import { aiTracks } from "@/data/ai/tracks";
import { aiProjects } from "@/data/ai/projects";
import { aiAuditReport } from "@/data/ai/audit";
import { BookOpen, Sparkles, Code, Cpu, Award, GitPullRequest, ShieldCheck, ChevronRight } from "lucide-react";

export default function AiEngineerLandingPage() {
  // Filter verified projects that are active/complete
  const verifiedProjects = Object.values(aiProjects).filter(
    (p) => p.evidence?.repoExists && p.evidence?.demoExists
  );

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-6 md:py-10 w-full flex flex-col gap-10">
          
          {/* Hero Section */}
          <div className="flex flex-col gap-4">
            <PageHero
              kicker="AI Engineer Curriculum"
              title="Learn AI by Building Systems"
              description="Transition from prompt formatting to production-grade neural networks, RAG pipelines, model routers, and multi-agent graphs."
            />
            
            <div className="flex gap-4">
              <Link
                href="/ai-engineer/foundation"
                className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-orange-500 transition-all cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                Explore 11-Project Foundation Track
              </Link>
              <Link
                href="/roadmaps/ai-engineer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/25 bg-cyan-400/5 hover:bg-cyan-400/10 px-4 py-2.5 text-xs font-bold text-cyan-400 transition-all cursor-pointer"
              >
                <Cpu className="h-4 w-4" />
                Visual Learning Roadmap
              </Link>
            </div>
          </div>

          {/* Audit Metrics Panel */}
          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl -z-10" />
            
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Curriculum Diagnostics</span>
              <h3 className="text-lg font-black text-foreground">Operational Audit Report</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center">
              <div className="border border-card-border/60 bg-[#030712] p-4 rounded-xl flex flex-col gap-1">
                <span className="text-2xl font-black text-foreground">{aiAuditReport.curriculumCoverage}</span>
                <span className="text-[9px] text-text-muted uppercase">Curriculum Coverage</span>
              </div>
              <div className="border border-card-border/60 bg-[#030712] p-4 rounded-xl flex flex-col gap-1">
                <span className="text-2xl font-black text-foreground">{aiAuditReport.placeholderCoverage}</span>
                <span className="text-[9px] text-text-muted uppercase">Placeholder Coverage</span>
              </div>
              <div className="border border-card-border/60 bg-[#030712] p-4 rounded-xl flex flex-col gap-1">
                <span className="text-2xl font-black text-cyan-400">{verifiedProjects.length} / 11</span>
                <span className="text-[9px] text-text-muted uppercase">Verified Projects</span>
              </div>
              <div className="border border-card-border/60 bg-[#030712] p-4 rounded-xl flex flex-col gap-1">
                <span className="text-2xl font-black text-amber-500">{aiAuditReport.overallImplementationStatus}</span>
                <span className="text-[9px] text-text-muted uppercase">Implementation Status</span>
              </div>
            </div>

            <p className="text-xs text-text-muted leading-relaxed font-sans border-t border-card-border/40 pt-4">
              * The AI Engineer curriculum structure is **100% defined**. Actual codebase implementations are actively in progress. Completed projects are highlighted only after their codebase and demo routes are verified.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column: Curriculum Tracks Grid (7/12 width) */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Curriculum Syllabus Overview
                  </h3>
                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                    Syllabus tracks spanning neural networks, vector databases, multi-agent frameworks, and model routers.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {aiTracks.map((track) => (
                    <div
                      key={track.slug}
                      className="p-5 rounded-xl border border-card-border bg-[#050811]/45 hover:border-card-border/80 transition-all duration-200 flex flex-col gap-3 group"
                    >
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h4 className="text-xs font-extrabold text-foreground">{track.title}</h4>
                        <AIStatusBadge status={track.status} />
                      </div>
                      
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        {track.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {track.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 rounded bg-[#030712] border border-card-border/40 px-2 py-0.5 text-[9px] font-sans text-text-muted"
                          >
                            <ShieldCheck className="h-3 w-3 text-cyan-400 shrink-0" />
                            {outcome}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-card-border/40 pt-3 flex justify-between items-center text-[10px] font-mono">
                        <span className="text-text-muted">Projects: {track.plannedProjects.length}</span>
                        <Link
                          href={`/ai-engineer/tracks/${track.slug}`}
                          className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1"
                        >
                          View Track
                          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Verified Project Highlights (5/12 width) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-6">
                <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase border-b border-card-border pb-3.5 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Verified Projects
                </h3>

                <div className="flex flex-col gap-4">
                  {verifiedProjects.map((p) => (
                    <div key={p.slug} className="border border-card-border bg-[#030712] p-4 rounded-xl flex flex-col gap-2.5">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-bold text-foreground">{p.title}</span>
                        <span className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded">
                          Verified
                        </span>
                      </div>
                      <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                      <div className="flex justify-between items-center text-[10px] font-mono border-t border-card-border/40 pt-2.5">
                        <a
                          href={p.github.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline"
                        >
                          GitHub
                        </a>
                        <Link href={p.liveDemo.url || ""} className="text-orange-500 hover:underline">
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Build In Public / GitHub Info */}
              <div className="bg-[#030712] border border-card-border/60 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2 flex items-center gap-1.5">
                  <GitPullRequest className="h-4 w-4" />
                  Build in Public (Metadata Contract)
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Every project repository under the DevJam organization hosts a <code className="text-cyan-400">devjam.project.json</code> metadata contract. Later, DevJam&apos;s build system will automatically sync GitHub issues, release tags, and completions directly into the UI dashboard dynamically.
                </p>
              </div>

              {/* Interview Value Panel */}
              <div className="bg-[#030712] border border-card-border/60 rounded-2xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2 flex items-center gap-1.5">
                  <Award className="h-4 w-4" />
                  Technical Interview Defense
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Learn to defend architectural trade-offs: why self-attention operates at quadratic scale, how temperature changes softmax logit offsets, and why approximate vector databases balance search recall against latency thresholds.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
