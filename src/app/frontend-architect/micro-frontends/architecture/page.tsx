"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Terminal, 
  Copy, 
  Check, 
  Scale, 
  BookOpen,
  Award,
  Globe,
  Layout
} from "lucide-react";
import { microFrontendsDetail } from "@/data/frontend/tracks/micro-frontends-detail";
import { 
  ActiveRecallCard, 
  InterviewPitfall, 
  VisualHighLevelArch,
  VisualRuntimeSequence,
  VisualBuildVsRuntime,
  VisualFailureRecovery
} from "../MFEComponents";

export default function MicroFrontendsArchitecturePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [diagramMode, setDiagramMode] = useState<Record<string, "visual" | "ascii">>({});

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleDiagramMode = (id: string, mode: "visual" | "ascii") => {
    setDiagramMode((prev) => ({ ...prev, [id]: mode }));
  };

  const commPatternItems = [
    {
      pattern: "URL state (Params & Query)",
      bestFor: "Route-level navigation configs like search filters, page IDs, categories.",
      risk: "Size constraints and visible to user (no sensitive tokens).",
      verdict: "Highly Recommended (Golden Standard)"
    },
    {
      pattern: "Lightweight DOM custom events",
      bestFor: "Immediate, cross-app UI triggers (like incrementing a header cart count).",
      risk: "Can lead to event sprawl and harder debugging if overused.",
      verdict: "Recommended (Keep event payloads tiny)"
    },
    {
      pattern: "Backend APIs / Shared Databases",
      bestFor: "Durable business data transitions (e.g. updating product inventory).",
      risk: "Requires database writes and network latencies.",
      verdict: "Recommended for stateful actions"
    },
    {
      pattern: "Shared Client Stores (Redux/Zustand)",
      bestFor: "Complex state mappings within a single MFE.",
      risk: "Tightly couples remotes to schema definitions, breaking independent deploys.",
      verdict: "Severe Anti-Pattern (Avoid across MFE boundaries)"
    }
  ];

  const perfRiskItems = [
    {
      risk: "Duplicate React/Vendor bundles",
      cause: "Misaligned or unconfigured shared dependencies in bundler config.",
      solution: "Use the Webpack Module Federation plugin 'shared' key to declare libraries as singletons.",
      keyword: "Singleton React"
    },
    {
      risk: "Waterfalls / Script loading lag",
      cause: "Sequentially loading remote Entry scripts inside script tags dynamically.",
      solution: "Implement route-level preloading (e.g. load Checkout remote bundle when user opens Cart).",
      keyword: "Preloading Strategy"
    },
    {
      risk: "Runtime White Screens",
      cause: "CDN endpoint outages or server crashes returning 404.",
      solution: "Wrap mount components in React Error Boundaries and configure CDN routing fallback pointers.",
      keyword: "Error Boundary wrap"
    },
    {
      risk: "Cumulative Layout Shifts (CLS)",
      cause: "Lazy-loaded remote UI mounting late and pushing page flows.",
      solution: "Reserve grid dimensions and render styled loading skeletons in remote slots.",
      keyword: "Skeleton Placeholder"
    }
  ];

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
              <span className="text-foreground">Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
              Architecture & System Design
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              Micro Frontends Architecture & System Design
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              Deep dive into shell-remote topology, Module Federation runtime composition, failure recovery, routing boundaries, and telemetry tracing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {/* Left Column - Detailed Content */}
            <div className="lg:col-span-8 flex flex-col gap-10 w-full">
              
              {/* Concept Section 1: What is a MFE */}
              <ActiveRecallCard
                id="definition"
                question="What are Micro Frontends, and why do large teams use them?"
                shortAnswer="An architectural pattern that splits a single large frontend application into smaller, independently built, deployed, and owned domain applications that compose at runtime."
                seniorExplanation={
                  <>
                    <p>In a monolithic frontend, all feature modules live in a single repository, share a single build pipeline, and are released as a single bundle. As organizations grow, this creates release bottlenecks, merge conflicts, and slow compile times.</p>
                    <p className="mt-2">Micro frontends solve this by aligning codebases with team boundaries. For example, a Catalog Team can own and deploy the Catalog remote without needing coordination from the Checkout or Users teams. Composition occurs in the user&apos;s browser using Module Federation to fetch script entries dynamically.</p>
                  </>
                }
                tradeoffs={[
                  "Autonomy: Teams can pick release schedules and deploy features independently.",
                  "Blast Radius: Localized failures do not crash other unrelated domains.",
                  "Operational Complexity: Managing version manifests, CDN pipelines, and dependency overrides is harder than standard bundling."
                ]}
                keywords={["Domain Boundaries", "Runtime Composition", "Module Federation", "Independent Deployment", "Team Autonomy"]}
                followUp="What is the difference between client-side runtime composition and build-time bundle integration?"
                whatNotToSay="&ldquo;Micro frontends make the page load faster.&rdquo; (Usually, they introduce bundle size overhead due to multiple Entry scripts and dynamic loading gaps, which must be optimized.)"
              >
                <div className="p-4 rounded-xl border border-card-border bg-[#050811] flex flex-col gap-2 mt-2">
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-bold">E-Commerce Monolith Split Example</span>
                  <pre className="text-text-muted text-[11px] font-mono leading-relaxed bg-[#030712] p-3 rounded-lg border border-card-border/40 overflow-x-auto">
{`E-commerce Platform
├── Shell App
├── Product Listing Micro App
├── Product Details Micro App
├── Cart Micro App
├── Checkout Micro App
├── Profile Micro App
└── Orders Micro App`}
                  </pre>
                </div>
                <InterviewPitfall 
                  title="CSS Bleeding"
                  explanation="Global CSS across remotes can break visual isolation. A style change in the Catalog Remote could bleed out and break layout spacing in the Checkout Remote."
                  recommendation="Enforce strict scope boundary overrides. Prefer design tokens, CSS Modules, styled scoped components, or shadow DOM containers with design system governance."
                />
              </ActiveRecallCard>

              {/* Concept Section 2: When NOT to Use */}
              <ActiveRecallCard
                id="when-not-to-use"
                question="When would you reject Micro Frontends in a system design interview?"
                shortAnswer="When the organization is small (e.g., under 3 teams or 15 engineers), the product is early-stage (frequent domain boundary shifts), or when there are no automated CI/CD and mature design systems."
                seniorExplanation={
                  <>
                    <p>Micro Frontends solve organizational scaling bottlenecks, not technical ones. If you recommend them for a small team, you are introducing massive overhead (routing coordination, shared state boundaries, dependency locks, manifest infrastructure) without any corresponding scale bottleneck to solve.</p>
                    <p className="mt-2">In system design interviews, always start with a modular monolith first. Only scale to micro frontends if multiple cross-functional teams are blocked during releases, or if different sub-apps require independent technology cycles or security gates.</p>
                  </>
                }
                tradeoffs={[
                  "Modular Monolith: Simple testing, fast initial builds, unified styles, but blocked release lines.",
                  "Micro Frontends: Deployment speed, but requires version pinning, manifest pipelines, and script orchestration."
                ]}
                keywords={["Modular Monolith", "Organizational Scaling", "Domain Volatility", "DevOps Overhead"]}
                followUp="How do you enforce code isolation in a modular monolith?"
                whatNotToSay="&ldquo;We should use micro frontends from day one for every project to keep the architecture future-proof.&rdquo;"
              >
                <InterviewPitfall
                  title="Micro Frontends for Small Teams"
                  explanation="Recommending micro frontends solely because a codebase is large will raise red flags. Interviewers expect you to align this decision with organization topology and team autonomy."
                  recommendation="Prefer a modular monolith with strict directory packaging boundaries (e.g. using monorepos with npm workspaces or Nx) unless release velocity blocks are proven."
                />
              </ActiveRecallCard>

              {/* System Diagrams */}
              <section id="diagrams" className="flex flex-col gap-4">
                <h2 className="text-base font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-cyan-400 shrink-0" />
                  Visual Architecture Flowcharts
                </h2>

                <div className="flex flex-col gap-6">
                  {microFrontendsDetail.diagrams.map((diag) => {
                    const isAscii = diagramMode[diag.id] === "ascii";
                    
                    return (
                      <div key={diag.id} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-3 relative group">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <h4 className="text-xs font-bold text-foreground font-mono">{diag.title}</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex rounded-lg border border-card-border bg-[#030712] p-0.5 text-[9px] font-mono font-bold">
                              <button
                                onClick={() => toggleDiagramMode(diag.id, "visual")}
                                className={`px-2 py-0.5 rounded transition-all ${
                                  !isAscii ? "bg-cyan-500/10 text-cyan-400" : "text-text-muted"
                                }`}
                              >
                                Visual
                              </button>
                              <button
                                onClick={() => toggleDiagramMode(diag.id, "ascii")}
                                className={`px-2 py-0.5 rounded transition-all ${
                                  isAscii ? "bg-cyan-500/10 text-cyan-400" : "text-text-muted"
                                }`}
                              >
                                ASCII
                              </button>
                            </div>

                            <button
                              onClick={() => handleCopy(diag.id, diag.content)}
                              className="p-1 rounded bg-[#030712] border border-card-border hover:border-orange-500/30 text-text-muted hover:text-orange-400 transition-colors flex items-center gap-1 text-[9px] font-mono"
                            >
                              {copiedId === diag.id ? (
                                <><Check className="h-3 w-3 text-emerald-400" /> Copied!</>
                              ) : (
                                <><Copy className="h-3 w-3" /> Copy</>
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="border border-card-border/40 rounded-lg bg-[#030712] p-4 overflow-x-auto min-h-[120px] flex items-center justify-center">
                          {isAscii ? (
                            <pre className="text-cyan-400 text-[10px] font-mono leading-relaxed whitespace-pre w-full">
                              {diag.content}
                            </pre>
                          ) : (
                            <div className="w-full">
                              {diag.id === "high-level-arch" && <VisualHighLevelArch />}
                              {diag.id === "runtime-sequence" && <VisualRuntimeSequence />}
                              {diag.id === "build-vs-runtime" && <VisualBuildVsRuntime />}
                              {diag.id === "failure-recovery" && <VisualFailureRecovery />}
                            </div>
                          )}
                        </div>

                        {diag.description && (
                          <p className="text-text-muted text-[11px] leading-relaxed">
                            {diag.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Concept Section 3: Auth */}
              <ActiveRecallCard
                id="auth"
                question="Where should authentication live in a Micro Frontend architecture?"
                shortAnswer="The shell (host app) should bootstrap authentication, manage token refresh/storage, enforce top-level route guards, and propagate a read-only user identity context to the remotes."
                seniorExplanation={
                  <>
                    <p>Centralizing authentication in the shell avoids code duplication and prevents security loopholes. When the shell boots, it checks the user&apos;s session, refreshes tokens via HTTP-only cookies (preferred for security) or OAuth client libraries, and sets up a global security provider context.</p>
                    <p className="mt-2">Remotes can read identity attributes (e.g., username, role) passed by the shell but must never handle raw login screens or direct tokens themselves. However, the remotes and the backend APIs must still enforce domain-level feature authorization (e.g., check role permissions before enabling a button or making an API request).</p>
                  </>
                }
                tradeoffs={[
                  "Shell Auth: Uniform security and easy logging, but links all remotes to the shell&apos;s auth lifecycle.",
                  "Distributed Auth (Anti-pattern): Remotes request auth independently, creating duplicate prompts and token refresh chaos."
                ]}
                keywords={["Auth Bootstrap", "Identity Propagation", "HTTP-Only Cookies", "Route Guard", "Feature Authorization"]}
                followUp="How do you pass user context from the shell to a federated React remote?"
                whatNotToSay="&ldquo;We can make every remote check the JWT token in localStorage independently.&rdquo;"
              />

              {/* Concept Section 4: Failure Isolation */}
              <ActiveRecallCard
                id="failure-isolation"
                question="How do you prevent one broken remote from crashing the full application?"
                shortAnswer="Wrap each federated remote component mount inside a React Error Boundary at the shell level, configure script loading timeout limits, and display localized fallback UI screens."
                seniorExplanation={
                  <>
                    <p>In a production system, remotes can fail due to network timeouts, script CDN outages (404s), or runtime JavaScript crashes. If left unhandled, a single JS exception will bubble up and crash the entire browser window.</p>
                    <p className="mt-2">We isolate this by wrapping dynamically imported modules inside React Error Boundaries. If the Cart remote crashes, the boundary catches the exception, logs it to a telemetry platform (including the remote name, version, and route context), and renders a placeholder, allowing the rest of the shell layout to remain responsive.</p>
                  </>
                }
                tradeoffs={[
                  "Resilience: Slot-level graceful degradation, but requires design consensus on what placeholder views look like for every key remote slot."
                ]}
                keywords={["React Error Boundary", "Graceful Degradation", "Slot Isolation", "Telemetry Logging", "CDN Fallbacks"]}
                followUp="How do you implement a dynamic script loader with timeout gates in Webpack Module Federation?"
                whatNotToSay="&ldquo;We will test our code perfectly so that remotes never fail in production.&rdquo; (Always plan for runtime failures.)"
              />

              {/* Comparison Grids */}
              <section id="communication-performance" className="flex flex-col gap-8">
                
                {/* Communication */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-cyan-400 shrink-0" />
                    Decoupled Communication Design
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {commPatternItems.map((item, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border flex flex-col gap-2 ${
                        item.verdict.includes("Anti-Pattern") ? "border-red-500/20 bg-red-500/[0.02]" : "border-card-border bg-[#050811]/45"
                      }`}>
                        <div className="flex justify-between items-center border-b border-card-border/40 pb-1.5">
                          <span className="text-xs font-bold text-foreground font-mono">{item.pattern}</span>
                          <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase ${
                            item.verdict.includes("Anti-Pattern") 
                              ? "bg-red-500/10 border-red-500/20 text-red-400" 
                              : item.verdict.includes("Recommended") 
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                                : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                          }`}>
                            {item.verdict}
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          <strong className="text-foreground">Best For: </strong>{item.bestFor}
                        </p>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          <strong className="text-foreground">Risk/Tradeoff: </strong>{item.risk}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-indigo-400 shrink-0" />
                    Performance Risk Mitigation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {perfRiskItems.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2">
                        <div className="flex justify-between items-center border-b border-card-border/40 pb-1.5">
                          <span className="text-xs font-bold text-foreground font-mono leading-normal">{item.risk}</span>
                          <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono text-cyan-400 font-bold">
                            {item.keyword}
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          <strong className="text-foreground">Cause: </strong>{item.cause}
                        </p>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          <strong className="text-foreground">Solution: </strong>{item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column - Navigation Cheatsheet */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3.5">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Architecture Outline
                </span>
                <div className="flex flex-col gap-2.5 text-[11px] text-text-muted">
                  <Link href="#definition" className="hover:text-cyan-400 transition-colors font-mono">1. What is a Micro Frontend?</Link>
                  <Link href="#when-not-to-use" className="hover:text-cyan-400 transition-colors font-mono">2. When NOT to Use</Link>
                  <Link href="#diagrams" className="hover:text-cyan-400 transition-colors font-mono">3. System Flowcharts</Link>
                  <Link href="#auth" className="hover:text-cyan-400 transition-colors font-mono">4. Auth & Identity Context</Link>
                  <Link href="#failure-isolation" className="hover:text-cyan-400 transition-colors font-mono">5. Failure Boundaries</Link>
                  <Link href="#communication-performance" className="hover:text-cyan-400 transition-colors font-mono">6. Communication & Performance</Link>
                </div>
              </div>

              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Next Steps
                </span>
                <div className="flex flex-col gap-3">
                  <Link href="/frontend-architect/micro-frontends/labs" className="p-2.5 rounded bg-[#050811] border border-card-border hover:border-orange-500/30 text-[10px] font-mono font-bold uppercase tracking-wider text-center text-orange-400 transition-colors">
                    Try Labs →
                  </Link>
                  <Link href="/frontend-architect/micro-frontends/interview-prep" className="p-2.5 rounded bg-[#050811] border border-card-border hover:border-cyan-500/30 text-[10px] font-mono font-bold uppercase tracking-wider text-center text-cyan-400 transition-colors">
                    Practice Interview Prep →
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
