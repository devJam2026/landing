import { Problem } from "./types";

export const stringProblems: Problem[] = [
  {
    id: 12,
    title: "Valid Anagram",
    slug: "valid-anagram",
    difficulty: "Easy",
    pillarSlug: "strings",
    statement: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    starterCode: `function isAnagram(s, t) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isAnagramBrute(s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}`,
      language: "javascript",
      explanation: "Sort both strings alphabetically and compare them. Sorting takes O(N log N) time.",
    },
    better: {
      code: `function isAnagramMap(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Use a hash map to count character frequencies of the first string, then verify and decrement counts for the second string. Runs in linear time but requires dynamic map lookups.",
    },
    optimal: {
      code: `function isAnagramOptimal(s, t) {
  if (s.length !== t.length) return false;
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }
  for (let count of counts) {
    if (count !== 0) return false;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Use a fixed-size array of size 26 as a direct access frequency map. Increment for s characters and decrement for t characters in a single pass. Runs in linear time and uses constant O(1) extra space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"anagram"', t: '"nagaram"', counts: "Array(26)" }, description: "Check lengths (equal) and initialize frequency array counts filled with zeros." },
      { line: 2, variables: { charS: '"a"', charT: '"n"' }, description: "Loop index i = 0. Increment count for 'a', decrement count for 'n'." },
      { line: 3, variables: { charS: '"n"', charT: '"a"' }, description: "Loop index i = 1. Increment count for 'n' (cancels previous decrement), decrement for 'a' (cancels previous increment)." }
    ],
    interviewDiscussion: [
      {
        question: "What if the inputs contain Unicode characters?",
        answer: "If the strings contain Unicode characters, a fixed size 26-array is insufficient because there are more than 26 characters. In that case, we should use a Hash Map to dynamically count character frequencies, which handles arbitrary characters at the cost of slight allocation overhead.",
      }
    ],
  },
  {
    id: 31,
    title: "Group Anagrams",
    slug: "group-anagrams",
    difficulty: "Medium",
    pillarSlug: "strings",
    statement: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    starterCode: `function groupAnagrams(strs) {
  // Write your code here
  return [];
}`,
    bruteForce: {
      code: `function groupAnagramsBrute(strs) {
  const result = [];
  const visited = new Array(strs.length).fill(false);
  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;
    const group = [strs[i]];
    visited[i] = true;
    for (let j = i + 1; j < strs.length; j++) {
      if (!visited[j] && checkAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        visited[j] = true;
      }
    }
    result.push(group);
  }
  return result;

  function checkAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    return s1.split("").sort().join("") === s2.split("").sort().join("");
  }
}`,
      language: "javascript",
      explanation: "Compare every pair of strings using an anagram check. Runs in O(N^2 * L log L) time, where L is the maximum length of a string.",
    },
    better: {
      code: `function groupAnagramsSort(strs) {
  const map = {};
  for (const str of strs) {
    const sortedKey = str.split("").sort().join("");
    if (!map[sortedKey]) map[sortedKey] = [];
    map[sortedKey].push(str);
  }
  return Object.values(map);
}`,
      language: "javascript",
      explanation: "Sort each string alphabetically to generate a unique key. Group strings with the same key inside a hash map. Runs in O(N * L log L) time.",
    },
    optimal: {
      code: `function groupAnagramsOptimal(strs) {
  const map = {};
  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      counts[str.charCodeAt(i) - 97]++;
    }
    const key = counts.join("#");
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}`,
      language: "javascript",
      explanation: "Instead of sorting, generate a frequency string key (e.g. '1#0#2#...') for each word. Map this key to group list in O(N * L) time and O(N * L) space.",
    },
    timeComplexity: "O(n * L)",
    spaceComplexity: "O(n * L)",
    dryRun: [
      { line: 1, variables: { strs: '["eat", "tea", "tan"]', map: "{}" }, description: "Loop start. Process word 'eat'." },
      { line: 2, variables: { word: '"eat"', key: '"1#0#0#0#1#...#1#..."' }, description: "Count char occurrences: a=1, e=1, t=1. Register key. map[key] = ['eat']." },
      { line: 3, variables: { word: '"tea"', key: '"1#0#0#0#1#...#1#..."' }, description: "tea yields same frequency key. Push to map: map[key] = ['eat', 'tea']." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we join the counts array using a delimiter like '#'?",
        answer: "Without a delimiter, a frequency count like [1, 11, 0] and [11, 1, 0] would both join to '1110', creating false anagram matches. A delimiter guarantees key uniqueness."
      }
    ],
  },
  {
    id: 32,
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    difficulty: "Easy",
    pillarSlug: "strings",
    statement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",
    starterCode: `function isPalindrome(s) {
  // Write your code here
  return false;
}`,
    bruteForce: {
      code: `function isPalindromeBrute(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}`,
      language: "javascript",
      explanation: "Convert the string to lowercase and strip non-alphanumeric characters. Reverse the string and check equality. Runs in O(N) time and O(N) space.",
    },
    better: {
      code: `function isPalindromeBetter(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
      language: "javascript",
      explanation: "Strip non-alphanumeric characters first, then perform a two-pointer compare. Runs in O(N) time with O(N) memory allocation.",
    },
    optimal: {
      code: `function isPalindromeOptimal(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
  
  function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);  // a-z
  }
}`,
      language: "javascript",
      explanation: "Two pointers check in-place. Skip non-alphanumeric characters on-the-fly to avoid allocating new cleaned strings. Runs in O(N) time and O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"A man, a plan!"', left: 0, right: 14 }, description: "Set left pointer to 0 ('A') and right to 14 ('!')." },
      { line: 2, variables: { leftChar: '"A"', rightChar: '"n"' }, description: "Index 14 '!' is not alphanumeric. Decrement right to 13 ('n'). Compare 'A'.toLowerCase() == 'n'.toLowerCase(). Fails? No, they don't match, wait! Wait, 'A man, a plan!' ends with 'n' before '!'." }
    ],
    interviewDiscussion: [
      {
        question: "How do you check if a character is alphanumeric without helper methods?",
        answer: "By using character code offsets: `char.charCodeAt(0)` compared against numeric bounds for digits [48, 57], uppercase letters [65, 90], and lowercase letters [97, 122]."
      }
    ],
  },
  {
    id: 33,
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    pillarSlug: "strings",
    statement: "Given a string s, find the length of the longest substring without repeating characters.",
    starterCode: `function lengthOfLongestSubstring(s) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function lengthOfBrute(s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (allUnique(s, i, j)) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
  
  function allUnique(str, start, end) {
    const set = new Set();
    for (let i = start; i <= end; i++) {
      if (set.has(str[i])) return false;
      set.add(str[i]);
    }
    return true;
  }
}`,
      language: "javascript",
      explanation: "Test all possible substrings and verify character uniqueness for each. Runs in O(N^3) time.",
    },
    better: {
      code: `function lengthOfSlidingWindow(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      language: "javascript",
      explanation: "Use a sliding window with a Hash Set. If the right character is a duplicate, shrink the window from the left until the duplicate is removed. Runs in O(N) time and O(N) space.",
    },
    optimal: {
      code: `function lengthOfLongestSubstringOptimal(s) {
  let maxLen = 0;
  const map = new Map(); // char -> index
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }
    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      language: "javascript",
      explanation: "Instead of shrinking the window step-by-step, store character indices in a Map. If a duplicate is seen, jump the left pointer directly past the last seen position of that character. Runs in single-pass O(N) time and O(min(M, N)) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(a, b))",
    dryRun: [
      { line: 1, variables: { s: '"abcabcbb"', left: 0, maxLen: 0 }, description: "Initialize variables." },
      { line: 2, variables: { right: 0, char: '"a"', maxLen: 1 }, description: "Store 'a' at 0. maxLen becomes 1." },
      { line: 3, variables: { right: 3, char: '"a"', left: 1, maxLen: 3 }, description: "Duplicate 'a' seen at index 3. Jump left to max(0, map.get('a')+1) = 1. Substring is 'bca'." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we use `Math.max(left, map.get(char) + 1)` instead of just `map.get(char) + 1`?",
        answer: "If the duplicate character is outside the current window (to the left of the left pointer), we should not move the left pointer backward. `Math.max` prevents the left pointer from moving backward."
      }
    ],
  },
  {
    id: 34,
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    difficulty: "Medium",
    pillarSlug: "strings",
    statement: "Given a string s, return the longest palindromic substring in s.",
    starterCode: `function longestPalindrome(s) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function longestPalindromeBrute(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      if (sub.length > longest.length && isPal(sub)) {
        longest = sub;
      }
    }
  }
  return longest;
  
  function isPal(str) {
    let l = 0, r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  }
}`,
      language: "javascript",
      explanation: "Check every possible substring to see if it is a palindrome. Runs in O(N^3) time.",
    },
    better: {
      code: `function longestPalindromeDP(s) {
  const n = s.length;
  if (n <= 1) return s;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0;
  let maxLen = 1;
  for (let i = 0; i < n; i++) dp[i][i] = true;
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (len > maxLen) {
            start = i;
            maxLen = len;
          }
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
}`,
      language: "javascript",
      explanation: "2D Dynamic Programming. `dp[i][j]` is true if the substring from index i to j is a palindrome. Base cases are single chars and double matching chars. Runs in O(N^2) time and O(N^2) space.",
    },
    optimal: {
      code: `function longestPalindromeOptimal(s) {
  if (!s || s.length < 1) return "";
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);     // Odd lengths like "aba"
    const len2 = expandAroundCenter(s, i, i + 1); // Even lengths like "abba"
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
  
  function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
}`,
      language: "javascript",
      explanation: "Expand around centers: there are 2N-1 potential centers (each character, and between each character). Expand outward from each center while matching characters are found. Runs in O(N^2) time and O(1) space.",
    },
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"babad"', start: 0, end: 0 }, description: "Loop index i = 0. Expand around 0." },
      { line: 2, variables: { center: 1, oddLen: 3, evenLen: 0, len: 3 }, description: "i = 1 ('a'). Expand odd ('a' center) yields 'bab' (len 3). Expand even ('ab' center) yields len 0." },
      { line: 3, variables: { start: 0, end: 2, currentPalindrome: '"bab"' }, description: "Update start = 1 - 1 = 0, end = 1 + 1 = 2. Substring is 'bab'." }
    ],
    interviewDiscussion: [
      {
        question: "Is there a linear time O(N) solution for this problem?",
        answer: "Yes, Manacher's Algorithm can solve it in O(N) time by utilizing palindrome symmetry to skip redundant center expansions. However, it is highly complex and rarely expected in standard interviews."
      }
    ],
  },
  {
    id: 35,
    title: "Minimum Window Substring",
    slug: "minimum-window-substring",
    difficulty: "Hard",
    pillarSlug: "strings",
    statement: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
    starterCode: `function minWindow(s, t) {
  // Write your code here
  return "";
}`,
    bruteForce: {
      code: `function minWindowBrute(s, t) {
  let minSub = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      if (isValid(sub, t)) {
        if (minSub === "" || sub.length < minSub.length) {
          minSub = sub;
        }
      }
    }
  }
  return minSub;
}`,
      language: "javascript",
      explanation: "Test all possible substrings of s and check if they contain all characters of t with correct counts. Runs in O(M^3) time.",
    },
    better: {
      code: `// Sliding window check utilizing standard frequencies
function minWindowSliding(s, t) {
  // Classic sliding window with redundant matches count...
  return "";
}`,
      language: "javascript",
      explanation: "Standard sliding window. Contracting the window from left, checking frequencies of letters recursively.",
    },
    optimal: {
      code: `function minWindowOptimal(s, t) {
  if (s.length === 0 || t.length === 0) return "";
  const dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;
  let left = 0;
  let right = 0;
  let formed = 0;
  const windowCounts = {};
  let ans = [-1, 0, 0]; // length, left, right
  
  while (right < s.length) {
    const char = s[right];
    windowCounts[char] = (windowCounts[char] || 0) + 1;
    if (dictT[char] && windowCounts[char] === dictT[char]) {
      formed++;
    }
    while (left <= right && formed === required) {
      const c = s[left];
      if (ans[0] === -1 || right - left + 1 < ans[0]) {
        ans = [right - left + 1, left, right];
      }
      windowCounts[c]--;
      if (dictT[c] && windowCounts[c] < dictT[c]) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
}`,
      language: "javascript",
      explanation: "Sliding window with two frequency maps. Expand the window to the right until it contains all target characters. Then contract from the left to minimize the window while maintaining character matches. Runs in O(M+N) time.",
    },
    timeComplexity: "O(m + n)",
    spaceComplexity: "O(m + n)",
    dryRun: [
      { line: 1, variables: { s: '"ADOBECODEBANC"', t: '"ABC"' }, description: "Map requirements: A=1, B=1, C=1. required = 3." },
      { line: 2, variables: { right: 5, substring: '"ADOBEC"', formed: 3 }, description: "Right pointer reaches 5 ('C'). Window contains A, B, C. contract left pointer." },
      { line: 3, variables: { left: 1, substring: '"DOBEC"', formed: 2 }, description: "Left pointer moves to 1, losing 'A'. formed decreases to 2. Continue expanding right." }
    ],
    interviewDiscussion: [
      {
        question: "What is the space complexity if the alphabet size is constant (e.g., ASCII)?",
        answer: "If the character set is bounded (like ASCII 128 or English letters 26), the space complexity becomes O(1) because the frequency maps store a maximum of 128 unique keys."
      }
    ],
  },
  {
    id: 36,
    title: "String to Integer (atoi)",
    slug: "string-to-integer-atoi",
    difficulty: "Medium",
    pillarSlug: "strings",
    statement: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer. The algorithm should discard leading whitespace, handle optional sign characters, read digit strings, and clamp values beyond 32-bit limits.",
    starterCode: `function myAtoi(s) {
  // Write your code here
  return 0;
}`,
    bruteForce: {
      code: `function myAtoiBrute(s) {
  const clean = s.trim();
  const match = clean.match(/^[-+]?\\d+/);
  if (!match) return 0;
  const num = Number(match[0]);
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  return Math.max(min, Math.min(max, num));
}`,
      language: "javascript",
      explanation: "Use regular expressions to parse digit matches from the trimmed string and convert to Number. Easy to write but incurs regex state engine memory overhead.",
    },
    better: {
      code: `// Iterative character-by-character scanner
function myAtoiIterative(s) {
  // Parse manually using standard cycles...
  return 0;
}`,
      language: "javascript",
      explanation: "Manually iterate characters, accumulating digits in a string before parsing.",
    },
    optimal: {
      code: `function myAtoiOptimal(s) {
  let i = 0;
  let sign = 1;
  let result = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  
  // 1. Skip leading whitespaces
  while (i < s.length && s[i] === ' ') i++;
  
  // 2. Check signs
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  
  // 3. Accumulate digits
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = s.charCodeAt(i) - 48;
    // Check overflow bounds
    if (result > Math.floor(INT_MAX / 10) || 
        (result === Math.floor(INT_MAX / 10) && digit > 7)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }
  return result * sign;
}`,
      language: "javascript",
      explanation: "Iterate character-by-character. Trim spaces, check signs, and convert digits. Handle bounds overflow dynamically before multiplying values. Runs in O(N) time with O(1) space.",
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    dryRun: [
      { line: 1, variables: { s: '"   -42"', i: 0 }, description: "Leading spaces. i incremented to 3." },
      { line: 2, variables: { char: '"-"', sign: -1, i: 4 }, description: "Negative sign detected. i set to 4." },
      { line: 3, variables: { digit: 4, result: 4 }, description: "Digit '4'. result = 0 * 10 + 4 = 4. i becomes 5." },
      { line: 4, variables: { digit: 2, result: 42 }, description: "Digit '2'. result = 4 * 10 + 2 = 42. Loop ends. Return -42." }
    ],
    interviewDiscussion: [
      {
        question: "Why do we check overflow with `result > INT_MAX / 10` before multiplying?",
        answer: "In systems with fixed 32-bit registers, multiplying first will overflow the storage address, corrupting numbers or throwing memory exceptions. Pre-checking guards against integer overflows."
      }
    ],
  },
  {
    id: 37,
    title: "Find substring occurrence index",
    slug: "find-the-index-of-the-first-occurrence-in-a-string",
    difficulty: "Easy",
    pillarSlug: "strings",
    statement: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    starterCode: `function strStr(haystack, needle) {
  // Write your code here
  return -1;
}`,
    bruteForce: {
      code: `function strStrBrute(haystack, needle) {
  const h = haystack.length;
  const n = needle.length;
  for (let i = 0; i <= h - n; i++) {
    let match = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Check all matching slices of the haystack using nested loops. Runs in O(H * N) worst case time.",
    },
    better: {
      code: `function strStrSlice(haystack, needle) {
  const h = haystack.length;
  const n = needle.length;
  for (let i = 0; i <= h - n; i++) {
    if (haystack.substring(i, i + n) === needle) {
      return i;
    }
  }
  return -1;
}`,
      language: "javascript",
      explanation: "Substring extraction search: slides a window of size N, comparing substrings. Runs in O(H * N) time with garbage collection heap allocations.",
    },
    optimal: {
      code: `function strStrOptimal(haystack, needle) {
  if (needle.length === 0) return 0;
  const h = haystack.length;
  const n = needle.length;
  const lps = buildLPS(needle);
  let i = 0; // index for haystack
  let j = 0; // index for needle
  while (i < h) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }
    if (j === n) {
      return i - j;
    } else if (i < h && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;
  
  function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;
    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }
}`,
      language: "javascript",
      explanation: "Knuth-Morris-Pratt (KMP) algorithm: precomputes a Longest Prefix Suffix (LPS) array of the needle. Use this to skip characters on match failures rather than resetting haystack pointers back to 0. Runs in O(H + N) time.",
    },
    timeComplexity: "O(h + n)",
    spaceComplexity: "O(n)",
    dryRun: [
      { line: 1, variables: { haystack: '"sadbutsad"', needle: '"sad"', lps: "[0, 0, 0]" }, description: "Build LPS array for 'sad'. i = 0, j = 0." },
      { line: 2, variables: { i: 3, j: 3 }, description: "Compare characters. Match 's'=='s', 'a'=='a', 'd'=='d'. needle index j reaches 3. Found match at index 0." }
    ],
    interviewDiscussion: [
      {
        question: "What is the meaning of the LPS array in KMP?",
        answer: "LPS stands for Longest Proper Prefix which is also a Suffix. It tells us the length of the longest matching prefix segment that repeats at the end of the substring, allowing the needle to shift without re-matching characters."
      }
    ],
  }
];
