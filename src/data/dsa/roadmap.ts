export type DsaContentStatus = "complete" | "in-progress" | "coming-soon";

export interface DsaTrack {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: DsaContentStatus;
  modules: string[]; // references to DsaModule.slug
}

export interface DsaModule {
  id: string;
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  status: DsaContentStatus;
  submodules: string[]; // references to DsaSubmodule.slug
  projects: string[];
  labs: string[];
}

export interface DsaSubmodule {
  id: string;
  slug: string;
  trackSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  status: DsaContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
  problemsMapping: string[];
}

export const dsaTracks: Record<string, DsaTrack> = {
  "foundations-linear": {
    id: "foundations-linear",
    slug: "foundations-linear",
    title: "Track 1: Foundations & Linear Structures",
    description: "Establish big-O scaling metrics and master contiguous sequences, lists, stacks, and queues.",
    status: "complete",
    modules: [
      "complexity-analysis",
      "arrays",
      "strings",
      "linked-lists",
      "stack",
      "queue",
      "hash-tables",
      "advanced-arrays",
      "stack-monotonic",
      "queue-monotonic"
    ]
  },
  "hierarchical-search": {
    id: "hierarchical-search",
    slug: "hierarchical-search",
    title: "Track 2: Hierarchical structures & Search Optimization",
    description: "Explore recursive trees, search space partitioning, graphs routing, and greedy scheduling choices.",
    status: "complete",
    modules: [
      "binary-search",
      "trees",
      "heap",
      "graphs",
      "tries",
      "backtracking",
      "greedy",
      "binary-search-patterns",
      "heap-priority-queue",
      "greedy-patterns"
    ]
  },
  "algorithmic-mastery": {
    id: "algorithmic-mastery",
    slug: "algorithmic-mastery",
    title: "Track 3: Advanced Optimization & Bit Masking",
    description: "Dive into tabular Dynamic Programming, register bit operations, and range query Segment trees.",
    status: "in-progress",
    modules: [
      "dynamic-programming",
      "bit-manipulation",
      "advanced-dsa",
      "trie-patterns",
      "bit-manipulation-patterns",
      "interview-preparation"
    ]
  }
};

export const dsaModules: Record<string, DsaModule> = {
  // Existing Complete/In-Progress Modules mapped from pillars
  "complexity-analysis": {
    id: "complexity-analysis",
    slug: "complexity-analysis",
    trackSlug: "foundations-linear",
    title: "Complexity Analysis",
    description: "Master Big O, Big Theta, and Big Omega asymptotic scales.",
    status: "complete",
    submodules: ["asymptotic-bounds", "amortized-runtime"],
    projects: ["Complexity Benchmark Tool"],
    labs: ["Complexity Visualizer"]
  },
  "arrays": {
    id: "arrays",
    slug: "arrays",
    trackSlug: "foundations-linear",
    title: "Arrays & Contiguous Memory",
    description: "Master linear sequences, slicing boundaries, and sliding segment limits.",
    status: "complete",
    submodules: ["two-pointers-bounds", "sliding-window-contiguous", "prefix-sums-queries"],
    projects: ["Dynamic Expense Analyzer"],
    labs: ["Array Explorer"]
  },
  "strings": {
    id: "strings",
    slug: "strings",
    trackSlug: "foundations-linear",
    title: "String Hashing",
    description: "Perform fast character array scans and hashing lookups.",
    status: "complete",
    submodules: ["anagram-matching", "palindrome-checking"],
    projects: ["DNA Mutator"],
    labs: ["String Visualizer"]
  },
  "linked-lists": {
    id: "linked-lists",
    slug: "linked-lists",
    trackSlug: "foundations-linear",
    title: "Linked Lists",
    description: "Build dynamic lists, pointer redirections, and cycle checks.",
    status: "complete",
    submodules: ["list-reversal", "cycle-intersection"],
    projects: ["Undo/Redo History Tracker"],
    labs: ["Linked List Drawer"]
  },
  "stack": {
    id: "stack",
    slug: "stack",
    trackSlug: "foundations-linear",
    title: "Stack Operations",
    description: "Master Last-In-First-Out call frames and balanced boundaries.",
    status: "complete",
    submodules: ["nested-parentheses", "expression-evaluation"],
    projects: ["Compiler Bracket Validator"],
    labs: ["Call Stack Simulator"]
  },
  "queue": {
    id: "queue",
    slug: "queue",
    trackSlug: "foundations-linear",
    title: "Queue Scheduling",
    description: "Explore Circular arrays, FIFO schedulers, and monotonic queues.",
    status: "complete",
    submodules: ["circular-buffers", "monotonic-bounds"],
    projects: ["Task Runner Dispatcher"],
    labs: ["Queue Visualizer"]
  },
  "hash-tables": {
    id: "hash-tables",
    slug: "hash-tables",
    trackSlug: "foundations-linear",
    title: "Hash Tables",
    description: "Resolve key collisions and optimize key lookups in O(1) time.",
    status: "complete",
    submodules: ["chaining-addressing", "lru-foundations"],
    projects: ["Cache Storage Router"],
    labs: ["Hash Map Inspector"]
  },
  "binary-search": {
    id: "binary-search",
    slug: "binary-search",
    trackSlug: "hierarchical-search",
    title: "Binary Search",
    description: "Divide sorted search bounds logarithmically on each step.",
    status: "complete",
    submodules: ["classic-search", "answer-space-reduction"],
    projects: ["Logarithmic Asset Finder"],
    labs: ["Binary Search Bounds Tracer"]
  },
  "trees": {
    id: "trees",
    slug: "trees",
    trackSlug: "hierarchical-search",
    title: "Binary & Search Trees",
    description: "Traverse node structures and validate tree boundaries.",
    status: "complete",
    submodules: ["tree-traversals", "bst-balancing", "lca-finder"],
    projects: ["DOM Node Parser"],
    labs: ["BST Traversal Visualizer"]
  },
  "heap": {
    id: "heap",
    slug: "heap",
    trackSlug: "hierarchical-search",
    title: "Priority Heaps",
    description: "Optimize dynamic stream min/max extractions.",
    status: "complete",
    submodules: ["min-max-heaps", "k-way-merge-priority"],
    projects: ["Real-time Stream Scheduler"],
    labs: ["Heap Sort Playground"]
  },
  "graphs": {
    id: "graphs",
    slug: "graphs",
    trackSlug: "hierarchical-search",
    title: "Graphs traversals & Routing",
    description: "Scan node matrices and relax path edge weights.",
    status: "complete",
    submodules: ["bfs-dfs-grids", "topological-sorting", "shortest-paths"],
    projects: ["GPS Navigation Route Finder"],
    labs: ["Graph Pathfinder Visualizer"]
  },
  "backtracking": {
    id: "backtracking",
    slug: "backtracking",
    trackSlug: "hierarchical-search",
    title: "Backtracking Search Space",
    description: "Search recursive decision trees and prune invalid paths.",
    status: "complete",
    submodules: ["combinations-subsets", "grid-solvers"],
    projects: ["Sudoku Solver Engine"],
    labs: ["Backtracking Tree Tracer"]
  },
  "dynamic-programming": {
    id: "dynamic-programming",
    slug: "dynamic-programming",
    trackSlug: "algorithmic-mastery",
    title: "Dynamic Programming",
    description: "Resolve duplicate calculations using memoized matrices.",
    status: "in-progress",
    submodules: ["memoization-tabulation", "knapsack-coin-change", "lcs-lis-sequences"],
    projects: ["String Diff Compilers"],
    labs: ["DP Matrix Visualizer"]
  },
  "greedy": {
    id: "greedy",
    slug: "greedy",
    trackSlug: "hierarchical-search",
    title: "Greedy Optimizations",
    description: "Process locally optimal intervals to minimize costs.",
    status: "complete",
    submodules: ["interval-greedy", "scheduling-huffman"],
    projects: ["Huffman Text Compressor"],
    labs: ["Interval Merger"]
  },
  "tries": {
    id: "tries",
    slug: "tries",
    trackSlug: "hierarchical-search",
    title: "Prefix Tries",
    description: "Retrieve strings using prefix characters chains.",
    status: "complete",
    submodules: ["trie-insert-search", "autocomplete-prefixes"],
    projects: ["Search Autocomplete Engine"],
    labs: ["Trie Builder Inspector"]
  },
  "bit-manipulation": {
    id: "bit-manipulation",
    slug: "bit-manipulation",
    trackSlug: "algorithmic-mastery",
    title: "Bitwise Register Operations",
    description: "Perform bitwise operations directly on registers.",
    status: "complete",
    submodules: ["bitwise-xor-cancels", "bit-masking-states"],
    projects: ["Bitwise Permissions Key manager"],
    labs: ["Registers Bit Shifter"]
  },

  // PLACEHOLDERS (Coming Soon)
  "advanced-arrays": {
    id: "advanced-arrays",
    slug: "advanced-arrays",
    trackSlug: "foundations-linear",
    title: "Advanced Arrays",
    description: "Difference Arrays, Cyclic Sort, and multi-dimensional coordinate maps.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "stack-monotonic": {
    id: "stack-monotonic",
    slug: "stack-monotonic",
    trackSlug: "foundations-linear",
    title: "Stack & Monotonic Stack",
    description: "Advanced index scans, histograms, and expressions evaluation parsers.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "queue-monotonic": {
    id: "queue-monotonic",
    slug: "queue-monotonic",
    trackSlug: "foundations-linear",
    title: "Queue & Monotonic Queue",
    description: "Double-ended queues and running range calculations.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "binary-search-patterns": {
    id: "binary-search-patterns",
    slug: "binary-search-patterns",
    trackSlug: "hierarchical-search",
    title: "Binary Search Patterns",
    description: "Bisect boundary thresholds and monotonic searches on answers.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "heap-priority-queue": {
    id: "heap-priority-queue",
    slug: "heap-priority-queue",
    trackSlug: "hierarchical-search",
    title: "Heap & Priority Queue",
    description: "Dynamic streaming medians and multi-list merges.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "greedy-patterns": {
    id: "greedy-patterns",
    slug: "greedy-patterns",
    trackSlug: "hierarchical-search",
    title: "Greedy Patterns",
    description: "Activity selections and job scheduling optimizations.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "trie-patterns": {
    id: "trie-patterns",
    slug: "trie-patterns",
    trackSlug: "algorithmic-mastery",
    title: "Trie Patterns",
    description: "Word search matrices and dictionary optimization lookups.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "bit-manipulation-patterns": {
    id: "bit-manipulation-patterns",
    slug: "bit-manipulation-patterns",
    trackSlug: "algorithmic-mastery",
    title: "Bit Manipulation Patterns",
    description: "Bitmask states representations and power sets generations.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "advanced-dsa": {
    id: "advanced-dsa",
    slug: "advanced-dsa",
    trackSlug: "algorithmic-mastery",
    title: "Advanced DSA",
    description: "Segment Trees, Fenwick Trees, Sparse Tables, and Sweep Line coordinate intersections.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  },
  "interview-preparation": {
    id: "interview-preparation",
    slug: "interview-preparation",
    trackSlug: "algorithmic-mastery",
    title: "Interview Preparation",
    description: "Mock simulators, company tracks, and behavioral defense questions.",
    status: "coming-soon",
    submodules: [],
    projects: [],
    labs: []
  }
};

export const dsaSubmodules: Record<string, DsaSubmodule> = {
  "asymptotic-bounds": {
    id: "asymptotic-bounds",
    slug: "asymptotic-bounds",
    trackSlug: "foundations-linear",
    moduleSlug: "complexity-analysis",
    title: "Asymptotic Bounds",
    description: "Master Big O upper limits, Big Omega lower limits, and Big Theta tight bounds.",
    status: "complete",
    whatYouWillLearn: ["Asymptotic limits definitions", "Analyzing loop growth curves", "Standard complexity scaling"],
    whyItMatters: "Provides a hardware-independent mathematical model to classify algorithm growth speed.",
    conceptsCovered: ["Big O", "Complexity", "Scaling"],
    problemsMapping: ["two-sum"]
  },
  "two-pointers-bounds": {
    id: "two-pointers-bounds",
    slug: "two-pointers-bounds",
    trackSlug: "foundations-linear",
    moduleSlug: "arrays",
    title: "Two Pointers Bounds",
    description: "Explore left-right pointer checks on sorted arrays.",
    status: "complete",
    whatYouWillLearn: ["Sorted target sums search", "Inward boundary shrink checks", "Two pointers array manipulation"],
    whyItMatters: "Eliminates nested O(N^2) loops, resolving matches in O(N) linear time.",
    conceptsCovered: ["Two Pointers", "Symmetry"],
    problemsMapping: ["two-sum-ii-input-array-is-sorted", "three-sum", "container-with-most-water"]
  }
};
