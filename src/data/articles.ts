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
  {
    slug: "mastering-sliding-windows",
    title: "Mastering Sliding Windows",
    description: "Optimize sub-array searches and substring boundaries from O(N^2) to O(N) complexity with moving boundary pointers.",
    date: "Jun 08, 2026",
    readTime: "8 min read",
    category: "DSA",
    iconName: "Layers",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "The sliding window pattern is used to reduce nested loops ($O(N^2)$) to a single pass ($O(N)$) when processing contiguous sequences of arrays or strings. The window is defined by two boundaries: a left pointer and a right pointer.",
      },
      {
        type: "heading",
        text: "Fixed vs Variable Sliding Window",
      },
      {
        type: "paragraph",
        text: "In a fixed window, the difference between the right and left pointers is constant. In a variable window, the boundaries expand or shrink based on constraints, such as unique character limits.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function minSubArrayLen(target, nums) {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}`,
      },
    ],
  },
  {
    slug: "graph-traversals-visualized",
    title: "Graph Traversals Visualized",
    description: "Deconstruct node processing orders in BFS and DFS grids with visual coordinate mapping.",
    date: "Jun 10, 2026",
    readTime: "9 min read",
    category: "DSA",
    iconName: "Globe",
    isCyan: true,
    content: [
      {
        type: "paragraph",
        text: "Depth First Search (DFS) and Breadth First Search (BFS) are the fundamental algorithms used to traverse trees and graphs. In a grid layout, DFS uses a recursion stack to deep-dive into paths, while BFS uses a queue to expand outward layer-by-layer.",
      },
      {
        type: "heading",
        text: "DFS Grid Code Structure",
      },
      {
        type: "code",
        language: "python",
        code: `def dfs(grid, r, c, visited):
    if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]):
        return
    if grid[r][c] == 0 or (r, c) in visited:
        return
        
    visited.add((r, c))
    # Traverse neighbors (Up, Down, Left, Right)
    dfs(grid, r-1, c, visited)
    dfs(grid, r+1, c, visited)
    dfs(grid, r, c-1, visited)
    dfs(grid, r, c+1, visited)`,
      },
    ],
  },
  {
    slug: "mastering-two-pointers",
    title: "Mastering Two Pointers",
    description: "Learn how to optimize linear search intervals and matching bounds from O(N^2) to O(N) using inward or different speed pointers.",
    date: "Jun 11, 2026",
    readTime: "8 min read",
    category: "DSA",
    iconName: "BookOpen",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "The Two Pointers pattern is one of the most efficient techniques to process sorted arrays or lists. By maintaining two index variables that traverse the collection concurrently, we can eliminate nested loops and perform checks in linear time.",
      },
      {
        type: "heading",
        text: "Inward-Moving Pointers (Sorted Arrays)",
      },
      {
        type: "paragraph",
        text: "When an array is sorted, we can initialize one pointer at the start (0) and another at the end (len - 1). Depending on the sum or conditions, we increment the left pointer or decrement the right pointer to narrow search bounds.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            return [left + 1, right + 1]; // 1-based indexing
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}`,
      },
      {
        type: "heading",
        text: "Fast & Slow Pointers (Linked Lists)",
      },
      {
        type: "paragraph",
        text: "In cyclic structures or linked lists, we can move one pointer twice as fast as the other (Fast = 2x, Slow = 1x). If a cycle exists, the fast pointer will eventually catch up and meet the slow pointer.",
      },
    ],
  },
  {
    slug: "mastering-binary-search",
    title: "Mastering Binary Search",
    description: "Go beyond basic search; learn to apply binary search on answer spaces and rotated intervals in O(log N) runtime.",
    date: "Jun 11, 2026",
    readTime: "9 min read",
    category: "DSA",
    iconName: "Terminal",
    isCyan: true,
    content: [
      {
        type: "paragraph",
        text: "Binary Search is a divide-and-conquer strategy that finds the position of a target value within a sorted collection. By dividing the search interval in half on each step, we achieve logarithmic O(log N) time complexity.",
      },
      {
        type: "heading",
        text: "Search on Answer Space (Optimization Problems)",
      },
      {
        type: "paragraph",
        text: "Binary search can be applied to non-array inputs where the answer space is monotonic (i.e., if x is possible, all values > x are also possible). Examples include finding the minimum speed required to eat bananas or the minimum capacity to ship cargo.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function shipWithinDays(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canShip(weights, days, mid)) {
            right = mid; // Try smaller capacity
        } else {
            left = mid + 1; // Increase capacity
        }
    }
    return left;
}`,
      },
      {
        type: "heading",
        text: "Common Boundaries Mistakes",
      },
      {
        type: "list",
        items: [
          "Avoid integer overflow when calculating midpoint: use left + Math.floor((right - left) / 2).",
          "Ensure loop terminates: be careful with while (left <= right) vs while (left < right).",
          "Verify bounds shift: always update pointers with mid + 1 or mid - 1 to prevent infinite loops.",
        ],
      },
    ],
  },
  {
    slug: "mastering-heaps",
    title: "Mastering Heaps & Priority Queues",
    description: "Understand binary heap structures, dynamic streams, and how to extract min/max items in O(log K) time.",
    date: "Jun 12, 2026",
    readTime: "8 min read",
    category: "DSA",
    iconName: "Layers",
    isCyan: false,
    content: [
      {
        type: "paragraph",
        text: "Heaps (or Priority Queues) are specialized tree-based data structures that satisfy the heap property: in a min-heap, the parent key is always smaller than or equal to child keys. This allows fetching the minimum element in O(1) time.",
      },
      {
        type: "heading",
        text: "Tracking Top-K Frequent Elements",
      },
      {
        type: "paragraph",
        text: "When dealing with data streams where we continually push items and need to retrieve the top-K largest or most frequent, a min-heap of size K is highly optimal. By keeping only K elements in the heap, we perform insertions in O(log K) rather than sorting the entire list.",
      },
      {
        type: "code",
        language: "javascript",
        code: `// Simulating heap push and pop for top K elements
class MinHeap {
    constructor() { this.data = []; }
    push(val) {
        this.data.push(val);
        this.upHeap(this.data.length - 1);
    }
    pop() {
        const min = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this.downHeap(0);
        }
        return min;
    }
}`,
      },
    ],
  },
  {
    slug: "mastering-dynamic-programming",
    title: "Mastering Dynamic Programming",
    description: "Learn to build recurrence relations, design top-down memoization, and write bottom-up tabulation solutions.",
    date: "Jun 12, 2026",
    readTime: "11 min read",
    category: "DSA",
    iconName: "Cpu",
    isCyan: true,
    content: [
      {
        type: "paragraph",
        text: "Dynamic Programming (DP) is an algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems. It is applicable when subproblems overlap recursively, allowing us to cache results and avoid redundant work.",
      },
      {
        type: "heading",
        text: "Top-Down (Memoization) vs Bottom-Up (Tabulation)",
      },
      {
        type: "paragraph",
        text: "Top-Down DP starts with the main problem and recursively breaks it down, storing solved subproblem states in a dictionary or array (memo). Bottom-Up DP starts from the base cases and iteratively fills up a state table (tabulation).",
      },
      {
        type: "code",
        language: "javascript",
        code: `// Coin Change: Bottom-Up Tabulation O(N * amount)
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      },
      {
        type: "heading",
        text: "The 3 Steps to Solve Any DP Problem",
      },
      {
        type: "list",
        items: [
          "Define the state: What do the DP table indices represent? (e.g., dp[i] is the minimum coins to make amount i).",
          "Formulate the recurrence relation: How does the current state relate to previous states? (e.g., dp[i] = min(dp[i - coin] + 1)).",
          "Identify base cases: What are the simplest states that require no calculation? (e.g., dp[0] = 0).",
        ],
      },
    ],
  },
];
