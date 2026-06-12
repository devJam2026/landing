import { FrontendContentStatus } from "./tracks";

export type FrontendSubmodule = {
  id: string;
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  status: FrontendContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
};

export const frontendSubmodules: Record<string, FrontendSubmodule> = {
  // Track 1
  "html-semantics-web": {
    id: "sub-1-1",
    slug: "html-semantics-web",
    trackSlug: "web-platform-foundation",
    title: "HTML Semantics & Document Structure",
    description: "Write SEO-friendly, accessible markup conforming to modern HTML5 standards.",
    status: "coming-soon",
    whatYouWillLearn: ["Semantic layout tags", "Accessibility trees", "SEO indexing"],
    whyItMatters: "Search engines and screen readers rely on well-structured layouts to index and explain website content.",
    conceptsCovered: ["ARIA roles", "SEO tags", "DOM Nodes"]
  },
  "css-layouts-web": {
    id: "sub-1-2",
    slug: "css-layouts-web",
    trackSlug: "web-platform-foundation",
    title: "CSS Grid, Flexbox & Layout Engines",
    description: "Deep dive into CSS formatting contexts, flex lines, grid tracks, and modern positioning APIs.",
    status: "coming-soon",
    whatYouWillLearn: ["Grid template layouts", "Flex alignment contexts", "Positioning overrides"],
    whyItMatters: "Creating responsive, stable visual interfaces prevents layout jumping and visual glitches.",
    conceptsCovered: ["Flexbox", "CSS Grid", "Logical properties"]
  },
  "browser-rendering-flow": {
    id: "sub-1-3",
    slug: "browser-rendering-flow",
    trackSlug: "web-platform-foundation",
    title: "Critical Rendering Path & Event Loop",
    description: "Trace DNS resolution, TCP handshake loops, TLS negotiation, and V8 event loop scheduling.",
    status: "coming-soon",
    whatYouWillLearn: ["DOM/CSSOM Construction", "Reflow vs Repaint lifecycle", "Microtask queues ordering"],
    whyItMatters: "Understanding the browser's execution thread is vital to optimize Core Web Vitals.",
    conceptsCovered: ["V8 engine", "Microtasks", "Event loop"]
  },

  // Track 2
  "es6-advanced-features": {
    id: "sub-2-1",
    slug: "es6-advanced-features",
    trackSlug: "modern-js-ts",
    title: "Modern JS: ES6+, Closures & Scope",
    description: "Master advanced scopes, execution contexts, lexical closures, prototypal inheritance, and ESModules.",
    status: "coming-soon",
    whatYouWillLearn: ["Lexical scope bindings", "Prototype chains", "ESModule compilation rules"],
    whyItMatters: "Advanced closures and modular scopes form the bedrock of reusable framework APIs.",
    conceptsCovered: ["Closures", "ES6 Modules", "Prototypes"]
  },
  "typescript-safety-generics": {
    id: "sub-2-2",
    slug: "typescript-safety-generics",
    trackSlug: "modern-js-ts",
    title: "TypeScript Generics & Utility Types",
    description: "Build robust, type-safe API boundaries utilizing generics, mapped types, and strict type assertion guards.",
    status: "coming-soon",
    whatYouWillLearn: ["Generic interface constraints", "Discriminated unions narrowing", "Custom type guard functions"],
    whyItMatters: "Strict compilation boundaries eliminate runtime errors when matching data across backend APIs.",
    conceptsCovered: ["TypeScript Generics", "Type guards", "Mapped types"]
  },

  // Track 3
  "props-composition-patterns": {
    id: "sub-3-1",
    slug: "props-composition-patterns",
    trackSlug: "component-engineering",
    title: "Props Design & Composition Boundaries",
    description: "Design clean, reusable component contracts balancing custom props flexibility against strict consistency.",
    status: "coming-soon",
    whatYouWillLearn: ["Controlled vs Uncontrolled component patterns", "Slot rendering structures", "Component error boundary overlays"],
    whyItMatters: "Clean props contracts prevent framework dependencies bloating and circular render trees.",
    conceptsCovered: ["Controlled state", "Slots composition", "UI boundaries"]
  },

  // Track 4
  "react-fiber-reconciler": {
    id: "sub-4-1",
    slug: "react-fiber-reconciler",
    trackSlug: "react-engineering",
    title: "React Fiber Reconciliation & Scheduling",
    description: "Analyze the Virtual DOM diffing process, state update batches, and the Fiber node scheduler.",
    status: "coming-soon",
    whatYouWillLearn: ["Fiber trees node structures", "Reconciliation rendering passes", "State batches queue"],
    whyItMatters: "Understanding Fiber reconciliations allows developers to debug complex performance lags.",
    conceptsCovered: ["Virtual DOM", "React Fiber", "Concurrent features"]
  },

  // Track 5
  "nextjs-app-router-rendering": {
    id: "sub-5-1",
    slug: "nextjs-app-router-rendering",
    trackSlug: "nextjs-engineering",
    title: "Next.js App Router & Server Rendering",
    description: "Leverage SSR, SSG, ISR, React Server Components (RSC), and edge hydration streams.",
    status: "coming-soon",
    whatYouWillLearn: ["Server components boundaries", "Streaming HTML hydration", "Edge cache pipelines"],
    whyItMatters: "Server rendering reduces initial bundle sizes and boosts First Contentful Paint metrics.",
    conceptsCovered: ["App Router", "RSC", "SSR Streaming"]
  },

  // Track 6
  "nodejs-runtime-execution": {
    id: "sub-6-1",
    slug: "nodejs-runtime-execution",
    trackSlug: "nodejs-for-frontend",
    title: "Node.js Runtime & Package Systems",
    description: "Deconstruct Node module loading, npm scripts pipelines, BFF (Backend-for-Frontend) proxy gateways, and middleware setups.",
    status: "coming-soon",
    whatYouWillLearn: ["Node execution model", "BFF proxy configurations", "Middleware pipeline routines"],
    whyItMatters: "Node.js powers server side rendering engines and local development script runners.",
    conceptsCovered: ["BFF pattern", "CommonJS vs ESM", "Node middleware"]
  },

  // Track 7
  "express-fastapi-boundaries": {
    id: "sub-7-1",
    slug: "express-fastapi-boundaries",
    trackSlug: "express-fastapi-integration",
    title: "API Boundaries Contract Design",
    description: "Design type-safe interfaces between client components and Node Express or Python FastAPI backends.",
    status: "coming-soon",
    whatYouWillLearn: ["REST API designs", "Pydantic payload validation", "API errors schema mapping"],
    whyItMatters: "Clean contract boundaries decouple frontend visual updates from database refactorings.",
    conceptsCovered: ["Express", "FastAPI", "Contract Design"]
  },

  // Track 8
  "graphql-schema-apollo-cache": {
    id: "sub-8-1",
    slug: "graphql-schema-apollo-cache",
    trackSlug: "graphql-for-frontend",
    title: "GraphQL Schemas & Normalized Caches",
    description: "Query graphs cleanly using Apollo Client or Relay, managing normalized store segments and optimistic UI updates.",
    status: "coming-soon",
    whatYouWillLearn: ["GraphQL mutations & fragments", "Apollo normalized caching", "Optimistic state synchronization"],
    whyItMatters: "GraphQL aggregates multiple remote backend lookups into a single network query.",
    conceptsCovered: ["Apollo Client", "Relay", "Normalized Cache"]
  },

  // Track 9
  "client-state-server-state-sync": {
    id: "sub-9-1",
    slug: "client-state-server-state-sync",
    trackSlug: "state-management-server-state",
    title: "Zustand & React Query Cache Synced",
    description: "Separate local client state from server responses utilizing Zustand and TanStack Query caches.",
    status: "coming-soon",
    whatYouWillLearn: ["Global state hooks", "Cache invalidation policies", "Optimistic state rollback"],
    whyItMatters: "Segregating client UI toggles from database cache queries simplifies state debugging.",
    conceptsCovered: ["Zustand", "React Query", "Cache Invalidation"]
  },

  // Track 10
  "api-design-resiliency-testing": {
    id: "sub-10-1",
    slug: "api-design-resiliency-testing",
    trackSlug: "api-design-for-frontend",
    title: "API consumption & Contract Resiliency",
    description: "Implement API pagination, retry-backoff configurations, and mock-service-worker integration tests.",
    status: "coming-soon",
    whatYouWillLearn: ["Cursor pagination schemes", "Idempotency headers", "MSW API Mocking"],
    whyItMatters: "Resilient API integrations ensure client platforms function fluidly over flaky mobile networks.",
    conceptsCovered: ["REST integration", "MSW", "Retry logic"]
  },

  // Track 11
  "clean-architecture-frontend-layers": {
    id: "sub-11-1",
    slug: "clean-architecture-frontend-layers",
    trackSlug: "frontend-architecture-fundamentals",
    title: "Layered Frontend Architectures",
    description: "Isolate presentation layout components from business logic rules and API adapter boundaries.",
    status: "coming-soon",
    whatYouWillLearn: ["Domain-driven folders", "Dependency injection", "Container vs Presentational pattern"],
    whyItMatters: "Layered decopuling allows engineers to refactor code logic without rewriting visual elements.",
    conceptsCovered: ["DDD", "Clean Architecture", "Dependency Inversion"]
  },

  // Track 12
  "micro-frontends-module-federation": {
    id: "sub-12-1",
    slug: "micro-frontends-module-federation",
    trackSlug: "micro-frontends",
    title: "Module Federation & Composites",
    description: "Federate remote bundles at runtime layer using Rspack/Webpack Module Federation frameworks.",
    status: "coming-soon",
    whatYouWillLearn: ["Host vs Remote configurations", "Singleton shared dependencies", "Sandboxed message brokers"],
    whyItMatters: "Micro frontends enable large teams to deploy updates independently without shell builds.",
    conceptsCovered: ["Module Federation", "Event Bus", "Import maps"]
  },

  // Track 13
  "monorepo-turborepo-nx-workspaces": {
    id: "sub-13-1",
    slug: "monorepo-turborepo-nx-workspaces",
    trackSlug: "monorepo-architecture",
    title: "Monorepo Build Pipelines & Dependency Graphs",
    description: "Configure workspaces with Turborepo or Nx, managing dependency graphs and remote compilation caching.",
    status: "coming-soon",
    whatYouWillLearn: ["Turborepo pipeline caching", "PNPM workspaces configurations", "CI target calculations"],
    whyItMatters: "Monorepos speed up builds by reusing compiled artifacts and verifying dependency bounds.",
    conceptsCovered: ["Turborepo", "Nx", "PNPM Workspaces"]
  },

  // Track 14
  "modular-monolith-folder-boundaries": {
    id: "sub-14-1",
    slug: "modular-monolith-folder-boundaries",
    trackSlug: "modular-monolith-frontend",
    title: "Modular Frontend Monolith Layouts",
    description: "Scale large applications inside a single code project utilizing structured module borders.",
    status: "coming-soon",
    whatYouWillLearn: ["Internal packages creation", "Route-level code boundaries", "Shared kernels directories"],
    whyItMatters: "Modular monoliths avoid the complexity of micro frontends while ensuring strict code boundaries.",
    conceptsCovered: ["Modular monolith", "ESLint boundary checks", "Package isolation"]
  },

  // Track 15
  "design-patterns-adapter-facade": {
    id: "sub-15-1",
    slug: "design-patterns-adapter-facade",
    trackSlug: "frontend-design-patterns",
    title: "UI Design Patterns & Facades",
    description: "Abstract complex subsystem APIs using the Facade pattern and adapt external schemas using the Adapter pattern.",
    status: "coming-soon",
    whatYouWillLearn: ["Facade state abstractions", "Adapter API maps", "Compound component patterns"],
    whyItMatters: "Design patterns keep UI code bases dry, customizable, and easy to maintain.",
    conceptsCovered: ["Adapter", "Facade", "Compound components"]
  },

  // Track 16
  "design-tokens-themes-storybook": {
    id: "sub-16-1",
    slug: "design-tokens-themes-storybook",
    trackSlug: "design-systems-component-libraries",
    title: "Design Tokens & Storybook Isolated Testing",
    description: "Build semantic variable token schemas and verify components in Storybook sandboxes.",
    status: "coming-soon",
    whatYouWillLearn: ["Theme token compiles", "Storybook story definitions", "Multi-brand styling overrides"],
    whyItMatters: "Design tokens guarantee styling consistency across platforms, web, and mobile app channels.",
    conceptsCovered: ["Design Tokens", "Storybook", "Atomic Styling"]
  },

  // Track 17
  "core-web-vitals-performance-auditing": {
    id: "sub-17-1",
    slug: "core-web-vitals-performance-auditing",
    trackSlug: "frontend-performance-engineering",
    title: "Core Web Vitals & Auditing Pipelines",
    description: "Analyze LCP bottlenecks, eliminate INP scripting delays, and debug CLS shifts.",
    status: "coming-soon",
    whatYouWillLearn: ["LCP asset preloads", "INP script yielding", "CLS size aspects"],
    whyItMatters: "Page load speeds directly correlate with user conversions and SEO rankings.",
    conceptsCovered: ["LCP", "INP", "CLS"]
  },

  // Track 18
  "http-cdn-react-query-caching": {
    id: "sub-18-1",
    slug: "http-cdn-react-query-caching",
    trackSlug: "frontend-caching-architecture",
    title: "HTTP, CDN & Browser Caching",
    description: "Master HTTP headers configurations (SWR), CDN edge templates caching, and service worker offline loops.",
    status: "coming-soon",
    whatYouWillLearn: ["Stale-While-Revalidate configs", "Cache-Control parameters", "Service worker cache maps"],
    whyItMatters: "Caching prevents redundant database calls and makes pages load instantly.",
    conceptsCovered: ["HTTP Caching", "CDN Caching", "Service Worker"]
  },

  // Track 19
  "xss-csrf-csp-cors-security": {
    id: "sub-19-1",
    slug: "xss-csrf-csp-cors-security",
    trackSlug: "frontend-security",
    title: "XSS, CSRF, CSP & CORS Protections",
    description: "Protect client-side apps from script injections using Content Security Policies (CSP) and cookie configurations.",
    status: "coming-soon",
    whatYouWillLearn: ["CSP Header setups", "HttpOnly SameSite cookies", "OAuth PKCE security flows"],
    whyItMatters: "Securing frontend applications blocks credentials theft and prevents data injections.",
    conceptsCovered: ["XSS Mitigation", "CSP Policies", "SameSite Cookies"]
  },

  // Track 20
  "wcag-aria-accessible-forms-modals": {
    id: "sub-20-1",
    slug: "wcag-aria-accessible-forms-modals",
    trackSlug: "accessibility-engineering",
    title: "WCAG Accessibility & Keyboard Focus",
    description: "Build accessible modal overlaps, handle keyboard focus traps, and map semantic HTML.",
    status: "coming-soon",
    whatYouWillLearn: ["Aria attributes configuration", "Modal keyboard focus traps", "Semantic HTML mapping"],
    whyItMatters: "Inclusive software ensures users of all capabilities can navigate systems easily.",
    conceptsCovered: ["WCAG guidelines", "Focus traps", "ARIA roles"]
  },

  // Track 21
  "error-boundaries-fallback-uis": {
    id: "sub-21-1",
    slug: "error-boundaries-fallback-uis",
    trackSlug: "frontend-reliability-resilience",
    title: "Error Boundaries & Fallback Layouts",
    description: "Build fault-tolerant layouts utilizing fallback views and circuit breakers for slow API calls.",
    status: "coming-soon",
    whatYouWillLearn: ["React error boundary captures", "Retry fallback patterns", "Circuit breaker boundaries"],
    whyItMatters: "Isolating crashes preserves application utility even during database or network failures.",
    conceptsCovered: ["Error Boundary", "Graceful degradation", "Circuit Breakers"]
  },

  // Track 22
  "logging-sentry-real-user-monitoring": {
    id: "sub-22-1",
    slug: "logging-sentry-real-user-monitoring",
    trackSlug: "frontend-observability-production",
    title: "RUM Telemetry & Canary Rollouts",
    description: "Capture stack traces utilizing Sentry maps and deploy features using flag rollouts.",
    status: "coming-soon",
    whatYouWillLearn: ["RUM diagnostics metric", "Feature flags toggle maps", "Sentry telemetry hooks"],
    whyItMatters: "Observing real user interactions provides early warnings of performance regression.",
    conceptsCovered: ["Sentry", "Canary Rollouts", "Telemetry logs"]
  },

  // Track 23
  "playwright-msw-testing-pyramid": {
    id: "sub-23-1",
    slug: "playwright-msw-testing-pyramid",
    trackSlug: "testing-strategy",
    title: "E2E Playwright testing & MSW mock API",
    description: "Enforce complete testing coverage with Playwright integration tests and MSW network mock proxies.",
    status: "coming-soon",
    whatYouWillLearn: ["Playwright E2E execution", "MSW server interceptors", "Visual regression testing"],
    whyItMatters: "Automated regression checks prevent code releases from breaking existing features.",
    conceptsCovered: ["Playwright", "MSW", "Regression Testing"]
  },

  // Track 24
  "vite-webpack-swc-compiler-ci": {
    id: "sub-24-1",
    slug: "vite-webpack-swc-compiler-ci",
    trackSlug: "build-systems-tooling-ci-cd",
    title: "Vite, SWC compilers & Treeshaking ES",
    description: "Optimize script compile speeds using SWC or ESBuild and configure bundle splits.",
    status: "coming-soon",
    whatYouWillLearn: ["Tree shaking mechanics", "Vite build outputs", "CI pipeline integrations"],
    whyItMatters: "Optimized pipelines speed up developers' feedback loops and reduce asset sizes.",
    conceptsCovered: ["Vite", "SWC", "Tree Shaking"]
  },

  // Track 25
  "system-design-requirements-contracts": {
    id: "sub-25-1",
    slug: "system-design-requirements-contracts",
    trackSlug: "frontend-system-design-fundamentals",
    title: "Requirement Engineering & Data Flows",
    description: "Deconstruct system architectures, map component layouts, and design API contracts.",
    status: "coming-soon",
    whatYouWillLearn: ["Functional analysis", "State structure maps", "API contract blueprints"],
    whyItMatters: "System design skills allow engineers to scale platforms to millions of users.",
    conceptsCovered: ["System architecture", "Data mapping", "Non-functional design"]
  },

  // Track 26
  "case-studies-system-design-review": {
    id: "sub-26-1",
    slug: "case-studies-system-design-review",
    trackSlug: "real-world-frontend-case-studies",
    title: "Real-world Case Studies Review",
    description: "Walk through 20 structured case studies mapping feeds, canvas layouts, and checkout boards.",
    status: "coming-soon",
    whatYouWillLearn: ["Feeds layout designs", "Multiplayer cursors sync", "Checkout architectures"],
    whyItMatters: "Analyzing real-world designs prepares senior engineers for architectural reviews.",
    conceptsCovered: ["System designs", "Tradeoff analysis", "Architecture reviews"]
  },

  // Track 27
  "capstones-portfolio-projects-kit": {
    id: "sub-27-1",
    slug: "capstones-portfolio-projects-kit",
    trackSlug: "frontend-architect-capstones",
    title: "Master Capstone Integrations",
    description: "Compile portfolio projects, build observability tools, and prepare system design answers.",
    status: "coming-soon",
    whatYouWillLearn: ["Multi-app federation", "BFF services configurations", "Mock interview sets"],
    whyItMatters: "Hands-on capstones demonstrate architectural mastery to prospective employers.",
    conceptsCovered: ["Capstones", "System Design", "Portfolio build"]
  }
};
