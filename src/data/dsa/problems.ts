export interface ProblemSolution {
  code: string;
  language: string;
  explanation: string;
}

export interface DryRunStep {
  line: number;
  variables: Record<string, string | number>;
  description: string;
}

export interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  pillarSlug: string;
  statement: string;
  starterCode: string;
  bruteForce: ProblemSolution;
  better: ProblemSolution;
  optimal: ProblemSolution;
  timeComplexity: string;
  spaceComplexity: string;
  dryRun: DryRunStep[];
  interviewDiscussion: {
    question: string;
    answer: string;
  }[];
}

export const dsaProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    pillarSlug: "arrays",
    statement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    starterCode: `function twoSum(nums, target) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "Iterate through every element in the array using nested loops. Check if the sum of elements at indices i and j equals the target. This approach does not require extra space but is slow.",
    },
    better: {
      code: `function twoSumSorted(nums, target) {
  // 1. Map index entries then sort
  const mapped = nums.map((val, idx) => ({ val, idx }));
  mapped.sort((a, b) => a.val - b.val);
  
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = mapped[left].val + mapped[right].val;
    if (sum === target) {
      return [mapped[left].idx, mapped[right].idx];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "Sort elements alongside their original indices. Use two pointers pointing to the beginning and the end. Move pointers inward based on sum comparisons. Requires O(N log N) time due to sorting.",
    },
    optimal: {
      code: `function twoSumOptimal(nums, target) {
  const map = new Map(); // val -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      language: "javascript",
      explanation: "Use a hash map to store elements we've seen and their index. On each step, compute the complement (target - current). If the map has the complement, return the indices immediately. This runs in single-pass linear time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[2, 7, 11, 15]", target: 9, map: "{}", i: 0 }, description: "Initialize map. Start loop with i = 0." },
      { line: 2, variables: { current: 2, complement: 7 }, description: "Calculate complement = 9 - 2 = 7." },
      { line: 3, variables: { mapHasComplement: "false" }, description: "7 is not in the map yet. Store 2 at index 0." },
      { line: 1, variables: { i: 1, map: "{2: 0}" }, description: "Increment i to 1. Process current = 7." },
      { line: 2, variables: { current: 7, complement: 2 }, description: "Calculate complement = 9 - 7 = 2." },
      { line: 3, variables: { mapHasComplement: "true" }, description: "2 is in the map at index 0! Return [0, 1] immediately." }
    ],
    interviewDiscussion: [
      {
        question: "How do you explain the time complexity trade-off to a senior panel?",
        answer: "The brute force runs in O(n^2) time with O(1) space. The optimal hash map solution reduces query latency to O(n) by allocating O(n) auxiliary space to cache numbers. In heavy throughput environments, trading memory for low latency is highly beneficial.",
      },
      {
        question: "Can we solve this in O(1) space if the array is already sorted?",
        answer: "Yes. If the array is pre-sorted, we can use the two-pointer technique (left and right pointer) without allocating a hash map, resulting in O(n) time complexity and O(1) space complexity.",
      }
    ],
  },
  {
    id: 2,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "Easy",
    pillarSlug: "stack",
    statement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets, and closed in the correct order.",
    starterCode: `function isValid(s) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isValidBrute(s) {
  let length = -1;
  while (s.length !== length) {
    length = s.length;
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return s.length === 0;
}`,
      language: "javascript",
      explanation: "Repeatedly replace adjacent valid bracket pairs with empty strings until no more replacements can be made. This is highly inefficient because string replacement creates new strings in memory on each cycle.",
    },
    better: {
      code: `function isValidArray(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (char === ')' && top !== '(') return false;
      if (char === ']' && top !== '[') return false;
      if (char === '}' && top !== '{') return false;
    }
  }
  return stack.length === 0;
}`,
      language: "javascript",
      explanation: "Iterate through characters. Push open brackets onto an array-backed stack. Pop and verify matches for closing brackets. Return true if stack is empty at the end.",
    },
    optimal: {
      code: `function isValidOptimal(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      const top = stack.length === 0 ? '#' : stack.pop();
      if (top !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
      language: "javascript",
      explanation: "Use a map for O(1) matching boundaries and an optimized stack buffer. This avoids multiple if-else checks, keeping instructions compact and CPU friendly.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { s: '"()[]{}"', stack: "[]", i: 0 }, description: "Initialize variables. Start loop at i = 0." },
      { line: 2, variables: { char: '"("' }, description: "Character is '(' which is an opener. Push to stack." },
      { line: 1, variables: { stack: '["("]', i: 1 }, description: "Increment i to 1. Character is ')' which is a closer." },
      { line: 3, variables: { top: '"("', match: '"("' }, description: "Pop stack. Compare popped '(' with closing mapping '(' (match). Continue." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a stack the ideal data structure for nested boundaries?",
        answer: "A stack operates on Last-In-First-Out (LIFO) rules, meaning that the most recently opened bracket must be the first one resolved. This property perfectly models nested compiler brackets, HTML tag closing, and recursive scopes.",
      }
    ],
  },
  {
    id: 3,
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    difficulty: "Easy",
    pillarSlug: "dynamic-programming",
    statement: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    starterCode: `function climbStairs(n) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function climbStairsRec(n) {
  if (n <= 2) return n;
  return climbStairsRec(n - 1) + climbStairsRec(n - 2);
}`,
      language: "javascript",
      explanation: "Use standard top-down recursion. The base cases return n for n <= 2. This solution has exponential time complexity O(2^N) because it recomputes identical subproblems repeatedly.",
    },
    better: {
      code: `function climbStairsMemo(n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  return memo[n];
}`,
      language: "javascript",
      explanation: "Top-down memoization: cache computed results in a hash map. Before recursing, check the cache first. This reduces the recursion tree height, resulting in linear O(N) execution steps.",
    },
    optimal: {
      code: `function climbStairsOptimal(n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
}`,
      language: "javascript",
      explanation: "Bottom-up constant space dynamic programming: notice we only need the last two steps to calculate the current one. Instead of storing an entire DP array, maintain two pointers, resulting in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { n: 4, first: 1, second: 2 }, description: "Check base cases. n > 2, start iteration at i = 3." },
      { line: 2, variables: { i: 3, third: 3 }, description: "Add first and second to calculate third = 1 + 2 = 3." },
      { line: 3, variables: { first: 2, second: 3 }, description: "Shift pointers: first becomes 2, second becomes 3." },
      { line: 2, variables: { i: 4, third: 5 }, description: "Loop index i = 4 (final). Calculate third = 2 + 3 = 5." },
      { line: 3, variables: { first: 3, second: 5 }, description: "Shift pointers. Exit loop. Return second = 5." }
    ],
    interviewDiscussion: [
      {
        question: "How does the optimal solution compare to the Fibonacci sequence?",
        answer: "This problem is exactly equivalent to calculating the Nth Fibonacci number. The only difference is the offset base values (f(1)=1, f(2)=2 instead of 0 and 1). Both can be optimized to O(1) auxiliary space.",
      }
    ],
  },
  {
    id: 4,
    title: "Best Time To Buy Stock",
    slug: "best-time-to-buy-stock",
    difficulty: "Easy",
    pillarSlug: "arrays",
    statement: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
    starterCode: `function maxProfit(prices) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxProfitBrute(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
}`,
      language: "javascript",
      explanation: "Evaluate every single pair of buying and selling days using nested loops. O(N^2) time complexity.",
    },
    better: {
      code: `function maxProfitPrefix(prices) {
  const minPrices = [];
  let currMin = Infinity;
  for (let i = 0; i < prices.length; i++) {
    currMin = Math.min(currMin, prices[i]);
    minPrices.push(currMin);
  }
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minPrices[i]);
  }
  return max;
}`,
      language: "javascript",
      explanation: "Generate a prefix min price array, then find the max difference. Requires O(N) auxiliary space.",
    },
    optimal: {
      code: `function maxProfitOptimal(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}`,
      language: "javascript",
      explanation: "Single pass pointer optimization: track the lowest buying price seen so far and compare dynamic profit.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { prices: "[7, 1, 5, 3]", minPrice: 7, maxProfit: 0, i: 0 }, description: "Start loop. Set minPrice = 7." },
      { line: 2, variables: { i: 1, minPrice: 1 }, description: "Price 1 is less than minPrice 7. Set minPrice = 1." },
      { line: 3, variables: { i: 2, profit: 4, maxProfit: 4 }, description: "Price 5 is higher. Max profit becomes 5 - 1 = 4." }
    ],
    interviewDiscussion: [
      {
        question: "Can we sell a stock before we buy it?",
        answer: "No, transactions must happen sequentially in time (buy first, then sell in the future). Thus, we only track minimum prices before the current day.",
      }
    ],
  },
  {
    id: 5,
    title: "Product Of Array Except Self",
    slug: "product-of-array-except-self",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must solve this in O(N) time and without using division.",
    starterCode: `function productExceptSelf(nums) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function productBrute(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) prod *= nums[j];
    }
    res.push(prod);
  }
  return res;
}`,
      language: "javascript",
      explanation: "Loop through each index, multiplying all other elements except current index. Runs in quadratic O(N^2) time.",
    },
    better: {
      code: `function productPrefixSuffix(nums) {
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i-1] * nums[i-1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i+1] * nums[i+1];
  }
  return nums.map((_, i) => left[i] * right[i]);
}`,
      language: "javascript",
      explanation: "Pre-calculate left and right product arrays. Multiplies values together in O(N) time but uses O(N) space.",
    },
    optimal: {
      code: `function productOptimal(nums) {
  const res = Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}`,
      language: "javascript",
      explanation: "Single output array tracking prefixes, then running backward to multiply suffixes in O(1) auxiliary space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2, 3]", res: "[1, 1, 1]", prefix: 1, i: 0 }, description: "Initialize variables." },
      { line: 2, variables: { res: "[1, 1, 2]", prefix: 6 }, description: "Accumulate prefixes. res[0]=1, res[1]=1, res[2]=2." },
      { line: 3, variables: { suffix: 3, res: "[6, 3, 2]" }, description: "Loop backward accumulating suffixes. Return final [6, 3, 2]." }
    ],
    interviewDiscussion: [
      {
        question: "Why is division forbidden in the problem statement?",
        answer: "If division was allowed, we could compute the total product and divide by nums[i]. However, division collapses if any array element is 0 (division by zero error).",
      }
    ],
  },
  {
    id: 6,
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth",
    difficulty: "Easy",
    pillarSlug: "trees",
    statement: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    starterCode: `function maxDepth(root) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxDepthBFS(root) {
  if (!root) return 0;
  let depth = 0;
  const queue = [root];
  while (queue.length > 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return depth;
}`,
      language: "javascript",
      explanation: "Iterate level by level using Breadth First Search, incrementing a depth counter on each level complete.",
    },
    better: {
      code: `function maxDepthDFSStack(root) {
  if (!root) return 0;
  const stack = [{ node: root, depth: 1 }];
  let max = 0;
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    max = Math.max(max, depth);
    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
  }
  return max;
}`,
      language: "javascript",
      explanation: "Depth First Search using an explicit stack of node and depth pairs. Explores paths to leaf nodes.",
    },
    optimal: {
      code: `function maxDepthRecursive(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}`,
      language: "javascript",
      explanation: "Clean recursive DFS: depth of a node is 1 plus the maximum of the depths of its left and right subtrees.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { root: "Node(20)", left: "Node(10)", right: "Node(30)" }, description: "Call maxDepth(20)." },
      { line: 2, variables: { leftDepth: 1, rightDepth: 1 }, description: "Calculate maxDepth(10) = 1, maxDepth(30) = 1." },
      { line: 3, variables: { returnVal: 2 }, description: "Return 1 + Math.max(1, 1) = 2." }
    ],
    interviewDiscussion: [
      {
        question: "What is the worst-case space complexity for the recursion stack?",
        answer: "The space complexity is O(h) where h is tree height. In a skewed tree, tree height equals the number of nodes N, leading to O(N) space. In balanced trees, space is O(log N).",
      }
    ],
  },
  {
    id: 7,
    title: "Validate Binary Search Tree",
    slug: "validate-bst",
    difficulty: "Medium",
    pillarSlug: "trees",
    statement: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined by: left subtree contains only nodes with keys less than parent, right subtree contains only keys greater.",
    starterCode: `function isValidBST(root) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isValidBrute(root) {
  if (!root) return true;
  // Fails if a right-descendant is smaller than root
  return root.left.val < root.val && root.right.val > root.val;
}`,
      language: "javascript",
      explanation: "Check only immediate children values. This is incorrect because it misses deep sub-branch violations (e.g. right child's left child being smaller than root).",
    },
    better: {
      code: `function isValidInorder(root) {
    const list = [];
    function inorder(node) {
      if (!node) return;
      inorder(node.left);
      list.push(node.val);
      inorder(node.right);
    }
    inorder(root);
    for (let i = 1; i < list.length; i++) {
      if (list[i] <= list[i-1]) return false;
    }
    return true;
}`,
      language: "javascript",
      explanation: "Inorder traversal of a valid BST must result in a strictly increasing sorted array. Flatten tree and verify order.",
    },
    optimal: {
      code: `function isValidBSTOptimal(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBSTOptimal(root.left, min, root.val) && 
         isValidBSTOptimal(root.right, root.val, max);
}`,
      language: "javascript",
      explanation: "Recursive traversal passing min and max limits down. When going left, update max limit. When going right, update min limit.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { root: "Node(20)", min: -Infinity, max: Infinity }, description: "Call validation at root 20." },
      { line: 2, variables: { leftVal: 10, rightVal: 30 }, description: "Validate left child 10 with max limit 20. Validate right child 30 with min limit 20." },
      { line: 3, variables: { result: "true" }, description: "All checks pass. Return true." }
    ],
    interviewDiscussion: [
      {
        question: "Why can't we just compare a node with its left and right children values?",
        answer: "A node's left child could be smaller than the node, but its right descendant could be larger than the grandparent, violating BST rules. Limits must be passed down recursively.",
      }
    ],
  },
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
    id: 10,
    title: "Coin Change",
    slug: "coin-change",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
    starterCode: `function coinChange(coins, amount) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function coinChangeRec(coins, amount) {
  if (amount === 0) return 0;
  let res = Infinity;
  for (const coin of coins) {
    if (amount - coin >= 0) {
      res = Math.min(res, 1 + coinChangeRec(coins, amount - coin));
    }
  }
  return res;
}`,
      language: "javascript",
      explanation: "Recursive search for all combinations. Has exponential O(C^A) complexity (C = coin options, A = amount) because identical sub-amounts are computed repeatedly.",
    },
    better: {
      code: `function coinChangeMemo(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (memo[amount]) return memo[amount];
  let res = Infinity;
  for (const coin of coins) {
    if (amount - coin >= 0) {
      res = Math.min(res, 1 + coinChangeMemo(coins, amount - coin, memo));
    }
  }
  memo[amount] = res;
  return res;
}`,
      language: "javascript",
      explanation: "Top-down memoization: store minimum coin counts for each amount in a memo map, avoiding duplicated recursion subtrees.",
    },
    optimal: {
      code: `function coinChangeOptimal(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      language: "javascript",
      explanation: "Bottom-up tabulation: create a 1D array of size amount + 1. Fill values iteratively from 0 up to amount using previous coin transitions.",
    },
    timeComplexity: "O(n * amount)",
    spaceComplexity: "O(amount)",
    dryRun: [
      { line: 1, variables: { coins: "[1, 2]", amount: 3, dp: "[0, ∞, ∞, ∞]" }, description: "Initialize dp array." },
      { line: 2, variables: { i: 1, coin: 1, dpState: "[0, 1, ∞, ∞]" }, description: "Fill dp[1] = min(dp[1], dp[0]+1) = 1." },
      { line: 3, variables: { i: 2, dpState: "[0, 1, 1, ∞]" }, description: "Fill dp[2] using coin 2: dp[2] = min(dp[2], dp[0]+1) = 1." }
    ],
    interviewDiscussion: [
      {
        question: "Why does greedy approach fail for arbitrary coin denominations?",
        answer: "Greedy choice (always choosing the largest coin) works for standard fiat currency (e.g. 1, 5, 10, 25) but fails for custom sets like [1, 3, 4] for amount 6 (greedy yields 4,1,1 while optimal is 3,3). DP evaluates all options.",
      }
    ],
  },
  {
    id: 11,
    title: "Longest Common Subsequence",
    slug: "longest-common-subsequence",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a new string generated from the original string with some characters deleted without changing order.",
    starterCode: `function longestCommonSubsequence(text1, text2) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function lcsBrute(t1, t2) {
  // Generate all subsequences of t1 (2^M) and check if they exist in t2.
  return 0;
}`,
      language: "javascript",
      explanation: "Generate and compare all string subsequences. Runs in exponential time O(2^M) where M is text length.",
    },
    better: {
      code: `function lcsMemo(t1, t2, i = 0, j = 0, memo = {}) {
  const key = \`\${i}-\${j}\`;
  if (memo[key]) return memo[key];
  if (i === t1.length || j === t2.length) return 0;
  
  if (t1[i] === t2[j]) {
    memo[key] = 1 + lcsMemo(t1, t2, i + 1, j + 1, memo);
  } else {
    memo[key] = Math.max(lcsMemo(t1, t2, i + 1, j, memo), lcsMemo(t1, t2, i, j + 1, memo));
  }
  return memo[key];
}`,
      language: "javascript",
      explanation: "Top-down memoization: cache LCS values for coordinate indices (i, j) to prune overlapping character comparisons.",
    },
    optimal: {
      code: `function lcsOptimal(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`,
      language: "javascript",
      explanation: "Bottom-up 2D tabulation grid: build a matrix of size (M+1) x (N+1). If chars match, add 1 to diagonal. Else, take max of top or left cell.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    dryRun: [
      { line: 1, variables: { t1: '"abc"', t2: '"ac"', dp: "3x2 matrix" }, description: "Initialize matrix." },
      { line: 2, variables: { char1: '"a"', char2: '"a"', dpVal: 1 }, description: "Character match 'a' == 'a'. Set dp[1][1] = dp[0][0] + 1 = 1." },
      { line: 3, variables: { char1: '"b"', char2: '"c"', dpVal: 1 }, description: "Chars do not match. Set dp[2][2] = max(dp[1][2], dp[2][1]) = 1." }
    ],
    interviewDiscussion: [
      {
        question: "How do you optimize the space complexity of LCS to O(min(M, N))?",
        answer: "Since calculating the current row only requires the previous row's tabulation data, we can optimize space by maintaining only two rows (current and previous) of size N, reducing space complexity to linear.",
      }
    ],
  },
];
