"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronRight, FlaskConical } from "lucide-react";
import { microFrontendsDetail } from "@/data/frontend/tracks/micro-frontends-detail";

export default function MicroFrontendsLabsPage() {
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
              <span className="text-foreground">Labs</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
              Practice Labs
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight flex items-center gap-3">
              <FlaskConical className="h-8 w-8 text-cyan-400" />
              Micro Frontends Hands-on Practice Labs
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              Apply micro frontend theory in specialized client sandboxes. Configure Module Federation plugin settings, share React dependencies as singletons, and setup boundary error handling.
            </p>
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
            {microFrontendsDetail.labs.map((lab) => (
              <div 
                key={lab.id} 
                className="p-6 rounded-2xl border border-card-border bg-[#050811]/45 flex flex-col justify-between gap-5 transition-all hover:border-card-border/85 hover:shadow-lg hover:shadow-cyan-950/[0.05]"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <span className="text-xs font-black text-foreground">{lab.title}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono text-cyan-400 font-bold uppercase">
                        {lab.difficulty}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold border ${
                        lab.status === "Available"
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : "bg-slate-500/10 border-slate-500/20 text-text-muted"
                      }`}>
                        {lab.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-text-muted leading-relaxed">
                    <strong className="text-foreground font-semibold">Goal: </strong>{lab.goal}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {lab.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="bg-[#030712] px-2 py-0.5 rounded border border-card-border/60 font-mono text-[9px] text-text-muted"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-card-border/30 pt-3.5 flex justify-end">
                  {lab.status === "Available" ? (
                    <Link
                      href={`/labs/${lab.id}`}
                      className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1 group/btn"
                    >
                      Open Lab Workspace
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-text-muted/60 font-mono italic">Lab Workspace Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
