import React, { Suspense } from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProblemExplorerClient from "./ProblemExplorerClient";

export const metadata: Metadata = {
  title: "DSA Practice Terminal | DevJam",
  description: "Solve high-frequency coding interview problems with a live Monaco code editor, persistent state, and custom test assertions evaluation in JavaScript.",
  keywords: ["LeetCode Problems", "Coding Interview Practice", "JavaScript Editor", "Algorithm Practice Sandbox", "Two Sum", "Reverse Linked List"],
};

export default function ProblemExplorerPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <Suspense fallback={
          <div className="min-h-screen bg-[#030712] text-text-muted flex items-center justify-center text-xs">
            Loading Practice Terminal...
          </div>
        }>
          <ProblemExplorerClient />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
