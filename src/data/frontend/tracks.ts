export type FrontendContentStatus =
  | "complete"
  | "in-progress"
  | "placeholder"
  | "coming-soon";

export type FrontendCurriculumTrack = {
  id: string;
  slug: string;
  title: string;
  order: number;
  description: string;
  status: FrontendContentStatus;
  modules: string[];
  plannedProjects: string[];
  learningOutcomes: string[];
  interviewValue: string[];
};

export const frontendTracks: FrontendCurriculumTrack[] = [
  {
    id: "foundation",
    slug: "foundation",
    title: "Track 1: Frontend Foundation",
    order: 1,
    description: "Master browser loading, network protocols, HTML layout engines, DOM/CSSOM tree formation, and the JavaScript execution event loop.",
    status: "coming-soon",
    modules: ["browser-loading", "network-http", "html-semantics", "css-layouts", "js-engine", "typescript-fundamentals", "rendering-pipeline"],
    plannedProjects: ["browser-rendering-visualizer", "event-loop-playground", "typescript-type-safety-lab"],
    learningOutcomes: [
      "Explain document layouts paint and composite operations",
      "Deconstruct macrotasks and microtasks queues ordering",
      "Develop type-safe systems using TypeScript boundaries"
    ],
    interviewValue: [
      "Defend reflow optimization patterns in complex lists layouts",
      "Trace microtask executions inside rendering animation frames loops"
    ]
  },
  {
    id: "react-engineering",
    slug: "react-engineering",
    title: "Track 2: React Engineering",
    order: 2,
    description: "Deep dive into component lifecycle behaviors, state triggers, virtual DOM reconciliation, and performance hooks.",
    status: "coming-soon",
    modules: ["component-model", "hooks-behavior", "react-reconciliation", "rendering-lifecycle", "composition-error-boundaries"],
    plannedProjects: ["react-rendering-playground", "hooks-behavior-lab", "component-composition-studio"],
    learningOutcomes: [
      "Detail React Fiber node states updates propagation",
      "Eliminate expensive re-renders using useMemo and useCallback bounds",
      "Safeguard crashes utilizing custom React error boundary components"
    ],
    interviewValue: [
      "Explain standard Virtual DOM diffing algorithm time constraints",
      "Defend composition models over props drilling anti-patterns"
    ]
  },
  {
    id: "state-management",
    slug: "state-management",
    title: "Track 3: State Management & Server State",
    order: 3,
    description: "Manage client applications cache, state synchronization databases, and optimistic transactions.",
    status: "coming-soon",
    modules: ["state-architectures", "context-vs-redux", "zustand-library", "server-state-query", "cache-policies"],
    plannedProjects: ["state-management-comparison-lab", "query-cache-dashboard", "optimistic-ui-checkout"],
    learningOutcomes: [
      "Compare context stores against global mutable state hooks",
      "Configure automatic stale cache refresh durations on server state fetches",
      "Build fluid transactional checkout UI with rollback triggers"
    ],
    interviewValue: [
      "Defend server cache state separation from client UI configurations",
      "Propose strategies to prevent layout flickering during optimistic updates"
    ]
  },
  {
    id: "performance",
    slug: "performance",
    title: "Track 4: Frontend Performance Engineering",
    order: 4,
    description: "Measure, debug, and optimize real-world frontend performance using Core Web Vitals, bundle analysis, rendering profiling, and production monitoring.",
    status: "coming-soon",
    modules: ["core-web-vitals", "bundle-optimizations", "loading-strategies", "performance-profiling"],
    plannedProjects: ["core-web-vitals-dashboard", "bundle-analyzer-lab", "image-optimization-playground", "react-performance-profiler"],
    learningOutcomes: [
      "Debug INP bottlenecks using DevTools performance traces",
      "Reduce bundle load thresholds through code splitting imports",
      "Optimize layout stability (CLS) and content rendering speeds (LCP)"
    ],
    interviewValue: [
      "Explain how script parsing blocking impacts browser main thread latency",
      "Design dynamic asset loading systems targeting low-network environments"
    ]
  },
  {
    id: "design-systems",
    slug: "design-systems",
    title: "Track 5: Design Systems and Accessibility",
    order: 5,
    description: "Design accessible theme tokens, robust UI components structures, and component isolation workspaces.",
    status: "coming-soon",
    modules: ["design-tokens", "atomic-css", "wcag-accessibility", "interactive-aria", "storybook-testing"],
    plannedProjects: ["design-system-studio", "accessible-components-lab", "theme-token-builder"],
    learningOutcomes: [
      "Generate theme variables using scalable tokens schemas",
      "Enforce keyboard focus navigation boundaries inside modals overlays",
      "Configure visual verification checks using Storybook pipelines"
    ],
    interviewValue: [
      "Propose component abstraction hierarchies balancing API flexibility and consistency",
      "Defend keyboard focus trap requirements under screen reader conditions"
    ]
  },
  {
    id: "architecture",
    slug: "architecture",
    title: "Track 6: Frontend Architecture",
    order: 6,
    description: "Architect directory systems, domain modules boundaries, routing engines, and enterprise dashboard frameworks.",
    status: "coming-soon",
    modules: ["folder-structures", "domain-driven-design", "routing-architecture", "form-engines", "configs-monorepos"],
    plannedProjects: ["scalable-react-architecture", "enterprise-dashboard-framework", "form-engine-architecture-lab"],
    learningOutcomes: [
      "Architect decoupling structures between UI layers and business domains",
      "Design dynamic config injection endpoints for multiple environments",
      "Implement generic validation layers inside form schema compiler engines"
    ],
    interviewValue: [
      "Structure multi-module monorepos preventing circular dependency flows",
      "Defend dynamic runtime configuration loading vs build-time environment replacements"
    ]
  },
  {
    id: "micro-frontends",
    slug: "micro-frontends",
    title: "Track 7: Micro Frontends",
    order: 7,
    description: "Scale large organizations frontend applications using Webpack/Rspack Module Federation, dynamic routers, and dependency shares.",
    status: "coming-soon",
    modules: ["mfe-fundamentals", "module-federation-core", "dependency-resolutions", "cross-mfe-communication", "mfe-deployment"],
    plannedProjects: ["mfe-shell-host", "module-federation-remotes", "cross-mfe-communication-lab", "mfe-maturity-dashboard"],
    learningOutcomes: [
      "Expose remote UI modules dynamically at host runtime layers",
      "Configure singleton shared dependencies inside federation bundlers",
      "Build sandboxed communication loops passing decoupled events across applications"
    ],
    interviewValue: [
      "Resolve version mismatch conflicts across remote runtime script loads",
      "Design routing synchronization systems across independently deployed microfrontends"
    ]
  },
  {
    id: "build-tooling",
    slug: "build-tooling",
    title: "Track 8: Build Systems and Tooling",
    order: 8,
    description: "Optimize transpilers steps, tree-shaking indices, and monorepo compilation caches.",
    status: "coming-soon",
    modules: ["npm-internals", "bundling-concepts", "webpack-vite-swc", "tree-shaking", "monorepo-build-tooling"],
    plannedProjects: ["build-pipeline-visualizer", "bundler-comparison-lab", "barrel-file-analyzer", "monorepo-build-system-lab"],
    learningOutcomes: [
      "Diagnose circular imports and barrel file overheads",
      "Write customized bundler configuration files minimizing asset counts",
      "Implement remote compilation cache systems using Turborepo structures"
    ],
    interviewValue: [
      "Detail the mechanics of dead code elimination (tree-shaking) inside ESM imports",
      "Compare cold start latency profiles of rollup-based Vite vs webpack-based systems"
    ]
  },
  {
    id: "testing",
    slug: "testing",
    title: "Track 9: Testing Strategy",
    order: 9,
    description: "Design comprehensive testing pyramids matching unit checks, visual regressions, and end-to-end integration test runs.",
    status: "coming-soon",
    modules: ["unit-integration-tests", "e2e-playwright", "mock-strategies", "visual-regression", "contract-testing-ui"],
    plannedProjects: ["testing-pyramid-lab", "playwright-e2e-suite", "visual-regression-lab", "contract-testing-api"],
    learningOutcomes: [
      "Configure parallel end-to-end test execution pipelines in Playwright",
      "Capture pixel-perfect snapshot assertions mapping regressions across browsers",
      "Simulate server network configurations using Mock Service Worker (MSW)"
    ],
    interviewValue: [
      "Propose strategies to eliminate flakiness inside asynchronous UI test suites",
      "Compare mocking APIs payloads vs contract testing interfaces on frontend boundaries"
    ]
  },
  {
    id: "rendering",
    slug: "rendering",
    title: "Track 10: SSR, Streaming, and Edge Rendering",
    order: 10,
    description: "Build high-speed server rendered routes utilizing Next.js Server Components, hydration flows, and edge delivery caches.",
    status: "coming-soon",
    modules: ["csr-ssr-ssg", "hydration-mechanics", "streaming-ssr-suspense", "react-server-components", "nextjs-routing", "edge-rendering-caching"],
    plannedProjects: ["ssr-streaming-demo", "hydration-mismatch-debugger", "edge-rendered-page", "seo-content-platform"],
    learningOutcomes: [
      "Stream HTML chunks incrementally to client using Suspense boundaries",
      "Debug hydration mismatch exceptions using browser DOM snapshots",
      "Deploy localized edge functions compiling templates near user endpoints"
    ],
    interviewValue: [
      "Explain the serialization boundary constraints inside React Server Components",
      "Propose caching configurations balancing TTFB speeds against content updates latency"
    ]
  },
  {
    id: "security",
    slug: "security",
    title: "Track 11: Frontend Security",
    order: 11,
    description: "Protect client-side applications from Cross-Site Scripting (XSS), token leaks, and injection boundaries.",
    status: "coming-soon",
    modules: ["xss-mitigations", "csrf-cookie-controls", "csp-policies", "client-token-storage", "oauth-flows-security"],
    plannedProjects: ["security-playground-sandbox", "secure-auth-flow-lab", "csp-violation-dashboard", "oauth-login-simulation"],
    learningOutcomes: [
      "Configure Content Security Policy (CSP) headers restricting script execution sources",
      "Enforce Secure, HttpOnly, SameSite cookies on authorization operations",
      "Implement secure OAuth Authorization Code Flow with PKCE"
    ],
    interviewValue: [
      "Analyze safety trade-offs of storing tokens in LocalStorage vs HttpOnly cookies",
      "Propose mitigations preventing script injections inside dynamically rendered HTML frames"
    ]
  },
  {
    id: "observability",
    slug: "observability",
    title: "Track 12: Frontend Observability & Production Operations",
    order: 12,
    description: "Monitor user interactions, capture Javascript crashes, trace metrics drift, and deploy feature flag structures.",
    status: "coming-soon",
    modules: ["telemetry-logging", "real-user-monitoring", "error-tracking-sentry", "feature-flags-ab-testing"],
    plannedProjects: ["observability-dashboard", "error-tracking-lab", "feature-flag-rollout", "ab-testing-lab"],
    learningOutcomes: [
      "Capture nested JS stack traces mapped with source maps logs",
      "Measure client-side performance timings using User Timing API",
      "Design canary rollout workflows using targeted feature flags servers"
    ],
    interviewValue: [
      "Explain how real user monitoring (RUM) tracks performance variance across devices",
      "Design client logging architectures that prevent leaking personal identifiable data (PII)"
    ]
  },
  {
    id: "system-design",
    slug: "system-design",
    title: "Track 13: Frontend System Design",
    order: 13,
    description: "Master senior frontend system design rounds. Architect YouTube, Figma, Netflix, and collaborative applications.",
    status: "coming-soon",
    modules: ["system-requirements", "fe-component-architecture", "fe-data-flow-design", "collaborative-ui-design"],
    plannedProjects: ["design-youtube-fe", "design-amazon-fe", "design-netflix-fe", "design-realtime-dashboard", "design-ecommerce-checkout", "design-figma-fe"],
    learningOutcomes: [
      "Structure client-side state engines for real-time multiplayer applications",
      "Design video buffering, pre-fetching, and lazy chunking queues controls",
      "Defend performance, styling, and bundle partitioning architectures"
    ],
    interviewValue: [
      "Present complete high-level architectures for infinite scroll layout grids",
      "Propose strategies handling network drops inside offline-first data dashboards"
    ]
  },
  {
    id: "interview-mastery",
    slug: "interview-mastery",
    title: "Track 14: Frontend Interview Mastery",
    order: 14,
    description: "Prepare for coding loops, JavaScript depths, behavioral evaluations, and leadership tradeoff reviews.",
    status: "coming-soon",
    modules: ["javascript-deep-dive", "typescript-narrowing-q", "react-fiber-questions", "machine-coding-practice", "leadership-scenarios"],
    plannedProjects: ["interview-question-bank", "machine-coding-practice-set", "architecture-casebook", "staff-interview-simulator"],
    learningOutcomes: [
      "Explain prototypal inheritance and closures structures under scrutiny",
      "Complete live machine coding layouts inside tight time limits",
      "Structure behavioral responses showing staff-level project leadership stories"
    ],
    interviewValue: [
      "Defend performance-complexity engineering compromises to senior panels",
      "Answer core runtime execution questions from memory without debugger dependencies"
    ]
  }
];
