"use client";

import React from "react";
import Link from "next/link";
import { Brain, Code, Infinity as InfinityIcon, Layers, Folder, File, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./brand-icons";

export default function Hero() {
  const domains = [
    {
      name: "AI Engineering",
      icon: Brain,
      colorClass: "text-orange-500 border-orange-500/10 dark:border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10",
    },
    {
      name: "Frontend Engineering",
      icon: Code,
      colorClass: "text-blue-500 border-blue-500/10 dark:border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10",
    },
    {
      name: "System Design",
      icon: Layers,
      colorClass: "text-orange-500 border-orange-500/10 dark:border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10",
    },
    {
      name: "DevOps & CI/CD",
      icon: InfinityIcon,
      colorClass: "text-cyan-400 border-cyan-400/10 dark:border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10",
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/devJam2026", icon: GithubIcon, color: "hover:text-orange-500" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/avick-mukherjee-400a4214/", icon: LinkedinIcon, color: "hover:text-blue-500" },
    { name: "Twitter", href: "https://x.com/AVICKMUKH", icon: TwitterIcon, color: "hover:text-cyan-400" },
    { name: "YouTube", href: "https://www.youtube.com/@DevJam-v5h", icon: YoutubeIcon, color: "hover:text-orange-600" },
  ];

  return (
    <section className="relative overflow-hidden pt-4 pb-7 md:pt-6 md:pb-10 w-full">
      {/* Background radial glows using orange and cyan accents */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 dark:bg-orange-500/[0.02] blur-3xl -z-10 animate-glow" />
      <div className="absolute top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/[0.02] blur-3xl -z-10 animate-glow" />
      
      {/* Technical grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20 transition-opacity" />

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground mt-1">
              Learn. <span className="text-orange-500">Build.</span>
              <br />
              <span className="text-blue-500">Share.</span> <span className="text-cyan-400">Grow.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-lg">
              DevJam is an engineering lab for modern builders. Interactive tools, deep-dive architectural blueprints, real-world codebases, and structured roadmaps.
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

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto">
              <Link
                href="/labs"
                className="w-full sm:w-48 inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Explore Labs
                <span className="ml-1.5">→</span>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-48 inline-flex items-center justify-center rounded-lg border border-card-border bg-card-bg/40 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-cyan-500/30 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                View Projects
                <GithubIcon className="ml-2 h-4 w-4" />
              </Link>
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
          </div>

          {/* Right Column - Redesigned Tech Dashboard Card */}
          <div className="lg:col-span-6 flex justify-center relative w-full mt-8 lg:mt-0">
            {/* Tech Floating badges */}
            <div className="absolute -left-6 top-8 px-2.5 py-1 rounded bg-[#090d16]/90 border border-orange-500/20 text-[9px] font-mono font-bold text-orange-500 animate-float z-20 flex items-center gap-1.5 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping" />
              AI ENGINE
            </div>
            
            <div className="absolute -right-6 bottom-10 px-2.5 py-1 rounded bg-[#090d16]/90 border border-cyan-500/20 text-[9px] font-mono font-bold text-cyan-400 animate-float-delayed z-20 flex items-center gap-1.5 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              SYSTEM SCALE
            </div>

            {/* Main Console Box Container */}
            <div className="w-full max-w-[480px] sm:max-w-[500px] aspect-[1.45] premium-card-cyan premium-card rounded-2xl bg-[#070a13]/90 border border-white/5 p-4 flex flex-col justify-between text-xs overflow-hidden relative shadow-2xl">
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-card-border pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-orange-500/80 bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">
                  <Terminal className="h-3 w-3" />
                  causal_attention.py
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-text-muted">ACTIVE</span>
                </div>
              </div>

              {/* Console Layout Body */}
              <div className="grid grid-cols-12 gap-3 flex-1 mt-3 w-full h-full text-[10px] font-mono">
                
                {/* File Tree Left pane (cols 4) */}
                <div className="col-span-4 border-r border-card-border/40 pr-3 flex flex-col gap-2 text-text-muted">
                  <div className="flex items-center gap-1 text-[9px] font-bold text-foreground">
                    <Folder className="h-3.5 w-3.5 text-orange-500/80" />
                    <span>src/</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-3 text-[9px]">
                    <div className="flex items-center gap-1 text-orange-500/80 font-bold">
                      <File className="h-3 w-3" />
                      <span>attention.py</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <File className="h-3 w-3" />
                      <span>tokenizer.ts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <File className="h-3 w-3" />
                      <span>pipeline.yaml</span>
                    </div>
                  </div>
                </div>

                {/* Editor Right pane (cols 8) */}
                <div className="col-span-8 flex flex-col justify-between gap-3">
                  {/* Code Block syntax highlighters */}
                  <div className="flex flex-col gap-1 text-text-muted leading-relaxed">
                    <div><span className="text-blue-500">class</span> <span className="text-orange-500 font-bold">Attention</span>(nn.Module):</div>
                    <div className="pl-4"><span className="text-blue-500">def</span> <span className="text-cyan-400">forward</span>(self, q, k, v):</div>
                    <div className="pl-8">scores = q @ k.T / d_k</div>
                    <div className="pl-8 text-orange-500/90"># Apply causal mask</div>
                    <div className="pl-8">scores = apply_mask(scores)</div>
                    <div className="pl-8"><span className="text-blue-500">return</span> softmax(scores) @ v</div>
                  </div>

                  {/* Micro Compiler Status Box */}
                  <div className="border border-card-border/60 bg-slate-950/80 rounded-lg p-2.5 text-[8px] sm:text-[9px] text-text-muted/80 flex flex-col gap-0.5">
                    <div className="text-[8px] font-bold uppercase tracking-wider text-orange-500/80 mb-1">Compiler Output</div>
                    <div className="flex items-center justify-between">
                      <span>✓ Ingestion modules</span>
                      <span className="text-emerald-500 font-bold">READY</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>✓ Self-Attention layer</span>
                      <span className="text-emerald-500 font-bold">COMPILED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>✓ CI/CD Test Pipeline</span>
                      <span className="text-cyan-400 font-bold">PASS (100%)</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
