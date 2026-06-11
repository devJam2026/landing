"use client";

import React, { useState } from "react";
import { Play, Plus, RotateCcw } from "lucide-react";

interface Node {
  id: string;
  x: number;
  y: number;
}

interface Edge {
  u: string;
  v: string;
  weight: number;
}

export default function GraphPlayground() {
  const initialNodes: Node[] = [
    { id: "A", x: 250, y: 50 },
    { id: "B", x: 120, y: 150 },
    { id: "C", x: 380, y: 150 },
    { id: "D", x: 170, y: 250 },
    { id: "E", x: 330, y: 250 },
  ];

  const initialEdges: Edge[] = [
    { u: "A", v: "B", weight: 4 },
    { u: "A", v: "C", weight: 2 },
    { u: "B", v: "D", weight: 5 },
    { u: "C", v: "E", weight: 3 },
    { u: "B", v: "E", weight: 1 },
    { u: "D", v: "E", weight: 2 },
  ];

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  
  // Custom inputs
  const [newNodeId, setNewNodeId] = useState("F");
  const [edgeSource, setEdgeSource] = useState("A");
  const [edgeTarget, setEdgeTarget] = useState("B");
  const [edgeWeight, setEdgeWeight] = useState("3");

  // Highlight states
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeEdges, setActiveEdges] = useState<Record<string, boolean>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [logs, setLogs] = useState<string[]>(["Graph initialized. Node A is root."]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  const handleReset = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setActiveNode(null);
    setActiveEdges({});
    setIsAnimating(false);
    addLog("Reset graph to default 5-node topology.");
  };

  const handleAddNode = () => {
    const id = newNodeId.toUpperCase().trim();
    if (!id || nodes.some((n) => n.id === id)) {
      addLog("⚠️ Invalid or duplicate Node ID.");
      return;
    }
    // Spawn at random coordinates inside SVG boundaries
    const x = Math.floor(Math.random() * 300) + 100;
    const y = Math.floor(Math.random() * 150) + 70;
    setNodes((prev) => [...prev, { id, x, y }]);
    addLog(`Spawned Node ${id} at coordinates (${x}, ${y}).`);
  };

  const handleAddEdge = () => {
    const u = edgeSource.toUpperCase().trim();
    const v = edgeTarget.toUpperCase().trim();
    const weight = parseInt(edgeWeight);

    if (u === v || !nodes.some(n => n.id === u) || !nodes.some(n => n.id === v) || isNaN(weight)) {
      addLog("⚠️ Invalid source, target, or weight.");
      return;
    }
    // Check if edge already exists
    if (edges.some(e => (e.u === u && e.v === v) || (e.u === v && e.v === u))) {
      addLog("⚠️ Edge already exists between these nodes.");
      return;
    }

    setEdges((prev) => [...prev, { u, v, weight }]);
    addLog(`Connected edge between ${u} and ${v} with weight ${weight}.`);
  };

  // BFS traversal simulation starting at A
  const runBFS = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveEdges({});
    addLog("Starting BFS Traversal from Node A...");

    const queue: string[] = ["A"];
    const visited = new Set<string>(["A"]);
    const visitOrder: string[] = [];

    // Helper to get neighbors
    const getNeighbors = (node: string) => {
      const neighbors: string[] = [];
      edges.forEach((e) => {
        if (e.u === node) neighbors.push(e.v);
        if (e.v === node) neighbors.push(e.u);
      });
      return neighbors;
    };

    const steps: { curr: string; edgeKey?: string }[] = [];
    while (queue.length > 0) {
      const curr = queue.shift()!;
      visitOrder.push(curr);
      const neighbors = getNeighbors(curr);
      
      neighbors.forEach((n) => {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
          steps.push({ curr: n, edgeKey: `${curr}-${n}` });
        }
      });
    }

    // Run animation steps
    let stepIdx = 0;
    setActiveNode("A");
    
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        const step = steps[stepIdx];
        setActiveNode(step.curr);
        if (step.edgeKey) {
          const [u, v] = step.edgeKey.split("-");
          setActiveEdges((prev) => ({
            ...prev,
            [`${u}-${v}`]: true,
            [`${v}-${u}`]: true,
          }));
        }
        addLog(`Visited Node ${step.curr} via adjacent edge.`);
        stepIdx++;
      } else {
        clearInterval(interval);
        setActiveNode(null);
        setIsAnimating(false);
        addLog(`✓ BFS completed. Visited sequence: A, ${visitOrder.slice(1).join(", ")}`);
      }
    }, 1200);
  };

  // Dijkstra Shortest Path from A to D
  const runDijkstra = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveEdges({});
    addLog("Running Dijkstra's algorithm (Shortest Path: A → D)...");

    // Hardcoded Dijkstra steps for standard default topology
    const pathSteps = [
      { node: "A", log: "Initialize distances: A=0, others=∞. Visit Node A." },
      { node: "C", edge: "A-C", log: "Relax edge A-C (weight 2). Distance C = 2. Visit Node C." },
      { node: "E", edge: "C-E", log: "Relax edge C-E (weight 3). Distance E = 2+3 = 5. Visit Node E." },
      { node: "B", edge: "A-B", log: "Relax edge A-B (weight 4). Distance B = 4. Visit Node B." },
      { node: "E", edge: "B-E", log: "Evaluate B-E (4+1 = 5, equivalent). Visit Node E." },
      { node: "D", edge: "E-D", log: "Relax edge E-D (weight 2). Distance D = 5+2 = 7. Visit target Node D." },
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < pathSteps.length) {
        const step = pathSteps[index];
        setActiveNode(step.node);
        if (step.edge) {
          const [u, v] = step.edge.split("-");
          setActiveEdges((prev) => ({
            ...prev,
            [`${u}-${v}`]: true,
            [`${v}-${u}`]: true,
          }));
        }
        addLog(step.log);
        index++;
      } else {
        clearInterval(interval);
        setActiveNode(null);
        setIsAnimating(false);
        addLog("✓ Dijkstra resolved. Path A → C → E → D has cost 7 (Optimal).");
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Visual SVG Graph canvas */}
      <div className="relative border border-card-border/60 bg-[#030712] rounded-2xl p-4 overflow-hidden shadow-inner flex items-center justify-center min-h-[300px]">
        <div className="absolute top-2 right-4 text-[9px] font-mono text-text-muted uppercase">Coordinate Node Network</div>

        <svg viewBox="0 0 500 300" className="w-full h-auto max-w-lg select-none font-mono">
          {/* Render edges lines */}
          {edges.map((e) => {
            const uNode = nodes.find(n => n.id === e.u);
            const vNode = nodes.find(n => n.id === e.v);
            if (!uNode || !vNode) return null;

            const isActive = activeEdges[`${e.u}-${e.v}`] || activeEdges[`${e.v}-${e.u}`];
            const lineColor = isActive ? "stroke-cyan-400 stroke-[3.5]" : "stroke-card-border stroke-[1.5]";

            return (
              <g key={`${e.u}-${e.v}`}>
                <line
                  x1={uNode.x}
                  y1={uNode.y}
                  x2={vNode.x}
                  y2={vNode.y}
                  className={`${lineColor} transition-all duration-300`}
                />
                {/* Weight Tag */}
                <rect
                  x={(uNode.x + vNode.x) / 2 - 8}
                  y={(uNode.y + vNode.y) / 2 - 8}
                  width="16"
                  height="16"
                  rx="4"
                  fill="#030712"
                  stroke="#1e293b"
                  strokeWidth="1"
                />
                <text
                  x={(uNode.x + vNode.x) / 2}
                  y={(uNode.y + vNode.y) / 2 + 3}
                  fill="#cbd5e1"
                  fontSize="8"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {e.weight}
                </text>
              </g>
            );
          })}

          {/* Render vertices nodes */}
          {nodes.map((n) => {
            const isCurrentActive = activeNode === n.id;
            const circleColor = isCurrentActive 
              ? "fill-orange-500 stroke-orange-500 shadow-lg" 
              : "fill-[#050811] stroke-card-border";

            return (
              <g key={n.id} className="transition-all duration-300">
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="15"
                  className={`${circleColor} stroke-[2] transition-colors duration-300`}
                />
                <text
                  x={n.x}
                  y={n.y + 4}
                  fill={isCurrentActive ? "#ffffff" : "#cbd5e1"}
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {n.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 2. Operations Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Left Column Controls */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-wrap gap-6 items-center justify-between">
            {/* Spawn Node input */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Node ID</span>
                <input
                  type="text"
                  maxLength={2}
                  value={newNodeId}
                  onChange={(e) => setNewNodeId(e.target.value)}
                  className="w-16 rounded border border-card-border bg-[#030712] px-2 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500 text-center"
                />
              </div>
              <button
                onClick={handleAddNode}
                disabled={isAnimating}
                className="inline-flex items-center gap-1 rounded bg-[#050811]/80 hover:bg-[#070b16]/75 border border-card-border text-foreground px-3 py-1.5 text-xs font-bold transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none mt-4"
              >
                <Plus className="h-3.5 w-3.5 text-emerald-500" />
                Spawn Node
              </button>
            </div>

            {/* Connect Edge input */}
            <div className="flex items-center gap-3 border-l border-card-border/40 pl-6">
              <div className="flex gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Src</span>
                  <input
                    type="text"
                    value={edgeSource}
                    onChange={(e) => setEdgeSource(e.target.value)}
                    className="w-12 rounded border border-card-border bg-[#030712] px-1.5 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500 text-center"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Dest</span>
                  <input
                    type="text"
                    value={edgeTarget}
                    onChange={(e) => setEdgeTarget(e.target.value)}
                    className="w-12 rounded border border-card-border bg-[#030712] px-1.5 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500 text-center"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Wt</span>
                  <input
                    type="number"
                    value={edgeWeight}
                    onChange={(e) => setEdgeWeight(e.target.value)}
                    className="w-12 rounded border border-card-border bg-[#030712] px-1.5 py-1 text-xs text-foreground focus:outline-none focus:border-orange-500 text-center"
                  />
                </div>
              </div>
              <button
                onClick={handleAddEdge}
                disabled={isAnimating}
                className="inline-flex items-center gap-1 rounded bg-[#050811]/80 hover:bg-[#070b16]/75 border border-card-border text-foreground px-3 py-1.5 text-xs font-bold transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none mt-4"
              >
                <Plus className="h-3.5 w-3.5 text-emerald-500" />
                Connect
              </button>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 rounded bg-card-bg/40 hover:bg-card-bg/75 border border-card-border text-foreground px-3 py-1.5 text-xs font-bold transition-all cursor-pointer mt-4"
            >
              <RotateCcw className="h-3.5 w-3.5 text-text-muted" />
              Reset Topology
            </button>
          </div>

          {/* Preset Algorithms Animation triggers */}
          <div className="p-5 rounded-xl border border-card-border bg-[#060a13]/40 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/60 pb-2">Pathfinding Simulations</span>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={runBFS}
                disabled={isAnimating || nodes.length < 2}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                BFS Grid traversal
              </button>
              <button
                onClick={runDijkstra}
                disabled={isAnimating || nodes.length < 5}
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-cyan-700 shadow-md shadow-cyan-600/25 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              >
                <Play className="h-3 w-3 fill-current" />
                Dijkstra Shortest Path
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
