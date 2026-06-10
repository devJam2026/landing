"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { GithubIcon } from "./brand-icons";
import { labs } from "../data/labs";
import { articles } from "../data/articles";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setActiveTab("Home");
    else if (pathname.startsWith("/labs")) setActiveTab("Labs");
    else if (pathname.startsWith("/roadmaps")) setActiveTab("Roadmaps");
    else if (pathname.startsWith("/articles")) setActiveTab("Articles");
    else if (pathname.startsWith("/projects")) setActiveTab("Projects");
    else if (pathname.startsWith("/about")) setActiveTab("About");
  }, [pathname]);


  // --- Global Search State ---
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchItems = [
    ...labs.map((lab) => ({
      type: "Lab",
      title: lab.name,
      href: `/labs/${lab.slug}`,
      desc: lab.goal,
    })),
    ...articles.map((article) => ({
      type: "Article",
      title: article.title,
      href: `/articles/${article.slug}`,
      desc: article.description,
    })),
    { type: "Roadmap", title: "LLM Foundation Roadmap", href: "/roadmaps/#llm-foundation", desc: "Master vector space, tokens, embeddings, and context window" },
    { type: "Roadmap", title: "AI Engineering Roadmap", href: "/roadmaps/#ai-engineer", desc: "From AI Foundations to Agent architectures" },
    { type: "Roadmap", title: "Frontend Mastery Roadmap", href: "/roadmaps/#frontend-architect", desc: "From core DOM/React to performance engineering" },
    { type: "Roadmap", title: "System Design Roadmap", href: "/roadmaps/#system-design", desc: "From DNS/Caching to distributed storage" },
    { type: "Roadmap", title: "DevOps & CI/CD Roadmap", href: "/roadmaps/#devops-ci-cd", desc: "From Docker containers to multi-ring CD pipelines" },
  ];

  // Autofocus input when modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Global hotkeys (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = searchQuery.trim() === ""
    ? []
    : searchItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Ensure HTML element always has dark mode class
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Labs", href: "/labs" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Articles", href: "/articles" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#030712]/75 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 text-white font-mono text-xl font-bold shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                &lt;/&gt;
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-foreground">
                  DEV<span className="text-orange-500">JAM</span>
                </span>
                <span className="text-[10px] text-text-muted font-medium">
                  Engineering Labs for Curious Minds
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${activeTab === link.name ? "text-orange-500 dark:text-orange-400" : "text-text-muted hover:text-foreground"
                  }`}
              >
                {link.name}
                {activeTab === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50" />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-text-muted hover:text-foreground rounded-lg border border-card-border hover:bg-card-bg transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <Search className="h-4 w-4" />
              <span className="text-[10px] font-bold text-text-muted/60 bg-card-border/35 px-1.5 py-0.5 rounded font-mono">Ctrl K</span>
            </button>

            <a
              href="https://github.com/devJam2026"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>



            <Link
              href="/labs"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700 hover:shadow-orange-600/35 transition-all duration-200"
            >
              Explore Labs
              <span className="ml-1.5 transition-transform duration-200 hover:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Button in Mobile bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-text-muted hover:text-foreground rounded-lg border border-card-border transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-text-muted hover:text-foreground focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.04] bg-[#030712]/95 backdrop-blur-xl px-6 pt-4 pb-8 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors duration-200 ${activeTab === link.name
                  ? "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-l-2 border-orange-500"
                  : "text-text-muted hover:bg-card-bg hover:text-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-card-border flex items-center justify-between px-3">
            <a
              href="https://github.com/devJam2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-foreground transition-colors duration-200"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <Link
              href="/labs"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-600/25 hover:bg-orange-700 transition-colors duration-200"
            >
              Explore Labs →
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal Backdrop */}
      {searchOpen && (
        <div className="fixed inset-0 z-55 flex items-start justify-center pt-20 px-4 sm:px-6 md:pt-32">
          {/* Blur backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSearchOpen(false)}
          />

          {/* Modal box */}
          <div 
            role="dialog"
            aria-modal="true"
            aria-label="Search content"
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-card-border bg-[#0b0f19]/90 dark:bg-gray-950/90 backdrop-blur-xl p-5 shadow-2xl transition-all flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-card-border pb-3">
              <Search className="h-5 w-5 text-text-muted" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search labs, roadmaps, articles..."
                aria-label="Search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground placeholder-text-muted focus:outline-none border-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-md hover:bg-card-border/40 text-text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results body */}
            <div className="max-h-72 overflow-y-auto flex flex-col gap-1.5 scrollbar-thin">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const tagColors =
                    item.type === "Lab"
                      ? "text-orange-500 dark:text-orange-400 bg-orange-500/10 border-orange-500/20"
                      : item.type === "Article"
                        ? "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                        : "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20";

                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex flex-col p-2.5 rounded-lg border border-transparent hover:border-card-border hover:bg-card-bg/50 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-foreground hover:text-orange-500 transition-colors">
                          {item.title}
                        </span>
                        <span className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border ${tagColors}`}>
                          {item.type}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </span>
                    </a>
                  );
                })
              ) : searchQuery.trim() !== "" ? (
                <div className="py-6 text-center text-xs text-text-muted">
                  No matching results found for &ldquo;{searchQuery}&rdquo;
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-text-muted flex flex-col gap-2">
                  <span>Type to search across DevJam</span>
                  <span className="text-[10px] opacity-60">e.g. tokenizer, attention, micro frontends, system design...</span>
                </div>
              )}
            </div>

            {/* Modal footer keyboard shortcuts */}
            <div className="flex items-center justify-between text-[9px] text-text-muted/70 border-t border-card-border pt-3 mt-1 font-mono">
              <span>ESC to close</span>
              <span>Select with click</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
