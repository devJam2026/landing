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
  // Track 1 Modules
  "browser-loading": {
    id: "browser-loading",
    slug: "browser-loading",
    trackSlug: "foundation",
    title: "Module 1.1: Browser Loading Mechanics",
    description: "Deconstruct DNS resolution, network queries parsing, and how HTML, CSS, and JS files trigger resource load queues.",
    status: "coming-soon",
    submodules: ["how-browsers-load-page", "dns-tcp-tls-frontend"],
    projects: ["browser-rendering-visualizer"],
    labs: [],
    learningOutcomes: ["Map request flow cycles from browser search bar to IP routing", "Understand TCP handshake latencies impact on initial page paint"],
    interviewQuestions: ["What happens step-by-step when you enter a URL in the browser?"]
  },
  "network-http": {
    id: "network-http",
    slug: "network-http",
    trackSlug: "foundation",
    title: "Module 1.2: HTTP & Network Protocols",
    description: "Understand TCP congestion limits, HTTP/1 vs HTTP/2 vs HTTP/3 multi-plexing, and secure network tunnels.",
    status: "coming-soon",
    submodules: ["http-protocols-fe"],
    projects: [],
    labs: [],
    learningOutcomes: ["Leverage HTTP/2 multiplexing streams to reduce connections count", "Explain head-of-line blocking resolutions in HTTP/3 (QUIC)"],
    interviewQuestions: ["Compare HTTP/1.1 pipelining with HTTP/2 multiplexing capabilities."]
  },
  "html-semantics": {
    id: "html-semantics",
    slug: "html-semantics",
    trackSlug: "foundation",
    title: "Module 1.3: HTML Layout & Semantics",
    description: "Construct screen-reader accessible documents utilizing modern HTML5 semantic layout definitions.",
    status: "coming-soon",
    submodules: ["html5-semantics-accessible"],
    projects: [],
    labs: [],
    learningOutcomes: ["Design search engine friendly HTML layouts", "Verify correct ARIA roles on accessibility elements"],
    interviewQuestions: ["Why are semantic elements preferred over generic div tags for layout building?"]
  },
  "css-layouts": {
    id: "css-layouts",
    slug: "css-layouts",
    trackSlug: "foundation",
    title: "Module 1.4: Flexbox and Grid Systems",
    description: "Build adaptive visual layouts resolving complex grid alignment requirements in CSS.",
    status: "coming-soon",
    submodules: ["css-layout-grid-flex"],
    projects: [],
    labs: [],
    learningOutcomes: ["Resolve cross-device sizing issues using Flexbox properties", "Compose nested multi-column configurations with CSS Grid parameters"],
    interviewQuestions: ["Detail layouts scenarios where CSS Grid outperforms Flexbox alignments."]
  },
  "js-engine": {
    id: "js-engine",
    slug: "js-engine",
    trackSlug: "foundation",
    title: "Module 1.5: JS Execution & Event Loop",
    description: "Master V8 parsing steps, task execution order, and microtask vs macrotask queue resolution details.",
    status: "coming-soon",
    submodules: ["js-execution-model", "event-loop-microtasks"],
    projects: ["event-loop-playground"],
    labs: [],
    learningOutcomes: ["Avoid page freezing issues by isolating long calculations from main thread", "Verify execution ordering of promises, requestAnimationFrame, and timers"],
    interviewQuestions: ["Explain task queue scheduling mechanics in the browser event loop."]
  },
  "typescript-fundamentals": {
    id: "typescript-fundamentals",
    slug: "typescript-fundamentals",
    trackSlug: "foundation",
    title: "Module 1.6: TypeScript Type Safety",
    description: "Define strict boundaries, type guards, generic narrowing schemas, and mapped object definitions.",
    status: "coming-soon",
    submodules: ["typescript-type-safety-core"],
    projects: ["typescript-type-safety-lab"],
    labs: [],
    learningOutcomes: ["Design robust generic functions maintaining strict type bounds", "Construct advanced utility types utilizing mapped definitions"],
    interviewQuestions: ["What are discriminated unions and how do they aid type narrowing?"]
  },
  "rendering-pipeline": {
    id: "rendering-pipeline",
    slug: "rendering-pipeline",
    trackSlug: "foundation",
    title: "Module 1.7: Rendering Engine Pipeline",
    description: "Optimize browser rendering steps from DOM/CSSOM tree formation to layout, paint, and GPU compositing.",
    status: "coming-soon",
    submodules: ["dom-cssom-render-tree", "layout-paint-composite"],
    projects: ["browser-rendering-visualizer"],
    labs: [],
    learningOutcomes: ["Eliminate layout shift triggers to stabilize page loading metrics", "Leverage transform and opacity to force GPU compositing optimizations"],
    interviewQuestions: ["What is the difference between reflow and repaint, and how do you minimize them?"]
  },

  // Track 2 Modules
  "component-model": {
    id: "component-model",
    slug: "component-model",
    trackSlug: "react-engineering",
    title: "Module 2.1: Component Model & JSX",
    description: "Master functional components lifecycle updates, dynamic compilation outputs, and controlled element states.",
    status: "coming-soon",
    submodules: ["react-component-jsx", "controlled-vs-uncontrolled"],
    projects: [],
    labs: [],
    learningOutcomes: ["Build predictable form fields using controlled react bindings", "Optimize virtual nodes structures to minimize compilation overhead"],
    interviewQuestions: ["Describe component lifecycle variations between class and functional setups."]
  },
  "hooks-behavior": {
    id: "hooks-behavior",
    slug: "hooks-behavior",
    trackSlug: "react-engineering",
    title: "Module 2.2: Custom Hooks Mechanics",
    description: "Build robust custom hooks encapsulated with state triggers, event listeners, and cleanup loops.",
    status: "coming-soon",
    submodules: ["react-hooks-useeffect-lifecycle", "hooks-memoization-usememo"],
    projects: ["hooks-behavior-lab"],
    labs: [],
    learningOutcomes: ["Manage side-effects safely avoiding infinite render loops inside useEffect", "Isolate expensive calculations using useMemo and useCallback scopes"],
    interviewQuestions: ["What is the exhaustive-deps rule, and how do you resolve its lint errors?"]
  },
  "react-reconciliation": {
    id: "react-reconciliation",
    slug: "react-reconciliation",
    trackSlug: "react-engineering",
    title: "Module 2.3: Reconciliation & Virtual DOM",
    description: "Deep dive into React's fiber scheduler, tree diffing rules, and stable elements key index properties.",
    status: "coming-soon",
    submodules: ["react-reconciliation-diffing"],
    projects: [],
    labs: [],
    learningOutcomes: ["Optimize list rendering speeds by assigning stable index key properties", "Describe how updates propagate across the Fiber node tree structure"],
    interviewQuestions: ["How does React reconciler determine whether to reuse or recreate a DOM node?"]
  },
  "rendering-lifecycle": {
    id: "rendering-lifecycle",
    slug: "rendering-lifecycle",
    trackSlug: "react-engineering",
    title: "Module 2.4: Rendering Optimization",
    description: "Profile components renders, debug expensive updates propagation, and structure composition layouts.",
    status: "coming-soon",
    submodules: ["react-rendering-behavior-profiling"],
    projects: ["react-rendering-playground"],
    labs: [],
    learningOutcomes: ["Identify layout paint bottlenecks utilizing React DevTools Profiler", "Minimize component rendering frequency using state structure encapsulation"],
    interviewQuestions: ["Why does React re-render components, and how do you block child rendering?"]
  },
  "composition-error-boundaries": {
    id: "composition-error-boundaries",
    slug: "composition-error-boundaries",
    trackSlug: "react-engineering",
    title: "Module 2.5: Resilient UI & Suspense",
    description: "Build fault-tolerant user interfaces utilizing error boundary fallbacks and async Suspense loaders.",
    status: "coming-soon",
    submodules: ["composition-boundaries", "suspense-basics"],
    projects: ["component-composition-studio"],
    labs: [],
    learningOutcomes: ["Capture runtime crashes gracefully rendering fallback component overlays", "Coordinate async component loading sequences using Suspense boundaries"],
    interviewQuestions: ["Design an enterprise React application layout using error boundaries and fallback views."]
  }
};
