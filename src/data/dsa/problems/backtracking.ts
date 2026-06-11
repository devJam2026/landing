import { Problem } from "./types";

export const backtrackingProblems: Problem[] = [
  {
    id: 16,
    title: "Permutations",
    slug: "permutations",
    difficulty: "Medium",
    pillarSlug: "backtracking",
    statement: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    starterCode: `function permute(nums) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function permuteBrute(nums) {
  // Generate all sequences of size N from array elements.
  // Validate if each sequence contains unique elements.
  return [];
}`,
      language: "javascript",
      explanation: "Generate all permutations by checking every combination of elements. Very slow because it generates duplicate checks.",
    },
    better: {
      code: `function permuteBetter(nums) {
  const result = [];
  function backtrack(current, visited) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let num of nums) {
      if (visited.has(num)) continue;
      visited.add(num);
      current.push(num);
      backtrack(current, visited);
      current.pop();
      visited.delete(num);
    }
  }
  backtrack([], new Set());
  return result;
}`,
      language: "javascript",
      explanation: "Classic backtracking. Traverse indices recursively, storing choices in a visited set. Pop and unvisit choices on return. Time complexity is O(N! * N).",
    },
    optimal: {
      code: `function permuteOptimal(nums) {
  const result = [];
  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack(0);
  return result;
}`,
      language: "javascript",
      explanation: "In-place backtracking by swapping elements. Avoids allocating auxiliary visited sets, reducing call overhead and memory mutations.",
    },
    timeComplexity: "O(n! * n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2]", start: 0 }, description: "Start backtrack(0). Loop i from 0 to 1." },
      { line: 2, variables: { numsState: "[1, 2]" }, description: "i = 0. Swap nums[0] with nums[0] (no change). Recurse backtrack(1)." },
      { line: 3, variables: { numsState: "[1, 2]" }, description: "Within backtrack(1), i = 1 (start=1). Swap nums[1] with nums[1]. Recurse backtrack(2)." },
      { line: 4, variables: { permutations: "[[1, 2]]" }, description: "start = 2 (equals array length). Push copy of [1, 2] to results. Return." },
      { line: 5, variables: { numsState: "[2, 1]" }, description: "Back in backtrack(0), i = 1. Swap nums[0] with nums[1] to get [2, 1]. Recurse backtrack(1)." },
      { line: 6, variables: { permutations: "[[1, 2], [2, 1]]" }, description: "Follow recursion to leaf, append [2, 1]. Swap back to restore [1, 2]. Return final array." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity O(N! * N)?",
        answer: "For N distinct numbers, there are N! permutations. Generating each permutation takes O(N) time because we copy the array of length N into the result array once we reach a leaf node. Therefore, the total time complexity is O(N! * N).",
      }
    ],
  },
  {
    id: 83,
    title: "Subsets",
    slug: "subsets",
    difficulty: "Medium",
    pillarSlug: "backtracking",
    statement: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    starterCode: `function subsets(nums) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function subsetsBrute(nums) {
  const result = [];
  const total = 1 << nums.length;
  for (let i = 0; i < total; i++) {
    const subset = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Iterate from 0 to 2^N - 1. For each number, examine its binary bits. If the j-th bit is set, add nums[j] to the subset. Runs in O(N * 2^N) time.",
    },
    better: {
      code: `function subsetsRecursive(nums) {
  const result = [];
  function helper(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }
    // Exclude current element
    helper(index + 1, current);
    // Include current element
    current.push(nums[index]);
    helper(index + 1, current);
    current.pop();
  }
  helper(0, []);
  return result;
}`,
      language: "javascript",
      explanation: "Standard binary recursion. At each step, either choose to include nums[index] or exclude it. Requires copying the array at leaves, taking O(N * 2^N) time.",
    },
    optimal: {
      code: `function subsetsOptimal(nums) {
  const result = [];
  function backtrack(start, current) {
    result.push([...current]);
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  backtrack(0, []);
  return result;
}`,
      language: "javascript",
      explanation: "Depth-First Search backtracking. Instead of inclusion/exclusion, grow subsets incrementally. Since every state of `current` is a valid subset, add it to results immediately. Minimizes duplicate steps.",
    },
    timeComplexity: "O(n * 2^n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2]", start: 0, current: "[]" }, description: "Call backtrack(0, []). Push [] to result." },
      { line: 2, variables: { i: 0, current: "[1]" }, description: "Loop i = 0. Push nums[0]=1 to current. Recurse backtrack(1, [1])." },
      { line: 3, variables: { current: "[1]", result: "[[], [1]]" }, description: "Call backtrack(1, [1]). Push [1] to result. Loop i = 1." },
      { line: 4, variables: { i: 1, current: "[1, 2]" }, description: "Push nums[1]=2 to current. Recurse backtrack(2, [1, 2])." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity O(N * 2^N)?",
        answer: "There are exactly 2^N subsets in a power set of size N. For each subset, copying it into the results list takes O(N) time in the worst case. Thus, the total time complexity is O(N * 2^N)."
      }
    ]
  },
  {
    id: 84,
    title: "Combination Sum",
    slug: "combination-sum",
    difficulty: "Medium",
    pillarSlug: "backtracking",
    statement: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times.",
    starterCode: `function combinationSum(candidates, target) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function combinationSumBrute(candidates, target) {
  // Generate all possible sequences that sum to target using recursion.
  // Sort and filter duplicate combinations using set checks.
  return [];
}`,
      language: "javascript",
      explanation: "Generate combinations by brute-forcing all paths, and then sort/uniquify arrays. Extremely slow and requires huge space.",
    },
    better: {
      code: `function combinationSumSort(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  function backtrack(start, current, sum) {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) break; // Prune early
      current.push(candidates[i]);
      backtrack(i, current, sum + candidates[i]);
      current.pop();
    }
  }
  backtrack(0, [], 0);
  return result;
}`,
      language: "javascript",
      explanation: "Sort candidates first. Recursively add candidates, passing the current index to allow reuse of numbers. If the sum exceeds the target, break out of the loop immediately because further candidates are even larger.",
    },
    optimal: {
      code: `function combinationSumOptimal(candidates, target) {
  const result = [];
  function backtrack(index, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (index === candidates.length || remaining < 0) {
      return;
    }
    
    // Choice 1: Skip candidates[index]
    backtrack(index + 1, current, remaining);
    
    // Choice 2: Include candidates[index] and stay on the same index
    current.push(candidates[index]);
    backtrack(index, current, remaining - candidates[index]);
    current.pop();
  }
  backtrack(0, [], target);
  return result;
}`,
      language: "javascript",
      explanation: "A decision tree model where at each candidate we make two choices: either skip to the next candidate, or pick the current candidate and remain at the current index. This eliminates nested loops and runs cleanly.",
    },
    timeComplexity: "O(2^t)",
    spaceComplexity: "O(t/m)",
    dryRun: [
      { line: 1, variables: { candidates: "[2, 3]", target: 5, index: 0, current: "[]", remaining: 5 }, description: "Start combinationSum. Pick 2. remaining = 3." },
      { line: 2, variables: { current: "[2]", remaining: 3 }, description: "Stay at index 0, pick 2 again. remaining = 1." },
      { line: 3, variables: { current: "[2, 2]", remaining: 1 }, description: "Stay at index 0, pick 2 again. remaining = -1. backtrack returns due to negative remaining." },
      { line: 4, variables: { current: "[2]", remaining: 3 }, description: "Backtrack. Skip index 0 (value 2), proceed to index 1 (value 3). Pick 3. remaining = 0. Found combination [2, 3]!" }
    ],
    interviewDiscussion: [
      {
        question: "How do you define the space complexity of this backtracking solution?",
        answer: "The space complexity is determined by the recursion stack depth. In the worst case, the stack depth is O(target / min_candidate), which is the maximum number of times we can stack the smallest candidate to reach the target."
      }
    ]
  },
  {
    id: 85,
    title: "Word Search",
    slug: "word-search",
    difficulty: "Medium",
    pillarSlug: "backtracking",
    statement: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    starterCode: `function exist(board, word) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function existBrute(board, word) {
  // Find matches and keep a separate visited 2D boolean array.
  // Re-allocate visited on every path search.
  return false;
}`,
      language: "javascript",
      explanation: "Checks word characters by spawning recursion with separate 2D visited matrices. Duplicates state and triggers heavy GC cycles.",
    },
    better: {
      code: `function existBetter(board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }
  function backtrack(r, c, index) {
    if (index === word.length) return true;
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[index]) return false;
    
    board[r][c] = "#"; // Mask cell
    const found = backtrack(r + 1, c, index + 1) ||
                  backtrack(r - 1, c, index + 1) ||
                  backtrack(r, c + 1, index + 1) ||
                  backtrack(r, c - 1, index + 1);
    board[r][c] = word[index]; // Unmask cell
    return found;
  }
  return false;
}`,
      language: "javascript",
      explanation: "DFS word traversal. Instead of a separate 2D array, temporarily modify the board cell to '#' to prevent visiting it again. Restore the cell value upon backtrack return.",
    },
    optimal: {
      code: `function existOptimal(board, word) {
  const m = board.length;
  const n = board[0].length;
  
  // Fast fail character frequency check
  const wordFreq = {};
  for (const char of word) wordFreq[char] = (wordFreq[char] || 0) + 1;
  const boardFreq = {};
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const char = board[r][c];
      boardFreq[char] = (boardFreq[char] || 0) + 1;
    }
  }
  for (const char in wordFreq) {
    if (!boardFreq[char] || boardFreq[char] < wordFreq[char]) return false;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0] && backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  function backtrack(r, c, index) {
    if (index === word.length) return true;
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[index]) return false;

    const temp = board[r][c];
    board[r][c] = "#";

    const found = backtrack(r + 1, c, index + 1) ||
                  backtrack(r - 1, c, index + 1) ||
                  backtrack(r, c + 1, index + 1) ||
                  backtrack(r, c - 1, index + 1);

    board[r][c] = temp;
    return found;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Optimized DFS search. Checks if all letters of the word exist in sufficient quantities in the board first. If not, returns false instantly. Then performs cell-masking in-place backtracking.",
    },
    timeComplexity: "O(m * n * 4^l)",
    spaceComplexity: "O(l)",
    dryRun: [
      { line: 1, variables: { board: '[["A","B"],["C","D"]]', word: '"AB"', r: 0, c: 0 }, description: "Match board[0][0]='A' with word[0]. Mask board[0][0]='#'." },
      { line: 2, variables: { nextChar: '"B"', index: 1 }, description: "Check adjacent cells. board[0][1]='B' matches word[1]. Mask board[0][1]='#'." },
      { line: 3, variables: { index: 2 }, description: "index = word.length. Return true immediately." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity O(M * N * 4^L)?",
        answer: "There are M * N starting cells. From each cell, we can explore in up to 4 directions. The recursion can go up to a depth equal to the length of the word (L). Thus, the worst-case time complexity is O(M * N * 4^L)."
      }
    ]
  },
  {
    id: 86,
    title: "N-Queens",
    slug: "n-queens",
    difficulty: "Hard",
    pillarSlug: "backtracking",
    statement: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board layout of the n-queens' placement, where 'Q' and '.' indicate a queen and an empty space, respectively.",
    starterCode: `function solveNQueens(n) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function solveQueensBrute(n) {
  // Place N queens in all possible coordinates of board.
  // Verify after placement if any two queens attack.
  return [];
}`,
      language: "javascript",
      explanation: "Placing N queens in all combinations on an N x N board is O((N^2) choose N), which is astronomically slow.",
    },
    better: {
      code: `function solveQueensBetter(n) {
  const result = [];
  const board = Array(n).fill(0).map(() => Array(n).fill('.'));
  
  function isValid(r, c) {
    for (let i = 0; i < r; i++) {
      if (board[i][c] === 'Q') return false;
      const cDiff = r - i;
      if (c - cDiff >= 0 && board[i][c - cDiff] === 'Q') return false;
      if (c + cDiff < n && board[i][c + cDiff] === 'Q') return false;
    }
    return true;
  }
  
  function backtrack(r) {
    if (r === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (isValid(r, c)) {
        board[r][c] = 'Q';
        backtrack(r + 1);
        board[r][c] = '.';
      }
    }
  }
  backtrack(0);
  return result;
}`,
      language: "javascript",
      explanation: "Place queens row by row. At each row, check if placing a queen in col `c` attacks any previously placed queens. Runs backtrack(row + 1). Checks diagonal attacks dynamically in O(N) at each node.",
    },
    optimal: {
      code: `function solveNQueensOptimal(n) {
  const result = [];
  const board = Array(n).fill(0).map(() => Array(n).fill('.'));
  const cols = new Set();
  const diag1 = new Set(); // r - c
  const diag2 = new Set(); // r + c
  
  function backtrack(r) {
    if (r === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
      
      board[r][c] = 'Q';
      cols.add(c);
      diag1.add(r - c);
      diag2.add(r + c);
      
      backtrack(r + 1);
      
      board[r][c] = '.';
      cols.delete(c);
      diag1.delete(r - c);
      diag2.delete(r + c);
    }
  }
  
  backtrack(0);
  return result;
}`,
      language: "javascript",
      explanation: "Highly optimized backtracking using sets. Instead of scanning previous rows to check attacks (taking O(N) time), maintain three hash sets to record occupied columns, main diagonals (r - c), and anti-diagonals (r + c). Checks take O(1) time.",
    },
    timeComplexity: "O(n!)",
    spaceComplexity: "O(n^2)",
    dryRun: [
      { line: 1, variables: { n: 4, r: 0, cols: "{}", diag1: "{}", diag2: "{}" }, description: "Call backtrack(0). Place Queen at board[0][0]. cols={0}, diag1={0}, diag2={0}." },
      { line: 2, variables: { r: 1 }, description: "For row 1, cols 0 and 1 are attacked. Place Queen at board[1][2]. cols={0, 2}, diag1={0, -1}, diag2={0, 3}." },
      { line: 3, variables: { r: 2 }, description: "For row 2, all columns are attacked. Dead end. Backtrack, remove Queen from board[1][2]." }
    ],
    interviewDiscussion: [
      {
        question: "Why do the main diagonal coordinates remain constant as r - c, and anti-diagonal as r + c?",
        answer: "Along any diagonal running from top-left to bottom-right, the difference between row and column indices (`r - c`) is invariant. Along diagonals running from top-right to bottom-left, the sum of indices (`r + c`) is invariant. This lets us track attack paths in O(1) time."
      }
    ]
  },
  {
    id: 87,
    title: "Letter Combinations of a Phone Number",
    slug: "letter-combinations-of-a-phone-number",
    difficulty: "Medium",
    pillarSlug: "backtracking",
    statement: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.",
    starterCode: `function letterCombinations(digits) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function letterCombinationsBrute(digits) {
  // Compute combination sizes, allocate flat arrays and use modulus arithmetic loops.
  return [];
}`,
      language: "javascript",
      explanation: "Difficult to formulate iteratively for variable lengths without nested loops, making recursion cleaner.",
    },
    better: {
      code: `function letterCombinationsRec(digits) {
  if (!digits) return [];
  const map = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };
  const res = [];
  function backtrack(index, currentStr) {
    if (index === digits.length) {
      res.push(currentStr);
      return;
    }
    const letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, currentStr + letters[i]);
    }
  }
  backtrack(0, "");
  return res;
}`,
      language: "javascript",
      explanation: "Standard string concatenation backtracking. Recursively appends characters, which is simple but incurs string allocation overhead on every stack frame.",
    },
    optimal: {
      code: `function letterCombinationsOptimal(digits) {
  if (!digits) return [];
  const map = {
    '2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'], '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']
  };
  const result = [];
  const current = [];
  
  function backtrack(index) {
    if (index === digits.length) {
      result.push(current.join(''));
      return;
    }
    const letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      current.push(letters[i]);
      backtrack(index + 1);
      current.pop();
    }
  }
  
  backtrack(0);
  return result;
}`,
      language: "javascript",
      explanation: "Optimized backtracking using a character array buffer `current`. Avoids repeated immutable string concatenation allocations, creating the final string only at the leaves of the recursion tree.",
    },
    timeComplexity: "O(4^n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { digits: '"23"', index: 0, current: "[]" }, description: "Start backtrack(0). Digit '2' maps to a, b, c." },
      { line: 2, variables: { index: 1, current: '["a"]' }, description: "Push 'a'. Recurse backtrack(1). Digit '3' maps to d, e, f." },
      { line: 3, variables: { index: 2, current: '["a", "d"]' }, description: "Push 'd'. Recurse backtrack(2). Join and push 'ad' to result. Pop 'd'." },
      { line: 4, variables: { current: '["a", "e"]' }, description: "Push 'e'. Recurse backtrack(2). Join and push 'ae' to result. Pop 'e'." }
    ],
    interviewDiscussion: [
      {
        question: "What is the time complexity if digits contains only 7s and 9s?",
        answer: "Since 7 and 9 have 4 letters mapped to them, the time complexity in the worst-case (all digits are 7 or 9) is O(4^N), where N is the number of digits in the input string."
      }
    ]
  },
  {
    id: 88,
    title: "Sudoku Solver",
    slug: "sudoku-solver",
    difficulty: "Hard",
    pillarSlug: "backtracking",
    statement: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: 1. Each of the digits 1-9 must occur exactly once in each row. 2. Each of the digits 1-9 must occur exactly once in each column. 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. Empty cells are indicated by the character '.'.",
    starterCode: `function solveSudoku(board) {
  // Write your code here
}`,
    bruteForce: {
      code: `function solveSudokuBrute(board) {
  // Try all combinations of digits 1-9 in every empty cell.
  // Do not perform intermediate validity checks; only check at the end.
}`,
      language: "javascript",
      explanation: "Unfeasible. There are 9^81 possible grid states. A brute force check will not finish in a lifetime.",
    },
    better: {
      code: `function solveSudokuRec(board) {
  function isValid(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === val) return false;
      if (board[i][c] === val) return false;
      const subRow = 3 * Math.floor(r / 3) + Math.floor(i / 3);
      const subCol = 3 * Math.floor(c / 3) + (i % 3);
      if (board[subRow][subCol] === val) return false;
    }
    return true;
  }
  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let val = 1; val <= 9; val++) {
            const char = val.toString();
            if (isValid(r, c, char)) {
              board[r][c] = char;
              if (solve()) return true;
              board[r][c] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve();
}`,
      language: "javascript",
      explanation: "Traverse cells, locate empty slots, and try placing valid characters '1'-'9'. Uses a helper function `isValid` to check row, column, and box constraints. Backtracks if a dead end is reached.",
    },
    optimal: {
      code: `function solveSudokuOptimal(board) {
  const rows = Array(9).fill(0).map(() => Array(10).fill(false));
  const cols = Array(9).fill(0).map(() => Array(10).fill(false));
  const boxes = Array(9).fill(0).map(() => Array(10).fill(false));

  // Initialize constraints
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        const val = parseInt(board[r][c]);
        const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        rows[r][val] = true;
        cols[c][val] = true;
        boxes[boxIdx][val] = true;
      }
    }
  }

  function solve(r, c) {
    if (r === 9) return true;
    if (c === 9) return solve(r + 1, 0);
    if (board[r][c] !== '.') return solve(r, c + 1);

    const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
    for (let val = 1; val <= 9; val++) {
      if (!rows[r][val] && !cols[c][val] && !boxes[boxIdx][val]) {
        board[r][c] = val.toString();
        rows[r][val] = true;
        cols[c][val] = true;
        boxes[boxIdx][val] = true;

        if (solve(r, c + 1)) return true;

        board[r][c] = '.';
        rows[r][val] = false;
        cols[c][val] = false;
        boxes[boxIdx][val] = false;
      }
    }
    return false;
  }

  solve(0, 0);
}`,
      language: "javascript",
      explanation: "Optimized constraint tracking. Maintains rows, columns, and 3x3 box lookup structures to perform cell validity tests in O(1) time, avoiding the O(9) scan loop inside `isValid` of the base backtracking solution.",
    },
    timeComplexity: "O(9^(m))",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { r: 0, c: 0, val: 5 }, description: "Cell (0,0) is empty. Place 5. Check constraints for row 0, col 0, box 0. Success." },
      { line: 2, variables: { r: 0, c: 1, val: 3 }, description: "Proceed to (0,1). Place 3. Check constraints. Success." },
      { line: 3, variables: { r: 0, c: 2, val: 4 }, description: "Proceed to (0,2). Place 4. Check constraints. Success. Move to next cells." }
    ],
    interviewDiscussion: [
      {
        question: "Why are Sudoku space and time complexities considered O(1)?",
        answer: "Since a Sudoku board is always of fixed dimensions (9x9), the recursion stack depth and search operations have a constant upper bound. Therefore, the absolute asymptotic complexity is O(1)."
      }
    ]
  }
];
