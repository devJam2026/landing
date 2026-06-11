import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { ArrowLeft, BookOpen, Sparkles, HelpCircle, Code, ListFilter, AlertCircle, Compass } from "lucide-react";
import { dsaConcepts } from "@/data/dsa/concepts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(dsaConcepts).map((slug) => ({
    slug,
  }));
}

export default async function DsaConceptDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const concept = dsaConcepts[resolvedParams.slug];

  if (!concept) {
    notFound();
  }

  // Parse complexity markdown table into clean TSX structure for styled rendering
  const parseTable = (markdown: string) => {
    const lines = markdown.split("\n").filter(line => line.trim() && !line.includes(":---"));
    const rows = lines.map(line => line.split("|").map(cell => cell.trim()).filter(Boolean));
    if (rows.length === 0) return null;
    const headers = rows[0];
    const dataRows = rows.slice(1);
    return (
      <div className="overflow-x-auto rounded-xl border border-card-border/60 bg-[#030712] shadow-inner mt-3">
        <table className="min-w-full text-left font-sans text-xs">
          <thead className="border-b border-card-border bg-[#050811] text-[10px] uppercase font-mono tracking-wider text-text-muted">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="px-5 py-3.5 font-bold">{header.replace(/\*\*/g, "")}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border/30">
            {dataRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[#060a13]/30 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-5 py-3 font-mono text-foreground">
                    {/* Render basic bold formatting */}
                    {cell.startsWith("**") && cell.endsWith("**") ? (
                      <strong className="text-orange-500 font-bold">{cell.replace(/\*\*/g, "")}</strong>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-60 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          
          {/* Breadcrumb / Back button */}
          <div className="flex items-center justify-between">
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to DSA Dashboard
            </Link>
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Concept Mastery
            </span>
          </div>

          <PageHero
            kicker="DSA Core Concept"
            title={concept.name}
            description={concept.overview}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-8 shadow-xl backdrop-blur-md">
            
            {/* 1. Why It Exists */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <BookOpen className="h-4 w-4" />
                Why It Exists
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {concept.whyExists}
              </p>
            </div>

            {/* 2. Intuition */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Intuition for Beginners
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans italic">
                &ldquo;{concept.intuition}&rdquo;
              </p>
            </div>

            {/* 3. Visualization */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Sparkles className="h-4 w-4" />
                Visual Explanation
              </h3>
              <div className="relative border border-card-border/60 bg-[#030712] rounded-xl p-4 overflow-x-auto shadow-inner">
                <pre className="font-mono text-[10px] leading-relaxed text-cyan-400 select-all">
                  {concept.visualization.trim()}
                </pre>
              </div>
            </div>

            {/* 4. Complexity */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Code className="h-4 w-4" />
                Complexity Analysis
              </h3>
              {parseTable(concept.complexity)}
            </div>

            {/* 5. Real World Applications */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Production & Real World Applications
              </h3>
              <ul className="flex flex-col gap-2.5 pl-1">
                {concept.realWorldApps.map((app, index) => (
                  <li key={index} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="text-cyan-400 font-bold shrink-0">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Common Patterns */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <ListFilter className="h-4 w-4" />
                Algorithmic Patterns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {concept.commonPatterns.map((pat, index) => (
                  <div key={index} className="p-3.5 rounded-lg border border-card-border bg-[#050811]/60 text-xs">
                    <span className="font-bold text-foreground block mb-1">{pat.name}</span>
                    <p className="text-[10px] text-text-muted leading-relaxed">{pat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Interview Discussion */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <HelpCircle className="h-4 w-4" />
                Defending the Design (Interview Q&A)
              </h3>
              <div className="flex flex-col gap-4">
                {concept.interviewDiscussion.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-xl border border-card-border bg-[#030712] p-4 text-xs">
                    <div className="font-bold text-foreground flex gap-2">
                      <span className="text-cyan-400">Q:</span>
                      <span>{item.question}</span>
                    </div>
                    <div className="text-text-muted leading-relaxed pl-4 border-l-2 border-orange-500/40">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Common Mistakes */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <AlertCircle className="h-4 w-4" />
                Common Traps & Mistakes
              </h3>
              <ul className="flex flex-col gap-2 pl-1">
                {concept.commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0">⚠️</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 9. Related Problems */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Code className="h-4 w-4" />
                Practice Problems Mapping
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {concept.relatedProblems.map((prob, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#030712] border border-card-border/60 rounded-lg px-3 py-2 text-xs font-mono">
                    <span className={`h-2 w-2 rounded-full ${prob.difficulty === "Easy" ? "bg-emerald-500" : prob.difficulty === "Medium" ? "bg-amber-500" : "bg-red-500"}`} />
                    <span className="text-foreground">{prob.name}</span>
                    {prob.link ? (
                      <Link
                        href={prob.link}
                        className="text-[10px] text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
                      >
                        Solve
                      </Link>
                    ) : (
                      <span className="text-[9px] text-text-muted italic">Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 10. Related Topics */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-card-border/40 pb-2">
                <Compass className="h-4 w-4" />
                Related Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {concept.relatedTopics.map((top, index) => (
                  <Link
                    key={index}
                    href={`/dsa/${top.slug}`}
                    className="rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 text-cyan-400 px-3 py-1 text-[10px] font-semibold transition-all"
                  >
                    {top.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Quick buttons links */}
          <div className="flex justify-between items-center mt-4">
            <Link
              href="/dsa/practice"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-extrabold text-white hover:bg-orange-700 shadow-lg shadow-orange-600/25 transition-all cursor-pointer"
            >
              Explore Practice Terminal
            </Link>
            <Link
              href="/dsa/patterns"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-400/5 hover:bg-cyan-400/10 px-5 py-3 text-xs font-extrabold text-cyan-400 transition-all cursor-pointer"
            >
              Run Diagnostic Engine
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
