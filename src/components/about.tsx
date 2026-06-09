"use client";

import React from "react";
import { Terminal, Users, Cpu, Code2 } from "lucide-react";

export default function About() {
  const points = [
    {
      title: "Interactive Labs",
      description: "Step-by-step visualizations of core technologies like React rendering cycles, compilers, pipelines, and distributed protocols.",
      icon: Terminal,
      isCyan: false,
    },
    {
      title: "Project-Driven Learning",
      description: "Direct exploration of source code and configurations. Learn how production software operates by launching open-source modules.",
      icon: Code2,
      isCyan: true,
    },
    {
      title: "Developer Community",
      description: "Designed for curious software developers, system architects, research engineers, and DevOps leads seeking deep understanding.",
      icon: Users,
      isCyan: false,
    },
    {
      title: "Modern Core Domains",
      description: "Targeted focus on AI architecture (RAG, Agents), frontend components (Next.js, React), distributed scale, and git automation.",
      icon: Cpu,
      isCyan: true,
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 border-t border-card-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column description */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            About the Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
            Engineering Labs for Curious Minds
          </h2>
          <p className="text-sm text-text-muted leading-relaxed max-w-md">
            DevJam is a project-driven technology hub focused on learning through building.
          </p>
          <p className="text-sm text-text-muted leading-relaxed max-w-md">
            The platform explores AI Engineering, Frontend Development, System Design, and DevOps through practical labs, open-source projects, and technical writing.
          </p>
        </div>

        {/* Right column core features grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 rounded-xl p-5 ${
                  point.isCyan ? "premium-card premium-card-cyan" : "premium-card"
                }`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg border shadow-inner ${
                  point.isCyan 
                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                    : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground">
                  {point.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
