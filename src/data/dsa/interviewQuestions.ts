export interface DsaInterviewQuestion {
  id: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  answer: string;
  faangDiscussion: string;
  commonMistakes: string[];
  followUps: string[];
  relatedProblems: string[];
}

export const dsaInterviewQuestions: DsaInterviewQuestion[] = [
  // ==========================================
  // 1. Arrays and Hashing (7 Questions)
  // ==========================================
  {
    id: "array-hashmap-lookup",
    category: "Arrays and Hashing",
    difficulty: "Easy",
    question: "Why does a HashMap lookup run in O(1) average time, and when can it degrade to O(N)?",
    answer: "A HashMap calculates the hash code of a key and maps it to a bucket index. In the average case, keys are evenly distributed, leading to O(1) lookup. However, if many keys hash to the same bucket (collision), lookups search a linked list or red-black tree, degrading to O(N) or O(log N).",
    faangDiscussion: "Explain load factors and hash code collisions during design checks. Discuss how Java 8+ HashMap converts linked lists to trees when bucket size >= 8.",
    commonMistakes: [
      "Using mutable keys without overriding hashCode and equals.",
      "Assuming lookups are always guaranteed O(1)."
    ],
    followUps: [
      "How does hash map capacity scaling work under high load factors?",
      "How would you design a thread-safe map without locking the entire structure?"
    ],
    relatedProblems: ["two-sum", "contains-duplicate"]
  },
  {
    id: "array-vs-linkedlist-cache",
    category: "Arrays and Hashing",
    difficulty: "Easy",
    question: "How does CPU cache memory access patterns make Arrays faster than Linked Lists for sequential scans?",
    answer: "Arrays store elements in contiguous memory slots, which leverages spatial locality. When a CPU loads an array element, it pre-fetches neighboring elements into cache line memory. Linked lists store nodes at random heap addresses, causing frequent cache misses on lookups.",
    faangDiscussion: "Highlight mechanical sympathy and hardware cache hierarchies in high-frequency trading system designs.",
    commonMistakes: [
      "Measuring only big-O asymptotic limits while ignoring cache spatial locality in real benchmarks."
    ],
    followUps: [
      "How do unmanaged languages handle custom arena Allocators to emulate cache locality?"
    ],
    relatedProblems: ["reverse-linked-list"]
  },
  {
    id: "array-amortized-resizing",
    category: "Arrays and Hashing",
    difficulty: "Medium",
    question: "Explain the amortized O(1) complexity of inserting items into a dynamic array (e.g. ArrayList).",
    answer: "When a dynamic array reaches capacity, it allocates a new array of double the size and copies all existing elements over, taking O(N) time. However, doubling capacity happens exponentially rarely (after N steps). The average cost across N insertions remains O(1) per insert.",
    faangDiscussion: "Discuss why doubling (growth factor = 2 or 1.5) is chosen over adding a constant capacity.",
    commonMistakes: [
      "Thinking dynamic array insertion is always O(1) worst-case."
    ],
    followUps: [
      "What is the mathematical proof of the amortized bounds using the potential method?"
    ],
    relatedProblems: ["rotate-array"]
  },
  {
    id: "hash-collisions-resolution",
    category: "Arrays and Hashing",
    difficulty: "Medium",
    question: "Compare Chaining versus Open Addressing collision resolution strategies in hash tables.",
    answer: "Chaining resolves collisions by storing multiple entries in a linked list or tree per bucket. Open Addressing searches for the next empty bucket using linear probing, quadratic probing, or double hashing.",
    faangDiscussion: "Discuss memory overhead: Chaining uses extra node pointers; Open Addressing requires large contiguous buffers.",
    commonMistakes: [
      "Forgetting that linear probing leads to clustering issues."
    ],
    followUps: [
      "What is primary and secondary clustering?"
    ],
    relatedProblems: ["two-sum"]
  },
  {
    id: "top-k-frequent-hash",
    category: "Arrays and Hashing",
    difficulty: "Medium",
    question: "Why is a HashMap combined with a Min-Heap preferred over sorting for finding Top K elements?",
    answer: "Using a map to count frequencies takes O(N). Inserting into a Min-Heap of size K takes O(N log K). Sorting the entire collection takes O(N log N). When K << N, the heap approach is significantly faster.",
    faangDiscussion: "Discuss stream processing of large datasets where sorting is impossible in memory.",
    commonMistakes: [
      "Using a Max-Heap instead of a Min-Heap, which takes O(N log N) space."
    ],
    followUps: [
      "Can we solve Top K Frequent elements in linear O(N) average time?"
    ],
    relatedProblems: ["top-k-frequent-elements"]
  },
  {
    id: "hash-set-implementation",
    category: "Arrays and Hashing",
    difficulty: "Easy",
    question: "How is a HashSet typically implemented internally under the hood?",
    answer: "A HashSet is usually a wrapper around a HashMap, where the elements are stored as keys in the map, and a dummy constant object (like PRESENT) is used as the associated map value.",
    faangDiscussion: "Explain memory overhead of Set wrappers compared to bitsets.",
    commonMistakes: [
      "Assuming HashSets consume less memory than HashMaps."
    ],
    followUps: [
      "How does a BitSet optimize storage for integer sets?"
    ],
    relatedProblems: ["contains-duplicate"]
  },
  {
    id: "subarray-sum-equals-k",
    category: "Arrays and Hashing",
    difficulty: "Hard",
    question: "How does prefix sum matching optimize subarray searches from O(N^2) to O(N)?",
    answer: "By keeping track of the running prefix sum and checking if (running_sum - target) exists in a hashmap of past sums, we locate contiguous target segments in a single linear pass.",
    faangDiscussion: "Discuss how we handle duplicate keys in the map by incrementing occurrence values.",
    commonMistakes: [
      "Forgetting to pre-populate map with {0: 1} for target sum alignments."
    ],
    followUps: [
      "What if the array elements are only positive integers? Can we do O(1) space?"
    ],
    relatedProblems: ["subarray-product-less-than-k"]
  },

  // ==========================================
  // 2. Two Pointers (7 Questions)
  // ==========================================
  {
    id: "two-pointers-inward-vs-speed",
    category: "Two Pointers",
    difficulty: "Easy",
    question: "Compare inward-moving pointers to fast/slow pointer speed variations.",
    answer: "Inward pointers start at left and right boundaries and move towards each other, typically used to search matching bounds in sorted arrays. Fast/slow pointers move at different speeds (usually 2x and 1x) in the same direction, typically used to find cycles or midpoints in linked structures.",
    faangDiscussion: "Explain pointer initialization boundary checks and index validation rules.",
    commonMistakes: [
      "Using inward pointers on unsorted arrays without sorting first."
    ],
    followUps: [
      "When does sorting + inward pointers beat map lookups?"
    ],
    relatedProblems: ["two-sum-ii-input-array-is-sorted", "linked-list-cycle"]
  },
  {
    id: "two-pointers-3sum-reduction",
    category: "Two Pointers",
    difficulty: "Medium",
    question: "How does sorting reduce the complexity of the 3Sum problem from O(N^3) to O(N^2)?",
    answer: "We sort the array, fix one element `i`, and use two pointers (left and right) on the remaining suffix to find pairs that sum to `-nums[i]`. Sorting eliminates the third loop.",
    faangDiscussion: "Discuss duplicate skipping rules inside the loops to prevent duplicate triplets.",
    commonMistakes: [
      "Forgetting to skip duplicate indices for `i`, `left`, or `right`."
    ],
    followUps: [
      "Can we solve 3Sum without sorting using a hashset?"
    ],
    relatedProblems: ["squares-of-a-sorted-array"]
  },
  {
    id: "two-pointers-container-water",
    category: "Two Pointers",
    difficulty: "Medium",
    question: "Explain the greedy choice of moving the pointer pointing to the shorter bar in Container With Most Water.",
    answer: "The area is limited by the shorter bar. Moving the pointer pointing to the longer bar cannot increase the area (width decreases, and bottleneck height can only remain the same or decrease). Moving the shorter bar pointer is the only way to possibly find a taller boundary.",
    faangDiscussion: "Prove correctness using induction/contradiction in standard interviews.",
    commonMistakes: [
      "Moving the taller pointer or moving both pointers simultaneously."
    ],
    followUps: [
      "Can we solve a similar problem with 3D grids?"
    ],
    relatedProblems: ["best-time-to-buy-and-sell-stock"]
  },
  {
    id: "two-pointers-cycle-nodes",
    category: "Two Pointers",
    difficulty: "Medium",
    question: "How do you mathematically prove that Fast and Slow pointers will always meet if a Linked List cycle exists?",
    answer: "Let the cycle length be C. Each step, Fast closes the distance to Slow by 1 cell. If the initial distance inside the cycle is D, it will take exactly D steps for Fast to catch Slow. The overlap is guaranteed to happen in O(N) steps.",
    faangDiscussion: "Explain Floyd's cycle detection and how to find the cycle start node.",
    commonMistakes: [
      "Incrementing fast pointer without checking fast.next boundary limits."
    ],
    followUps: [
      "How do we find the length of the cycle after they meet?"
    ],
    relatedProblems: ["linked-list-cycle-ii"]
  },
  {
    id: "two-pointers-merge-intervals",
    category: "Two Pointers",
    difficulty: "Medium",
    question: "How are pointers used to merge overlapping intervals in O(N log N) time?",
    answer: "Sort intervals by start times. We maintain a pointer/index representing the last merged interval. If the current interval overlaps the last merged one, merge them by updating the end boundary. Otherwise, push it as a new interval.",
    faangDiscussion: "Highlight boundary conditions: equal boundaries and zero-length intervals.",
    commonMistakes: [
      "Forgetting to sort intervals before applying merge checks."
    ],
    followUps: [
      "How does this change if we have to insert an interval into a pre-sorted list?"
    ],
    relatedProblems: ["backspace-string-compare"]
  },
  {
    id: "two-pointers-remove-duplicates",
    category: "Two Pointers",
    difficulty: "Easy",
    question: "Explain the read-pointer and write-pointer roles in Remove Duplicates from Sorted Array.",
    answer: "The write-pointer tracks the boundary of the unique subarray, while the read-pointer scans ahead. When a new unique element is found, it is copied to the write-pointer position, and the write-pointer is incremented.",
    faangDiscussion: "Emphasize writing in-place modifications without allocating extra garbage collection heap space.",
    commonMistakes: [
      "Returning index sizes off-by-one."
    ],
    followUps: [
      "What if duplicates can appear at most twice?"
    ],
    relatedProblems: ["two-sum-ii-input-array-is-sorted"]
  },
  {
    id: "two-pointers-partition-colors",
    category: "Two Pointers",
    difficulty: "Medium",
    question: "Explain the Dutch National Flag 3-pointer partition mechanism used in Sort Colors.",
    answer: "We use three pointers: low, mid, and high. `low` tracks the right boundary of 0s, `high` tracks the left boundary of 2s, and `mid` scans the array. Swap 0s to low, 2s to high, and increment mid on matches.",
    faangDiscussion: "Explain why we do not increment mid when swapping with high.",
    commonMistakes: [
      "Incorrectly incrementing mid after swapping with high (element swapped from high is unexamined)."
    ],
    followUps: [
      "How would you generalize this to partition 4 distinct colors?"
    ],
    relatedProblems: ["sort-colors"]
  },

  // ==========================================
  // 3. Sliding Window (7 Questions)
  // ==========================================
  {
    id: "sliding-window-fixed-vs-dynamic",
    category: "Sliding Window",
    difficulty: "Easy",
    question: "What is the key difference between fixed-size and variable-size sliding windows?",
    answer: "A fixed window maintains a constant width and shifts both pointers at the same rate. A variable window expands the right pointer to find valid solutions and shrinks the left pointer to optimize width or satisfy limits.",
    faangDiscussion: "Discuss optimization checks for sub-array window ranges.",
    commonMistakes: [
      "Using wrong while-loop shrink criteria in dynamic windows."
    ],
    followUps: [
      "How does dynamic sliding window apply to TCP network congestion controls?"
    ],
    relatedProblems: ["longest-substring-without-repeating-characters"]
  },
  {
    id: "sliding-window-frequency-map",
    category: "Sliding Window",
    difficulty: "Medium",
    question: "Why does Minimum Window Substring require a character frequency map, and how do we check match status in O(1)?",
    answer: "We store the target string character counts in a map. As we expand the window, we update another map. By keeping a 'matched characters' count variable, we avoid scanning the entire map on each pointer shift.",
    faangDiscussion: "Discuss code optimization by using an integer array map of size 128 instead of a standard HashMap wrapper.",
    commonMistakes: [
      "Repeatedly scanning hash maps inside window loops, causing O(N * M) instead of O(N)."
    ],
    followUps: [
      "How would you optimize this if target alphabet size is extremely small?"
    ],
    relatedProblems: ["minimum-window-substring"]
  },
  {
    id: "sliding-window-max-sliding",
    category: "Sliding Window",
    difficulty: "Hard",
    question: "How does a Monotonic Deque help find the maximum of all sliding windows in O(N) time?",
    answer: "The deque stores indices of elements in decreasing order of values. Before pushing index `i`, we pop all indices with smaller values from the back. The front of the deque always points to the max element of the current window.",
    faangDiscussion: "Explain why index insertions and evictions are amortized constant time.",
    commonMistakes: [
      "Storing elements instead of indices in the deque, making it hard to check if the front element fell out of window bounds."
    ],
    followUps: [
      "Can we achieve the same complexity using two stacks?"
    ],
    relatedProblems: ["sliding-window-maximum"]
  },
  {
    id: "sliding-window-longest-repeating",
    category: "Sliding Window",
    difficulty: "Medium",
    question: "Why do we track maxFrequency in Longest Repeating Character Replacement, and does it need to decrease on shrink?",
    answer: "The maxFrequency tracks the count of the most frequent character in the current window. We do not need to decrease it on shrink because a valid window larger than our best answer can only occur if maxFrequency increases.",
    faangDiscussion: "Prove this optimization. Many candidates struggle to explain why maxFrequency is monotonically non-decreasing in tracking loops.",
    commonMistakes: [
      "Attempting to decrease maxFrequency on left pointer shrink, which runs expensive maps searches."
    ],
    followUps: [
      "What is the complexity if alphabet size grows?"
    ],
    relatedProblems: ["longest-substring-without-repeating-characters"]
  },
  {
    id: "sliding-window-anagrams",
    category: "Sliding Window",
    difficulty: "Medium",
    question: "How do we find all anagrams of a string using a fixed sliding window?",
    answer: "A window of fixed length `p.length` is slid across `s`. We maintain a frequency array of size 26. When a new character enters right, increment count. When a character leaves left, decrement. If counts match target, add index.",
    faangDiscussion: "Discuss hash equality optimizations for array arrays comparison.",
    commonMistakes: [
      "Re-initializing the frequency map inside loop frames."
    ],
    followUps: [
      "How would you optimize if the pattern contains multiple wildcards?"
    ],
    relatedProblems: ["longest-substring-without-repeating-characters"]
  },
  {
    id: "sliding-window-min-subarray-sum",
    category: "Sliding Window",
    difficulty: "Medium",
    question: "Explain why the dynamic sliding window works for Minimum Size Subarray Sum but not if there are negative numbers.",
    answer: "With only positive numbers, adding elements increases the sum, and removing decreases it (monotonic). With negative numbers, this relationship is violated (shrinking the window can actually increase the sum), so sliding window fails.",
    faangDiscussion: "Discuss how negative array values force us to use dynamic programming or prefix sum maps instead.",
    commonMistakes: [
      "Applying sliding window to arrays containing negative integers."
    ],
    followUps: [
      "How do we solve this if array has negative numbers?"
    ],
    relatedProblems: ["subarray-product-less-than-k"]
  },
  {
    id: "sliding-window-permutation",
    category: "Sliding Window",
    difficulty: "Medium",
    question: "Explain the execution transition of Permutation in String.",
    answer: "Similar to finding anagrams, we slide a window of size `s1.length` across `s2` and verify if the character frequency count match. Since order does not matter, any frequency alignment represents a valid permutation.",
    faangDiscussion: "Analyze space bounds: frequency table requires O(1) auxiliary space (size 26).",
    commonMistakes: [
      "Incorrectly indexing characters (e.g. charCode offsets)."
    ],
    followUps: [
      "Can we optimize map comparisons by tracking a single matchCount variable?"
    ],
    relatedProblems: ["longest-substring-without-repeating-characters"]
  },

  // ==========================================
  // 4. Binary Search (7 Questions)
  // ==========================================
  {
    id: "binary-search-overflow",
    category: "Binary Search",
    difficulty: "Easy",
    question: "Why is mid calculated as left + (right - left) / 2 instead of (left + right) / 2?",
    answer: "In languages with bounded integer types (like Java, C++), (left + right) can exceed the maximum integer capacity and overflow, yielding negative results. The subtraction method avoids overflow by operating on differences.",
    faangDiscussion: "Highlight standard compiler bugs (e.g., the historical Java SDK binary search bug).",
    commonMistakes: [
      "Forgetting floor truncation when using Javascript: Math.floor((left + right) / 2) is needed since JS numbers are doubles."
    ],
    followUps: [
      "How does unsigned right shift `(left + right) >>> 1` solve this?"
    ],
    relatedProblems: ["binary-search"]
  },
  {
    id: "binary-search-rotated",
    category: "Binary Search",
    difficulty: "Medium",
    question: "Explain how we find an element in a sorted rotated array in O(log N) time.",
    answer: "In any rotation, at least one half of the array (left to mid, or mid to right) is guaranteed to be sorted. We check which half is sorted, and then verify if the target falls within that sorted range to discard the other half.",
    faangDiscussion: "Discuss duplicate values: if `nums[left] === nums[mid] === nums[right]`, we cannot tell which half is sorted, degrading worst-case to O(N).",
    commonMistakes: [
      "Failing to handle boundary comparisons correctly (using `<` instead of `<=`)."
    ],
    followUps: [
      "How do we find the minimum element in a rotated array?"
    ],
    relatedProblems: ["search-in-rotated-sorted-array", "find-minimum-in-rotated-sorted-array"]
  },
  {
    id: "binary-search-on-answer",
    category: "Binary Search",
    difficulty: "Hard",
    question: "What does 'Binary Search on Answer Space' mean, and what is the monotonicity requirement?",
    answer: "It applies binary search to a range of potential outputs rather than array indices. If the feasibility function `isValid(x)` is monotonic (e.g. if size x works, all sizes > x work), we search the boundary range of outputs in O(log(Max - Min) * N).",
    faangDiscussion: "Give examples like Koko Eating Bananas or Book Allocation problems.",
    commonMistakes: [
      "Setting incorrect search bounds (e.g., setting right boundary too small)."
    ],
    followUps: [
      "How does precision scale when binary searching on floating point answer spaces?"
    ],
    relatedProblems: ["koko-eating-bananas"]
  },
  {
    id: "binary-search-first-last",
    category: "Binary Search",
    difficulty: "Medium",
    question: "How do we locate the first and last position of an element in a sorted array containing duplicates?",
    answer: "Run two separate binary searches. To find the first occurrence, when `nums[mid] === target`, record mid and keep searching left (`right = mid - 1`). To find the last occurrence, keep searching right (`left = mid + 1`).",
    faangDiscussion: "Discuss lower_bound and upper_bound implementations in standard libraries.",
    commonMistakes: [
      "Exiting the search loop immediately when target is first encountered."
    ],
    followUps: [
      "Can we express last_position as first_position of (target + 1) - 1?"
    ],
    relatedProblems: ["find-first-and-last-position-of-element-in-sorted-array"]
  },
  {
    id: "binary-search-2d-matrix",
    category: "Binary Search",
    difficulty: "Medium",
    question: "How do we treat a 2D matrix as a sorted 1D array to search it in O(log(M * N))?",
    answer: "If rows are sorted sequentially, we binary search indices from `0` to `M*N - 1`. We map a virtual index `mid` to matrix indices using `row = Math.floor(mid / N)` and `col = mid % N`.",
    faangDiscussion: "Contrast this with search patterns on matrices sorted by column and row independently (which take O(M + N)).",
    commonMistakes: [
      "Confusing matrix dimensions: using row size M instead of col size N in modulo divisions."
    ],
    followUps: [
      "How does search work if only individual rows and columns are sorted?"
    ],
    relatedProblems: ["search-a-2d-matrix"]
  },
  {
    id: "binary-search-peak-element",
    category: "Binary Search",
    difficulty: "Medium",
    question: "Why can we use binary search to find a peak element in an unsorted array?",
    answer: "By comparing `nums[mid]` with its neighbor `nums[mid + 1]`, we identify slopes. If `nums[mid] < nums[mid + 1]`, a peak is guaranteed to exist in the right half because the array climbs. Otherwise, a peak must exist in the left half.",
    faangDiscussion: "Prove using boundary condition limits: boundaries are treated as negative infinity.",
    commonMistakes: [
      "Accessing indices mid - 1 or mid + 1 out of array boundaries."
    ],
    followUps: [
      "How do we find a peak in a 2D grid matrix?"
    ],
    relatedProblems: ["binary-search"]
  },
  {
    id: "binary-search-median-two-arrays",
    category: "Binary Search",
    difficulty: "Hard",
    question: "Explain the partition strategy used to find the median of two sorted arrays in O(log(min(M, N))).",
    answer: "We binary search partition sizes in the smaller array. By partitioning both arrays such that the left halves have equal sizes, we check if the max left elements are <= min right elements. If so, we resolve median from boundary elements.",
    faangDiscussion: "This is one of the most feared FAANG questions. Focus on resolving indices adjustments and odd/even lengths.",
    commonMistakes: [
      "Not binary searching on the smaller array, leading to index out-of-bound errors on the larger one."
    ],
    followUps: [
      "How does this scale to K sorted arrays?"
    ],
    relatedProblems: ["median-of-two-sorted-arrays"]
  },

  // ==========================================
  // 5. Linked List (7 Questions)
  // ==========================================
  {
    id: "linked-list-dummy-node",
    category: "Linked List",
    difficulty: "Easy",
    question: "Why do we use a Dummy Node in Linked List deletions or merges?",
    answer: "A dummy node simplifies edge cases where the head node is deleted, replaced, or merged. It provides a fixed parent node reference, eliminating conditional branches to check if the head pointer is null.",
    faangDiscussion: "Discuss cleaner pointer manipulation and memory leaks (deallocating dummy nodes in C++).",
    commonMistakes: [
      "Forgetting to return dummy.next, and returning dummy itself instead."
    ],
    followUps: [
      "How do dummy nodes impact space complexity?"
    ],
    relatedProblems: ["merge-two-sorted-lists", "remove-nth-node-from-end-of-list"]
  },
  {
    id: "linked-list-pointer-reversal",
    category: "Linked List",
    difficulty: "Easy",
    question: "Explain in-place pointer reversal in a Singly Linked List.",
    answer: "We iterate through the list using three pointers: curr, prev, and next. In each step, we record `next = curr.next`, point `curr.next` back to `prev`, shift `prev = curr`, and advance `curr = next`.",
    faangDiscussion: "Explain how to reverse sub-segments of a linked list (e.g. Reverse nodes in K-Group).",
    commonMistakes: [
      "Losing reference to the rest of the list by reversing pointers before saving `curr.next`."
    ],
    followUps: [
      "How do you write this recursively?"
    ],
    relatedProblems: ["reverse-linked-list"]
  },
  {
    id: "linked-list-nth-end",
    category: "Linked List",
    difficulty: "Medium",
    question: "How do you find and remove the Nth node from the end of a Linked List in a single pass?",
    answer: "Use two pointers, fast and slow. Advance fast by N steps first. Then move both fast and slow concurrently. When fast reaches the end, slow will be positioned immediately before the N-th node from the end.",
    faangDiscussion: "Highlight safety checks: what if N is equal to the length of the list (removing the head)?",
    commonMistakes: [
      "Null pointer crashes when list length is smaller than N."
    ],
    followUps: [
      "How do we solve this if list is doubly linked?"
    ],
    relatedProblems: ["remove-nth-node-from-end-of-list"]
  },
  {
    id: "linked-list-copy-random",
    category: "Linked List",
    difficulty: "Hard",
    question: "How do you copy a Linked List containing random pointer links in O(N) time and O(1) auxiliary space?",
    answer: "Instead of a hashmap, insert copy nodes directly adjacent to original nodes (e.g. A -> A' -> B -> B'). Set `A'.random = A.random.next`. Finally, decouple the list into original and copy lists.",
    faangDiscussion: "This is a classic question. Contrast hashmap solution O(N) space vs pointer interleaving O(1) auxiliary space.",
    commonMistakes: [
      "Breaking original pointer links during decoupling steps."
    ],
    followUps: [
      "Can we copy graphs with random links in O(1) space?"
    ],
    relatedProblems: ["copy-list-with-random-pointer"]
  },
  {
    id: "linked-list-cycle-detection-start",
    category: "Linked List",
    difficulty: "Medium",
    question: "Why does resetting one pointer to head and moving both at equal speed find the cycle start node after collision?",
    answer: "Let distance from head to cycle start be X, and cycle collision node be Y. The fast pointer covers 2 * slow distance. Solving equations proves that distance X is equal to distance from collision node back to cycle start node modulo cycle size.",
    faangDiscussion: "Explain Floyd's cycle detection math logic.",
    commonMistakes: [
      "Assuming they meet at the cycle start node on the first slow/fast collision."
    ],
    followUps: [
      "What if list has multiple cycles?"
    ],
    relatedProblems: ["linked-list-cycle-ii"]
  },
  {
    id: "linked-list-reorder",
    category: "Linked List",
    difficulty: "Medium",
    question: "How do you reorder a list (L0 -> Ln -> L1 -> Ln-1) in O(N) time and O(1) space?",
    answer: "Split the list in half using slow/fast pointers. Reverse the second half. Concurrently merge the two halves by alternating node links.",
    faangDiscussion: "Analyze intermediate state pointers. Forgetting to decouple lists tails leads to infinite loops.",
    commonMistakes: [
      "Not nulling out the tail of the first list half, causing cyclic links."
    ],
    followUps: [
      "How do we handle odd vs even number of elements?"
    ],
    relatedProblems: ["reorder-list"]
  },
  {
    id: "linked-list-lru-cache-dll",
    category: "Linked List",
    difficulty: "Medium",
    question: "Why does LRU Cache require a Doubly Linked List instead of Singly Linked List?",
    answer: "An LRU Cache eviction or lookup promote step requires detaching a node in O(1). In a singly linked list, detaching requires scanning to find the parent node, taking O(N). A doubly linked list has `prev` pointers, allowing O(1) detach.",
    faangDiscussion: "This is standard system design check. Combine hash map (O(1) lookups) with DLL (O(1) updates).",
    commonMistakes: [
      "Losing tail references during evictions."
    ],
    followUps: [
      "How do you implement this in a thread-safe manner?"
    ],
    relatedProblems: ["intersection-of-two-linked-lists"]
  },

  // ==========================================
  // 6. Stack and Queue (7 Questions)
  // ==========================================
  {
    id: "stack-vs-queue-ops",
    category: "Stack and Queue",
    difficulty: "Easy",
    question: "Compare Stack (LIFO) and Queue (FIFO) operations and memory allocations.",
    answer: "Stacks insert and remove from the same end (Last-In, First-Out). Queues insert at the back and remove from the front (First-In, First-Out). Stacks map to recursive frame allocations; Queues model scheduling buffers.",
    faangDiscussion: "Discuss call stacks recursion depth limits vs queue memory overflows.",
    commonMistakes: [
      "Using stacks when FIFO sequencing is required."
    ],
    followUps: [
      "How do double-ended queues (Deques) extend both structures?"
    ],
    relatedProblems: ["valid-parentheses", "queue-using-stacks"]
  },
  {
    id: "stack-queue-using-stacks",
    category: "Stack and Queue",
    difficulty: "Medium",
    question: "How do you implement a Queue using two Stacks, and what is the amortized cost of operations?",
    answer: "We use an input stack and output stack. Push operations add to input stack. For pop, if output stack is empty, flush all elements from input to output (reversing order to FIFO). Amortized cost of pop is O(1) because elements are moved at most once.",
    faangDiscussion: "Explain amortized analysis checks during interviews.",
    commonMistakes: [
      "Moving elements between stacks on every pop, creating O(N) operations."
    ],
    followUps: [
      "How do we write a stack using queues?"
    ],
    relatedProblems: ["queue-using-stacks", "implement-stack-using-queues"]
  },
  {
    id: "stack-monotonic-increasing",
    category: "Stack and Queue",
    difficulty: "Medium",
    question: "Explain how a monotonic stack processes Next Greater Element queries in O(N) time.",
    answer: "Iterate through elements. While stack is not empty and current element is greater than element at stack top index, pop and record current element as next greater. Push current index.",
    faangDiscussion: "Discuss stack indices vs array value pushes.",
    commonMistakes: [
      "Storing elements instead of indices when difference widths calculations are required."
    ],
    followUps: [
      "How does this apply to Daily Temperatures?"
    ],
    relatedProblems: ["daily-temperatures"]
  },
  {
    id: "stack-min-stack",
    category: "Stack and Queue",
    difficulty: "Easy",
    question: "How do you design a Min Stack that retrieves the minimum element in O(1) time?",
    answer: "Maintain a secondary stack (minStack). When pushing `x`, push min(x, minStack.top()) to minStack. When popping from stack, pop from minStack too. This tracks the minimum value at each stack depth frame.",
    faangDiscussion: "Discuss space optimization: only push to minStack when `x <= minStack.top()` to save stack allocations.",
    commonMistakes: [
      "Forgetting to compare values using `<=` instead of `<` when dealing with duplicates."
    ],
    followUps: [
      "Can we build a Min Stack with O(1) auxiliary space using value offsets?"
    ],
    relatedProblems: ["min-stack"]
  },
  {
    id: "stack-rpn-evaluator",
    category: "Stack and Queue",
    difficulty: "Medium",
    question: "Explain how a stack parses and evaluates Reverse Polish Notation (Postfix expressions).",
    answer: "Iterate tokens. If token is a number, push it. If token is an operator, pop two operands, evaluate the operator on them, and push the result back. The final stack top is the answer.",
    faangDiscussion: "Explain evaluation order: the first popped element is the right operand; the second popped is the left operand (crucial for division/subtraction).",
    commonMistakes: [
      "Inverting operand division orders (e.g. computing right / left instead of left / right)."
    ],
    followUps: [
      "How does Shunting-Yard algorithm convert Infix to Postfix?"
    ],
    relatedProblems: ["evaluate-reverse-polish-notation"]
  },
  {
    id: "queue-circular-buffer",
    category: "Stack and Queue",
    difficulty: "Medium",
    question: "How does a Circular Queue implement fixed-capacity ring buffers without moving elements on dequeue?",
    answer: "Maintain head and tail pointer indexes. Advance them using modular arithmetic: `head = (head + 1) % capacity`. This overwrites cleared cells, avoiding O(N) array shifts.",
    faangDiscussion: "Highlight concurrent queues design: how ring buffers are used in lock-free Disruptor patterns.",
    commonMistakes: [
      "Distinguishing queue empty vs queue full states when `head === tail` (requires count tracking or size offset)."
    ],
    followUps: [
      "How do atomic CAS instructions secure thread-safe circular writes?"
    ],
    relatedProblems: ["design-circular-queue"]
  },
  {
    id: "stack-largest-rectangle",
    category: "Stack and Queue",
    difficulty: "Hard",
    question: "Explain the stack transition logic in Largest Rectangle in Histogram.",
    answer: "We use a monotonic stack to track indices of increasing bar heights. When we see a bar shorter than stack top, we pop heights and calculate areas using the popped height and the distance to current index as width. This processes all candidate rectangles.",
    faangDiscussion: "Discuss boundary flushing: how pushing a virtual height of 0 at index `N` flushes remaining bars.",
    commonMistakes: [
      "Using height values instead of index values in the stack."
    ],
    followUps: [
      "How does this map to Maximal Rectangle in 2D binary grids?"
    ],
    relatedProblems: ["largest-rectangle-in-histogram"]
  },

  // ==========================================
  // 7. Trees (7 Questions)
  // ==========================================
  {
    id: "tree-bst-property",
    category: "Trees",
    difficulty: "Easy",
    question: "Explain the Binary Search Tree (BST) property and search runtime cost.",
    answer: "For every node `X`, all nodes in `X.left` have values < `X.val`, and all nodes in `X.right` have values > `X.val`. Search cost is O(log N) in balanced trees, but degrades to O(N) in skewed trees (degenerate list).",
    faangDiscussion: "Discuss balancing algorithms like AVL trees or Red-Black trees to maintain O(log N) limits.",
    commonMistakes: [
      "Assuming a tree is a BST just because parent node is greater than left child and smaller than right child (grandchild nodes must also satisfy constraints)."
    ],
    followUps: [
      "How does in-order traversal of a BST help list sorted elements?"
    ],
    relatedProblems: ["validate-binary-search-tree", "kth-smallest-element-in-bst"]
  },
  {
    id: "tree-traversals-recursion",
    category: "Trees",
    difficulty: "Easy",
    question: "Compare Pre-order, In-order, and Post-order DFS traversals.",
    answer: "Pre-order visits Root -> Left -> Right (used for copy trees). In-order visits Left -> Root -> Right (yields sorted BST order). Post-order visits Left -> Right -> Root (used for deletions and bottom-up calculations).",
    faangDiscussion: "Write iterative solutions using stack wrappers to mimic recursion limits.",
    commonMistakes: [
      "Incorrect stack sequencing in iterative post-order."
    ],
    followUps: [
      "Can we traverse trees in O(N) time and O(1) space using Morris Traversal?"
    ],
    relatedProblems: ["binary-tree-level-order-traversal"]
  },
  {
    id: "tree-lca-recursion",
    category: "Trees",
    difficulty: "Medium",
    question: "Explain the recursion logic of Lowest Common Ancestor (LCA) in a Binary Tree.",
    answer: "If root is null, or matches `p` or `q`, return root. Recursively search left and right. If left and right returns are both non-null, root is the LCA. Otherwise, return the non-null child search result.",
    faangDiscussion: "Analyze temporal complexity O(N) and recursion stack space costs.",
    commonMistakes: [
      "Returning parent nodes without propagating returned LCA pointers up the stack."
    ],
    followUps: [
      "How does this simplify in a Binary Search Tree?"
    ],
    relatedProblems: ["lowest-common-ancestor-of-a-binary-tree"]
  },
  {
    id: "tree-max-path-sum",
    category: "Trees",
    difficulty: "Hard",
    question: "How do you calculate the Maximum Path Sum in a Binary Tree where paths can start and end anywhere?",
    answer: "We run a post-order traversal. For each node, calculate the max branch sum of left and right children (ignoring negative sums by setting to 0). The max path passing *through* the current node is `node.val + leftMax + rightMax`. We track the global max of this sum while returning `node.val + max(leftMax, rightMax)` to the parent.",
    faangDiscussion: "Crucial trick: explain why we only return single branches to parent nodes (a path cannot split).",
    commonMistakes: [
      "Returning splitting path sums to parent nodes."
    ],
    followUps: [
      "What if nodes can have negative values? How does that change initialization?"
    ],
    relatedProblems: ["binary-tree-maximum-path-sum"]
  },
  {
    id: "tree-serialize-deserialize",
    category: "Trees",
    difficulty: "Hard",
    question: "How do you serialize and deserialize a binary tree using pre-order traversal?",
    answer: "Serialize: traverse pre-order. Append node value string to output, using sentinel marks (like '#') for null nodes. Deserialize: convert string to queue. Pop elements, recursively build left and right subtrees.",
    faangDiscussion: "Contrast pre-order serialization O(N) vs BFS level-order layouts.",
    commonMistakes: [
      "Not handling multi-digit integers or negative values during deserialization splits."
    ],
    followUps: [
      "Can we deserialize a tree without null placeholders if we are given preorder and inorder lists?"
    ],
    relatedProblems: ["serialize-and-deserialize-binary-tree"]
  },
  {
    id: "tree-construct-in-pre",
    category: "Trees",
    difficulty: "Medium",
    question: "How do preorder and inorder traversal lists reconstruct a unique binary tree?",
    answer: "The first element of preorder is the root. Locate this root in inorder. All elements to its left form the left subtree; all to its right form the right subtree. Recursively build child branches.",
    faangDiscussion: "Discuss hashing inorder indices to achieve O(N) overall construction time instead of O(N^2) scans.",
    commonMistakes: [
      "Passing sub-array slices in recursion, which increases memory overhead to O(N^2)."
    ],
    followUps: [
      "How do we do this with postorder and inorder lists?"
    ],
    relatedProblems: ["construct-binary-tree-from-preorder-and-inorder-traversal"]
  },
  {
    id: "tree-height-balance",
    category: "Trees",
    difficulty: "Easy",
    question: "How do you verify if a binary tree is height-balanced in O(N) time?",
    answer: "A tree is balanced if heights differences of left and right subtrees <= 1 at every node. In DFS, return height if balanced, otherwise return -1. If a child returns -1, propagate -1 immediately without checking further.",
    faangDiscussion: "This is standard recursive pruning. Prevents calculating node heights multiple times.",
    commonMistakes: [
      "Calculating heights at each node in separate O(N) calls, resulting in O(N^2) overall runtime."
    ],
    followUps: [
      "What is the height of a balanced tree with N nodes?"
    ],
    relatedProblems: ["maximum-depth-of-binary-tree"]
  },

  // ==========================================
  // 8. Graphs (7 Questions)
  // ==========================================
  {
    id: "graph-bfs-vs-dfs",
    category: "Graphs",
    difficulty: "Easy",
    question: "Compare BFS and DFS search patterns and queue/stack allocations.",
    answer: "BFS uses a Queue and visits nodes in concentric rings (unweighted shortest path). DFS uses a Stack (recursion) and explores paths fully before backtracking. BFS space is bottlenecked by max width (O(V)); DFS space is bottlenecked by max depth.",
    faangDiscussion: "Compare memory footprints on deep tree/graph structures vs wide trees.",
    commonMistakes: [
      "Using DFS to find shortest path on unweighted graph."
    ],
    followUps: [
      "How does Iterative Deepening DFS combine the benefits of both?"
    ],
    relatedProblems: ["number-of-islands", "clone-graph"]
  },
  {
    id: "graph-cycle-directed",
    category: "Graphs",
    difficulty: "Medium",
    question: "How do you detect a cycle in a Directed Graph versus an Undirected Graph?",
    answer: "In a directed graph, check for back-edges by tracking nodes currently in the active recursion stack (3-state coloring: unvisited, visiting, visited). In an undirected graph, checking if a visited neighbor is not the direct parent is sufficient.",
    faangDiscussion: "Explain topological sort cycle detections and Union-Find edge cycle traps.",
    commonMistakes: [
      "Using undirected parent-checks on directed graphs, which ignores path directions."
    ],
    followUps: [
      "Can we use topological sort (Kahn's) to detect cycles?"
    ],
    relatedProblems: ["course-schedule", "course-schedule-ii"]
  },
  {
    id: "graph-dijkstra-vs-bellman",
    category: "Graphs",
    difficulty: "Medium",
    question: "Compare Dijkstra's and Bellman-Ford algorithms for shortest paths.",
    answer: "Dijkstra relaxation uses a Min-Heap and greedily processes the closest node, running in O(E log V) time. Bellman-Ford relaxes all edges V-1 times in O(V * E) time, which is slower but handles negative edge weights and detects negative cycles.",
    faangDiscussion: "Explain why Dijkstra fails with negative weights (once popped from heap, a node is assumed finalized).",
    commonMistakes: [
      "Attempting to use Dijkstra on graph weights that can be negative."
    ],
    followUps: [
      "How does SPFA (Shortest Path Faster Algorithm) optimize Bellman-Ford?"
    ],
    relatedProblems: ["redundant-connection"]
  },
  {
    id: "graph-topological-kahns",
    category: "Graphs",
    difficulty: "Medium",
    question: "Explain Kahn's Algorithm for Topological Sort using in-degrees.",
    answer: "Compute in-degrees of all vertices. Enqueue all vertices with in-degree 0. Dequeue a node, append to sort order, and decrement neighbor in-degrees. Enqueue any neighbor whose in-degree becomes 0. If output length matches V, it succeeded.",
    faangDiscussion: "Explain how cycle is detected when some nodes are never visited due to non-zero in-degrees.",
    commonMistakes: [
      "Not checking for cycle validation at the end of topological ordering lists."
    ],
    followUps: [
      "How do you return multiple valid topological orderings?"
    ],
    relatedProblems: ["course-schedule-ii"]
  },
  {
    id: "graph-dsu-compression",
    category: "Graphs",
    difficulty: "Medium",
    question: "How do Path Compression and Union-by-Rank optimize Union-Find operations to O(alpha(N))?",
    answer: "Path compression updates parent pointers directly to root representatives during search. Union-by-Rank joins the smaller tree under root of the taller tree. Together, they keep tree depths extremely flat.",
    faangDiscussion: "Prove why Inverse Ackermann function alpha(N) behaves as a constant for all practical values.",
    commonMistakes: [
      "Forgetting to apply path compression recursion updates in the `find` function (`parent[x] = find(parent[x])`)."
    ],
    followUps: [
      "How does DSU help calculate MST (Minimum Spanning Tree) using Kruskal's?"
    ],
    relatedProblems: ["redundant-connection", "number-of-provinces"]
  },
  {
    id: "graph-bipartite-check",
    category: "Graphs",
    difficulty: "Medium",
    question: "How do you verify if a graph is Bipartite (2-colorable)?",
    answer: "Run BFS/DFS. Traverse nodes and assign colors (0 or 1) alternately. If we see a visited neighbor colored with the same color as current node, the graph contains an odd cycle and cannot be bipartite.",
    faangDiscussion: "Relate bipartite graphs to scheduling match patterns or recommendations systems.",
    commonMistakes: [
      "Assuming bipartite checks can only be run on connected components."
    ],
    followUps: [
      "How do you represent a bipartite check on disjoint components?"
    ],
    relatedProblems: ["number-of-islands"]
  },
  {
    id: "graph-strongly-connected",
    category: "Graphs",
    difficulty: "Hard",
    question: "Explain the dual DFS passes logic of Kosaraju's Algorithm for Strongly Connected Components.",
    answer: "First DFS pass: record nodes order in stack based on finish times. Transpose (reverse) graph edges direction. Second DFS pass: pop nodes from stack, traverse the transpose graph recursively to find components. Reversing edges prevents traversing across components.",
    faangDiscussion: "Discuss Tarjan's single-pass algorithm using low-link values as an alternative.",
    commonMistakes: [
      "Forgetting to reverse graph edges before launching the second DFS pass."
    ],
    followUps: [
      "What is a strongly connected component in directed graphs vs connected components in undirected graphs?"
    ],
    relatedProblems: ["course-schedule"]
  },

  // ==========================================
  // 9. Heap (7 Questions)
  // ==========================================
  {
    id: "heap-array-indexing",
    category: "Heap",
    difficulty: "Easy",
    question: "How does a Binary Heap map to a 1D array list, and how do we calculate children indices?",
    answer: "A complete binary tree is packed into an array from top to bottom, left to right. For a node at index `i`, its left child is at `2*i + 1`, right child at `2*i + 2`, and its parent at `Math.floor((i - 1) / 2)`.",
    faangDiscussion: "Discuss cache line access patterns in arrays-based heap implementation.",
    commonMistakes: [
      "Off-by-one errors due to indexing mixes (using 1-based formulas on 0-based arrays)."
    ],
    followUps: [
      "How does indexing change if array starts at index 1?"
    ],
    relatedProblems: ["kth-largest-element-in-an-array"]
  },
  {
    id: "heap-heapify-linear",
    category: "Heap",
    difficulty: "Medium",
    question: "Why is building a heap (heapify) O(N) complexity while inserting N elements is O(N log N)?",
    answer: "Building a heap starts from bottom non-leaf nodes and bubbles down. Since most nodes reside at the bottom layers, their travel distances are small. The summation yields O(N). Inserting N elements one-by-one requires bubbling up from bottom leaves, causing O(log N) travel costs for most insertions.",
    faangDiscussion: "Write down the mathematical geometric summation proof for O(N) heapify.",
    commonMistakes: [
      "Assuming heap construction takes O(N log N) time."
    ],
    followUps: [
      "How does Heap Sort leverage heapify?"
    ],
    relatedProblems: ["top-k-frequent-elements"]
  },
  {
    id: "heap-median-two-heaps",
    category: "Heap",
    difficulty: "Hard",
    question: "Explain the two-heaps design pattern for finding the median of dynamic streams.",
    answer: "We use a Max-Heap for the smaller half of numbers and a Min-Heap for the larger half. We balance heights so their size difference is <= 1. Median is the top of the larger heap, or the average of both tops.",
    faangDiscussion: "Highlight streaming constraints: how to handle evictions and sliding window medians.",
    commonMistakes: [
      "Allowing heaps to grow unbalanced, causing incorrect median estimates."
    ],
    followUps: [
      "What if numbers are integers in a small bounded range? Can we do O(1) space?"
    ],
    relatedProblems: ["find-median-from-data-stream"]
  },
  {
    id: "heap-priority-queue-dijkstra",
    category: "Heap",
    difficulty: "Medium",
    question: "How does Priority Queue optimize Dijkstra's relaxation step?",
    answer: "Dijkstra requires finding the node with the minimum distance path. A Priority Queue extracts this minimum node in O(log V) time, reducing shortest path runtimes from O(V^2) to O(E log V).",
    faangDiscussion: "Discuss how Fibonacci Heap can theoretically reduce this to O(E + V log V).",
    commonMistakes: [
      "Pushing duplicate node updates to heap without checking if distance is already relaxed."
    ],
    followUps: [
      "How do we handle dynamic heap updates in languages without support for decrease-key operations?"
    ],
    relatedProblems: ["k-closest-points-to-origin"]
  },
  {
    id: "heap-k-way-merge",
    category: "Heap",
    difficulty: "Medium",
    question: "Explain the K-Way merge pattern using heaps.",
    answer: "To merge K sorted lists, push the head elements of all lists into a Min-Heap. Pop the smallest node, insert into result, and push that popped node's next list node into the heap. Repeat until heap is empty.",
    faangDiscussion: "Analyze runtime O(N log K), where N is total elements. Space is O(K).",
    commonMistakes: [
      "Forgetting to check if a list has reached its end before pushing node next references."
    ],
    followUps: [
      "How does this relate to external sorting algorithms?"
    ],
    relatedProblems: ["merge-k-sorted-lists"]
  },
  {
    id: "heap-decrease-key",
    category: "Heap",
    difficulty: "Medium",
    question: "Explain bubble-up (sift-up) and bubble-down (sift-down) algorithms.",
    answer: "Sift-up: compare node with parent. If node violates heap property (e.g. smaller in min-heap), swap and recurse upwards. Sift-down: compare node with its smallest child. Swap and recurse downwards.",
    faangDiscussion: "Discuss why sift-down is more computationally expensive than sift-up in worst case.",
    commonMistakes: [
      "Forgetting to compare both left and right children during sift-down."
    ],
    followUps: [
      "What is d-ary heap?"
    ],
    relatedProblems: ["k-closest-points-to-origin"]
  },
  {
    id: "heap-task-scheduler",
    category: "Heap",
    difficulty: "Medium",
    question: "How does a Max-Heap optimize task scheduling under cooldown limits?",
    answer: "We want to execute tasks with the highest remaining frequency. We track frequencies in a Max-Heap. When a task is executed, we place it in a cooldown queue. Once cooldown expires, we push the task back to the heap.",
    faangDiscussion: "Discuss mathematical greedy bounds as alternatives.",
    commonMistakes: [
      "Updating task count counts directly in lists instead of re-inserting to heap."
    ],
    followUps: [
      "How does this change if task constraints have precedence dependencies?"
    ],
    relatedProblems: ["task-scheduler"]
  },

  // ==========================================
  // 10. Backtracking (7 Questions)
  // ==========================================
  {
    id: "backtracking-state-space",
    category: "Backtracking",
    difficulty: "Easy",
    question: "What is backtracking, and how does it differ from pure DFS traversal?",
    answer: "Backtracking is DFS on state space trees. Before recursing, we make a choice (updating constraint states). After recursing, we undo that choice (backtrack) to restore the environment, allowing exploration of other path branches.",
    faangDiscussion: "Explain state space optimization checks. Use reference parameters to save copy limits.",
    commonMistakes: [
      "Forgetting to undo choices before returning from recursive frames, which corrupts subsequent searches."
    ],
    followUps: [
      "How do we analyze backtracking space complexity?"
    ],
    relatedProblems: ["permutations", "subsets"]
  },
  {
    id: "backtracking-pruning",
    category: "Backtracking",
    difficulty: "Medium",
    question: "Explain constraint pruning in backtracking using N-Queens as an example.",
    answer: "Instead of generating all placements and checking validity at leaves (O(N^N)), we track conflicts (columns, positive diagonals, negative diagonals). If a placement conflicts, we prune the branch immediately.",
    faangDiscussion: "Discuss bitmasks representations to perform constraint checks in O(1) time.",
    commonMistakes: [
      "Calculating diagonal conflicts inside loops in O(N) instead of O(1) set checks."
    ],
    followUps: [
      "How do we calculate positive/negative diagonal index IDs? (pos: r + c, neg: r - c)."
    ],
    relatedProblems: ["n-queens", "word-search"]
  },
  {
    id: "backtracking-permutations-duplicates",
    category: "Backtracking",
    difficulty: "Medium",
    question: "How do you generate permutations of a list containing duplicate elements without generating duplicate permutations?",
    answer: "Sort the input list. Maintain a visited tracking array. If `nums[i] === nums[i - 1]` and `!visited[i - 1]`, skip the element. This ensures duplicate elements are only processed in a fixed index sequence.",
    faangDiscussion: "Explain the difference in sorting pruning logic for subsets vs permutations.",
    commonMistakes: [
      "Failing to sort the array before applying duplicate skip checks."
    ],
    followUps: [
      "What if input array is too large to fit in memory?"
    ],
    relatedProblems: ["permutations", "combination-sum"]
  },
  {
    id: "backtracking-sudoku-constraints",
    category: "Backtracking",
    difficulty: "Hard",
    question: "How does a Sudoku Solver track constraints to run cells checks in O(1) time?",
    answer: "We use three boolean matrix arrays: `rows[9][10]`, `cols[9][10]`, and `boxes[9][10]`. If digit `d` is placed in cell (r, c), set respective coordinates to true, enabling constant-time validation.",
    faangDiscussion: "Explain how to calculate box indices: `boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3)`.",
    commonMistakes: [
      "Scanning the row, column, and subgrid on every cell placement attempt, degrading solver speeds."
    ],
    followUps: [
      "How does dancing links (Algorithm X) optimize exact cover problems?"
    ],
    relatedProblems: ["sudoku-solver"]
  },
  {
    id: "backtracking-letter-combinations",
    category: "Backtracking",
    difficulty: "Easy",
    question: "Explain the recursion tree of Letter Combinations of a Phone Number.",
    answer: "The depth of the recursion tree matches the input digits length. At index `i`, we look up mapped characters. For each character, push it to a buffer, recurse to index `i + 1`, and pop from the buffer.",
    faangDiscussion: "Analyze temporal complexity O(3^N * 4^M), where N is digits mapping 3 letters and M is digits mapping 4.",
    commonMistakes: [
      "Creating copies of string allocations inside recursive paths."
    ],
    followUps: [
      "How does iterative BFS solve this?"
    ],
    relatedProblems: ["letter-combinations-of-a-phone-number"]
  },
  {
    id: "backtracking-word-search",
    category: "Backtracking",
    difficulty: "Medium",
    question: "How does Word Search prevent reusing the same grid cell in a single word path?",
    answer: "Before recursing to neighbors, mark the current cell as visited (e.g. setting `grid[r][c] = '#'` in-place). After neighbors return, restore the cell character value to backtrack.",
    faangDiscussion: "Discuss saving space: modifying grid in-place avoids allocating a 2D visited array.",
    commonMistakes: [
      "Leaving grid cells marked as visited after recursion exits (failing to backtrack value)."
    ],
    followUps: [
      "How does Word Search II use a Trie to match multiple words simultaneously?"
    ],
    relatedProblems: ["word-search"]
  },
  {
    id: "backtracking-expression-ops",
    category: "Backtracking",
    difficulty: "Hard",
    question: "Why does Expression Add Operators require passing the prevOp value to handle multiplication?",
    answer: "Multiplication has higher operator precedence. If path is `2+3` (evalVal = 5, prevOp = 3) and next is `*4`, we evaluate as `2 + (3 * 4)`. We roll back `prevOp` by computing: `evalVal - prevOp + (prevOp * curr)`.",
    faangDiscussion: "This is a key precedence evaluation trick. Explaining the math behind the rollback proves deep algorithmic mastery.",
    commonMistakes: [
      "Evaluating left-to-right (e.g., matching `(2+3)*4 = 20` instead of `2+12 = 14`)."
    ],
    followUps: [
      "How would we support divisions which require tracking quotients?"
    ],
    relatedProblems: ["expression-add-operators"]
  },

  // ==========================================
  // 11. Dynamic Programming (7 Questions)
  // ==========================================
  {
    id: "dp-overlapping-subproblems",
    category: "Dynamic Programming",
    difficulty: "Easy",
    question: "What are the two core criteria required to apply Dynamic Programming?",
    answer: "1. Overlapping Subproblems: recursive calls solve the exact same sub-problems repeatedly. 2. Optimal Substructure: the optimal solution to the main problem is built from optimal solutions of its subproblems.",
    faangDiscussion: "Contrast dynamic programming (overlaps) with divide and conquer (independent subproblems).",
    commonMistakes: [
      "Applying DP to problems without overlaps (yielding high storage overhead without speedups)."
    ],
    followUps: [
      "How does memoization differ from tabulation?"
    ],
    relatedProblems: ["climbing-stairs", "min-cost-climbing-stairs"]
  },
  {
    id: "dp-coin-change-transitions",
    category: "Dynamic Programming",
    difficulty: "Medium",
    question: "Explain the transition recurrence relation for the Coin Change problem.",
    answer: "Let dp[i] be the minimum coins to make amount `i`. Base case is `dp[0] = 0`. For amount `i`, transition is: `dp[i] = 1 + min(dp[i - c])` for all coins `c` such that `i - c >= 0`.",
    faangDiscussion: "Explain why we fill array with Infinity or amount+1 as sentinels.",
    commonMistakes: [
      "Using greedy choices for Coin Change: greedy works for USD coins but fails for custom coin values (e.g. coins [1, 3, 4], target 6)."
    ],
    followUps: [
      "How do we modify this to find the total combinations count instead?"
    ],
    relatedProblems: ["coin-change"]
  },
  {
    id: "dp-space-optimization-1d",
    category: "Dynamic Programming",
    difficulty: "Medium",
    question: "How can 2D DP tables be space-optimized to 1D arrays?",
    answer: "If state transition `dp[i][j]` only depends on elements from the previous row `dp[i-1]` or current row `dp[i]`, we can compress the table into a single 1D array. When updating, we overwrite values from right to left (for knapsack patterns) or track top-left diagonal values in a variable.",
    faangDiscussion: "Discuss space complexity reduction from O(M * N) to O(N).",
    commonMistakes: [
      "Overwriting values from left to right in Knapsack, allowing reuse of current items multiple times (converting 0/1 Knapsack to Unbounded)."
    ],
    followUps: [
      "How does Edit Distance table space optimize?"
    ],
    relatedProblems: ["house-robber", "unique-paths", "maximal-square"]
  },
  {
    id: "dp-lis-binary-search",
    category: "Dynamic Programming",
    difficulty: "Hard",
    question: "Explain how to solve Longest Increasing Subsequence (LIS) in O(N log N) using patience sorting.",
    answer: "Maintain a dynamic active list. For each element, use binary search (lower_bound) to find its insertion slot. If it is larger than all elements, append it. Otherwise, overwrite that slot. The length of list is the LIS size.",
    faangDiscussion: "Explain why the dynamic array does not represent the actual LIS path sequence, but its length is correct.",
    commonMistakes: [
      "Assuming the contents of the final active list represent the LIS elements sequence."
    ],
    followUps: [
      "How do we reconstruct the actual LIS sequence path in O(N log N)?"
    ],
    relatedProblems: ["longest-increasing-subsequence"]
  },
  {
    id: "dp-lcs-table",
    category: "Dynamic Programming",
    difficulty: "Medium",
    question: "Explain the transition transitions in Longest Common Subsequence.",
    answer: "If characters match (`s1[i] === s2[j]`), then `dp[i][j] = 1 + dp[i-1][j-1]`. If they mismatch, then we check adjacent cells: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",
    faangDiscussion: "Discuss LCS applications: diff tools (git diff) and DNA sequence matching.",
    commonMistakes: [
      "Failing to pad the DP table dimensions by +1 for base case padding."
    ],
    followUps: [
      "How do we reconstruct the LCS string from the completed table?"
    ],
    relatedProblems: ["longest-common-subsequence"]
  },
  {
    id: "dp-knapsack-fractional-vs-binary",
    category: "Dynamic Programming",
    difficulty: "Medium",
    question: "Why does 0/1 Knapsack require Dynamic Programming while Fractional Knapsack can be solved greedily?",
    answer: "In Fractional Knapsack, we can take fractions of items, allowing us to greedily select by value-to-weight ratio. In 0/1 Knapsack, item choices are binary (take/skip). Local greedy choices can yield poor capacity packing combinations, requiring exhaustive DP state searches.",
    faangDiscussion: "Analyze Knapsack pseudo-polynomial time: O(N * W), where W is weight capacity.",
    commonMistakes: [
      "Attempting to solve 0/1 Knapsack using greedy density sorts."
    ],
    followUps: [
      "What if W is extremely large (e.g. 10^9)? How do we change the DP states?"
    ],
    relatedProblems: ["partition-equal-subset-sum"]
  },
  {
    id: "dp-burst-balloons-interval",
    category: "Dynamic Programming",
    difficulty: "Hard",
    question: "Explain Interval DP transitions using Burst Balloons.",
    answer: "Define dp[i][j] as the max coins obtained from bursting balloons in interval [i, j]. We think backwards: select the *last* balloon `k` to burst in [i, j]. Since `k` is burst last, its boundaries are `nums[i-1]` and `nums[j+1]`. Recurrence is: `dp[i][j] = max(nums[i-1] * nums[k] * nums[j+1] + dp[i][k-1] + dp[k+1][j])`.",
    faangDiscussion: "Explain how interval splits prevent subproblem dependencies.",
    commonMistakes: [
      "Thinking forwards (bursting `k` first), which modifies neighbors and breaks subproblem isolation."
    ],
    followUps: [
      "What is the complexity of matrix chain multiplication?"
    ],
    relatedProblems: ["burst-balloons"]
  },

  // ==========================================
  // 12. Greedy (7 Questions)
  // ==========================================
  {
    id: "greedy-heuristics",
    category: "Greedy",
    difficulty: "Easy",
    question: "What is a Greedy algorithm, and when is it safe to use?",
    answer: "A Greedy algorithm makes the locally optimal choice at each step, hoping it leads to the global optimum. It is safe to use if it satisfies the Greedy Choice Property (local choices lead to global solutions) and Optimal Substructure.",
    faangDiscussion: "Discuss how we prove greedy correctness using greedy-stays-ahead or exchange arguments.",
    commonMistakes: [
      "Using greedy heuristics without testing correctness on custom weight inputs."
    ],
    followUps: [
      "Which graph shortest path algorithm uses a greedy approach?"
    ],
    relatedProblems: ["jump-game", "gas-station"]
  },
  {
    id: "greedy-interval-scheduling",
    category: "Greedy",
    difficulty: "Medium",
    question: "Why sorting by finish times yields optimal interval scheduling outputs?",
    answer: "Sorting by finish times frees up the resource as early as possible, leaving maximum room for subsequent intervals. Choosing intervals that end earliest is mathematically optimal.",
    faangDiscussion: "Prove greedy stays ahead mathematically during interviews.",
    commonMistakes: [
      "Sorting intervals by start times or durations instead of finish times."
    ],
    followUps: [
      "How do we assign rooms to intervals such that room count is minimized?"
    ],
    relatedProblems: ["merge-intervals", "non-overlapping-intervals"]
  },
  {
    id: "greedy-jump-game",
    category: "Greedy",
    difficulty: "Medium",
    question: "Explain the greedy maximum reachable boundary check in Jump Game.",
    answer: "Maintain a `maxReach` index. At index `i`, if `i > maxReach`, return false. Update `maxReach = max(maxReach, i + nums[i])`. If `maxReach >= target`, return true. We only track the single furthest reachable boundary.",
    faangDiscussion: "Contrast dynamic programming solution O(N^2) vs greedy pass O(N) time and O(1) space.",
    commonMistakes: [
      "Failing to break early when index `i` is unreachable."
    ],
    followUps: [
      "How does Jump Game II track minimum jumps?"
    ],
    relatedProblems: ["jump-game", "jump-game-ii"]
  },
  {
    id: "greedy-gas-station",
    category: "Greedy",
    difficulty: "Medium",
    question: "Why can we start at index i+1 if gas checks fail at index i in Gas Station?",
    answer: "If we start at `start` and fail at index `i`, we accumulated some positive gas along the way. If even with that positive head start we couldn't pass `i`, any starting point between `start` and `i` is guaranteed to fail before reaching `i`.",
    faangDiscussion: "Analyze why single pass verification works if total gas >= total cost.",
    commonMistakes: [
      "Nested O(N^2) loop checks from every candidate gas station."
    ],
    followUps: [
      "Prove why a unique starting point is guaranteed if total gas >= total cost."
    ],
    relatedProblems: ["gas-station"]
  },
  {
    id: "greedy-huffman-coding",
    category: "Greedy",
    difficulty: "Hard",
    question: "How does Huffman Coding use a greedy heap merge to build prefix-free code trees?",
    answer: "Count character frequencies. Push nodes into a Min-Heap. Greedily pop the two nodes with the smallest frequencies, merge them into a parent node, and push back. Repeat until one root remains.",
    faangDiscussion: "Explain prefix-free property: no code is a prefix of another, enabling seamless stream decoding.",
    commonMistakes: [
      "Failing to assign unique paths (0/1) to tree branches."
    ],
    followUps: [
      "What is the average bits encoding length under entropy limits?"
    ],
    relatedProblems: ["task-scheduler"]
  },
  {
    id: "greedy-boyer-moore",
    category: "Greedy",
    difficulty: "Easy",
    question: "Explain the voting choices of Boyer-Moore Majority Vote algorithm.",
    answer: "We maintain a candidate and a count. If count is 0, select current element as candidate. If current element matches candidate, increment count; otherwise decrement. A majority element (exists > N/2 times) will survive.",
    faangDiscussion: "Highlight space complexity: O(1) space compared to O(N) hash map frequency counters.",
    commonMistakes: [
      "Assuming Boyer-Moore works without confirming if a majority element actually exists (requires a second pass check if not guaranteed)."
    ],
    followUps: [
      "How do we find elements that appear > N/3 times?"
    ],
    relatedProblems: ["majority-element"]
  },
  {
    id: "greedy-fractional-knapsack",
    category: "Greedy",
    difficulty: "Easy",
    question: "Explain the sort choice of Fractional Knapsack.",
    answer: "Sort items in descending order of value-to-weight ratio. Take as much of the item as possible. If capacity remains, take a fraction of the next item. This maximizes value concentration.",
    faangDiscussion: "Contrast greedy bounds of fractional vs binary integer knapsack restrictions.",
    commonMistakes: [
      "Sorting by weight or value alone."
    ],
    followUps: [
      "How do we handle fractional items in real systems allocations?"
    ],
    relatedProblems: ["majority-element"]
  },

  // ==========================================
  // 13. Trie (7 Questions)
  // ==========================================
  {
    id: "trie-definition",
    category: "Trie",
    difficulty: "Easy",
    question: "What is a Trie (Prefix Tree), and how does it optimize prefix searches compared to HashSets?",
    answer: "A Trie is a tree structure where nodes store characters and edges represent transitions. A HashSet search requires hashing and comparing full strings, taking O(L). A Trie searches prefix strings in O(L) time directly, where L is prefix length, and can find matching prefixes instantly without full scans.",
    faangDiscussion: "Discuss memory footprints: HashSets store duplicate prefixes; Tries share common prefix nodes, saving storage at scale.",
    commonMistakes: [
      "Forgetting to check the `isEnd` boolean flag on exact word searches."
    ],
    followUps: [
      "How do search engines implement autocomplete suggestions using Tries?"
    ],
    relatedProblems: ["implement-trie-prefix-tree"]
  },
  {
    id: "trie-node-representation",
    category: "Trie",
    difficulty: "Medium",
    question: "Compare Trie node representations using fixed arrays versus HashMaps.",
    answer: "Fixed arrays `Node[26]` provide O(1) lookup speed but waste memory for sparse branches. HashMaps `Map<Character, Node>` consume memory dynamically for active branches but introduce map lookup overhead.",
    faangDiscussion: "Explain how to choose representations based on alphabet size (e.g. ASCII vs Unicode).",
    commonMistakes: [
      "Using fixed size 26 arrays when input strings can contain uppercase letters or symbols."
    ],
    followUps: [
      "What is a Ternary Search Tree?"
    ],
    relatedProblems: ["design-add-and-search-words-data-structure"]
  },
  {
    id: "trie-wildcard-dfs",
    category: "Trie",
    difficulty: "Medium",
    question: "How do you search words containing wildcard dots ('.') in a Trie?",
    answer: "If character is '.', we must branch recursively. Run DFS to check all 26 child nodes of current Trie node. If any child DFS returns true, return true.",
    faangDiscussion: "Analyze worst-case complexity: searching all '.' characters causes exponential branching costs.",
    commonMistakes: [
      "Failing to return early when a valid matching DFS path is found."
    ],
    followUps: [
      "How do we handle regex wildcard search limits?"
    ],
    relatedProblems: ["design-add-and-search-words-data-structure"]
  },
  {
    id: "trie-word-search-ii",
    category: "Trie",
    difficulty: "Hard",
    question: "Why is a Trie used in Word Search II instead of running DFS for each word independently?",
    answer: "By inserting all target words into a Trie, we search them simultaneously as we traverse the grid. If the prefix does not exist in the Trie, we backtrack early, pruning search trees.",
    faangDiscussion: "Explain why removing found words from the Trie dynamically prevents duplicate searches and speeds up checks.",
    commonMistakes: [
      "Failing to prune nodes from the Trie after a word is successfully found."
    ],
    followUps: [
      "What is the maximum recursion depth for grid DFS paths?"
    ],
    relatedProblems: ["word-search-ii"]
  },
  {
    id: "trie-longest-prefix",
    category: "Trie",
    difficulty: "Medium",
    question: "How do you find the longest common prefix of a set of strings using a Trie?",
    answer: "Insert all strings. Start from root and follow child nodes. The common path continues as long as current node has exactly one child and `!isEnd` is true.",
    faangDiscussion: "Discuss how this compares to sorting-based prefix lookups.",
    commonMistakes: [
      "Continuing search through nodes that are marked as word endings (`isEnd === true`)."
    ],
    followUps: [
      "Can we solve this in O(N * L) time and O(1) space without a Trie?"
    ],
    relatedProblems: ["replace-words"]
  },
  {
    id: "trie-suffix-trie",
    category: "Trie",
    difficulty: "Hard",
    question: "Compare Suffix Trees and Suffix Tries.",
    answer: "A Suffix Trie stores all suffixes of a string. A Suffix Tree compresses single-child paths (edge labels contain substrings), reducing space to O(N). Suffix trees enable O(L) substring checks in complex string databases.",
    faangDiscussion: "Explain Ukkonen's algorithm for linear time suffix tree construction.",
    commonMistakes: [
      "Attempting to build suffix tries for very long strings, which causes quadratic memory explosions."
    ],
    followUps: [
      "How does Suffix Array relate to Suffix Tree?"
    ],
    relatedProblems: ["replace-words"]
  },
  {
    id: "trie-prefix-replace",
    category: "Trie",
    difficulty: "Medium",
    question: "Explain prefix replacement transitions in Replace Words.",
    answer: "Insert root words into Trie. For each sentence word, traverse Trie. The first node with `isEnd === true` represents the shortest root. Replace word with this root, otherwise keep original.",
    faangDiscussion: "Explain why shortest prefix matching is optimal (stops immediately on `isEnd`).",
    commonMistakes: [
      "Forgetting to output original word when no matching prefix root exists."
    ],
    followUps: [
      "What if we need to match the longest prefix instead?"
    ],
    relatedProblems: ["replace-words"]
  },

  // ==========================================
  // 14. Bit Manipulation (7 Questions)
  // ==========================================
  {
    id: "bit-xor-property",
    category: "Bit Manipulation",
    difficulty: "Easy",
    question: "Explain the properties of XOR (^) and how it finds the Single Number in O(N) time and O(1) space.",
    answer: "XOR properties: 1. `A ^ A = 0` (self-cancellation). 2. `A ^ 0 = A` (identity). 3. XOR is commutative and associative. By XORing all elements in an array, matching pairs cancel out, leaving the single number.",
    faangDiscussion: "Discuss XOR-based cipher cryptography checks and memory exchanges.",
    commonMistakes: [
      "Using XOR on arrays containing multiple unique numbers, which merges bits states."
    ],
    followUps: [
      "How do you find the two unique numbers in an array where all other numbers appear twice?"
    ],
    relatedProblems: ["single-number"]
  },
  {
    id: "bit-count-1s",
    category: "Bit Manipulation",
    difficulty: "Easy",
    question: "How does Brian Kernighan's algorithm count set bits in a number?",
    answer: "The operation `n = n & (n - 1)` clears the lowest set bit of `n`. By running this operation iteratively until `n` becomes 0, the loop runs exactly as many times as there are set bits.",
    faangDiscussion: "Contrast O(K) Kernighan's (where K is set bits) vs O(32) bit shifts.",
    commonMistakes: [
      "Using standard loop shifts which run 32 checks even if number has only one set bit."
    ],
    followUps: [
      "How does CPU POPCNT instruction count bits in hardware?"
    ],
    relatedProblems: ["number-of-1-bits"]
  },
  {
    id: "bit-power-of-two",
    category: "Bit Manipulation",
    difficulty: "Easy",
    question: "How do you check if a number is a power of two using bitwise operators in O(1) time?",
    answer: "A power of two has exactly one set bit. The check `(n > 0) && ((n & (n - 1)) === 0)` returns true if there is only one set bit, proving power of two.",
    faangDiscussion: "Explain how negative values and zero are handled in boundary conditions.",
    commonMistakes: [
      "Forgetting to check if `n <= 0`, which can yield false positives."
    ],
    followUps: [
      "How do you check if a number is a power of four?"
    ],
    relatedProblems: ["counting-bits"]
  },
  {
    id: "bit-missing-number",
    category: "Bit Manipulation",
    difficulty: "Easy",
    question: "Explain how XOR resolves Missing Number compared to arithmetic summations.",
    answer: "Summation method `N*(N+1)/2 - sum(nums)` can overflow for large N. XORing all indices `[0..N]` with all array elements avoids overflow entirely. Matching indices cancel out, leaving the missing number.",
    faangDiscussion: "Contrast integer overflow safety checks in different languages.",
    commonMistakes: [
      "Arithmetic overflow crashes in languages without infinite precision integers."
    ],
    followUps: [
      "How does this scale to finding missing numbers in dynamic streams?"
    ],
    relatedProblems: ["missing-number"]
  },
  {
    id: "bit-reverse-bits",
    category: "Bit Manipulation",
    difficulty: "Medium",
    question: "How do you reverse bits of a 32-bit unsigned integer?",
    answer: "Iterate 32 times. Shift result left by 1, mask the lowest bit of the input using `n & 1` and add to result, then shift input right by 1 (`n >>> 1` to prevent sign extension).",
    faangDiscussion: "Discuss bitwise divide and conquer masking optimizations (e.g. reverse byte boundaries using mask filters).",
    commonMistakes: [
      "Using signed right shift `>>` instead of unsigned `>>>` which inserts sign bits on negatives."
    ],
    followUps: [
      "How do you optimize reversal for millions of inputs using lookup tables?"
    ],
    relatedProblems: ["reverse-bits"]
  },
  {
    id: "bit-masking-subsets",
    category: "Bit Manipulation",
    difficulty: "Medium",
    question: "How do bitwise masks represent all subsets of a set of size N?",
    answer: "A set of size N has `2^N` subsets. We can iterate numbers `i` from `0` to `2^N - 1`. If the `j`-th bit of `i` is set (`(i & (1 << j)) !== 0`), then include `nums[j]` in the subset.",
    faangDiscussion: "Discuss why bitmasking is fast but capped at N <= 32 due to integer widths.",
    commonMistakes: [
      "Attempting bitmasking on sets larger than 64 elements."
    ],
    followUps: [
      "How do we generate combinations using Gray code to minimize bit flips?"
    ],
    relatedProblems: ["counting-bits"]
  },
  {
    id: "bit-division-bitwise",
    category: "Bit Manipulation",
    difficulty: "Hard",
    question: "How do you divide two integers without using multiplication, division, or modulo operators?",
    answer: "We shift the divisor left until it is as large as possible without exceeding the dividend. Subtract, record the quotient bit, and repeat on remainder. This behaves like binary long division in O(log(Dividend)) steps.",
    faangDiscussion: "Explain sign handling and overflow traps (e.g. Integer.MIN_VALUE / -1).",
    commonMistakes: [
      "Infinite loops when shifting divisor past 31 bits."
    ],
    followUps: [
      "How do we handle divisions overflow limits?"
    ],
    relatedProblems: ["single-number"]
  },

  // ==========================================
  // 15. Advanced DSA (7 Questions)
  // ==========================================
  {
    id: "adv-segment-tree-vs-fenwick",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "Compare Segment Tree and Fenwick Tree (Binary Indexed Tree).",
    answer: "Segment Tree is a binary tree where nodes store interval sums; it handles range queries and range updates in O(log N) and can support any associative operator. Fenwick Tree uses bitwise indexing representing cumulative sums; it is faster and uses less space (O(N) vs O(4N)) but only handles cumulative prefix operators easily.",
    faangDiscussion: "Discuss when to use which (use Fenwick for simple cumulative counts; use Segment Tree for range min/max).",
    commonMistakes: [
      "Using Fenwick trees for non-invertible operators (like range maximum) without extra tracking."
    ],
    followUps: [
      "How does Lazy Propagation optimize range updates in Segment Trees?"
    ],
    relatedProblems: ["serialize-and-deserialize-binary-tree"]
  },
  {
    id: "adv-sparse-table",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "Explain the range query mechanism of Sparse Table.",
    answer: "A Sparse Table precomputes query answers for all intervals of length `2^j` using dynamic programming. Since operations like Minimum are idempotent (`min(A, A) = A`), a range query [L, R] can be answered in O(1) time by taking the min of two overlapping intervals of size `2^k`.",
    faangDiscussion: "Highlight O(N log N) precomputation vs O(1) query time.",
    commonMistakes: [
      "Using Sparse Table for updates: any update requires O(N log N) recomputation, making it poor for dynamic arrays."
    ],
    followUps: [
      "Can we use Sparse Table for range sums? (yes, but query takes O(log N))."
    ],
    relatedProblems: ["serialize-and-deserialize-binary-tree"]
  },
  {
    id: "adv-sweep-line",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "Explain the Sweep Line algorithm for geometric intervals intersection.",
    answer: "Treat boundaries as events (e.g., start time, end time). Sort events. Sweep a vertical line across events. When start event is processed, insert item to active set. When end event is processed, remove. This checks overlaps dynamically.",
    faangDiscussion: "Give examples like Skyline problem or Area of Rectangles.",
    commonMistakes: [
      "Incorrectly sorting events with identical coordinate boundaries."
    ],
    followUps: [
      "How do we resolve event order if coordinates overlap?"
    ],
    relatedProblems: ["merge-intervals"]
  },
  {
    id: "adv-meet-in-the-middle",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "What is Meet in the Middle, and how does it reduce Knapsack complexity from O(2^N) to O(2^(N/2))?",
    answer: "Divide set into two halves of size N/2. Generate all subsets sums for each half independently (taking 2^(N/2) steps). Sort one half. For each element in the second half, binary search the sorted half to find combinations summing close to target.",
    faangDiscussion: "Highlight why N <= 40 constraints usually indicate Meet in the Middle.",
    commonMistakes: [
      "Attempting Meet in the Middle on large sets (N > 50) where 2^(N/2) is still too large."
    ],
    followUps: [
      "How does this apply to 4Sum?"
    ],
    relatedProblems: ["4sum"]
  },
  {
    id: "adv-quickselect",
    category: "Advanced DSA",
    difficulty: "Medium",
    question: "Explain the partitioning choices of Quickselect for finding the K-th smallest element in O(N) average time.",
    answer: "Similar to Quicksort, select a pivot and partition elements. Since we only need to search the partition containing index K, we discard the other partition. Average recurrence is `T(N) = T(N/2) + O(N) = O(N)`.",
    faangDiscussion: "Explain why worst-case is O(N^2) and how randomized pivots or Median-of-Medians guarantees linear boundaries.",
    commonMistakes: [
      "Recursing on both partitions, which converts Quickselect into Quicksort O(N log N)."
    ],
    followUps: [
      "How does this compare to heap-based top-K searches?"
    ],
    relatedProblems: ["kth-largest-element-in-an-array"]
  },
  {
    id: "adv-kmp-lps",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "How does the KMP algorithm use the Longest Prefix Suffix (LPS) array to achieve O(N + M) string matching?",
    answer: "The LPS array precomputes the length of the longest proper prefix which is also a suffix for each substring. When a character mismatch occurs, instead of resetting pattern matching to start, we jump the pattern matching pointer to index `LPS[j-1]` to skip matching known letters.",
    faangDiscussion: "Explain state machine representations of string matching.",
    commonMistakes: [
      "Off-by-one errors when updating search indices from LPS values."
    ],
    followUps: [
      "How does Rabin-Karp use rolling hashes to achieve average O(N) matching?"
    ],
    relatedProblems: ["find-the-index-of-the-first-occurrence-in-a-string"]
  },
  {
    id: "adv-tarjans-bridges",
    category: "Advanced DSA",
    difficulty: "Hard",
    question: "Explain how Tarjan's algorithm finds bridges in a graph using discovery times and low-links.",
    answer: "DFS index nodes and assign discovery times. `low[u]` represents the lowest discovery time node reachable from `u` using back-edges. For edge `u -> v`, if `low[v] > disc[u]`, it means `v` has no other path to reach ancestor nodes. The edge `u -> v` is a bridge.",
    faangDiscussion: "Discuss real-world applications like critical link networks analysis.",
    commonMistakes: [
      "Treating parent edges as back-edges, which distorts low-link calculations."
    ],
    followUps: [
      "How do we find articulation points (vertices whose removal disconnects the graph)?"
    ],
    relatedProblems: ["course-schedule"]
  }
];
