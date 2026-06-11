"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { Cpu, Key, Layers, Globe, BookOpen, Terminal, Search, Clock } from "lucide-react";
import { articles } from "../../data/articles";

const iconMap = {
  Cpu,
  Key,
  Layers,
  Globe,
  BookOpen,
  Terminal,
};

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "LLM Basics", "Transformers", "RAG", "Frontend Architecture", "System Design", "DevOps"];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

          {/* Search bar & Category filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 w-full">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, description, or category..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-card-border bg-[#060a13]/60 text-xs text-foreground focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    selectedCategory === category
                      ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10"
                      : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
              {filteredArticles.map((article) => {
                const Icon = iconMap[article.iconName] || BookOpen;
                const iconBg = article.isCyan
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                  : "bg-orange-500/10 text-orange-500 border-orange-500/20";
                return (
                  <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
                    <Card isCyan={article.isCyan}>
                      <div className="flex gap-4 items-start h-full">
                        {/* Left Column Icon */}
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${iconBg} shadow-inner`}>
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Right Column Content */}
                        <div className="flex-1 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${
                                article.isCyan 
                                  ? "text-cyan-400 bg-cyan-400/5 border-cyan-500/10" 
                                  : "text-orange-500 bg-orange-500/5 border-orange-500/10"
                              }`}>
                                {article.category}
                              </span>
                              <span className="text-[10px] font-mono text-text-muted flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {article.readTime}
                              </span>
                            </div>
                            <h4 className={`text-base font-bold text-foreground transition-colors duration-200 ${
                              article.isCyan ? "group-hover:text-cyan-400" : "group-hover:text-orange-500"
                            }`}>
                              {article.title}
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed mt-2">
                              {article.description}
                            </p>
                          </div>
                          
                          <div className="text-[10px] text-text-muted font-mono mt-4 flex items-center justify-between border-t border-card-border/60 pt-3">
                            <span>{article.date}</span>
                            <span className={`text-[10px] font-bold flex items-center gap-1 transition-colors ${
                              article.isCyan ? "text-cyan-400 group-hover:text-cyan-300" : "text-orange-500 group-hover:text-orange-400"
                            }`}>
                              Read Article
                              <span className="text-[9px]">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-text-muted border border-card-border/50 rounded-xl bg-[#060a13]/20 mb-12">
              No matching articles found for search query or filter.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
