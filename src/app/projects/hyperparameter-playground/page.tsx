import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import ArchitectureDiagram from "@/components/architecture-diagram";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import { Globe, GitFork } from "lucide-react";

export default function HyperparameterPlaygroundPage() {
  const techs = ["React", "TypeScript", "Vite", "OpenAI API", "Local Storage", "Tailwind CSS", "Vercel", "GitHub"];
  const concepts = [
    "Temperature scaling & Softmax probability curves",
    "Top-p (Nucleus) sampling thresholds",
    "Max tokens length restrictions & response cuts",
    "Frequency penalty (repetitive tokens discouragement)",
    "Presence penalty (new topics introduction encouragement)",
    "Deterministic vs creative generation controls"
  ];
  const features = [
    "Interactive prompt input workspace supporting custom requests.",
    "Dynamic temperature slider controls with probability curve indicators.",
    "Top-p (Nucleus) filter toggling candidate pools dynamically.",
    "Length constraint counters representing prompt and target limits.",
    "Frequency and presence penalties adjust repetitive token weights.",
    "Output comparison panel visualizing output differences side-by-side.",
    "Concepts panel breaking down mathematical effects in real-time.",
    "Client-side API key storage secure inside localStorage."
  ];
  const improvements = [
    "Add side-by-side output comparison grids.",
    "Add real-time token usage and cost accumulation trackers.",
    "Add model comparison options (OpenAI vs Anthropic vs Gemini).",
    "Integrate prompt presets for creative, coding, or factual tasks.",
    "Add output evaluation scores from secondary reviewer models.",
    "Render probability distribution charts for token candidate lists.",
    "Create experiments log with saved parameters configurations.",
    "Export reports containing parameter curves and generation samples."
  ];

  const interviewQuote = "I built this playground to understand how LLM generation parameters influence output. Temperature changes the randomness of token selection, top-p controls the probability mass considered during sampling, and max tokens controls output length. The project helped me move from simply using these settings to understanding their practical impact on creativity, consistency, cost, and response quality.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Hyperparameter Playground"
            description="Adjust model temperature, top-p, and penalties in real time to understand their impact on LLM creativity, latency, and consistency."
            github="https://github.com/devJam2026/hyperparameter-playground"
            live="https://hyperparameter-playground-live.vercel.app"
            status="Completed"
            outcome="Master neural network probability sampling, Softmax modification, deterministic constraints, and generation controls."
            isCyan={true}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Taming Non-Deterministic Behaviors" isCyan={true}>
              <p>
                Developers often configure LLM generation settings (like temperature, top-p, and penalties) blindly, using trial and error. Without understanding the underlying probability distributions and candidate sampling mechanics, it is difficult to build applications that balance factual consistency, token cost, and creative vocabulary.
              </p>
              <p className="mt-3">
                This project addresses this knowledge gap by providing a visual, client-side parameter simulator. Builders can tweak sliders and immediately observe how tokens are sampled, reducing error rates in production prompts.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Probability Sampling Mechanics" isCyan={true}>
              <p className="mb-4">
                This playground exposes the mathematical controls under the hood of model generation:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {concepts.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 3. What I built */}
            <ProjectSection kicker="03. What I built" title="Parameter Simulation Workspace" isCyan={true}>
              <p className="mb-4">
                An interactive React interface that interfaces directly with model APIs to let users run experiments and visualize results:
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ProjectSection>

            {/* 4. Architecture Diagram */}
            <ProjectSection kicker="04. Architecture" title="System Flowchart" isCyan={true}>
              <div className="my-4">
                <ArchitectureDiagram projectType="hyperparameters" isCyan={true} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={true}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 06. GitHub link */}
            <ProjectSection kicker="06. GitHub link" title="Source Code Repository" isCyan={true}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <GitFork className="h-4 w-4 text-cyan-400" />
                <span className="text-text-muted">Repository:</span>
                <a
                  href="https://github.com/devJam2026/hyperparameter-playground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                >
                  devJam2026/hyperparameter-playground
                </a>
              </div>
            </ProjectSection>

            {/* 07. Live demo link */}
            <ProjectSection kicker="07. Live demo link" title="Interactive Web Application" isCyan={true}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="text-text-muted">Live Deploy:</span>
                <a
                  href="https://hyperparameter-playground-live.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan-400 hover:underline transition-all"
                >
                  hyperparameter-playground-live.vercel.app
                </a>
              </div>
            </ProjectSection>

            {/* 08. How to run locally */}
            <ProjectSection kicker="08. How to run locally" title="Local Setup Instructions" isCyan={true}>
              <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 font-mono text-xs text-text-muted space-y-3">
                <div>
                  <div className="text-foreground font-bold mb-1"># Clone the repository</div>
                  <div>git clone https://github.com/devJam2026/hyperparameter-playground.git</div>
                  <div>cd hyperparameter-playground</div>
                </div>
                <div>
                  <div className="text-foreground font-bold mb-1"># Install dependencies</div>
                  <div>npm install</div>
                </div>
                <div>
                  <div className="text-foreground font-bold mb-1"># Run development server</div>
                  <div>npm run dev</div>
                </div>
              </div>
            </ProjectSection>

            {/* 09. Interview explanation */}
            <ProjectSection kicker="09. Interview explanation" title="Answering Technical Questions" isCyan={true}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={true} />
            </ProjectSection>

            {/* 10. Common interview Q&A */}
            <ProjectSection kicker="10. Common interview Q&A" title="Technical Interview Questions" isCyan={true}>
              <div className="space-y-4">
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 mb-1">Q1: How does Temperature alter the Softmax probability distribution mathematically?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {"Softmax outputs probabilities P(x_i) = e^(z_i / T) / sum(e^(z_j / T)), where T is the temperature and z are the logits. When T -> 0, the highest logit dominates, making the selection deterministic (greedy search). When T > 1, it flattens the distribution, giving lower-probability tokens a higher chance of selection."}
                  </p>
                </div>
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 mb-1">Q2: Why is it generally recommended not to modify both Temperature and Top-p simultaneously?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Both parameters modify the token selection candidate pool but in different ways: Top-p restricts the candidate set by cropping the cumulative probability tail, while Temperature changes the relative probabilities of all items in the set. Tweaking both makes it extremely difficult to isolate the cause of quality shifts or regressions in output.
                  </p>
                </div>
              </div>
            </ProjectSection>

            {/* 11. Future improvements */}
            <ProjectSection kicker="11. Future improvements" title="Roadmap & Next Steps" isCyan={true}>
              <FutureImprovementList improvements={improvements} isCyan={true} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
