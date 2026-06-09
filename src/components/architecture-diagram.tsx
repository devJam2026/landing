import React from "react";
import {
  User,
  Layout,
  Server,
  Cpu,
  Database,
  ArrowDown,
  Settings,
  Globe,
  Gauge,
  AlertTriangle,
  FileText,
  Workflow
} from "lucide-react";

interface ArchitectureDiagramProps {
  projectType: "tokenizer" | "hyperparameters" | "context" | "attention";
  isCyan?: boolean;
}

export default function ArchitectureDiagram({ projectType, isCyan = false }: ArchitectureDiagramProps) {
  const accentColor = isCyan ? "text-cyan-400 border-cyan-500/20" : "text-orange-500 border-orange-500/20";
  const glowBg = isCyan ? "bg-cyan-500/5" : "bg-orange-500/5";

  const renderTokenizerFlow = () => (
    <div className="flex flex-col items-center gap-4 py-4 w-full">
      {/* Node 1 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-60 justify-center">
        <User className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">User enters raw text</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 2 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-60 justify-center shadow-inner">
        <Layout className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-semibold">Frontend React UI</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 3 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 w-60 justify-center shadow-md shadow-orange-500/[0.02]">
        <Server className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-bold">FastAPI Backend (Python)</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Parallel Splitting Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl px-4">
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <Cpu className="h-4 w-4 text-cyan-400 mb-1" />
          <span className="text-xs font-bold">tiktoken</span>
          <span className="text-[9px] text-text-muted mt-0.5">GPT Tokenizer</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <Cpu className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-xs font-bold">SentencePiece</span>
          <span className="text-[9px] text-text-muted mt-0.5">LLaMA Tokenizer</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <Cpu className="h-4 w-4 text-purple-400 mb-1" />
          <span className="text-xs font-bold">WordPiece</span>
          <span className="text-[9px] text-text-muted mt-0.5">BERT Tokenizer</span>
        </div>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Convergence Node */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-60 justify-center">
        <Workflow className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-semibold">Token Result Normalizer</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 5 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-60 justify-center">
        <Database className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Token Metadata Response</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Final Node */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 w-60 justify-center">
        <Layout className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-bold">Frontend Visualization</span>
      </div>
    </div>
  );

  const renderHyperparameterFlow = () => (
    <div className="flex flex-col items-center gap-4 py-4 w-full">
      {/* Node 1 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <User className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">User enters prompt & settings</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Row 2: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
        <div className="flex items-center gap-2 p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 justify-center">
          <Layout className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-bold">React Playground UI</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center">
          <Settings className="h-4 w-4 text-text-muted" />
          <span className="text-xs font-semibold">Parameter Controls</span>
        </div>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 3 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Workflow className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-semibold">Request Builder (Client-side)</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 4 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 w-64 justify-center shadow-md shadow-cyan-500/[0.02]">
        <Globe className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-bold">OpenAI / LLM API Server</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 5 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <FileText className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Generated Response Payload</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Row 6: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
        <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center">
          <Layout className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-semibold">Output Comparison Panel</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center">
          <FileText className="h-4 w-4 text-text-muted" />
          <span className="text-xs font-semibold">Concept Explanation Panel</span>
        </div>
      </div>
    </div>
  );

  const renderContextFlow = () => (
    <div className="flex flex-col items-center gap-4 py-4 w-full">
      {/* Node 1 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <User className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">User inputs prompt & sections</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 2 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 w-64 justify-center">
        <Layout className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-bold">Frontend Diagnostics Dashboard</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 3 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Workflow className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-semibold">Payload Builder & Assembly</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 4 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Gauge className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Token Estimation Engine</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 5 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 w-64 justify-center">
        <Cpu className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-bold">Context Budget Calculator</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Row 6: Split path */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl px-4">
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <Layout className="h-4 w-4 text-cyan-400 mb-1" />
          <span className="text-xs font-bold">Usage Breakdown</span>
          <span className="text-[9px] text-text-muted mt-0.5">Visualization UI</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 justify-center text-center">
          <AlertTriangle className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-xs font-bold">Overflow Warning</span>
          <span className="text-[9px] text-text-muted mt-0.5">Threshold Alert</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <Settings className="h-4 w-4 text-cyan-400 mb-1" />
          <span className="text-xs font-bold">Optimization Tips</span>
          <span className="text-[9px] text-text-muted mt-0.5">Payload Trimming</span>
        </div>
      </div>
    </div>
  );

  const renderAttentionFlow = () => (
    <div className="flex flex-col items-center gap-4 py-4 w-full">
      {/* Node 1 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <FileText className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Input Tokens</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 2 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 w-64 justify-center">
        <Cpu className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-bold">Embedding Layer</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Parallel Projections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl px-4">
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <span className="text-xs font-extrabold text-orange-500 mb-1 font-mono">Q</span>
          <span className="text-xs font-bold">Queries Vector</span>
          <span className="text-[9px] text-text-muted mt-0.5">What tokens look for</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <span className="text-xs font-extrabold text-cyan-400 mb-1 font-mono">K</span>
          <span className="text-xs font-bold">Keys Vector</span>
          <span className="text-[9px] text-text-muted mt-0.5">What tokens contain</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-lg border border-card-border bg-[#050811]/80 justify-center text-center">
          <span className="text-xs font-extrabold text-emerald-500 mb-1 font-mono">V</span>
          <span className="text-xs font-bold">Values Vector</span>
          <span className="text-[9px] text-text-muted mt-0.5">Actual token information</span>
        </div>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 4 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Workflow className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-semibold">Dot Product (Q × Kᵀ)</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 5 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Gauge className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Raw Attention Scores</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 6 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 w-64 justify-center">
        <Cpu className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-bold">Softmax Normalization</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 7 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Database className="h-4 w-4 text-text-muted" />
        <span className="text-xs font-semibold">Attention Weight Matrix</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Node 8 */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-card-border bg-[#050811]/60 w-64 justify-center">
        <Workflow className="h-4 w-4 text-cyan-400" />
        <span className="text-xs font-semibold">Weighted Sum (Weights × V)</span>
      </div>
      <ArrowDown className="h-4 w-4 text-card-border" />

      {/* Final Node */}
      <div className="flex items-center gap-2 p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 w-64 justify-center">
        <Cpu className="h-4 w-4 text-orange-500 animate-pulse" />
        <span className="text-xs font-bold">Contextual Token Output</span>
      </div>
    </div>
  );

  return (
    <div className={`relative overflow-hidden rounded-xl border p-6 bg-card-bg/25 w-full max-w-3xl mx-auto shadow-2xl flex flex-col items-center ${accentColor}`}>
      <div className={`absolute inset-0 opacity-10 dark:opacity-[0.03] grid-bg -z-10`} />
      <div className={`absolute top-0 left-0 w-full h-full blur-3xl -z-20 ${glowBg}`} />
      
      <div className="w-full flex items-center justify-between pb-3 border-b border-card-border/60 mb-6">
        <span className="text-[10px] font-mono uppercase font-bold text-text-muted">SYSTEM TOPOLOGY</span>
        <span className="text-[9px] bg-input-bg border border-card-border px-2 py-0.5 rounded font-bold text-text-muted uppercase">Interactive Diagram</span>
      </div>

      {projectType === "tokenizer" && renderTokenizerFlow()}
      {projectType === "hyperparameters" && renderHyperparameterFlow()}
      {projectType === "context" && renderContextFlow()}
      {projectType === "attention" && renderAttentionFlow()}
    </div>
  );
}
