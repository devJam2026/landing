export type AIConceptNote = {
  slug: string;
  title: string;
  overview: string;
  whyExists: string;
  intuition: string;
  visualization: string;
  complexity: string;
  productionUseCases: string[];
};

export const aiConcepts: Record<string, AIConceptNote> = {
  "tokenization": {
    slug: "tokenization",
    title: "Tokenization Mechanics",
    overview: "Tokenization decomposes raw character strings into discrete chunks (tokens), translating characters into indices within a model's pre-trained vocabulary database.",
    whyExists: "Neural networks process vectors of numbers, not character strings. Tokenization bridges the gap between text characters and integer embeddings table indices.",
    intuition: "Think of cutting a long word into common prefixes and suffixes. Instead of storing 'deconstruction' as 14 individual letters, a tokenizer splits it into ['de', 'construct', 'ion'], reducing the memory storage footprint.",
    visualization: `
Text: "Tokenizing is fun"
Tokens: [ "Token", "izing", " is", " fun" ]
IDs:    [  48292,   12903,   310,   4902 ]
    `,
    complexity: "| Algorithmic Step | Complexity | Notes |\n| :--- | :---: | :--- |\n| BPE Vocabulary Build | O(V * N) | Iteratively merges frequent character byte pairs |\n| Character ID Lookup | O(L) | Linear lookup based on input string length |\n| Token Inflation Ratio | 1 word ≈ 1.3 tokens | Average inflation factor in English |",
    productionUseCases: [
      "Token Budget Protection: Calculating API bill pricing before executing model completion loops.",
      "Input Boundary Controls: Truncating prompts prior to context limits overflow errors."
    ]
  },
  "context-engineering": {
    slug: "context-engineering",
    title: "Context Window Diagnostics",
    overview: "Context Engineering deals with token budget allocations, prompt formatting layouts, sliding windows, and conversation summary memory states.",
    whyExists: "Models have hard token constraints. Unmanaged prompt growth throws API error codes or triggers abrupt chat history losses.",
    intuition: "Think of an executive summary pad. You cannot copy a complete 500-page book into your notes; instead, you maintain bullet lists of the core decisions and details, updating them as new data arrives.",
    visualization: `
Total Context Window Capacity (e.g. 8192 tokens):
[ System Prompt (10%) ][ Active Search Context (60%) ][ Chat History (25%) ][ Buffer (5%) ]
    `,
    complexity: "| Operations Strategy | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| Sliding History Truncation | O(N) | O(N) | Shifting older messages from context |\n| Recursive Summarization Memory| O(N) | O(1) | Condensing messages into a single summary block |",
    productionUseCases: [
      "RAG Document Ingestion: Trimming documents to fit inside input prompt contexts.",
      "Conversational Agents: Restricting chat history arrays to prevent early memory exhaustion."
    ]
  },
  "sampling-generation": {
    slug: "sampling-generation",
    title: "LLM Decoding & Sampling Mechanics",
    overview: "Sampling parameters determine how next-token candidates are filtered and selected from output logits distributions.",
    whyExists: "Without sampling parameters, models would always select the single most likely token, yielding repetitive, robotic completions.",
    intuition: "Think of ordering food. A Temperature of 0 means you order the single most popular dish every time. A high Temperature means you look at the entire menu, choosing dishes based on random probability sweeps.",
    visualization: `
Logits Probability Scale (Raw vs Scaled Temperature):
  Tokens:    [ "cat", "dog", "house" ]
  Raw Logits: [  4.5,   2.1,    0.2  ]
  Temp = 0.2: [ 0.98,  0.02,   0.00  ] (High peak, predictable choice)
  Temp = 1.0: [ 0.70,  0.20,   0.10  ] (Framer distribution, creative choice)
    `,
    complexity: "| Hyperparameter | Operations Role | Target Value Ranges |\n| :--- | :--- | :---: |\n| **Temperature** | Scales logit divisions prior to Softmax | `0.0` (deterministic) to `1.2` (creative) |\n| **Top-p (Nucleus)**| Restricts vocabulary choice to cumulative probability threshold | `0.0` to `1.0` (standard `0.9` removes outlier words) |\n| **Penalties** | Throttles probability of already selected words | `-2.0` to `2.0` (prevents repetitive loop statements) |",
    productionUseCases: [
      "Structured Schemas: Tuning Temperature to 0 to guarantee type-safe JSON returns.",
      "Creative Writing: Setting Temperature to 0.8+ to generate diverse marketing layouts."
    ]
  }
};
