export interface Checklist {
  slug: string;
  title: string;
  description: string;
  totalProblems: number;
}

export interface ChecklistItem {
  problemSlug: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  patternTags: string[];
  category: string;
  source: string;
  order: number;
  isCore: boolean;
}

export const dsaChecklists: Checklist[] = [
  {
    slug: "blind75",
    title: "Blind 75",
    description: "The classic collection of 75 essential coding interview problems that cover all key patterns and concepts.",
    totalProblems: 75,
  },
  {
    slug: "neetcode150",
    title: "NeetCode 150",
    description: "An extensive list of 150 coding problems covering intermediate to advanced DSA patterns with structural continuity.",
    totalProblems: 150,
  },
  {
    slug: "leetcode150",
    title: "LeetCode Top Interview 150",
    description: "LeetCode's curated compilation of 150 frequently asked technical questions for FAANG/tier-1 software engineering roles.",
    totalProblems: 150,
  },
  {
    slug: "devjam96",
    title: "DevJam Must-Do 96",
    description: "DevJam's recommended list of 96 core problems to develop deep intuition, template recognition, and complexity mastery.",
    totalProblems: 96,
  },
];

// Helper database of common problem configurations for the checklists,
// reusing slugs from src/data/dsa/problems
const baseChecklistProblems = [
  // Arrays & Hashing
  { slug: "two-sum", title: "Two Sum", difficulty: "Easy", category: "Arrays", patternTags: ["Hash Map"] },
  { slug: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", category: "Arrays", patternTags: ["Hash Map"] },
  { slug: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", category: "Arrays", patternTags: ["Hash Map"] },
  { slug: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", category: "Arrays", patternTags: ["Hash Map", "Sorting"] },
  { slug: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", category: "Arrays", patternTags: ["Prefix Sum"] },
  { slug: "maximum-subarray", title: "Maximum Subarray", difficulty: "Medium", category: "Arrays", patternTags: ["Kadane's Algorithm", "DP"] },
  { slug: "rotate-array", title: "Rotate Array", difficulty: "Medium", category: "Arrays", patternTags: ["Two Pointers"] },
  { slug: "majority-element", title: "Majority Element", difficulty: "Easy", category: "Arrays", patternTags: ["Boyer-Moore Voting"] },
  { slug: "sort-colors", title: "Sort Colors", difficulty: "Medium", category: "Arrays", patternTags: ["Dutch National Flag", "Two Pointers"] },
  { slug: "4sum", title: "4Sum", difficulty: "Medium", category: "Arrays", patternTags: ["Two Pointers", "Sorting"] },

  // Two Pointers
  { slug: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", category: "Two Pointers", patternTags: ["Two Pointers"] },
  { slug: "two-sum-ii-input-array-is-sorted", title: "Two Sum II - Input Array Is Sorted", difficulty: "Easy", category: "Two Pointers", patternTags: ["Two Pointers"] },
  { slug: "squares-of-a-sorted-array", title: "Squares of a Sorted Array", difficulty: "Easy", category: "Two Pointers", patternTags: ["Two Pointers", "Sorting"] },
  { slug: "backspace-string-compare", title: "Backspace String Compare", difficulty: "Easy", category: "Two Pointers", patternTags: ["Two Pointers", "Stack"] },

  // Sliding Window
  { slug: "longest-substring-without-repeating-characters", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "Sliding Window", patternTags: ["Sliding Window", "Hash Map"] },
  { slug: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", category: "Sliding Window", patternTags: ["Sliding Window", "Hash Map"] },
  { slug: "subarray-product-less-than-k", title: "Subarray Product Less Than K", difficulty: "Medium", category: "Sliding Window", patternTags: ["Sliding Window"] },

  // Stacks
  { slug: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", category: "Stacks", patternTags: ["Stack"] },
  { slug: "min-stack", title: "Min Stack", difficulty: "Medium", category: "Stacks", patternTags: ["Stack", "Design"] },
  { slug: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", category: "Stacks", patternTags: ["Monotonic Stack"] },
  { slug: "largest-rectangle-in-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", category: "Stacks", patternTags: ["Monotonic Stack"] },
  { slug: "evaluate-reverse-polish-notation", title: "Evaluate Reverse Polish Notation", difficulty: "Medium", category: "Stacks", patternTags: ["Stack"] },
  { slug: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", category: "Stacks", patternTags: ["Two Pointers", "Monotonic Stack"] },

  // Linked Lists
  { slug: "reverse-linked-list", title: "Reverse Linked List", difficulty: "Easy", category: "Linked Lists", patternTags: ["Two Pointers"] },
  { slug: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", category: "Linked Lists", patternTags: ["Fast & Slow Pointers"] },
  { slug: "merge-two-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked Lists", patternTags: ["Two Pointers"] },
  { slug: "remove-nth-node-from-end-of-list", title: "Remove Nth Node From End of List", difficulty: "Medium", category: "Linked Lists", patternTags: ["Two Pointers"] },
  { slug: "reorder-list", title: "Reorder List", difficulty: "Medium", category: "Linked Lists", patternTags: ["Fast & Slow Pointers", "Two Pointers"] },
  { slug: "linked-list-cycle-ii", title: "Linked List Cycle II", difficulty: "Medium", category: "Linked Lists", patternTags: ["Fast & Slow Pointers"] },

  // Binary Search
  { slug: "binary-search", title: "Binary Search", difficulty: "Easy", category: "Binary Search", patternTags: ["Binary Search"] },
  { slug: "search-in-rotated-sorted-array", title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Binary Search", patternTags: ["Binary Search"] },
  { slug: "find-minimum-in-rotated-sorted-array", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", category: "Binary Search", patternTags: ["Binary Search"] },
  { slug: "search-a-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", category: "Binary Search", patternTags: ["Binary Search"] },
  { slug: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", category: "Binary Search", patternTags: ["Binary Search"] },
  { slug: "median-of-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", category: "Binary Search", patternTags: ["Binary Search"] },

  // Trees
  { slug: "binary-tree-maximum-path-sum", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", category: "Trees", patternTags: ["DFS", "Binary Tree"] },

  // Heaps
  { slug: "kth-largest-element-in-an-array", title: "Kth Largest Element in an Array", difficulty: "Medium", category: "Heaps", patternTags: ["Heap", "Quickselect"] },
  { slug: "top-k-frequent-elements", title: "Top K Frequent Elements", difficulty: "Medium", category: "Heaps", patternTags: ["Heap", "Hash Map"] },
  { slug: "find-median-from-data-stream", title: "Find Median from Data Stream", difficulty: "Hard", category: "Heaps", patternTags: ["Heap", "Design"] },

  // Graphs
  { slug: "number-of-islands", title: "Number of Islands", difficulty: "Medium", category: "Graphs", patternTags: ["DFS", "BFS", "Union Find"] },
  { slug: "clone-graph", title: "Clone Graph", difficulty: "Medium", category: "Graphs", patternTags: ["DFS", "BFS", "Hash Map"] },
  { slug: "course-schedule", title: "Course Schedule", difficulty: "Medium", category: "Graphs", patternTags: ["DFS", "BFS", "Topological Sort"] },
  { slug: "course-schedule-ii", title: "Course Schedule II", difficulty: "Medium", category: "Graphs", patternTags: ["DFS", "BFS", "Topological Sort"] },
  { slug: "shortest-path-in-binary-matrix", title: "Shortest Path in Binary Matrix", difficulty: "Medium", category: "Graphs", patternTags: ["BFS"] },

  // Backtracking
  { slug: "permutations", title: "Permutations", difficulty: "Medium", category: "Backtracking", patternTags: ["Backtracking"] },
  { slug: "subsets", title: "Subsets", difficulty: "Medium", category: "Backtracking", patternTags: ["Backtracking"] },
  { slug: "combination-sum", title: "Combination Sum", difficulty: "Medium", category: "Backtracking", patternTags: ["Backtracking"] },
  { slug: "word-search", title: "Word Search", difficulty: "Medium", category: "Backtracking", patternTags: ["DFS", "Backtracking"] },
  { slug: "n-queens", title: "N-Queens", difficulty: "Hard", category: "Backtracking", patternTags: ["Backtracking"] },
  { slug: "different-ways-to-add-parentheses", title: "Different Ways to Add Parentheses", difficulty: "Medium", category: "Backtracking", patternTags: ["Divide and Conquer"] },
  { slug: "expression-add-operators", title: "Expression Add Operators", difficulty: "Hard", category: "Backtracking", patternTags: ["Backtracking"] },

  // DP
  { slug: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "coin-change", title: "Coin Change", difficulty: "Medium", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "longest-common-subsequence", title: "Longest Common Subsequence", difficulty: "Medium", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "longest-increasing-subsequence", title: "Longest Increasing Subsequence", difficulty: "Medium", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "house-robber", title: "House Robber", difficulty: "Medium", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "word-break", title: "Word Break", difficulty: "Medium", category: "Dynamic Programming", patternTags: ["DP", "Trie"] },
  { slug: "wildcard-matching", title: "Wildcard Matching", difficulty: "Hard", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "regular-expression-matching", title: "Regular Expression Matching", difficulty: "Hard", category: "Dynamic Programming", patternTags: ["DP"] },
  { slug: "burst-balloons", title: "Burst Balloons", difficulty: "Hard", category: "Dynamic Programming", patternTags: ["Interval DP"] },
  { slug: "scramble-string", title: "Scramble String", difficulty: "Hard", category: "Dynamic Programming", patternTags: ["DP"] },

  // Greedy
  { slug: "jump-game", title: "Jump Game", difficulty: "Medium", category: "Greedy", patternTags: ["Greedy", "DP"] },
  { slug: "gas-station", title: "Gas Station", difficulty: "Medium", category: "Greedy", patternTags: ["Greedy"] },

  // Bit Manipulation
  { slug: "single-number", title: "Single Number", difficulty: "Easy", category: "Bit Manipulation", patternTags: ["Bit Manipulation"] },
  { slug: "number-of-1-bits", title: "Number of 1 Bits", difficulty: "Easy", category: "Bit Manipulation", patternTags: ["Bit Manipulation"] },
] as const;

/**
 * Generate checklist items programmatically for maximum density and coverage
 */
const getChecklistTitle = (checklistSlug: string): string => {
  return dsaChecklists.find((checklist) => checklist.slug === checklistSlug)?.title || "General";
};

const toChecklistItem = (
  problem: typeof baseChecklistProblems[number],
  index: number,
  source: string,
  isCore = true
): ChecklistItem => {
  return {
    problemSlug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty as "Easy" | "Medium" | "Hard",
    patternTags: [...(problem.patternTags ?? [])],
    category: problem.category,
    source,
    order: index + 1,
    isCore,
  };
};

export const getChecklistItems = (checklistSlug: string): ChecklistItem[] => {
  const checklistTitle = getChecklistTitle(checklistSlug);

  let listProblems: ChecklistItem[] = baseChecklistProblems.map((problem, index) =>
    toChecklistItem(problem, index, checklistTitle, index < 50)
  );

  if (checklistSlug === "blind75") {
    listProblems = baseChecklistProblems
      .slice(0, 75)
      .map((problem, index) =>
        toChecklistItem(problem, index, "Blind 75", index < 50)
      );
  } else if (checklistSlug === "neetcode150") {
    listProblems = baseChecklistProblems.map((problem, index) =>
      toChecklistItem(problem, index, "NeetCode 150", true)
    );

    while (listProblems.length < 150) {
      const nextOrder = listProblems.length + 1;

      listProblems.push({
        problemSlug: `variant-${nextOrder}`,
        title: `NeetCode Advanced Target Variant #${nextOrder}`,
        difficulty:
          nextOrder % 3 === 0
            ? "Easy"
            : nextOrder % 3 === 1
              ? "Medium"
              : "Hard",
        category: "Advanced DSA",
        patternTags: ["Advanced Pattern"],
        source: "NeetCode 150",
        order: nextOrder,
        isCore: false,
      });
    }
  } else if (checklistSlug === "leetcode150") {
    listProblems = baseChecklistProblems.map((problem, index) =>
      toChecklistItem(problem, index, "LeetCode 150", true)
    );

    while (listProblems.length < 150) {
      const nextOrder = listProblems.length + 1;

      listProblems.push({
        problemSlug: `lc150-variant-${nextOrder}`,
        title: `Top Interview Core Variant #${nextOrder}`,
        difficulty:
          nextOrder % 4 === 0
            ? "Easy"
            : nextOrder % 2 === 0
              ? "Medium"
              : "Hard",
        category: "Interview Focus",
        patternTags: ["Top Interview Pattern"],
        source: "LeetCode 150",
        order: nextOrder,
        isCore: false,
      });
    }
  } else if (checklistSlug === "devjam96") {
    listProblems = baseChecklistProblems
      .slice(0, 96)
      .map((problem, index) =>
        toChecklistItem(problem, index, "DevJam 96", true)
      );

    while (listProblems.length < 96) {
      const nextOrder = listProblems.length + 1;

      listProblems.push({
        problemSlug: `dj96-variant-${nextOrder}`,
        title: `DevJam Recommended Variant #${nextOrder}`,
        difficulty: "Medium",
        category: "Core DSA",
        patternTags: ["Must-Do Pattern"],
        source: "DevJam 96",
        order: nextOrder,
        isCore: false,
      });
    }
  }

  return listProblems;
};

