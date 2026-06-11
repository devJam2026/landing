import { Problem } from "./types";

export const binarySearchProblems: Problem[] = [
  {
    id: 18,
    title: "Search in Rotated Sorted Array",
    slug: "search-rotated-sorted",
    difficulty: "Medium",
    pillarSlug: "binary-search",
    statement: "Given a sorted integer array nums that has been possibly rotated at an unknown pivot index, and a target value, return the index of target if it is in nums, or -1 if it is not. You must write an algorithm with O(log N) runtime complexity.",
    starterCode: `function search(nums, target) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function searchBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Perform a linear search from start to end. Ignore the sorted structure, leading to O(N) time complexity.",
    },
    better: {
      code: `function searchPivot(nums, target) {
  let pivot = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      pivot = i;
      break;
    }
  }
  return nums.indexOf(target);
}`,
      language: "javascript",
      explanation: "Find the rotation pivot index in O(N) worst case, then split the array into two sorted sub-segments and perform standard binary search on one. Still limited by the initial O(N) pivot scan.",
    },
    optimal: {
      code: `function searchOptimal(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Single-pass binary search. By checking if the left boundary is less than or equal to the mid value, we can identify which side of the pivot is sorted. Then check if the target lies within the boundaries of that sorted side to adjust our binary search pointers. Runs in O(log N) time and O(1) space.",
    },
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[4, 5, 6, 7, 0, 1, 2]", target: 0, left: 0, right: 6 }, description: "Initialize pointers left = 0, right = 6. Mid index is 3 (val 7)." },
      { line: 2, variables: { midVal: 7, leftVal: 4, sortedHalf: '"left"' }, description: "nums[mid] = 7. Compare nums[left] (4) <= 7. Left side is sorted. Is target (0) between 4 and 7? No, so move left pointer to mid + 1 (4)." },
      { line: 3, variables: { left: 4, right: 6, mid: 5 }, description: "Mid index is 5 (val 1). nums[mid] = 1. Compare nums[left] (0) <= 1. Right half sorted. Is target (0) between 0 and 1? Yes, so move right pointer to mid - 1 (4)." },
      { line: 4, variables: { left: 4, right: 4, mid: 4 }, description: "Mid index is 4 (val 0). nums[mid] = target (0). Match found! Return index 4." }
    ],
    interviewDiscussion: [
      {
        question: "What happens if the array contains duplicate elements?",
        answer: "If duplicates are allowed (e.g. [1, 0, 1, 1, 1] with target 0), it becomes impossible to determine if the left or right side is sorted when nums[left] === nums[mid] === nums[right]. In this scenario, we must increment left and decrement right, causing the time complexity to degrade to O(N) in the worst case.",
      }
    ],
  },
  {
    id: 100,
    title: "Binary Search",
    slug: "binary-search",
    difficulty: "Easy",
    pillarSlug: "binary-search",
    statement: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log N) runtime complexity.",
    starterCode: `function search(nums, target) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function searchBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Iterate through the array sequentially from start to end, checking if the current element equals the target. Runs in linear O(N) time.",
    },
    better: {
      code: `function searchRecursive(nums, target) {
  function helper(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      return helper(left, mid - 1);
    } else {
      return helper(mid + 1, right);
    }
  }
  return helper(0, nums.length - 1);
}`,
      language: "javascript",
      explanation: "Recursive binary search. Splitting the problem in half dynamically. Takes O(log N) time, but consumes O(log N) space on the call stack due to recursion recursion depth.",
    },
    optimal: {
      code: `function searchOptimal(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Iterative binary search. Maintain two pointers (left and right). At each step, calculate the midpoint, compare it to target, and narrow the search space to the left or right half in-place. Runs in O(log N) time and O(1) space.",
    },
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[-1, 0, 3, 5, 9, 12]", target: 9, left: 0, right: 5 }, description: "Pointers at bounds: left = 0, right = 5. mid = 2 (value 3)." },
      { line: 2, variables: { midVal: 3, side: '"right"' }, description: "3 < 9. Target must be in right half. Set left = 3." },
      { line: 3, variables: { left: 3, right: 5, mid: 4 }, description: "mid = 4 (value 9). nums[4] = target (9). Return index 4." }
    ],
    interviewDiscussion: [
      {
        question: "Why should we use `left + Math.floor((right - left) / 2)` instead of `Math.floor((left + right) / 2)`?",
        answer: "In languages with fixed-size integers (like Java or C++), if `left` and `right` are very large, their sum `left + right` can overflow the maximum integer capacity. Subtracted form `left + (right - left) / 2` avoids overflow while mathematically yielding the exact same midpoint index. In JavaScript, all numbers are double-precision floats (safe up to 2^53), but this is still a highly regarded best practice in coding interviews."
      }
    ]
  },
  {
    id: 101,
    title: "Search a 2D Matrix",
    slug: "search-a-2d-matrix",
    difficulty: "Medium",
    pillarSlug: "binary-search",
    statement: "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties: 1. Integers in each row are sorted from left to right. 2. The first integer of each row is greater than the last integer of the previous row.",
    starterCode: `function searchMatrix(matrix, target) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function searchMatrixBrute(matrix, target) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === target) return true;
    }
  }
  return false;
}`,
      language: "javascript",
      explanation: "Perform a linear scan across every element of the matrix. Runs in O(M * N) time.",
    },
    better: {
      code: `function searchMatrixRows(matrix, target) {
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];
    if (target >= row[0] && target <= row[row.length - 1]) {
      // Binary search in this row
      let left = 0;
      let right = row.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] === target) return true;
        if (row[mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return false;
    }
  }
  return false;
}`,
      language: "javascript",
      explanation: "Find the potential row in O(M) time, then perform standard binary search on that row in O(log N) time. Total time complexity is O(M + log N).",
    },
    optimal: {
      code: `function searchMatrixOptimal(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const r = Math.floor(mid / n);
    const c = mid % n;
    const val = matrix[r][c];
    
    if (val === target) {
      return true;
    } else if (val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}`,
      language: "javascript",
      explanation: "Treat the 2D matrix as a virtual 1D sorted array of size M * N. Binary search on this virtual array: map index `mid` to coordinates in the grid using `r = Math.floor(mid / N)` and `c = mid % N`, where N is the number of columns. This runs in a single-pass O(log(M * N)) time and O(1) space.",
    },
    timeComplexity: "O(log(m * n))",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { matrix: "[[1,3],[5,7]]", target: 5, m: 2, n: 2 }, description: "Search space 0 to 3. Pointers: left = 0, right = 3. mid = 1." },
      { line: 2, variables: { mid: 1, r: 0, c: 1, val: 3 }, description: "Map mid index 1 to grid cell: r=0, c=1 (val 3). 3 < 5, move left = mid + 1 = 2." },
      { line: 3, variables: { left: 2, right: 3, mid: 2, r: 1, c: 0, val: 5 }, description: "Map mid index 2 to grid: r=1, c=0 (val 5). val = target, return true." }
    ],
    interviewDiscussion: [
      {
        question: "How would you search if the matrix was sorted down column columns but not wrapped (Search a 2D Matrix II)?",
        answer: "If rows are sorted left-to-right and columns are sorted top-to-bottom, we cannot treat it as a single flat array. Instead, start at the top-right corner. If value > target, move left (decrease col). If value < target, move down (increase row). This stair-step traversal runs in O(M + N) time."
      }
    ]
  },
  {
    id: 102,
    title: "Find Minimum in Rotated Sorted Array",
    slug: "find-minimum-in-rotated-sorted-array",
    difficulty: "Medium",
    pillarSlug: "binary-search",
    statement: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log N) time.",
    starterCode: `function findMin(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function findMinBrute(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }
  return min;
}`,
      language: "javascript",
      explanation: "Perform a linear scan from start to end, checking for the smallest element. Takes O(N) time.",
    },
    better: {
      code: `function findMinPivot(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return nums[i];
  }
  return nums[0];
}`,
      language: "javascript",
      explanation: "Scan for the pivot point where the value decreases. The decreasing element is the minimum. If the array is not rotated, return the first element. Still takes O(N) time in the worst case (when the array is sorted or rotated at the very end).",
    },
    optimal: {
      code: `function findMinOptimal(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1; // Minimum must be in the right unsorted half
    } else {
      right = mid; // Minimum is in the left sorted half (inclusive of mid)
    }
  }
  return nums[left];
}`,
      language: "javascript",
      explanation: "Binary search comparing the midpoint element with the rightmost boundary. If nums[mid] > nums[right], it means the pivot occurs to the right of mid, so minimum is in the right half (left = mid + 1). Otherwise, the right side is sorted, so the minimum is at or to the left of mid (right = mid). Pointers converge on the minimum value in O(log N) steps.",
    },
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[4, 5, 6, 7, 0, 1, 2]", left: 0, right: 6 }, description: "Initial pointers left = 0, right = 6. mid = 3 (val 7)." },
      { line: 2, variables: { midVal: 7, rightVal: 2 }, description: "7 > 2. The left half is sorted, pivot is on the right. Set left = mid + 1 = 4." },
      { line: 3, variables: { left: 4, right: 6, mid: 5 }, description: "Pointers: left = 4, right = 6. mid = 5 (val 1). 1 <= 2. Right side sorted, minimum is on left. Set right = mid = 5." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we compare `nums[mid]` to `nums[right]` instead of `nums[left]`?",
        answer: "Comparing with `nums[left]` does not always distinguish the unsorted side (e.g. for [3, 4, 5, 1, 2] mid is 5, 5 > 3 which suggests right side is sorted, which is false). Comparing with the rightmost boundary is robust and always points correctly to the unsorted/rotated half."
      }
    ]
  },
  {
    id: 103,
    title: "Koko Eating Bananas",
    slug: "koko-eating-bananas",
    difficulty: "Medium",
    pillarSlug: "binary-search",
    statement: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.",
    starterCode: `function minEatingSpeed(piles, h) {
  // Write your code here
  return 1;
}`,
    bruteForce: {
      code: `function minEatingSpeedBrute(piles, h) {
  let k = 1;
  while (true) {
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / k);
    }
    if (hours <= h) return k;
    k++;
  }
}`,
      language: "javascript",
      explanation: "Linear scan of speed k starting from 1 upwards. For each speed, compute total hours. Runs in O(Max(P) * N) time, which will time out for large piles.",
    },
    better: {
      code: `function minEatingSpeedSearch(piles, h) {
  // Fast check to find lower bound (average speed)
  const sum = piles.reduce((a, b) => a + b, 0);
  let startK = Math.max(1, Math.floor(sum / h));
  while (true) {
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / startK);
    }
    if (hours <= h) return startK;
    startK++;
  }
}`,
      language: "javascript",
      explanation: "Optimizes brute force by starting the search at the average speed target `sum / h` instead of 1. Still runs in linear time worst-case.",
    },
    optimal: {
      code: `function minEatingSpeedOptimal(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;
  
  while (left <= right) {
    const k = left + Math.floor((right - left) / 2);
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / k);
    }
    if (hours <= h) {
      res = k;
      right = k - 1; // Try to find a slower speed
    } else {
      left = k + 1; // Speed is too slow, increase speed
    }
  }
  return res;
}`,
      language: "javascript",
      explanation: "Binary search on the answer space. The possible speeds range from 1 to the maximum pile size (since eating faster than the max pile size doesn't save any more time). Binary search on this range [1, Max(piles)]. For each candidate speed `k`, compute hours in O(N). Runs in O(N * log(Max(P))) time.",
    },
    timeComplexity: "O(n log m)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { piles: "[3, 6, 7]", h: 8, left: 1, right: 7 }, description: "Initial speed boundaries left = 1, right = 7. mid k = 4." },
      { line: 2, variables: { k: 4, hours: 6 }, description: "Hours = ceil(3/4)+ceil(6/4)+ceil(7/4) = 1 + 2 + 3 = 6. 6 <= 8 hours. Save speed 4. Narrow search right = k - 1 = 3." },
      { line: 3, variables: { left: 1, right: 3, mid: 2 }, description: "Test speed k = 2. Hours = 2 + 3 + 4 = 9. 9 > 8, too slow. Set left = mid + 1 = 3." }
    ],
    interviewDiscussion: [
      {
        question: "Can Koko finish eating if h is smaller than the number of piles?",
        answer: "No. Since Koko can eat from at most one pile per hour, she needs at least N hours (one hour per pile) to finish all bananas. The problem statement guarantees `h >= piles.length`."
      }
    ]
  },
  {
    id: 104,
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    difficulty: "Hard",
    pillarSlug: "binary-search",
    statement: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(M+N)).",
    starterCode: `function findMedianSortedArrays(nums1, nums2) {
  // Write your code here
  return 0.0;
}`,
    bruteForce: {
      code: `function findMedianBrute(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = merged.length;
  if (len % 2 !== 0) return merged[Math.floor(len / 2)];
  return (merged[len/2 - 1] + merged[len/2]) / 2;
}`,
      language: "javascript",
      explanation: "Merge both arrays into one, sort it, and select the median element. Runs in O((M+N) log (M+N)) time with O(M+N) space.",
    },
    better: {
      code: `function findMedianTwoPointers(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  const targetIdx = Math.floor(total / 2);
  let p1 = 0, p2 = 0;
  let prevVal = 0, currVal = 0;
  
  for (let i = 0; i <= targetIdx; i++) {
    prevVal = currVal;
    if (p1 < m && (p2 >= n || nums1[p1] <= nums2[p2])) {
      currVal = nums1[p1++];
    } else {
      currVal = nums2[p2++];
    }
  }
  if (total % 2 !== 0) return currVal;
  return (prevVal + currVal) / 2;
}`,
      language: "javascript",
      explanation: "Merge-sort traversal using two pointers. Stop once we reach the midpoint index of the combined array. Runs in linear O(M+N) time and O(1) space.",
    },
    optimal: {
      code: `function findMedianSortedArraysOptimal(nums1, nums2) {
  let A = nums1;
  let B = nums2;
  if (A.length > B.length) {
    [A, B] = [B, A]; // Ensure A is the shorter array
  }
  const total = A.length + B.length;
  const half = Math.floor((total + 1) / 2);
  let left = 0;
  let right = A.length;
  
  while (left <= right) {
    const i = left + Math.floor((right - left) / 2); // partition in A
    const j = half - i; // partition in B
    
    const Aleft = i > 0 ? A[i - 1] : -Infinity;
    const Aright = i < A.length ? A[i] : Infinity;
    const Bleft = j > 0 ? B[j - 1] : -Infinity;
    const Bright = j < B.length ? B[j] : Infinity;
    
    if (Aleft <= Bright && Bleft <= Aright) {
      if (total % 2 !== 0) {
        return Math.max(Aleft, Bleft);
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    } else if (Aleft > Bright) {
      right = i - 1; // Partition in A is too far right
    } else {
      left = i + 1; // Partition in A is too far left
    }
  }
  return 0.0;
}`,
      language: "javascript",
      explanation: "Binary search on the partitions of the smaller array. By partitioning array A at index `i`, we can deduce the partition in B at index `half - i`. Verify if the partitioned boundaries overlap correctly: `Aleft <= Bright` and `Bleft <= Aright`. If correct, return median. Runs in O(log(min(M, N))) time.",
    },
    timeComplexity: "O(log(min(m, n)))",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { A: "[1, 3]", B: "[2]", total: 3, half: 2 }, description: "A is shorter. half = Math.floor(4/2) = 2. left = 0, right = 2." },
      { line: 2, variables: { i: 1, j: 1 }, description: "Binary search partition: i = 1, j = 2 - 1 = 1." },
      { line: 3, variables: { Aleft: 1, Aright: 3, Bleft: 2, Bright: Infinity }, description: "Boundaries: Aleft=1, Aright=3, Bleft=2, Bright=∞. Check 1 <= ∞ (true) and 2 <= 3 (true). Target partition found. odd total, return max(Aleft, Bleft) = 2." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we force binary search on the shorter array?",
        answer: "By executing binary search on the shorter array, we guarantee that the partition index `j = half - i` in the larger array is always valid (non-negative and within bounds). It also minimizes the binary search range, optimizing time complexity to O(log(min(M, N)))."
      }
    ]
  },
  {
    id: 105,
    title: "Find First and Last Position of Element in Sorted Array",
    slug: "find-first-and-last-position-of-element-in-sorted-array",
    difficulty: "Medium",
    pillarSlug: "binary-search",
    statement: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log N) runtime complexity.",
    starterCode: `function searchRange(nums, target) {
  // Write your code here
  return [-1, -1];
}`,
    bruteForce: {
      code: `function searchRangeBrute(nums, target) {
  let first = -1;
  let last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  return [first, last];
}`,
      language: "javascript",
      explanation: "Iterate from start to end, noting down the first and last occurrence indices of target. Runs in linear O(N) time.",
    },
    better: {
      code: `function searchRangeFirst(nums, target) {
  const idx = nums.indexOf(target);
  if (idx === -1) return [-1, -1];
  let last = idx;
  while (last + 1 < nums.length && nums[last + 1] === target) {
    last++;
  }
  return [idx, last];
}`,
      language: "javascript",
      explanation: "Perform a binary search to find target, then scan linearly left and right to find bounds. Average case is fast, but worst-case is O(N) if all elements are the target (e.g. [5,5,5,5,5] with target 5).",
    },
    optimal: {
      code: `function searchRangeOptimal(nums, target) {
  function findBound(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1; // Narrow search to left half for first occurrence
        } else {
          left = mid + 1;  // Narrow search to right half for last occurrence
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return bound;
  }
  const first = findBound(true);
  const last = findBound(false);
  return [first, last];
}`,
      language: "javascript",
      explanation: "Dual binary search. Run two modified binary searches: `findBound(true)` to find the leftmost boundary, and `findBound(false)` to find the rightmost boundary. If nums[mid] === target, record the index, but instead of stopping, continue searching left (right = mid - 1) or right (left = mid + 1). Runs in O(log N) time and O(1) space.",
    },
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[5, 7, 7, 8, 8, 10]", target: 8 }, description: "Run findBound(true). Pointers: left=0, right=5. mid=2 (value 7)." },
      { line: 2, variables: { left: 3, right: 5, mid: 4 }, description: "7 < 8, move left to 3. Pointers: left=3, right=5. mid=4 (value 8). Match found! Set bound = 4. Search left: set right = 3." },
      { line: 3, variables: { left: 3, right: 3, mid: 3 }, description: "mid=3 (value 8). Match found! Set bound = 3. Search left: set right = 2. Loop terminates. First bound is 3." }
    ],
    interviewDiscussion: [
      {
        question: "Can we find both indices using only one standard binary search?",
        answer: "No, a standard binary search terminates as soon as it finds *any* occurrence of target. Since the target can be repeated, we must run either two binary searches or binary search for `target` and `target + 1` to locate insertion index boundaries."
      }
    ]
  }
];
