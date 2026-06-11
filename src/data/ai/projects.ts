import { AIContentStatus } from "./tracks";

export type ExternalLinkStatus =
  | "available"
  | "coming-soon"
  | "not-applicable";

export type DevJamExternalLink = {
  label: string;
  url?: string;
  status: ExternalLinkStatus;
};

export type AIProject = {
  id: string;
  slug: string;
  title: string;
  pillar: "AI Engineer";
  trackSlug: string;
  moduleSlug?: string;
  concept: string;
  description: string;
  status: AIContentStatus;

  problemStatement: string;
  whatItTeaches: string;
  whyItMatters: string;

  conceptsCovered: string[];
  learningOutcomes: string[];
  interviewQuestions: string[];

  architecture: {
    summary: string;
    diagramType: "flow" | "system" | "component" | "sequence";
    nodes: string[];
    edges: string[];
  };

  dataFlow: string[];
  techStack: string[];
  implementationPlan: string[];

  github: DevJamExternalLink;
  liveDemo: DevJamExternalLink;
  lab?: DevJamExternalLink;
  docs?: DevJamExternalLink;

  relatedProjects: string[];
  futureImprovements: string[];

  evidence?: {
    repoChecked?: boolean;
    repoExists?: boolean;
    demoChecked?: boolean;
    demoExists?: boolean;
    notes?: string[];
  };
};

export const aiProjects: Record<string, AIProject> = {
  "tokenizer-visualizer-studio": {
    id: "P1",
    slug: "tokenizer-visualizer-studio",
    title: "Tokenizer Visualizer Studio",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    concept: "Byte Pair Encoding & Character Offsets",
    description: "Interactive visualizer illustrating how raw text strings are decomposed into tokens, mapped to vocabulary indices, and analyzed for cost constraints.",
    status: "in-progress", // Active/in-progress as per projects.ts
    problemStatement: "Users do not understand why short sentences can consume massive token counts (e.g. non-English text or emojis), leading to unexpected API bills and context overflow.",
    whatItTeaches: "It teaches the subword tokenization split process, Byte Pair Encoding algorithms, and character offset mapping mechanics.",
    whyItMatters: "Tokenization is the gateway to any transformer block. Inefficient tokenization causes cost inflation and degrades model performance.",
    conceptsCovered: ["Byte Pair Encoding", "Vocabulary Index Mapping", "Character Offset Tracking"],
    learningOutcomes: [
      "Detail how BPE merges frequent byte pairs",
      "Trace character-to-token translations in real-time visualizers"
    ],
    interviewQuestions: [
      "Why does a tokenizer vocabulary size mismatch cause out-of-vocabulary errors?"
    ],
    architecture: {
      summary: "Client-side pipeline taking raw string inputs, processing them through a BPE tokenizer, and displaying visual highlights of character offsets.",
      diagramType: "flow",
      nodes: ["User Input String", "BPE Tokenizer Engine", "Token Highlights", "Token ID Array"],
      edges: ["User Input String -> BPE Tokenizer Engine", "BPE Tokenizer Engine -> Token Highlights", "BPE Tokenizer Engine -> Token ID Array"]
    },
    dataFlow: [
      "1. User enters string in workspace.",
      "2. Tokenizer maps chars to subword bytes.",
      "3. Tokenizer returns vocabulary IDs and boundaries.",
      "4. UI colors individual tokens dynamically."
    ],
    techStack: ["TypeScript", "React", "CSS Variables"],
    implementationPlan: [
      "1. Build a local BPE mapping mock dataset.",
      "2. Create custom regex boundaries splits.",
      "3. Style token highlights using harmonized HSL colors."
    ],
    github: {
      label: "GitHub",
      url: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      status: "available"
    },
    liveDemo: {
      label: "Live Demo",
      url: "/labs/tokenizer-visualizer",
      status: "available"
    },
    lab: {
      label: "Lab Route",
      url: "/labs/tokenizer-visualizer",
      status: "available"
    },
    relatedProjects: ["context-window-diagnostics"],
    futureImprovements: ["Support custom upload vocabularies files", "Add support for Tiktoken cl100k_base models"],
    evidence: {
      repoChecked: true,
      repoExists: true,
      demoChecked: true,
      demoExists: true,
      notes: ["Verified static files exist under /labs/tokenizer-visualizer."]
    }
  },
  "context-window-diagnostics": {
    id: "P2",
    slug: "context-window-diagnostics",
    title: "Context Window Dashboard",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    concept: "Token Budgeting & Prompt Truncation",
    description: "Diagnostic analyzer tracking chat history expansion, system prompt parameters, and memory optimization suggestions.",
    status: "in-progress",
    problemStatement: "Multi-turn chatbots frequently exceed maximum token constraints, causing API errors or losing conversation history abruptly.",
    whatItTeaches: "It teaches sliding window memory algorithms, conversational token budgeting, and RAG context trimming.",
    whyItMatters: "Managing context budgets dynamically optimizes prompt scaling, reduces latency, and saves execution costs.",
    conceptsCovered: ["Context Window Scaling", "Conversational Memory", "Sliding History Trimming"],
    learningOutcomes: [
      "Manage prompt token constraints dynamically in client code",
      "Implement chat history truncation logic preserving prompt instructions"
    ],
    interviewQuestions: [
      "How do you prevent context window exhaustion in multi-turn conversation agents?"
    ],
    architecture: {
      summary: "A dashboard showing total token allocation, system overhead, and dynamic chat history truncation sliders.",
      diagramType: "system",
      nodes: ["Chat History Input", "History Truncator Model", "Token Count Calculator", "Memory Diagnostics Panel"],
      edges: ["Chat History Input -> History Truncator Model", "History Truncator Model -> Token Count Calculator", "Token Count Calculator -> Memory Diagnostics Panel"]
    },
    dataFlow: [
      "1. System calculates current system prompt token overhead.",
      "2. User chat messages are appended sequentially.",
      "3. Truncator engine warns when total budget crosses threshold.",
      "4. Suggestions recommend sliding history cutoffs."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    implementationPlan: [
      "1. Build memory allocation charts.",
      "2. Implement sliding window calculations.",
      "3. Show warnings when budget constraints are violated."
    ],
    github: {
      label: "GitHub",
      url: "https://github.com/devJam2026/context-window-diagnostics",
      status: "available"
    },
    liveDemo: {
      label: "Live Demo",
      url: "/projects/context-window-diagnostics", // Mapping to updated route
      status: "available"
    },
    relatedProjects: ["tokenizer-visualizer-studio"],
    futureImprovements: ["Integrate sliding window threshold simulations", "Add support for Llama 3 token budgets"],
    evidence: {
      repoChecked: true,
      repoExists: true,
      demoChecked: true,
      demoExists: true,
      notes: ["Codebase lists project folder matching context diagnostics."]
    }
  },
  "hyperparameter-playground": {
    id: "P3",
    slug: "hyperparameter-playground",
    title: "Hyperparameter Playground",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    concept: "LLM Sampling & Logits Probability",
    description: "Interactive settings dashboard to inspect how Temperature, Top-p, and penalties alter Softmax probability distributions.",
    status: "complete",
    problemStatement: "Tuning LLMs is often treated as guess-and-check. Developers do not understand how Temperature or Top-p parameters affect output predictability.",
    whatItTeaches: "It teaches Softmax logit curves scaling, Top-p/Top-k selection bounds, and deterministic response bounds.",
    whyItMatters: "Fine-tuning parameters changes output quality, ensuring stable JSON responses in schemas and high creativity in copywriting.",
    conceptsCovered: ["Softmax Scaling", "Top-p/Top-k Sampling", "Entropy & Penalties"],
    learningOutcomes: [
      "Understand how Temperature scales logit distributions prior to Softmax",
      "Prune token search candidates using Top-p threshold limits"
    ],
    interviewQuestions: [
      "Derive Temperature scaling inside Softmax, explaining why lower temperatures yield predictable responses."
    ],
    architecture: {
      summary: "Logs visualizer showing vocabulary probability bars changing dynamically as sliders scale parameters.",
      diagramType: "component",
      nodes: ["Raw Logits Array", "Temperature Scale Function", "Softmax Probability Converter", "Top-p/Top-k Filter Gate", "Token Output Pick"],
      edges: ["Raw Logits Array -> Temperature Scale Function", "Temperature Scale Function -> Softmax Probability Converter", "Softmax Probability Converter -> Top-p/Top-k Filter Gate", "Top-p/Top-k Filter Gate -> Token Output Pick"]
    },
    dataFlow: [
      "1. Preset logits are loaded for a next-token choice.",
      "2. Sliders scale Temperature and Top-p limits.",
      "3. Probability bar charts redraw in real-time.",
      "4. UI shows the selected token vs candidates."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    implementationPlan: [
      "1. Build Softmax math utilities.",
      "2. Render dynamic bar graphs of vocabulary sets.",
      "3. Implement Top-p selection bounds filters."
    ],
    github: {
      label: "GitHub",
      url: "https://github.com/devJam2026/hyperparameter-playground",
      status: "available"
    },
    liveDemo: {
      label: "Live Demo",
      url: "/projects/hyperparameter-playground",
      status: "available"
    },
    relatedProjects: ["mini-attention-notebook"],
    futureImprovements: ["Add logits scaling curves charts", "Integrate frequency and presence penalty visualizations"],
    evidence: {
      repoChecked: true,
      repoExists: true,
      demoChecked: true,
      demoExists: true,
      notes: ["Completed project with source routing in /projects/hyperparameter-playground."]
    }
  },
  "ai-scam-detector": {
    id: "P4",
    slug: "ai-scam-detector",
    title: "AI Scam Detector",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "prompt-engineering",
    concept: "Classification Prompts & Few-Shot",
    description: "System design analyzing incoming messages for fraud signals, using classification prompt instructions and confidence bounds.",
    status: "coming-soon",
    problemStatement: "Naively prompted models fail to flag adversarial phishing messages, causing high security risks.",
    whatItTeaches: "It teaches prompt classifications, System prompts engineering, and classification output scoring.",
    whyItMatters: "Reliable classification prompt templates prevent prompt injections and increase accuracy on safety-critical classification pipelines.",
    conceptsCovered: ["System Prompt Scoping", "Adversarial Injection Defense", "Few-Shot Classification Maps"],
    learningOutcomes: [
      "Design safe System instruction blocks",
      "Flag prompt injection attempts in input text datasets"
    ],
    interviewQuestions: [
      "How do you design a few-shot prompt template that protects model classifications from dynamic text prompt injections?"
    ],
    architecture: {
      summary: "Inbound message router evaluating inputs against prompt structures and returning classified risk vectors.",
      diagramType: "flow",
      nodes: ["User Input Text", "Scam Evaluator Prompt", "Scam Model Call", "phishing Classification", "Confidence Score"],
      edges: ["User Input Text -> Scam Evaluator Prompt", "Scam Evaluator Prompt -> Scam Model Call", "Scam Model Call -> phishing Classification", "phishing Classification -> Confidence Score"]
    },
    dataFlow: [
      "1. Message text is injected into prompt template.",
      "2. System instructions enforce JSON scoring.",
      "3. Phishing flags return with confidence thresholds.",
      "4. Dashboard records metrics."
    ],
    techStack: ["React", "TypeScript"],
    implementationPlan: [
      "1. Define scam classification templates.",
      "2. Set up prompt injection test cases.",
      "3. Mock confidence classification displays."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["structured-output-validator"],
    futureImprovements: ["Add adversarial datasets benchmarking", "Test on multiple model profiles"]
  },
  "structured-output-validator": {
    id: "P5",
    slug: "structured-output-validator",
    title: "Structured Output Validator",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "structured-output",
    concept: "JSON Schema Enforcement & Retries",
    description: "Schema validation validator enforcing structured JSON arrays on raw completions, with auto-retry loops on parse errors.",
    status: "coming-soon",
    problemStatement: "AI models frequently return broken JSON formats containing trailing commas or markdown blocks, causing crashes in backend code.",
    whatItTeaches: "It teaches JSON schema structures, validation rules using Zod/Pydantic, and self-repairing retry loops.",
    whyItMatters: "Structured output validation ensures type-safe integrations between LLM engines and production applications.",
    conceptsCovered: ["JSON Schema Formatting", "Validation Retries Engine", "Zod Schema Enforcement"],
    learningOutcomes: [
      "Parse and correct malformed model JSON responses",
      "Implement auto-repair prompts sending parse errors back to models"
    ],
    interviewQuestions: [
      "Compare Zod schema validations on the client vs structured modes on the model provider API layer."
    ],
    architecture: {
      summary: "Middleware validation pipeline intercepting string outputs, checking them against schemas, and triggering correction loops on failure.",
      diagramType: "sequence",
      nodes: ["Unstructured Output", "JSON Schema Validator", "Zod Check Gate", "Correction Loop Prompter", "Type Safe Entity"],
      edges: ["Unstructured Output -> JSON Schema Validator", "JSON Schema Validator -> Zod Check Gate", "Zod Check Gate -> Correction Loop Prompter", "Correction Loop Prompter -> Type Safe Entity"]
    },
    dataFlow: [
      "1. Model generates raw completion text.",
      "2. Validator attempts to parse string as JSON.",
      "3. If parse fails, system logs errors and recurses.",
      "4. Output is validated against Zod schema slots."
    ],
    techStack: ["TypeScript", "Zod", "React"],
    implementationPlan: [
      "1. Write JSON parsing and repair helper.",
      "2. Build schema validation dashboard.",
      "3. Create retry limits checkers."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["ai-scam-detector"],
    futureImprovements: ["Support Pydantic schema mappings", "Add system logs tracking parsing failure rates"]
  },
  "product-review-insight-generator": {
    id: "P6",
    slug: "product-review-insight-generator",
    title: "Product Review Insight Generator",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "production-llm-processing",
    concept: "Batch Pipelines & Concurrency Limits",
    description: "Concurrent review ingestion pipeline analyzing hundreds of comments, optimizing for rate-limit constraints and cost caps.",
    status: "coming-soon",
    problemStatement: "Processing customer comments one-by-one is slow and expensive. Running too many requests concurrently hits provider rate limits.",
    whatItTeaches: "It teaches concurrency throttling, batch API requests, and fallback backoff parameters.",
    whyItMatters: "Building rate-limit compliant processing loops is required to run high-throughput LLM pipelines without errors.",
    conceptsCovered: ["Concurrent Ingest Loops", "Exponential Backoff Triggers", "Rate-limit Compliant Schedulers"],
    learningOutcomes: [
      "Build batch loop scripts handling concurrent requests",
      "Calculate token processing costs prior to executing large loops"
    ],
    interviewQuestions: [
      "Design a rate-limit compliant processor handling 10k reviews under standard API tiers."
    ],
    architecture: {
      summary: "Queue-backed pipeline scheduling batch requests, checking rate limits, and throttling concurrency dynamically.",
      diagramType: "system",
      nodes: ["Reviews Ingest Queue", "Rate-Limit Throttle Controller", "Batch Request Dispatcher", "Model API Calls Pool", "Insights Repository"],
      edges: ["Reviews Ingest Queue -> Rate-Limit Throttle Controller", "Rate-Limit Throttle Controller -> Batch Request Dispatcher", "Batch Request Dispatcher -> Model API Calls Pool", "Model API Calls Pool -> Insights Repository"]
    },
    dataFlow: [
      "1. Raw comments load into local queues.",
      "2. Throttle controller tracks window boundaries.",
      "3. Dispatcher triggers batch model updates.",
      "4. Outputs store insights summaries."
    ],
    techStack: ["Node.js", "TypeScript", "React"],
    implementationPlan: [
      "1. Build queue manager logic.",
      "2. Write rate limits checking loop.",
      "3. Show concurrent requests active counts in UI graphs."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["structured-output-validator"],
    futureImprovements: ["Add support for dynamic pricing monitors", "Integrate local models fallback queues"]
  },
  "resume-jd-matcher": {
    id: "P7",
    slug: "resume-jd-matcher",
    title: "Resume/JD Matcher",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "embeddings",
    concept: "Text Embeddings & Cosine Similarity",
    description: "Document match analyzer scoring resume files against job descriptions using textual embeddings similarity matrices.",
    status: "coming-soon",
    problemStatement: "Standard keyword matching fails to flag relevant candidates who use synonyms or different naming conventions, missing top talent.",
    whatItTeaches: "It teaches text-to-vector embedding conversions, cosine similarity calculations, and skill gap profiling.",
    whyItMatters: "Embeddings enable semantic search matching based on conceptual meaning rather than raw character matches.",
    conceptsCovered: ["Text Embeddings Vectorization", "Cosine Similarity Matrices", "Semantic Mapping Limits"],
    learningOutcomes: [
      "Generate embeddings vectors for documents",
      "Calculate cosine distance parameters between vector pairs"
    ],
    interviewQuestions: [
      "Explain the mathematical differences between Cosine similarity, dot product, and Euclidean distance."
    ],
    architecture: {
      summary: "Document embedding pipeline generating vectors for resumes and job descriptions, calculating similarities, and highlighting skill gaps.",
      diagramType: "flow",
      nodes: ["Resume PDF / Text", "Embedding Model API", "Resume Vector", "JD Vector", "Cosine Match Score Generator"],
      edges: ["Resume PDF / Text -> Embedding Model API", "Embedding Model API -> Resume Vector", "Resume Vector -> Cosine Match Score Generator", "JD Vector -> Cosine Match Score Generator"]
    },
    dataFlow: [
      "1. PDF text parses into string chunks.",
      "2. Embeddings model generates 1536-dim vectors.",
      "3. System calculates similarity dot-products.",
      "4. Gap summaries extract mismatch points."
    ],
    techStack: ["React", "TypeScript", "Embeddings API"],
    implementationPlan: [
      "1. Write text parsing modules.",
      "2. Build cosine similarity calculator.",
      "3. Map skill comparison widgets."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["semantic-product-search"],
    futureImprovements: ["Add support for local embeddings libraries", "Integrate PDF document parser modules"]
  },
  "semantic-product-search": {
    id: "P8",
    slug: "semantic-product-search",
    title: "Semantic Product Search",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "vector-databases",
    concept: "Vector Databases & Metadata Filters",
    description: "E-commerce search catalog demonstrating vector indexing, Approximate Nearest Neighbor (ANN) search, and hybrid ranking.",
    status: "coming-soon",
    problemStatement: "Unsorted text search fails on spelling mistakes or synonyms. E-commerce sites lose users when searches return empty results.",
    whatItTeaches: "It teaches vector indexing concepts, metadata filtering rules, and hybrid search ranking strategies.",
    whyItMatters: "Hybrid vector search is the industry standard for search, recommendation, and RAG pipelines.",
    conceptsCovered: ["Vector Indexing (HNSW)", "Ad-hoc Metadata Filters", "Hybrid Search Re-ranking"],
    learningOutcomes: [
      "Combine semantic search vector queries with metadata filters",
      "Analyze latency-recall tradeoffs in ANN indexes"
    ],
    interviewQuestions: [
      "Explain the HNSW index algorithm and how it accelerates vector queries."
    ],
    architecture: {
      summary: "Search gateway querying a vector catalog, applying metadata constraints, and merging scores with BM25 results.",
      diagramType: "system",
      nodes: ["User Query", "Embedding Gateway", "Vector Index Lookup", "Metadata Filters Filter", "Hybrid Ranker Engine"],
      edges: ["User Query -> Embedding Gateway", "Embedding Gateway -> Vector Index Lookup", "Vector Index Lookup -> Metadata Filters Filter", "Metadata Filters Filter -> Hybrid Ranker Engine"]
    },
    dataFlow: [
      "1. Search query maps to vector space.",
      "2. Index returns nearest neighbor matches.",
      "3. System filters results based on metadata categories.",
      "4. Ranker merges scores with text matching scores."
    ],
    techStack: ["TypeScript", "Vector DB Library", "React"],
    implementationPlan: [
      "1. Create e-commerce mock dataset.",
      "2. Implement index mappings.",
      "3. Render dynamic search metrics tables."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["resume-jd-matcher"],
    futureImprovements: ["Benchmark recall vs query latency", "Support dynamic index updates"]
  },
  "mini-attention-notebook": {
    id: "P9",
    slug: "mini-attention-notebook",
    title: "Mini Attention Notebook",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "self-attention",
    concept: "Dot Product Self-Attention Matrices",
    description: "Interactive visual simulator demonstrating Query, Key, and Value projections, dot-product scoring, and causal masking.",
    status: "complete", // Completed as per evidence
    problemStatement: "The mathematical formula for Self-Attention (Q, K, V) is abstract. Students struggle to understand how attention weights route context.",
    whatItTeaches: "It teaches Query, Key, Value matrix generation, scaled dot-product calculations, Softmax scores, and causal masking.",
    whyItMatters: "Self-Attention is the foundational mathematical layer of all GPT, Llama, and Claude models.",
    conceptsCovered: ["QKV Matrix Projections", "Scaled Dot-Product Formula", "Causal Masking Matrices"],
    learningOutcomes: [
      "Calculate attention scores from input token weights",
      "Trace causal masks preventing future tokens checks in decoders"
    ],
    interviewQuestions: [
      "Why is self-attention scaled by the square root of key dimensions?"
    ],
    architecture: {
      summary: "Interactive spreadsheet-style UI calculating and plotting attention matrices as users modify token inputs.",
      diagramType: "flow",
      nodes: ["Input Embeddings X", "QKV Weight Matrices", "Q, K, V Projections", "Attention Dot-Products", "Softmax Weights Matrix", "Context Output Y"],
      edges: ["Input Embeddings X -> QKV Weight Matrices", "QKV Weight Matrices -> Q, K, V Projections", "Q, K, V Projections -> Attention Dot-Products", "Attention Dot-Products -> Softmax Weights Matrix", "Softmax Weights Matrix -> Context Output Y"]
    },
    dataFlow: [
      "1. Embeddings load from input words.",
      "2. Linear projections calculate Q, K, V tensors.",
      "3. Dot-product runs on Q and K transpose.",
      "4. Softmax outputs final attention heatmaps."
    ],
    techStack: ["Python", "React", "TypeScript", "MathJax"],
    implementationPlan: [
      "1. Build step-by-step matrix multiplication engine.",
      "2. Create causal masking switch toggle.",
      "3. Style cell heatmaps using tailorable opacity grids."
    ],
    github: {
      label: "GitHub",
      url: "https://github.com/devJam2026/mini-attention-notebook",
      status: "available"
    },
    liveDemo: {
      label: "Live Demo",
      url: "/projects/mini-attention-notebook",
      status: "available"
    },
    relatedProjects: ["hyperparameter-playground"],
    futureImprovements: ["Add support for Multi-Head Attention views", "Visualize dimension size impacts on capacity"],
    evidence: {
      repoChecked: true,
      repoExists: true,
      demoChecked: true,
      demoExists: true,
      notes: ["Completed project in /projects/mini-attention-notebook."]
    }
  },
  "mini-transformer-block-explainer": {
    id: "P10",
    slug: "mini-transformer-block-explainer",
    title: "Mini Transformer Block Explainer",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "transformers",
    concept: "Multi-Head Attention & Normalizations",
    description: "Visual deconstruction of a standard decoder block, outlining normalizations, skip links, and output projections.",
    status: "coming-soon",
    problemStatement: "Integrating attention layers with feed-forward nets and normalizations inside a deep block is hard to visualize structurally.",
    whatItTeaches: "It teaches Multi-Head Attention splitting, residual connections skip gates, and layer normalization offsets.",
    whyItMatters: "Building custom decoder blocks is required to understand fine-tuning steps and custom model architectures.",
    conceptsCovered: ["Multi-Head Split Loops", "Residual Skip Connections", "Layer Normalization Mechanics"],
    learningOutcomes: [
      "Explain the forward steps of a standard decoder block",
      "Trace changes in vector shapes across normalizations layers"
    ],
    interviewQuestions: [
      "Why does Layer Normalization happen before attention in modern transformer blocks?"
    ],
    architecture: {
      summary: "Block-by-block diagram tracking vector changes as inputs pass through decoder normalizations and linear mappings.",
      diagramType: "component",
      nodes: ["Input Tokens", "Layer Norm Layer 1", "Multi-Head Attention Block", "Residual Skip Connection 1", "Layer Norm Layer 2", "Feed Forward Network", "Residual Skip Connection 2", "Output Logits"],
      edges: ["Input Tokens -> Layer Norm Layer 1", "Layer Norm Layer 1 -> Multi-Head Attention Block", "Multi-Head Attention Block -> Residual Skip Connection 1", "Residual Skip Connection 1 -> Layer Norm Layer 2", "Layer Norm Layer 2 -> Feed Forward Network", "Feed Forward Network -> Residual Skip Connection 2", "Residual Skip Connection 2 -> Output Logits"]
    },
    dataFlow: [
      "1. Vector sequence loads into the block.",
      "2. Normalization scales mean and variance.",
      "3. Multi-Head Attention captures token relations.",
      "4. Residual connections restore initial signals."
    ],
    techStack: ["React", "TypeScript", "Framer Motion"],
    implementationPlan: [
      "1. Build block diagram nodes.",
      "2. Animate vector changes during transitions.",
      "3. Create diagnostic shape trackers."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["mini-attention-notebook"],
    futureImprovements: ["Show custom layer initialization checks", "Test layer normalization parameters"]
  },
  "llm-evaluation-lab": {
    id: "P11",
    slug: "llm-evaluation-lab",
    title: "LLM Evaluation Lab",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "llm-evaluation",
    concept: "Golden Datasets & Regression Evals",
    description: "Regression evaluation dashboard testing prompt templates against golden datasets, checking faithfulness and schema compliance.",
    status: "coming-soon",
    problemStatement: "Modifying prompt templates in production causes silent failures, where new prompts solve one issue but break other responses.",
    whatItTeaches: "It teaches gold-standard test designs, validation criteria scoring, and prompt regression checks.",
    whyItMatters: "Automated evaluations are the only way to release prompt modifications safely to production.",
    conceptsCovered: ["Gold Standard Testing", "Hallucination Metrics Scoring", "Prompt Regression Checks"],
    learningOutcomes: [
      "Create a golden dataset of target prompt inputs and expected results",
      "Benchmark prompt accuracy changes across git commits"
    ],
    interviewQuestions: [
      "How do you design an evaluation pipeline that tracks model response drift in production?"
    ],
    architecture: {
      summary: "CI/CD testing pipeline running prompt variants against tests, compiling scores, and flagging failures.",
      diagramType: "flow",
      nodes: ["Prompt Template Commit", "Golden Dataset Collection", "Model Completion Loop", "Metric Evaluators Engine", "Pass/Fail Report Output"],
      edges: ["Prompt Template Commit -> Golden Dataset Collection", "Golden Dataset Collection -> Model Completion Loop", "Model Completion Loop -> Metric Evaluators Engine", "Metric Evaluators Engine -> Pass/Fail Report Output"]
    },
    dataFlow: [
      "1. Developer modifies a prompt template.",
      "2. System triggers evaluation scripts.",
      "3. Model completes entries in the golden dataset.",
      "4. Evaluators verify schema output accuracy."
    ],
    techStack: ["TypeScript", "Vitest", "React"],
    implementationPlan: [
      "1. Define golden test datasets.",
      "2. Write evaluation metrics helpers.",
      "3. Render prompt regression comparison diffs."
    ],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    },
    relatedProjects: ["product-review-insight-generator"],
    futureImprovements: ["Support LLM-as-a-judge scoring pipelines", "Add cost and latency benchmarkers"]
  }
};
