import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import GraphPlayground from "@/components/labs/GraphPlayground";
import { Terminal, GitFork, Compass, ArrowRight } from "lucide-react";

export default function GraphPlaygroundPage() {
  const techs = ["React 19", "TypeScript", "Tailwind CSS", "SVG Coordinates", "GitHub"];
  const concepts = [
    "Vertices (Nodes) and Edge connections (Adjacency)",
    "Weighted vs. Unweighted networks",
    "Breadth First Search (BFS) adjacent discoveries",
    "Dijkstra's shortest path relaxation steps",
    "Priority queue distance estimations"
  ];
  const features = [
    "Interactive SVG network canvas plotting nodes and weighted edges.",
    "Custom Spawn Node tools mapping coordinate circles dynamically.",
    "Edge Connector inputs configuring source, target, and weight values.",
    "BFS adjacent search animation with edge highlight indicators.",
    "Dijkstra Shortest Path relaxation animation displaying path cost updates."
  ];
  const improvements = [
    "Add Prim's Minimum Spanning Tree visualizer.",
    "Implement topological sorting for directed acyclic graphs (DAG).",
    "Include draggable nodes to update coordinates in real time."
  ];

  const interviewQuote = "I designed the Graph Playground to visualize coordinate expansions and relaxation steps. Watching edges highlight as Dijkstra's algorithm selects the minimum distance node gives developers an immediate understanding of greedy pathfinding algorithms.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Graph Playground"
            description="Build custom node topologies, connect weighted edges, and run BFS search or Dijkstra shortest pathfinding step animations."
            github="https://github.com/devJam2026/landing"
            live="/labs/graph-playground"
            status="Active"
            outcome="Construct and analyze adjacency networks, traversal orderings, and shortest path relaxations."
            isCyan={true}
          />

          {/* ACTIVE LAB TERMINAL */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-cyan-400/10 border border-cyan-500/20 px-2 py-0.5 rounded font-bold text-cyan-400 uppercase">RUNNING LIVE</span>
            </div>
            <GraphPlayground />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Complex Adjacency Computations" isCyan={true}>
              <p>
                Graphs are highly abstract and mathematically dense structure types. Developers often struggle to understand how edge relaxation works, how BFS expands outward layer-by-layer, or how Dijkstra maintains optimal distances across nodes in real-world map pipelines.
              </p>
              <p className="mt-3">
                This playground solves this by allowing users to draw custom nodes and visually trace path relaxations directly on the canvas.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Network Adjacency and Relaxations" isCyan={true}>
              <p className="mb-4">
                This sandbox teaches core graph concepts:
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
            <ProjectSection kicker="03. What I built" title="Interactive SVG Graph Builder" isCyan={true}>
              <p className="mb-4">
                A dynamic graph canvas visualizer featuring:
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
            <ProjectSection kicker="04. Architecture" title="Graph State Updates" isCyan={true}>
              <div className="my-4 border border-card-border/60 bg-[#030712]/80 p-5 rounded-xl flex flex-col items-center gap-2 w-full text-xs">
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>Vertices & Edges lists state</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 rounded w-56 justify-center">
                  <Compass className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Dijkstra distance relaxation tracker</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>Pathfinder highlights output</span>
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
                    href="/labs/graph-playground"
                    className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                  >
                    /labs/graph-playground
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
