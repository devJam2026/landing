import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { GithubIcon } from "@/components/brand-icons";
import { FolderGit, ExternalLink, Award, CheckCircle, Clock } from "lucide-react";

export default function ProjectsPage() {
  const allProjects = [
    {
      name: "Mini Attention Notebook",
      status: "Active",
      description: "A Python-based interactive visual guide to attention matrices, QKV projection layers, causal masking weights, and head dimensions.",
      outcome: "Master mathematical equations and tensor calculations of self-attention mechanism by building it from scratch.",
      github: "https://github.com/devJam2026/attention-notebook",
      live: "https://github.com/devJam2026/attention-notebook",
      isCyan: false,
    },
    {
      name: "Tokenizer Visualizer Studio",
      status: "Active",
      description: "Interactive frontend workspace for visualizing BPE (Byte Pair Encoding) tokenization, vocabulary mapping, and offset grids.",
      outcome: "Learn LLM vocabulary lookup algorithms, token index decoding, and dynamic HTML visual highlighting offsets.",
      github: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      live: "/labs",
      isCyan: true,
    },
    {
      name: "Hyperparameter Playground",
      status: "Completed",
      description: "A web playground for experimenting with neural network training parameters like learning rates, epochs, optimizer types, and loss curves.",
      outcome: "Visualize weight updates, gradient descent behavior, local minima bypasses, and validation loss underfitting.",
      github: "https://github.com/devJam2026/hyperparameter-playground",
      live: "https://github.com/devJam2026/hyperparameter-playground",
      isCyan: false,
    },
    {
      name: "Context Window Diagnostics",
      status: "In Progress",
      description: "Diagnostic benchmark tool to evaluate model output quality and retrieval accuracy at varying depths within the context window.",
      outcome: "Understand 'lost in the middle' phenomena, context token decay, and retrieval-augmented prompt constraints.",
      github: "https://github.com/devJam2026/context-window-diagnostics",
      live: "https://github.com/devJam2026/context-window-diagnostics",
      isCyan: true,
    },
    {
      name: "AI Scam Detector",
      status: "In Progress",
      description: "Local model Chrome extension leveraging quantized inference tasks to identify active phishing patterns in loaded webpages.",
      outcome: "Integrate model quantization formats, prompt classifications, and Chrome extension background scripts.",
      github: "https://github.com/devJam2026/ai-scam-detector",
      live: "https://github.com/devJam2026/ai-scam-detector",
      isCyan: false,
    },
    {
      name: "DevJam Hub",
      status: "Active",
      description: "The premium static website representing the DevJam engineering lab, optimized for fast loading and glassmorphic layouts.",
      outcome: "Master Next.js static exports, dynamic public API fetches, Tailwind CSS layout systems, and SEO properties.",
      github: "https://github.com/devJam2026/landing",
      live: "/",
      isCyan: true,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          <PageHero
            kicker="DevJam Projects"
            title="Open Source Projects"
            description="Explore our public repositories. Standardized layouts, clean code structures, and comprehensive documentation to jumpstart your building process."
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {allProjects.map((project) => {
              const isProgress = project.status === "In Progress";
              const isCompleted = project.status === "Completed";

              const badgeColors = isProgress
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : isCompleted
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";

              return (
                <Card key={project.name} isCyan={project.isCyan}>
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-input-bg shadow-inner ${
                        project.isCyan ? "text-cyan-400" : "text-orange-500"
                      }`}>
                        <GithubIcon className="h-5 w-5" />
                      </div>
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border flex items-center gap-1 ${badgeColors}`}>
                        {isProgress ? <Clock className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {project.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Outcome block */}
                    <div className="bg-[#050811]/40 border border-card-border/50 rounded-lg p-3.5 mb-6">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-orange-500 uppercase tracking-wider mb-1.5">
                        <Award className="h-3.5 w-3.5" />
                        Learning Outcome
                      </div>
                      <p className="text-[10px] text-text-muted leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Links footer */}
                  <div className="flex items-center justify-between border-t border-card-border pt-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <FolderGit className="h-4 w-4" />
                      GitHub Repo
                    </a>
                    <a
                      href={project.live}
                      className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                        project.isCyan
                          ? "text-cyan-400 hover:text-cyan-300"
                          : "text-orange-500 hover:text-orange-400"
                      }`}
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
