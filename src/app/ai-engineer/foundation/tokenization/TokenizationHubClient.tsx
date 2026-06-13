"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  tokenizationSubmodules, 
  tokenizationPipeline, 
  tokenizationInterviewQuestions, 
  tokenizationProductionChecklist 
} from "@/data/ai/tokenization";
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Award, 
  ShieldCheck,
  ChevronRight,
  Terminal,
  Cpu
} from "lucide-react";

export default function TokenizationHubClient() {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const pipelineDetails = [
    {
      title: "Raw Text",
      desc: "Human-readable text input by the user. E.g., 'I love AI'. Characters are the base representation.",
      example: "\"I love AI\""
    },
    {
      title: "Tokens",
      desc: "Text is broken into smaller chunks (words or subwords) by the tokenizer algorithm. Spaces are preserved.",
      example: "[\"I\", \" love\", \" AI\"]"
    },
    {
      title: "Token IDs",
      desc: "Each unique token is mapped to an integer value representing its index position in the model's vocabulary table.",
      example: "[40, 3047, 15592]"
    },
    {
      title: "Embeddings",
      desc: "Token IDs are projected into a high-dimensional vector space (e.g. 4096 dimensions) via embedding lookup weights.",
      example: "[[0.12, -0.45, ...], [0.89, 0.01, ...], ...]"
    },
    {
      title: "Transformer",
      desc: "Self-attention layers process the dense vectors in parallel to encode contextual relationships and predict next tokens.",
      example: "Attention weight map & probability distribution computed"
    },
    {
      title: "Output Tokens",
      desc: "Predicted token IDs are sampled and decoded back into human-readable text output.",
      example: "[105, 301] → \"You're welcome\""
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden text-text-main font-sans transition-colors duration-300">
      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10 w-full flex flex-col gap-10">
          
          {/* Breadcrumb Row */}
          <div className="flex items-center justify-between">
            <Link
              href="/ai-engineer/foundation"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 text-orange-500 group-hover:-translate-x-1 transition-transform" />
              Back to Foundation Track
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              Syllabus Live
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              Syllabus Module 1.1
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tokenization Hub
            </h1>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Before an LLM can understand text, it must first break language into tokens. 
              In this module, you will learn how raw text becomes token IDs, how tokenizer 
              algorithms like BPE and WordPiece work, why non-English text can increase token usage, 
              and how tokenization affects API cost, context windows, RAG pipelines, and AI agents.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-medium">
                Beginner Friendly
              </span>
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400 font-medium">
                Interview Focused
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 font-medium">
                Production Relevant
              </span>
            </div>
          </div>

          {/* Outcomes Summary Section */}
          <div className="rounded-2xl border border-card-border/60 bg-[#060a13]/30 p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-500" />
              What You Will Master
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Explain what tokens are and why LLMs process numbers instead of raw strings.</span>
              </div>
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Understand token IDs and tokenizer vocabularies mapping rules.</span>
              </div>
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Compare character-level, word-level, and subword tokenization models.</span>
              </div>
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Describe BPE, WordPiece, and SentencePiece merging statistics.</span>
              </div>
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Analyze token inflation, API cost margins, and context window limits.</span>
              </div>
              <div className="flex gap-3 text-xs text-text-muted">
                <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Connect token boundary counts to RAG chunking and agent memory loops.</span>
              </div>
            </div>
          </div>

          {/* Interactive Tokenization Pipeline */}
          <div className="rounded-2xl border border-card-border/60 bg-[#060a13]/30 p-6 md:p-8 backdrop-blur-md flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold text-foreground mb-1">
                The LLM Tokenization Pipeline
              </h2>
              <p className="text-xs text-text-muted">
                Click on any step of the horizontal sequence to see how raw text resolves into vectors.
              </p>
            </div>

            {/* Pipeline Steps Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
              {tokenizationPipeline.map((step, idx) => {
                const isActive = activePipelineStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePipelineStep(idx)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col gap-2 ${
                      isActive 
                        ? "border-orange-500 bg-orange-500/5 shadow-md shadow-orange-500/5"
                        : "border-card-border bg-[#030712]/50 hover:border-orange-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-text-muted">Step 0{idx + 1}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
                    </div>
                    <span className="text-xs font-bold text-foreground">{step.name}</span>
                    <span className="text-[10px] text-text-muted leading-tight line-clamp-1">{step.meaning}</span>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="p-4 rounded-xl border border-card-border/60 bg-[#030712]/60 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-card-border/30 pb-2">
                <span className="text-xs font-bold text-orange-500 font-mono">
                  Active step: {pipelineDetails[activePipelineStep].title}
                </span>
                <span className="text-[10px] font-mono text-cyan-400">Context Visualizer</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 flex flex-col gap-1">
                  <span className="text-xs text-text-muted leading-relaxed">
                    {pipelineDetails[activePipelineStep].desc}
                  </span>
                </div>
                <div className="md:col-span-4 p-3 rounded-lg border border-card-border/40 bg-[#050811] flex flex-col gap-1 font-mono text-[10px] text-text-muted justify-center">
                  <span className="text-foreground uppercase text-[9px] tracking-wider text-cyan-400 block mb-1">State output:</span>
                  <div className="overflow-x-auto whitespace-pre">{pipelineDetails[activePipelineStep].example}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid: Left lessons cards & Right sticky sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column (8/12 width) */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              <div className="flex items-center justify-between border-b border-card-border/40 pb-2">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Learning Path Lessons
                </h3>
                <span className="text-[10px] text-text-muted font-mono">{tokenizationSubmodules.length} submodules ready</span>
              </div>

              {/* Submodule cards list */}
              <div className="flex flex-col gap-4">
                {tokenizationSubmodules.map((sm, index) => {
                  const difficultyColor = 
                    sm.difficulty === "Beginner" 
                      ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
                      : sm.difficulty === "Intermediate"
                      ? "border-orange-500/20 bg-orange-500/5 text-orange-400"
                      : "border-white/10 bg-white/5 text-slate-300";
                  return (
                    <div
                      key={sm.slug}
                      className="p-6 rounded-2xl border border-card-border bg-[#060a13]/30 hover:border-orange-500/20 transition-all duration-200 flex flex-col gap-4 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-mono text-text-muted">Submodule 0{index + 1}</span>
                          <h4 className="text-sm font-bold text-foreground group-hover:text-orange-500 transition-colors">
                            {sm.title}
                          </h4>
                          <p className="text-xs text-text-muted leading-relaxed">
                            {sm.description}
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border shrink-0 tracking-wider ${difficultyColor}`}>
                          {sm.difficulty}
                        </span>
                      </div>

                      {/* Outcomes */}
                      <div className="flex flex-col gap-1.5 pl-1">
                        <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Outcomes you will master:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                          {sm.outcomes.map((out, oIdx) => (
                            <div key={oIdx} className="flex gap-2 text-[10px] text-text-muted">
                              <span className="text-orange-500 font-bold shrink-0">•</span>
                              <span>{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="border-t border-card-border/30 pt-3 flex items-center justify-between">
                        <span className="text-[10px] text-text-muted font-mono">
                          Duration: {sm.duration}
                        </span>
                        
                        <Link
                          href={`/ai-engineer/foundation/tokenization/${sm.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 group-hover:underline cursor-pointer"
                        >
                          Read Lesson
                          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column / Sticky Sidebar (4/12 width) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
              
              {/* Module Progress */}
              <div className="border border-card-border/60 bg-[#060a13]/30 p-5 rounded-2xl flex flex-col gap-4 backdrop-blur-md">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/30 pb-2">
                  Module Status
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white">0%</span>
                    <span className="text-[10px] text-text-muted font-mono">completed</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-foreground">7 Lessons</span>
                    <span className="text-[10px] text-text-muted font-mono">to complete</span>
                  </div>
                </div>
                {/* ProgressBar */}
                <div className="w-full h-1.5 rounded-full bg-[#030712] overflow-hidden border border-card-border/40">
                  <div className="h-full bg-orange-500 w-0" />
                </div>
              </div>

              {/* Quick Cheatsheet */}
              <div className="border border-card-border/60 bg-[#060a13]/30 p-5 rounded-2xl flex flex-col gap-3 backdrop-blur-md">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/30 pb-2">
                  Quick Cheatsheet
                </h4>
                <ul className="flex flex-col gap-3 text-[10px] text-text-muted leading-relaxed pl-1">
                  <li className="flex gap-2">
                    <span className="text-orange-500 font-bold shrink-0">1.</span>
                    <span><strong>Text → Tokens → IDs → Embeddings</strong> is the core entry pipeline structure.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500 font-bold shrink-0">2.</span>
                    <span><strong>1 English word !== 1 token</strong>. In fact, subword splits merge fragments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500 font-bold shrink-0">3.</span>
                    <span><strong>Input + Output = Total</strong>. API bills measure the total of both prompts.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500 font-bold shrink-0">4.</span>
                    <span><strong>Token count affects cost & latency</strong>. Shorter prompts yield faster generations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500 font-bold shrink-0">5.</span>
                    <span><strong>Chunking in RAG</strong> must measure token indices, not characters lengths.</span>
                  </li>
                </ul>
              </div>

              {/* Related Project Connection */}
              <div className="border border-card-border/60 bg-[#060a13]/30 p-5 rounded-2xl flex flex-col gap-3 backdrop-blur-md">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/30 pb-2">
                  Syllabus Project
                </h4>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-foreground">Tokenizer Visualizer Studio</span>
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    Build a dynamic web app to highlight token borders, trace byte merges, and audit API billing.
                  </p>
                  <div className="flex flex-col gap-2 mt-2 w-full">
                    <Link
                      href="/labs/tokenizer-visualizer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-orange-500 text-xs font-bold text-white hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                      <Terminal className="h-3.5 w-3.5" />
                      Open Lab
                    </Link>
                    <a
                      href="https://github.com/devJam2026/tokenizer-visualizer-studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-card-border bg-[#030712] text-xs font-bold text-text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                      <Cpu className="h-3.5 w-3.5" />
                      View GitHub
                    </a>
                    <Link
                      href="/projects/tokenizer-visualizer-studio"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-orange-500/20 bg-orange-500/5 text-xs font-bold text-orange-500 hover:bg-orange-500/10 transition-colors cursor-pointer"
                    >
                      View Project Requirements &rarr;
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Build What You Learn Section */}
          <div className="rounded-2xl border border-card-border/60 bg-[#060a13]/30 p-6 md:p-8 backdrop-blur-md flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-card-border/30 pb-4">
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-wider font-bold">Build What You Learn</span>
              <h2 className="text-xl font-bold text-foreground">
                Capstone Project: Tokenizer Visualizer Studio
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 flex flex-col gap-4">
                <p className="text-xs text-text-muted leading-relaxed">
                  Apply what you learn in these lessons to build a fully functional developer tool. 
                  You will build a frontend interface that accepts user string input, and visually highlights 
                  token divisions using dynamic HSL styling. The application allows developers to compare 
                  how tiktoken (cl100k_base), BERT (WordPiece), and SentencePiece split coding parameters, 
                  Unicode characters, non-English text, and emojis.
                </p>
                <div className="bg-[#030712]/50 border border-card-border/40 p-4 rounded-xl flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Example Strings To Bench-Test:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-text-muted font-mono">
                    <li className="flex items-center gap-1.5"><span className="h-1 w-1 bg-cyan-400 rounded-full" /> English: &quot;Hello World&quot;</li>
                    <li className="flex items-center gap-1.5"><span className="h-1 w-1 bg-cyan-400 rounded-full" /> Bengali: &quot;আমি বাংলা শিখছি&quot;</li>
                    <li className="flex items-center gap-1.5"><span className="h-1 w-1 bg-cyan-400 rounded-full" /> Code: &quot;const userName = getUser()&quot;</li>
                    <li className="flex items-center gap-1.5"><span className="h-1 w-1 bg-cyan-400 rounded-full" /> Emojis &amp; Symbols: &quot;🔥🚀❤️🤖&quot;</li>
                    <li className="flex items-center gap-1.5"><span className="h-1 w-1 bg-cyan-400 rounded-full" /> Prompt Format: JSON schemas inputs</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-4 p-5 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">Stack Planned</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-[#050811] px-2 py-0.5 border border-card-border/60 rounded text-[9px] font-mono text-text-muted">TypeScript</span>
                    <span className="bg-[#050811] px-2 py-0.5 border border-card-border/60 rounded text-[9px] font-mono text-text-muted">React</span>
                    <span className="bg-[#050811] px-2 py-0.5 border border-card-border/60 rounded text-[9px] font-mono text-text-muted">Tailwind CSS</span>
                    <span className="bg-[#050811] px-2 py-0.5 border border-card-border/60 rounded text-[9px] font-mono text-text-muted">tiktoken</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/labs/tokenizer-visualizer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-orange-500 text-xs font-bold text-white hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    <Terminal className="h-4 w-4" />
                    Open Lab
                  </Link>
                  <a
                    href="https://github.com/devJam2026/tokenizer-visualizer-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-card-border bg-[#030712] text-xs font-bold text-text-muted hover:text-foreground transition-colors cursor-pointer"
                  >
                    <Cpu className="h-4 w-4" />
                    View GitHub
                  </a>
                  <Link
                    href="/projects/tokenizer-visualizer-studio"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-orange-500/20 bg-orange-500/5 text-xs font-bold text-orange-500 hover:bg-orange-500/10 transition-colors cursor-pointer"
                  >
                    View Project Requirements
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Readiness Section */}
          <div className="rounded-2xl border border-card-border/60 bg-[#060a13]/30 p-6 md:p-8 backdrop-blur-md flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-card-border/30 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-wider font-bold">Interview Readiness</span>
                <h2 className="text-xl font-bold text-foreground">
                  Interview Defense Checklists
                </h2>
              </div>
              <Link
                href="/ai-engineer/foundation/tokenization/interview-guide"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:underline cursor-pointer"
              >
                Open Interview Guide
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tokenizationInterviewQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex gap-3 text-xs text-text-muted"
                >
                  <HelpCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground font-mono">Question 0{idx + 1}</span>
                    <span>{q}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="sm:hidden flex justify-center mt-2">
              <Link
                href="/ai-engineer/foundation/tokenization/interview-guide"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:underline cursor-pointer"
              >
                Open Interview Guide
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Production Checklist */}
          <div className="rounded-2xl border border-card-border/60 bg-[#060a13]/30 p-6 md:p-8 backdrop-blur-md flex flex-col gap-6">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-card-border/30 pb-3">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              Production Best Practices Checklist
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tokenizationProductionChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 text-xs text-text-muted leading-relaxed"
                >
                  <span className="h-5 w-5 rounded bg-cyan-900/30 border border-cyan-800/30 text-cyan-400 flex items-center justify-center shrink-0 font-bold font-mono text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-card-border/40 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono">
            <Link
              href="/ai-engineer/foundation"
              className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous: LLM Foundation Overview
            </Link>
            <div className="flex items-center gap-2 text-text-muted py-2">
              <span>Next: Context Window & Prompt Budgeting</span>
              <span className="px-2 py-0.5 rounded border border-card-border text-[9px] bg-slate-900 font-bold shrink-0">COMING SOON</span>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
