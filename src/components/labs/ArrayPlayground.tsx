"use client";

import React, { useState } from "react";
import { Play, Plus, Trash2, FastForward, RotateCcw, ArrowRightLeft } from "lucide-react";

export default function ArrayPlayground() {
  const [array, setArray] = useState<number[]>([12, 35, 7, 19, 24, 5, 8]);
  const [inputValue, setInputValue] = useState("10");
  const [inputIndex, setInputIndex] = useState("2");
  
  // Animation highlights
  const [activeCell, setActiveCell] = useState<number | null>(null);
  const [leftPointer, setLeftPointer] = useState<number | null>(null);
  const [rightPointer, setRightPointer] = useState<number | null>(null);
  const [windowStart, setWindowStart] = useState<number | null>(null);
  const [windowEnd, setWindowEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logs, setLogs] = useState<string[]>(["Array initialized. Choose an action."]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  const handleReset = () => {
    setArray([12, 35, 7, 19, 24, 5, 8]);
    setActiveCell(null);
    setLeftPointer(null);
    setRightPointer(null);
    setWindowStart(null);
    setWindowEnd(null);
    setIsAnimating(false);
    addLog("Reset array to initial state.");
  };

  const handleInsert = () => {
    const val = parseInt(inputValue);
    const idx = parseInt(inputIndex);
    if (isNaN(val) || isNaN(idx) || idx < 0 || idx > array.length) {
      addLog("⚠️ Invalid insert parameters.");
      return;
    }
    const newArr = [...array];
    newArr.splice(idx, 0, val);
    setArray(newArr);
    addLog(`Inserted value ${val} at index ${idx}.`);
  };

  const handleDelete = () => {
    const idx = parseInt(inputIndex);
    if (isNaN(idx) || idx < 0 || idx >= array.length) {
      addLog("⚠️ Invalid index to delete.");
      return;
    }
    const deletedVal = array[idx];
    const newArr = array.filter((_, i) => i !== idx);
    setArray(newArr);
    addLog(`Deleted value ${deletedVal} from index ${idx}.`);
  };

  // Traversal animation
  const handleTraverse = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCell(null);
    setLeftPointer(null);
    setRightPointer(null);
    setWindowStart(null);
    setWindowEnd(null);
    addLog("Starting array traversal...");

    let index = 0;
    const interval = setInterval(() => {
      if (index < array.length) {
        setActiveCell(index);
        addLog(`Visited index ${index}: element value is ${array[index]}.`);
        index++;
      } else {
        clearInterval(interval);
        setActiveCell(null);
        setIsAnimating(false);
        addLog("✓ Traversal completed.");
      }
    }, 800);
  };

  // Sliding Window animation
  const handleSlidingWindow = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCell(null);
    setLeftPointer(null);
    setRightPointer(null);
    
    addLog("Starting Sliding Window (Window size = 3)...");

    let start = 0;
    let end = 2; // Window of size 3

    setWindowStart(start);
    setWindowEnd(end);

    const interval = setInterval(() => {
      if (end < array.length) {
        setWindowStart(start);
        setWindowEnd(end);
        const sub = array.slice(start, end + 1);
        const sum = sub.reduce((a, b) => a + b, 0);
        addLog(`Window [${start} to ${end}]: [${sub.join(", ")}], Sum = ${sum}.`);
        start++;
        end++;
      } else {
        clearInterval(interval);
        setWindowStart(null);
        setWindowEnd(null);
        setIsAnimating(false);
        addLog("✓ Sliding Window animation completed.");
      }
    }, 1200);
  };

  // Two Pointer animation
  const handleTwoPointer = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCell(null);
    setWindowStart(null);
    setWindowEnd(null);
    addLog("Starting Two Pointer traversal (converging inward)...");

    let left = 0;
    let right = array.length - 1;

    setLeftPointer(left);
    setRightPointer(right);

    const interval = setInterval(() => {
      if (left <= right) {
        setLeftPointer(left);
        setRightPointer(right);
        if (left === right) {
          addLog(`Pointers met at index ${left}: value is ${array[left]}.`);
        } else {
          addLog(`Left pointer index ${left} (${array[left]}) | Right pointer index ${right} (${array[right]}).`);
        }
        left++;
        right--;
      } else {
        clearInterval(interval);
        setLeftPointer(null);
        setRightPointer(null);
        setIsAnimating(false);
        addLog("✓ Two Pointer animation completed.");
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Visual Array Elements Grid */}
      <div className="flex flex-col items-center gap-3 border border-card-border/60 bg-[#030712] rounded-2xl p-6 shadow-inner relative overflow-hidden min-h-[160px] justify-center">
        <div className="absolute top-2 right-4 text-[9px] font-mono text-text-muted uppercase">Array Representation</div>

        <div className="flex gap-2.5 sm:gap-4 overflow-x-auto w-full justify-center py-4">
          {array.map((val, idx) => {
            const isHighlighted = activeCell === idx;
            const isLeft = leftPointer === idx;
            const isRight = rightPointer === idx;
            const isInWindow = windowStart !== null && windowEnd !== null && idx >= windowStart && idx <= windowEnd;

            let borderStyle = "border-card-border/60 bg-[#050811]/60";
            if (isHighlighted) {
              borderStyle = "border-orange-500 bg-orange-500/10 shadow-md shadow-orange-500/20 scale-105";
            } else if (isInWindow) {
              borderStyle = "border-cyan-400 bg-cyan-400/10 shadow-md shadow-cyan-400/20";
            } else if (isLeft && isRight) {
              borderStyle = "border-violet-500 bg-violet-500/25 scale-105";
            } else if (isLeft) {
              borderStyle = "border-blue-500 bg-blue-500/20 scale-105";
            } else if (isRight) {
              borderStyle = "border-rose-500 bg-rose-500/20 scale-105";
            }

            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 shrink-0 transition-all duration-300">
                <span className="text-[10px] font-mono text-text-muted">idx {idx}</span>
                
                <div className={`h-12 w-12 flex items-center justify-center rounded-xl border font-mono font-bold text-sm text-foreground transition-all duration-300 ${borderStyle}`}>
                  {val}
                </div>

                {/* Pointer Indicators */}
                <div className="h-4 flex items-center justify-center text-[8px] font-mono font-extrabold uppercase select-none">
                  {isLeft && isRight && <span className="text-violet-400">L & R</span>}
                  {!isRight && isLeft && <span className="text-blue-400">Left (L)</span>}
                  {!isLeft && isRight && <span className="text-rose-400">Right (R)</span>}
                  {isInWindow && !isLeft && !isRight && <span className="text-cyan-400">Win</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Operations & Inputs Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Left Control Column (7/12 width) */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Value</span>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-20 rounded border border-card-border bg-[#030712] px-2 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Index</span>
                <input
                  type="number"
                  value={inputIndex}
                  onChange={(e) => setInputIndex(e.target.value)}
                  className="w-20 rounded border border-card-border bg-[#030712] px-2 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={handleInsert}
                disabled={isAnimating}
                className="inline-flex items-center gap-1 rounded bg-[#050811]/80 hover:bg-[#070b16]/75 border border-card-border text-foreground px-3.5 py-2 text-xs font-bold transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Plus className="h-3.5 w-3.5 text-emerald-500" />
                Insert
              </button>
              <button
                onClick={handleDelete}
                disabled={isAnimating}
                className="inline-flex items-center gap-1 rounded bg-[#050811]/80 hover:bg-[#070b16]/75 border border-card-border text-foreground px-3.5 py-2 text-xs font-bold transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Trash2 className="h-3.5 w-3.5 text-rose-500" />
                Delete
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 rounded bg-card-bg/40 hover:bg-card-bg/75 border border-card-border text-foreground px-3.5 py-2 text-xs font-bold transition-all cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5 text-text-muted" />
                Reset
              </button>
            </div>
          </div>

          {/* Preset Algorithms Animation triggers */}
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/60 pb-2">Preset Patterns Simulations</span>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleTraverse}
                disabled={isAnimating}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Traverse Array
              </button>
              <button
                onClick={handleSlidingWindow}
                disabled={isAnimating}
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-cyan-700 shadow-md shadow-cyan-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <FastForward className="h-3.5 w-3.5" />
                Sliding Window
              </button>
              <button
                onClick={handleTwoPointer}
                disabled={isAnimating}
                className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-purple-700 shadow-md shadow-purple-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowRightLeft className="h-3.5 w-3.5" />
                Two Pointers
              </button>
            </div>
          </div>
        </div>

        {/* Right Log Console (5/12 width) */}
        <div className="md:col-span-4 flex flex-col gap-4 w-full">
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-3 shrink-0 min-h-[200px] select-text">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/60 pb-2">Execution trace</span>
            <div className="flex flex-col gap-2 leading-relaxed">
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
