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
import { Terminal, GitFork } from "lucide-react";

export default function TokenizerVisualizerPage() {
  const techs = ["React", "TypeScript", "FastAPI", "Python", "tiktoken", "SentencePiece", "WordPiece", "Tailwind CSS", "GitHub"];
  const concepts = [
    "Tokenization Pipeline & Ingestion Boundaries",
    "Subword Splitting Algorithms (BPE, WordPiece, SentencePiece)",
    "Token Count Inflation across Different Models",
    "Character-to-Token Offset Mapping Rules",
    "Prompt Cost Optimization Strategies",
    "Multilingual Token Expansion Discrepancies"
  ];
  const features = [
    "Real-time Text Input Field with instant highlighting boundaries.",
    "Token Count Display representing raw usage and usage cost estimates.",
    "Tokenizer Comparison matrix evaluating GPT-4, LLaMA, and BERT strategies.",
    "Token-by-Token Visual Grid mapping token IDs to their character strings.",
    "Dynamic Offset Mapping with active coordinate hover states.",
    "Multilingual Input Templates illustrating text length inflation.",
    "Diagnostic Console highlighting vocabulary coverage warnings."
  ];
  const improvements = [
    "Add exact OpenAI official tiktoken comparisons.",
    "Add Claude/Gemini-style tokenizer approximation rules.",
    "Integrate API cost estimator for major hosting providers.",
    "Implement prompt optimizer suggestions to reduce overhead.",
    "Add support for large text file uploads (.txt, .md).",
    "Add side-by-side multilingual split visualizers.",
    "Create local session history for saved prompt tests.",
    "Add shareable URL configuration for diagnostic reports."
  ];

  const interviewQuote = "I built a tokenizer visualization platform to understand how LLMs convert raw text into tokens. The goal was to make invisible token boundaries visible. The frontend accepts user input, sends it to a FastAPI backend, and the backend processes the same text through multiple tokenizer strategies. The response includes token values, token IDs, counts, and offset mappings. This helped me understand why prompt size, language choice, and tokenizer design directly affect LLM cost, latency, and context window usage.";

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10" />
        <div className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-6">
          <ProjectHero
            title="Tokenizer Visualizer Studio"
            description="Explore how LLMs tokenize raw text. Compare tiktoken, SentencePiece, and WordPiece strategies to diagnose token inflation and prompt cost variance."
            github="https://github.com/devJam2026/tokenizer-visualizer-studio"
            live="/labs/tokenizer-visualizer"
            status="Active"
            outcome="Master subword tokenization, vocabulary dictionary offsets, token limits, and character boundaries by comparing transformer ingest pipelines."
            isCyan={false}
          />

          <div className="rounded-xl border border-card-border/60 bg-[#060a13]/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            {/* 1. Problem */}
            <ProjectSection kicker="01. Problem it solves" title="Understanding Ingest Boundaries" isCyan={false}>
              <p>
                Most developers use LLMs without understanding how raw text becomes tokens. This lack of transparency creates confusion around token budget limits, prompt cost estimation, multilingual text expansion, and why the exact same sentence can consume completely different token counts depending on the active model.
              </p>
              <p className="mt-3">
                This project solves these issues by creating a visual comparison platform. Users can write prompts, inspect their boundaries immediately, and evaluate why certain structures expand token usage excessively.
              </p>
            </ProjectSection>

            {/* 2. Concept */}
            <ProjectSection kicker="02. Concept it teaches" title="Subword Splitting & Cost Control" isCyan={false}>
              <p className="mb-4">
                This lab focuses on the mechanics of parsing strings into dictionary keys:
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
            <ProjectSection kicker="03. What I built" title="Visualization Dashboard" isCyan={false}>
              <p className="mb-4">
                A dual-channel visualization tool that accepts dynamic input strings, processes them through tokenizer endpoints, and returns a detailed metadata payload:
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
                <ArchitectureDiagram projectType="tokenizer" isCyan={false} />
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
                  href="https://github.com/devJam2026/tokenizer-visualizer-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-orange-500 hover:underline transition-all"
                >
                  devJam2026/tokenizer-visualizer-studio
                </a>
              </div>
            </ProjectSection>

            {/* 07. Live demo link */}
            <ProjectSection kicker="07. Live demo link" title="Interactive Web Application" isCyan={false}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <Terminal className="h-4 w-4 text-orange-500" />
                <span className="text-text-muted">Live Lab:</span>
                <Link
                  href="/labs/tokenizer-visualizer"
                  className="text-foreground hover:text-orange-500 hover:underline transition-all"
                >
                  Tokenizer Lab Page
                </Link>
              </div>
            </ProjectSection>

            {/* 08. How to run locally */}
            <ProjectSection kicker="08. How to run locally" title="Local Setup Instructions" isCyan={false}>
              <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 font-mono text-xs text-text-muted space-y-3">
                <div>
                  <div className="text-foreground font-bold mb-1"># Clone the repository</div>
                  <div>git clone https://github.com/devJam2026/tokenizer-visualizer-studio.git</div>
                  <div>cd tokenizer-visualizer-studio</div>
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
                  <h4 className="text-xs font-mono font-bold text-orange-500 mb-1">Q1: What is the core difference between Byte Pair Encoding (BPE) and WordPiece?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    BPE starts with individual characters and iteratively merges the most frequent adjacent byte pairs to build a vocabulary. WordPiece, on the other hand, builds a vocabulary of subwords by selecting merges that maximize the likelihood of the training data according to a language model (often selecting merges that maximize mutual information).
                  </p>
                </div>
                <div className="border border-card-border/40 rounded-lg p-4 bg-card-bg/5">
                  <h4 className="text-xs font-mono font-bold text-orange-500 mb-1">Q2: Why does non-English text consume significantly more tokens than English for the same semantic meaning?</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Most LLM vocabularies are heavily trained on English corpora. Common English words are represented as single tokens. For other languages, words are rarely found in the vocabulary and must be broken down into smaller subword fragments or even individual byte sequences, causing token inflation.
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
