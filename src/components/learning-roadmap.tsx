"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Step {
  id: string;
  title: string;
  status: string;
  desc: string;
  progress: string;
  slug: string;
}

const aiSteps: Step[] = [
  {
    id: "python-for-ai-systems",
    title: "0. Python AI",
    status: "Completed",
    desc: "Master Python syntax, NumPy matrix maths, Pandas dataframes manipulation, type safety using Pydantic, and FastAPI async services.",
    progress: "100%",
    slug: "python-for-ai-systems",
  },
  {
    id: "machine-learning-foundations",
    title: "0A. ML Foundations",
    status: "Completed",
    desc: "Train classical supervised models for regression and classification, execute K-Means clustering, PCA transforms, and features engineering.",
    progress: "100%",
    slug: "machine-learning-foundations",
  },
  {
    id: "deep-learning-fundamentals",
    title: "0B. DL Fundamentals",
    status: "Completed",
    desc: "Build neural networks from scratch, compute backpropagation gradients, optimize training weights, and handle sequence RNNs.",
    progress: "100%",
    slug: "deep-learning-fundamentals",
  },
  {
    id: "foundation",
    title: "1. Foundation",
    status: "Active",
    desc: "Learn core prompt engineering, tokenization, context constraints, structured schemas, embedding lookups, and local models evaluations.",
    progress: "100%",
    slug: "foundation",
  },
  {
    id: "neural-networks",
    title: "2. Neural Nets",
    status: "Planned",
    desc: "Deconstruct deep learning layers, weights, biases, backpropagation, and multi-layer perceptrons from scratch.",
    progress: "0%",
    slug: "neural-networks",
  },
  {
    id: "transformers",
    title: "3. Transformers",
    status: "Planned",
    desc: "Deep dive into Attention Is All You Need. Study multi-head attention, decoder blocks, and normalizations.",
    progress: "0%",
    slug: "transformers",
  },
  {
    id: "embeddings-vector-db",
    title: "4. Embeddings & DB",
    status: "Planned",
    desc: "Master chunking strategies, embedding generation, index types (HNSW, IVF), and hybrid query strategies.",
    progress: "0%",
    slug: "embeddings-vector-db",
  },
  {
    id: "rag",
    title: "5. RAG Pipelines",
    status: "Planned",
    desc: "Design advanced document ingestion, reranking models, metadata filtering, and hallucination evaluations.",
    progress: "0%",
    slug: "rag",
  },
  {
    id: "agents",
    title: "6. Agent Loops",
    status: "Planned",
    desc: "Master the ReAct loop, tool registries, agent planning models, memory management, and structured execution loops.",
    progress: "0%",
    slug: "agents",
  },
  {
    id: "mcp-ecosystem",
    title: "7. MCP / Tools",
    status: "Planned",
    desc: "Deconstruct the Model Context Protocol. Build client-server integrations and enforce security boundaries.",
    progress: "0%",
    slug: "mcp-ecosystem",
  },
  {
    id: "multi-agent-systems",
    title: "8. Multi-Agent",
    status: "Planned",
    desc: "Orchestrate role-based agent collaborations, supervisor patterns, and human-in-the-loop approvals.",
    progress: "0%",
    slug: "multi-agent-systems",
  },
  {
    id: "ai-system-design",
    title: "9. AI Sys Design",
    status: "Planned",
    desc: "Scale AI topologies. Design caching layers, routing gates, costs observability, and low-latency fallbacks.",
    progress: "0%",
    slug: "ai-system-design",
  },
  {
    id: "production-deploy",
    title: "10. Production AI",
    status: "Planned",
    desc: "Run models at scale. Master streaming APIs, token bucket rate limits, guardrail checks, and CI/CD eval loops.",
    progress: "0%",
    slug: "production-deploy",
  },
  {
    id: "master-capstones",
    title: "11. Capstones",
    status: "Planned",
    desc: "Synthesize all learnings into enterprise-grade portfolio platforms with full architectural and execution specs.",
    progress: "0%",
    slug: "master-capstones",
  },
];

const dsaSteps: Step[] = [
  {
    id: "complexity-analysis",
    title: "1. Complexity",
    status: "Completed",
    desc: "Master Big O, Big Theta, and Big Omega notation scales. Benchmark execution steps and analyze time-space tradeoffs.",
    progress: "100%",
    slug: "complexity-analysis",
  },
  {
    id: "arrays",
    title: "2. Arrays",
    status: "Completed",
    desc: "Explore linear structures, traversals, prefix sums, sliding windows, and shrinking pointer boundaries.",
    progress: "100%",
    slug: "arrays",
  },
  {
    id: "strings",
    title: "3. Strings",
    status: "Completed",
    desc: "Master string manipulation, pattern matching, sliding windows, hashing lookup keys, and character frequency arrays.",
    progress: "100%",
    slug: "strings",
  },
  {
    id: "linked-lists",
    title: "4. Linked Lists",
    status: "Completed",
    desc: "Deconstruct node chains, pointer directions, list reversals, merge operations, and Floyd cycle detection.",
    progress: "100%",
    slug: "linked-lists",
  },
  {
    id: "stack",
    title: "5. Stack",
    status: "Completed",
    desc: "Master Last-In-First-Out operations, recursion stacks, monotonic sequences, and nested validations.",
    progress: "100%",
    slug: "stack",
  },
  {
    id: "queue",
    title: "6. Queue",
    status: "Completed",
    desc: "Explore First-In-First-Out loops, circular memory frames, double-ended queues, and priority heaps.",
    progress: "100%",
    slug: "queue",
  },
  {
    id: "hash-tables",
    title: "7. Hash Tables",
    status: "Completed",
    desc: "Understand hashing maps, collision resolutions (chaining vs. open addressing), and constant-time search gates.",
    progress: "100%",
    slug: "hash-tables",
  },
  {
    id: "trees",
    title: "8. Trees",
    status: "Completed",
    desc: "Deconstruct hierarchic node traversals (DFS/BFS), binary search constraints, balancing, and prefix Tries.",
    progress: "100%",
    slug: "trees",
  },
  {
    id: "heap",
    title: "9. Heap",
    status: "Completed",
    desc: "Optimize continuous min/max extractions using array-based binary heaps and bubble heapify steps.",
    progress: "100%",
    slug: "heap",
  },
  {
    id: "graphs",
    title: "10. Graphs",
    status: "Completed",
    desc: "Traverse custom coordinate vertices, relax weighted edges, compute shortest paths, and sort DAG cycles.",
    progress: "100%",
    slug: "graphs",
  },
  {
    id: "backtracking",
    title: "11. Backtrack",
    status: "Completed",
    desc: "Search recursive decision trees, prune failing paths, and solve permutation grid puzzles.",
    progress: "100%",
    slug: "backtracking",
  },
  {
    id: "dynamic-programming",
    title: "12. Dyn Prog",
    status: "Completed",
    desc: "Identify overlapping subproblems, store computations in tables (memoization vs tabulation), and solve Knapsacks.",
    progress: "100%",
    slug: "dynamic-programming",
  },
  {
    id: "trie",
    title: "13. Trie",
    status: "Completed",
    desc: "Build efficient prefix trees for character retrieval. Optimize dictionary searches, autocompletes, and prefix lookups.",
    progress: "100%",
    slug: "trie",
  },
  {
    id: "binary-search",
    title: "14. Bin Search",
    status: "Completed",
    desc: "Divide search spaces in half logarithmically. Master search-space reductions and binary searching on answer thresholds.",
    progress: "100%",
    slug: "binary-search",
  },
  {
    id: "greedy",
    title: "15. Greedy",
    status: "Completed",
    desc: "Make locally optimal choices at each step. Evaluate Jump Games, merge overlapping intervals, and study counterexamples.",
    progress: "100%",
    slug: "greedy",
  },
  {
    id: "bit-manipulation",
    title: "16. Bit Manip",
    status: "Completed",
    desc: "Interact directly with binary data in registers. Master AND, OR, XOR, shifts, and efficient bitmask logic.",
    progress: "100%",
    slug: "bit-manipulation",
  },
];

export default function LearningRoadmap() {
  const [activeTrack, setActiveTrack] = useState<"ai" | "dsa">("ai");

  const steps = activeTrack === "ai" ? aiSteps : dsaSteps;
  const [activeStep, setActiveStep] = useState<Step>(aiSteps[0]);

  useEffect(() => {
    if (activeTrack === "ai") {
      setActiveStep(aiSteps[0]);
    } else {
      setActiveStep(dsaSteps[0]);
    }
  }, [activeTrack]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Active":
        return "text-orange-500 bg-orange-500/10 border-orange-500/20 animate-pulse";
      default:
        return "text-text-muted bg-input-bg border-card-border";
    }
  };

  return (
    <section id="roadmap" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Curriculum
            </span>
            <h2 className="text-3xl font-black text-foreground mt-1">
              Syllabus Timeline
            </h2>
          </div>
          
          {/* Active Track Selector Toggle */}
          <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg">
            <button
              onClick={() => setActiveTrack("ai")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "ai"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              AI Engineering
            </button>
            <button
              onClick={() => setActiveTrack("dsa")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "dsa"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              DSA Foundations
            </button>
          </div>
        </div>

        <span className="text-xs text-text-muted font-bold font-mono">
          Click nodes to view syllabus details
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Left Column - Visual Horizontal/Vertical Timeline (8/12 width) */}
        <div className="lg:col-span-8 w-full">
          {/* Timeline Wrapper */}
          <div className="premium-card premium-card-cyan rounded-2xl p-6 md:p-8 overflow-x-auto w-full relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 min-w-max relative py-4">
              
              {/* Ambient Background connecting pipe for desktop */}
              <div className="absolute top-[40px] left-8 right-8 h-0.5 bg-card-border/60 -translate-y-1/2 hidden md:block -z-10" />

              {steps.map((step, idx) => {
                const isSelected = activeStep.id === step.id;
                
                return (
                  <React.Fragment key={step.id}>
                    {/* Step Node Circle */}
                    <button
                      onClick={() => setActiveStep(step)}
                      className={`flex flex-col items-center gap-2 relative z-10 focus:outline-none cursor-pointer min-w-[110px] transition-all duration-300 ${
                        isSelected ? "scale-105" : "hover:scale-102"
                      }`}
                    >
                      {/* Node circle */}
                      <div
                        className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? "bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/35 scale-110"
                            : step.status === "Completed"
                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                            : step.status === "Active"
                            ? "bg-orange-500/10 border-orange-500 text-orange-500"
                            : "bg-background border-card-border text-text-muted"
                        }`}
                      >
                        {step.status === "Completed" ? (
                          <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="font-mono text-xs font-black">{idx + 1}</span>
                        )}
                      </div>

                      {/* Node text */}
                      <span
                        className={`text-[10px] sm:text-xs font-bold text-center transition-colors duration-300 ${
                          isSelected ? "text-foreground font-black" : "text-text-muted hover:text-foreground"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>

                    {/* Flow Arrow (Vertical for mobile) */}
                    {idx < steps.length - 1 && (
                      <div className="flex justify-center md:hidden my-1 text-card-border/80">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

            </div>
          </div>
        </div>

        {/* Right Column - Syllabus Focus Node Details Card (4/12 width) */}
        <div className="lg:col-span-4 w-full">
          <div className="premium-card rounded-2xl p-6 md:p-8 border-orange-500/10 bg-card-bg/60 flex flex-col gap-5 min-h-[280px] hover:border-orange-500/25 transition-all duration-300 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-card-border pb-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted/80">Syllabus Details</span>
              <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${getStatusBadge(activeStep?.status || "Planned")}`}>
                {activeStep?.status || "Planned"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">{activeStep?.title || ""}</h3>
              <p className="text-xs text-text-muted leading-relaxed mt-1">
                {activeStep?.desc || ""}
              </p>
            </div>

            {activeStep?.status !== "Planned" && activeStep?.progress !== "0%" && (
              <div className="flex flex-col gap-2 border-t border-card-border/60 pt-4 mt-auto">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-text-muted">
                  <span>Track Completion Progress</span>
                  <span>{activeStep?.progress || "0%"}</span>
                </div>
                <div className="h-1.5 w-full bg-input-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: activeStep?.progress || "0%" }}
                  />
                </div>
              </div>
            )}

            {activeStep?.status === "Planned" && (
              <div className="flex items-center gap-2 border-t border-card-border/60 pt-4 mt-auto text-[10px] font-bold text-text-muted/80">
                <div className="h-2 w-2 rounded-full border border-text-muted/50" />
                <span>Planned Lab Module Development</span>
              </div>
            )}

            {/* Link to details page */}
            <div className="mt-4 pt-4 border-t border-card-border/60">
              <Link
                href={activeTrack === "ai" ? `/ai-engineer/${activeStep.slug}` : `/dsa/${activeStep.slug}`}
                className="w-full inline-flex items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 text-xs font-bold transition-all shadow-md shadow-orange-600/15"
              >
                Go to Module Details →
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
