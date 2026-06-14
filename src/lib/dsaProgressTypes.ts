export interface ChecklistProgressSummary {
  solvedCount: number;
  attemptedCount: number;
  totalCount: number;
  percent: number;
}

export interface IDsaProgressService {
  getSolvedProblems(): string[];
  markSolved(problemSlug: string): void;
  unmarkSolved(problemSlug: string): void;
  
  getAttemptedProblems(): string[];
  markAttempted(problemSlug: string): void;
  unmarkAttempted(problemSlug: string): void;
  
  getBookmarkedProblems(): string[];
  toggleBookmark(problemSlug: string): boolean;
  
  getChecklistProgress(checklistSlug: string): ChecklistProgressSummary;
  resetChecklistProgress(checklistSlug: string): void;
}
