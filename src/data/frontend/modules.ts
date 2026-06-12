import { FrontendContentStatus } from "./tracks";

export type FrontendModule = {
  id: string;
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  status: FrontendContentStatus;
  submodules: string[];
  projects: string[];
  labs: string[];
  learningOutcomes: string[];
  interviewQuestions: string[];
};

export const frontendModules: Record<string, FrontendModule> = {
  // Track 1
  "web-platform-core": {
    id: "mod-1-1",
    slug: "web-platform-core",
    trackSlug: "web-platform-foundation",
    title: "Module 1.1: HTML, DOM, and Layout Models",
    description: "Write SEO-friendly semantic layouts conforming to accessibility tree specs.",
    status: "available",
    submodules: ["html-semantics-web", "css-layouts-web"],
    projects: ["browser-rendering-visualizer"],
    labs: [],
    learningOutcomes: ["Design search engine friendly HTML layouts", "Solve layout shifts using aspect-ratios"],
    interviewQuestions: ["Why are semantic HTML tags preferred over generic divs?"]
  },
  "rendering-execution": {
    id: "mod-1-2",
    slug: "rendering-execution",
    trackSlug: "web-platform-foundation",
    title: "Module 1.2: Event Loop & Browser Paint Pipeline",
    description: "Trace browser parsing, layout grids painting, GPU compositions, and microtasks execution queues.",
    status: "available",
    submodules: ["browser-rendering-flow"],
    projects: ["event-loop-playground"],
    labs: [],
    learningOutcomes: ["Map promise updates executions inside render queues", "Yield long scripting actions to keep UI responsive"],
    interviewQuestions: ["Explain how browser microtasks execute in relation to paint frames."]
  },

  // Track 2
  "javascript-engine-closures": {
    id: "mod-2-1",
    slug: "javascript-engine-closures",
    trackSlug: "modern-js-ts",
    title: "Module 2.1: Scopes, Closures and ESM modules",
    description: "Understand scoping contexts, JIT execution phases, closures, and ESModules bundling structures.",
    status: "available",
    submodules: ["es6-advanced-features"],
    projects: [],
    labs: [],
    learningOutcomes: ["Master lexical variables scopes", "Write modular scripts utilizing ES6 formats"],
    interviewQuestions: ["What are closures, and how do JavaScript engines manage their memory allocations?"]
  },
  "typescript-type-safety-boundaries": {
    id: "mod-2-2",
    slug: "typescript-type-safety-boundaries",
    trackSlug: "modern-js-ts",
    title: "Module 2.2: Generics & Strict Boundaries",
    description: "Build robust API integration guards utilizing generic constraints and discriminated unions.",
    status: "available",
    submodules: ["typescript-safety-generics"],
    projects: ["typescript-type-safety-lab"],
    labs: [],
    learningOutcomes: ["Construct generic utility schemas", "Type JSON responses securely using unions boundaries"],
    interviewQuestions: ["How do discriminated unions assist type narrowing operations?"]
  },

  // Track 3
  "component-contract-design": {
    id: "mod-3-1",
    slug: "component-contract-design",
    trackSlug: "component-engineering",
    title: "Module 3.1: Component Contracts & Slot Compositions",
    description: "Build reusable layout slots separating visual styles from configuration states.",
    status: "coming-soon",
    submodules: ["props-composition-patterns"],
    projects: [],
    labs: [],
    learningOutcomes: ["Enforce component prop validation boundaries"],
    interviewQuestions: ["Contrast controlled vs uncontrolled components configurations."]
  },

  // Track 4
  "react-core-reconciler": {
    id: "mod-4-1",
    slug: "react-core-reconciler",
    trackSlug: "react-engineering",
    title: "Module 4.1: React Fiber Reconciliation & Profiling",
    description: "Deep dive virtual DOM nodes, update schedules, hooks lifecycle rules, and profiling tools.",
    status: "coming-soon",
    submodules: ["react-fiber-reconciler"],
    projects: [],
    labs: [],
    learningOutcomes: ["Analyze components updates cycles utilizing React Developer tools"],
    interviewQuestions: ["Explain the difference between rendering phases and committing phases in React."]
  },

  // Track 5
  "nextjs-server-hydration": {
    id: "mod-5-1",
    slug: "nextjs-server-hydration",
    trackSlug: "nextjs-engineering",
    title: "Module 5.1: SSR, SSG & Server Components (RSC)",
    description: "Build fast loading server rendered views incorporating React Suspense HTML streams.",
    status: "coming-soon",
    submodules: ["nextjs-app-router-rendering"],
    projects: [],
    labs: [],
    learningOutcomes: ["Design page segments loading dynamically via Suspense boundaries"],
    interviewQuestions: ["Detail the serialization guidelines restricting server component props."]
  },

  // Track 6
  "nodejs-frontend-bff": {
    id: "mod-6-1",
    slug: "nodejs-frontend-bff",
    trackSlug: "nodejs-for-frontend",
    title: "Module 6.1: Node Execution & BFF proxy servers",
    description: "Deconstruct Node module loaders, package managers scripts, and proxy gateway setups.",
    status: "coming-soon",
    submodules: ["nodejs-runtime-execution"],
    projects: [],
    labs: [],
    learningOutcomes: ["Configure server proxy layers forwarding API queries"],
    interviewQuestions: ["Describe how Node.js event loop coordinates thread executions."]
  },

  // Track 7
  "api-integrations-fastapi-express": {
    id: "mod-7-1",
    slug: "api-integrations-fastapi-express",
    trackSlug: "express-fastapi-integration",
    title: "Module 7.1: REST Integrations & Contract Schema design",
    description: "Design type safe schemas mapping client targets to Express and Python FastAPI backends.",
    status: "coming-soon",
    submodules: ["express-fastapi-boundaries"],
    projects: [],
    labs: [],
    learningOutcomes: ["Validate query responses using Pydantic templates"],
    interviewQuestions: ["How do you coordinate frontend local development mock servers?"]
  },

  // Track 8
  "graphql-query-normalized-cache": {
    id: "mod-8-1",
    slug: "graphql-query-normalized-cache",
    trackSlug: "graphql-for-frontend",
    title: "Module 8.1: Apollo Caching & Fragments design",
    description: "Consolidate downstream lookups into single GraphQL queries, mapping normalized caches.",
    status: "coming-soon",
    submodules: ["graphql-schema-apollo-cache"],
    projects: [],
    labs: [],
    learningOutcomes: ["Configure Apollo Client normalized cache mappings"],
    interviewQuestions: ["Why are fragments preferred when loading sub-component data dependencies?"]
  },

  // Track 9
  "state-cache-segregation": {
    id: "mod-9-1",
    slug: "state-cache-segregation",
    trackSlug: "state-management-server-state",
    title: "Module 9.1: Client State & Query Cache separation",
    description: "Separate local states variables from server responses using Zustand and React Query hooks.",
    status: "coming-soon",
    submodules: ["client-state-server-state-sync"],
    projects: [],
    labs: [],
    learningOutcomes: ["Implement optimistic client additions backed by fallback actions"],
    interviewQuestions: ["Explain how cache invalidation durations alter page rendering speeds."]
  },

  // Track 10
  "api-consumption-standards": {
    id: "mod-10-1",
    slug: "api-consumption-standards",
    trackSlug: "api-design-for-frontend",
    title: "Module 10.1: Cursor pagination & Retry logic boundaries",
    description: "Build resilient API connection pipelines using pagination, circuit-breakers, and MSW tests.",
    status: "coming-soon",
    submodules: ["api-design-resiliency-testing"],
    projects: [],
    labs: [],
    learningOutcomes: ["Design retry backoff strategies protecting downstream gateways"],
    interviewQuestions: ["How does contract testing verify client boundaries safety?"]
  },

  // Track 11
  "clean-architecture-folders": {
    id: "mod-11-1",
    slug: "clean-architecture-folders",
    trackSlug: "frontend-architecture-fundamentals",
    title: "Module 11.1: Domain Isolation & Adapter Layers",
    description: "Isolate presentation layout pages from business logic rules and API endpoints.",
    status: "coming-soon",
    submodules: ["clean-architecture-frontend-layers"],
    projects: [],
    labs: [],
    learningOutcomes: ["Design clean folder configurations decoupling logic from frames"],
    interviewQuestions: ["How does dependency inversion solve framework migrations conflicts?"]
  },

  // Track 12
  "micro-frontends-federation": {
    id: "mod-12-1",
    slug: "micro-frontends-federation",
    trackSlug: "micro-frontends",
    title: "Module 12.1: Runtime Module Federation",
    description: "Scale large teams projects importing remote packages dynamically without shell rebuilds.",
    status: "coming-soon",
    submodules: ["micro-frontends-module-federation"],
    projects: [],
    labs: [],
    learningOutcomes: ["Define React as a singleton inside Webpack federation boundaries"],
    interviewQuestions: ["How do you coordinate routing states sync across separate micro apps?"]
  },

  // Track 13
  "monorepo-builds-caching": {
    id: "mod-13-1",
    slug: "monorepo-builds-caching",
    trackSlug: "monorepo-architecture",
    title: "Module 13.1: Turborepo pipelines & caching rules",
    description: "Configure workspace projects using pnpm pipelines to build incremental cache records.",
    status: "coming-soon",
    submodules: ["monorepo-turborepo-nx-workspaces"],
    projects: [],
    labs: [],
    learningOutcomes: ["Calculate target workspace dependencies graphs changes"],
    interviewQuestions: ["Compare monorepo structures against polyrepo pipelines deployments speeds."]
  },

  // Track 14
  "modular-monolith-packages": {
    id: "mod-14-1",
    slug: "modular-monolith-packages",
    trackSlug: "modular-monolith-frontend",
    title: "Module 14.1: Feature Modules & Kernels folders",
    description: "Separate code zones inside a single application folder to prevent circular imports.",
    status: "coming-soon",
    submodules: ["modular-monolith-folder-boundaries"],
    projects: [],
    labs: [],
    learningOutcomes: ["Configure ESLint constraints validating folder border imports"],
    interviewQuestions: ["Why is a modular monolith preferred over premature micro frontend architectures?"]
  },

  // Track 15
  "design-patterns-abstractions": {
    id: "mod-15-1",
    slug: "design-patterns-abstractions",
    trackSlug: "frontend-design-patterns",
    title: "Module 15.1: Facades, Adapters & Creational Patterns",
    description: "Convert payloads using Adapter maps and simplify setups using Facade classes.",
    status: "coming-soon",
    submodules: ["design-patterns-adapter-facade"],
    projects: [],
    labs: [],
    learningOutcomes: ["Enforce Facade hooks hiding complex data stores configuration"],
    interviewQuestions: ["How does the Compound component pattern simplify component markup customization?"]
  },

  // Track 16
  "design-tokens-themes": {
    id: "mod-16-1",
    slug: "design-tokens-themes",
    trackSlug: "design-systems-component-libraries",
    title: "Module 16.1: Theme Tokens & Storybook isolated verification",
    description: "Generate platform styling configs using tokens variables and test items in Storybook.",
    status: "coming-soon",
    submodules: ["design-tokens-themes-storybook"],
    projects: [],
    labs: [],
    learningOutcomes: ["Build clean token compile scripts compiling CSS variables"],
    interviewQuestions: ["Describe design tokens systems benefits in multi-brand retail portfolios."]
  },

  // Track 17
  "core-web-vitals-benchmarks": {
    id: "mod-17-1",
    slug: "core-web-vitals-benchmarks",
    trackSlug: "frontend-performance-engineering",
    title: "Module 17.1: INP optimizations & Bundle Splitting",
    description: "Analyze LCP assets preloads, yield execution cycles to boost INP, and configure bundle splits.",
    status: "coming-soon",
    submodules: ["core-web-vitals-performance-auditing"],
    projects: [],
    labs: [],
    learningOutcomes: ["Optimize layouts to achieve zero Cumulative Layout Shifts"],
    interviewQuestions: ["What causes INP delays, and how do you trace long tasks using Chrome DevTools?"]
  },

  // Track 18
  "caching-http-cdn-sw": {
    id: "mod-18-1",
    slug: "caching-http-cdn-sw",
    trackSlug: "frontend-caching-architecture",
    title: "Module 18.1: HTTP headers SWR & Service Worker caching",
    description: "Configure edge templates caching headers and manage service workers offline cache schemas.",
    status: "coming-soon",
    submodules: ["http-cdn-react-query-caching"],
    projects: [],
    labs: [],
    learningOutcomes: ["Deploy service worker scripts caching landing layouts assets"],
    interviewQuestions: ["How does Stale-While-Revalidate caching affect user interaction times?"]
  },

  // Track 19
  "security-csp-cors-auth": {
    id: "mod-19-1",
    slug: "security-csp-cors-auth",
    trackSlug: "frontend-security",
    title: "Module 19.1: CSP Header setups & secure cookies values",
    description: "Protect client assets from XSS injections using CSP restrictions and SameSite cookies.",
    status: "coming-soon",
    submodules: ["xss-csrf-csp-cors-security"],
    projects: [],
    labs: [],
    learningOutcomes: ["Configure secure OAuth PKCE credentials exchange code flows"],
    interviewQuestions: ["Discuss safety tradeoffs of local storage vs HttpOnly cookie tokens storage."]
  },

  // Track 20
  "accessibility-focus-aria": {
    id: "mod-20-1",
    slug: "accessibility-focus-aria",
    trackSlug: "accessibility-engineering",
    title: "Module 20.1: Accessible focus loops & ARIA roles mapping",
    description: "Enforce WCAG outlines, build keyboard focus traps, and structure semantic layouts.",
    status: "coming-soon",
    submodules: ["wcag-aria-accessible-forms-modals"],
    projects: [],
    labs: [],
    learningOutcomes: ["Trap focus bindings inside open overlay modals grids"],
    interviewQuestions: ["Detail keyboard interaction requirements for accessible drop-down menus."]
  },

  // Track 21
  "reliability-resilience-boundaries": {
    id: "mod-21-1",
    slug: "reliability-resilience-boundaries",
    trackSlug: "frontend-reliability-resilience",
    title: "Module 21.1: Circuit breakers & fallback layouts",
    description: "Isolate client failures using error fallback screens and request throttlers.",
    status: "coming-soon",
    submodules: ["error-boundaries-fallback-uis"],
    projects: [],
    labs: [],
    learningOutcomes: ["Gracefully degrade application functions during database disconnect loops"],
    interviewQuestions: ["Design a frontend circuit breaker threshold configuration."]
  },

  // Track 22
  "observability-telemetry-flags": {
    id: "mod-22-1",
    slug: "observability-telemetry-flags",
    trackSlug: "frontend-observability-production",
    title: "Module 22.1: Sentry logging & canary feature flags",
    description: "Trace client errors stack configurations, capturing metrics using user Timing API.",
    status: "coming-soon",
    submodules: ["logging-sentry-real-user-monitoring"],
    projects: [],
    labs: [],
    learningOutcomes: ["Capture telemetry performance durations using browser timers API"],
    interviewQuestions: ["How do you track production client errors without leaking PII information?"]
  },

  // Track 23
  "testing-playwright-msw": {
    id: "mod-23-1",
    slug: "testing-playwright-msw",
    trackSlug: "testing-strategy",
    title: "Module 23.1: Playwright integration checks & MSW API routing",
    description: "Verify checkout and feed actions using Playwright tests, mocking server pipelines with MSW.",
    status: "coming-soon",
    submodules: ["playwright-msw-testing-pyramid"],
    projects: [],
    labs: [],
    learningOutcomes: ["Write automated visual regression tests comparing components screenshot pixel matches"],
    interviewQuestions: ["Why is MSW preferred over mock function overrides in frontend test beds?"]
  },

  // Track 24
  "build-compilers-ci": {
    id: "mod-24-1",
    slug: "build-compilers-ci",
    trackSlug: "build-systems-tooling-ci-cd",
    title: "Module 24.1: SWC compiles & Treeshaking ES imports",
    description: "Maximize compile speeds using SWC configs and identify duplicate imports loops.",
    status: "coming-soon",
    submodules: ["vite-webpack-swc-compiler-ci"],
    projects: [],
    labs: [],
    learningOutcomes: ["Analyze bundles script sizes using visualization reports"],
    interviewQuestions: ["Describe tree shaking mechanics inside ESM compilation scopes."]
  },

  // Track 25
  "system-design-blueprints": {
    id: "mod-25-1",
    slug: "system-design-blueprints",
    trackSlug: "frontend-system-design-fundamentals",
    title: "Module 25.1: API Contracts design & non-functional layouts",
    description: "Draft structural answers to senior system designs reviews mapping data streams.",
    status: "coming-soon",
    submodules: ["system-design-requirements-contracts"],
    projects: [],
    labs: [],
    learningOutcomes: ["Gather system requirements isolating key design constraints"],
    interviewQuestions: ["Detail key items to include when proposing data layouts schemas."]
  },

  // Track 26
  "case-studies-system-design-interviews": {
    id: "mod-26-1",
    slug: "case-studies-system-design-interviews",
    trackSlug: "real-world-frontend-case-studies",
    title: "Module 26.1: 20 System Design Reviews walkthrough",
    description: "Examine detailed answers explaining YouTube feed structures, Figma canvas zoom, and Notion blocks.",
    status: "available",
    submodules: ["case-studies-system-design-review"],
    projects: [],
    labs: [],
    learningOutcomes: ["Compare Operational Transformation sync with CRDT conflict resolutions"],
    interviewQuestions: ["Outline high-level components maps for infinite scrolling feed applications."]
  },

  // Track 27
  "capstones-portfolio-projects": {
    id: "mod-27-1",
    slug: "capstones-portfolio-projects",
    trackSlug: "frontend-architect-capstones",
    title: "Module 27.1: Master Capstones Portfolios Integrations",
    description: "Integrate 10 master portfolio projects validating federations, design system npm packages, and tracking.",
    status: "available",
    submodules: ["capstones-portfolio-projects-kit"],
    projects: ["enterprise-design-system", "ecommerce-product-listing-platform", "realtime-analytics-dashboard", "micro-frontend-retail-platform", "nextjs-streaming-commerce-app", "collaborative-document-editor", "frontend-observability-dashboard", "graphql-client-platform", "bff-powered-frontend-platform", "frontend-system-design-interview-kit"],
    labs: [],
    learningOutcomes: ["Compile multi-app federated shell integrations", "Manage complete system design portfolios"],
    interviewQuestions: ["How do you coordinate a production release migration from modular monoliths to micro frontends?"]
  }
};
