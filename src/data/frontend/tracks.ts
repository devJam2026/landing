export type FrontendContentStatus =
  | "complete"
  | "in-progress"
  | "placeholder"
  | "coming-soon"
  | "available";

export type FrontendCurriculumTrack = {
  id: string;
  order: number;
  groupId: string;
  title: string;
  slug: string;
  description: string;
  status: FrontendContentStatus;
  projectCount: number;
  outcomes: string[];
  submodules: string[];
  difficulty: "beginner" | "intermediate" | "advanced" | "architect";
  estimatedHours: number;
  interviewRelevance: "low" | "medium" | "high" | "critical";
  prerequisites?: string[];
  caseStudyCount?: number;
};

export const frontendTracks: FrontendCurriculumTrack[] = [
  // Group A
  {
    id: "track-1",
    order: 1,
    groupId: "group-a",
    title: "Web Platform Foundation",
    slug: "web-platform-foundation",
    description: "Master document semantics, layout engines, DOM/CSSOM construction, event loops task scheduling, and web browser caching foundations.",
    status: "available",
    projectCount: 2,
    difficulty: "beginner",
    estimatedHours: 40,
    interviewRelevance: "high",
    prerequisites: [],
    outcomes: ["html-semantics-web", "css-layouts-web", "browser-rendering-flow"],
    submodules: ["html-semantics-web", "css-layouts-web", "browser-rendering-flow"]
  },
  {
    id: "track-2",
    order: 2,
    groupId: "group-a",
    title: "Modern JavaScript & TypeScript",
    slug: "modern-js-ts",
    description: "Deconstruct closures, execution contexts, generic constraints, mapped utility types, and structural type narrowings.",
    status: "available",
    projectCount: 1,
    difficulty: "intermediate",
    estimatedHours: 35,
    interviewRelevance: "critical",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["es6-advanced-features", "typescript-safety-generics"],
    submodules: ["es6-advanced-features", "typescript-safety-generics"]
  },
  {
    id: "track-3",
    order: 3,
    groupId: "group-a",
    title: "Component Engineering",
    slug: "component-engineering",
    description: "Design robust component interfaces, managed prop boundaries, slot compositions, and controlled component patterns.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "intermediate",
    estimatedHours: 30,
    interviewRelevance: "high",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["props-composition-patterns"],
    submodules: ["props-composition-patterns"]
  },

  // Group B
  {
    id: "track-4",
    order: 4,
    groupId: "group-b",
    title: "React Engineering",
    slug: "react-engineering",
    description: "Deep dive virtual DOM diff reconciliation, fiber updates scheduling pipelines, hooks execution cycles, and rendering performance profiling.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 45,
    interviewRelevance: "critical",
    prerequisites: ["modern-js-ts", "component-engineering"],
    outcomes: ["react-fiber-reconciler"],
    submodules: ["react-fiber-reconciler"]
  },
  {
    id: "track-5",
    order: 5,
    groupId: "group-b",
    title: "Next.js Engineering",
    slug: "nextjs-engineering",
    description: "Scale applications leveraging App Router routing layout hierarchies, Server Components, server actions, and HTML streams.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 50,
    interviewRelevance: "high",
    prerequisites: ["react-engineering"],
    outcomes: ["nextjs-app-router-rendering"],
    submodules: ["nextjs-app-router-rendering"]
  },
  {
    id: "track-6",
    order: 6,
    groupId: "group-b",
    title: "Node.js for Frontend Architects",
    slug: "nodejs-for-frontend",
    description: "Manage servers side execution, npm package scopes, dependency checks compilation pipelines, and BFF proxy middleware routes.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "intermediate",
    estimatedHours: 25,
    interviewRelevance: "medium",
    prerequisites: ["modern-js-ts"],
    outcomes: ["nodejs-runtime-execution"],
    submodules: ["nodejs-runtime-execution"]
  },
  {
    id: "track-7",
    order: 7,
    groupId: "group-b",
    title: "Express / FastAPI Integration",
    slug: "express-fastapi-integration",
    description: "Build Node or Python API gateways validating schemas, formatting client payloads, and securing environments.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "intermediate",
    estimatedHours: 30,
    interviewRelevance: "medium",
    prerequisites: ["nodejs-for-frontend"],
    outcomes: ["express-fastapi-boundaries"],
    submodules: ["express-fastapi-boundaries"]
  },
  {
    id: "track-8",
    order: 8,
    groupId: "group-b",
    title: "GraphQL for Frontend Systems",
    slug: "graphql-for-frontend",
    description: "Query graph models utilizing Apollo Client, resolving normalized caching schemas, fragments, and queries variables.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 30,
    interviewRelevance: "high",
    prerequisites: ["react-engineering"],
    outcomes: ["graphql-schema-apollo-cache"],
    submodules: ["graphql-schema-apollo-cache"]
  },

  // Group C
  {
    id: "track-9",
    order: 9,
    groupId: "group-c",
    title: "State Management & Server State",
    slug: "state-management-server-state",
    description: "Separate transient UI state from query caches using Zustand and React Query, validating local transactions rollbacks.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 40,
    interviewRelevance: "critical",
    prerequisites: ["react-engineering"],
    outcomes: ["client-state-server-state-sync"],
    submodules: ["client-state-server-state-sync"]
  },
  {
    id: "track-10",
    order: 10,
    groupId: "group-c",
    title: "API Design for Frontend Engineers",
    slug: "api-design-for-frontend",
    description: "Design pagination cursors, retry-backoff algorithms, standard JSON response errors, and schema contract testing.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 30,
    interviewRelevance: "critical",
    prerequisites: ["express-fastapi-integration"],
    outcomes: ["api-design-resiliency-testing"],
    submodules: ["api-design-resiliency-testing"]
  },

  // Group D
  {
    id: "track-11",
    order: 11,
    groupId: "group-d",
    title: "Frontend Architecture Fundamentals",
    slug: "frontend-architecture-fundamentals",
    description: "Architect folders structures segregating presentations layouts, business logic domains, and API endpoints adapter layers.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 35,
    interviewRelevance: "critical",
    prerequisites: ["react-engineering"],
    outcomes: ["clean-architecture-frontend-layers"],
    submodules: ["clean-architecture-frontend-layers"]
  },
  {
    id: "track-12",
    order: 12,
    groupId: "group-d",
    title: "Micro Frontends",
    slug: "micro-frontends",
    description: "Scale development pipelines leveraging module federation, runtime scripts composition, and decoupled micro events paths.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 40,
    interviewRelevance: "high",
    prerequisites: ["frontend-architecture-fundamentals"],
    outcomes: ["micro-frontends-module-federation"],
    submodules: ["micro-frontends-module-federation"]
  },
  {
    id: "track-13",
    order: 13,
    groupId: "group-d",
    title: "Monorepo Architecture",
    slug: "monorepo-architecture",
    description: "Configure monorepos utilizing pnpm workspaces and Turborepo caching pipelines to speed up compiler tasks.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 30,
    interviewRelevance: "medium",
    prerequisites: ["frontend-architecture-fundamentals"],
    outcomes: ["monorepo-turborepo-nx-workspaces"],
    submodules: ["monorepo-turborepo-nx-workspaces"]
  },
  {
    id: "track-14",
    order: 14,
    groupId: "group-d",
    title: "Modular Monolith Frontend",
    slug: "modular-monolith-frontend",
    description: "Structure modular monolithic codebases using strict package borders and ESLint boundaries constraints.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 25,
    interviewRelevance: "medium",
    prerequisites: ["frontend-architecture-fundamentals"],
    outcomes: ["modular-monolith-folder-boundaries"],
    submodules: ["modular-monolith-folder-boundaries"]
  },
  {
    id: "track-15",
    order: 15,
    groupId: "group-d",
    title: "Frontend Design Patterns",
    slug: "frontend-design-patterns",
    description: "Implement Adapter schema conversions, Facade state abstractions, command handlers, and dynamic plugin structures.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 35,
    interviewRelevance: "critical",
    prerequisites: ["modern-js-ts"],
    outcomes: ["design-patterns-adapter-facade"],
    submodules: ["design-patterns-adapter-facade"]
  },
  {
    id: "track-16",
    order: 16,
    groupId: "group-d",
    title: "Design Systems & Component Libraries",
    slug: "design-systems-component-libraries",
    description: "Generate platform variables mapping design tokens schemas, build accessible components, and document usage profiles.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 45,
    interviewRelevance: "high",
    prerequisites: ["component-engineering"],
    outcomes: ["design-tokens-themes-storybook"],
    submodules: ["design-tokens-themes-storybook"]
  },

  // Group E
  {
    id: "track-17",
    order: 17,
    groupId: "group-e",
    title: "Frontend Performance Engineering",
    slug: "frontend-performance-engineering",
    description: "Track performance metrics Core Web Vitals (LCP, INP, CLS), optimize code split bundles, and isolate execution loops.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 50,
    interviewRelevance: "critical",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["core-web-vitals-performance-auditing"],
    submodules: ["core-web-vitals-performance-auditing"]
  },
  {
    id: "track-18",
    order: 18,
    groupId: "group-e",
    title: "Frontend Caching Architecture",
    slug: "frontend-caching-architecture",
    description: "Deploy CDN templates caching headers, configure service workers caches, and manage client-side state validations.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 30,
    interviewRelevance: "high",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["http-cdn-react-query-caching"],
    submodules: ["http-cdn-react-query-caching"]
  },
  {
    id: "track-19",
    order: 19,
    groupId: "group-e",
    title: "Frontend Security",
    slug: "frontend-security",
    description: "Write content security policies headers blocking script injections, secure cookies tokens, and audit packages dependencies.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 30,
    interviewRelevance: "critical",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["xss-csrf-csp-cors-security"],
    submodules: ["xss-csrf-csp-cors-security"]
  },
  {
    id: "track-20",
    order: 20,
    groupId: "group-e",
    title: "Accessibility Engineering",
    slug: "accessibility-engineering",
    description: "Code screen-reader accessible documents, handle interactive keyboard focus overlays, and execute WCAG AA audits.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 35,
    interviewRelevance: "high",
    prerequisites: ["web-platform-foundation"],
    outcomes: ["wcag-aria-accessible-forms-modals"],
    submodules: ["wcag-aria-accessible-forms-modals"]
  },
  {
    id: "track-21",
    order: 21,
    groupId: "group-e",
    title: "Frontend Reliability & Resilience",
    slug: "frontend-reliability-resilience",
    description: "Build robust interface fallbacks, retry logic boundaries, circuit breakers parameters, and graceful loading state pages.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 25,
    interviewRelevance: "medium",
    prerequisites: ["react-engineering"],
    outcomes: ["error-boundaries-fallback-uis"],
    submodules: ["error-boundaries-fallback-uis"]
  },
  {
    id: "track-22",
    order: 22,
    groupId: "group-e",
    title: "Frontend Observability & Production",
    slug: "frontend-observability-production",
    description: "Monitor user interaction timings user Timing APIs, log compiled javascript exceptions, and configure feature flags canary rollouts.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 30,
    interviewRelevance: "high",
    prerequisites: ["nodejs-for-frontend"],
    outcomes: ["logging-sentry-real-user-monitoring"],
    submodules: ["logging-sentry-real-user-monitoring"]
  },
  {
    id: "track-23",
    order: 23,
    groupId: "group-e",
    title: "Testing Strategy",
    slug: "testing-strategy",
    description: "Enforce code validation pyramids combining Playwright integration checks, MSW backend mocks, and components regression tests.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "advanced",
    estimatedHours: 40,
    interviewRelevance: "high",
    prerequisites: ["react-engineering"],
    outcomes: ["playwright-msw-testing-pyramid"],
    submodules: ["playwright-msw-testing-pyramid"]
  },
  {
    id: "track-24",
    order: 24,
    groupId: "group-e",
    title: "Build Systems, Tooling & CI/CD",
    slug: "build-systems-tooling-ci-cd",
    description: "Optimize compiler pipelines using Vite and SWC tools, configure bundle splits, and build tree shaking verification checks.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 35,
    interviewRelevance: "medium",
    prerequisites: ["nodejs-for-frontend"],
    outcomes: ["vite-webpack-swc-compiler-ci"],
    submodules: ["vite-webpack-swc-compiler-ci"]
  },

  // Group F
  {
    id: "track-25",
    order: 25,
    groupId: "group-f",
    title: "Frontend System Design Fundamentals",
    slug: "frontend-system-design-fundamentals",
    description: "Deconstruct specifications mapping functional data layers, state models caching configurations, and deployment strategies.",
    status: "coming-soon",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 40,
    interviewRelevance: "critical",
    prerequisites: ["frontend-architecture-fundamentals"],
    outcomes: ["system-design-requirements-contracts"],
    submodules: ["system-design-requirements-contracts"]
  },
  {
    id: "track-26",
    order: 26,
    groupId: "group-f",
    title: "Real-World Frontend Case Studies",
    slug: "real-world-frontend-case-studies",
    description: "Walk through 20 structured senior design interviews mapping feeds dynamic updates, canvas collaborative loops, and checkout pages.",
    status: "available",
    projectCount: 0,
    difficulty: "architect",
    estimatedHours: 60,
    interviewRelevance: "critical",
    prerequisites: ["frontend-system-design-fundamentals"],
    caseStudyCount: 20,
    outcomes: ["case-studies-system-design-review"],
    submodules: ["case-studies-system-design-review"]
  },

  // Group G
  {
    id: "track-27",
    order: 27,
    groupId: "group-g",
    title: "Frontend Architect Capstones",
    slug: "frontend-architect-capstones",
    description: "Deploy production-grade federated client dashboards, custom testing tools, and design systems packages.",
    status: "available",
    projectCount: 10,
    difficulty: "architect",
    estimatedHours: 100,
    interviewRelevance: "high",
    prerequisites: ["real-world-frontend-case-studies"],
    outcomes: ["capstones-portfolio-projects-kit"],
    submodules: ["capstones-portfolio-projects-kit"]
  }
];
