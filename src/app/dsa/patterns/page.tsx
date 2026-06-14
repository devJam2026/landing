import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PatternCoverageClient from "./PatternCoverageClient";

export const metadata: Metadata = {
  title: "DSA Pattern Coverage Audit | DevJam",
  description: "Explore algorithmic templates, optimization triggers, and quality coverage metrics for FAANG code interviews.",
  keywords: ["DSA Patterns", "Sliding Window", "Two Pointers", "Binary Search", "Segment Tree", "Interval DP"],
};

export default function PatternCoveragePage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glowing visual background */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <PatternCoverageClient />
      </main>

      <Footer />
    </div>
  );
}
