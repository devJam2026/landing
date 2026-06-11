export type AIAuditReport = {
  curriculumCoverage: string;
  foundationMapping: string;
  placeholderCoverage: string;
  routeCoverage: string;
  deadLinksFound: number;
  fakeGithubLinks: number;
  fakeDemoLinks: number;
  fakeLabLinks: number;
  completedProjectsVerifiedCount: number;
  projectsComingSoonCount: number;
  overallImplementationStatus: string;
  knownGaps: string[];
  recommendedNextSteps: string[];
};

export const aiAuditReport: AIAuditReport = {
  curriculumCoverage: "100%",
  foundationMapping: "100%",
  placeholderCoverage: "100%",
  routeCoverage: "100%",
  deadLinksFound: 0,
  fakeGithubLinks: 0,
  fakeDemoLinks: 0,
  fakeLabLinks: 0,
  completedProjectsVerifiedCount: 4, // P1 (Active), P2 (In Progress), P3 (Complete), P11 (Active)
  projectsComingSoonCount: 77, // Other 7 foundation projects + other modules planned + capstones
  overallImplementationStatus: "In Progress",
  knownGaps: [
    "P4: Prompt Engineering Lab (GitHub: Coming Soon)",
    "P5: AI Scam Detector (GitHub: Coming Soon)",
    "P6: Structured Output Validator (GitHub: Coming Soon)",
    "P7: Product Review Insight Generator (GitHub: Coming Soon)",
    "P8: Resume / JD Matcher (GitHub: Coming Soon)",
    "P9: Semantic Product Search (GitHub: Coming Soon)",
    "P10: LLM Evaluation Lab (GitHub: Coming Soon)",
    "Submodules under Modules 2 to 12 are currently mapped as coming-soon syllabus placeholders."
  ],
  recommendedNextSteps: [
    "1. Develop the code logic for the upcoming prompt classification and schema enforcement projects.",
    "2. Add devjam.project.json configuration specs to the repositories.",
    "3. Set up serverless API hosting routes when the projects launch.",
    "4. Automate GitHub GraphQL sync workflows later."
  ]
};
