import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChecklistDetailClient from "./ChecklistDetailClient";
import { dsaChecklists } from "@/data/dsa/checklists";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const checklist = dsaChecklists.find(c => c.slug === resolvedParams.slug);
  
  if (!checklist) {
    return {
      title: "DSA Checklist | DevJam",
      description: "Conquer technical software engineer coding interviews with DevJam."
    };
  }

  return {
    title: `${checklist.title} Interview Checklist | DevJam`,
    description: `Track your progress for ${checklist.title}. Overview: ${checklist.description.substring(0, 150)}...`,
    keywords: [
      checklist.title,
      `${checklist.title} problems`,
      "DSA Interview Preparation",
      "Software Engineer coding practice",
      "LeetCode Tracker"
    ],
    openGraph: {
      title: `${checklist.title} Interview Checklist | DevJam`,
      description: checklist.description,
      type: "website",
    }
  };
}

export async function generateStaticParams() {
  return dsaChecklists.map((c) => ({
    slug: c.slug,
  }));
}

export default async function ChecklistDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const checklist = dsaChecklists.find(c => c.slug === resolvedParams.slug);

  if (!checklist) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background radial glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <ChecklistDetailClient checklist={checklist} />
      </main>

      <Footer />
    </div>
  );
}
