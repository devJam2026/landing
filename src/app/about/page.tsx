import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Card from "@/components/card";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons";
import { Hammer, HeartHandshake, Eye, Award } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Our Mission",
      description: "DevJam is built to serve as an open engineering laboratory for modern software builders who want to master system intricacies by building clean, functional tools from scratch.",
      icon: Award,
      isCyan: false,
    },
    {
      title: "Build in Public",
      description: "No hidden algorithms, paywalls, or black boxes. All of our codebases, diagnostic runtimes, and roadmap resources are completely public, hosted openly on GitHub.",
      icon: Eye,
      isCyan: true,
    },
    {
      title: "Learning Philosophy",
      description: "We believe passive tutorials are ineffective for deep learning. Software engineering is best mastered by tweaking parameters, running scripts, and inspecting active component updates.",
      icon: Hammer,
      isCyan: false,
    },
    {
      title: "Invitation to Collaborate",
      description: "DevJam is open source. We invite you to inspect our visualizer source files, submit pull requests, resolve open bugs, or contribute new learning tracks.",
      icon: HeartHandshake,
      isCyan: true,
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/devJam2026", icon: GithubIcon, color: "hover:text-orange-500 hover:border-orange-500/30" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, color: "hover:text-blue-500 hover:border-blue-500/30" },
    { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon, color: "hover:text-orange-600 hover:border-orange-600/30" },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 md:py-7 w-full">
          <PageHero
            kicker="About DevJam"
            title="Engineering Labs for Curious Minds"
            description="DevJam is a project-driven technology hub. We design interactive playgrounds, architectural schematics, and curriculum roadmaps for software builders."
          />

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-16">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} isCyan={pillar.isCyan}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border shadow-inner ${
                        pillar.isCyan
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Social Links Section */}
          <div className="border-t border-card-border pt-12 flex flex-col items-center text-center max-w-xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
              Connect With Us
            </span>
            <h2 className="text-2xl font-black text-foreground mb-4">
              Join the DevJam Space
            </h2>
            <p className="text-xs text-text-muted leading-relaxed mb-8">
              Stay updated with our latest interactive simulators, roadmaps, and build-in-public summaries. Follow our channels or star our codebases.
            </p>

            <div className="flex flex-wrap gap-4 justify-center w-full">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-card-border bg-card-bg/40 text-sm font-semibold text-foreground transition-all duration-200 cursor-pointer ${social.color}`}
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
