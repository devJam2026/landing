"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { GithubIcon } from "./brand-icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  // --- Global Search State ---
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchItems = [
    { type: "Lab", title: "Tokenizer Visualizer", href: "#labs", desc: "Visualize how text is tokenized across LLMs" },
    { type: "Lab", title: "React Rendering Visualizer", href: "#labs", desc: "Understand component rendering & tree reconciliation" },
    { type: "Lab", title: "System Design Simulator", href: "#labs", desc: "Simulate load balancing & database queries" },
    { type: "Lab", title: "CI/CD Pipeline Visualizer", href: "#labs", desc: "Build & visualize build-test-deploy automation" },
    { type: "Article", title: "What is Tokenization?", href: "#articles", desc: "Breaking down tokens, vocabulary, and embeddings" },
    { type: "Article", title: "How Attention Works?", href: "#articles", desc: "A visual guide to attention mechanism in transformers" },
    { type: "Article", title: "Micro Frontends Architecture", href: "#articles", desc: "Design, build, and scale micro frontends the right way" },
    { type: "Article", title: "Rate Limiter Deep Dive", href: "#articles", desc: "Designing rate limiters scaling to millions of requests" },
    { type: "Roadmap", title: "AI Engineering Roadmap", href: "#tracks", desc: "From AI Foundations to Agent architectures" },
    { type: "Roadmap", title: "Frontend Mastery Roadmap", href: "#tracks", desc: "From core DOM/React to performance engineering" },
    { type: "Roadmap", title: "System Design Roadmap", href: "#tracks", desc: "From DNS/Caching to distributed storage" },
    { type: "Roadmap", title: "DevOps & CI/CD Roadmap", href: "#tracks", desc: "From Docker containers to multi-ring CD pipelines" },
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

  // Initialize theme client-side after mounting to avoid hydration mismatch
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Default to dark mode if not explicitly set to light previously
    const initialDark = storedTheme ? storedTheme === "dark" : true;

    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Labs", href: "#labs" },
    { name: "Roadmaps", href: "#tracks" },
    { name: "Articles", href: "#articles" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
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
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${activeTab === link.name ? "text-orange-500 dark:text-orange-400" : "text-text-muted hover:text-foreground"
                  }`}
              >
                {link.name}
                {activeTab === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50" />
                )}
              </a>
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

            {/* Smooth Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-foreground rounded-lg border border-card-border hover:bg-card-bg transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-cyan-400" />
              )}
            </button>

            <a
              href="#labs"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/35 transition-all duration-200"
            >
              Explore Labs
              <span className="ml-1.5 transition-transform duration-200 hover:translate-x-0.5">→</span>
            </a>
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
            {/* Theme Toggle in Mobile Bar */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-foreground rounded-lg border border-card-border transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-cyan-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-text-muted hover:text-foreground focus:outline-none"
              aria-expanded="false"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-card-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors duration-200 ${activeTab === link.name
                  ? "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-l-2 border-orange-500"
                  : "text-text-muted hover:bg-card-bg hover:text-foreground"
                }`}
            >
              {link.name}
            </a>
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
            <a
              href="#labs"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/25"
            >
              Explore Labs →
            </a>
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
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-card-border bg-[#0b0f19]/90 dark:bg-gray-950/90 backdrop-blur-xl p-5 shadow-2xl transition-all flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-card-border pb-3">
              <Search className="h-5 w-5 text-text-muted" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search labs, roadmaps, articles..."
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
