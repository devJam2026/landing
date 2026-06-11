import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import AIStatusBadge from "@/components/ai/AIStatusBadge";
import { systemDesignTracks } from "@/data/system-design/tracks";
import { systemDesignModules } from "@/data/system-design/modules";
import { systemDesignProjects } from "@/data/system-design/projects";
import { ArrowLeft, BookOpen, ShieldCheck, Award, Code } from "lucide-react";

interface TrackPageProps {
  params: Promise<{ "track-slug": string }>;
}

export async function generateStaticParams() {
  return systemDesignTracks.map((track) => ({
    "track-slug": track.slug,
  }));
}

export default async function SystemDesignTrackDetailPage({ params }: TrackPageProps) {
  const resolvedParams = await params;
  const trackSlug = resolvedParams["track-slug"];
  const track = systemDesignTracks.find((t) => t.slug === trackSlug);

  if (!track) {
    notFound();
  }

  // Get modules belonging to this track
  const trackModules = Object.values(systemDesignModules).filter(
    (m) => m.trackSlug === track.slug
  );

  // Get projects belonging to this track
  const trackProjects = Object.values(systemDesignProjects).filter(
    (p) => p.trackSlug === track.slug
  );

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/roadmaps/system-design"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to System Design
            </Link>
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Track Details
            </span>
          </div>

          <PageHero
            kicker="System Design Curriculum"
            title={track.title}
            description={track.description}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column (8/12 width) - Modules and Projects */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              
              {/* Modules List */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-4 w-4" />
                  Syllabus Modules
                </h3>

                {trackModules.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {trackModules.map((m) => (
                      <div
                        key={m.slug}
                        className="p-5 rounded-xl border border-card-border bg-[#030712]/60 flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-foreground">{m.title}</span>
                          <AIStatusBadge status={m.status} />
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    Syllabus modules coming soon.
                  </div>
                )}
              </div>

              {/* Projects List */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Code className="h-4 w-4" />
                  Planned Practice Projects
                </h3>

                {trackProjects.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {trackProjects.map((p) => (
                      <div
                        key={p.slug}
                        className="p-5 rounded-xl border border-card-border bg-[#030712]/60 flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-foreground">{p.title}</span>
                          <AIStatusBadge status={p.status} />
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {p.description}
                        </p>
                        <div className="flex gap-2.5 flex-wrap">
                          {p.techStack.map((tech) => (
                            <span key={tech} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 font-mono text-[9px] text-text-muted">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    Projects mapping coming soon.
                  </div>
                )}
              </div>

            </div>

            {/* Right Column (4/12 width) - Outcomes & Interview */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Learning Outcomes */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Learning Outcomes
                </h4>
                <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                  {track.learningOutcomes.map((o, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview Defense */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Interview Defense
                </h4>
                <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                  {track.interviewValue.map((v, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <Award className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{v}</span>
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
