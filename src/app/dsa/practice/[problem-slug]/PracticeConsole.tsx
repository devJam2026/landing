"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Problem } from "../../../../data/dsa/problems";
import { Play, RotateCcw, ArrowLeft, Terminal, Award, HelpCircle, Code2, Clipboard, TableProperties, CheckCircle2 } from "lucide-react";

interface PracticeConsoleProps {
  problem: Problem;
}

export default function PracticeConsole({ problem }: PracticeConsoleProps) {
  // Tab selections
  const [leftTab, setLeftTab] = useState<"statement" | "solutions" | "interview">("statement");
  const [rightTab, setRightTab] = useState<"editor" | "dryrun">("editor");
  const [solutionType, setSolutionType] = useState<"brute" | "better" | "optimal">("optimal");

  // Code editor states
  const [userCode, setUserCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  // Dry run animation state
  const [dryRunStep, setDryRunStep] = useState(0);

  useEffect(() => {
    if (problem) {
      setUserCode(problem.starterCode);
      setConsoleOutput("Press 'Run Tests' to execute submission check.");
      setDryRunStep(0);
    }
  }, [problem]);

  const handleRunTests = () => {
    setIsRunning(true);
    setConsoleOutput("Compiling files...\nInstrumenting abstract syntax tree (AST)...\nRunning test suites...\n");
    
    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput(
        (prev) =>
          prev +
          "✓ Test Case 1: Passed\n✓ Test Case 2: Passed\n✓ Test Case 3: Passed\n\n🎉 Submission Status: ACCEPTED (100% tests matched)\nRuntime: 12ms (Beats 94.2% JavaScript submissions)\nMemory: 42.1MB"
      );
    }, 1200);
  };

  const handleResetCode = () => {
    setUserCode(problem.starterCode);
    setConsoleOutput("Editor reset. Press 'Run Tests' to execute code.");
  };

  // Dry run step functions
  const activeStep = problem.dryRun[dryRunStep];

  const handleNextStep = () => {
    if (dryRunStep < problem.dryRun.length - 1) {
      setDryRunStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (dryRunStep > 0) {
      setDryRunStep((prev) => prev - 1);
    }
  };

  const badgeColor =
    problem.difficulty === "Easy"
      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
      : problem.difficulty === "Medium"
      ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
      : "text-rose-500 bg-rose-500/10 border-rose-500/20";

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 w-full">
      
      {/* Top Breadcrumb */}
      <div className="mb-4">
        <Link href="/dsa/practice" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-foreground font-bold transition-all">
          <ArrowLeft className="h-4 w-4" />
          Back to Explorer
        </Link>
      </div>

      {/* Problem Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border pb-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
              {problem.difficulty}
            </span>
            <span className="text-[9px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 font-mono">
              {problem.pillarSlug}
            </span>
          </div>
          <h2 className="text-2xl font-black text-foreground">
            {problem.title}
          </h2>
        </div>

        <div className="flex gap-4 text-xs font-mono text-text-muted">
          <div>
            <span className="opacity-60">TIME:</span> <span className="text-foreground font-bold">{problem.timeComplexity}</span>
          </div>
          <div>
            <span className="opacity-60">SPACE:</span> <span className="text-foreground font-bold">{problem.spaceComplexity}</span>
          </div>
        </div>
      </div>

      {/* Split Pane Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
        
        {/* Left Pane: Documentation & Content (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-4 w-full">
          {/* Tab Selector */}
          <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg w-full">
            <button
              onClick={() => setLeftTab("statement")}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "statement"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Clipboard className="h-3.5 w-3.5" />
              Statement
            </button>
            <button
              onClick={() => setLeftTab("solutions")}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "solutions"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              Solutions
            </button>
            <button
              onClick={() => setLeftTab("interview")}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "interview"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              Discussion
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="premium-card rounded-2xl p-6 min-h-[480px] flex flex-col justify-between">
            
            {/* Statement Tab */}
            {leftTab === "statement" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-foreground">Problem Statement</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {problem.statement}
                </p>

                <div className="bg-[#050811]/50 border border-card-border/60 rounded-lg p-4 mt-2">
                  <h4 className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-2">Real Engineering Applications</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    In production systems, this concept directly maps to caching index layers, route lookups optimizations, compiler scope parsing validations, and multi-thread dependency schedulers.
                  </p>
                </div>
              </div>
            )}

            {/* Solutions Tab */}
            {leftTab === "solutions" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200 w-full">
                {/* Solution Selector */}
                <div className="flex gap-2 border-b border-card-border pb-3">
                  {(["brute", "better", "optimal"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSolutionType(type)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase border transition-all cursor-pointer ${
                        solutionType === type
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : "bg-[#060a13]/30 border-card-border text-text-muted"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Active Solution Code block */}
                {(() => {
                  const sol =
                    solutionType === "brute"
                      ? problem.bruteForce
                      : solutionType === "better"
                      ? problem.better
                      : problem.optimal;

                  return (
                    <div className="flex flex-col gap-3 w-full">
                      <h4 className="text-xs font-bold text-foreground capitalize">{solutionType} Solution</h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {sol.explanation}
                      </p>
                      <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 overflow-x-auto w-full font-mono text-[11px] text-cyan-400/90 whitespace-pre">
                        {sol.code}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Interview Discussion Tab */}
            {leftTab === "interview" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-foreground">Interview Defense Q&A</h3>
                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                  {problem.interviewDiscussion.map((qa, idx) => (
                    <div key={idx} className="border border-card-border/50 rounded-xl p-4 bg-[#050811]/45 flex flex-col gap-1.5">
                      <h4 className="text-xs font-mono font-bold text-orange-500 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-orange-500" />
                        {qa.question}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-card-border/60 pt-4 mt-6 text-[10px] font-mono text-text-muted flex justify-between">
              <span>DevJam Practice Engine v1.0</span>
              <span className="text-orange-500 font-bold">ACCESSIBLE LAB</span>
            </div>
          </div>
        </div>

        {/* Right Pane: Coding Sandbox & Dry Run Visualizer (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {/* Tab Selector */}
          <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg w-full">
            <button
              onClick={() => setRightTab("editor")}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                rightTab === "editor"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              Code Sandbox
            </button>
            <button
              onClick={() => setRightTab("dryrun")}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                rightTab === "dryrun"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <TableProperties className="h-3.5 w-3.5" />
              Dry Run Tracer
            </button>
          </div>

          {/* Code Editor Tab */}
          {rightTab === "editor" && (
            <div className="flex flex-col gap-4 w-full animate-in fade-in duration-200">
              <div className="premium-card rounded-2xl p-5 flex flex-col gap-4 bg-[#050811]/90">
                <div className="flex items-center justify-between border-b border-card-border pb-3 text-xs text-text-muted">
                  <span className="font-mono">solution.js</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleResetCode}
                      className="px-2.5 py-1 rounded border border-card-border bg-card-bg/50 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Reset
                    </button>
                  </div>
                </div>

                {/* Monaco simulated textarea */}
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full min-h-[260px] bg-[#030712] border border-card-border/60 rounded-xl p-4 font-mono text-[12px] text-cyan-400 focus:outline-none focus:border-cyan-500/50 resize-y"
                />

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-1">
                  <button
                    onClick={handleRunTests}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    {isRunning ? "Running..." : "Run Tests"}
                  </button>
                </div>
              </div>

              {/* Diagnostic Console Output */}
              <div className="bg-[#030712] border border-card-border/60 rounded-2xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-2 min-h-[140px] select-text">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/60 pb-1.5">Console Output</span>
                <pre className="whitespace-pre-wrap leading-relaxed mt-1">{consoleOutput}</pre>
              </div>
            </div>
          )}

          {/* Dry Run Visualizer Tab */}
          {rightTab === "dryrun" && (
            <div className="flex flex-col gap-4 w-full animate-in fade-in duration-200">
              <div className="premium-card premium-card-cyan rounded-2xl p-6 flex flex-col gap-5 min-h-[440px]">
                <div className="flex items-center justify-between border-b border-card-border pb-3 text-xs">
                  <span className="font-mono font-bold text-cyan-400">Step-by-Step Execution trace</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevStep}
                      disabled={dryRunStep === 0}
                      className="px-2.5 py-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      Prev
                    </button>
                    <span className="px-2 py-1 font-mono text-[10px] text-cyan-400 bg-cyan-400/5 rounded border border-cyan-500/10">
                      {dryRunStep + 1} / {problem.dryRun.length}
                    </span>
                    <button
                      onClick={handleNextStep}
                      disabled={dryRunStep === problem.dryRun.length - 1}
                      className="px-2.5 py-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Step explanation */}
                <div className="bg-[#050811]/60 border border-card-border/60 rounded-lg p-4 flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase text-text-muted">Line {activeStep.line} execution</span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans">{activeStep.description}</p>
                  </div>
                </div>

                {/* Variables table */}
                <div className="border border-card-border rounded-xl bg-background/50 overflow-hidden font-mono text-[11px]">
                  <div className="grid grid-cols-2 bg-[#060a13] border-b border-card-border px-4 py-2 font-bold text-text-muted">
                    <span>Variable name</span>
                    <span>Current state</span>
                  </div>
                  <div className="divide-y divide-card-border/50">
                    {Object.entries(activeStep.variables).map(([name, val]) => (
                      <div key={name} className="grid grid-cols-2 px-4 py-2.5 items-center">
                        <span className="text-orange-500 font-bold">{name}</span>
                        <span className="text-cyan-400 truncate">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Informative tips */}
                <div className="border-t border-card-border/60 pt-4 mt-auto text-[10px] text-text-muted/70 leading-relaxed">
                  💡 **Tip**: Trace variables step-by-step to understand the change boundaries and why the final indices are resolved.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
