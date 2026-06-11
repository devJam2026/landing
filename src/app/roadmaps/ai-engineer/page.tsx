import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import { aiTracks } from "@/data/ai/tracks";
import { ArrowLeft, GitFork, ArrowRight, ShieldCheck } from "lucide-react";

export default function AiEngineerRoadmapPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Roadmaps List
            </Link>
            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
              Visual Path
            </span>
          </div>

          <PageHero
            kicker="Learning Path Diagram"
            title="AI Engineer Roadmap"
            description="A step-by-step engineering progression path taking you from tokenizers and hyperparameters to autonomous agents, model gateways, and containerized evaluators."
          />

          {/* Visual flow block */}
          <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2 flex items-center gap-2">
              <GitFork className="h-4 w-4" />
              AI Engineer Path progression
            </h3>
            
            <div className="flex flex-col gap-4 overflow-x-auto pb-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[800px] bg-[#030712] p-6 rounded-xl border border-card-border/60 font-mono text-[9px] font-bold text-text-muted uppercase text-center">
                
                <div className="flex flex-col items-center gap-1 border border-orange-500/30 bg-orange-500/5 p-3 rounded-lg w-32">
                  <span className="text-orange-400">Foundation</span>
                  <span className="text-[7px] opacity-60">Verified Prototypes</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Neural Networks</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Transformers</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Embeddings / DB</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>RAG Pipelines</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

              </div>

              {/* Second row of flowchart (Multi-agent to capstone) */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[800px] bg-[#030712] p-6 rounded-xl border border-card-border/60 font-mono text-[9px] font-bold text-text-muted uppercase text-center mt-2">
                
                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Agent Loops</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>MCP / Tools</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Multi-Agent</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>AI System Design</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

                <ArrowRight className="h-4 w-4 hidden md:block text-card-border" />

                <div className="flex flex-col items-center gap-1 border border-card-border bg-[#050811] p-3 rounded-lg w-32">
                  <span>Production & Capstone</span>
                  <span className="text-[7px] opacity-60 font-sans">Coming Soon</span>
                </div>

              </div>
            </div>
          </div>

          {/* Step-by-Step Details List */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-card-border/40 pb-2">
              Syllabus Tracks Walkthrough
            </h3>

            <div className="flex flex-col gap-4">
              {aiTracks.map((track) => (
                <div
                  key={track.slug}
                  className="p-5 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-3 group"
                >
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="text-xs font-extrabold text-foreground">{track.title}</h4>
                    <AIStatusBadge status={track.status} />
                  </div>
                  
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {track.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {track.learningOutcomes.map((outcome, idx) => (
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
                    <span className="text-text-muted">Modules: {track.modules.length}</span>
                    <Link
                      href={`/ai-engineer/${track.slug}`}
                      className="text-cyan-400 hover:text-cyan-300 font-bold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
