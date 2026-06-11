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

// Explicitly define LLM Foundation projects to preserve detailed metadata
export const foundationProjects: Record<string, AIProject> = {
  "tokenizer-visualizer-studio": {
    id: "P1",
    slug: "tokenizer-visualizer-studio",
    title: "Tokenizer Visualizer Studio",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    concept: "Byte Pair Encoding & Character Offsets",
    description: "Interactive visualizer illustrating how raw text strings are decomposed into tokens, mapped to vocabulary indices, and analyzed for cost constraints.",
    status: "in-progress",
    problemStatement: "Users do not understand why short sentences can consume massive token counts, leading to unexpected API bills and context overflow.",
    whatItTeaches: "It teaches subword tokenization splits, Byte Pair Encoding algorithms, and character offset mapping mechanics.",
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
      "3. Style token highlights using HSL colors."
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
    futureImprovements: ["Support custom vocabularies files", "Add Tiktoken cl100k_base models support"],
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
      url: "/projects/context-window-diagnostics",
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
  "prompt-engineering-lab": {
    id: "P4",
    slug: "prompt-engineering-lab",
    title: "Prompt Engineering Lab",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "prompt-engineering",
    concept: "System, User, and Few-shot Prompts",
    description: "Interactive environment to test system directives, user commands, and few-shot formatting patterns.",
    status: "coming-soon",
    problemStatement: "Poorly structured prompt layouts result in models failing to follow instructions or dropping critical output fields.",
    whatItTeaches: "It teaches prompt structures layout, system commands isolation, and few-shot classification mappings.",
    whyItMatters: "Writing systematic prompt structures improves generation reliability and limits formatting drift.",
    conceptsCovered: ["Prompt engineering structure", "Few-shot classification patterns", "Directives formatting"],
    learningOutcomes: [
      "Design safe system instruction templates",
      "Format context inputs cleanly to optimize token consumption"
    ],
    interviewQuestions: [
      "Describe prompt structure patterns and how few-shot examples improve output consistency."
    ],
    architecture: {
      summary: "Client-side prompt builder displaying dynamic template variables formatting.",
      diagramType: "flow",
      nodes: ["Template Config", "Prompt Compiler", "Preview Text"],
      edges: ["Template Config -> Prompt Compiler", "Prompt Compiler -> Preview Text"]
    },
    dataFlow: [
      "1. User enters template vars.",
      "2. Prompt compiler generates full text.",
      "3. Output displays highlighted parameters."
    ],
    techStack: ["React", "TypeScript"],
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["ai-scam-detector"],
    futureImprovements: []
  },
  "ai-scam-detector": {
    id: "P5",
    slug: "ai-scam-detector",
    title: "AI Scam Detector",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "prompt-engineering",
    concept: "Classification Prompts & Few-Shot",
    description: "System design analyzing incoming messages for fraud signals, using classification prompt instructions and confidence bounds.",
    status: "coming-soon",
    problemStatement: "Naively prompted models fail to flag adversarial phishing messages, causing security risks.",
    whatItTeaches: "It teaches prompt classifications, System prompts engineering, and classification output scoring.",
    whyItMatters: "Reliable classification prompt templates prevent prompt injections and increase accuracy on safety-critical pipelines.",
    conceptsCovered: ["System Prompt Scoping", "Adversarial Injection Defense", "Few-Shot Classification Maps"],
    learningOutcomes: [
      "Design safe System instruction blocks",
      "Flag prompt injection attempts in input text datasets"
    ],
    interviewQuestions: [
      "How do you design a few-shot prompt template that protects model classifications from text prompt injections?"
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
    id: "P6",
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
    id: "P7",
    slug: "product-review-insight-generator",
    title: "Product Review Insight Generator",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "production-llm-processing",
    concept: "Batch Pipelines & Concurrency Limits",
    description: "Concurrent review ingestion pipeline analyzing reviews, optimizing for rate-limit constraints and cost caps.",
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
    id: "P8",
    slug: "resume-jd-matcher",
    title: "Resume / JD Matcher",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "embeddings",
    concept: "Cosine Similarity & Vector Spaces",
    description: "Semantic matching workspace that parses resumes, converts paragraphs into vector embeddings, and measures job description fits.",
    status: "coming-soon",
    problemStatement: "Standard keyword ATS software filters out skilled applicants who express qualifications using synonyms, resulting in poor matching.",
    whatItTeaches: "It teaches text-to-vector embedding conversions, Cosine similarity math, and semantic matching score validations.",
    whyItMatters: "Embeddings enable search engines to query documents by underlying meaning instead of exact keywords.",
    conceptsCovered: ["Cosine Similarity Calculations", "Embedding Vector Spaces", "Semantic Score Distributions"],
    learningOutcomes: [
      "Embed resume paragraphs using API utilities",
      "Compute similarity scores between job descriptions and profile records"
    ],
    interviewQuestions: [
      "How does Cosine similarity compare to Dot Product similarity under varying vector norms?"
    ],
    architecture: {
      summary: "Pipeline mapping files uploads to text, calling embed endpoints, and plotting relative match score vectors.",
      diagramType: "flow",
      nodes: ["PDF Resume Input", "JD Text Input", "Embeddings API", "Cosine Matcher", "Radar Chart Scores"],
      edges: ["PDF Resume Input -> Embeddings API", "JD Text Input -> Embeddings API", "Embeddings API -> Cosine Matcher", "Cosine Matcher -> Radar Chart Scores"]
    },
    dataFlow: [
      "1. User drops resume file.",
      "2. Extractor maps sections to string payloads.",
      "3. Model converts string payloads to embeddings vector.",
      "4. Math helper checks relative angles."
    ],
    techStack: ["React", "TypeScript", "Chart.js"],
    implementationPlan: [
      "1. Design pdf section parser.",
      "2. Setup cosine metrics logic.",
      "3. Animate matching score graphs."
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
    futureImprovements: ["Integrate local transformers embedding runs", "Add metadata category filtering options"]
  },
  "semantic-product-search": {
    id: "P9",
    slug: "semantic-product-search",
    title: "Semantic Product Search",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "vector-databases",
    concept: "Vector Databases & Dense Retrieval",
    description: "Search workspace loading catalog inventories into vector databases, supporting dense vector lookups and metadata query filtering.",
    status: "coming-soon",
    problemStatement: "Traditional search engines fail to find relevant listings when users query with vague conceptual phrases.",
    whatItTeaches: "It teaches vector DB indexing schemas, hybrid search query ranking, and metadata post-filtering.",
    whyItMatters: "Dense vector indexes are essential to scale semantic searches across millions of documents under millisecond latency bounds.",
    conceptsCovered: ["Vector Database Schemas", "Metadata Post-filtering", "Hybrid Search Query Pipelines"],
    learningOutcomes: [
      "Query a local vector indexing DB using dense embeddings",
      "Merge sparse keyword results with dense semantic similarity matrices"
    ],
    interviewQuestions: [
      "Why is approximate nearest neighbor (ANN) search required instead of exact k-NN queries at scale?"
    ],
    architecture: {
      summary: "Search gateway loading documents into vector databases, querying them on keys, and merging results streams.",
      diagramType: "system",
      nodes: ["Search Query Input", "Embeddings Transformer", "Vector DB Index", "Metadata Match Filter", "Hybrid Ranker Engine", "Products Listings Result"],
      edges: ["Search Query Input -> Embeddings Transformer", "Embeddings Transformer -> Vector DB Index", "Vector DB Index -> Metadata Match Filter", "Metadata Match Filter -> Hybrid Ranker Engine", "Hybrid Ranker Engine -> Products Listings Result"]
    },
    dataFlow: [
      "1. Search query is vector-embedded.",
      "2. Vector query triggers index search.",
      "3. Database matches candidate records.",
      "4. Ranker filters out low confidence results."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    implementationPlan: [
      "1. Write database schema mock files.",
      "2. Set up metadata lookup filtering rules.",
      "3. Show comparative lists matching keyword search vs semantic queries."
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
    futureImprovements: ["Integrate HNSW graph parameter sliders", "Add real-time dynamic inventory upsert operations"]
  },
  "llm-evaluation-lab": {
    id: "P10",
    slug: "llm-evaluation-lab",
    title: "LLM Evaluation Lab",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "llm-evaluation",
    concept: "Golden Datasets & Regression Evals",
    description: "Regression evaluation dashboard testing prompt templates against golden datasets, checking faithfulness and schema compliance.",
    status: "coming-soon",
    problemStatement: "Modifying prompt templates in production causes silent failures, where new prompts solve one issue but break other responses.",
    whatItTeaches: "It teaches prompt testing, hallucination checks, accuracy measurement, regression testing, and evaluator-based scoring.",
    whyItMatters: "Automated evaluations are the only way to release prompt modifications safely to production.",
    conceptsCovered: ["Gold Standard Testing", "Hallucination Metrics Scoring", "Prompt Regression Checks"],
    learningOutcomes: [
      "Create a golden dataset of target prompt inputs and expected results",
      "Benchmark prompt accuracy changes across git commits"
    ],
    interviewQuestions: [
      "How do you evaluate semantic faithfulness on dynamic, open-ended LLM outputs at scale?"
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
  },
  "mini-attention-notebook": {
    id: "P11",
    slug: "mini-attention-notebook",
    title: "Mini Attention Notebook",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    moduleSlug: "self-attention",
    concept: "Dot Product Self-Attention Calculations",
    description: "Self-contained interactive workbook computing step-by-step scaled dot-product attention scores from raw matrices input.",
    status: "in-progress",
    problemStatement: "Self-attention calculations are frequently treated as opaque library calls, making it hard to debug vector representations.",
    whatItTeaches: "It teaches Query/Key/Value projection transforms, scaling factors normalization, and Softmax attention mapping.",
    whyItMatters: "Self-attention is the core mathematical mechanism driving sequence modeling in transformers, determining how tokens attend to each other.",
    conceptsCovered: ["Scaled Dot Product formulas", "Q/K/V Matrix multiplication", "Softmax Weights Maps"],
    learningOutcomes: [
      "Translate raw character strings into Query, Key, and Value vector matrices",
      "Generate soft-attention heatmaps showing token connection strengths"
    ],
    interviewQuestions: [
      "Why is self-attention scaled by the square root of key dimension dimension sizes?"
    ],
    architecture: {
      summary: "Dynamic math workbook running forward projections, scaling matrix outputs, and plotting soft heatmaps.",
      diagramType: "component",
      nodes: ["Character Tokens Array", "QKV Projections Weights", "QK Dot Product Score", "Scaling Normalized Matrix", "Attention Weights Heatmap"],
      edges: ["Character Tokens Array -> QKV Projections Weights", "QKV Projections Weights -> QK Dot Product Score", "QK Dot Product Score -> Scaling Normalized Matrix", "Scaling Normalized Matrix -> Attention Weights Heatmap"]
    },
    dataFlow: [
      "1. User enters 3 token words.",
      "2. System displays projection matrix weights values.",
      "3. Matrix multiplication resolves alignment scores.",
      "4. Softmax displays connection strengths."
    ],
    techStack: ["React", "TypeScript", "Math.js"],
    implementationPlan: [
      "1. Write custom matrix multiplication functions.",
      "2. Build dynamic coordinate grid visualizers.",
      "3. Animate cell changes during matrix multiplications."
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
    futureImprovements: ["Add support for multi-head split calculations", "Render causal attention mask blocks"],
    evidence: {
      repoChecked: true,
      repoExists: true,
      demoChecked: true,
      demoExists: true,
      notes: ["Completed project in /projects/mini-attention-notebook."]
    }
  }
};

// Helper function to easily generate planned projects for other tracks dynamically in a type-safe, lightweight manner
function createPlaceholderProject(
  id: string,
  slug: string,
  title: string,
  trackSlug: string,
  concept: string,
  description: string,
  techStack: string[],
  whatItTeaches: string
): AIProject {
  return {
    id,
    slug,
    title,
    pillar: "AI Engineer",
    trackSlug,
    concept,
    description,
    status: "coming-soon",
    problemStatement: `Understanding ${title} requires hands-on system modeling to avoid silent failures under production loads.`,
    whatItTeaches,
    whyItMatters: "Crucial project-based validation for technical interviews and production scaling pipelines.",
    conceptsCovered: [concept],
    learningOutcomes: [`Design and construct the architectural pipeline for ${title}`],
    interviewQuestions: [`Explain the core design constraints and bottlenecks of a ${title}.`],
    architecture: {
      summary: `System flow diagrams outlining client nodes, processing engines, and backing databases for ${title}.`,
      diagramType: "flow",
      nodes: ["Client Workspace", "Inference Gateway", `${title} Logic Engine`, "Vector Cache / DB"],
      edges: [
        "Client Workspace -> Inference Gateway",
        `Inference Gateway -> ${title} Logic Engine`,
        `${title} Logic Engine -> Vector Cache / DB`
      ]
    },
    dataFlow: [
      "1. Input request enters the inference gateway.",
      `2. Processing block executes the target ${concept} logic.`,
      "3. System returns verified outputs to the client UI dashboard."
    ],
    techStack,
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: [],
    futureImprovements: []
  };
}

export const aiProjects: Record<string, AIProject> = {
  ...foundationProjects,

  // Track 2 Neural Network Foundations Projects
  "neural-network-from-scratch-lab": createPlaceholderProject(
    "P12", "neural-network-from-scratch-lab", "Neural Network From Scratch Lab", "neural-networks",
    "Weights and biases mapping", "Build weights, biases, and forward pass logic to train simple classification models.",
    ["Python", "NumPy", "React"], "Linear algebra multiplications, weights matrix shapes, and basic model structures."
  ),
  "backpropagation-visualizer": createPlaceholderProject(
    "P13", "backpropagation-visualizer", "Backpropagation Visualizer", "neural-networks",
    "Gradients chain rule calculations", "Interactive pipeline plotting gradients flows back through node weights layers.",
    ["TypeScript", "Framer Motion", "React"], "Partial derivatives calculations, gradients calculations, and chain rule mappings."
  ),
  "optimizer-playground": createPlaceholderProject(
    "P14", "optimizer-playground", "Optimizer Playground", "neural-networks",
    "SGD, Momentum, and Adam optimizers", "Compare convergence rates and local minima escapes across multiple optimizer algorithms.",
    ["React", "TypeScript", "Chart.js"], "Learning rate decay patterns, Adam weight adjustments, and momentum vectors."
  ),
  "activation-function-lab": createPlaceholderProject(
    "P15", "activation-function-lab", "Activation Function Lab", "neural-networks",
    "Sigmoid, Tanh, ReLU, and GeLU curves", "Examine gradients behaviors, saturations, and mathematical formulas of core activation functions.",
    ["React", "TypeScript"], "Vanishing gradient triggers, mathematical limits, and dead-ReLU states."
  ),
  "loss-function-explorer": createPlaceholderProject(
    "P16", "loss-function-explorer", "Loss Function Explorer", "neural-networks",
    "Cross-Entropy vs Mean Squared Error", "Inspect prediction loss values changes under variations of MSE and cross entropy setups.",
    ["React", "TypeScript"], "Derivatives calculations, gradients curves, and loss landscapes."
  ),
  "mini-mnist-classifier": createPlaceholderProject(
    "P17", "mini-mnist-classifier", "Mini MNIST Classifier", "neural-networks",
    "Feedforward neural network training", "Complete training script classifying numeric digits inside browser workspaces.",
    ["TypeScript", "React", "Canvas"], "Dataset loading, matrix projections, and training loop batches."
  ),
  "training-debugger-lab": createPlaceholderProject(
    "P18", "training-debugger-lab", "Training Debugger Lab", "neural-networks",
    "Overfitting vs Underfitting diagnostics", "Diagnostic dashboard plotting train-validation curves, identifying learning rate drift.",
    ["React", "TypeScript", "Recharts"], "Regularization limits, dropout parameter tuning, and learning rate limits."
  ),

  // Track 3 Sequence Models Projects
  "rnn-memory-visualizer": createPlaceholderProject(
    "P19", "rnn-memory-visualizer", "RNN Memory Visualizer", "sequence-models",
    "Hidden state transitions", "Plot hidden state calculations across sequence time steps, showing recurrent weight sharing.",
    ["React", "TypeScript", "Tailwind CSS"], "Hidden states sharing, sequence loops, and vanishing gradient bottlenecks."
  ),
  "character-prediction-rnn": createPlaceholderProject(
    "P20", "character-prediction-rnn", "Character Prediction RNN", "sequence-models",
    "Recurrent sequence forecasting", "Predict next characters sequences based on historical context, training tiny recurrent loops.",
    ["Python", "NumPy", "React"], "Recurrent steps calculations, sequence generation, and input encodings."
  ),
  "lstm-gate-explorer": createPlaceholderProject(
    "P21", "lstm-gate-explorer", "LSTM Gate Explorer", "sequence-models",
    "Forget, input, and output gates", "Visual workspace debugging state transformations inside forget, input, and output gating loops.",
    ["TypeScript", "Framer Motion", "React"], "Cell states math, gating equations, and gradient flow back-propagation."
  ),
  "gru-simplified-lab": createPlaceholderProject(
    "P22", "gru-simplified-lab", "GRU Simplified Lab", "sequence-models",
    "Reset and update gates logic", "Examine performance tradeoffs and simplified architectures of Gated Recurrent Units.",
    ["React", "TypeScript"], "Reset gates formulas, update gates projections, and parameter limits."
  ),
  "encoder-decoder-translator": createPlaceholderProject(
    "P23", "encoder-decoder-translator", "Encoder-Decoder Toy Translator", "sequence-models",
    "Seq2Seq sequence translations", "Map input sequence states to target sequences using joint encoder-decoder sequence translation loops.",
    ["Python", "NumPy", "React"], "Hidden state transfers, seq2seq bottlenecks, and source sequence masks."
  ),
  "sequence-classification-lab": createPlaceholderProject(
    "P24", "sequence-classification-lab", "Sequence Classification Lab", "sequence-models",
    "Sequential sentiment classifications", "Categorize text reviews by mapping hidden states outputs to classification labels.",
    ["TypeScript", "React"], "Sequential embeddings mapping, classifier weights, and softmax selections."
  ),

  // Track 4 Transformer Architecture Projects
  "positional-encoding-visualizer": createPlaceholderProject(
    "P25", "positional-encoding-visualizer", "Positional Encoding Visualizer", "transformers",
    "Positional sine and cosine formulas", "Interactive charts showing positional sine/cosine vectors adding order signals to embeddings.",
    ["React", "TypeScript", "Recharts"], "Positional mapping formulas, dimension sizes, and vector additions."
  ),
  "self-attention-matrix-explorer": createPlaceholderProject(
    "P26", "self-attention-matrix-explorer", "Self-Attention Matrix Explorer", "transformers",
    "QK transpose matrix multipliers", "Deconstruct attention matrices representing interactions between tokens sequences.",
    ["React", "TypeScript"], "Dot product calculations, dimension normalization scaling, and softmax masks."
  ),
  "multi-head-attention-lab": createPlaceholderProject(
    "P27", "multi-head-attention-lab", "Multi-Head Attention Lab", "transformers",
    "Parallel attention heads splitting", "Trace parallel vector partitions split-mapping across multiple attention heads.",
    ["TypeScript", "React"], "Matrix splits, parallel routing steps, and linear projection weights."
  ),
  "feed-forward-block-lab": createPlaceholderProject(
    "P28", "feed-forward-block-lab", "Feed Forward Block Lab", "transformers",
    "MLP projections inside decoder", "Interactive node mapping feed-forward sublayers transforming tokens representation shapes.",
    ["React", "TypeScript"], "Multilayer perceptron layers, GeLU projections, and normalization constraints."
  ),
  "layernorm-residual-lab": createPlaceholderProject(
    "P29", "layernorm-residual-lab", "LayerNorm and Residual Lab", "transformers",
    "Pre-LN vs Post-LN normalizations", "Compare gradients flows stability across pre-LN and post-LN transformer stack setups.",
    ["React", "TypeScript"], "Mean-variance normalization math, residual additions, and gradients back-propagation."
  ),
  "mini-transformer-block-explainer": {
    id: "P30",
    slug: "mini-transformer-block-explainer",
    title: "Mini Transformer Block Explainer",
    pillar: "AI Engineer",
    trackSlug: "transformers",
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
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["mini-attention-notebook"],
    futureImprovements: ["Show custom layer initialization checks", "Test layer normalization parameters"]
  },
  "mini-gpt-decoder-scratch": createPlaceholderProject(
    "P31", "mini-gpt-decoder-scratch", "Mini GPT Decoder From Scratch", "transformers",
    "Autoregressive generation model", "Construct a full decoder-only LLM script in Python/NumPy, generating characters sequence outputs.",
    ["Python", "NumPy", "React"], "Causal masks, next token logits predictions, and decoding loops."
  ),

  // Track 5 Embeddings & Vector Databases Projects
  "embedding-space-explorer": createPlaceholderProject(
    "P32", "embedding-space-explorer", "Embedding Space Explorer", "embeddings-vector-db",
    "Dimensionality reductions (t-SNE)", "Interactive 3D plots showing text clusters grouping semantically using dimensionality reductions.",
    ["React", "TypeScript", "Three.js"], "t-SNE/UMAP reductions, cluster classifications, and vector distances."
  ),
  "cosine-similarity-lab": createPlaceholderProject(
    "P33", "cosine-similarity-lab", "Cosine Similarity Lab", "embeddings-vector-db",
    "Dot product vs Euclidean metrics", "Workspace comparing Cosine similarity and Euclidean distances changes across text documents.",
    ["TypeScript", "React"], "Vector norms, normalized dot products, and similarities distributions."
  ),
  "semantic-search-engine": createPlaceholderProject(
    "P34", "semantic-search-engine", "Semantic Search Engine", "embeddings-vector-db",
    "Vector semantic matches retrieval", "Query catalog items by semantic descriptions, comparing results with standard keyword matches.",
    ["React", "TypeScript"], "Text embeddings extraction, indices mappings, and confidence filtering."
  ),
  "product-similarity-engine": createPlaceholderProject(
    "P35", "product-similarity-engine", "Product Similarity Engine", "embeddings-vector-db",
    "Embeddings similarity recommenders", "Recommend catalog alternatives by checking nearest neighbor coordinates in embeddings space.",
    ["React", "TypeScript"], "Distance metrics, recommendation filters, and vectors similarity mappings."
  ),
  "vector-db-playground": createPlaceholderProject(
    "P36", "vector-db-playground", "Vector DB Playground", "embeddings-vector-db",
    "Local Chroma/Pinecone setups", "Query vector stores, setting up approximate nearest neighbors parameters and indexes.",
    ["Python", "ChromaDB", "React"], "HNSW configurations, metadata checks, and indexes setups."
  ),
  "hybrid-search-lab": createPlaceholderProject(
    "P37", "hybrid-search-lab", "Hybrid Search Lab", "embeddings-vector-db",
    "Keyword BM25 plus vector merge", "Build query pipeline blending sparse BM25 keyword matching with dense embeddings search scores.",
    ["TypeScript", "React"], "Reciprocal Rank Fusion (RRF), scoring normalization formulas, and results merging."
  ),

  // Track 6 RAG Engineering Projects
  "pdf-rag-qa-app": createPlaceholderProject(
    "P38", "pdf-rag-qa-app", "PDF RAG Q&A App", "rag",
    "Document ingestion, chunking, and Q&A", "Full-stack Q&A application parsing PDFs, chunking pages, and retrieving context for prompt runs.",
    ["Next.js", "TypeScript", "ChromaDB"], "Document loaders setups, token budget controls, and LLM completions."
  ),
  "chunking-strategy-lab": createPlaceholderProject(
    "P39", "chunking-strategy-lab", "Chunking Strategy Lab", "rag",
    "Semantic, fixed, and parent-child chunk splits", "Compare retrieval accuracy and context overlap across fixed, semantic, and recursive chunking.",
    ["React", "TypeScript"], "Text splitting rules, semantic token delimiters, and parent-child indexes."
  ),
  "advanced-rag-playground": createPlaceholderProject(
    "P40", "advanced-rag-playground", "Advanced RAG Playground", "rag",
    "Cross-encoder reranking and filters", "Configure advanced RAG steps: query rewriting, cross-encoder rerankers, and metadata filters.",
    ["Python", "FastAPI", "React"], "Cross-encoders scoring, query expansions prompts, and search reranking filters."
  ),
  "citation-based-rag-app": createPlaceholderProject(
    "P41", "citation-based-rag-app", "Citation-Based RAG App", "rag",
    "Grounded answer extraction source maps", "RAG pipeline verifying LLM outputs against source documents, showing inline citation references.",
    ["TypeScript", "React"], "Source chunk tracking, hallucination prevention prompts, and matches highlight."
  ),
  "seo-content-rag-assistant": createPlaceholderProject(
    "P42", "seo-content-rag-assistant", "SEO Content RAG Assistant", "rag",
    "Authorized content retrieval assistant", "RAG assistant retrieving approved catalog metadata to generate SEO compliant articles.",
    ["Next.js", "TypeScript"], "Context formatting rules, keyword injections, and prompt template scopes."
  ),
  "rag-evaluation-lab": createPlaceholderProject(
    "P43", "rag-evaluation-lab", "RAG Evaluation Lab", "rag",
    "Faithfulness, relevance, and retrieval evals", "Test pipeline computing RAG statistics: context recall, answer relevance, and faithfulness.",
    ["Python", "React", "Recharts"], "ragas metrics formulas, validation datasets maps, and LLM-as-a-judge scorers."
  ),

  // Track 7 Structured AI Applications Projects
  "structured-output-validator-app": createPlaceholderProject(
    "P44", "structured-output-validator-app", "Structured Output Validator", "structured-ai-apps",
    "JSON schema enforce validations", "Workspace validating model completions against strict JSON schema definitions.",
    ["TypeScript", "Zod", "React"], "Zod validations, schema mappings, and correction loop prompts."
  ),
  "ai-form-extraction-app": createPlaceholderProject(
    "P45", "ai-form-extraction-app", "AI Form Extraction App", "structured-ai-apps",
    "Unstructured text entity extractions", "Extract demographic fields and form structures from raw emails and support notes.",
    ["TypeScript", "React"], "Field extraction schemas, parse validators, and error highlights."
  ),
  "invoice-document-parser": createPlaceholderProject(
    "P46", "invoice-document-parser", "Invoice / Document Parser", "structured-ai-apps",
    "Invoice OCR entity parse pipelines", "Parse invoice receipts OCR texts into validated JSON structures mapping line items and totals.",
    ["Next.js", "TypeScript"], "Table structure extractions, numeric formatting validation, and self-repairing prompts."
  ),
  "customer-support-classifier": createPlaceholderProject(
    "P47", "customer-support-classifier", "Customer Support Classifier", "structured-ai-apps",
    "Intent classification and route loops", "Classify incoming support tickets into intent categories, routing queries to specialist pipelines.",
    ["React", "TypeScript"], "Intent prompt parameters, logit probability boundaries, and classification evaluations."
  ),
  "product-review-insight-generator-app": createPlaceholderProject(
    "P48", "product-review-insight-generator-app", "Product Review Insight Generator", "structured-ai-apps",
    "Batch summarization insights generators", "Generate structural product review summaries extracting themes, sentiments, and complaints.",
    ["Node.js", "TypeScript"], "Concurrency batch loops, rates limits mitigations, and JSON summary outputs."
  ),
  "ai-report-generator": createPlaceholderProject(
    "P49", "ai-report-generator", "AI Report Generator", "structured-ai-apps",
    "Structured PDF report generators", "Consolidate business metrics tables and summaries into validated markdown and PDF reports.",
    ["TypeScript", "React"], "Summarization templates, layout validators, and formatting checks."
  ),

  // Track 8 Agentic AI Projects
  "tool-calling-agent": createPlaceholderProject(
    "P50", "tool-calling-agent", "Tool Calling Agent", "agents",
    "Dynamic function call mappings", "Agent loop resolving tasks by mapping user inputs to JSON system tools registrations.",
    ["TypeScript", "React"], "Tool schemas registrations, tool output integrations, and exceptions handling."
  ),
  "planner-agent-lab": createPlaceholderProject(
    "P51", "planner-agent-lab", "Planner Agent Lab", "agents",
    "Task decomposition planners", "Agent breaking down ambiguous objectives into sequential checklists and executing them.",
    ["TypeScript", "React"], "Checklist updates loops, dependency mapping, and reflection loops."
  ),
  "reflection-agent-lab": createPlaceholderProject(
    "P52", "reflection-agent-lab", "Reflection Agent Lab", "agents",
    "Self-correction and retry loops", "Implement self-correcting agent verifying its own outputs, repeating loops on validation errors.",
    ["React", "TypeScript"], "Self-eval prompts, repair loops, and step state trackers."
  ),
  "langgraph-workflow-agent": createPlaceholderProject(
    "P53", "langgraph-workflow-agent", "LangGraph Workflow Agent", "agents",
    "Stateful graph-based agents", "Stateful agent workflow built using node graphs, mapping transitions states dynamically.",
    ["TypeScript", "LangGraph", "React"], "Node state updates, conditional routing edges, and loops controls."
  ),
  "memory-agent-lab": createPlaceholderProject(
    "P54", "memory-agent-lab", "Memory Agent Lab", "agents",
    "Short and long-term state memory", "Manage dynamic conversation histories using local caches and semantic vector database memories.",
    ["React", "TypeScript", "ChromaDB"], "Semantic memory retrievals, session status limits, and sliding window trimming."
  ),
  "research-assistant-agent": createPlaceholderProject(
    "P55", "research-assistant-agent", "Research Assistant Agent", "agents",
    "Query planning, citation, and report build", "Complete research assistant searching APIs, summarizing sources, and exporting cited documents.",
    ["Next.js", "TypeScript"], "Search integrations, citation templates, and reports formats."
  ),

  // Track 9 MCP & Tool Ecosystem Projects
  "mcp-server-starter": createPlaceholderProject(
    "P56", "mcp-server-starter", "MCP Server Starter", "mcp-ecosystem",
    "Model Context Protocol JSON-RPC", "Custom Model Context Protocol (MCP) server integration exchanging resources via JSON-RPC.",
    ["TypeScript", "Node.js"], "JSON-RPC handlers, tool schemas, and MCP specs."
  ),
  "local-filesystem-mcp-tool": createPlaceholderProject(
    "P57", "local-filesystem-mcp-tool", "Local File System MCP Tool", "mcp-ecosystem",
    "Controlled file read-write sandbox", "File access tool letting agents query local workspace directories under directory limits.",
    ["TypeScript", "Node.js"], "Path validation, sandboxed file operations, and permissions checkers."
  ),
  "mcp-github-assistant-tool": createPlaceholderProject(
    "P58", "mcp-github-assistant-tool", "GitHub MCP Assistant", "mcp-ecosystem",
    "Repository metadata query tool", "MCP server querying GitHub API issues lists, file paths, and commit histories.",
    ["TypeScript", "Octokit"], "API request pools, rate-limit controllers, and tool schema mappings."
  ),
  "database-mcp-tool": createPlaceholderProject(
    "P59", "database-mcp-tool", "Database MCP Tool", "mcp-ecosystem",
    "SQL database query validation tool", "MCP tool querying database schemas safely, enforcing strict parameter checks and limit bounds.",
    ["TypeScript", "SQLite"], "SQL queries validations, parameters filters, and execution limits."
  ),
  "calendar-email-tool-agent": createPlaceholderProject(
    "P60", "calendar-email-tool-agent", "Calendar / Email Tool Agent", "mcp-ecosystem",
    "External systems calendar tools integration", "Tool-calling agent scheduling calendar events and verifying mailbox integrations.",
    ["React", "TypeScript"], "Mock API requests pools, dynamic parameter checks, and tool calls feedbacks."
  ),
  "devjam-mcp-tool-hub": createPlaceholderProject(
    "P61", "devjam-mcp-tool-hub", "DevJam MCP Tool Hub", "mcp-ecosystem",
    "Reusable tools catalog registry", "Centralized tool directory displaying registered MCP configurations, schemas, and credentials.",
    ["React", "TypeScript"], "Metadata structures validation, UI filters, and JSON configurations schemas."
  ),

  // Track 10 Multi-Agent Systems Projects
  "crewai-role-based-team": createPlaceholderProject(
    "P62", "crewai-role-based-team", "CrewAI Role-Based Team", "multi-agent-systems",
    "Role-based prompts orchestration", "Orchestrate agent team (Researcher, Writer, Reviewer) exchanging sequential tasks completions.",
    ["TypeScript", "React"], "System role prompts setups, task dependency mapping, and states passing."
  ),
  "autogen-conversation-lab": createPlaceholderProject(
    "P63", "autogen-conversation-lab", "AutoGen Conversation Lab", "multi-agent-systems",
    "Agent-to-agent dialogue loops", "Multi-agent workspace where specialist agents resolve ambiguous requests via structured discussions.",
    ["TypeScript", "React"], "Dialogue protocols setups, consensus gates checks, and loops termination rules."
  ),
  "multi-agent-code-reviewer": createPlaceholderProject(
    "P64", "multi-agent-code-reviewer", "Multi-Agent Code Reviewer", "multi-agent-systems",
    "Planner, reviewer, and fixer team", "Orchestrate three specialized code agents: parsing diffs, identifying bugs, and applying corrections.",
    ["Next.js", "TypeScript"], "Git diff parses, structured reviewer score sheets, and validation tests check."
  ),
  "supervisor-agent-pattern": createPlaceholderProject(
    "P65", "supervisor-agent-pattern", "Supervisor Agent Pattern", "multi-agent-systems",
    "Orchestrator supervisor routing graphs", "Design supervisor agent parsing inputs, delegating subtasks, and coordinating specialists.",
    ["TypeScript", "LangGraph"], "Orchestrator loop logic, dynamic task assignments, and completion states check."
  ),
  "human-in-the-loop-agent-system": createPlaceholderProject(
    "P66", "human-in-the-loop-agent-system", "Human-in-the-Loop Agent System", "multi-agent-systems",
    "Manual approval execution gates", "Agent tool executing shell code after displaying preview changes and getting user approval.",
    ["TypeScript", "React"], "Manual approval states, changes diffs representations, and timeout abort rules."
  ),
  "ai-product-team-simulator": createPlaceholderProject(
    "P67", "ai-product-team-simulator", "AI Product Team Simulator", "multi-agent-systems",
    "Product team simulator dashboard", "Simulate PM, Developer, and QA agents collaborating to generate software specifications.",
    ["React", "TypeScript", "Tailwind CSS"], "Agent communications monitors, state logs panels, and output reports generators."
  ),

  // Track 11 AI System Design Projects
  "llm-gateway-service": createPlaceholderProject(
    "P68", "llm-gateway-service", "LLM Gateway Service", "ai-system-design",
    "Gateway request routing model gateways", "High-availability model gateway resolving provider outages using fallbacks and retries.",
    ["TypeScript", "Node.js"], "Gateway routing handlers, retry backoff algorithms, and health check monitors."
  ),
  "prompt-registry-system": createPlaceholderProject(
    "P69", "prompt-registry-system", "Prompt Registry System", "ai-system-design",
    "Prompt versions Git rollback registries", "Registry service tracking prompt version histories, deployments tags, and rollbacks.",
    ["Next.js", "TypeScript"], "Git version logs, template formatting engines, and database mappings."
  ),
  "ai-cost-monitoring-dashboard": createPlaceholderProject(
    "P70", "ai-cost-monitoring-dashboard", "AI Cost Monitoring Dashboard", "ai-system-design",
    "Token pricing alert cost tracking", "Cost analysis panel calculating API costs, showing cost graphs, and triggering limit alarms.",
    ["React", "TypeScript", "Recharts"], "Token billing equations, cost aggregations, and metrics alerts."
  ),
  "ai-observability-platform": createPlaceholderProject(
    "P71", "ai-observability-platform", "AI Observability Platform", "ai-system-design",
    "Distributed context propagation traces", "Tracer interface visualizing agent steps, execution sequences, and model outputs.",
    ["TypeScript", "OpenTelemetry", "React"], "OpenTelemetry standard loops, span IDs tracing, and latency waterfalls charts."
  ),
  "model-router-lab": createPlaceholderProject(
    "P72", "model-router-lab", "Model Router Lab", "ai-system-design",
    "Model selection latency cost margins", "Router choosing optimal model based on query text complexity, latency limits, and cost budgets.",
    ["TypeScript", "React"], "Routing classifications rules, performance models checklists, and latency tracking."
  ),
  "ai-rate-limiter": createPlaceholderProject(
    "P73", "ai-rate-limiter", "AI Rate Limiter", "ai-system-design",
    "Sliding window Redis token counts", "API rate limiter tracking request counts using sliding window filters to protect services.",
    ["TypeScript", "Redis"], "Sliding window limits math, token bucket algorithms, and backpressure headers."
  ),
  "ai-safety-guardrail-service": createPlaceholderProject(
    "P74", "ai-safety-guardrail-service", "AI Safety Guardrail Service", "ai-system-design",
    "Guardrail filters moderation blocks", "Filter gateway intercepting prompt inputs and outputs to block toxic content or PII leak.",
    ["TypeScript", "React"], "Content classification regex filters, moderation checks, and alert panels."
  ),

  // Track 12 Deployment & Production AI Projects
  "production-ai-app-template": createPlaceholderProject(
    "P75", "production-ai-app-template", "Production AI App Template", "production-deploy",
    "Full-stack production template configurations", "Production full-stack template hosting model gateways, APIs, and client dashboards.",
    ["Next.js", "TypeScript", "FastAPI"], "FastAPI endpoints setups, client page components, and context managers."
  ),
  "dockerized-ai-service": createPlaceholderProject(
    "P76", "dockerized-ai-service", "Dockerized AI Service", "production-deploy",
    "Docker containers GPU hosting environments", "Containerized setup packaging model runtimes, loading weights, and exposing endpoints.",
    ["Docker", "FastAPI", "Uvicorn"], "Dockerfile setups, multi-stage builds pipelines, and configuration checks."
  ),
  "cicd-for-ai-apps": createPlaceholderProject(
    "P77", "cicd-for-ai-apps", "CI/CD for AI Apps", "production-deploy",
    "CI/CD tests pipelines deploy configurations", "CI/CD script validating prompt schemas, running lint steps, and uploading artifacts.",
    ["GitHub Actions", "Docker"], "GitHub workflow actions setups, check scripts, and deployment hooks."
  ),
  "evaluation-pipeline-in-ci": createPlaceholderProject(
    "P78", "evaluation-pipeline-in-ci", "Evaluation Pipeline in CI", "production-deploy",
    "Golden datasets tests on commit", "Automated script running prompt regression tests against golden datasets during pull request builds.",
    ["TypeScript", "Vitest"], "Vitest configurations, golden datasets evaluations, and scoring updates."
  ),
  "streaming-llm-response-app": createPlaceholderProject(
    "P79", "streaming-llm-response-app", "Streaming LLM Response App", "production-deploy",
    "Server-Sent Events streaming streams", "Full-stack client UI rendering live token streams in chat boxes using SSE protocols.",
    ["Next.js", "TypeScript"], "Server-Sent Events parameters, client stream parsers, and UI scrolling rules."
  ),
  "background-job-ai-worker": createPlaceholderProject(
    "P80", "background-job-ai-worker", "Background Job AI Worker", "production-deploy",
    "Queue worker async processing retry loops", "Async worker consuming queues tasks, running models, and recording status completions.",
    ["TypeScript", "BullMQ", "Redis"], "Queue workers setups, retry delays math, and job status handlers."
  ),
  "production-deployment-dashboard": createPlaceholderProject(
    "P81", "production-deployment-dashboard", "Production Deployment Dashboard", "production-deploy",
    "Telemetry metrics health dashboard panels", "Operational dashboard tracking endpoint latencies, request rates, and model errors.",
    ["React", "TypeScript", "Recharts"], "Metrics aggregations, error rate indicators, and latency graphs."
  ),

  // Master Capstones Projects
  "ai-healthcare-management-system": createPlaceholderProject(
    "Capstone1", "ai-healthcare-management-system", "AI Healthcare Management System", "master-capstones",
    "Multi-agent healthcare diagnostics platform", "Synthesizes multi-agent patient routing, medical document RAG retrieval, and structured diagnostic reporting.",
    ["Next.js", "TypeScript", "LangGraph", "ChromaDB"], "Patient intake flows, medical text parsers, and diagnostic review pipelines."
  ),
  "ai-ecommerce-intelligence-platform": createPlaceholderProject(
    "Capstone2", "ai-ecommerce-intelligence-platform", "AI E-commerce Intelligence Platform", "master-capstones",
    "E-commerce query semantic search analytics", "Enterprise analytics engine running search rankings, insights generation, and RAG catalog searches.",
    ["Next.js", "TypeScript", "Qdrant", "Redis"], "RRF ranking scoring pipelines, review classifiers, and catalog caches."
  ),
  "ai-interview-preparation-platform": createPlaceholderProject(
    "Capstone3", "ai-interview-preparation-platform", "AI Interview Preparation Platform", "master-capstones",
    "Mock interview audio text feedback loops", "Mock interviewer parser parsing speech-to-text inputs and analyzing matching profiles against resumes.",
    ["React", "TypeScript", "Whisper API", "Vector Search"], "Audio transcription loops, feedback generators, and similarity matrices."
  ),
  "ai-devops-code-review-assistant": createPlaceholderProject(
    "Capstone4", "ai-devops-code-review-assistant", "AI DevOps / Code Review Assistant", "master-capstones",
    "Automated PR code analysis pipelines", "PR analyzer inspecting repository branches, verifying security violations, and committing corrections.",
    ["Node.js", "TypeScript", "GitHub Actions", "ESLint"], "AST parsers analysis loops, dynamic prompts updates, and git commit API integrations."
  ),
  "devjam-ai-learning-assistant": createPlaceholderProject(
    "Capstone5", "devjam-ai-learning-assistant", "DevJam AI Learning Assistant", "master-capstones",
    "Personalized course tutor bot loops", "Personalized syllabus companion providing quiz evaluations and code diagnostics feedback.",
    ["Next.js", "TypeScript", "MCP client", "Tailwind CSS"], "Course walkthrough tracking, dynamic code executors, and chat assistant interfaces."
  )
};
