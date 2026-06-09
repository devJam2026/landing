import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { Cpu, Key, Layers, Globe, BookOpen, Terminal } from "lucide-react";

export default function ArticlesPage() {
  const categories = [
    {
      name: "LLM Basics",
      articles: [
        {
          title: "What is Tokenization?",
          description: "Learn how text is broken down into tokens, vocabulary indexes, and embeddings space for LLM input pipelines.",
          date: "May 20, 2026",
          readTime: "6 min read",
          icon: Cpu,
          iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
          isCyan: false,
        },
      ],
    },
    {
      name: "Transformers",
      articles: [
        {
          title: "How Attention Works?",
          description: "A comprehensive visual guide to Query, Key, and Value projections and causal masking operations inside transformers.",
          date: "May 15, 2026",
          readTime: "8 min read",
          icon: Key,
          iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
          isCyan: false,
        },
      ],
    },
    {
      name: "RAG",
      articles: [
        {
          title: "Vector Databases & Chunking",
          description: "Optimize semantic search retrieval quality by evaluating overlapping character chunk splits and metadata keys.",
          date: "Jun 01, 2026",
          readTime: "10 min read",
          icon: Layers,
          iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
          isCyan: false,
        },
      ],
    },
    {
      name: "Frontend Architecture",
      articles: [
        {
          title: "Micro Frontends Architecture",
          description: "Design, build, federate, and scale decoupled user interface components using Next.js and Module Federation.",
          date: "May 10, 2026",
          readTime: "10 min read",
          icon: Globe,
          iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
          isCyan: true,
        },
      ],
    },
    {
      name: "System Design",
      articles: [
        {
          title: "Rate Limiter Deep Dive",
          description: "Design fault-tolerant rate limiting microservices capable of scaling to support millions of client requests.",
          date: "May 05, 2026",
          readTime: "12 min read",
          icon: BookOpen,
          iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
          isCyan: false,
        },
      ],
    },
    {
      name: "DevOps",
      articles: [
        {
          title: "Dockerizing Node Pipelines",
          description: "Learn how to write multi-stage Dockerfiles, minimize container size, cache dependencies, and deploy zero-downtime builds.",
          date: "Jun 04, 2026",
          readTime: "7 min read",
          icon: Terminal,
          iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
          isCyan: true,
        },
      ],
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
            kicker="DevJam Articles"
            title="Technical Writing"
            description="Deep dives into engineering concepts. No fluff, just source code, architecture schematics, and clean analysis notes."
          />

          {/* Grouped Categories Listing */}
          <div className="flex flex-col gap-12 w-full">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-card-border pb-2.5">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  <h3 className="text-sm font-bold font-mono text-foreground uppercase tracking-widest">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {category.articles.map((article) => {
                    const Icon = article.icon;
                    return (
                      <Card key={article.title} isCyan={article.isCyan} className="cursor-not-allowed">
                        <div className="flex gap-4 items-start">
                          {/* Left Column Icon */}
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${article.iconBg} shadow-inner`}>
                            <Icon className="h-5 w-5" />
                          </div>

                          {/* Right Column Content */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[8px] font-mono text-text-muted font-bold">
                                  {article.readTime}
                                </span>
                              </div>
                              <h4 className={`text-base font-bold text-foreground transition-colors duration-200 ${
                                article.isCyan ? "group-hover:text-cyan-400" : "group-hover:text-orange-500"
                              }`}>
                                {article.title}
                              </h4>
                              <p className="text-xs text-text-muted leading-relaxed mt-1.5">
                                {article.description}
                              </p>
                            </div>
                            
                            <div className="text-[10px] text-text-muted font-mono mt-4">
                              {article.date}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
