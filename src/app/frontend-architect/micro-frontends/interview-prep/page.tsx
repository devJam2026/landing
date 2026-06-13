"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  HelpCircle, 
  Play, 
  Search, 
  AlertTriangle, 
  Scale, 
  Bookmark, 
  Check, 
  Sparkles 
} from "lucide-react";
import { microFrontendsDetail } from "@/data/frontend/tracks/micro-frontends-detail";
import { 
  InterviewChecklistCard, 
  InterviewAnswerFramework 
} from "../MFEComponents";

export default function MicroFrontendsInterviewPrepPage() {
  // Question Bank Filter State
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  // Mock Simulator State
  const [activeMockLevel, setActiveMockLevel] = useState<string>("Fundamentals");
  const [expandedMockAnswers, setExpandedMockAnswers] = useState<Record<string, boolean>>({});

  // Interactive Checklist State
  const [checklistStates, setChecklistStates] = useState<Record<number, boolean>>({});

  const difficultyLevels = ["All", "Beginner", "Intermediate", "Senior", "Architect"];
  const topicFilters = [
    "All", 
    "Module Federation", 
    "Communication", 
    "Performance", 
    "Resilience", 
    "System Design", 
    "Pitfalls"
  ];

  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMockAnswer = (id: string) => {
    setExpandedMockAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChecklistItem = (idx: number) => {
    setChecklistStates((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Check if a question is key for senior engineers
  const isMustPractice = (qId: string, questionText: string) => {
    const qLower = questionText.toLowerCase();
    return (
      qId === "q-1" || 
      qId === "q-3" || 
      qId === "q-8" || 
      qId === "q-6" || 
      qLower.includes("duplicate react") ||
      qLower.includes("roll back") ||
      qLower.includes("rollback") ||
      qLower.includes("e-commerce") ||
      qLower.includes("ecommerce") ||
      qLower.includes("version compatibility")
    );
  };

  const filteredQuestions = microFrontendsDetail.interviewQuestions.filter((q) => {
    const matchesDifficulty = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
    const matchesTopic = selectedTopic === "All" || 
      q.topic.toLowerCase().includes(selectedTopic.toLowerCase()) ||
      (selectedTopic === "System Design" && q.topic.toLowerCase().includes("design")) ||
      (selectedTopic === "Pitfalls" && q.commonMistakes.length > 0);

    const matchesSearch = searchQuery === "" || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.seniorAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDifficulty && matchesTopic && matchesSearch;
  });

  const activeMockQuestions = microFrontendsDetail.mockInterview.find(
    (lvl) => lvl.level === activeMockLevel
  )?.questions || [];

  const activeRubric = microFrontendsDetail.scoringRubric.find(
    (rubric) => rubric.level === activeMockLevel
  );

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden text-foreground scroll-smooth">
      <Navbar />

      <main className="relative flex flex-col pt-20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl -z-10 animate-glow" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 -z-20" />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10 w-full flex flex-col gap-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-bold text-text-muted">
            <div className="flex items-center gap-2">
              <Link href="/roadmaps/frontend-architect" className="hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/frontend-architect/micro-frontends" className="hover:text-foreground transition-colors">
                Micro Frontends Hub
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground">Interview Prep</span>
            </div>
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-wider">
              Practice Workspace
            </span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col gap-4 border-b border-card-border/40 pb-8">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              Micro Frontends Interview Preparation Workspace
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
              Deconstruct common architecture questions, grade your signals using the simulated mock examiner, and review readiness checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {/* Left Column - Detailed Content */}
            <div className="lg:col-span-8 flex flex-col gap-10 w-full">
              
              {/* Revision Checklist Card */}
              <InterviewChecklistCard />

              {/* Answer Framework */}
              <InterviewAnswerFramework />

              {/* Question Bank Section */}
              <section id="questions" className="flex flex-col gap-4">
                <div className="flex justify-between items-center flex-wrap gap-3 border-b border-card-border/40 pb-2">
                  <h2 className="text-base font-black text-foreground flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                    Interview Question Bank
                  </h2>
                  
                  {/* Topic Filters */}
                  <div className="flex gap-1.5 flex-wrap">
                    {topicFilters.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase transition-all ${
                          selectedTopic === topic
                            ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                            : "bg-[#030712] border border-card-border/60 text-text-muted hover:text-foreground"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 flex-wrap mt-1">
                  {/* Search input */}
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-text-muted" />
                    <input
                      type="text"
                      placeholder="Search questions by keyword (auth, remote, version...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#050811] border border-card-border focus:border-cyan-500/40 rounded-lg py-2 pl-9 pr-4 text-xs placeholder:text-text-muted text-foreground transition-all outline-none"
                    />
                  </div>

                  {/* Difficulty Filters */}
                  <div className="flex gap-1.5 flex-wrap">
                    {difficultyLevels.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setSelectedDifficulty(lvl)}
                        className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase transition-all ${
                          selectedDifficulty === lvl
                            ? "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                            : "bg-[#030712] border border-card-border/60 text-text-muted hover:text-foreground"
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {filteredQuestions.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {filteredQuestions.map((q) => {
                      const mustPractice = isMustPractice(q.id, q.question);
                      return (
                        <div key={q.id} className={`p-4 rounded-xl border flex flex-col gap-3 ${
                          mustPractice ? "border-orange-500/25 bg-[#050811]/60" : "border-card-border bg-[#050811]/45"
                        }`}>
                          <div className="flex justify-between items-start gap-3 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className={`h-1.5 w-1.5 rounded-full ${mustPractice ? "bg-orange-500" : "bg-text-muted"}`} />
                              <h4 className="text-xs font-extrabold text-foreground">{q.question}</h4>
                            </div>
                            <div className="flex items-center gap-1.5">
                              {mustPractice && (
                                <span className="bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold rounded px-2 py-0.5 text-[8px] font-mono uppercase tracking-wide">
                                  Must Practice
                                </span>
                              )}
                              <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono text-cyan-400">
                                {q.topic}
                              </span>
                              <span className="bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 rounded text-[8px] font-mono text-orange-400">
                                {q.difficulty}
                              </span>
                            </div>
                          </div>

                          <div className="text-[11px] text-text-muted leading-relaxed">
                            <strong>Short Answer: </strong>{q.shortAnswer}
                          </div>

                          <div className="border-t border-card-border/30 pt-3 flex flex-col gap-3">
                            <button
                              onClick={() => toggleQuestion(q.id)}
                              className="text-left text-[10px] text-cyan-400 hover:text-cyan-300 font-bold font-mono flex items-center gap-1"
                            >
                              {expandedQuestions[q.id] ? "[-]" : "[+]"} Show Senior Architect Answer & Follow-ups
                            </button>

                            {expandedQuestions[q.id] && (
                              <div className="flex flex-col gap-3.5 text-xs bg-[#030712]/80 p-3.5 rounded-lg border border-card-border/40 mt-1 animate-in fade-in duration-200">
                                <div>
                                  <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-orange-400">Senior Answer Frame</strong>
                                  <p className="text-text-muted leading-relaxed whitespace-pre-wrap">{q.seniorAnswer}</p>
                                </div>
                                {q.followUps.length > 0 && (
                                  <div>
                                    <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-cyan-400">Follow-up Questions</strong>
                                    <ul className="list-disc pl-4 text-text-muted flex flex-col gap-1 text-[11px] leading-relaxed">
                                      {q.followUps.map((f, i) => (
                                        <li key={i}>{f}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {q.commonMistakes.length > 0 && (
                                  <div>
                                    <strong className="text-red-400 block mb-1 font-mono text-[9px] uppercase tracking-wider">Common Mistakes to Avoid</strong>
                                    <ul className="list-disc pl-4 text-red-300/80 flex flex-col gap-1 text-[11px] leading-relaxed">
                                      {q.commonMistakes.map((m, i) => (
                                        <li key={i}>{m}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="border border-dashed border-card-border/60 bg-[#030712] p-8 rounded-xl text-center text-xs text-text-muted">
                    No interview questions match your filters.
                  </div>
                )}
              </section>

              {/* Mock Simulator */}
              <section id="simulator" className="flex flex-col gap-4">
                <div className="border-b border-card-border/40 pb-2">
                  <h2 className="text-base font-black text-foreground flex items-center gap-2">
                    <Play className="h-5 w-5 text-emerald-400 shrink-0" />
                    Mock Interview Simulator
                  </h2>
                </div>

                <div className="flex gap-2 border-b border-card-border/40 pb-0.5">
                  {["Fundamentals", "Intermediate", "Senior/System Design"].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveMockLevel(lvl)}
                      className={`pb-2 text-xs font-bold transition-all border-b-2 ${
                        activeMockLevel === lvl
                          ? "text-orange-500 border-orange-500"
                          : "text-text-muted border-transparent hover:text-foreground"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  {activeMockQuestions.map((q) => (
                    <div key={q.id} className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-2 flex-wrap">
                        <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Interviewer asks</span>
                        <span className="bg-[#030712] border border-card-border px-2 py-0.5 rounded text-[8px] font-mono text-text-muted font-mono">
                          {q.id}
                        </span>
                      </div>
                      
                      <p className="text-xs text-foreground font-semibold leading-relaxed">
                        &ldquo;{q.question}&rdquo;
                      </p>

                      <div className="border-t border-card-border/30 pt-3 flex flex-col gap-3">
                        <button
                          onClick={() => toggleMockAnswer(q.id)}
                          className="text-left text-[10px] text-cyan-400 hover:text-cyan-300 font-bold font-mono flex items-center gap-1"
                        >
                          {expandedMockAnswers[q.id] ? "[-]" : "[+]"} Evaluate Model Answer & Key Signals
                        </button>

                        {expandedMockAnswers[q.id] && (
                          <div className="flex flex-col gap-4 text-xs bg-[#030712] p-4 rounded-lg border border-card-border/40 mt-1 animate-in fade-in duration-200">
                            <div>
                              <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400">Model Answer</strong>
                              <p className="text-text-muted leading-relaxed whitespace-pre-wrap bg-[#050811] p-3 rounded-lg border border-card-border/30">{q.modelAnswer}</p>
                            </div>
                            
                            <div>
                              <strong className="text-cyan-400 block mb-1.5 font-mono text-[9px] uppercase tracking-wider">Candidate Response Signals</strong>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] leading-relaxed">
                                <div className="p-3 rounded border border-emerald-500/10 bg-emerald-500/5 flex flex-col gap-1.5">
                                  <span className="text-emerald-400 font-bold uppercase text-[9px] font-mono">Strong Signals</span>
                                  <ul className="list-disc pl-4 text-text-muted flex flex-col gap-1">
                                    {q.strongSignals.map((s, i) => <li key={i}>{s}</li>)}
                                  </ul>
                                </div>
                                <div className="p-3 rounded border border-red-500/10 bg-red-500/5 flex flex-col gap-1.5">
                                  <span className="text-red-400 font-bold uppercase text-[9px] font-mono">Weak Signals</span>
                                  <ul className="list-disc pl-4 text-text-muted flex flex-col gap-1">
                                    {q.weakSignals.map((w, i) => <li key={i}>{w}</li>)}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {q.redFlags.length > 0 && (
                              <div className="p-3 rounded border border-red-500/20 bg-red-500/5 flex flex-col gap-1.5 text-[11px] leading-relaxed">
                                <span className="text-red-400 font-bold uppercase text-[9px] font-mono flex items-center gap-1">
                                  <AlertTriangle className="h-3.5 w-3.5" />
                                  Critical Red Flags
                                </span>
                                <ul className="list-disc pl-4 text-red-300/80 flex flex-col gap-0.5">
                                  {q.redFlags.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                              </div>
                            )}

                            {q.followUpQuestions.length > 0 && (
                              <div className="border-t border-card-border/30 pt-3">
                                <strong className="text-foreground block mb-1 font-mono text-[9px] uppercase tracking-wider text-orange-400">Follow-up prompts</strong>
                                <ul className="list-disc pl-4 text-text-muted flex flex-col gap-1 text-[11px] leading-relaxed">
                                  {q.followUpQuestions.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {activeRubric && (
                  <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-3 mt-2">
                    <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Scale className="h-4 w-4 text-indigo-400 shrink-0" />
                      Scoring Rubric - {activeMockLevel}
                    </span>
                    <div className="overflow-x-auto border border-card-border rounded-lg bg-[#030712]/50">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-card-border/60 bg-[#050811]/80 text-text-muted font-mono uppercase tracking-wider text-[8px]">
                            <th className="p-2.5 w-16">Score</th>
                            <th className="p-2.5">Candidate Signal Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-card-border/30 text-text-muted">
                          {activeRubric.scores.map((scoreObj) => (
                            <tr key={scoreObj.score} className="hover:bg-slate-500/5 transition-colors">
                              <td className="p-2.5 font-bold font-mono text-foreground">{scoreObj.score} / 5</td>
                              <td className="p-2.5">{scoreObj.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </section>

              {/* Rapid-Fire Round */}
              <section id="rapid-fire" className="flex flex-col gap-3">
                <h2 className="text-base font-black text-foreground border-b border-card-border/40 pb-2 flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-orange-500 shrink-0" />
                  Rapid-Fire Round
                </h2>
                <div className="p-4 rounded-xl border border-card-border bg-[#050811]/45 flex flex-col gap-2.5">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Can you answer these in 30 seconds or less?</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-muted pt-1">
                    {microFrontendsDetail.rapidFireQuestions.map((q, idx) => (
                      <div key={idx} className="flex gap-2 items-start bg-[#030712] border border-card-border/60 p-3 rounded-lg leading-relaxed">
                        <span className="text-orange-500 font-bold shrink-0">{idx + 1}.</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Red Flags & Pitfalls */}
              <section id="pitfalls" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest border-b border-red-500/20 pb-2 flex items-center gap-1.5">
                    <AlertTriangle className="h-4.5 w-4.5 text-red-400 shrink-0" />
                    Bad Answers to Avoid
                  </h3>
                  <div className="flex flex-col gap-3 text-xs text-text-muted">
                    {microFrontendsDetail.redFlags.map((flag, i) => (
                      <div key={i} className="p-3.5 rounded-xl border border-red-500/10 bg-red-500/5 flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] text-red-400 font-bold leading-normal">
                          &ldquo;{flag.answer}&rdquo;
                        </span>
                        <p className="text-[11px] leading-relaxed text-red-300/80">
                          <strong>Why Weak: </strong>{flag.whyWeak}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/20 pb-2 flex items-center gap-1.5">
                      <Sparkles className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                      Strong Candidate Phrases
                    </h3>
                    <ul className="flex flex-col gap-2.5 text-[11px] text-text-muted leading-relaxed list-none">
                      {microFrontendsDetail.strongCandidatePhrases.map((phrase, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>&ldquo;{phrase}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest border-b border-orange-500/20 pb-2 flex items-center gap-1.5">
                      <AlertTriangle className="h-4.5 w-4.5 text-orange-500 shrink-0" />
                      Common Mistakes
                    </h3>
                    <ul className="flex flex-col gap-2 text-[11px] text-text-muted leading-relaxed list-none">
                      {microFrontendsDetail.commonMistakes.slice(0, 5).map((mistake, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-orange-500 shrink-0 font-bold mt-0.5">•</span>
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column - Architect Checklist */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24">
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-4">
                <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Prep Outline
                </h4>
                <div className="flex flex-col gap-2.5 text-[11px] text-text-muted">
                  <Link href="#checklist" className="hover:text-cyan-400 transition-colors font-mono">1. 60-Sec Checklist</Link>
                  <Link href="#answer-framework" className="hover:text-cyan-400 transition-colors font-mono">2. Answer Structuring</Link>
                  <Link href="#questions" className="hover:text-cyan-400 transition-colors font-mono">3. Question Bank</Link>
                  <Link href="#simulator" className="hover:text-cyan-400 transition-colors font-mono">4. Simulator & Rubrics</Link>
                  <Link href="#rapid-fire" className="hover:text-cyan-400 transition-colors font-mono">5. Rapid-Fire Round</Link>
                  <Link href="#pitfalls" className="hover:text-cyan-400 transition-colors font-mono">6. Common Traps</Link>
                </div>
              </div>

              {/* Architect Checklist Card */}
              <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/40 pb-2">
                  Architect Checklist
                </h4>
                <p className="text-[9px] text-text-muted uppercase tracking-wider font-mono">Assess your preparation level:</p>
                <div className="flex flex-col gap-2.5 mt-1">
                  {microFrontendsDetail.architectChecklist.map((item, idx) => {
                    const isChecked = !!checklistStates[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleChecklistItem(idx)}
                        className="flex items-start gap-2.5 text-left text-[11px] text-text-muted hover:text-foreground transition-all group/check"
                      >
                        <div className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isChecked 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                            : "border-card-border group-hover/check:border-orange-500/30"
                        }`}>
                          {isChecked && <Check className="h-3 w-3 text-emerald-400" />}
                        </div>
                        <span className={isChecked ? "line-through text-text-muted/50" : ""}>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
