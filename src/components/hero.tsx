"use client";

import React from "react";
import { Brain, Code, Database, Infinity as InfinityIcon, Play, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./brand-icons";

export default function Hero() {
  const domains = [
    {
      name: "AI Engineering",
      icon: Brain,
      colorClass: "text-violet-600 dark:text-violet-400 border-violet-500/10 dark:border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10",
    },
    {
      name: "Frontend Engineering",
      icon: Code,
      colorClass: "text-blue-600 dark:text-blue-400 border-blue-500/10 dark:border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10",
    },
    {
      name: "System Design",
      icon: Layers,
      colorClass: "text-orange-600 dark:text-orange-400 border-orange-500/10 dark:border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10",
    },
    {
      name: "DevOps & CI/CD",
      icon: InfinityIcon,
      colorClass: "text-green-600 dark:text-green-400 border-green-500/10 dark:border-green-500/20 bg-green-500/5 hover:bg-green-500/10",
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/devJam2026", icon: GithubIcon, color: "hover:text-violet-600 dark:hover:text-white" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, color: "hover:text-[#0A66C2]" },
    { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon, color: "hover:text-[#1DA1F2]" },
    { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon, color: "hover:text-[#FF0000]" },
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/5 dark:bg-violet-600/[0.03] blur-3xl -z-10 animate-glow" />
      <div className="absolute top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/[0.03] blur-3xl -z-10 animate-glow" />
      
      {/* Interactive visual grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-25 -z-20 transition-opacity" />

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/5 text-[10px] sm:text-xs font-bold text-violet-600 dark:text-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
              AI Engineering Journey • 15+ Years Experience
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground mt-1">
              Learn. <span className="text-violet-600 dark:text-violet-500">Build.</span>
              <br />
              <span className="text-blue-600 dark:text-blue-500">Share.</span> <span className="text-emerald-600 dark:text-emerald-500">Grow.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
              DevJam is an engineering lab for modern builders. Interactive tools, in-depth notes, real-world projects, and practical roadmaps across multiple domains.
            </p>

            {/* Domains Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md my-2">
              {domains.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <div
                    key={domain.name}
                    className={`flex items-center gap-2.5 rounded-xl border p-3.5 transition-all duration-300 ${domain.colorClass}`}
                  >
                    <div className="rounded-lg p-1.5 bg-black/5 dark:bg-black/40">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-foreground">
                      {domain.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-2 w-full sm:w-auto">
              <a
                href="#labs"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:bg-violet-500 hover:shadow-violet-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Labs
                <span className="ml-1.5">→</span>
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-input-border bg-input-bg px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-card-bg hover:border-card-border hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <GithubIcon className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-4 text-text-muted text-sm">
              <span className="font-semibold tracking-wider text-[10px] uppercase text-gray-400 dark:text-gray-500">Follow DevJam:</span>
              <div className="flex items-center gap-3.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-200 ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-card-border/60 pt-6 mt-6">
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-2xl font-black text-foreground">15+ Yrs</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider mt-0.5">Experience</span>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-2xl font-black text-foreground">4</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider mt-0.5">Tracks</span>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-2xl font-black text-foreground">10+</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider mt-0.5">Labs Planned</span>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-2xl font-black text-foreground">4</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider mt-0.5">OS Projects</span>
              </div>
            </div>
          </div>

          {/* Right Laptop Graphic Column */}
          <div className="lg:col-span-6 flex justify-center relative w-full mt-8 lg:mt-0">
            <div className="w-full max-w-[480px] sm:max-w-[500px] relative select-none">
              
              {/* Floating Icons with animations */}
              {/* React Icon (Top-Left) */}
              <div className="absolute -left-2 sm:-left-4 top-4 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-blue-500 dark:text-blue-400 shadow-md shadow-blue-500/5 animate-float z-20">
                <Code className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              
              {/* Database Icon (Middle-Left) */}
              <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-violet-600 dark:text-violet-400 shadow-md shadow-violet-500/5 animate-float-delayed z-20">
                <Database className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Cloud Icon (Top-Right) */}
              <div className="absolute -right-2 sm:-right-4 top-6 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-sky-500 dark:text-sky-400 shadow-md shadow-sky-500/5 animate-float-delayed z-20">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Docker Icon (Middle-Right) */}
              <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-blue-500 dark:text-blue-400 shadow-md shadow-blue-400/5 animate-float z-20">
                <InfinityIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Pipeline Icon (Bottom-Right) */}
              <div className="absolute right-0 bottom-4 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md shadow-emerald-500/5 animate-float-delayed z-20">
                <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Laptop Display & Chassis Container */}
              <div className="relative mx-auto w-full aspect-[1.6] bg-slate-950 rounded-t-2xl border-[5px] sm:border-[6px] border-slate-800 shadow-2xl flex flex-col overflow-hidden">
                {/* Screen bezel */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-700" />
                
                {/* Screen content - Dynamically updates according to system theme */}
                <div className="w-full h-full bg-background p-3.5 sm:p-4 flex flex-col justify-between relative text-[9px] sm:text-xs transition-colors duration-300">
                  {/* Grid background overlay on screen */}
                  <div className="absolute inset-0 grid-bg opacity-10" />
                  
                  {/* Top Bar of Editor */}
                  <div className="flex items-center justify-between border-b border-card-border pb-2 z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-500/90" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/90" />
                      <div className="h-2 w-2 rounded-full bg-green-500/90" />
                    </div>
                    <div className="px-2 py-0.5 rounded bg-card-bg border border-card-border text-[8px] sm:text-[9px] text-text-muted">
                      devjam.in
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Editor Content Area */}
                  <div className="flex-1 py-2 sm:py-3 flex flex-col justify-center gap-2 z-10">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold tracking-widest text-xs sm:text-[13px] text-foreground">
                        DEV<span className="text-violet-600 dark:text-violet-500">JAM</span>
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                        Engineering Labs
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {/* Item 1 */}
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-card-bg border border-card-border">
                        <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                          <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground text-[8px] sm:text-[9px] leading-tight">Build</span>
                          <span className="text-text-muted text-[7px] sm:text-[8px]">Ship projects</span>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-card-bg border border-card-border">
                        <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          <Code className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground text-[8px] sm:text-[9px] leading-tight">Learn</span>
                          <span className="text-text-muted text-[7px] sm:text-[8px]">Deep dive</span>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-card-bg border border-card-border">
                        <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
                          <Brain className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground text-[8px] sm:text-[9px] leading-tight">Share</span>
                          <span className="text-text-muted text-[7px] sm:text-[8px]">Document hub</span>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-card-bg border border-card-border">
                        <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                          <InfinityIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground text-[8px] sm:text-[9px] leading-tight">Grow</span>
                          <span className="text-text-muted text-[7px] sm:text-[8px]">Scale output</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen Footer */}
                  <div className="border-t border-card-border pt-1.5 flex items-center justify-between text-[8px] text-text-muted z-10">
                    <span>Active: Interactive simulator</span>
                    <span className="text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-semibold">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-ping" />
                      Live server
                    </span>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="relative w-[114%] -left-[7%] h-4 sm:h-5 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-xl border-t border-slate-600 shadow-2xl flex justify-center z-10">
                <div className="w-16 h-1 bg-slate-950/40 rounded-b-md" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
