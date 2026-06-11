import { Problem } from "./types";

export const queueProblems: Problem[] = [
  {
    id: 14,
    title: "Queue using Stacks",
    slug: "queue-using-stacks",
    difficulty: "Easy",
    pillarSlug: "queue",
    statement: "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    starterCode: `class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(x) {}
  pop() {}
  peek() {}
  empty() {}
}`,
    bruteForce: {
      code: `class MyQueueBrute {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(x) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(x);
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
  }
  pop() { return this.s1.pop(); }
  peek() { return this.s1[this.s1.length - 1]; }
  empty() { return this.s1.length === 0; }
}`,
      language: "javascript",
      explanation: "Reverse stacks on every push operation. Pop and peek are O(1), but push is O(N) because every element must be moved back and forth.",
    },
    better: {
      code: `class MyQueueBetter {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(x) { this.s1.push(x); }
  pop() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
  peek() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1];
  }
  empty() { return this.s1.length === 0 && this.s2.length === 0; }
}`,
      language: "javascript",
      explanation: "Push is O(1) to s1. Pop and peek lazily move items from s1 to s2 only when s2 is empty. The worst case of pop is O(N), but the average (amortized) cost is O(1) per operation.",
    },
    optimal: {
      code: `class MyQueueOptimal {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  push(x) { this.inStack.push(x); }
  pop() {
    this.shiftStacks();
    return this.outStack.pop();
  }
  peek() {
    this.shiftStacks();
    return this.outStack[this.outStack.length - 1];
  }
  shiftStacks() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
  }
  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}`,
      language: "javascript",
      explanation: "Amortized O(1) operations. Elements flow from inStack to outStack only when necessary, preserving FIFO order with minimal moves.",
    },
    timeComplexity: "Amortized O(1)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { inStack: "[]", outStack: "[]" }, description: "Initialize stacks." },
      { line: 2, variables: { inStack: "[1, 2]" }, description: "Push 1, then push 2. Both land in inStack." },
      { line: 3, variables: { inStack: "[]", outStack: "[2, 1]" }, description: "Call pop(). outStack is empty, so pop elements from inStack to outStack. outStack now contains [2, 1] (top is 1)." }
    ],
    interviewDiscussion: [
      {
        question: "What is the amortized time complexity of the pop operation?",
        answer: "The amortized complexity is O(1). Even though a single pop operation might take O(N) time when moving elements from s1 to s2, each element is pushed once, popped from s1 once, pushed to s2 once, and popped from s2 once. That represents exactly 4 stack operations per element over its lifecycle, keeping the average cost constant.",
      }
    ],
  },
  {
    id: 51,
    title: "Sliding Window Maximum",
    slug: "sliding-window-maximum",
    difficulty: "Hard",
    pillarSlug: "queue",
    statement: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    starterCode: `function maxSlidingWindow(nums, k) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function maxSlidingWindowBrute(nums, k) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i <= n - k; i++) {
    let max = -Infinity;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    result.push(max);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Scan every window of size k, running a nested loop to find the maximum element. Runs in O(N * K) time.",
    },
    better: {
      code: `// Heap/Priority Queue approach
function maxSlidingWindowHeap(nums, k) {
  // Push elements into max heap with index info...
  return [];
}`,
      language: "javascript",
      explanation: "Use a Max-Heap to track the largest element. Remove root elements if their index is outside the window. Runs in O(N log N) time.",
    },
    optimal: {
      code: `function maxSlidingWindowOptimal(nums, k) {
  const deque = []; // Stores indices
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices that are out of bounds
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }
    // 2. Maintain decreasing order in deque
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
    // 3. Add to result if window size is reached
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "Monotonic Queue (Double-ended Queue / Deque): store indices of elements in the current window in a decreasing order. Pop indices from the back if their values are smaller than the current element. Pop from the front if they fall outside the window. The front of the deque is always the maximum. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(k)",
    dryRun: [
      { line: 1, variables: { nums: "[1, 3, -1, -3]", k: 3, deque: "[]" }, description: "i = 0. Push index 0. deque = [0]." },
      { line: 2, variables: { i: 1, val: 3, deque: "[1]" }, description: "3 >= nums[0] (1). Pop index 0. Push index 1. deque = [1]." },
      { line: 3, variables: { i: 2, val: -1, deque: "[1, 2]", result: "[3]" }, description: "-1 < 3. Push index 2. Window is full, add nums[deque[0]] (3) to result. deque = [1, 2]." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a Double-ended Queue (Deque) required for this solution?",
        answer: "A Deque is required because we need to perform insertions and deletions at both ends: popping elements from the back to maintain monotonic decreasing order, and popping from the front to expire indices that fall outside the window boundary."
      }
    ],
  },
  {
    id: 52,
    title: "Implement Stack using Queues",
    slug: "implement-stack-using-queues",
    difficulty: "Easy",
    pillarSlug: "queue",
    statement: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).",
    starterCode: `class MyStack {
  constructor() {
    this.q = [];
  }
  push(x) {}
  pop() { return null; }
  top() { return null; }
  empty() { return true; }
}`,
    bruteForce: {
      code: `class MyStackBrute {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) { this.q1.push(x); }
  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const val = this.q1.shift();
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return val;
  }
  top() {
    const val = this.pop();
    this.push(val);
    return val;
  }
  empty() { return this.q1.length === 0; }
}`,
      language: "javascript",
      explanation: "Pop is O(N). Move all elements except the last to the second queue, pop the last element, and swap queue references.",
    },
    better: {
      code: `class MyStackBetter {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) {
    this.q2.push(x);
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
  }
  pop() { return this.q1.shift(); }
  top() { return this.q1[0]; }
  empty() { return this.q1.length === 0; }
}`,
      language: "javascript",
      explanation: "Push is O(N). Insert elements to q2 first, then shift all elements from q1 to q2 to invert order. q1 always has LIFO order.",
    },
    optimal: {
      code: `class MyStackOptimal {
  constructor() {
    this.q = [];
  }
  push(x) {
    this.q.push(x);
    const size = this.q.length;
    for (let i = 0; i < size - 1; i++) {
      this.q.push(this.q.shift());
    }
  }
  pop() {
    return this.q.shift();
  }
  top() {
    return this.q[0];
  }
  empty() {
    return this.q.length === 0;
  }
}`,
      language: "javascript",
      explanation: "Single Queue Rotation: push new element at the back, then rotate the queue (pop and enqueue the front elements) `size - 1` times. The newly pushed element shifts to the front of the queue, making pop and top O(1) operations.",
    },
    timeComplexity: "Push O(n), Pop O(1)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { q: "[]" }, description: "Initialize queue." },
      { line: 2, variables: { q: "[1, 2]" }, description: "Push 1, then push 2. Deque size is 2." },
      { line: 3, variables: { q: "[2, 1]" }, description: "Rotate queue size-1 times. Shift 1 to the back. q is now [2, 1]. pop() returns 2 (LIFO)." }
    ],
    interviewDiscussion: [
      {
        question: "Can we achieve O(1) for both push and pop operations when implementing a stack with queues?",
        answer: "No. In a pure stack-queue simulation, either push must be O(N) (moving/rotating items to enforce LIFO) or pop must be O(N) (shifting items to access the back). At least one operation will scale linearly."
      }
    ],
  },
  {
    id: 53,
    title: "Design Circular Queue",
    slug: "design-circular-queue",
    difficulty: "Medium",
    pillarSlug: "queue",
    statement: "Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle.",
    starterCode: `class MyCircularQueue {
  constructor(k) {
    // Write your constructor here
  }
  enQueue(value) { return false; }
  deQueue() { return false; }
  Front() { return -1; }
  Rear() { return -1; }
  isEmpty() { return true; }
  isFull() { return true; }
}`,
    bruteForce: {
      code: `class MyCircularQueueBrute {
  constructor(k) {
    this.queue = [];
    this.k = k;
  }
  enQueue(value) {
    if (this.queue.length === this.k) return false;
    this.queue.push(value);
    return true;
  }
  deQueue() {
    if (this.queue.length === 0) return false;
    this.queue.shift(); // Shift forces O(N) array copy
    return true;
  }
  Front() { return this.queue.length === 0 ? -1 : this.queue[0]; }
  Rear() { return this.queue.length === 0 ? -1 : this.queue[this.queue.length - 1]; }
  isEmpty() { return this.queue.length === 0; }
  isFull() { return this.queue.length === this.k; }
}`,
      language: "javascript",
      explanation: "Standard array storage. Dequeue uses `shift()`, which requires shifting all remaining elements left in memory, making it an O(N) operation.",
    },
    better: {
      code: `// Array based pointer tracking
class MyCircularQueuePointers {
  // Head and tail trackers with modular index calculations...
}`,
      language: "javascript",
      explanation: "Use a fixed size array of size K with explicit head and tail pointers. Avoids shift operations but requires index bounds wrapping logic.",
    },
    optimal: {
      code: `class MyCircularQueueOptimal {
  constructor(k) {
    this.data = new Array(k);
    this.head = 0;
    this.size = 0;
    this.capacity = k;
  }
  enQueue(value) {
    if (this.isFull()) return false;
    const tail = (this.head + this.size) % this.capacity;
    this.data[tail] = value;
    this.size++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return true;
  }
  Front() {
    if (this.isEmpty()) return -1;
    return this.data[this.head];
  }
  Rear() {
    if (this.isEmpty()) return -1;
    const tailIndex = (this.head + this.size - 1) % this.capacity;
    return this.data[tailIndex];
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.capacity;
  }
}`,
      language: "javascript",
      explanation: "Circular Buffer: maintain a fixed-size array and track `head` index, current `size`, and max `capacity`. When enqueuing, calculate the tail index: `(head + size) % capacity`. When dequeuing, advance the head pointer: `(head + 1) % capacity`. This guarantees O(1) operations for all queue transactions.",
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(k)",
    dryRun: [
      { line: 1, variables: { k: 3, head: 0, size: 0 }, description: "Create circular queue of size 3." },
      { line: 2, variables: { enQueueVal: 1, tail: 0, size: 1 }, description: "Enqueue 1. tail = (0+0)%3 = 0. size becomes 1." },
      { line: 3, variables: { enQueueVal: 2, tail: 1, size: 2 }, description: "Enqueue 2. tail = (0+1)%3 = 1. size becomes 2." },
      { line: 4, variables: { deQueue: "true", head: 1, size: 1 }, description: "Dequeue. head = (0+1)%3 = 1. size decrements to 1. Front is now index 1 (value 2)." }
    ],
    interviewDiscussion: [
      {
        question: "What is the advantage of a circular queue over a simple array-based queue?",
        answer: "A simple array-based queue without pointer shifts runs out of space quickly because the tail pointer drifts forward, leaving empty wasted slots at the beginning. A circular queue wraps pointers, reuse empty memory slots without O(N) array shifts."
      }
    ],
  },
  {
    id: 54,
    title: "Dota2 Senate",
    slug: "dota2-senate",
    difficulty: "Medium",
    pillarSlug: "queue",
    statement: "In the world of Dota2, there are two senates, the Radiant and the Dire. Each senator can ban another senator's right or declare victory. Given a string representing each senator's party, return the winner.",
    starterCode: `function predictPartyVictory(senate) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function predictBrute(senate) {
  // Array iterations: search for opposite party nodes to ban recursively,
  // shifting strings iteratively.
  // Time complexity: O(N^2)
  return "";
}`,
      language: "javascript",
      explanation: "Repeatedly scan the string, modifying and marking banned senators as inactive, resulting in quadratic nested iterations.",
    },
    better: {
      code: `// Single queue parsing with dynamic counters
function predictQueueCount(senate) {
  // Iterate with counters for radiant bans and dire bans...
  return "";
}`,
      language: "javascript",
      explanation: "Enqueue all senators. Maintain active ban counters for both parties to decide if the dequeued senator is banned.",
    },
    optimal: {
      code: `function predictPartyVictoryOptimal(senate) {
  const radiant = [];
  const dire = [];
  const n = senate.length;
  
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') radiant.push(i);
    else dire.push(i);
  }
  
  while (radiant.length > 0 && dire.length > 0) {
    const rIdx = radiant.shift();
    const dIdx = dire.shift();
    if (rIdx < dIdx) {
      radiant.push(rIdx + n);
    } else {
      dire.push(dIdx + n);
    }
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
}`,
      language: "javascript",
      explanation: "Double Queues: store Radiant and Dire indices in separate queues. In each round, pop the front of both. The senator with the smaller index bans the other, and is enqueued again at `index + N` to vote in the next round. Repeat until one queue is empty. Runs in O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { senate: '"RD"', radiant: "[]", dire: "[]" }, description: "radiant = [0], dire = [1]." },
      { line: 2, variables: { rIdx: 0, dIdx: 1 }, description: "Compare indices 0 and 1. 0 < 1, Radiant bans Dire. Push 0+2 = 2 to radiant queue." },
      { line: 3, variables: { radiant: "[2]", dire: "[]" }, description: "Dire is empty. Loop terminates. Return 'Radiant'." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we add `N` (senate length) to the index when enqueuing the winner?",
        answer: "Adding `N` preserves the relative order of senators for the next round of voting, ensuring they vote after all other active senators in the current round have had their turn."
      }
    ],
  }
];
