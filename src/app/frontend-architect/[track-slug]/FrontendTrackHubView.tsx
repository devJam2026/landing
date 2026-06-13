"use client";

import React from "react";
import Link from "next/link";
import { FrontendTrackDetail } from "@/data/frontend/tracksIndex";
import {
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  FileText,
  Clock,
  ShieldCheck
} from "lucide-react";

interface FrontendTrackHubViewProps {
  trackDetailHub: FrontendTrackDetail;
}

export default function FrontendTrackHubView({
  trackDetailHub
}: FrontendTrackHubViewProps) {
  
  // 7-step horizontal visual learning roadmap
  const roadmapSteps = [
    {
      step: 1,
      title: "Core Concepts",
      desc: "Definitions & pitfalls",
      href: "/frontend-architect/micro-frontends/architecture#definition",
      badge: "Architecture"
    },
    {
      step: 2,
      title: "System Design",
      desc: "Shell-remote flowcharts",
      href: "/frontend-architect/micro-frontends/architecture#diagrams",
      badge: "Architecture"
    },
    {
      step: 3,
      title: "Auth & Failure",
      desc: "Security & resilience",
      href: "/frontend-architect/micro-frontends/architecture#auth",
      badge: "Architecture"
    },
    {
      step: 4,
      title: "Practice Labs",
      desc: "Webpack/Rspack setups",
      href: "/frontend-architect/micro-frontends/labs",
      badge: "Labs"
    },
    {
      step: 5,
      title: "Capstone Blueprints",
      desc: "Production platforms",
      href: "/frontend-architect/micro-frontends/projects",
      badge: "Projects"
    },
    {
      step: 6,
      title: "Q&A Question Bank",
      desc: "Architect assessments",
      href: "/frontend-architect/micro-frontends/interview-prep#interview-questions",
      badge: "Interview Prep"
    },
    {
      step: 7,
      title: "Mock Simulator",
      desc: "Interactive diagnostics",
      href: "/frontend-architect/micro-frontends/interview-prep#mock-interview",
      badge: "Interview Prep"
    }
  ];

  return (
    <div className="relative w-full text-foreground font-sans">
      
      {/* Hero Section */}
      <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
            {trackDetailHub.difficulty} Level
          </span>
          <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
            {trackDetailHub.estimatedHours} Hours
          </span>
          <span className="bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
            {trackDetailHub.interviewWeight} Weight
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
          {trackDetailHub.title} Workspace
        </h1>

        <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
          {trackDetailHub.subtitle} Select checklist cards, explore sequence flowcharts, configure federation plugins, build capstones, and run active-recall simulators.
        </p>
      </div>

      {/* Learning Path - 7-Step Roadmap */}
      <section className="flex flex-col gap-4 mt-8">
        <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          7-Step Learning Path & Roadmap
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full mt-2">
          {roadmapSteps.map((step) => (
            <Link
              key={step.step}
              href={step.href}
              className="p-4 rounded-xl border border-card-border bg-[#050811]/45 hover:border-cyan-400/40 hover:shadow-md transition-all flex flex-col justify-between gap-3 relative group"
            >
              <div className="flex justify-between items-start">
                <span className="h-6 w-6 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">
                  {step.step}
                </span>
                <span className="text-[7px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted group-hover:text-cyan-400 transition-colors">
                  {step.badge}
                </span>
              </div>
              <div>
                <h3 className="text-[11px] font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[9px] text-text-muted leading-tight mt-0.5">
                  {step.desc}
                </p>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-cyan-400 absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Content Preview & Zones Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mt-10">
        
        {/* Left column - Preview zones */}
        <div className="lg:col-span-8 flex flex-col gap-10 w-full">
          
          {/* Architecture Preview Zone */}
          <div className="p-6 rounded-2xl border border-card-border bg-[#050811]/45 flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 flex-wrap border-b border-card-border/30 pb-3">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Architecture & Design Zone</span>
                <h3 className="text-sm font-black text-foreground">Topology, Run-time Federation & Resilient Recovery</h3>
              </div>
              <Link
                href="/frontend-architect/micro-frontends/architecture"
                className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1 group/btn"
              >
                Explore Architecture
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
            
            <p className="text-xs text-text-muted leading-relaxed">
              Explore host-remote compositions, runtime sequence cascades, failure recovery flowcharts, and styling namespace scopes variables isolation patterns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/50">
                <h4 className="text-xs font-bold text-foreground mb-1">Interactive Flowcharts</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Visual and ASCII diagrams covering startup sequence manifests parsing and module boundary error isolations.</p>
              </div>
              <div className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/50">
                <h4 className="text-xs font-bold text-foreground mb-1">Decoupled Communication</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">System design comparison matrix evaluating URL query parameters, custom DOM events, and Redux anti-patterns.</p>
              </div>
            </div>
          </div>

          {/* Practice Labs Zone */}
          <div className="p-6 rounded-2xl border border-card-border bg-[#050811]/45 flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 flex-wrap border-b border-card-border/30 pb-3">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Hands-on Practice Labs</span>
                <h3 className="text-sm font-black text-foreground">Client Sandboxes & Configuration Sandboxes</h3>
              </div>
              <Link
                href="/frontend-architect/micro-frontends/labs"
                className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1 group/btn"
              >
                Open Labs Workspace
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Complete step-by-step setup guides to configure and run federated sandboxes in your browser environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-2">
              {trackDetailHub.labs.slice(0, 3).map((lab) => (
                <div key={lab.id} className="p-3.5 rounded-xl border border-card-border/60 bg-[#030712]/50 flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[8px] font-mono text-cyan-400 font-bold uppercase tracking-wider bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20 self-start">
                      {lab.difficulty}
                    </span>
                    <h4 className="text-[11px] font-extrabold text-foreground">{lab.title}</h4>
                    <p className="text-[10px] text-text-muted leading-snug">{lab.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Blueprints Zone */}
          <div className="p-6 rounded-2xl border border-card-border bg-[#050811]/45 flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 flex-wrap border-b border-card-border/30 pb-3">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Architecture Blueprints</span>
                <h3 className="text-sm font-black text-foreground">Production-Grade Capstone Blueprints</h3>
              </div>
              <Link
                href="/frontend-architect/micro-frontends/projects"
                className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1 group/btn"
              >
                View Capstones Blueprints
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Design and structure architectural components plans, data contracts, and implementation roadmaps for senior assessment portfolios.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {trackDetailHub.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/50 flex justify-between items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-xs font-extrabold text-foreground">{proj.title}</h4>
                    <p className="text-[10px] text-text-muted mt-0.5 leading-relaxed">{proj.description}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap text-[9px] font-mono text-text-muted">
                    {proj.conceptsPracticed.slice(0, 2).map((c) => (
                      <span key={c} className="bg-[#050811] border border-card-border px-2 py-0.5 rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Practice Zone */}
          <div className="p-6 rounded-2xl border border-orange-500/20 bg-orange-500/[0.01] flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 flex-wrap border-b border-orange-500/25 pb-3">
              <div>
                <span className="text-[9px] font-mono text-orange-500 font-bold uppercase tracking-wider block mb-1">Active Recall & Simulator</span>
                <h3 className="text-sm font-black text-foreground">Interview Questions Bank & Diagnostics</h3>
              </div>
              <Link
                href="/frontend-architect/micro-frontends/interview-prep"
                className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1 group/btn"
              >
                Start Practice Simulator
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Practice answering assessment questions. Analyze model responses, trace red flags signals, complete self-tests, and review scoring rubrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/50 flex flex-col gap-1.5">
                <span className="text-[9px] font-mono text-orange-400 font-bold uppercase">60-Sec Revision Checklist</span>
                <p className="text-[11px] text-text-muted leading-relaxed">Rapidly revise core concepts, tradeoffs, technologies, and what you must mention in system design interviews.</p>
              </div>
              <div className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/50 flex flex-col gap-1.5">
                <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase">Assessment Simulator</span>
                <p className="text-[11px] text-text-muted leading-relaxed">Simulate interview questions from fundamentals up to full system designs with real scoring benchmarks.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right column - Sidebar metadata info */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
          
          {/* Quick Stats Card */}
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
              Track Overview
            </h4>
            
            <div className="flex flex-col gap-3.5 text-[10px] text-text-muted">
              <div className="flex justify-between items-center">
                <span className="font-bold">Difficulty:</span>
                <span className="bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-cyan-400 capitalize">
                  {trackDetailHub.difficulty}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Estimated Time:</span>
                <span className="text-foreground font-mono flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-orange-500" />
                  {trackDetailHub.estimatedHours} Hours
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Interview Weight:</span>
                <span className="bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-rose-400 uppercase">
                  {trackDetailHub.interviewWeight}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Review Navigation Actions */}
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
              Review Workspace Zones
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/frontend-architect/micro-frontends/architecture"
                className="w-full p-2.5 rounded bg-[#050811] border border-card-border hover:border-orange-500/30 text-center text-text-muted hover:text-orange-400 transition-colors text-[10px] font-mono font-bold uppercase tracking-wider block"
              >
                1. System Architecture
              </Link>
              <Link
                href="/frontend-architect/micro-frontends/labs"
                className="w-full p-2.5 rounded bg-[#050811] border border-card-border hover:border-orange-500/30 text-center text-text-muted hover:text-orange-400 transition-colors text-[10px] font-mono font-bold uppercase tracking-wider block"
              >
                2. Practice Labs
              </Link>
              <Link
                href="/frontend-architect/micro-frontends/projects"
                className="w-full p-2.5 rounded bg-[#050811] border border-card-border hover:border-orange-500/30 text-center text-text-muted hover:text-orange-400 transition-colors text-[10px] font-mono font-bold uppercase tracking-wider block"
              >
                3. Capstone Blueprints
              </Link>
              <Link
                href="/frontend-architect/micro-frontends/interview-prep"
                className="w-full p-2.5 rounded bg-[#050811] border border-card-border hover:border-orange-500/30 text-center text-text-muted hover:text-orange-400 transition-colors text-[10px] font-mono font-bold uppercase tracking-wider block"
              >
                4. Interview Prep
              </Link>
            </div>
          </div>

          {/* Prerequisites Card */}
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
              Prerequisites
            </h4>
            {trackDetailHub.prerequisites && trackDetailHub.prerequisites.length > 0 ? (
              <div className="flex flex-col gap-2">
                {trackDetailHub.prerequisites.map((prereqSlug) => (
                  <Link
                    key={prereqSlug}
                    href={`/frontend-architect/${prereqSlug}`}
                    className="flex items-center justify-between p-2.5 rounded bg-[#050811] border border-card-border/60 hover:border-cyan-400/40 transition-colors text-[10px] text-foreground font-semibold"
                  >
                    <span className="capitalize">{prereqSlug.replace(/-/g, " ")}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-[10px] text-text-muted italic flex items-center gap-1.5 py-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                No prerequisites required.
              </div>
            )}
          </div>

          {/* Learning Outcomes */}
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
              Learning Outcomes
            </h4>
            {trackDetailHub.learningOutcomes.length > 0 ? (
              <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                {trackDetailHub.learningOutcomes.map((o, idx) => (
                  <li key={idx} className="flex gap-2 leading-relaxed">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-[10px] text-text-muted italic">
                Outcomes mapping coming soon.
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Recommended Learning Articles - Full Width */}
      <section id="articles" className="flex flex-col gap-4 mt-12 w-full">
        <h2 className="text-base font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-cyan-400" />
          Featured Technical Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {trackDetailHub.articles.map((art) => (
            <div
              key={art.id}
              className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col justify-between gap-4 transition-all hover:border-card-border/80"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center gap-2">
                  <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono text-cyan-400">
                    {art.difficulty}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted">
                    {art.readTime}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-foreground">
                  {art.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="flex justify-between items-center gap-2 pt-2 border-t border-card-border/30 mt-1">
                <div className="flex flex-wrap gap-1">
                  {art.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-[#030712] px-1.5 py-0.5 rounded border border-card-border/40 font-mono text-[8px] text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                {art.status === "Published" ? (
                  <Link 
                    href={`/frontend-architect/articles/${art.slug}`}
                    className="text-[10px] text-orange-500 font-bold hover:underline inline-flex items-center gap-0.5"
                  >
                    Read
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                ) : (
                  <span className="text-[10px] text-text-muted italic">Planned</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* References & Resources - Full Width */}
      <section id="references" className="flex flex-col gap-3 mt-12 w-full">
        <h2 className="text-base font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
          <ExternalLink className="h-5 w-5 text-indigo-400" />
          References & Further Reading
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {trackDetailHub.references.map((ref, idx) => (
            <a
              key={idx}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-card-border bg-[#050811]/45 hover:border-indigo-400/40 hover:shadow-md hover:shadow-indigo-500/5 transition-all flex flex-col justify-between gap-3 group"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center gap-2">
                  <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono font-bold text-indigo-400 uppercase">
                    {ref.type}
                  </span>
                  <ExternalLink className="h-3 w-3 text-text-muted group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-xs font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                  {ref.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {ref.description}
                </p>
              </div>
              <span className="text-[10px] text-indigo-400 font-mono group-hover:underline break-all">
                {ref.url.replace("https://", "")}
              </span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
