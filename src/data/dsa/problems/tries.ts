import { Problem } from "./types";

export const trieProblems: Problem[] = [
  {
    id: 17,
    title: "Implement Trie",
    slug: "implement-trie",
    difficulty: "Medium",
    pillarSlug: "trie",
    statement: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class with insert, search, and startsWith methods.",
    starterCode: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {}
  search(word) {}
  startsWith(prefix) {}
}`,
    bruteForce: {
      code: `class TrieBrute {
  constructor() {
    this.words = [];
  }
  insert(word) { this.words.push(word); }
  search(word) { return this.words.includes(word); }
  startsWith(prefix) { return this.words.some(w => w.startsWith(prefix)); }
}`,
      language: "javascript",
      explanation: "Store words in a flat array. Searching or checking prefixes requires scanning the list of words, which scales as O(N * L) in the worst case.",
    },
    better: {
      code: `class TrieMap {
  constructor() {
    this.words = new Set();
  }
  insert(word) { this.words.add(word); }
  search(word) { return this.words.has(word); }
  startsWith(prefix) {
    for (let word of this.words) {
      if (word.startsWith(prefix)) return true;
    }
    return false;
  }
}`,
      language: "javascript",
      explanation: "Store words in a Hash Set. Word search becomes O(L), but prefix checks (startsWith) still require scanning the entire set, running in O(N * L) time.",
    },
    optimal: {
      code: `class TrieNodeOptimal {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class TrieOptimal {
  constructor() {
    this.root = new TrieNodeOptimal();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNodeOptimal();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}`,
      language: "javascript",
      explanation: "A standard Node-based Prefix Tree. Each character represents a node. Traversing down characters resolves queries in O(L) time, where L is the length of the word/prefix, completely independent of the total count of words N.",
    },
    timeComplexity: "O(L)",
    spaceComplexity: "O(N * L)",
    dryRun: [
      { line: 1, variables: { action: '"insert(\'apple\')"', node: "root" }, description: "Start insertion. Traverse letters 'a', 'p', 'p', 'l', 'e'. Create missing nodes. Set final 'e' node's isEndOfWord = true." },
      { line: 2, variables: { action: '"search(\'apple\')"', node: "root" }, description: "Search 'apple'. Follow letters. All exist. The 'e' node has isEndOfWord = true. Return true." },
      { line: 3, variables: { action: '"search(\'app\')"', node: "root" }, description: "Search 'app'. Letters exist. But 'p' node has isEndOfWord = false. Return false." },
      { line: 4, variables: { action: '"startsWith(\'app\')"', node: "root" }, description: "Check startsWith 'app'. All characters match child nodes. Return true." }
    ],
    interviewDiscussion: [
      {
        question: "Why is the time complexity O(L)?",
        answer: "Trie access scales strictly with the size of the key (L characters) being inserted or searched. Since we check children character-by-character, we perform at most L comparisons, which is highly efficient.",
      }
    ],
  },
  {
    id: 96,
    title: "Design Add and Search Words Data Structure",
    slug: "design-add-and-search-words-data-structure",
    difficulty: "Medium",
    pillarSlug: "trie",
    statement: "Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class: 1. void addWord(word) Adds word to the data structure. 2. bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.",
    starterCode: `class WordDictionary {
  constructor() {
    this.root = {};
  }
  addWord(word) {}
  search(word) {}
}`,
    bruteForce: {
      code: `class WordDictionaryBrute {
  constructor() {
    this.words = [];
  }
  addWord(word) {
    this.words.push(word);
  }
  search(word) {
    const regex = new RegExp('^' + word + '$');
    return this.words.some(w => regex.test(w));
  }
}`,
      language: "javascript",
      explanation: "Store words in an array. Search checks every word using regular expressions. Time complexity is O(N * L) for every query.",
    },
    better: {
      code: `class WordDictionaryBetter {
  constructor() {
    this.buckets = {};
  }
  addWord(word) {
    const len = word.length;
    if (!this.buckets[len]) this.buckets[len] = [];
    this.buckets[len].push(word);
  }
  search(word) {
    const len = word.length;
    if (!this.buckets[len]) return false;
    const regex = new RegExp('^' + word + '$');
    return this.buckets[len].some(w => regex.test(w));
  }
}`,
      language: "javascript",
      explanation: "Group words by length. When searching, only run regex checks on words of the matching length, pruning a large portion of irrelevant checks.",
    },
    optimal: {
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionaryOptimal {
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    function dfs(node, index) {
      if (!node) return false;
      if (index === word.length) return node.isEndOfWord;
      
      const char = word[index];
      if (char === '.') {
        for (const key in node.children) {
          if (dfs(node.children[key], index + 1)) return true;
        }
        return false;
      } else {
        if (!node.children[char]) return false;
        return dfs(node.children[char], index + 1);
      }
    }
    return dfs(this.root, 0);
  }
}`,
      language: "javascript",
      explanation: "Trie with DFS backtracking. Characters are traversed sequentially. When a wildcard dot '.' is encountered, we branch out recursively and test all existing child keys at that level, returning true if any sub-branch finds a match.",
    },
    timeComplexity: "O(m * 26^k)",
    spaceComplexity: "O(n * l)",
    dryRun: [
      { line: 1, variables: { word: '".ad"' }, description: "Start DFS on root. Character is '.'. Iterate through all children of root." },
      { line: 2, variables: { key: '"b"', index: 1 }, description: "Recurse on child 'b'. Next char is 'a'. 'a' exists as child of 'b'." },
      { line: 3, variables: { char: '"d"', index: 2 }, description: "Next char is 'd'. 'd' exists and represents end of word. Return true." }
    ],
    interviewDiscussion: [
      {
        question: "What is the worst-case complexity of searching with wildcards in this Trie?",
        answer: "If the search key consists entirely of dots (e.g. '....'), we must search all branches of the Trie up to depth L, which effectively runs a full DFS of the tree. The best case remains O(L) when there are no dots."
      }
    ]
  },
  {
    id: 97,
    title: "Word Search II",
    slug: "word-search-ii",
    difficulty: "Hard",
    pillarSlug: "trie",
    statement: "Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    starterCode: `function findWords(board, words) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function findWordsBrute(board, words) {
  // Run Word Search I algorithm for every word in the dictionary individually.
  // Time complexity: O(W * M * N * 4^L) where W is the number of words.
}`,
      language: "javascript",
      explanation: "Running a full grid DFS for each word individually duplicates search efforts across identical prefixes (e.g. 'cat', 'cats', 'cater').",
    },
    better: {
      code: `function findWordsTrieDFS(board, words) {
  // Build Trie from dictionary words.
  // For each grid cell, run DFS matched against Trie node states.
  // Add visited flags to grid coordinates.
  return [];
}`,
      language: "javascript",
      explanation: "Construct a Trie from words, and traverse the grid. If the current sequence of cell characters forms a valid path in the Trie, continue. Allows checking multiple words simultaneously.",
    },
    optimal: {
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.word = null; // Store complete word here at leaf
  }
}

function findWordsOptimal(board, words) {
  const root = new TrieNode();
  for (const w of words) {
    let node = root;
    for (const char of w) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.word = w;
  }

  const result = [];
  const m = board.length;
  const n = board[0].length;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (root.children[board[r][c]]) {
        dfs(r, c, root);
      }
    }
  }

  function dfs(r, c, parentNode) {
    const char = board[r][c];
    const currNode = parentNode.children[char];

    if (currNode.word) {
      result.push(currNode.word);
      currNode.word = null; // Prevent duplicates
    }

    board[r][c] = '#'; // Mark visited in-place

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] !== '#') {
        const nextChar = board[nr][nc];
        if (currNode.children[nextChar]) {
          dfs(nr, nc, currNode);
        }
      }
    }

    board[r][c] = char; // Restore cell
    
    // Optimization: Prune leaf node
    if (Object.keys(currNode.children).length === 0) {
      delete parentNode.children[char];
    }
  }

  return result;
}`,
      language: "javascript",
      explanation: "Trie-based Grid DFS with in-place cell masking and leaf pruning. As words are found, delete their leaf nodes from the Trie. This prevents checking redundant subtrees, speeding up execution significantly.",
    },
    timeComplexity: "O(m * n * 4^l)",
    spaceComplexity: "O(w * l)",
    dryRun: [
      { line: 1, variables: { words: '["eat"]', board: '[["e","a","t"]]' }, description: "Trie has 'e'->'a'->'t'. Starting DFS at board[0][0]='e'." },
      { line: 2, variables: { r: 0, c: 1, char: '"a"' }, description: "Move to board[0][1]='a'. Matches trie path." },
      { line: 3, variables: { r: 0, c: 2, char: '"t"' }, description: "Move to board[0][2]='t'. Matches leaf. Word 'eat' found. Nullify leaf, prune paths." }
    ],
    interviewDiscussion: [
      {
        question: "Why is leaf pruning critical for Word Search II performance?",
        answer: "If we search for a word like 'caterpillar' on a grid containing many duplicate character paths, we could find it once, but without pruning, the recursion would continue to search the grid for the same word. Deleting the matched word from the Trie ensures we never explore that tree node path again."
      }
    ]
  },
  {
    id: 98,
    title: "Replace Words",
    slug: "replace-words",
    difficulty: "Medium",
    pillarSlug: "trie",
    statement: "In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root 'an' is followed by the successor word 'other', we can form the word 'another'. Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.",
    starterCode: `function replaceWords(dictionary, sentence) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function replaceWordsBrute(dictionary, sentence) {
  return sentence.split(' ').map(word => {
    let best = word;
    for (const root of dictionary) {
      if (word.startsWith(root) && root.length < best.length) {
        best = root;
      }
    }
    return best;
  }).join(' ');
}`,
      language: "javascript",
      explanation: "Split sentence into words. For each word, scan every root in the dictionary to find prefix matches. O(W * D * L) complexity, where D is dictionary size.",
    },
    better: {
      code: `function replaceWordsSorted(dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length);
  return sentence.split(' ').map(word => {
    for (const root of dictionary) {
      if (word.startsWith(root)) {
        return root;
      }
    }
    return word;
  }).join(' ');
}`,
      language: "javascript",
      explanation: "Sort roots by length. The first root that matches as prefix is guaranteed to be the shortest. Reduces checks but still requires scanning roots.",
    },
    optimal: {
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.isRoot = false;
  }
}

function replaceWordsOptimal(dictionary, sentence) {
  const root = new TrieNode();
  for (const word of dictionary) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isRoot = true;
  }

  return sentence.split(' ').map(word => {
    let node = root;
    let path = "";
    for (const char of word) {
      if (!node.children[char] || node.isRoot) break;
      path += char;
      node = node.children[char];
    }
    return node.isRoot ? path : word;
  }).join(' ');
}`,
      language: "javascript",
      explanation: "Populate a Trie with roots. For each word in the sentence, walk down the Trie. Append letters to `path` until we hit a root node (`node.isRoot === true`) or cannot descend further. If a root node is reached, return the accumulated prefix path. Runs in linear O(N * L) time.",
    },
    timeComplexity: "O(d * l + s)",
    spaceComplexity: "O(d * l)",
    dryRun: [
      { line: 1, variables: { dictionary: '["cat"]', word: '"cattle"' }, description: "Trie has root 'cat'. Process word 'cattle'." },
      { line: 2, variables: { char: '"c"', path: '"c"' }, description: "Matches 'c' child of root." },
      { line: 3, variables: { char: '"t"', path: '"cat"', isRoot: "true" }, description: "Matches 't' leaf child. Node isRoot is true. Stop search. Replace 'cattle' with 'cat'." }
    ],
    interviewDiscussion: [
      {
        question: "Why is a Trie better than a Hash Set of roots for Replace Words?",
        answer: "A Hash Set would require us to check prefixes of the word by calling substrings (e.g. check w[0..1], w[0..2], w[0..3]...) against the Set, which allocates strings and does duplicate work. A Trie matches characters in a single pass in O(L) time and O(1) memory allocation."
      }
    ]
  },
  {
    id: 99,
    title: "Longest Word in Dictionary",
    slug: "longest-word-in-dictionary",
    difficulty: "Medium",
    pillarSlug: "trie",
    statement: "Given an array of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.",
    starterCode: `function longestWord(words) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function longestWordBrute(words) {
  const set = new Set(words);
  let best = "";
  for (const w of words) {
    let valid = true;
    for (let i = 1; i < w.length; i++) {
      if (!set.has(w.substring(0, i))) {
        valid = false;
        break;
      }
    }
    if (valid) {
      if (w.length > best.length || (w.length === best.length && w < best)) {
        best = w;
      }
    }
  }
  return best;
}`,
      language: "javascript",
      explanation: "Place all words in a Set. For each word, extract all of its prefixes and verify their existence in the set. O(N * L^2) time due to substring allocations.",
    },
    better: {
      code: `function longestWordSort(words) {
  words.sort(); // Lexicographical sort
  const built = new Set([""]);
  let best = "";
  for (const w of words) {
    if (built.has(w.substring(0, w.length - 1))) {
      built.add(w);
      if (w.length > best.length) {
        best = w;
      }
    }
  }
  return best;
}`,
      language: "javascript",
      explanation: "Sort words alphabetically. This guarantees prefixes are processed before longer words. Check if the parent prefix `w[0..N-2]` was already successfully built. Uses O(N log N) sort time.",
    },
    optimal: {
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.word = "";
  }
}

function longestWordOptimal(words) {
  const root = new TrieNode();
  for (const w of words) {
    let node = root;
    for (const char of w) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.word = w;
  }

  let result = "";
  function dfs(node) {
    if (!node) return;
    if (node !== root && !node.word) return; // Must be built by existing word
    
    if (node.word.length > result.length) {
      result = node.word;
    }
    
    // Loop letters from 'a' to 'z' to handle lexicographical ties automatically
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(97 + i);
      if (node.children[char]) {
        dfs(node.children[char]);
      }
    }
  }
  
  dfs(root);
  return result;
}`,
      language: "javascript",
      explanation: "Insert words in a Trie. Perform a DFS traversal starting at the root. We only visit child nodes that represent valid words in our dictionary (`node.word` is not empty). Iterate through children keys alphabetically from 'a' to 'z'. This solves ties naturally without sorting, running in linear O(N * L) time.",
    },
    timeComplexity: "O(n * l)",
    spaceComplexity: "O(n * l)",
    dryRun: [
      { line: 1, variables: { words: '["w","wo","wor"]' }, description: "Trie built. dfs(root) visits 'w' (valid). result='w'." },
      { line: 2, variables: { node: '"wo"' }, description: "Move to 'wo' child (valid). result='wo'." },
      { line: 3, variables: { node: '"wor"' }, description: "Move to 'wor' child (valid). result='wor'. End DFS. Return 'wor'." }
    ],
    interviewDiscussion: [
      {
        question: "Why does traversing children keys from 'a' to 'z' solve lexicographical ties?",
        answer: "Since we search children alphabetically from 'a' to 'z', a node representing a lexicographically smaller word is evaluated first. Since we only update the result when `node.word.length > result.length` (strict inequality), a later tie-breaker with the same length will not overwrite the alphabetically smaller word."
      }
    ]
  }
];
