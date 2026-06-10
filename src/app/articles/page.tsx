import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { Cpu, Key, Layers, Globe, BookOpen, Terminal } from "lucide-react";
import { articles } from "../../data/articles";

const iconMap = {
  Cpu,
  Key,
  Layers,
  Globe,
  BookOpen,
  Terminal,
};

// Group articles by category
const categoryNames = Array.from(new Set(articles.map((art) => art.category)));
const categories = categoryNames.map((catName) => {
  return {
    name: catName,
    articles: articles.filter((art) => art.category === catName),
  };
});

export default function ArticlesPage() {
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
              <div id={category.name.toLowerCase().replace(/\s+/g, "-")} key={category.name} className="flex flex-col gap-4 scroll-mt-24">
                <div className="flex items-center gap-2 border-b border-card-border pb-2.5">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  <h3 className="text-sm font-bold font-mono text-foreground uppercase tracking-widest">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {category.articles.map((article) => {
                    const Icon = iconMap[article.iconName] || BookOpen;
                    const iconBg = article.isCyan
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                      : "bg-orange-500/10 text-orange-500 border-orange-500/20";
                    return (
                      <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
                        <Card isCyan={article.isCyan}>
                          <div className="flex gap-4 items-start">
                            {/* Left Column Icon */}
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${iconBg} shadow-inner`}>
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
                      </Link>
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
