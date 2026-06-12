"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { frontendGroups } from "@/data/frontend/groups";
import { frontendTracks } from "@/data/frontend/tracks";
import { frontendProjects } from "@/data/frontend/projects";
import { GithubIcon } from "@/components/brand-icons";
import { 
  ArrowLeft, 
  GitFork, 
  ShieldCheck, 
  Clock, 
  Code, 
  BookOpen, 
  FileText, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

function TrackStatusBadge({ status }: { status: string }) {
  let styles = "bg-gray-500/10 border-gray-500/20 text-gray-400";
  let label = "Coming Soon";

  if (status === "available" || status === "complete") {
    styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    label = "Available";
  } else if (status === "in-progress") {
    styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
    label = "In Progress";
  }

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-wider ${styles}`}>
      {label}
    </span>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (difficulty) {
    case "beginner":
      styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      break;
    case "intermediate":
      styles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      break;
    case "advanced":
      styles = "bg-violet-500/10 border-violet-500/20 text-violet-400";
      break;
    case "architect":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[9px] font-mono font-bold capitalize ${styles}`}>
      {difficulty}
    </span>
  );
}

function InterviewRelevanceBadge({ relevance }: { relevance: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (relevance) {
    case "low":
      styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
      break;
    case "medium":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
    case "high":
      styles = "bg-orange-500/10 border-orange-500/20 text-orange-400";
      break;
    case "critical":
      styles = "bg-rose-500/10 border-rose-500/20 text-rose-400 animate-pulse";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[9px] font-mono font-bold uppercase ${styles}`}>
      {relevance} Relevance
    </span>
  );
}

export default function FrontendArchitectRoadmapPage() {
  // Sort and group tracks dynamically
  const groupedTracks = frontendGroups.map(group => {
    const tracks = frontendTracks
      .filter(t => t.groupId === group.id)
      .sort((a, b) => a.order - b.order);
    return {
      ...group,
      tracks
    };
  });

  // Filter out capstone projects from frontendProjects
  const capstones = Object.values(frontendProjects).filter(
    p => p.trackSlug === "frontend-architect-capstones"
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Roadmaps List
            </Link>
            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
              Staff Curriculum
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <PageHero
              kicker="Enterprise Career Path"
              title="Frontend Architect Roadmap"
              description="Master frontend engineering from browser fundamentals to React, Next.js, API integration, architecture patterns, non-functional requirements, and real-world frontend system design interviews."
            />
            <div className="text-center max-w-3xl mx-auto -mt-4 mb-4">
              <p className="text-xs text-text-muted font-sans leading-relaxed">
                <span className="text-orange-500 font-bold">Important Philosophy:</span> Becoming a Frontend Architect is not just about writing UI components or memorizing React hook rules. It requires deep mastery of the compilation pipelines, runtime environments, network channels, secure authorizations, and distributed web interfaces design.
              </p>
            </div>
          </div>

          {/* Visual Roadmap Progression Diagram */}
          <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2 flex items-center gap-2">
              <GitFork className="h-4 w-4" />
              Curriculum progression map
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center items-stretch w-full">
              {frontendGroups.map((group, index) => {
                let badgeColor = "border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/40";
                if (group.id === "group-g") {
                  badgeColor = "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-400/40";
                } else if (index % 2 === 1) {
                  badgeColor = "border-violet-500/20 text-violet-400 bg-violet-500/5 hover:border-violet-400/40";
                }
                return (
                  <button
                    key={group.id}
                    onClick={() => scrollToSection(group.id)}
                    className={`flex flex-col justify-between items-center gap-3 p-4 rounded-xl border ${badgeColor} transition-all duration-300 hover:scale-[1.03] cursor-pointer text-left h-full`}
                  >
                    <div className="flex flex-col gap-1 w-full">
                      <span className="font-mono text-[10px] font-bold opacity-60 uppercase">Group {String.fromCharCode(65 + index)}</span>
                      <span className="font-sans text-[11px] font-extrabold leading-tight text-foreground">{group.badge}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-text-muted mt-2">
                      <span>{group.trackIds.length} {group.trackIds.length === 1 ? "Track" : "Tracks"}</span>
                      <ChevronRight className="h-3 w-3 opacity-60" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group-by-Group Syllabus Section */}
          <div className="flex flex-col gap-16">
            {groupedTracks.map((group, groupIdx) => (
              <section 
                key={group.id} 
                id={group.id} 
                className="flex flex-col gap-6 scroll-mt-24 border-t border-card-border/30 pt-10 first:border-0 first:pt-0"
              >
                {/* Group Header */}
                <div className="flex justify-between items-start gap-4 flex-wrap border-b border-card-border/40 pb-4">
                  <div className="flex flex-col gap-2 max-w-2xl">
                    <span className="inline-flex max-w-max items-center gap-1 rounded bg-[#050811] border border-cyan-400/20 px-2.5 py-0.5 text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      Category: {group.badge}
                    </span>
                    <h2 className="text-xl font-black text-foreground">
                      {group.title}
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-[40px] font-mono font-black text-card-border leading-none select-none">
                    0{groupIdx + 1}
                  </span>
                </div>

                {/* Tracks list */}
                {group.id === "group-g" ? (
                  /* Master projects capstones render differently */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {capstones.map((project, idx) => (
                      <div 
                        key={project.id}
                        className="premium-card rounded-2xl p-6 flex flex-col justify-between gap-5 group/card"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-center gap-2">
                            <span className="font-mono text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                              Capstone 0{idx + 1}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="bg-orange-500/15 border border-orange-500/30 text-orange-400 rounded-full px-2 py-0.5 text-[8px] font-mono font-bold uppercase">
                                Coming Soon
                              </span>
                              <span className="bg-cyan-550/15 border border-cyan-500/30 text-cyan-400 rounded-full px-2 py-0.5 text-[8px] font-mono font-bold uppercase">
                                Blueprint Available
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="text-sm font-black text-foreground group-hover/card:text-orange-400 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-[11px] text-text-muted leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-col gap-2 border-t border-card-border/40 pt-3 mt-1">
                            <div className="text-[10px] leading-relaxed">
                              <span className="text-text-muted font-bold">Concept Taught: </span>
                              <span className="text-foreground font-mono">{project.concept}</span>
                            </div>
                            <div className="text-[10px] leading-relaxed">
                              <span className="text-text-muted font-bold">Architecture Focus: </span>
                              <span className="text-foreground font-mono">{project.conceptsCovered.join(", ")}</span>
                            </div>
                            <div className="text-[10px] leading-relaxed">
                              <span className="text-text-muted font-bold">Expected Outcome: </span>
                              <span className="text-foreground">{project.learningOutcomes[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3.5 border-t border-card-border/40 pt-4 mt-2">
                          <div className="flex flex-wrap gap-2.5 items-center justify-between">
                            <div className="flex gap-1.5 flex-wrap">
                              {project.techStack.map(tech => (
                                <span key={tech} className="bg-[#050811] px-1.5 py-0.5 rounded border border-card-border/40 font-mono text-[8px] text-text-muted">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-3 text-[9px] font-mono font-bold text-text-muted">
                              <span className="inline-flex items-center gap-1 opacity-45 cursor-not-allowed select-none" title="Coming Soon">
                                <GithubIcon className="h-3 w-3" />
                                Repo
                              </span>
                              <span className="inline-flex items-center gap-1 opacity-45 cursor-not-allowed select-none" title="Coming Soon">
                                <ExternalLink className="h-3 w-3" />
                                Demo
                              </span>
                              <span className="inline-flex items-center gap-1 opacity-45 cursor-not-allowed select-none" title="Coming Soon">
                                <FileText className="h-3 w-3" />
                                Docs
                              </span>
                            </div>
                          </div>
                          <Link
                            href={`/frontend-architect/projects/${project.slug}`}
                            className="w-full text-center bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 font-mono font-extrabold text-[10px] uppercase py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 group/btn"
                          >
                            View Project Blueprint
                            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 text-orange-400" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Standard tracks rendering */
                  <div className="flex flex-col gap-4">
                    {group.tracks.map((track) => (
                      <div
                        key={track.slug}
                        className="p-5 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-4 group hover:border-cyan-500/20 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div className="flex flex-col gap-1">
                            <span className="font-mono text-[9px] text-cyan-400 font-extrabold uppercase">
                              Track 0{track.order}
                            </span>
                            <h4 className="text-xs font-black text-foreground group-hover:text-cyan-400 transition-colors">
                              {track.title}
                            </h4>
                          </div>
                          <TrackStatusBadge status={track.status} />
                        </div>
                        
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {track.description}
                        </p>

                        {/* Metadata Tags */}
                        <div className="flex flex-wrap gap-2 items-center">
                          <DifficultyBadge difficulty={track.difficulty} />
                          <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2 py-0.5 text-[9px] font-mono text-text-muted">
                            <Clock className="h-3 w-3 text-cyan-400 shrink-0" />
                            {track.estimatedHours} Hours
                          </span>
                          <InterviewRelevanceBadge relevance={track.interviewRelevance} />
                          {track.caseStudyCount && (
                            <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2 py-0.5 text-[9px] font-mono text-text-muted">
                              <BookOpen className="h-3 w-3 text-orange-400 shrink-0" />
                              {track.caseStudyCount} Case Studies
                            </span>
                          )}
                        </div>

                        {/* Key Outcomes rendering */}
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {track.outcomes.map((outcomeKey, idx) => {
                            // Find corresponding submodule outcome name or fallback
                            const outcomeName = outcomeKey.replace(/-/g, " ");
                            return (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 rounded bg-[#030712] border border-card-border/40 px-2 py-0.5 text-[8px] font-sans text-text-muted"
                              >
                                <ShieldCheck className="h-3 w-3 text-cyan-400 shrink-0" />
                                <span className="capitalize">{outcomeName}</span>
                              </span>
                            );
                          })}
                        </div>

                        <div className="border-t border-card-border/40 pt-3 flex justify-between items-center text-[10px] font-mono">
                          <span className="text-text-muted flex items-center gap-1">
                            <Code className="h-3.5 w-3.5 text-text-muted" />
                            Projects: {track.projectCount}
                          </span>
                          <Link
                            href={`/frontend-architect/${track.slug}`}
                            className="text-cyan-400 hover:text-cyan-300 font-extrabold flex items-center gap-1 group/link"
                          >
                            View Details
                            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
