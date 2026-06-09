"use client";

import React, { useState, useEffect } from "react";
import { Play, Send, RefreshCw, Cpu, Database, Network, ChevronRight } from "lucide-react";

export default function InteractiveLabs() {
  // --- Tokenizer Visualizer State ---
  const [tokenText, setTokenText] = useState("DevJam makes learning fun and highly interactive.");
  const [tokenizedList, setTokenizedList] = useState<{ text: string; id: number }[]>([]);

  useEffect(() => {
    // Basic mock BPE tokenizer: splits on words and syllables
    const words = tokenText.split(/(\s+)/);
    const mockTokens: { text: string; id: number }[] = [];
    words.forEach((word) => {
      if (word.trim() === "") {
        mockTokens.push({ text: word, id: 32 });
      } else {
        if (word.length > 5) {
          const mid = Math.ceil(word.length / 2);
          const part1 = word.slice(0, mid);
          const part2 = word.slice(mid);
          mockTokens.push({ text: part1, id: Math.floor(Math.random() * 20000) + 100 });
          mockTokens.push({ text: part2, id: Math.floor(Math.random() * 20000) + 100 });
        } else {
          mockTokens.push({ text: word, id: Math.floor(Math.random() * 20000) + 100 });
        }
      }
    });
    setTokenizedList(mockTokens);
  }, [tokenText]);

  // --- React Rendering Visualizer State ---
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [renderLogs, setRenderLogs] = useState<string[]>(["Click buttons to trigger renders"]);
  const [flashingNodes, setFlashingNodes] = useState<{ [key: string]: boolean }>({});

  const triggerFlash = (nodes: string[]) => {
    const newFlash: { [key: string]: boolean } = {};
    nodes.forEach(n => newFlash[n] = true);
    setFlashingNodes(prev => ({ ...prev, ...newFlash }));
    setTimeout(() => {
      setFlashingNodes(prev => {
        const reset = { ...prev };
        nodes.forEach(n => reset[n] = false);
        return reset;
      });
    }, 800);
  };

  const handleUpdateParent = () => {
    setParentCount(prev => prev + 1);
    setRenderLogs(prev => [
      `[State Update] Parent count is now ${parentCount + 1}`,
      `⚡ Parent rendering...`,
      `⚡ Component [Child A] (static) skipped rendering (Memoized)`,
      `⚡ Component [Child B] (receives props) rendering...`,
      `⚡ Component [Grandchild] rendering...`,
      ...prev.slice(0, 4)
    ]);
    triggerFlash(["parent", "childB", "grandchild"]);
  };

  const handleUpdateChild = () => {
    setChildCount(prev => prev + 1);
    setRenderLogs(prev => [
      `[State Update] Child B local count is now ${childCount + 1}`,
      `⚡ Component [Child B] rendering...`,
      `⚡ Component [Grandchild] rendering...`,
      `⚡ Parent skipped rendering`,
      ...prev.slice(0, 4)
    ]);
    triggerFlash(["childB", "grandchild"]);
  };

  // --- System Design Simulator State ---
  const [packetState, setPacketState] = useState<"idle" | "to-lb" | "to-web" | "to-db" | "done">("idle");
  const [packetLog, setPacketLog] = useState<string[]>(["Ready to simulate network requests"]);
  const [lbSelected, setLbSelected] = useState<"Web-1" | "Web-2" | null>(null);

  const simulateRequest = () => {
    if (packetState !== "idle") return;
    
    setPacketLog(["🚀 Client dispatching HTTP POST /api/v1/data"]);
    setPacketState("to-lb");
    
    setTimeout(() => {
      const selected = Math.random() > 0.5 ? "Web-1" : "Web-2";
      setLbSelected(selected);
      setPacketState("to-web");
      setPacketLog(prev => [`⚖️ Load Balancer routing request to backend [${selected}]`, ...prev]);
      
      setTimeout(() => {
        setPacketState("to-db");
        setPacketLog(prev => [`📂 [${selected}] querying User Database (SQL clustered store)`, ...prev]);
        
        setTimeout(() => {
          setPacketState("done");
          setPacketLog(prev => [`✅ Response returned: 200 OK (Payload JSON returned)`, ...prev]);
          
          setTimeout(() => {
            setPacketState("idle");
            setLbSelected(null);
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  // --- CI/CD Pipeline Visualizer State ---
  const [pipelineStep, setPipelineStep] = useState<"idle" | "source" | "build" | "test" | "deploy" | "success">("idle");
  const [pipelineLogs, setPipelineLogs] = useState<string[]>(["Idle. Click Run Pipeline."]);
  const [progressWidth, setProgressWidth] = useState(0);

  const runPipeline = () => {
    if (pipelineStep !== "idle" && pipelineStep !== "success") return;
    
    setPipelineStep("source");
    setProgressWidth(25);
    setPipelineLogs(["[Info] Pipeline started.", "▶️ Step 1: Checking out git repo (branch: main)...", "✓ Repository devjam-app fetched successfully."]);
    
    setTimeout(() => {
      setPipelineStep("build");
      setProgressWidth(50);
      setPipelineLogs(prev => ["▶️ Step 2: Compiling assets and packing chunks...", "npx next build --turbopack", "✓ Created next bundle directory (.next)", ...prev]);
      
      setTimeout(() => {
        setPipelineStep("test");
        setProgressWidth(75);
        setPipelineLogs(prev => ["▶️ Step 3: Running Jest unit tests and linters...", "npm run test", "✓ Pass: 16 test suites (82 assertions)", "✓ Pass: ESLint lint checks clean", ...prev]);
        
        setTimeout(() => {
          setPipelineStep("deploy");
          setProgressWidth(100);
          setPipelineLogs(prev => ["▶️ Step 4: Deploying artifacts to cloud host...", "Uploading static pages to CDN edge...", "✓ DNS resolved. Virtual deployment mapped.", ...prev]);
          
          setTimeout(() => {
            setPipelineStep("success");
            setPipelineLogs(prev => ["🎉 Build Success!", "Live URL: https://devjam.in", ...prev]);
          }, 1000);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  const getStepBg = (step: string) => {
    if (pipelineStep === "success") return "bg-emerald-500 border-emerald-400 text-white";
    if (pipelineStep === "idle") return "bg-input-bg border-card-border text-text-muted";
    
    const stepsOrder = ["source", "build", "test", "deploy"];
    const currentIdx = stepsOrder.indexOf(pipelineStep);
    const targetIdx = stepsOrder.indexOf(step);
    
    if (currentIdx > targetIdx) return "bg-emerald-500 border-emerald-400 text-white";
    if (currentIdx === targetIdx) return "bg-violet-600 border-violet-500 animate-pulse text-white";
    return "bg-input-bg border-card-border text-text-muted";
  };

  const colors = [
    "bg-violet-500/10 border-violet-500/20 dark:border-violet-500/30 text-violet-700 dark:text-violet-300",
    "bg-blue-500/10 border-blue-500/20 dark:border-blue-500/30 text-blue-700 dark:text-blue-300",
    "bg-emerald-500/10 border-emerald-500/20 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    "bg-amber-500/10 border-amber-500/20 dark:border-amber-500/30 text-amber-700 dark:text-amber-300",
    "bg-rose-500/10 border-rose-500/20 dark:border-rose-500/30 text-rose-700 dark:text-rose-300",
    "bg-cyan-500/10 border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300",
  ];

  return (
    <section id="labs" className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-12 scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-card-border pb-4 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase">
            Featured Labs
          </span>
          <h2 className="text-3xl font-black text-foreground mt-1">
            Interactive. Practical. Hands-on.
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 flex items-center gap-1 transition-colors duration-200 cursor-not-allowed"
        >
          View all labs <span className="text-[10px]">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Lab 1: Tokenizer Visualizer */}
        <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-violet-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-violet-500/10 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                AI Lab
              </span>
              <span className="text-[10px] text-text-muted font-semibold">BPE Algorithm</span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">Tokenizer Visualizer</h3>
            <p className="text-xs text-text-muted mb-6">
              Visualize how text is tokenized across different models.
            </p>
            
            {/* Input area */}
            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-text-muted uppercase mb-1.5">
                  Input String
                </label>
                <input
                  type="text"
                  value={tokenText}
                  onChange={(e) => setTokenText(e.target.value)}
                  className="w-full rounded-lg border border-input-border bg-input-bg px-3 py-2 text-xs text-foreground placeholder-gray-500 focus:border-violet-500 focus:outline-none"
                  placeholder="Type anything to tokenize..."
                />
              </div>
              
              {/* Output Tokens Box */}
              <div>
                <label className="block text-[10px] font-bold text-text-muted uppercase mb-1.5 flex justify-between">
                  <span>Tokens Output</span>
                  <span className="text-violet-600 dark:text-violet-400 font-bold font-mono">Count: {tokenizedList.length}</span>
                </label>
                <div className="min-h-24 p-3 rounded-lg border border-card-border bg-background/50 flex flex-wrap gap-1 items-start text-xs font-mono">
                  {tokenizedList.map((tok, idx) => (
                    <span
                      key={idx}
                      className={`px-1.5 py-0.5 rounded border text-[10px] leading-relaxed transition-all duration-100 font-semibold ${
                        tok.text.trim() === "" 
                          ? "bg-black/5 dark:bg-white/5 border-card-border text-text-muted w-3 h-5 text-center inline-block"
                          : colors[idx % colors.length]
                      }`}
                      title={`Token ID: ${tok.id}`}
                    >
                      {tok.text.trim() === "" ? "␣" : tok.text}
                    </span>
                  ))}
                  {tokenText === "" && (
                    <span className="text-text-muted italic">Start typing to see tokenizer output</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-text-muted pt-3 border-t border-card-border">
            <span>Model: GPT-4o Vocab</span>
            <span>•</span>
            <span>BPE split style</span>
          </div>
        </div>

        {/* Lab 2: React Rendering Visualizer */}
        <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Frontend Lab
              </span>
              <span className="text-[10px] text-text-muted font-semibold">Reconciliation</span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">React Rendering Visualizer</h3>
            <p className="text-xs text-text-muted mb-6">
              Understand React rendering and component tree reconciliation.
            </p>

            {/* Tree rendering nodes representation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              
              {/* Node tree visuals */}
              <div className="border border-card-border bg-background/50 rounded-lg p-3 flex flex-col items-center justify-center gap-3 min-h-36 relative w-full overflow-hidden">
                
                {/* Parent Node */}
                <div
                  className={`w-28 sm:w-32 rounded-lg border text-center p-2 text-[9px] sm:text-[10px] font-mono transition-all duration-300 ${
                    flashingNodes["parent"]
                      ? "bg-violet-500/20 border-violet-500 dark:bg-violet-600/30 dark:border-violet-500 shadow-md shadow-violet-500/20 scale-102"
                      : "bg-card-bg border-card-border text-foreground"
                  }`}
                >
                  <div className="font-bold">ParentComponent</div>
                  <div className="text-[8px] text-text-muted mt-0.5">State: count={parentCount}</div>
                </div>

                <div className="h-4 w-0.5 bg-card-border" />

                <div className="flex gap-2 sm:gap-4 w-full justify-center">
                  {/* Child A Node */}
                  <div
                    className={`w-20 sm:w-24 rounded-lg border text-center p-1.5 text-[8px] sm:text-[9px] font-mono transition-all duration-300 ${
                      flashingNodes["childA"]
                        ? "bg-blue-500/20 border-blue-500"
                        : "bg-card-bg/60 border-card-border text-text-muted"
                    }`}
                  >
                    <div className="font-bold leading-tight">ChildA (Memo)</div>
                    <div className="text-[7px] text-text-muted mt-0.5">Static</div>
                  </div>

                  {/* Child B Node */}
                  <div
                    className={`w-24 sm:w-28 rounded-lg border text-center p-1.5 text-[8px] sm:text-[9px] font-mono transition-all duration-300 ${
                      flashingNodes["childB"]
                        ? "bg-violet-500/20 border-violet-500 dark:bg-violet-600/30 dark:border-violet-500 shadow-md shadow-violet-500/20"
                        : "bg-card-bg border-card-border text-foreground"
                    }`}
                  >
                    <div className="font-bold leading-tight">ChildB</div>
                    <div className="text-[7px] sm:text-[8px] text-text-muted mt-0.5">Props: parentCount</div>
                    
                    <div className="my-1.5 h-3 w-px bg-card-border mx-auto" />
                    
                    {/* Grandchild */}
                    <div
                      className={`w-18 sm:w-24 rounded border text-center p-1 mx-auto text-[7px] sm:text-[8px] transition-all duration-300 ${
                        flashingNodes["grandchild"]
                          ? "bg-violet-500/30 border-violet-400"
                          : "bg-background border-card-border text-text-muted"
                      }`}
                    >
                      Grandchild
                    </div>
                  </div>
                </div>
              </div>

              {/* Logs terminal */}
              <div className="flex flex-col border border-card-border bg-[#030712] dark:bg-slate-950/80 rounded-lg p-3 font-mono text-[8px] sm:text-[9px] text-gray-400 h-36 overflow-y-auto w-full">
                <span className="text-violet-500 font-semibold mb-1">Renderer Log:</span>
                {renderLogs.map((log, i) => (
                  <span key={i} className="leading-relaxed border-b border-white/[0.01] py-0.5">
                    {log}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Control buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-2 w-full">
              <button
                onClick={handleUpdateParent}
                className="w-full sm:flex-1 py-2 text-[10px] font-bold rounded bg-violet-600 hover:bg-violet-500 text-white transition-colors cursor-pointer"
              >
                Set Parent State
              </button>
              <button
                onClick={handleUpdateChild}
                className="w-full sm:flex-1 py-2 text-[10px] font-bold rounded border border-card-border bg-card-bg hover:bg-background text-foreground transition-colors cursor-pointer"
              >
                Set ChildB State
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-text-muted pt-3 border-t border-card-border">
            <span>Algorithm: Virtual DOM Diffing</span>
          </div>
        </div>

        {/* Lab 3: System Design Simulator */}
        <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-500/10 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                System Design Lab
              </span>
              <span className="text-[10px] text-text-muted font-semibold">Distributed flow</span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">System Design Simulator</h3>
            <p className="text-xs text-text-muted mb-6">
              Visualize real-world system designs step by step.
            </p>

            {/* Architecture node board */}
            <div className="border border-card-border bg-background/50 rounded-lg p-3 sm:p-4 mb-4 flex flex-col justify-center min-h-36 relative overflow-hidden w-full">
              
              <div className="flex items-center justify-between px-1 text-[8px] sm:text-[9px] font-mono text-text-muted">
                
                {/* Client Node */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-card-bg border border-card-border flex items-center justify-center text-sm shadow-sm">
                    👤
                  </div>
                  <span>User</span>
                  {packetState === "to-lb" && (
                    <div className="absolute top-3 left-4 h-1.5 w-1.5 rounded-full bg-violet-500 animate-ping" />
                  )}
                </div>

                <ChevronRight className="text-card-border h-3.5 w-3.5" />

                {/* Load Balancer */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-card-bg border border-card-border flex items-center justify-center text-orange-500 shadow-sm">
                    <Network className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <span>LB</span>
                  {packetState === "to-web" && (
                    <div className="absolute top-3 left-4 h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping" />
                  )}
                </div>

                <ChevronRight className="text-card-border h-3.5 w-3.5" />

                {/* Backends Stack */}
                <div className="flex flex-col gap-1.5 relative">
                  {/* Web Server 1 */}
                  <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border text-[7px] sm:text-[8px] transition-colors duration-300 ${
                    lbSelected === "Web-1" ? "border-violet-500 bg-violet-500/10 text-foreground font-bold" : "border-card-border bg-card-bg/60"
                  }`}>
                    <Cpu className="h-2.5 w-2.5" />
                    <span>Web-1</span>
                  </div>
                  {/* Web Server 2 */}
                  <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border text-[7px] sm:text-[8px] transition-colors duration-300 ${
                    lbSelected === "Web-2" ? "border-violet-500 bg-violet-500/10 text-foreground font-bold" : "border-card-border bg-card-bg/60"
                  }`}>
                    <Cpu className="h-2.5 w-2.5" />
                    <span>Web-2</span>
                  </div>
                  {packetState === "to-db" && (
                    <div className="absolute top-4 left-12 h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
                  )}
                </div>

                <ChevronRight className="text-card-border h-3.5 w-3.5" />

                {/* Databases Node */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-card-bg border border-card-border flex items-center justify-center text-amber-500 shadow-sm">
                    <Database className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <span>DB Cluster</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 border-t border-card-border pt-2 text-[8px] sm:text-[9px] font-mono text-text-muted min-h-6 flex items-center">
                <span>{packetLog[0]}</span>
              </div>
            </div>
            
            {/* Control button */}
            <button
              onClick={simulateRequest}
              disabled={packetState !== "idle"}
              className="w-full py-2 text-[10px] font-bold rounded bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="h-3 w-3" />
              Send Request
            </button>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-text-muted pt-3 border-t border-card-border">
            <span>Topology: Round Robin LB</span>
          </div>
        </div>

        {/* Lab 4: CI/CD Pipeline Visualizer */}
        <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-green-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-green-50/80 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-500/20">
                DevOps Lab
              </span>
              <span className="text-[10px] text-text-muted font-semibold">Pipeline execution</span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">CI/CD Pipeline Visualizer</h3>
            <p className="text-xs text-text-muted mb-6">
              Build and visualize deployment pipelines.
            </p>

            {/* Stepper display */}
            <div className="border border-card-border bg-background/50 rounded-lg p-3 mb-4 w-full">
              <div className="flex items-center justify-between mb-3 px-1 text-[8px] sm:text-[9px] font-mono font-bold">
                
                {/* Step 1: Checkout */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold transition-colors duration-300 ${getStepBg("source")}`}>
                    1
                  </div>
                  <span>Source</span>
                </div>

                <div className="flex-1 h-0.5 bg-card-border mx-1 sm:mx-2" />

                {/* Step 2: Build */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold transition-colors duration-300 ${getStepBg("build")}`}>
                    2
                  </div>
                  <span>Build</span>
                </div>

                <div className="flex-1 h-0.5 bg-card-border mx-1 sm:mx-2" />

                {/* Step 3: Test */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold transition-colors duration-300 ${getStepBg("test")}`}>
                    3
                  </div>
                  <span>Test</span>
                </div>

                <div className="flex-1 h-0.5 bg-card-border mx-1 sm:mx-2" />

                {/* Step 4: Deploy */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold transition-colors duration-300 ${getStepBg("deploy")}`}>
                    4
                  </div>
                  <span>Deploy</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-input-bg h-1 rounded-full overflow-hidden mb-3">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300" 
                  style={{ width: `${progressWidth}%` }}
                />
              </div>

              {/* Console logging */}
              <div className="border border-card-border bg-[#030712] dark:bg-slate-950 rounded p-2 font-mono text-[8px] text-gray-400 h-20 overflow-y-auto flex flex-col gap-0.5">
                {pipelineLogs.map((log, idx) => (
                  <span key={idx} className={log.startsWith("✓") ? "text-emerald-400 font-semibold" : log.startsWith("🎉") ? "text-yellow-400 font-bold" : "text-gray-500"}>
                    {log}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Control action button */}
            <button
              onClick={runPipeline}
              disabled={pipelineStep !== "idle" && pipelineStep !== "success"}
              className="w-full py-2 text-[10px] font-bold rounded bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              {pipelineStep === "idle" || pipelineStep === "success" ? (
                <>
                  <Play className="h-3 w-3 fill-current" />
                  Run Pipeline
                </>
              ) : (
                <>
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  Running...
                </>
              )}
            </button>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-text-muted pt-3 border-t border-card-border">
            <span>Trigger: Push to main</span>
          </div>
        </div>

      </div>
    </section>
  );
}
