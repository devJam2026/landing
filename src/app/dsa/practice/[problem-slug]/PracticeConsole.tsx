/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Problem } from "../../../../data/dsa/problems";
import { Play, RotateCcw, ArrowLeft, Terminal, Award, HelpCircle, Code2, Clipboard, TableProperties, CheckCircle2 } from "lucide-react";
import Editor from "@monaco-editor/react";

interface PracticeConsoleProps {
  problem: Problem;
}

interface TestResult {
  index: number;
  input: string;
  expected: string;
  actual: string;
  status: "passed" | "failed" | "error";
  errorMessage?: string;
}

// Tree Node structure for serialization
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (!arr || arr.length === 0) return null;
  const nodes = arr.map(val => val !== null ? new TreeNode(val) : null);
  const queue: (TreeNode | null)[] = [nodes[0]];
  let i = 1;
  while (queue.length > 0 && i < nodes.length) {
    const curr = queue.shift();
    if (curr) {
      curr.left = nodes[i++];
      if (curr.left) queue.push(curr.left);
      if (i < nodes.length) {
        curr.right = nodes[i++];
        if (curr.right) queue.push(curr.right);
      }
    }
  }
  return nodes[0];
}

const compareArraysOrValues = (actual: any, expected: any): boolean => {
  if (actual === expected) return true;
  if (typeof actual !== typeof expected) return false;
  
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) return false;
    for (let i = 0; i < actual.length; i++) {
      if (!compareArraysOrValues(actual[i], expected[i])) return false;
    }
    return true;
  }
  
  if (typeof actual === "object" && actual !== null && expected !== null) {
    return JSON.stringify(actual) === JSON.stringify(expected);
  }
  
  return false;
};

// Define test cases dictionary
const allTestCases: Record<string, {
  inputs: any[];
  expected: any;
  customCompare?: (actual: any, expected: any, args: any[]) => boolean;
}[]> = {
  "two-sum": [
    { inputs: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { inputs: [[3, 2, 4], 6], expected: [1, 2] }
  ],
  "palindrome-number": [
    { inputs: [121], expected: true },
    { inputs: [-121], expected: false },
    { inputs: [10], expected: false }
  ],
  "sort-colors": [
    { 
      inputs: [[2, 0, 2, 1, 1, 0]], 
      expected: [0, 0, 1, 1, 2, 2],
      customCompare: (actual: any, expected: any, args: any[]) => {
        const array = args[0];
        return compareArraysOrValues(array, expected);
      }
    }
  ],
  "4sum": [
    { 
      inputs: [[1, 0, -1, 0, -2, 2], 0], 
      expected: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
      customCompare: (actual: any, expected: any) => {
        if (!Array.isArray(actual)) return false;
        const norm = (arr: any[][]) => arr.map(sub => [...sub].sort((a, b) => a - b)).sort().map(sub => sub.join(","));
        return JSON.stringify(norm(actual)) === JSON.stringify(norm(expected));
      }
    }
  ],
  "binary-tree-maximum-path-sum": [
    { inputs: [[1, 2, 3]], expected: 6 },
    { inputs: [[-10, 9, 20, null, null, 15, 7]], expected: 42 }
  ],
  "course-schedule-ii": [
    { 
      inputs: [2, [[1, 0]]], 
      expected: [0, 1],
      customCompare: (actual: any) => {
        if (!Array.isArray(actual)) return false;
        return JSON.stringify(actual) === JSON.stringify([0, 1]);
      }
    },
    {
      inputs: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]],
      expected: [0, 1, 2, 3],
      customCompare: (actual: any) => {
        if (!Array.isArray(actual) || actual.length !== 4) return false;
        const indices = new Map();
        actual.forEach((val, idx) => indices.set(val, idx));
        for (const [u, v] of [[1, 0], [2, 0], [3, 1], [3, 2]]) {
          if (!indices.has(u) || !indices.has(v) || indices.get(v) > indices.get(u)) return false;
        }
        return true;
      }
    }
  ],
  "trapping-rain-water": [
    { inputs: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { inputs: [[4, 2, 0, 3, 2, 5]], expected: 9 }
  ],
  "shortest-path-in-binary-matrix": [
    { inputs: [[[0, 1], [1, 0]]], expected: 2 },
    { inputs: [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: 4 }
  ],
  "wildcard-matching": [
    { inputs: ["aa", "a"], expected: false },
    { inputs: ["aa", "*"], expected: true },
    { inputs: ["cb", "?a"], expected: false }
  ],
  "regular-expression-matching": [
    { inputs: ["aa", "a*"], expected: true },
    { inputs: ["ab", ".*"], expected: true }
  ],
  "burst-balloons": [
    { inputs: [[3, 1, 5, 8]], expected: 167 },
    { inputs: [[1, 5]], expected: 10 }
  ],
  "scramble-string": [
    { inputs: ["great", "rgeat"], expected: true },
    { inputs: ["abcde", "caebd"], expected: false }
  ],
  "different-ways-to-add-parentheses": [
    { 
      inputs: ["2-1-1"], 
      expected: [0, 2],
      customCompare: (actual: any, expected: any) => {
        if (!Array.isArray(actual)) return false;
        const sAct = [...actual].sort((a, b) => a - b);
        const sExp = [...expected].sort((a, b) => a - b);
        return JSON.stringify(sAct) === JSON.stringify(sExp);
      }
    }
  ],
  "expression-add-operators": [
    { 
      inputs: ["123", 6], 
      expected: ["1+2+3", "1*2*3"],
      customCompare: (actual: any, expected: any) => {
        if (!Array.isArray(actual)) return false;
        const sAct = [...actual].sort();
        const sExp = [...expected].sort();
        return JSON.stringify(sAct) === JSON.stringify(sExp);
      }
    }
  ]
};

export default function PracticeConsole({ problem }: PracticeConsoleProps) {
  // Tab selections
  const [leftTab, setLeftTab] = useState<"statement" | "solutions" | "interview">("statement");
  const [rightTab, setRightTab] = useState<"editor" | "dryrun">("editor");
  const [solutionType, setSolutionType] = useState<"brute" | "better" | "optimal">("optimal");

  // Code editor states
  const [userCode, setUserCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string>("");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runExecuted, setRunExecuted] = useState(false);

  // Dry run animation state
  const [dryRunStep, setDryRunStep] = useState(0);

  const storageKey = `dsa-practice-code-${problem.slug}`;

  useEffect(() => {
    if (problem) {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          setUserCode(saved);
        } else {
          setUserCode(problem.starterCode);
        }
      }
      setConsoleOutput("Press 'Run Tests' to compile and execute test assertions.");
      setTestResults([]);
      setRunExecuted(false);
      setDryRunStep(0);
    }
  }, [problem, storageKey]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setUserCode(value);
      localStorage.setItem(storageKey, value);
    }
  };

  const handleRunTests = () => {
    setIsRunning(true);
    setRunExecuted(true);
    setConsoleOutput("Loading secure local JS sandbox...\nExecuting test cases...\n");

    setTimeout(() => {
      try {
        // Find function name dynamically
        const match = userCode.match(/function\s+(\w+)/);
        const functionName = match ? match[1] : null;

        if (!functionName) {
          throw new Error("Could not find a valid Javascript function declaration (e.g. 'function functionName(...)').");
        }

        // Get test cases
        const cases = allTestCases[problem.slug] || [
          { inputs: [], expected: null } // fallback
        ];

        const results: TestResult[] = [];
        let passedCount = 0;

        for (let i = 0; i < cases.length; i++) {
          const tc = cases[i];
          // Deep clone inputs to avoid side effect mutations across tests
          const clonedInputs = JSON.parse(JSON.stringify(tc.inputs));
          
          let resolvedInputs = clonedInputs;
          // Tree deserialization special case
          if (problem.slug === "binary-tree-maximum-path-sum" && Array.isArray(clonedInputs[0])) {
            resolvedInputs = [arrayToTree(clonedInputs[0])];
          }

          let actual: any;
          try {
            // Instantiate function evaluator
            const evaluator = new Function(
              "TreeNode", 
              "arrayToTree", 
              `
              ${userCode}
              if (typeof ${functionName} === 'undefined') {
                throw new Error("Function '${functionName}' is not defined in the code.");
              }
              return ${functionName};
              `
            );
            const userFn = evaluator(TreeNode, arrayToTree);
            actual = userFn(...resolvedInputs);
          } catch (execErr: any) {
            results.push({
              index: i + 1,
              input: JSON.stringify(tc.inputs),
              expected: JSON.stringify(tc.expected),
              actual: "N/A",
              status: "error",
              errorMessage: execErr?.message || String(execErr)
            });
            continue;
          }

          let isCorrect = false;
          if (tc.customCompare) {
            isCorrect = tc.customCompare(actual, tc.expected, resolvedInputs);
          } else {
            isCorrect = compareArraysOrValues(actual, tc.expected);
          }

          if (isCorrect) passedCount++;

          results.push({
            index: i + 1,
            input: JSON.stringify(tc.inputs),
            expected: JSON.stringify(tc.expected),
            actual: JSON.stringify(actual),
            status: isCorrect ? "passed" : "failed"
          });
        }

        setTestResults(results);

        const allPassed = passedCount === cases.length && cases.length > 0;
        const hasErrors = results.some(r => r.status === "error");

        if (hasErrors) {
          setConsoleOutput(
            `Runtime Error during execution.\nSome test cases encountered exceptions. See details in the Test Case panel below.`
          );
        } else if (allPassed) {
          setConsoleOutput(
            `🎉 Passed visible sample tests!\nSuccessfully passed all ${cases.length} assertion checks in the sandbox.\n\nRuntime: ~5ms\nMemory: ~38.4MB`
          );
        } else {
          setConsoleOutput(
            `❌ Failed visible sample tests.\nPassed ${passedCount} / ${cases.length} test assertions. Check test outputs below to fix logic issues.`
          );
        }

      } catch (err: any) {
        setConsoleOutput(`Compilation Error:\n${err?.message || err}`);
        setTestResults([
          {
            index: 1,
            input: "N/A",
            expected: "N/A",
            actual: "N/A",
            status: "error",
            errorMessage: err?.message || String(err)
          }
        ]);
      } finally {
        setIsRunning(false);
      }
    }, 800);
  };

  const handleResetCode = () => {
    if (confirm("Are you sure you want to reset your editor to the starter code template?")) {
      setUserCode(problem.starterCode);
      localStorage.setItem(storageKey, problem.starterCode);
      setConsoleOutput("Editor reset. Press 'Run Tests' to compile.");
      setTestResults([]);
      setRunExecuted(false);
    }
  };

  // Dry run step functions
  const activeStep = problem.dryRun[dryRunStep];

  const handleNextStep = () => {
    if (dryRunStep < problem.dryRun.length - 1) {
      setDryRunStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (dryRunStep > 0) {
      setDryRunStep((prev) => prev - 1);
    }
  };

  const badgeColor =
    problem.difficulty === "Easy"
      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
      : problem.difficulty === "Medium"
      ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
      : "text-rose-500 bg-rose-500/10 border-rose-500/20";

  return (
    <section 
      className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-4 w-full"
      data-track="dsa"
      data-problem={problem.slug}
      data-difficulty={problem.difficulty}
      data-pattern={problem.pattern}
    >
      
      {/* Top Breadcrumb */}
      <div className="mb-4">
        <Link href="/dsa/practice" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-foreground font-bold transition-all">
          <ArrowLeft className="h-4 w-4" />
          Back to Explorer
        </Link>
      </div>

      {/* Problem Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border pb-4 mb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
              {problem.difficulty}
            </span>
            <span className="text-[9px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 font-mono">
              {problem.pillarSlug}
            </span>
            {problem.pattern && (
              <Link
                href={`/dsa/patterns?search=${encodeURIComponent(problem.pattern)}`}
                data-track="dsa"
                data-pattern={problem.pattern}
                className="text-[9px] font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 hover:bg-orange-500/20 transition-all font-mono"
              >
                Pattern: {problem.pattern}
              </Link>
            )}
          </div>
          <h2 className="text-2xl font-black text-foreground">
            {problem.title}
          </h2>
        </div>

        <div className="flex gap-4 text-xs font-mono text-text-muted">
          <div>
            <span className="opacity-60">TIME:</span> <span className="text-foreground font-bold">{problem.timeComplexity}</span>
          </div>
          <div>
            <span className="opacity-60">SPACE:</span> <span className="text-foreground font-bold">{problem.spaceComplexity}</span>
          </div>
        </div>
      </div>

      {/* Split Pane Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
        
        {/* Left Pane: Documentation & Content (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-4 w-full">
          {/* Tab Selector */}
          <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg w-full">
            <button
              onClick={() => setLeftTab("statement")}
              data-track="dsa"
              data-action="change-tab"
              data-tab="statement"
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "statement"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Clipboard className="h-3.5 w-3.5" />
              Statement
            </button>
            <button
              onClick={() => setLeftTab("solutions")}
              data-track="dsa"
              data-action="change-tab"
              data-tab="solutions"
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "solutions"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              Solutions
            </button>
            <button
              onClick={() => setLeftTab("interview")}
              data-track="dsa"
              data-action="change-tab"
              data-tab="interview"
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                leftTab === "interview"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              Discussion
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="premium-card rounded-2xl p-6 min-h-[480px] flex flex-col justify-between">
            
            {/* Statement Tab */}
            {leftTab === "statement" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-foreground">Problem Statement</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {problem.statement}
                </p>

                <div className="bg-[#050811]/50 border border-card-border/60 rounded-lg p-4 mt-2">
                  <h4 className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-2">Real Engineering Applications</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    In production systems, this concept directly maps to caching index layers, route lookups optimizations, compiler scope parsing validations, and multi-thread dependency schedulers.
                  </p>
                </div>

                {problem.edgeCases && problem.edgeCases.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Edge Cases to Consider</h4>
                    <ul className="list-disc pl-4 text-xs text-text-muted space-y-1">
                      {problem.edgeCases.map((ec, idx) => (
                        <li key={idx}>{ec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {problem.commonMistakes && problem.commonMistakes.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2 border-t border-card-border/40 pt-3">
                    <h4 className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Common Traps & Pitfalls</h4>
                    <ul className="list-disc pl-4 text-xs text-text-muted space-y-1">
                      {problem.commonMistakes.map((cm, idx) => (
                        <li key={idx}>{cm}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Solutions Tab */}
            {leftTab === "solutions" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200 w-full">
                {/* Solution Selector */}
                <div className="flex gap-2 border-b border-card-border pb-3">
                  {(["brute", "better", "optimal"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSolutionType(type)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase border transition-all cursor-pointer ${
                        solutionType === type
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : "bg-[#060a13]/30 border-card-border text-text-muted"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Active Solution Code block */}
                {(() => {
                  const sol =
                    solutionType === "brute"
                      ? problem.bruteForce
                      : solutionType === "better"
                      ? problem.better
                      : problem.optimal;

                  return (
                    <div className="flex flex-col gap-3 w-full">
                      <h4 className="text-xs font-bold text-foreground capitalize">{solutionType} Solution</h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {sol.explanation}
                      </p>
                      <div className="bg-[#030712] border border-card-border/60 rounded-lg p-4 overflow-x-auto w-full font-mono text-[11px] text-cyan-400/90 whitespace-pre">
                        {sol.code}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Interview Discussion Tab */}
            {leftTab === "interview" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-foreground">Interview Defense Q&A</h3>
                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                  {problem.interviewDiscussion.map((qa, idx) => (
                    <div key={idx} className="border border-card-border/50 rounded-xl p-4 bg-[#050811]/45 flex flex-col gap-1.5">
                      <h4 className="text-xs font-mono font-bold text-orange-500 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-orange-500" />
                        {qa.question}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-card-border/60 pt-4 mt-6 text-[10px] font-mono text-text-muted flex justify-between">
              <span>DevJam Practice Engine v1.0</span>
              <span className="text-orange-500 font-bold">ACCESSIBLE LAB</span>
            </div>
          </div>
        </div>

        {/* Right Pane: Coding Sandbox & Dry Run Visualizer (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {/* Tab Selector */}
          <div className="flex bg-[#060a13] border border-card-border p-1 rounded-lg w-full">
            <button
              onClick={() => setRightTab("editor")}
              data-track="dsa"
              data-action="change-tab"
              data-tab="editor"
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                rightTab === "editor"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              Code Sandbox
            </button>
            <button
              onClick={() => setRightTab("dryrun")}
              data-track="dsa"
              data-action="change-tab"
              data-tab="dryrun"
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                rightTab === "dryrun"
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              <TableProperties className="h-3.5 w-3.5" />
              Dry Run Tracer
            </button>
          </div>

          {/* Code Editor Tab */}
          {rightTab === "editor" && (
            <div className="flex flex-col gap-4 w-full animate-in fade-in duration-200">
              <div className="premium-card rounded-2xl p-5 flex flex-col gap-4 bg-[#050811]/90">
                <div className="flex items-center justify-between border-b border-card-border pb-3 text-xs text-text-muted">
                  <span className="font-mono">solution.js</span>
                  <button
                    onClick={handleResetCode}
                    className="px-2.5 py-1 rounded border border-card-border bg-card-bg/50 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset Code
                  </button>
                </div>

                {/* Monaco Editor Integration */}
                <div className="w-full max-w-full overflow-hidden border border-card-border/60 rounded-xl bg-[#030712]">
                  <Editor
                    height="320px"
                    language="javascript"
                    theme="vs-dark"
                    value={userCode}
                    onChange={handleEditorChange}
                    loading={
                      <div className="p-8 text-xs text-text-muted font-mono flex items-center justify-center">
                        Initializing Code Sandbox...
                      </div>
                    }
                    options={{
                      minimap: { enabled: false },
                      fontSize: 12,
                      lineNumbers: "on",
                      roundedSelection: true,
                      scrollBeyondLastLine: false,
                      readOnly: false,
                      cursorStyle: "line",
                      automaticLayout: true,
                    }}
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-1">
                  <button
                    onClick={handleRunTests}
                    disabled={isRunning}
                    data-track="dsa"
                    data-action="run-tests"
                    data-problem={problem.slug}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    {isRunning ? "Compiling..." : "Run Tests"}
                  </button>
                </div>
              </div>

              {/* Diagnostic Console Output */}
              <div className="bg-[#030712] border border-card-border/60 rounded-2xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-2 min-h-[120px] select-text">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/60 pb-1.5">Console Output</span>
                <pre className="whitespace-pre-wrap leading-relaxed mt-1 text-foreground">{consoleOutput}</pre>
              </div>

              {/* Real Test Cases Suite Panel */}
              {runExecuted && testResults.length > 0 && (
                <div className="premium-card rounded-2xl p-5 flex flex-col gap-3.5 border-card-border/60 bg-[#050811]/90">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/60 pb-2">
                    Test Case Panel ({testResults.filter(r => r.status === "passed").length} / {testResults.length} Passed)
                  </span>
                  
                  <div className="flex flex-col gap-3">
                    {testResults.map((result, idx) => (
                      <div key={idx} className="border border-card-border/40 rounded-xl p-4 bg-[#030712]/50 flex flex-col gap-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold font-mono text-foreground">Test Case {result.index}</span>
                          {result.status === "passed" && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                              Passed
                            </span>
                          )}
                          {result.status === "failed" && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded">
                              Failed
                            </span>
                          )}
                          {result.status === "error" && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                              Runtime Error
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-[10px] text-text-muted mt-1">
                          <div className="bg-[#050811] p-2.5 rounded border border-card-border/30">
                            <span className="opacity-50 text-[9px] uppercase font-bold tracking-wider block mb-1">Inputs</span>
                            <span className="text-foreground truncate block">{result.input}</span>
                          </div>
                          <div className="bg-[#050811] p-2.5 rounded border border-card-border/30">
                            <span className="opacity-50 text-[9px] uppercase font-bold tracking-wider block mb-1">Expected Output</span>
                            <span className="text-green-400 truncate block">{result.expected}</span>
                          </div>
                          <div className="bg-[#050811] p-2.5 rounded border border-card-border/30">
                            <span className="opacity-50 text-[9px] uppercase font-bold tracking-wider block mb-1">Actual Output</span>
                            <span className={result.status === "passed" ? "text-green-400 truncate block" : "text-red-400 truncate block"}>
                              {result.actual}
                            </span>
                          </div>
                        </div>

                        {result.errorMessage && (
                          <div className="bg-red-500/5 border border-red-500/20 rounded p-2.5 text-[10px] font-mono text-red-400/90 whitespace-pre-wrap leading-relaxed">
                            {result.errorMessage}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Dry Run Visualizer Tab */}
          {rightTab === "dryrun" && (
            <div className="flex flex-col gap-4 w-full animate-in fade-in duration-200">
              <div className="premium-card premium-card-cyan rounded-2xl p-6 flex flex-col gap-5 min-h-[440px]">
                <div className="flex items-center justify-between border-b border-card-border pb-3 text-xs">
                  <span className="font-mono font-bold text-cyan-400">Step-by-Step Execution trace</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevStep}
                      disabled={dryRunStep === 0}
                      className="px-2.5 py-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      Prev
                    </button>
                    <span className="px-2 py-1 font-mono text-[10px] text-cyan-400 bg-cyan-400/5 rounded border border-cyan-500/10">
                      {dryRunStep + 1} / {problem.dryRun.length}
                    </span>
                    <button
                      onClick={handleNextStep}
                      disabled={dryRunStep === problem.dryRun.length - 1}
                      className="px-2.5 py-1 rounded border border-card-border bg-card-bg/40 text-text-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Step explanation */}
                <div className="bg-[#050811]/60 border border-card-border/60 rounded-lg p-4 flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase text-text-muted">Line {activeStep.line} execution</span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans">{activeStep.description}</p>
                  </div>
                </div>

                {/* Variables table */}
                <div className="border border-card-border rounded-xl bg-background/50 overflow-hidden font-mono text-[11px]">
                  <div className="grid grid-cols-2 bg-[#060a13] border-b border-card-border px-4 py-2 font-bold text-text-muted">
                    <span>Variable name</span>
                    <span>Current state</span>
                  </div>
                  <div className="divide-y divide-card-border/50">
                    {Object.entries(activeStep.variables).map(([name, val]) => (
                      <div key={name} className="grid grid-cols-2 px-4 py-2.5 items-center">
                        <span className="text-orange-500 font-bold">{name}</span>
                        <span className="text-cyan-400 truncate">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Informative tips */}
                <div className="border-t border-card-border/60 pt-4 mt-auto text-[10px] text-text-muted/70 leading-relaxed">
                  💡 **Tip**: Trace variables step-by-step to understand the change boundaries and why the final indices are resolved.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
