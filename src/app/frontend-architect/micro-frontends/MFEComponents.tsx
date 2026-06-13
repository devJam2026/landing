"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  AlertTriangle,
  Activity,
  Workflow,
  Globe,
  Layout,
  ShieldCheck,
  Server,
  Scale
} from "lucide-react";

// 1. 60-Second Interview Checklist
export function InterviewChecklistCard() {
  return (
    <div id="checklist" className="scroll-mt-24 p-6 rounded-2xl border border-orange-500/30 bg-[#050811]/90 shadow-xl shadow-orange-500/[0.02] flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl bg-orange-500/10 -z-10" />
      
      <div className="flex items-center justify-between border-b border-card-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <h3 className="text-sm font-black text-foreground uppercase tracking-wider">The 60-Second Interview Checklist</h3>
        </div>
        <span className="text-[9px] bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded font-mono font-bold text-orange-400 uppercase tracking-widest">Revision Mode</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-text-muted">
        <div className="flex flex-col gap-3">
          <div>
            <strong className="text-foreground block font-mono text-[9px] uppercase tracking-wider text-cyan-400 mb-0.5">Core Pattern</strong>
            <p className="leading-relaxed">Micro Frontends split a large frontend into independently owned, built, and deployed domain applications, integrated at runtime.</p>
          </div>
          <div>
            <strong className="text-foreground block font-mono text-[9px] uppercase tracking-wider text-emerald-400 mb-0.5">Best Use Case</strong>
            <p className="leading-relaxed">Large engineering groups with multiple frontend teams, clear business domain boundaries, and the need for independent deployment schedules.</p>
          </div>
          <div>
            <strong className="text-foreground block font-mono text-[9px] uppercase tracking-wider text-violet-400 mb-0.5">Go-To Technologies</strong>
            <p className="leading-relaxed">Webpack Module Federation, Rspack Module Federation, Single-SPA, dynamic script loaders, and runtime remote manifests.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <strong className="text-foreground block font-mono text-[9px] uppercase tracking-wider text-rose-400 mb-0.5">Primary Trade-Off</strong>
            <p className="leading-relaxed">High team autonomy and deployment freedom vs. increased operational complexity, runtime bundle sizes, and required governance rules.</p>
          </div>
          <div>
            <strong className="text-foreground block font-mono text-[9px] uppercase tracking-wider text-amber-400 mb-0.5">Must Mention in Interview</strong>
            <p className="leading-relaxed">Shell app orchestration, remote entries, runtime manifests, shared singleton dependencies (React), error boundary wraps, and rollback capabilities.</p>
          </div>
          <div className="p-2.5 rounded border border-red-500/20 bg-red-500/5">
            <strong className="text-red-400 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Avoid Saying</strong>
            <p className="leading-relaxed text-red-300/80 font-mono">&ldquo;Micro Frontends are just client-side bundle code splitting.&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interview Answer Framework
export function InterviewAnswerFramework() {
  return (
    <div id="answer-framework" className="scroll-mt-24 p-5 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-card-border/40 pb-2">
        <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
          <Scale className="h-4 w-4 text-orange-500" />
          How to Structure Any Micro Frontend Interview Answer
        </h4>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center text-xs">
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">1</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Define Pattern</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Runtime composition, Shell/Remotes</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">2</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Team Problem</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Autonomy, release bottlenecks</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">3</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Describe Arch</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">remoteEntry.js, shared React Singletons</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">4</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Tradeoffs</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Independence vs Operational burden</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">5</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Failure Care</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Error boundaries & fallback slots</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">6</span>
          <span className="font-bold text-foreground text-[9px] mt-1">Ops & Deploy</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Manifest routes & rollbacks</span>
        </div>
        <div className="p-2.5 bg-[#030712] border border-card-border rounded-lg flex flex-col gap-1 items-center justify-between col-span-2 sm:col-span-1">
          <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold flex items-center justify-center text-[10px]">7</span>
          <span className="font-bold text-foreground text-[9px] mt-1">When Avoid</span>
          <span className="text-[8px] text-text-muted mt-0.5 leading-tight">Small teams or early stages</span>
        </div>
      </div>
    </div>
  );
}

// 3. ActiveRecallCard
interface ActiveRecallCardProps {
  id: string;
  question: string;
  shortAnswer: string;
  seniorExplanation: React.ReactNode;
  tradeoffs?: string[];
  keywords?: string[];
  followUp?: string;
  whatNotToSay?: string;
  children?: React.ReactNode;
}

export function ActiveRecallCard({
  id,
  question,
  shortAnswer,
  seniorExplanation,
  tradeoffs,
  keywords,
  followUp,
  whatNotToSay,
  children
}: ActiveRecallCardProps) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div id={id} className="scroll-mt-24 p-5 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-4 shadow-sm transition-all hover:border-card-border/80">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-2.5 items-start">
          <HelpCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest block mb-0.5">Active recall prompts</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-foreground leading-snug">{question}</h4>
          </div>
        </div>
      </div>
      
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full py-2.5 px-4 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 font-mono text-[10px] font-bold tracking-wide transition-all text-center uppercase"
        >
          [Reveal Architectural Answer]
        </button>
      ) : (
        <div className="flex flex-col gap-4 text-xs mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="border-t border-card-border/30 pt-3">
            <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-cyan-400">Short Answer</strong>
            <p className="text-text-muted leading-relaxed">{shortAnswer}</p>
          </div>
          
          <div className="border-t border-card-border/30 pt-3">
            <strong className="text-foreground block mb-1.5 font-mono text-[9px] uppercase tracking-wider text-orange-400">Senior-Level Explanation</strong>
            <div className="text-text-muted leading-relaxed whitespace-pre-line flex flex-col gap-2">{seniorExplanation}</div>
          </div>

          {children && (
            <div className="border-t border-card-border/30 pt-3">
              {children}
            </div>
          )}
          
          {tradeoffs && tradeoffs.length > 0 && (
            <div className="border-t border-card-border/30 pt-3">
              <strong className="text-foreground block mb-1.5 font-mono text-[9px] uppercase tracking-wider text-indigo-400">Architectural Trade-offs</strong>
              <ul className="list-disc pl-4 text-text-muted flex flex-col gap-1.5 mt-1 text-[11px] leading-relaxed">
                {tradeoffs.map((t, idx) => {
                  const parts = t.split(":");
                  if (parts.length > 1) {
                    return (
                      <li key={idx}>
                        <strong className="text-foreground">{parts[0]}:</strong>{parts.slice(1).join(":")}
                      </li>
                    );
                  }
                  return <li key={idx}>{t}</li>;
                })}
              </ul>
            </div>
          )}

          {keywords && keywords.length > 0 && (
            <div className="border-t border-card-border/30 pt-3">
              <strong className="text-foreground block mb-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400">Must-Mention Keywords</strong>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {keywords.map((kw, idx) => (
                  <span key={idx} className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] text-foreground font-mono font-bold tracking-wide">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {followUp && (
            <div className="border-t border-card-border/30 pt-3">
              <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-cyan-400">Common Follow-up</strong>
              <p className="text-text-muted leading-relaxed italic">{followUp}</p>
            </div>
          )}
          
          {whatNotToSay && (
            <div className="border-t border-card-border/30 pt-3 p-3 rounded border border-red-500/20 bg-red-500/5">
              <strong className="text-red-400 block mb-1.5 font-mono text-[9px] uppercase tracking-wider">What NOT to say</strong>
              <p className="text-red-300/80 leading-relaxed font-mono">{whatNotToSay}</p>
            </div>
          )}
          
          <button
            onClick={() => setRevealed(false)}
            className="self-end text-[9px] text-text-muted hover:text-foreground font-mono font-bold mt-2 uppercase tracking-wide"
          >
            [-] Hide Answer
          </button>
        </div>
      )}
    </div>
  );
}

// 4. InterviewPitfall
interface InterviewPitfallProps {
  title: string;
  explanation: string;
  recommendation?: string;
}

export function InterviewPitfall({ title, explanation, recommendation }: InterviewPitfallProps) {
  return (
    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex gap-3.5 my-2">
      <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1.5 animate-in fade-in duration-200">
        <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">⚠️ Interview Pitfall: {title}</span>
        <p className="text-[11px] text-text-muted leading-relaxed">
          {explanation}
        </p>
        {recommendation && (
          <p className="text-[11px] text-emerald-400/90 leading-relaxed mt-1">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400 mr-1.5">Recommendation:</span>
            {recommendation}
          </p>
        )}
      </div>
    </div>
  );
}

// 5. QuickSelfTest
interface QuickSelfTestProps {
  id: string;
  questions: string[];
  answers: string[];
}

export function QuickSelfTest({ id, questions, answers }: QuickSelfTestProps) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div id={id} className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex flex-col gap-3 my-4">
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-indigo-400" />
        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider">Quick Self-Test</span>
      </div>
      <p className="text-[11px] text-text-muted">Before moving ahead, try to answer these questions mentally:</p>
      
      <div className="flex flex-col gap-2.5 mt-1">
        {questions.map((q, idx) => (
          <div key={idx} className="flex gap-2 items-start text-xs text-text-muted leading-relaxed">
            <span className="text-indigo-400 font-mono font-bold shrink-0">{idx + 1}.</span>
            <span>{q}</span>
          </div>
        ))}
      </div>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="self-start text-[9px] font-mono font-bold text-indigo-400 hover:text-indigo-300 mt-1 uppercase tracking-wider"
        >
          [Reveal Answers]
        </button>
      ) : (
        <div className="flex flex-col gap-3.5 text-xs border-t border-card-border/30 pt-3 mt-1 animate-in fade-in duration-200">
          {answers.map((ans, idx) => (
            <div key={idx} className="flex gap-2 items-start text-text-muted leading-relaxed">
              <span className="text-emerald-400 font-mono font-bold shrink-0">{idx + 1}.</span>
              <p>
                <strong className="text-foreground">Answer: </strong>
                {ans}
              </p>
            </div>
          ))}
          <button
            onClick={() => setRevealed(false)}
            className="self-start text-[9px] font-mono font-bold text-indigo-400 hover:text-indigo-300 mt-1 uppercase tracking-wider"
          >
            Hide Answers
          </button>
        </div>
      )}
    </div>
  );
}

// 6. Visual Diagrams Renderers
export function VisualHighLevelArch() {
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full text-xs font-sans">
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/80 w-64 justify-center shadow-md">
        <Globe className="h-4 w-4 text-cyan-400" />
        <span className="font-semibold text-foreground">Browser loads https://devjam.in</span>
      </div>
      
      <div className="flex flex-col items-center relative w-full max-w-2xl">
        <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-500/40 to-orange-500/40 mb-2" />
        
        {/* Shell Box Container */}
        <div className="border border-orange-500/30 bg-orange-500/[0.03] p-5 rounded-2xl w-full flex flex-col gap-4 shadow-lg shadow-orange-500/[0.02]">
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-2">
            <span className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">Host Container / Shell App</span>
            <span className="bg-[#030712] border border-card-border text-[9px] text-text-muted px-2 py-0.5 rounded font-mono">Platform Team Owns</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-[#030712]/85 border border-card-border/60 rounded-xl flex items-center gap-2">
              <Layout className="h-4 w-4 text-cyan-400 shrink-0" />
              <div>
                <p className="font-bold text-foreground text-[11px]">Global Layout</p>
                <p className="text-[9px] text-text-muted">Header, Sidebar, Footer</p>
              </div>
            </div>
            <div className="p-3 bg-[#030712]/85 border border-card-border/60 rounded-xl flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-foreground text-[11px]">Auth Bootstrap</p>
                <p className="text-[9px] text-text-muted">Session & JWT Refresh</p>
              </div>
            </div>
            <div className="p-3 bg-[#030712]/85 border border-card-border/60 rounded-xl flex items-center gap-2">
              <Workflow className="h-4 w-4 text-orange-400 shrink-0" />
              <div>
                <p className="font-bold text-foreground text-[11px]">Route Resolver</p>
                <p className="text-[9px] text-text-muted">Dynamic remote mounting</p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest text-center block">Remote Mount Slots</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              <div className="p-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center flex flex-col items-center">
                <span className="font-bold text-foreground text-[10px]">Catalog Remote</span>
                <span className="text-[8px] text-cyan-400 mt-0.5">Team: Catalog</span>
              </div>
              <div className="p-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center flex flex-col items-center">
                <span className="font-bold text-foreground text-[10px]">Cart Remote</span>
                <span className="text-[8px] text-cyan-400 mt-0.5">Team: Checkout</span>
              </div>
              <div className="p-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center flex flex-col items-center">
                <span className="font-bold text-foreground text-[10px]">Checkout Remote</span>
                <span className="text-[8px] text-cyan-400 mt-0.5">Team: Checkout</span>
              </div>
              <div className="p-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center flex flex-col items-center">
                <span className="font-bold text-foreground text-[10px]">Profile Remote</span>
                <span className="text-[8px] text-cyan-400 mt-0.5">Team: Users</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around w-full max-w-xl my-2">
          <div className="h-6 w-0.5 bg-card-border" />
          <div className="h-6 w-0.5 bg-card-border" />
          <div className="h-6 w-0.5 bg-card-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-xl">
          <div className="p-2.5 bg-[#030712] border border-card-border/80 rounded-lg text-center flex items-center gap-2 justify-center">
            <Server className="h-3.5 w-3.5 text-text-muted" />
            <span className="font-mono text-[10px]">Catalog Service API</span>
          </div>
          <div className="p-2.5 bg-[#030712] border border-card-border/80 rounded-lg text-center flex items-center gap-2 justify-center">
            <Server className="h-3.5 w-3.5 text-text-muted" />
            <span className="font-mono text-[10px]">Cart Service API</span>
          </div>
          <div className="p-2.5 bg-[#030712] border border-card-border/80 rounded-lg text-center flex items-center gap-2 justify-center">
            <Server className="h-3.5 w-3.5 text-text-muted" />
            <span className="font-mono text-[10px]">Checkout Service API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualRuntimeSequence() {
  return (
    <div className="flex flex-col items-start gap-4 py-4 w-full max-w-2xl mx-auto text-xs font-sans">
      <div className="flex flex-col gap-3.5 w-full">
        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">1</span>
          <div>
            <p className="font-bold text-foreground text-[11px]">User opens /cart route</p>
            <p className="text-[9px] text-text-muted font-mono">Browser fetches core container shell code</p>
          </div>
        </div>
        <div className="h-4 w-0.5 bg-card-border ml-3" />

        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">2</span>
          <div>
            <p className="font-bold text-foreground text-[11px]">Shell matches route & checks dynamic manifest</p>
            <p className="text-[9px] text-text-muted font-mono">Resolves Cart Remote CDN address from remoteEntry.js</p>
          </div>
        </div>
        <div className="h-4 w-0.5 bg-card-border ml-3" />

        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">3</span>
          <div>
            <p className="font-bold text-foreground text-[11px]">Browser lazy loads Remote Entry bundle</p>
            <p className="text-[9px] text-text-muted font-mono">Downloads remoteEntry.js script to mount exposed chunks</p>
          </div>
        </div>
        <div className="h-4 w-0.5 bg-card-border ml-3" />

        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">4</span>
          <div>
            <p className="font-bold text-foreground text-[11px]">Shell loads dynamic entry and resolves shared singletons</p>
            <p className="text-[9px] text-text-muted font-mono">React framework checks bounds and locks dependency singletons</p>
          </div>
        </div>
        <div className="h-4 w-0.5 bg-card-border ml-3" />

        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">5</span>
          <div>
            <p className="font-bold text-foreground text-[11px]">Cart Remote mounts inside Shell container and calls API</p>
            <p className="text-[9px] text-text-muted font-mono">Component mounts in slot and updates UI view dynamically</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualBuildVsRuntime() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 w-full text-xs font-sans">
      <div className="p-4 rounded-xl border border-card-border bg-[#050811]/60 flex flex-col gap-3">
        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block border-b border-card-border/50 pb-1">Build-Time Integration (npm Package)</span>
        
        <div className="flex flex-col gap-2 mt-1">
          <div className="p-2.5 bg-[#030712] border border-card-border rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">MFE Source</span>
            <span className="text-[9px] text-rose-400 font-mono">Compile time</span>
          </div>
          <div className="text-center text-text-muted text-[10px] font-mono">─── npm publish ───►</div>
          <div className="p-2.5 bg-[#030712] border border-card-border rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">npm registry</span>
            <span className="text-[9px] text-text-muted font-mono">v1.2.0</span>
          </div>
          <div className="text-center text-text-muted text-[10px] font-mono">─── npm i & rebuild ───►</div>
          <div className="p-2.5 bg-rose-500/5 border border-rose-500/20 rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">Single Shell Bundle</span>
            <span className="text-[9px] text-rose-400 font-bold font-mono">Release coupled</span>
          </div>
        </div>
        
        <p className="text-[10px] text-text-muted leading-relaxed mt-2">
          <span className="text-red-400 font-bold">Drawback:</span> Redeploying any minor feature requires compiling the full shell container and coordinates coordination releases.
        </p>
      </div>

      <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.02] flex flex-col gap-3">
        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block border-b border-cyan-500/20 pb-1">Run-Time Integration (Module Federation)</span>
        
        <div className="flex flex-col gap-2 mt-1">
          <div className="p-2.5 bg-[#030712] border border-card-border rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">MFE Source</span>
            <span className="text-[9px] text-cyan-400 font-mono">Decoupled build</span>
          </div>
          <div className="text-center text-text-muted text-[10px] font-mono">─── deploy static assets ───►</div>
          <div className="p-2.5 bg-[#030712] border border-card-border rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">CDN / remoteEntry.js</span>
            <span className="text-[9px] text-emerald-400 font-bold font-mono">Updates Instantly</span>
          </div>
          <div className="text-center text-text-muted text-[10px] font-mono">─── dynamically loads ───►</div>
          <div className="p-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded flex items-center justify-between">
            <span className="font-bold text-foreground text-[10px]">Shell App (Runtime compose)</span>
            <span className="text-[9px] text-cyan-400 font-bold font-mono">Zero rebuilds</span>
          </div>
        </div>
        
        <p className="text-[10px] text-text-muted leading-relaxed mt-2">
          <span className="text-emerald-400 font-bold">Benefit:</span> Autonomy to roll out updates and roll back errors without redeploying the shell.
        </p>
      </div>
    </div>
  );
}

export function VisualFailureRecovery() {
  return (
    <div className="flex flex-col items-center gap-4 py-4 w-full text-xs font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
        <div className="p-3 bg-[#030712] border border-card-border rounded-xl flex flex-col gap-1 items-center justify-center text-center">
          <Workflow className="h-4 w-4 text-cyan-400" />
          <span className="font-bold text-foreground text-[10px] mt-1">1. Shell Loads Cart</span>
          <span className="text-[8px] text-text-muted font-mono">script tag fetch</span>
        </div>
        
        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-xl flex flex-col gap-1 items-center justify-center text-center">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <span className="font-bold text-red-400 text-[10px] mt-1">2. CDN Outage / 404</span>
          <span className="text-[8px] text-red-300/80 font-mono">Connection times out</span>
        </div>
        
        <div className="p-3 bg-[#030712] border border-card-border rounded-xl flex flex-col gap-1 items-center justify-center text-center">
          <ShieldCheck className="h-4 w-4 text-emerald-400 animate-pulse" />
          <span className="font-bold text-foreground text-[10px] mt-1">3. Error Boundary</span>
          <span className="text-[8px] text-text-muted font-mono">Catches error locally</span>
        </div>
        
        <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-xl flex flex-col gap-1 items-center justify-center text-center">
          <Layout className="h-4 w-4 text-cyan-400" />
          <span className="font-bold text-cyan-400 text-[10px] mt-1">4. Fallback Displayed</span>
          <span className="text-[8px] text-text-muted font-mono">Navigation stays active</span>
        </div>
      </div>
      
      <div className="p-3 rounded-lg border border-card-border bg-[#050811] w-full mt-2">
        <p className="text-[10px] text-text-muted leading-relaxed">
          <strong className="text-foreground">Graceful degradation:</strong> The Error Boundary isolates script exceptions, preventing global white screens. Telemetry logs detail <code className="text-orange-400 font-mono">remoteName: cartApp</code> and rollbacks resolve routing.
        </p>
      </div>
    </div>
  );
}
