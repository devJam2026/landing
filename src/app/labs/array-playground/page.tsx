import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import ArrayPlayground from "@/components/labs/ArrayPlayground";
import { Terminal, GitFork, Compass, ArrowRight } from "lucide-react";

export default function ArrayPlaygroundPage() {
  const techs = ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub"];
  const concepts = [
    "Linear array memory layouts and structures",
    "Time complexity of insertions vs. deletions (element shifting)",
    "Two Pointers technique for matching sub-sums",
    "Sliding Window logic for contiguous range aggregates",
    "Pointer boundary conditions verification"
  ];
  const features = [
    "Array elements grid displaying values, indices, and active pointer tags.",
    "Interactive inputs to Insert (value/index) and Delete elements.",
    "Array traversal step-by-step animation highlighting visited cells.",
    "Sliding Window window-bounding box animations.",
    "Two Pointer inward converging stepping animation."
  ];
  const improvements = [
    "Integrate dynamic array resizing (Capacity vs. Size limits).",
    "Add support for prefix sum visual overlays.",
    "Include sorting animations (Bubble, Selection, QuickSort)."
  ];

  const interviewQuote = "I implemented the Array Playground to visualize element shifting and pointer-based scans. Seeing pointers move inward in two-pointer mode or windows shift in sliding window mode helps developers build physical intuition for why boundary constraints can be optimized to linear O(N) execution steps.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Array Playground"
            description="Visualize array manipulations, shifts, sliding windows, and two pointer traversals step-by-step with active highlighting."
            github="https://github.com/devJam2026/landing"
            live="/labs/array-playground"
            status="Active"
            outcome="Deconstruct how index manipulation, pointer shifts, and sliding windows operate on linear arrays."
            isCyan={true}
          />

          {/* ACTIVE LAB TERMINAL */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-cyan-400/10 border border-cyan-500/20 px-2 py-0.5 rounded font-bold text-cyan-400 uppercase">RUNNING LIVE</span>
            </div>
            <ArrayPlayground />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Linear Complexity Shifting" isCyan={true}>
              <p>
                Developers often memorize how array operations behave but struggle to visualize why inserting or deleting from arbitrary indexes requires $O(N)$ shifts, or how left and right index bounds move in sliding window algorithms.
              </p>
              <p className="mt-3">
                This playground provides a visual trace of index values and moving bounds, revealing array mechanisms instantly.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Pointers and Contiguous Windows" isCyan={true}>
              <p className="mb-4">
                This sandbox teaches critical array concepts:
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
            <ProjectSection kicker="03. What I built" title="Index-highlighting Sandbox Workspace" isCyan={true}>
              <p className="mb-4">
                An interactive array visualizer featuring:
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
            <ProjectSection kicker="04. Architecture" title="Array State Control" isCyan={true}>
              <div className="my-4 border border-card-border/60 bg-[#030712]/80 p-5 rounded-xl flex flex-col items-center gap-2 w-full text-xs">
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>Array values state</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 rounded w-56 justify-center">
                  <Compass className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Index highlight state hooks</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>Execution logs terminal</span>
                </div>
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
                    landing
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="text-text-muted">Live Lab Endpoint:</span>
                  <Link
                    href="/labs/array-playground"
                    className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                  >
                    /labs/array-playground
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
