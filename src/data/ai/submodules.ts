import { AIContentStatus } from "./tracks";

export type AISubmodule = {
  id: string;
  slug: string;
  trackSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  status: AIContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
  projectMapping: string[];
  interviewValue: string[];
};

export const aiSubmodules: Record<string, AISubmodule> = {
  // Tokenization Submodules
  "what-is-tokenization": {
    id: "what-is-tokenization",
    slug: "what-is-tokenization",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "What is Tokenization?",
    description: "Learn how raw text strings are converted into discrete numeric IDs that LLMs can digest.",
    status: "in-progress",
    whatYouWillLearn: [
      "The role of the vocabulary in models",
      "Character vs word vs subword tokenization splits",
      "How numbers are projected as index positions in embedding tables"
    ],
    whyItMatters: "Tokenization is the entry gate to any language model. A poor tokenizer splits text inefficiently, inflating context window costs and degrading generation accuracy.",
    conceptsCovered: ["Vocabulary Mapping", "Integer ID Projection", "Subword Splits"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain why raw emojis or spelling variations can inflate token counts",
      "Describe how out-of-vocabulary terms are resolved in tokenizers"
    ]
  },
  "tokenization-algorithms": {
    id: "tokenization-algorithms",
    slug: "tokenization-algorithms",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization Algorithms",
    description: "Deep dive into character, word, and subword tokenization splits.",
    status: "placeholder",
    whatYouWillLearn: [
      "Sparsity problems in word tokenization",
      "Token size limits",
      "The logic of subword splits"
    ],
    whyItMatters: "Modern models use subword splits to balance vocabulary size against context efficiency.",
    conceptsCovered: ["Character Splitting", "Word Sparsity", "Subword Logic"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the OOV (Out of Vocabulary) bottleneck in word-based tokenizers"
    ]
  },
  "bpe-wordpiece": {
    id: "bpe-wordpiece",
    slug: "bpe-wordpiece",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "BPE & WordPiece",
    description: "How Byte Pair Encoding and WordPiece build text vocabularies iteratively.",
    status: "placeholder",
    whatYouWillLearn: [
      "How BPE builds vocabulary by merging frequent character pairs",
      "The differences between BPE and WordPiece",
      "Analyzing token boundaries"
    ],
    whyItMatters: "BPE is the standard algorithm used by GPT-4 and Llama models to build subword vocabularies.",
    conceptsCovered: ["Byte Pair Encoding", "WordPiece", "Vocabulary Merging"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the merge logic of the Byte Pair Encoding (BPE) algorithm"
    ]
  },
  "token-inflation-costs": {
    id: "token-inflation-costs",
    slug: "token-inflation-costs",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Token Inflation & Costs",
    description: "Analyze API bills, non-English token inflation, and cost optimization.",
    status: "placeholder",
    whatYouWillLearn: [
      "Calculating token consumption against API cost matrices",
      "Non-English token multiplication dynamics",
      "Optimizing prompt sizes"
    ],
    whyItMatters: "Non-English languages can consume up to 4x more tokens for the same sentence, leading to high cost inflation.",
    conceptsCovered: ["Token Billing", "Language Bias in Tokenizers", "Cost Optimization"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Detail how token inflation affects pricing and context windows in international applications"
    ]
  },
  "tokenization-interview": {
    id: "tokenization-interview",
    slug: "tokenization-interview",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization in Interviews",
    description: "How to answer core tokenizer engineering questions in SDE loops.",
    status: "placeholder",
    whatYouWillLearn: [
      "Answering common tokenizer questions",
      "Sizing vocabulary counts",
      "Explaining BPE implementation steps"
    ],
    whyItMatters: "Senior AI panels frequently test tokenizer limits to evaluate production system design skills.",
    conceptsCovered: ["Vocabulary Size Tradeoffs", "BPE Proofs", "Token Limits Defense"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Defend the choice of a 32k vs 128k vocabulary size to a senior panel"
    ]
  },

  // Context Engineering Submodules
  "what-is-context-window": {
    id: "what-is-context-window",
    slug: "what-is-context-window",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "What is a Context Window?",
    description: "Explore model memory capacities, input/output limits, and token budgets.",
    status: "in-progress",
    whatYouWillLearn: [
      "The architectural boundaries of model context windows",
      "Separating input vs output token allocations",
      "Cost math behind scaling context windows"
    ],
    whyItMatters: "A model context window is a hard limit. Exceeding it throws API errors, while fill bounds degrade retrieval accuracy.",
    conceptsCovered: ["Context Capacity", "Token Limits", "Compute Complexity"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Explain why prompt context complexity scales quadratically with sequence length in standard attention layers"
    ]
  },
  "context-budget-management": {
    id: "context-budget-management",
    slug: "context-budget-management",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Context Budget Management",
    description: "Learn chat history growth, system prompt overheads, and token constraints.",
    status: "placeholder",
    whatYouWillLearn: [
      "Tracking session history tokens inflation",
      "Protecting slots for system instructions",
      "Setting threshold safety margins"
    ],
    whyItMatters: "In multi-turn chat applications, history token usage grows exponentially. Active budget management prevents early failures.",
    conceptsCovered: ["Chat History Token Growth", "System Prompt Allocations", "Safety Thresholds"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Propose a memory architecture that prevents chat session context window exhaustion in heavy enterprise applications"
    ]
  },
  "prompt-trimming-strategies": {
    id: "prompt-trimming-strategies",
    slug: "prompt-trimming-strategies",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Prompt Trimming & Memory",
    description: "Implement sliding windows, summarization memory, and truncation logics.",
    status: "placeholder",
    whatYouWillLearn: [
      "Building a sliding window history trimmer",
      "Using model summaries as memory buffers",
      "Trimming older conversation turns based on token limits"
    ],
    whyItMatters: "Trimming context intelligently retains semantic history without wasting API costs on redundant text.",
    conceptsCovered: ["Sliding Window History", "Summarized History Memory", "Token Truncation Logic"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Compare sliding window truncation vs recursive summarization memory in conversational search agents"
    ]
  },
  "context-interview": {
    id: "context-interview",
    slug: "context-interview",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Context Engineering in Interviews",
    description: "Answering context limits and search scaling questions in live technical panels.",
    status: "placeholder",
    whatYouWillLearn: [
      "Explaining context compression",
      "Sizing prompt structures",
      "Resolving 'needle in a haystack' retrieval degradation issues"
    ],
    whyItMatters: "System designers must show how they manage prompt structures to optimize costs and latency.",
    conceptsCovered: ["Context Compression", "Haystack Degradation", "Cost Bounds"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Propose strategies to maintain high retrieval accuracy when injecting 100k+ tokens into a context window"
    ]
  },

  // Sampling & Generation Submodules
  "hyperparameter-definitions": {
    id: "hyperparameter-definitions",
    slug: "hyperparameter-definitions",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Hyperparameter Definitions",
    description: "Master Temperature, Top-p, Top-k, Max Tokens, and Penalties.",
    status: "complete",
    whatYouWillLearn: [
      "Defining hyperparameter properties",
      "Controlling model output lengths",
      "Using presence and frequency penalties to prevent word repetitions"
    ],
    whyItMatters: "Tuning parameters transforms a model from a repetitive generator to a creative, balanced engine.",
    conceptsCovered: ["Temperature", "Top-p & Top-k", "Repetition Penalties"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Explain how frequency penalty checks occur during the next-token selection cycle"
    ]
  },
  "softmax-sampling-mechanics": {
    id: "softmax-sampling-mechanics",
    slug: "softmax-sampling-mechanics",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Softmax & Sampling Mechanics",
    description: "Study how raw model logits are turned into output probability distributions.",
    status: "complete",
    whatYouWillLearn: [
      "How Softmax scales model output scores",
      "Scaling the probability curve using Temperature",
      "Pruning vocabulary candidates using Top-p nucleus thresholds"
    ],
    whyItMatters: "Sampling mechanics explain how models choose words, determining creativity vs accuracy.",
    conceptsCovered: ["Softmax Function", "Logits Probability Scaling", "Nucleus Pruning"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Derive the formula for Temperature scaling inside Softmax, explaining why lower temperatures yield flatter, repetitive predictions"
    ]
  },
  "deterministic-generation": {
    id: "deterministic-generation",
    slug: "deterministic-generation",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Deterministic vs. Creative Generation",
    description: "Determine configurations to obtain stable structured outputs vs. creative copywriting.",
    status: "complete",
    whatYouWillLearn: [
      "Configurations for deterministic data extractions",
      "Tuning parameters for creative copywriting tasks",
      "Why multi-GPU clustering can cause slight response variations"
    ],
    whyItMatters: "Enterprise data processors require deterministic JSON structures. Copywriting systems require high entropy.",
    conceptsCovered: ["Deterministic Extraction", "Creative Copywriting Entropy", "Non-Deterministic Runtimes"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Propose configurations to secure maximum determinism when parsing complex data schemas from unstructured logs"
    ]
  }
};
