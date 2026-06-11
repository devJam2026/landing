export type AIContentStatus =
  | "complete"
  | "in-progress"
  | "placeholder"
  | "coming-soon";

export type AICurriculumTrack = {
  id: string;
  slug: string;
  title: string;
  order: number;
  description: string;
  status: AIContentStatus;
  modules: string[]; // Module slugs mapping
  plannedProjects: string[];
  learningOutcomes: string[];
  interviewValue: string[];
};

export const aiTracks: AICurriculumTrack[] = [
  {
    id: "foundation",
    slug: "foundation",
    title: "Track 1: Foundation Track",
    order: 1,
    description: "Learn core prompt engineering, tokenization, context constraints, structured schemas, embedding lookups, and local models evaluations.",
    status: "in-progress", // The track contains some completed projects, others in progress
    modules: ["tokenization", "context-engineering", "sampling-generation", "prompt-engineering", "structured-output", "production-llm-processing", "embeddings", "vector-databases", "self-attention", "transformers", "llm-evaluation"],
    plannedProjects: [
      "tokenizer-visualizer-studio",
      "context-window-diagnostics",
      "hyperparameter-playground",
      "ai-scam-detector",
      "structured-output-validator",
      "product-review-insight-generator",
      "resume-jd-matcher",
      "semantic-product-search",
      "mini-attention-notebook",
      "mini-transformer-block-explainer",
      "llm-evaluation-lab"
    ],
    learningOutcomes: [
      "Master prompt engineering design methodologies",
      "Deconstruct subword tokenizers and BPE algorithms",
      "Manage token budgets and context window limits",
      "Enforce JSON schemas and type-safe structured outputs",
      "Generate embeddings and perform vector search lookups"
    ],
    interviewValue: [
      "Explain time-space costs of tokenizer inflation",
      "Defend prompt classification vs fine-tuning strategies",
      "Analyze context scaling tradeoffs in multi-turn conversations"
    ]
  },
  {
    id: "neural-networks",
    slug: "neural-networks",
    title: "Track 2: Neural Network Foundations",
    order: 2,
    description: "Deconstruct deep learning layers, weights, biases, backpropagation, and multi-layer perceptrons from scratch.",
    status: "coming-soon",
    modules: ["neuron-layers", "weights-biases", "activation-functions", "loss-functions", "optimizers", "backpropagation", "embedding-layers"],
    plannedProjects: ["neural-network-playground", "activation-visualizer", "backprop-debugger"],
    learningOutcomes: [
      "Implement forward pass matrices from scratch",
      "Compute partial derivatives for backpropagation",
      "Tune weight matrices using SGD and Adam optimizers"
    ],
    interviewValue: [
      "Derive backpropagation rules mathematically",
      "Compare ReLU, GeLU, and Sigmoid activation functions under gradients vanishing"
    ]
  },
  {
    id: "transformers",
    slug: "transformers",
    title: "Track 3: Transformer Architecture",
    order: 3,
    description: "Deep dive into Attention Is All You Need. Study multi-head attention, decoder blocks, and normalizations.",
    status: "coming-soon",
    modules: ["why-transformers", "encoder-decoder", "self-attention-math", "multi-head-attention", "positional-encoding", "feed-forward", "layer-norm"],
    plannedProjects: ["transformer-block-visualizer", "positional-encoding-explorer"],
    learningOutcomes: [
      "Compute scaled dot-product attention manually",
      "Implement sine/cosine positional embedding matrices",
      "Understand layer norm vs batch norm scaling constraints"
    ],
    interviewValue: [
      "Explain why self-attention runs in O(N^2) space complexity",
      "Describe the role of residual connections in deep transformers"
    ]
  },
  {
    id: "embeddings-vector-db",
    slug: "embeddings-vector-db",
    title: "Track 4: Embeddings and Vector Databases",
    order: 4,
    description: "Master chunking strategies, embedding generation, index types (HNSW, IVF), and hybrid query strategies.",
    status: "coming-soon",
    modules: ["embeddings-theory", "similarity-metrics", "indexing-strategies", "chunking-strategies", "hybrid-search-ranking"],
    plannedProjects: ["embedding-space-explorer", "vector-search-sandbox"],
    learningOutcomes: [
      "Compare cosine, dot product, and Euclidean distance vector metrics",
      "Implement semantic and parent-child chunking parsers",
      "Configure HNSW graph indexing configurations"
    ],
    interviewValue: [
      "Explain recall vs latency tradeoffs in approximate nearest neighbor search",
      "Defend dense embeddings search vs sparse BM25 indexing in enterprise catalogs"
    ]
  },
  {
    id: "rag",
    slug: "rag",
    title: "Track 5: RAG (Retrieval-Augmented Generation)",
    order: 5,
    description: "Design advanced document ingestion, reranking models, metadata filtering, and hallucination evaluations.",
    status: "coming-soon",
    modules: ["rag-overview", "document-loaders", "query-rewriting", "reranking-cross-encoders", "rag-evaluation"],
    plannedProjects: ["pdf-rag-assistant", "advanced-rag-dashboard"],
    learningOutcomes: [
      "Reduce hallucinations by optimizing prompt retrieval context",
      "Integrate cross-encoder rerankers to improve search recall",
      "Construct ragas evaluation datasets evaluating faithfulness"
    ],
    interviewValue: [
      "Describe how query expansion resolves vocabulary mismatch in RAG pipelines",
      "Propose strategies to protect database access controls in dynamic user RAG queries"
    ]
  },
  {
    id: "agents",
    slug: "agents",
    title: "Track 6: Agents",
    order: 6,
    description: "Master the ReAct loop, tool registries, agent planning models, memory management, and structured execution loops.",
    status: "coming-soon",
    modules: ["what-is-agent", "agent-planning", "tool-calling-mechanics", "agent-memory-schemas", "react-pattern-implementation"],
    plannedProjects: ["research-agent-studio", "agent-memory-lab"],
    learningOutcomes: [
      "Construct robust agent loop engines with exception backoffs",
      "Map system functions to JSON schemas for reliable LLM tool calls",
      "Manage conversational state using sliding context history windows"
    ],
    interviewValue: [
      "Defend sequential agent loops vs parallel routing topologies in high-error scopes",
      "Analyze cost-latency profiles of multi-step agent reasoning steps"
    ]
  },
  {
    id: "mcp-ecosystem",
    slug: "mcp-ecosystem",
    title: "Track 7: MCP and Tool Ecosystem",
    order: 7,
    description: "Deconstruct the Model Context Protocol. Build client-server integrations and enforce security boundaries.",
    status: "coming-soon",
    modules: ["mcp-introduction", "mcp-client-architecture", "mcp-server-development", "tool-registries", "security-boundaries"],
    plannedProjects: ["mcp-file-explorer", "mcp-github-assistant"],
    learningOutcomes: [
      "Build custom MCP server integrations communicating via JSON-RPC",
      "Safeguard database write parameters using schema verification filters",
      "Configure tool execution sandboxes running external shell commands"
    ],
    interviewValue: [
      "Explain the architectural benefit of MCP standardizing tool calls compared to ad-hoc APIs",
      "Propose security mitigations for executing untrusted tool codes on user devices"
    ]
  },
  {
    id: "multi-agent-systems",
    slug: "multi-agent-systems",
    title: "Track 8: Multi-Agent Systems",
    order: 8,
    description: "Orchestrate role-based agent collaborations, supervisor patterns, and human-in-the-loop approvals.",
    status: "coming-soon",
    modules: ["multi-agent-collaboration", "role-definition", "supervisor-executor-pattern", "agent-to-agent-protocols", "human-in-the-loop"],
    plannedProjects: ["multi-agent-research-team", "agent-ops-supervisor"],
    learningOutcomes: [
      "Build supervisor graphs allocating sub-tasks to specialized agents",
      "Enforce human approval gates on destructive database updates",
      "Track system states across concurrent agent-to-agent processes"
    ],
    interviewValue: [
      "Analyze the risk of state corruption in concurrent multi-agent graph flows",
      "Compare state-passing graphs vs blackboard architectures in complex system plans"
    ]
  },
  {
    id: "ai-system-design",
    slug: "ai-system-design",
    title: "Track 9: AI System Design",
    order: 9,
    description: "Scale AI topologies. Design caching layers, routing gates, costs observability, and low-latency fallbacks.",
    status: "coming-soon",
    modules: ["observability-tracing", "llm-caching-layer", "model-routing-gateways", "cost-limit-throttles", "latency-fallbacks"],
    plannedProjects: ["ai-observability-gateway", "llm-cost-monitor"],
    learningOutcomes: [
      "Integrate OpenInference tracers capturing nested agent steps",
      "Build semantic caches reducing repeat API query costs by 80%",
      "Configure fallback routes switching to open-source models on API timeouts"
    ],
    interviewValue: [
      "Architect a global high-availability LLM gateway resolving client-side rate limits",
      "Propose cost containment designs for open-ended loop recursive agent pools"
    ]
  },
  {
    id: "production-deploy",
    slug: "production-deploy",
    title: "Track 10: Deployment and Production AI",
    order: 10,
    description: "Run models at scale. Master streaming APIs, token bucket rate limits, guardrail checks, and CI/CD eval loops.",
    status: "coming-soon",
    modules: ["streaming-api-design", "token-bucket-rate-limiting", "guardrails-filtering", "cicd-eval-pipelines", "monitoring-drift"],
    plannedProjects: ["guardrails-playground", "model-router-service"],
    learningOutcomes: [
      "Implement Server-Sent Events (SSE) streaming model completions",
      "Add input/output guardrail checks filtering toxic or sensitive terms",
      "Configure automated evaluation pipelines checking schema accuracy on commit"
    ],
    interviewValue: [
      "Compare serverless hosting vs dedicated GPU provisioning for custom models",
      "Design telemetry setups monitoring model outputs drift in production"
    ]
  },
  {
    id: "master-capstones",
    slug: "master-capstones",
    title: "Track 11: Master Capstones",
    order: 11,
    description: "Synthesize all learnings into enterprise-grade portfolio platforms with full architectural and execution specs.",
    status: "coming-soon",
    modules: ["capstone-architecting", "data-ingestion-scaling", "workflow-eval-loops", "production-deployment"],
    plannedProjects: ["ai-learning-assistant", "enterprise-knowledge-copilot"],
    learningOutcomes: [
      "Architect a multi-agent platform resolving real-world business demands",
      "Document system architecture, data topologies, and evaluations",
      "Deploy and present system performance characteristics"
    ],
    interviewValue: [
      "Present and defend capstone architectural tradeoffs to a technical panel"
    ]
  }
];
