import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-hero";
import ProjectSection from "@/components/project-section";
import TechStackBadge from "@/components/tech-stack-badge";
import ArchitectureDiagram from "@/components/architecture-diagram";
import InterviewExplanationCard from "@/components/interview-explanation-card";
import FutureImprovementList from "@/components/future-improvement-list";
import Link from "next/link";
import { GitFork, Terminal } from "lucide-react";

export default function ContextWindowDashboardPage() {
  const techs = ["React", "TypeScript", "FastAPI", "Python", "tiktoken", "Tailwind CSS", "GitHub"];
  const concepts = [
    "Context Window constraints & token budget allocation",
    "Prompt payload assembly (system, user, assistant messages)",
    "System message token cost overhead",
    "Chat history linear growth dynamics",
    "RAG document retrieval chunk sizing & text trimming",
    "Memory persistence vs context degradation",
    "Prompt compression & token-conscious pruning"
  ];
  const features = [
    "Interactive text areas representing system prompt, history, and retrieved context.",
    "Real-time token budget calculation and usage meters.",
    "Warning banners representing context boundary overflow thresholds.",
    "Visual payload assembly breakdown charts (donut style).",
    "Trimming suggestions showing which assistant messages to drop.",
    "RAG token decay simulations visualizing positional bias effects.",
    "Developer diagnostics panel detailing prompt assembly latency estimates."
  ];
  const improvements = [
    "Integrate native server-side tiktoken libraries for 100% accurate token counts.",
    "Add model-specific context limits presets (GPT-4o, Claude 3.5, Gemini 1.5).",
    "Add interactive RAG document search chunk simulator.",
    "Implement automated prompt compression suggestions (LLMLingua rule sets).",
    "Add visual memory truncation options (sliding window vs summary buffer).",
    "Create interactive conversation replay and playback debugging consoles.",
    "Add detailed API hosting provider billing estimators.",
    "Export diagnostic report logs containing context assembly profiles."
  ];

  const interviewQuote = "I built a context window diagnostics dashboard to understand how LLM applications consume token budget. The project breaks down a request into system prompt, user prompt, chat history, and retrieved context. It then estimates token usage and shows how close the request is to the model’s context limit. This helped me understand practical LLM app design problems like memory trimming, RAG chunk selection, prompt compression, and controlling latency/cost.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Context Window Dashboard"
            description="Visualize how prompts, system messages, chat history, and RAG context consume your model's token budget. Prevent context window overflow."
            github="https://github.com/devJam2026/context-window-diagnostics"
            live="#"
            status="In Progress"
            outcome="Understand RAG chunk selection, prompt payload assembly, linear token growth, context decay, and memory management strategies."
            isCyan={false}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Avoiding Prompt Overflow & Lost-in-the-Middle" isCyan={false}>
              <p>
                Many developers know that LLMs have hard context limits (e.g. 128k tokens), but they struggle to visualize how quickly rich system prompts, expanding conversation histories, retrieved document snippets, and tool schemas consume this budget. This leads to unexpected API failures (context overflow) or high latencies, and causes model quality degradation due to &ldquo;lost in the middle&rdquo; retrieval dynamics.
              </p>
              <p className="mt-3">
                This diagnostic dashboard helps developers inspect their request payloads, analyze token allocations, and design optimal prompt compression or memory-trimming rules before shipping to production.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Token Budgeting & Prompt Payload Architecture" isCyan={false}>
              <p className="mb-4">
                This project covers the core constraints of building memory-aware retrieval applications:
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
            <ProjectSection kicker="03. What I built" title="Diagnostics Dashboard Simulator" isCyan={false}>
              <p className="mb-4">
                An interactive React dashboard that compiles different payload parts and runs real-time allocation analysis:
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
            <ProjectSection kicker="04. Architecture" title="System Flowchart" isCyan={false}>
              <div className="my-4">
                <ArchitectureDiagram projectType="context" isCyan={false} />
              </div>
            </ProjectSection>

            {/* 5. Tech Stack */}
            <ProjectSection kicker="05. Tech Stack" title="Built With" isCyan={false}>
              <TechStackBadge techs={techs} />
            </ProjectSection>

            {/* 06. GitHub link */}
            <ProjectSection kicker="06. GitHub link" title="Source Code Repository" isCyan={false}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <GitFork className="h-4 w-4 text-orange-500" />
                <span className="text-text-muted">Repository:</span>
                <a
                  href="https://github.com/devJam2026/context-window-diagnostics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-orange-500 hover:underline transition-all"
                >
                  devJam2026/context-window-diagnostics
                </a>
              </div>
            </ProjectSection>

            {/* 07. Live demo link */}
            <ProjectSection kicker="07. Live demo link" title="Interactive Web Application" isCyan={false}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <Terminal className="h-4 w-4 text-orange-500" />
                <span className="text-text-muted">Live Lab:</span>
                <Link
                  href="/labs/system-design-simulator"
                  className="text-foreground hover:text-orange-500 hover:underline transition-all"
                >
                  System Design & Context Simulator Lab
                </Link>
              </div>
            </ProjectSection>

            {/* 08. How to run locally */}
            <ProjectSection kicker="08. How to run locally" title="Local Setup Instructions" isCyan={false}>
              <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 font-mono text-xs text-text-muted space-y-3">
                <div>
                  <div className="text-foreground font-bold mb-1"># Clone the repository</div>
                  <div>git clone https://github.com/devJam2026/context-window-diagnostics.git</div>
                  <div>cd context-window-diagnostics</div>
                </div>
                <div>
                  <div className="text-foreground font-bold mb-1"># Setup Python Backend</div>
                  <div>cd backend</div>
                  <div>python -m venv venv</div>
                  <div>venv\Scripts\activate  <span className="text-gray-500"># On macOS/Linux use: source venv/bin/activate</span></div>
                  <div>pip install -r requirements.txt</div>
                  <div>uvicorn main:app --reload --port 8000</div>
                </div>
                <div>
                  <div className="text-foreground font-bold mb-1"># Setup React Frontend (in separate terminal)</div>
                  <div>cd ../frontend</div>
                  <div>npm install</div>
                  <div>npm run dev</div>
                </div>
              </div>
            </ProjectSection>

            {/* 09. Interview explanation */}
            <ProjectSection kicker="09. Interview explanation" title="Answering Technical Questions" isCyan={false}>
              <InterviewExplanationCard quote={interviewQuote} isCyan={false} />
            </ProjectSection>

            {/* 10. Common interview Q&A */}
            <ProjectSection kicker="10. Common interview Q&A" title="Technical Interview Questions" isCyan={false}>
              <div className="space-y-4">
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-orange-500 mb-1">Q1: What is the &ldquo;Lost-in-the-Middle&rdquo; phenomenon and how does it affect RAG?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Research shows that LLMs are best at retrieving information located at the very beginning or end of their input context. Information placed in the middle of a long prompt is often missed or ignored. In RAG applications, this means retrieved documents must be ordered by relevance, putting the highest-scoring documents at the top and bottom of the context payload.
                  </p>
                </div>
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-orange-500 mb-1">Q2: Explain the trade-offs between sliding window memory and summarization memory.</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Sliding window memory drops older messages once a limit is reached, maintaining precise context of recent messages but completely forgetting past topics. Summarization memory uses a separate model run to compress past messages into a brief summary, preserving high-level context across long conversations but losing exact phrasing and historical details.
                  </p>
                </div>
              </div>
            </ProjectSection>

            {/* 11. Future improvements */}
            <ProjectSection kicker="11. Future improvements" title="Roadmap & Next Steps" isCyan={false}>
              <FutureImprovementList improvements={improvements} isCyan={false} />
            </ProjectSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
