import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InterviewPrepClient from "./InterviewPrepClient";

export const metadata: Metadata = {
  title: "DSA Interview Defense Q&A | DevJam",
  description: "FAANG preparation with 105+ interview questions, complexity trade-offs, and pitfall analyses for software engineer candidates.",
  keywords: ["DSA Interview Questions", "FAANG Prep", "System Design Tradeoffs", "Big O Complexity", "Technical Interview Questions"],
};

export default function InterviewPrepPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <InterviewPrepClient />
      </main>

      <Footer />
    </div>
  );
}
