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
];
