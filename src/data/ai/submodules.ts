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
  detailedExplanation?: string;
  interviewQuestions?: { question: string; answer: string; }[];
};

export const aiSubmodules: Record<string, AISubmodule> = {
  // Tokenization Submodules
  "what-is-tokenization": {
    id: "what-is-tokenization",
    slug: "what-is-tokenization",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "What Is Tokenization?",
    description: "Learn how raw text is converted into tokens and token IDs before entering an LLM.",
    status: "complete",
    whatYouWillLearn: [
      "Understand what tokens are",
      "Explain token IDs",
      "Describe the LLM input pipeline"
    ],
    whyItMatters: "Tokenization is the entry gate to any language model. A poor tokenizer splits text inefficiently, inflating context window costs and degrading generation accuracy.",
    conceptsCovered: ["Token", "Token ID", "Tokenizer Vocabulary", "Embedding Lookup"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain why raw emojis or spelling variations can inflate token counts",
      "Describe how out-of-vocabulary terms are resolved in tokenizers"
    ],
    detailedExplanation: "Tokenization translates unstructured text into a sequence of discrete integers (tokens) corresponding to indices in the model's embedding matrix. LLMs do not read characters directly. Instead, they operate on these numerical IDs."
  },
  "tokenization-algorithms": {
    id: "tokenization-algorithms",
    slug: "tokenization-algorithms",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Character, Word & Subword Tokenization",
    description: "Compare character-level, word-level, and subword tokenization with simple examples.",
    status: "complete",
    whatYouWillLearn: [
      "Compare tokenizer types",
      "Understand why subwords are used",
      "Identify tokenization trade-offs"
    ],
    whyItMatters: "Modern models use subword splits to balance vocabulary size against context efficiency.",
    conceptsCovered: ["Character Tokenization", "Word Tokenization", "Subword Tokenization"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the OOV bottleneck in word-based tokenizers"
    ]
  },
  "bpe-wordpiece": {
    id: "bpe-wordpiece",
    slug: "bpe-wordpiece",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "BPE, WordPiece & SentencePiece",
    description: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
    status: "complete",
    whatYouWillLearn: [
      "Explain Byte Pair Encoding",
      "Understand WordPiece",
      "Understand SentencePiece and Unigram"
    ],
    whyItMatters: "BPE is the standard algorithm used by GPT-4 and Llama models to build subword vocabularies.",
    conceptsCovered: ["Byte Pair Encoding", "WordPiece", "SentencePiece"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the merge logic of the Byte Pair Encoding (BPE) algorithm"
    ]
  },
  "token-ids-vocabulary": {
    id: "token-ids-vocabulary",
    slug: "token-ids-vocabulary",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Token IDs, Vocabulary & Embeddings",
    description: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
    status: "complete",
    whatYouWillLearn: [
      "Explain tokenizer vocabulary",
      "Understand token IDs",
      "Connect tokens to embeddings"
    ],
    whyItMatters: "Tokenization ends with IDs; the model starts with embeddings. Understanding this interface is key to understanding neural NLP.",
    conceptsCovered: ["Vocabulary Table", "Embedding Lookup", "Hidden Dimension"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the connection between token IDs and the embedding matrix"
    ]
  },
  "token-cost": {
    id: "token-cost",
    slug: "token-cost",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Token Inflation, Context Window & API Cost",
    description: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
    status: "complete",
    whatYouWillLearn: [
      "Estimate token usage",
      "Understand token inflation",
      "Optimize prompts for cost"
    ],
    whyItMatters: "Non-English languages can consume up to 4x more tokens for the same sentence, leading to high cost inflation.",
    conceptsCovered: ["Token Inflation", "API Pricing", "Context Limits"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Detail how token inflation affects pricing and context windows in international applications"
    ]
  },
  "rag-agents": {
    id: "rag-agents",
    slug: "rag-agents",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization in RAG & AI Agents",
    description: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
    status: "complete",
    whatYouWillLearn: [
      "Design token-aware RAG chunks",
      "Control agent memory size",
      "Reduce context waste"
    ],
    whyItMatters: "Chunking database documents by characters instead of token counts causes vector search mismatches and context overflows.",
    conceptsCovered: ["Token Chunking", "Agent Loops", "Memory Trimming"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "How does tokenization affect document chunking in RAG pipelines?"
    ]
  },
  "interview-guide": {
    id: "interview-guide",
    slug: "interview-guide",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization Interview Guide",
    description: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
    status: "complete",
    whatYouWillLearn: [
      "Answer tokenization interview questions",
      "Explain BPE clearly",
      "Connect tokenization to production systems"
    ],
    whyItMatters: "Syllabus interviews frequently focus on boundaries and trade-offs of tokenization systems.",
    conceptsCovered: ["Vocabulary Trade-offs", "BPE Merges", "UTF-8 Fallback"],
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
    ],
    detailedExplanation: "The context window is the maximum sequence length (input + output tokens) that a model can process in a single inference step. In standard transformer architectures, the self-attention layer computes relationship values between every pair of tokens. This results in quadratic O(N^2) time and space complexity, meaning that doubling the sequence length quadruples the GPU memory and processing steps required.",
    interviewQuestions: [
      {
        question: "Explain the 'Lost in the Middle' phenomenon in long context windows.",
        answer: "Studies show that LLMs are much better at retrieving information placed at the absolute beginning or end of a long prompt context. Information buried in the middle of a 32k or 128k token window is often neglected because the attention mechanism distributes its weights too thinly across the sequence."
      }
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
    ],
    detailedExplanation: "Managing token budgets requires dynamically tracking the length of system prompts, user queries, retrieved RAG context, and active conversation history. If the combined token length approaches the model's limit, the application must apply compression, truncation, or history-trimming policies. This prevents context exhaustion API errors and maintains low latency.",
    interviewQuestions: [
      {
        question: "How do you calculate and reserve space for output tokens in a strict budget plan?",
        answer: "We count the input tokens using a local tokenizer library (like tiktoken) before calling the API. If the limit is C and we want to reserve O tokens for the model's answer, we ensure the input tokens never exceed C - O, dynamically trimming the chat history if needed."
      }
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
    ],
    detailedExplanation: "To prevent history from exhausting the context window, several strategies can be employed. Sliding Window Truncation discards the oldest messages when the token count exceeds a threshold. Recursive Summarization uses a smaller LLM in the background to summarize older turns into a compact summary paragraph, which is appended to the system prompt, preserving history themes in few tokens.",
    interviewQuestions: [
      {
        question: "What are the trade-offs of using sliding windows vs summarization memory?",
        answer: "Sliding windows are cheap and preserve exact message details but completely forget older topics. Summarization memory preserves the general context of older conversations but incurs background API latency/costs and can introduce hallucinated summary states."
      }
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
    ],
    detailedExplanation: "Interviewers want to see how you design production setups that remain robust under heavy user interactions. When discussing context windows, emphasize practical limits (lost-in-the-middle, cost constraints) rather than just stating the theoretical limits (e.g., 200k tokens). Explain how you combine local embedding lookups with dynamic prompt builders to structure inputs.",
    interviewQuestions: [
      {
        question: "How do you evaluate if a model is successfully retrieving information from a 100k token window?",
        answer: "We perform a 'Needle in a Haystack' evaluation: we insert a specific fact (the needle) at varying depths (from 0% to 100%) in a large body of random text (the haystack) and query the model to retrieve it. This generates a recall heatmap identifying depth vulnerabilities."
      }
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
    ],
    detailedExplanation: "Hyperparameters control the token selection process at the model's output layer. While the model's weights remain fixed, adjusting hyperparameters like Temperature, Top-p, and penalties modifies the probability distribution of potential next tokens, shifting the output from highly deterministic to highly creative.",
    interviewQuestions: [
      {
        question: "What is the difference between Frequency Penalty and Presence Penalty?",
        answer: "Frequency Penalty penalizes tokens based on how many times they have already appeared in the output, preventing word loops. Presence Penalty penalizes a token if it has appeared at least once, encouraging the model to introduce new topics/words."
      }
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
    ],
    detailedExplanation: "The model outputs raw values called logits for every token in the vocabulary. The Softmax function converts these logits into a probability distribution summing to 1. Temperature (T) scales the logits: Logits = Logits / T. When T is low (e.g. 0.1), the differences between logits are amplified, concentrating the probability on the absolute top candidate. When T is high, the distribution flattens, giving lower-ranked tokens a higher chance of selection.",
    interviewQuestions: [
      {
        question: "Explain why Temperature cannot be set to 0 mathematically, and how APIs implement it.",
        answer: "If T = 0, division by zero occurs (Logits / 0). To implement Temperature = 0, APIs bypass Softmax sampling altogether and perform 'greedy decoding', selecting the token with the highest raw logit value."
      }
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
    ],
    detailedExplanation: "In enterprise workloads, obtaining reliable structured data (like JSON) requires high determinism. This is achieved by setting Temperature to 0, using Top-p = 1, and using guided decoding. Conversely, creative tasks require high entropy (higher Temperature, active penalties) to prevent repetitive clichés and encourage diverse vocabulary splits.",
    interviewQuestions: [
      {
        question: "Why can an LLM respond with different outputs even at Temperature = 0 on cloud endpoints?",
        answer: "Modern cloud APIs route queries to large clusters of GPUs executing calculations in parallel. Minor hardware timing differences or out-of-order execution in floating-point operations can cause rounding differences (non-associative float addition: (A + B) + C !== A + (B + C)). This creates tiny logit shifts that can change the chosen token at critical selection points."
      }
    ]
  }
};
