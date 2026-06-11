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
    title: "Module 1: LLM Foundation",
    order: 1,
    description: "Learn how Large Language Models work from the ground up: tokens, context windows, hyperparameters, prompts, structured outputs, embeddings, semantic search, evaluation, and attention mechanics.",
    status: "in-progress",
    modules: [
      "tokenization",
      "context-engineering",
      "sampling-generation",
      "prompt-engineering",
      "structured-output",
      "production-llm-processing",
      "embeddings",
      "vector-databases",
      "self-attention",
      "transformers",
      "llm-evaluation"
    ],
    plannedProjects: [
      "tokenizer-visualizer-studio",
      "context-window-diagnostics",
      "hyperparameter-playground",
      "prompt-engineering-lab",
      "ai-scam-detector",
      "structured-output-validator",
      "product-review-insight-generator",
      "resume-jd-matcher",
      "semantic-product-search",
      "llm-evaluation-lab",
      "mini-attention-notebook"
    ],
    learningOutcomes: [
      "Master prompt engineering design methodologies",
      "Deconstruct subword tokenizers and BPE algorithms",
      "Manage token budgets and context window limits",
      "Enforce JSON schemas and type-safe structured outputs",
      "Generate embeddings and perform vector search lookups",
      "Run evaluation tests using golden sets and LLM-as-a-judge patterns"
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
    title: "Module 2: Neural Network Foundations",
    order: 2,
    description: "Deconstruct deep learning layers, weights, biases, backpropagation, and activation/loss functions from scratch.",
    status: "coming-soon",
    modules: ["neuron-layers", "weights-biases", "activation-functions", "loss-functions", "optimizers", "backpropagation", "embedding-layers"],
    plannedProjects: [
      "neural-network-from-scratch-lab",
      "backpropagation-visualizer",
      "optimizer-playground",
      "activation-function-lab",
      "loss-function-explorer",
      "mini-mnist-classifier",
      "training-debugger-lab"
    ],
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
    id: "sequence-models",
    slug: "sequence-models",
    title: "Module 3: Sequence Models",
    order: 3,
    description: "Understand recurrent memory architectures, LSTMs, and gated structures preceding modern attention.",
    status: "coming-soon",
    modules: ["rnn-fundamentals", "lstm-gates", "gru-simplified", "seq2seq-translator", "seq-classification"],
    plannedProjects: [
      "rnn-memory-visualizer",
      "character-prediction-rnn",
      "lstm-gate-explorer",
      "gru-simplified-lab",
      "encoder-decoder-translator",
      "sequence-classification-lab"
    ],
    learningOutcomes: [
      "Build character prediction models using recurrent cells",
      "Trace gradient paths inside LSTM gating circuits",
      "Understand sequence-to-sequence translation architectures"
    ],
    interviewValue: [
      "Explain the vanishing gradient problem in vanilla RNNs vs LSTMs",
      "Compare seq2seq sequence decoding speed tradeoffs with parallel inputs"
    ]
  },
  {
    id: "transformers",
    slug: "transformers",
    title: "Module 4: Transformer Architecture",
    order: 4,
    description: "Deep dive into Attention Is All You Need. Study positional encoding, multi-head attention, and decoder layers.",
    status: "coming-soon",
    modules: ["why-transformers", "encoder-decoder", "self-attention-math", "multi-head-attention", "positional-encoding", "feed-forward", "layer-norm"],
    plannedProjects: [
      "positional-encoding-visualizer",
      "self-attention-matrix-explorer",
      "multi-head-attention-lab",
      "feed-forward-block-lab",
      "layernorm-residual-lab",
      "mini-transformer-block-explainer",
      "mini-gpt-decoder-scratch"
    ],
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
    title: "Module 5: Embeddings and Vector Databases",
    order: 5,
    description: "Master vector representation spacing, similarity indexing algorithms, and hybrid metadata keyword searches.",
    status: "coming-soon",
    modules: ["embeddings-theory", "similarity-metrics", "indexing-strategies", "chunking-strategies", "hybrid-search-ranking"],
    plannedProjects: [
      "embedding-space-explorer",
      "cosine-similarity-lab",
      "semantic-search-engine",
      "product-similarity-engine",
      "vector-db-playground",
      "hybrid-search-lab"
    ],
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
    title: "Module 6: RAG Engineering",
    order: 6,
    description: "Build robust retrieval-augmented pipelines integrating document loaders, rerankers, and retrieval evaluations.",
    status: "coming-soon",
    modules: ["rag-overview", "document-loaders", "query-rewriting", "reranking-cross-encoders", "rag-evaluation"],
    plannedProjects: [
      "pdf-rag-qa-app",
      "chunking-strategy-lab",
      "advanced-rag-playground",
      "citation-based-rag-app",
      "seo-content-rag-assistant",
      "rag-evaluation-lab"
    ],
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
    id: "structured-ai-apps",
    slug: "structured-ai-apps",
    title: "Module 7: Structured AI Applications",
    order: 7,
    description: "Build predictable business workflows enforcing structured JSON schema extractions and intents routing.",
    status: "coming-soon",
    modules: ["json-schema-reliability", "form-extraction-api", "intent-classification-routing", "document-parsers"],
    plannedProjects: [
      "structured-output-validator-app",
      "ai-form-extraction-app",
      "invoice-document-parser",
      "customer-support-classifier",
      "product-review-insight-generator-app",
      "ai-report-generator"
    ],
    learningOutcomes: [
      "Enforce JSON output schemas on language models",
      "Construct parsers extracting entities from unstructured text documents",
      "Implement routing classification logic based on intent scores"
    ],
    interviewValue: [
      "Propose retry and validation models for parsing complex data formats",
      "Compare prompt intent classifiers efficiency against fine-tuned classification heads"
    ]
  },
  {
    id: "agents",
    slug: "agents",
    title: "Module 8: Agentic AI",
    order: 8,
    description: "Design autonomous loops combining function call registrations, multi-step planners, and reflection cycles.",
    status: "coming-soon",
    modules: ["what-is-agent", "agent-planning", "tool-calling-mechanics", "agent-memory-schemas", "react-pattern-implementation"],
    plannedProjects: [
      "tool-calling-agent",
      "planner-agent-lab",
      "reflection-agent-lab",
      "langgraph-workflow-agent",
      "memory-agent-lab",
      "research-assistant-agent"
    ],
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
    title: "Module 9: MCP and Tool Ecosystem",
    order: 9,
    description: "Establish Model Context Protocol clients, host secure custom servers, and define execution sandboxes.",
    status: "coming-soon",
    modules: ["mcp-introduction", "mcp-client-architecture", "mcp-server-development", "tool-registries", "security-boundaries"],
    plannedProjects: [
      "mcp-server-starter",
      "local-filesystem-mcp-tool",
      "mcp-github-assistant-tool",
      "database-mcp-tool",
      "calendar-email-tool-agent",
      "devjam-mcp-tool-hub"
    ],
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
    title: "Module 10: Multi-Agent Systems",
    order: 10,
    description: "Orchestrate supervisor hierarchies, agent conversations protocols, and human-in-the-loop validation gates.",
    status: "coming-soon",
    modules: ["multi-agent-collaboration", "role-definition", "supervisor-executor-pattern", "agent-to-agent-protocols", "human-in-the-loop"],
    plannedProjects: [
      "crewai-role-based-team",
      "autogen-conversation-lab",
      "multi-agent-code-reviewer",
      "supervisor-agent-pattern",
      "human-in-the-loop-agent-system",
      "ai-product-team-simulator"
    ],
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
    title: "Module 11: AI System Design",
    order: 11,
    description: "Scale model routing hubs. Integrate semantic caches, prompt registries, cost limits, and latency fallbacks.",
    status: "coming-soon",
    modules: ["observability-tracing", "llm-caching-layer", "model-routing-gateways", "cost-limit-throttles", "latency-fallbacks"],
    plannedProjects: [
      "llm-gateway-service",
      "prompt-registry-system",
      "ai-cost-monitoring-dashboard",
      "ai-observability-platform",
      "model-router-lab",
      "ai-rate-limiter",
      "ai-safety-guardrail-service"
    ],
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
    title: "Module 12: Deployment and Production AI",
    order: 12,
    description: "Run models in production. Master Server-Sent Events streams, inputs guardrails, and automated evaluation pipelines.",
    status: "coming-soon",
    modules: ["streaming-api-design", "token-bucket-rate-limiting", "guardrails-filtering", "cicd-eval-pipelines", "monitoring-drift"],
    plannedProjects: [
      "production-ai-app-template",
      "dockerized-ai-service",
      "cicd-for-ai-apps",
      "evaluation-pipeline-in-ci",
      "streaming-llm-response-app",
      "background-job-ai-worker",
      "production-deployment-dashboard"
    ],
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
    title: "Master Capstones",
    order: 13,
    description: "Synthesize all learnings into enterprise-grade portfolio platforms with full architectural and execution specs.",
    status: "coming-soon",
    modules: ["capstone-architecting", "data-ingestion-scaling", "workflow-eval-loops", "production-deployment"],
    plannedProjects: [
      "ai-healthcare-management-system",
      "ai-ecommerce-intelligence-platform",
      "ai-interview-preparation-platform",
      "ai-devops-code-review-assistant",
      "devjam-ai-learning-assistant"
    ],
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
