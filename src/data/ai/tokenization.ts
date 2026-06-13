export interface TokenizationSubmodule {
  order: number;
  slug: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Interview";
  duration: string;
  status: "complete" | "in-progress" | "coming-soon";
  outcomes: string[];
}

export interface PipelineStep {
  name: string;
  meaning: string;
}

export interface LessonContent {
  slug: string;
  title: string;
  subtitle: string;
  readingTime: string;
  difficulty: string;
  overview: string;
  whyItMatters: string;
  simpleExplanation: string;
  mentalModel?: {
    analogy: string;
    description: string;
  };
  progression?: {
    beginner: string;
    engineer: string;
    production: string;
  };
  failureScenario?: {
    title: string;
    rootCause: string;
    fix: string;
  };
  subwordComparisonRows?: {
    type: string;
    example: string;
    benefit: string;
    problem: string;
  }[];
  algoComparisonRows?: {
    algo: string;
    idea: string;
    usage: string;
  }[];
  costRows?: {
    type: string;
    tokens: string;
    risk: string;
  }[];
  wrongStrongRows?: {
    question: string;
    weak: string;
    strong: string;
  }[];
  stepExample?: {
    input: string;
    tokens: string[];
    tokenIds: number[];
    note: string;
  };
  wordBreakdown?: {
    title: string;
    description: string;
    examples: { word: string; tokens: string[] }[];
  };
  comparisons?: {
    title: string;
    examples: {
      category: string;
      input: string;
      tokens: string[];
      note: string;
    }[];
  };
  deepDiveCards: {
    title: string;
    description: string;
  }[];
  conceptsCovered: string[];
  productionRelevance: {
    title: string;
    description: string;
  }[];
  projectPreview: {
    title: string;
    description: string;
    architecture: string;
    techStack: string[];
  };
  misconceptions: {
    misconception: string;
    reality: string;
  }[];
  interviewQA: {
    question: string;
    answer: string;
  }[];
  takeaways: string[];
  moveNextChecklist?: string[];
  labTasks?: string[];
}

export const tokenizationSubmodules: TokenizationSubmodule[] = [
  {
    order: 1,
    slug: "what-is-tokenization",
    title: "What Is Tokenization?",
    description: "Learn how raw text is converted into tokens and token IDs before entering an LLM.",
    difficulty: "Beginner",
    duration: "12 min read",
    status: "complete",
    outcomes: [
      "Understand what tokens are",
      "Explain token IDs",
      "Describe the LLM input pipeline"
    ]
  },
  {
    order: 2,
    slug: "tokenization-algorithms",
    title: "Character, Word & Subword Tokenization",
    description: "Compare character-level, word-level, and subword tokenization with simple examples.",
    difficulty: "Beginner",
    duration: "15 min read",
    status: "complete",
    outcomes: [
      "Compare tokenizer types",
      "Understand why subwords are used",
      "Identify tokenization trade-offs"
    ]
  },
  {
    order: 3,
    slug: "bpe-wordpiece",
    title: "BPE, WordPiece & SentencePiece",
    description: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
    difficulty: "Intermediate",
    duration: "18 min read",
    status: "complete",
    outcomes: [
      "Explain Byte Pair Encoding",
      "Understand WordPiece",
      "Understand SentencePiece and Unigram"
    ]
  },
  {
    order: 4,
    slug: "token-ids-vocabulary",
    title: "Token IDs, Vocabulary & Embeddings",
    description: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
    difficulty: "Beginner",
    duration: "14 min read",
    status: "complete",
    outcomes: [
      "Explain tokenizer vocabulary",
      "Understand token IDs",
      "Connect tokens to embeddings"
    ]
  },
  {
    order: 5,
    slug: "token-cost",
    title: "Token Inflation, Context Window & API Cost",
    description: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
    difficulty: "Intermediate",
    duration: "16 min read",
    status: "complete",
    outcomes: [
      "Estimate token usage",
      "Understand token inflation",
      "Optimize prompts for cost"
    ]
  },
  {
    order: 6,
    slug: "rag-agents",
    title: "Tokenization in RAG & AI Agents",
    description: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
    difficulty: "Intermediate",
    duration: "18 min read",
    status: "complete",
    outcomes: [
      "Design token-aware RAG chunks",
      "Control agent memory size",
      "Reduce context waste"
    ]
  },
  {
    order: 7,
    slug: "interview-guide",
    title: "Tokenization Interview Guide",
    description: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
    difficulty: "Interview",
    duration: "20 min read",
    status: "complete",
    outcomes: [
      "Answer tokenization interview questions",
      "Explain BPE clearly",
      "Connect tokenization to production systems"
    ]
  }
];

export const tokenizationPipeline: PipelineStep[] = [
  { name: "Text", meaning: "Human-readable input" },
  { name: "Tokens", meaning: "Smaller chunks of text" },
  { name: "Token IDs", meaning: "Numeric representation" },
  { name: "Embeddings", meaning: "Vector representation" },
  { name: "Transformer", meaning: "Context understanding" },
  { name: "Output Tokens", meaning: "Generated response" }
];

export const tokenizationInterviewQuestions: string[] = [
  "What is tokenization in LLMs?",
  "Why do LLMs use subword tokenization?",
  "What is the difference between token and token ID?",
  "How does BPE work?",
  "Why does token count affect API cost?",
  "Why can non-English text consume more tokens?",
  "How does tokenization affect RAG chunking?",
  "How does tokenization affect agent memory?"
];

export const tokenizationProductionChecklist: string[] = [
  "Track input and output tokens for API calls",
  "Estimate API cost before sending large requests",
  "Use token-aware chunking limits for RAG documents",
  "Summarize or trim old chat history recursively",
  "Avoid unnecessary prompt repetition in system instructions",
  "Test multilingual inputs for token inflation",
  "Compress large tool outputs before returning them to LLMs",
  "Implement retry/fallback systems for context window overflows"
];

export const tokenizationLessons: Record<string, LessonContent> = {
  "what-is-tokenization": {
    slug: "what-is-tokenization",
    title: "What is Tokenization?",
    subtitle: "Learn how human-readable text is broken into tokens and converted into numeric IDs before entering a Large Language Model.",
    readingTime: "12 min read",
    difficulty: "Beginner",
    overview: "In this lesson, you will learn the first step of every LLM request: converting raw text into tokens. By the end, you should be able to explain how a sentence becomes token IDs and why tokenization affects model input, context size, and cost.",
    whyItMatters: "Tokenization is the entry gate to every language model. If text is split inefficiently, prompts become longer, costs increase, context windows fill faster, and model behavior can become harder to predict.",
    simpleExplanation: "Humans read language as words and sentences. LLMs cannot directly process raw text. They need numbers. Tokenization is the bridge between language and mathematics. It breaks text into smaller units called tokens, then maps each token to a numeric ID from the model vocabulary.",
    mentalModel: {
      analogy: "Lego blocks",
      description: "Think of tokenization like cutting a sentence into Lego blocks. The model does not see the whole sentence directly. It sees reusable pieces that are converted into numbers. Just like you can build anything from a fixed set of Lego blocks, the model constructs all languages from a fixed vocabulary."
    },
    progression: {
      beginner: "Tokenization breaks text into smaller parts.",
      engineer: "Tokenization maps text pieces to token IDs from a fixed vocabulary table.",
      production: "Tokenization controls prompt cost, context usage, latency margins, and retrieval quality."
    },
    failureScenario: {
      title: "Unicode Emoji Bill Inflation",
      rootCause: "A developer parsed system log outputs containing heavy emoji streams. Emojis under cl100k_base tokenizers get broken down into 4 byte tokens each, inflating the payload count by 400%.",
      fix: "Filter out emojis from raw inputs or use Llama-3's tokenizer which has expanded direct support for emoji tokens."
    },
    stepExample: {
      input: "I love AI",
      tokens: ["I", " love", " AI"],
      tokenIds: [40, 3047, 15592],
      note: "Exact token IDs depend on the tokenizer used by the model. Different models may produce different token IDs and token counts."
    },
    wordBreakdown: {
      title: "One Word Is Not Always One Token",
      description: "A token can be a full word, part of a word, punctuation, whitespace, a number, a symbol, or part of a Unicode character.",
      examples: [
        { word: "cat", tokens: ["cat"] },
        { word: "tokenization", tokens: ["token", "ization"] },
        { word: "unbelievable", tokens: ["un", "believ", "able"] },
        { word: "₹500", tokens: ["₹", "500"] }
      ]
    },
    comparisons: {
      title: "Tokenization Comparison Examples",
      examples: [
        {
          category: "Simple English",
          input: "Hello world",
          tokens: ["Hello", " world"],
          note: "Standard English words are frequently indexed as single tokens in model vocabularies."
        },
        {
          category: "Long Word",
          input: "tokenization",
          tokens: ["token", "ization"],
          note: "Rare words are split into subword tokens to keep vocabulary size manageable."
        },
        {
          category: "Code Snippet",
          input: "const userName = getUser()",
          tokens: ["const", " user", "Name", " =", " get", "User", "()"],
          note: "Code contains symbols, whitespace, and camelCase casing, leading to complex splits."
        },
        {
          category: "Non-English Text",
          input: "আমি বাংলা শিখছি",
          tokens: ["আম", "ি", " বাং", "লা", " শিখ", "ছ", "ি"],
          note: "Non-Latin scripts consume significantly more tokens due to underrepresentation in model vocabularies."
        }
      ]
    },
    deepDiveCards: [
      {
        title: "Tokenizer Vocabulary",
        description: "A vocabulary maps token pieces to numeric IDs. Think of it as a huge bilingual dictionary mapping string chunks to integers."
      },
      {
        title: "Token IDs",
        description: "The model processes token IDs, not raw strings. These IDs act as coordinates inside the model parameter layers."
      },
      {
        title: "Embedding Lookup",
        description: "Token IDs are converted into high-dimensional vectors by looking up corresponding indices in the embedding matrix."
      },
      {
        title: "Transformer Input",
        description: "The transformer uses these dense vector embeddings to understand syntactic context and predict output tokens."
      }
    ],
    conceptsCovered: [
      "Token",
      "Token ID",
      "Tokenizer Vocabulary",
      "Embedding Lookup",
      "Subword Split",
      "Context Window",
      "API Cost"
    ],
    productionRelevance: [
      {
        title: "API Cost",
        description: "LLM providers calculate bills based on total processed tokens (input prompts + output completions)."
      },
      {
        title: "Context Window",
        description: "Every model has a hard limit of total tokens it can process. Exceeding this limit drops older history or throws API errors."
      },
      {
        title: "RAG Pipelines",
        description: "Information retrieved from vector databases must be chunked based on token boundaries to ensure retrieval accuracy."
      },
      {
        title: "AI Agents",
        description: "Tool calling schemas, memory loops, and planning instructions consume valuable token slots in every execution step."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Build an interactive visualizer that shows how text becomes tokens, token IDs, token counts, and estimated API cost.",
      architecture: "User Input String → Tokenizer Engine → Token IDs → Token Highlight UI → Cost Estimate",
      techStack: ["TypeScript", "React", "CSS Variables", "Tokenizer Library"]
    },
    misconceptions: [
      {
        misconception: "One word equals one token.",
        reality: "A word can be one token, multiple subword tokens, or even split into byte-level sequences depending on spelling and language."
      },
      {
        misconception: "Tokenization understands text meaning.",
        reality: "Tokenization is a purely statistical/rule-based split. Meaning is learned downstream by the model's weights and self-attention heads."
      },
      {
        misconception: "All models count tokens the same way.",
        reality: "Different models utilize different tokenizers (e.g., Llama-3 uses tiktoken with a 128k vocabulary; older GPT-3 models use cl100k_base)."
      }
    ],
    interviewQA: [
      {
        question: "What is tokenization in LLMs?",
        answer: "Tokenization is the process of converting raw text into smaller units called tokens and mapping those tokens to numeric IDs that the model can process."
      },
      {
        question: "Why do LLMs need tokenization?",
        answer: "LLMs operate on vector mathematics rather than raw letters. Tokenization provides the initial index mapping so weights can convert strings into dense vectors."
      },
      {
        question: "What is the difference between a token and a token ID?",
        answer: "A token is a text chunk (e.g., ' love'). A token ID is the integer index mapped to that chunk in the tokenizer's vocabulary table (e.g., 3047)."
      },
      {
        question: "Is one word always one token?",
        answer: "No. A word may be split into multiple subwords (e.g., 'tokenization' → ['token', 'ization']) to handle unseen or rare terms without blowing up vocabulary size."
      },
      {
        question: "Where does tokenization happen in the LLM pipeline?",
        answer: "It occurs at the absolute entry gate. The flow is: Raw Text → Tokens → Token IDs → Embedding Layer Lookup → Transformer."
      }
    ],
    takeaways: [
      "Tokenization is the first step of LLM input processing.",
      "LLMs process token IDs, not raw text.",
      "One word is not always one token.",
      "Token count affects cost, context window, latency, and RAG design.",
      "Understanding tokenization helps you design better AI applications."
    ],
    labTasks: [
      "Open the Tokenizer Visualizer Studio.",
      "Input 'I love AI' and count the tokens.",
      "Compare English token counts against Bengali scripts."
    ],
    moveNextChecklist: [
      "I can explain token vs token ID in 15 seconds.",
      "I understand why one word is not always one token.",
      "I know where tokenization sits in the transformer pipeline."
    ]
  },
  "tokenization-algorithms": {
    slug: "tokenization-algorithms",
    title: "Character, Word & Subword Tokenization",
    subtitle: "Compare character-level, word-level, and subword tokenization with simple examples.",
    readingTime: "15 min read",
    difficulty: "Beginner",
    overview: "Understand why modern LLMs use subword tokenization by comparing the three fundamental tokenization approaches, their storage requirements, and computational trade-offs.",
    whyItMatters: "Choosing the correct tokenization granularity balances vocabulary size against sequence length, preventing context bottlenecks and out-of-vocabulary terms.",
    simpleExplanation: "Early NLP models split text by characters or by full space-separated words. Character-level splits create massive sequences that exhaust memory. Word-level splits require infinite vocabularies that fail on typos or new words. Subword tokenization merges these ideas, using subword chunks to balance space and sequence length.",
    mentalModel: {
      analogy: "Word dictionary vs Spelling letters",
      description: "Word-level tokenization is like a massive dictionary containing every word in existence. Character-level is spelling everything letter-by-letter. Subwords are like root syllables, prefixes, and suffixes—offering a highly reusable building kit."
    },
    progression: {
      beginner: "Text can be split by letter, by word, or by syllables.",
      engineer: "Subword splitting merges frequent character pairings to balance vocabulary lookup arrays against sequence attention metrics.",
      production: "Granularity choice directly bounds Out-of-Vocabulary (OOV) risks and VRAM footprint in embedding tables."
    },
    failureScenario: {
      title: "Character-level Attention Explosion",
      rootCause: "An engineer trained a character-only chatbot. Prompt character length quadrupled sequence limits, causing attention matrices to exceed GPU memory bounds (O(N^2)).",
      fix: "Migrate to subword tokenization (like SentencePiece) to compress input sequence steps."
    },
    stepExample: {
      input: "learning",
      tokens: ["learn", "ing"],
      tokenIds: [4658, 278],
      note: "Subword tokenizers split 'learning' into root 'learn' and suffix 'ing' to reuse vocabulary items."
    },
    subwordComparisonRows: [
      {
        type: "Character",
        example: "cat → c, a, t",
        benefit: "Handles any word, zero OOV terms",
        problem: "Very long sequences, attention memory overhead"
      },
      {
        type: "Word",
        example: "I love AI → I, love, AI",
        benefit: "Intuitive, clean segmentation",
        problem: "Huge vocab, struggles with spelling variations and typos"
      },
      {
        type: "Subword",
        example: "tokenization → token, ization",
        benefit: "Balanced sequence length & vocab size",
        problem: "Slightly complex boundaries rules"
      }
    ],
    wordBreakdown: {
      title: "Unbelievable Splitting Boundaries",
      description: "See how the word 'unbelievable' is broken down by different tokenizers:",
      examples: [
        { word: "Character-level", tokens: ["u", "n", "b", "e", "l", "i", "e", "v", "a", "b", "l", "e"] },
        { word: "Word-level", tokens: ["unbelievable"] },
        { word: "Subword-level", tokens: ["un", "believ", "able"] }
      ]
    },
    deepDiveCards: [
      {
        title: "Character-Level Tokenization",
        description: "Splits text into letters. Vocabulary is tiny (approx. 256 for ASCII/UTF-8), but sequences are extremely long, making attention scaling slow."
      },
      {
        title: "Word-Level Tokenization",
        description: "Splits text by spaces. Vocabulary size explodes into millions of entries, and the model struggles with Out-of-Vocabulary (OOV) terms like plurals or typos."
      },
      {
        title: "Subword-Level Tokenization",
        description: "Splits rare words into frequent subword chunks (e.g., 'playing' → ['play', 'ing']). This balances vocabulary size and sequence length."
      }
    ],
    conceptsCovered: [
      "Character Tokenization",
      "Word Tokenization",
      "Subword Tokenization",
      "Out-of-Vocabulary (OOV)",
      "Sparsity",
      "Sequence Scaling"
    ],
    productionRelevance: [
      {
        title: "Vocabulary Size vs Model Weights",
        description: "A word-level tokenizer requires a huge embedding matrix, which consumes massive GPU VRAM just to store dictionary representations."
      },
      {
        title: "Sequence Length Complexity",
        description: "Character-level tokenization doubles or triples prompt lengths, inflating attention complexity quadratically."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Analyze how different tokenization algorithms split typical inputs and measure sequence length shifts.",
      architecture: "Input Text → Algorithm Selector → Merged Token Array → Comparison Report",
      techStack: ["TypeScript", "React", "Subword Tokenizers"]
    },
    misconceptions: [
      {
        misconception: "Character tokenization is never used anymore.",
        reality: "Character or byte fallbacks are still active inside subword tokenizers to handle unknown symbols without crashing."
      }
    ],
    interviewQA: [
      {
        question: "Explain the Out-Of-Vocabulary (OOV) problem in word tokenizers.",
        answer: "If a user inputs a word not present in the tokenizer's training set, a word tokenizer must assign it to a generic '<UNK>' (Unknown) token, losing all semantic detail. Subwords avoid this by breaking the unknown word into smaller, known units."
      },
      {
        question: "Why don't modern LLMs use character-only tokenization?",
        answer: "Self-attention layers scale quadratically with sequence length. Character-level text multiplies sequence lengths, making inference slower and memory demands unsustainable."
      }
    ],
    takeaways: [
      "Character tokenizers have small vocabularies but suffer from long sequences.",
      "Word tokenizers have short sequences but suffer from infinite vocabularies and OOV errors.",
      "Subword tokenizers offer the optimal balance for modern LLM transformers."
    ],
    labTasks: [
      "Input 'unbelievable' in the text workspace.",
      "Analyze characters count vs token count outputs.",
      "Check why typos break words into smaller subwords."
    ],
    moveNextChecklist: [
      "I can explain why character tokenization creates context window limits issues.",
      "I understand the OOV bottleneck.",
      "I know why subwords represent the ideal trade-off."
    ]
  },
  "bpe-wordpiece": {
    slug: "bpe-wordpiece",
    title: "BPE, WordPiece & SentencePiece",
    subtitle: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
    readingTime: "18 min read",
    difficulty: "Intermediate",
    overview: "Learn the inner mechanics of how algorithms like Byte Pair Encoding (BPE), WordPiece, and SentencePiece build vocabularies and tokenize text.",
    whyItMatters: "BPE is the standard algorithm used by GPT and Llama. Understanding merge rules helps debug encoding anomalies and vocabulary bias.",
    simpleExplanation: "Vocabularies are built before model training starts. BPE begins with a list of base characters and merges the most frequent pairs in a dataset. WordPiece does something similar but selects merges that maximize the likelihood of the training data. SentencePiece tokenizes raw bytes directly, treating whitespace as a character.",
    mentalModel: {
      analogy: "Creating word stamps",
      description: "Imagine picking stamps to print books. Instead of carving a stamp for every unique word, you look at text patterns and carve stamps for syllables and letters. BPE does this by carving character pair stamps step-by-step."
    },
    progression: {
      beginner: "Vocabularies are statistical dictionaries built before LLMs are trained.",
      engineer: "BPE builds vocabs by merging adjacent character pairings recursively based on counts.",
      production: "SentencePiece tokenizes byte streams natively, reducing whitespace rules."
    },
    failureScenario: {
      title: "East Asian Space-clipping Monoliths",
      rootCause: "Traditional pre-tokenizers split text by spaces. Languages like Japanese don't use space delimiters, causing SentencePiece splits to classify entire paragraphs as single segments.",
      fix: "Utilize SentencePiece models trained directly on byte representations that treat whitespace as standard characters."
    },
    algoComparisonRows: [
      {
        algo: "BPE",
        idea: "Merge frequent character pairs",
        usage: "GPT, Llama models"
      },
      {
        algo: "WordPiece",
        idea: "Merges maximizing data likelihood",
        usage: "BERT, RoBERTa"
      },
      {
        algo: "SentencePiece",
        idea: "Lossless tokenization from raw bytes",
        usage: "T5, Multilingual models"
      }
    ],
    stepExample: {
      input: "low lower lowest",
      tokens: ["low", " low", "er", " low", "est"],
      tokenIds: [102, 102, 304, 102, 592],
      note: "BPE iteratively merges l + o → lo, then lo + w → low, building subword structures."
    },
    deepDiveCards: [
      {
        title: "Byte Pair Encoding (BPE)",
        description: "A bottom-up algorithm. It counts all adjacent token pairs in a training corpus and merges the most frequent pair. This is repeated until the target vocabulary size is reached."
      },
      {
        title: "WordPiece",
        description: "Used by BERT. Instead of merging by raw frequency, WordPiece chooses merges that maximize the probability of the training data according to a unigram language model."
      },
      {
        title: "SentencePiece",
        description: "A language-independent tokenizer that treats the input as a raw byte stream and spaces as a special character (e.g., '_'). This removes the need for language-specific word pre-segmentation."
      }
    ],
    conceptsCovered: [
      "Byte Pair Encoding",
      "WordPiece",
      "SentencePiece",
      "Vocabulary Merges",
      "Token Boundaries",
      "Byte Fallback"
    ],
    productionRelevance: [
      {
        title: "Vocabulary Bias",
        description: "Vocabularies trained on mostly English text merge common English pairs, leaving other languages split into tiny byte-level pieces."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Implement a mini BPE training loop in TypeScript to merge character pairs from user input text.",
      architecture: "Input Text → Count Adjacent Pairs → Merge Top Pair → Update Vocabulary Table",
      techStack: ["TypeScript", "React", "BPE Core Engine"]
    },
    misconceptions: [
      {
        misconception: "Tokenizers are trained along with the neural network parameters.",
        reality: "Tokenizers are trained beforehand as a separate static preprocessing step. The model's weights learn embeddings for the static vocabulary."
      }
    ],
    interviewQA: [
      {
        question: "How does the Byte Pair Encoding (BPE) algorithm build its vocabulary?",
        answer: "It starts with base characters. It scans the corpus, counts adjacent pairs, merges the most frequent pair, and appends it to the vocabulary. It repeats this merge loop until the vocabulary size hits the target limit."
      },
      {
        question: "What is the role of SentencePiece?",
        answer: "SentencePiece treats whitespace as a visible character, avoiding language-specific pre-tokenization rules. This makes it highly effective for languages like Japanese or Chinese that do not use spaces."
      }
    ],
    takeaways: [
      "BPE merges adjacent character pairs iteratively based on frequency.",
      "WordPiece merges based on database likelihood models.",
      "SentencePiece treats spaces as standard characters, enabling language-agnostic tokenization."
    ],
    labTasks: [
      "Simulate BPE merge pairs in the playground.",
      "Observe step merges for low, lower, lowest.",
      "Analyze SentencePiece spacing marks (_)."
    ],
    moveNextChecklist: [
      "I can list the differences between BPE and WordPiece.",
      "I know why SentencePiece represents spacing as character chunks.",
      "I understand BPE merge rules loops."
    ]
  },
  "token-ids-vocabulary": {
    slug: "token-ids-vocabulary",
    title: "Token IDs, Vocabulary & Embeddings",
    subtitle: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
    readingTime: "14 min read",
    difficulty: "Beginner",
    overview: "Connect the tokenization output to the rest of the neural network pipeline, showing how IDs map to embedding vectors.",
    whyItMatters: "Tokenization ends with IDs; the model starts with embeddings. Understanding this interface is key to understanding neural NLP architectures.",
    simpleExplanation: "Once a tokenizer splits text into tokens, it maps each token to a unique number (Token ID) using its Vocabulary. These IDs are then passed to the model's Embedding Layer, which acts as a lookup table to retrieve a high-dimensional vector representing the token's coordinate in vector space.",
    mentalModel: {
      analogy: "Lookup address index maps",
      description: "A Token ID is like an address index. The embedding layer is the coordinate map. The ID holds no meaning by itself; the embedding coordinate places it relative to other semantic places."
    },
    progression: {
      beginner: "Token IDs are integers index positions in vocabulary arrays.",
      engineer: "Embedding matrices translate integer ID mappings into dense float vectors.",
      production: "Optimizing vocabulary limits GPU VRAM footprints of weights."
    },
    failureScenario: {
      title: "Embedding Weights VRAM starvation",
      rootCause: "A developer expanded the vocabulary target limit to 500,000 to improve translations. The embedding layer ballooned, exhausting GPU memory allocations.",
      fix: "Limit vocabulary size to 128,000 and compress sequences."
    },
    stepExample: {
      input: "AI is powerful",
      tokens: ["AI", " is", " powerful"],
      tokenIds: [15836, 374, 8147],
      note: "Each Token ID acts as an index to retrieve coordinate vectors from embedding weights."
    },
    deepDiveCards: [
      {
        title: "Vocabulary Table",
        description: "A huge lookup dictionary mapping tokens to unique integers (e.g., 'apple' → 4049)."
      },
      {
        title: "Embedding Matrix",
        description: "A weight matrix of size [Vocabulary Size x Hidden Dimension]. When a Token ID is passed, it indexes this matrix to extract a dense vector."
      },
      {
        title: "Positional Encoding",
        description: "Since transformers process all tokens in parallel, positional vectors are added to token embeddings to preserve the order of words."
      }
    ],
    conceptsCovered: [
      "Vocabulary Table",
      "Embedding Lookup",
      "Hidden Dimension",
      "Positional Encoding",
      "Logit Coordinates"
    ],
    productionRelevance: [
      {
        title: "VRAM Memory Usage",
        description: "Larger vocabularies mean larger embedding layers. This consumes GPU VRAM even before the model layers begin."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Inspect vocabulary mappings and visualize the embedding lookup process for input sequences.",
      architecture: "Input Tokens → Vocabulary Map → Token ID Array → Mock Embedding Matrix Lookup",
      techStack: ["TypeScript", "React", "Vector Mapping"]
    },
    misconceptions: [
      {
        misconception: "Embeddings represent dictionary definitions.",
        reality: "Embeddings represent contextual relationships learned from statistics, not predefined definitions."
      }
    ],
    interviewQA: [
      {
        question: "What is the connection between token IDs and the embedding matrix?",
        answer: "A token ID is an integer index. The embedding matrix is a weight lookup table. The ID retrieves a specific row from this table, returning a dense vector that represent that token in the vector space."
      },
      {
        question: "Explain the space-compute trade-off of changing the tokenizer vocabulary size.",
        answer: "A larger vocabulary represents text in fewer tokens, shortening input sequences and saving attention compute. However, it increases the embedding matrix size, consuming more GPU memory."
      }
    ],
    takeaways: [
      "Tokens map directly to unique Token IDs in the vocabulary.",
      "The embedding layer translates Token IDs into high-dimensional vectors.",
      "Vocabulary size is a direct trade-off between sequence length and weight storage."
    ],
    labTasks: [
      "Map 'AI is powerful' to integer arrays.",
      "Inspect mock embedding indices coordinates.",
      "Track positional vector additions."
    ],
    moveNextChecklist: [
      "I know the difference between token ID and embedding coordinates.",
      "I can explain why token IDs don't carry meanings by themselves.",
      "I understand positional vector additions role."
    ]
  },
  "token-cost": {
    slug: "token-cost",
    title: "Token Inflation, Context Window & API Cost",
    subtitle: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
    readingTime: "16 min read",
    difficulty: "Intermediate",
    overview: "Understand how tokenization affects production metrics: pricing, latency, and context limits, especially for non-English scripts.",
    whyItMatters: "Inefficient tokenization directly increases server costs and degrades multilingual user experiences due to token inflation.",
    simpleExplanation: "LLM APIs charge based on input and output token counts. In addition, every model has a maximum context window length. Because vocabularies are optimized for English, other languages, complex code, emojis, and symbols require multiple tokens per word, leading to 'token inflation'. This drives up costs and shrinks the effective context size.",
    mentalModel: {
      analogy: "Toll road truck billing",
      description: "If your cargo is shipped in English, it fits in 1 large truck. If it is shipped in Bengali or Hindi, it gets split into 5 small delivery vans because the vocabulary lacks compound stamps. You pay toll charges on 5 vans instead of 1."
    },
    progression: {
      beginner: "API providers bill by token chunks counts, not raw text characters lengths.",
      engineer: "Context boundaries limit input prompt sizes combined with generated output budgets.",
      production: "Compressing prompt formatting structures directly reduces operation bills."
    },
    failureScenario: {
      title: "The $10,000 Redundant Prompt Bill",
      rootCause: "A developer appended a massive 10,000 token system prompt full of unused examples to every single user query, multiplying API billing metrics.",
      fix: "Migrate static prompt examples to semantic lookups (vector DB) and apply prompt compression."
    },
    costRows: [
      {
        type: "Short Prompt",
        tokens: "100",
        risk: "Low cost, but lacks situational context"
      },
      {
        type: "Long Context Prompt",
        tokens: "3,000",
        risk: "Better generation context, higher billing"
      },
      {
        type: "RAG Prompt (Documents injected)",
        tokens: "10,000",
        risk: "High retrieve accuracy, cost accumulates fast"
      },
      {
        type: "Agent Loops Prompt",
        tokens: "50,000+",
        risk: "Recursive tool outputs loop bills grow exponentially"
      }
    ],
    stepExample: {
      input: "Multilingual text inflation",
      tokens: ["Multi", "ling", "ual", " text", " inflation"],
      tokenIds: [3040, 203, 1022, 304, 5920],
      note: "System prompt (500) + history (2000) + docs (5000) + query (100) + response (1000) = 8600 tokens."
    },
    deepDiveCards: [
      {
        title: "Token Inflation",
        description: "Non-English text or complex unicode characters are often split into byte-level tokens, requiring up to 4x more tokens than English for the same meaning."
      },
      {
        title: "Prompt Costs",
        description: "API billing is calculated per 1M tokens. Redundant prompt instructions or large raw system prompts directly inflate operations bills."
      },
      {
        title: "Context Windows",
        description: "If your input + output tokens exceed the model's limit (e.g., 8k or 128k), the model will throw errors or truncate history."
      }
    ],
    conceptsCovered: [
      "Token Inflation",
      "API Pricing Matrix",
      "Context Limits",
      "Prompt Compression",
      "Multilingual Overhead"
    ],
    productionRelevance: [
      {
        title: "Cost Management",
        description: "Compressing prompt templates and removing repeated instructions directly reduces the operating cost of LLM apps."
      },
      {
        title: "Multilingual Budgeting",
        description: "When serving international users, estimate higher token usage margins to account for non-English token splitting."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Build a pricing estimator that compares token counts and API costs across English, code, and non-English scripts.",
      architecture: "User String → Token Count → API Price Model → Dynamic Cost Report",
      techStack: ["TypeScript", "React", "Cost Estimator"]
    },
    misconceptions: [
      {
        misconception: "One character always equals one token.",
        reality: "In English, 1 token is roughly 4 characters. In languages like Bengali or Hindi, a single character can require multiple tokens."
      }
    ],
    interviewQA: [
      {
        question: "Why do non-English languages suffer from token inflation?",
        answer: "Tokenizer vocabularies are built on training datasets heavily weighted toward English. Rare non-English words and letters are split into smaller UTF-8 byte tokens, inflating token counts."
      },
      {
        question: "How can you mitigate token inflation in production systems?",
        answer: "You can utilize models with larger, multilingual vocabularies (e.g., Llama-3's 128k vocab), compress inputs, or translate inputs to English before querying the LLM."
      }
    ],
    takeaways: [
      "LLM APIs bill based on total processed tokens, not characters.",
      "Non-English scripts suffer from high token inflation, increasing cost.",
      "Optimizing system prompts and compressing contexts directly reduces API expenses."
    ],
    labTasks: [
      "Compare costs of English vs Devanagari text queries in the lab.",
      "Simulate prompt templates compression strategies.",
      "Calculate total context window fill percentages."
    ],
    moveNextChecklist: [
      "I know the total tokens formula.",
      "I understand why non-English text consumes more tokens.",
      "I can name 3 prompt optimization techniques."
    ]
  },
  "rag-agents": {
    slug: "rag-agents",
    title: "Tokenization in RAG & AI Agents",
    subtitle: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
    readingTime: "18 min read",
    difficulty: "Intermediate",
    overview: "Apply tokenization principles to complex workflows like Retrieval-Augmented Generation (RAG) and stateful AI agents.",
    whyItMatters: "Chunking database documents by characters instead of token counts causes vector search mismatches and context overflows.",
    simpleExplanation: "In RAG, we split documents into chunks to fit them into the LLM context. If we split by characters, we might accidentally exceed token limits or cut tokens in half. Similarly, AI agents that loop in ReAct cycles accumulate tokens rapidly. We must monitor token counts to prune history and fit tools inside the budget.",
    mentalModel: {
      analogy: "Filing cabinet folders",
      description: "Chunking RAG files is like cutting a book to fit folders. If you cut strictly by character coordinates, you slice words in half, corrupting the semantic embedding values. You need token-aware counts to cut at clean conceptual boundaries."
    },
    progression: {
      beginner: "Large documents must be divided into smaller chunks before embedding vectors are created.",
      engineer: "Token-aware splitters keep chunk sizes within embedding bounds without clipping syllables.",
      production: "Throttling agent loops tool outputs prevents context limitations failures."
    },
    failureScenario: {
      title: "SQL Database Dump Agent Crash",
      rootCause: "An agent queried an inventory table and dumped 20,000 raw lines of text into prompt context, causing immediate limits crashes.",
      fix: "Implement database response pagination, restrict raw tools logs sizes, and summarize table schemes."
    },
    stepExample: {
      input: "RAG retrieves context.",
      tokens: ["R", "AG", " ret", "rie", "ves", " context", "."],
      tokenIds: [83, 12932, 2816, 2197, 483, 2801, 13],
      note: "Prompt total = System Instructions (15) + Retrieval Chunks (10) + User Query (3) = 28 tokens."
    },
    deepDiveCards: [
      {
        title: "Token-Aware Chunking",
        description: "Splits database documents using token length counters instead of simple character counts. This prevents context limit overflows."
      },
      {
        title: "Agent Loop Overhead",
        description: "AI agents run in loops, sending system prompts, tool schemas, and history in every turn. This builds up massive token counts."
      },
      {
        title: "History Memory Trimming",
        description: "Maintains agent history within a strict token budget using sliding windows or summarizing old chat turns."
      }
    ],
    conceptsCovered: [
      "Token Chunking",
      "Agent Loops",
      "Memory Trimming",
      "Tool Schema Overhead",
      "ReAct Token Build-up"
    ],
    productionRelevance: [
      {
        title: "RAG System Stability",
        description: "Always calculate token count before sending retrieved database chunks to the LLM to avoid context window crashes."
      },
      {
        title: "Agent Efficiency",
        description: "Keep tool schemas concise. Unused fields or verbose parameters waste tokens in every single step."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "Simulate document chunking and track token accumulation in multi-step agent ReAct loops.",
      architecture: "Raw File → Token-Aware Chunker → Chunk Array → Agent Memory Buffer Simulator",
      techStack: ["TypeScript", "React", "Chunking Utility"]
    },
    misconceptions: [
      {
        misconception: "Character-based chunking is always safe.",
        reality: "Character chunking is unsafe because characters don't scale linearly with tokens across different scripts and fonts."
      }
    ],
    interviewQA: [
      {
        question: "How does tokenization affect document chunking in RAG pipelines?",
        answer: "Embedding models and LLMs have strict token limits. Document chunks must be measured in tokens, not characters, to ensure they fit within these limits and avoid clipping information."
      },
      {
        question: "How do you manage agent memory token build-up in long multi-turn interactions?",
        answer: "We count session tokens locally. When counts exceed a threshold, we run a background summarizer to compress old chat turns or slide the token window, removing the oldest messages."
      }
    ],
    takeaways: [
      "RAG document chunking should be token-aware, not character-based.",
      "AI agents accumulate tokens rapidly during multi-turn ReAct loops.",
      "Strict token budgeting is key to maintaining stable, cost-effective agents."
    ],
    labTasks: [
      "Build token-aware chunks from long documents in the workspace.",
      "Trace the accumulation limits of agent loops.",
      "Measure vector embedding database boundaries."
    ],
    moveNextChecklist: [
      "I can explain why character splits are unsafe for RAG vector lookups.",
      "I understand context constraints inside ReAct agent loops.",
      "I know how to trim agent history memory buffers."
    ]
  },
  "interview-guide": {
    slug: "interview-guide",
    title: "Tokenization Interview Guide",
    subtitle: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
    readingTime: "20 min read",
    difficulty: "Interview",
    overview: "Get ready to defend tokenizer engineering choices, vocabulary scaling, and cost optimization questions in senior technical interview loops.",
    whyItMatters: "Senior AI engineering loops frequently test tokenizer boundaries and trade-offs to evaluate production systems design skills.",
    simpleExplanation: "Interviewers look for practical engineering knowledge. They want to hear about space-compute tradeoffs of vocabulary sizes, how tokenizer bugs like UTF-8 fallback work, and how to optimize LLM applications against token limits and costs.",
    mentalModel: {
      analogy: "The system architect defense board",
      description: "Defending designs to interviewers requires explaining trade-offs. You must justify choices like why a larger vocab (128k) reduces prompt latency but balloons embedding parameter matrices."
    },
    progression: {
      beginner: "Understand definitions of tokens, token IDs, and simple splits.",
      engineer: "Explain BPE merges loops, SentencePiece byte fallbacks, and decoder maps.",
      production: "Justify prompt budgeting setups, chunk constraints in RAG, and memory limits."
    },
    failureScenario: {
      title: "The Failed System Design Assessment",
      rootCause: "An interviewee claimed that 1 word is always 1 token and that pricing is based on character strings lengths, demonstrating lack of production experience.",
      fix: "Master vocabulary matrices offsets, non-English multipliers, and token-based pricing formulas."
    },
    stepExample: {
      input: "Explain BPE trade-offs.",
      tokens: ["Explain", " B", "PE", " trade", "-offs", "."],
      tokenIds: [14995, 362, 10243, 3134, 49272, 13],
      note: "Mapping subwords to API billing and latency represents the strongest interview defense strategy."
    },
    wrongStrongRows: [
      {
        question: "What is tokenization?",
        weak: "Splitting text into words.",
        strong: "Breaking text into subwords and mapping them to token IDs in a vocab table."
      },
      {
        question: "Is 1 word always 1 token?",
        weak: "Yes.",
        strong: "No. Words split into multiple tokens (e.g., tokenization → token, ization) based on spelling frequency."
      },
      {
        question: "Why does token count matter?",
        weak: "Because model has limits.",
        strong: "It bounds API cost, latency, context windows, RAG retrieval boundaries, and agent loop budgets."
      }
    ],
    deepDiveCards: [
      {
        title: "Vocabulary Size Trade-offs",
        description: "Proving space-compute trade-offs. Larger vocabularies (e.g. 128k) shrink sequences but enlarge model parameter footprints."
      },
      {
        title: "BPE Implementation",
        description: "Understanding BPE merges, UTF-8 fallbacks, and decoder character reconstruction mechanisms."
      },
      {
        title: "Cost & Performance Defense",
        description: "Explaining how token counts impact latency, API bills, and RAG retrieval limits."
      }
    ],
    conceptsCovered: [
      "Vocabulary Trade-offs",
      "BPE Merges",
      "UTF-8 Fallback",
      "Cost Models",
      "Context Defense"
    ],
    productionRelevance: [
      {
        title: "Engineering Defense",
        description: "Be prepared to justify tokenizer selections and prompt compression algorithms to senior system architects."
      }
    ],
    projectPreview: {
      title: "Tokenizer Visualizer Studio",
      description: "An interactive workspace simulator that tests your tokenization system design skills.",
      architecture: "Design Prompt → System Constraints → Model Select → Cost Report",
      techStack: ["TypeScript", "React", "Design Simulator"]
    },
    misconceptions: [
      {
        misconception: "System design interviews only cover prompt engineering.",
        reality: "Senior interviews probe deep into tokenization, GPU VRAM constraints, and pipeline performance."
      }
    ],
    interviewQA: [
      {
        question: "Explain the space-compute trade-off of changing the tokenizer vocabulary size.",
        answer: "A larger vocabulary size decreases the sequence length (fewer tokens to represent a prompt), reducing the quadratic attention computational cost. However, it requires a larger embedding layer (Vocabulary Size x Hidden Dimension) which increases the model's parameter size and memory footprint."
      },
      {
        question: "Why do emojis or non-English text consume significantly more tokens?",
        answer: "Tokenizers are typically pre-trained on corpora heavily weighted toward English. Emojis and non-English scripts are underrepresented in the vocabulary, forcing the tokenizer to split them into multiple byte-level tokens, inflating the sequence size."
      },
      {
        question: "How do tokenizers handle completely unknown characters?",
        answer: "Modern subword tokenizers fallback to byte-level representations. Characters not present in the vocabulary are converted to their raw UTF-8 bytes (such as byte tokens <0x4E>), ensuring the tokenizer never encounters a hard Out-Of-Vocabulary crash."
      }
    ],
    takeaways: [
      "Be ready to discuss vocabulary size space-compute tradeoffs.",
      "Understand why multilingual inputs and emojis trigger token inflation.",
      "Connect tokenization details directly to system cost and latency metrics."
    ],
    labTasks: [
      "Record your 30-second tokenization defense speech.",
      "Simulate Q&A reviews in the workspace.",
      "Benchmark weak vs strong system design answers."
    ],
    moveNextChecklist: [
      "I can deliver the 30-second tokenization summary.",
      "I understand space-compute embeddings tradeoffs.",
      "I know how to resolve OOV byte fallbacks."
    ]
  }
};
