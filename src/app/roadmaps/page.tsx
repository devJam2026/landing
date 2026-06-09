import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import LearningRoadmap from "@/components/learning-roadmap";
import Card from "@/components/card";
import { Compass, BookOpen, Layers, Cpu, Terminal, CheckCircle2 } from "lucide-react";

export default function RoadmapsPage() {
  const roadmaps = [
    {
      name: "LLM Foundation",
      description: "Master basic vector architectures, tokenization vocabularies, embeddings, and context window mechanics.",
      topics: ["BPE & Byte Fallback", "Embeddings Space", "Softmax Optimization", "Attention Weighting"],
      outcome: "Build clean, scratch-level ingest pipelines and understand foundational token limits.",
      icon: BookOpen,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
    {
      name: "Frontend Architect",
      description: "Scale high-performance web applications using modern routing, code compilation, and micro frontend modules.",
      topics: ["Micro Frontends", "State Reconciliation", "Hydration Optimizations", "Webpack & Turbopack"],
      outcome: "Design resilient UI layouts capable of scaling to hundreds of developers.",
      icon: Layers,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
    },
    {
      name: "System Design",
      description: "Architect high-availability distributed backends with robust cache tiers, queue workers, and databases.",
      topics: ["Load Balancing", "DB Replication Lag", "Redis Caching Layers", "Sharding & Partitioning"],
      outcome: "Design architectures capable of scaling reliably to millions of active requests.",
      icon: Compass,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
    {
      name: "AI Engineer",
      description: "Transition from basic prompts to production multi-agent pipelines, RAG stores, and execution trees.",
      topics: ["Vector Store chunking", "Multi-Agent routing", "Tool usage trees", "Prompt evaluation"],
      outcome: "Deploy real-world AI assistants integrating multiple private API workflows.",
      icon: Cpu,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      isCyan: true,
    },
    {
      name: "DevOps/CI-CD",
      description: "Automate build, test, and release cycles using virtual containers, secure pipelines, and zero-downtime deploys.",
      topics: ["Containerization", "Test Pipelines", "AWS & Docker deploy", "Infrastructure as Code"],
      outcome: "Set up warning-free compiler check scripts and multi-ring canary deployments.",
      icon: Terminal,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      isCyan: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          <PageHero
            kicker="Learning Roadmaps"
            title="Curriculums & Paths"
            description="Accelerate your mastery. Explore step-by-step tracks designed to take you from foundational syntax to advanced production engineering."
          />

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-16">
            {roadmaps.map((roadmap) => {
              const Icon = roadmap.icon;
              return (
                <Card key={roadmap.name} isCyan={roadmap.isCyan}>
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${roadmap.iconColor} shadow-inner`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {roadmap.name}
                      </h3>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed mb-4">
                      {roadmap.description}
                    </p>

                    {/* Topics bullet list */}
                    <div className="mb-4">
                      <h4 className="text-[10px] uppercase font-bold text-text-muted tracking-wider mb-2">
                        Key Competencies
                      </h4>
                      <ul className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-text-muted">
                        {roadmap.topics.map((t) => (
                          <li key={t} className="flex items-center gap-1">
                            <span className={`h-1 w-1 rounded-full ${roadmap.isCyan ? "bg-cyan-400" : "bg-orange-500"}`} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcome footer */}
                  <div className="border-t border-card-border/60 pt-4 mt-auto">
                    <h4 className="text-[9px] uppercase font-bold text-text-muted tracking-widest mb-1">
                      Learning Outcome
                    </h4>
                    <p className="text-[10px] text-foreground leading-relaxed flex items-start gap-1">
                      <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${roadmap.isCyan ? "text-cyan-400" : "text-orange-500"}`} />
                      {roadmap.outcome}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Timeline syllabus explorer */}
          <div className="border-t border-card-border pt-12">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                Interactive Timeline
              </span>
              <h2 className="text-3xl font-black text-foreground mt-2">
                Syllabus Walkthrough
              </h2>
            </div>
            <LearningRoadmap />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
