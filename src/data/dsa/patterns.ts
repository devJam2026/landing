export interface DsaPattern {
  name: string;
  description: string;
  triggers: string[];
  indicators: string[];
  reasoning: string;
  leetcodeProblems: string[];
  slug?: string;
  complexity?: string;
  commonMistakes?: string[];
  roadmapModuleMapping?: string;
  status?: "complete" | "in-progress" | "coming-soon";
}

export const dsaPatterns: DsaPattern[] = [
  // Existing 6 enriched patterns
  {
    name: "Sliding Window",
    slug: "mastering-sliding-windows",
    description: "Maintains a sub-segment window over linear items (arrays/strings) to process contiguous values efficiently.",
    triggers: [
      "Find longest/shortest subarray satisfying a sum or size criteria",
      "Process contiguous chunks of arrays or characters",
      "Maximize or minimize values inside sub-segments"
    ],
    indicators: [
      "Contiguous sequence of elements required",
      "Input is an array or string",
      "Optimization criteria (min/max subarray)"
    ],
    reasoning: "Instead of rebuilding the sum or frequency of sub-segments on each index shift (which causes O(N^2) complexity), a sliding window keeps two boundaries and shifts them, adding new elements on the right and removing on the left to compute calculations in O(N).",
    leetcodeProblems: [
      "LC 3. Longest Substring Without Repeating Characters",
      "LC 209. Minimum Size Subarray Sum",
      "LC 76. Minimum Window Substring"
    ],
    complexity: "Time: O(N), Space: O(1) or O(K)",
    commonMistakes: ["Off-by-one errors in dynamic shrink loops", "Forgetting to update frequency map counters on deletions"],
    roadmapModuleMapping: "arrays",
    status: "complete"
  },
  {
    name: "Two Pointers",
    slug: "mastering-two-pointers",
    description: "Uses two pointer variables moving inward or at different speeds to solve matching bounds.",
    triggers: [
      "Find two numbers summing up to a target in a sorted collection",
      "Verify string symmetries (palindromes)",
      "Detect cycles or intersections in single-linked structures"
    ],
    indicators: [
      "Input is sorted (for inward pointers)",
      "Linked lists cycle checking",
      "Symmetry checks (palindromes)"
    ],
    reasoning: "Pointers move inward from both edges to evaluate sums without nested loops, or at different speeds (Tortoise & Hare) to catch links cycle overlaps efficiently in linear time and O(1) space.",
    leetcodeProblems: [
      "LC 167. Two Sum II - Input Array Is Sorted",
      "LC 15. 3Sum",
      "LC 141. Linked List Cycle"
    ],
    complexity: "Time: O(N), Space: O(1)",
    commonMistakes: ["Incrementing/decrementing pointers out of bounds", "Forgetting loop exit condition (left < right)"],
    roadmapModuleMapping: "arrays",
    status: "complete"
  },
  {
    name: "Binary Search",
    slug: "mastering-binary-search",
    description: "Divides sorted search bounds in half on each step, reducing logarithmic checks.",
    triggers: [
      "Find element in a sorted collection",
      "Search boundaries inside sorted rotated arrays",
      "Find the minimum capacity or speed threshold ('Search on Answer space')"
    ],
    indicators: [
      "Input collection is sorted",
      "Logarithmic search complexity constraint O(log N)",
      "Monotonic relationship (f(x) increases as x increases)"
    ],
    reasoning: "By checking the midpoint of the search interval and adjusting left or right boundaries, we divide the search space by 2 on each calculation step, resulting in O(log N) runtime.",
    leetcodeProblems: [
      "LC 704. Binary Search",
      "LC 33. Search in Rotated Sorted Array",
      "LC 1011. Capacity To Ship Packages Within D Days"
    ],
    complexity: "Time: O(log N), Space: O(1)",
    commonMistakes: ["Integer overflow on mid calculation: (left+right)/2", "Infinite loops due to incorrect pointer shrinkages"],
    roadmapModuleMapping: "binary-search",
    status: "complete"
  },
  {
    name: "Heap / Priority Queue",
    slug: "mastering-heaps",
    description: "Keeps elements ordered in a heap tree to fetch the minimum or maximum instantly in O(1) time.",
    triggers: [
      "Find the top k frequent or largest items in a stream",
      "Sort streams of changing values dynamically",
      "Merge multiple sorted lists or streams"
    ],
    indicators: [
      "Top K elements required",
      "Frequent min/max extractions",
      "Input is dynamic (elements are continually pushed and popped)"
    ],
    reasoning: "A min-heap or max-heap maintains parent-child ordering mathematically. Inserting takes O(log K) and fetching top takes O(1), making it much faster than re-sorting the list on each insertion.",
    leetcodeProblems: [
      "LC 215. Kth Largest Element in an Array",
      "LC 347. Top K Frequent Elements",
      "LC 23. Merge k Sorted Lists"
    ],
    complexity: "Time: O(N log K), Space: O(K)",
    commonMistakes: ["Using max-heap instead of min-heap to find top-K largest", "Forgetting heap update calls when item priority changes"],
    roadmapModuleMapping: "heap",
    status: "complete"
  },
  {
    name: "Graph Traversals (BFS / DFS)",
    slug: "graph-traversals-visualized",
    description: "Flood fills node nodes layer-by-layer (BFS queue) or traverses deep paths recursively (DFS stack).",
    triggers: [
      "Find shortest path in an unweighted grid or network",
      "Count connected components or islands in a coordinate map",
      "Traverse trees or maps to check path connectivity"
    ],
    indicators: [
      "Input is a grid matrix, adjacency list, or tree nodes",
      "Shortest path search (BFS)",
      "Connected components check (DFS)"
    ],
    reasoning: "BFS uses a Queue to scan nodes level-by-level, making it ideal to find the shortest path in unweighted networks. DFS uses a Stack (or recursion) to explore paths deep to their terminal ends before backtracking, which is ideal to scan connected boundaries.",
    leetcodeProblems: [
      "LC 200. Number of Islands",
      "LC 133. Clone Graph",
      "LC 1091. Shortest Path in Binary Matrix"
    ],
    complexity: "Time: O(V + E), Space: O(V)",
    commonMistakes: ["Missing 'visited' checks leading to infinite recursion stack overflows", "Confusing grid coordinates (row, col) updates"],
    roadmapModuleMapping: "graphs",
    status: "complete"
  },
  {
    name: "Dynamic Programming",
    slug: "mastering-dynamic-programming",
    description: "Stores calculations of smaller subproblems in tables to resolve duplicates.",
    triggers: [
      "Maximize profit or minimize cost based on recursive choices",
      "Count total possible combinations to reach a target state",
      "Resolve overlapping recursive steps (e.g. Fibonacci, Knapsacks)"
    ],
    indicators: [
      "Optimal substructure (optimal solution contains optimal solutions to subproblems)",
      "Overlapping subproblems (recursion tree calculates identical subproblems)",
      "Decision mapping (at each index, we choose to take or skip)"
    ],
    reasoning: "Dynamic Programming builds solutions incrementally. Top-down caching (memoization) or bottom-up tabulation maps subproblems to a table, reducing runtime from exponential O(2^N) to linear O(N) or polynomial O(N*W).",
    leetcodeProblems: [
      "LC 70. Climbing Stairs",
      "LC 322. Coin Change",
      "LC 1143. Longest Common Subsequence"
    ],
    complexity: "Time: O(N*W), Space: O(N*W) or O(N)",
    commonMistakes: ["Incorrect base case configuration", "Miscalculating subproblem dependency orders in bottom-up tabulation loops"],
    roadmapModuleMapping: "dynamic-programming",
    status: "complete"
  },

  // 20 Added missing interview patterns
  {
    name: "Difference Array",
    slug: "difference-array",
    description: "Enables range modifications on arrays in O(1) time by storing delta shifts at endpoints.",
    triggers: ["Apply offline range updates repeatedly", "Multiple range queries offsets shifts"],
    indicators: ["Offline index updates", "Constant O(1) range modification requirement"],
    reasoning: "Instead of scanning the range [L, R] to add V (which takes O(N)), update diff[L] += V and diff[R+1] -= V. The final prefix sum yields the modified array.",
    leetcodeProblems: ["LC 1109. Corporate Flight Bookings", "LC 370. Range Addition"],
    complexity: "Time: O(1) per update, O(N) reconstruction; Space: O(N)",
    commonMistakes: ["Out of bounds on index R+1 check", "Applying changes before sorting index steps"],
    roadmapModuleMapping: "advanced-arrays",
    status: "complete"
  },
  {
    name: "Dutch National Flag",
    slug: "dutch-national-flag",
    description: "Three-way partitioning technique to sort elements in-place in linear time.",
    triggers: ["Sort arrays containing three distinct keys", "Partition colors or pivots"],
    indicators: ["In-place sort requirement", "Input has exactly 3 unique values"],
    reasoning: "Place three pointers: low, mid, and high. Swap 0s to the low pointer, 2s to the high pointer, and increment mid for 1s, sorting in a single pass.",
    leetcodeProblems: ["LC 75. Sort Colors"],
    complexity: "Time: O(N), Space: O(1)",
    commonMistakes: ["Incrementing mid pointer incorrectly after swapping with high"],
    roadmapModuleMapping: "advanced-arrays",
    status: "complete"
  },
  {
    name: "Cyclic Sort",
    slug: "cyclic-sort",
    description: "In-place array sorting when input values are in a bounded contiguous range.",
    triggers: ["Find missing numbers or duplicates in range 1 to N"],
    indicators: ["Array values bounded by index sizes", "O(N) time with O(1) space constraint"],
    reasoning: "Since values are bounded in range [1, N], each value belongs at index `val - 1`. Iterate and swap each value with the element at its target index until matching.",
    leetcodeProblems: ["LC 268. Missing Number", "LC 448. Find All Numbers Disappeared"],
    complexity: "Time: O(N), Space: O(1)",
    commonMistakes: ["Infinite loops due to swapping identical values repeatedly"],
    roadmapModuleMapping: "advanced-arrays",
    status: "complete"
  },
  {
    name: "Lower Bound",
    slug: "lower-bound",
    description: "Find the first element in a sorted collection that is not less than the target value.",
    triggers: ["Find first occurrence index", "Compute insertion point"],
    indicators: ["Collection is sorted", "Duplicate values allowed"],
    reasoning: "Adjust binary search limits. If target <= mid, set right = mid (do not discard mid), else set left = mid + 1, isolating the boundary.",
    leetcodeProblems: ["LC 34. Find First and Last Position of Element"],
    complexity: "Time: O(log N), Space: O(1)",
    commonMistakes: ["Off-by-one errors in left/right index termination"],
    roadmapModuleMapping: "binary-search-patterns",
    status: "complete"
  },
  {
    name: "Upper Bound",
    slug: "upper-bound",
    description: "Find the first element in a sorted collection that is strictly greater than the target value.",
    triggers: ["Find last occurrence index", "Find upper bounding offsets"],
    indicators: ["Collection is sorted", "Duplicate values allowed"],
    reasoning: "Adjust binary search limits. If target < mid, set right = mid, else set left = mid + 1, isolating the element right of target.",
    leetcodeProblems: ["LC 34. Find First and Last Position of Element"],
    complexity: "Time: O(log N), Space: O(1)",
    commonMistakes: ["Confusing lower bound insertion logic with upper bound"],
    roadmapModuleMapping: "binary-search-patterns",
    status: "complete"
  },
  {
    name: "Fast Slow Pointer",
    slug: "fast-slow-pointer",
    description: "Uses two pointers moving at different speeds (1 step vs 2 steps) to evaluate nodes connectivity.",
    triggers: ["Cycle detection in linked structures", "Find middle node of a list"],
    indicators: ["Linked lists", "Cyclic paths"],
    reasoning: "The fast pointer moves twice as fast as the slow pointer. If a cycle exists, the fast pointer will eventually wrap around and catch the slow pointer.",
    leetcodeProblems: ["LC 141. Linked List Cycle", "LC 142. Linked List Cycle II"],
    complexity: "Time: O(N), Space: O(1)",
    commonMistakes: ["NullPointer checking exceptions on fast.next.next"],
    roadmapModuleMapping: "linked-list-patterns",
    status: "complete"
  },
  {
    name: "Cycle Detection",
    slug: "cycle-detection",
    description: "Verify node cycle overlaps inside lists or graphs.",
    triggers: ["Check if graph is cyclic", "Validate DAG correctness"],
    indicators: ["Cyclic connections check", "Dependency structures"],
    reasoning: "Use slow/fast pointers for lists, or vis/visiting state tracking in graph DFS/BFS nodes to check if a node connects back to an active parent path.",
    leetcodeProblems: ["LC 141. Linked List Cycle", "LC 207. Course Schedule"],
    complexity: "Time: O(V + E) or O(N), Space: O(V) or O(1)",
    commonMistakes: ["Forgetting to reset visiting states on backtracking paths"],
    roadmapModuleMapping: "linked-list-patterns",
    status: "complete"
  },
  {
    name: "Disjoint Set Union",
    slug: "disjoint-set-union",
    description: "Maintains partitions of elements and checks subset connections in constant time.",
    triggers: ["Count connected components dynamically", "Detect undirected graph cycles"],
    indicators: ["Dynamic edge unions", "Equivalence groups partitioning"],
    reasoning: "Store parent index trees. Implement path compression during find queries to flatten tree heights, keeping operations running in O(alpha(N)) time.",
    leetcodeProblems: ["LC 684. Redundant Connection", "LC 547. Number of Provinces"],
    complexity: "Time: O(alpha(N)), Space: O(N)",
    commonMistakes: ["Using basic find without path compression (causes O(N) chain degradation)"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Floyd Warshall",
    slug: "floyd-warshall",
    description: "Computes all-pairs shortest paths on weighted graphs in cubic time.",
    triggers: ["Find shortest paths between all pairs of nodes"],
    indicators: ["Small graph sizes V <= 400", "All-pairs queries"],
    reasoning: "DP matrix relaxation: for every intermediate node k, relax paths from u to v: grid[u][v] = min(grid[u][v], grid[u][k] + grid[k][v]).",
    leetcodeProblems: ["LC 1334. Find the City With the Smallest Number of Neighbors"],
    complexity: "Time: O(V^3), Space: O(V^2)",
    commonMistakes: ["Incorrect order of nested loops (k loop must be the outermost loop)"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "MST",
    slug: "minimum-spanning-tree",
    description: "Connect all vertices using edges of minimum total weight without cycles.",
    triggers: ["Minimum wire length connecting all components", "MST construction"],
    indicators: ["Weighted undirected graphs", "Full connectivity requirements"],
    reasoning: "Kruskal's sorts edges and unions vertices dynamically (using DSU). Prim's starts at a node and expands outward using a priority min-heap.",
    leetcodeProblems: ["LC 1584. Min Cost to Connect All Points"],
    complexity: "Time: O(E log V) or O(E log E), Space: O(V)",
    commonMistakes: ["Not sorting edges before running Kruskal's unions"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "SCC / Tarjan",
    slug: "strongly-connected-components",
    description: "Find maximal subgraphs where every vertex is reachable from every other vertex.",
    triggers: ["Locate closed cycle dependencies", "SCC components counts"],
    indicators: ["Directed graphs", "Cycle partitioning"],
    reasoning: "Tarjan's uses depth-first searches, tracking low-link discovery steps. Kosaraju's runs DFS on transposes of graphs in two phases.",
    leetcodeProblems: ["LC 1192. Critical Connections in a Network"],
    complexity: "Time: O(V + E), Space: O(V)",
    commonMistakes: ["Forgetting stack pop resets when SCC is isolated"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Interval DP",
    slug: "interval-dp",
    description: "Solve dynamic programming subproblems on intervals, expanding from size 1 to N.",
    triggers: ["Burst balloons", "Matrix chain multiplications"],
    indicators: ["Merge actions on sub-segments", "Optimal substructure within boundaries"],
    reasoning: "Compute answers for all subarrays of length L. Merge sub-segments at split point k to build larger intervals iteratively.",
    leetcodeProblems: ["LC 312. Burst Balloons"],
    complexity: "Time: O(N^3), Space: O(N^2)",
    commonMistakes: ["Filling loops out of chronological scale dependency orders"],
    roadmapModuleMapping: "dynamic-programming",
    status: "complete"
  },
  {
    name: "State Machine DP",
    slug: "state-machine-dp",
    description: "DP where the choice at each step depends on transitioning between specific system states.",
    triggers: ["Buy/sell stocks with cooldowns or transaction fees"],
    indicators: ["Explicit transaction states transitions", "Daily state rules"],
    reasoning: "Maintain state registers (e.g. hold[i], sold[i], reset[i]) and evaluate transition choices dynamically: hold[i] = max(hold[i-1], reset[i-1] - price).",
    leetcodeProblems: ["LC 309. Best Time to Buy and Sell Stock with Cooldown"],
    complexity: "Time: O(N), Space: O(1) or O(N)",
    commonMistakes: ["Incorrect index offset references on cooldown days"],
    roadmapModuleMapping: "dynamic-programming",
    status: "complete"
  },
  {
    name: "Digit DP",
    slug: "digit-dp",
    description: "Count numbers satisfying a criteria in a range [A, B] by building digits recursively.",
    triggers: ["Count integers with unique digit sums"],
    indicators: ["Very large range boundaries (10^18)", "Digit-level rules"],
    reasoning: "Run DFS from left-to-right digit indices. Track tight constraints flags to decide if choices are bounded by the digit limits of B.",
    leetcodeProblems: ["LC 233. Number of Digit One"],
    complexity: "Time: O(len * states), Space: O(len * states)",
    commonMistakes: ["Forgetting constraint boundary resets inside caches"],
    roadmapModuleMapping: "dynamic-programming",
    status: "complete"
  },
  {
    name: "Segment Tree",
    slug: "segment-tree",
    description: "Tree structure storing interval results to answer range queries and updates in logarithmic time.",
    triggers: ["Frequent range sum/min queries with point updates"],
    indicators: ["Dynamic array mutations", "Logarithmic range calculations checks"],
    reasoning: "A binary tree where each node represents an array segment. Querying/updating requires updating paths of height H, running in O(log N).",
    leetcodeProblems: ["LC 307. Range Sum Query - Mutable"],
    complexity: "Time: O(log N) query/update, O(N) build; Space: O(N)",
    commonMistakes: ["Incorrect array resizing allocations (tree array size must be 4*N)"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Fenwick Tree",
    slug: "fenwick-tree",
    description: "Array-based structure storing dynamic cumulative sums using bit alignments.",
    triggers: ["Dynamic prefix sum queries with point updates"],
    indicators: ["Single element mutations", "Prefix ranges evaluations"],
    reasoning: "Also known as Binary Indexed Tree (BIT). Query and update indices using bitwise steps (`index += index & -index`) to run bounds in O(log N).",
    leetcodeProblems: ["LC 307. Range Sum Query - Mutable"],
    complexity: "Time: O(log N), Space: O(N)",
    commonMistakes: ["Using index 0 (Fenwick trees require 1-based indexing)"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Sparse Table",
    slug: "sparse-table",
    description: "Pre-calculates values on power-of-two intervals to answer static range queries in constant O(1) time.",
    triggers: ["Static Range Minimum Queries (RMQ)"],
    indicators: ["No updates on source array allowed", "Constant O(1) query time constraint"],
    reasoning: "Pre-compute answers for all intervals of length 2^j. Queries split the range [L, R] into two overlapping intervals of length 2^k, returning `min(table[L][k], table[R - 2^k + 1][k])`.",
    leetcodeProblems: ["LC 239. Sliding Window Maximum"],
    complexity: "Time: O(N log N) build, O(1) query; Space: O(N log N)",
    commonMistakes: ["Using sparse tables on arrays that require point updates"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Sweep Line",
    slug: "sweep-line",
    description: "Solves geometric coordinate intersections by sorting event endpoints and sweeping a line across the space.",
    triggers: ["Overlapping intervals check", "Skyline intersections"],
    indicators: ["Coordinates mapping", "Interval merges"],
    reasoning: "Sort interval endpoints (start/end events) chronologically. Sweep left-to-right, updating active boundary lists dynamically.",
    leetcodeProblems: ["LC 218. The Skyline Problem"],
    complexity: "Time: O(N log N), Space: O(N)",
    commonMistakes: ["Incorrect sorting tie-breaker rules for overlapping start/end points"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Meet In The Middle",
    slug: "meet-in-the-middle",
    description: "Search space splitting optimization for subset sums where input size is too large for simple recursion.",
    triggers: ["Subset sum on sizes N <= 40"],
    indicators: ["Exponential growth boundaries", "Pruning filters"],
    reasoning: "Split the search set into two halves of size N/2. Generate all subsets for both halves (2^(N/2) steps each), sort one half, and binary search target complement sums.",
    leetcodeProblems: ["LC 1755. Closest Subsequence Sum"],
    complexity: "Time: O(2^(N/2) * N), Space: O(2^(N/2))",
    commonMistakes: ["Incorrect array splitting allocations causing overlapping indices"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  },
  {
    name: "Quickselect",
    slug: "quickselect",
    description: "Find the Kth smallest/largest element in an unsorted array in linear time.",
    triggers: ["Kth element extraction without sorting"],
    indicators: ["Linear average runtimes requirements", "In-place modifications allowed"],
    reasoning: "Divide-and-conquer partition strategy: select a pivot, partition the array around it, and recurse only into the side containing index K, bypassing the other side.",
    leetcodeProblems: ["LC 215. Kth Largest Element in an Array"],
    complexity: "Time: O(N) average, O(N^2) worst case; Space: O(1)",
    commonMistakes: ["Choosing poor pivots (e.g. always first element) leading to quadratic degradation on sorted arrays"],
    roadmapModuleMapping: "advanced-dsa",
    status: "complete"
  }
];
