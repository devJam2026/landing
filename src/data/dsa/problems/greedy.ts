import { Problem } from "./types";

export const greedyProblems: Problem[] = [
  {
    id: 19,
    title: "Jump Game",
    slug: "jump-game",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    starterCode: `function canJump(nums) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function canJumpBrute(nums, index = 0) {
  if (index === nums.length - 1) return true;
  const maxJump = nums[index];
  for (let i = 1; i <= maxJump; i++) {
    if (canJumpBrute(nums, index + i)) return true;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Try every possible jump step size from the current index using recursive backtracking. The complexity is O(2^N) due to branching pathways.",
    },
    better: {
      code: `function canJumpDP(nums) {
  const dp = Array(nums.length).fill(false);
  dp[dp.length - 1] = true;
  for (let i = nums.length - 2; i >= 0; i--) {
    const maxJump = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= maxJump; j++) {
      if (dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
}`,
      language: "javascript",
      explanation: "Bottom-up Tabulation DP. Track if indices can reach the end. Runs in O(N^2) time with O(N) space.",
    },
    optimal: {
      code: `function canJumpOptimal(nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0;
}`,
      language: "javascript",
      explanation: "Greedy backward scan. Start with the goal at the last index. Iterate backward; if an index can reach the current goal, update the goal to that index. If the goal reaches 0, it is possible to jump from the start. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[2, 3, 1, 1, 4]", goal: 4 }, description: "Start greedy scan. goal = 4." },
      { line: 2, variables: { i: 3, num: 1, check: "3+1 >= 4" }, description: "Index 3 can reach goal 4. Update goal = 3." },
      { line: 3, variables: { i: 2, num: 1, check: "2+1 >= 3" }, description: "Index 2 can reach goal 3. Update goal = 2." },
      { line: 4, variables: { i: 1, num: 3, check: "1+3 >= 2" }, description: "Index 1 can reach goal 2. Update goal = 1." },
      { line: 5, variables: { i: 0, num: 2, check: "0+2 >= 1" }, description: "Index 0 can reach goal 1. Update goal = 0. Loop ends. Return true since goal is 0." }
    ],
    interviewDiscussion: [
      {
        question: "Can we solve this scanning forward?",
        answer: "Yes. We can maintain a maxReach variable tracking the furthest index we can touch: maxReach = Math.max(maxReach, i + nums[i]). If at any point the index i exceeds maxReach, we return false. If maxReach reaches or exceeds the last index, we return true. It is also O(N) time and O(1) space.",
      }
    ],
  },
  {
    id: 106,
    title: "Gas Station",
    slug: "gas-station",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.",
    starterCode: `function canCompleteCircuit(gas, cost) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function canCompleteCircuitBrute(gas, cost) {
  const n = gas.length;
  for (let i = 0; i < n; i++) {
    let tank = 0;
    let possible = true;
    for (let j = 0; j < n; j++) {
      const curr = (i + j) % n;
      tank += gas[curr] - cost[curr];
      if (tank < 0) {
        possible = false;
        break;
      }
    }
    if (possible) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Try starting from each gas station in a nested loop. Check if the tank becomes negative at any point. Runs in O(N^2) time.",
    },
    better: {
      code: `function canCompleteCircuitCheck(gas, cost) {
  const totalGas = gas.reduce((a, b) => a + b, 0);
  const totalCost = cost.reduce((a, b) => a + b, 0);
  if (totalGas < totalCost) return -1; // Fast fail check
  
  // Followed by standard checks starting from indexes
  return 0; // simplified
}`,
      language: "javascript",
      explanation: "If the total gas available is less than the total cost of the trip, it is mathematically impossible to complete the circuit. This serves as an excellent O(N) initial check.",
    },
    optimal: {
      code: `function canCompleteCircuitOptimal(gas, cost) {
  const n = gas.length;
  let totalSurplus = 0;
  let currentSurplus = 0;
  let startIdx = 0;
  
  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalSurplus += diff;
    currentSurplus += diff;
    
    if (currentSurplus < 0) {
      startIdx = i + 1; // Cannot start from startIdx to i. Move starting index candidate.
      currentSurplus = 0;
    }
  }
  return totalSurplus >= 0 ? startIdx : -1;
}`,
      language: "javascript",
      explanation: "Single-pass Greedy search. If `currentSurplus` becomes negative at index `i`, it means we cannot start at the current `startIdx` and reach `i + 1`. So, reset `startIdx = i + 1` and reset `currentSurplus = 0`. At the end, if `totalSurplus >= 0`, return `startIdx`. Otherwise, return -1. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { gas: "[1, 2]", cost: "[2, 1]", totalSurplus: 0, currentSurplus: 0, startIdx: 0 }, description: "Start loop at index 0." },
      { line: 2, variables: { diff: -1, totalSurplus: -1, currentSurplus: -1 }, description: "Station 0. diff = 1-2 = -1. currentSurplus < 0. Reset startIdx = 1, currentSurplus = 0." },
      { line: 3, variables: { diff: 1, totalSurplus: 0, currentSurplus: 1, idx: 1 }, description: "Station 1. diff = 2-1 = 1. currentSurplus = 1. totalSurplus >= 0, return startIdx = 1." }
    ],
    interviewDiscussion: [
      {
        question: "Why can we safely skip all starting stations between the original startIdx and the failed station i?",
        answer: "If we start at `startIdx` and get stuck at `i`, it means we had a non-negative fuel balance up to `i - 1`, but failed at `i`. Any station `j` between `startIdx` and `i` would have started with less or equal fuel than starting at `startIdx` (which accumulated some surplus fuel). Thus, no station in that range can successfully bypass `i`, so we can skip them entirely."
      }
    ]
  },
  {
    id: 107,
    title: "Partition Labels",
    slug: "partition-labels",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s. Return a list of integers representing the size of these parts.",
    starterCode: `function partitionLabels(s) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function partitionLabelsBrute(s) {
  // Find all occurrences of letters.
  // Merge overlapping ranges in a nested loop.
  return [];
}`,
      language: "javascript",
      explanation: "Convert the string characters to ranges [firstOccur, lastOccur], then run interval merging. O(N^2) complexity.",
    },
    better: {
      code: `function partitionLabelsMap(s) {
  const intervals = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in intervals)) {
      intervals[char] = [i, i];
    } else {
      intervals[char][1] = i;
    }
  }
  // Sort intervals by start time and merge them.
  return [];
}`,
      language: "javascript",
      explanation: "Pre-calculate character ranges as intervals, then sort and merge intervals. Runs in O(N + C log C) time where C is unique alphabet size (<= 26).",
    },
    optimal: {
      code: `function partitionLabelsOptimal(s) {
  const lastIndex = {};
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }
  
  const result = [];
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex[s[i]]);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Single-pass Greedy partition. First, record the last occurrence index of every character in a hash map/array. Then, iterate through the string, dynamically expanding the current partition boundary `end = Math.max(end, last[char])`. When we reach the index `i === end`, it means all characters inside this partition are locked within this segment. Push size to result, set `start = i + 1`. Runs in O(N) time and O(26) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"abac"', lastIndex: "{a: 2, b: 1, c: 3}" }, description: "Pre-calculate last indices of characters." },
      { line: 2, variables: { i: 0, char: '"a"', end: 2 }, description: "Index 0. char 'a', end = max(0, 2) = 2. i != end." },
      { line: 3, variables: { i: 1, char: '"b"', end: 2 }, description: "Index 1. char 'b', end = max(2, 1) = 2. i != end." },
      { line: 4, variables: { i: 2, char: '"a"', end: 2 }, description: "Index 2. char 'a', end = max(2, 2) = 2. i == end! Add partition size 2-0+1=3. start=3." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the space complexity O(1) instead of O(N)?",
        answer: "Since the input string contains only lowercase English letters, the `lastIndex` map stores at most 26 keys. Hence, the auxiliary space used is constant O(1)."
      }
    ]
  },
  {
    id: 108,
    title: "Merge Intervals",
    slug: "merge-intervals",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    starterCode: `function merge(intervals) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function mergeBrute(intervals) {
  // Compare every interval with every other interval.
  // If overlap is found, combine them and restart scan.
  return [];
}`,
      language: "javascript",
      explanation: "Iterative checks without sorting require multiple passes of O(N^2) comparison operations.",
    },
    better: {
      code: `function mergeGraph(intervals) {
  // Build overlap graph where edges connect overlapping intervals.
  // Run Connected Components to merge elements.
  return [];
}`,
      language: "javascript",
      explanation: "Models overlapping as a graph problem. Too complex to implement, requiring O(N^2) edge checks and extra memory.",
    },
    optimal: {
      code: `function mergeOptimal(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const previous = merged[merged.length - 1];
    
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]); // Merge overlapping intervals
    } else {
      merged.push(current);
    }
  }
  return merged;
}`,
      language: "javascript",
      explanation: "Sort intervals by their starting times. This ensures that overlapping intervals are adjacent. Traverse the sorted list: if the current interval starts before the previous one ends, merge them by setting the previous interval's end to the maximum of both. Otherwise, append the current interval to the list. Runs in O(N log N) time.",
    },
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { intervals: "[[1,3],[2,6],[8,10]]" }, description: "Sort intervals. Already sorted." },
      { line: 2, variables: { merged: "[[1,3]]" }, description: "Initialize merged list with first interval [1,3]." },
      { line: 3, variables: { current: "[2,6]", previous: "[1,3]" }, description: "Compare current start (2) <= previous end (3). Overlap! Merge: previous[1] = max(3, 6) = 6. merged=[[1,6]]." },
      { line: 4, variables: { current: "[8,10]", previous: "[1,6]" }, description: "Compare current start (8) <= previous end (6). False. Push [8,10] as new interval." }
    ],
    interviewDiscussion: [
      {
        question: "Does sorting intervals by start time guarantee that we only need to look at the last interval in `merged`?",
        answer: "Yes. Since intervals are sorted by start time (`start_i <= start_{i+1}`), any incoming interval can only overlap with the most recently added interval in `merged`. It cannot bridge back to touch earlier intervals, making a single-pass scan sufficient."
      }
    ]
  },
  {
    id: 109,
    title: "Non-overlapping Intervals",
    slug: "non-overlapping-intervals",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "Given an array of intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    starterCode: `function eraseOverlapIntervals(intervals) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function eraseOverlapBrute(intervals) {
  // Generate all subsets of intervals and check which subset
  // has zero overlaps. Return length difference.
  return 0;
}`,
      language: "javascript",
      explanation: "Exponential O(2^N) subset checks. Slow and impractical.",
    },
    better: {
      code: `function eraseOverlapStartSort(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  // Perform DP matching or pointer calculations
  return 0;
}`,
      language: "javascript",
      explanation: "Sorting by start times requires more logic to resolve overlaps (need to figure out which interval to remove when two overlap).",
    },
    optimal: {
      code: `function eraseOverlapIntervalsOptimal(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[1] - b[1]); // Sort by END times
  
  let count = 0;
  let prevEnd = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++; // Overlap detected, remove current interval
    } else {
      prevEnd = intervals[i][1]; // Update end marker
    }
  }
  return count;
}`,
      language: "javascript",
      explanation: "Greedy choice based on Interval Scheduling. Sort intervals by their END times. By picking intervals that end as early as possible, we leave the maximum possible room for subsequent intervals. Loop through sorted intervals: if an interval starts before the previous one ends, it must be removed. Otherwise, keep it and update the end marker. Runs in O(N log N) time.",
    },
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { intervals: "[[1,2],[2,3],[1,3]]" }, description: "Sort by end times: [[1,2],[2,3],[1,3]]." },
      { line: 2, variables: { prevEnd: 2, count: 0 }, description: "Initialize prevEnd = 2." },
      { line: 3, variables: { i: 1, current: "[2,3]" }, description: "Compare current start (2) < prevEnd (2). False. Update prevEnd = 3." },
      { line: 4, variables: { i: 2, current: "[1,3]" }, description: "Compare current start (1) < prevEnd (3). True! Overlap. Increment count = 1. Return count = 1." }
    ],
    interviewDiscussion: [
      {
        question: "Why does sorting by end times yield the optimal greedy choice, while sorting by start times fails?",
        answer: "Consider intervals [1, 10], [2, 3], [3, 4]. If we sort by start times, we process [1, 10] first. Keeping it forces us to remove both [2, 3] and [3, 4] (resulting in 2 removals). Sorting by end times processes [2, 3] and [3, 4] first, which allows keeping them and removing only [1, 10] (resulting in 1 removal). Ending early maximizes remaining window space."
      }
    ]
  },
  {
    id: 110,
    title: "Jump Game II",
    slug: "jump-game-ii",
    difficulty: "Medium",
    pillarSlug: "greedy",
    statement: "You are given an 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where: 0 <= j <= nums[i] and i + j < n. Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach the last index.",
    starterCode: `function jump(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function jumpBrute(nums, idx = 0) {
  if (idx >= nums.length - 1) return 0;
  let minJumps = Infinity;
  for (let i = 1; i <= nums[idx]; i++) {
    minJumps = Math.min(minJumps, 1 + jumpBrute(nums, idx + i));
  }
  return minJumps;
}`,
      language: "javascript",
      explanation: "Try all jump combinations recursively to find the minimum path. Takes exponential O(2^N) time.",
    },
    better: {
      code: `function jumpDP(nums) {
  const dp = Array(nums.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const maxSteps = nums[i];
    for (let j = 1; j <= maxSteps && i + j < nums.length; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[nums.length - 1];
}`,
      language: "javascript",
      explanation: "Tabulation DP. dp[i] stores the minimum jumps to reach index i. For each index, propagate jump states forward. Runs in O(N^2) time with O(N) space.",
    },
    optimal: {
      code: `function jumpOptimal(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let furthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    furthest = Math.max(furthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = furthest;
      if (currentEnd >= nums.length - 1) break;
    }
  }
  return jumps;
}`,
      language: "javascript",
      explanation: "Greedy BFS-like single-pass interval scan. Maintain the furthest point we can reach (`furthest`) within the current jump range. The boundaries of the current jump is tracked as `currentEnd`. When we reach `i === currentEnd`, we must make another jump, incrementing `jumps`, and updating `currentEnd = furthest`. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[2, 3, 1, 1, 4]", jumps: 0, currentEnd: 0, furthest: 0 }, description: "Start loop." },
      { line: 2, variables: { i: 0, furthest: 2 }, description: "Index 0. furthest = max(0, 0+2) = 2. i == currentEnd (0). Increment jumps = 1. Set currentEnd = 2." },
      { line: 3, variables: { i: 1, furthest: 4 }, description: "Index 1. furthest = max(2, 1+3) = 4. i != currentEnd." },
      { line: 4, variables: { i: 2, furthest: 4 }, description: "Index 2. furthest = max(4, 2+1) = 4. i == currentEnd (2). Increment jumps = 2. Set currentEnd = 4. Terminate. Return 2." }
    ],
    interviewDiscussion: [
      {
        question: "Why does the loop end at `nums.length - 1` instead of `nums.length`?",
        answer: "If we processed the last index, we would check `i === currentEnd` at the final node, which would increment `jumps` unnecessarily, even though we are already at the destination."
      }
    ]
  }
];
