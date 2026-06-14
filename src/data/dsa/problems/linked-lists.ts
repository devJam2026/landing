import { Problem } from "./types";

export const linkedListProblems: Problem[] = [
  {
    id: 13,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "Easy",
    pillarSlug: "linked-lists",
    statement: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    starterCode: `function reverseList(head) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function reverseListBrute(head) {
    if (!head) return null;
    const values = [];
    let curr = head;
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    values.reverse();
    curr = head;
    let i = 0;
    while (curr) {
      curr.val = values[i++];
      curr = curr.next;
    }
    return head;
}`,
      language: "javascript",
      explanation: "Copy all node values to an array, reverse the array, and write the values back to the nodes in-order. Requires O(N) extra space and traverses the list twice.",
    },
    better: {
      code: `function reverseListRecursive(head) {
  if (!head || !head.next) return head;
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}`,
      language: "javascript",
      explanation: "Reverse the rest of the list recursively, then point the next node back to the current node and clear current's next reference. Runs in O(N) time but uses O(N) call stack space.",
    },
    optimal: {
      code: `function reverseListOptimal(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}`,
      language: "javascript",
      explanation: "Reverse pointer connections in-place using three pointers: prev, curr, and nextTemp. Runs in a single pass with O(1) auxiliary space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { prev: "null", curr: "Node(1)", list: "1 -> 2 -> 3" }, description: "Initialize prev as null, curr as head node (1)." },
      { line: 2, variables: { nextTemp: "Node(2)", currNext: "null" }, description: "Loop step 1. Store curr.next (2) in nextTemp. Point curr.next to prev (null)." },
      { line: 3, variables: { prev: "Node(1)", curr: "Node(2)" }, description: "Move pointers forward: prev becomes 1, curr becomes 2." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the iterative method preferred over the recursive method in production?",
        answer: "Although both run in O(N) time, the recursive method consumes O(N) call stack frames. In production systems with long lists, recursion can trigger stack overflow exceptions, whereas the iterative method uses O(1) constant stack space.",
      }
    ],
  },
  {
    id: 38,
    title: "Linked List Cycle Check",
    slug: "linked-list-cycle",
    difficulty: "Easy",
    pillarSlug: "linked-lists",
    statement: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
    starterCode: `function hasCycle(head) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function hasCycleBrute(head) {
  let curr = head;
  const list = [];
  while (curr) {
    if (list.includes(curr)) return true;
    list.push(curr);
    curr = curr.next;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Store visited node object references in a flat array, checking inclusion on each step. Runs in quadratic O(N^2) time.",
    },
    better: {
      code: `function hasCycleHash(head) {
  let curr = head;
  const set = new Set();
  while (curr) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Iterate and store node pointers inside a Set. Lookups are constant-time O(1) on average. Runs in O(N) time with O(N) space.",
    },
    optimal: {
      code: `function hasCycleOptimal(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
      language: "javascript",
      explanation: "Floyd's Tortoise and Hare algorithm: slow pointer moves one step, fast pointer moves two steps. If there is a cycle, the fast pointer will loop back and meet the slow pointer. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { head: "Node(3)", slow: "Node(3)", fast: "Node(3)" }, description: "Set both pointers to head." },
      { line: 2, variables: { slow: "Node(2)", fast: "Node(0)" }, description: "Loop step 1. Move slow by 1 step (value 2), fast by 2 steps (value 0)." },
      { line: 3, variables: { slow: "Node(0)", fast: "Node(2)" }, description: "Loop step 2. Move slow to 0, fast loops around cycle to 2." },
      { line: 4, variables: { slow: "Node(-4)", fast: "Node(-4)" }, description: "Loop step 3. Both pointers meet at node -4. Return true." }
    ],
    interviewDiscussion: [
      {
        question: "Can you mathematically prove why the slow and fast pointers will always meet if a cycle exists?",
        answer: "Yes. Once both pointers are in the cycle, with every step, the distance between them decreases by 1 node because fast moves 2 steps and slow moves 1 step. Since the cycle has a finite length C, they will meet in at most C steps."
      }
    ],
  },
  {
    id: 39,
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    difficulty: "Easy",
    pillarSlug: "linked-lists",
    statement: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
    starterCode: `function mergeTwoLists(list1, list2) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function mergeTwoListsBrute(list1, list2) {
  const vals = [];
  let curr = list1;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  curr = list2;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  vals.sort((a, b) => a - b);
  // Reconstruct new list
  const dummy = new ListNode(0);
  let temp = dummy;
  for (const v of vals) {
    temp.next = new ListNode(v);
    temp = temp.next;
  }
  return dummy.next;
}`,
      language: "javascript",
      explanation: "Extract all node values into an array, sort them, and reconstruct a new linked list. Runs in O((N+M) log(N+M)) time with O(N+M) auxiliary space.",
    },
    better: {
      code: `function mergeTwoListsRecursive(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
  }
}`,
      language: "javascript",
      explanation: "Merge lists recursively. Stitch nodes together by returning the smaller of the two head nodes. Runs in O(N+M) time but uses O(N+M) recursive stack frames.",
    },
    optimal: {
      code: `function mergeTwoListsOptimal(list1, list2) {
  const dummy = new ListNode(-1);
  let tail = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 !== null ? list1 : list2;
  return dummy.next;
}`,
      language: "javascript",
      explanation: "Iterative splicing using a dummy head. Loop through both lists and hook the smaller node to the merged list tail. Append any remaining elements at the end. Runs in O(N+M) time with O(1) space.",
    },
    timeComplexity: "O(m + n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { list1: "1->2", list2: "1->3", dummy: "ListNode(-1)" }, description: "Set tail = dummy." },
      { line: 2, variables: { list1Val: 1, list2Val: 1, tailNext: "list1" }, description: "Compare 1 and 1. Hook list1 (1) to tail. Move list1 to 2. tail becomes Node(1)." },
      { line: 3, variables: { list1Val: 2, list2Val: 1, tailNext: "list2" }, description: "Compare 2 and 1. Hook list2 (1) to tail. Move list2 to 3. tail becomes Node(1)." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we use a dummy node at the beginning?",
        answer: "A dummy node acts as a placeholder header, avoiding special-case checks for initializing the head of the merged list (e.g., checking if the list is empty when inserting the first element)."
      }
    ],
  },
  {
    id: 40,
    title: "Remove Nth Node From End",
    slug: "remove-nth-node-from-end-of-list",
    difficulty: "Medium",
    pillarSlug: "linked-lists",
    statement: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    starterCode: `function removeNthFromEnd(head, n) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function removeNthBrute(head, n) {
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }
  if (len === n) return head.next;
  curr = head;
  for (let i = 1; i < len - n; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}`,
      language: "javascript",
      explanation: "Find the total length L of the list. Traverse L - N steps from the head to reach the parent node, and remove target. Takes two passes over the list.",
    },
    better: {
      code: `// Stack-based parsing to backtrack node pointers
function removeNthStack(head, n) {
  const stack = [];
  let curr = head;
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  if (stack.length === 0) return head.next;
  const parent = stack[stack.length - 1];
  parent.next = parent.next.next;
  return head;
}`,
      language: "javascript",
      explanation: "Push all node references onto a stack. Pop N times to reach the target node. The top of the stack is the parent node. Runs in one pass but uses O(N) space.",
    },
    optimal: {
      code: `function removeNthFromEndOptimal(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  // Advance first pointer by n + 1 steps
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  // Move both pointers together until first reaches end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  // Delete node
  second.next = second.next.next;
  return dummy.next;
}`,
      language: "javascript",
      explanation: "Single pass with two pointers. Set two pointers `first` and `second` at dummy head. Move `first` pointer N+1 steps ahead. Then, move both pointers together. When `first` reaches null, `second` will point to the node immediately preceding the target. Stitch pointers in O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { list: "1->2->3->4->5", n: 2 }, description: "Set first and second pointers at dummy node (0)." },
      { line: 2, variables: { firstIndex: 3 }, description: "Advance first pointer by 3 steps (0 -> 1 -> 2 -> 3)." },
      { line: 3, variables: { first: "null", secondVal: 3 }, description: "Move both. When first reaches null, second is at Node(3). parent of node to remove (4)." },
      { line: 4, variables: { secondNext: "Node(5)" }, description: "Stitch Node(3).next to Node(5). Node 4 is removed." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the dummy node necessary when removing the Nth node?",
        answer: "If the list has 1 node, or we need to remove the head node (N equals list length), without a dummy node, the parent pointer would start outside the list, creating null pointer bugs. The dummy node generalizes the deletion."
      }
    ],
  },
  {
    id: 41,
    title: "Reorder List",
    slug: "reorder-list",
    difficulty: "Medium",
    pillarSlug: "linked-lists",
    statement: "You are given the head of a singly linked list. Reorder the list to: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...",
    starterCode: `function reorderList(head) {
  // Write your code here
}`,
    bruteForce: {
      code: `function reorderListBrute(head) {
  if (!head) return;
  const nodes = [];
  let curr = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }
  let i = 0;
  let j = nodes.length - 1;
  while (i < j) {
    nodes[i].next = nodes[j];
    i++;
    if (i === j) break;
    nodes[j].next = nodes[i];
    j--;
  }
  nodes[i].next = null;
}`,
      language: "javascript",
      explanation: "Extract all nodes into an array. Re-link next pointers using two pointers moving inward. Runs in O(N) time with O(N) space.",
    },
    better: {
      code: `// Stack-based reordering
function reorderListStack(head) {
  // Pop nodes from end using stack to stitch...
}`,
      language: "javascript",
      explanation: "Iterate and stack nodes to pop elements from the right end, inserting them alternately.",
    },
    optimal: {
      code: `function reorderListOptimal(head) {
  if (!head || !head.next) return;
  // 1. Find middle of list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2. Reverse second half
  let prev = null;
  let curr = slow.next;
  slow.next = null; // Split lists
  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // 3. Merge two halves
  let first = head;
  let second = prev;
  while (second !== null) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
}`,
      language: "javascript",
      explanation: "1. Find middle using fast/slow pointers. 2. Reverse second half in-place. 3. Merge both halves dynamically by interleaving. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { list: "1->2->3->4", slow: "Node(2)", fast: "Node(4)" }, description: "Find middle node 2. Split lists: List1 = 1->2, List2 = 3->4." },
      { line: 2, variables: { secondHalfReversed: "4->3" }, description: "Reverse second half to get 4->3." },
      { line: 3, variables: { first: "1->2", second: "4->3" }, description: "Interleave: 1 points to 4, 4 points to 2, 2 points to 3. Result: 1->4->2->3." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we set `slow.next = null` after finding the middle?",
        answer: "Setting `slow.next = null` splits the list into two distinct, independent sublists. Without this, the first list would remain connected to the second half, creating cycle pointer errors during interweaving."
      }
    ],
  },
  {
    id: 42,
    title: "Intersection of Two Lists",
    slug: "intersection-of-two-linked-lists",
    difficulty: "Easy",
    pillarSlug: "linked-lists",
    statement: "Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
    starterCode: `function getIntersectionNode(headA, headB) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function getIntersectionBrute(headA, headB) {
  let currA = headA;
  while (currA) {
    let currB = headB;
    while (currB) {
      if (currA === currB) return currA;
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null;
}`,
      language: "javascript",
      explanation: "For each node in list A, iterate through list B to check if there is a matching node reference. Runs in O(M * N) time.",
    },
    better: {
      code: `function getIntersectionHash(headA, headB) {
  const set = new Set();
  let curr = headA;
  while (curr) {
    set.add(curr);
    curr = curr.next;
  }
  curr = headB;
  while (curr) {
    if (set.has(curr)) return curr;
    curr = curr.next;
  }
  return null;
}`,
      language: "javascript",
      explanation: "Populate a Set with all node references of list A, then scan list B to find the first node present in the Set. Runs in O(M+N) time and O(M) space.",
    },
    optimal: {
      code: `function getIntersectionNodeOptimal(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
}`,
      language: "javascript",
      explanation: "Double pointers: traversal path is length of list A + list B. If pointer A reaches null, reset it to headB. If pointer B reaches null, reset it to headA. In the second pass, both pointers align to cover the same length offset and will meet exactly at the intersection point. Runs in O(M+N) time with O(1) space.",
    },
    timeComplexity: "O(m + n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { listA: "a1->a2->c1->c2", listB: "b1->b2->b3->c1->c2" }, description: "Set pA = a1, pB = b1." },
      { line: 2, variables: { pAState: "a1 -> a2 -> c1 -> c2 -> null -> b1" }, description: "pA runs through list A, hits null, resets to b1." },
      { line: 3, variables: { pBState: "b1 -> b2 -> b3 -> c1 -> c2 -> null -> a1" }, description: "pB runs through list B, hits null, resets to a1. Both pointers meet at c1." }
    ],
    interviewDiscussion: [
      {
        question: "Why do they meet at the intersection point?",
        answer: "Let list A have non-overlapping length `a`, list B have non-overlapping length `b`, and overlapping length `c`. Pointer A travels `a + c + b` steps, and pointer B travels `b + c + a` steps. Since the total distance traveled is equal (`a + b + c`), they must land on the intersection node at the same time."
      }
    ],
  },
  {
    id: 43,
    title: "Palindrome Linked List",
    slug: "palindrome-linked-list",
    difficulty: "Easy",
    pillarSlug: "linked-lists",
    statement: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    starterCode: `function isPalindrome(head) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isPalindromeBrute(head) {
  const vals = [];
  let curr = head;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  let i = 0;
  let j = vals.length - 1;
  while (i < j) {
    if (vals[i] !== vals[j]) return false;
    i++;
    j--;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Copy all node values to an array and check palindrome equality using two pointers. Runs in O(N) time and O(N) space.",
    },
    better: {
      code: `// Recursive checking using global pointer comparison
function isPalindromeRec(head) {
  let front = head;
  function check(node) {
    if (node === null) return true;
    const isPal = check(node.next) && (front.val === node.val);
    front = front.next;
    return isPal;
  }
  return check(head);
}`,
      language: "javascript",
      explanation: "Recursive traversal utilizing function call stack frames to read nodes backwards, comparing with a forward pointer. Runs in O(N) time and O(N) stack space.",
    },
    optimal: {
      code: `function isPalindromeOptimal(head) {
  if (!head || !head.next) return true;
  // 1. Find middle of list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2. Reverse second half
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // 3. Compare halves
  let p1 = head;
  let p2 = prev; // head of reversed second half
  let match = true;
  while (p2 !== null) {
    if (p1.val !== p2.val) {
      match = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return match;
}`,
      language: "javascript",
      explanation: "1. Traverse with fast/slow pointers to locate middle. 2. Reverse second half in-place. 3. Scan first half and reversed second half together, comparing values. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { list: "1->2->2->1", slow: "Node(2)", fast: "null" }, description: "Find middle node (index 2)." },
      { line: 2, variables: { reversedSecondHalf: "1->2" }, description: "Reverse second half to get 1->2." },
      { line: 3, variables: { p1: "1->2", p2: "1->2" }, description: "Compare halves. 1==1, 2==2. All match, return true." }
    ],
    interviewDiscussion: [
      {
        question: "Should we restore the list to its original state before returning?",
        answer: "Yes, in production environments it is best practice to reverse the second half back to its original order before returning to prevent mutation side-effects for client callers."
      }
    ],
  },
  {
    id: 44,
    title: "Copy List with Random Pointer",
    slug: "copy-list-with-random-pointer",
    difficulty: "Medium",
    pillarSlug: "linked-lists",
    statement: "Construct a deep copy of a linked list where each node has a value, a next pointer, and a random pointer pointing to any node in the list or null.",
    starterCode: `function copyRandomList(head) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function copyBrute(head) {
  // Nested search loops to find target nodes...
  return null;
}`,
      language: "javascript",
      explanation: "Create nodes and for each node, search the index coordinates of the random node, re-navigating to copy. Runs in O(N^2) time.",
    },
    better: {
      code: `function copyMap(head) {
  if (!head) return null;
  const map = new Map();
  let curr = head;
  while (curr) {
    map.set(curr, new ListNode(curr.val));
    curr = curr.next;
  }
  curr = head;
  while (curr) {
    map.get(curr).next = map.get(curr.next) || null;
    map.get(curr).random = map.get(curr.random) || null;
    curr = curr.next;
  }
  return map.get(head);
}`,
      language: "javascript",
      explanation: "Iterate and register node clones inside a Map. Second pass links pointers using map lookups. Runs in O(N) time with O(N) space.",
    },
    optimal: {
      code: `function copyRandomListOptimal(head) {
  if (!head) return null;
  // 1. Interweave copy nodes
  let curr = head;
  while (curr !== null) {
    const copy = new Node(curr.val);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }
  // 2. Link random pointers
  curr = head;
  while (curr !== null) {
    if (curr.random !== null) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }
  // 3. Separate lists
  let orig = head;
  let copyHead = head.next;
  let copy = copyHead;
  while (orig !== null) {
    orig.next = orig.next.next;
    copy.next = copy.next !== null ? copy.next.next : null;
    orig = orig.next;
    copy = copy.next;
  }
  return copyHead;
}`,
      language: "javascript",
      explanation: "1. Copy nodes and insert them immediately next to original nodes. 2. Set copy node random pointers: `curr.next.random = curr.random.next`. 3. Split the interwoven lists back to separate nodes. Runs in O(N) time with O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { list: "1->2->null" }, description: "Interweave nodes to: 1 -> 1' -> 2 -> 2' -> null." },
      { line: 2, variables: { randomLink: "1.random = 2" }, description: "Link random pointer for copy node: 1'.random points to 1.random.next (2')." },
      { line: 3, variables: { splitHead: "1' -> 2' -> null" }, description: "Restore next pointers. Separate list into original and cloned lists." }
    ],
    interviewDiscussion: [
      {
        question: "Why does interweaving eliminate the need for a Hash Map?",
        answer: "By placing the cloned node immediately after the original node in the list, we store the mapping (original -> clone) implicitly in the structure itself. The clone of any node `N` is always `N.next`, which can be accessed in constant time."
      }
    ],
  },
  {
    id: 301,
    title: "Linked List Cycle II",
    slug: "linked-list-cycle-ii",
    difficulty: "Medium",
    pillarSlug: "linked-lists",
    statement: "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Do not modify the linked list.",
    starterCode: `function detectCycle(head) {
  // Write your code here
  return null;
}`,
    bruteForce: {
      code: `function detectCycleBrute(head) {
  const visited = new Set();
  let curr = head;
  while (curr !== null) {
    if (visited.has(curr)) {
      return curr;
    }
    visited.add(curr);
    curr = curr.next;
  }
  return null;
}`,
      language: "javascript",
      explanation: "Iterate through the linked list and keep track of visited node references using a Set. The first node that is already present in the Set is the start of the cycle. Runs in O(N) time with O(N) space.",
    },
    better: {
      code: `function detectCycleBruteArray(head) {
  const visited = [];
  let curr = head;
  while (curr !== null) {
    if (visited.includes(curr)) {
      return curr;
    }
    visited.push(curr);
    curr = curr.next;
  }
  return null;
}`,
      language: "javascript",
      explanation: "Iterate and store visited nodes in an array. Check array inclusion at each node. Runs in O(N^2) time with O(N) space due to array lookup time.",
    },
    optimal: {
      code: `function detectCycleOptimal(head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let hasCycle = false;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }
  
  if (!hasCycle) return null;
  
  let entry = head;
  while (entry !== slow) {
    entry = entry.next;
    slow = slow.next;
  }
  return entry;
}`,
      language: "javascript",
      explanation: "Floyd's Cycle Finding algorithm. 1. Use slow/fast pointers to detect if a cycle exists. 2. If a cycle is detected, reset a pointer (`entry`) to head, and move both `entry` and `slow` pointers one step at a time. The node where they meet is the start of the cycle. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { head: "Node(3)", slow: "Node(3)", fast: "Node(3)" }, description: "Initialize slow and fast pointers at head." },
      { line: 2, variables: { slow: "Node(-4)", fast: "Node(-4)" }, description: "Pointers meet at node -4. Cycle detected." },
      { line: 3, variables: { entry: "Node(3)", slow: "Node(-4)" }, description: "Reset entry to head. Move both entry and slow 1 step at a time." },
      { line: 4, variables: { entry: "Node(2)", slow: "Node(2)" }, description: "They meet at Node(2), which is the start of the cycle. Return Node(2)." }
    ],
    interviewDiscussion: [
      {
        question: "Why do entry and slow pointers meet at the start of the cycle?",
        answer: "Let L1 be the distance from head to the start of the cycle, and L2 be the distance from the start to the meeting point. The slow pointer travels L1 + L2 steps. The fast pointer travels L1 + L2 + n*C steps, where C is cycle length. Since fast is twice as fast, 2*(L1 + L2) = L1 + L2 + n*C => L1 + L2 = n*C => L1 = n*C - L2. This implies moving L1 steps from head and L1 steps from the meeting point lands exactly at the cycle entrance.",
      }
    ],
    edgeCases: [
      "No cycle exists (returns null)",
      "Cycle starts at the head node itself",
      "Only one node with a self-loop"
    ],
    commonMistakes: [
      "Not checking if fast or fast.next reaches null before setting hasCycle to true",
      "Returning slow/fast meeting node directly instead of the cycle start node"
    ]
  }
];
