import { Problem } from "./types";

export const stackProblems: Problem[] = [
  {
    id: 2,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "Easy",
    pillarSlug: "stack",
    statement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets, and closed in the correct order.",
    starterCode: `function isValid(s) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isValidBrute(s) {
  let length = -1;
  while (s.length !== length) {
    length = s.length;
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return s.length === 0;
}`,
      language: "javascript",
      explanation: "Repeatedly replace adjacent valid bracket pairs with empty strings until no more replacements can be made. This is highly inefficient because string replacement creates new strings in memory on each cycle.",
    },
    better: {
      code: `function isValidArray(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (char === ')' && top !== '(') return false;
      if (char === ']' && top !== '[') return false;
      if (char === '}' && top !== '{') return false;
    }
  }
  return stack.length === 0;
}`,
      language: "javascript",
      explanation: "Iterate through characters. Push open brackets onto an array-backed stack. Pop and verify matches for closing brackets. Return true if stack is empty at the end.",
    },
    optimal: {
      code: `function isValidOptimal(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      const top = stack.length === 0 ? '#' : stack.pop();
      if (top !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
      language: "javascript",
      explanation: "Use a map for O(1) matching boundaries and an optimized stack buffer. This avoids multiple if-else checks, keeping instructions compact and CPU friendly.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { s: '"()[]{}"', stack: "[]", i: 0 }, description: "Initialize variables. Start loop at i = 0." },
      { line: 2, variables: { char: '"("' }, description: "Character is '(' which is an opener. Push to stack." },
      { line: 3, variables: { top: '"("', match: '"("' }, description: "Pop stack. Compare popped '(' with closing mapping '(' (match). Continue." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a stack the ideal data structure for nested boundaries?",
        answer: "A stack operates on Last-In-First-Out (LIFO) rules, meaning that the most recently opened bracket must be the first one resolved. This property perfectly models nested compiler brackets, HTML tag closing, and recursive scopes.",
      }
    ],
  },
  {
    id: 45,
    title: "Daily Temperatures",
    slug: "daily-temperatures",
    difficulty: "Medium",
    pillarSlug: "stack",
    statement: "Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    starterCode: `function dailyTemperatures(temperatures) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function dailyTemperaturesBrute(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
  }
  return result;
}`,
      language: "javascript",
      explanation: "For each day, scan all subsequent days until a warmer temperature is found. Runs in quadratic O(N^2) time.",
    },
    better: {
      code: `// Optimizing loops by starting checks from right
function dailyTemperaturesRightScan(temperatures) {
  // Use DP-like jumps to skip cold days...
  return [];
}`,
      language: "javascript",
      explanation: "Check from right, saving previous warm indexes to jump scanning paths. Average case runs in linear-like time.",
    },
    optimal: {
      code: `function dailyTemperaturesOptimal(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // Stores indices
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return result;
}`,
      language: "javascript",
      explanation: "Monotonic Stack: Maintain indices of a decreasing temperature list on the stack. When a warmer day is encountered, pop the colder indices from the stack and compute the wait distance. Runs in linear O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { temperatures: "[73, 74, 75, 71, 69, 72]", stack: "[]" }, description: "Start loop at i = 0. Push index 0 (73)." },
      { line: 2, variables: { i: 1, topTemp: 73, currentTemp: 74 }, description: "74 > 73. Pop index 0. Set result[0] = 1 - 0 = 1. Push index 1 (74)." },
      { line: 3, variables: { i: 5, currentTemp: 72, stack: "[2, 3, 4]" }, description: "Index 5 (72) is warmer than top index 4 (69) and 3 (71). Pop both, set result[4] = 1, result[3] = 2. Push index 5." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity O(N) even with the nested while loop?",
        answer: "Each index is pushed onto the stack exactly once and popped from the stack at most once. The total number of stack operations is bounded by 2N, making the time complexity strictly linear."
      }
    ],
  },
  {
    id: 46,
    title: "Min Stack",
    slug: "min-stack",
    difficulty: "Medium",
    pillarSlug: "stack",
    statement: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class.",
    starterCode: `class MinStack {
  constructor() {
    // Initialize stack
  }
  push(val) {}
  pop() {}
  top() { return 0; }
  getMin() { return 0; }
}`,
    bruteForce: {
      code: `class MinStackBrute {
  constructor() {
    this.stack = [];
  }
  push(val) { this.stack.push(val); }
  pop() { this.stack.pop(); }
  top() { return this.stack[this.stack.length - 1]; }
  getMin() {
    let min = Infinity;
    for (let x of this.stack) {
      min = Math.min(min, x);
    }
    return min;
  }
}`,
      language: "javascript",
      explanation: "Standard array stack. Push, pop, and top are O(1) but retrieving the minimum requires checking all elements, running in linear O(N) time.",
    },
    better: {
      code: `class MinStackPair {
  constructor() {
    this.stack = []; // Stores { val, min }
  }
  push(val) {
    const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
    this.stack.push({ val, min });
  }
  pop() { this.stack.pop(); }
  top() { return this.stack[this.stack.length - 1].val; }
  getMin() { return this.stack[this.stack.length - 1].min; }
}`,
      language: "javascript",
      explanation: "Store each value alongside the minimum value seen up to that point as a tuple object. Avoids second stack allocation but creates garbage collector object nodes.",
    },
    optimal: {
      code: `class MinStackOptimal {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }
  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`,
      language: "javascript",
      explanation: "Double Stacks: maintain a primary `stack` and an auxiliary `minStack` that only pushes a new minimum value. This optimizes space because the minStack only grows when a new or equal minimum is pushed. All operations run in O(1) time.",
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { stack: "[]", minStack: "[]" }, description: "Initialize stacks." },
      { line: 2, variables: { pushVal: -2, stack: "[-2]", minStack: "[-2]" }, description: "Push -2. Both stacks accept -2." },
      { line: 3, variables: { pushVal: 0, stack: "[-2, 0]", minStack: "[-2]" }, description: "Push 0. 0 > -2, minStack does not change." },
      { line: 4, variables: { pushVal: -3, stack: "[-2, 0, -3]", minStack: "[-2, -3]" }, description: "Push -3. -3 <= -2, push to minStack. getMin() returns -3." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we check `val <= minStack[top]` with `<=` instead of strictly `<`?",
        answer: "If we push duplicate minimum values (e.g. push -2, push -2), we need both instances recorded on the minStack. Otherwise, popping the first -2 would remove the minimum reference, leaving the second -2 without its corresponding minStack value."
      }
    ],
  },
  {
    id: 47,
    title: "Evaluate RPN Expression",
    slug: "evaluate-reverse-polish-notation",
    difficulty: "Medium",
    pillarSlug: "stack",
    statement: "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.",
    starterCode: `function evalRPN(tokens) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function evalRPNBrute(tokens) {
  // Linear parsing, search and slice arrays on operator matches.
  // Fails on large sizes due to index copying mutations.
  return 0;
}`,
      language: "javascript",
      explanation: "Iterate to locate operators, perform math on neighbors, and slice arrays. Incurs O(N^2) array shifting costs.",
    },
    better: {
      code: `function evalRPNRec(tokens) {
  // Recursive solver parsing from right to left...
  return 0;
}`,
      language: "javascript",
      explanation: "Evaluate recursively. Pops from end, recursing for arguments if operators are encountered.",
    },
    optimal: {
      code: `function evalRPNOptimal(tokens) {
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
  };
  
  for (const token of tokens) {
    if (operators[token]) {
      const b = stack.pop();
      const a = stack.pop();
      const op = operators[token];
      stack.push(op(a, b));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}`,
      language: "javascript",
      explanation: "Push operands onto the stack. When an operator is encountered, pop the top two values (the first pop is right operand B, the second is left operand A), apply the operation, and push the result back. Runs in O(N) time and O(N) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { tokens: '["2", "1", "+", "3", "*"]', stack: "[]" }, description: "Push 2, then push 1." },
      { line: 2, variables: { token: '"+"', b: 1, a: 2, stack: "[3]" }, description: "Plus operator. Pop 1 and 2. Evaluate 2 + 1 = 3. Push 3." },
      { line: 3, variables: { token: '"3"', stack: "[3, 3]" }, description: "Push 3." },
      { line: 4, variables: { token: '"*"', b: 3, a: 3, stack: "[9]" }, description: "Multiply operator. Pop 3 and 3. Evaluate 3 * 3 = 9. Push 9. Final result = 9." }
    ],
    interviewDiscussion: [
      {
        question: "Why does division use `Math.trunc` instead of `Math.floor`?",
        answer: "JavaScript division yields floating point numbers. The problem asks for division to truncate toward zero. `Math.floor(-0.5)` yields `-1`, whereas `Math.trunc(-0.5)` yields `0`, which matches truncation expectations."
      }
    ],
  },
  {
    id: 48,
    title: "Generate Parentheses",
    slug: "generate-parentheses",
    difficulty: "Medium",
    pillarSlug: "stack",
    statement: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    starterCode: `function generateParenthesis(n) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function generateParenthesisBrute(n) {
  const result = [];
  function generate(current) {
    if (current.length === 2 * n) {
      if (isValid(current)) result.push(current);
      return;
    }
    generate(current + "(");
    generate(current + ")");
  }
  generate("");
  return result;
  
  function isValid(str) {
    let balance = 0;
    for (let c of str) {
      if (c === '(') balance++;
      else balance--;
      if (balance < 0) return false;
    }
    return balance === 0;
  }
}`,
      language: "javascript",
      explanation: "Generate all possible strings of length 2N, then check if each string is valid. Time complexity is O(2^(2N) * N).",
    },
    better: {
      code: `// Stack-based state generation
function generateParenthesisDFS(n) {
  // Classic depth first search tracking open/closed counts...
  return [];
}`,
      language: "javascript",
      explanation: "Iterative DFS tree search pushing state variables (string, open, close) onto an explicit stack.",
    },
    optimal: {
      code: `function generateParenthesisOptimal(n) {
  const result = [];
  function backtrack(str, open, close) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (open < n) {
      backtrack(str + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(str + ")", open, close + 1);
    }
  }
  backtrack("", 0, 0);
  return result;
}`,
      language: "javascript",
      explanation: "Recursive backtracking with boundary checks. Only add `(` if we have unused open brackets (`open < n`). Only add `)` if it matches an open bracket (`close < open`). This guarantees all generated paths are valid without explicit validation checks. Runs in O(4^N / (N * sqrt(N))) time.",
    },
    timeComplexity: "O(4^n / (n * sqrt(n)))",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { n: 2, result: "[]" }, description: "Call backtrack('', 0, 0)." },
      { line: 2, variables: { str: '"("', open: 1, close: 0 }, description: "open < 2. Recurse backtrack('(', 1, 0)." },
      { line: 3, variables: { str: '"(("', open: 2, close: 0 }, description: "open < 2. Recurse backtrack('((', 2, 0)." },
      { line: 4, variables: { str: '"(())"', open: 2, close: 2 }, description: "close < open (0 < 2). Append ')'. Backtrack up, check alternative branches." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity bounded by Catalan numbers?",
        answer: "The number of valid parenthesis combinations of length 2N is equal to the Nth Catalan number, $C_n = \\frac{1}{n+1}\\binom{2n}{n}$, which asymptotically grows as $\\frac{4^n}{n\\sqrt{\\pi n}}$. Since we only generate valid combinations, this bounds the runtime."
      }
    ],
  },
  {
    id: 49,
    title: "Largest Rectangle in Histogram",
    slug: "largest-rectangle-in-histogram",
    difficulty: "Hard",
    pillarSlug: "stack",
    statement: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram.",
    starterCode: `function largestRectangleArea(heights) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function largestRectangleBrute(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let minHeight = Infinity;
      for (let k = i; k <= j; k++) {
        minHeight = Math.min(minHeight, heights[k]);
      }
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}`,
      language: "javascript",
      explanation: "Test every possible pair of boundaries, scanning to find the minimum height between them to compute area. Runs in O(N^3) time.",
    },
    better: {
      code: `function largestRectangleBetter(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity;
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}`,
      language: "javascript",
      explanation: "Optimize brute force by tracking the minimum height progressively as we slide the right boundary. Runs in quadratic O(N^2) time.",
    },
    optimal: {
      code: `function largestRectangleAreaOptimal(heights) {
  const stack = []; // Stores indices
  let maxArea = 0;
  const n = heights.length;
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i];
    while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}`,
      language: "javascript",
      explanation: "Monotonic Stack: maintain an increasing height index list. When a shorter bar is seen, pop the higher indices and calculate areas using the popped height and the distance to the new stack top index as width. Runs in linear O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { heights: "[2, 1, 5, 6, 2, 3]", stack: "[]" }, description: "Start loop. i = 0. Push index 0 (height 2)." },
      { line: 2, variables: { i: 1, currentHeight: 1, poppedIndex: 0 }, description: "Height 1 < 2. Pop index 0. Height = 2, width = 1. area = 2. Update maxArea = 2. Push index 1." },
      { line: 3, variables: { i: 4, currentHeight: 2, stack: "[1, 2, 3]" }, description: "At i = 4 (height 2). 2 < top index 3 (height 6). Pop index 3. Height = 6, width = 4 - 2 - 1 = 1. area = 6. Update maxArea = 10 (from [5, 6] region)." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we add a virtual height of 0 at index `i === n`?",
        answer: "Adding a height of 0 at the end guarantees that the stack will be completely flushed, calculating the areas of all remaining bars in the stack before exiting."
      }
    ],
  },
  {
    id: 50,
    title: "Simplify Path",
    slug: "simplify-path",
    difficulty: "Medium",
    pillarSlug: "stack",
    statement: "Given an absolute path for a Unix-style file system, simplify it to the canonical path.",
    starterCode: `function simplifyPath(path) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function simplifyPathBrute(path) {
  // Replace '//' with '/' and resolve manually using regex steps...
  return "";
}`,
      language: "javascript",
      explanation: "Repeatedly check strings and slice path segments using string replacement cycles.",
    },
    better: {
      code: `// Array parsing with intermediate indexes
function simplifyPathArray(path) {
  // Parse manually using split and tracking output indices...
  return "";
}`,
      language: "javascript",
      explanation: "Split path components and assemble directory names in a list, validating index offsets.",
    },
    optimal: {
      code: `function simplifyPathOptimal(path) {
  const stack = [];
  const components = path.split("/");
  for (const component of components) {
    if (component === "" || component === ".") {
      continue;
    }
    if (component === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(component);
    }
  }
  return "/" + stack.join("/");
}`,
      language: "javascript",
      explanation: "Split the path by `/`. Ignore empty components and `.`. If the component is `..`, pop from the stack to go up a directory. Otherwise, push the directory name. Join components with `/`. Runs in linear O(N) time.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { path: '"/home//foo/"', stack: "[]" }, description: "Split components: ['', 'home', '', 'foo', '']." },
      { line: 2, variables: { component: '"home"', stack: '["home"]' }, description: "Skip empty string. Process 'home', push to stack." },
      { line: 3, variables: { component: '"foo"', stack: '["home", "foo"]' }, description: "Process 'foo', push to stack. Join to '/home/foo'." }
    ],
    interviewDiscussion: [
      {
        question: "How does the stack handle multiple consecutive slashes like `///`?",
        answer: "Splitting the path by `/` converts consecutive slashes into empty strings `''`. The check `component === ''` ignores them, rendering them harmless."
      }
    ],
  }
];
