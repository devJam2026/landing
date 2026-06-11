export type AIRoadmapNode = {
  id: string;
  title: string;
  trackSlug: string;
  order: number;
  description: string;
  milestone: string;
  isComplete: boolean;
};

export const aiRoadmap: AIRoadmapNode[] = [
  {
    id: "step-1",
    title: "1. Foundation Track",
    trackSlug: "foundation",
    order: 1,
    description: "Master subword tokenizers, logits sampling distributions, structured outputs, embeddings similarity calculations, and basic evals.",
    milestone: "Build 11 foundation projects, including Tokenizer Studio and Attention Notebook.",
    isComplete: false // Overall track is in-progress
  },
  {
    id: "step-2",
    title: "2. Deep Learning & NN Foundations",
    trackSlug: "neural-networks",
    order: 2,
    description: "Write forward/backward matrix math, gradient descent iterations, SGD optimizers, and loss layers from scratch in Python.",
    milestone: "Construct neural layer networks from scratch.",
    isComplete: false
  },
  {
    id: "step-3",
    title: "3. Transformer Architecture Block",
    trackSlug: "transformers",
    order: 3,
    description: "Code attention matrices scaling, positional sinusoids vectors, decoding blocks, and layer normalizations.",
    milestone: "Build decoder block models.",
    isComplete: false
  },
  {
    id: "step-4",
    title: "4. Embeddings & Vector Databases Space",
    trackSlug: "embeddings-vector-db",
    order: 4,
    description: "Explore Approximate Nearest Neighbor (ANN) index scaling (HNSW, IVF), chunking heuristics, and sparse BM25 hybrid ranking models.",
    milestone: "Deploy highly optimized vector catalog lookups.",
    isComplete: false
  },
  {
    id: "step-5",
    title: "5. RAG Pipelines",
    trackSlug: "rag",
    order: 5,
    description: "Assemble document ingestion utilities, cross-encoder rerankers, semantic query routing systems, and Ragas evaluators.",
    milestone: "Build production RAG pipelines with hallucination monitors.",
    isComplete: false
  },
  {
    id: "step-6",
    title: "6. Agent Loops",
    trackSlug: "agents",
    order: 6,
    description: "Assemble tool schemas parsing engines, ReAct loop controllers, sliding window memory states, and LangGraph flowcharts.",
    milestone: "Deploy multi-tool autonomous planning agents.",
    isComplete: false
  },
  {
    id: "step-7",
    title: "7. MCP Integration",
    trackSlug: "mcp-ecosystem",
    order: 7,
    description: "Develop Model Context Protocol servers connecting models directly to filesystem buffers, database writes, and external APIs.",
    milestone: "Build secure MCP helper tools.",
    isComplete: false
  },
  {
    id: "step-8",
    title: "8. Multi-Agent Systems",
    trackSlug: "multi-agent-systems",
    order: 8,
    description: "Manage Supervisor-Executor patterns, role-based messaging graphs, state synchronizations, and human-in-the-loop controls.",
    milestone: "Deploy concurrent multi-agent research graphs.",
    isComplete: false
  },
  {
    id: "step-9",
    title: "9. AI System Design",
    trackSlug: "ai-system-design",
    order: 9,
    description: "Scale infrastructure gates: Redis semantic caching arrays, fallback routes, rate-limit controllers, and telemetry trackers.",
    milestone: "Design rate-limit and error tolerant LLM gateways.",
    isComplete: false
  },
  {
    id: "step-10",
    title: "10. Production Deployment",
    trackSlug: "production-deploy",
    order: 10,
    description: "Manage SSE completions streaming endpoints, input/output guardrails filters, and CI/CD golden evaluations regression testing.",
    milestone: "Launch production streaming APIs.",
    isComplete: false
  },
  {
    id: "step-11",
    title: "11. Enterprise Capstones",
    trackSlug: "master-capstones",
    order: 11,
    description: "Synthesize all skills to launch enterprise-grade AI assistants integrating multi-agent logic, observability, and robust tests.",
    milestone: "Launch production-grade AI portfolio capstones.",
    isComplete: false
  }
];
