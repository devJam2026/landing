import { Problem } from "./types";

export const bitManipulationProblems: Problem[] = [
  {
    id: 20,
    title: "Single Number",
    slug: "single-number",
    difficulty: "Easy",
    pillarSlug: "bit-manipulation",
    statement: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    starterCode: `function singleNumber(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function singleNumberBrute(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count === 1) return nums[i];
  }
  return -1;
}`,
      language: "javascript",
      explanation: "For every number, iterate through the array to count its occurrences. Quadratic O(N^2) time.",
    },
    better: {
      code: `function singleNumberMap(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return Array.from(set)[0];
}`,
      language: "javascript",
      explanation: "Use a Hash Set. Add values if they are new, and remove them if they appear again. The remaining element in the set is the single number. Runs in linear O(N) time but uses O(N) space.",
    },
    optimal: {
      code: `function singleNumberOptimal(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}`,
      language: "javascript",
      explanation: "XOR all numbers in the array. Since bitwise XOR is commutative and associative, and satisfies A ^ A = 0 and A ^ 0 = A, all duplicate elements cancel out to zero, leaving exactly the single number. Runs in O(N) time and uses O(1) extra space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[4, 1, 2, 1, 2]", result: 0 }, description: "Initialize result as 0." },
      { line: 2, variables: { num: 4, resultState: 4 }, description: "0 ^ 4 = 4." },
      { line: 3, variables: { num: 1, resultState: 5 }, description: "4 ^ 1 = 5." },
      { line: 4, variables: { num: 2, resultState: 7 }, description: "5 ^ 2 = 7." },
      { line: 5, variables: { num: 1, resultState: 6 }, description: "7 ^ 1 = 6 (which is 4 ^ 2)." },
      { line: 6, variables: { num: 2, resultState: 4 }, description: "6 ^ 2 = 4. Loop ends. Return result (4)." }
    ],
    interviewDiscussion: [
      {
        question: "Why does the XOR solution work regardless of the order of elements?",
        answer: "Bitwise XOR is commutative (A ^ B = B ^ A) and associative ((A ^ B) ^ C = A ^ (B ^ C)). This means that regardless of how elements are shuffled in the array, all duplicate pairs will cancel each other out, leaving only the single element: (1 ^ 1) ^ (2 ^ 2) ^ 4 = 0 ^ 0 ^ 4 = 4.",
      }
    ],
  },
  {
    id: 111,
    title: "Number of 1 Bits",
    slug: "number-of-1-bits",
    difficulty: "Easy",
    pillarSlug: "bit-manipulation",
    statement: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
    starterCode: `function hammingWeight(n) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function hammingWeightBrute(n) {
  const binaryStr = n.toString(2);
  let count = 0;
  for (const char of binaryStr) {
    if (char === '1') count++;
  }
  return count;
}`,
      language: "javascript",
      explanation: "Convert the integer to its binary string representation using `toString(2)`, then iterate through the characters counting occurrences of '1'. Runs in O(log N) time and O(log N) string space.",
    },
    better: {
      code: `function hammingWeightShift(n) {
  let count = 0;
  while (n !== 0) {
    count += (n & 1);
    n = n >>> 1; // Unsigned right shift to handle negative/large numbers
  }
  return count;
}`,
      language: "javascript",
      explanation: "Examine bits one-by-one by checking if the least significant bit is 1 (`n & 1`), then shifting the number to the right by one position. Repeats 32 times for a 32-bit integer. Runs in O(1) time (constant 32 steps).",
    },
    optimal: {
      code: `function hammingWeightOptimal(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1); // Clears the lowest set bit
    count++;
  }
  return count;
}`,
      language: "javascript",
      explanation: "Brian Kernighan's Algorithm. The bitwise operation `n & (n - 1)` always clears the rightmost/lowest set bit of `n`. By running this in a loop, we can count set bits in O(K) steps, where K is the actual number of set bits (rather than looping all 32 bits). Runs in O(K) time and O(1) space.",
    },
    timeComplexity: "O(k)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { n: 12, count: 0 }, description: "12 in binary is 1100. Loop starts." },
      { line: 2, variables: { nAfterOp: 8, count: 1 }, description: "n = 12 & 11 = 1100 & 1011 = 1000 (8). Cleared rightmost bit. count = 1." },
      { line: 3, variables: { nAfterOp: 0, count: 2 }, description: "n = 8 & 7 = 1000 & 0111 = 0000 (0). Cleared rightmost bit. count = 2. Loop exits. Return 2." }
    ],
    interviewDiscussion: [
      {
        question: "How does the expression `n & (n - 1)` work under the hood?",
        answer: "Subtracting 1 from a binary number flips all the bits from the rightmost set bit to the end (e.g. 12 = 1100, 11 = 1011). Performing a bitwise AND between `n` and `n - 1` cancels out that rightmost set bit, leaving all higher bits unchanged. This is highly efficient for sparse integers."
      }
    ]
  },
  {
    id: 112,
    title: "Counting Bits",
    slug: "counting-bits",
    difficulty: "Easy",
    pillarSlug: "bit-manipulation",
    statement: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1 bits in the binary representation of i.",
    starterCode: `function countBits(n) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function countBitsBrute(n) {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let temp = i;
    while (temp !== 0) {
      count += (temp & 1);
      temp = temp >>> 1;
    }
    ans.push(count);
  }
  return ans;
}`,
      language: "javascript",
      explanation: "Compute the Hamming weight for every number from 0 to N individually. Runs in O(N log N) time.",
    },
    better: {
      code: `function countBitsKernighan(n) {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let temp = i;
    while (temp !== 0) {
      temp = temp & (temp - 1);
      count++;
    }
    ans.push(count);
  }
  return ans;
}`,
      language: "javascript",
      explanation: "Applies Brian Kernighan's bit-clearing optimization on each index. Faster than shift brute force, but still O(N * K) time complexity.",
    },
    optimal: {
      code: `function countBitsOptimal(n) {
  const ans = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // ans[i] = ans[i >> 1] + (i & 1)
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}`,
      language: "javascript",
      explanation: "DP with Bit Manipulation (Odd/Even Relation). Note that shifting `i` right by 1 (`i >> 1`) yields a number we have already computed. The number of set bits in `i` is exactly equal to the number of set bits in `i >> 1`, plus 1 if `i` is odd (`i & 1`). This allows us to populate the array in a single O(N) pass without bit loops. Runs in O(N) time and O(1) auxiliary space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { n: 4, ans: "[0, 0, 0, 0, 0]" }, description: "Initialize array. ans[0] = 0." },
      { line: 2, variables: { i: 1, prevVal: 0, oddBit: 1 }, description: "i = 1. ans[1] = ans[1 >> 1] + (1 & 1) = ans[0] + 1 = 1." },
      { line: 3, variables: { i: 2, prevVal: 1, oddBit: 0 }, description: "i = 2. ans[2] = ans[2 >> 1] + (2 & 1) = ans[1] + 0 = 1." },
      { line: 4, variables: { i: 3, prevVal: 1, oddBit: 1 }, description: "i = 3. ans[3] = ans[3 >> 1] + (3 & 1) = ans[1] + 1 = 2." }
    ],
    interviewDiscussion: [
      {
        question: "Is there another DP transition relation for Counting Bits?",
        answer: "Yes. We can use the relation `ans[i] = ans[i & (i - 1)] + 1`. This states that the number of set bits in `i` is equal to the number of set bits in the value after clearing its rightmost bit, plus 1. Both run in linear O(N) time."
      }
    ]
  },
  {
    id: 113,
    title: "Reverse Bits",
    slug: "reverse-bits",
    difficulty: "Easy",
    pillarSlug: "bit-manipulation",
    statement: "Reverse bits of a given 32-bit unsigned integer.",
    starterCode: `function reverseBits(n) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function reverseBitsBrute(n) {
  const binaryStr = n.toString(2).padStart(32, '0');
  const reversedStr = binaryStr.split('').reverse().join('');
  return parseInt(reversedStr, 2);
}`,
      language: "javascript",
      explanation: "Convert the integer to a 32-character binary string, reverse it using string functions, and parse it back to a base-2 integer. Very slow due to string allocations.",
    },
    better: {
      code: `function reverseBitsShift(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }
  // Convert signed integer output of bitwise shifts to unsigned
  return result >>> 0;
}`,
      language: "javascript",
      explanation: "Iteratively extract the least significant bit of `n` using `n & 1`, append it to the `result` by shifting left `(result << 1) | bit`, and right-shift `n`. Unsigned right shift `>>> 0` at the end ensures JavaScript returns a positive 32-bit unsigned float. Runs in O(1) time (constant 32 loops).",
    },
    optimal: {
      code: `function reverseBitsOptimal(n) {
  // Swap adjacent blocks of bits in parallel
  n = ((n & 0xffff0000) >>> 16) | ((n & 0x0000ffff) << 16);
  n = ((n & 0xff00ff00) >>> 8)  | ((n & 0x00ff00ff) << 8);
  n = ((n & 0xf0f0f0f0) >>> 4)  | ((n & 0x0f0f0f0f) << 4);
  n = ((n & 0xcccccccc) >>> 2)  | ((n & 0x33333333) << 2);
  n = ((n & 0xaaaaaaaa) >>> 1)  | ((n & 0x55555555) << 1);
  return n >>> 0;
}`,
      language: "javascript",
      explanation: "Divide and Conquer (Bit Mask Swapping). Swap adjacent 16-bit blocks, then 8-bit blocks, then 4-bit, 2-bit, and finally 1-bit pairs using bit masks. This performs reversal in O(1) time with exactly 5 logical steps, avoiding loop iterations entirely.",
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { n: "0x12345678" }, description: "Start mask swapping." },
      { line: 2, variables: { nStep1: "0x56781234" }, description: "Swap 16-bit blocks." },
      { line: 3, variables: { nStep2: "0x78563412" }, description: "Swap 8-bit blocks. Continue down to bit level." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we append `>>> 0` at the end of the shift solutions?",
        answer: "In JavaScript, bitwise operators operate on 32-bit signed integers in two's complement. If the most significant bit (bit 31) is reversed to 1, the result is treated as a negative number. Appending the unsigned right shift operator `>>> 0` converts the internal representation back to an unsigned 32-bit number."
      }
    ]
  },
  {
    id: 114,
    title: "Missing Number",
    slug: "missing-number",
    difficulty: "Easy",
    pillarSlug: "bit-manipulation",
    statement: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    starterCode: `function missingNumber(nums) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function missingNumberBrute(nums) {
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "For each candidate number from 0 to N, perform a linear lookup scan in the array. Runs in quadratic O(N^2) time.",
    },
    better: {
      code: `function missingNumberSum(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}`,
      language: "javascript",
      explanation: "Mathematical Summation. Calculate the sum of numbers from 0 to N using Gauss' formula: `N * (N + 1) / 2`. Subtract the sum of elements in the array to find the missing value. Runs in O(N) time but can suffer from integer overflow in languages with fixed integer sizes.",
    },
    optimal: {
      code: `function missingNumberOptimal(nums) {
  const n = nums.length;
  let missing = n;
  for (let i = 0; i < n; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
}`,
      language: "javascript",
      explanation: "Bitwise XOR. Since we know that there are N elements in the array and numbers are in range [0, N], we can XOR all elements in the array with all indices from 0 to N. Every number that exists in the array will cancel out with its corresponding index, leaving exactly the missing number. Runs in O(N) time and O(1) space, with zero risk of overflow.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { nums: "[3, 0, 1]", n: 3, missing: 3 }, description: "Initialize missing as n = 3." },
      { line: 2, variables: { i: 0, indexXor: "0^3", missingState: 0 }, description: "Index 0 (val 3). missing = 3 ^ 0 ^ 3 = 0." },
      { line: 3, variables: { i: 1, indexXor: "1^0", missingState: 1 }, description: "Index 1 (val 0). missing = 0 ^ 1 ^ 0 = 1." },
      { line: 4, variables: { i: 2, indexXor: "2^1", missingState: 2 }, description: "Index 2 (val 1). missing = 1 ^ 2 ^ 1 = 2. End loop. Return missing = 2." }
    ],
    interviewDiscussion: [
      {
        question: "Compare the sum solution to the XOR solution in terms of safety.",
        answer: "The Sum solution requires calculating `N * (N+1) / 2`. If N is large (e.g., 10^6), the sum can exceed the maximum safe integer limit of standard 32-bit registers (leading to overflow). The XOR solution operates strictly on bitwise gates, preventing numbers from growing larger than N itself, making it completely safe from overflow."
      }
    ]
  }
];
