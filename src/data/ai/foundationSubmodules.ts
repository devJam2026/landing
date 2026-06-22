export interface SubmodulePipelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  exampleInput: string;
  exampleOutput: string;
}

export interface SubmoduleLesson {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Interview";
  description: string;
  outcomes: string[];
  duration: string;
  ctaLabel: string;
}

export interface SubmoduleProject {
  name: string;
  repo: string;
  githubUrl: string;
  labUrl?: string;
  requirementsUrl?: string;
  description: string;
  techStack: string[];
}

export interface ModuleStats {
  completedPercentage: number;
  totalLessons: number;
  lessonsToComplete: number;
}

export interface ModuleLink {
  name: string;
  slug: string;
}

export interface FoundationSubmodule {
  slug: string;
  moduleNumber: string;
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  masteryOutcomes: string[];
  pipelineSteps: SubmodulePipelineStep[];
  lessons: SubmoduleLesson[];
  moduleStats: ModuleStats;
  quickCheatsheet: string[];
  project: SubmoduleProject;
  interviewQuestions: string[];
  productionChecklist: string[];
  previousModule: ModuleLink | null;
  nextModule: ModuleLink | null;
}

export const foundationSubmodulesData: Record<string, FoundationSubmodule> = {
  "tokenization": {
    slug: "tokenization",
    moduleNumber: "1.1",
    eyebrow: "Syllabus Module 1.1",
    title: "Tokenization Hub",
    description: "Before an LLM can understand text, it must first break language into tokens. In this module, you will learn how raw text becomes token IDs, how tokenizer algorithms like BPE and WordPiece work, why non-English text can increase token usage, and how tokenization affects API cost, context windows, RAG pipelines, and AI agents.",
    badges: ["Beginner Friendly", "Interview Focused", "Production Relevant"],
    masteryOutcomes: [
      "Explain what tokens are and why LLMs process numbers instead of raw strings.",
      "Understand token IDs and tokenizer vocabularies mapping rules.",
      "Compare character-level, word-level, and subword tokenization models.",
      "Describe BPE, WordPiece, and SentencePiece merging statistics.",
      "Analyze token inflation, API cost margins, and context window limits.",
      "Connect token boundary counts to RAG chunking and agent memory loops."
    ],
    pipelineSteps: [
      {
        id: "step1",
        title: "Raw Text",
        subtitle: "Human-readable input",
        description: "Human-readable text input by the user. E.g., 'I love AI'. Characters are the base representation.",
        exampleInput: "\"I love AI\"",
        exampleOutput: "\"I love AI\""
      },
      {
        id: "step2",
        title: "Tokens",
        subtitle: "Text broken into chunks",
        description: "Text is broken into smaller chunks (words or subwords) by the tokenizer algorithm. Spaces are preserved.",
        exampleInput: "\"I love AI\"",
        exampleOutput: "[\"I\", \" love\", \" AI\"]"
      },
      {
        id: "step3",
        title: "Token IDs",
        subtitle: "Numeric representations",
        description: "Each unique token is mapped to an integer value representing its index position in the model's vocabulary table.",
        exampleInput: "[\"I\", \" love\", \" AI\"]",
        exampleOutput: "[40, 3047, 15592]"
      },
      {
        id: "step4",
        title: "Embeddings",
        subtitle: "Projected dense vectors",
        description: "Token IDs are projected into a high-dimensional vector space (e.g. 4096 dimensions) via embedding lookup weights.",
        exampleInput: "[40, 3047, 15592]",
        exampleOutput: "[[0.12, -0.45, ...], [0.89, 0.01, ...], ...]"
      },
      {
        id: "step5",
        title: "Transformer",
        subtitle: "Context processing",
        description: "Self-attention layers process the dense vectors in parallel to encode contextual relationships and predict next tokens.",
        exampleInput: "[[0.12, -0.45, ...], [0.89, 0.01, ...], ...]",
        exampleOutput: "Attention weight map & probability distribution computed"
      },
      {
        id: "step6",
        title: "Output Tokens",
        subtitle: "Generated and decoded text",
        description: "Predicted token IDs are sampled and decoded back into human-readable text output.",
        exampleInput: "[105, 301]",
        exampleOutput: "\"You're welcome\""
      }
    ],
    lessons: [
      {
        id: "what-is-tokenization",
        title: "What Is Tokenization?",
        level: "Beginner",
        duration: "12 min read",
        description: "Learn how raw text is converted into tokens and token IDs before entering an LLM.",
        outcomes: ["Understand what tokens are", "Explain token IDs", "Describe the LLM input pipeline"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "tokenization-algorithms",
        title: "Character, Word & Subword Tokenization",
        level: "Beginner",
        duration: "15 min read",
        description: "Compare character-level, word-level, and subword tokenization with simple examples.",
        outcomes: ["Compare tokenizer types", "Understand why subwords are used", "Identify tokenization trade-offs"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "bpe-wordpiece",
        title: "BPE, WordPiece & SentencePiece",
        level: "Intermediate",
        duration: "18 min read",
        description: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
        outcomes: ["Explain Byte Pair Encoding", "Understand WordPiece", "Understand SentencePiece and Unigram"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "token-ids-vocabulary",
        title: "Token IDs, Vocabulary & Embeddings",
        level: "Beginner",
        duration: "14 min read",
        description: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
        outcomes: ["Explain tokenizer vocabulary", "Understand token IDs", "Connect tokens to embeddings"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "token-cost",
        title: "Token Inflation, Context Window & API Cost",
        level: "Intermediate",
        duration: "16 min read",
        description: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
        outcomes: ["Estimate token usage", "Understand token inflation", "Optimize prompts for cost"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "rag-agents",
        title: "Tokenization in RAG & AI Agents",
        level: "Intermediate",
        duration: "18 min read",
        description: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
        outcomes: ["Design token-aware RAG chunks", "Control agent memory size", "Reduce context waste"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "interview-guide",
        title: "Tokenization Interview Guide",
        level: "Interview",
        duration: "20 min read",
        description: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
        outcomes: ["Answer tokenization interview questions", "Explain BPE clearly", "Connect tokenization to production systems"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 7,
      lessonsToComplete: 7
    },
    quickCheatsheet: [
      "Text → Tokens → IDs → Embeddings is the core entry pipeline structure.",
      "1 English word !== 1 token. In fact, subword splits merge fragments.",
      "Input + Output = Total. API bills measure the total of both prompts.",
      "Token count affects cost & latency. Shorter prompts yield faster generations.",
      "Chunking in RAG must measure token indices, not characters lengths."
    ],
    project: {
      name: "Tokenizer Visualizer Studio",
      repo: "tokenizer-visualizer-studio",
      githubUrl: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      labUrl: "/labs/tokenizer-visualizer",
      requirementsUrl: "/projects/tokenizer-visualizer-studio",
      description: "Build a dynamic web app to highlight token borders, trace byte merges, and audit API billing.",
      techStack: ["TypeScript", "React", "Tailwind CSS", "tiktoken"]
    },
    interviewQuestions: [
      "What is tokenization in LLMs?",
      "Why do LLMs use subword tokenization?",
      "What is the difference between token and token ID?",
      "How does BPE work?",
      "Why does token count affect API cost?",
      "Why can non-English text consume more tokens?",
      "How does tokenization affect RAG chunking?",
      "How does tokenization affect agent memory?"
    ],
    productionChecklist: [
      "Track input and output tokens for API calls",
      "Estimate API cost before sending large requests",
      "Use token-aware chunking limits for RAG documents",
      "Summarize or trim old chat history recursively",
      "Avoid unnecessary prompt repetition in system instructions",
      "Test multilingual inputs for token inflation",
      "Compress large tool outputs before returning them to LLMs",
      "Implement retry/fallback systems for context window overflows"
    ],
    previousModule: null,
    nextModule: { name: "Context Window", slug: "context-window" }
  },
  "context-window": {
    slug: "context-window",
    moduleNumber: "1.2",
    eyebrow: "Syllabus Module 1.2",
    title: "Context Window",
    description: "Large Language Models operate within rigid memory budgets. In this module, you will learn to manage context capacities, implement message-trimming strategies, summarize chat histories recursively, and build context-aware prompts that maximize information density while minimizing API costs.",
    badges: ["Intermediate", "System Design Focus", "VRAM Economics"],
    masteryOutcomes: [
      "Understand the mechanics of context windows and context budget allocation.",
      "Implement sliding window conversation history truncation models.",
      "Utilize summarization loops to compress historical conversational turns.",
      "Understand RAG query packaging constraints and avoid needle-in-a-haystack decay.",
      "Optimize prompt lengths to minimize latency, token consumption, and cost.",
      "Handle context overflow scenarios and implement API error fallbacks."
    ],
    pipelineSteps: [
      {
        id: "cw-step1",
        title: "Text Inputs",
        subtitle: "Raw input parameters",
        description: "The raw text block from chat, RAG retrievals, and system instructions.",
        exampleInput: "\"Retrieve relevant docs...\"",
        exampleOutput: "\"Retrieve relevant docs...\""
      },
      {
        id: "cw-step2",
        title: "Messages Array",
        subtitle: "Role-scoped arrays",
        description: "Structuring text into System, User, and Assistant message dictionaries.",
        exampleInput: "Raw text block",
        exampleOutput: "[{role: 'system', content: '...'}, {role: 'user', content: '...'}]"
      },
      {
        id: "cw-step3",
        title: "Token Budget",
        subtitle: "Compute local lengths",
        description: "Running local tiktoken evaluations to measure the current prompt length against the model limit.",
        exampleInput: "Messages array",
        exampleOutput: "Total size calculated: 6,400 tokens / 8,192 limit"
      },
      {
        id: "cw-step4",
        title: "Trim/Summarize",
        subtitle: "Apply history filters",
        description: "Trimming the oldest chat turns or executing background summarizers to fit the budget.",
        exampleInput: "6,400 tokens",
        exampleOutput: "Discarded 2 oldest turns; compressed history using a summary buffer"
      },
      {
        id: "cw-step5",
        title: "Packed Prompt",
        subtitle: "Compile optimized text",
        description: "Assembling system instructions, summary context, and current query into a single string.",
        exampleInput: "Filtered components",
        exampleOutput: "\"System: [Rules] Summary: [State] User: [Query]\""
      },
      {
        id: "cw-step6",
        title: "Model Response",
        subtitle: "Generate reply",
        description: "The model receives the packed prompt and outputs the completion within the remaining token buffer.",
        exampleInput: "Packed prompt string",
        exampleOutput: "Answer generated (250 tokens), token budget cleared"
      }
    ],
    lessons: [
      {
        id: "what-is-context-window",
        title: "What is a Context Window?",
        level: "Beginner",
        duration: "10 min read",
        description: "Understand model memory capacities, input/output splits, and token bounds.",
        outcomes: ["Explain memory limitations", "Describe context quadratic scaling", "Differentiate input/output budgets"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "context-budget-management",
        title: "Context Budget Management",
        level: "Intermediate",
        duration: "12 min read",
        description: "Learn session history scaling, system overheads, and token constraints.",
        outcomes: ["Track message inflation", "Allocate space for output tokens", "Set warning thresholds"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "prompt-trimming-strategies",
        title: "Prompt Trimming & Memory",
        level: "Intermediate",
        duration: "15 min read",
        description: "Implement sliding windows, summarization memory, and truncation logics.",
        outcomes: ["Implement history sliders", "Compare sliding windows vs summarizers", "Build text truncation loops"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "sliding-window-conversation",
        title: "Sliding Window Conversation State",
        level: "Intermediate",
        duration: "11 min read",
        description: "Manage dynamic conversation histories using sliding token limits.",
        outcomes: ["Track active chat queues", "Prune history based on tiktoken indices", "Keep system prompts pinned"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "context-overflow-failures",
        title: "Context Overflow Failure Modes",
        level: "Advanced",
        duration: "14 min read",
        description: "Debug context window overflow errors and build automatic repair gates.",
        outcomes: ["Diagnose 400 Bad Request errors", "Implement prompt compression", "Structure fallback models routing"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "context-interview",
        title: "Context Engineering in Interviews",
        level: "Interview",
        duration: "15 min read",
        description: "Prepare for engineering interviews focused on long-context architecture.",
        outcomes: ["Discuss 'lost-in-the-middle' retrieval", "Defend history compression", "Settle memory budgets"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 6,
      lessonsToComplete: 6
    },
    quickCheatsheet: [
      "Total tokens = Input prompt + Output generation. Keep a safety buffer.",
      "Self-attention compute scales quadratically O(N^2) with sequence length.",
      "The 'Lost in the Middle' rule: LLMs recall facts at prompt extremes best.",
      "Always pin the System Prompt; truncate only User/Assistant chat history.",
      "Use local tokenizers (tiktoken) to calculate bounds before hitting the API."
    ],
    project: {
      name: "Context Window Diagnostics",
      repo: "context-window-diagnostics",
      githubUrl: "https://github.com/devJam2026/context-window-diagnostics",
      requirementsUrl: "/projects/context-window-diagnostics",
      description: "Build a diagnostic dashboard to simulate token budgeting, sliding window truncation, and history summaries.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "tiktoken"]
    },
    interviewQuestions: [
      "How do you prevent context window exhaustion in multi-turn conversation agents?",
      "Explain the 'Lost in the Middle' phenomenon in long context windows.",
      "What are the trade-offs of using sliding windows vs summarization memory?",
      "How do you calculate and reserve space for output tokens in a strict budget plan?",
      "How do you evaluate if a model is successfully retrieving information from a 100k token window?"
    ],
    productionChecklist: [
      "Calculate prompt token size using tiktoken before executing API requests",
      "Enforce hard caps on history message counts and prune oldest entries dynamically",
      "Utilize background summarization for conversations extending beyond 10 turns",
      "Inject RAG documents prioritized by semantic relevance scores",
      "Reserve at least 15% of the total context window for the model's generated answer",
      "Setup monitoring alerts for API errors returning context window length violations"
    ],
    previousModule: { name: "Tokenization", slug: "tokenization" },
    nextModule: { name: "Hyperparameters", slug: "hyperparameters" }
  },
  "hyperparameters": {
    slug: "hyperparameters",
    moduleNumber: "1.3",
    eyebrow: "Syllabus Module 1.3",
    title: "Hyperparameters",
    description: "Language models output raw logits that must be transformed into readable text. In this module, you will master the hyperparameters that govern LLM generation. Explore Temperature, Softmax distribution curves, Top-k and Top-p sampling filters, and penalties that prevent repetitive loops.",
    badges: ["Intermediate", "Logits Math", "Tuning Guide"],
    masteryOutcomes: [
      "Explain how Temperature alters the logits probability distribution.",
      "Differentiate between Top-k and Top-p sampling boundaries.",
      "Implement presence and frequency penalties to stop word repetition.",
      "Configure hyperparameters for deterministic JSON vs creative copy.",
      "Explain why Temperature = 0 does not guarantee 100% reproducibility."
    ],
    pipelineSteps: [
      {
        id: "hp-step1",
        title: "Logits Output",
        subtitle: "Raw model logits",
        description: "The model's final linear layer outputs raw float values for every token in the vocabulary table.",
        exampleInput: "[12.5, -4.2, 8.9, ...]",
        exampleOutput: "[12.5, -4.2, 8.9, ...]"
      },
      {
        id: "hp-step2",
        title: "Temperature Scale",
        subtitle: "Divide logits by T",
        description: "Dividing logits by Temperature before Softmax. Low T concentrates probability; High T flattens it.",
        exampleInput: "[12.5, -4.2, 8.9], T = 0.5",
        exampleOutput: "[25.0, -8.4, 17.8]"
      },
      {
        id: "hp-step3",
        title: "Softmax Probability",
        subtitle: "Convert to probabilities",
        description: "Softmax mathematical transforms scale scaled logits into a probability distribution summing to 1.0.",
        exampleInput: "[25.0, -8.4, 17.8]",
        exampleOutput: "[0.98, 0.00, 0.02]"
      },
      {
        id: "hp-step4",
        title: "Top-k & Top-p",
        subtitle: "Prune candidate list",
        description: "Top-k keeps the top K tokens; Top-p keeps only the top tokens whose cumulative probability reaches P.",
        exampleInput: "Top-p = 0.95",
        exampleOutput: "Pruned tail tokens, kept top candidates contributing to 95%"
      },
      {
        id: "hp-step5",
        title: "Penalties",
        subtitle: "Apply repetition filters",
        description: "Frequency and presence penalties lower logits of tokens that have already been generated.",
        exampleInput: "Token 'AI' already generated twice",
        exampleOutput: "Adjusted logits downward for repeat tokens"
      },
      {
        id: "hp-step6",
        title: "Final Sampling",
        subtitle: "Select token ID",
        description: "The final probability distribution is sampled to select the token ID, which is decoded into text.",
        exampleInput: "Final probability distribution",
        exampleOutput: "Token index 15592 chosen → 'AI'"
      }
    ],
    lessons: [
      {
        id: "hyperparameter-definitions",
        title: "Hyperparameter Definitions",
        level: "Beginner",
        duration: "10 min read",
        description: "Master Temperature, Top-p, Top-k, Max Tokens, and Penalties.",
        outcomes: ["Define hyperparameter roles", "Control text lengths", "Utilize repetition penalties"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "softmax-sampling-mechanics",
        title: "Temperature and Softmax",
        level: "Intermediate",
        duration: "14 min read",
        description: "Study how raw model logits are turned into output probability distributions.",
        outcomes: ["Apply Softmax formula", "Explain Temperature math", "Understand greedy decoding"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "top-k-top-p",
        title: "Top-k vs Top-p Sampling",
        level: "Intermediate",
        duration: "12 min read",
        description: "Compare cumulative distribution thresholds against fixed count cuts.",
        outcomes: ["Define Top-k limits", "Explain Top-p cumulative nucleus", "Combine K and P limits"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "frequency-presence-penalty",
        title: "Frequency and Presence Penalty",
        level: "Intermediate",
        duration: "11 min read",
        description: "Learn how repetition penalties modify logit states dynamically.",
        outcomes: ["Contrast frequency vs presence penalty", "Adjust logits penalty values", "Prevent vocabulary loops"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "deterministic-creative",
        title: "Deterministic vs Creative Generation",
        level: "Intermediate",
        duration: "13 min read",
        description: "Determine configurations to obtain stable structured outputs vs creative copywriting.",
        outcomes: ["Configure JSON settings", "Set creative entropy margins", "Map seed parameters"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "sampling-interview",
        title: "Sampling Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Answer complex hyperparameters questions in live technical panels.",
        outcomes: ["Explain Temperature = 0 variations", "Derive Softmax scaling", "Explain seed limits"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 100,
      totalLessons: 6,
      lessonsToComplete: 0
    },
    quickCheatsheet: [
      "Low Temperature (e.g. 0.1) concentrates probability on the top choice: best for JSON.",
      "High Temperature (e.g. 1.0+) spreads probability: best for creative copy.",
      "Top-p (nucleus sampling) limits selection to tokens within a cumulative percentage.",
      "Frequency Penalty scales with word count; Presence Penalty applies a flat penalty.",
      "Setting Temperature = 0 changes sampling to greedy argmax decoding."
    ],
    project: {
      name: "Hyperparameter Playground",
      repo: "hyperparameter-playground",
      githubUrl: "https://github.com/devJam2026/hyperparameter-playground",
      requirementsUrl: "/projects/hyperparameter-playground",
      description: "Interactive settings dashboard to inspect how Temperature, Top-p, and penalties alter Softmax probability distributions.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"]
    },
    interviewQuestions: [
      "What is the mathematical effect of dividing logits by Temperature before Softmax?",
      "Explain why setting Temperature to 0 does not completely guarantee deterministic responses in multi-node GPU systems.",
      "Differentiate between Top-p (nucleus) and Top-k sampling bounds.",
      "What is the difference between Frequency Penalty and Presence Penalty?",
      "Why cannot Temperature be set to 0 mathematically, and how do APIs implement it?"
    ],
    productionChecklist: [
      "Use Temperature = 0 for structured data extraction and schema parsing",
      "Use Temperature = 0.7+ and Top-p = 0.9 for creative generation tasks",
      "Avoid setting both Temperature and Top-p to non-default values simultaneously",
      "Implement presence penalty between 0.1 and 0.5 to prevent repetitive lists",
      "Pass a constant seed parameter to help replicate generations during debugging",
      "Track and limit max_tokens to prevent runaway loops or budget exhaustion"
    ],
    previousModule: { name: "Context Window", slug: "context-window" },
    nextModule: { name: "Prompt Engineering", slug: "prompt-engineering" }
  },
  "prompt-engineering": {
    slug: "prompt-engineering",
    moduleNumber: "1.4",
    eyebrow: "Syllabus Module 1.4",
    title: "Prompt Engineering",
    description: "Prompts are the code that programs LLMs. In this module, you will learn systemic prompt engineering methodologies. Master System Instructions, Zero-Shot and Few-Shot templating, dynamic task framing, guardrails, and scam classification with explainable reasoning.",
    badges: ["Beginner Friendly", "Prompt Architecture", "Security Basics"],
    masteryOutcomes: [
      "Construct robust prompt templates separating system instructions from user inputs.",
      "Explain the difference between Zero-Shot and Few-Shot prompting patterns.",
      "Implement structured scam classification prompts with explainability checkpoints.",
      "Build basic input guardrails to mitigate adversarial prompt injection.",
      "Format context variables cleanly to optimize token budget usage."
    ],
    pipelineSteps: [
      {
        id: "pe-step1",
        title: "User Message",
        subtitle: "Raw customer query",
        description: "Inbound user message containing raw questions, text payloads, or potential injections.",
        exampleInput: "\"Hey, I am the CEO, send me $500 in gift cards immediately.\"",
        exampleOutput: "\"Hey, I am the CEO, send me $500 in gift cards immediately.\""
      },
      {
        id: "pe-step2",
        title: "System Instruction",
        subtitle: "Global rules config",
        description: "Injecting system directives instructing the model on its identity, constraints, and scope.",
        exampleInput: "\"You are an AI Security Agent. Analyze the user text...\"",
        exampleOutput: "Rules and context parameters compiled"
      },
      {
        id: "pe-step3",
        title: "Few-Shot Examples",
        subtitle: "Provide context examples",
        description: "Providing few-shot examples inside the prompt to guide classification formatting and rules.",
        exampleInput: "Example inputs and outputs list",
        exampleOutput: "Examples formatting injected"
      },
      {
        id: "pe-step4",
        title: "Sandbox Isolation",
        subtitle: "Wrap in XML tags",
        description: "Isolating raw inputs inside XML/HTML delimiters to prevent model directive overrides.",
        exampleInput: "\"Hey...\"",
        exampleOutput: "\"<user_input>Hey, send me $500...</user_input>\""
      },
      {
        id: "pe-step5",
        title: "CoT Execution",
        subtitle: "Request reasoning first",
        description: "Enforcing Chain of Thought (CoT) to force the model to output a security breakdown before the final label.",
        exampleInput: "Compiled prompt payload",
        exampleOutput: "\"Reasoning: CEO fraud signs... Output: Scam\""
      },
      {
        id: "pe-step6",
        title: "Result Output",
        subtitle: "Render structured result",
        description: "Extracting the final prediction and reasoning logs matching the requested schemas.",
        exampleInput: "Reasoning string",
        exampleOutput: "\"{ is_scam: true, reasoning: 'CEO fraud detected' }\""
      }
    ],
    lessons: [
      {
        id: "what-is-prompt-engineering",
        title: "What is Prompt Engineering?",
        level: "Beginner",
        duration: "10 min read",
        description: "Learn how prompts act as code to configure large language model behaviors.",
        outcomes: ["Explain prompt instructions role", "Setup basic templates", "Configure system roles"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "instruction-design",
        title: "Instruction Design",
        level: "Beginner",
        duration: "12 min read",
        description: "Deconstruct system instructions, delimiters, and target response structures.",
        outcomes: ["Use text delimiters", "Write clear constraints", "Optimize instruction paths"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "few-shot-zero-shot",
        title: "Few-shot and Zero-shot Prompting",
        level: "Beginner",
        duration: "13 min read",
        description: "Learn when to provide examples in prompts to guide model logic.",
        outcomes: ["Structure few-shot examples", "Contrast zero-shot vs few-shot", "Avoid example selection bias"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "classification-prompts",
        title: "Classification Prompts",
        level: "Intermediate",
        duration: "14 min read",
        description: "Build templates to sort unstructured inputs into categorical buckets.",
        outcomes: ["Implement class templates", "Map confidence outputs", "Handle boundary cases"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "prompt-injection-basics",
        title: "Prompt Injection Basics",
        level: "Intermediate",
        duration: "15 min read",
        description: "Learn how users bypass system prompts and how to write basic defenses.",
        outcomes: ["Identify system bypasses", "Implement injection filters", "Use XML/JSON isolation tags"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "explainable-responses",
        title: "Explainable AI Responses",
        level: "Intermediate",
        duration: "12 min read",
        description: "Generate structured thought chains prior to final answers to improve accuracy.",
        outcomes: ["Setup Chain-of-Thought (CoT)", "Isolate reasoning outputs", "Verify intermediate steps"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "prompt-interview-guide",
        title: "Prompt Engineering Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Prepare for senior panels asking about prompt architectures and scaling.",
        outcomes: ["Discuss prompt versioning", "Defend fine-tuning vs prompting", "Evaluate prompt regressions"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 100,
      totalLessons: 7,
      lessonsToComplete: 0
    },
    quickCheatsheet: [
      "Separate instructions and untrusted user input using clear delimiters like XML tags.",
      "Few-shot examples are highly effective for teaching complex formatting and tone.",
      "Chain-of-Thought (reasoning before answering) improves performance on logic and math.",
      "Adversarial prompt injection attempts to override system rules via user inputs.",
      "Keep templates versioned in source control alongside application code."
    ],
    project: {
      name: "AI Scam Detector",
      repo: "ai-scam-detector",
      githubUrl: "https://github.com/devJam2026/ai-scam-detector",
      requirementsUrl: "/projects/ai-scam-detector",
      description: "Build an AI scam classifier using few-shot prompt templates, XML input isolation, and reasoning fields.",
      techStack: ["React", "TypeScript", "Tailwind CSS"]
    },
    interviewQuestions: [
      "How do you design a few-shot prompt template that protects model classifications from text prompt injections?",
      "Explain the difference between System, User, and Assistant prompt scopes.",
      "What is Chain-of-Thought prompting, and why does it improve reasoning outputs?",
      "How do you mitigate prompt injection attacks in user-facing LLM inputs?",
      "Compare the efficiency of prompt classifications against fine-tuning a small model."
    ],
    productionChecklist: [
      "Isolate user input inside XML tags (e.g. <user_input>text</user_input>) in the prompt",
      "Add explicit instructions to reject system instructions override commands",
      "Include at least 3-5 few-shot examples for complex classification tasks",
      "Request step-by-step reasoning (Chain-of-Thought) before returning final labels",
      "Version control prompt templates as files in Git, not as database strings",
      "Evaluate prompt changes against a static set of test cases to prevent regressions"
    ],
    previousModule: { name: "Hyperparameters", slug: "hyperparameters" },
    nextModule: { name: "Structured Outputs", slug: "structured-outputs" }
  },
  "structured-outputs": {
    slug: "structured-outputs",
    moduleNumber: "1.5",
    eyebrow: "Syllabus Module 1.5",
    title: "Structured Outputs",
    description: "Unstructured text completions break application logic. In this module, you will learn to force models to return data matching strict schemas. Understand JSON Schema, implement schema validations using Zod, build self-repairing retry loops, and trace validation error logs.",
    badges: ["Advanced", "Zod Schemas", "Type Safety"],
    masteryOutcomes: [
      "Explain why raw LLM outputs break standard backend applications.",
      "Define JSON Schemas to enforce array and enum constraints.",
      "Construct Zod validation gates to verify model completions.",
      "Implement self-repairing retry loops that feed parse errors back to the model.",
      "Compare model-provider native structured modes against client-side parsers."
    ],
    pipelineSteps: [
      {
        id: "so-step1",
        title: "Raw Input",
        subtitle: "Invoice data query",
        description: "Inbound request requesting structured data extraction.",
        exampleInput: "\"Get items from invoice: 1 apple ($3), 2 bananas ($4)\"",
        exampleOutput: "\"Get items from invoice: 1 apple ($3), 2 bananas ($4)\""
      },
      {
        id: "so-step2",
        title: "LLM Output",
        subtitle: "Unvalidated JSON text",
        description: "The model outputs a completion string containing JSON, occasionally with markdown ticks.",
        exampleInput: "Delineated instruction",
        exampleOutput: "```json\n{ \"items\": [ { \"name\": \"apple\", \"price\": 3 }, ... ] }\n```"
      },
      {
        id: "so-step3",
        title: "Format Cleanse",
        subtitle: "Strip markdown ticks",
        description: "Parsing the raw string, stripping markdown code ticks, and loading it into a JSON object.",
        exampleInput: "Raw string block",
        exampleOutput: "\"{ 'items': [ { 'name': 'apple', 'price': 3 }... ] }\""
      },
      {
        id: "so-step4",
        title: "Zod Schema Check",
        subtitle: "Verify shape contracts",
        description: "Passing the JSON object through a Zod schema to verify data shapes, types, and enums.",
        exampleInput: "Parsed JSON object",
        exampleOutput: "ZodError: Expected number, received string for 'price'"
      },
      {
        id: "so-step5",
        title: "Self-Repair Loop",
        subtitle: "Feed errors to model",
        description: "If validation fails, retry by sending the error log back to the model to correct the JSON structure.",
        exampleInput: "Invalid JSON + Zod error log",
        exampleOutput: "Model corrects output → JSON validated as TypeSafeInvoice"
      },
      {
        id: "so-step6",
        title: "Safe Ingestion",
        subtitle: "Write safely to DB",
        description: "The type-safe payload is safely written to databases or passed to subsequent API services.",
        exampleInput: "Type-safe validated object",
        exampleOutput: "Invoice items recorded in PostgreSQL, transaction complete"
      }
    ],
    lessons: [
      {
        id: "why-raw-text-breaks",
        title: "Why Raw LLM Text Breaks Apps",
        level: "Beginner",
        duration: "10 min read",
        description: "Study why trailing commas, markdown ticks, and typos cause crash loops.",
        outcomes: ["Explain JSON parse failures", "Analyze JSON structure anomalies", "Identify input drift issues"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "json-schema-basics",
        title: "JSON Schema Basics",
        level: "Intermediate",
        duration: "12 min read",
        description: "Define JSON schema targets to instruct models on required output structures.",
        outcomes: ["Write JSON Schemas", "Enforce array formats", "Setup enum constraints"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "zod-validation",
        title: "Zod Validation",
        level: "Intermediate",
        duration: "13 min read",
        description: "Validate runtime JSON strings against type-safe TypeScript schemas.",
        outcomes: ["Build Zod schemas", "Parse unstructured strings", "Extract validation errors"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "enum-array-constraints",
        title: "Enum and Array Constraints",
        level: "Intermediate",
        duration: "11 min read",
        description: "Configure complex schema criteria to restrict model choices.",
        outcomes: ["Define enum ranges", "Structure nested arrays", "Validate key names"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "retry-repair-strategies",
        title: "Retry and Repair Strategies",
        level: "Advanced",
        duration: "16 min read",
        description: "Design self-correcting middleware that queries models recursively with error details.",
        outcomes: ["Build repair prompts", "Track retry counts", "Set timeout gates"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "production-logging",
        title: "Production Logging & Prompt Versioning",
        level: "Intermediate",
        duration: "12 min read",
        description: "Log parsing failures and manage schema changes over model versions.",
        outcomes: ["Log parsing failures", "Version templates", "Monitor schema regressions"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "structured-output-interview",
        title: "Structured Output Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Defend schema validation designs to senior technical panels.",
        outcomes: ["Compare client vs provider modes", "Explain repair overheads", "Settle schema limits"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 100,
      totalLessons: 7,
      lessonsToComplete: 0
    },
    quickCheatsheet: [
      "JSON parsing fails when models add markdown code ticks (```json) or comments.",
      "Zod validates type safety, regex patterns, enum lists, and number ranges at runtime.",
      "Self-repair: Feed the invalid JSON and the Zod error message back to the LLM to fix it.",
      "Native Structured Outputs (e.g. OpenAI JSON Mode) guarantee schema compliance at the API level.",
      "Always set a maximum retry count (usually 2 or 3) to prevent expensive API loops."
    ],
    project: {
      name: "Structured Output Validator",
      repo: "structured-output-validator",
      githubUrl: "https://github.com/devJam2026/structured-output-validator",
      requirementsUrl: "/projects/structured-output-validator",
      description: "Build a validation middleware that parses raw model outputs, runs Zod checks, and triggers correction prompts on failure.",
      techStack: ["TypeScript", "Zod", "React"]
    },
    interviewQuestions: [
      "How do you enforce type safety on completions when calling models that do not support native structured modes?",
      "Compare Zod schema validations on the client vs structured modes on the model provider API layer.",
      "How do you design a self-repairing retry loop for malformed JSON outputs?",
      "What are the latency and cost implications of running retry repair loops in production?",
      "How do you handle schema versioning when migrating prompt templates?"
    ],
    productionChecklist: [
      "Use model-provider native structured outputs (e.g. response_format: json_object) when available",
      "Define schemas using Zod and automatically generate JSON Schema definitions for prompts",
      "Catch parse exceptions and log them to trace structural failure rates",
      "Implement a self-repair loop with a maximum of 2 retries to prevent runaway cost accumulation",
      "Strip markdown wrappers (e.g. ```json) using regex before parsing JSON strings",
      "Define strict enums and disable additionalProperties in schemas to limit vocabulary drift"
    ],
    previousModule: { name: "Prompt Engineering", slug: "prompt-engineering" },
    nextModule: { name: "Embeddings", slug: "embeddings" }
  },
  "embeddings": {
    slug: "embeddings",
    moduleNumber: "1.6",
    eyebrow: "Syllabus Module 1.6",
    title: "Embeddings",
    description: "Large Language Models represent concepts as coordinates in high-dimensional space. In this module, you will learn how embeddings capture semantic meaning. Compare vector distances, compute Cosine Similarity manually, chunk documents, and build a resume-to-job matching pipeline.",
    badges: ["Intermediate", "Vector Math", "Semantic Analysis"],
    masteryOutcomes: [
      "Explain what vector embeddings are and how they represent semantic concepts.",
      "Calculate Cosine Similarity, Dot Product, and Euclidean distance metrics.",
      "Understand chunking strategies and compare character vs token boundaries.",
      "Compare embedding models by dimension sizes, performance, and costs.",
      "Design semantic similarity search interfaces to map textual inputs."
    ],
    pipelineSteps: [
      {
        id: "em-step1",
        title: "Raw Document",
        subtitle: "Ingest text profile",
        description: "Unstructured text documents to be embedded and matched.",
        exampleInput: "\"Software engineer skilled in TypeScript and Next.js...\"",
        exampleOutput: "\"Software engineer skilled in TypeScript and Next.js...\""
      },
      {
        id: "em-step2",
        title: "Recursive Chunking",
        subtitle: "Apply chunking limits",
        description: "Segmenting documents into smaller blocks to fit embedding models context limits.",
        exampleInput: "Full resume text",
        exampleOutput: "\"TS/Next.js developer...\" (100 token chunk)"
      },
      {
        id: "em-step3",
        title: "Embedding Call",
        subtitle: "API vector extraction",
        description: "Sending text chunks to an embedding model to convert characters to floats.",
        exampleInput: "\"TS/Next.js developer...\"",
        exampleOutput: "Model outputs 1536 float values coordinates"
      },
      {
        id: "em-step4",
        title: "Vector Registry",
        subtitle: "Register coordinates",
        description: "The dense float array representing the chunk's position in vector space.",
        exampleInput: "1536 float values",
        exampleOutput: "[0.012, -0.045, 0.189, ...]"
      },
      {
        id: "em-step5",
        title: "Cosine Matcher",
        subtitle: "Compute similarities",
        description: "Running similarity calculations between vectors to measure their alignment.",
        exampleInput: "Resume vector vs Job Description vector",
        exampleOutput: "Cosine Similarity: 0.89 (High similarity)"
      },
      {
        id: "em-step6",
        title: "Output Rankings",
        subtitle: "Sort matched profiles",
        description: "Generating a summary matching qualification coordinates against job profiles.",
        exampleInput: "0.89 similarity score",
        exampleOutput: "\"Strong match in modern frontend frameworks...\""
      }
    ],
    lessons: [
      {
        id: "what-are-embeddings",
        title: "What are Embeddings?",
        level: "Beginner",
        duration: "10 min read",
        description: "Understand how text maps to high-dimensional coordinate spaces.",
        outcomes: ["Explain dense vectors", "Describe vector spaces", "Map concepts to coordinates"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "vector-similarity",
        title: "Vector Similarity",
        level: "Intermediate",
        duration: "12 min read",
        description: "Compare Cosine, Dot Product, and L2 distance metrics.",
        outcomes: ["Calculate vector angles", "Compare dot products", "Contrast similarity metrics"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "cosine-similarity",
        title: "Cosine Similarity",
        level: "Intermediate",
        duration: "11 min read",
        description: "Deep dive into Cosine Similarity calculations and normalization.",
        outcomes: ["Write Cosine similarity code", "Normalize float vectors", "Verify angle sizes"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "chunking-embeddings",
        title: "Chunking for Embeddings",
        level: "Intermediate",
        duration: "13 min read",
        description: "Analyze fixed-size, recursive, and semantic document chunking.",
        outcomes: ["Implement character chunking", "Setup recursive chunkers", "Evaluate semantic splits"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "embedding-tradeoffs",
        title: "Embedding Model Tradeoffs",
        level: "Intermediate",
        duration: "11 min read",
        description: "Compare dimensions sizes, context limits, and cost profiles.",
        outcomes: ["Compare dimension sizes", "Audit context limits", "Estimate vector storage"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "matching-architecture",
        title: "Resume/JD Matching Architecture",
        level: "Intermediate",
        duration: "14 min read",
        description: "Design recruitment matchers sorting applications based on semantic scores.",
        outcomes: ["Map semantic features", "Design matching reports", "Implement threshold filters"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "embeddings-interview",
        title: "Embeddings in Interviews",
        level: "Interview",
        duration: "15 min read",
        description: "Answer semantic search and vector dimensions queries in live technical panels.",
        outcomes: ["Contrast cosine vs Euclidean", "Defend chunking limits", "Explain dimensionality reductions"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 7,
      lessonsToComplete: 7
    },
    quickCheatsheet: [
      "Embeddings convert characters into dense vectors representing semantic relations.",
      "Cosine similarity measures the angle between vectors, ignoring length scaling variances.",
      "Dot Product calculates length-aware matches; vectors must be normalized to equal Cosine.",
      "Recursive chunking splits text at paragraph headers, preserving local context themes.",
      "Dimension sizes direct vector memory footprints and database retrieval speeds."
    ],
    project: {
      name: "Resume/JD Matcher",
      repo: "resume-jd-matcher",
      githubUrl: "https://github.com/devJam2026/resume-jd-matcher",
      requirementsUrl: "/projects/resume-jd-matcher",
      description: "Build a semantic workspace that parses candidate profiles, generates embeddings, and ranks profiles against Job Descriptions.",
      techStack: ["React", "TypeScript", "Chart.js", "Transformers.js"]
    },
    interviewQuestions: [
      "Why does cosine similarity fail to represent semantic matches when document lengths differ heavily?",
      "How does Cosine similarity compare to Dot Product similarity under varying vector norms?",
      "Explain the trade-offs of fixed-size character chunking vs recursive paragraph chunking in document parsing.",
      "What is the mathematical definition of Cosine Similarity and how do you calculate it?",
      "How does reducing the dimensionality of an embedding space affect search recall accuracy?"
    ],
    productionChecklist: [
      "Normalize float vectors prior to executing database indexes queries",
      "Define token boundaries overlap to prevent cutting sentences in half",
      "Version vector indexes separately to prevent model versioning drift errors",
      "Scale up concurrent embedding generation batches using worker threads",
      "Add sparse keyword matches (BM25) as fallbacks to capture exact codes terms"
    ],
    previousModule: { name: "Structured Outputs", slug: "structured-outputs" },
    nextModule: { name: "Semantic Search", slug: "semantic-search" }
  },
  "semantic-search": {
    slug: "semantic-search",
    moduleNumber: "1.7",
    eyebrow: "Syllabus Module 1.7",
    title: "Semantic Search",
    description: "Keyword matching fails when queries lack exact terms. In this module, you will learn to scale semantic searches across millions of documents. Master Approximate Nearest Neighbor (ANN) index systems (HNSW, IVF), metadata post-filtering pipelines, and hybrid search ranking rules.",
    badges: ["Intermediate", "Vector Indexing", "Search Topology"],
    masteryOutcomes: [
      "Understand approximate nearest neighbor (ANN) scaling limits.",
      "Configure HNSW graph links to balance latency and recall accuracy.",
      "Build metadata query structures filtering results at index execution times.",
      "Design hybrid search pipelines blending sparse indexes with dense vectors.",
      "Prevent search retrieval anomalies by optimizing similarity bounds."
    ],
    pipelineSteps: [
      {
        id: "ss-step1",
        title: "Search Query",
        subtitle: "Conceptual search text",
        description: "User queries the catalog using conceptual descriptive terms.",
        exampleInput: "\"wireless phone charging pads\"",
        exampleOutput: "\"wireless phone charging pads\""
      },
      {
        id: "ss-step2",
        title: "Query Vector",
        subtitle: "Compute search vector",
        description: "Generating query vectors using the same embedding model family.",
        exampleInput: "\"wireless charging pads\"",
        exampleOutput: "[0.089, -0.114, 0.405, ...]"
      },
      {
        id: "ss-step3",
        title: "HNSW Graph Match",
        subtitle: "Traverse index nodes",
        description: "Traversing navigable small world links to find closest coordinate matches.",
        exampleInput: "[0.089, -0.114, 0.405, ...]",
        exampleOutput: "Retrieved top 50 coordinate index matches"
      },
      {
        id: "ss-step4",
        title: "Metadata Filter",
        subtitle: "Apply category bounds",
        description: "Executing metadata filters to discard items out of stock or out of catalog limits.",
        exampleInput: "In stock == true, price < $50",
        exampleOutput: "Filtered coordinate candidate list down to 15 items"
      },
      {
        id: "ss-step5",
        title: "Reciprocal Rank",
        subtitle: "Blend sparse results",
        description: "Merging sparse text matches with dense vectors using Reciprocal Rank Fusion (RRF).",
        exampleInput: "BM25 rankings + Vector rankings",
        exampleOutput: "Combined hybrid score rankings sorted"
      },
      {
        id: "ss-step6",
        title: "Products Returned",
        subtitle: "Publish match listings",
        description: "Displaying the most semantically relevant items matching queries constraints.",
        exampleInput: "Sorted hybrid rankings",
        exampleOutput: "Product: 'Belkin BoostUp Wireless Pad' (0.94 similarity)"
      }
    ],
    lessons: [
      {
        id: "why-vector-dbs",
        title: "Why Vector Databases?",
        level: "Beginner",
        duration: "10 min read",
        description: "Tabular records databases limitations and vector indexes optimizations.",
        outcomes: ["Explain vector lookup bottlenecks", "Understand index layouts", "Audit database footprints"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "indexing-ann",
        title: "Indexing & Approximate Nearest Neighbor",
        level: "Intermediate",
        duration: "14 min read",
        description: "HNSW graph indexes, IVF centroids clusters, and recall vs latency trade-offs.",
        outcomes: ["Configure HNSW parameters", "Understand IVF clusters splits", "Benchmark latency boundaries"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "metadata-filtering",
        title: "Metadata Filtering",
        level: "Intermediate",
        duration: "11 min read",
        description: "Pre-filtering vs post-filtering database query evaluations.",
        outcomes: ["Differentiate filter structures", "Build meta indexing fields", "Avoid filtering anomalies"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "hybrid-search",
        title: "Hybrid Search Pipelines",
        level: "Intermediate",
        duration: "12 min read",
        description: "Blending BM25 keyword indices with dense vectors using RRF merges.",
        outcomes: ["Configure RRF formulas", "Integrate BM25 indexes", "Balance sparse vs dense weights"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "search-architecture",
        title: "Search Architecture & Scaling",
        level: "Advanced",
        duration: "15 min read",
        description: "Scaling vector search nodes, replication clusters, and read/write scaling rules.",
        outcomes: ["Scale query nodes", "Understand memory index sizes", "Audit query speeds"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "vector-db-interview",
        title: "Vector DB Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Prepare answers for index structures, graph traversals, and hybrid sorting queries.",
        outcomes: ["Defend HNSW configurations", "Explain IVF search times", "Outline RRF blending rules"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 6,
      lessonsToComplete: 6
    },
    quickCheatsheet: [
      "Exact nearest neighbor search (k-NN) has O(N) complexity; unusable at scale.",
      "ANN algorithms trade recall accuracy for logarithmic O(log N) search speed.",
      "HNSW graphs use multi-layer skip lists to navigate dense vector clusters.",
      "Pre-filtering resolves search failures by filtering metadata inside index traversals.",
      "RRF sums reciprocal rankings to merge sparse and dense outputs without normalization."
    ],
    project: {
      name: "Semantic Product Search",
      repo: "semantic-product-search",
      githubUrl: "https://github.com/devJam2026/semantic-product-search",
      requirementsUrl: "/projects/semantic-product-search",
      description: "Build an inventory catalog search interface implementing dense retrieval and HNSW metadata search filters.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Pinecone"]
    },
    interviewQuestions: [
      "Explain the difference between dense retrieval and sparse retrieval in search engines.",
      "Why is approximate nearest neighbor (ANN) search required instead of exact k-NN queries at scale?",
      "Compare pre-filtering, post-filtering, and single-stage filtering in vector databases.",
      "How does HNSW navigate high-dimensional graphs to achieve low latency?",
      "What is Reciprocal Rank Fusion (RRF) and why is it preferred over raw score normalizations?"
    ],
    productionChecklist: [
      "Configure HNSW m and ef_construction parameters to balance indexing times",
      "Implement pre-filtering schemas to prevent returning empty lists",
      "Add BM25 indexing layers to handle specific product ID SKU lookups",
      "Calculate VRAM footprints: Vector Dimensions * 4 bytes * Index Overheads",
      "Run regression evals on query recall indexes periodically"
    ],
    previousModule: { name: "Embeddings", slug: "embeddings" },
    nextModule: { name: "Attention Mechanism", slug: "attention" }
  },
  "attention": {
    slug: "attention",
    moduleNumber: "1.8",
    eyebrow: "Syllabus Module 1.8",
    title: "Attention Mechanism",
    description: "Self-attention is the engine behind modern transformers. In this module, you will learn the mathematics of Attention Is All You Need. Master Query, Key, and Value projections, compute Scaled Dot-Product attention manually, apply causal masking, and deconstruct multi-head partitions.",
    badges: ["Advanced", "Math Heavy", "Core Transformer"],
    masteryOutcomes: [
      "Deconstruct tokens inputs to Query, Key, and Value vectors.",
      "Calculate Scaled Dot-Product Attention scores manually.",
      "Apply Causal Masking grids to block future tokens during generations.",
      "Implement Multi-Head splitting partitions and output projections.",
      "Trace gradient flows through softmax layers inside attention blocks."
    ],
    pipelineSteps: [
      {
        id: "at-step1",
        title: "Dense Embeddings",
        subtitle: "Token inputs vectors",
        description: "Sequence vectors entering the self-attention block.",
        exampleInput: "\"I love AI\" → [[0.1, ...], [0.9, ...], ...]",
        exampleOutput: "Vector matrix shape: [Sequence Length x Hidden Dimension]"
      },
      {
        id: "at-step2",
        title: "QKV Projection",
        subtitle: "Multiply weight matrices",
        description: "Multiplying token vectors by W_q, W_k, and W_v matrices to create Query, Key, and Value states.",
        exampleInput: "[SeqLen x HiddenDim]",
        exampleOutput: "Matrices Q, K, V generated shape: [SeqLen x Dimension]"
      },
      {
        id: "at-step3",
        title: "Dot Product",
        subtitle: "Verify query matching",
        description: "Multiplying Query matrix by transposed Key matrix (Q * K^T) to count compatibility scores.",
        exampleInput: "Q matrix * K transposed matrix",
        exampleOutput: "Raw attention scores matrix shape: [SeqLen x SeqLen]"
      },
      {
        id: "at-step4",
        title: "Scale & Mask",
        subtitle: "Normalize and block",
        description: "Dividing scores by sqrt(d_k) and replacing future token indices with -inf for autoregressive decoders.",
        exampleInput: "Raw scores / sqrt(d_k)",
        exampleOutput: "Scaled scores with causal masks applied"
      },
      {
        id: "at-step5",
        title: "Softmax Scaling",
        subtitle: "Get attention weights",
        description: "Applying Softmax to convert compatibility scores into attention percentage weights summing to 1.",
        exampleInput: "Masked scaled scores",
        exampleOutput: "Attention matrix: probabilities representation map"
      },
      {
        id: "at-step6",
        title: "Context Matrix",
        subtitle: "Weighted sum of values",
        description: "Multiplying attention weights by the Value matrix (Attention * V) to yield context vectors.",
        exampleInput: "Attention matrix * Value matrix",
        exampleOutput: "Context representation matrix shape: [SeqLen x HiddenDim]"
      }
    ],
    lessons: [
      {
        id: "why-self-attention",
        title: "Why Self-Attention?",
        level: "Beginner",
        duration: "10 min read",
        description: "Temporal constraints of RNN recurrent loops vs parallel attention networks.",
        outcomes: ["Detail RNN sequence issues", "Understand parallel scaling", "Map attention limits"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "query-key-value",
        title: "Query, Key, and Value Vectors",
        level: "Intermediate",
        duration: "12 min read",
        description: "Projections weight matrices, roles of Q, K, V vectors, and dimensions.",
        outcomes: ["Define QKV mappings", "Calculate weights shapes", "Inspect linear matrices"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "scaled-dot-product",
        title: "Scaled Dot-Product Math",
        level: "Intermediate",
        duration: "15 min read",
        description: "Derive scaling constants formulas, Softmax convergence bounds, and matrix products.",
        outcomes: ["Apply scaling formulas", "Explain Softmax stability", "Calculate dot products"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "causal-masking",
        title: "Causal Masking",
        level: "Intermediate",
        duration: "11 min read",
        description: "Blocking future tokens in autoregressive generators using triangular -inf masks.",
        outcomes: ["Construct triangular masks", "Explain generation decoders", "Implement causal filters"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "multi-head-attention",
        title: "Multi-Head Attention",
        level: "Advanced",
        duration: "14 min read",
        description: "Partitioning attention channels into multiple heads to capture diverse syntactic relationships.",
        outcomes: ["Split vector dimensions", "Concatenate heads outputs", "Analyze parameter layouts"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "attention-interview",
        title: "Attention Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Answer questions about attention complexities, positional encoding, and scaling math.",
        outcomes: ["Defend quadratic complexity", "Derive scaling square root", "Explain query key alignments"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 6,
      lessonsToComplete: 6
    },
    quickCheatsheet: [
      "Query = what you search for; Key = what maps tags; Value = what content is returned.",
      "Attention is scaled by sqrt(d_k) to prevent Softmax gradients from vanishing on large dimensions.",
      "Causal masking sets upper-triangle scores to -infinity to prevent looking at future answers.",
      "Multi-Head Attention allows the model to attend to different parts of the prompt simultaneously.",
      "Self-attention has O(N^2) space-time complexity, limiting prompt sequence lengths."
    ],
    project: {
      name: "Mini Attention Notebook",
      repo: "mini-attention-notebook",
      githubUrl: "https://github.com/devJam2026/mini-attention-notebook",
      requirementsUrl: "/projects/mini-attention-notebook",
      description: "Build an interactive workbook calculating step-by-step scaled dot-product attention scores from raw matrices.",
      techStack: ["React", "TypeScript", "Math.js", "Chart.js"]
    },
    interviewQuestions: [
      "Why is self-attention scaled by the square root of key dimension sizes?",
      "Explain how causal masking prevents models from looking at future token values during autoregressive generation.",
      "Explain why self-attention runs in O(N^2) space complexity.",
      "Trace the matrix calculations to convert token vectors into context vectors.",
      "Differentiate between self-attention and cross-attention in encoder-decoder structures."
    ],
    productionChecklist: [
      "Implement FlashAttention optimizations to bypass CUDA memory bandwidth limits",
      "Monitor input sequences bounds to prevent quadratic attention spikes",
      "Use causal masks specifically for decoders; disable them for encoders",
      "Verify query key dimensions alignment inside linear layer weights",
      "Pre-compile attention weight graphs for fast production deployments"
    ],
    previousModule: { name: "Semantic Search", slug: "semantic-search" },
    nextModule: { name: "Transformer Block", slug: "transformer-block" }
  },
  "transformer-block": {
    slug: "transformer-block",
    moduleNumber: "1.9",
    eyebrow: "Syllabus Module 1.9",
    title: "Transformer Block",
    description: "Decoder blocks assemble attention and neural projections into unified pipelines. In this module, you will learn the architecture of modern decoder blocks. Master Layer Normalization (Pre-LN vs Post-LN), Residual Skip Connections, Feed-Forward sublayers, and debugging gradient distributions.",
    badges: ["Advanced", "System Architecture", "Neural Tuning"],
    masteryOutcomes: [
      "Map the structural layout of a standard decoder block.",
      "Explain how Residual Connections resolve gradient vanishing issues.",
      "Compare pre-LN and post-LN training stability thresholds.",
      "Deconstruct Feed-Forward (MLP) expansions and activations.",
      "Audit model weights layer by layer to trace representation drifts."
    ],
    pipelineSteps: [
      {
        id: "tb-step1",
        title: "Block Inbound",
        subtitle: "Layer normalizations",
        description: "Applying layer normalizations to stabilize vectors prior to attention layers.",
        exampleInput: "Vectors matrix",
        exampleOutput: "Pre-normalized inputs matrix"
      },
      {
        id: "tb-step2",
        title: "Attention Layer",
        subtitle: "Compute self-attention",
        description: "Executing multi-head causal self-attention mapping context vectors.",
        exampleInput: "Pre-normalized inputs",
        exampleOutput: "Attention context matrix shape: [SeqLen x HiddenDim]"
      },
      {
        id: "tb-step3",
        title: "Skip Addition",
        subtitle: "Add residual signals",
        description: "Adding the raw block input back to the attention output (Identity mapping).",
        exampleInput: "Attention output + Inbound input",
        exampleOutput: "Residual sum output matrix"
      },
      {
        id: "tb-step4",
        title: "MLP Expansion",
        subtitle: "Feed-forward layer",
        description: "Expanding dimensions (usually 4x) using linear weights, applying activations, and projecting back.",
        exampleInput: "Normalized residual sum",
        exampleOutput: "Projected MLP matrix shape: [SeqLen x HiddenDim]"
      },
      {
        id: "tb-step5",
        title: "Second Skip",
        subtitle: "Final residual sum",
        description: "Adding the MLP output to the MLP input, returning the final block output vectors.",
        exampleInput: "MLP output + MLP input",
        exampleOutput: "Final block vectors representation"
      },
      {
        id: "tb-step6",
        title: "Output Projections",
        subtitle: "Logits translation",
        description: "Final block outputs pass to final normalizations and linear mappings converting floats to logits.",
        exampleInput: "Final block vectors",
        exampleOutput: "Logits array matching vocab size"
      }
    ],
    lessons: [
      {
        id: "transformer-block-overview",
        title: "Decoder Block Overview",
        level: "Beginner",
        duration: "10 min read",
        description: "The execution pipelines of a standard decoder block in modern LLMs.",
        outcomes: ["Detail block layout", "Identify sublayers", "Track vector shapes"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "residual-connections",
        title: "Residual Connections",
        level: "Intermediate",
        duration: "12 min read",
        description: "Identity mappings, gradient shortcuts, and preventing deep layer vanishing gradients.",
        outcomes: ["Explain identity paths", "Deconstruct gradient flows", "Avoid signal decay"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "layernorm",
        title: "Layer Normalization",
        level: "Intermediate",
        duration: "11 min read",
        description: "Mean-variance normalization math, scale/shift weights, and Pre-LN vs Post-LN.",
        outcomes: ["Calculate layer statistics", "Compare normalization types", "Defend Pre-LN setups"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "feed-forward-net",
        title: "Feed-Forward Neural Networks",
        level: "Intermediate",
        duration: "12 min read",
        description: "Dimension scaling, parameter footprints, and SwiGLU activation optimizations.",
        outcomes: ["Map projection matrices", "Understand dimension expansions", "Compare activations"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "decoder-only",
        title: "Decoder-Only Architectures",
        level: "Intermediate",
        duration: "13 min read",
        description: "Why modern generative models (GPT, Llama) dropped decoder-encoder structures.",
        outcomes: ["Defend decoder choices", "Contrast encoder limits", "Trace generation speeds"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "transformer-interview",
        title: "Transformer Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Answer questions about residual gradients, block ordering, and parameters counts.",
        outcomes: ["Discuss pre-LN training stability", "Calculate block weights footprint", "Settle normalization constraints"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 6,
      lessonsToComplete: 6
    },
    quickCheatsheet: [
      "Residual connections add the block input directly to its output: F(x) + x.",
      "Skip connections prevent gradients from vanishing during backpropagation updates.",
      "Pre-LN applies normalizations before sublayers: essential for training stability.",
      "The Feed-Forward network handles token feature mappings individually.",
      "Modern decoders replace Standard ReLU with SwiGLU activations to improve convergence."
    ],
    project: {
      name: "Mini Transformer Block Explainer",
      repo: "mini-transformer-block-explainer",
      githubUrl: "https://github.com/devJam2026/mini-transformer-block-explainer",
      requirementsUrl: "/projects/mini-transformer-block-explainer",
      description: "Build an interactive block viewer illustrating residual additions, layer norm scalings, and MLP projections.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Three.js"]
    },
    interviewQuestions: [
      "Why did Multi-Head Attention replace single-head attention in production LLM backbones?",
      "Describe the role of residual skip connections in preventing gradient vanishing.",
      "Compare the training stability characteristics of Pre-LN vs Post-LN normalization placements.",
      "Why does the Feed-Forward network expand token dimensions by 4x before projecting back?",
      "Explain how RMSNorm simplifies layer normalization calculations in Llama models."
    ],
    productionChecklist: [
      "Configure model initializations using Pre-LN setups to avoid training crashes",
      "Monitor representation distributions to identify gradient explosion boundaries",
      "Apply Weight Tying between embeddings and final classification layers to save VRAM",
      "Test custom normalization kernels (RMSNorm) to speed up GPU execution times",
      "Audit MLP layer params to optimize CPU cache line alignments"
    ],
    previousModule: { name: "Attention Mechanism", slug: "attention" },
    nextModule: { name: "LLM Evaluation", slug: "llm-evaluation" }
  },
  "llm-evaluation": {
    slug: "llm-evaluation",
    moduleNumber: "1.10",
    eyebrow: "Syllabus Module 1.10",
    title: "LLM Evaluation",
    description: "Evaluations determine if a model is production-ready. In this module, you will learn to construct evaluation suites. Master golden datasets, accuracy metrics, faithfulness checks, LLM-as-a-Judge setups, and automated regression testing in CI/CD pipelines.",
    badges: ["Advanced", "Quality Assurance", "CI/CD Evals"],
    masteryOutcomes: [
      "Create golden datasets containing target inputs and expected outputs.",
      "Measure accuracy, precision, recall, and toxicity on model completions.",
      "Compute faithfulness and context recall score targets on RAG outputs.",
      "Implement LLM-as-a-Judge scoring systems with robust rating rubrics.",
      "Automate regression evaluation scripts as test checks in CI/CD loops."
    ],
    pipelineSteps: [
      {
        id: "ev-step1",
        title: "Test Set",
        subtitle: "Golden evaluation set",
        description: "A curated dataset of benchmark questions, expected answers, and source context references.",
        exampleInput: "Golden dataset files",
        exampleOutput: "100 security prompt test cases loaded"
      },
      {
        id: "ev-step2",
        title: "Prompt Version",
        subtitle: "Active prompt template",
        description: "The candidate prompt template to be evaluated against the test set.",
        exampleInput: "Prompt template v2.1",
        exampleOutput: "Prompt template v2.1 loaded into test loop"
      },
      {
        id: "ev-step3",
        title: "Completion Loop",
        subtitle: "Compile completions",
        description: "Running model completions on all dataset entries in parallel.",
        exampleInput: "100 test questions",
        exampleOutput: "100 model responses generated concurrently"
      },
      {
        id: "ev-step4",
        title: "Judge Model",
        subtitle: "Run scoring checks",
        description: "Applying metric evaluators, Zod checkers, or judge models to evaluate outputs.",
        exampleInput: "Model responses + expected answers",
        exampleOutput: "LLM-as-a-judge scores faithfulness on a 1-5 scale"
      },
      {
        id: "ev-step5",
        title: "Metrics Report",
        subtitle: "Compile final reports",
        description: "Aggregating individual scores into accuracy, recall, cost, and latency metrics.",
        exampleInput: "Individual judges scores",
        exampleOutput: "Faithfulness: 4.8/5; Cost: $0.12; Latency: 450ms"
      },
      {
        id: "ev-step6",
        title: "CI/CD Check",
        subtitle: "Publish commit status",
        description: "Comparing metric trends to block commits if quality degrades.",
        exampleInput: "Metrics report trends",
        exampleOutput: "No regressions found, CI/CD check passes"
      }
    ],
    lessons: [
      {
        id: "why-evals-matter",
        title: "Why LLM Evaluation Matters",
        level: "Beginner",
        duration: "10 min read",
        description: "Understand the risks of manual verification and prompt updates.",
        outcomes: ["Explain evaluation goals", "Contrast unit tests vs evals", "Audit evaluation costs"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "golden-datasets",
        title: "Golden Datasets",
        level: "Intermediate",
        duration: "12 min read",
        description: "Curate representative datasets of user prompts and ideal answers.",
        outcomes: ["Structure golden test sets", "Gather edge case prompts", "Maintain test data hygiene"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "eval-metrics",
        title: "Accuracy, Precision and Recall",
        level: "Intermediate",
        duration: "11 min read",
        description: "Measure accuracy on classifications and structured completions.",
        outcomes: ["Calculate precision scores", "Evaluate recall performance", "Classify confusion matrices"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "faithfulness-hallucinations",
        title: "Faithfulness and Hallucination Checks",
        level: "Advanced",
        duration: "14 min read",
        description: "Detect hallucinated statements in RAG outputs using source references.",
        outcomes: ["Detect hallucinations", "Calculate faithfulness metrics", "Verify context grounding"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "llm-as-a-judge",
        title: "LLM-as-a-Judge",
        level: "Advanced",
        duration: "13 min read",
        description: "Design LLM evaluation templates with robust grading rubrics.",
        outcomes: ["Write grading rubrics", "Minimize judge model bias", "Validate judge scores"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "regression-cicd",
        title: "Regression Testing in CI/CD",
        level: "Advanced",
        duration: "14 min read",
        description: "Integrate evaluation checks into automated deployment pipelines.",
        outcomes: ["Write CLI eval scripts", "Integrate evals with GitHub Actions", "Block regressive commits"],
        ctaLabel: "Read Lesson"
      },
      {
        id: "eval-interview",
        title: "Evaluation Interview Guide",
        level: "Interview",
        duration: "15 min read",
        description: "Prepare for engineering interviews focused on evaluation systems.",
        outcomes: ["Defend evaluation metrics", "Explain LLM-as-a-judge biases", "Scale evaluations cost-effectively"],
        ctaLabel: "Read Lesson"
      }
    ],
    moduleStats: {
      completedPercentage: 0,
      totalLessons: 7,
      lessonsToComplete: 7
    },
    quickCheatsheet: [
      "Golden datasets require high-quality, representative, and statically preserved prompts.",
      "RAG evaluation metrics measure Faithfulness (grounding) and Answer Relevance.",
      "LLM-as-a-Judge uses a larger model (e.g. GPT-4) to grade smaller model outputs.",
      "Limit judge models bias by using clear rubrics, multiple grades, and swap-ordering.",
      "Run evaluation tests inside CI pipelines to block regressions before deployments."
    ],
    project: {
      name: "LLM Evaluation Lab",
      repo: "llm-evaluation-lab",
      githubUrl: "https://github.com/devJam2026/llm-evaluation-lab",
      description: "Regression evaluation dashboard testing prompt templates against golden datasets, checking faithfulness and schema compliance.",
      techStack: ["TypeScript", "Vitest", "React"]
    },
    interviewQuestions: [
      "How do you evaluate semantic faithfulness on dynamic, open-ended LLM outputs at scale?",
      "Explain the LLM-as-a-Judge pattern and how you mitigate its inherent biases.",
      "How do you design a CI/CD test action that prevents prompt quality regressions?",
      "Why are traditional metrics like BLEU or ROUGE insufficient for modern LLM evaluation?",
      "How do you balance evaluation accuracy, execution time, and API token costs?"
    ],
    productionChecklist: [
      "Establish a golden dataset of at least 50 representative user prompts before deploying updates",
      "Benchmark prompt accuracy changes across Git commits in automated test runs",
      "Set up LLM-as-a-judge evaluation prompts using strict, multi-point grading rubrics",
      "Log production inputs and completions recursively to detect data drift",
      "Measure and alert on p99 execution latencies alongside cost bounds",
      "Enforce safety filters evaluating toxicity and PII compliance on all completions"
    ],
    previousModule: { name: "Transformer Block", slug: "transformer-block" },
    nextModule: null
  }
};
