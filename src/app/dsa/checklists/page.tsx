import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChecklistsOverviewClient from "./ChecklistsOverviewClient";

export const metadata: Metadata = {
  title: "DSA High-Frequency Interview Checklists | DevJam",
  description: "Master high-frequency coding patterns with curated checklists including Blind 75, NeetCode 150, and LeetCode Top Interview 150.",
  keywords: [
    "Blind 75",
    "NeetCode 150",
    "LeetCode Top Interview 150",
    "DSA Checklist",
    "Coding Interview Practice",
    "FAANG Preparation",
    "Software Engineer Roadmap"
  ],
  openGraph: {
    title: "DSA High-Frequency Interview Checklists | DevJam",
    description: "Curated lists of essential algorithms and coding patterns for technical interviews.",
    type: "website",
  }
};

export default function ChecklistsOverviewPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <ChecklistsOverviewClient />
      </main>

      <Footer />
    </div>
  );
}
