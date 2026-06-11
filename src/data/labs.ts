export interface Lab {
  name: string;
  slug: string;
  status: "Active" | "In Progress" | "Completed";
  pillar: string;
  goal: string;
  tech: string[];
  github: string;
  isCyan: boolean;
}

export const labs: Lab[] = [
  {
    name: "Tokenizer Visualizer",
    slug: "tokenizer-visualizer",
    status: "Active",
    pillar: "AI Engineering",
    goal: "Understand how BPE (Byte Pair Encoding) converts text into token IDs, visual offsets, and context window percentages for LLM ingestion.",
    tech: ["TypeScript", "React 19", "Tailwind CSS"],
    github: "https://github.com/devJam2026/tokenizer-visualizer-studio",
    isCyan: false,
  },
  {
    name: "React Rendering Visualizer",
    slug: "react-rendering-visualizer",
    status: "Active",
    pillar: "Frontend Mastery",
    goal: "Visualize standard React component rendering flow, state synchronization, memoized nodes, and virtual DOM tree reconciliation.",
    tech: ["React 19", "TypeScript", "Framer Motion"],
    github: "https://github.com/devJam2026/landing",
    isCyan: true,
  },
  {
    name: "System Design Simulator",
    slug: "system-design-simulator",
    status: "In Progress",
    pillar: "System Design",
    goal: "Simulate distributed client request flow, database replication lag, CDN caching, and rate limiting actions under heavy traffic load.",
    tech: ["TypeScript", "React", "Canvas API"],
    github: "https://github.com/devJam2026",
    isCyan: false,
  },
  {
    name: "CI/CD Pipeline Visualizer",
    slug: "cicd-pipeline-visualizer",
    status: "Active",
    pillar: "DevOps & CI/CD",
    goal: "Visualize continuous integration steps, including environment setup, dependencies caching, lint checks, unit tests, and production CD deployment flow.",
    tech: ["GitHub Actions", "Docker", "YAML"],
    github: "https://github.com/devJam2026/landing",
    isCyan: true,
  },
  {
    name: "Big-O Visualizer",
    slug: "big-o-visualizer",
    status: "In Progress",
    pillar: "DSA",
    goal: "Visualize execution time and space complexity growth scales O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n) dynamically with step limits.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/devJam2026",
    isCyan: false,
  },
  {
    name: "Array Playground",
    slug: "array-playground",
    status: "In Progress",
    pillar: "DSA",
    goal: "Step through and animate array manipulations, two-pointers traversal, prefix sums, and sliding window boundaries.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/devJam2026",
    isCyan: true,
  },
  {
    name: "Binary Tree Visualizer",
    slug: "binary-tree-visualizer",
    status: "In Progress",
    pillar: "DSA",
    goal: "Animate DFS traversals (inorder, preorder, postorder) and BFS level order scanning step-by-step on SVG-rendered trees.",
    tech: ["React", "TypeScript", "SVG API"],
    github: "https://github.com/devJam2026",
    isCyan: false,
  },
  {
    name: "Graph Playground",
    slug: "graph-playground",
    status: "In Progress",
    pillar: "DSA",
    goal: "Visualize grid-based searches representing island counts, adjacency expansions, and pathfinding tracking.",
    tech: ["React", "TypeScript", "Canvas API"],
    github: "https://github.com/devJam2026",
    isCyan: true,
  },
  {
    name: "DP Visualizer",
    slug: "dp-visualizer",
    status: "In Progress",
    pillar: "DSA",
    goal: "Compare recursive memoization trees vs. tabulated multi-dimensional grids to calculate subproblems overlap.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/devJam2026",
    isCyan: false,
  },
];
