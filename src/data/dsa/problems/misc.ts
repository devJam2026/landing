import { Problem } from "./types";

export const miscProblems: Problem[] = [
  {
    id: 115,
    title: "Two Sum II - Input Array Is Sorted",
    slug: "two-sum-ii-input-array-is-sorted",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.",
    starterCode: `function twoSum(numbers, target) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function twoSumBrute(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "Use nested loops to check every pair of elements. Does not leverage the sorted property, running in O(N^2) time.",
    },
    better: {
      code: `function twoSumBinarySearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    let left = i + 1;
    let right = numbers.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (numbers[mid] === complement) return [i + 1, mid + 1];
      if (numbers[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "For each element, perform a binary search in the remaining array to locate the complement. Runs in O(N log N) time.",
    },
    optimal: {
      code: `function twoSumOptimal(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`,
      language: "javascript",
      explanation: "Two pointers technique. Place pointers at the beginning and the end. Since the array is sorted, if their sum is less than target, move the left pointer forward to increase the sum. If the sum is greater than target, move the right pointer backward to decrease the sum. Converges in O(N) steps with O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { numbers: "[2, 7, 11, 15]", target: 9, left: 0, right: 3 }, description: "Initialize pointers at ends: left=0 (2), right=3 (15)." },
      { line: 2, variables: { sum: 17 }, description: "Sum = 2 + 15 = 17. 17 > 9, decrement right to 2." },
      { line: 3, variables: { left: 0, right: 2, sum: 13 }, description: "Sum = 2 + 11 = 13. 13 > 9, decrement right to 1." },
      { line: 4, variables: { left: 0, right: 1, sum: 9 }, description: "Sum = 2 + 7 = 9. Match found! Return [1, 2] (1-indexed)." }
    ],
    interviewDiscussion: [
      {
        question: "Why does the two-pointer approach not miss any potential pairs?",
        answer: "Since the array is sorted, if `numbers[left] + numbers[right] > target`, then any elements after `left` added to `right` will also be greater than target (because indices > `left` contain larger values). Thus, it is safe to eliminate `right` from consideration and decrement it."
      }
    ]
  },
  {
    id: 116,
    title: "Squares of a Sorted Array",
    slug: "squares-of-a-sorted-array",
    difficulty: "Easy",
    pillarSlug: "arrays",
    statement: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    starterCode: `function sortedSquares(nums) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function sortedSquaresBrute(nums) {
  const squared = nums.map(x => x * x);
  return squared.sort((a, b) => a - b);
}`,
      language: "javascript",
      explanation: "Square every element in the array, then perform a standard sort. Runs in O(N log N) time.",
    },
    better: {
      code: `function sortedSquaresInsertion(nums) {
  const res = [];
  for (const num of nums) {
    const sq = num * num;
    // Insert into sorted position
    let i = res.length - 1;
    while (i >= 0 && res[i] > sq) {
      res[i + 1] = res[i];
      i--;
    }
    res[i + 1] = sq;
  }
  return res;
}`,
      language: "javascript",
      explanation: "Square elements one-by-one and insert them in sorted order. Runs in O(N^2) time.",
    },
    optimal: {
      code: `function sortedSquaresOptimal(nums) {
  const n = nums.length;
  const result = Array(n).fill(0);
  let left = 0;
  let right = n - 1;
  let p = n - 1;
  
  while (left <= right) {
    const leftSq = nums[left] * nums[left];
    const rightSq = nums[right] * nums[right];
    if (leftSq > rightSq) {
      result[p] = leftSq;
      left++;
    } else {
      result[p] = rightSq;
      right--;
    }
    p--;
  }
  return result;
}`,
      language: "javascript",
      explanation: "Two pointers starting at the boundaries. The largest squares will always be at the extremes (due to negative numbers squaring to positive). Compare the square of the left and right pointers. Write the larger square to the end of the results array (p = N-1) and move the corresponding pointer inward. Runs in linear O(N) time and O(1) auxiliary space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[-4, -1, 0, 3]", n: 4, left: 0, right: 3, p: 3 }, description: "Pointers at ends. left=-4, right=3." },
      { line: 2, variables: { leftSq: 16, rightSq: 9, write: 16 }, description: "16 > 9. Write 16 to index 3. increment left to 1, decrement p to 2." },
      { line: 3, variables: { left: 1, right: 3, leftSq: 1, rightSq: 9, write: 9 }, description: "1 < 9. Write 9 to index 2. decrement right to 2, decrement p to 1." }
    ],
    interviewDiscussion: [
      {
        question: "Why write to the end of the array instead of the beginning?",
        answer: "By comparing the absolute values (or squares) at the boundaries, we identify the largest values first. Therefore, we write them starting at the end of the array (index N-1) working backwards to index 0, which yields a sorted array in a single pass."
      }
    ]
  },
  {
    id: 117,
    title: "Backspace String Compare",
    slug: "backspace-string-compare",
    difficulty: "Easy",
    pillarSlug: "stack",
    statement: "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.",
    starterCode: `function backspaceCompare(s, t) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function backspaceCompareBrute(s, t) {
  // Repeatedly scan string for '#' and remove it along with the preceding char.
  // Performs O(N^2) string splices.
  return false;
}`,
      language: "javascript",
      explanation: "Search for '#' in strings. Slice the string to delete the '#' and the preceding character. Very slow due to repeated string copying.",
    },
    better: {
      code: `function backspaceCompareStack(s, t) {
  function build(str) {
    const stack = [];
    for (const char of str) {
      if (char !== '#') {
        stack.push(char);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
    return stack.join('');
  }
  return build(s) === build(t);
}`,
      language: "javascript",
      explanation: "Stack simulation. Push letters onto a stack, and pop when seeing '#'. Join the stack at the end. Runs in O(S + T) time and O(S + T) space.",
    },
    optimal: {
      code: `function backspaceCompareOptimal(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;
  
  while (i >= 0 || j >= 0) {
    // Find next valid char in S
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++; i--;
      } else if (skipS > 0) {
        skipS--; i--;
      } else {
        break;
      }
    }
    // Find next valid char in T
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++; j--;
      } else if (skipT > 0) {
        skipT--; j--;
      } else {
        break;
      }
    }
    
    // Compare characters
    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
    if ((i >= 0) !== (j >= 0)) return false; // One string ended before the other
    i--;
    j--;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Two pointers scanning backward. Loop from the end of the strings. Maintain backspace counts (`skipS`, `skipT`). If we see '#', increment skip and move pointer. If skip > 0, skip the current character and decrement skip. Once both pointers are on their next valid character, compare them. Runs in O(S + T) time and O(1) space.",
    },
    timeComplexity: "O(s + t)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"ab#c"', t: '"ad#c"', i: 3, j: 3 }, description: "Scan backward. s[3]='c', t[3]='c'. Match. Decrement pointers." },
      { line: 2, variables: { i: 2, j: 2, sChar: '"#"', tChar: '"#"' }, description: "Both see '#'. skipS=1, skipT=1. Pointers move to 1." },
      { line: 3, variables: { i: 1, j: 1, skipS: 1, skipT: 1 }, description: "Pointers on s[1]='b' and t[1]='d'. Since skips > 0, decrement skips to 0, move pointers to 0." },
      { line: 4, variables: { i: 0, j: 0, sVal: '"a"', tVal: '"a"' }, description: "Pointers on 'a' and 'a'. Match. Pointers exit. Return true." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we scan backward instead of forward for the O(1) space solution?",
        answer: "Scanning forward is difficult because when we see a character, we do not know if it will be deleted by a future backspace. Scanning backward resolves this immediately: if we see a backspace, we know for certain it applies to the preceding characters, allowing us to skip them dynamically."
      }
    ]
  },
  {
    id: 118,
    title: "Subarray Product Less Than K",
    slug: "subarray-product-less-than-k",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.",
    starterCode: `function numSubarrayProductLessThanK(nums, k) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function numSubarrayProductBrute(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = i; j < nums.length; j++) {
      prod *= nums[j];
      if (prod < k) count++;
      else break;
    }
  }
  return count;
}`,
      language: "javascript",
      explanation: "Iterate through all possible starting and ending indices, computing the product. Runs in O(N^2) time.",
    },
    better: {
      code: `function numSubarrayProductLog(nums, k) {
  if (k <= 0) return 0;
  // Convert elements to logarithms: log(prod) = sum(log(x))
  // Then use binary search on prefix sums.
  return 0;
}`,
      language: "javascript",
      explanation: "Convert products to sums using log(a * b) = log(a) + log(b). Allows range sum queries but suffers from floating-point precision issues.",
    },
    optimal: {
      code: `function numSubarrayProductLessThanKOptimal(nums, k) {
  if (k <= 1) return 0;
  let count = 0;
  let prod = 1;
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k && left <= right) {
      prod /= nums[left];
      left++;
    }
    count += right - left + 1;
  }
  return count;
}`,
      language: "javascript",
      explanation: "Sliding Window. Maintain a product `prod` of the window [left, right]. For each `right`, multiply `prod` by `nums[right]`. If `prod >= k`, shrink the window from the left by dividing by `nums[left]` and incrementing `left`. The number of valid subarrays ending at `right` is `right - left + 1`. Sum this up. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[10, 5, 2]", k: 100, count: 0, left: 0 }, description: "Initialize variables." },
      { line: 2, variables: { right: 0, prod: 10, count: 1 }, description: "right = 0. prod = 10 (< 100). count += 0 - 0 + 1 = 1." },
      { line: 3, variables: { right: 1, prod: 50, count: 3 }, description: "right = 1. prod = 50 (< 100). count += 1 - 0 + 1 = 3 (subarrays: [10], [5], [10,5])." },
      { line: 4, variables: { right: 2, prod: 100 }, description: "right = 2. prod = 100 (>= 100). Shrink: prod /= nums[0] (10) = 10. left = 1." },
      { line: 5, variables: { left: 1, prod: 10, count: 5 }, description: "prod is 10 (< 100). count += 2 - 1 + 1 = 5 (added [2], [5,2]). Return 5." }
    ],
    interviewDiscussion: [
      {
        question: "Why does `right - left + 1` give the count of valid subarrays ending at index `right`?",
        answer: "For a valid window [left, right], any subarray starting at an index `j` (where `left <= j <= right`) and ending at `right` is also valid (since all elements are positive, smaller windows have smaller products). There are exactly `right - left + 1` such starting indices."
      }
    ]
  },
  {
    id: 119,
    title: "Min Cost Climbing Stairs",
    slug: "min-cost-climbing-stairs",
    difficulty: "Easy",
    pillarSlug: "dynamic-programming",
    statement: "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.",
    starterCode: `function minCostClimbingStairs(cost) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function minCostBrute(cost) {
  function recurse(i) {
    if (i >= cost.length) return 0;
    return cost[i] + Math.min(recurse(i + 1), recurse(i + 2));
  }
  return Math.min(recurse(0), recurse(1));
}`,
      language: "javascript",
      explanation: "Try all step paths recursively, adding cost at each step. Runs in O(2^N) time.",
    },
    better: {
      code: `function minCostMemo(cost) {
  const memo = {};
  function recurse(i) {
    if (i >= cost.length) return 0;
    if (i in memo) return memo[i];
    return memo[i] = cost[i] + Math.min(recurse(i + 1), recurse(i + 2));
  }
  return Math.min(recurse(0), recurse(1));
}`,
      language: "javascript",
      explanation: "Top-down memoization: cache step costs to avoid redundant calculations of subproblem stair paths. Runs in O(N) time and space.",
    },
    optimal: {
      code: `function minCostClimbingStairsOptimal(cost) {
  let prev2 = cost[0];
  let prev1 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    const curr = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = curr;
  }
  return Math.min(prev1, prev2);
}`,
      language: "javascript",
      explanation: "Bottom-up dynamic programming. Let prev2 be the cost of the step before last, and prev1 be the last step. The cost of climbing to step `i` is `cost[i] + min(prev1, prev2)`. We only need to maintain these two values, optimizing space to O(1). Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { cost: "[10, 15, 20]", prev2: 10, prev1: 15 }, description: "Start loop at i = 2." },
      { line: 2, variables: { i: 2, curr: 30 }, description: "Step 2 (cost 20). curr = 20 + min(10, 15) = 30. Update prev2 = 15, prev1 = 30." },
      { line: 3, variables: { result: 15 }, description: "Exit loop. Return min(prev1, prev2) = min(30, 15) = 15." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the final answer `min(prev1, prev2)` instead of just `prev1`?",
        answer: "We can reach the top floor (which is beyond the last index N-1) either by taking a step of size 1 from step N-1 (cost accumulated in `prev1`) or by taking a step of size 2 from step N-2 (cost accumulated in `prev2`). The minimum of these two values gives the overall cheapest cost."
      }
    ]
  },
  {
    id: 120,
    title: "Unique Paths II",
    slug: "unique-paths-ii",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "You are given an m x n integer array grid obstacleGrid. A robot is initially located at the top-left corner (i.e., obstacleGrid[0][0]). The robot tries to move to the bottom-right corner (i.e., obstacleGrid[m - 1][n - 1]). The robot can only move either down or right at any point in time. An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    starterCode: `function uniquePathsWithObstacles(obstacleGrid) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function uniquePathsBrute(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  function recurse(r, c) {
    if (r >= m || c >= n || obstacleGrid[r][c] === 1) return 0;
    if (r === m - 1 && c === n - 1) return 1;
    return recurse(r + 1, c) + recurse(r, c + 1);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Recursively search all paths, returning 0 if a cell is an obstacle or out of bounds. Runs in O(2^(M+N)) time.",
    },
    better: {
      code: `function uniquePathsMemo(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const memo = {};
  function recurse(r, c) {
    if (r >= m || c >= n || obstacleGrid[r][c] === 1) return 0;
    if (r === m - 1 && c === n - 1) return 1;
    const key = \`\${r}-\${c}\`;
    if (key in memo) return memo[key];
    return memo[key] = recurse(r + 1, c) + recurse(r, c + 1);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down memoization: cache paths for coordinates (r, c) to avoid re-evaluating paths blocked by obstacles multiple times. Runs in O(M * N) time and space.",
    },
    optimal: {
      code: `function uniquePathsWithObstaclesOptimal(obstacleGrid) {
  if (!obstacleGrid.length || obstacleGrid[0][0] === 1) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(n).fill(0);
  dp[0] = 1;
  
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (obstacleGrid[r][c] === 1) {
        dp[c] = 0; // Obstacle blocks all paths
      } else if (c > 0) {
        dp[c] += dp[c - 1];
      }
    }
  }
  return dp[n - 1];
}`,
      language: "javascript",
      explanation: "Bottom-up 1D Dynamic Programming. Maintain a 1D DP array of size N representing the columns. If a cell contains an obstacle (`obstacleGrid[r][c] === 1`), reset `dp[c] = 0` (no paths can pass through this cell). Otherwise, add the paths from the left `dp[c] += dp[c - 1]` (if `c > 0`). Runs in O(M * N) time and O(N) space.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { obstacleGrid: "[[0,1],[0,0]]", m: 2, n: 2, dp: "[1, 0]" }, description: "Initialize DP. dp[0]=1, rest 0." },
      { line: 2, variables: { r: 0, c: 0, val: 0 }, description: "Row 0, Col 0. dp[0]=1." },
      { line: 3, variables: { r: 0, c: 1, val: 1, dpState: "[1, 0]" }, description: "Row 0, Col 1 (obstacle). Reset dp[1] = 0." },
      { line: 4, variables: { r: 1, c: 0, val: 0, dpState: "[1, 0]" }, description: "Row 1, Col 0. dp[0]=1." },
      { line: 5, variables: { r: 1, c: 1, val: 0, dpState: "[1, 1]" }, description: "Row 1, Col 1. dp[1] += dp[0] = 1. Return dp[1]=1." }
    ],
    interviewDiscussion: [
      {
        question: "What happens if the starting cell or the destination cell is an obstacle?",
        answer: "If either the start `obstacleGrid[0][0]` or the end `obstacleGrid[m-1][n-1]` is 1, it is impossible to complete the journey, and the algorithm will return 0 immediately."
      }
    ]
  }
];
