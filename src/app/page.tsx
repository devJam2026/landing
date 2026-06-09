import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CurrentJourney from "@/components/current-journey";
import WhyDevJam from "@/components/why-devjam";
import LearningTracks from "@/components/learning-tracks";
import LearningRoadmap from "@/components/learning-roadmap";
import InteractiveLabs from "@/components/interactive-labs";
import FeaturedProjects from "@/components/featured-projects";
import ArchitectureNotes from "@/components/architecture-notes";
import Articles from "@/components/articles";
import GithubActivity from "@/components/github-activity";
import CtaBanner from "@/components/cta-banner";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-violet-600/30 selection:text-violet-200 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative flex flex-col pt-20">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 1a. Current Journey Dashboard & Active Build */}
        <CurrentJourney />

        {/* 1b. Why DevJam (Value Proposition) */}
        <WhyDevJam />

        {/* 2. Explore Learning Tracks (Four Pillars) */}
        <LearningTracks />

        {/* 2a. Curriculum Learning Roadmap Flow */}
        <LearningRoadmap />

        {/* 3. Interactive Labs (Live visualizers) */}
        <InteractiveLabs />

        {/* 3a. Open Source Featured Projects */}
        <FeaturedProjects />

        {/* 3b. Architecture Notes & Blueprints */}
        <ArchitectureNotes />

        {/* 4. Articles and GitHub Activity Side-by-Side (Matches Mockup) */}
        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-12 scroll-mt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Latest Articles - Left Column (5/12 width) */}
            <div className="lg:col-span-5 w-full">
              <Articles />
            </div>
            
            {/* GitHub Activity Heatmap & Stats - Right Column (7/12 width) */}
            <div className="lg:col-span-7 w-full">
              <GithubActivity />
            </div>

          </div>
        </section>

        {/* Banner CTA */}
        <CtaBanner />

        {/* 5. About DevJam */}
        <About />

      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
