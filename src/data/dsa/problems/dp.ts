import { Problem } from "./types";

export const dpProblems: Problem[] = [
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
    id: 10,
    title: "Coin Change",
    slug: "coin-change",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
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
  {
    id: 89,
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    starterCode: `function lengthOfLIS(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function lengthOfLISBrute(nums) {
  function recurse(index, prevIndex) {
    if (index === nums.length) return 0;
    let take = 0;
    if (prevIndex === -1 || nums[index] > nums[prevIndex]) {
      take = 1 + recurse(index + 1, index);
    }
    const skip = recurse(index + 1, prevIndex);
    return Math.max(take, skip);
  }
  return recurse(0, -1);
}`,
      language: "javascript",
      explanation: "Recursively check all subsets. At each step, either take the element if it's larger than the last selected element, or skip it. Runs in exponential O(2^N) time.",
    },
    better: {
      code: `function lengthOfLISDP(nums) {
  if (nums.length === 0) return 0;
  const dp = Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}`,
      language: "javascript",
      explanation: "O(N^2) Tabulation. Let dp[i] represent the LIS ending at index i. For each element i, scan all previous elements j and if nums[i] > nums[j], update dp[i] = max(dp[i], dp[j] + 1).",
    },
    optimal: {
      code: `function lengthOfLISOptimal(nums) {
  const sub = [];
  for (const x of nums) {
    if (sub.length === 0 || sub[sub.length - 1] < x) {
      sub.push(x);
    } else {
      let left = 0;
      let right = sub.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (sub[mid] < x) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      sub[left] = x;
    }
  }
  return sub.length;
}`,
      language: "javascript",
      explanation: "Patience Sorting / Binary Search strategy. Maintain a running increasing array `sub`. For each number, if it is larger than the last element of `sub`, append it. Otherwise, use binary search to locate the first element in `sub` >= x and replace it. Runs in O(N log N) time.",
    },
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[10, 9, 2, 5, 3, 7]", sub: "[]" }, description: "Initialize array. Add first element 10. sub=[10]." },
      { line: 2, variables: { x: 9, subState: "[9]" }, description: "9 <= 10. Binary search locates index 0. Replace 10 with 9. sub=[9]." },
      { line: 3, variables: { x: 2, subState: "[2]" }, description: "2 <= 9. Binary search locates index 0. Replace 9 with 2. sub=[2]." },
      { line: 4, variables: { x: 5, subState: "[2, 5]" }, description: "5 > 2. Append 5. sub=[2, 5]." },
      { line: 5, variables: { x: 3, subState: "[2, 3]" }, description: "3 <= 5. Replace 5 with 3. sub=[2, 3]." },
      { line: 6, variables: { x: 7, subState: "[2, 3, 7]" }, description: "7 > 3. Append 7. Return sub.length = 3." }
    ],
    interviewDiscussion: [
      {
        question: "Does the `sub` array in patience sorting represent the actual LIS path?",
        answer: "No, the elements in `sub` do not necessarily represent the actual subsequence path (e.g. for [10, 2, 5, 3, 7] it ends as [2, 3, 7] which is valid, but for [2, 5, 1] it ends as [1, 5] which is invalid). However, the *length* of `sub` is guaranteed to be correct."
      }
    ]
  },
  {
    id: 90,
    title: "House Robber",
    slug: "house-robber",
    difficulty: "Easy",
    pillarSlug: "dynamic-programming",
    statement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",
    starterCode: `function rob(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function robBrute(nums) {
  function recurse(i) {
    if (i >= nums.length) return 0;
    return Math.max(nums[i] + recurse(i + 2), recurse(i + 1));
  }
  return recurse(0);
}`,
      language: "javascript",
      explanation: "Recursive inclusion/exclusion check: at each house, either rob it (move to index i + 2) or skip it (move to index i + 1). Runs in O(2^N) time.",
    },
    better: {
      code: `function robMemo(nums) {
  const memo = Array(nums.length).fill(-1);
  function recurse(i) {
    if (i >= nums.length) return 0;
    if (memo[i] !== -1) return memo[i];
    return memo[i] = Math.max(nums[i] + recurse(i + 2), recurse(i + 1));
  }
  return recurse(0);
}`,
      language: "javascript",
      explanation: "Top-down memoization. Cache results in a 1D array to avoid computing optimal choices for indices multiple times. Runs in O(N) time and space.",
    },
    optimal: {
      code: `function robOptimal(nums) {
  let prev2 = 0; // max profit excluding adjacent
  let prev1 = 0; // max profit including adjacent
  for (const num of nums) {
    const temp = Math.max(prev2 + num, prev1);
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
}`,
      language: "javascript",
      explanation: "Bottom-up constant space dynamic programming. Track the max profit of robbing up to the house before last (prev2) and up to the last house (prev1). Iterate and compute temp = max(prev2 + current, prev1). Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2, 3, 1]", prev2: 0, prev1: 0 }, description: "Start iteration." },
      { line: 2, variables: { num: 1, temp: 1, prev2: 0, prev1: 1 }, description: "House 1 (1). temp = max(0+1, 0) = 1. Update prev2 = 0, prev1 = 1." },
      { line: 3, variables: { num: 2, temp: 2, prev2: 1, prev1: 2 }, description: "House 2 (2). temp = max(0+2, 1) = 2. Update prev2 = 1, prev1 = 2." },
      { line: 4, variables: { num: 3, temp: 4, prev2: 2, prev1: 4 }, description: "House 3 (3). temp = max(1+3, 2) = 4. Update prev2 = 2, prev1 = 4. Return 4." }
    ],
    interviewDiscussion: [
      {
        question: "How do you solve this if the houses are arranged in a circle (House Robber II)?",
        answer: "If the houses are in a circle, house 1 and house N are adjacent, so we cannot rob both. We can run the standard House Robber algorithm twice: once for houses 0 to N-2, and once for houses 1 to N-1. The final answer is the maximum of the two runs."
      }
    ]
  },
  {
    id: 91,
    title: "Word Break",
    slug: "word-break",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.",
    starterCode: `function wordBreak(s, wordDict) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function wordBreakBrute(s, wordDict) {
  function recurse(start) {
    if (start === s.length) return true;
    for (let end = start + 1; end <= s.length; end++) {
      const prefix = s.substring(start, end);
      if (wordDict.includes(prefix) && recurse(end)) {
        return true;
      }
    }
    return false;
  }
  return recurse(0);
}`,
      language: "javascript",
      explanation: "Try splitting the string at every possible index. If the prefix exists in the dictionary, recurse on the suffix. Runs in O(2^N) time.",
    },
    better: {
      code: `function wordBreakMemo(s, wordDict) {
  const dict = new Set(wordDict);
  const memo = Array(s.length).fill(null);
  function recurse(start) {
    if (start === s.length) return true;
    if (memo[start] !== null) return memo[start];
    for (let end = start + 1; end <= s.length; end++) {
      if (dict.has(s.substring(start, end)) && recurse(end)) {
        return memo[start] = true;
      }
    }
    return memo[start] = false;
  }
  return recurse(0);
}`,
      language: "javascript",
      explanation: "Top-down memoization with a Set. Caches boolean split outcomes for starting indices to avoid redundant calculations of invalid suffixes. Runs in O(N^2) time.",
    },
    optimal: {
      code: `function wordBreakOptimal(s, wordDict) {
  const dict = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true; // empty string is valid
  
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && dict.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`,
      language: "javascript",
      explanation: "Bottom-up Dynamic Programming. Maintain a boolean array dp of size N+1. dp[i] is true if the prefix of s of length i can be segmented. For each i, check if there is a split index j < i such that dp[j] is true and s[j..i] is in the dictionary. Runs in O(N^2) time with O(N) space.",
    },
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { s: '"leet"', wordDict: '["leet"]', dp: "[true, false, false, false, false]" }, description: "dp[0]=true representing empty string." },
      { line: 2, variables: { i: 4, j: 0, prefix: '"leet"', hasWord: "true" }, description: "Outer loop i=4. Inner loop j=0. dp[0] is true, substring(0,4) is 'leet' which is in dict. dp[4]=true." },
      { line: 3, variables: { result: "true" }, description: "End loop. Return dp[4] = true." }
    ],
    interviewDiscussion: [
      {
        question: "How would you optimize this if the maximum word length in wordDict is small?",
        answer: "If the maximum word length in wordDict is L, we can restrict the inner loop index `j` to start from `max(0, i - L)` instead of 0. This reduces the time complexity from O(N^2) to O(N * L), which is extremely efficient for long strings."
      }
    ]
  },
  {
    id: 92,
    title: "Partition Equal Subset Sum",
    slug: "partition-equal-subset-sum",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.",
    starterCode: `function canPartition(nums) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function canPartitionBrute(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  function recurse(index, currentSum) {
    if (currentSum === target) return true;
    if (index === nums.length || currentSum > target) return false;
    return recurse(index + 1, currentSum + nums[index]) || recurse(index + 1, currentSum);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Try all subsets to see if any subset sums up to exactly half of the total sum. Runs in O(2^N) time.",
    },
    better: {
      code: `function canPartitionMemo(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const memo = new Map();
  function recurse(index, currentSum) {
    if (currentSum === target) return true;
    if (index === nums.length || currentSum > target) return false;
    const key = \`\${index}-\${currentSum}\`;
    if (memo.has(key)) return memo.get(key);
    const result = recurse(index + 1, currentSum + nums[index]) || recurse(index + 1, currentSum);
    memo.set(key, result);
    return result;
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down memoized knapsack approach. Caches outcomes for state pairs (index, currentSum) to prevent overlapping evaluations. Space complexity is O(N * target).",
    },
    optimal: {
      code: `function canPartitionOptimal(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i - num]) {
        dp[i] = true;
      }
    }
  }
  return dp[target];
}`,
      language: "javascript",
      explanation: "Bottom-up 0/1 Knapsack with Space Optimization. We only need a 1D array `dp` of size target + 1. Traverse each element of nums, and iterate backwards from target down to num. If a sum `i - num` was possible, then sum `i` is also possible. Iterating backwards ensures we don't reuse the same element. Runs in O(N * Target) time with O(Target) space.",
    },
    timeComplexity: "O(n * target)",
    spaceComplexity: "O(target)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 5]", sum: 6, target: 3 }, description: "Initialize dp array of size 4. dp[0]=true, rest false." },
      { line: 2, variables: { num: 1 }, description: "Process 1. Loop i from 3 down to 1. dp[1] = dp[1-1] = true. dp=[true, true, false, false]." },
      { line: 3, variables: { num: 5 }, description: "Process 5. Loop i from 3 down to 5. Loop doesn't execute because target < 5. dp[3] is false. Return false." }
    ],
    interviewDiscussion: [
      {
        question: "Why must we loop backwards from target down to num in the 1D space DP solution?",
        answer: "If we looped forwards from num up to target, we would modify `dp[i]` using updated values of `dp[i - num]` from the *current* element's iteration. This would correspond to the Unbounded Knapsack problem, where we can reuse the same element infinitely. Looping backwards ensures we refer to the previous element's states."
      }
    ]
  },
  {
    id: 93,
    title: "Edit Distance",
    slug: "edit-distance",
    difficulty: "Hard",
    pillarSlug: "dynamic-programming",
    statement: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: 1. Insert a character, 2. Delete a character, 3. Replace a character.",
    starterCode: `function minDistance(word1, word2) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function minDistanceBrute(w1, w2) {
  function recurse(i, j) {
    if (i === w1.length) return w2.length - j;
    if (j === w2.length) return w1.length - i;
    if (w1[i] === w2[j]) {
      return recurse(i + 1, j + 1);
    }
    const insertOp = 1 + recurse(i, j + 1);
    const deleteOp = 1 + recurse(i + 1, j);
    const replaceOp = 1 + recurse(i + 1, j + 1);
    return Math.min(insertOp, deleteOp, replaceOp);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down recursion checking all possible insertions, deletions, and replacements. Runs in O(3^(M+N)) time.",
    },
    better: {
      code: `function minDistanceMemo(w1, w2) {
  const memo = {};
  function recurse(i, j) {
    const key = \`\${i}-\${j}\`;
    if (key in memo) return memo[key];
    if (i === w1.length) return w2.length - j;
    if (j === w2.length) return w1.length - i;
    
    if (w1[i] === w2[j]) {
      return memo[key] = recurse(i + 1, j + 1);
    }
    const insertOp = 1 + recurse(i, j + 1);
    const deleteOp = 1 + recurse(i + 1, j);
    const replaceOp = 1 + recurse(i + 1, j + 1);
    return memo[key] = Math.min(insertOp, deleteOp, replaceOp);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down memoized recursion. Caches minimum operations for index coordinates (i, j) in a lookup map. Reduces complexity to O(M * N) time and space.",
    },
    optimal: {
      code: `function minDistanceOptimal(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i][j - 1],   // Insert
          dp[i - 1][j],   // Delete
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }
  return dp[m][n];
}`,
      language: "javascript",
      explanation: "Bottom-up 2D tabulation grid. Fill a grid of size (M+1) x (N+1). Base cases fill the first row/column representing transformations to/from empty strings. For other cells, if characters match, propagate diagonal. Else, take the min of insertion (left), deletion (top), and replacement (diagonal) + 1. Runs in O(M * N) time.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    dryRun: [
      { line: 1, variables: { word1: '"ab"', word2: '"ac"', dp: "3x3 grid initialized with boundaries" }, description: "Base cases: dp[0][j]=j, dp[i][0]=i." },
      { line: 2, variables: { i: 1, j: 1, c1: '"a"', c2: '"a"' }, description: "Characters match 'a' == 'a'. dp[1][1] = dp[0][0] = 0." },
      { line: 3, variables: { i: 2, j: 2, c1: '"b"', c2: '"c"' }, description: "Characters do not match 'b' != 'c'. dp[2][2] = 1 + min(dp[2][1], dp[1][2], dp[1][1]) = 1." }
    ],
    interviewDiscussion: [
      {
        question: "How would you optimize the space complexity of Edit Distance to O(N)?",
        answer: "Just like LCS, the computation of the current cell only relies on the current row's left cell and the previous row's cells. Hence, we can replace the 2D grid with two 1D arrays of size N + 1 (representing previous and current rows), taking O(N) space."
      }
    ]
  },
  {
    id: 94,
    title: "Unique Paths",
    slug: "unique-paths",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    starterCode: `function uniquePaths(m, n) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function uniquePathsBrute(m, n) {
  function recurse(r, c) {
    if (r === m - 1 && c === n - 1) return 1;
    if (r >= m || c >= n) return 0;
    return recurse(r + 1, c) + recurse(r, c + 1);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Recursive traversal: explore moving down and right from each cell. Time complexity is exponential O(2^(M+N)) due to recalculations.",
    },
    better: {
      code: `function uniquePathsMemo(m, n) {
  const memo = {};
  function recurse(r, c) {
    if (r === m - 1 && c === n - 1) return 1;
    if (r >= m || c >= n) return 0;
    const key = \`\${r}-\${c}\`;
    if (key in memo) return memo[key];
    return memo[key] = recurse(r + 1, c) + recurse(r, c + 1);
  }
  return recurse(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down memoization: cache cell coordinate unique path counts. Reduces execution to O(M * N) calculations.",
    },
    optimal: {
      code: `function uniquePathsOptimal(m, n) {
  const dp = Array(n).fill(1);
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[c] += dp[c - 1];
    }
  }
  return dp[n - 1];
}`,
      language: "javascript",
      explanation: "Bottom-up 1D Dynamic Programming. Initialize an array of size `n` with 1s (representing paths along the first row). For each subsequent row, update each cell's paths as `dp[c] = dp[c] (paths from top) + dp[c-1] (paths from left)`. Runs in O(M * N) time with O(N) space.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { m: 3, n: 3, dp: "[1, 1, 1]" }, description: "Initialize dp array of size 3 with 1s." },
      { line: 2, variables: { r: 1, dpState: "[1, 2, 3]" }, description: "Row 1: dp[1]=dp[1]+dp[0]=2, dp[2]=dp[2]+dp[1]=3." },
      { line: 3, variables: { r: 2, dpState: "[1, 3, 6]" }, description: "Row 2: dp[1]=dp[1]+dp[0]=3, dp[2]=dp[2]+dp[1]=6. Return dp[2]=6." }
    ],
    interviewDiscussion: [
      {
        question: "Can we solve this problem in O(1) space?",
        answer: "Yes, using combinatorics. The robot must take exactly `M - 1` down steps and `N - 1` right steps, making a total of `(M - 1) + (N - 1)` moves. The number of unique paths is the combination of choosing `M - 1` down steps out of the total moves, which can be computed as `(M + N - 2)! / ((M - 1)! * (N - 1)!)` in O(min(M, N)) time and O(1) auxiliary space."
      }
    ]
  },
  {
    id: 95,
    title: "Maximal Square",
    slug: "maximal-square",
    difficulty: "Medium",
    pillarSlug: "dynamic-programming",
    statement: "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
    starterCode: `function maximalSquare(matrix) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maximalSquareBrute(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let maxSide = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === '1') {
        let side = 1;
        let possible = true;
        while (r + side < m && c + side < n && possible) {
          for (let k = 0; k <= side; k++) {
            if (matrix[r + side][c + k] === '0' || matrix[r + k][c + side] === '0') {
              possible = false;
              break;
            }
          }
          if (possible) side++;
        }
        maxSide = Math.max(maxSide, side);
      }
    }
  }
  return maxSide * maxSide;
}`,
      language: "javascript",
      explanation: "For each '1' in the matrix, incrementally check growing squares by scanning their perimeter. Runs in O((M*N)^2) worst-case time.",
    },
    better: {
      code: `function maximalSquare2DDP(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxSide = 0;
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      if (matrix[r - 1][c - 1] === '1') {
        dp[r][c] = 1 + Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]);
        maxSide = Math.max(maxSide, dp[r][c]);
      }
    }
  }
  return maxSide * maxSide;
}`,
      language: "javascript",
      explanation: "2D Tabulation. Let dp[r][c] represent the maximum square side length ending at cell (r-1, c-1). If cell is '1', dp[r][c] = 1 + min(top, left, diagonal-top-left). Runs in O(M * N) time with O(M * N) space.",
    },
    optimal: {
      code: `function maximalSquareOptimal(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array(n + 1).fill(0);
  let maxSide = 0;
  let prev = 0; // represent diagonal-top-left
  
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      const temp = dp[c];
      if (matrix[r - 1][c - 1] === '1') {
        dp[c] = 1 + Math.min(dp[c], dp[c - 1], prev);
        maxSide = Math.max(maxSide, dp[c]);
      } else {
        dp[c] = 0;
      }
      prev = temp;
    }
  }
  return maxSide * maxSide;
}`,
      language: "javascript",
      explanation: "Bottom-up 1D Dynamic Programming space optimization. Reduces 2D grid to a single 1D array of size N + 1. Store the top-left diagonal value in a variable `prev` dynamically. Runs in O(M * N) time and O(N) space.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { m: 2, n: 2, dp: "[0, 0, 0]", maxSide: 0 }, description: "Initialize DP array of size 3 with 0s." },
      { line: 2, variables: { r: 1, c: 1, cell: '"1"', prev: 0, dpState: "[0, 1, 0]" }, description: "Row 1, Col 1. dp[1] = 1 + min(dp[1], dp[0], prev) = 1. Update maxSide = 1." },
      { line: 3, variables: { r: 1, c: 2, cell: '"1"', prev: 0, dpState: "[0, 1, 1]" }, description: "Row 1, Col 2. dp[2] = 1 + min(dp[2], dp[1], prev) = 1. maxSide = 1." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we take the minimum of top, left, and top-left diagonal in the DP transitions?",
        answer: "A square of size K can only be formed at cell (r, c) if there are valid squares of size K-1 ending at (r-1, c) [top], (r, c-1) [left], and (r-1, c-1) [top-left diagonal]. The bottleneck is the smallest of these three configurations, which is why we apply the `Math.min` operation."
      }
    ]
  },
  {
    id: 96,
    title: "Wildcard Matching",
    slug: "wildcard-matching",
    difficulty: "Hard",
    pillarSlug: "dynamic-programming",
    statement: "Given an input string (s) and a pattern (p), match the input string against the pattern. The pattern supports '?' (matches any single character) and '*' (matches any sequence of characters, including the empty sequence).",
    starterCode: `function isMatch(s, p) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isMatchBrute(s, p) {
  function solve(i, j) {
    if (i < 0 && j < 0) return true;
    if (j < 0) return false;
    if (i < 0) {
      for (let k = 0; k <= j; k++) {
        if (p[k] !== '*') return false;
      }
      return true;
    }
    if (p[j] === '?' || s[i] === p[j]) {
      return solve(i - 1, j - 1);
    }
    if (p[j] === '*') {
      return solve(i, j - 1) || solve(i - 1, j);
    }
    return false;
  }
  return solve(s.length - 1, p.length - 1);
}`,
      language: "javascript",
      explanation: "Recursive solution checking all pattern options: match single, skip wildcard, or match wildcard. Runs in exponential time O(2^(N+M)).",
    },
    better: {
      code: `function isMatchMemo(s, p) {
  const memo = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(-1));
  function solve(i, j) {
    if (i === 0 && j === 0) return true;
    if (j === 0) return false;
    if (i === 0) {
      for (let k = 1; k <= j; k++) {
        if (p[k - 1] !== '*') return false;
      }
      return true;
    }
    if (memo[i][j] !== -1) return memo[i][j];
    
    if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
      return memo[i][j] = solve(i - 1, j - 1);
    }
    if (p[j - 1] === '*') {
      return memo[i][j] = solve(i, j - 1) || solve(i - 1, j);
    }
    return memo[i][j] = false;
  }
  return solve(s.length, p.length);
}`,
      language: "javascript",
      explanation: "Top-down memoized recursion storing states of (i, j). Avoids overlapping subproblems. Runs in O(M * N) time and space.",
    },
    optimal: {
      code: `function isMatchOptimal(s, p) {
  const m = s.length, n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 1];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
}`,
      language: "javascript",
      explanation: "Bottom-up 2D dynamic programming: Let dp[i][j] be true if s[0...i-1] matches p[0...j-1]. Transitions handle direct char matches, '?', and '*' which can act as empty sequence or match one/more chars. Runs in O(M * N) time and space.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    dryRun: [
      { line: 1, variables: { s: '"aa"', p: '"*"', dp_0_0: "true" }, description: "Base case: empty string matches empty pattern. Row 0 gets wildcard checks. dp[0][1] = true." },
      { line: 2, variables: { i: 1, j: 1, dp_1_1: "true" }, description: "Match 'a' with '*'. dp[1][1] = dp[1][0] || dp[0][1] = false || true = true." },
      { line: 3, variables: { i: 2, j: 1, dp_2_1: "true" }, description: "Match 'aa' with '*'. dp[2][1] = dp[2][0] || dp[1][1] = false || true = true. Output true." }
    ],
    interviewDiscussion: [
      {
        question: "Can we solve this in O(1) auxiliary space?",
        answer: "Yes, using a greedy pointer algorithm with backtracking. We maintain pointers for string and pattern, as well as placeholders for wildcard matches, scanning the string in linear O(N + M) average time and O(1) space."
      }
    ],
    edgeCases: [
      "Both string and pattern are empty (returns true)",
      "Pattern is one or multiple consecutive stars (e.g., '*', '***') (returns true)",
      "String is empty and pattern is non-empty (returns false unless pattern consists entirely of '*')"
    ],
    commonMistakes: [
      "Not initializing base cases for dp[0][j] where pattern starts with '*', leading to incorrect match starts.",
      "Off-by-one errors due to mismatch between 0-indexed string chars and 1-indexed DP arrays.",
      "Forgetting to memoize recursion, causing Time Limit Exceeded (TLE) on long match sequences."
    ]
  },
  {
    id: 97,
    title: "Regex Matching",
    slug: "regular-expression-matching",
    difficulty: "Hard",
    pillarSlug: "dynamic-programming",
    statement: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
    starterCode: `function isMatch(s, p) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isMatchBrute(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatchBrute(s, p.substring(2)) || (firstMatch && isMatchBrute(s.substring(1), p));
  } else {
    return firstMatch && isMatchBrute(s.substring(1), p.substring(1));
  }
}`,
      language: "javascript",
      explanation: "Recursive checks with substring slices. Brute force branches dynamically on star elements. Worst case time complexity is exponential O(2^(N + M)).",
    },
    better: {
      code: `function isMatchMemo(s, p) {
  const memo = {};
  function check(i, j) {
    const key = i + ',' + j;
    if (key in memo) return memo[key];
    if (j === p.length) return i === s.length;
    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');
    let ans = false;
    if (j + 1 < p.length && p[j + 1] === '*') {
      ans = check(i, j + 2) || (firstMatch && check(i + 1, j));
    } else {
      ans = firstMatch && check(i + 1, j + 1);
    }
    return memo[key] = ans;
  }
  return check(0, 0);
}`,
      language: "javascript",
      explanation: "Top-down memoized recursion storing states in a hashmap. Prevents recomputation of subproblems. Runs in O(M * N) time and space.",
    },
    optimal: {
      code: `function isMatchOptimal(s, p) {
  const m = s.length, n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]; // Match zero times
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // Match one or more times
        }
      }
    }
  }
  return dp[m][n];
}`,
      language: "javascript",
      explanation: "Bottom-up 2D DP. dp[i][j] is true if s[0...i-1] matches p[0...j-1]. Transitions check '.' matches, direct char matches, and '*' matches. '*' can match 0 times (dp[i][j-2]) or 1+ times (dp[i-1][j]) if the preceding character matches s[i-1]. Runs in O(M * N) time and space.",
    },
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
    dryRun: [
      { line: 1, variables: { s: '"aa"', p: '"a*"', dp_0_0: "true" }, description: "Base cases. dp[0][2] = dp[0][0] = true (a* matches empty string)." },
      { line: 2, variables: { i: 1, j: 2, char: '"a"', star: '"*"' }, description: "Match 'a' with 'a*'. dp[1][2] = dp[1][0] (false) || dp[0][2] (true) = true." },
      { line: 3, variables: { i: 2, j: 2, char: '"aa"', star: '"*"' }, description: "Match 'aa' with 'a*'. dp[2][2] = dp[2][0] (false) || dp[1][2] (true) = true. Returns true." }
    ],
    interviewDiscussion: [
      {
        question: "How does Regex Matching differ from Wildcard Matching?",
        answer: "In Wildcard Matching, '*' stands on its own and matches any sequence of characters. In Regular Expression Matching, '*' is a modifier that applies to the preceding character (e.g. 'a*' matches zero or more 'a's), making transitions slightly more complex."
      }
    ],
    edgeCases: [
      "Empty string and empty pattern (returns true)",
      "Pattern matching empty string (e.g., 'a*b*c*') (returns true)",
      "Dot matcher matching any character (e.g., '.*')"
    ],
    commonMistakes: [
      "Not handling the zero-match transition (matching 0 times of the preceding char), causing false negative results.",
      "Incorrectly matching '*' on its own without a preceding character, leading to crashes or syntax errors.",
      "Off-by-one errors mapping string indices into the dynamic programming grid."
    ]
  },
  {
    id: 98,
    title: "Burst Balloons",
    slug: "burst-balloons",
    difficulty: "Hard",
    pillarSlug: "dynamic-programming",
    statement: "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon painted with a 1 on it. Return the maximum coins you can collect by bursting the balloons wisely.",
    starterCode: `function maxCoins(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxCoinsBrute(nums) {
  // Try all permutations of bursting balloons, tracking arrays recursively.
  // Time complexity: O(N!)
  return 0;
}`,
      language: "javascript",
      explanation: "Try all possible orders of bursting the balloons. With N balloons, there are N! possible ordering paths, resulting in factorial runtime.",
    },
    better: {
      code: `function maxCoinsMemo(nums) {
  const vals = [1, ...nums, 1];
  const n = vals.length;
  const memo = Array.from({ length: n }, () => Array(n).fill(-1));
  function solve(i, j) {
    if (i > j) return 0;
    if (memo[i][j] !== -1) return memo[i][j];
    let maxVal = 0;
    for (let k = i; k <= j; k++) {
      const coins = vals[i - 1] * vals[k] * vals[j + 1] + solve(i, k - 1) + solve(k + 1, j);
      maxVal = Math.max(maxVal, coins);
    }
    return memo[i][j] = maxVal;
  }
  return solve(1, n - 2);
}`,
      language: "javascript",
      explanation: "Top-down DP (Divide and Conquer with Memoization): Think backwards. Instead of finding the first balloon to burst, find the last balloon `k` to burst in interval [i, j]. Once `k` is burst last, its neighbors are `vals[i-1]` and `vals[j+1]`. Subproblems are [i, k-1] and [k+1, j]. Runs in O(N^3) time and O(N^2) space.",
    },
    optimal: {
      code: `function maxCoinsOptimal(nums) {
  const vals = [1, ...nums, 1];
  const n = vals.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  
  for (let len = 1; len <= n - 2; len++) {
    for (let i = 1; i <= n - len - 1; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], 
          vals[i - 1] * vals[k] * vals[j + 1] + dp[i][k - 1] + dp[k + 1][j]
        );
      }
    }
  }
  
  return dp[1][n - 2];
}`,
      language: "javascript",
      explanation: "Bottom-up dynamic programming (Interval DP): Solve subproblems of smaller lengths first. dp[i][j] represents the max coins obtained from bursting balloons in interval [i, j]. We iterate over subproblem lengths from 1 to N-2, and slide the window. For each interval, check all possible last balloons `k` to burst. Runs in O(N^3) time and O(N^2) space.",
    },
    timeComplexity: "O(n^3)",
    spaceComplexity: "O(n^2)",
    dryRun: [
      { line: 1, variables: { nums: "[3,1,5]", vals: "[1,3,1,5,1]" }, description: "Add boundaries of 1. Length of vals is 5." },
      { line: 2, variables: { len: 1, dp_1_1: 3, dp_2_2: 15, dp_3_3: 25 }, description: "Solve intervals of length 1. dp[1][1] = 1*3*1 = 3. dp[2][2] = 3*1*5 = 15. dp[3][3] = 1*5*1 = 5." },
      { line: 3, variables: { len: 3, dp_1_3: 35 }, description: "Solve length 3. Try k = 2 (bursting 1 last): coin = 1*1*1 + dp[1][1] + dp[3][3] = 1 + 3 + 25 = 29. Try k = 3: coin = 1*5*1 + dp[1][2] + dp[4][3] = 35. Max is 35." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we think backwards (last balloon to burst) instead of forwards?",
        answer: "If we think forwards (first balloon to burst), bursting a balloon changes the adjacencies of the remaining balloons, which makes subproblems dependent on other actions. By choosing the LAST balloon to burst in an interval, we guarantee that the boundaries of that interval are still alive, separating the subproblems cleanly."
      }
    ],
    edgeCases: [
      "Array contains only one balloon (max coins is nums[0])",
      "Array is empty (returns 0)",
      "Array elements are all 0 (returns 0)"
    ],
    commonMistakes: [
      "Defining the transition based on the first balloon to burst, which makes subproblems dependent and invalidates DP.",
      "Forgetting to pad the input array with 1 at both boundaries, leading to index errors.",
      "Iterating subproblem loops in the wrong order; interval DP requires solving smaller intervals first (looping by length)."
    ]
  },
  {
    id: 99,
    title: "Scramble String",
    slug: "scramble-string",
    difficulty: "Hard",
    pillarSlug: "dynamic-programming",
    statement: "We can scramble a string s to get a string t using a recursive algorithm. Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.",
    starterCode: `function isScramble(s1, s2) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isScrambleBrute(s1, s2) {
  // Try all partition splits, and recursively check normal or swapped subproblems
  // Time complexity: O(5^N)
  return false;
}`,
      language: "javascript",
      explanation: "Checks every single split partition recursively without memoization, leading to exponential search space explosion.",
    },
    better: {
      code: `function isScrambleMemo(s1, s2) {
  const memo = {};
  function check(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    const key = a + '#' + b;
    if (key in memo) return memo[key];
    
    // Prune with frequency arrays
    const count = new Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
      count[a.charCodeAt(i) - 97]++;
      count[b.charCodeAt(i) - 97]--;
    }
    for (let x of count) {
      if (x !== 0) return memo[key] = false;
    }
    
    const n = a.length;
    for (let i = 1; i < n; i++) {
      // Case 1: Not swapped
      if (check(a.substring(0, i), b.substring(0, i)) && check(a.substring(i), b.substring(i))) {
        return memo[key] = true;
      }
      // Case 2: Swapped
      if (check(a.substring(0, i), b.substring(n - i)) && check(a.substring(i), b.substring(0, n - i))) {
        return memo[key] = true;
      }
    }
    return memo[key] = false;
  }
  return check(s1, s2);
}`,
      language: "javascript",
      explanation: "Recursion with Memoization: Store result strings maps. Prune splits by checking character frequency maps. If character counts do not match, they cannot be scrambled. Recursively check swapped and non-swapped partitions of length `i` and `n - i`. Runs in O(N^4) worst case.",
    },
    optimal: {
      code: `function isScrambleOptimal(s1, s2) {
  const n = s1.length;
  if (n !== s2.length) return false;
  // dp[len][i][j] represents if s1[i...i+len-1] is scramble of s2[j...j+len-1]
  const dp = Array.from({ length: n + 1 }, () => 
    Array.from({ length: n }, () => new Array(n).fill(false))
  );
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[1][i][j] = s1[i] === s2[j];
    }
  }
  
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      for (let j = 0; j <= n - len; j++) {
        for (let k = 1; k < len; k++) {
          if ((dp[k][i][j] && dp[len - k][i + k][j + k]) || 
              (dp[k][i][j + len - k] && dp[len - k][i + k][j])) {
            dp[len][i][j] = true;
            break;
          }
        }
      }
    }
  }
  
  return dp[n][0][0];
}`,
      language: "javascript",
      explanation: "3D Dynamic Programming tabulation. State dp[len][i][j] represents whether the substring of s1 starting at index i of length len can scramble to s2 starting at index j of length len. Transition splits the substring at length k (1 <= k < len) and matches non-swapped or swapped halves. Runs in O(N^4) time and O(N^3) space.",
    },
    timeComplexity: "O(n^4)",
    spaceComplexity: "O(n^3)",
    dryRun: [
      { line: 1, variables: { s1: '"great"', s2: '"rgeat"', len: 1 }, description: "Base cases. Initialize single chars: dp[1][0][1] (g==g) = true, dp[1][1][0] (r==r) = true." },
      { line: 2, variables: { len: 2, i: 0, j: 0, k: 1 }, description: "Check 'gr' and 'rg' (len=2). k=1 (split size 1): dp[1][0][1] && dp[1][1][0] are both true. Swap match succeeds, so dp[2][0][0] = true." },
      { line: 3, variables: { len: 5, i: 0, j: 0 }, description: "Solve recursively up to len = 5. dp[5][0][0] resolves to true." }
    ],
    interviewDiscussion: [
      {
        question: "How does character count pruning help in the memoization solution?",
        answer: "Character count pruning runs in O(N) time but fails immediately if the two substrings do not contain the exact same set of characters. This skips all partition recursion paths, reducing typical runtimes from hours to milliseconds on long string inputs."
      }
    ],
    edgeCases: [
      "s1 and s2 are identical (returns true)",
      "s1 and s2 have different lengths (returns false)",
      "s1 and s2 do not contain the same character frequency set (returns false)"
    ],
    commonMistakes: [
      "Forgetting to check the swapped matching state condition, only checking the non-swapped matching state.",
      "Not checking string equality (s1 === s2) as an early exit optimization, leading to extensive recursion loops.",
      "Off-by-one boundary conditions when splitting intervals in 3D DP space."
    ]
  }
];
