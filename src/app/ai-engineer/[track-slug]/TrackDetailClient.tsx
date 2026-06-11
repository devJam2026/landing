"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import AIExternalLink from "@/components/ai/AIExternalLink";
import { aiTracks } from "@/data/ai/tracks";
import { aiModules } from "@/data/ai/modules";
import { aiSubmodules } from "@/data/ai/submodules";
import { aiProjects } from "@/data/ai/projects";
import { ArrowLeft, BookOpen, Award, ShieldCheck, ChevronRight, Sparkles, CheckCircle2, LayoutGrid, Calendar } from "lucide-react";

interface TrackDetailClientProps {
  trackSlug: string;
}

export default function TrackDetailClient({ trackSlug }: TrackDetailClientProps) {
  const track = aiTracks.find((t) => t.slug === trackSlug);
  const [activeTab, setActiveTab] = useState<"syllabus" | "timeline">("syllabus");

  if (!track) {
    notFound();
  }

  // Get modules belonging to this track
  const trackModules = Object.values(aiModules).filter(
    (m) => m.trackSlug === track.slug
  );

  // Get projects belonging to this track
  const trackProjects = Object.values(aiProjects).filter(
    (p) => p.trackSlug === track.slug
  );

  const totalProjectsCount = trackProjects.length;
  const completedProjectsCount = trackProjects.filter((p) => p.github.status === "available").length;

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
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
              {track.title}
            </span>
          </div>

          <PageHero
            kicker="AI Engineer Track"
            title={track.title}
            description={track.description}
          />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left side syllabus & timeline (8/12 width) */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              
              {/* Tab Selector */}
              <div className="flex border-b border-card-border/40 gap-4 pb-0.5">
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                    activeTab === "syllabus"
                      ? "text-orange-500 border-orange-500"
                      : "text-text-muted border-transparent hover:text-foreground"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                  Syllabus Modules
                </button>
                <button
                  onClick={() => setActiveTab("timeline")}
                  className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                    activeTab === "timeline"
                      ? "text-orange-500 border-orange-500"
                      : "text-text-muted border-transparent hover:text-foreground"
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Project Timeline
                </button>
              </div>

              {/* Tab 1: Syllabus Modules */}
              {activeTab === "syllabus" && (
                <div className="premium-card rounded-2xl p-6 flex flex-col gap-4">
                  <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                    <BookOpen className="h-4 w-4" />
                    Syllabus Modules
                  </h3>

                  {trackModules.length > 0 ? (
                    <div className="flex flex-col gap-5">
                      {trackModules.map((m) => {
                        const moduleSubmodules = Object.values(aiSubmodules).filter(
                          (sm) => sm.moduleSlug === m.slug
                        );
                        return (
                          <div
                            key={m.slug}
                            className="p-5 rounded-xl border border-card-border bg-[#030712]/60 flex flex-col gap-4 group"
                          >
                            <div className="flex justify-between items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold text-foreground">{m.title}</span>
                              <AIStatusBadge status={m.status} />
                            </div>
                            <p className="text-[11px] text-text-muted leading-relaxed">
                              {m.description}
                            </p>

                            {/* Submodule Clickable Links */}
                            {moduleSubmodules.length > 0 && (
                              <div className="flex flex-col gap-2 border-t border-card-border/40 pt-3">
                                <span className="text-[9px] uppercase tracking-wider font-mono text-text-muted">Lessons & Submodules</span>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {moduleSubmodules.map((sm) => (
                                    <Link
                                      key={sm.slug}
                                      href={`/ai-engineer/${track.slug}/${m.slug}/${sm.slug}`}
                                      className="inline-flex items-center gap-1 bg-[#050811] border border-card-border/60 hover:border-orange-500/30 hover:bg-orange-500/5 px-2.5 py-1 rounded text-[10px] text-text-muted hover:text-orange-400 font-sans transition-all cursor-pointer"
                                    >
                                      {sm.title}
                                      <ChevronRight className="h-3 w-3 shrink-0 opacity-60" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex justify-between items-center text-[10px] font-mono border-t border-card-border/40 pt-2.5">
                              <span className="text-text-muted">Total Lessons: {moduleSubmodules.length}</span>
                              <Link
                                href={`/ai-engineer/${track.slug}/${m.slug}`}
                                className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-0.5"
                              >
                                Explore Module
                                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                      Syllabus modules mapping coming soon.
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Project Timeline */}
              {activeTab === "timeline" && (
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    Project Execution Timeline
                  </h3>

                  {trackProjects.length > 0 ? (
                    <div className="flex flex-col gap-6">
                      {trackProjects.map((p) => {
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
                  ) : (
                    <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                      No custom project timeline exists for this track yet. Detailed project mappings are coming soon.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right side summaries (4/12 width) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Progress Overview Panel */}
              {totalProjectsCount > 0 && (
                <div className="border border-card-border/60 bg-[#060a13]/40 p-5 rounded-xl flex flex-col gap-2 shadow-lg backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">Track Progress</span>
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
              )}

              {/* Learning outcomes */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Learning Outcomes
                </h4>
                <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                  {track.learningOutcomes.map((o, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview topics */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Interview Defense
                </h4>
                <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                  {track.interviewValue.map((v, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <Award className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
