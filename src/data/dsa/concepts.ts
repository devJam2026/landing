export interface DsaConcept {
  slug: string;
  name: string;
  overview: string;
  whyExists: string;
  intuition: string;
  visualization: string;
  complexity: string;
  realWorldApps: string[];
  commonPatterns: { name: string; description: string }[];
  interviewDiscussion: { question: string; answer: string }[];
  commonMistakes: string[];
  relatedProblems: { name: string; difficulty: "Easy" | "Medium" | "Hard"; link?: string }[];
  relatedTopics: { name: string; slug: string }[];
}

export const dsaConcepts: Record<string, DsaConcept> = {
  "complexity-analysis": {
    slug: "complexity-analysis",
    name: "Complexity Analysis",
    overview: "Complexity analysis is the process of estimating the resource usage (time and memory space) of an algorithm relative to the input size N. It uses Big O, Big Theta, and Big Omega asymptotic notations to model growth curves.",
    whyExists: "Hardware speeds vary. Running the same code on a supercomputer vs. a smartwatch yields different speeds. Complexity analysis provides a hardware-independent mathematical model to classify algorithm performance.",
    intuition: "Think of checking spelling in a book. If you read page-by-page from start to finish, the time scales directly with the book length (O(N)). If you use an alphabetical index to skip pages, it scales logarithmically (O(log N)).",
    visualization: `
Runtime Step Scale:
      ^
  O(2^N)|                 / O(n^2)
        |                /
        |               /   / O(n log n)
        |              /   /
        |             /   /   / O(n)
        |            /   /   /
        |           /   /   /   / O(log n)
        |__________/___/___/___/________> Input Size (N)
    `,
    complexity: "| Notation | Meaning | Growth Speed |\n| :--- | :--- | :--- |\n| **O(1)** | Constant | Flat, size does not matter |\n| **O(log N)** | Logarithmic | Sublinear, cuts search space in half |\n| **O(N)** | Linear | Direct proportional to N |\n| **O(N log N)** | Linearithmic | Standard divide-and-conquer sort |\n| **O(N^2)** | Quadratic | Nested loop steps |\n| **O(2^N)** | Exponential | Recurse on all subsets |",
    realWorldApps: [
      "Database Query Planners: Estimating full-table scan O(N) vs index query O(log N) costs.",
      "Hardware Capacity Sizing: Planning RAM budgets for storage buffers based on space scaling rules."
    ],
    commonPatterns: [
      { name: "Amortized Analysis", description: "Calculating average time of a sequence of operations (e.g., dynamic array resizing O(N) happens rarely, making push operations O(1) on average)." }
    ],
    interviewDiscussion: [
      {
        question: "Explain the difference between Big O and Big Theta.",
        answer: "Big O represents the asymptotic upper bound (worst-case scenario), whereas Big Theta represents the tight bound, indicating that the algorithm grows at exactly that rate in both best and worst cases."
      }
    ],
    commonMistakes: [
      "Ignoring the space of recursive stacks in recursion.",
      "Assuming nested loops are always O(N^2) (if internal loops increment exponentially, it could be O(N log N))."
    ],
    relatedProblems: [
      { name: "Two Sum", difficulty: "Easy", link: "/dsa/practice/two-sum" }
    ],
    relatedTopics: [
      { name: "Arrays", slug: "arrays" },
      { name: "Binary Search", slug: "binary-search" }
    ]
  },
  "arrays": {
    slug: "arrays",
    name: "Arrays",
    overview: "An array is a linear data structure containing elements stored in contiguous memory blocks. Accessing elements by index runs in constant time, but insertion and deletion require shifting elements.",
    whyExists: "Computers organize memory as a sequence of address slots. Arrays map directly to this hardware structure, enabling low-level CPU cache efficiency.",
    intuition: "Think of a row of lockers numbered 0 to N-1. If you know the locker number, you can open it instantly (O(1) access). If you want to insert a new locker in the middle, you must physically push all subsequent lockers down by one slot.",
    visualization: `
Array Memory Contiguity:
+-----+-----+-----+-----+-----+
| 10  |  8  | 25  | 14  | 90  |
+-----+-----+-----+-----+-----+
Index: 0     1     2     3     4
Addr: 0x01  0x05  0x09  0x0D  0x11 (4-byte spacing)
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Access** | O(1) | Direct lookup by index offset |\n| **Search** | O(N) | Unsorted scan (Linear search) |\n| **Insertion** | O(N) | Shifting elements right to free up a slot |\n| **Deletion** | O(N) | Shifting elements left to close the gap |",
    realWorldApps: [
      "Image Pixels: 2D/3D grids mapping color buffers to rendering displays.",
      "Dynamic Ring Buffers: Low-latency message packets queue processing."
    ],
    commonPatterns: [
      { name: "Two Pointers", description: "Using left/right pointers to find target values in sorted collections." },
      { name: "Sliding Window", description: "Shifting left and right bounds to compute contiguous subsegment sums." },
      { name: "Prefix Sum", description: "Pre-calculating cumulative sums to answer range query requests in O(1)." }
    ],
    interviewDiscussion: [
      {
        question: "Why is accessing an array index O(1) while searching is O(N)?",
        answer: "Array access is O(1) because we calculate the address mathematically: Address = BaseAddr + Index * ElementSize. Searching requires looking at each slot one-by-one until the target is found."
      }
    ],
    commonMistakes: [
      "Out-of-bounds index errors (accessing N instead of N-1).",
      "Duplicating arrays in memory during subset copies (causing high space complexity)."
    ],
    relatedProblems: [
      { name: "Two Sum", difficulty: "Easy", link: "/dsa/practice/two-sum" },
      { name: "Best Time to Buy Stock", difficulty: "Easy", link: "/dsa/practice/best-time-to-buy-stock" },
      { name: "Product of Array Except Self", difficulty: "Medium", link: "/dsa/practice/product-of-array-except-self" }
    ],
    relatedTopics: [
      { name: "Complexity Analysis", slug: "complexity-analysis" },
      { name: "Binary Search", slug: "binary-search" }
    ]
  },
  "strings": {
    slug: "strings",
    name: "Strings",
    overview: "Strings are sequences of characters representing textual data. Under the hood, they are stored as character arrays, but string operations (concatenation, substring search) have unique space-time profiles.",
    whyExists: "Computers represent numbers naturally, but human communication is text-based. Strings bridge byte representations to human readable ASCII/Unicode characters.",
    intuition: "Think of a string as a beaded necklace. Each bead is a character. To search for a specific word inside a sentence, you must scan segments of the necklace matching bead patterns.",
    visualization: `
String (e.g. "DevJam"):
+---+---+---+---+---+---+
| D | e | v | J | a | m |
+---+---+---+---+---+---+
 0   1   2   3   4   5
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Access** | O(1) | Constant lookup by character index |\n| **Concatenation** | O(N + M) | Requires copying characters to new buffer |\n| **Substr Search** | O(N * M) | Brute force check (KMP reduces to O(N)) |\n| **Space** | O(N) | Immutable strings duplicate on mutations |",
    realWorldApps: [
      "Autocomplete Engines: Matching prefix characters in search bars.",
      "DNA Sequencing: Finding gene sequence matches in biology databases."
    ],
    commonPatterns: [
      { name: "Anagram Hashing", description: "Frequency map counting (size 26 array) to verify character counts." },
      { name: "Sliding Window on Characters", description: "Tracking active substrings without duplicated character patterns." }
    ],
    interviewDiscussion: [
      {
        question: "Why are strings immutable in languages like Java or Python?",
        answer: "Immutability allows string pooling, caching hash codes, and security. However, it means modifying a string creates a new copy, which can lead to O(N^2) loops if concatenated inside cycles."
      }
    ],
    commonMistakes: [
      "Creating new strings repeatedly inside a loop (use StringBuilders/arrays instead).",
      "Confusing char codes with numeric indices."
    ],
    relatedProblems: [
      { name: "Valid Anagram", difficulty: "Easy" },
      { name: "Group Anagrams", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Arrays", slug: "arrays" },
      { name: "Hash Tables", slug: "hash-tables" }
    ]
  },
  "linked-lists": {
    slug: "linked-lists",
    name: "Linked Lists",
    overview: "A Linked List is a linear data structure where elements (nodes) are stored dynamically in heap memory. Instead of contiguous addresses, each node contains a value and a pointer to the next node.",
    whyExists: "Arrays have fixed sizes. Resizing them is expensive (O(N) copy). Linked lists allocate memory dynamically on-demand, allowing constant-time O(1) insertions at head or tail.",
    intuition: "Think of a treasure hunt game. Each clue is a note containing a clue value and the address of the next clue. You cannot jump to clue 5 directly; you must follow the trail from start to finish.",
    visualization: `
Singly Linked List Node Chain:
[Head: 20] ---> [Node: 10] ---> [Node: 30] ---> [Tail: Null]
(Val, Next)      (Val, Next)     (Val, Next)
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Access/Search** | O(N) | Must traverse links sequentially |\n| **Insert at Head** | O(1) | Adjust pointers without copying |\n| **Delete Node** | O(1) | Bypass node link if reference is held |\n| **Space** | O(N) | Extra memory overhead for pointer addresses |",
    realWorldApps: [
      "Garbage Collectors: Tracking memory allocations inside list tables.",
      "Undo/Redo History: Doubly linked pointer references to previous states."
    ],
    commonPatterns: [
      { name: "Fast & Slow Pointers", description: "Using tortoise and hare pointers to identify cycles or middle nodes." },
      { name: "Link Reversal", description: "Iteratively updating three pointer states (prev, curr, next) to flip node orders." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a linked list better than an array for active insertion environments?",
        answer: "Linked lists insert elements in O(1) time by updating pointer connections. Arrays require allocating a larger memory block and copying all elements, which is slow."
      }
    ],
    commonMistakes: [
      "NullPointerExceptions (forgetting to check if `curr.next` is null before accessing).",
      "Creating cyclic infinite loops during updates."
    ],
    relatedProblems: [
      { name: "Reverse Linked List", difficulty: "Easy" },
      { name: "Detect Cycle in Linked List", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Stack", slug: "stack" },
      { name: "Queue", slug: "queue" }
    ]
  },
  "stack": {
    slug: "stack",
    name: "Stack",
    overview: "A Stack is a linear data structure adhering to Last-In-First-Out (LIFO) access rules. Elements are pushed onto the top of the stack and popped off the top.",
    whyExists: "Many systems require backtracking. Stacks store previous computational contexts, allowing processes to return to parent states on demand.",
    intuition: "Think of a stack of plates in a cafeteria. You place new plates on top (push). When a customer takes a plate, they remove it from the top (pop). You cannot extract the bottom plate without removing the ones above first.",
    visualization: `
Stack Push/Pop Lifecycle:
       |        |
       | [ 30 ] | <- Top (Last In, First Out)
       | [ 20 ] |
       | [ 10 ] |
       +--------+
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Push** | O(1) | Insert element on top |\n| **Pop** | O(1) | Remove element from top |\n| **Peek** | O(1) | Query top element without removal |\n| **Search** | O(N) | Requires popping elements |",
    realWorldApps: [
      "JavaScript Call Stack: Managing recursive execution frames.",
      "Browser Page History: Returning to previous pages on back-click."
    ],
    commonPatterns: [
      { name: "Monotonic Stack", description: "Maintaining sorted element orders (strictly increasing/decreasing) to find nearest smaller/larger elements." },
      { name: "Balanced Boundaries", description: "Pushing open brackets, popping and checking matches on closing brackets." }
    ],
    interviewDiscussion: [
      {
        question: "How do you implement a queue using two stacks?",
        answer: "Use stack1 for enqueue and stack2 for dequeue. When dequeue is called, if stack2 is empty, pop all elements from stack1 and push them into stack2, reversing their order to match FIFO rules."
      }
    ],
    commonMistakes: [
      "Stack Overflow (running out of memory during infinite recursions).",
      "Calling pop() on empty stacks (stack underflow)."
    ],
    relatedProblems: [
      { name: "Valid Parentheses", difficulty: "Easy", link: "/dsa/practice/valid-parentheses" },
      { name: "Daily Temperatures", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Linked Lists", slug: "linked-lists" },
      { name: "Queue", slug: "queue" }
    ]
  },
  "queue": {
    slug: "queue",
    name: "Queue",
    overview: "A Queue is a linear data structure adhering to First-In-First-Out (FIFO) access rules. Elements enter from the back (enqueue) and exit from the front (dequeue).",
    whyExists: "Resources are limited. When requests arrive faster than they can be processed, queues store them in chronological order for sequential handling.",
    intuition: "Think of a line at a movie theater ticket booth. The first person in line is the first to buy a ticket and leave (First In, First Out). Anyone joining the line must wait at the back.",
    visualization: `
Queue FIFO Lifecycle:
Enqueue -> [ 30 ][ 20 ][ 10 ] -> Dequeue
            Back        Front
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Enqueue** | O(1) | Append element to back |\n| **Dequeue** | O(1) | Remove element from front |\n| **Peek** | O(1) | View front element without removal |\n| **Space** | O(N) | Stores up to N queue items |",
    realWorldApps: [
      "OS Job Schedulers: Queueing CPU instructions.",
      "Print Spoolers: Standard printers printing pages in order of receipt."
    ],
    commonPatterns: [
      { name: "Circular Queue", description: "Reusing array ends using modular arithmetic to prevent pointer drift." },
      { name: "Monotonic Queue", description: "Maintaining max/min values within sliding windows to answer dynamic checks." }
    ],
    interviewDiscussion: [
      {
        question: "What is the difference between a simple queue and a priority queue?",
        answer: "A simple queue operates on arrival order (FIFO). A priority queue extracts elements based on priority (minimum or maximum value), typically backed by a heap tree, executing insert/extract in O(log N) time."
      }
    ],
    commonMistakes: [
      "O(N) dequeue times if backed by simple arrays (use linked lists or ring buffers instead).",
      "Out-of-bounds pointer drift in array-based queues."
    ],
    relatedProblems: [
      { name: "Sliding Window Maximum", difficulty: "Hard" }
    ],
    relatedTopics: [
      { name: "Stack", slug: "stack" },
      { name: "Heap", slug: "heap" }
    ]
  },
  "hash-tables": {
    slug: "hash-tables",
    name: "Hash Tables",
    overview: "A Hash Table (or map) is a key-value data structure. It uses a hash function to map key strings/numbers to index positions inside an array, enabling average constant-time lookups.",
    whyExists: "Accessing items in arrays is fast only if you know the index. Hash tables allow you to find items in constant time using arbitrary keys like words or email addresses.",
    intuition: "Think of a filing cabinet. To store a file, you take the first letter of the name (e.g. 'Avick' maps to drawer 'A'). Searching for the file only requires checking the 'A' drawer, bypassing the rest.",
    visualization: `
Key -> Hash Function -> Array Index -> Value
"Avick" -> HashCode(Avick) % 10 -> [3] -> "User Profile Data"
    `,
    complexity: "| Operation | Time (Avg) | Time (Worst) | Notes |\n| :--- | :---: | :---: | :--- |\n| **Insert** | O(1) | O(N) | Worst case occurs on heavy collisions |\n| **Delete** | O(1) | O(N) | Must resolve collision chains |\n| **Search** | O(1) | O(N) | Direct index translation |\n| **Space** | O(N) | O(N) | Requires auxiliary bucket storage |",
    realWorldApps: [
      "In-Memory Caches: Redis maps storing sessions against token strings.",
      "Unique Registers: Checking username availability in databases."
    ],
    commonPatterns: [
      { name: "Chaining Collision", description: "Creating linked list chains at colliding array slots to store overlapping entries." },
      { name: "Open Addressing", description: "Probing neighboring slots in the array sequentially until an empty cell is found." }
    ],
    interviewDiscussion: [
      {
        question: "What is a hash collision, and how is it resolved?",
        answer: "A collision occurs when two different keys map to the same array index. It is resolved using either chaining (linked lists at that slot) or open addressing (searching for the next free slot via linear or quadratic probing)."
      }
    ],
    commonMistakes: [
      "Writing poor hash functions that distribute keys unevenly.",
      "Assuming lookups are always guaranteed O(1) without considering collision chains."
    ],
    relatedProblems: [
      { name: "Two Sum", difficulty: "Easy", link: "/dsa/practice/two-sum" }
    ],
    relatedTopics: [
      { name: "Arrays", slug: "arrays" },
      { name: "Trie", slug: "trie" }
    ]
  },
  "trees": {
    slug: "trees",
    name: "Trees",
    overview: "A Tree is a hierarchical, non-linear data structure containing nodes connected by edges. The top node is the root. A Binary Search Tree (BST) requires left sub-nodes to be smaller and right sub-nodes to be larger.",
    whyExists: "Linear search is too slow for large datasets, and sorted arrays are slow to update. BSTs resolve this by dividing search options on each step, enabling logarithmic searches and insertions.",
    intuition: "Think of a corporate organization chart. The CEO is the root. Each manager splits responsibilities. To find an employee, you navigate down divisions without scanning unrelated teams.",
    visualization: `
Binary Search Tree (BST):
       [20]
      /    \\
    [10]   [30]
   /   \\
 [5]   [15]
    `,
    complexity: "| Operation | Time (Balanced) | Time (Skewed) | Notes |\n| :--- | :---: | :---: | :--- |\n| **Search** | O(log N) | O(N) | Skewed tree acts like a linked list |\n| **Insert** | O(log N) | O(N) | Traverses tree height to leaf |\n| **Delete** | O(log N) | O(N) | Requires link restructuring |\n| **Space** | O(H) | O(N) | Height recursion overhead |",
    realWorldApps: [
      "DOM Trees: Web browser rendering engines structuring HTML nested nodes.",
      "B-Trees: Database indexing engines executing storage query plans."
    ],
    commonPatterns: [
      { name: "DFS Traversal", description: "Exploring depth paths recursively: Preorder (NLR), Inorder (LNR - yields sorted BST values), Postorder (LRN)." },
      { name: "BFS (Level Order)", description: "Scanning nodes layer-by-layer using a queue." }
    ],
    interviewDiscussion: [
      {
        question: "How do you validate if a binary tree is a valid BST?",
        answer: "You cannot simply compare a node with its immediate children. You must pass down min and max value limits recursively. Left subtree updates max limit; right subtree updates min limit."
      }
    ],
    commonMistakes: [
      "Forgetting to handle tree imbalances (which turns O(log N) operations into O(N)).",
      "Using recursion without checking null root base cases."
    ],
    relatedProblems: [
      { name: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "/dsa/practice/maximum-depth" },
      { name: "Validate Binary Search Tree", difficulty: "Medium", link: "/dsa/practice/validate-bst" }
    ],
    relatedTopics: [
      { name: "Linked Lists", slug: "linked-lists" },
      { name: "Trie", slug: "trie" }
    ]
  },
  "heap": {
    slug: "heap",
    name: "Heap",
    overview: "A Heap is a specialized array-based binary tree representing a complete tree. A Min-Heap requires parents to be smaller than children (minimum value at root). Max-Heaps require parents to be larger.",
    whyExists: "Priority scheduling requires constant access to min/max items. Heaps keep elements partially sorted in memory, updating in O(log N) time without the cost of sorting a full array.",
    intuition: "Think of an emergency room triage queue. Patients are sorted dynamically by severity. The most critical patient is treated first (root), while new patients are integrated into the queue based on priority.",
    visualization: `
Max-Heap Array representation:
Index:   0    1    2    3    4
Array: [90,  30,  40,  10,  20]
Tree:
       [90] (0)
      /    \\
    [30]   [40] (2)
   /    \\
 [10]   [20] (4)
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Get Min/Max** | O(1) | Root node is always at index 0 |\n| **Insert** | O(log N) | Bubbles element up to maintain order |\n| **Extract Min/Max**| O(log N) | Swaps root with last node, bubbles down |\n| **Heapify** | O(N) | In-place tree construction from raw array |",
    realWorldApps: [
      "Job Schedulers: Priority runtimes allocating CPU slots to threads.",
      "Heap Sort: Sorting arrays in-place with O(N log N) time and O(1) space."
    ],
    commonPatterns: [
      { name: "Two Heaps", description: "Using min-heap and max-heap side-by-side to track dynamic medians in real time." },
      { name: "K-Way Merge", description: "Pushing sorted list heads into a min-heap to extract sorted values sequentially." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a heap stored as an array instead of node pointers?",
        answer: "A heap is a complete binary tree, meaning it has no empty slots. This allows us to map node indices directly in an array where children of index `i` are at `2i + 1` and `2i + 2`, avoiding pointer memory overhead."
      }
    ],
    commonMistakes: [
      "Confusing heaps with Binary Search Trees (heaps do not maintain left-to-right sorting).",
      "Calling bubble-up/down on index offsets that do not match child formulas."
    ],
    relatedProblems: [
      { name: "Kth Largest Element", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Queue", slug: "queue" },
      { name: "Trees", slug: "trees" }
    ]
  },
  "graphs": {
    slug: "graphs",
    name: "Graphs",
    overview: "A Graph is a non-linear data structure containing vertices (nodes) connected by edges. They can be directed or undirected, weighted or unweighted, and represented as adjacency matrices or lists.",
    whyExists: "Many real-world networks (roads, social connections, computer grids) cannot be represented hierarchically. Graphs model cyclic, multi-path relationships.",
    intuition: "Think of a flight route map. Cities are vertices. Flight paths are edges. To find a connection from New York to Paris, you trace paths across cities, checking for layovers and ticket costs.",
    visualization: `
Undirected Graph Network:
   (A) ------- (B)
    |         / |
    |       /   |
    |     /     |
   (C) ------- (D)
    `,
    complexity: "| Search Algorithm | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| **BFS (Queue)** | O(V + E) | O(V) | Shortest path on unweighted graphs |\n| **DFS (Stack)** | O(V + E) | O(V) | Path connectivity and cycle checks |\n| **Dijkstra** | O((V+E) log V) | O(V) | Shortest path on weighted graphs |",
    realWorldApps: [
      "GPS Navigation: Finding the fastest driving route across map intersections.",
      "Social Networks: Suggesting friends based on mutual connection chains."
    ],
    commonPatterns: [
      { name: "Adjacency List Mapping", description: "Mapping vertex keys to arrays of neighbor nodes to save memory compared to sparse matrices." },
      { name: "Topological Sort", description: "Ordering DAG nodes linearly such that for edge U -> V, U appears before V (essential for package dependencies)." }
    ],
    interviewDiscussion: [
      {
        question: "When should we prefer BFS over DFS for graph traversal?",
        answer: "BFS is preferred when searching for the shortest path in unweighted graphs, as it explores nodes level-by-level (radiating outward). DFS is better for exploring complete paths (backtracking), topological sorts, or checking cycle connectivity."
      }
    ],
    commonMistakes: [
      "Infinite recursion loops due to missing 'visited' tracking arrays.",
      "Using Dijkstra on graphs containing negative edge weights (fails to relax correctly)."
    ],
    relatedProblems: [
      { name: "Number of Islands", difficulty: "Medium", link: "/dsa/practice/number-of-islands" },
      { name: "Clone Graph", difficulty: "Medium", link: "/dsa/practice/clone-graph" }
    ],
    relatedTopics: [
      { name: "Trees", slug: "trees" },
      { name: "Heap", slug: "heap" }
    ]
  },
  "backtracking": {
    slug: "backtracking",
    name: "Backtracking",
    overview: "Backtracking is an algorithmic paradigm that searches for solutions recursively by building candidates incrementally and abandoning them ('backtracking') as soon as it determines they cannot lead to a valid solution.",
    whyExists: "For combinatorial problems (generating permutations, solving Sudokus), checking all options naively is too slow. Backtracking prunes invalid branches early, reducing execution trees.",
    intuition: "Think of navigating a maze. When you reach a fork, you choose a path. If you hit a dead end, you physically walk back to the fork and try the alternative path.",
    visualization: `
Recursion Search Tree with Pruning:
          [Start: []]
         /            \\
     [Add 1]          [Add 2]
     /     \\          /     \\
 [1, 2]  [1, X]    [2, 1]  [2, X] (X = pruned branch)
    `,
    complexity: "| Problem Class | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| **Subsets** | O(2^N) | Dynamic binary choice tree |\n| **Permutations** | O(N!) | Arranging N items in all sequences |\n| **N-Queens** | O(N!) | Placing queens without conflicts |\n| **Space** | O(N) | Height of recursive stack buffer |",
    realWorldApps: [
      "Regex Engines: Backtracking character scans to find complex pattern matches.",
      "Compiler Solvers: Automated package dependencies resolution."
    ],
    commonPatterns: [
      { name: "State Reset", description: "Pushing a choice onto a path list, recursing, and popping the choice off (restoring state) before the next iteration." }
    ],
    interviewDiscussion: [
      {
        question: "What is pruning in backtracking, and why is it important?",
        answer: "Pruning is the process of stopping recursive exploration down a branch when we determine it violates problem constraints. It avoids exploring large subtrees, reducing execution steps from pure brute-force limits."
      }
    ],
    commonMistakes: [
      "Forgetting to undo choices (state reset) before backtracking, leading to corrupted paths.",
      "Missing termination base cases, causing stack overflow errors."
    ],
    relatedProblems: [
      { name: "Climbing Stairs", difficulty: "Easy", link: "/dsa/practice/climbing-stairs" }
    ],
    relatedTopics: [
      { name: "Dynamic Programming", slug: "dynamic-programming" },
      { name: "Graphs", slug: "graphs" }
    ]
  },
  "dynamic-programming": {
    slug: "dynamic-programming",
    name: "Dynamic Programming",
    overview: "Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into overlapping subproblems. It solves each subproblem once and caches the result (memoization or tabulation) to prevent redundant recalculations.",
    whyExists: "Standard recursion can calculate identical subproblems repeatedly, resulting in exponential O(2^N) runtimes. DP caches duplicate calculations, reducing runtimes to linear or portfolio scales.",
    intuition: "If I ask you what 1 + 1 + 1 + 1 + 1 is, you count and say 5. If I add another '+ 1' to the end, you don't recount from the start; you remember 5 and add 1 to get 6. Remembering past results is the core of DP.",
    visualization: `
Recursive duplicate tree vs. DP linear memoization:
      Fib(4)                    Fib(4) [Calculates once]
     /      \\                  /      \\
  Fib(3)    Fib(2)          Fib(3)    Fib(2) [Fetched from cache]
  /    \\                     /
Fib(2) Fib(1)             Fib(2)
    `,
    complexity: "| Approach | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| **Naive Recursion**| O(2^N) | O(N) | Duplicate sub-calls grow exponentially |\n| **Memoization** | O(N) | O(N) + O(N) | Top-down: recursion stack + cache hash |\n| **Tabulation** | O(N) | O(N) | Bottom-up: iterative array table |\n| **Space Optimized**| O(N) | O(1) | Maintain only last two states |",
    realWorldApps: [
      "Git Diff: Longest Common Subsequence (LCS) algorithm comparing text changes.",
      "Routing Routers: Computing shortest path transitions dynamically."
    ],
    commonPatterns: [
      { name: "Memoization (Top-Down)", description: "Adding cache registers inside recursive functions to intercept duplicate calculations." },
      { name: "Tabulation (Bottom-Up)", description: "Filling an array iteratively from base cases up to target index limits." }
    ],
    interviewDiscussion: [
      {
        question: "How do you identify if a problem should be solved using Dynamic Programming?",
        answer: "A problem is a DP candidate if it exhibits two properties: 1. Overlapping Subproblems (computations repeat in recursion) and 2. Optimal Substructure (the global optimal solution can be built from optimal solutions of subproblems)."
      }
    ],
    commonMistakes: [
      "Not identifying the correct base cases.",
      "Overallocating table space when only the last few indices are needed (wastes memory)."
    ],
    relatedProblems: [
      { name: "Climbing Stairs", difficulty: "Easy", link: "/dsa/practice/climbing-stairs" },
      { name: "Coin Change", difficulty: "Medium", link: "/dsa/practice/coin-change" },
      { name: "Longest Common Subsequence", difficulty: "Medium", link: "/dsa/practice/longest-common-subsequence" }
    ],
    relatedTopics: [
      { name: "Backtracking", slug: "backtracking" },
      { name: "Complexity Analysis", slug: "complexity-analysis" }
    ]
  },
  "trie": {
    slug: "trie",
    name: "Trie",
    overview: "A Trie (pronounced 'try'), also known as a prefix tree, is a specialized tree-based data structure used to store an associative search space of strings. Each node represents a character, and paths from root to node represent string prefixes.",
    whyExists: "Searching for a word of length L in a hash map takes O(L) on average, but could degrade. More importantly, hash maps cannot find words sharing common prefixes. Tries resolve prefix searches in O(L) time.",
    intuition: "Think of looking up a word in a paper dictionary. You skip to the first letter, then trace down matching characters. You don't read every word in the book.",
    visualization: `
Trie structure for keys ["cat", "cap", "do"]:
        [Root]
       /      \\
     (c)      (d)
     /         \\
   (a)         (o)* <- End of word
   /   \\
 (t)*  (p)* <- End of word
    `,
    complexity: "| Operation | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| **Insert** | O(L) | O(AL * L) | L = word length, AL = alphabet size |\n| **Search** | O(L) | O(1) | Fast character chain checks |\n| **Prefix Check** | O(L) | O(1) | Instant lookup without scanning ends |\n| **Space Overhead** | - | O(N * AL) | Nodes allocate children pointers |",
    realWorldApps: [
      "Search Auto-completers: Finding matching words as user types keys.",
      "IP Routing Tables: Finding the longest matching prefix for network routing packets."
    ],
    commonPatterns: [
      { name: "Character Array Children", description: "Using size 26 index arrays to map character ASCII values ('a' -> index 0) for O(1) link jumps." }
    ],
    interviewDiscussion: [
      {
        question: "Explain the space-time tradeoff of a Trie compared to a Hash Table.",
        answer: "A Trie resolves prefix queries (e.g. finding all words starting with 'dev') which hash tables cannot do. However, Tries require more memory because each node allocates pointers for potential children (e.g., 26 pointers in English), which can be sparse."
      }
    ],
    commonMistakes: [
      "Forgetting to set the `isEndOfWord` flag when inserting nodes.",
      "Allocating memory recursively without deleting unused branch nodes (memory leak)."
    ],
    relatedProblems: [
      { name: "Implement Trie", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Trees", slug: "trees" },
      { name: "Strings", slug: "strings" }
    ]
  },
  "binary-search": {
    slug: "binary-search",
    name: "Binary Search",
    overview: "Binary Search is a divide-and-conquer search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element and halves the search space recursively.",
    whyExists: "Scanning N elements sequentially takes linear O(N) time. Binary search leverages sorted properties to find elements in logarithmic O(log N) time, making it scale to billions of items.",
    intuition: "Think of finding page 300 in a book. You split the book in the middle and see page 200. Since 300 is larger, you ignore the first half of the book and repeat the process on the second half.",
    visualization: `
Sorted Array Binary Search:
[ 10 | 20 | 30 | 40 | 50 | 60 | 70 ]  Target = 60
  L              M              R     Mid = 40 (60 > 40, shift L to M + 1)
                 L    M    R          Mid = 60 (Found!)
    `,
    complexity: "| Operation | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| **Search Loop** | O(log N) | O(1) | Highly optimized constant space |\n| **Recursive Search**| O(log N) | O(log N) | Call stack scales with tree depth |",
    realWorldApps: [
      "Git Bisect: Logarithmic checks to find the commit that introduced a bug.",
      "Database Indexes: Binary search lookups inside sorted pages."
    ],
    commonPatterns: [
      { name: "Binary Search on Answer Space", description: "Finding the minimum or maximum threshold that satisfies a condition where options are monotonic (e.g. shipping capacity)." }
    ],
    interviewDiscussion: [
      {
        question: "Why does mid = (left + right) / 2 fail in some environments, and how do we fix it?",
        answer: "If left and right are very large numbers, adding them can exceed the integer storage limit, causing overflow. We fix this by writing: `mid = left + Math.floor((right - left) / 2)`."
      }
    ],
    commonMistakes: [
      "Running on unsorted arrays (binary search requires sorted arrays).",
      "Off-by-one errors in loop boundaries (e.g. writing `left < right` instead of `left <= right`)."
    ],
    relatedProblems: [
      { name: "Binary Search", difficulty: "Easy" },
      { name: "Search in Rotated Sorted Array", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Complexity Analysis", slug: "complexity-analysis" },
      { name: "Arrays", slug: "arrays" }
    ]
  },
  "greedy": {
    slug: "greedy",
    name: "Greedy",
    overview: "A Greedy algorithm is an algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a global optimum.",
    whyExists: "Many optimization problems (like Dijkstra's shortest path or Huffman coding) are complex. Greedy algorithms bypass multi-step DP calculations, executing simple, fast logic.",
    intuition: "Think of counting change. If you want to give 36 cents in change, you pick the largest coin possible first (a quarter, 25c), leaving 11c. Then a dime (10c), leaving 1c. Finally a penny (1c). You choose the largest step at each moment.",
    visualization: `
Greedy Local Choice vs Global Path:
        [Start]
       /   10   \\
     (5)        (2) <- Greedy picks 2 (smallest step)
    /   \\      /   \\
  (99)  (2)  (50)  (10) <- Path 2 -> 50 yields sum 52.
                          Path 5 -> 99 yields sum 104.
                          Greedy choice fails to yield absolute max!
    `,
    complexity: "| Algorithm | Time Complexity | Space Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| **Choice Processing**| O(N log N) | O(1) | Sorting is typically the bottleneck |\n| **Greedy Loop** | O(N) | O(1) | Single pass calculations |",
    realWorldApps: [
      "Huffman Coding: Text compression encoding characters based on frequency.",
      "Minimum Spanning Trees: Kruskal/Prim algorithms connecting power networks."
    ],
    commonPatterns: [
      { name: "Sorting Preprocess", description: "Sorting intervals or values first to make decisions sequentially." }
    ],
    interviewDiscussion: [
      {
        question: "How do you prove that a greedy algorithm is correct?",
        answer: "Greedy correctness is typically proven using induction or exchange arguments (showing that replacing any choice in the optimal solution with the greedy choice does not degrade the result)."
      }
    ],
    commonMistakes: [
      "Using greedy on NP-hard problems (like Knapsack) where local choices yield sub-optimal results.",
      "Forgetting to verify counterexamples where greedy splits fail."
    ],
    relatedProblems: [
      { name: "Jump Game", difficulty: "Medium" }
    ],
    relatedTopics: [
      { name: "Complexity Analysis", slug: "complexity-analysis" },
      { name: "Dynamic Programming", slug: "dynamic-programming" }
    ]
  },
  "bit-manipulation": {
    slug: "bit-manipulation",
    name: "Bit Manipulation",
    overview: "Bit Manipulation is the process of applying bitwise operations (AND, OR, XOR, NOT, shifts) directly on binary numbers at the bit level.",
    whyExists: "Under the hood, computers store data as binary bits. Bitwise operations execute directly on CPU registers, bypassing standard mathematical units for speed.",
    intuition: "Think of light switches. Each switch represents 1 (on) or 0 (off). Bitwise operations let you flip, mask, or read configurations of multiple switches in a single clock cycle.",
    visualization: `
Bitwise XOR (A ^ B) logic:
  A: 0 1 0 1 (5)
  B: 0 0 1 1 (3)
  --------------
XOR: 0 1 1 0 (6) (Different bits yield 1, same bits yield 0)
    `,
    complexity: "| Operator | Meaning | CPU Cycles | Notes |\n| :--- | :---: | :---: | :--- |\n| **& (AND)** | Yields 1 if both are 1 | 1 cycle | Used to mask bits |\n| **\\| (OR)** | Yields 1 if any is 1 | 1 cycle | Used to set bits |\n| **^ (XOR)** | Yields 1 if bits differ | 1 cycle | XOR with self is 0 |\n| **<< / >>** | Shift bits left/right | 1 cycle | Multiply/divide by 2 |",
    realWorldApps: [
      "Cryptographic Hashes: Scrambling data states using XOR registers.",
      "Graphics Buffers: Combining color pixels via bit masks."
    ],
    commonPatterns: [
      { name: "XOR Cancellation", description: "Leveraging A ^ A = 0 and A ^ 0 = A properties to cancel duplicate numbers." },
      { name: "Bit Masking", description: "Using `1 << i` to check, set, or clear the ith bit of a number." }
    ],
    interviewDiscussion: [
      {
        question: "How do you check if a number is a power of two in constant time?",
        answer: "A power of two in binary has exactly one bit set to 1 (e.g. 8 is 1000). Subtracting 1 flips all bits (7 is 0111). Doing `(n & (n - 1)) === 0` will yield 0 if the number is a power of two."
      }
    ],
    commonMistakes: [
      "Confusing logical operators (&&, ||) with bitwise operators (&, |).",
      "Off-by-one errors when shifting bits beyond bit limits."
    ],
    relatedProblems: [
      { name: "Single Number", difficulty: "Easy" }
    ],
    relatedTopics: [
      { name: "Complexity Analysis", slug: "complexity-analysis" },
      { name: "Hash Tables", slug: "hash-tables" }
    ]
  }
};
