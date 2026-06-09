import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import ArchitectureDiagram from "@/components/architecture-diagram";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import InteractiveLabs from "@/components/interactive-labs";
import { Terminal, GitFork } from "lucide-react";

export default function SystemDesignSimulatorLabPage() {
  const techs = ["TypeScript", "React", "Canvas API", "Tailwind CSS", "GitHub"];
  const concepts = [
    "Load balancing strategies (Round Robin vs Least Connections)",
    "Rate limiting thresholds (Token Bucket & Leaky Bucket)",
    "CDN edge caching layers & TTL cache eviction",
    "Read/Write replica splitting & database partitions",
    "Replication lag & eventual consistency anomalies"
  ];
  const features = [
    "Dynamic client request generator buttons triggering packet streams.",
    "Animated packet pathways demonstrating proxy routing behaviors.",
    "CDN node indicators flashing hit/miss states during lookups.",
    "Token Bucket rate limiter dropping packet overflows visually.",
    "Replication delay sliders adjusting write syncing lag times."
  ];
  const improvements = [
    "Add consistent hashing ring topology visualizers.",
    "Implement automated circuit breaker failure simulations.",
    "Add network latency sliders to simulate global packet loss.",
    "Export system load throughput statistics charts."
  ];

  const interviewQuote = "I designed this simulator to visualize request flows in a distributed topology. Request packets are generated and routed to the load balancer, which paths them to servers. Cache lookups trigger hits or misses, and writes are routed to databases. This project helped me grasp CDN caching strategies, load balancing policies, and replication anomalies.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="System Design Simulator"
            description="Run request traffic through a distributed network model. Adjust replication lag, trigger rate limit blocks, and analyze CDN hit rates."
            github="https://github.com/devJam2026"
            live="/labs/system-design-simulator"
            status="In Progress"
            outcome="Deconstruct request pathing, load balancing configurations, rate limiters bucket states, and replica routing patterns."
            isCyan={false}
          />

          {/* ACTIVE TERMINAL SIMULATOR */}
          <div className="border border-card-border/60 bg-[#060a13]/80 rounded-2xl p-6 shadow-2xl mb-4">
            <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Active Lab Terminal</span>
              <span className="text-[9px] bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-bold text-amber-500 uppercase">IN PROGRESS</span>
            </div>
            <InteractiveLabs singleLab="system" />
          </div>

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Visualizing Network Topologies" isCyan={false}>
              <p>
                Distributed systems are complex and hard to visualize. Reading about load balancers, rate limiting, and database lag in books is helpful, but developers struggle to diagnose bottlenecks, eventual consistency bugs, or caching policies in production environments.
              </p>
              <p className="mt-3">
                This simulator makes network configurations visual. Developers can run streams of requests, watch packets travel across routes, and inspect cache hit ratios or write replication lag anomalies in real time.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Proxy Routing & Scalability Rules" isCyan={false}>
              <p className="mb-4">
                This module focuses on packet pathing and data synchronization concepts:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {concepts.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 3. What I built */}
            <ProjectSection kicker="03. What I built" title="Network Topology Workspace" isCyan={false}>
              <p className="mb-4">
                A canvas-based interactive simulation workspace including:
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-orange-500 font-bold mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 4. Architecture Diagram */}
            <ProjectSection kicker="04. Architecture" title="System Topology" isCyan={false}>
              <div className="my-4">
                <ArchitectureDiagram projectType="context" isCyan={false} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={false}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 6 & 7. Links */}
            <ProjectSection kicker="06 & 07. Links" title="Source & Deploy" isCyan={false}>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <GitFork className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">GitHub Repository:</span>
                  <a
                    href="https://github.com/devJam2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    devJam2026
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-orange-500" />
                  <span className="text-text-muted">Live Lab Endpoint:</span>
                  <Link
                    href="/labs/system-design-simulator"
                    className="text-foreground hover:text-orange-500 hover:underline transition-all"
                  >
                    /labs/system-design-simulator
                  </Link>
                </div>
              </div>
            </ProjectSection>

            {/* 8. Interview Explanation */}
            <ProjectSection kicker="08. Interview Explanation" title="Defending the Design" isCyan={false}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={false} />
            </ProjectSection>

            {/* 9. Future Improvements */}
            <ProjectSection kicker="09. Future Improvements" title="Roadmap Extensions" isCyan={false}>
              <FutureImprovementList improvements={improvements} isCyan={false} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
