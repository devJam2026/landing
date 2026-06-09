import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import ArchitectureDiagram from "@/components/architecture-diagram";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import Link from "next/link";
import { GitFork, Terminal } from "lucide-react";

export default function MiniAttentionNotebookPage() {
  const techs = ["React", "TypeScript", "Python", "NumPy / PyTorch", "Tailwind CSS", "GitHub"];
  const concepts = [
    "Query (Q), Key (K), and Value (V) projections matrices",
    "Dot product attention mechanics (Q × Kᵀ)",
    "Attention score calculation and scaling factors (1/√d_k)",
    "Softmax normalization mapping relative weights to [0,1]",
    "Weighted sum of values (Weights × V)",
    "Token-to-token semantic relationship matching",
    "Multi-Head Attention vs Single-Head dimensions"
  ];
  const features = [
    "Token Input Field generating interactive matrices dynamically.",
    "Visual projection matrices mapping input tokens to Q, K, and V vectors.",
    "Dot product interactive calculation grids showing vector similarity values.",
    "Attention weight tables overlaying softmax output percentages.",
    "Color-graded cell charts representing token-to-token attention mapping.",
    "Interactive sliding guides explaining head scaling controls.",
    "Step-by-step educational workbook layout with rich annotations."
  ];
  const improvements = [
    "Add multi-head attention visual configurations (up to 8 parallel heads).",
    "Add positional encoding (Sinusoidal vs RoPE) interactive section.",
    "Implement causal masking toggles for decoder-only model simulations.",
    "Build step-by-step matrix animation flow showing values accumulation.",
    "Add comparative sections contrasting transformer attention with RNN memory states.",
    "Integrate a fully functional multi-layer transformer block visualizer.",
    "Implement exportable Jupyter/Python notebook configurations (.ipynb files).",
    "Add interactive quiz mode with diagnostic test questions for students."
  ];

  const interviewQuote = "I built this project to deeply understand the attention mechanism used inside transformers. Each token is converted into Query, Key, and Value representations. The Query and Key vectors are compared using dot product to calculate attention scores. These scores are passed through softmax to create attention weights, and those weights are used to combine Value vectors. This project helped me understand how a transformer decides which tokens should influence each other.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Mini Attention Notebook"
            description="Expose the core mathematical engine inside transformers. Visualize Query, Key, and Value vector products and causal masking weights in real-time."
            github="https://github.com/devJam2026/mini-attention-notebook"
            live="#"
            status="Active"
            outcome="Deconstruct Query/Key/Value projects, dot-product calculations, Softmax matrix normalization, and head dimension scaling by coding attention from scratch."
            isCyan={true}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Demystifying Transformer Mathematics" isCyan={true}>
              <p>
                Self-Attention is the cornerstone of modern LLMs, yet it is often treated as a black box. Conceptual guides explain it in words, but learners struggle to bridge the gap between description and the mathematical tensor equations: dot product scaling, matrix operations, Softmax distribution curves, and QKV projection dimensions.
              </p>
              <p className="mt-3">
                This project addresses this by creating a visual, step-by-step notebook simulator. By entering text, users can watch vectors transform, inspect matrix dot-products, and visually comprehend how tokens attend to each other.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Self-Attention Tensor Calculations" isCyan={true}>
              <p className="mb-4">
                This project visually represents the mathematical pipeline of the attention block:
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
            <ProjectSection kicker="03. What I built" title="Mathematical Notebook Workspace" isCyan={true}>
              <p className="mb-4">
                An interactive notebook console visualizing tensor projections, dot products, and contextual representations:
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
            <ProjectSection kicker="04. Architecture" title="System Flowchart" isCyan={true}>
              <div className="my-4">
                <ArchitectureDiagram projectType="attention" isCyan={true} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={true}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 06. GitHub link */}
            <ProjectSection kicker="06. GitHub link" title="Source Code Repository" isCyan={true}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <GitFork className="h-4 w-4 text-cyan-400" />
                <span className="text-text-muted">Repository:</span>
                <a
                  href="https://github.com/devJam2026/mini-attention-notebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                >
                  devJam2026/mini-attention-notebook
                </a>
              </div>
            </ProjectSection>

            {/* 07. Live demo link */}
            <ProjectSection kicker="07. Live demo link" title="Interactive Web Application" isCyan={true}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="text-text-muted">Live Lab:</span>
                <Link
                  href="/labs/react-rendering-visualizer"
                  className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                >
                  React Rendering & Self-Attention Reconciler Lab
                </Link>
              </div>
            </ProjectSection>

            {/* 08. How to run locally */}
            <ProjectSection kicker="08. How to run locally" title="Local Setup Instructions" isCyan={true}>
              <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 font-mono text-xs text-text-muted space-y-3">
                <div>
                  <div className="text-foreground font-bold mb-1"># Clone the repository</div>
                  <div>git clone https://github.com/devJam2026/mini-attention-notebook.git</div>
                  <div>cd mini-attention-notebook</div>
                </div>
                <div>
                  <div className="text-foreground font-bold mb-1"># Open Jupyter Notebook</div>
                  <div>pip install jupyterlab matplotlib numpy torch</div>
                  <div>jupyter lab notebooks/attention_walkthrough.ipynb</div>
                </div>
              </div>
            </ProjectSection>

            {/* 09. Interview explanation */}
            <ProjectSection kicker="09. Interview explanation" title="Answering Technical Questions" isCyan={true}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={true} />
            </ProjectSection>

            {/* 10. Common interview Q&A */}
            <ProjectSection kicker="10. Common interview Q&A" title="Technical Interview Questions" isCyan={true}>
              <div className="space-y-4">
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 mb-1">Q1: Why do we divide the dot product Q K^T by the scaling factor sqrt(d_k) in scaled dot-product attention?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    For large values of the projection dimension d_k, the dot products grow large in magnitude, pushing the softmax function into regions with extremely small gradients (vanishing gradient problem). Dividing by sqrt(d_k) scales the variance of the dot product back to 1, ensuring stable gradient flow during backpropagation.
                  </p>
                </div>
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 mb-1">Q2: What is causal masking and why is it necessary in decoder-only models (like GPT)?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Causal masking sets the upper-triangular elements of the attention matrix to $-\infty$ before softmax. This ensures that during self-attention, tokens can only attend to previous tokens and themselves, preventing the model from looking ahead at future tokens during autoregressive training and inference.
                  </p>
                </div>
              </div>
            </ProjectSection>

            {/* 11. Future improvements */}
            <ProjectSection kicker="11. Future improvements" title="Roadmap & Next Steps" isCyan={true}>
              <FutureImprovementList improvements={improvements} isCyan={true} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
