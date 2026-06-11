import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import { aiTracks } from "@/data/ai/tracks";
import { aiModules } from "@/data/ai/modules";
import { aiSubmodules } from "@/data/ai/submodules";
import { ArrowLeft, BookOpen, ChevronRight, HelpCircle } from "lucide-react";

interface ModulePageProps {
  params: Promise<{
    "track-slug": string;
    "module-slug": string;
  }>;
}

export async function generateStaticParams() {
  const params: { "track-slug": string; "module-slug": string }[] = [];
  Object.values(aiModules).forEach((mod) => {
    params.push({
      "track-slug": mod.trackSlug,
      "module-slug": mod.slug,
    });
  });
  return params;
}

export default async function AiEngineerModuleDetailPage({ params }: ModulePageProps) {
  const resolvedParams = await params;
  const trackSlug = resolvedParams["track-slug"];
  const moduleSlug = resolvedParams["module-slug"];

  const track = aiTracks.find((t) => t.slug === trackSlug);
  const aiModule = aiModules[moduleSlug];

  if (!track || !aiModule || aiModule.trackSlug !== trackSlug) {
    notFound();
  }

  // Get submodules belonging to this module
  const subModules = Object.values(aiSubmodules).filter(
    (sm) => sm.moduleSlug === aiModule.slug
  );

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
              href={`/ai-engineer/tracks/${track.slug}`}
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {track.title}
            </Link>
            <AIStatusBadge status={aiModule.status} />
          </div>

          <PageHero
            kicker="AI Syllabus Module"
            title={aiModule.title}
            description={aiModule.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column: Submodules list (8/12 width) */}
            <div className="md:col-span-8 flex flex-col gap-6 w-full">
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-4 w-4" />
                  Lessons & Submodules
                </h3>

                {subModules.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {subModules.map((sm) => (
                      <Link
                        key={sm.slug}
                        href={`/ai-engineer/tracks/${track.slug}/${aiModule.slug}/${sm.slug}`}
                        className="p-4 rounded-xl border border-card-border bg-[#030712]/60 hover:border-orange-500/20 hover:shadow-md hover:shadow-orange-500/5 transition-all duration-200 flex justify-between items-center group cursor-pointer"
                      >
                        <div className="flex flex-col gap-1 max-w-[85%]">
                          <span className="text-xs font-bold text-foreground group-hover:text-orange-500 transition-colors">{sm.title}</span>
                          <p className="text-[10px] text-text-muted leading-relaxed line-clamp-1">
                            {sm.description}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    Submodules mapping coming soon.
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Module info (4/12 width) */}
            <div className="md:col-span-4 flex flex-col gap-6 w-full">
              {/* Learning Outcomes */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Key Skills
                </h4>
                <ul className="flex flex-col gap-2 text-[10px] text-text-muted">
                  {aiModule.learningOutcomes.map((o, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <span className="text-cyan-400 font-bold shrink-0">•</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview questions */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Interview Value
                </h4>
                <ul className="flex flex-col gap-2 text-[10px] text-text-muted">
                  {aiModule.interviewQuestions.map((q, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <HelpCircle className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
