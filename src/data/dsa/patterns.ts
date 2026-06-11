export interface DsaPattern {
  name: string;
  description: string;
  triggers: string[];
  indicators: string[];
  reasoning: string;
  leetcodeProblems: string[];
  slug?: string;
}

export const dsaPatterns: DsaPattern[] = [
  {
    name: "Sliding Window",
    slug: "mastering-sliding-windows",
    description: "Maintains a sub-segment window over linear items (arrays/strings) to process contiguous values efficiently.",
    triggers: [
      "Find longest/shortest subarray satisfying a sum or size criteria",
      "Process contiguous chunks of arrays or characters",
      "Maximize or minimize values inside sub-segments",
    ],
    indicators: [
      "Contiguous sequence of elements required",
      "Input is an array or string",
      "Optimization criteria (min/max subarray)",
    ],
    reasoning: "Instead of rebuilding the sum or frequency of sub-segments on each index shift (which causes O(N^2) complexity), a sliding window keeps two boundaries and shifts them, adding new elements on the right and removing on the left to compute calculations in O(N).",
    leetcodeProblems: [
      "LC 3. Longest Substring Without Repeating Characters",
      "LC 209. Minimum Size Subarray Sum",
      "LC 76. Minimum Window Substring",
    ],
  },
  {
    name: "Two Pointers",
    slug: "mastering-two-pointers",
    description: "Uses two pointer variables moving inward or at different speeds to solve matching bounds.",
    triggers: [
      "Find two numbers summing up to a target in a sorted collection",
      "Verify string symmetries (palindromes)",
      "Detect cycles or intersections in single-linked structures",
    ],
    indicators: [
      "Input is sorted (for inward pointers)",
      "Linked lists cycle checking",
      "Symmetry checks (palindromes)",
    ],
    reasoning: "Pointers move inward from both edges to evaluate sums without nested loops, or at different speeds (Tortoise & Hare) to catch links cycle overlaps efficiently in linear time and O(1) space.",
    leetcodeProblems: [
      "LC 167. Two Sum II - Input Array Is Sorted",
      "LC 15. 3Sum",
      "LC 141. Linked List Cycle",
    ],
  },
  {
    name: "Binary Search",
    slug: "mastering-binary-search",
    description: "Divides sorted search bounds in half on each step, reducing logarithmic checks.",
    triggers: [
      "Find element in a sorted collection",
      "Search boundaries inside sorted rotated arrays",
      "Find the minimum capacity or speed threshold ('Search on Answer space')",
    ],
    indicators: [
      "Input collection is sorted",
      "Logarithmic search complexity constraint O(log N)",
      "Monotonic relationship (f(x) increases as x increases)",
    ],
    reasoning: "By checking the midpoint of the search interval and adjusting left or right boundaries, we divide the search space by 2 on each calculation step, resulting in O(log N) runtime.",
    leetcodeProblems: [
      "LC 704. Binary Search",
      "LC 33. Search in Rotated Sorted Array",
      "LC 1011. Capacity To Ship Packages Within D Days",
    ],
  },
  {
    name: "Heap / Priority Queue",
    slug: "mastering-heaps",
    description: "Keeps elements ordered in a heap tree to fetch the minimum or maximum instantly in O(1) time.",
    triggers: [
      "Find the top k frequent or largest items in a stream",
      "Sort streams of changing values dynamically",
      "Merge multiple sorted lists or streams",
    ],
    indicators: [
      "Top K elements required",
      "Frequent min/max extractions",
      "Input is dynamic (elements are continually pushed and popped)",
    ],
    reasoning: "A min-heap or max-heap maintains parent-child ordering mathematically. Inserting takes O(log K) and fetching top takes O(1), making it much faster than re-sorting the list on each insertion.",
    leetcodeProblems: [
      "LC 215. Kth Largest Element in an Array",
      "LC 347. Top K Frequent Elements",
      "LC 23. Merge k Sorted Lists",
    ],
  },
  {
    name: "Graph Traversals (BFS / DFS)",
    slug: "graph-traversals-visualized",
    description: "Flood fills node nodes layer-by-layer (BFS queue) or traverses deep paths recursively (DFS stack).",
    triggers: [
      "Find shortest path in an unweighted grid or network",
      "Count connected components or islands in a coordinate map",
      "Traverse trees or maps to check path connectivity",
    ],
    indicators: [
      "Input is a grid matrix, adjacency list, or tree nodes",
      "Shortest path search (BFS)",
      "Connected components check (DFS)",
    ],
    reasoning: "BFS uses a Queue to scan nodes level-by-level, making it ideal to find the shortest path in unweighted networks. DFS uses a Stack (or recursion) to explore paths deep to their terminal ends before backtracking, which is ideal to scan connected boundaries.",
    leetcodeProblems: [
      "LC 200. Number of Islands",
      "LC 133. Clone Graph",
      "LC 1091. Shortest Path in Binary Matrix",
    ],
  },
  {
    name: "Dynamic Programming",
    slug: "mastering-dynamic-programming",
    description: "Stores calculations of smaller subproblems in tables to resolve duplicates.",
    triggers: [
      "Maximize profit or minimize cost based on recursive choices",
      "Count total possible combinations to reach a target state",
      "Resolve overlapping recursive steps (e.g. Fibonacci, Knapsacks)",
    ],
    indicators: [
      "Optimal substructure (optimal solution contains optimal solutions to subproblems)",
      "Overlapping subproblems (recursion tree calculates identical subproblems)",
      "Decision mapping (at each index, we choose to take or skip)",
    ],
    reasoning: "Dynamic Programming builds solutions incrementally. Top-down caching (memoization) or bottom-up tabulation maps subproblems to a table, reducing runtime from exponential O(2^N) to linear O(N) or polynomial O(N*W).",
    leetcodeProblems: [
      "LC 70. Climbing Stairs",
      "LC 322. Coin Change",
      "LC 1143. Longest Common Subsequence",
    ],
  },
];
