"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { tokenizationLessons, tokenizationSubmodules } from "@/data/ai/tokenization";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  BookOpenText,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  TrendingUp,
  XCircle,
  Play,
  Terminal,
  CheckSquare,
  ChevronRight
} from "lucide-react";

interface ClientProps {
  slug: string;
}

export default function TokenizationLessonClient({ slug }: ClientProps) {
  const lesson = tokenizationLessons[slug];
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  if (!lesson) {
    notFound();
  }

  // Find index in submodule list for navigation
  const currentSubmoduleIdx = tokenizationSubmodules.findIndex(sm => sm.slug === slug);
  const prevSubmodule = currentSubmoduleIdx > 0 ? tokenizationSubmodules[currentSubmoduleIdx - 1] : null;
  const nextSubmodule = currentSubmoduleIdx < tokenizationSubmodules.length - 1 ? tokenizationSubmodules[currentSubmoduleIdx + 1] : null;

  const toggleQuestion = (idx: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const difficultyColor = 
    lesson.difficulty === "Beginner" 
      ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
      : lesson.difficulty === "Intermediate"
      ? "border-orange-500/20 bg-orange-500/5 text-orange-400"
      : "border-white/10 bg-white/5 text-slate-300";

  const renderVisualDiagram = () => {
    switch (slug) {
      case "what-is-tokenization":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: The Tokenization Pipeline
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              {[
                { label: "Raw Text", value: `"I love AI"`, desc: "User prompt string", color: "text-white border-white/20" },
                { label: "Tokenizer", value: "tiktoken / BPE", desc: "Segmentation engine", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
                { label: "Tokens", value: `["I", " love", " AI"]`, desc: "Subword text units", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
                { label: "Token IDs", value: "[40, 3047, 15592]", desc: "Vocabulary index map", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
                { label: "Embeddings", value: "Dense Vector [4096]", desc: "Model vector input", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className={`flex flex-col gap-1.5 p-4 rounded-xl border w-full lg:w-44 text-center ${step.color} shadow-sm`}>
                    <span className="text-[9px] font-mono opacity-60">Step 0{idx + 1}</span>
                    <span className="text-xs font-bold text-foreground">{step.label}</span>
                    <span className="text-[10px] font-mono truncate">{step.value}</span>
                    <span className="text-[9px] text-text-muted leading-tight">{step.desc}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:flex items-center text-orange-500 shrink-0 font-bold">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                  {idx < arr.length - 1 && (
                    <div className="lg:hidden flex items-center text-orange-500 py-1 font-bold">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      case "tokenization-algorithms":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: Tokenization Granularities Compared
            </h3>
            <div className="flex flex-col gap-4 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              <div className="text-xs text-text-muted font-sans mb-1">
                Target word: <span className="text-white font-mono font-bold">&quot;learning&quot;</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-cyan-400 uppercase tracking-wider">Character-Level (Small Vocab, Long Sequences)</span>
                  <span className="font-mono text-text-muted">8 tokens</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["l", "e", "a", "r", "n", "i", "n", "g"].map((char, i) => (
                    <span key={i} className="px-3 py-1 rounded border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-mono text-xs">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-white uppercase tracking-wider">Word-Level (Huge Vocab, OOV Failures)</span>
                  <span className="font-mono text-text-muted">1 token</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-3 py-1 rounded border border-white/10 bg-white/5 text-white font-mono text-xs">
                    learning
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-orange-400 uppercase tracking-wider">Subword-Level (Balanced standard for LLMs)</span>
                  <span className="font-mono text-text-muted">2 tokens</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["learn", "ing"].map((sub, i) => (
                    <span key={i} className="px-4 py-1 rounded border border-orange-500/20 bg-orange-500/5 text-orange-400 font-mono text-xs">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "bpe-wordpiece":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: BPE Bottom-Up Merge Process
            </h3>
            <div className="flex flex-col gap-4 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              <div className="text-xs text-text-muted font-sans mb-1">
                How the word <span className="text-white font-mono font-bold">&quot;lowest&quot;</span> is constructed starting from character bytes:
              </div>
              
              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-text-muted w-20">Start state:</span>
                  <div className="flex gap-1">
                    {["l", "o", "w", "e", "s", "t"].map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted">{c}</span>
                    ))}
                  </div>
                </div>
                
                <div className="text-orange-500 pl-24"><ChevronDown className="h-4 w-4" /></div>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-text-muted w-20">Merge &apos;e&apos; + &apos;s&apos;:</span>
                  <div className="flex gap-1 items-center">
                    {["l", "o", "w"].map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted">{c}</span>
                    ))}
                    <span className="px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-bold">es</span>
                    <span className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted">t</span>
                  </div>
                </div>

                <div className="text-orange-500 pl-24"><ChevronDown className="h-4 w-4" /></div>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-text-muted w-20">Merge &apos;es&apos; + &apos;t&apos;:</span>
                  <div className="flex gap-1 items-center">
                    {["l", "o", "w"].map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted">{c}</span>
                    ))}
                    <span className="px-2.5 py-0.5 rounded border border-orange-500/30 bg-orange-500/5 text-orange-400 font-bold">est</span>
                  </div>
                </div>

                <div className="text-orange-500 pl-24"><ChevronDown className="h-4 w-4" /></div>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-text-muted w-20">Merge &apos;l&apos;+&apos;o&apos;+&apos;w&apos;:</span>
                  <div className="flex gap-1 items-center">
                    <span className="px-2.5 py-0.5 rounded border border-orange-500/30 bg-orange-500/5 text-orange-400 font-bold">low</span>
                    <span className="px-2.5 py-0.5 rounded border border-orange-500/30 bg-orange-500/5 text-orange-400 font-bold">est</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "token-ids-vocabulary":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: Token ID to Embedding Mapping
            </h3>
            <div className="flex flex-col lg:flex-row items-stretch gap-6 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              <div className="flex-1 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex flex-col justify-center items-center text-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Token String</span>
                <span className="text-lg font-black text-white font-mono">&quot;AI&quot;</span>
                <div className="h-4 w-0.5 bg-orange-500" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Token ID</span>
                <span className="text-lg font-black text-orange-400 font-mono">15836</span>
              </div>

              <div className="flex items-center justify-center text-orange-500 font-bold">
                <ChevronRight className="h-6 w-6 hidden lg:block" />
                <ChevronDown className="h-6 w-6 lg:hidden" />
              </div>

              <div className="flex-1 p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col justify-center gap-2 text-xs font-mono">
                <span className="text-[9px] text-text-muted uppercase tracking-wider block border-b border-card-border/30 pb-1">Vocabulary Table Index</span>
                <div className="flex justify-between items-center text-[10px] text-text-muted">
                  <span>Row 15835:</span>
                  <span>&quot;AGI&quot;</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-white font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                  <span>Row 15836:</span>
                  <span>&quot;AI&quot;</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-text-muted">
                  <span>Row 15837:</span>
                  <span>&quot;AIE&quot;</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-orange-500 font-bold">
                <ChevronRight className="h-6 w-6 hidden lg:block" />
                <ChevronDown className="h-6 w-6 lg:hidden" />
              </div>

              <div className="flex-1 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex flex-col justify-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold text-center block">Dense Embedding Lookup</span>
                <div className="flex flex-col gap-1.5 font-mono text-[9px] text-text-muted">
                  <span className="text-[8px] text-cyan-400">EmbeddingMatrix[15836]</span>
                  <div className="grid grid-cols-4 gap-1">
                    <span className="p-1 rounded bg-[#030712] text-center border border-card-border text-white font-bold">+0.124</span>
                    <span className="p-1 rounded bg-[#030712] text-center border border-card-border text-white font-bold">-0.459</span>
                    <span className="p-1 rounded bg-[#030712] text-center border border-card-border text-white font-bold">+0.781</span>
                    <span className="p-1 rounded bg-[#030712] text-center border border-card-border text-white font-bold">...</span>
                  </div>
                  <span className="text-[8px] text-center italic text-text-muted">Mapped to a 4096-dimension vector slot</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "token-cost":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: Multilingual Token Inflation & API Cost
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">English Input</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono font-bold">2 Tokens</span>
                </div>
                <div className="p-3 rounded bg-[#030712] border border-card-border/40 font-mono text-xs text-white">
                  &quot;Hello World&quot;
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-cyan-400">Hello</span>
                  <span className="px-2 py-0.5 rounded border border-card-border bg-[#030712] text-cyan-400"> world</span>
                </div>
                <div className="pt-2 border-t border-cyan-500/10 flex justify-between text-[10px] text-text-muted font-mono">
                  <span>API cost multiplier:</span>
                  <span className="text-white font-bold">1.0x</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Bengali Input (Same Meaning)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 font-mono font-bold">7 Tokens</span>
                </div>
                <div className="p-3 rounded bg-[#030712] border border-card-border/40 font-mono text-xs text-white">
                  &quot;হ্যালো ওয়ার্ল্ড&quot;
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[9px]">
                  {["হ", "্", "যা", "ল", "ো", " ও", "য়া", "র", "্", "ল", "্", "ড"].slice(0, 7).map((tok, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded border border-card-border bg-[#030712] text-orange-400">{tok}</span>
                  ))}
                  <span className="px-1.5 py-0.5 rounded border border-card-border bg-[#030712] text-text-muted">...</span>
                </div>
                <div className="pt-2 border-t border-orange-500/10 flex justify-between text-[10px] text-text-muted font-mono">
                  <span>API cost multiplier:</span>
                  <span className="text-orange-400 font-bold">3.5x (Inflated!)</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "rag-agents":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: Unsafe Character vs Safe Token-Aware Chunking
            </h3>
            <div className="flex flex-col gap-4 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md">
              <div className="text-xs text-text-muted font-sans font-medium mb-1">
                Splitting the text: <span className="text-white font-mono font-bold">&quot;Transformer is powerful.&quot;</span>
              </div>

              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider font-mono">Unsafe Character Chunking (Limit = 15 chars)</span>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch font-mono text-xs">
                  <div className="flex-1 p-2 rounded bg-[#030712] border border-red-500/10 text-red-300">
                    &quot;Transformer is p&quot;
                  </div>
                  <div className="flex-1 p-2 rounded bg-[#030712] border border-red-500/10 text-red-300">
                    &quot;owerful.&quot;
                  </div>
                </div>
                <p className="text-[9px] text-red-400/80 leading-normal">
                  Warning: Word &quot;powerful&quot; is sliced in half. Embedding representations will lose semantic integrity.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider font-mono">Safe Token-Aware Chunking (Limit = 4 tokens)</span>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch font-mono text-xs">
                  <div className="flex-1 p-2 rounded bg-[#030712] border border-cyan-500/10 text-cyan-300">
                    &quot;Transformer is&quot;
                  </div>
                  <div className="flex-1 p-2 rounded bg-[#030712] border border-cyan-500/10 text-cyan-300">
                    &quot;powerful.&quot;
                  </div>
                </div>
                <p className="text-[9px] text-cyan-400/80 leading-normal">
                  Success: Splits at token/word boundaries. Maintains complete semantic context for retrieved database vector layers.
                </p>
              </div>
            </div>
          </div>
        );
      case "interview-guide":
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Visual Diagram: Where the Tokenizer Sits in System Design
            </h3>
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 p-5 rounded-2xl border border-card-border/60 bg-[#060a13]/30 backdrop-blur-md font-mono text-[10px] text-center text-text-muted">
              <div className="flex-1 p-3 rounded-xl border border-card-border bg-[#030712] flex flex-col justify-center gap-1">
                <span className="text-white font-bold">User Input</span>
                <span className="text-[9px] opacity-75">Raw String Prompt</span>
                <span className="text-cyan-400 mt-1 font-bold">&quot;Hello LLM&quot;</span>
              </div>

              <div className="flex items-center justify-center text-orange-500 font-bold"><ChevronRight className="h-4 w-4 hidden md:block" /><ChevronDown className="h-4 w-4 md:hidden" /></div>

              <div className="flex-1 p-3 rounded-xl border border-orange-500/30 bg-orange-500/5 text-orange-400 flex flex-col justify-center gap-1 font-bold">
                <span>Tokenizer</span>
                <span className="text-[9px] text-text-muted font-normal">Runs on CPU</span>
                <span className="text-white mt-1">[9906, 1493]</span>
              </div>

              <div className="flex items-center justify-center text-orange-500 font-bold"><ChevronRight className="h-4 w-4 hidden md:block" /><ChevronDown className="h-4 w-4 md:hidden" /></div>

              <div className="flex-1 p-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 flex flex-col justify-center gap-1 font-bold">
                <span>Embedding Layer</span>
                <span className="text-[9px] text-text-muted font-normal">Runs on GPU VRAM</span>
                <span className="text-white mt-1">Dense Float Vectors</span>
              </div>

              <div className="flex items-center justify-center text-orange-500 font-bold"><ChevronRight className="h-4 w-4 hidden md:block" /><ChevronDown className="h-4 w-4 md:hidden" /></div>

              <div className="flex-1 p-3 rounded-xl border border-card-border bg-[#030712] flex flex-col justify-center gap-1">
                <span className="text-white font-bold">Transformer Model</span>
                <span className="text-[9px] opacity-75">Attention Layers</span>
                <span className="text-orange-500 mt-1 font-bold">Predict Next Tokens</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden text-text-main font-sans transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb Row */}
          <div className="flex items-center justify-between">
            <Link
              href="/ai-engineer/foundation/tokenization"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 text-orange-500 group-hover:-translate-x-1 transition-transform" />
              Back to Module 1.1: Tokenization
            </Link>
            <span className="text-[10px] font-mono text-text-muted uppercase font-bold">
              Lesson 0{currentSubmoduleIdx + 1} of 07
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
              AI Lesson & Submodule
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {lesson.title}
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              {lesson.subtitle}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border tracking-wider ${difficultyColor}`}>
                {lesson.difficulty}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border border-white/10 bg-white/5 text-slate-300 tracking-wider">
                {lesson.readingTime}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border border-cyan-500/10 bg-cyan-500/5 text-cyan-400 tracking-wider">
                LLM Foundation
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border border-orange-500/10 bg-orange-500/5 text-orange-400 tracking-wider">
                Interview Ready
              </span>
            </div>
          </div>

          {/* Lesson Overview Card */}
          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-5 shadow-md backdrop-blur-md text-xs text-text-muted leading-relaxed">
            <span className="text-foreground uppercase font-bold tracking-wider text-[9px] text-orange-500 block mb-2">Lesson Overview</span>
            <p>{lesson.overview}</p>
          </div>

          {/* Progression (Beginner → Engineer → Production) */}
          {lesson.progression && (
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-orange-500" />
                From Beginner to Engineer
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest font-mono">Beginner Level</span>
                  <p className="text-[10px] text-text-muted leading-relaxed">{lesson.progression.beginner}</p>
                </div>
                <div className="p-4 rounded-xl border border-orange-500/10 bg-orange-500/5 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest font-mono">Engineer Level</span>
                  <p className="text-[10px] text-text-muted leading-relaxed">{lesson.progression.engineer}</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest font-mono">Production Level</span>
                  <p className="text-[10px] text-text-muted leading-relaxed">{lesson.progression.production}</p>
                </div>
              </div>
            </div>
          )}

          {/* Why This Matters Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Compass className="h-4 w-4" />
              Why This Matters
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              {lesson.whyItMatters}
            </p>
          </div>

          {/* Mental Model Analogy Box */}
          {lesson.mentalModel && (
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5 flex gap-4 backdrop-blur-md items-start">
              <Lightbulb className="h-5 w-5 text-orange-500 shrink-0 mt-0.5 animate-pulse" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-foreground font-mono">
                  Mental Model: {lesson.mentalModel.analogy}
                </span>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {lesson.mentalModel.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Diagram Section (dynamic for all 7 submodules) */}
          {renderVisualDiagram()}

          {/* Simple Explanation Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <BookOpenText className="h-4 w-4" />
              Tokenization in Simple Words
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {lesson.simpleExplanation}
            </p>
          </div>

          {/* Subword Comparison Table (Lesson 2) */}
          {lesson.subwordComparisonRows && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">Syllable Splitting Granularity Comparison</h4>
              <div className="overflow-x-auto border border-card-border/60 rounded-xl bg-[#030712]/50">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-[#060a13]/60 border-b border-card-border/60 text-foreground font-mono text-[9px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Tokenizer Type</th>
                      <th className="p-3">Example</th>
                      <th className="p-3">Benefit</th>
                      <th className="p-3">Problem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/30 text-text-muted font-sans text-[11px]">
                    {lesson.subwordComparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-bold text-white">{row.type}</td>
                        <td className="p-3 font-mono text-cyan-400">{row.example}</td>
                        <td className="p-3">{row.benefit}</td>
                        <td className="p-3">{row.problem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Algorithm Comparison Table (Lesson 3) */}
          {lesson.algoComparisonRows && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">Tokenizer Algorithm Comparison</h4>
              <div className="overflow-x-auto border border-card-border/60 rounded-xl bg-[#030712]/50">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-[#060a13]/60 border-b border-card-border/60 text-foreground font-mono text-[9px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Algorithm</th>
                      <th className="p-3">Main Idea</th>
                      <th className="p-3">Common Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/30 text-text-muted font-sans text-[11px]">
                    {lesson.algoComparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-bold text-white">{row.algo}</td>
                        <td className="p-3 text-cyan-400 font-medium">{row.idea}</td>
                        <td className="p-3 font-mono">{row.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Cost Comparison Table (Lesson 5) */}
          {lesson.costRows && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">API Billing Prompt Costs Metrics</h4>
              <div className="overflow-x-auto border border-card-border/60 rounded-xl bg-[#030712]/50">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-[#060a13]/60 border-b border-card-border/60 text-foreground font-mono text-[9px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Prompt Type</th>
                      <th className="p-3">Token Usage</th>
                      <th className="p-3">Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/30 text-text-muted font-sans text-[11px]">
                    {lesson.costRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-bold text-white">{row.type}</td>
                        <td className="p-3 font-mono text-cyan-400">{row.tokens}</td>
                        <td className="p-3">{row.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Wrong vs Strong Interview Answers Table (Lesson 7) */}
          {lesson.wrongStrongRows && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">Interview Defense: Wrong vs Strong Answers</h4>
              <div className="overflow-x-auto border border-card-border/60 rounded-xl bg-[#030712]/50">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-[#060a13]/60 border-b border-card-border/60 text-foreground font-mono text-[9px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Question</th>
                      <th className="p-3">Weak Answer</th>
                      <th className="p-3">Strong Answer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/30 font-sans text-[11px]">
                    {lesson.wrongStrongRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-bold text-white w-1/4 leading-relaxed">{row.question}</td>
                        <td className="p-3 text-red-400/90 w-1/3 leading-relaxed flex items-start gap-1">
                          <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-red-500" />
                          <span>{row.weak}</span>
                        </td>
                        <td className="p-3 text-cyan-400 w-1/3 leading-relaxed">
                          <div className="flex items-start gap-1">
                            <CheckSquare className="h-3.5 w-3.5 shrink-0 mt-0.5 text-cyan-400" />
                            <span>{row.strong}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Step-by-Step example */}
          {lesson.stepExample && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">Example: Text to Tokens to Token IDs</h4>
              <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/20 flex flex-col gap-4 font-mono text-xs text-text-muted">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border/30 pb-2">
                  <span className="text-foreground uppercase text-[10px] font-bold tracking-wider text-orange-500 font-sans">Step 1: Input text string</span>
                  <span className="text-[11px] text-white">&quot;{lesson.stepExample.input}&quot;</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border/30 pb-2">
                  <span className="text-foreground uppercase text-[10px] font-bold tracking-wider text-orange-500 font-sans">Step 2: Token representation</span>
                  <span className="text-[11px] text-cyan-400">{JSON.stringify(lesson.stepExample.tokens)}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-foreground uppercase text-[10px] font-bold tracking-wider text-orange-500 font-sans">Step 3: Mapped Token IDs</span>
                  <span className="text-[11px] text-white">{JSON.stringify(lesson.stepExample.tokenIds)}</span>
                </div>
              </div>
              <p className="text-[10px] text-text-muted italic leading-relaxed font-sans">
                {lesson.stepExample.note}
              </p>
            </div>
          )}

          {/* One word breakdown */}
          {lesson.wordBreakdown && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">{lesson.wordBreakdown.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed mb-1 font-sans">{lesson.wordBreakdown.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {lesson.wordBreakdown.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-2">
                    <span className="text-xs font-bold text-white font-mono">&quot;{ex.word}&quot;</span>
                    <div className="flex flex-wrap gap-1">
                      {ex.tokens.map((tok, tIdx) => (
                        <span key={tIdx} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 font-mono text-[9px] text-cyan-400">
                          {tok}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparative Examples */}
          {lesson.comparisons && (
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground">{lesson.comparisons.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.comparisons.examples.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-card-border/30 pb-2">
                      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">{item.category}</span>
                      <span className="text-[10px] text-text-muted font-mono">{item.tokens.length} tokens</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-text-muted font-mono">Input: &quot;{item.input}&quot;</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono text-[9px]">
                        {item.tokens.map((tok, tIdx) => (
                          <span key={tIdx} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 text-cyan-400">
                            {tok}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-text-muted leading-relaxed font-sans">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep-Dive Cards */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Deep-Dive Core Concepts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.deepDiveCards.map((card, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wide text-cyan-400">{card.title}</span>
                  <p className="text-[11px] text-text-muted leading-relaxed font-sans">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concepts Covered */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <Cpu className="h-4 w-4" />
              Concepts Covered
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {lesson.conceptsCovered.map((c, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#030712] border border-card-border/60 px-3 py-1 text-[10px] font-mono text-text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Production Relevance Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <ShieldCheck className="h-4 w-4" />
              Why AI Engineers Care About Tokenization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.productionRelevance.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#060a13]/30 flex flex-col gap-1">
                  <span className="text-xs font-bold text-foreground">{item.title}</span>
                  <p className="text-[10px] text-text-muted leading-relaxed font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Failure Scenario */}
          {lesson.failureScenario && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 flex flex-col gap-3 backdrop-blur-md">
              <div className="flex items-center gap-2 border-b border-red-500/10 pb-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <span className="text-xs font-bold text-foreground font-mono text-white">
                  Production Failure Scenario: {lesson.failureScenario.title}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-xs text-text-muted leading-relaxed font-sans">
                <div>
                  <strong className="text-red-400">Root Cause:</strong> {lesson.failureScenario.rootCause}
                </div>
                <div>
                  <strong className="text-cyan-400">Fix / Strategy:</strong> {lesson.failureScenario.fix}
                </div>
              </div>
            </div>
          )}

          {/* Try This in the Lab */}
          {lesson.labTasks && (
            <div className="rounded-xl border border-cyan-500/20 bg-[#030712] p-5 flex flex-col gap-3 shadow-lg">
              <div className="flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold text-foreground font-mono uppercase tracking-wider text-cyan-400">
                  Try This in the Lab
                </span>
              </div>
              <ul className="flex flex-col gap-2 pl-1 text-xs text-text-muted font-sans leading-relaxed">
                {lesson.labTasks.map((task, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <Play className="h-3 w-3 text-orange-500 shrink-0 mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-card-border/30 flex justify-between items-center text-[10px]">
                <Link 
                  href="/labs/tokenizer-visualizer"
                  className="text-orange-500 font-bold hover:underline font-mono"
                >
                  Launch Lab Application →
                </Link>
                <span className="text-text-muted italic">Simulator Active</span>
              </div>
            </div>
          )}

          {/* Mapped Project Section */}
          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-5 md:p-6 flex flex-col gap-4 shadow-md">
            <div className="flex flex-col gap-1 border-b border-card-border/30 pb-3">
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-wider font-bold">Mapped Foundation Project</span>
              <h4 className="text-sm font-bold text-foreground font-sans">
                {lesson.projectPreview.title}
              </h4>
            </div>
            
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              {lesson.projectPreview.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-1 text-xs font-sans">
                <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider text-cyan-400">Architecture Preview</span>
                <p className="text-[10px] text-text-muted leading-relaxed">{lesson.projectPreview.architecture}</p>
              </div>

              <div className="p-4 rounded-xl border border-card-border bg-[#030712] flex flex-col gap-1 text-xs justify-center font-sans">
                <span className="font-bold text-foreground block mb-1 uppercase text-[9px] tracking-wider text-orange-500">Tech Stack Planned</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {lesson.projectPreview.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-[#050811] border border-card-border/40 px-2 py-0.5 rounded text-[9px] text-text-muted font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-card-border/30 pt-4">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <Link 
                  href="/labs/tokenizer-visualizer"
                  className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  Open Lab
                </Link>
                <a 
                  href="https://github.com/devJam2026/tokenizer-visualizer-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-card-border bg-[#030712] text-text-muted hover:text-foreground text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Cpu className="h-3.5 w-3.5" />
                  View GitHub
                </a>
              </div>
              <Link 
                href="/projects/tokenizer-visualizer-studio"
                className="text-orange-500 font-bold hover:underline cursor-pointer text-xs font-mono"
              >
                View Project Requirements &rarr;
              </Link>
            </div>
          </div>

          {/* Common Misconceptions Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <AlertTriangle className="h-4 w-4" />
              Common Beginner Misconceptions
            </h3>
            <div className="flex flex-col gap-3">
              {lesson.misconceptions.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-card-border/40 rounded-xl overflow-hidden bg-[#030712]/40">
                  <div className="p-4 bg-orange-500/5 flex flex-col gap-1 border-r border-card-border/20">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      Misconception
                    </span>
                    <p className="text-[11px] text-text-muted leading-relaxed font-sans">{item.misconception}</p>
                  </div>
                  <div className="p-4 flex flex-col gap-1 font-sans">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Lightbulb className="h-3.5 w-3.5 shrink-0" />
                      Reality
                    </span>
                    <p className="text-[11px] text-text-muted leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Interview Defense Q&A Accordion */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
              <HelpCircle className="h-4 w-4" />
              Technical Interview Defense Q&A
            </h3>
            <div className="flex flex-col gap-3 font-sans">
              {lesson.interviewQA.map((item, idx) => {
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

          {/* Key Takeaways Section */}
          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/30 p-5 md:p-6 backdrop-blur-md">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/30 pb-2 mb-3">
              <ShieldCheck className="h-4 w-4" />
              Key Takeaways
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans">
              {lesson.takeaways.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                  <span className="text-cyan-400 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Before You Move Next Checklist */}
          {lesson.moveNextChecklist && (
            <div className="rounded-xl border border-card-border bg-[#060a13]/30 p-5 md:p-6 backdrop-blur-md flex flex-col gap-4">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/30 pb-2">
                <CheckSquare className="h-4 w-4" />
                Before You Move Next Checklist
              </h3>
              <ul className="flex flex-col gap-3 font-sans text-xs text-text-muted">
                {lesson.moveNextChecklist.map((item, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed items-start">
                    <input 
                      type="checkbox" 
                      id={`chk-${idx}`} 
                      className="mt-0.5 h-4 w-4 rounded border-card-border/60 bg-[#030712] text-orange-500 focus:ring-orange-500/20 accent-orange-500 shrink-0 cursor-pointer"
                    />
                    <label htmlFor={`chk-${idx}`} className="cursor-pointer">{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Previous / Next Navigation */}
          <div className="border-t border-card-border/40 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono">
            {prevSubmodule ? (
              <Link
                href={`/ai-engineer/foundation/tokenization/${prevSubmodule.slug}`}
                className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors py-2 group cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Previous: {prevSubmodule.title}
              </Link>
            ) : (
              <Link
                href="/ai-engineer/foundation/tokenization"
                className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors py-2 group cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Previous: Tokenization Hub
              </Link>
            )}

            {nextSubmodule ? (
              <Link
                href={`/ai-engineer/foundation/tokenization/${nextSubmodule.slug}`}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors py-2 group cursor-pointer"
              >
                Next: {nextSubmodule.title}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <Link
                href="/ai-engineer/foundation/tokenization"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors py-2 group cursor-pointer"
              >
                Finish Module: Back to Hub
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
