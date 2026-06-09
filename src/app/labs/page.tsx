import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import InteractiveLabs from "@/components/interactive-labs";
import Card from "@/components/card";
import { FolderGit, Activity, CheckCircle, Clock } from "lucide-react";

export default function LabsPage() {
  const allLabs = [
    {
      name: "Tokenizer Visualizer",
      status: "Active",
      goal: "Understand how BPE (Byte Pair Encoding) converts text into token IDs, visual offsets, and context window percentages for LLM ingestion.",
      tech: ["TypeScript", "React 19", "Tailwind CSS"],
      github: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      live: "#labs-console",
      isCyan: false,
    },
    {
      name: "React Rendering Visualizer",
      status: "Active",
      goal: "Visualize standard React component rendering flow, state synchronization, memoized nodes, and virtual DOM tree reconciliation.",
      tech: ["React 19", "TypeScript", "Framer Motion"],
      github: "https://github.com/devJam2026/landing",
      live: "#labs-console",
      isCyan: true,
    },
    {
      name: "System Design Simulator",
      status: "In Progress",
      goal: "Simulate distributed client request flow, database replication lag, CDN caching, and rate limiting actions under heavy traffic load.",
      tech: ["TypeScript", "React", "Canvas API"],
      github: "https://github.com/devJam2026",
      live: "#labs-console",
      isCyan: false,
    },
    {
      name: "CI/CD Pipeline Visualizer",
      status: "Active",
      goal: "Visualize continuous integration steps, including environment setup, dependencies caching, lint checks, unit tests, and production CD deployment flow.",
      tech: ["GitHub Actions", "Docker", "YAML"],
      github: "https://github.com/devJam2026/landing",
      live: "#labs-console",
      isCyan: true,
    },
  ];

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
            kicker="DevJam Labs"
            title="Interactive Visual Labs"
            description="Explore software engineering concepts visually. Tweak parameters, execute modules, and reconcile state in real time."
          />

          {/* Directory of Labs list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-16">
            {allLabs.map((lab) => {
              const isActive = lab.status === "Active";
              return (
                <Card key={lab.name} isCyan={lab.isCyan}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border flex items-center gap-1 ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {isActive ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3 animate-pulse" />
                        )}
                        {lab.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {lab.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-6">
                      {lab.goal}
                    </p>

                    {/* Tech Stack pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {lab.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-bold text-text-muted/90 bg-input-bg border border-card-border/50 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center justify-between border-t border-card-border pt-4 mt-auto">
                    <a
                      href={lab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <FolderGit className="h-4 w-4" />
                      Source
                    </a>
                    {isActive ? (
                      <a
                        href={lab.live}
                        className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                          lab.isCyan
                            ? "text-cyan-400 hover:text-cyan-300"
                            : "text-orange-500 hover:text-orange-400"
                        }`}
                      >
                        Interactive Console
                        <Activity className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-text-muted/60 flex items-center gap-1">
                        Deployment Pending
                        <Clock className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Interactive Playgrounds embedded below */}
          <div id="labs-console" className="border-t border-card-border pt-12">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                Active Playgrounds
              </span>
              <h2 className="text-3xl font-black text-foreground mt-2">
                Launch Lab Terminals
              </h2>
            </div>
            <InteractiveLabs />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
