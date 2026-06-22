import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import { aiTracks } from "@/data/ai/tracks";
import { ArrowLeft, GitFork, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function AiEngineerRoadmapPage() {
  // Filter learning modules (1 to 12) and separate Capstones
  const learningModules = aiTracks.filter((track) => track.slug !== "master-capstones");
  const capstoneTrack = aiTracks.find((track) => track.slug === "master-capstones");

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
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-3 items-center w-full">
                {[
                  { title: "Python for AI Systems", badge: "Quick Revision", styleType: "complete" },
                  { title: "Machine Learning Foundations", badge: "Required Foundation", styleType: "complete" },
                  { title: "Deep Learning Fundamentals", badge: "Required Foundation", styleType: "complete" },
                  { title: "LLM Foundation", badge: "In Progress", styleType: "active" },
                  { title: "Neural Networks", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Sequence Models", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Transformers", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Embeddings / DB", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "RAG Engineering", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Structured AI Apps", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Agentic AI", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "MCP / Tools", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Multi-Agent", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "AI System Design", badge: "Coming Soon", styleType: "coming-soon" },
                  { title: "Production AI", badge: "Coming Soon", styleType: "coming-soon" }
                ].map((card, idx) => {
                  let cardClass = "";
                  if (card.styleType === "active") {
                    cardClass = "border-orange-500/30 bg-orange-500/5 text-orange-400";
                  } else if (card.styleType === "complete") {
                    cardClass = "border-emerald-500/30 bg-emerald-500/5 text-emerald-400";
                  } else {
                    cardClass = "border-card-border bg-[#050811] text-text-muted";
                  }

                  const isEndLg = (idx + 1) % 5 === 0;
                  const isEndMd = (idx + 1) % 3 === 0;

                  return (
                    <div key={idx} className="flex items-center w-full gap-2">
                      <div className={`flex flex-col items-center justify-center gap-1 border p-3 rounded-lg flex-grow h-20 text-center uppercase font-mono text-[9px] font-bold ${cardClass}`}>
                        <span>{card.title}</span>
                        <span className="text-[7px] opacity-60 font-sans normal-case">{card.badge}</span>
                      </div>
                      
                      {idx < 14 && (
                        <>
                          <ArrowRight className={`h-4 w-4 text-card-border shrink-0 hidden lg:block ${isEndLg ? "lg:hidden" : ""}`} />
                          <ArrowRight className={`h-4 w-4 text-card-border shrink-0 hidden md:block lg:hidden ${isEndMd ? "md:hidden" : ""}`} />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step-by-Step Details List */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-card-border/40 pb-2">
              Syllabus Modules Walkthrough
            </h3>

            <div className="flex flex-col gap-4">
              {learningModules.map((track) => (
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
                    <span className="text-text-muted">Projects: {track.plannedProjects.length}</span>
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

          {/* Master Capstones Separator Section */}
          {capstoneTrack && (
            <div className="border-t border-card-border pt-10 mt-4 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-orange-500 uppercase flex items-center gap-2">
                  <Award className="h-4.5 w-4.5" />
                  Portfolio Mastery
                </h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Synthesize all learning concepts into production-grade multi-agent capstones with full execution architectures.
                </p>
              </div>

              <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 flex flex-col gap-4 group">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h4 className="text-sm font-black text-foreground">{capstoneTrack.title}</h4>
                  <AIStatusBadge status={capstoneTrack.status} />
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  {capstoneTrack.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {capstoneTrack.learningOutcomes.map((outcome, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 rounded bg-[#030712] border border-card-border/40 px-2.5 py-0.5 text-[9px] font-sans text-text-muted"
                    >
                      <ShieldCheck className="h-3 w-3 text-cyan-400 shrink-0" />
                      {outcome}
                    </span>
                  ))}
                </div>

                <div className="border-t border-card-border/40 pt-4 mt-2 flex justify-between items-center text-[11px] font-mono">
                  <span className="text-text-muted">Final Capstones: {capstoneTrack.plannedProjects.length}</span>
                  <Link
                    href={`/ai-engineer/${capstoneTrack.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 font-bold"
                  >
                    Explore Capstones
                  </Link>
                </div>
              </div>
            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}
