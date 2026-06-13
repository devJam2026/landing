import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  ArrowLeft, 
  Clock, 
  Calendar,
  BookOpen, 
  CheckCircle2, 
  FileText, 
  LayoutGrid
} from "lucide-react";
import { frontendArticles } from "@/data/frontend/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(frontendArticles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = frontendArticles[slug];
  if (!article) return {};

  return {
    title: `${article.title} | DevJam`,
    description: article.description,
    keywords: article.tags.join(", "),
  };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  let styles = "bg-slate-500/10 border-slate-500/20 text-slate-400";
  switch (difficulty.toLowerCase()) {
    case "beginner":
      styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      break;
    case "intermediate":
      styles = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      break;
    case "senior":
      styles = "bg-violet-500/10 border-violet-500/20 text-violet-400";
      break;
    case "architect":
      styles = "bg-amber-500/10 border-amber-500/20 text-amber-400";
      break;
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold capitalize ${styles}`}>
      {difficulty}
    </span>
  );
}

function renderTextWithFormatting(text: string) {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-extrabold text-foreground text-orange-500">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="bg-[#0c1322] border border-card-border/60 px-1.5 py-0.5 rounded font-mono text-cyan-400 text-[11px] font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default async function FrontendArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = frontendArticles[slug];

  if (!article) {
    notFound();
  }

  // Generate Table of Contents items dynamically from H2 headings
  const tocItems = article.sections
    .filter((sec) => sec.type === "heading" && sec.level === 2)
    .map((sec) => {
      const headingText = (sec as { text: string }).text;
      return {
        id: headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        label: headingText,
      };
    });

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-bold text-text-muted">
            <div className="flex items-center gap-4">
              <Link 
                href="/roadmaps/frontend-architect" 
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Roadmap
              </Link>
              <span className="opacity-40">/</span>
              <Link 
                href={`/frontend-architect/${article.track}`} 
                className="hover:text-foreground transition-colors"
              >
                Track Detail
              </Link>
            </div>
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              Article Guide
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-5 border-b border-card-border/40 pb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <DifficultyBadge difficulty={article.difficulty} />
              <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2.5 py-0.5 text-[10px] font-mono text-text-muted">
                <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-card-border bg-[#030712] px-2.5 py-0.5 text-[10px] font-mono text-text-muted">
                <Calendar className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              {article.title}
            </h1>
            
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs border-t border-card-border/40 pt-4 mt-2">
              <span className="text-text-muted font-bold">Tags:</span>
              <div className="flex gap-1.5 flex-wrap">
                {article.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Table of Contents and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full relative">
            
            {/* Sticky Sidebar Table of Contents */}
            {tocItems.length > 0 && (
              <aside className="lg:col-span-3 sticky top-24 hidden lg:flex flex-col gap-4 bg-[#030712]/50 p-5 rounded-xl border border-card-border/40">
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-card-border/30 pb-2">
                  <BookOpen className="h-4 w-4" />
                  Guide Outline
                </h3>
                <nav className="flex flex-col gap-2 text-[11px] font-sans max-h-[70vh] overflow-y-auto scrollbar-thin">
                  {tocItems.map((section) => (
                    <a 
                      key={section.id} 
                      href={`#${section.id}`} 
                      className="text-text-muted hover:text-cyan-400 transition-colors font-medium border-l border-card-border/40 pl-3 py-1 hover:border-cyan-400 truncate block"
                      title={section.label}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </aside>
            )}

            {/* Main Content Body */}
            <div className={`lg:col-span-9 flex flex-col gap-6 w-full text-foreground text-sm font-sans leading-relaxed`}>
              {article.sections.map((section, idx) => {
                switch (section.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                        {renderTextWithFormatting(section.text)}
                      </p>
                    );

                  case "heading":
                    const headingId = section.text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    if (section.level === 3) {
                      return (
                        <h3 
                          key={idx} 
                          className="text-sm sm:text-base font-bold text-foreground mt-4 mb-2 tracking-tight flex items-center gap-1.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {section.text}
                        </h3>
                      );
                    }
                    return (
                      <h2 
                        key={idx} 
                        id={headingId}
                        className="text-base sm:text-lg font-black text-foreground mt-8 mb-3 tracking-tight border-b border-card-border/40 pb-2 flex items-center gap-2 scroll-mt-24"
                      >
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        {section.text}
                      </h2>
                    );

                  case "blockquote":
                    return (
                      <div 
                        key={idx} 
                        className="relative border-l-4 border-orange-500 pl-4 py-3 my-4 bg-orange-500/5 rounded-r-xl border-t border-b border-r border-card-border/40"
                      >
                        <p className="italic text-gray-300 font-medium leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    );

                  case "list":
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-300 text-sm my-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {renderTextWithFormatting(item)}
                          </li>
                        ))}
                      </ul>
                    );

                  case "checklist":
                    return (
                      <ul key={idx} className="space-y-3 text-gray-300 text-sm my-4">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="mt-0.5 shrink-0 flex items-center justify-center rounded border border-orange-500/30 bg-orange-500/10 p-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" />
                            </span>
                            <span>{renderTextWithFormatting(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "code":
                    return (
                      <div 
                        key={idx} 
                        className="relative rounded-xl border border-card-border bg-[#030712] font-mono text-xs overflow-hidden shadow-inner my-4"
                      >
                        <div className="flex items-center justify-between px-4 py-2 border-b border-card-border/60 bg-[#080d19]">
                          <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">
                            {section.language || "code"}
                          </span>
                          <span className="text-[9px] text-text-muted/60 font-semibold font-mono">
                            {section.filename || "Editor"}
                          </span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-cyan-300 leading-relaxed scrollbar-thin">
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    );

                  case "table":
                    return (
                      <div 
                        key={idx} 
                        className="overflow-x-auto w-full border border-card-border/60 rounded-xl my-4 bg-[#030712]/20"
                      >
                        <table className="min-w-full divide-y divide-card-border/60 text-xs">
                          <thead className="bg-[#050811]/90">
                            <tr>
                              {section.headers.map((h, i) => (
                                <th key={i} className="px-4 py-2.5 text-left font-bold text-foreground uppercase tracking-wider">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-card-border/40 text-text-muted">
                            {section.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#050811]/10 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-2.5 leading-relaxed">
                                    {renderTextWithFormatting(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );

                  case "diagram":
                    return (
                      <div 
                        key={idx} 
                        className="relative rounded-xl border border-cyan-500/20 bg-[#030712] p-5 font-mono text-xs overflow-x-auto my-4 text-cyan-400/90 leading-relaxed shadow-lg shadow-cyan-950/20"
                      >
                        <div className="absolute top-2 right-4 text-[9px] text-cyan-500/50 uppercase tracking-widest font-mono select-none">
                          {section.diagramType} diagram
                        </div>
                        <pre className="whitespace-pre select-all">{section.content}</pre>
                      </div>
                    );

                  default:
                    return null;
                }
              })}

              {/* Bottom Navigation */}
              <div className="border-t border-card-border/40 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  href={`/frontend-architect/${article.track}`}
                  className="flex items-center gap-2 p-3 rounded-xl border border-card-border hover:border-cyan-400/30 bg-[#050811]/20 hover:bg-[#050811]/45 transition-all text-xs font-mono font-bold text-cyan-400"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Track Dashboard
                </Link>

                <Link 
                  href="/roadmaps/frontend-architect"
                  className="flex items-center gap-2 p-3 rounded-xl border border-card-border hover:border-orange-500/30 bg-[#050811]/20 hover:bg-[#050811]/45 transition-all text-xs font-mono font-bold text-orange-500"
                >
                  <LayoutGrid className="h-4 w-4" />
                  All Syllabus Tracks
                </Link>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
