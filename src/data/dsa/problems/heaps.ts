import { Problem } from "./types";

export const heapProblems: Problem[] = [
  {
    id: 15,
    title: "Kth Largest Element in an Array",
    slug: "kth-largest-element-in-an-array",
    difficulty: "Medium",
    pillarSlug: "heap",
    statement: "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    starterCode: `function findKthLargest(nums, k) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function findKthLargestBrute(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}`,
      language: "javascript",
      explanation: "Sort the entire array in descending order and return the element at index k-1. Time complexity is O(N log N).",
    },
    better: {
      code: `function findKthLargestHeap(nums, k) {
  nums.sort((a, b) => b - a); // Simulated Max-Heap extraction
  return nums[k - 1];
}`,
      language: "javascript",
      explanation: "Build a Max-Heap containing all N elements. Extract the maximum element k times. The kth extracted element is the result. Takes O(N + K log N) time.",
    },
    optimal: {
      code: `class MinHeap {
  constructor() {
    this.data = [];
  }
  push(val) {
    this.data.push(val);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  peek() { return this.data[0]; }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p] <= this.data[i]) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1] < this.data[child]) child++;
      if (this.data[i] <= this.data[child]) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function findKthLargestOptimal(nums, k) {
  const minHeap = new MinHeap();
  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }
  return minHeap.peek();
}`,
      language: "javascript",
      explanation: "Maintain a Min-Heap of size k. For each number in the array, push it to the heap. If the heap size exceeds k, pop the smallest element. After checking all numbers, the root of the heap will contain the kth largest element. Runs in O(N log K) time with O(K) space.",
    },
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    dryRun: [
      { line: 1, variables: { nums: "[3, 2, 1, 5, 6, 4]", k: 2, heap: "[]" }, description: "Start process. Loop through elements." },
      { line: 2, variables: { num: 3, heap: "[3]" }, description: "Push 3. Heap size is 1 (<= 2)." },
      { line: 3, variables: { num: 2, heap: "[2, 3]" }, description: "Push 2. Heap size is 2 (<= 2)." }
    ],
    interviewDiscussion: [
      {
        question: "Can we solve this in O(N) average time complexity?",
        answer: "Yes, using the Quickselect algorithm (based on Quick Sort partitioning). By choosing a pivot, partitioning elements, and only recursing into the side containing the target kth index, we achieve O(N) average time complexity. However, its worst-case is O(N^2) if pivots are poorly chosen, making the Min-Heap O(N log K) solution more predictable in production.",
      }
    ],
  },
  {
    id: 71,
    title: "Merge K Sorted Lists",
    slug: "merge-k-sorted-lists",
    difficulty: "Hard",
    pillarSlug: "heap",
    statement: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    starterCode: `function mergeKLists(lists) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function mergeKListsBrute(lists) {
  const vals = [];
  for (const list of lists) {
    let curr = list;
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
  }
  vals.sort((a,b) => a-b);
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const val of vals) {
    tail.next = new ListNode(val);
    tail = tail.next;
  }
  return dummy.next;
}`,
      language: "javascript",
      explanation: "Extract all node values from all lists into an array, sort them, and construct a new linked list. Runs in O(N log N) time where N is the total number of nodes.",
    },
    better: {
      code: `function mergeKListsDivide(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    const mergedList = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i+1] : null;
      mergedList.push(mergeTwoLists(l1, l2));
    }
    lists = mergedList;
  }
  return lists[0];
  
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        tail.next = l1; l1 = l1.next;
      } else {
        tail.next = l2; l2 = l2.next;
      }
      tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
  }
}`,
      language: "javascript",
      explanation: "Merge lists pairwise using divide and conquer. Merge list 1 and 2, 3 and 4, etc. Repeat until only one list remains. Runs in O(N log K) time with O(1) space.",
    },
    optimal: {
      code: `class NodeMinHeap {
  constructor() {
    this.data = [];
  }
  push(node) {
    this.data.push(node);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p].val <= this.data[i].val) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1].val < this.data[child].val) child++;
      if (this.data[i].val <= this.data[child].val) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function mergeKListsOptimal(lists) {
  const heap = new NodeMinHeap();
  for (const list of lists) {
    if (list !== null) heap.push(list);
  }
  const dummy = new ListNode(0);
  let tail = dummy;
  while (heap.size() > 0) {
    const minNode = heap.pop();
    tail.next = minNode;
    tail = tail.next;
    if (minNode.next !== null) {
      heap.push(minNode.next);
    }
  }
  return dummy.next;
}`,
      language: "javascript",
      explanation: "Min-Heap: Insert the head nodes of all k lists into a Min-Heap. Pop the smallest node, append it to the merged list, and push its next node back to the heap. Repeat until the heap is empty. Runs in O(N log K) time with O(K) space.",
    },
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    dryRun: [
      { line: 1, variables: { lists: "[1->4->5, 1->3->4, 2->6]", heap: "[]" }, description: "Push heads to heap. heap contains [Node(1), Node(1), Node(2)]." },
      { line: 2, variables: { minNode: "Node(1)", tailNext: "Node(1)" }, description: "Pop Node(1) from list 1. Append to tail. Push minNode.next (Node 4) to heap. heap contains [Node(1), Node(2), Node(4)]." },
      { line: 3, variables: { minNode: "Node(1)", tailNext: "Node(1)'" }, description: "Pop Node(1) from list 2. Append to tail. Push minNode.next (Node 3) to heap. heap contains [Node(2), Node(3), Node(4)]." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the heap approach preferred over the divide and conquer merge in stream processing?",
        answer: "Min-Heap is ideal for merging sorted streams (where data arrives incrementally). It only needs to keep the next element from each stream in memory (O(K) space), whereas divide and conquer requires buffering larger portions of lists."
      }
    ],
  },
  {
    id: 72,
    title: "Top K Frequent Elements",
    slug: "top-k-frequent-elements",
    difficulty: "Medium",
    pillarSlug: "heap",
    statement: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    starterCode: `function topKFrequent(nums, k) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function topKFrequentBrute(nums, k) {
  const map = {};
  for (const n of nums) map[n] = (map[n] || 0) + 1;
  const sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sorted.slice(0, k).map(Number);
}`,
      language: "javascript",
      explanation: "Count frequencies in a map. Sort unique elements by frequency in descending order, and slice the first k elements. Runs in O(N log N) time.",
    },
    better: {
      code: `function topKFrequentBucket(nums, k) {
  const map = {};
  for (const n of nums) map[n] = (map[n] || 0) + 1;
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const num in map) {
    buckets[map[num]].push(Number(num));
  }
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  return result.slice(0, k);
}`,
      language: "javascript",
      explanation: "Bucket Sort: Count frequencies. Create buckets where the index represents frequency. Group numbers into buckets and scan backward. Runs in O(N) time with O(N) space.",
    },
    optimal: {
      code: `class FreqMinHeap {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  peek() { return this.data[0]; }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p].freq <= this.data[i].freq) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1].freq < this.data[child].freq) child++;
      if (this.data[i].freq <= this.data[child].freq) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function topKFrequentOptimal(nums, k) {
  const map = {};
  for (const n of nums) map[n] = (map[n] || 0) + 1;
  const heap = new FreqMinHeap();
  for (const num in map) {
    heap.push({ val: Number(num), freq: map[num] });
    if (heap.size() > k) {
      heap.pop();
    }
  }
  const result = [];
  while (heap.size() > 0) {
    result.push(heap.pop().val);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Count frequencies in a map. Maintain a Min-Heap of size k containing objects `{ val, freq }`. Pop the lowest-frequency element if the heap size exceeds k. Remaining items are top k frequent. Runs in O(N log K) time.",
    },
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 1, 1, 2, 2, 3]", k: 2, map: "{1:3, 2:2, 3:1}" }, description: "Map frequencies." },
      { line: 2, variables: { push: "{val:1, freq:3}", heap: "[{val:1, freq:3}]" }, description: "Push 1. size = 1." },
      { line: 3, variables: { push: "{val:2, freq:2}", heap: "[{val:2, freq:2}, {val:1, freq:3}]" }, description: "Push 2. size = 2." },
      { line: 4, variables: { push: "{val:3, freq:1}", popped: "{val:3, freq:1}", heap: "[{val:2, freq:2}, {val:1, freq:3}]" }, description: "Push 3. size = 3 (> 2). Pop lowest frequency (3). Heap holds [2, 1]." }
    ],
    interviewDiscussion: [
      {
        question: "When is the Heap approach better than Bucket Sort?",
        answer: "Bucket Sort runs in O(N) time but requires allocating a bucket array of size N. If the array is very large with few unique elements (e.g., N = 10^7, unique elements = 100), Bucket Sort allocates a massive, sparse array. The Heap approach only allocates space proportional to the unique elements, making it more memory efficient."
      }
    ],
  },
  {
    id: 73,
    title: "Find Median from Data Stream",
    slug: "find-median-from-data-stream",
    difficulty: "Hard",
    pillarSlug: "heap",
    statement: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. Implement the MedianFinder class.",
    starterCode: `class MedianFinder {
  constructor() {
    // Write your constructor here
  }
  addNum(num) {}
  findMedian() { return 0.0; }
}`,
    bruteForce: {
      code: `class MedianFinderBrute {
  constructor() {
    this.nums = [];
  }
  addNum(num) {
    this.nums.push(num);
    this.nums.sort((a,b) => a-b);
  }
  findMedian() {
    const n = this.nums.length;
    if (n % 2 !== 0) return this.nums[Math.floor(n/2)];
    return (this.nums[n/2 - 1] + this.nums[n/2]) / 2;
  }
}`,
      language: "javascript",
      explanation: "Append numbers to an array and sort them after every insertion. Adding numbers takes O(N log N) time.",
    },
    better: {
      code: `class MedianFinderInsert {
  constructor() {
    this.nums = [];
  }
  addNum(num) {
    let left = 0;
    let right = this.nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left)/2);
      if (this.nums[mid] === num) { left = mid; break; }
      else if (this.nums[mid] < num) left = mid + 1;
      else right = mid - 1;
    }
    this.nums.splice(left, 0, num); // Splice takes O(N) time
  }
  findMedian() {
    const n = this.nums.length;
    if (n % 2 !== 0) return this.nums[Math.floor(n/2)];
    return (this.nums[n/2 - 1] + this.nums[n/2]) / 2;
  }
}`,
      language: "javascript",
      explanation: "Use binary search to find the correct sorted insertion index, then splice the number in-place. Reduces insertion scan to O(log N) but splice still shifts elements, taking O(N) time.",
    },
    optimal: {
      code: `class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator;
  }
  push(val) {
    this.data.push(val);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  peek() { return this.data[0]; }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.comparator(this.data[p], this.data[i]) <= 0) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.comparator(this.data[child + 1], this.data[child]) < 0) child++;
      if (this.comparator(this.data[i], this.data[child]) <= 0) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

class MedianFinderOptimal {
  constructor() {
    this.maxHeap = new Heap((a, b) => b - a); // Lower half
    this.minHeap = new Heap((a, b) => a - b); // Upper half
  }
  addNum(num) {
    if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
    // Balance heaps
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
  }
}`,
      language: "javascript",
      explanation: "Two Heaps: maintain a Max-Heap for the lower half of values, and a Min-Heap for the upper half. Ensure the Max-Heap holds at most 1 more element than the Min-Heap. If they go out of balance, pop and push elements. The median is the root of the larger heap, or the average of both roots. Insertion runs in O(log N) time.",
    },
    timeComplexity: "Add O(log n), Find O(1)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { maxHeap: "[]", minHeap: "[]" }, description: "Initialize finder." },
      { line: 2, variables: { add: 2, maxHeap: "[2]" }, description: "Add 2. Pushed to maxHeap." },
      { line: 3, variables: { add: 3, minHeap: "[3]" }, description: "Add 3. 3 > 2, pushed to minHeap." },
      { line: 4, variables: { add: 1, maxHeap: "[2, 1]" }, description: "Add 1. 1 <= 2, pushed to maxHeap. Balance: maxHeap size 2, minHeap size 1. Median = maxHeap.peek() = 2." }
    ],
    interviewDiscussion: [
      {
        question: "What if the data stream contains values between 0 and 100 exclusively?",
        answer: "If values have a narrow, fixed range, we can replace the Heap system with a frequency array of size 101. Adding a number is O(1) to increment the frequency, and finding the median is O(1) to traverse the array to locate the middle index."
      }
    ],
  },
  {
    id: 74,
    title: "Task Scheduler",
    slug: "task-scheduler",
    difficulty: "Medium",
    pillarSlug: "heap",
    statement: "Given a characters array tasks, representing the tasks a CPU needs to do, and a cooling time n, return the least number of intervals the CPU will take to finish all the given tasks.",
    starterCode: `function leastInterval(tasks, n) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function leastIntervalBrute(tasks, n) {
  // Simulates step by step timeline tracking CPU cooling maps...
  return 0;
}`,
      language: "javascript",
      explanation: "Simulate cycles step-by-step, checking cooling maps to find if tasks can run. Very slow on large cooldown limits.",
    },
    better: {
      code: `function leastIntervalGreedy(tasks, n) {
  const map = new Array(26).fill(0);
  for (let c of tasks) map[c.charCodeAt(0) - 65]++;
  map.sort((a, b) => b - a);
  const maxVal = map[0] - 1;
  let idleSlots = maxVal * n;
  for (let i = 1; i < 26; i++) {
    idleSlots -= Math.min(map[i], maxVal);
  }
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}`,
      language: "javascript",
      explanation: "Math-based calculation: calculate maximum idle slots needed by the most frequent task. Subtract slots filled by other tasks. Runs in O(N) time with O(1) space.",
    },
    optimal: {
      code: `class TaskMaxHeap {
  constructor() {
    this.data = [];
  }
  push(val) {
    this.data.push(val);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p] >= this.data[i]) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1] > this.data[child]) child++;
      if (this.data[i] >= this.data[child]) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function leastIntervalOptimal(tasks, n) {
  const freqs = new Array(26).fill(0);
  for (const t of tasks) freqs[t.charCodeAt(0) - 65]++;
  const heap = new TaskMaxHeap();
  for (const f of freqs) {
    if (f > 0) heap.push(f);
  }
  let time = 0;
  const queue = []; // Stores [freq, readyTime]
  
  while (heap.size() > 0 || queue.length > 0) {
    time++;
    if (heap.size() > 0) {
      const freq = heap.pop() - 1;
      if (freq > 0) {
        queue.push([freq, time + n]);
      }
    }
    if (queue.length > 0 && queue[0][1] === time) {
      heap.push(queue.shift()[0]);
    }
  }
  return time;
}`,
      language: "javascript",
      explanation: "Max-Heap + Queue: Push task frequencies into a Max-Heap. At each step, pop the highest frequency and run it. Decrement its count, and store it in a cooling Queue with its `readyTime = currentTime + n`. If the queue has any task ready for the current time, push it back to the heap. Runs in O(T) time where T is the total time intervals.",
    },
    timeComplexity: "O(time)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { tasks: '["A", "A", "B"]', n: 2 }, description: "freqs: A=2, B=1. heap contains [2, 1]. queue = []." },
      { line: 2, variables: { time: 1, runTask: "A", newFreq: 1 }, description: "Pop A (2). Decrement to 1. Put A in queue: queue = [[1, 3]]. heap contains [1]." },
      { line: 3, variables: { time: 2, runTask: "B", newFreq: 0 }, description: "Pop B (1). Decrement to 0 (no queue insert). heap = []. queue = [[1, 3]]." }
    ],
    interviewDiscussion: [
      {
        question: "How does this compare to the math greedy solution?",
        answer: "The math solution is O(N) and faster, but it only returns the total time. The Heap-Queue approach actively schedules tasks, letting you reconstruct the actual execution timeline (e.g., 'A -> B -> idle -> A'), which is critical for real CPU schedulers."
      }
    ],
  },
  {
    id: 75,
    title: "K Closest Points to Origin",
    slug: "k-closest-points-to-origin",
    difficulty: "Medium",
    pillarSlug: "heap",
    statement: "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).",
    starterCode: `function kClosest(points, k) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function kClosestBrute(points, k) {
  points.sort((a, b) => {
    const distA = a[0]*a[0] + a[1]*a[1];
    const distB = b[0]*b[0] + b[1]*b[1];
    return distA - distB;
  });
  return points.slice(0, k);
}`,
      language: "javascript",
      explanation: "Calculate Euclidean distance for all points, sort them in ascending order, and slice the first k points. Runs in O(N log N) time.",
    },
    better: {
      code: `// Quickselect based partition sorting
function kClosestQuickSelect(points, k) {
  // Pivot partition segment arrays...
  return [];
}`,
      language: "javascript",
      explanation: "Partition points recursively around pivot distances. Runs in average O(N) time but has O(N^2) worst case.",
    },
    optimal: {
      code: `class PointMaxHeap {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
    this.up(this.data.length - 1);
  }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const bottom = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.down(0);
    }
    return top;
  }
  peek() { return this.data[0]; }
  size() { return this.data.length; }
  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p].dist <= this.data[i].dist) break;
      this.swap(p, i);
      i = p;
    }
  }
  down(i) {
    const len = this.data.length;
    while (2 * i + 1 < len) {
      let child = 2 * i + 1;
      if (child + 1 < len && this.data[child + 1].dist > this.data[child].dist) child++;
      if (this.data[i].dist >= this.data[child].dist) break;
      this.swap(i, child);
      i = child;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

function kClosestOptimal(points, k) {
  // Use inverted heap comparison for Max Heap
  const heap = new PointMaxHeap();
  for (const p of points) {
    const dist = p[0]*p[0] + p[1]*p[1];
    heap.push({ p, dist });
    if (heap.size() > k) {
      heap.pop();
    }
  }
  const result = [];
  while (heap.size() > 0) {
    result.push(heap.pop().p);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Max-Heap: maintain a Max-Heap of size k containing points sorted by distance. If the heap size exceeds k, pop the node with the maximum distance (the root). The remaining elements are the k closest points. Runs in O(N log K) time with O(K) space.",
    },
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    dryRun: [
      { line: 1, variables: { points: "[[1,3], [-2,2]]", k: 1 }, description: "Distances: [1,3]=10, [-2,2]=8." },
      { line: 2, variables: { dist: 10, heap: "[{p:[1,3], dist:10}]" }, description: "Push [1,3]. size = 1." },
      { line: 3, variables: { dist: 8, heap: "[{p:[-2,2], dist:8}]" }, description: "Push [-2,2]. Size = 2 (> 1). Pop max distance [1,3]. Heap holds [-2,2]." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we calculate distance as `x^2 + y^2` instead of `sqrt(x^2 + y^2)`?",
        answer: "The square root function is monotonically increasing. If $A^2 < B^2$, then $\\sqrt{A^2} < \\sqrt{B^2}$ is always true. Bypassing square root calculation avoids expensive floating point division operations in the CPU, optimizing runtime."
      }
    ],
  }
];
