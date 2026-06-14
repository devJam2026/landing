import { Problem } from "./types";
import { arrayProblems } from "./arrays";
import { stringProblems } from "./strings";
import { linkedListProblems } from "./linked-lists";
import { stackProblems } from "./stacks";
import { queueProblems } from "./queues";
import { hashTablesProblems } from "./hash-tables";
import { treeProblems } from "./trees";
import { heapProblems } from "./heaps";
import { graphProblems } from "./graphs";
import { backtrackingProblems } from "./backtracking";
import { dpProblems } from "./dp";
import { trieProblems } from "./tries";
import { binarySearchProblems } from "./binary-search";
import { greedyProblems } from "./greedy";
import { bitManipulationProblems } from "./bits";
import { miscProblems } from "./misc";

const slugToPattern: Record<string, string> = {
  // Arrays & Strings
  "two-sum": "Hash Table / Hash Map",
  "best-time-to-buy-and-sell-stock": "Two Pointers",
  "product-of-array-except-self": "Prefix Sum",
  "maximum-subarray": "Dynamic Programming (Kadane's)",
  "contains-duplicate": "Hash Table / Hash Map",
  "majority-element": "Greedy (Boyer-Moore)",
  "rotate-array": "Two Pointers",
  "valid-anagram": "Hash Table / Hash Map",
  "group-anagrams": "Hash Table / Hash Map",
  "valid-palindrome": "Two Pointers",
  "longest-substring-without-repeating-characters": "Sliding Window",
  "longest-palindromic-substring": "Two Pointers",
  "minimum-window-substring": "Sliding Window",
  "string-to-integer-atoi": "Two Pointers",
  "find-the-index-of-the-first-occurrence-in-a-string": "Two Pointers",

  // Linked Lists
  "reverse-linked-list": "Two Pointers",
  "linked-list-cycle": "Fast & Slow Pointers",
  "merge-two-sorted-lists": "Two Pointers",
  "remove-nth-node-from-end-of-list": "Two Pointers",
  "reorder-list": "Fast & Slow Pointers",
  "intersection-of-two-linked-lists": "Two Pointers",
  "palindrome-linked-list": "Fast & Slow Pointers",
  "copy-list-with-random-pointer": "Hash Table / Hash Map",
  "linked-list-cycle-ii": "Fast & Slow Pointers",
  "remove-linked-list-elements": "Two Pointers",

  // Stacks & Queues
  "valid-parentheses": "Stack",
  "daily-temperatures": "Monotonic Stack",
  "min-stack": "Stack",
  "evaluate-reverse-polish-notation": "Stack",
  "generate-parentheses": "Backtracking",
  "largest-rectangle-in-histogram": "Monotonic Stack",
  "simplify-path": "Stack",
  "queue-using-stacks": "Stack / Queue",
  "sliding-window-maximum": "Sliding Window (Monotonic Queue)",
  "implement-stack-using-queues": "Stack / Queue",
  "design-circular-queue": "Stack / Queue",
  "dota2-senate": "Greedy",

  // Heaps
  "kth-largest-element-in-an-array": "Heap / Priority Queue",
  "top-k-frequent-elements": "Heap / Priority Queue",
  "merge-k-sorted-lists": "Heap / Priority Queue",
  "find-median-from-data-stream": "Heap / Priority Queue",
  "k-closest-points-to-origin": "Heap / Priority Queue",
  "task-scheduler": "Heap / Priority Queue",

  // Graphs
  "number-of-islands": "Graph Traversals (BFS / DFS)",
  "clone-graph": "Graph Traversals (BFS / DFS)",
  "course-schedule": "Graph Traversals (BFS / DFS)",
  "pacific-atlantic-water-flow": "Graph Traversals (BFS / DFS)",
  "redundant-connection": "Union Find",
  "number-of-provinces": "Union Find",
  "max-area-of-island": "Graph Traversals (BFS / DFS)",

  // Greedy & Intervals
  "jump-game": "Greedy",
  "gas-station": "Greedy",
  "partition-labels": "Greedy",
  "merge-intervals": "Merge Intervals",
  "non-overlapping-intervals": "Merge Intervals",
  "jump-game-ii": "Greedy",

  // Binary Search
  "search-in-rotated-sorted-array": "Binary Search",
  "binary-search": "Binary Search",
  "search-a-2d-matrix": "Binary Search",
  "find-minimum-in-rotated-sorted-array": "Binary Search",
  "koko-eating-bananas": "Binary Search",
  "median-of-two-sorted-arrays": "Binary Search",
  "find-first-and-last-position-of-element-in-sorted-array": "Binary Search",

  // Misc / Intervals
  "two-sum-ii-input-array-is-sorted": "Two Pointers",
  "squares-of-a-sorted-array": "Two Pointers",
  "backspace-string-compare": "Two Pointers",
  "subarray-product-less-than-k": "Sliding Window",
  "min-cost-climbing-stairs": "Dynamic Programming",
  "unique-paths-ii": "Dynamic Programming",

  // Backtracking
  "permutations": "Backtracking",
  "subsets": "Backtracking",
  "combination-sum": "Backtracking",
  "word-search": "Backtracking",
  "n-queens": "Backtracking",
  "letter-combinations-of-a-phone-number": "Backtracking",
  "sudoku-solver": "Backtracking",
  "different-ways-to-add-parentheses": "Divide and Conquer / Backtracking",
  "expression-add-operators": "Backtracking",

  // DP
  "climbing-stairs": "Dynamic Programming",
  "coin-change": "Dynamic Programming",
  "longest-common-subsequence": "Dynamic Programming",
  "longest-increasing-subsequence": "Dynamic Programming",
  "house-robber": "Dynamic Programming",
  "word-break": "Dynamic Programming",
  "partition-equal-subset-sum": "Dynamic Programming",
  "edit-distance": "Dynamic Programming",
  "unique-paths": "Dynamic Programming",
  "maximal-square": "Dynamic Programming",
  "wildcard-matching": "Dynamic Programming",
  "regular-expression-matching": "Dynamic Programming",
  "burst-balloons": "Interval DP",
  "scramble-string": "Dynamic Programming",

  // Additional New Problems Mapped
  "palindrome-number": "Math / Two Pointers",
  "sort-colors": "Dutch National Flag / Two Pointers",
  "4sum": "Two Pointers",
  "binary-tree-maximum-path-sum": "Tree Depth First Search",
  "course-schedule-ii": "Graph Traversals (BFS / DFS)",
  "trapping-rain-water": "Monotonic Stack",
  "shortest-path-in-binary-matrix": "Graph Traversals (BFS / DFS)",

  // Bits
  "single-number": "Bit Manipulation",
  "number-of-1-bits": "Bit Manipulation",
  "counting-bits": "Bit Manipulation",
  "reverse-bits": "Bit Manipulation",
  "missing-number": "Bit Manipulation",
};

function getPatternForProblem(prob: Omit<Problem, "pattern">): string {
  if (slugToPattern[prob.slug]) {
    return slugToPattern[prob.slug];
  }
  // Fallback pattern resolution by pillarSlug
  switch (prob.pillarSlug) {
    case "arrays":
    case "strings":
    case "linked-lists":
      return "Two Pointers";
    case "stacks":
      return "Stack";
    case "queues":
      return "Stack / Queue";
    case "heaps":
      return "Heap / Priority Queue";
    case "trees":
      return "Tree Depth First Search";
    case "graphs":
      return "Graph Traversals (BFS / DFS)";
    case "tries":
      return "Trie";
    case "dp":
      return "Dynamic Programming";
    case "backtracking":
      return "Backtracking";
    case "binary-search":
      return "Binary Search";
    case "greedy":
      return "Greedy";
    case "bits":
      return "Bit Manipulation";
    default:
      return "General Algorithmic";
  }
}

export const dsaProblems: Problem[] = [
  ...arrayProblems,
  ...stringProblems,
  ...linkedListProblems,
  ...stackProblems,
  ...queueProblems,
  ...hashTablesProblems,
  ...treeProblems,
  ...heapProblems,
  ...graphProblems,
  ...backtrackingProblems,
  ...dpProblems,
  ...trieProblems,
  ...binarySearchProblems,
  ...greedyProblems,
  ...bitManipulationProblems,
  ...miscProblems,
].map((prob) => ({
  ...prob,
  pattern: getPatternForProblem(prob),
}));
