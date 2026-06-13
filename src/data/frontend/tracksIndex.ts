export type DifficultyLevel =
  | "Beginner"
  | "Intermediate"
  | "Senior"
  | "Architect";

export type InterviewWeight =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export type TrackModule = {
  id: string;
  title: string;
  description: string;
  badge?: string;
};

export type DeepDiveSection = {
  id: string;
  title: string;
  description: string;
  whyItMatters?: string;
  skills?: string[];
  bullets?: string[];
};

export type DiagramBlock = {
  id: string;
  title: string;
  description?: string;
  type: "architecture" | "sequence" | "flow" | "deployment";
  content: string;
};

export type Lab = {
  id: string;
  title: string;
  goal: string;
  concepts: string[];
  difficulty: DifficultyLevel;
  status: "Available" | "Coming Soon";
};

export type PracticeProject = {
  id: string;
  title: string;
  description: string;
  buildItems: string[];
  conceptsPracticed: string[];
  interviewValue: string;
  difficulty: DifficultyLevel;
  status: "Available" | "Coming Soon";
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  relevance: "Medium" | "High" | "Critical";
  tags: string[];
  slug?: string;
};

export type ArticleSummary = {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  readTime: string;
  tags: string[];
  slug: string;
  status: "Published" | "Coming Soon";
};

export type InterviewQuestion = {
  id: string;
  question: string;
  difficulty: DifficultyLevel;
  topic: string;
  shortAnswer: string;
  seniorAnswer: string;
  followUps: string[];
  commonMistakes: string[];
  relatedLabs: string[];
  relatedProjects: string[];
};

export type MockInterviewQuestion = {
  id: string;
  question: string;
  modelAnswer: string;
  followUpQuestions: string[];
  strongSignals: string[];
  weakSignals: string[];
  redFlags: string[];
  relatedConcepts: string[];
  relatedLabs?: string[];
  relatedProjects?: string[];
};

export type MockInterviewSection = {
  id: string;
  level: "Fundamentals" | "Intermediate" | "Senior/System Design";
  questions: MockInterviewQuestion[];
};

export type ScoringRubricSection = {
  level: "Fundamentals" | "Intermediate" | "Senior/System Design";
  scores: {
    score: number;
    description: string;
  }[];
};

export type RedFlagAnswer = {
  answer: string;
  whyWeak: string;
};

export type Reference = {
  title: string;
  url: string;
  description: string;
  type: "Official" | "Architecture" | "Interview" | "Implementation" | "Article";
};

export type FrontendTrackDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedHours: number;
  interviewWeight: InterviewWeight;

  prerequisites: string[];
  learningOutcomes: string[];

  modules: TrackModule[];
  deepDiveSections: DeepDiveSection[];
  diagrams: DiagramBlock[];
  labs: Lab[];
  projects: PracticeProject[];
  caseStudies: CaseStudy[];
  articles: ArticleSummary[];
  interviewQuestions: InterviewQuestion[];
  mockInterview: MockInterviewSection[];
  rapidFireQuestions: string[];
  scoringRubric: ScoringRubricSection[];
  redFlags: RedFlagAnswer[];
  strongCandidatePhrases: string[];
  commonMistakes: string[];
  architectChecklist: string[];
  references: Reference[];
};

import { microFrontendsDetail } from "./tracks/micro-frontends-detail";

export const frontendTrackDetails: Record<string, FrontendTrackDetail> = {
  "micro-frontends": microFrontendsDetail
};
