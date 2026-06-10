"use client";

import React from "react";
import Link from "next/link";
import { Star, GitFork, Award, ExternalLink, GitBranch } from "lucide-react";
import { GithubIcon } from "./brand-icons";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
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
          className="text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:text-orange-500 flex items-center gap-1 transition-colors duration-200"
        >
          View GitHub Profile <span className="text-[10px]">→</span>
        </a>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
        {featuredProjects.map((project) => {
          return (
            <div
              key={project.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 ${
                project.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              <div>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-input-bg shadow-inner ${
                    project.isCyan ? "text-cyan-400" : "text-orange-500"
                  }`}>
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${
                    project.status === "Completed"
                      ? "text-cyan-400 bg-cyan-400/5 border-cyan-500/10"
                      : project.status === "Active"
                      ? "text-orange-500 bg-orange-500/5 border-orange-500/10 animate-pulse"
                      : "text-text-muted bg-input-bg border-card-border"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className={`text-lg sm:text-xl font-bold text-foreground mb-2 transition-colors duration-200 ${
                  project.isCyan ? "group-hover:text-cyan-400" : "group-hover:text-orange-500"
                }`}>
                  <Link href={project.projectUrl}>
                    {project.name}
                  </Link>
                </h3>
                
                {/* Project Description */}
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Learning Outcome Section */}
                <div className="bg-[#050811]/60 border border-card-border/50 rounded-lg p-3.5 mb-5 hover:border-card-border transition-colors">
                  <div className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider mb-1.5 ${
                    project.isCyan ? "text-cyan-400" : "text-orange-500"
                  }`}>
                    <Award className="h-3.5 w-3.5" />
                    Learning Outcome
                  </div>
                  <p className="text-[11px] text-foreground/80 leading-relaxed font-sans">
                    {project.learningOutcome}
                  </p>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-card-border/60 pt-4 mt-auto">
                {/* Left side: Github Link and Live Demo Link */}
                <div className="flex items-center gap-4 text-xs font-semibold text-text-muted">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                    <Link
                      href={project.liveDemoUrl}
                      className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>

                {/* Right side: Architecture Button */}
                <Link
                  href={project.architectureUrl}
                  className={`inline-flex items-center gap-1.5 text-[11px] uppercase font-bold tracking-wider rounded border px-3 py-1.5 transition-all duration-200 cursor-pointer ${
                    project.isCyan 
                      ? "text-cyan-400 border-cyan-500/25 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/40" 
                      : "text-orange-500 border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/10 hover:border-orange-500/40"
                  }`}
                >
                  <GitBranch className="h-3 w-3" />
                  Architecture
                </Link>
              </div>

              {/* Stats Footer (Stars, Forks, Language) */}
              <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-text-muted/70">
                <span className="flex items-center gap-1">
                  <span className={`h-2 w-2 rounded-full ${project.langColor}`} />
                  {project.language}
                </span>
                
                <span className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-current text-yellow-500/70" />
                  {project.stars}
                </span>

                <span className="flex items-center gap-0.5">
                  <GitFork className="h-3 w-3" />
                  {project.forks}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
