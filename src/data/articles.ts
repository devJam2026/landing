export interface ArticleSection {
  type: "heading" | "paragraph" | "code" | "list";
  text?: string;
  code?: string;
  language?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  iconName: "Cpu" | "Key" | "Layers" | "Globe" | "BookOpen" | "Terminal";
  isCyan: boolean;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "what-is-tokenization",
    title: "What is Tokenization?",
    description: "Learn how text is broken down into tokens, vocabulary indexes, and embeddings space for LLM input pipelines.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "LLM Basics",
    iconName: "Cpu",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "Tokenization is the foundational step of modern Natural Language Processing (NLP) and Large Language Models (LLMs). Before a neural network can process text, the text must be translated into a mathematical representation. This is done by breaking characters or words down into sub-units called 'tokens' and mapping them to integer IDs in a vocabulary list.",
      },
      {
        type: "heading",
        text: "Byte Pair Encoding (BPE)",
      },
      {
        type: "paragraph",
        text: "Most state-of-the-art LLMs (like GPT-4, Llama, and Mistral) utilize Byte Pair Encoding (BPE). BPE starts at the individual byte level and iteratively merges the most frequently occurring adjacent pairs of tokens in a corpus to form new subwords. This dynamic approach prevents the 'Out-Of-Vocabulary' (OOV) error because any unknown word can still be represented as individual characters or bytes.",
      },
      {
        type: "code",
        language: "python",
        code: `def get_stats(ids):
    counts = {}
    for pair in zip(ids, ids[1:]):
        counts[pair] = counts.get(pair, 0) + 1
    return counts

def merge(ids, pair, idx):
    newids = []
    i = 0
    while i < len(ids):
        if i < len(ids) - 1 and ids[i] == pair[0] and ids[i+1] == pair[1]:
            newids.append(idx)
            i += 2
        else:
            newids.append(ids[i])
            i += 1
    return newids`,
      },
      {
        type: "heading",
        text: "The Pipeline from Text to Tensor",
      },
      {
        type: "paragraph",
        text: "Once tokenized, the sequence of integer IDs undergoes several matrix transformations:",
      },
      {
        type: "list",
        items: [
          "Token IDs: A 1D tensor representing indices (e.g., [464, 2068, 318]).",
          "Embedding Lookup: Each token ID fetches a high-dimensional vector from an embedding matrix (W_e) of size (Vocab Size x Hidden Dimension).",
          "Positional Encoding: Vectors representing word positions are added to embedding vectors to give the model spatial context.",
          "Hidden States: These combined vectors are fed into the Transformer's self-attention blocks.",
        ],
      },
    ],
  },
  {
    slug: "how-attention-works",
    title: "How Attention Works?",
    description: "A comprehensive visual guide to Query, Key, and Value projections and causal masking operations inside transformers.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Transformers",
    iconName: "Key",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "The self-attention mechanism, introduced in the seminal paper 'Attention Is All You Need' (Vaswani et al., 2017), allows models to weigh the importance of different words in a sentence dynamically. Unlike recurrent architectures, self-attention processes all tokens in parallel, achieving significant performance speedups.",
      },
      {
        type: "heading",
        text: "Query, Key, and Value Matrices",
      },
      {
        type: "paragraph",
        text: "For every input vector, we project it into three spaces using trained weights matrices (W_Q, W_K, W_V) to produce Queries (Q), Keys (K), and Values (V):",
      },
      {
        type: "list",
        items: [
          "Query (Q): What the token is looking for.",
          "Key (K): What the token contains to match other queries.",
          "Value (V): The actual content information to extract.",
        ],
      },
      {
        type: "code",
        language: "python",
        code: `import numpy as np

def scaled_dot_product_attention(q, k, v, mask=None):
    d_k = q.shape[-1]
    scores = np.matmul(q, k.T) / np.sqrt(d_k)
    
    if mask is not None:
        scores += (mask * -1e9)  # Lower masked indices to near negative infinity
        
    attention_weights = softmax(scores, axis=-1)
    return np.matmul(attention_weights, v), attention_weights`,
      },
      {
        type: "heading",
        text: "Causal Masking",
      },
      {
        type: "paragraph",
        text: "In autoregressive decoder models (like GPT architectures), tokens are forbidden from looking ahead at future tokens. We apply a lower-triangular matrix filled with negative infinity for positions above the diagonal. When Softmax is computed, these future scores evaluate to zero attention weight.",
      },
    ],
  },
  {
    slug: "vector-databases-and-chunking",
    title: "Vector Databases & Chunking",
    description: "Optimize semantic search retrieval quality by evaluating overlapping character chunk splits and metadata keys.",
    date: "Jun 01, 2026",
    readTime: "10 min read",
    category: "RAG",
    iconName: "Layers",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "Retrieval-Augmented Generation (RAG) is the dominant architecture for grounding LLMs in custom database knowledge. To implement RAG, documents must be processed, embedded into high-dimensional vectors, and stored in dedicated databases like Pinecone, Milvus, Qdrant, or Chroma.",
      },
      {
        type: "heading",
        text: "The Importance of Chunking Strategies",
      },
      {
        type: "paragraph",
        text: "LLMs have finite context windows. Feeding a 100-page PDF directly is slow and expensive. Therefore, we split documents into smaller chunks. The optimal strategy balances coherence against context limit:",
      },
      {
        type: "list",
        items: [
          "Fixed-size chunking: Splits at exact character counts (e.g. 500 characters). Simple but splits sentences mid-thought.",
          "Recursive character chunking: Evaluates markdown syntax, double newlines, single newlines, and space characters sequentially to find natural splits.",
          "Semantic chunking: Computes sentence-level embedding similarities and groups sentences together until similarity drops below a threshold.",
        ],
      },
      {
        type: "code",
        language: "javascript",
        code: `// Recursive Chunking logic preview
function recursiveSplit(text, separators, maxChunkSize, overlap = 50) {
  let chunks = [];
  // Split on paragraph boundaries, sentences, or word spaces
  // then merge items back under maxChunkSize limits...
  return chunks;
}`,
      },
      {
        type: "heading",
        text: "Retrieval Metrics",
      },
      {
        type: "paragraph",
        text: "Retrieved chunks are ranked using similarity functions like Cosine Similarity, Dot Product, or Euclidean Distance. Additionally, metadata filtering (e.g., matching client IDs or category tags) should be executed beforehand to narrow search spaces.",
      },
    ],
  },
  {
    slug: "micro-frontends-architecture",
    title: "Micro Frontends Architecture",
    description: "Design, build, federate, and scale decoupled user interface components using Next.js and Module Federation.",
    date: "May 10, 2026",
    readTime: "10 min read",
    category: "Frontend Architecture",
    iconName: "Globe",
    isCyan: true,
    content: [
      {
        type: "paragraph",
        text: "As frontend teams expand, monolithic codebases become major bottlenecks. Micro Frontend architecture splits a single web application into independent, decoupled micro-apps that can be developed, tested, and deployed individually by separate teams.",
      },
      {
        type: "heading",
        text: "Webpack / Rspack Module Federation",
      },
      {
        type: "paragraph",
        text: "Module Federation is the industry standard tool for runtime code integration. A host application can download compiled JavaScript components from a remote server dynamically at runtime without requiring a hard rebuild or version dependency updates.",
      },
      {
        type: "code",
        language: "javascript",
        code: `// webpack.config.js on Remote App
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "auth_app",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginForm": "./src/components/LoginForm.jsx",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};`,
      },
      {
        type: "heading",
        text: "Key Design Rules",
      },
      {
        type: "list",
        items: [
          "Zero Shared State in LocalStorage: Micro frontends should communicate via custom events or light messaging buses rather than tight context sharing.",
          "CSS Sandboxing: Utilize Tailwind prefixes, CSS modules, or Shadow DOM scopes to prevent styles from bleeding across micro applications.",
          "Graceful Degradation: If a remote server falls offline, the host must catch the network load failure and render fallback UI placeholders.",
        ],
      },
    ],
  },
  {
    slug: "rate-limiter-deep-dive",
    title: "Rate Limiter Deep Dive",
    description: "Design fault-tolerant rate limiting microservices capable of scaling to support millions of client requests.",
    date: "May 05, 2026",
    readTime: "12 min read",
    category: "System Design",
    iconName: "BookOpen",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "Rate limiters protect API gateways from Denial of Service (DoS) attacks, brute-force requests, and downstream service starvation. Designing them for high throughput requires low-latency databases like Redis.",
      },
      {
        type: "heading",
        text: "Algorithms Comparison",
      },
      {
        type: "list",
        items: [
          "Token Bucket: Refills tokens periodically. Allows traffic spikes up to the bucket capacity. Memory-efficient.",
          "Leaky Bucket: Requests are queued and processed at a constant leak rate. Smoothens traffic spikes but introduces latency.",
          "Sliding Window Log: Logs timestamps in a sorted set (ZSET) for every request. High precision but consumes extensive memory.",
        ],
      },
      {
        type: "code",
        language: "go",
        code: `// Token Bucket Rate Limiting implementation in Go
type TokenBucket struct {
    rate         float64 // tokens per second
    capacity     float64
    tokens       float64
    lastRefilled time.Time
    mu           sync.Mutex
}

func (tb *TokenBucket) Allow() bool {
    tb.mu.Lock()
    defer tb.mu.Unlock()
    
    now := time.Now()
    elapsed := now.Sub(tb.lastRefilled).Seconds()
    tb.tokens = math.Min(tb.capacity, tb.tokens+(elapsed*tb.rate))
    tb.lastRefilled = now
    
    if tb.tokens >= 1.0 {
        tb.tokens -= 1.0
        return true
    }
    return false
}`,
      },
      {
        type: "heading",
        text: "Distributed Bottlenecks",
      },
      {
        type: "paragraph",
        text: "In a clustered environment, race conditions can occur between checking the token count and decrementing it. To make these actions atomic, write Redis Lua scripts that execute inside Redis's single-threaded event loop.",
      },
    ],
  },
  {
    slug: "dockerizing-node-pipelines",
    title: "Dockerizing Node Pipelines",
    description: "Learn how to write multi-stage Dockerfiles, minimize container size, cache dependencies, and deploy zero-downtime builds.",
    date: "Jun 04, 2026",
    readTime: "7 min read",
    category: "DevOps",
    iconName: "Terminal",
    isCyan: true,
    content: [
      {
        type: "paragraph",
        text: "Running Node.js apps inside Docker containers ensures execution environment parity across local, staging, and production servers. However, default Docker layouts often result in bloated images containing unnecessary devDependencies.",
      },
      {
        type: "heading",
        text: "Multi-Stage Dockerfile",
      },
      {
        type: "paragraph",
        text: "Multi-stage builds separate the compilation stage (requiring Node modules and compilers) from the final runtime image (which only requires production assets). This minimizes the final image footprint.",
      },
      {
        type: "code",
        language: "dockerfile",
        code: `# Stage 1: Build dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
USER node
EXPOSE 3000
CMD ["npm", "start"]`,
      },
      {
        type: "heading",
        text: "Caching & Layers Optimization",
      },
      {
        type: "list",
        items: [
          "Copy package configurations first: By copying package.json and running 'npm ci' BEFORE copying source files, Docker caches the layer. Source updates won't force a dependency re-download.",
          "Use Alpine: The alpine base image reduces image size from ~1GB to ~100MB.",
          "Set non-root user: By executing 'USER node', we protect the host system from container breakout vulnerabilities.",
        ],
      },
    ],
  },
];
