import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  BookOpen, 
  Cpu, 
  Globe, 
  Key, 
  Layers, 
  Terminal, 
  ArrowLeft, 
  Clock, 
  Calendar 
} from "lucide-react";
import { articles } from "../../../data/articles";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Key,
  Layers,
  Globe,
  BookOpen,
  Terminal,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  const Icon = iconMap[article.iconName] || BookOpen;

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6 md:py-10 w-full">
          {/* Back button */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:text-orange-500 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded border flex items-center gap-1.5 ${
              article.isCyan
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                : "bg-orange-500/10 text-orange-500 border-orange-500/20"
            }`}>
              <Icon className="h-3.5 w-3.5" />
              {article.category}
            </span>
            <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-4 tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-sm sm:text-base text-text-muted mb-8 leading-relaxed">
            {article.description}
          </p>

          <div className="border-t border-card-border/60 my-6" />

          {/* Article Content */}
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-text-muted">
            {article.content.map((section, idx) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={idx} className="text-gray-300">
                      {section.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={idx} className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-2 tracking-tight border-b border-card-border/40 pb-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {section.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 text-gray-300">
                      {section.items?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                case "code":
                  return (
                    <div key={idx} className="relative rounded-xl border border-card-border bg-[#030712] font-mono text-xs overflow-hidden shadow-inner my-4">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-card-border/60 bg-[#080d19]">
                        <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">{section.language || "code"}</span>
                        <span className="text-[9px] text-text-muted/60 font-semibold font-mono">Editor</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-cyan-300 leading-relaxed scrollbar-thin">
                        <code>{section.code}</code>
                      </pre>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Footer Callout */}
          <div className="mt-16 p-6 sm:p-8 rounded-xl premium-card border border-card-border/60 bg-[#060a13]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">
                Want to play with this concept?
              </h3>
              <p className="text-xs text-text-muted max-w-md leading-relaxed">
                We build interactive visual terminals for tokenizers, rendering engines, rate limiters, and network topologies. Explore them live!
              </p>
            </div>
            <Link
              href="/labs"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all duration-200 shrink-0 cursor-pointer"
            >
              Open Interactive Labs →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
