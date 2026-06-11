import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { dsaProblems } from "../../../../data/dsa/problems";
import PracticeConsole from "./PracticeConsole";

export async function generateStaticParams() {
  return dsaProblems.map((prob) => ({
    "problem-slug": prob.slug,
  }));
}

export default async function ProblemPracticePage({
  params,
}: {
  params: Promise<{ "problem-slug": string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams["problem-slug"];
  const problem = dsaProblems.find((item) => item.slug === slug);

  if (!problem) {
    return (
      <div className="relative min-h-screen bg-[#030712] flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-2xl font-black text-foreground">Problem Not Found</h2>
          <Link href="/dsa/practice" className="mt-4 text-xs font-bold text-orange-500 hover:underline">
            Back to Problem Explorer
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Visual background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <PracticeConsole problem={problem} />
      </main>

      <Footer />
    </div>
  );
}
