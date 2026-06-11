import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import AIExternalLink from "@/components/ai/AIExternalLink";
import { aiProjects } from "@/data/ai/projects";
import { ArrowLeft, BookOpen, Compass, Code, HelpCircle, GitFork, ShieldCheck, AlertCircle, Cpu } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Return all slugs that don't have static routes to avoid next build warnings
  return Object.keys(aiProjects).map((slug) => ({
    slug,
  }));
}

export default async function AiProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = aiProjects[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/ai-engineer/foundation"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Foundation Track
            </Link>
            <AIStatusBadge status={project.status} />
          </div>

          <PageHero
            kicker={`Project ${project.id}`}
            title={project.title}
            description={`Concept: ${project.concept}`}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            
            {/* 1. Problem Statement */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <AlertCircle className="h-4 w-4" />
                Problem Statement
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {project.problemStatement}
              </p>
            </div>

            {/* 2. What it teaches & why it matters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-4 w-4" />
                  What Concept It Teaches
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {project.whatItTeaches}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Compass className="h-4 w-4" />
                  Why This Matters
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {project.whyItMatters}
                </p>
              </div>
            </div>

            {/* 3. Architecture Overview */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Cpu className="h-4 w-4" />
                System Architecture
              </h3>
              
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {project.architecture.summary}
                </p>
                <div className="border border-card-border/40 bg-[#050811] p-4 rounded-lg flex flex-wrap gap-2 items-center justify-center font-mono text-[10px]">
                  {project.architecture.nodes.map((node, i) => (
                    <span key={i} className="bg-[#030712] border border-card-border/60 px-2.5 py-1 rounded text-foreground">
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Data Flow */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Execution Data Flow
              </h3>
              <ul className="flex flex-col gap-2 pl-1 font-mono text-[10px]">
                {project.dataFlow.map((flow, index) => (
                  <li key={index} className="text-text-muted leading-relaxed">
                    {flow}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Tech Stack */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Code className="h-4 w-4" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-[#030712] border border-card-border/40 px-3 py-1 rounded text-[10px] text-text-muted font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Implementation Plan */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <ShieldCheck className="h-4 w-4" />
                Implementation Plan
              </h3>
              <ul className="flex flex-col gap-2 pl-1">
                {project.implementationPlan.map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="text-cyan-400 font-bold shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. Interview Explanation */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <HelpCircle className="h-4 w-4" />
                Technical Interview Defense
              </h3>
              <div className="flex flex-col gap-3">
                {project.interviewQuestions.map((q, idx) => (
                  <div key={idx} className="bg-[#030712] border border-card-border bg-card-bg/5 p-4 rounded-xl text-xs">
                    <span className="font-mono font-bold text-orange-500 block mb-1">Defense Concept:</span>
                    <p className="text-text-muted leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Source & Deploy (User friendly checks) */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <GitFork className="h-4 w-4" />
                Source & Deployment Links
              </h3>
              <div className="flex flex-col gap-2.5 font-mono text-[10px] text-text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-20">GitHub Repo:</span>
                  <AIExternalLink link={project.github} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20">Live Demo:</span>
                  <AIExternalLink link={project.liveDemo} />
                </div>
                {project.lab && (
                  <div className="flex items-center gap-2">
                    <span className="w-20">Interactive Lab:</span>
                    <AIExternalLink link={project.lab} />
                  </div>
                )}
              </div>
            </div>

            {/* 9. Evidence Section */}
            {project.evidence && (
              <div className="border-t border-card-border/40 pt-4 flex flex-col gap-2 bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Verification Audit</span>
                <div className="text-[10px] font-mono text-text-muted space-y-1">
                  <div>Repository Checked: {project.evidence.repoChecked ? "Yes" : "No"}</div>
                  <div>Repository Exists: {project.evidence.repoExists ? "Yes" : "No"}</div>
                  <div>Live Demo Verified: {project.evidence.demoChecked ? "Yes" : "No"}</div>
                  <div>Demo Exists: {project.evidence.demoExists ? "Yes" : "No"}</div>
                </div>
              </div>
            )}

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
