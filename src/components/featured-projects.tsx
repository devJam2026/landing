"use client";

import React from "react";
import Link from "next/link";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-lg border border-card-border bg-background text-text-muted hover:text-foreground transition-colors duration-200 ${
                      project.isCyan ? "hover:border-cyan-500/20" : "hover:border-orange-500/20"
                    }`}
                    title="View Source on GitHub"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Project Meta */}
                <h3 className={`text-base font-bold text-foreground mb-2 transition-colors duration-200 ${
                  project.isCyan ? "group-hover:text-cyan-400" : "group-hover:text-orange-500"
                }`}>
                  <Link href={project.projectUrl}>
                    {project.name}
                  </Link>
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
                  className={`flex items-center gap-1 text-[10px] uppercase font-bold transition-colors ${
                    project.isCyan 
                      ? "text-cyan-400 hover:text-orange-500" 
                      : "text-orange-500 hover:text-cyan-400"
                  }`}
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
