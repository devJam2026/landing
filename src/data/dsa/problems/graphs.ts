import { Problem } from "./types";

export const graphProblems: Problem[] = [
  {
    id: 8,
    title: "Number Of Islands",
    slug: "number-of-islands",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    starterCode: `function numIslands(grid) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function numIslandsCopy(grid) {
  const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));
  // Trace and duplicate islands. Requires extensive extra memory.
  return 0;
}`,
      language: "javascript",
      explanation: "Clone grid or track visited locations inside a secondary matrix, which duplicates memory footprint.",
    },
    better: {
      code: `function numIslandsBFS(grid) {
  if (!grid || grid.length === 0) return 0;
  let count = 0;
  // Breadth First Search using an explicit queue to traverse land coordinates...
  return count;
}`,
      language: "javascript",
      explanation: "BFS traversal of land cells: when a '1' is found, add coordinates to a queue, explore adjacent cells, and set them to '0'.",
    },
    optimal: {
      code: `function numIslandsOptimal(grid) {
  if (!grid || grid.length === 0) return 0;
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') {
      return;
    }
    grid[r][c] = '0'; // Sink island in-place
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}`,
      language: "javascript",
      explanation: "Linear scan: when a '1' is encountered, increment count and sink the entire connected island recursively using DFS in-place.",
    },
    timeComplexity: "O(M * N)",
    spaceComplexity: "O(M * N)",
    dryRun: [
      { line: 1, variables: { grid: '[["1", "1"], ["0", "0"]]', count: 0 }, description: "Scan grid. Found '1' at (0,0)." },
      { line: 2, variables: { count: 1, sinkingNode: "(0,0)" }, description: "Increment count. Trigger DFS. Sink (0,0) and (0,1)." },
      { line: 3, variables: { gridState: '[["0", "0"], ["0", "0"]]', returnVal: 1 }, description: "Scan complete. Return 1." }
    ],
    interviewDiscussion: [
      {
        question: "How do we prevent infinite loops when traversing graphs?",
        answer: "We either mutate visited cells in-place (e.g. setting '1' to '0' to sink land) or maintain an explicit visited hash set of coordinate strings.",
      }
    ],
  },
  {
    id: 9,
    title: "Clone Graph",
    slug: "clone-graph",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "Given a reference of a node in a connected undirected graph. Return a deep clone (clone) of the graph. Each node in the graph contains a value (int) and a list of its neighbors.",
    starterCode: `function cloneGraph(node) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function cloneSerialized(node) {
  // Serialize to JSON, then rebuild vertices. Fails if circular connections exist.
  return null;
}`,
      language: "javascript",
      explanation: "Attempting typical deep copies fails immediately on cyclic graph networks because self-referencing loops cause stack overflows.",
    },
    better: {
      code: `function cloneGraphBFS(node) {
  if (!node) return null;
  const map = new Map(); // old -> new
  const queue = [node];
  map.set(node, new Node(node.val));
  // Process queue, copying edges sequentially...
  return map.get(node);
}`,
      language: "javascript",
      explanation: "Iterative BFS: use a queue to traverse nodes and a map to match original node references to cloned node instances.",
    },
    optimal: {
      code: `function cloneGraphDFS(node, map = new Map()) {
  if (!node) return null;
  if (map.has(node)) return map.get(node);
  
  const clone = new Node(node.val);
  map.set(node, clone);
  
  for (const neighbor of node.neighbors) {
    clone.neighbors.push(cloneGraphDFS(neighbor, map));
  }
  return clone;
}`,
      language: "javascript",
      explanation: "Recursive DFS deep clone. Maintain a hash map to cache cloned vertices to resolve circular relationships.",
    },
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    dryRun: [
      { line: 1, variables: { node: "Node(1)", map: "Map{}" }, description: "Call cloneGraphDFS(Node 1)." },
      { line: 2, variables: { clone: "Clone(1)", mapState: "Map{Node 1 -> Clone 1}" }, description: "Create clone of Node 1, store in map." },
      { line: 3, variables: { neighbor: "Node(2)" }, description: "Recurse on Node 2 to link neighbors." }
    ],
    interviewDiscussion: [
      {
        question: "What is the role of the Map/Cache in deep cloning?",
        answer: "The map registers already cloned vertices. If we visit a node that is already in the map, we return its clone reference instead of creating a new one, avoiding infinite loops.",
      }
    ],
  },
  {
    id: 76,
    title: "Course Schedule",
    slug: "course-schedule",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
    starterCode: `function canFinish(numCourses, prerequisites) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function canFinishBrute(numCourses, prerequisites) {
  // Recursively trace all prerequisite pathways for every course.
  // Fails on cycles (infinite loops) unless tracked.
  return false;
}`,
      language: "javascript",
      explanation: "Scan paths. Runs in exponential time O(V^V) due to redundant backtracking pathways.",
    },
    better: {
      code: `function canFinishDFS(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
  }
  const visited = new Array(numCourses).fill(0); // 0=unvisited, 1=visiting, 2=visited
  
  function hasCycle(node) {
    if (visited[node] === 1) return true;
    if (visited[node] === 2) return false;
    visited[node] = 1;
    for (const neighbor of adj[node]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[node] = 2;
    return false;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
}`,
      language: "javascript",
      explanation: "DFS Cycle Detection: Build adjacency list. Use a visited array to track nodes in the current recursion stack (visiting state). If we visit a node currently in the stack, a cycle exists. Runs in O(V + E) time.",
    },
    optimal: {
      code: `function canFinishOptimal(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    inDegree[course]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    count++;
    for (const neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return count === numCourses;
}`,
      language: "javascript",
      explanation: "Kahn's Algorithm (BFS Topological Sort): Count in-degrees (incoming edges) of all vertices. Push nodes with 0 in-degree into a queue. Dequeue, increment processed count, and decrement in-degrees of neighbors. If a neighbor's in-degree becomes 0, enqueue it. If count equals V, the graph is a DAG (no cycles). Runs in O(V + E) time.",
    },
    timeComplexity: "O(v + E)",
    spaceComplexity: "O(v + E)",
    dryRun: [
      { line: 1, variables: { numCourses: 2, prerequisites: "[[1,0]]", inDegree: "[0, 1]" }, description: "Adjacency list: 0 -> [1]. inDegree counts: 0 has 0, 1 has 1." },
      { line: 2, variables: { queue: "[0]" }, description: "Push 0 (inDegree 0) to queue." },
      { line: 3, variables: { node: 0, count: 1, neighbor: 1, inDegree: "[0, 0]", queue: "[1]" }, description: "Pop 0. Decrement inDegree of 1 to 0, push 1 to queue. Pop 1, count becomes 2. Exit. count == 2, return true." }
    ],
    interviewDiscussion: [
      {
        question: "How do you explain topological sorting to a non-technical interviewer?",
        answer: "Imagine building a house: you cannot put up the roof before building the walls, and you cannot build walls before laying the foundation. Topological sorting lists these tasks in a linear timeline respecting all prerequisite dependencies."
      }
    ],
  },
  {
    id: 77,
    title: "Rotting Oranges",
    slug: "rotting-oranges",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "You are given an m x n grid representing empty cells (0), fresh oranges (1), and rotten oranges (2). Every minute, any fresh orange adjacent to a rotten orange becomes rotten. Return the minimum minutes elapsed until no cell has a fresh orange, or -1.",
    starterCode: `function orangesRotting(grid) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function orangesRottingBrute(grid) {
  // Scan grid repeatedly. In each minute, copy grid, infect neighbors,
  // and check changes. Repeat until no new infections occur.
  // Time complexity: O((R*C)^2)
  return -1;
}`,
      language: "javascript",
      explanation: "Iteratively scan the entire grid minute-by-minute. Mutating copy grids recursively scales quadratically.",
    },
    better: {
      code: `// Multi-pass coordinate infection
function orangesRottingBetter(grid) {
  // Scan grid to find rotten oranges, then run DFS to infect...
}`,
      language: "javascript",
      explanation: "Run DFS from each rotten orange, updating infection times on fresh oranges, taking the max time. Slow on overlapping grids.",
    },
    optimal: {
      code: `function orangesRottingOptimal(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let freshCount = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }
  if (freshCount === 0) return 0;
  let minutes = -1;
  const dirs = [[-1,0], [1,0], [0,-1], [0,1]];
  while (queue.length > 0) {
    minutes++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
          grid[nr][nc] = 2; // Infect fresh orange
          freshCount--;
          queue.push([nr, nc]);
        }
      }
    }
  }
  return freshCount === 0 ? minutes : -1;
}`,
      language: "javascript",
      explanation: "Multi-source BFS: Push all initial rotten oranges into a queue. Count fresh oranges. Run BFS level-by-level (minute-by-minute), infecting adjacent fresh oranges, decrementing the fresh count, and pushing new infections. Returns minutes if fresh count reaches 0. Runs in O(R * C) time.",
    },
    timeComplexity: "O(r * c)",
    spaceComplexity: "O(r * c)",
    dryRun: [
      { line: 1, variables: { grid: '[[2,1,1],[0,1,1]]', queue: "[]", freshCount: 0 }, description: "Find rotten at (0,0). Push to queue. freshCount = 4." },
      { line: 2, variables: { minutes: 0, levelSize: 1, popped: "(0,0)" }, description: "Pop (0,0). Infect (0,1). Decrement fresh to 3. Push (0,1) to queue." },
      { line: 3, variables: { minutes: 1, levelSize: 1, popped: "(0,1)" }, description: "Pop (0,1). Infect (0,2) and (1,1). Decrement fresh to 1. Push both." }
    ],
    interviewDiscussion: [
      {
        question: "Why does BFS find the shortest time, whereas DFS would fail?",
        answer: "BFS radiates outward level-by-level, mimicking the simultaneous spread of rot. DFS explores one path completely, which calculates invalid, non-shortest time paths on intersecting orange configurations."
      }
    ],
  },
  {
    id: 78,
    title: "Pacific Atlantic Water Flow",
    slug: "pacific-atlantic-water-flow",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "Find all grid coordinates where rain water can flow to both the Pacific Ocean (top/left) and Atlantic Ocean (bottom/right).",
    starterCode: `function pacificAtlantic(heights) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function pacificAtlanticBrute(heights) {
  // From every single cell in the grid, run DFS searches
  // to check if we can reach both borders.
  // Time complexity: O((R*C)^2)
  return [];
}`,
      language: "javascript",
      explanation: "Run a full path search from every grid cell. Extremely slow because it recalculates overlaps repeatedly.",
    },
    better: {
      code: `// BFS search from every cell with cache
function pacificAtlanticCached(heights) {
  // BFS search caching oceans reachability flags...
  return [];
}`,
      language: "javascript",
      explanation: "Use memoization matrices to cache cells that can reach either ocean. Reduces repeats but code is complex.",
    },
    optimal: {
      code: `function pacificAtlanticOptimal(heights) {
  if (heights.length === 0) return [];
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  
  function dfs(r, c, ocean, prevHeight) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || ocean[r][c] || heights[r][c] < prevHeight) {
      return;
    }
    ocean[r][c] = true;
    dfs(r - 1, c, ocean, heights[r][c]);
    dfs(r + 1, c, ocean, heights[r][c]);
    dfs(r, c - 1, ocean, heights[r][c]);
    dfs(r, c + 1, ocean, heights[r][c]);
  }
  
  // 1. Run DFS from borders
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, heights[0][c]); // Top
    dfs(rows - 1, c, atlantic, heights[rows - 1][c]); // Bottom
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]); // Left
    dfs(r, cols - 1, atlantic, heights[r][cols - 1]); // Right
  }
  
  // 2. Find intersection
  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Reverse DFS: Instead of checking from cell to ocean, flow water backwards from the oceans into the land (from lower border heights to higher inland heights). Mark reachable cells for Pacific and Atlantic separately, and find their intersection. Runs in O(R * C) time.",
    },
    timeComplexity: "O(r * c)",
    spaceComplexity: "O(r * c)",
    dryRun: [
      { line: 1, variables: { heights: "[[1,2],[2,3]]" }, description: "Create pacific and atlantic reachability grids." },
      { line: 2, variables: { pacificDFS: "top/left borders" }, description: "Run DFS from top row (0,c) and left col (r,0). Marks cells reachable from Pacific." },
      { line: 3, variables: { atlanticDFS: "bottom/right borders" }, description: "Run DFS from bottom row and right col. Marks cells that can reach Atlantic. Find overlap." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we check `heights[r][c] < prevHeight` in the reverse DFS condition?",
        answer: "Since we are starting from the ocean and climbing inland, water flows from low to high in our search direction. Thus, we can only transition to a cell if its height is equal to or greater than the current cell's height."
      }
    ],
  },
  {
    id: 79,
    title: "Word Ladder",
    slug: "word-ladder",
    difficulty: "Hard",
    pillarSlug: "graphs",
    statement: "Given beginWord, endWord, and wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no sequence exists.",
    starterCode: `function ladderLength(beginWord, endWord, wordList) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function ladderLengthBrute(beginWord, endWord, wordList) {
  // Recursive DFS search to check all mutation paths...
  return 0;
}`,
      language: "javascript",
      explanation: "Check all mutation paths recursively using DFS, causing high stack overhead and O(N!) time complexity.",
    },
    better: {
      code: `// Bidirectional BFS matching
function ladderLengthBi(beginWord, endWord, wordList) {
  // BFS search from both beginWord and endWord meeting in middle...
  return 0;
}`,
      language: "javascript",
      explanation: "Run BFS from both endpoints simultaneously. Drastically reduces the search tree size in average cases.",
    },
    optimal: {
      code: `function ladderLengthOptimal(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  while (queue.length > 0) {
    const [word, level] = queue.shift();
    if (word === endWord) return level;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const char = String.fromCharCode(c);
        if (char === word[i]) continue;
        const nextWord = word.substring(0, i) + char + word.substring(i + 1);
        if (wordSet.has(nextWord)) {
          wordSet.delete(nextWord); // Mark visited
          queue.push([nextWord, level + 1]);
        }
      }
    }
  }
  return 0;
}`,
      language: "javascript",
      explanation: "BFS search: Treat word transformations as an unweighted graph where edges connect words that differ by 1 letter. Convert wordList to a Set for O(1) lookups. Pop a word, mutate each character from 'a' to 'z', and push matching dictionary words to the queue. Delete from Set to mark visited. Runs in O(N * L * 26) time.",
    },
    timeComplexity: "O(n * L * 26)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { beginWord: '"hit"', endWord: '"cog"', wordSet: '{"hot", "dot", "dog", "cog"}' }, description: "Initialize queue = [['hit', 1]]." },
      { line: 2, variables: { word: '"hit"', mutated: '"hot"', level: 1 }, description: "Pop 'hit'. Mutate to 'hot'. Found in wordSet. Delete 'hot', push ['hot', 2]." },
      { line: 3, variables: { word: '"hot"', mutated: '"dot"', level: 2 }, description: "Pop 'hot'. Mutate to 'dot'. Found in wordSet. Delete 'dot', push ['dot', 3]." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we delete words from the `wordSet` after enqueuing them?",
        answer: "Deleting words serves as the 'visited' tracking mechanism. Since BFS guarantees that the first time we visit a node yields the shortest path, we never need to visit it again. Deleting prevents infinite loop cycles."
      }
    ],
  },
  {
    id: 80,
    title: "Network Delay Time",
    slug: "network-delay-time",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible, return -1.",
    starterCode: `function networkDelayTime(times, n, k) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function networkDelayTimeBrute(times, n, k) {
  // DFS exploration relaxation loops...
  return -1;
}`,
      language: "javascript",
      explanation: "Recursive DFS paths relaxation. Explores all path combinations, running in O(V!) time worst case.",
    },
    better: {
      code: `function networkDelayTimeBellman(times, n, k) {
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  for (let i = 1; i < n; i++) {
    for (const [u, v, w] of times) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }
  let maxTime = 0;
  for (let i = 1; i <= n; i++) {
    maxTime = Math.max(maxTime, dist[i]);
  }
  return maxTime === Infinity ? -1 : maxTime;
}`,
      language: "javascript",
      explanation: "Bellman-Ford algorithm: relax all edges N-1 times. Can handle negative weights but is slower than Dijkstra. Runs in O(V * E) time.",
    },
    optimal: {
      code: `class DistMinHeap {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p].dist <= this.data[i].dist) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1].dist < this.data[child].dist) child++;
      if (this.data[i].dist <= this.data[child].dist) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function networkDelayTimeOptimal(times, n, k) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    adj[u].push([v, w]);
  }
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const heap = new DistMinHeap();
  heap.push({ node: k, dist: 0 });
  
  while (heap.size() > 0) {
    const { node, dist: d } = heap.pop();
    if (d > dist[node]) continue;
    for (const [neighbor, weight] of adj[node]) {
      if (dist[node] + weight < dist[neighbor]) {
        dist[neighbor] = dist[node] + weight;
        heap.push({ node: neighbor, dist: dist[neighbor] });
      }
    }
  }
  let maxTime = 0;
  for (let i = 1; i <= n; i++) {
    maxTime = Math.max(maxTime, dist[i]);
  }
  return maxTime === Infinity ? -1 : maxTime;
}`,
      language: "javascript",
      explanation: "Dijkstra's Algorithm: build an adjacency list. Use a Min-Heap to extract the node with the minimum signal arrival time. Relax outgoing edges to neighbors, updating the distance array and pushing new distances to the heap. Returns the maximum distance. Runs in O(E log V) time.",
    },
    timeComplexity: "O(E log v)",
    spaceComplexity: "O(v + E)",
    dryRun: [
      { line: 1, variables: { n: 4, k: 2, times: "[[2,1,1],[2,3,1],[3,4,1]]", dist: "[∞, 0, ∞, ∞]" }, description: "Set dist[2]=0. Push {node:2, dist:0} to heap." },
      { line: 2, variables: { popped: "node:2", neighbor1: 1, dist1: 1, neighbor3: 3, dist3: 1 }, description: "Relax edges: dist[1] = 1, dist[3] = 1. Push both to heap." },
      { line: 3, variables: { popped: "node:3", neighbor4: 4, dist4: 2 }, description: "Pop node 3. Relax edge: dist[4] = 2. Push node 4. Max distance resolved is 2." }
    ],
    interviewDiscussion: [
      {
        question: "When does Dijkstra's algorithm fail?",
        answer: "Dijkstra's algorithm fails if the graph contains negative edge weights. Once a node is popped from the heap, Dijkstra assumes its shortest path is finalized. Negative weights violate this assumption by allowing shorter path relaxes later."
      }
    ],
  },
  {
    id: 81,
    title: "Redundant Connection",
    slug: "redundant-connection",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
    starterCode: `function findRedundantConnection(edges) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function findRedundantBrute(edges) {
  // For each edge, remove it and run a DFS path search
  // to check if the graph remains fully connected.
  // Time complexity: O(E * (V + E))
  return [];
}`,
      language: "javascript",
      explanation: "Iteratively remove each edge, running DFS to verify connectivity, resulting in quadratic runtime costs.",
    },
    better: {
      code: `// DFS cycle detection checking path connectivity
function findRedundantDFS(edges) {
  // Build graph progressively. DFS check cycle before adding...
}`,
      language: "javascript",
      explanation: "Build the graph edge-by-edge. Before inserting an edge, run DFS to see if a path already connects u and v. If so, a cycle is detected.",
    },
    optimal: {
      code: `class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]); // Path compression
  }
  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) return false; // Cycle detected
    if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }
    return true;
  }
}

function findRedundantConnectionOptimal(edges) {
  const n = edges.length;
  const uf = new UnionFind(n + 1);
  for (const [u, v] of edges) {
    if (!uf.union(u, v)) {
      return [u, v];
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "Disjoint Set Union (DSU) / Union-Find: start with all vertices in separate sets. For each edge, join the sets. If we try to union two vertices that are already in the same set, a cycle is detected. Return this edge. Runs in O(E * alpha(V)) time, which is practically linear.",
    },
    timeComplexity: "O(n * α(n))",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { edges: "[[1,2],[2,3],[1,3]]", parent: "[0, 1, 2, 3]" }, description: "Initialize Union-Find with parent references." },
      { line: 2, variables: { edge: "[1,2]", union: "true" }, description: "Union 1 and 2. parent becomes [0, 1, 1, 3]." },
      { line: 3, variables: { edge: "[2,3]", union: "true" }, description: "Union 2 and 3. parent becomes [0, 1, 1, 1]." },
      { line: 4, variables: { edge: "[1,3]", union: "false" }, description: "Find(1) = 1, Find(3) = 1. Already in same set! return [1,3]." }
    ],
    interviewDiscussion: [
      {
        question: "What is alpha(N) in the time complexity?",
        answer: "Alpha(N) represents the Inverse Ackermann function. It grows extremely slowly; for all practical values of N (up to 2^65536), its value is less than 5, making the operations run in virtually constant time."
      }
    ],
  },
  {
    id: 82,
    title: "Number of Connected Components",
    slug: "connected-components-in-undirected-graph",
    difficulty: "Medium",
    pillarSlug: "graphs",
    statement: "You have a graph of n nodes. You are given an integer n and an array edges. Return the number of connected components in the graph.",
    starterCode: `function countComponents(n, edges) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function countComponentsBrute(n, edges) {
  // Build adjacency list, run DFS from every node, incrementing component count...
  // Time complexity: O(V + E) with redundant sweeps.
  return 0;
}`,
      language: "javascript",
      explanation: "Standard DFS graph traversal marking visited nodes recursively. Runs in linear O(V + E) time.",
    },
    better: {
      code: `// BFS search iteration counting components
function countComponentsBFS(n, edges) {
  // BFS search tracking visited arrays...
  return 0;
}`,
      language: "javascript",
      explanation: "Iterate and run BFS from unvisited nodes, counting component launches.",
    },
    optimal: {
      code: `class UFComponents {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.count = size;
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]);
  }
  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI !== rootJ) {
      this.parent[rootJ] = rootI;
      this.count--;
    }
  }
}

function countComponentsOptimal(n, edges) {
  const uf = new UFComponents(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }
  return uf.count;
}`,
      language: "javascript",
      explanation: "Union-Find: Initialize component count to `n`. Iterate through edges, unioning connected nodes. If a union operation succeeds, decrement the count. Returns the remaining components count. Runs in O(V + E * alpha(V)) time.",
    },
    timeComplexity: "O(n + E * α(n))",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { n: 3, edges: "[[0,1]]", count: 3 }, description: "Initialize count = 3. parent = [0, 1, 2]." },
      { line: 2, variables: { edge: "[0,1]", union: "success", count: 2 }, description: "Union 0 and 1. parent becomes [0, 0, 2]. Decrement count to 2. Return 2." }
    ],
    interviewDiscussion: [
      {
        question: "How does Union-Find compare to DFS for counting connected components?",
        answer: "Both have linear time complexities. However, DFS requires constructing an adjacency list first, whereas Union-Find processes edges directly, saving memory and yielding cleaner code."
      }
    ],
  }
];
