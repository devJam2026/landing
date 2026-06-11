"use client";

import React, { useState } from "react";

export default function BigOVisualizer() {
  const [nVal, setNVal] = useState(10);
  const [activeCurves, setActiveCurves] = useState<Record<string, boolean>>({
    "O(1)": true,
    "O(log n)": true,
    "O(n)": true,
    "O(n log n)": true,
    "O(n²)": true,
    "O(2^n)": false, // Off by default as it grows exponentially too fast
  });

  const curves = [
    { name: "O(1)", label: "Constant", color: "#10b981", stroke: "stroke-emerald-400", calc: () => 1 },
    { name: "O(log n)", label: "Logarithmic", color: "#06b6d4", stroke: "stroke-cyan-400", calc: (n: number) => Math.log2(n) },
    { name: "O(n)", label: "Linear", color: "#3b82f6", stroke: "stroke-blue-400", calc: (n: number) => n },
    { name: "O(n log n)", label: "Linearithmic", color: "#8b5cf6", stroke: "stroke-violet-400", calc: (n: number) => n * Math.log2(n) },
    { name: "O(n²)", label: "Quadratic", color: "#f59e0b", stroke: "stroke-amber-400", calc: (n: number) => n * n },
    { name: "O(2^n)", label: "Exponential", color: "#ef4444", stroke: "stroke-rose-500", calc: (n: number) => Math.pow(2, n) },
  ];

  const toggleCurve = (name: string) => {
    setActiveCurves((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // SVG grid settings
  const width = 500;
  const height = 300;
  const padding = 40;

  // Render SVG path for each curve for x in [1, 100]
  const renderPath = (curve: typeof curves[0]) => {
    const points: string[] = [];
    const step = 2;
    for (let x = 1; x <= 100; x += step) {
      const yVal = curve.calc(x);
      
      // Map x to [padding, width - padding]
      // Map yVal to [height - padding, padding] (clamped for readability)
      const svgX = padding + ((x - 1) / 99) * (width - 2 * padding);
      
      // Clamp yVal to max 100 for visual sanity
      const clampedY = Math.min(100, yVal);
      const svgY = (height - padding) - (clampedY / 100) * (height - 2 * padding);
      
      points.push(`${svgX},${svgY}`);
    }
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Chart Area (7/12 width) */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="relative border border-card-border/60 bg-[#030712] rounded-xl p-4 overflow-hidden shadow-inner flex items-center justify-center">
            {/* SVG Plot */}
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none font-mono">
              {/* Grid Lines */}
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#1e293b" strokeWidth="2" />
              <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#1e293b" strokeWidth="2" />
              
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#0f172a" strokeDasharray="3" />
              <line x1={padding} y1={(height - 2 * padding) / 2 + padding} x2={width - padding} y2={(height - 2 * padding) / 2 + padding} stroke="#0f172a" strokeDasharray="3" />
              <line x1={(width - 2 * padding) / 2 + padding} y1={padding} x2={(width - 2 * padding) / 2 + padding} y2={height - padding} stroke="#0f172a" strokeDasharray="3" />
              <line x1={width - padding} y1={padding} x2={width - padding} y2={height - padding} stroke="#0f172a" strokeDasharray="3" />
              
              {/* Y Axis Labels */}
              <text x={padding - 10} y={padding + 5} fill="#64748b" fontSize="10" textAnchor="end">O(100)</text>
              <text x={padding - 10} y={(height - 2 * padding) / 2 + padding + 5} fill="#64748b" fontSize="10" textAnchor="end">O(50)</text>
              <text x={padding - 10} y={height - padding + 5} fill="#64748b" fontSize="10" textAnchor="end">0</text>
              
              {/* X Axis Labels */}
              <text x={padding} y={height - padding + 20} fill="#64748b" fontSize="10" textAnchor="middle">1</text>
              <text x={(width - 2 * padding) / 2 + padding} y={height - padding + 20} fill="#64748b" fontSize="10" textAnchor="middle">N = 50</text>
              <text x={width - padding} y={height - padding + 20} fill="#64748b" fontSize="10" textAnchor="middle">100</text>

              {/* Render curves */}
              {curves.map((curve) => {
                if (!activeCurves[curve.name]) return null;
                return (
                  <path
                    key={curve.name}
                    d={renderPath(curve)}
                    fill="none"
                    className={`${curve.stroke} transition-all duration-300`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Slider reference line */}
              {nVal > 0 && nVal <= 100 && (
                <g>
                  <line
                    x1={padding + ((nVal - 1) / 99) * (width - 2 * padding)}
                    y1={padding}
                    x2={padding + ((nVal - 1) / 99) * (width - 2 * padding)}
                    y2={height - padding}
                    stroke="#f97316"
                    strokeDasharray="4"
                    strokeWidth="1.5"
                    className="opacity-70 animate-pulse"
                  />
                  <circle
                    cx={padding + ((nVal - 1) / 99) * (width - 2 * padding)}
                    cy={height - padding}
                    r="4.5"
                    fill="#f97316"
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Slider input */}
          <div className="p-4 rounded-xl border border-card-border/60 bg-[#060a13]/40 flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-text-muted uppercase tracking-wider">Input Size (N)</span>
              <span className="font-mono text-orange-500 font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                N = {nVal}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={nVal}
              onChange={(e) => setNVal(parseInt(e.target.value))}
              className="w-full h-1 bg-input-bg rounded-lg appearance-none cursor-pointer accent-orange-500 my-2"
            />
          </div>
        </div>

        {/* Right Column: Toggle Matrix & Operations Stats (5/12 width) */}
        <div className="md:col-span-4 flex flex-col gap-4 w-full">
          <div className="premium-card rounded-xl p-5 flex flex-col gap-4">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border-b border-card-border/60 pb-2">Toggle Complexity Curves</span>
            
            <div className="flex flex-col gap-2.5">
              {curves.map((curve) => {
                const isActive = activeCurves[curve.name];
                return (
                  <button
                    key={curve.name}
                    onClick={() => toggleCurve(curve.name)}
                    className="flex items-center justify-between text-left p-2.5 rounded-lg border border-card-border bg-[#050811]/45 hover:bg-[#070b16]/75 transition-all text-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full shrink-0"
                        style={{ backgroundColor: curve.color }}
                      />
                      <div>
                        <span className="font-bold text-foreground block">{curve.name}</span>
                        <span className="text-[10px] text-text-muted">{curve.label}</span>
                      </div>
                    </div>
                    <div className={`h-4.5 w-8 rounded-full p-0.5 transition-all ${isActive ? "bg-orange-600" : "bg-input-bg"}`}>
                      <div className={`h-3.5 w-3.5 rounded-full bg-white transition-all ${isActive ? "translate-x-3.5" : "translate-x-0"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Operations count details */}
          <div className="bg-[#030712] border border-card-border/60 rounded-xl p-5 font-mono text-[11px] text-text-muted flex flex-col gap-3">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-card-border/60 pb-2">Operation steps for N = {nVal}</span>
            <div className="divide-y divide-card-border/30">
              {curves.map((curve) => {
                const isActive = activeCurves[curve.name];
                if (!isActive) return null;
                const value = curve.calc(nVal);
                const isInfinity = value === Infinity || isNaN(value);
                const displayVal = isInfinity 
                  ? "∞" 
                  : value > 1000000 
                  ? value.toExponential(2) 
                  : value % 1 === 0 
                  ? value.toString() 
                  : value.toFixed(1);

                return (
                  <div key={curve.name} className="flex justify-between py-2 items-center">
                    <span className="font-bold text-foreground">{curve.name}</span>
                    <span className="text-cyan-400 font-bold">{displayVal} ops</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
