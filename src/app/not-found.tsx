import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300 flex flex-col justify-between">
      <Navbar />

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
            <h1 className="text-3xl font-black text-foreground">
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

      <Footer />
    </div>
  );
}
