"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import InteractiveLabs from "@/components/interactive-labs";
import Card from "@/components/card";
import { FolderGit, Activity, CheckCircle, Clock, Search } from "lucide-react";
import { labs } from "../../data/labs";

export default function LabsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState("All");

  const allLabs = labs;

  const filteredLabs = allLabs.filter((lab) => {
    const matchesPillar = selectedPillar === "All" || lab.pillar === selectedPillar;
    const matchesQuery =
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.goal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPillar && matchesQuery;
  });

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

          {/* Search bar & Pillar filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 w-full">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search labs by name, goal, or tech..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-card-border bg-[#060a13]/60 text-xs text-foreground focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {["All", "AI Engineering", "Frontend Mastery", "System Design", "DevOps & CI/CD"].map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    selectedPillar === pillar
                      ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10"
                      : "bg-[#060a13]/40 border-card-border text-text-muted hover:text-foreground"
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>
          </div>

          {/* Directory of Labs list */}
          {filteredLabs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-16">
              {filteredLabs.map((lab) => {
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
                        <span className="text-[10px] text-text-muted font-semibold font-mono uppercase tracking-wider">{lab.pillar}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">
                        <Link href={`/labs/${lab.slug}`} className="hover:text-orange-500 dark:hover:text-cyan-400 transition-colors">
                          {lab.name}
                        </Link>
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
                    <div className="flex items-center justify-between border-t border-card-border/60 pt-4 mt-auto">
                      <a
                        href={lab.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
                      >
                        <FolderGit className="h-4 w-4" />
                        Source
                      </a>
                      <Link
                        href={`/labs/${lab.slug}`}
                        className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                          lab.isCyan
                            ? "text-cyan-400 hover:text-cyan-300"
                            : "text-orange-500 hover:text-orange-400"
                        }`}
                      >
                        Interactive Console
                        <Activity className="h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-text-muted border border-card-border/50 rounded-xl bg-[#060a13]/20 mb-16">
              No matching labs found for search query.
            </div>
          )}

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
