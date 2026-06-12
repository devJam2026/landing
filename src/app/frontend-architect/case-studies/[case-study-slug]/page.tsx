import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { frontendCaseStudies } from "@/data/frontend/caseStudies";
import { frontendTracks } from "@/data/frontend/tracks";
import { 
  ArrowLeft, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  BookOpen, 
  Award, 
  Code,
  Info,
  Server,
  Zap,
  Lock,
  Eye,
  Settings,
  AlertOctagon,
  HelpCircle,
  AlertTriangle,
  Flame,
  LayoutGrid,
  Activity,
  Compass,
  Terminal,
  Cpu,
  CheckCircle2
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ "case-study-slug": string }>;
}

export async function generateStaticParams() {
  return Object.keys(frontendCaseStudies).map((slug) => ({
    "case-study-slug": slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["case-study-slug"];
  const cs = frontendCaseStudies[slug];
  if (!cs) return {};

  return {
    title: `Design ${cs.title} Frontend System Design | DevJam`,
    description: `Complete frontend system design guide for ${cs.title}. Learn about frontend architecture, component boundaries, state management, caching, performance, accessibility, security, tradeoffs, and system design interview strategies.`,
    keywords: cs.seoKeywords.join(", "),
  };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (difficulty) {
    case "beginner":
      styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      break;
    case "intermediate":
      styles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      break;
    case "advanced":
      styles = "bg-violet-500/10 border-violet-500/20 text-violet-400";
      break;
    case "architect":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold capitalize ${styles}`}>
      {difficulty}
    </span>
  );
}

function InterviewRelevanceBadge({ relevance }: { relevance: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (relevance) {
    case "low":
      styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
      break;
    case "medium":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
    case "high":
      styles = "bg-orange-500/10 border-orange-500/20 text-orange-400";
      break;
    case "critical":
      styles = "bg-rose-500/10 border-rose-500/20 text-rose-400 animate-pulse";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase ${styles}`}>
      {relevance} Relevance
    </span>
  );
}

export default async function FrontendCaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["case-study-slug"];
  const cs = frontendCaseStudies[slug];

  if (!cs) {
    notFound();
  }

  // Get all case studies sorted list for previous/next navigation
  const caseStudiesArray = Object.values(frontendCaseStudies);
  const currentIndex = caseStudiesArray.findIndex((item) => item.slug === cs.slug);
  const prevCaseStudy = currentIndex > 0 ? caseStudiesArray[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudiesArray.length - 1 ? caseStudiesArray[currentIndex + 1] : null;

  // Table of Contents sections definition
  const sections = [
    { id: "problem-statement", label: "Problem Statement" },
    { id: "business-context", label: "Business Context" },
    { id: "requirements", label: "Requirements" },
    { id: "user-flows", label: "User Flows" },
    { id: "high-level-design", label: "High-Level Design" },
    { id: "component-architecture", label: "Component Architecture" },
    { id: "state-management", label: "State Management" },
    { id: "api-contracts", label: "API Contracts" },
    { id: "caching-strategy", label: "Caching Strategy" },
    { id: "technical-deep-dives", label: "System Strategies" },
    { id: "tradeoffs", label: "Design Tradeoffs" },
    { id: "interview-framework", label: "Interview Framework" },
    { id: "common-pitfalls", label: "Common Pitfalls & Mistakes" }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb links */}
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-bold text-text-muted">
            <div className="flex items-center gap-4">
              <Link href="/roadmaps/frontend-architect" className="hover:text-foreground transition-colors flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" />
                Roadmap
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/frontend-architect/real-world-frontend-case-studies" className="hover:text-foreground transition-colors">
                All Case Studies
              </Link>
            </div>
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              System Design Guide
            </span>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-5 border-b border-card-border/40 pb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <DifficultyBadge difficulty={cs.difficulty} />
              <InterviewRelevanceBadge relevance={cs.interviewRelevance} />
              <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2.5 py-0.5 text-[10px] font-mono text-text-muted">
                <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                {cs.estimatedReadTime} read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              {cs.title}
            </h1>
            
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              {cs.subtitle}
            </p>

            <div className="flex flex-col gap-3 border-t border-card-border/40 pt-4 mt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-text-muted font-bold">Architecture Focus:</span>
                <div className="flex gap-1.5 flex-wrap">
                  {cs.architectureFocus.map(tag => (
                    <span key={tag} className="bg-orange-500/10 border border-orange-500/25 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-orange-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-text-muted font-bold">Related Tracks:</span>
                <div className="flex gap-2 flex-wrap text-text-muted">
                  {cs.relatedTracks.map(trackSlug => {
                    const matchedTrack = frontendTracks.find(t => t.slug === trackSlug);
                    return matchedTrack ? (
                      <Link key={trackSlug} href={`/frontend-architect/${trackSlug}`} className="text-cyan-400 hover:underline">
                        {matchedTrack.title}
                      </Link>
                    ) : (
                      <span key={trackSlug} className="capitalize">{trackSlug.replace(/-/g, " ")}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout - Sidebar TOC and Main Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full relative">
            
            {/* Sticky Sidebar Table of Contents */}
            <aside className="lg:col-span-3 sticky top-24 hidden lg:flex flex-col gap-4 bg-[#030712]/50 p-5 rounded-xl border border-card-border/40">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/30 pb-2">
                <BookOpen className="h-4 w-4" />
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2.5 text-[11px] font-sans">
                {sections.map(section => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className="text-text-muted hover:text-cyan-400 transition-colors font-medium border-l border-card-border/40 pl-3.5 hover:border-cyan-400"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Article Body (9/12 width) */}
            <div className="lg:col-span-9 flex flex-col gap-10 w-full text-foreground text-sm font-sans leading-relaxed">
              
              {/* Problem Statement */}
              <section id="problem-statement" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <AlertOctagon className="h-5 w-5 text-orange-500" />
                  1. Problem Statement
                </h2>
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45">
                  <p className="text-text-muted text-xs leading-relaxed">
                    {cs.problemStatement}
                  </p>
                </div>
              </section>

              {/* Business Context */}
              <section id="business-context" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Info className="h-5 w-5 text-cyan-400" />
                  2. Business Context & User Friction
                </h2>
                <p className="text-text-muted text-xs leading-relaxed">
                  {cs.businessContext}
                </p>
              </section>

              {/* Requirements Matrix */}
              <section id="requirements" className="scroll-mt-24 flex flex-col gap-5">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  3. Requirements Matrix
                </h2>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Functional Requirements</h3>
                  <ul className="flex flex-col gap-2 text-text-muted text-xs pl-5 list-disc">
                    {cs.functionalRequirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Non-Functional Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Performance */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                        <Zap className="h-3.5 w-3.5 text-cyan-400" />
                        Performance
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.performance.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Scalability */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-1">
                        <Server className="h-3.5 w-3.5 text-violet-400" />
                        Scalability
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.scalability.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Accessibility */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5 text-emerald-400" />
                        Accessibility (a11y)
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.accessibility.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Security */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1">
                        <Lock className="h-3.5 w-3.5 text-rose-400" />
                        Security
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.security.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Reliability */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
                        <Settings className="h-3.5 w-3.5 text-amber-400" />
                        Reliability & Failover
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.reliability.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Observability */}
                    <div className="bg-[#050811]/30 border border-card-border/60 p-4 rounded-xl flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
                        <Activity className="h-3.5 w-3.5 text-orange-400" />
                        Observability
                      </h4>
                      <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                        {cs.nonFunctionalRequirements.observability.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Flows */}
              <section id="user-flows" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Compass className="h-5 w-5 text-cyan-400" />
                  4. Core User Flows
                </h2>
                <div className="flex flex-col gap-4">
                  {cs.userFlows.map((flow, idx) => (
                    <div key={idx} className="bg-[#050811]/20 border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-foreground">{flow.title}</h4>
                      <ol className="flex flex-col gap-2.5 text-xs text-text-muted pl-4 list-decimal">
                        {flow.steps.map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">{step}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </section>

              {/* High-Level Design */}
              <section id="high-level-design" className="scroll-mt-24 flex flex-col gap-5">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <LayoutGrid className="h-5 w-5 text-orange-500" />
                  5. High-Level Design & Layers
                </h2>
                
                <p className="text-text-muted text-xs leading-relaxed">
                  {cs.systemOverview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-2">
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Frontend Layers</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1.5">
                      {cs.architecture.frontendLayers.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl">
                    <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2">Major Components</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1.5">
                      {cs.architecture.majorComponents.map((item, idx) => (
                        <li key={idx}>
                          <span className="font-bold text-foreground">{item.name}</span>: {item.responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl">
                    <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-2">Data Flow Pipelines</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1.5">
                      {cs.architecture.dataFlow.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Component Architecture */}
              <section id="component-architecture" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Code className="h-5 w-5 text-cyan-400" />
                  6. Component Architecture & State Boundaries
                </h2>
                
                <div className="overflow-x-auto w-full border border-card-border rounded-xl">
                  <table className="min-w-full divide-y divide-card-border bg-[#030712]/35 text-[11px]">
                    <thead className="bg-[#050811]">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">Component</th>
                        <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">Responsibility</th>
                        <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">State Owned</th>
                        <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">Dependencies</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-card-border text-text-muted">
                      {cs.componentArchitecture.map((item, idx) => (
                        <tr key={idx} className="hover:bg-[#050811]/20 transition-colors">
                          <td className="px-4 py-3 font-mono font-bold text-foreground">{item.component}</td>
                          <td className="px-4 py-3">{item.responsibility}</td>
                          <td className="px-4 py-3 font-mono text-[10px]">{item.stateOwned || "N/A"}</td>
                          <td className="px-4 py-3 font-mono text-[10px]">{item.dependencies?.join(", ") || "None"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* State Management */}
              <section id="state-management" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <LayoutGrid className="h-5 w-5 text-orange-500" />
                  7. State Management
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/30 pb-1">Local UI State</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.stateManagement.localState.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest border-b border-card-border/30 pb-1">Server Query Cache State</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.stateManagement.serverState.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest border-b border-card-border/30 pb-1">Global/Shared State</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.stateManagement.globalState.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/30 border border-card-border p-4 rounded-xl flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest border-b border-card-border/30 pb-1">Real-Time & Sync State</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.stateManagement.realtimeState && cs.stateManagement.realtimeState.length > 0 ? (
                        cs.stateManagement.realtimeState.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))
                      ) : (
                        <li className="italic">No high-frequency real-time push state required.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </section>

              {/* API Contracts */}
              <section id="api-contracts" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  8. API Contracts Design
                </h2>
                
                <div className="flex flex-col gap-4">
                  {cs.apiContracts.map((api, idx) => (
                    <div key={idx} className="border border-card-border bg-[#050811]/30 p-5 rounded-xl flex flex-col gap-3">
                      <div className="flex justify-between items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                            api.method === "GET" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                            api.method === "POST" ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400" :
                            "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                          }`}>
                            {api.method}
                          </span>
                          <span className="font-mono text-xs font-bold text-foreground">{api.endpoint}</span>
                        </div>
                        <span className="text-[10px] font-mono text-text-muted font-bold">{api.name}</span>
                      </div>
                      
                      <p className="text-[11px] text-text-muted">
                        <span className="font-bold text-foreground">Purpose:</span> {api.purpose}
                      </p>

                      {api.sampleResponse && (
                        <div className="flex flex-col gap-1.5 mt-1">
                          <span className="text-[9px] font-mono font-bold text-text-muted">Sample Response:</span>
                          <pre className="bg-[#030712] p-3 rounded border border-card-border/60 font-mono text-[9px] text-cyan-400 overflow-x-auto">
                            {JSON.stringify(JSON.parse(api.sampleResponse), null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Caching Strategy */}
              <section id="caching-strategy" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Cpu className="h-5 w-5 text-orange-500" />
                  9. Caching Strategy
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="bg-[#050811]/20 border border-card-border p-4 rounded-xl flex flex-col gap-1.5">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Browser/HTTP Cache</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.cachingStrategy.browserCache.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/20 border border-card-border p-4 rounded-xl flex flex-col gap-1.5">
                    <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Edge CDN Caching</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.cachingStrategy.cdnCache.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/20 border border-card-border p-4 rounded-xl flex flex-col gap-1.5">
                    <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Application Cache</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.cachingStrategy.applicationCache.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#050811]/20 border border-card-border p-4 rounded-xl flex flex-col gap-1.5">
                    <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Invalidation Policies</h4>
                    <ul className="list-disc pl-4 text-[10px] text-text-muted flex flex-col gap-1">
                      {cs.cachingStrategy.invalidationStrategy.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Deep Dives (Strategies Checklist) */}
              <section id="technical-deep-dives" className="scroll-mt-24 flex flex-col gap-6">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Settings className="h-5 w-5 text-cyan-400" />
                  10. System Strategies Checklist
                </h2>

                <div className="flex flex-col gap-5">
                  {/* Performance */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="h-4 w-4" />
                      Performance Strategy & Budgets
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.performanceStrategy.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Accessibility */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      Inclusive Accessibility Design
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.accessibilityStrategy.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="h-4 w-4" />
                      Security Safeguards & Risks
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.securityStrategy.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Observability */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Activity className="h-4 w-4" />
                      Telemetry & Production Observability
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.observabilityPlan.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Failure Handling */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      Graceful Failure & Resilience
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.failureHandling.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Deployment Model */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Server className="h-4 w-4" />
                      Deployment, Rollout & CDN topologies
                    </h3>
                    <ul className="list-disc pl-5 text-xs text-text-muted flex flex-col gap-1.5">
                      {cs.deploymentModel.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Design Tradeoffs */}
              <section id="tradeoffs" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  11. Architectural Decisions & Tradeoffs
                </h2>
                
                <div className="grid grid-cols-1 gap-5 w-full">
                  {cs.tradeoffs.map((item, idx) => (
                    <div key={idx} className="bg-[#050811]/30 border border-card-border p-5 rounded-xl flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        Decision: {item.decision}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-text-muted pt-2 border-t border-card-border/35">
                        <div>
                          <span className="font-bold text-emerald-400">Benefit:</span>
                          <p className="mt-1 text-xs">{item.benefit}</p>
                        </div>
                        <div>
                          <span className="font-bold text-rose-400">Drawback:</span>
                          <p className="mt-1 text-xs">{item.drawback}</p>
                        </div>
                      </div>
                      <div className="text-[10px] text-text-muted mt-1 leading-relaxed bg-[#030712]/50 p-2.5 rounded border border-card-border/60">
                        <span className="font-bold text-foreground">When To Use: </span>
                        {item.whenToUse}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interview Answer Framework */}
              <section id="interview-framework" className="scroll-mt-24 flex flex-col gap-4 bg-[#050811]/25 border border-cyan-500/15 p-6 rounded-2xl">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <HelpCircle className="h-5 w-5 text-cyan-400" />
                  12. Interview Answer Framework
                </h2>
                <p className="text-xs text-text-muted italic leading-relaxed">
                  How to structure your defense of this architecture during a 45-minute technical system design session:
                </p>

                <div className="flex flex-col gap-4 mt-2 text-xs">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-cyan-400 font-mono">1. Opening Pitch</span>
                    <p className="text-text-muted leading-relaxed pl-3 border-l border-card-border/60">{cs.interviewAnswerFramework.opening}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-cyan-400 font-mono">2. Requirement Clarification Queries</span>
                    <ul className="list-disc pl-8 text-text-muted flex flex-col gap-1">
                      {cs.interviewAnswerFramework.requirementClarification.map((query, i) => (
                        <li key={i}>{query}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-cyan-400 font-mono">3. Core High-Level Architecture Block</span>
                    <p className="text-text-muted leading-relaxed pl-3 border-l border-card-border/60">{cs.interviewAnswerFramework.highLevelDesign}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-cyan-400 font-mono">4. Strategic Deep Dive Areas</span>
                    <ul className="list-disc pl-8 text-text-muted flex flex-col gap-1">
                      {cs.interviewAnswerFramework.deepDiveAreas.map((area, i) => (
                        <li key={i}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-cyan-400 font-mono">5. Summary & Defensive Tradeoffs</span>
                    <p className="text-text-muted leading-relaxed pl-3 border-l border-card-border/60">{cs.interviewAnswerFramework.finalSummary}</p>
                  </div>
                </div>
              </section>

              {/* Common Pitfalls & Mistakes */}
              <section id="common-pitfalls" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <AlertOctagon className="h-5 w-5 text-rose-400" />
                  13. Common Pitfalls & Extension Questions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-xs">
                  {/* Common Mistakes */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Flame className="h-4 w-4" />
                      Candidate Mistakes to Avoid
                    </h4>
                    <ul className="list-disc pl-4 text-text-muted flex flex-col gap-2">
                      {cs.commonMistakes.map((mistake, i) => (
                        <li key={i} className="leading-relaxed">{mistake}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Extension Questions */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                      <HelpCircle className="h-4 w-4" />
                      Interviewer Follow-ups / Extensions
                    </h4>
                    <ul className="list-disc pl-4 text-text-muted flex flex-col gap-2">
                      {cs.extensionQuestions.map((q, i) => (
                        <li key={i} className="leading-relaxed">{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Bottom Pagination & Navigation */}
              <div className="border-t border-card-border/40 pt-8 mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 text-xs font-mono font-bold">
                {prevCaseStudy ? (
                  <Link 
                    href={`/frontend-architect/case-studies/${prevCaseStudy.slug}`}
                    className="flex items-center gap-2 p-3.5 rounded-xl border border-card-border/80 hover:border-cyan-400/30 bg-[#050811]/20 hover:bg-[#050811]/45 transition-colors sm:w-48 text-left"
                  >
                    <ChevronLeft className="h-4 w-4 text-cyan-400 shrink-0" />
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[9px] text-text-muted uppercase tracking-wider">Previous Article</span>
                      <span className="text-foreground truncate text-[10px]">{prevCaseStudy.title.replace("Design ", "")}</span>
                    </div>
                  </Link>
                ) : (
                  <div className="sm:w-48 opacity-0 hidden sm:block pointer-events-none" />
                )}

                <Link 
                  href="/frontend-architect/real-world-frontend-case-studies"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-card-border hover:border-orange-400/30 text-orange-400 bg-[#050811]/30 hover:bg-[#050811]/50 transition-colors uppercase tracking-wider text-[10px]"
                >
                  <LayoutGrid className="h-4 w-4 text-orange-500" />
                  All Case Studies
                </Link>

                {nextCaseStudy ? (
                  <Link 
                    href={`/frontend-architect/case-studies/${nextCaseStudy.slug}`}
                    className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-card-border/80 hover:border-cyan-400/30 bg-[#050811]/20 hover:bg-[#050811]/45 transition-colors sm:w-48 text-right"
                  >
                    <div className="flex flex-col gap-0.5 min-w-0 text-right">
                      <span className="text-[9px] text-text-muted uppercase tracking-wider">Next Article</span>
                      <span className="text-foreground truncate text-[10px]">{nextCaseStudy.title.replace("Design ", "")}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-cyan-400 shrink-0" />
                  </Link>
                ) : (
                  <div className="sm:w-48 opacity-0 hidden sm:block pointer-events-none" />
                )}
              </div>

            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
