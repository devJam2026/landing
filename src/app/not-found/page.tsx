import React from "react";
import Link from "next/link";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden text-text-main font-sans flex flex-col justify-between">
      
      {/* Simple Static Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#030712]/75 backdrop-blur-md shadow-lg">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 text-white font-mono text-xl font-bold">
                  &lt;/&gt;
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-wider text-white">
                    DEV<span className="text-orange-500">JAM</span>
                  </span>
                  <span className="text-[10px] text-text-muted font-medium">
                    Engineering Labs for Curious Minds
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Home</Link>
              <Link href="/projects" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Projects</Link>
              <Link href="/labs" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Labs</Link>
              <Link href="/roadmaps" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Roadmaps</Link>
              <Link href="/articles" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Articles</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700 transition-all duration-200"
              >
                Explore Projects →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Body */}
      <main className="relative flex flex-col items-center justify-center pt-32 pb-20 flex-grow px-4">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl -z-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-3xl -z-10" />

        <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500 shadow-lg shadow-orange-950/20">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-black text-orange-500 uppercase tracking-widest">
              Error 404
            </span>
            <h1 className="text-3xl font-black text-white">
              Page Not Found
            </h1>
            <p className="text-xs text-text-muted leading-relaxed">
              The syllabus track, lab playground, or project dashboard you are looking for does not exist or is currently undergoing local system compilation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/20 transition-all cursor-pointer"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
            <Link
              href="/roadmaps"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-[#050811] hover:bg-[#070b16] px-5 py-3 text-xs font-bold text-foreground transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 text-cyan-400" />
              Back to Roadmaps
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Static Footer */}
      <footer className="border-t border-card-border bg-background py-8 text-text-muted transition-colors duration-300">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-orange-500 to-cyan-500 text-white font-mono text-sm font-bold">
                &lt;/&gt;
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-wider text-white">
                  DEV<span className="text-orange-500">JAM</span>
                </span>
                <span className="text-[8px] text-text-muted font-medium">
                  Engineering Labs for Curious Minds
                </span>
              </div>
            </div>
            <div className="text-xs">
              © {new Date().getFullYear()} DevJam. All rights reserved.
            </div>
            <div className="flex gap-4 text-xs font-semibold">
              <Link href="/projects" className="hover:text-orange-500 transition-colors">Projects</Link>
              <Link href="/labs" className="hover:text-orange-500 transition-colors">Labs</Link>
              <Link href="/roadmaps" className="hover:text-orange-500 transition-colors">Roadmaps</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
