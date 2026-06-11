"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

type DpType = "fibonacci" | "stairs" | "coin";

export default function DpVisualizer() {
  const [dpType, setDpType] = useState<DpType>("fibonacci");
  const [inputVal, setInputVal] = useState(5);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logs, setLogs] = useState<string[]>(["Select a DP problem and trigger step animations."]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  // Computation results depending on inputVal
  const getFibonacciTable = (n: number) => {
    const table = [0, 1];
    for (let i = 2; i <= n; i++) {
      table[i] = table[i - 1] + table[i - 2];
    }
    return table.slice(0, n + 1);
  };

  const getStairsTable = (n: number) => {
    const table = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
      table[i] = table[i - 1] + table[i - 2];
    }
    return table.slice(0, n + 1);
  };

  const getCoinTable = (amount: number, coins = [1, 2, 5]) => {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    // Track steps for visualization
    const steps: { amt: number; coin: number; prevVal: number; newVal: number }[] = [];
    
    for (let i = 1; i <= amount; i++) {
      coins.forEach((c) => {
        if (i - c >= 0) {
          const prev = dp[i];
          const candidate = dp[i - c] + 1;
          if (candidate < dp[i]) {
            dp[i] = candidate;
            steps.push({ amt: i, coin: c, prevVal: prev, newVal: candidate });
          }
        }
      });
    }
    return { dp, steps };
  };

  const runDpAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveStep(null);
    addLog(`Initiating DP Bottom-Up Tabulation for N = ${inputVal}...`);

    let step = 0;
    const maxSteps = inputVal;

    const interval = setInterval(() => {
      if (step <= maxSteps) {
        setActiveStep(step);
        if (dpType === "fibonacci") {
          const t = getFibonacciTable(step);
          addLog(`Step ${step}: dp[${step}] = ${t[step] || 0}`);
        } else if (dpType === "stairs") {
          const t = getStairsTable(step);
          addLog(`Step ${step}: dp[${step}] = ${t[step] || 0}`);
        } else {
          const { dp } = getCoinTable(step);
          const val = dp[step];
          addLog(`Step ${step}: min coins for amount ${step} = ${val === Infinity ? "No combination" : val}`);
        }
        step++;
      } else {
        clearInterval(interval);
        setActiveStep(null);
        setIsAnimating(false);
        addLog("✓ Tabulation completed successfully.");
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Selection Tabs */}
      <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg w-full max-w-md">
        {(["fibonacci", "stairs", "coin"] as const).map((type) => (
          <button
            key={type}
            onClick={() => {
              setDpType(type);
              setInputVal(type === "coin" ? 6 : 5);
              setActiveStep(null);
              setLogs([`Switched to ${type.toUpperCase()}. Select N and click Run.`]);
            }}
            className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer capitalize ${
              dpType === type
                ? "bg-orange-600 text-white shadow-md"
                : "text-text-muted hover:text-foreground"
            }`}
          >
            {type === "fibonacci" ? "Fibonacci" : type === "stairs" ? "Climbing Stairs" : "Coin Change"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Panel: Top-Down Recursion Tree (6/12 width) */}
        <div className="md:col-span-6 flex flex-col gap-4 w-full">
          <div className="premium-card rounded-xl p-5 flex flex-col gap-4 min-h-[260px] relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[9px] font-mono text-text-muted uppercase">Top-Down Recursion Tree</div>
            
            <div className="flex flex-col gap-3 justify-center items-center h-full my-auto mt-6">
              {dpType === "fibonacci" && (
                <div className="flex flex-col items-center gap-3 text-xs font-mono">
                  <div className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 rounded">F({inputVal})</div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-2 border-l border-dashed border-card-border/60 pl-2">
                      <span className="text-[10px] text-text-muted">Calculated</span>
                      <div className="border border-card-border/60 bg-[#050811] px-2 py-0.5 rounded">F({inputVal - 1})</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border-r border-dashed border-card-border/60 pr-2">
                      <span className="text-[10px] text-orange-400 font-bold">Pruned (Memoized)</span>
                      <div className="border border-orange-500/30 bg-orange-500/5 px-2 py-0.5 rounded text-orange-500">F({inputVal - 2})</div>
                    </div>
                  </div>
                </div>
              )}

              {dpType === "stairs" && (
                <div className="flex flex-col items-center gap-3 text-xs font-mono">
                  <div className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 rounded">Ways({inputVal})</div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-text-muted">1 step</span>
                      <div className="border border-card-border/60 bg-[#050811] px-2 py-0.5 rounded">Ways({inputVal - 1})</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-orange-400 font-bold">Pruned</span>
                      <div className="border border-orange-500/30 bg-orange-500/5 px-2 py-0.5 rounded text-orange-500">Ways({inputVal - 2})</div>
                    </div>
                  </div>
                </div>
              )}

              {dpType === "coin" && (
                <div className="flex flex-col items-center gap-3 text-xs font-mono">
                  <div className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 rounded">Coins({inputVal})</div>
                  <div className="flex gap-4">
                    <div className="border border-card-border/60 bg-[#050811] px-1.5 py-0.5 rounded">Coins({inputVal - 1})</div>
                    <div className="border border-card-border/60 bg-[#050811] px-1.5 py-0.5 rounded">Coins({inputVal - 2})</div>
                    <div className="border border-orange-500/30 bg-orange-500/5 px-1.5 py-0.5 rounded text-orange-500">Coins({inputVal - 5})</div>
                  </div>
                </div>
              )}
              
              <p className="text-[10px] text-text-muted mt-4 text-center leading-relaxed max-w-xs">
                💡 **Notice**: The orange colored sub-branches are pruned immediately because the values are already computed and loaded from the memoization lookup cache, resulting in **O(N)** time instead of **O(2^N)**.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel: Bottom-Up Tabulation Grid (6/12 width) */}
        <div className="md:col-span-6 flex flex-col gap-4 w-full">
          <div className="premium-card premium-card-cyan rounded-xl p-5 flex flex-col gap-4 min-h-[260px] relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[9px] font-mono text-text-muted uppercase">Bottom-Up Tabulation Array</div>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-wrap gap-2.5 justify-center py-4">
                {(() => {
                  const items: { idx: number; val: number }[] = [];
                  if (dpType === "fibonacci") {
                    getFibonacciTable(inputVal).forEach((val, idx) => items.push({ idx, val }));
                  } else if (dpType === "stairs") {
                    getStairsTable(inputVal).forEach((val, idx) => items.push({ idx, val }));
                  } else {
                    getCoinTable(inputVal).dp.forEach((val, idx) => items.push({ idx, val }));
                  }

                  return items.map((item) => {
                    const isTabulated = activeStep !== null && item.idx <= activeStep;
                    const isCurrent = activeStep === item.idx;
                    
                    let style = "border-card-border/60 bg-[#050811]/45 text-text-muted opacity-40";
                    if (isCurrent) {
                      style = "border-cyan-400 bg-cyan-400/20 text-cyan-400 scale-105";
                    } else if (isTabulated) {
                      style = "border-card-border bg-[#060a13] text-foreground";
                    }

                    const displayVal = item.val === Infinity ? "∞" : item.val;

                    return (
                      <div key={item.idx} className="flex flex-col items-center gap-1 shrink-0 font-mono transition-all duration-300">
                        <span className="text-[9px] text-text-muted">dp[{item.idx}]</span>
                        <div className={`h-10 w-10 flex items-center justify-center rounded-lg border font-bold text-xs ${style}`}>
                          {displayVal}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Slider for input value selection */}
              <div className="flex items-center justify-between text-xs px-2 mt-4">
                <span className="text-text-muted uppercase tracking-wider font-bold">Select Target (N)</span>
                <div className="flex gap-2">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setInputVal(num);
                        setActiveStep(null);
                      }}
                      className={`h-6 w-6 rounded border font-mono text-[10px] font-bold transition-all cursor-pointer ${
                        inputVal === num 
                          ? "bg-orange-600 border-orange-500 text-white" 
                          : "border-card-border bg-input-bg hover:text-foreground"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traversal Trigger Footer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Left Action (7/12 width) */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="p-4 rounded-xl border border-card-border bg-[#060a13]/40 flex gap-4 items-center">
            <button
              onClick={runDpAnimation}
              disabled={isAnimating}
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Tabulate (N = {inputVal})
            </button>
            <p className="text-[10px] text-text-muted max-w-sm leading-relaxed">
              * Click Tabulate to trigger bottom-up array steps, filling elements iteratively from index 0.
            </p>
          </div>
        </div>

        {/* Right Log Console (5/12 width) */}
        <div className="md:col-span-4 flex flex-col gap-4 w-full">
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-2 shrink-0 min-h-[140px] select-text">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/60 pb-1.5">Execution logs</span>
            <div className="flex flex-col gap-1.5">
              {logs.map((log, index) => (
                <div key={index} className={`truncate ${index === 0 ? "text-foreground font-semibold" : "opacity-60"}`}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
