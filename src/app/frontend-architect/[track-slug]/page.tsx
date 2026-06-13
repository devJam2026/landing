import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { frontendTracks } from "@/data/frontend/tracks";
import { frontendModules } from "@/data/frontend/modules";
import { frontendProjects } from "@/data/frontend/projects";
import { frontendSubmodules } from "@/data/frontend/submodules";
import { frontendCaseStudies } from "@/data/frontend/caseStudies";
import { frontendOutcomes } from "@/data/frontend/outcomes";
import { frontendTrackDetails } from "@/data/frontend/tracksIndex";
import FrontendTrackHubView from "./FrontendTrackHubView";
import { 
  ArrowLeft, 
  BookOpen, 
  ShieldCheck, 
  Award, 
  Code, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";
interface TrackPageProps {
  params: Promise<{ "track-slug": string }>;
}

export async function generateMetadata({ params }: TrackPageProps) {
  const resolvedParams = await params;
  const trackSlug = resolvedParams["track-slug"];
  const trackDetailHub = frontendTrackDetails[trackSlug];

  if (trackDetailHub) {
    return {
      title: `${trackDetailHub.title} Interview Preparation & Architecture Hub | DevJam`,
      description: trackDetailHub.subtitle,
    };
  }

  const track = frontendTracks.find((t) => t.slug === trackSlug);
  if (!track) return {};
  return {
    title: `${track.title} | DevJam`,
    description: track.description,
  };
}

export async function generateStaticParams() {
  return frontendTracks.map((track) => ({
    "track-slug": track.slug,
  }));
}

// Map track slugs to related case studies slugs
const trackToCaseStudiesMap: Record<string, string[]> = {
  "web-platform-foundation": ["youtube-frontend-system-design", "netflix-frontend-system-design"],
  "component-engineering": ["enterprise-design-system"],
  "react-engineering": ["slack-microsoft-teams"],
  "nextjs-engineering": ["amazon-product-listing-page"],
  "state-management-server-state": ["swiggy-zomato-food-ordering", "whatsapp-web"],
  "api-design-for-frontend": ["ecommerce-checkout-frontend"],
  "frontend-architecture-fundamentals": ["notion-collaborative-editor", "jira-trello-board"],
  "micro-frontends": ["micro-frontend-retail-platform"],
  "frontend-performance-engineering": ["instagram-feed", "linkedin-feed"],
  "frontend-caching-architecture": ["trading-dashboard-system-design"],
  "frontend-observability-production": ["real-time-analytics-dashboard"],
  "accessibility-engineering": ["gmail-system-design"],
};

export default async function FrontendTrackDetailPage({ params }: TrackPageProps) {
  const resolvedParams = await params;
  const trackSlug = resolvedParams["track-slug"];
  const track = frontendTracks.find((t) => t.slug === trackSlug);

  if (!track) {
    notFound();
  }

  // Intercept and load structured interview hub view if registered
  const trackDetailHub = frontendTrackDetails[trackSlug];
  if (trackDetailHub) {
    return (
      <>
        <Navbar />
        <FrontendTrackHubView
          trackDetailHub={trackDetailHub}
        />
        <Footer />
      </>
    );
  }

  // Get modules belonging to this track
  const trackModules = Object.values(frontendModules).filter(
    (m) => m.trackSlug === track.slug
  );

  // Get projects belonging to this track
  const trackProjects = Object.values(frontendProjects).filter(
    (p) => p.trackSlug === track.slug
  );

  // Get submodules belonging to this track
  const trackSubmodules = Object.values(frontendSubmodules).filter(
    (sub) => sub.trackSlug === track.slug
  );

  // Get outcomes belonging to this track
  const trackOutcomes = frontendOutcomes[track.slug] || [];

  // Get related case studies
  const relatedCaseStudySlugs = trackToCaseStudiesMap[track.slug] || [];
  const relatedCaseStudies = Object.values(frontendCaseStudies).filter(cs => {
    if (track.slug === "real-world-frontend-case-studies") return true;
    return relatedCaseStudySlugs.includes(cs.slug);
  });

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
              href="/roadmaps/frontend-architect"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Frontend Architect
            </Link>
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Track Details
            </span>
          </div>

          <PageHero
            kicker="Frontend Architect Curriculum"
            title={track.title}
            description={track.description}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column (8/12 width) - Modules, Submodules, Projects, Case Studies */}
            <div className="lg:col-span-8 flex flex-col gap-8 w-full">
              
              {/* Syllabus Modules */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-5">
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
                          <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded border border-cyan-400/20 text-cyan-400 bg-cyan-400/5">
                            Module
                          </span>
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

              {/* Submodules / Topics detail */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Sparkles className="h-4 w-4" />
                  Detailed Topics & Submodules
                </h3>

                {trackSubmodules.length > 0 ? (
                  <div className="flex flex-col gap-6">
                    {trackSubmodules.map((sub) => (
                      <div 
                        key={sub.id} 
                        className="border-l-2 border-cyan-500/40 pl-4 py-1 flex flex-col gap-2"
                      >
                        <h4 className="text-xs font-extrabold text-foreground">{sub.title}</h4>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {sub.description}
                        </p>
                        <div className="bg-[#050811] p-3 rounded-lg border border-card-border/40 mt-1 flex flex-col gap-2">
                          <div className="text-[10px] leading-relaxed">
                            <span className="text-cyan-400 font-bold font-mono">Why It Matters: </span>
                            <span className="text-text-muted">{sub.whyItMatters}</span>
                          </div>
                          <div className="text-[10px] leading-relaxed flex flex-wrap gap-1 items-center mt-1">
                            <span className="text-text-muted font-bold mr-1">Skills:</span>
                            {sub.whatYouWillLearn.map((s, i) => (
                              <span key={i} className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] text-foreground font-mono">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    Detailed submodules coming soon.
                  </div>
                )}
              </div>

              {/* Related Case Studies */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Award className="h-4 w-4" />
                  Related System Design Case Studies
                </h3>

                {relatedCaseStudies.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {relatedCaseStudies.map((cs) => (
                      <div
                        key={cs.slug}
                        className="p-5 rounded-xl border border-card-border bg-[#030712]/60 flex flex-col gap-4"
                      >
                        <div className="flex justify-between items-center gap-2 flex-wrap">
                          <span className="text-xs font-black text-foreground">{cs.title}</span>
                          <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded border border-orange-500/20 text-orange-400 bg-orange-500/5">
                            Case Study
                          </span>
                        </div>
                        
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {cs.subtitle}
                        </p>

                        {/* Metadata Row */}
                        <div className="flex flex-wrap gap-2 items-center text-[8px] font-mono font-bold">
                          <span className="bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-cyan-400 capitalize">
                            {cs.difficulty}
                          </span>
                          <span className="bg-slate-500/10 border border-slate-500/20 px-2 py-0.5 rounded text-text-muted">
                            {cs.estimatedReadTime} Read
                          </span>
                          <span className="bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded text-rose-400 uppercase">
                            {cs.interviewRelevance} Relevance
                          </span>
                        </div>

                        {/* Architecture Focus Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {cs.architectureFocus.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#050811] px-1.5 py-0.5 rounded border border-card-border/60 font-mono text-[8px] text-text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="border-t border-card-border/30 pt-3 flex justify-between items-center text-[10px] font-mono mt-1">
                          <span className="text-[9px] text-text-muted italic">
                            Category: {cs.category}
                          </span>
                          <Link
                            href={`/frontend-architect/case-studies/${cs.slug}`}
                            className="text-orange-500 hover:text-orange-400 font-extrabold flex items-center gap-1 group/link"
                          >
                            Read Full Case Study
                            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 text-orange-500" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    No related case studies mapped.
                  </div>
                )}
              </div>

              {/* Projects List */}
              <div className="premium-card rounded-2xl p-6 flex flex-col gap-5">
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
                          <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded border border-gray-500/20 text-text-muted bg-gray-500/5">
                            Project
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {p.description}
                        </p>
                        <div className="flex justify-between items-center flex-wrap gap-2 pt-2 border-t border-card-border/30 mt-1">
                          <div className="flex gap-2.5 flex-wrap">
                            {p.techStack.map((tech) => (
                              <span key={tech} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/40 font-mono text-[9px] text-text-muted">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="text-[9px] font-mono text-cyan-400">
                            {p.concept}
                          </span>
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

            {/* Right Column (4/12 width) - Details and Metadata Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Metadata Details Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-4">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Track Details
                </h4>
                
                <div className="flex flex-col gap-3.5 text-[10px] text-text-muted">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Difficulty:</span>
                    <span className="bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-cyan-400 capitalize">
                      {track.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Estimated Time:</span>
                    <span className="text-foreground font-mono flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-orange-500" />
                      {track.estimatedHours} Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Interview Weight:</span>
                    <span className="bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-rose-400 uppercase">
                      {track.interviewRelevance}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prerequisites Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Prerequisites
                </h4>
                {track.prerequisites && track.prerequisites.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {track.prerequisites.map((prereqSlug) => {
                      const prereqTrack = frontendTracks.find(t => t.slug === prereqSlug);
                      return prereqTrack ? (
                        <Link
                          key={prereqSlug}
                          href={`/frontend-architect/${prereqSlug}`}
                          className="flex items-center justify-between p-2.5 rounded bg-[#050811] border border-card-border/60 hover:border-cyan-400/40 transition-colors text-[10px] text-foreground font-semibold"
                        >
                          <span>{prereqTrack.title}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        </Link>
                      ) : (
                        <span key={prereqSlug} className="text-[9px] text-text-muted capitalize">
                          {prereqSlug.replace(/-/g, " ")}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-[10px] text-text-muted italic flex items-center gap-1.5 py-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    No prerequisites required.
                  </div>
                )}
              </div>

              {/* Learning Outcomes */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Learning Outcomes
                </h4>
                {trackOutcomes.length > 0 ? (
                  <ul className="flex flex-col gap-2.5 text-[10px] text-text-muted">
                    {trackOutcomes.map((o, idx) => (
                      <li key={idx} className="flex gap-2 leading-relaxed">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-[10px] text-text-muted italic">
                    Outcomes mapping coming soon.
                  </div>
                )}
              </div>

            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
