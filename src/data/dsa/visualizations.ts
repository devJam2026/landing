export interface VisualizationStep {
  label: string;
  explanation: string;
  state: Record<string, unknown>;
}

export interface DsaVisualization {
  id: string;
  slug: string;
  title: string;
  conceptSlug: string;
  description: string;
  steps: VisualizationStep[];
}

export const dsaVisualizations: Record<string, DsaVisualization> = {
  "binary-search-bounds": {
    id: "binary-search-bounds",
    slug: "binary-search-bounds",
    title: "Binary Search Bounds",
    conceptSlug: "binary-search",
    description: "Visualizes pointer bounds movement and midpoint selections on a sorted array search space.",
    steps: [
      {
        label: "Initialize boundaries",
        explanation: "Set left boundary at index 0 and right boundary at the last element (index 6). Target value is 60.",
        state: { array: [10, 20, 30, 40, 50, 60, 70], left: 0, right: 6, mid: null, target: 60 }
      },
      {
        label: "Compute midpoint",
        explanation: "Find mid = (0 + 6) / 2 = 3. The value at index 3 is 40. Since 40 < 60, target must be in the right half.",
        state: { array: [10, 20, 30, 40, 50, 60, 70], left: 0, right: 6, mid: 3, target: 60 }
      },
      {
        label: "Shift left boundary",
        explanation: "Set left = mid + 1 = 4. Right boundary remains at index 6.",
        state: { array: [10, 20, 30, 40, 50, 60, 70], left: 4, right: 6, mid: null, target: 60 }
      },
      {
        label: "Compute second midpoint",
        explanation: "Find mid = (4 + 6) / 2 = 5. The value at index 5 is 60. This matches the target! Return index 5.",
        state: { array: [10, 20, 30, 40, 50, 60, 70], left: 4, right: 6, mid: 5, target: 60 }
      }
    ]
  },
  "sliding-window-bounds": {
    id: "sliding-window-bounds",
    slug: "sliding-window-bounds",
    title: "Sliding Window Expansion/Shrink",
    conceptSlug: "arrays",
    description: "Visualizes left and right boundary shifts as a contiguous window slides across linear elements.",
    steps: [
      {
        label: "Initialize pointers",
        explanation: "Set left = 0, right = 0. Target subarray sum >= 7. Current sum = 2.",
        state: { array: [2, 3, 1, 2, 4, 3], left: 0, right: 0, sum: 2, minLen: Infinity }
      },
      {
        label: "Expand right bounds",
        explanation: "Expand window by moving right to index 3. Current window is [2, 3, 1, 2], sum = 8 >= 7.",
        state: { array: [2, 3, 1, 2, 4, 3], left: 0, right: 3, sum: 8, minLen: 4 }
      },
      {
        label: "Shrink window",
        explanation: "Shrink window from left to check smaller subsegments. Move left to 1. Window is [3, 1, 2], sum = 6 < 7.",
        state: { array: [2, 3, 1, 2, 4, 3], left: 1, right: 3, sum: 6, minLen: 4 }
      },
      {
        label: "Shift right bounds again",
        explanation: "Expand right to index 4. Window is [3, 1, 2, 4], sum = 10 >= 7.",
        state: { array: [2, 3, 1, 2, 4, 3], left: 1, right: 4, sum: 10, minLen: 4 }
      }
    ]
  },
  "two-pointer-movement": {
    id: "two-pointer-movement",
    slug: "two-pointer-movement",
    title: "Two Pointer Movement",
    conceptSlug: "linked-lists",
    description: "Visualizes the speed difference between fast and slow pointers in cycle detection problems.",
    steps: [
      {
        label: "Initialize slow & fast pointers",
        explanation: "Place both slow and fast pointers at the head of the linked list.",
        state: { list: [1, 2, 3, 4, 5], slow: 0, fast: 0, cycleIndex: 2 }
      },
      {
        label: "First movement step",
        explanation: "Slow moves 1 step to index 1. Fast moves 2 steps to index 2.",
        state: { list: [1, 2, 3, 4, 5], slow: 1, fast: 2, cycleIndex: 2 }
      },
      {
        label: "Second movement step",
        explanation: "Slow moves to index 2. Fast moves 2 steps to index 4.",
        state: { list: [1, 2, 3, 4, 5], slow: 2, fast: 4, cycleIndex: 2 }
      },
      {
        label: "Meet inside cycle",
        explanation: "Slow moves to index 3. Fast wraps around cycle from index 4 to index 3. They meet! Cycle detected.",
        state: { list: [1, 2, 3, 4, 5], slow: 3, fast: 3, cycleIndex: 2 }
      }
    ]
  },
  "prefix-sum-hashmap": {
    id: "prefix-sum-hashmap",
    slug: "prefix-sum-hashmap",
    title: "Prefix Sum HashMap",
    conceptSlug: "hash-tables",
    description: "Visualizes running prefix sums stored in a map to locate target difference subarrays.",
    steps: [
      {
        label: "Initialize variables",
        explanation: "Set running sum = 0. Seed hashmap with prefix sum 0 at index -1.",
        state: { array: [1, -1, 3], currentSum: 0, map: { 0: -1 }, i: 0, count: 0 }
      },
      {
        label: "Process element 1",
        explanation: "At index 0 (val = 1). Running sum = 0 + 1 = 1. Store sum in map {0: -1, 1: 0}.",
        state: { array: [1, -1, 3], currentSum: 1, map: { 0: -1, 1: 0 }, i: 0, count: 0 }
      },
      {
        label: "Process element -1",
        explanation: "At index 1 (val = -1). Running sum = 1 + (-1) = 0. Sum 0 already exists in map! Increment subarray count.",
        state: { array: [1, -1, 3], currentSum: 0, map: { 0: -1, 1: 0 }, i: 1, count: 1 }
      }
    ]
  },
  "monotonic-stack": {
    id: "monotonic-stack",
    slug: "monotonic-stack",
    title: "Monotonic Stack",
    conceptSlug: "stack",
    description: "Visualizes how elements are popped off the stack to maintain a strictly decreasing order of heights.",
    steps: [
      {
        label: "Initialize stack",
        explanation: "Start with an empty stack. We will process array heights [2, 1, 5].",
        state: { heights: [2, 1, 5], stack: [], current: 0 }
      },
      {
        label: "Push height 2",
        explanation: "Stack is empty, so push index 0 (height 2). Stack = [0].",
        state: { heights: [2, 1, 5], stack: [0], current: 0 }
      },
      {
        label: "Push height 1",
        explanation: "At index 1 (height 1). Since 1 < 2, the monotonic decreasing order is maintained. Push index 1. Stack = [0, 1].",
        state: { heights: [2, 1, 5], stack: [0, 1], current: 1 }
      },
      {
        label: "Pop higher elements",
        explanation: "At index 2 (height 5). 5 > 1, so pop index 1. 5 > 2, so pop index 0. Push index 2. Stack = [2].",
        state: { heights: [2, 1, 5], stack: [2], current: 2 }
      }
    ]
  },
  "monotonic-queue": {
    id: "monotonic-queue",
    slug: "monotonic-queue",
    title: "Monotonic Queue",
    conceptSlug: "queue",
    description: "Visualizes element additions and evictions in a deque to maintain a monotonic descending values list.",
    steps: [
      {
        label: "Process value 1",
        explanation: "Push index 0 (val 1) to deque. Deque = [0].",
        state: { array: [1, 3, -1], deque: [0], current: 0 }
      },
      {
        label: "Evict smaller from back",
        explanation: "Next is index 1 (val 3). 3 > 1, so pop index 0 from back. Push index 1. Deque = [1].",
        state: { array: [1, 3, -1], deque: [1], current: 1 }
      },
      {
        label: "Push smaller to back",
        explanation: "Next is index 2 (val -1). -1 < 3, so push to back. Deque = [1, 2].",
        state: { array: [1, 3, -1], deque: [1, 2], current: 2 }
      }
    ]
  },
  "bfs-grid-search": {
    id: "bfs-grid-search",
    slug: "bfs-grid-search",
    title: "BFS Grid Search",
    conceptSlug: "graphs",
    description: "Visualizes grid exploration where nodes are visited in concentric layers.",
    steps: [
      {
        label: "Enqueue start cell",
        explanation: "Add coordinate (0,0) to queue. Mark as visited.",
        state: { grid: [["S", 0], [0, "E"]], queue: [[0, 0]], visited: ["0,0"] }
      },
      {
        label: "Explore neighbors",
        explanation: "Dequeue (0,0). Enqueue neighbors (0,1) and (1,0). Mark both visited.",
        state: { grid: [["S", "*"], ["*", "E"]], queue: [[0, 1], [1, 0]], visited: ["0,0", "0,1", "1,0"] }
      },
      {
        label: "Reach target cell",
        explanation: "Dequeue (0,1). Explore neighbor (1,1) which is target. Return path length.",
        state: { grid: [["S", "*"], ["*", "E*"]], queue: [[1, 0], [1, 1]], visited: ["0,0", "0,1", "1,0", "1,1"] }
      }
    ]
  },
  "dfs-tree-traversal": {
    id: "dfs-tree-traversal",
    slug: "dfs-tree-traversal",
    title: "DFS Tree Traversal",
    conceptSlug: "trees",
    description: "Visualizes depth-first node visits using a recursion stack.",
    steps: [
      {
        label: "Visit root node",
        explanation: "Push root node 1 to recursion stack. Visit node 1.",
        state: { visited: [1], stack: [1] }
      },
      {
        label: "Traverse left subtree",
        explanation: "Push left child 2 to stack. Visit node 2.",
        state: { visited: [1, 2], stack: [1, 2] }
      },
      {
        label: "Backtrack to root",
        explanation: "Pop node 2 from stack since it is a leaf. Backtrack to node 1.",
        state: { visited: [1, 2], stack: [1] }
      },
      {
        label: "Traverse right child",
        explanation: "Push right child 3 to stack. Visit node 3.",
        state: { visited: [1, 2, 3], stack: [1, 3] }
      }
    ]
  },
  "topological-sort": {
    id: "topological-sort",
    slug: "topological-sort",
    title: "Topological Sort",
    conceptSlug: "topological-sort-placeholder", // placeholder concept slug
    description: "Visualizes task ordering resolving dependencies in directed acyclic graphs.",
    steps: [
      {
        label: "Compute in-degrees",
        explanation: "Initialize in-degree array for courses: 0, 1. Edge 0 -> 1 exists. Course 0 has 0 in-degree, course 1 has 1.",
        state: { inDegree: { 0: 0, 1: 1 }, queue: [0], order: [] }
      },
      {
        label: "Process node 0",
        explanation: "Pop 0, add to order list. Decrement neighbor course 1's in-degree to 0. Enqueue 1.",
        state: { inDegree: { 0: 0, 1: 0 }, queue: [1], order: [0] }
      },
      {
        label: "Process node 1",
        explanation: "Pop 1, add to order list. Order list is [0, 1]. Success.",
        state: { inDegree: { 0: 0, 1: 0 }, queue: [], order: [0, 1] }
      }
    ]
  },
  "union-find": {
    id: "union-find",
    slug: "union-find",
    title: "Union Find",
    conceptSlug: "union-find-placeholder",
    description: "Visualizes subset merges and path compression representatives tracking.",
    steps: [
      {
        label: "Initialize parent pointers",
        explanation: "Set parent of each node to point to itself.",
        state: { parent: [0, 1, 2, 3], rank: [1, 1, 1, 1] }
      },
      {
        label: "Union elements (0, 1)",
        explanation: "Join subsets containing 0 and 1. Parent of 1 becomes 0.",
        state: { parent: [0, 0, 2, 3], rank: [2, 1, 1, 1] }
      },
      {
        label: "Union elements (2, 3)",
        explanation: "Join subsets containing 2 and 3. Parent of 3 becomes 2.",
        state: { parent: [0, 0, 2, 2], rank: [2, 1, 2, 1] }
      },
      {
        label: "Union subsets representatives",
        explanation: "Union(0, 2). Representative root of 0 is 0. Representative root of 2 is 2. Set parent of 2 to 0.",
        state: { parent: [0, 0, 0, 2], rank: [3, 1, 2, 1] }
      }
    ]
  },
  "dijkstra-relaxation": {
    id: "dijkstra-relaxation",
    slug: "dijkstra-relaxation",
    title: "Dijkstra Relaxation",
    conceptSlug: "dijkstra-placeholder",
    description: "Visualizes path cost relaxations using a min priority queue.",
    steps: [
      {
        label: "Initialize distances",
        explanation: "Set start node distance to 0, all other nodes to Infinity. Push {node: 0, dist: 0} to heap.",
        state: { distances: { 0: 0, 1: Infinity, 2: Infinity }, popped: null }
      },
      {
        label: "Relax node 0 neighbors",
        explanation: "Pop node 0. Edge 0 -> 1 (weight 4) relax cost: dist[1] = 4. Edge 0 -> 2 (weight 8) relax cost: dist[2] = 8.",
        state: { distances: { 0: 0, 1: 4, 2: 8 }, popped: 0 }
      },
      {
        label: "Relax node 1 neighbors",
        explanation: "Pop node 1 (distance 4). Edge 1 -> 2 (weight 2) relax cost: 4 + 2 = 6 < 8. Update dist[2] to 6.",
        state: { distances: { 0: 0, 1: 4, 2: 6 }, popped: 1 }
      }
    ]
  },
  "lru-cache-vis": {
    id: "lru-cache-vis",
    slug: "lru-cache-vis",
    title: "LRU Cache Map & List",
    conceptSlug: "lru-placeholder",
    description: "Visualizes node placement updates in a doubly linked list on read/write hits.",
    steps: [
      {
        label: "Initialize Cache",
        explanation: "Capacity = 2. Empty doubly linked list and hashmap.",
        state: { capacity: 2, list: [], map: {} }
      },
      {
        label: "Put Key 1",
        explanation: "Insert key 1 with value A at head. Store map key pointer. List = [1].",
        state: { capacity: 2, list: [1], map: { 1: "node1" } }
      },
      {
        label: "Put Key 2",
        explanation: "Insert key 2 with value B at head. List = [2, 1]. Map = {1: 'node1', 2: 'node2'}.",
        state: { capacity: 2, list: [2, 1], map: { 1: "node1", 2: "node2" } }
      },
      {
        label: "Get Key 1 (Hit & Promote)",
        explanation: "Access key 1. Move Key 1 node to head since it is most recently used. List = [1, 2].",
        state: { capacity: 2, list: [1, 2], map: { 1: "node1", 2: "node2" } }
      }
    ]
  },
  "trie-search": {
    id: "trie-search",
    slug: "trie-search",
    title: "Trie Search",
    conceptSlug: "trie",
    description: "Visualizes prefix character checking traversing down trie nodes.",
    steps: [
      {
        label: "Insert 'cat'",
        explanation: "Insert characters 'c', 'a', 't' node paths stemming from the root.",
        state: { root: { c: { a: { t: { isEnd: true } } } }, current: "root" }
      },
      {
        label: "Search character 'c'",
        explanation: "Path 'c' exists from root. Move search focus pointer down to child node 'c'.",
        state: { root: { c: { a: { t: { isEnd: true } } } }, current: "c" }
      },
      {
        label: "Search character 'a'",
        explanation: "Path 'a' exists from node 'c'. Move focus down to child node 'a'.",
        state: { root: { c: { a: { t: { isEnd: true } } } }, current: "c.a" }
      }
    ]
  },
  "segment-tree-query": {
    id: "segment-tree-query",
    slug: "segment-tree-query",
    title: "Segment Tree Range Query",
    conceptSlug: "advanced-dsa",
    description: "Visualizes segment node overlaps during range sum lookups.",
    steps: [
      {
        label: "Build tree representation",
        explanation: "Construct segment nodes representing range intervals. Root represents [0, 3] sum = 10.",
        state: { segments: { "[0,3]": 10, "[0,1]": 4, "[2,3]": 6 }, query: [1, 3] }
      },
      {
        label: "Check query intersection",
        explanation: "Query range [1, 3] partially overlaps left child [0, 1] and fully overlaps right child [2, 3]. Split queries.",
        state: { segments: { "[0,3]": 10, "[0,1]": 4, "[2,3]": 6 }, current: "[0,3]" }
      },
      {
        label: "Extract values and sum",
        explanation: "Fetch intersection sums: segment [1, 1] val 3 + segment [2, 3] val 6. Total = 9.",
        state: { segments: { "[0,3]": 10, "[0,1]": 4, "[2,3]": 6 }, result: 9 }
      }
    ]
  },
  "dp-table-fill": {
    id: "dp-table-fill",
    slug: "dp-table-fill",
    title: "DP Table Fill (LCS)",
    conceptSlug: "dynamic-programming",
    description: "Visualizes grid tabulation filling cells based on match transitions.",
    steps: [
      {
        label: "Initialize DP grid",
        explanation: "Create (M+1) x (N+1) table filled with 0s. Let s1 = 'abc', s2 = 'ac'.",
        state: { s1: "abc", s2: "ac", table: [[0,0,0],[0,0,0],[0,0,0],[0,0,0]] }
      },
      {
        label: "Match character 'a'",
        explanation: "Match s1[0]='a' and s2[0]='a'. Cell (1,1) = 1 + diag(0,0) = 1.",
        state: { s1: "abc", s2: "ac", table: [[0,0,0],[0,1,1],[0,1,1],[0,1,1]] }
      },
      {
        label: "Match character 'c'",
        explanation: "Match s1[2]='c' and s2[1]='c'. Cell (3,2) = 1 + diag(2,1) = 2. Max subsequence size is 2.",
        state: { s1: "abc", s2: "ac", table: [[0,0,0],[0,1,1],[0,1,1],[0,1,2]] }
      }
    ]
  }
};
