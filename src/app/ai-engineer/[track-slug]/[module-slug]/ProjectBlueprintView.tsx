import React from "react";
import Link from "next/link";
import { AiProjectDetail } from "@/data/ai/projectsIndex";
import { GithubIcon } from "@/components/brand-icons";
import { 
  ArrowLeft, 
  BookOpen, 
  ChevronRight, 
  HelpCircle,
  Layers,
  Code,
  Info,
  Server,
  AlertTriangle,
  Flame,
  Activity,
  Terminal,
  Cpu,
  Database,
  Sparkles,
  ExternalLink,
  FileText,
  ListTodo,
  Award
} from "lucide-react";

interface ProjectBlueprintViewProps {
  projectDetail: AiProjectDetail;
  trackTitle: string;
  trackSlug: string;
}

export default function ProjectBlueprintView({ 
  projectDetail, 
  trackTitle, 
  trackSlug 
}: ProjectBlueprintViewProps) {
  
  // Custom badges for the right sidebar
  const statusColors = {
    "available": "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    "in-progress": "bg-violet-500/10 border-violet-500/20 text-violet-400",
    "coming-soon": "bg-orange-500/10 border-orange-500/20 text-orange-400"
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden transition-colors duration-300">
      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumb links */}
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-bold text-text-muted">
            <Link href={`/ai-engineer/${trackSlug}`} className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to {trackTitle}
            </Link>
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Project Blueprint Document
            </span>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className={`inline-flex items-center gap-1 rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase ${statusColors[projectDetail.status]}`}>
                {projectDetail.status === "coming-soon" ? "Project Blueprint" : projectDetail.status}
              </span>
              <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                Module 1.5
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              {projectDetail.title}
            </h1>
            
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              {projectDetail.subtitle}
            </p>
          </div>

          {/* Grid Layout - Sidebar TOC and Main Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full relative">
            
            {/* Left Column: Main Body Content (8/12 width) */}
            <div className="lg:col-span-8 flex flex-col gap-10 w-full text-foreground text-sm font-sans leading-relaxed">
              
              {/* Notice Banner */}
              <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex gap-4">
                <Info className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Blueprint Information Only</h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    This project&apos;s code implementation will come later in the curriculum. However, the complete <strong>architecture blueprint</strong>, <strong>functional specifications</strong>, <strong>core modules</strong>, <strong>milestones</strong>, and <strong>interview design explanations</strong> are fully active and available below to aid in your study.
                  </p>
                </div>
              </div>

              {/* Overview */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Info className="h-5 w-5 text-cyan-400" />
                  Project Overview
                </h2>
                <p className="text-text-muted text-xs leading-relaxed whitespace-pre-line">
                  {projectDetail.overview}
                </p>
              </section>

              {/* Problem Statement */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Problem Statement
                </h2>
                <p className="text-text-muted text-xs leading-relaxed whitespace-pre-line mb-3">
                  {projectDetail.problemStatement}
                </p>

                {/* Comparison Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">Bad Output (Raw Text)</span>
                    <pre className="text-text-muted text-[11px] font-mono leading-relaxed whitespace-pre-wrap">
                      &quot;Yes, this looks like a scam because the message asks for urgent payment.&quot;
                    </pre>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Expected Output (Validated JSON)</span>
                    <pre className="text-emerald-400 text-[11px] font-mono leading-relaxed whitespace-pre-wrap">
{`{
  "classification": "scam",
  "confidence": 0.87,
  "risk_factors": ["Urgency", "Payment request", "Unknown sender"],
  "safe_action": "Do not click the link"
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* What You Will Build */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Layers className="h-5 w-5 text-emerald-400" />
                  What You Will Build
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.features.map((feat, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-1.5">
                      <h4 className="text-xs font-bold text-foreground">{feat.title}</h4>
                      <p className="text-text-muted text-[11px] leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Concepts You Will Learn */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-5 w-5 text-violet-400" />
                  Concepts You Will Learn
                </h2>
                <div className="flex flex-col gap-3">
                  {projectDetail.concepts.map((concept, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-1">
                      <h4 className="text-xs font-bold text-violet-400">{idx + 1}. {concept.title}</h4>
                      <p className="text-text-muted text-[11px] leading-relaxed">{concept.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Project Requirements */}
              <section className="flex flex-col gap-4">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <ListTodo className="h-5 w-5 text-cyan-400" />
                  Project Requirements
                </h2>
                
                {/* FR */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider">Functional Requirements</h4>
                  <div className="overflow-x-auto border border-card-border rounded-xl bg-[#030712]/50">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-card-border/60 bg-[#050811]/80 text-text-muted font-mono uppercase tracking-wider text-[9px]">
                          <th className="p-3 w-16">ID</th>
                          <th className="p-3">Requirement Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-card-border/30 text-text-muted">
                        {projectDetail.functionalRequirements.map((req) => (
                          <tr key={req.id} className="hover:bg-slate-500/5 transition-colors">
                            <td className="p-3 font-mono font-bold text-foreground">{req.id}</td>
                            <td className="p-3">{req.requirement}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* NFR */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Non-Functional Requirements</h4>
                  <div className="overflow-x-auto border border-card-border rounded-xl bg-[#030712]/50">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-card-border/60 bg-[#050811]/80 text-text-muted font-mono uppercase tracking-wider text-[9px]">
                          <th className="p-3 w-20">ID</th>
                          <th className="p-3">Requirement Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-card-border/30 text-text-muted">
                        {projectDetail.nonFunctionalRequirements.map((req) => (
                          <tr key={req.id} className="hover:bg-slate-500/5 transition-colors">
                            <td className="p-3 font-mono font-bold text-foreground">{req.id}</td>
                            <td className="p-3">{req.requirement}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* System Architecture */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Cpu className="h-5 w-5 text-sky-400" />
                  System Architecture
                </h2>
                
                {/* Visual Flow diagram */}
                <div className="p-5 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col items-center gap-2 py-8">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {projectDetail.architectureFlow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <div className="bg-[#030712] border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-cyan-400 shadow-md">
                          {step}
                        </div>
                        {idx < projectDetail.architectureFlow.length - 1 && (
                          <ChevronRight className="h-4 w-4 text-text-muted shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-text-muted text-xs leading-relaxed">
                  The frontend never talks directly to the LLM provider. It sends the user input and selected schema to the FastAPI backend. The backend builds the prompt, calls the LLM, parses the response, validates it using Pydantic, and returns either a valid typed JSON response or detailed validation errors.
                </p>
              </section>

              {/* Backend Design */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Server className="h-5 w-5 text-indigo-400" />
                  Backend Design
                </h2>
                {projectDetail.backendTree && (
                  <pre className="bg-[#050811] p-4 rounded-xl border border-card-border/40 overflow-x-auto text-[11px] font-mono text-cyan-400 leading-normal mb-2">
                    {projectDetail.backendTree}
                  </pre>
                )}
                <div className="flex flex-col gap-2.5">
                  {projectDetail.backendStructure.map((file, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-1">
                      <span className="font-mono text-xs text-indigo-400 font-bold">{file.path}</span>
                      <p className="text-text-muted text-[11px] leading-relaxed">{file.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frontend Design */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Terminal className="h-5 w-5 text-rose-400" />
                  Frontend Design
                </h2>
                {projectDetail.frontendTree && (
                  <pre className="bg-[#050811] p-4 rounded-xl border border-card-border/40 overflow-x-auto text-[11px] font-mono text-cyan-400 leading-normal mb-2">
                    {projectDetail.frontendTree}
                  </pre>
                )}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    {projectDetail.frontendStructure.map((file, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-card-border bg-[#030712]/50 flex flex-col gap-1">
                        <span className="font-mono text-xs text-rose-400 font-bold">{file.path}</span>
                        <p className="text-text-muted text-[11px] leading-relaxed">{file.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Panels list */}
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-text-muted">Required UI Panels</span>
                    <div className="flex flex-wrap gap-2">
                      {["Input panel", "Schema selector", "Run validation button", "Raw response viewer", "Validated JSON viewer", "Error inspector", "Retry timeline", "Learning notes panel"].map((panel) => (
                        <span key={panel} className="bg-[#030712] border border-card-border px-2.5 py-1 rounded text-xs text-text-muted font-sans font-medium">
                          {panel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* API Contract */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Code className="h-5 w-5 text-amber-400" />
                  API Contract
                </h2>
                {projectDetail.apiContracts.map((api, idx) => (
                  <div key={idx} className="flex flex-col gap-3 bg-[#030712]/60 border border-card-border rounded-xl p-4">
                    <div className="flex items-center gap-2 font-mono border-b border-card-border/30 pb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {api.method}
                      </span>
                      <span className="text-xs text-foreground font-bold">{api.endpoint}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-2">
                      {api.requestBody && (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Request Body Payload</span>
                          <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-cyan-400 leading-normal">
                            {api.requestBody}
                          </pre>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {api.successResponse && (
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Success Response (200 OK)</span>
                            <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-emerald-400 leading-normal">
                              {api.successResponse}
                            </pre>
                          </div>
                        )}
                        {api.errorResponse && (
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono font-bold uppercase text-text-muted">Error Response (422 Invalid)</span>
                            <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-rose-400 leading-normal">
                              {api.errorResponse}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Data Models */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Database className="h-5 w-5 text-teal-400" />
                  Example Pydantic Model
                </h2>
                {projectDetail.dataModels.map((model, idx) => (
                  <div key={idx} className="flex flex-col gap-3 bg-[#030712]/50 border border-card-border rounded-xl p-4">
                    <h4 className="text-xs font-bold text-teal-400 font-mono">{model.title}</h4>
                    <pre className="bg-[#050811] p-3 rounded-lg border border-card-border/40 overflow-x-auto text-[10px] font-mono text-cyan-400 leading-normal">
                      {model.code}
                    </pre>
                    <p className="text-text-muted text-[11px] leading-relaxed">{model.description}</p>
                  </div>
                ))}
              </section>

              {/* Validation Lifecycle */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Activity className="h-5 w-5 text-purple-400" />
                  Validation Lifecycle
                </h2>
                <div className="relative border-l border-card-border pl-6 ml-3 flex flex-col gap-5 my-2">
                  {projectDetail.validationLifecycle.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col gap-1 bg-[#030712]/50 p-4 rounded-xl border border-card-border/40">
                      <span className="absolute -left-[31px] top-4 h-4 w-4 rounded-full border-2 border-card-border bg-[#030712] flex items-center justify-center text-[8px] font-mono text-cyan-400 font-extrabold shadow-lg">
                        {idx + 1}
                      </span>
                      <p className="text-foreground text-xs font-bold leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Failure Cases */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Common Failure Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.failureCases.map((fCase, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-1.5">
                      <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                        {fCase.title}
                      </h4>
                      <p className="text-text-muted text-[11px] leading-relaxed">{fCase.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interview Explanation */}
              <section className="flex flex-col gap-4">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  Interview Explanation
                </h2>
                
                <div className="p-4 rounded-xl border border-card-border bg-orange-500/5 flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-orange-500 shrink-0" />
                    How to present this project:
                  </h4>
                  <p className="text-[11px] text-text-muted italic leading-relaxed">
                    &ldquo;{projectDetail.interviewExplanation}&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                  <h4 className="text-xs font-bold text-foreground">Possible Interview Questions</h4>
                  <ul className="list-none flex flex-col gap-1.5 text-[11px] text-text-muted">
                    {projectDetail.interviewQuestions.map((q, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-cyan-400 mt-0.5">?</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Learning Outcomes */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <BookOpen className="h-5 w-5 text-emerald-400" />
                  After Building This Project, You Can Explain
                </h2>
                <ul className="list-none flex flex-col gap-2.5">
                  {projectDetail.learningObjectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-2 text-text-muted text-xs items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Build Milestones */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Build Milestones
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.milestones.map((milestone, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2">
                      <div className="flex justify-between items-center gap-2 flex-wrap">
                        <span className="text-[9px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Milestone {idx + 1}</span>
                        <h4 className="text-xs font-bold text-foreground">{milestone.title}</h4>
                      </div>
                      <p className="text-[11px] text-text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Future Improvements */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-card-border/40 pb-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  Future Improvements
                </h2>
                <ul className="list-none flex flex-col gap-2 text-xs text-text-muted">
                  {projectDetail.futureImprovements.map((enh, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-yellow-400 mt-0.5">•</span>
                      <span>{enh}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Right Column: Sticky Sidebar Info Cards (4/12 width) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
              
              {/* Project Status Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-4">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Project Status
                </h4>
                <div className="flex flex-col gap-3.5 text-[11px] text-text-muted">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Mode:</span>
                    <span className="bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold text-orange-400 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Phase:</span>
                    <span className="bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold text-cyan-400 uppercase">
                      Blueprint Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Skills Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Key Skills
                </h4>
                <ul className="flex flex-col gap-2 text-[10px] text-text-muted">
                  {projectDetail.keySkills.map((skill, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {projectDetail.techStack.map((tech) => (
                    <span key={tech} className="bg-[#050811] px-2 py-0.5 rounded border border-card-border/45 font-mono text-[9px] text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interview Value Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Interview Value
                </h4>
                <ul className="flex flex-col gap-2 text-[10px] text-text-muted">
                  <li className="flex gap-2 leading-relaxed">
                    <Flame className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Critical senior systems designer skill. Demonstrates ability to turn probabilistic AI outputs into predictable, type-safe structures.</span>
                  </li>
                </ul>
              </div>

              {/* Project Links Card */}
              <div id="project-links" className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Project Links
                </h4>
                <div className="flex flex-col gap-2.5 text-[10px] font-mono text-text-muted">
                  <span className="flex items-center justify-between opacity-50 cursor-not-allowed select-none py-1">
                    <span className="flex items-center gap-1.5">
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub Repository
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-1.5 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                  </span>
                  <span className="flex items-center justify-between opacity-50 cursor-not-allowed select-none py-1 border-t border-card-border/30">
                    <span className="flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-1.5 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                  </span>
                  <span className="flex items-center justify-between opacity-50 cursor-not-allowed select-none py-1 border-t border-card-border/30">
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5" />
                      Architecture Docs
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/5 px-1.5 py-0.5 rounded border border-orange-500/10">Coming Soon</span>
                  </span>
                </div>
              </div>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}
