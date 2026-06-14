import React from "react";

interface ProgressRingProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
}

export default function ProgressRing({
  percent = 0,
  size = 120,
  strokeWidth = 10,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  // Bound percent between 0 and 100
  const normalizedPercent = Math.min(100, Math.max(0, percent));
  const strokeDashoffset = circumference - (normalizedPercent / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
            <stop offset="100%" stopColor="#f97316" /> {/* Orange 500 */}
          </linearGradient>
        </defs>
        
        {/* Track circle */}
        <circle
          className="text-card-border/40"
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        
        {/* Progress circle */}
        <circle
          stroke="url(#progressGradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      
      {/* Inner percentage text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-foreground font-mono leading-none">
          {normalizedPercent}%
        </span>
        <span className="text-[9px] uppercase font-mono tracking-widest text-text-muted mt-1 font-bold">
          Progress
        </span>
      </div>
    </div>
  );
}
