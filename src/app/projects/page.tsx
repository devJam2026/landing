"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { GithubIcon } from "@/components/brand-icons";
import { FolderGit, ExternalLink, Award, CheckCircle, Clock, Search } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState("All");

  const allProjects = projects.map(p => ({
    name: p.name,
    slug: p.slug,
    status: p.status,
    pillar: p.pillar,
    description: p.description,
    concept: p.concept,
    github: p.githubUrl,
    live: p.projectUrl,
    isCyan: p.isCyan,
    hasDetails: p.hasDetails
  }));

  const filteredProjects = allProjects.filter((project) => {
    const matchesPillar = selectedPillar === "All" || project.pillar === selectedPillar;
    const matchesQuery =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.concept.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesQuery;
  });

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

          {/* Search bar & Pillar filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 w-full">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, description, or concept..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-card-border bg-[#060a13]/60 text-xs text-foreground focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {["All", "AI Engineering", "Frontend Mastery", "System Design", "DevOps & CI/CD"].map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    selectedPillar === pillar
                      ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10"
                      : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-12">
              {filteredProjects.map((project) => {
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
                        {project.hasDetails ? (
                          <Link href={`/projects/${project.slug}`} className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors">
                            {project.name}
                          </Link>
                        ) : (
                          project.name
                        )}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Concept block */}
                      <div className="bg-[#050811]/40 border border-card-border/50 rounded-lg p-3.5 mb-6">
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-orange-500 uppercase tracking-wider mb-1.5">
                          <Award className="h-3.5 w-3.5" />
                          Learning Concept
                        </div>
                        <p className="text-[10px] text-text-muted leading-relaxed font-mono">
                          {project.concept}
                        </p>
                      </div>
                    </div>

                    {/* Links footer */}
                    <div className="flex items-center justify-between border-t border-card-border/60 pt-4 mt-auto gap-4">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-foreground transition-colors"
                          title="GitHub Repository"
                        >
                          <FolderGit className="h-4.5 w-4.5" />
                        </a>
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-foreground transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="h-4.5 w-4.5" />
                          </a>
                        )}
                      </div>
                      {project.hasDetails ? (
                        <Link
                          href={`/projects/${project.slug}`}
                          className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                            project.isCyan
                              ? "text-cyan-400 hover:text-cyan-300"
                              : "text-orange-500 hover:text-orange-400"
                          }`}
                        >
                          View Details
                          <span className="text-[10px]">→</span>
                        </Link>
                      ) : (
                        <span className="text-[9px] font-bold text-text-muted/65 uppercase tracking-wider">
                          Docs Pending
                        </span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-text-muted border border-card-border/50 rounded-xl bg-[#060a13]/20 mb-12">
              No matching projects found for search query.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
