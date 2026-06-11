import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import BinaryTreeVisualizer from "@/components/labs/BinaryTreeVisualizer";
import { Terminal, GitFork, Compass, ArrowRight } from "lucide-react";

export default function BinaryTreeVisualizerPage() {
  const techs = ["React 19", "TypeScript", "Tailwind CSS", "SVG API", "GitHub"];
  const concepts = [
    "Hierarchic node structures (Parent/Child pointers)",
    "Binary Search Tree (BST) sorted insertion logic",
    "Preorder (NLR), Inorder (LNR), and Postorder (LRN) traversals",
    "Breadth First Search (BFS) level-order traversal queue logic",
    "Leaf nodes vs. internal nodes coordinates"
  ];
  const features = [
    "Dynamic SVG Tree builder plotting nodes and line edges automatically.",
    "Interactive BST insertion form adding nodes to correct branches.",
    "Clear Tree control to reset the SVG container.",
    "DFS traversal path highlighting animations with step timers.",
    "BFS Level Order traversal animation using queue state trace logs."
  ];
  const improvements = [
    "Implement AVL Tree self-balancing rotation visualizers.",
    "Add Red-Black Tree node coloring transition steps.",
    "Include depth and balance metrics panel."
  ];

  const interviewQuote = "I implemented the Binary Tree Visualizer to show how recursion stacks visit node hierarchies. By seeing DFS and BFS traversals highlight nodes in active order, developers can instantly understand NLR, LNR, and LRN sequence differences.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Binary Tree Visualizer"
            description="Visualize Binary Search Tree (BST) insertions and standard DFS/BFS traversals step-by-step on SVG-rendered layouts."
            github="https://github.com/devJam2026/landing"
            live="/labs/binary-tree-visualizer"
            status="Active"
            outcome="Deconstruct parent-child node relationships and dynamic search trees traversals."
            isCyan={true}
          />

          {/* ACTIVE LAB TERMINAL */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-cyan-400/10 border border-cyan-500/20 px-2 py-0.5 rounded font-bold text-cyan-400 uppercase">RUNNING LIVE</span>
            </div>
            <BinaryTreeVisualizer />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Abstract Hierarchic Traversals" isCyan={true}>
              <p>
                Trees are recursive structures that are difficult to debug using text prints alone. Memorizing the differences between preorder, inorder, and postorder traversals is common, but visualizing which nodes are visited at each recursion step is rarely shown.
              </p>
              <p className="mt-3">
                This visualizer solves this by dynamically rendering the BST as SVG circles and highlighting node visitation transitions in real time.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Tree DFS and BFS Sequences" isCyan={true}>
              <p className="mb-4">
                This sandbox teaches core hierarchic concepts:
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
            <ProjectSection kicker="03. What I built" title="SVG BST Coordinate Grid" isCyan={true}>
              <p className="mb-4">
                An interactive BST visualizer featuring:
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
            <ProjectSection kicker="04. Architecture" title="Tree Rendering Flow" isCyan={true}>
              <div className="my-4 border border-card-border/60 bg-[#030712]/80 p-5 rounded-xl flex flex-col items-center gap-2 w-full text-xs">
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>TreeNode state coordinates</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 rounded w-56 justify-center">
                  <Compass className="h-3.5 w-3.5 text-cyan-400" />
                  <span>SVG canvas recursive edges builder</span>
                </div>
                <ArrowRight className="h-4 w-4 rotate-90 text-card-border" />
                <div className="flex items-center gap-2 border border-card-border bg-[#050811] px-3 py-1.5 rounded w-56 justify-center">
                  <span>DFS highlight trace logs</span>
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
                    href="/labs/binary-tree-visualizer"
                    className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                  >
                    /labs/binary-tree-visualizer
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
