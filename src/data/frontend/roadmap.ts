export type FrontendRoadmapNode = {
  id: string;
  title: string;
  trackSlug: string;
  order: number;
  description: string;
  milestone: string;
  isComplete: boolean;
};

export const frontendRoadmap: FrontendRoadmapNode[] = [
  {
    id: "step-1",
    title: "1. Frontend Foundation",
    trackSlug: "foundation",
    order: 1,
    description: "Master browser rendering engines, network roundtrips, event loop task queues scheduling, and TypeScript generic boundaries.",
    milestone: "Build 3 foundation playground projects, verifying browser painting and event execution cycles.",
    isComplete: false
  },
  {
    id: "step-2",
    title: "2. React Engineering",
    trackSlug: "react-engineering",
    order: 2,
    description: "Deep dive components rendering life cycles, state updates batches, fiber reconciliation, and custom hooks composition bounds.",
    milestone: "Construct 3 React laboratory workspaces tracing virtual DOM diff optimizations.",
    isComplete: false
  },
  {
    id: "step-3",
    title: "3. State Management & Server State",
    trackSlug: "state-management",
    order: 3,
    description: "Compare redux-like centralized states with hook-based context stores, cache sync algorithms, and optimistic transactional checkout updates.",
    milestone: "Deploy React Query cache dashboards and transactional payment flow mocks.",
    isComplete: false
  },
  {
    id: "step-4",
    title: "4. Frontend Performance Engineering",
    trackSlug: "performance",
    order: 4,
    description: "Measure, debug, and optimize real-world frontend performance using Core Web Vitals, bundle analysis, and rendering profiling.",
    milestone: "Build performance dashboards measuring interactive metrics.",
    isComplete: false
  },
  {
    id: "step-5",
    title: "5. Design Systems and Accessibility",
    order: 5,
    trackSlug: "design-systems",
    description: "Design theme variables schemes using unified tokens, keyboard traps, ARIA bindings, and Storybook visual tests.",
    milestone: "Build isolated custom design systems UI libraries.",
    isComplete: false
  },
  {
    id: "step-6",
    title: "6. Frontend Architecture",
    order: 6,
    trackSlug: "architecture",
    description: "Architect directory configurations decoupling UI components from business domains, generic validators schemas compilers, and monorepos integrations.",
    milestone: "Deploy scalable application architecture templates.",
    isComplete: false
  },
  {
    id: "step-7",
    title: "7. Micro Frontends",
    order: 7,
    trackSlug: "micro-frontends",
    description: "Federate frontend routes at runtime layer using Module Federation, dynamic routers synchronizations, and shared dependency scopes.",
    milestone: "Deploy federated microfrontends shells.",
    isComplete: false
  },
  {
    id: "step-8",
    title: "8. Build Systems and Tooling",
    order: 8,
    trackSlug: "build-tooling",
    description: "Transpile components scripts using high-performance SWC and ESBuild setups, and trace tree-shaking limitations in ESM imports.",
    milestone: "Build bundlers comparing custom config files output size.",
    isComplete: false
  },
  {
    id: "step-9",
    title: "9. Testing Strategy",
    order: 9,
    trackSlug: "testing",
    description: "Design mock setups, snapshot regressions assertions, and concurrent Playwright test scripts verifying end-to-end integration paths.",
    milestone: "Launch visual integration suites checking UI layouts regressions.",
    isComplete: false
  },
  {
    id: "step-10",
    title: "10. SSR, Streaming, and Edge Rendering",
    order: 10,
    trackSlug: "rendering",
    description: "Stream HTML documents recursively using Next.js Server Components, and evaluate rendering performance tradeoffs at edge layers.",
    milestone: "Build edge templates rendering content maps with minimum TTFB latency.",
    isComplete: false
  },
  {
    id: "step-11",
    title: "11. Frontend Security",
    order: 11,
    trackSlug: "security",
    description: "Enforce strict CSP policies restricting external scripts injection, secure authentication cookie attributes, and OAuth PKCE codes flows.",
    milestone: "Configure secure authentication pipelines with token rotation.",
    isComplete: false
  },
  {
    id: "step-12",
    title: "12. Frontend Observability",
    order: 12,
    trackSlug: "observability",
    description: "Track runtime crashes stack traces, user performance timings User Timing APIs, and canary rolled out feature flags updates.",
    milestone: "Deploy observability gateways logging telemetry inputs.",
    isComplete: false
  },
  {
    id: "step-13",
    title: "13. Frontend System Design",
    order: 13,
    trackSlug: "system-design",
    description: "Design collaborative infinite canvases architectures, media streaming chunk handlers, pre-fetching algorithms, and robust offline sync state machines.",
    milestone: "Design complex mock system designs matching senior interview requirements.",
    isComplete: false
  },
  {
    id: "step-14",
    title: "14. Frontend Interview Mastery",
    order: 14,
    trackSlug: "interview-mastery",
    description: "Answer deep closures and engines compilation questions, complete machine coding trials under constraints, and present technical leadership tradeoffs.",
    milestone: "Document portfolio interview case books and practice sets.",
    isComplete: false
  }
];
