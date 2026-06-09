"use client";

import React from "react";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./brand-icons";

export default function FeaturedProjects() {
  const projects = [
    {
      name: "Tokenizer Visualizer",
      description: "Interactive visual tool to examine text segmentation, byte-pair tokenization, and ID offsets across leading LLM architectures.",
      stars: 384,
      forks: 42,
      language: "TypeScript",
      langColor: "bg-blue-500",
      githubUrl: "https://github.com/devJam2026/tokenizer-visualizer",
    },
    {
      name: "Hyperparameter Playground",
      description: "Interactive browser laboratory for visualizing weights, loss curves, learning rates, and optimizer dynamics in real time.",
      stars: 512,
      forks: 58,
      language: "React",
      langColor: "bg-sky-400",
      githubUrl: "https://github.com/devJam2026/hyperparameter-playground",
    },
    {
      name: "Context Window Dashboard",
      description: "Diagnostic analyzer demonstrating prompt truncation, token compression, needle-in-a-haystack retrieval, and system message weights.",
      stars: 219,
      forks: 18,
      language: "Next.js",
      langColor: "bg-slate-400",
      githubUrl: "https://github.com/devJam2026/context-window-dashboard",
    },
    {
      name: "Attention Notebook",
      description: "Interactive educational notebook demonstrating mathematical foundations of Self-Attention, Multi-Head Query-Key matrices, and masking.",
      stars: 846,
      forks: 94,
      language: "Python",
      langColor: "bg-yellow-500",
      githubUrl: "https://github.com/devJam2026/attention-notebook",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-12 scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Open Source Labs
          </h2>
        </div>
        <a
          href="https://github.com/devJam2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 flex items-center gap-1 transition-colors duration-200"
        >
          View GitHub Profile <span className="text-[10px]">→</span>
        </a>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-violet-500/20 hover:-translate-y-0.5"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-input-bg text-violet-600 dark:text-violet-400 shadow-inner">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-card-border hover:border-violet-500/20 bg-background text-text-muted hover:text-foreground transition-colors duration-200"
                    title="View Source on GitHub"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Project Meta */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Project Stats and Language */}
              <div className="flex items-center justify-between border-t border-card-border pt-4 mt-2 text-xs text-text-muted font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className={`h-2.5 w-2.5 rounded-full ${project.langColor}`} />
                    {project.language}
                  </span>
                  
                  <span className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {project.stars}
                  </span>

                  <span className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <GitFork className="h-3.5 w-3.5" />
                    {project.forks}
                  </span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] uppercase font-bold text-violet-600 dark:text-violet-400 group-hover:text-violet-500 dark:group-hover:text-violet-300"
                >
                  <GithubIcon className="h-3 w-3" />
                  Clone repo
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
