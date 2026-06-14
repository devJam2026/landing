export interface ProblemSolution {
  code: string;
  language: string;
  explanation: string;
}

export interface DryRunStep {
  line: number;
  variables: Record<string, string | number>;
  description: string;
}

export interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  pillarSlug: string;
  statement: string;
  starterCode: string;
  bruteForce: ProblemSolution;
  better: ProblemSolution;
  optimal: ProblemSolution;
  timeComplexity: string;
  spaceComplexity: string;
  dryRun: DryRunStep[];
  interviewDiscussion: {
    question: string;
    answer: string;
  }[];
  pattern?: string;
  edgeCases?: string[];
  commonMistakes?: string[];
}
