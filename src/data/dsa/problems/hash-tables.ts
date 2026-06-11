import { Problem } from "./types";

export const hashTablesProblems: Problem[] = [
  {
    id: 55,
    title: "Intersection of Two Arrays",
    slug: "intersection-of-two-arrays",
    difficulty: "Easy",
    pillarSlug: "hash-tables",
    statement: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
    starterCode: `function intersection(nums1, nums2) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function intersectionBrute(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Compare every element in nums1 with every element in nums2, checks for existence to de-duplicate. Runs in O(N * M) time.",
    },
    better: {
      code: `function intersectionSort(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0;
  const result = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return Array.from(result);
}`,
      language: "javascript",
      explanation: "Sort both arrays and use two pointers to find common elements in a single pass. Requires O(N log N + M log M) time due to sorting.",
    },
    optimal: {
      code: `function intersectionOptimal(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();
  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }
  return Array.from(result);
}`,
      language: "javascript",
      explanation: "Convert nums1 to a Set for O(1) average lookup times. Scan nums2, inserting common items into a result Set to guarantee uniqueness. Runs in linear O(N + M) time.",
    },
    timeComplexity: "O(n + m)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums1: "[1, 2, 2, 1]", nums2: "[2, 2]", set1: "{1, 2}" }, description: "Convert nums1 to Set." },
      { line: 2, variables: { num: 2, hasNum: "true", result: "{2}" }, description: "First element of nums2 is 2. 2 exists in set1. Add 2 to result Set." },
      { line: 3, variables: { num: 2, hasNum: "true", result: "{2}" }, description: "Second element of nums2 is 2. 2 exists in set1. Set ignores duplicate 2. Return [2]." }
    ],
    interviewDiscussion: [
      {
        question: "What if nums1 is very small compared to nums2?",
        answer: "If nums1 is small, we should choose nums1 to build the Set. This minimizes the auxiliary space allocation to O(min(N, M)) and accelerates Set construction."
      }
    ],
  },
  {
    id: 56,
    title: "Subarray Sum Equals K",
    slug: "subarray-sum-equals-k",
    difficulty: "Medium",
    pillarSlug: "hash-tables",
    statement: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    starterCode: `function subarraySum(nums, k) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function subarraySumBrute(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let l = i; l <= j; l++) {
        sum += nums[l];
      }
      if (sum === k) count++;
    }
  }
  return count;
}`,
      language: "javascript",
      explanation: "Test all possible subarrays, summing elements sequentially. Runs in cubic O(N^3) time.",
    },
    better: {
      code: `function subarraySumBetter(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count;
}`,
      language: "javascript",
      explanation: "Optimize brute force by accumulating the sum incrementally inside the inner loop. Runs in O(N^2) time.",
    },
    optimal: {
      code: `function subarraySumOptimal(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1); // Base case: prefix sum of 0 has frequency 1
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}`,
      language: "javascript",
      explanation: "Prefix Sum Map: Maintain a running cumulative sum. If `sum - k` exists in the map, it means there are subarrays ending at the current index that sum to k. Add their frequencies to the count. Runs in linear O(N) time with O(N) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 1, 1]", k: 2, map: "{0: 1}", count: 0, sum: 0 }, description: "Initialize map with base prefix sum." },
      { line: 2, variables: { i: 0, sum: 1, complement: -1 }, description: "Index 0. sum = 1. sum-k = -1 not in map. Store sum 1: map = {0: 1, 1: 1}." },
      { line: 3, variables: { i: 1, sum: 2, complement: 0, count: 1 }, description: "Index 1. sum = 2. sum-k = 0 exists in map (freq 1). count becomes 1. map = {0:1, 1:1, 2:1}." },
      { line: 4, variables: { i: 2, sum: 3, complement: 1, count: 2 }, description: "Index 2. sum = 3. sum-k = 1 exists in map (freq 1). count becomes 2. map = {0:1, 1:1, 2:1, 3:1}." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we initialize the map with `(0, 1)`?",
        answer: "The entry `(0, 1)` handles cases where the cumulative sum itself equals `k` from index 0. If `sum === k`, then `sum - k === 0`, and retrieving the frequency of 0 adds 1 to the count, correctly identifying the prefix subarray."
      }
    ],
  },
  {
    id: 57,
    title: "First Unique Character in String",
    slug: "first-unique-character-in-a-string",
    difficulty: "Easy",
    pillarSlug: "hash-tables",
    statement: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    starterCode: `function firstUniqChar(s) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function firstUniqCharBrute(s) {
  for (let i = 0; i < s.length; i++) {
    let duplicate = false;
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "For each character, scan the entire string to check if it repeats. Runs in O(N^2) time.",
    },
    better: {
      code: `function firstUniqCharMap(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Use a Hash Map to record character frequencies in the first pass. Scan the string in a second pass, returning the index of the first character with frequency 1. Runs in O(N) time.",
    },
    optimal: {
      code: `function firstUniqCharOptimal(s) {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (counts[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Direct Access Array: Use a fixed-size integer array of size 26 (assuming lowercase English letters) to record frequencies. Avoids Map allocation overhead, yielding constant O(1) space and linear O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"leetcode"', counts: "Array(26)" }, description: "Initialize frequency array to all zeros." },
      { line: 2, variables: { countsState: "l=1, e=3, t=1, c=1, o=1, d=1" }, description: "First pass: scan and increment counts." },
      { line: 3, variables: { i: 0, char: '"l"', count: 1 }, description: "Second pass. check s[0] ('l'). count of 'l' is 1. Return index 0." }
    ],
    interviewDiscussion: [
      {
        question: "What if the string contains both uppercase and lowercase letters?",
        answer: "If uppercase characters are included, a 26-size array based on `charCodeAt(i) - 97` will throw out-of-bounds errors. We must increase the array size to 128 (ASCII bounds) or use a dynamic Hash Map."
      }
    ],
  },
  {
    id: 58,
    title: "LRU Cache",
    slug: "lru-cache",
    difficulty: "Medium",
    pillarSlug: "hash-tables",
    statement: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class.",
    starterCode: `class LRUCache {
  constructor(capacity) {
    // Write your constructor here
  }
  get(key) { return -1; }
  put(key, value) {}
}`,
    bruteForce: {
      code: `class LRUCacheBrute {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = []; // Stores { key, val, time }
    this.time = 0;
  }
  get(key) {
    const entry = this.cache.find(e => e.key === key);
    if (!entry) return -1;
    entry.time = ++this.time;
    return entry.val;
  }
  put(key, value) {
    const entry = this.cache.find(e => e.key === key);
    if (entry) {
      entry.val = value;
      entry.time = ++this.time;
    } else {
      if (this.cache.length === this.capacity) {
        this.cache.sort((a,b) => a.time - b.time);
        this.cache.shift(); // Evict oldest
      }
      this.cache.push({ key, val: value, time: ++this.time });
    }
  }
}`,
      language: "javascript",
      explanation: "Use an array to store keys. `get` and `put` scan the list sequentially to find key matches, and sorting is required for eviction. Runs in O(N log N) or O(N) time.",
    },
    better: {
      code: `class LRUCacheMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // Map in JS maintains insertion order
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val); // Refresh order
    return val;
  }
  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size === this.capacity) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey); // Evict LRU
    }
    this.map.set(key, value);
  }
}`,
      language: "javascript",
      explanation: "Leverage JS Map insertion ordering. Deleting and re-inserting elements refreshes their usage status. Runs in O(1) time but relies on language-specific implementation details.",
    },
    optimal: {
      code: `class DoubleNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCacheOptimal {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> Node
    this.head = new DoubleNode(0, 0); // Dummy head
    this.tail = new DoubleNode(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
  }
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      if (this.map.size === this.capacity) {
        const lru = this.tail.prev;
        this.removeNode(lru);
        this.map.delete(lru.key);
      }
      const newNode = new DoubleNode(key, value);
      this.addNode(newNode);
      this.map.set(key, newNode);
    }
  }
  addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }
}`,
      language: "javascript",
      explanation: "HashMap + Doubly Linked List: Map offers O(1) node access. Doubly Linked List maintains usage order. Add newly accessed nodes to the head, and evict from the tail. All transitions (insert, delete, update) execute in O(1) time.",
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(capacity)",
    dryRun: [
      { line: 1, variables: { capacity: 2, map: "Map{}", head: "Node(0)", tail: "Node(0)" }, description: "Initialize cache." },
      { line: 2, variables: { put: "1->10", listState: "head <-> Node(1,10) <-> tail", size: 1 }, description: "Add Node(1, 10). Link at head." },
      { line: 3, variables: { put: "2->20", listState: "head <-> Node(2,20) <-> Node(1,10) <-> tail", size: 2 }, description: "Add Node(2, 20). Link at head." },
      { line: 4, variables: { put: "3->30", evictKey: 1, listState: "head <-> Node(3,30) <-> Node(2,20) <-> tail" }, description: "Capacity exceeded. Evict tail.prev Node(1, 10). Insert Node(3, 30) at head." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a doubly linked list used instead of a singly linked list?",
        answer: "When removing a node from a singly linked list, we must traverse the list to find its parent node, taking O(N) time. A doubly linked list contains prev pointers, allowing node removal in O(1) time."
      }
    ],
  },
  {
    id: 59,
    title: "Insert Delete GetRandom O(1)",
    slug: "insert-delete-getrandom-o1",
    difficulty: "Medium",
    pillarSlug: "hash-tables",
    statement: "Implement the RandomizedSet class which supports insert, delete, and getRandom in O(1) time.",
    starterCode: `class RandomizedSet {
  constructor() {
    // Write your constructor here
  }
  insert(val) { return false; }
  remove(val) { return false; }
  getRandom() { return 0; }
}`,
    bruteForce: {
      code: `class RandomizedSetBrute {
  constructor() {
    this.list = [];
  }
  insert(val) {
    if (this.list.includes(val)) return false;
    this.list.push(val);
    return true;
  }
  remove(val) {
    const idx = this.list.indexOf(val);
    if (idx === -1) return false;
    this.list.splice(idx, 1); // Splice shifts elements in O(N)
    return true;
  }
  getRandom() {
    const idx = Math.floor(Math.random() * this.list.length);
    return this.list[idx];
  }
}`,
      language: "javascript",
      explanation: "Using a single array. Checking duplication and deleting require scanning/shifting elements in O(N) time.",
    },
    better: {
      code: `class RandomizedSetMap {
  constructor() {
    this.set = new Set();
  }
  insert(val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    return true;
  }
  remove(val) {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
  }
  getRandom() {
    const arr = Array.from(this.set); // Array.from takes O(N) time
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
}`,
      language: "javascript",
      explanation: "Using a Set makes insert and remove O(1). However, selecting a random element requires converting the Set to an array, which takes O(N) time.",
    },
    optimal: {
      code: `class RandomizedSetOptimal {
  constructor() {
    this.list = [];
    this.map = new Map(); // val -> index in list
  }
  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }
  remove(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    const lastElement = this.list[this.list.length - 1];
    
    // Swap target element with last element
    this.list[index] = lastElement;
    this.map.set(lastElement, index);
    
    // Pop last element
    this.list.pop();
    this.map.delete(val);
    return true;
  }
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}`,
      language: "javascript",
      explanation: "Array + Map: Array stores elements to allow O(1) random index access. Map stores value indices to allow O(1) lookups. To delete in O(1) without shifting, swap the target element with the last element in the array, update the map, and pop the last element. All operations run in O(1) time.",
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { list: "[]", map: "Map{}" }, description: "Initialize RandomizedSet." },
      { line: 2, variables: { insertVal: 10, list: "[10]", map: "Map{10->0}" }, description: "Insert 10 at index 0." },
      { line: 3, variables: { insertVal: 20, list: "[10, 20]", map: "Map{10->0, 20->1}" }, description: "Insert 20 at index 1." },
      { line: 4, variables: { removeVal: 10, list: "[20]", map: "Map{20->0}" }, description: "Remove 10. Swap with last element (20). Move 20 to index 0, pop 10." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the swap-and-pop technique necessary to delete an element in O(1) time?",
        answer: "Deleting an element from the middle of an array requires shifting all subsequent elements to close the gap, taking O(N) time. Swapping with the last element and popping from the end avoids shifting, keeping it O(1)."
      }
    ],
  },
  {
    id: 60,
    title: "Ransom Note",
    slug: "ransom-note",
    difficulty: "Easy",
    pillarSlug: "hash-tables",
    statement: "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.",
    starterCode: `function canConstruct(ransomNote, magazine) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function canConstructBrute(ransomNote, magazine) {
  let mag = magazine;
  for (let char of ransomNote) {
    const idx = mag.indexOf(char);
    if (idx === -1) return false;
    mag = mag.slice(0, idx) + mag.slice(idx + 1); // Slice is expensive
  }
  return true;
}`,
      language: "javascript",
      explanation: "For each character in ransomNote, search and slice it out of the magazine string. Runs in O(R * M) time.",
    },
    better: {
      code: `function canConstructMap(ransomNote, magazine) {
  const map = {};
  for (let char of magazine) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of ransomNote) {
    if (!map[char] || map[char] <= 0) return false;
    map[char]--;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Count character frequencies in the magazine using a hash map. Iterate through the ransomNote and decrement counts. Runs in linear O(R + M) time.",
    },
    optimal: {
      code: `function canConstructOptimal(ransomNote, magazine) {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    counts[magazine.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - 97;
    counts[index]--;
    if (counts[index] < 0) {
      return false;
    }
  }
  return true;
}`,
      language: "javascript",
      explanation: "Use a fixed-size frequency array of size 26 (assuming lowercase English letters) to count magazine characters, decrementing for ransomNote. Runs in linear time and uses constant O(1) space.",
    },
    timeComplexity: "O(r + m)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { ransomNote: '"aa"', magazine: '"aab"', counts: "Array(26)" }, description: "Initialize frequency array counts to all zeros." },
      { line: 2, variables: { countsState: "a=2, b=1" }, description: "Scan magazine 'aab' to populate counts." },
      { line: 3, variables: { char: '"a"', countsVal: 1 }, description: "Decrement count of 'a'. counts['a'] becomes 1 (>= 0)." },
      { line: 4, variables: { char: '"a"', countsVal: 0 }, description: "Decrement count of 'a'. counts['a'] becomes 0 (>= 0). Return true." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the space complexity O(1) instead of O(M)?",
        answer: "The frequency array size is fixed at 26 elements, which does not scale with the size of the inputs, resulting in O(1) constant auxiliary space."
      }
    ],
  }
];
