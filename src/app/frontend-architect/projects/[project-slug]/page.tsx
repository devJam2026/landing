import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { frontendProjects, FrontendCapstoneProject } from "@/data/frontend/projects";
import { frontendTracks } from "@/data/frontend/tracks";
import { GithubIcon } from "@/components/brand-icons";
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
  HelpCircle,
  AlertTriangle,
  Flame,
  LayoutGrid,
  Activity,
  Compass,
  Terminal,
  Cpu,
  CheckCircle2,
  Database,
  Sparkles,
  ExternalLink,
  FileText
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ "project-slug": string }>;
}

export async function generateStaticParams() {
  return Object.values(frontendProjects)
    .filter((p) => p.trackSlug === "frontend-architect-capstones")
    .map((p) => ({
      "project-slug": p.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["project-slug"];
  const project = frontendProjects[slug] as FrontendCapstoneProject;
  if (!project || project.trackSlug !== "frontend-architect-capstones") return {};

  return {
    title: `${project.title} Requirements & Architecture | DevJam`,
    description: `${project.title} Frontend System Design & Architectural Blueprint. Learn about frontend architecture, project requirements, system design, non-functional requirements, implementation roadmap, and interview explanations.`,
    keywords: project.seoKeywords?.join(", ") || "",
  };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (difficulty) {
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

function ProjectStatusBadge({ status }: { status: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (status) {
    case "coming-soon":
      styles = "bg-orange-500/10 border-orange-500/20 text-orange-400";
      break;
    case "planned":
      styles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      break;
    case "in-progress":
      styles = "bg-violet-500/10 border-violet-500/20 text-violet-400";
      break;
    case "available":
      styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase ${styles}`}>
      Status: {status === "coming-soon" ? "Coming Soon" : status}
    </span>
  );
}

function ProjectPhaseBadge({ phase }: { phase: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (phase) {
    case "blueprint-ready":
      styles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      break;
    case "design-in-progress":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
    case "implementation-planned":
      styles = "bg-orange-500/10 border-orange-500/20 text-orange-400";
      break;
    case "building":
      styles = "bg-violet-500/10 border-violet-500/20 text-violet-400";
      break;
    case "released":
      styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase ${styles}`}>
      Phase: {phase.replace(/-/g, " ")}
    </span>
  );
}

export default async function FrontendProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["project-slug"];
  const project = frontendProjects[slug] as FrontendCapstoneProject;

  if (!project || project.trackSlug !== "frontend-architect-capstones") {
    notFound();
  }

  // Get all capstones sorted list for previous/next navigation
  const capstonesArray = Object.values(frontendProjects).filter(
    (p) => p.trackSlug === "frontend-architect-capstones"
  ) as FrontendCapstoneProject[];
  const currentIndex = capstonesArray.findIndex((item) => item.slug === project.slug);
  const prevProject = currentIndex > 0 ? capstonesArray[currentIndex - 1] : null;
  const nextProject = currentIndex < capstonesArray.length - 1 ? capstonesArray[currentIndex + 1] : null;

  // Table of Contents sections definition
  const sections = [
    { id: "notice-banner", label: "Blueprint Notice" },
    { id: "problem-statement", label: "Problem Statement" },
    { id: "business-context", label: "Business Context" },
    { id: "learning-objectives", label: "Learning Objectives" },
    { id: "functional-requirements", label: "Functional Requirements" },
    { id: "non-functional-requirements", label: "Non-Functional Specs" },
    { id: "core-modules", label: "Core Modules" },
    { id: "user-flows", label: "User Flows" },
    { id: "architecture-plan", label: "Architecture Plan" },
    { id: "component-plan", label: "Component Plan" },
    ...(project.apiContracts && project.apiContracts.length > 0 ? [{ id: "api-contracts", label: "API Contracts" }] : []),
    ...(project.dataModel && project.dataModel.length > 0 ? [{ id: "data-model", label: "Data Model" }] : []),
    { id: "milestones", label: "Milestones" },
    { id: "implementation-roadmap", label: "Implementation Roadmap" },
    { id: "interview-explanation", label: "Interview Explanation" },
    { id: "future-enhancements", label: "Future Enhancements" },
    { id: "project-links", label: "Future Links" }
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
                Frontend Roadmap
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/roadmaps/frontend-architect#group-g" className="hover:text-foreground transition-colors">
                Capstone Projects
              </Link>
            </div>
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Project Blueprint Document
            </span>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-5 border-b border-card-border/40 pb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <ProjectStatusBadge status={project.status} />
              <ProjectPhaseBadge phase={project.projectPhase} />
              <DifficultyBadge difficulty={project.difficulty} />
              <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2.5 py-0.5 text-[10px] font-mono text-text-muted">
                <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                Est: {project.estimatedBuildTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              {project.title}
            </h1>
            
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              {project.subtitle}
            </p>

            {project.buildStatusReason && (
              <div className="bg-orange-500/5 border border-orange-500/25 p-3 rounded-lg text-xs max-w-4xl text-orange-400 font-mono">
                <span className="font-extrabold uppercase text-[9px] bg-orange-500/15 px-1.5 py-0.5 rounded mr-2 border border-orange-500/30">Build status note</span>
                {project.buildStatusReason}
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-card-border/40 pt-4 mt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-text-muted font-bold">Architecture Focus:</span>
                <div className="flex gap-1.5 flex-wrap">
                  {project.architectureFocus.map(tag => (
                    <span key={tag} className="bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-text-muted font-bold">Tech Stack:</span>
                <div className="flex gap-1.5 flex-wrap">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-[#050811] border border-card-border px-2 py-0.5 rounded text-[10px] font-mono text-text-muted">
                      {tech}
                    </span>
                  ))}
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
              
              {/* Notice Banner */}
              <section id="notice-banner" className="scroll-mt-24 p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex gap-4">
                <Info className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Blueprint Information Only</h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    This project&apos;s code implementation will come later in the curriculum. However, the complete <strong>architecture blueprint</strong>, <strong>functional specifications</strong>, <strong>core modules</strong>, <strong>milestones</strong>, and <strong>interview design explanations</strong> are fully active and available below to aid in your frontend system design study.
                  </p>
                </div>
              </section>

              {/* Problem Statement */}
              <section id="problem-statement" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  1. Problem Statement
                </h2>
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45">
                  <p className="text-text-muted text-xs leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              </section>

              {/* Business Context */}
              <section id="business-context" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Info className="h-5 w-5 text-cyan-400" />
                  2. Business Context & Friction
                </h2>
                <p className="text-text-muted text-xs leading-relaxed">
                  {project.businessContext}
                </p>
                <div className="flex items-start gap-2 text-xs text-text-muted mt-1">
                  <span className="font-extrabold text-cyan-400">Target Users:</span>
                  <span>{project.targetUsers.join(", ")}</span>
                </div>
              </section>

              {/* Learning Objectives */}
              <section id="learning-objectives" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-5 w-5 text-violet-400" />
                  3. Learning Objectives
                </h2>
                <ul className="list-none flex flex-col gap-2.5">
                  {project.learningObjectives.map((objective, idx) => (
                    <li key={idx} className="flex gap-2 text-text-muted text-xs items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Functional Requirements */}
              <section id="functional-requirements" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  4. Functional Requirements
                </h2>
                <div className="flex flex-col gap-3">
                  {project.functionalRequirements.map((req, idx) => {
                    let badgeStyles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
                    if (req.priority === "must-have") {
                      badgeStyles = "bg-rose-500/10 border-rose-500/20 text-rose-400";
                    } else if (req.priority === "should-have") {
                      badgeStyles = "bg-orange-500/10 border-orange-500/20 text-orange-400";
                    } else if (req.priority === "nice-to-have") {
                      badgeStyles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
                    }

                    return (
                      <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-2">
                        <div className="flex justify-between items-center gap-2 flex-wrap">
                          <h4 className="text-xs font-bold text-foreground">{req.title}</h4>
                          <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${badgeStyles}`}>
                            {req.priority}
                          </span>
                        </div>
                        <p className="text-text-muted text-[11px] leading-relaxed">
                          {req.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Non-Functional Requirements */}
              <section id="non-functional-requirements" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  5. Non-Functional Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Performance */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Zap className="h-4 w-4 text-orange-500" />
                      Performance
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.performance.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scalability */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Server className="h-4 w-4 text-cyan-400" />
                      Scalability
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.scalability.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accessibility */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Eye className="h-4 w-4 text-violet-400" />
                      Accessibility (A11y)
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.accessibility.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Lock className="h-4 w-4 text-rose-400" />
                      Security
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.security.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-rose-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reliability */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Settings className="h-4 w-4 text-amber-500" />
                      Reliability & Fault Tolerance
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.reliability.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Observability */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-card-border/30 pb-1.5">
                      <Activity className="h-4 w-4 text-emerald-400" />
                      Observability & Telemetry
                    </h4>
                    <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                      {project.nonFunctionalRequirements.observability.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 items-start">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Core Modules */}
              <section id="core-modules" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <LayoutGrid className="h-5 w-5 text-indigo-400" />
                  6. Core Modules Breakdown
                </h2>
                <div className="flex flex-col gap-4">
                  {project.coreModules.map((mod, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xs font-bold text-indigo-400">{mod.name}</h4>
                        <p className="text-[11px] text-text-muted leading-relaxed">{mod.description}</p>
                      </div>
                      <div className="border-t border-card-border/30 pt-2 flex flex-col gap-1.5">
                        <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Responsibilities:</span>
                        <ul className="list-none flex flex-col gap-1 text-[11px] text-text-muted pl-1">
                          {mod.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex gap-1.5 items-start">
                              <span className="text-indigo-400">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* User Flows */}
              <section id="user-flows" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Compass className="h-5 w-5 text-rose-400" />
                  7. Key User Flows
                </h2>
                <div className="flex flex-col gap-4">
                  {project.userFlows.map((flow, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                      <h4 className="text-xs font-bold text-foreground">{flow.title}</h4>
                      <ol className="list-decimal list-inside pl-1 text-text-muted text-[11px] flex flex-col gap-1.5">
                        {flow.steps.map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </section>

              {/* Architecture Plan */}
              <section id="architecture-plan" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Cpu className="h-5 w-5 text-sky-400" />
                  8. Architectural Blueprint
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(project.architecturePlan).map(([key, list]) => {
                    const formattedTitle = key.replace(/([A-Z])/g, " $1").trim();
                    return (
                      <div key={key} className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-2">
                        <h4 className="text-xs font-bold text-sky-400 capitalize">{formattedTitle}</h4>
                        <ul className="list-none flex flex-col gap-1 text-[11px] text-text-muted pl-1">
                          {list.map((item, idx) => (
                            <li key={idx} className="flex gap-1.5 items-start">
                              <span className="text-sky-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Component Plan */}
              <section id="component-plan" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  9. Component Execution Plan
                </h2>
                <div className="overflow-x-auto border border-card-border rounded-xl bg-[#030712]/50">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-card-border/60 bg-[#050811]/80 text-text-muted font-mono uppercase tracking-wider text-[9px]">
                        <th className="p-3">Component</th>
                        <th className="p-3">Responsibility</th>
                        <th className="p-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-card-border/30 text-text-muted">
                      {project.componentPlan.map((comp, idx) => (
                        <tr key={idx} className="hover:bg-slate-500/5 transition-colors">
                          <td className="p-3 font-mono font-bold text-foreground">{comp.component}</td>
                          <td className="p-3">{comp.responsibility}</td>
                          <td className="p-3 italic text-[11px]">{comp.notes || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* API Contracts */}
              {project.apiContracts && project.apiContracts.length > 0 && (
                <section id="api-contracts" className="scroll-mt-24 flex flex-col gap-3">
                  <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                    <Code className="h-5 w-5 text-amber-400" />
                    10. API Specifications
                  </h2>
                  <div className="flex flex-col gap-5">
                    {project.apiContracts.map((api, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712]/60 flex flex-col gap-3">
                        <div className="flex justify-between items-center gap-2 flex-wrap border-b border-card-border/30 pb-2">
                          <div className="flex items-center gap-2 font-mono">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              api.method === "GET" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                              api.method === "POST" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                            }`}>
                              {api.method}
                            </span>
                            <span className="text-xs text-foreground font-bold">{api.endpoint}</span>
                          </div>
                          <span className="text-[10px] text-text-muted italic">{api.name}</span>
                        </div>
                        <p className="text-text-muted text-xs leading-relaxed">{api.purpose}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {api.requestExample && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Request Payload</span>
                              <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-cyan-400 leading-normal">
                                {api.requestExample}
                              </pre>
                            </div>
                          )}
                          {api.responseExample && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Response Payload</span>
                              <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-emerald-400 leading-normal">
                                {api.responseExample}
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Data Model */}
              {project.dataModel && project.dataModel.length > 0 && (
                <section id="data-model" className="scroll-mt-24 flex flex-col gap-3">
                  <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                    <Database className="h-5 w-5 text-teal-400" />
                    11. Logical Data Schemas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.dataModel.map((model, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-2.5">
                        <div className="border-b border-card-border/30 pb-1.5 flex flex-col gap-0.5">
                          <h4 className="text-xs font-bold text-teal-400 font-mono">{model.entity}</h4>
                          <p className="text-[10px] text-text-muted italic">{model.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {model.fields.map(field => (
                            <span key={field} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 font-mono text-[9px] text-text-muted">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Milestones */}
              <section id="milestones" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  12. Curriculum Milestones
                </h2>
                <div className="flex flex-col gap-4">
                  {project.milestones.map((milestone, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2">
                      <div className="flex justify-between items-center gap-2 flex-wrap">
                        <span className="text-[9px] font-mono font-bold text-yellow-500 uppercase tracking-widest">{milestone.phase}</span>
                        <h4 className="text-xs font-bold text-foreground">{milestone.title}</h4>
                      </div>
                      <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted pl-1 pt-1">
                        {milestone.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex gap-1.5 items-start">
                            <span className="text-yellow-550">•</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Roadmap */}
              <section id="implementation-roadmap" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Activity className="h-5 w-5 text-emerald-400" />
                  13. Technical Execution Roadmap
                </h2>
                <div className="relative border-l border-card-border pl-6 ml-3 flex flex-col gap-6 my-2">
                  {project.implementationRoadmap.map((step) => (
                    <div key={step.step} className="relative flex flex-col gap-1 bg-[#030712]/50 p-4 rounded-xl border border-card-border/40">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[31px] top-4 h-4 w-4 rounded-full border-2 border-card-border bg-[#030712] flex items-center justify-center text-[8px] font-mono text-cyan-400 font-extrabold shadow-lg">
                        {step.step}
                      </span>
                      <h4 className="text-xs font-bold text-foreground">{step.title}</h4>
                      <p className="text-text-muted text-[11px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interview Explanation */}
              <section id="interview-explanation" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  14. Systems Interview Deep Dive
                </h2>
                
                {/* Elevator Pitch */}
                <div className="p-4 rounded-xl border border-card-border bg-orange-500/5 flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-orange-500 shrink-0" />
                    Elevator Pitch
                  </h4>
                  <p className="text-[11px] text-text-muted italic leading-relaxed">
                    &ldquo;{project.interviewExplanation.elevatorPitch}&rdquo;
                  </p>
                </div>

                {/* Architecture Summary */}
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-foreground">Architecture Summary</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {project.interviewExplanation.architectureSummary}
                  </p>
                </div>

                {/* Tradeoffs */}
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                  <h4 className="text-xs font-bold text-foreground">Architectural Tradeoffs</h4>
                  <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                    {project.interviewExplanation.tradeoffs.map((tradeoff, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-orange-500 mt-0.5">▲</span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Possible Interview Questions */}
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                  <h4 className="text-xs font-bold text-foreground">Possible Follow-up Questions</h4>
                  <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                    {project.interviewExplanation.possibleInterviewQuestions.map((q, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-cyan-400 mt-0.5">?</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Future Enhancements */}
              <section id="future-enhancements" className="scroll-mt-24 flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  15. Future Enhancements
                </h2>
                <ul className="list-none flex flex-col gap-2">
                  {project.futureEnhancements.map((enh, idx) => (
                    <li key={idx} className="flex gap-2 text-text-muted text-xs items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0 mt-2" />
                      <span>{enh}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Future Links */}
              <section id="project-links" className="scroll-mt-24 flex flex-col gap-4">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                  16. Future Integration Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#030712] border border-card-border/40 rounded-xl p-5 flex flex-col gap-3 select-none opacity-50 cursor-not-allowed">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-[#050811] rounded border border-card-border/50">
                        <GithubIcon className="h-4 w-4 text-text-muted" />
                      </div>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">GitHub Repository</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed mt-1">Access to source code files is planned for later.</p>
                    </div>
                  </div>

                  <div className="bg-[#030712] border border-card-border/40 rounded-xl p-5 flex flex-col gap-3 select-none opacity-50 cursor-not-allowed">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-[#050811] rounded border border-card-border/50">
                        <ExternalLink className="h-4 w-4 text-text-muted" />
                      </div>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Live Demo Application</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed mt-1">Interactive live deployment sandbox environment.</p>
                    </div>
                  </div>

                  <div className="bg-[#030712] border border-card-border/40 rounded-xl p-5 flex flex-col gap-3 select-none opacity-50 cursor-not-allowed">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-[#050811] rounded border border-card-border/50">
                        <FileText className="h-4 w-4 text-text-muted" />
                      </div>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Project Documentation</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed mt-1">Detailed setup, guidelines and design patterns docs.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Tracks */}
              {project.relatedTracks && project.relatedTracks.length > 0 && (
                <div className="border-t border-card-border/40 pt-6 mt-4">
                  <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3">Related Curriculum Tracks:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.relatedTracks.map(trackSlug => {
                      const matchedTrack = frontendTracks.find(t => t.slug === trackSlug);
                      return matchedTrack ? (
                        <Link 
                          key={trackSlug} 
                          href={`/frontend-architect/${trackSlug}`} 
                          className="bg-[#050811] px-2.5 py-1 rounded border border-card-border/60 font-mono text-[10px] text-cyan-400 hover:border-cyan-500/30 transition-all"
                        >
                          {matchedTrack.title}
                        </Link>
                      ) : (
                        <span key={trackSlug} className="bg-[#050811] px-2.5 py-1 rounded border border-card-border/60 font-mono text-[10px] text-text-muted capitalize">
                          {trackSlug.replace(/-/g, " ")}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Pagination controls */}
              <div className="border-t border-card-border/40 pt-6 flex justify-between items-center gap-4 flex-wrap mt-4">
                {prevProject ? (
                  <Link 
                    href={`/frontend-architect/projects/${prevProject.slug}`} 
                    className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-cyan-400 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Prev: {prevProject.title}</span>
                  </Link>
                ) : (
                  <span className="text-xs text-text-muted/40 font-bold select-none cursor-not-allowed">First Project</span>
                )}

                <Link 
                  href="/roadmaps/frontend-architect#group-g" 
                  className="bg-card-border/20 border border-card-border/50 text-text-muted hover:text-foreground font-mono font-bold text-[10px] uppercase px-4 py-2 rounded-lg transition-all"
                >
                  All Capstones
                </Link>

                {nextProject ? (
                  <Link 
                    href={`/frontend-architect/projects/${nextProject.slug}`} 
                    className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-cyan-400 transition-colors"
                  >
                    <span>Next: {nextProject.title}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="text-xs text-text-muted/40 font-bold select-none cursor-not-allowed">Last Project</span>
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
