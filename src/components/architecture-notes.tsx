"use client";

import React from "react";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

export default function ArchitectureNotes() {
  const notes = [
    {
      title: "Micro Frontends at Scale",
      concept: "Tesco-style Module Federation",
      description: "Decomposing web architectures into independent remotes loaded dynamically via Webpack/Rspack container wrappers.",
      diagram: (
        <div className="flex items-center justify-between w-full bg-[#030712] border border-card-border/60 rounded-lg p-3.5 font-mono text-[8px] sm:text-[9px] text-text-muted mt-4">
          <div className="px-2 py-1 rounded border border-violet-500/30 text-violet-400 bg-violet-500/5 font-bold">
            Shell Host
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-card-border" />
          <div className="flex flex-col gap-1.5">
            <div className="px-2 py-0.5 rounded border border-blue-500/20 text-blue-400 bg-blue-500/5">
              Remote Auth
            </div>
            <div className="px-2 py-0.5 rounded border border-emerald-500/20 text-emerald-400 bg-emerald-500/5">
              Remote Checkout
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Agent Orchestration",
      concept: "ReAct Reasoning Loop",
      description: "Managing execution loops, structured planning layers, memory buffers, and tool invocation registries.",
      diagram: (
        <div className="flex items-center justify-between w-full bg-[#030712] border border-card-border/60 rounded-lg p-3.5 font-mono text-[8px] sm:text-[9px] text-text-muted mt-4 gap-2">
          <div className="px-2 py-1 rounded border border-violet-500/30 text-violet-400 bg-violet-500/5 font-bold">
            Agent Loop
          </div>
          <div className="flex flex-col items-center gap-1">
            <ArrowRight className="h-3 w-3 text-card-border rotate-[-15deg]" />
            <span className="text-[7px]">Ask</span>
          </div>
          <div className="px-2 py-1 rounded border border-orange-500/20 text-orange-400 bg-orange-500/5">
            Tools Registry
          </div>
          <div className="flex flex-col items-center gap-1">
            <ArrowRight className="h-3 w-3 text-card-border rotate-[15deg]" />
            <span className="text-[7px]">Process</span>
          </div>
          <div className="px-2 py-1 rounded border border-emerald-500/20 text-emerald-400 bg-emerald-500/5 font-bold">
            LLM Core
          </div>
        </div>
      ),
    },
    {
      title: "RAG System Architecture",
      concept: "Hybrid Clustered Search",
      description: "Ingesting doc chunks, generating vector storage embeddings, performing hybrid search retrieval, and LLM reranking.",
      diagram: (
        <div className="flex flex-wrap items-center justify-between w-full bg-[#030712] border border-card-border/60 rounded-lg p-3.5 font-mono text-[8px] sm:text-[9px] text-text-muted mt-4 gap-2">
          <div className="px-1.5 py-0.5 rounded border border-card-border bg-input-bg text-text-muted">
            Doc Chunk
          </div>
          <ArrowRight className="h-3 w-3 text-card-border" />
          <div className="px-1.5 py-0.5 rounded border border-blue-500/20 text-blue-400 bg-blue-500/5 font-bold">
            Vector DB
          </div>
          <ArrowRight className="h-3 w-3 text-card-border" />
          <div className="px-1.5 py-0.5 rounded border border-orange-500/20 text-orange-400 bg-orange-500/5">
            Rerank Cache
          </div>
          <ArrowRight className="h-3 w-3 text-card-border" />
          <div className="px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400 bg-emerald-500/5 font-bold">
            LLM context
          </div>
        </div>
      ),
    },
    {
      title: "Resilient CI/CD Pipelines",
      concept: "Multi-stage Cache Rings",
      description: "Automating builds across parallel testing pipelines, caching dependencies, and managing blue-green rollouts.",
      diagram: (
        <div className="flex items-center justify-between w-full bg-[#030712] border border-card-border/60 rounded-lg p-3.5 font-mono text-[8px] sm:text-[9px] text-text-muted mt-4">
          <div className="px-2 py-1 rounded border border-card-border bg-input-bg text-text-muted">
            Git Push
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-card-border" />
          <div className="px-2 py-1 rounded border border-red-500/20 text-red-400 bg-red-500/5 font-bold">
            Lint/Test
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-card-border" />
          <div className="px-2 py-1 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 font-bold">
            CDN Deploy
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="architecture" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-12 scroll-mt-20 w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase">
            Engineering Showroom
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Featured Architecture Notes
          </h2>
        </div>
        <a
          href="#articles"
          className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 flex items-center gap-1 transition-colors duration-200"
        >
          View Technical Notes <span className="text-[10px]">→</span>
        </a>
      </div>

      {/* Grid of Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {notes.map((note) => (
          <div
            key={note.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-violet-500/20 hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-[10px] font-bold text-text-muted/80 font-mono uppercase">
                  {note.concept}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-card-border bg-input-bg text-violet-600 dark:text-violet-400 shadow-inner">
                  <Layers className="h-3.5 w-3.5" />
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                {note.title}
              </h3>
              
              <p className="text-xs text-text-muted leading-relaxed">
                {note.description}
              </p>
            </div>

            {/* Embed code/styled diagram */}
            {note.diagram}

            <div className="flex items-center gap-1 text-[10px] font-bold text-violet-600 dark:text-violet-400 mt-5 border-t border-card-border/60 pt-3 cursor-not-allowed opacity-80">
              <BookOpen className="h-3 w-3" />
              <span>Read complete blueprint note</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
