import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import WhyDevJam from "../components/why-devjam";
import LearningTracks from "../components/learning-tracks";
import FeaturedProjects from "../components/featured-projects";
import LearningMethodology from "../components/methodology";
import InteractiveLabs from "../components/interactive-labs";
import FutureRoadmaps from "../components/future-roadmaps";
import OpenSourceSection from "../components/open-source";
import Articles from "../components/articles";
import GithubActivity from "../components/github-activity";
import CtaBanner from "../components/cta-banner";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative flex flex-col pt-20">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Vision Section */}
        <WhyDevJam />

        {/* 3. Pillars Section */}
        <LearningTracks />

        {/* 4. Featured Projects Section */}
        <FeaturedProjects />

        {/* 5. Learning Methodology Section */}
        <LearningMethodology />

        {/* Interactive Labs Section */}
        <InteractiveLabs />

        {/* 6. Future Roadmaps Section */}
        <FutureRoadmaps />

        {/* 7. Open Source Section */}
        <OpenSourceSection />

        {/* Latest Articles & GitHub Activity Side-by-Side */}
        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 scroll-mt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Latest Articles */}
            <div className="lg:col-span-5 w-full">
              <Articles />
            </div>
            
            {/* GitHub Activity Heatmap & Stats */}
            <div className="lg:col-span-7 w-full">
              <GithubActivity />
            </div>

          </div>
        </section>

        {/* Action Banner CTA */}
        <CtaBanner />

      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
