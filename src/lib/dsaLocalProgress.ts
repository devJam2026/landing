import { IDsaProgressService, ChecklistProgressSummary } from "./dsaProgressTypes";
import { getChecklistItems } from "@/data/dsa/checklists";

const KEYS = {
  solved: "devjam:dsa:solvedProblems",
  attempted: "devjam:dsa:attemptedProblems",
  bookmarked: "devjam:dsa:bookmarkedProblems",
  checklistProgress: "devjam:dsa:checklistProgress",
};

function isClient(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function getList(key: string): string[] {
  if (!isClient()) return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("LocalStorage read failed:", e);
    return [];
  }
}

function setList(key: string, list: string[]): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) {
    console.warn("LocalStorage write failed:", e);
  }
}

export const dsaLocalProgress: IDsaProgressService = {
  getSolvedProblems() {
    return getList(KEYS.solved);
  },

  markSolved(problemSlug: string) {
    const list = getList(KEYS.solved);
    if (!list.includes(problemSlug)) {
      list.push(problemSlug);
      setList(KEYS.solved, list);
      // Remove from attempted if solved
      this.unmarkAttempted(problemSlug);
    }
  },

  unmarkSolved(problemSlug: string) {
    const list = getList(KEYS.solved);
    const idx = list.indexOf(problemSlug);
    if (idx !== -1) {
      list.splice(idx, 1);
      setList(KEYS.solved, list);
    }
  },

  getAttemptedProblems() {
    return getList(KEYS.attempted);
  },

  markAttempted(problemSlug: string) {
    // If already solved, do not mark as attempted
    const solved = getList(KEYS.solved);
    if (solved.includes(problemSlug)) return;

    const list = getList(KEYS.attempted);
    if (!list.includes(problemSlug)) {
      list.push(problemSlug);
      setList(KEYS.attempted, list);
    }
  },

  unmarkAttempted(problemSlug: string) {
    const list = getList(KEYS.attempted);
    const idx = list.indexOf(problemSlug);
    if (idx !== -1) {
      list.splice(idx, 1);
      setList(KEYS.attempted, list);
    }
  },

  getBookmarkedProblems() {
    return getList(KEYS.bookmarked);
  },

  toggleBookmark(problemSlug: string): boolean {
    const list = getList(KEYS.bookmarked);
    const idx = list.indexOf(problemSlug);
    let bookmarked = false;
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push(problemSlug);
      bookmarked = true;
    }
    setList(KEYS.bookmarked, list);
    return bookmarked;
  },

  getChecklistProgress(checklistSlug: string): ChecklistProgressSummary {
    const items = getChecklistItems(checklistSlug);
    const totalCount = items.length;

    if (totalCount === 0) {
      return { solvedCount: 0, attemptedCount: 0, totalCount: 0, percent: 0 };
    }

    const solved = getList(KEYS.solved);
    const attempted = getList(KEYS.attempted);

    const checklistSlugs = items.map(item => item.problemSlug);
    
    const solvedCount = checklistSlugs.filter(slug => solved.includes(slug)).length;
    const attemptedCount = checklistSlugs.filter(slug => attempted.includes(slug)).length;

    const percent = Math.round((solvedCount / totalCount) * 100);

    return {
      solvedCount,
      attemptedCount,
      totalCount,
      percent
    };
  },

  resetChecklistProgress(checklistSlug: string) {
    const items = getChecklistItems(checklistSlug);
    const checklistSlugs = items.map(item => item.problemSlug);

    // Filter solved and attempted lists to exclude slugs in this checklist
    const solved = getList(KEYS.solved);
    const remainingSolved = solved.filter(slug => !checklistSlugs.includes(slug));
    setList(KEYS.solved, remainingSolved);

    const attempted = getList(KEYS.attempted);
    const remainingAttempted = attempted.filter(slug => !checklistSlugs.includes(slug));
    setList(KEYS.attempted, remainingAttempted);
  }
};
