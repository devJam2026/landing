"use client";

import React, { useState, useEffect } from "react";
import { Play, Plus, RotateCcw } from "lucide-react";

interface TreeNode {
  val: number;
  x: number;
  y: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
const insertBST = (node: TreeNode | null, val: number, parentX: number, parentY: number, offset: number): TreeNode => {
  if (node === null) {
    return { val, x: parentX, y: parentY, left: null, right: null };
  }
  const nextOffset = Math.max(25, offset * 0.6);
  if (val < node.val) {
    node.left = insertBST(node.left, val, node.x - offset, node.y + 60, nextOffset);
  } else if (val > node.val) {
    node.right = insertBST(node.right, val, node.x + offset, node.y + 60, nextOffset);
  }
  return node;
};

export default function BinaryTreeVisualizer() {
  const [insertVal, setInsertVal] = useState("15");
  const [root, setRoot] = useState<TreeNode | null>(null);
  
  // Highlighting and traversal state
  const [activeVal, setActiveVal] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logs, setLogs] = useState<string[]>(["Tree initialized. Add nodes to populate."]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  // Prepopulate basic tree: 20 -> 10, 30 -> 5, 15, 25, 35
  useEffect(() => {
    let tree: TreeNode = { val: 20, x: 250, y: 40, left: null, right: null };
    tree = insertBST(tree, 10, 250, 40, 100);
    tree = insertBST(tree, 30, 250, 40, 100);
    tree = insertBST(tree, 5, 250, 40, 100);
    tree = insertBST(tree, 15, 250, 40, 100);
    tree = insertBST(tree, 25, 250, 40, 100);
    tree = insertBST(tree, 35, 250, 40, 100);
    setRoot(tree);
  }, []);

  const handleInsert = () => {
    const val = parseInt(insertVal);
    if (isNaN(val)) {
      addLog("⚠️ Invalid number.");
      return;
    }
    if (root === null) {
      setRoot({ val, x: 250, y: 40, left: null, right: null });
      addLog(`Inserted root node ${val}.`);
    } else {
      const copy = { ...root };
      insertBST(copy, val, 250, 40, 100);
      setRoot(copy);
      addLog(`Inserted node ${val} in Binary Search Tree.`);
    }
  };

  const handleClear = () => {
    setRoot(null);
    setActiveVal(null);
    setIsAnimating(false);
    addLog("Cleared tree.");
  };

  // Traversal Helper: collects nodes in specific order
  const getTraversalList = (type: "inorder" | "preorder" | "postorder" | "bfs"): number[] => {
    const res: number[] = [];
    if (!root) return res;

    const inorder = (node: TreeNode | null) => {
      if (!node) return;
      inorder(node.left);
      res.push(node.val);
      inorder(node.right);
    };

    const preorder = (node: TreeNode | null) => {
      if (!node) return;
      res.push(node.val);
      preorder(node.left);
      preorder(node.right);
    };

    const postorder = (node: TreeNode | null) => {
      if (!node) return;
      postorder(node.left);
      postorder(node.right);
      res.push(node.val);
    };

    const bfs = () => {
      const queue: TreeNode[] = [root];
      while (queue.length > 0) {
        const curr = queue.shift()!;
        res.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    };

    if (type === "inorder") inorder(root);
    else if (type === "preorder") preorder(root);
    else if (type === "postorder") postorder(root);
    else if (type === "bfs") bfs();

    return res;
  };

  const runTraversalAnimation = (type: "inorder" | "preorder" | "postorder" | "bfs") => {
    if (isAnimating || !root) return;
    setIsAnimating(true);
    addLog(`Running ${type.toUpperCase()} traversal...`);

    const list = getTraversalList(type);
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < list.length) {
        const active = list[index];
        setActiveVal(active);
        addLog(`Visited Node: ${active}`);
        index++;
      } else {
        clearInterval(interval);
        setActiveVal(null);
        setIsAnimating(false);
        addLog(`✓ ${type.toUpperCase()} traversal completed: [${list.join(", ")}]`);
      }
    }, 1000);
  };

  // Render SVG connections recursive helper
  const renderConnections = (node: TreeNode | null): React.ReactNode[] => {
    if (node === null) return [];
    const elements: React.ReactNode[] = [];
    
    if (node.left) {
      elements.push(
        <line
          key={`l-${node.val}-${node.left.val}`}
          x1={node.x}
          y1={node.y}
          x2={node.left.x}
          y2={node.left.y}
          stroke="#1e293b"
          strokeWidth="2.5"
        />
      );
      elements.push(...renderConnections(node.left));
    }
    
    if (node.right) {
      elements.push(
        <line
          key={`r-${node.val}-${node.right.val}`}
          x1={node.x}
          y1={node.y}
          x2={node.right.x}
          y2={node.right.y}
          stroke="#1e293b"
          strokeWidth="2.5"
        />
      );
      elements.push(...renderConnections(node.right));
    }

    return elements;
  };

  // Render SVG nodes recursive helper
  const renderNodes = (node: TreeNode | null): React.ReactNode[] => {
    if (node === null) return [];
    const elements: React.ReactNode[] = [];

    const isCurrentActive = activeVal === node.val;
    const nodeColor = isCurrentActive 
      ? "fill-orange-500 stroke-orange-500 shadow-lg shadow-orange-500/50" 
      : "fill-[#050811] stroke-card-border";

    elements.push(
      <g key={`n-${node.val}`} className="transition-all duration-300">
        <circle
          cx={node.x}
          cy={node.y}
          r="16"
          className={`${nodeColor} stroke-[2] transition-colors duration-300`}
        />
        <text
          x={node.x}
          y={node.y + 4}
          fill={isCurrentActive ? "#ffffff" : "#cbd5e1"}
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
          className="font-mono pointer-events-none select-none"
        >
          {node.val}
        </text>
      </g>
    );

    elements.push(...renderNodes(node.left));
    elements.push(...renderNodes(node.right));

    return elements;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Visual SVG Tree Canvas */}
      <div className="relative border border-card-border/60 bg-[#030712] rounded-2xl p-4 overflow-hidden shadow-inner flex items-center justify-center min-h-[300px]">
        <div className="absolute top-2 right-4 text-[9px] font-mono text-text-muted uppercase">Symmetric BST Layout</div>
        
        {root ? (
          <svg viewBox="0 0 500 300" className="w-full h-auto max-w-lg">
            {/* Edge Connections */}
            {renderConnections(root)}
            {/* Node Shapes */}
            {renderNodes(root)}
          </svg>
        ) : (
          <span className="text-xs text-text-muted">Tree is empty. Add a root node to begin.</span>
        )}
      </div>

      {/* 2. Operations Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Left Column Controls */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Node Value</span>
                <input
                  type="number"
                  value={insertVal}
                  onChange={(e) => setInsertVal(e.target.value)}
                  className="w-24 rounded border border-card-border bg-[#030712] px-2.5 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500"
                />
              </div>
              <button
                onClick={handleInsert}
                disabled={isAnimating}
                className="inline-flex items-center gap-1 rounded bg-[#050811]/80 hover:bg-[#070b16]/75 border border-card-border text-foreground px-4 py-2 text-xs font-bold transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none mt-4"
              >
                <Plus className="h-4 w-4 text-emerald-500" />
                Insert Node
              </button>
            </div>
            
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1 rounded bg-card-bg/40 hover:bg-card-bg/75 border border-card-border text-foreground px-4 py-2 text-xs font-bold transition-all cursor-pointer mt-4"
            >
              <RotateCcw className="h-4 w-4 text-text-muted" />
              Clear Tree
            </button>
          </div>

          {/* Preset Algorithms Animation triggers */}
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/60 pb-2">Traversal Simulations</span>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => runTraversalAnimation("preorder")}
                disabled={isAnimating || !root}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                Preorder (NLR)
              </button>
              <button
                onClick={() => runTraversalAnimation("inorder")}
                disabled={isAnimating || !root}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                Inorder (LNR)
              </button>
              <button
                onClick={() => runTraversalAnimation("postorder")}
                disabled={isAnimating || !root}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                Postorder (LRN)
              </button>
              <button
                onClick={() => runTraversalAnimation("bfs")}
                disabled={isAnimating || !root}
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-cyan-700 shadow-md shadow-cyan-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                BFS (Level Order)
              </button>
            </div>
          </div>
        </div>

        {/* Right Log Console */}
        <div className="md:col-span-4 flex flex-col gap-4 w-full">
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-3 shrink-0 min-h-[220px] select-text">
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
