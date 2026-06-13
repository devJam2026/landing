"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronRight, LayoutGrid, Award, ShieldCheck, Cpu } from "lucide-react";
import { microFrontendsDetail } from "@/data/frontend/tracks/micro-frontends-detail";

export default function MicroFrontendsProjectsPage() {
  // Map project local IDs to their respective global capstone slugs if they exist
  const slugMap: Record<string, string> = {
    "proj-1": "micro-frontend-retail-platform",
    "proj-2": "realtime-analytics-dashboard",
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden text-foreground scroll-smooth">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-bold text-text-muted">
            <div className="flex items-center gap-2">
              <Link href="/roadmaps/frontend-architect" className="hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/frontend-architect/micro-frontends" className="hover:text-foreground transition-colors">
                Micro Frontends Hub
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground">Projects</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
              Capstone Blueprints
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight flex items-center gap-3">
              <LayoutGrid className="h-8 w-8 text-cyan-400" />
              Micro Frontends Capstone Projects
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              Build production-grade federated architectures. Implement shell layouts, isolate module styles, configure shared dependency singletons, and orchestrate zero-downtime micro-deployments.
            </p>
          </div>

          {/* Projects Column List */}
          <div className="flex flex-col gap-8 w-full mt-4">
            {microFrontendsDetail.projects.map((proj) => {
              const slug = slugMap[proj.id];
              return (
                <div 
                  key={proj.id} 
                  className="p-6 rounded-2xl border border-card-border bg-[#050811]/45 flex flex-col gap-6 transition-all hover:border-card-border/85 hover:shadow-lg hover:shadow-cyan-950/[0.03]"
                >
                  <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Capstone Project</span>
                        <h2 className="text-lg font-black text-foreground">{proj.title}</h2>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="bg-[#030712] border border-card-border px-2.5 py-0.5 rounded text-[9px] font-mono text-cyan-400 font-bold uppercase">
                          {proj.difficulty}
                        </span>
                        <span className="bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold text-orange-400">
                          {slug ? "Blueprint Ready" : "Coming Soon"}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-text-muted leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 pt-4 border-t border-card-border/20">
                      {/* Left: Build Items */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                          <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                          Key Deliverables
                        </h3>
                        <ul className="flex flex-col gap-1.5 text-xs text-text-muted">
                          {proj.buildItems.map((item, idx) => (
                            <li key={idx} className="flex gap-2 items-start leading-relaxed">
                              <span className="text-cyan-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Concepts Practiced */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                          Architecture Concepts
                        </h3>
                        <ul className="flex flex-col gap-1.5 text-xs text-text-muted">
                          {proj.conceptsPracticed.map((concept, idx) => (
                            <li key={idx} className="flex gap-2 items-start leading-relaxed">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span>{concept}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interview Value */}
                    <div className="mt-2 p-3.5 rounded-xl border border-orange-500/10 bg-orange-500/[0.02] flex gap-3 items-start">
                      <Award className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-orange-400">Interview System Design Value</span>
                        <p className="text-[11px] text-text-muted leading-relaxed italic">
                          &ldquo;{proj.interviewValue}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-card-border/30 pt-4 flex justify-end">
                    {slug ? (
                      <Link
                        href={`/frontend-architect/projects/${slug}`}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                      >
                        Explore Project Blueprint
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    ) : (
                      <span className="text-xs text-text-muted/65 font-mono italic">Blueprint Coming Soon</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
