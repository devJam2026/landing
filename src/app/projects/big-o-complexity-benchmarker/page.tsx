import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import { Terminal, GitFork, Compass, ArrowRight } from "lucide-react";

export default function BigOComplexityBenchmarkerPage() {
  const techs = ["TypeScript", "React", "Tailwind CSS", "Canvas API", "GitHub"];
  const concepts = [
    "JavaScript/TypeScript execution step profiling",
    "Microsecond-level performance benchmarking API bounds",
    "Dynamic chart drawing via HTML5 Canvas coordinates",
    "Time-space scaling tradeoff analysis",
    "Asymptotic curves comparisons"
  ];

  const improvements = [
    "Add support for space complexity heap profile tests.",
    "Add multi-thread execution comparisons using Web Workers.",
    "Integrate automated complexity formula estimations from AST."
  ];

  const interviewQuote = "I architected the Big-O Complexity Benchmarker to translate abstract computational complexities into tangible microsecond steps. By running multiple algorithms side-by-side on the client, users get immediate visual evidence of why linearithmic searches outperform nested quadratic loops under scale.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Big-O Complexity Benchmarker"
            description="Profile code execution steps and benchmark performance curves in real-time. Compare sorting and search scripts visually."
            github="https://github.com/devJam2026/big-o-benchmarker"
            live="/labs/big-o-visualizer"
            status="In Progress"
            outcome="Construct benchmarking algorithms, profile runtime execution steps, and draw custom line charts using the Canvas API."
            isCyan={false}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Theoretical Math vs. Real Runtime" isCyan={false}>
              <p>
                Asymptotic complexity is typically taught via pure formulas without physical performance references. Learners find it hard to understand why O(N log N) sorting is exponentially better than O(N^2) loops at scale, or how fast O(2^N) recursive steps starve CPU resources.
              </p>
              <p className="mt-3">
                This project makes complexity visible by profiling execution times and graphing results dynamically, bridging theory and runtime.
              </p>
            </ProjectSection>

            {/* 2. Architecture */}
            <ProjectSection kicker="02. System Architecture" title="Topology Flow" isCyan={false}>
              <p className="mb-4">
                The benchmark runner operates as a localized performance loop:
              </p>
              <div className="my-4 border border-card-border/60 bg-[#030712]/80 p-5 rounded-xl flex flex-col items-center gap-2 w-full text-xs">
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>User Script Input</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 rounded w-56 justify-center">
                  <Compass className="h-3.5 w-3.5 text-orange-500" />
                  <span>JS Runtime Microsecond Profiler</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>Canvas Curve Generator</span>
                </div>
              </div>
            </ProjectSection>

            {/* 3. Data Flow */}
            <ProjectSection kicker="03. Data Flow" title="Execution Pipeline" isCyan={false}>
              <p>
                1. User loads preset scripts or custom loops.<br />
                2. Execution loop runs with varying input sizes N = [10, 50, 100, 500].<br />
                3. High-resolution time-stamps capture start and end execution offsets.<br />
                4. Data coordinates are compiled and plotted onto the Canvas line grid.
              </p>
            </ProjectSection>

            {/* 4. Algorithms Used */}
            <ProjectSection kicker="04. Algorithms Used" title="Complexity Evaluators" isCyan={false}>
              <p className="mb-4">
                The benchmark compares standard search and sort algorithms:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {concepts.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 5. Complexity Analysis */}
            <ProjectSection kicker="05. Complexity Analysis" title="Execution Tradeoffs" isCyan={false}>
              <p>
                * **Time Complexity**: Profiler calculations run in O(1) time-step recording. Graphing runs in O(N) plotting time.<br />
                * **Space Complexity**: O(N) storage to maintain performance data arrays before rendering.
              </p>
            </ProjectSection>

            {/* 6. Tech Stack */}
            <ProjectSection kicker="06. Tech Stack" title="Built With" isCyan={false}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 7. Source Links */}
            <ProjectSection kicker="07. Links" title="Source & Deploy" isCyan={false}>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <GitFork className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">GitHub Repository:</span>
                  <a
                    href="https://github.com/devJam2026/big-o-benchmarker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    big-o-benchmarker
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">Live Lab Endpoint:</span>
                  <Link
                    href="/labs/big-o-visualizer"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    /labs/big-o-visualizer
                  </Link>
                </div>
              </div>
            </ProjectSection>

            {/* 8. Interview Explanation */}
            <ProjectSection kicker="08. Interview Explanation" title="Defending the Design" isCyan={false}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={false} />
            </ProjectSection>

            {/* 9. Future Improvements */}
            <ProjectSection kicker="09. Future Improvements" title="Roadmap Extensions" isCyan={false}>
              <FutureImprovementList improvements={improvements} isCyan={false} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
