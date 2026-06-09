import React from "react";
import Link from "next/link";
import { FolderGit, ExternalLink, Award, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import CtaButton from "./cta-button";

interface ProjectHeroProps {
  title: string;
  description: string;
  github: string;
  live: string;
  status: string;
  outcome: string;
  isCyan?: boolean;
}

export default function ProjectHero({
  title,
  description,
  github,
  live,
  status,
  outcome,
  isCyan = false,
}: ProjectHeroProps) {
  const isProgress = status === "In Progress";
  const isCompleted = status === "Completed";

  const badgeColors = isProgress
    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
    : isCompleted
    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border/60 bg-[#060a13]/60 backdrop-blur-md p-6 md:p-8 lg:p-10 mb-8 w-full shadow-2xl">
      {/* Background radial glows */}
      <div className={`absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl -z-10 ${
        isCyan ? "bg-cyan-500/5" : "bg-orange-500/5"
      }`} />
      <div className={`absolute -left-24 -bottom-24 h-60 w-60 rounded-full blur-3xl -z-10 ${
        isCyan ? "bg-cyan-500/5" : "bg-orange-500/5"
      }`} />

      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-foreground mb-6 transition-colors group cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Title, Desc, Actions) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className={`text-[9px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded border flex items-center gap-1 ${badgeColors}`}>
              {isProgress ? <Clock className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
              {status}
            </span>
            <span className="text-[10px] text-text-muted font-bold font-mono">LLM Project</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full sm:w-auto">
            <CtaButton
              href={github}
              variant={isCyan ? "secondary" : "primary"}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <FolderGit className="h-4 w-4" />
              GitHub Repository
            </CtaButton>
            {live && live !== "#" && (
              <CtaButton
                href={live}
                variant={isCyan ? "primary" : "secondary"}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </CtaButton>
            )}
          </div>
        </div>

        {/* Right Column (Learning Outcome Card) */}
        <div className="lg:col-span-5 w-full">
          <div className={`rounded-xl border p-5 md:p-6 bg-card-bg/30 ${
            isCyan ? "border-cyan-500/10 shadow-lg shadow-cyan-500/[0.02]" : "border-orange-500/10 shadow-lg shadow-orange-500/[0.02]"
          }`}>
            <div className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest mb-3 ${
              isCyan ? "text-cyan-400" : "text-orange-500"
            }`}>
              <Award className="h-4 w-4" />
              Target Learning Outcome
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
