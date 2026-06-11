import { AIContentStatus } from "./tracks";

export type AIModule = {
  id: string;
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  status: AIContentStatus;
  submodules: string[];
  projects: string[];
  labs: string[];
  learningOutcomes: string[];
  interviewQuestions: string[];
};

export const aiModules: Record<string, AIModule> = {
  // Track 1: Foundation Track Modules
  "tokenization": {
    id: "tokenization",
    slug: "tokenization",
    trackSlug: "foundation",
    title: "Module 1: Tokenization",
    description: "Understand character mappings, subwords vocabulary splits, BPE encoding steps, and API cost implications.",
    status: "in-progress",
    submodules: ["what-is-tokenization", "tokenization-algorithms", "bpe-wordpiece", "token-inflation-costs", "tokenization-interview"],
    projects: ["tokenizer-visualizer-studio"],
    labs: ["tokenizer-visualizer"],
    learningOutcomes: [
      "Explain how BPE merges frequent byte pairs",
      "Analyze token-to-word inflation percentages in non-English text"
    ],
    interviewQuestions: [
      "Why does a tokenizer vocabulary size mismatch cause out-of-vocabulary errors?"
    ]
  },
  "context-engineering": {
    id: "context-engineering",
    slug: "context-engineering",
    trackSlug: "foundation",
    title: "Module 2: Context Engineering",
    description: "Manage context window capacities, chat history trimming, sliding window states, and RAG query packing.",
    status: "in-progress",
    submodules: ["what-is-context-window", "context-budget-management", "prompt-trimming-strategies", "context-interview"],
    projects: ["context-window-diagnostics"],
    labs: [],
    learningOutcomes: [
      "Design sliding context window algorithms in TypeScript",
      "Calculate prompt token limits dynamically prior to API invocations"
    ],
    interviewQuestions: [
      "How do you manage chat context limits in a production support bot that operates over multi-hour conversations?"
    ]
  },
  "sampling-generation": {
    id: "sampling-generation",
    slug: "sampling-generation",
    trackSlug: "foundation",
    title: "Module 3: Sampling and Generation",
    description: "Deconstruct LLM decoding logic. Explore Temperature, Softmax distribution curves, and penalties.",
    status: "complete",
    submodules: ["hyperparameter-definitions", "softmax-sampling-mechanics", "deterministic-generation"],
    projects: ["hyperparameter-playground"],
    labs: [],
    learningOutcomes: [
      "Explain how Temperature alters the logits probability distribution",
      "Differentiate between Top-p (nucleus) and Top-k sampling bounds"
    ],
    interviewQuestions: [
      "Explain why setting Temperature to 0 does not completely guarantee deterministic responses in multi-node GPU systems."
    ]
  },
  "prompt-engineering": {
    id: "prompt-engineering",
    slug: "prompt-engineering",
    trackSlug: "foundation",
    title: "Module 4: Prompt Engineering",
    description: "Master prompt design topologies: system parameters, classifications, injection protections, and few-shots.",
    status: "placeholder",
    submodules: ["prompt-structural-design", "classification-prompting", "prompt-injection-safeguards", "prompt-evals"],
    projects: ["ai-scam-detector"],
    labs: [],
    learningOutcomes: [
      "Differentiate between System, User, and Assistant prompt scopes",
      "Construct few-shot prompt mappings with schema references"
    ],
    interviewQuestions: [
      "Describe three strategies to mitigate prompt injection attacks in user-facing LLM inputs."
    ]
  },
  "structured-output": {
    id: "structured-output",
    slug: "structured-output",
    trackSlug: "foundation",
    title: "Module 5: Structured Output",
    description: "Enforce schema structures on unstructured completions using JSON validation frameworks.",
    status: "placeholder",
    submodules: ["schema-enforcement-json", "type-safe-validation", "retries-guardrails"],
    projects: ["structured-output-validator"],
    labs: [],
    learningOutcomes: [
      "Validate LLM completions against dynamic JSON schemas",
      "Implement automatic retry policies parsing malformed JSON payloads"
    ],
    interviewQuestions: [
      "How do you enforce type safety on completions when calling models that do not support native structured modes?"
    ]
  },
  "production-llm-processing": {
    id: "production-llm-processing",
    slug: "production-llm-processing",
    trackSlug: "foundation",
    title: "Module 6: Production LLM Processing",
    description: "Scale ingestion pipelines. Manage batch loops, concurrency pipelines, and rate-limiting limits.",
    status: "placeholder",
    submodules: ["batch-loop-processing", "concurrency-backoff", "rate-limits-costs"],
    projects: ["product-review-insight-generator"],
    labs: [],
    learningOutcomes: [
      "Build concurrent processing loops with exponential backoff triggers",
      "Analyze latency-cost margins in multi-turn summarizations"
    ],
    interviewQuestions: [
      "Design a batch review ingestion system handling 10,000 requests per minute under tight model provider rate limits."
    ]
  },
  "embeddings": {
    id: "embeddings",
    slug: "embeddings",
    trackSlug: "foundation",
    title: "Module 7: Embeddings",
    description: "Convert textual characters into high-dimensional vectors to measure similarities mathematically.",
    status: "placeholder",
    submodules: ["text-to-vector-spaces", "distance-metrics-cosine", "similarity-searches"],
    projects: ["resume-jd-matcher"],
    labs: [],
    learningOutcomes: [
      "Calculate Cosine similarity scores between document vectors",
      "Explain the dimension sizes of standard embedding models"
    ],
    interviewQuestions: [
      "Why does cosine similarity fail to represent semantic matches when document lengths differ heavily?"
    ]
  },
  "vector-databases": {
    id: "vector-databases",
    slug: "vector-databases",
    trackSlug: "foundation",
    title: "Module 8: Vector Databases",
    description: "Manage database indexing, approximate nearest neighbor algorithms, and metadata search filters.",
    status: "placeholder",
    submodules: ["vector-db-fundamentals", "ann-indexing-hnsw", "hybrid-search-ranking-strategies"],
    projects: ["semantic-product-search"],
    labs: [],
    learningOutcomes: [
      "Query vector databases combining vector similarity and metadata filtering",
      "Configure HNSW graph link parameters to optimize search latency"
    ],
    interviewQuestions: [
      "Explain the difference between dense retrieval and sparse retrieval in search engines."
    ]
  },
  "self-attention": {
    id: "self-attention",
    slug: "self-attention",
    trackSlug: "foundation",
    title: "Module 9: Self-Attention",
    description: "Deconstruct dot-product attention steps, QKV matrices, and context calculations mathematically.",
    status: "in-progress",
    submodules: ["why-self-attention", "qkv-projection-matrices", "scaled-dot-product-attention", "causal-masking"],
    projects: ["mini-attention-notebook"],
    labs: [],
    learningOutcomes: [
      "Compute Query, Key, and Value vectors from raw inputs",
      "Map scaled dot-product attention matrices mathematically"
    ],
    interviewQuestions: [
      "Explain how causal masking prevents models from looking at future token values during autoregressive generation."
    ]
  },
  "transformers": {
    id: "transformers",
    slug: "transformers",
    trackSlug: "foundation",
    title: "Module 10: Transformers",
    description: "Decode transformer architecture blocks. Study layer normalizations and feed-forward neural layers.",
    status: "placeholder",
    submodules: ["rnn-vs-transformers", "multi-head-attention-layers", "layer-normalization-residuals", "output-logits-softmax"],
    projects: ["mini-transformer-block-explainer"],
    labs: [],
    learningOutcomes: [
      "Detail the execution paths of a standard decoder block",
      "Describe the role of residual skip connections in preventing gradient vanishing"
    ],
    interviewQuestions: [
      "Why did Multi-Head Attention replace single-head attention in production LLM backbones?"
    ]
  },
  "llm-evaluation": {
    id: "llm-evaluation",
    slug: "llm-evaluation",
    trackSlug: "foundation",
    title: "Module 11: LLM Evaluation",
    description: "Design diagnostic evaluation metrics checking hallucination counts, faithfulness, and CI/CD validation checks.",
    status: "placeholder",
    submodules: ["evals-concepts-golden", "metric-eval-faithfulness", "automated-eval-cicd"],
    projects: ["llm-evaluation-lab"],
    labs: [],
    learningOutcomes: [
      "Construct a gold-standard dataset for prompt regression tests",
      "Set up automated eval actions in CI/CD build scripts"
    ],
    interviewQuestions: [
      "How do you evaluate semantic faithfulness on dynamic, open-ended LLM outputs at scale?"
    ]
  }
};
