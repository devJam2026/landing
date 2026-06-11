import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import AIExternalLink from "@/components/ai/AIExternalLink";
import { aiLabs } from "@/data/ai/labs";
import { ArrowLeft, Compass, Code, Play } from "lucide-react";

interface LabPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(aiLabs).map((slug) => ({
    slug,
  }));
}

export default async function AiLabDetailPage({ params }: LabPageProps) {
  const resolvedParams = await params;
  const lab = aiLabs[resolvedParams.slug];

  if (!lab) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/ai-engineer/foundation"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Foundation Track
            </Link>
            <AIStatusBadge status={lab.status} />
          </div>

          <PageHero
            kicker="Interactive Sandbox"
            title={lab.name}
            description={lab.goal}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            
            {/* 1. Core Goal */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Lab Objective & Goals
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {lab.goal}
              </p>
            </div>

            {/* 2. Tech Stack */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Code className="h-4 w-4" />
                Planned Sandbox Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {lab.tech.map((tech, idx) => (
                  <span key={idx} className="bg-[#030712] border border-card-border/40 px-3 py-1 rounded text-[10px] text-text-muted font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Link references */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Play className="h-4 w-4" />
                Interactive Launch Ends
              </h3>
              <div className="flex flex-col gap-2 font-mono text-[10px] text-text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-24">GitHub Code:</span>
                  <AIExternalLink link={lab.github} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24">Sandbox Demo:</span>
                  <AIExternalLink link={lab.liveDemo} />
                </div>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
