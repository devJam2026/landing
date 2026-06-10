"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Cpu, Globe, Key, Layers, Terminal } from "lucide-react";
import { articles } from "../data/articles";

const iconMap = {
  Cpu,
  Key,
  Layers,
  Globe,
  BookOpen,
  Terminal,
};

export default function Articles() {
  const latestArticles = articles.slice(0, 4);

  return (
    <div id="articles" className="w-full flex flex-col scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Latest Articles
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Technical Writing & Notes
          </h2>
        </div>
        <Link
          href="/articles"
          className="text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:text-orange-500 flex items-center gap-1 transition-colors duration-200"
        >
          View all articles <span className="text-[10px]">→</span>
        </Link>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {latestArticles.map((article) => {
          const Icon = iconMap[article.iconName] || BookOpen;
          const iconBg = article.isCyan
            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
            : "bg-orange-500/10 text-orange-500 border-orange-500/20";

          return (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={`group flex gap-4 p-5 rounded-xl transition-all duration-300 ${
                article.isCyan ? "premium-card premium-card-cyan" : "premium-card"
              }`}
            >
              {/* Left Column Icon */}
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${iconBg} shadow-inner`}>
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
                  <h3 className={`text-base font-bold text-foreground transition-colors duration-200 ${
                    article.isCyan ? "group-hover:text-cyan-400" : "group-hover:text-orange-500"
                  }`}>
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
            </Link>
          );
        })}
      </div>

    </div>
  );
}
