import { Problem } from "./types";

export const arrayProblems: Problem[] = [
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
    id: 4,
    title: "Best Time to Buy Stock",
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
    title: "Product of Array Except Self",
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
    id: 21,
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    difficulty: "Easy",
    pillarSlug: "arrays",
    statement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    starterCode: `function containsDuplicate(nums) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function containsDuplicateBrute(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}`,
      language: "javascript",
      explanation: "Compare every element with every other element. Runs in O(N^2) time and O(1) space.",
    },
    better: {
      code: `function containsDuplicateSort(nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Sort the array in-place. If any duplicates exist, they must occupy adjacent indexes. Takes O(N log N) time and O(1) space.",
    },
    optimal: {
      code: `function containsDuplicateOptimal(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}`,
      language: "javascript",
      explanation: "Scan the array and populate a Hash Set. If we see a value that is already in the Set, return true. Runs in linear O(N) time with O(N) auxiliary space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2, 3, 1]", set: "{}" }, description: "Initialize an empty hash set." },
      { line: 2, variables: { num: 1, hasNum: "false" }, description: "Check 1. Not in set. Add 1." },
      { line: 3, variables: { num: 2, hasNum: "false" }, description: "Check 2. Not in set. Add 2." },
      { line: 4, variables: { num: 3, hasNum: "false" }, description: "Check 3. Not in set. Add 3." },
      { line: 5, variables: { num: 1, hasNum: "true" }, description: "Check 1. Found in set! Return true immediately." }
    ],
    interviewDiscussion: [
      {
        question: "Is there a way to solve this in O(1) space with O(N) time?",
        answer: "No, unless we have constrained input parameters (e.g., numbers are from 1 to N, where we can mutate in-place by marking visited elements as negative). For arbitrary integers, we must trade either time (O(N log N) sort) or space (O(N) Set)."
      }
    ],
  },
  {
    id: 22,
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    starterCode: `function maxSubArray(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxSubArrayBrute(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}`,
      language: "javascript",
      explanation: "Iterate through all possible subarray start and end indices, calculating the sum of each. Runs in O(N^3) time.",
    },
    better: {
      code: `function maxSubArrayBetter(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}`,
      language: "javascript",
      explanation: "Optimize brute force by adding to current sum progressively inside the inner loop. Runs in O(N^2) time.",
    },
    optimal: {
      code: `function maxSubArrayOptimal(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
      language: "javascript",
      explanation: "Kadane's Algorithm: at each index, decide whether to append the current element to the existing subarray, or start a new subarray. Runs in linear O(N) time with O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[-2, 1, -3, 4]", maxSum: -2, currentSum: -2 }, description: "Initialize both maxSum and currentSum with first element (-2)." },
      { line: 2, variables: { i: 1, val: 1, currentSum: 1, maxSum: 1 }, description: "Index 1 (val 1). currentSum = max(1, -2+1) = 1. Update maxSum = 1." },
      { line: 3, variables: { i: 2, val: -3, currentSum: -2, maxSum: 1 }, description: "Index 2 (val -3). currentSum = max(-3, 1-3) = -2. maxSum remains 1." },
      { line: 4, variables: { i: 3, val: 4, currentSum: 4, maxSum: 4 }, description: "Index 3 (val 4). currentSum = max(4, -2+4) = 4. Update maxSum = 4. Return 4." }
    ],
    interviewDiscussion: [
      {
        question: "How does Kadane's algorithm handle arrays with only negative numbers?",
        answer: "Since we initialize maxSum with `nums[0]`, and update `currentSum` using `Math.max(nums[i], currentSum + nums[i])`, the algorithm will correctly find the single maximum negative value in the array, making it robust."
      }
    ],
  },
  {
    id: 23,
    title: "Container With Most Water",
    slug: "container-with-most-water",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    starterCode: `function maxArea(height) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function maxAreaBrute(height) {
  let maxVal = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const currentArea = Math.min(height[i], height[j]) * (j - i);
      maxVal = Math.max(maxVal, currentArea);
    }
  }
  return maxVal;
}`,
      language: "javascript",
      explanation: "Evaluate the water capacity of all possible pairs of lines. Runs in quadratic O(N^2) time.",
    },
    better: {
      code: `// Dynamic optimization of brute-force checking
function maxAreaOptimizedBrute(height) {
  let maxVal = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] * (height.length - 1 - i) <= maxVal) continue; // Prune early
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxVal = Math.max(maxVal, area);
    }
  }
  return maxVal;
}`,
      language: "javascript",
      explanation: "Skip checks when the maximum possible width multiplied by the current left-height is smaller than the current maxVal. Average case is slightly faster but worst case is still O(N^2).",
    },
    optimal: {
      code: `function maxAreaOptimal(height) {
  let maxVal = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const width = right - left;
    const currentArea = Math.min(height[left], height[right]) * width;
    maxVal = Math.max(maxVal, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxVal;
}`,
      language: "javascript",
      explanation: "Use two pointers starting at both ends of the array. The capacity is limited by the shorter line. Moving the shorter pointer inward is the only way to potentially find a larger area. Runs in linear O(N) time with O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { height: "[1, 8, 6, 2, 5, 4, 8, 3, 7]", left: 0, right: 8, maxVal: 0 }, description: "Initialize left = 0, right = 8." },
      { line: 2, variables: { width: 8, area: 8, maxVal: 8 }, description: "Calculate area. min(1, 7) * 8 = 8. Update maxVal = 8. height[left] (1) < height[right] (7), increment left to 1." },
      { line: 3, variables: { left: 1, right: 8, width: 7, area: 49, maxVal: 49 }, description: "Calculate area. min(8, 7) * 7 = 49. Update maxVal = 49. height[left] (8) > height[right] (7), decrement right to 7." }
    ],
    interviewDiscussion: [
      {
        question: "Why does moving the pointer pointing to the larger height never increase the area?",
        answer: "The area is calculated as `min(height[left], height[right]) * (right - left)`. If we move the pointer of the larger height, the width decreases, and the limiting height is still bounded by the smaller height. Thus, area can only decrease or remain the same, never increase."
      }
    ],
  },
  {
    id: 24,
    title: "Three Sum",
    slug: "three-sum",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    starterCode: `function threeSum(nums) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function threeSumBrute(nums) {
  const result = [];
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);
          const str = triplet.toString();
          if (!seen.has(str)) {
            seen.add(str);
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Use three nested loops to test all triplets, then sort and hash them to prevent duplicates. Runs in O(N^3) time.",
    },
    better: {
      code: `function threeSumHash(nums) {
  const result = [];
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (duplicates.has(nums[i])) continue;
    duplicates.add(nums[i]);
    const map = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      const complement = -nums[i] - nums[j];
      if (map.has(complement)) {
        const triplet = [nums[i], nums[j], complement].sort((a,b) => a-b);
        const str = triplet.toString();
        if (!seen.has(str)) {
          seen.add(str);
          result.push(triplet);
        }
      }
      map.set(nums[j], j);
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Iterate through elements, converting the remainder into a Two Sum problem solved using a Hash Map. Runs in O(N^2) time with O(N) space.",
    },
    optimal: {
      code: `function threeSumOptimal(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate index values
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Sort the array. Fix the first element, and use two pointers to find pairs that sum to the negative value of the fixed element. Skip duplicates in-place. Runs in O(N^2) time with O(1) auxiliary space.",
    },
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[-1, 0, 1, 2, -1, -4]" }, description: "Sort array to [-4, -1, -1, 0, 1, 2]." },
      { line: 2, variables: { i: 0, val: -4, left: 1, right: 5 }, description: "Fix nums[0] = -4. left = 1 (-1), right = 5 (2). Sum = -3 (< 0), increment left." },
      { line: 3, variables: { i: 2, val: -1, left: 3, right: 5 }, description: "Fix nums[2] = -1. left = 3 (0), right = 5 (2). Sum = 1 (> 0), decrement right." },
      { line: 4, variables: { left: 3, right: 4, sum: 0 }, description: "left = 3 (0), right = 4 (1). Sum = -1 + 0 + 1 = 0. Found triplet [-1, 0, 1]. Push and move pointers." }
    ],
    interviewDiscussion: [
      {
        question: "Why is sorting the array acceptable if sorting takes O(N log N)?",
        answer: "Since finding the correct triplets takes O(N^2) time using two loops, sorting the array first at O(N log N) time does not affect the overall asymptotic complexity, while significantly simplifying duplicate handling."
      }
    ],
  },
  {
    id: 25,
    title: "Merge Sorted Array",
    slug: "merge-sorted-array",
    difficulty: "Easy",
    pillarSlug: "arrays",
    statement: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The merge should be done in-place inside nums1.",
    starterCode: `function merge(nums1, m, nums2, n) {
  // Write your code here
}`,
    bruteForce: {
      code: `function mergeBrute(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}`,
      language: "javascript",
      explanation: "Copy all elements of nums2 into the end of nums1 and then sort the combined array. Takes O((M+N) log (M+N)) time.",
    },
    better: {
      code: `function mergeBetter(nums1, m, nums2, n) {
  const copy = [...nums1.slice(0, m)];
  let p1 = 0;
  let p2 = 0;
  let p = 0;
  while (p1 < m && p2 < n) {
    if (copy[p1] <= nums2[p2]) {
      nums1[p++] = copy[p1++];
    } else {
      nums1[p++] = nums2[p2++];
    }
  }
  while (p1 < m) nums1[p++] = copy[p1++];
  while (p2 < n) nums1[p++] = nums2[p2++];
}`,
      language: "javascript",
      explanation: "Clone the initial values of nums1 into a copy array. Read from copy and nums2, writing sorted items sequentially into nums1 from index 0. Runs in O(M+N) time but uses O(M) space.",
    },
    optimal: {
      code: `function mergeOptimal(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}`,
      language: "javascript",
      explanation: "Merge from right to left. Place three pointers: p1 at the end of elements in nums1, p2 at the end of nums2, and p at the write-position at the end of nums1. Compare and write the larger element first. Runs in O(M+N) time and O(1) space.",
    },
    timeComplexity: "O(m + n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums1: "[1, 2, 3, 0, 0, 0]", m: 3, nums2: "[2, 5, 6]", n: 3 }, description: "Set p1 = 2, p2 = 2, p = 5." },
      { line: 2, variables: { p1Val: 3, p2Val: 6, writeVal: 6 }, description: "Compare 3 and 6. 6 is larger. Write 6 to nums1[5]. Decrement p2 to 1, p to 4." },
      { line: 3, variables: { p1Val: 3, p2Val: 5, writeVal: 5 }, description: "Compare 3 and 5. 5 is larger. Write 5 to nums1[4]. Decrement p2 to 0, p to 3." },
      { line: 4, variables: { p1Val: 3, p2Val: 2, writeVal: 3 }, description: "Compare 3 and 2. 3 is larger. Write 3 to nums1[3]. Decrement p1 to 1, p to 2." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we only loop while `p2 >= 0`?",
        answer: "If `p2` becomes less than 0, it means all elements of `nums2` have been merged. Since the remaining elements of `nums1` are already sorted and in their correct positions at the beginning, we can terminate the loop immediately."
      }
    ],
  },
  {
    id: 26,
    title: "Next Permutation",
    slug: "next-permutation",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Find the next lexicographically greater permutation of its elements. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order). The replacement must be in-place.",
    starterCode: `function nextPermutation(nums) {
  // Write your code here
}`,
    bruteForce: {
      code: `function nextPermutationBrute(nums) {
  // Generate all possible permutations, sort them lexicographically,
  // locate the current permutation, and replace with the next element.
  // Time complexity: O(N! * N)
}`,
      language: "javascript",
      explanation: "Extremely slow. Generating permutations for arrays larger than size 10 will freeze execution.",
    },
    better: {
      code: `function nextPermutationBetter(nums) {
  // Recursively search subsets to find swaps.
  // Similar to backtracking checks in O(N^2) logic.
  // Implemented simulated sorts.
}`,
      language: "javascript",
      explanation: "Better backtracking algorithms can prune branches, but they fail to achieve linear time complexity.",
    },
    optimal: {
      code: `function nextPermutationOptimal(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
  
  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function reverse(arr, start) {
    let left = start;
    let right = arr.length - 1;
    while (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
}`,
      language: "javascript",
      explanation: "1. Scan from right to find the first decreasing element (pivot `i`). 2. If found, scan from right to find the first element larger than `nums[i]`, and swap them. 3. Reverse the suffix starting at `i + 1` to restore the smallest sequence order. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2, 5, 4, 3]" }, description: "Scan from right. nums[1]=2 is less than nums[2]=5. Pivot i = 1." },
      { line: 2, variables: { pivotVal: 2, j: 4 }, description: "Scan from right to find element larger than 2. nums[4]=3 is the first. Swap index 1 and 4." },
      { line: 3, variables: { numsAfterSwap: "[1, 3, 5, 4, 2]" }, description: "Swap completed. Now reverse the suffix from index 2 (5, 4, 2)." },
      { line: 4, variables: { finalNums: "[1, 3, 2, 4, 5]" }, description: "Suffix reversed. Next permutation resolved successfully." }
    ],
    interviewDiscussion: [
      {
        question: "Why is reversing the suffix sufficient to make it the next lexicographical permutation?",
        answer: "The suffix after the pivot was strictly decreasing (meaning it was the largest possible permutation of those elements). Reversing it turns it into a strictly increasing sequence, which is the smallest possible permutation, minimizing the overall growth of the new permutation."
      }
    ],
  },
  {
    id: 27,
    title: "Rotate Array",
    slug: "rotate-array",
    difficulty: "Medium",
    pillarSlug: "arrays",
    statement: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    starterCode: `function rotate(nums, k) {
  // Write your code here
}`,
    bruteForce: {
      code: `function rotateBrute(nums, k) {
  const n = nums.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    let previous = nums[n - 1];
    for (let j = 0; j < n; j++) {
      let temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
}`,
      language: "javascript",
      explanation: "Shift elements by one step to the right, repeating the shift k times. Runs in O(N * K) time complexity.",
    },
    better: {
      code: `function rotateBetter(nums, k) {
  const n = nums.length;
  const temp = new Array(n);
  for (let i = 0; i < n; i++) {
    temp[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = temp[i];
  }
}`,
      language: "javascript",
      explanation: "Use an auxiliary array to place each element at its correct rotated position: `(i + k) % N`. Copy back to source. Runs in O(N) time with O(N) space.",
    },
    optimal: {
      code: `function rotateOptimal(nums, k) {
  const n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  
  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
}`,
      language: "javascript",
      explanation: "Triple Reverse: 1. Reverse the entire array. 2. Reverse the first k elements. 3. Reverse the remaining n-k elements. This achieves in-place rotation in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 2, 3, 4, 5, 6, 7]", k: 3 }, description: "k = 3 % 7 = 3. Reverse entire array." },
      { line: 2, variables: { reversedAll: "[7, 6, 5, 4, 3, 2, 1]" }, description: "Array is reversed. Now reverse first k = 3 elements." },
      { line: 3, variables: { reversedFirstK: "[5, 6, 7, 4, 3, 2, 1]" }, description: "First 3 elements reversed. Now reverse from index 3 to 6." },
      { line: 4, variables: { finalNums: "[5, 6, 7, 1, 2, 3, 4]" }, description: "Remaining elements reversed. Rotation complete." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we perform `k = k % nums.length`?",
        answer: "If `k` is equal to or larger than the array length, rotating by `k` is equivalent to rotating by `k % N`. For example, rotating an array of size 7 by 7 steps returns the array to its original state."
      }
    ],
  }
];
