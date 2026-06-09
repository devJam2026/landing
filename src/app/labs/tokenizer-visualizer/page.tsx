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

export default function TokenizerVisualizerLabPage() {
  const techs = ["TypeScript", "React 19", "Tailwind CSS", "Framer Motion", "GitHub"];
  const concepts = [
    "Byte Pair Encoding (BPE) lookup tables",
    "Subword splitting boundaries & offsets mapping",
    "Multilingual token expansion metrics",
    "Character-to-token integer mapping indices",
    "Token boundaries highlighting matching"
  ];
  const features = [
    "Interactive text input visualizer with dynamic character highlight bounding.",
    "Real-time token count evaluation showing vocabulary consumption metrics.",
    "BPE split style representations demonstrating syllable divisions.",
    "Interactive matrix index grids mapping tokens to their integer IDs.",
    "Diagnostic console visualizing coverage anomalies in text blocks."
  ];
  const improvements = [
    "Add exact OpenAI official tiktoken dictionary calculations.",
    "Add Claude/Gemini-style tokenizers approximation matrices.",
    "Integrate API cost calculators for major model providers.",
    "Implement automated prompt compression optimization warnings."
  ];

  const interviewQuote = "I built an interactive tokenizer visualizer to help developers see how strings are mapped to dictionary keys before entering LLMs. The tool splits inputs on BPE boundaries, highlights characters with color grids, and displays matching token IDs. This helped me understand cost mechanics, prompt limits, and multilingual inflation firsthand.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Tokenizer Visualizer"
            description="Expose BPE subword splitting rules. Type any string to watch it convert to token IDs, character offset coordinate spans, and model ingest formats."
            github="https://github.com/devJam2026/tokenizer-visualizer-studio"
            live="/labs/tokenizer-visualizer"
            status="Active"
            outcome="Deconstruct how raw characters map to vocabulary arrays and analyze token boundaries visually."
            isCyan={false}
          />

          {/* ACTIVE TERMINAL SIMULATOR */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-[#f97316]/10 border border-[#f97316]/20 px-2 py-0.5 rounded font-bold text-orange-500 uppercase">RUNNING LIVE</span>
            </div>
            <InteractiveLabs singleLab="tokenizer" />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Invisible BPE Ingest Limits" isCyan={false}>
              <p>
                Developers write prompts for models (like GPT or Claude) without visual feedback on how their input text is split. This creates confusion when characters expand token bounds, when multilingual text inflates costs, or when characters map to multiple vocabulary IDs.
              </p>
              <p className="mt-3">
                This lab solves this problem by exposing subword BPE tokenization interactively, letting users see exactly how boundaries align.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Subword Splitting Foundations" isCyan={false}>
              <p className="mb-4">
                This interactive module teaches:
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

            {/* 3. What I built */}
            <ProjectSection kicker="03. What I built" title="BPE Matrix Mapping Workspace" isCyan={false}>
              <p className="mb-4">
                A client-side interactive visualizer tool featuring:
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-orange-500 font-bold mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 4. Architecture Diagram */}
            <ProjectSection kicker="04. Architecture" title="System Topology" isCyan={false}>
              <div className="my-4">
                <ArchitectureDiagram projectType="tokenizer" isCyan={false} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={false}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 6 & 7. Links */}
            <ProjectSection kicker="06 & 07. Links" title="Source & Deploy" isCyan={false}>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <GitFork className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">GitHub Repository:</span>
                  <a
                    href="https://github.com/devJam2026/tokenizer-visualizer-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    tokenizer-visualizer-studio
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">Live Lab Endpoint:</span>
                  <Link
                    href="/labs/tokenizer-visualizer"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    /labs/tokenizer-visualizer
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
