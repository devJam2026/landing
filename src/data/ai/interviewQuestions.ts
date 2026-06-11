export type AIInterviewQuestion = {
  id: string;
  moduleSlug: string;
  question: string;
  answer: string;
};

export const aiInterviewQuestions: Record<string, AIInterviewQuestion[]> = {
  "tokenization": [
    {
      id: "tok-q1",
      moduleSlug: "tokenization",
      question: "What is token inflation, and how does it impact enterprise AI application budgets?",
      answer: "Token inflation occurs when character patterns split into more tokens than expected. For example, non-English text or specialized character strings (like code or emojis) may require multiple tokens per word compared to standard English (which averages 1.3 tokens per word). This inflates prompt payload sizes, increasing model request latency and API billing costs, while exhausting the context window limit faster."
    },
    {
      id: "tok-q2",
      moduleSlug: "tokenization",
      question: "Why do tokenizers struggle with mathematical equations or spelling reversals?",
      answer: "Tokenizers split strings based on pre-trained byte pair distributions. They do not read spelling letters individually. A word like 'antigravity' might be a single token, so the model cannot easily count its letters. For numbers, tokenizers may split '100482' into arbitrary chunks like ['10', '048', '2'], making arithmetic predictions difficult without custom character tokenization setups."
    }
  ],
  "context-engineering": [
    {
      id: "ctx-q1",
      moduleSlug: "context-engineering",
      question: "How does the 'Lost in the Middle' retrieval degradation impact RAG context windows, and how do you mitigate it?",
      answer: "LLMs tend to pay more attention to information placed at the very beginning and very end of prompt contexts, while ignoring tokens in the middle. In long-context RAG pipelines, placing retrieved documents in random orders degrades retrieval accuracy. To mitigate this, system designers rerank documents, placing the most relevant contexts at the top or bottom of prompts, or trim context to include only high-relevance chunks."
    }
  ],
  "sampling-generation": [
    {
      id: "smpl-q1",
      moduleSlug: "sampling-generation",
      question: "Why does Temp = 0 sometimes return different completions on concurrent API calls?",
      answer: "While Temp = 0 forces the model to select the greedily most probable token, multi-GPU clusters execute matrix updates concurrently. Minor variations in floating-point operations scheduling (non-associative float addition) can slightly alter logits outputs, causing differences in top token picks at critical choice junctions."
    }
  ]
};
