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
import { ArrowLeft, Compass, ShieldCheck, Cpu, Code, HelpCircle, ChevronDown, ChevronUp, BookOpenText } from "lucide-react";

interface SubmoduleDetailClientProps {
  trackSlug: string;
  moduleSlug: string;
  submoduleSlug: string;
}

export default function SubmoduleDetailClient({
  trackSlug,
  moduleSlug,
  submoduleSlug,
}: SubmoduleDetailClientProps) {
  const track = aiTracks.find((t) => t.slug === trackSlug);
  const aiModule = aiModules[moduleSlug];
  const submodule = aiSubmodules[submoduleSlug];

  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  const toggleQuestion = (idx: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  if (
    !track ||
    !aiModule ||
    !submodule ||
    submodule.trackSlug !== trackSlug ||
    submodule.moduleSlug !== moduleSlug
  ) {
    notFound();
  }

  // Resolve project mapping details
  const projectSlug = submodule.projectMapping[0];
  const project = projectSlug ? aiProjects[projectSlug] : null;

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href={`/ai-engineer/${track.slug}/${aiModule.slug}`}
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {aiModule.title}
            </Link>
            <AIStatusBadge status={submodule.status} />
          </div>

          <PageHero
            kicker="AI Lesson & Submodule"
            title={submodule.title}
            description={submodule.description}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-8 shadow-xl backdrop-blur-md">
            
            {/* 1. Why it matters */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Why This Matters
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {submodule.whyItMatters}
              </p>
            </div>

            {/* 2. Detailed Technical Explanation (if present) */}
            {submodule.detailedExplanation && (
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpenText className="h-4 w-4" />
                  Deep-Dive Explanation
                </h3>
                <div className="border border-card-border bg-[#030712]/50 p-4 rounded-xl text-xs text-text-muted leading-relaxed font-sans">
                  {submodule.detailedExplanation}
                </div>
              </div>
            )}

            {/* 3. What you will learn */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <ShieldCheck className="h-4 w-4" />
                What You Will Learn
              </h3>
              <ul className="flex flex-col gap-2.5 pl-1">
                {submodule.whatYouWillLearn.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="text-cyan-400 font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Concepts Covered */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Cpu className="h-4 w-4" />
                Concepts Covered
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {submodule.conceptsCovered.map((c, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#030712] border border-card-border/60 px-3 py-1 text-[10px] font-mono text-text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Integration (if mapped) */}
            {project && (
              <div className="border-t border-card-border/40 pt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                    <Code className="h-4 w-4" />
                    Mapped Foundation Project: {project.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Architecture & Tech Stack Previews */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-2 text-xs">
                    <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider text-cyan-400">Architecture Preview</span>
                    <p className="text-[10px] text-text-muted leading-relaxed mb-2">{project.architecture.summary}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.architecture.nodes.slice(0, 3).map((n, i) => (
                        <span key={i} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 font-mono text-[9px] text-text-muted">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-2 text-xs">
                    <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider text-orange-500">Tech Stack Planned</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-[#050811] border border-card-border/40 px-2 py-0.5 rounded text-[9px] text-text-muted font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submodule External Links (Verifies no dead urls) */}
                <div className="border-t border-card-border/40 pt-4 flex justify-between items-center text-[10px] font-mono">
                  <div className="flex gap-4">
                    <AIExternalLink link={project.github} />
                    <AIExternalLink link={project.liveDemo} />
                    {project.lab && <AIExternalLink link={project.lab} />}
                  </div>

                  <AIStatusBadge status={project.status} />
                </div>
              </div>
            )}

            {/* 5. Interactive Interview Q&A Section */}
            {submodule.interviewQuestions && submodule.interviewQuestions.length > 0 ? (
              <div className="flex flex-col gap-4 border-t border-card-border/40 pt-6">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <HelpCircle className="h-4 w-4" />
                  Technical Interview Defense Q&A
                </h3>
                <div className="flex flex-col gap-3">
                  {submodule.interviewQuestions.map((item, idx) => {
                    const isOpen = !!expandedQuestions[idx];
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-card-border/60 bg-[#030712]/45 overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleQuestion(idx)}
                          className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-orange-500/5 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xs font-bold text-orange-500 font-mono mt-0.5">Q{idx + 1}.</span>
                            <span className="text-xs font-bold text-foreground leading-relaxed">{item.question}</span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-orange-500 shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-text-muted shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="p-4 border-t border-card-border/40 bg-[#040813]/60 text-xs text-text-muted leading-relaxed font-sans transition-all">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <HelpCircle className="h-4 w-4" />
                  Technical Interview Value
                </h3>
                <ul className="flex flex-col gap-2.5 pl-1">
                  {submodule.interviewValue.map((val, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                      <span className="text-orange-500 font-bold shrink-0">?</span>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Nav back button */}
          <div className="mt-4">
            <Link
              href={`/ai-engineer/${track.slug}/${aiModule.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-[#050811]/80 hover:bg-[#070b16]/75 px-5 py-3 text-xs font-bold text-foreground transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 text-orange-500" />
              Return to Module Lessons
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
