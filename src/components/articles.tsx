"use client";

import React from "react";
import { BookOpen, Cpu, Globe, Key } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      title: "What is Tokenization?",
      description: "Breaking down tokens, vocabulary and embeddings.",
      date: "May 20, 2024",
      readTime: "6 min read",
      category: "AI Engineering",
      icon: Cpu,
      iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/10 dark:border-violet-500/20",
      slug: "what-is-tokenization",
    },
    {
      title: "How Attention Works?",
      description: "A visual guide to attention mechanism in transformers.",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "AI Engineering",
      icon: Key,
      iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/10 dark:border-violet-500/20",
      slug: "how-attention-works",
    },
    {
      title: "Micro Frontends Architecture",
      description: "Design, build and scale micro frontends the right way.",
      date: "May 10, 2024",
      readTime: "10 min read",
      category: "Frontend Engineering",
      icon: Globe,
      iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/10 dark:border-blue-500/20",
      slug: "micro-frontends-architecture",
    },
    {
      title: "Rate Limiter Deep Dive",
      description: "Designing rate limiters that scale to millions of requests.",
      date: "May 05, 2024",
      readTime: "12 min read",
      category: "System Design",
      icon: BookOpen,
      iconBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/10 dark:border-orange-500/20",
      slug: "rate-limiter-deep-dive",
    },
  ];

  return (
    <div id="articles" className="w-full flex flex-col scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase">
            Latest Articles
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Technical Writing & Notes
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 flex items-center gap-1 transition-colors duration-200 cursor-not-allowed"
        >
          View all articles <span className="text-[10px]">→</span>
        </a>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 gap-4 w-full">
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <a
              key={article.slug}
              href="#"
              className="group flex gap-4 p-5 rounded-xl border border-card-border bg-card-bg hover:border-violet-500/20 hover:bg-background/40 transition-all duration-300 cursor-not-allowed"
            >
              {/* Left Column Icon */}
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${article.iconBg} shadow-inner`}>
                <Icon className="h-5 w-5" />
              </div>

              {/* Right Column Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-text-muted">
                      {article.category}
                    </span>
                    <span className="text-[9px] text-text-muted font-mono">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    {article.description}
                  </p>
                </div>
                
                <div className="text-[10px] text-text-muted font-mono mt-4">
                  {article.date}
                </div>
              </div>
            </a>
          );
        })}
      </div>

    </div>
  );
}
