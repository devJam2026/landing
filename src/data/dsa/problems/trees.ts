import { Problem } from "./types";

export const treeProblems: Problem[] = [
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
      { line: 2, variables: { leftDepth: 1, rightDepth: 1 }, description: "Calculate maxDepth(10) = 1, maxDepth(30) = 1." }
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
  return root.left.val < root.val && root.right.val > root.val;
}`,
      language: "javascript",
      explanation: "Check only immediate children values. This is incorrect because it misses deep sub-branch violations.",
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
      { line: 2, variables: { leftVal: 10, rightVal: 30 }, description: "Validate left child 10 with max limit 20. Validate right child 30 with min limit 20. All pass." }
    ],
    interviewDiscussion: [
      {
        question: "Why can't we just compare a node with its left and right children values?",
        answer: "A node's left child could be smaller than the node, but its right descendant could be larger than the grandparent, violating BST rules. Limits must be passed down recursively.",
      }
    ],
  },
  {
    id: 61,
    title: "Invert Binary Tree",
    slug: "invert-binary-tree",
    difficulty: "Easy",
    pillarSlug: "trees",
    statement: "Given the root of a binary tree, invert the tree, and return its root.",
    starterCode: `function invertTree(root) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function invertTreeBFS(root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}`,
      language: "javascript",
      explanation: "Level-order traversal: swap left and right pointers of every node popped from the queue. Runs in O(N) time with O(N) queue memory.",
    },
    better: {
      code: `function invertTreeDFSStack(root) {
  if (!root) return null;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return root;
}`,
      language: "javascript",
      explanation: "Iterative DFS: swap left and right pointers of nodes popped from a stack. Runs in O(N) time with stack space scaling with tree depth.",
    },
    optimal: {
      code: `function invertTreeOptimal(root) {
  if (!root) return null;
  const temp = root.left;
  root.left = invertTreeOptimal(root.right);
  root.right = invertTreeOptimal(temp);
  return root;
}`,
      language: "javascript",
      explanation: "Recursive post-order traversal: swap left and right children recursively. Runs in O(N) time and O(H) recursion stack space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { root: "Node(4)", left: "Node(2)", right: "Node(7)" }, description: "Call invertTree(4)." },
      { line: 2, variables: { leftInverted: "Node(7)'", rightInverted: "Node(2)'" }, description: "Invert child Node(7) and Node(2). Swap left and right values of root 4. Return root." }
    ],
    interviewDiscussion: [
      {
        question: "Does the recursive stack count as auxiliary space?",
        answer: "Yes. In the worst case of a skewed tree, the call stack height is N, meaning O(N) space. For balanced trees, it is O(log N)."
      }
    ],
  },
  {
    id: 62,
    title: "Same Tree",
    slug: "same-tree",
    difficulty: "Easy",
    pillarSlug: "trees",
    statement: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    starterCode: `function isSameTree(p, q) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isSameTreeBFS(p, q) {
  const q1 = [p];
  const q2 = [q];
  while (q1.length > 0 && q2.length > 0) {
    const n1 = q1.shift();
    const n2 = q2.shift();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    q1.push(n1.left, n1.right);
    q2.push(n2.left, n2.right);
  }
  return true;
}`,
      language: "javascript",
      explanation: "Perform a level order traversal on both trees simultaneously, comparing popped node values. Runs in O(N) time and O(N) space.",
    },
    better: {
      code: `// Iterative DFS stack matching
function isSameTreeDFS(p, q) {
  const stack = [[p, q]];
  while (stack.length > 0) {
    const [n1, n2] = stack.pop();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    stack.push([n1.left, n2.left], [n1.right, n2.right]);
  }
  return true;
}`,
      language: "javascript",
      explanation: "Iterative DFS: match pairs of nodes popped from a stack. Runs in linear O(N) time.",
    },
    optimal: {
      code: `function isSameTreeOptimal(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return isSameTreeOptimal(p.left, q.left) && isSameTreeOptimal(p.right, q.right);
}`,
      language: "javascript",
      explanation: "Recursive checks. If both nodes are null, they are identical. If only one is null, or values differ, return false. Otherwise, verify left and right subtrees recursively. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { p: "Node(1)", q: "Node(1)" }, description: "Call validation at root node 1." },
      { line: 2, variables: { pLeft: "Node(2)", qLeft: "Node(2)" }, description: "Validate left subtrees p.left (2) and q.left (2). Match found, recurse further." }
    ],
    interviewDiscussion: [
      {
        question: "What is the time complexity if one tree is significantly smaller than the other?",
        answer: "The time complexity is O(min(N, M)) where N and M are the number of nodes in trees p and q, because the recursion stops as soon as a mismatch or null boundary is hit."
      }
    ],
  },
  {
    id: 63,
    title: "Symmetric Tree",
    slug: "symmetric-tree",
    difficulty: "Easy",
    pillarSlug: "trees",
    statement: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    starterCode: `function isSymmetric(root) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isSymmetricBFS(root) {
  if (!root) return true;
  const q = [root.left, root.right];
  while (q.length > 0) {
    const t1 = q.shift();
    const t2 = q.shift();
    if (!t1 && !t2) continue;
    if (!t1 || !t2 || t1.val !== t2.val) return false;
    q.push(t1.left, t2.right);
    q.push(t1.right, t2.left);
  }
  return true;
}`,
      language: "javascript",
      explanation: "Level order traversal using double pointers: queue holds node pairs. Check symmetrical matches (left's left with right's right) level by level.",
    },
    better: {
      code: `// DFS stack mirror checker
function isSymmetricDFS(root) {
  if (!root) return true;
  const stack = [[root.left, root.right]];
  while (stack.length > 0) {
    const [t1, t2] = stack.pop();
    if (!t1 && !t2) continue;
    if (!t1 || !t2 || t1.val !== t2.val) return false;
    stack.push([t1.left, t2.right], [t1.right, t2.left]);
  }
  return true;
}`,
      language: "javascript",
      explanation: "Iterative DFS: pop nodes and push mirror pairs onto the stack. Runs in linear O(N) time.",
    },
    optimal: {
      code: `function isSymmetricOptimal(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
  
  function isMirror(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null || t1.val !== t2.val) return false;
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }
}`,
      language: "javascript",
      explanation: "Recursive Mirror Check: check if the left and right subtrees are mirrors of each other. T1 and T2 are mirrors if their values are equal, and T1's left matches T2's right while T1's right matches T2's left. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { root: "Node(1)", left: "Node(2)", right: "Node(2)" }, description: "Call isMirror(left, right)." },
      { line: 2, variables: { val1: 2, val2: 2 }, description: "Node values equal (2). Recurse isMirror(left.left, right.right) and isMirror(left.right, right.left)." }
    ],
    interviewDiscussion: [
      {
        question: "How does the space complexity behave for balanced vs skewed trees?",
        answer: "The space complexity is O(H) representing recursive stack height. In a balanced tree, height is O(log N). In a skewed tree (skewed symmetrically), it could be O(N)."
      }
    ],
  },
  {
    id: 64,
    title: "Binary Tree Level Order",
    slug: "binary-tree-level-order-traversal",
    difficulty: "Medium",
    pillarSlug: "trees",
    statement: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    starterCode: `function levelOrder(root) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function levelOrderBrute(root) {
  const result = [];
  function dfs(node, depth) {
    if (!node) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(node.val);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
  dfs(root, 0);
  return result;
}`,
      language: "javascript",
      explanation: "DFS traversal tracking depth, inserting values into the corresponding depth index inside a results list. Runs in O(N) time but requires indexing auxiliary lists dynamically.",
    },
    better: {
      code: `// Queue-based BFS (standard JS arrays)
function levelOrderQueue(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  // Standard BFS loop checking queue sizes...
  return result;
}`,
      language: "javascript",
      explanation: "Standard BFS level order traversal using JavaScript arrays as queues, causing O(N) shift operations.",
    },
    optimal: {
      code: `function levelOrderOptimal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Breadth-First Search (BFS): use a queue to traverse the tree layer-by-layer. For each layer, record the queue size, process that many nodes together, push their children, and add their values to the level list. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { root: "Node(3)", queue: "[Node(3)]" }, description: "Push root to queue." },
      { line: 2, variables: { levelSize: 1, currentLevel: "[3]" }, description: "Pop Node(3). Push children Node(9) and Node(20). Add [3] to result. queue = [Node(9), Node(20)]." },
      { line: 3, variables: { levelSize: 2, currentLevel: "[9, 20]" }, description: "Pop 9 and 20. Push children of 20 (15 and 7). Add [9, 20] to result. queue = [Node(15), Node(7)]." }
    ],
    interviewDiscussion: [
      {
        question: "What is the maximum number of nodes inside the queue at any point?",
        answer: "The queue holds at most the maximum width of the binary tree. For a complete binary tree, the leaf level contains N/2 nodes, making the worst-case space complexity O(N)."
      }
    ],
  },
  {
    id: 65,
    title: "Construct Tree from Pre/Inorder",
    slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
    difficulty: "Medium",
    pillarSlug: "trees",
    statement: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the tree.",
    starterCode: `function buildTree(preorder, inorder) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function buildTreeBrute(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const mid = inorder.indexOf(rootVal); // Linear scan
  const leftIn = inorder.slice(0, mid);
  const rightIn = inorder.slice(mid + 1);
  const leftPre = preorder.slice(1, 1 + leftIn.length);
  const rightPre = preorder.slice(1 + leftIn.length);
  root.left = buildTreeBrute(leftPre, leftIn);
  root.right = buildTreeBrute(rightPre, rightIn);
  return root;
}`,
      language: "javascript",
      explanation: "Find the root (first element of preorder) in the inorder array via linear scanning, slice subarrays, and recurse. Slicing and indexing make it O(N^2) time.",
    },
    better: {
      code: `// Recursive construct using global pointers
function buildTreePointers(preorder, inorder) {
  let preIdx = 0;
  // Recurse using boundary limits instead of slicing arrays...
  return null;
}`,
      language: "javascript",
      explanation: "Improve performance by passing boundary index limits (left, right) instead of slicing arrays, but index lookup in inorder is still linear.",
    },
    optimal: {
      code: `function buildTreeOptimal(preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  let preIdx = 0;
  return helper(0, inorder.length - 1);
  
  function helper(left, right) {
    if (left > right) return null;
    const rootVal = preorder[preIdx++];
    const root = new TreeNode(rootVal);
    const mid = map.get(rootVal);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);
    return root;
  }
}`,
      language: "javascript",
      explanation: "Use a Hash Map to record value indices in the inorder array for O(1) lookups. Maintain a global pointer `preIdx` to track roots in preorder. Recurse using left/right boundary limits in inorder. Runs in O(N) time with O(N) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { preorder: "[3, 9, 20]", inorder: "[9, 3, 20]", map: "{9:0, 3:1, 20:2}" }, description: "Initialize map. Call helper(0, 2)." },
      { line: 2, variables: { rootVal: 3, mid: 1, preIdx: 1 }, description: "Pivot is 3. Split: left subtree in [0, 0], right subtree in [2, 2]." },
      { line: 3, variables: { leftRoot: 9, rightRoot: 20 }, description: "Build left child helper(0,0) -> Node(9). Build right child helper(2,2) -> Node(20). Return Node(3)." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we always construct the left child before the right child?",
        answer: "The preorder traversal follows Node -> Left -> Right order. Since we increment `preIdx` sequentially, the next element in preorder after the root is guaranteed to be the root of the left subtree, requiring left tree recursion first."
      }
    ],
  },
  {
    id: 66,
    title: "Lowest Common Ancestor",
    slug: "lowest-common-ancestor-of-a-binary-tree",
    difficulty: "Medium",
    pillarSlug: "trees",
    statement: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q in the tree.",
    starterCode: `function lowestCommonAncestor(root, p, q) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function lowestCommonAncestorBrute(root, p, q) {
  // Trace paths from root to p, and root to q.
  // Compare paths from start to find last common node.
  // Time complexity: O(N) with duplicate path storage.
  return null;
}`,
      language: "javascript",
      explanation: "Locate both target nodes, record complete parent path arrays in memory, and find the last matching index. Consumes O(N) space.",
    },
    better: {
      code: `// Backtracking path search using map
function lowestCommonAncestorMap(root, p, q) {
  // Traverse and build child-to-parent node pointers mapping...
  return null;
}`,
      language: "javascript",
      explanation: "Build a parent node pointer mapping for all nodes, then trace p's ancestors in a Set while checking q's parent path.",
    },
    optimal: {
      code: `function lowestCommonAncestorOptimal(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestorOptimal(root.left, p, q);
  const right = lowestCommonAncestorOptimal(root.right, p, q);
  if (left !== null && right !== null) {
    return root;
  }
  return left !== null ? left : right;
}`,
      language: "javascript",
      explanation: "Recursive traversal: if the current node is null, p, or q, return the current node. Recurse left and right. If both recursion calls return non-null, the current node is the LCA (nodes are split on left and right subtrees). Otherwise, pass up the non-null result. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { root: "Node(3)", p: "Node(5)", q: "Node(1)" }, description: "Call LCA at root 3." },
      { line: 2, variables: { leftVal: "Node(5)", rightVal: "Node(1)" }, description: "Recurse left -> hits p (5), returns 5. Recurse right -> hits q (1), returns 1." },
      { line: 3, variables: { returnVal: "Node(3)" }, description: "Both left and right are non-null. Root 3 is the LCA. Return Node(3)." }
    ],
    interviewDiscussion: [
      {
        question: "What happens if one of the target nodes p or q is the ancestor of the other?",
        answer: "If p is an ancestor of q, the recursion will encounter p first and return it immediately without traversing q's branch. The parent node will receive p as a return value, which correctly resolves as the LCA."
      }
    ],
  },
  {
    id: 67,
    title: "Kth Smallest Element in BST",
    slug: "kth-smallest-element-in-a-bst",
    difficulty: "Medium",
    pillarSlug: "trees",
    statement: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    starterCode: `function kthSmallest(root, k) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function kthSmallestBrute(root, k) {
  const vals = [];
  function traverse(node) {
    if (!node) return;
    vals.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  vals.sort((a, b) => a - b);
  return vals[k - 1];
}`,
      language: "javascript",
      explanation: "Extract all values, sort them in ascending order, and return the element at index k-1. Takes O(N log N) time.",
    },
    better: {
      code: `function kthSmallestInorder(root, k) {
  const vals = [];
  function inorder(node) {
    if (!node || vals.length >= k) return;
    inorder(node.left);
    vals.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return vals[k - 1];
}`,
      language: "javascript",
      explanation: "Perform an inorder DFS (LNR) to populate values in sorted order. Stop once we have accumulated k elements. Runs in O(N) time with O(N) space.",
    },
    optimal: {
      code: `function kthSmallestOptimal(root, k) {
  const stack = [];
  let curr = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    k--;
    if (k === 0) return curr.val;
    curr = curr.right;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Iterative Inorder: Use a stack to traverse left nodes. Pop the smallest node, decrement k. If k reaches 0, return the value. Otherwise, move to the right child. This avoids traversing the entire tree, running in O(H + K) time with O(H) space.",
    },
    timeComplexity: "O(h + k)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { root: "Node(3)", k: 1, stack: "[]" }, description: "Set curr = root." },
      { line: 2, variables: { stack: "[Node(3), Node(1)]", curr: "null" }, description: "Traverse left. Push 3, then push 1. curr becomes null." },
      { line: 3, variables: { poppedVal: 1, k: 0 }, description: "Pop Node(1). Decrement k to 0. k == 0, return 1." }
    ],
    interviewDiscussion: [
      {
        question: "How do you optimize this if the BST is frequently modified and we need to query kth smallest repeatedly?",
        answer: "We can modify the TreeNode structure to store the size of its subtree. Finding the kth smallest then becomes similar to binary search: compare `k` with `left.size + 1` and branch accordingly, reducing the query time to O(H) without stack traversals."
      }
    ],
  },
  {
    id: 68,
    title: "Serialize/Deserialize Tree",
    slug: "serialize-and-deserialize-binary-tree",
    difficulty: "Hard",
    pillarSlug: "trees",
    statement: "Design an algorithm to serialize and deserialize a binary tree. Serialization converts a tree into a string representation, and deserialization reconstructs it.",
    starterCode: `function serialize(root) { return ""; }
function deserialize(data) { return null; }`,
    bruteForce: {
      code: `function serializeBrute(root) {
  // BFS level order serialization mapping all virtual children...
  return "";
}`,
      language: "javascript",
      explanation: "Level order serialization: writes a complete tree array showing all null nodes. Fails on deep skewed trees due to exponential null storage space O(2^H).",
    },
    better: {
      code: `// DFS postorder serialization
function serializeDFS(root) {
  // Preorder join using custom symbols...
  return "";
}`,
      language: "javascript",
      explanation: "Depth-first preorder join using custom symbol delimiters.",
    },
    optimal: {
      code: `function serializeOptimal(root) {
  const result = [];
  function helper(node) {
    if (node === null) {
      result.push("null");
      return;
    }
    result.push(node.val);
    helper(node.left);
    helper(node.right);
  }
  helper(root);
  return result.join(",");
}

function deserializeOptimal(data) {
  const nodes = data.split(",");
  let index = 0;
  return helper();
  
  function helper() {
    if (index >= nodes.length) return null;
    const val = nodes[index++];
    if (val === "null") return null;
    const node = new TreeNode(Number(val));
    node.left = helper();
    node.right = helper();
    return node;
  }
}`,
      language: "javascript",
      explanation: "Preorder DFS Serialization: serialize by writing node values and appending 'null' for empty pointers. Deserialization reads the split string array sequentially to rebuild nodes recursively. Runs in O(N) time and O(N) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { root: "1->2->null" }, description: "Serialize: root 1 -> left 2 -> left null ('null') -> right null ('null') -> right null ('null'). Result: '1,2,null,null,null'." },
      { line: 2, variables: { data: '"1,2,null,null,null"', nodes: "['1', '2', 'null', 'null', 'null']", index: 0 }, description: "Deserialize: index 0 ('1') -> create Node(1). Recurse left." },
      { line: 3, variables: { index: 1, leftNode: "Node(2)" }, description: "index 1 ('2') -> create Node(2). Recurse left -> 'null', return null. Recurse right -> 'null', return null." }
    ],
    interviewDiscussion: [
      {
        question: "Why is preorder DFS preferred over BFS for serialization?",
        answer: "Preorder DFS maintains structural parent-child relationships naturally via recursion. Deserializing is extremely simple and does not require building helper queues, keeping the implementation compact and efficient."
      }
    ],
  },
  {
    id: 114,
    title: "Binary Tree Maximum Path Sum",
    slug: "binary-tree-maximum-path-sum",
    difficulty: "Hard",
    pillarSlug: "trees",
    statement: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    starterCode: `function maxPathSum(root) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxPathSumBrute(root) {
  // Evaluate all possible paths between every node pair.
  // Time complexity is O(N^2) due to nested traversals.
  return 0;
}`,
      language: "javascript",
      explanation: "Iterate through every node, computing the maximum path sum starting at that node using DFS. Extremely slow."
    },
    better: {
      code: `function maxPathSumBetter(root) {
  let maxSum = -Infinity;
  function dfs(node) {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    const current = node.val + Math.max(0, left) + Math.max(0, right);
    if (current > maxSum) maxSum = current;
    return node.val + Math.max(0, Math.max(left, right));
  }
  dfs(root);
  return maxSum;
}`,
      language: "javascript",
      explanation: "Recursive post-order DFS that calculates single branch gains, updating a global variable on overlaps. Still linear O(N) time but slightly less optimized on local variables reuse.",
    },
    optimal: {
      code: `function maxPathSumOptimal(root) {
  let maxSum = -Infinity;
  
  function gain(node) {
    if (node === null) return 0;
    const leftGain = Math.max(0, gain(node.left));
    const rightGain = Math.max(0, gain(node.right));
    
    // Max path sum with split at the current node
    const currentPathSum = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, currentPathSum);
    
    // Return the max branch gain to parent node
    return node.val + Math.max(leftGain, rightGain);
  }
  
  gain(root);
  return maxSum;
}`,
      language: "javascript",
      explanation: "Recursive post-order DFS: compute the maximum contribution (gain) that each subtree can make to a path. At each node, check the sum of the node value plus left and right subtree gains (which represents a path split at the current node), update the global max, and return the maximum single-branch path gain back to the parent. Runs in O(N) time."
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    dryRun: [
      { line: 1, variables: { root: "Node(-10)", left: "Node(9)", right: "Node(20)" }, description: "Call gain(root). Recurse left node 9 (gain 9), right node 20 (gain 20+max(left,right))." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we perform `Math.max(0, ...)` on subtree gains?",
        answer: "If a subtree's path sum is negative, adding it to our path will only decrease the total sum. By taking `Math.max(0, gain)`, we choose to discard negative path contributions, which matches the behavior of choosing not to include those subtrees."
      }
    ],
    edgeCases: [
      "Tree contains only negative values (max sum must be the single node with largest value, not 0)",
      "Single-node tree (max path is just the root value)",
      "Skewed binary tree representing a linked list"
    ],
    commonMistakes: [
      "Returning node.val + leftGain + rightGain to the parent call. A path cannot split at multiple levels.",
      "Forgetting to discard negative branch sums using Math.max(0, gain).",
      "Using a global variable that is not reset between different test cases (always initialize state in the entry function)."
    ]
  }
];
