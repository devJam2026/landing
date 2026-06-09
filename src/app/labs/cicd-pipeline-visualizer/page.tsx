import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import ArchitectureDiagram from "@/components/architecture-diagram";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import InteractiveLabs from "@/components/interactive-labs";
import { Terminal, GitFork } from "lucide-react";

export default function CicdPipelineVisualizerLabPage() {
  const techs = ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Actions", "GitHub"];
  const concepts = [
    "Continuous Integration workflows (Setup, Lint, Test, Build)",
    "Runner dependency caching (npm cache matching keys)",
    "Build concurrency limits & worker queue handling",
    "Canary release steps & production rollback triggers",
    "YAML configurations structure & check stages"
  ];
  const features = [
    "Trigger Push button simulating live webhook pipeline invocations.",
    "Real-time step indicator lights flashing status configurations.",
    "Active build console piping mock compilation check diagnostics.",
    "Step rollback buttons simulating zero-downtime deployment returns.",
    "Performance load summary indicating runner speeds and cache hits."
  ];
  const improvements = [
    "Add interactive YAML config file syntax validator panels.",
    "Implement concurrent queue sliders to test workflow delays.",
    "Add secrets scanner tests highlighting encryption processes.",
    "Export build metrics analytics logs compiling historical statistics."
  ];

  const interviewQuote = "I built this visualizer to illustrate continuous integration runtimes. Triggering a push triggers checks, running tests, caching artifacts, and deploying. This helped me understand dependency optimizations, pipeline concurrency, and release rollback mechanisms.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="CI/CD Pipeline Visualizer"
            description="Deconstruct continuous integration runtimes. Trigger a mock webhook, watch dependency caches match keys, and observe automated deploys."
            github="https://github.com/devJam2026/landing"
            live="/labs/cicd-pipeline-visualizer"
            status="Active"
            outcome="Master YAML build workflows, runner caching, deployment concurrency limits, and pipeline stage orchestration."
            isCyan={true}
          />

          {/* ACTIVE TERMINAL SIMULATOR */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded font-bold text-cyan-400 uppercase">RUNNING LIVE</span>
            </div>
            <InteractiveLabs singleLab="cicd" />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Invisible CI/CD Failures" isCyan={true}>
              <p>
                CI/CD configuration files (like GitHub Actions or GitLab YAML) execute on remote runners, presenting only raw logs when steps fail. It is hard for developers to visualize dependencies caching efficiency, step concurrency blocks, or canary deploy strategies, which often results in broken builds.
              </p>
              <p className="mt-3">
                This lab maps continuous integration flow diagrams to an active console feed, helping developers debug pipelines visually and learn how stages interact.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Delivery Pipelines & Caching" isCyan={true}>
              <p className="mb-4">
                This interactive module teaches:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {concepts.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 3. What I built */}
            <ProjectSection kicker="03. What I built" title="Pipeline Automation Console" isCyan={true}>
              <p className="mb-4">
                A client-side interactive pipeline visualizer featuring:
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 4. Architecture Diagram */}
            <ProjectSection kicker="04. Architecture" title="System Topology" isCyan={true}>
              <div className="my-4">
                <ArchitectureDiagram projectType="hyperparameters" isCyan={true} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={true}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 6 & 7. Links */}
            <ProjectSection kicker="06 & 07. Links" title="Source & Deploy" isCyan={true}>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <GitFork className="h-4 w-4 text-cyan-400" />
                  <span className="text-text-muted">GitHub Repository:</span>
                  <a
                    href="https://github.com/devJam2026/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                  >
                    devJam2026/landing
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="text-text-muted">Live Lab Endpoint:</span>
                  <Link
                    href="/labs/cicd-pipeline-visualizer"
                    className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                  >
                    /labs/cicd-pipeline-visualizer
                  </Link>
                </div>
              </div>
            </ProjectSection>

            {/* 8. Interview Explanation */}
            <ProjectSection kicker="08. Interview Explanation" title="Defending the Design" isCyan={true}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={true} />
            </ProjectSection>

            {/* 9. Future Improvements */}
            <ProjectSection kicker="09. Future Improvements" title="Roadmap Extensions" isCyan={true}>
              <FutureImprovementList improvements={improvements} isCyan={true} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
