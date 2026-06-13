import { FrontendTrackDetail } from "../tracksIndex";

export const microFrontendsDetail: FrontendTrackDetail = {
  slug: "micro-frontends",
  title: "Micro Frontends",
  subtitle: "Learn how large frontend teams split monolithic frontend applications into independently built, deployed, and owned micro applications using shell architecture, runtime composition, Module Federation, shared contracts, and isolated release pipelines.",
  description: "Learn how large frontend teams split monolithic frontend applications into independently built, deployed, and owned micro applications using shell architecture, runtime composition, Module Federation, shared contracts, and isolated release pipelines.",
  difficulty: "Architect",
  estimatedHours: 40,
  interviewWeight: "High",
  prerequisites: ["frontend-architecture-fundamentals"],
  learningOutcomes: [
    "Explain why micro frontends exist and the organizational problems they solve.",
    "Design a resilient shell + remote micro frontend architecture.",
    "Utilize Webpack/Rspack Module Federation for runtime script loading.",
    "Handle shared dependencies and version alignment configurations safely.",
    "Design robust communication patterns between micro applications.",
    "Manage routing, authentication, layout layouts, and deployment boundaries.",
    "Identify and avoid common performance, latency, and operational pitfalls.",
    "Answer senior-level system design frontend interview questions confidently."
  ],
  modules: [
    {
      id: "mod-12-1",
      title: "Module 12.1: Runtime Module Federation",
      description: "Scale large teams projects importing remote packages dynamically without shell rebuilds.",
      badge: "Architect Level"
    }
  ],
  deepDiveSections: [
    {
      id: "definition",
      title: "What is a Micro Frontend?",
      description: "A micro frontend is an architectural pattern where a large frontend application is split into smaller independently owned frontend applications.\n\nInstead of one large React, Angular, or Vue app owned by many teams, each business domain can own its own frontend slice. They mainly solve organizational scaling, team ownership, and release independence. They are not just a code-splitting technique.",
      whyItMatters: "Enables autonomous team boundaries, independent deployments, and reduces coordination overhead in large engineering groups."
    },
    {
      id: "when-not-to-use",
      title: "When NOT to Use Micro Frontends",
      description: "Do not use Micro Frontends when:\n1. The team is small.\n2. The product is still early-stage.\n3. There are no clear domain boundaries.\n4. Independent deployments are not required.\n5. Shared design and UX consistency are not mature.\n6. The organization cannot handle CI/CD complexity.\n7. Performance budget is already tight.",
      whyItMatters: "Micro Frontends solve organizational scaling more than technical scaling. If the team structure does not need independent ownership and deployment, a modular monolith is usually better."
    },
    {
      id: "auth-strategy",
      title: "Authentication and Authorization",
      description: "Authentication should usually be handled by the shell. The shell manages login state, token refresh, user session persistence, global route protection, and passes user context safely to micro apps. Remotes are responsible for feature-level authorization, role-based UI controls, and calling domain APIs with valid auth headers.",
      whyItMatters: "Centralizing authentication prevents security loopholes and avoids repeating auth logic across remotes."
    },
    {
      id: "error-isolation",
      title: "Failure Isolation and Resilience",
      description: "Each remote should be wrapped with React error boundaries at the shell level. If the cart micro app crashes due to a runtime exception, the rest of the application (Header, Catalog, Search) should remain fully functional. Graceful degradation templates display fallback screens or reload options.",
      whyItMatters: "Ensures one minor remote failure does not take down the entire user session."
    }
  ],
  diagrams: [
    {
      id: "high-level-arch",
      title: "High-Level Architecture",
      description: "The host shell app acts as the container, orchestrating runtime composition, common layouts, and authentication while loading remotes on demand.",
      type: "architecture",
      content: `                         ┌──────────────────────┐
                         │      Browser          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Shell App        │
                         │  Layout / Auth / Nav  │
                         └───────┬───────┬──────┘
                                 │       │
              ┌──────────────────┘       └──────────────────┐
              ▼                                             ▼
 ┌─────────────────────────┐                  ┌─────────────────────────┐
 │ Product Listing Remote  │                  │ Cart Remote             │
 │ Team: Catalog           │                  │ Team: Checkout          │
 └─────────────────────────┘                  └─────────────────────────┘
              │                                             │
              ▼                                             ▼
 ┌─────────────────────────┐                  ┌─────────────────────────┐
 │ Product API             │                  │ Cart API                │
 └─────────────────────────┘                  └─────────────────────────┘`
    },
    {
      id: "runtime-sequence",
      title: "Runtime Loading Sequence",
      description: "In runtime composition, the shell does not bundle every micro app at build time. Instead, it dynamically loads remote entry manifests at runtime when navigating to routes.",
      type: "sequence",
      content: `User
 │
 │ opens /products
 ▼
Browser
 │
 │ loads Shell App
 ▼
Shell App
 │
 │ checks route config
 │ identifies Product Listing remote
 ▼
Remote Manifest / remoteEntry.js
 │
 │ fetch remote bundle
 ▼
Product Listing Micro App
 │
 │ mounts inside shell container
 ▼
Product API
 │
 │ fetch product data
 ▼
Product Listing UI rendered`
    },
    {
      id: "build-vs-runtime",
      title: "Build-Time vs Run-Time Integration",
      description: "Build-time integration packages micro frontends as npm libraries, coupling versions at compile-time. Run-time integration loads remote modules dynamically, enabling independent deployment cycles.",
      type: "flow",
      content: `Build-Time Integration:
[ MFE Source ] ──(npm publish)──► [ npm Registry ] ──(npm i)──► [ Shell Build ] ──► [ Single Monolithic Bundle ]

Run-Time Integration:
[ MFE Source ] ──(deploy CDN)──► [ CDN (remoteEntry.js) ]
                                      ▲
                                 (loads runtime)
                                      │
[ Shell Source ] ────────────────► [ Shell App ]`
    },
    {
      id: "failure-recovery",
      title: "Remote Failure Recovery Flow",
      description: "When a remote micro frontend fails to resolve or throws a runtime error, the shell isolates the failure using localized Error Boundaries and falls back to a graceful degraded state.",
      type: "deployment",
      content: `Shell loads Route
       │
       ▼
Fetch Remote Bundle (e.g. cartApp/remoteEntry.js)
       │
       ├──► Success: Mount MFE UI
       │
       └──► Failure (404/500/timeout/error)
                 │
                 ▼
       Error Boundary Intercepts Exception
                 │
                 ▼
       Log telemetry: { remoteName, remoteVersion, route, errorType }
                 │
                 ▼
       Show Fallback UI + Render "Retry" / Keep navigation usable`
    }
  ],
  labs: [
    {
      id: "lab-1",
      title: "Host and Remote Setup",
      goal: "Create one shell app and one remote app using Module Federation.",
      concepts: ["Host", "Remote", "remoteEntry.js", "Runtime loading"],
      difficulty: "Intermediate",
      status: "Available"
    },
    {
      id: "lab-2",
      title: "Shared Dependency Lab",
      goal: "Share React and React DOM as singleton dependencies.",
      concepts: ["Shared dependencies", "Singleton", "Version alignment", "Bundle duplication"],
      difficulty: "Intermediate",
      status: "Available"
    },
    {
      id: "lab-3",
      title: "Remote Failure Fallback",
      goal: "Show fallback UI when remote loading fails.",
      concepts: ["Error boundary", "Fallback UI", "Graceful degradation", "Runtime failure"],
      difficulty: "Senior",
      status: "Available"
    },
    {
      id: "lab-4",
      title: "Event Communication Lab",
      goal: "Send cart count update from Cart Remote to Shell Header.",
      concepts: ["Custom events", "Event contract", "Cart state", "Cross-app communication"],
      difficulty: "Intermediate",
      status: "Available"
    },
    {
      id: "lab-5",
      title: "Deployment Lab",
      goal: "Deploy shell and remote independently.",
      concepts: ["CI/CD", "CDN hosting", "Remote manifest", "Rollback"],
      difficulty: "Architect",
      status: "Available"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Micro Frontend Retail Platform",
      description: "Build a high-performance e-commerce catalog featuring dynamic card grids, cart overlays, checkout layouts, and profile submodules owned by independent teams.",
      buildItems: [
        "Shell App with unified navigation & auth context",
        "Product Listing Remote (Team Catalog)",
        "Cart Remote (Team Checkout)",
        "Checkout Remote (Team Checkout)",
        "Profile Remote (Team Users)",
        "Shared UI Design System component library package"
      ],
      conceptsPracticed: [
        "Module Federation configuration",
        "Remote lazy loading",
        "Shared singleton dependencies",
        "Shell-controlled layout routing",
        "Domain-specific error boundaries",
        "Independent CI/CD pipelines"
      ],
      interviewValue: "You can explain how large e-commerce companies split frontend ownership across teams.",
      difficulty: "Architect",
      status: "Available"
    },
    {
      id: "proj-2",
      title: "Micro Frontend Admin Dashboard",
      description: "Build a composite analytics dashboard with independent tab panels representing Billing, Analytics, Notifications, and Audit Logs.",
      buildItems: [
        "Shell Dashboard containing global sidebars & themes control",
        "Analytics Remote (interactive charting layouts)",
        "Users & Roles Remote",
        "Billing & Subscriptions Remote",
        "Notifications Feed Remote"
      ],
      conceptsPracticed: [
        "Role-based view accesses",
        "Nested tab routes mapping",
        "Graceful remote loader fallbacks",
        "Shared auth context propagation",
        "Multi-app dashboard composition"
      ],
      interviewValue: "Demonstrates architectural knowledge of composing complex client dashboards with strict security boundaries.",
      difficulty: "Senior",
      status: "Available"
    },
    {
      id: "proj-3",
      title: "Micro Frontend Migration Lab",
      description: "Incrementally migrate a monolithic React legacy application into a composed micro frontend setup using the Strangler pattern.",
      buildItems: [
        "Identify and isolate Catalog routes in the legacy app",
        "Extract Catalog into an independent Module Federation Remote",
        "Mount the extracted Catalog Remote inside the new Shell container",
        "Deploy the extracted Remote independently from the legacy app shell",
        "Add automated runtime contracts validation suite"
      ],
      conceptsPracticed: [
        "Strangler pattern",
        "Incremental legacy refactoring",
        "Routing proxy overrides",
        "System contracts safety",
        "Zero-downtime micro deployments"
      ],
      interviewValue: "Crucial for answering: 'How would you migrate a frontend monolith to micro frontends?'",
      difficulty: "Architect",
      status: "Available"
    }
  ],
  caseStudies: [
    {
      id: "cs-micro-frontends",
      title: "Design Micro Frontend Retail Platform",
      description: "A large retail company has multiple teams working on one frontend monolith: Catalog Team, Cart Team, Checkout Team, Orders Team, Profile Team, and Marketing Team. Every release requires heavy coordination. Builds are slow. A small bug in one area can delay the entire release. We solve this by splitting the frontend into domain-owned micro frontends.",
      category: "System Design Case Study",
      readTime: "15 min",
      relevance: "Critical",
      tags: ["Module Federation", "Strangler Pattern", "Error Isolation", "Independent Deployments"]
    }
  ],
  articles: [
    {
      id: "art-1",
      title: "Micro Frontends: Complete Beginner to Architect Guide",
      description: "Learn micro frontends from fundamentals to architect-level system design, including shell apps, remotes, Module Federation, routing, auth, deployment, testing, and interview preparation.",
      difficulty: "Intermediate",
      readTime: "18 min read",
      tags: ["Micro Frontends", "Frontend Architecture", "Module Federation", "System Design"],
      slug: "micro-frontends-complete-guide",
      status: "Published"
    },
    {
      id: "art-2",
      title: "Micro Frontend Architecture Patterns Every Developer Should Know",
      description: "Comparing client-side, server-side, and edge composition strategies with their respective tradeoffs.",
      difficulty: "Senior",
      readTime: "15 min",
      tags: ["Patterns", "System Design", "Decisions"],
      slug: "micro-frontend-architecture-patterns",
      status: "Published"
    },
    {
      id: "art-3",
      title: "Module Federation Deep Dive for Micro Frontends",
      description: "Understand webpack Module Federation from fundamentals to production architecture, including host, remote, remoteEntry.js, exposes, shared dependencies, singleton React, runtime loading, deployment, and failure handling.",
      difficulty: "Senior",
      readTime: "16 min read",
      tags: ["Module Federation", "Micro Frontends", "webpack", "Frontend Architecture", "Interview Prep"],
      slug: "module-federation-deep-dive",
      status: "Published"
    },
    {
      id: "art-4",
      title: "Communication Between Micro Frontends",
      description: "Learn how micro frontends communicate safely using URL state, backend APIs, custom events, event buses, shared contracts, and why large global stores often create tight coupling.",
      difficulty: "Senior",
      readTime: "15 min read",
      tags: ["Micro Frontends", "Frontend Architecture", "State Management", "System Design", "Interview Prep"],
      slug: "communication-between-micro-frontends",
      status: "Published"
    },
    {
      id: "art-5",
      title: "Micro Frontend Testing Strategy",
      description: "Learn how to test micro frontends using unit tests, contract tests, integration tests, E2E tests, visual regression, performance checks, deployment validation, and production monitoring.",
      difficulty: "Senior",
      readTime: "16 min read",
      tags: ["Micro Frontends", "Testing", "Contract Testing", "E2E Testing", "Frontend Architecture", "Interview Prep"],
      slug: "micro-frontend-testing-strategy",
      status: "Published"
    },
    {
      id: "art-6",
      title: "Micro Frontend Deployment, Rollback, and Observability",
      description: "Learn how to deploy micro frontends safely using independent CI/CD pipelines, remote manifests, version pinning, rollback strategies, feature flags, monitoring, tracing, Web Vitals, and production health dashboards.",
      difficulty: "Architect",
      readTime: "17 min read",
      tags: ["Micro Frontends", "Deployment", "Observability", "Rollback", "Frontend Architecture", "Interview Prep"],
      slug: "micro-frontend-deployment-observability",
      status: "Published"
    },
    {
      id: "art-7",
      title: "Micro Frontends vs Modular Monolith",
      description: "Understand when to choose micro frontends, when to prefer a modular frontend monolith, and how to explain the tradeoffs in senior frontend architecture interviews.",
      difficulty: "Senior",
      readTime: "14 min read",
      tags: [
        "Micro Frontends",
        "Modular Monolith",
        "Frontend Architecture",
        "System Design",
        "Interview Prep"
      ],
      slug: "micro-frontends-vs-modular-monolith",
      status: "Published"
    },
    {
      id: "art-8",
      title: "Migrating a Frontend Monolith to Micro Frontends",
      description: "Learn how to migrate a frontend monolith to micro frontends using the strangler pattern, domain boundaries, shell integration, routing migration, shared design system, deployment safety, rollback, and observability.",
      difficulty: "Architect",
      readTime: "16 min read",
      tags: [
        "Micro Frontends",
        "Migration",
        "Frontend Architecture",
        "Strangler Pattern",
        "System Design"
      ],
      slug: "migrating-monolith-to-micro-frontends",
      status: "Published"
    },
    {
      id: "art-9",
      title: "Micro Frontends System Design: Design an E-commerce Platform",
      description: "Design a production-grade e-commerce frontend using micro frontends, including shell architecture, domain remotes, routing, auth, cart state, checkout reliability, deployment, rollback, observability, and interview tradeoffs.",
      difficulty: "Architect",
      readTime: "20 min read",
      tags: ["Micro Frontends", "System Design", "E-commerce", "Frontend Architecture", "Interview Prep"],
      slug: "micro-frontends-ecommerce-system-design",
      status: "Published"
    },
    {
      id: "art-10",
      title: "Micro Frontend Interview Questions and Answers",
      description: "Prepare for senior frontend and frontend architect interviews with micro frontend questions covering architecture, Module Federation, routing, auth, state, testing, deployment, performance, and system design.",
      difficulty: "Architect",
      readTime: "18 min read",
      tags: [
        "Micro Frontends",
        "Interview Questions",
        "Frontend Architecture",
        "System Design",
        "Module Federation",
        "Interview Prep"
      ],
      slug: "micro-frontend-interview-questions",
      status: "Published"
    },
    {
      id: "art-11",
      title: "Shell App Design in Micro Frontends",
      description: "Learn how to design the shell app in micro frontend architecture, including layout, routing, auth bootstrap, remote loading, feature flags, error boundaries, analytics, and governance.",
      difficulty: "Senior",
      readTime: "14 min read",
      tags: [
        "Micro Frontends",
        "Shell App",
        "Frontend Architecture",
        "Module Federation",
        "System Design",
        "Interview Prep"
      ],
      slug: "micro-frontend-shell-app-design",
      status: "Published"
    },
    {
      id: "art-12",
      title: "Routing and Deep Linking in Micro Frontends",
      description: "Learn how to design routing in micro frontend architecture, including shell-owned routes, remote-owned nested routes, deep linking, refresh handling, route conflicts, auth guards, SEO, and interview tradeoffs.",
      difficulty: "Senior",
      readTime: "13 min read",
      tags: [
        "Micro Frontends",
        "Routing",
        "Deep Linking",
        "Frontend Architecture",
        "System Design",
        "Interview Prep"
      ],
      slug: "routing-deep-linking-micro-frontends",
      status: "Published"
    },
    {
      id: "art-13",
      title: "Authentication and Authorization in Micro Frontends",
      description: "Learn how to design authentication and authorization in micro frontend architecture, including shell-owned auth bootstrap, token handling, session refresh, remote identity context, permission checks, logout, security risks, and interview tradeoffs.",
      difficulty: "Senior",
      readTime: "14 min read",
      tags: [
        "Micro Frontends",
        "Authentication",
        "Authorization",
        "Frontend Architecture",
        "Security",
        "Interview Prep"
      ],
      slug: "authentication-authorization-micro-frontends",
      status: "Published"
    },
    {
      id: "art-14",
      title: "Shared Dependencies and Versioning in Micro Frontends",
      description: "Learn how to manage shared dependencies in micro frontend architecture, including React singleton, design system versioning, shared libraries, dependency conflicts, contract compatibility, and production governance.",
      difficulty: "Architect",
      readTime: "15 min read",
      tags: [
        "Micro Frontends",
        "Shared Dependencies",
        "Versioning",
        "Module Federation",
        "Frontend Architecture",
        "Interview Prep"
      ],
      slug: "shared-dependencies-versioning-micro-frontends",
      status: "Published"
    },
    {
      id: "art-15",
      title: "Design System Governance for Micro Frontends",
      description: "Learn how to govern design systems in micro frontend architecture, including design tokens, shared components, accessibility, visual regression, versioning, contribution models, and UI consistency across teams.",
      difficulty: "Senior",
      readTime: "13 min read",
      tags: [
        "Micro Frontends",
        "Design System",
        "Frontend Architecture",
        "UI Governance",
        "Accessibility",
        "Interview Prep"
      ],
      slug: "design-system-governance-micro-frontends",
      status: "Published"
    },
    {
      id: "art-16",
      title: "Performance Optimization in Micro Frontends",
      description: "Learn how to optimize micro frontend performance using route-level loading, remote preloading, shared dependency strategy, bundle budgets, caching, Web Vitals, and production monitoring.",
      difficulty: "Architect",
      readTime: "16 min read",
      tags: [
        "Micro Frontends",
        "Performance",
        "Web Vitals",
        "Frontend Architecture",
        "Module Federation",
        "Interview Prep"
      ],
      slug: "performance-optimization-micro-frontends",
      status: "Published"
    },
    {
      id: "art-17",
      title: "Error Boundaries and Failure Isolation in Micro Frontends",
      description: "Learn how to design failure isolation in micro frontend architecture using error boundaries, fallback UI, remote loading failure handling, retry strategies, monitoring, rollback, and graceful degradation.",
      difficulty: "Senior",
      readTime: "13 min read",
      tags: [
        "Micro Frontends",
        "Error Boundaries",
        "Failure Isolation",
        "Frontend Architecture",
        "Reliability",
        "Interview Prep"
      ],
      slug: "error-boundaries-failure-isolation-micro-frontends",
      status: "Published"
    }
  ],
  interviewQuestions: [
    {
      id: "q-1",
      question: "What are micro frontends?",
      difficulty: "Beginner",
      topic: "Basics",
      shortAnswer: "An architectural pattern where a large frontend application is split into smaller, independent apps owned by separate teams.",
      seniorAnswer: "Micro Frontends extend the microservices philosophy to the frontend. It is a design pattern where a single monolithic browser application is decomposed into multiple autonomous, loosely coupled micro-applications that are composed at runtime. Each micro-app represents a distinct business subdomain (e.g., catalog, cart) and is built, tested, and deployed independently by dedicated teams.",
      followUps: ["Why compose at runtime instead of build-time?", "What is the role of the shell?"],
      commonMistakes: ["Describing it only as code splitting.", "Ignoring the organizational ownership aspect."],
      relatedLabs: ["lab-1"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-2",
      question: "Why do teams adopt micro frontends?",
      difficulty: "Beginner",
      topic: "Basics",
      shortAnswer: "To resolve coordination blocks, slow builds, and release coordination bottlenecks in large engineering groups.",
      seniorAnswer: "The primary driver for micro frontends is organizational scalability. When a frontend monolith grows, multiple teams stepping on each other's code causes slow release pipelines, complex merges, and deployment blockages. Micro frontends provide absolute team autonomy, allowing catalog and checkout teams to release features on their own schedules with zero deploy coordination.",
      followUps: ["Does it solve technical scaling or organizational scaling?", "What is the cost of team autonomy?"],
      commonMistakes: ["Claiming it makes page performance faster.", "Forgetting team size as a prerequisite."],
      relatedLabs: [],
      relatedProjects: []
    },
    {
      id: "q-3",
      question: "When should you avoid micro frontends?",
      difficulty: "Beginner",
      topic: "Basics",
      shortAnswer: "When the team is small, design systems are not mature, or independent deployments are not required.",
      seniorAnswer: "Avoid micro frontends if you have a small engineering team (e.g., under 3 teams or 15 engineers) or if your product lacks clear domain divisions. The operational complexity—such as routing synchronization, testing coordination, bundle duplication, and runtime failure isolation—will heavily outweigh the benefits. A well-structured modular monolith is almost always superior for early-stage or smaller setups.",
      followUps: ["What is a modular monolith?", "How do you enforce boundaries in a monolith?"],
      commonMistakes: ["Failing to acknowledge the added operational overhead.", "Assuming micro frontends are always the goal."],
      relatedLabs: [],
      relatedProjects: ["proj-3"]
    },
    {
      id: "q-4",
      question: "What is the shell app?",
      difficulty: "Beginner",
      topic: "Architecture",
      shortAnswer: "The host container app that handles common layouts, navigation, auth, and imports remotes at runtime.",
      seniorAnswer: "The shell (or host) is the entrypoint application loaded by the browser. It orchestrates the lifecycle of the user session. It is responsible for loading remote entry manifests, rendering global components (like Headers and Footers), bootstrapping authentication, enforcing global routing rules, and wrapping remotes in error boundaries. It should remain business-logic-free to avoid becoming a new monolithic dependency.",
      followUps: ["How do you keep the shell lightweight?", "Should the shell import remotes directly?"],
      commonMistakes: ["Putting business domain logic inside the shell.", "Rebuilding the shell whenever a remote updates."],
      relatedLabs: ["lab-1"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-5",
      question: "How are micro frontends different from component libraries?",
      difficulty: "Beginner",
      topic: "Comparison",
      shortAnswer: "Component libraries share static stateless UI; micro frontends share independently deployable business features.",
      seniorAnswer: "Component libraries (like design systems) are static, stateless UI elements distributed as npm packages that must be compiled into applications at build time. Micro frontends are runtime-composed, complete vertical slices containing business logic, API communication, and UI, deployed independently. Updating a component library requires upgrading npm packages and redeploying apps; updating a micro frontend remote updates immediately without host redeployment.",
      followUps: ["Can a micro frontend use a shared component library?", "How do you handle design system updates?"],
      commonMistakes: ["Confusing runtime composition with package imports.", "Assuming remotes are just packages."],
      relatedLabs: [],
      relatedProjects: []
    },
    {
      id: "q-6",
      question: "How do micro frontends communicate?",
      difficulty: "Intermediate",
      topic: "Communication",
      shortAnswer: "Using URL state, custom window events, or lightweight publish-subscribe event buses.",
      seniorAnswer: "Communication should follow a shared-nothing mindset. The primary state sharing mechanism should be the URL (query params and pathnames) or backend APIs. For immediate runtime updates, we use Custom DOM Events on the window object or a lightweight custom Event Bus. We avoid sharing global Redux/Zustand stores because doing so violates runtime decoupling boundaries, making remotes dependent on each other's state schemas.",
      followUps: ["Why is a shared global store an anti-pattern?", "How do custom events maintain decoupling?"],
      commonMistakes: ["Sharing a Redux store across remotes.", "Allowing remotes to directly import store setters from other remotes."],
      relatedLabs: ["lab-4"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-7",
      question: "How do you handle routing?",
      difficulty: "Intermediate",
      topic: "Routing",
      shortAnswer: "The shell owns top-level routes and mounts remotes; remotes own internal navigation structures.",
      seniorAnswer: "We use a hybrid routing architecture. The shell application owns top-level routing (e.g., /products, /checkout) and registers wildcard paths to lazy load the corresponding remote bundles. Once the remote mounts, it handles its own internal routing (e.g., tabs, nested screens). To sync navigation transitions without full page reloads, we pass a custom history event handler between the shell router and the remote router context.",
      followUps: ["How do you prevent route namespace collisions?", "How does deep linking resolve?"],
      commonMistakes: ["Allowing remotes to override top-level routes directly.", "Re-rendering the entire page on remote route changes."],
      relatedLabs: [],
      relatedProjects: ["proj-2"]
    },
    {
      id: "q-8",
      question: "What is Module Federation?",
      difficulty: "Intermediate",
      topic: "Module Federation",
      shortAnswer: "A bundler feature (Webpack/Rspack) allowing applications to dynamically load code from other builds at runtime.",
      seniorAnswer: "Module Federation is a compilation feature introduced in Webpack 5 (and supported by Rspack) that allows an application to dynamically load exposed modules from a separate compilation at runtime. It decouples the host build from the remote build. Remotes expose components or pages, and hosts load them using a small manifest file called 'remoteEntry.js' without recompiling the host.",
      followUps: ["How does remoteEntry.js work?", "What is the difference between a host and a remote?"],
      commonMistakes: ["Calling it a framework instead of a bundler feature.", "Thinking it is only for React."],
      relatedLabs: ["lab-1"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-9",
      question: "How do you share dependencies safely?",
      difficulty: "Intermediate",
      topic: "Dependencies",
      shortAnswer: "Configure Webpack's shared configuration to declare critical vendors (like React) as singletons.",
      seniorAnswer: "We configure the Module Federation plugin to define shared packages (e.g., 'react', 'react-dom', 'rxjs') under the 'shared' config field. Critical packages are marked as 'singleton: true' and 'strictVersion: true' to ensure the browser loads exactly one instance. If a version mismatch occurs (e.g., remote needs React 19, shell uses 18), the host outputs a console error or resolves to the highest semver-compatible dependency fallback.",
      followUps: ["What happens if strictVersion is false?", "What is a singleton dependency?"],
      commonMistakes: ["Not configuring singletons, causing duplicate React instances to crash the app.", "Sharing all npm packages blindly."],
      relatedLabs: ["lab-2"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-10",
      question: "How do you keep UI consistent across micro apps?",
      difficulty: "Intermediate",
      topic: "UX Consistency",
      shortAnswer: "Distribute a unified design system and tokens package, and establish strict UX guidelines.",
      seniorAnswer: "We distribute a shared, versioned Design System package containing stateless components, icons, and tailwind design tokens (colors, spacings). Every micro app imports this package. To avoid bundling duplicate CSS styles, we can compile tailwind utilities into the global shell stylesheets or use isolated CSS scope boundaries (like CSS Modules or Shadow DOM) to prevent style leakage across remotes.",
      followUps: ["How do you handle breaking design system updates?", "Why are CSS modules useful?"],
      commonMistakes: ["Letting each team pick their own styling framework (e.g. mix Tailwind with Sass and styled-components).", "Coupling design system updates to simultaneous deployments."],
      relatedLabs: [],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-11",
      question: "How do you avoid runtime failures in Module Federation?",
      difficulty: "Senior",
      topic: "Resilience",
      shortAnswer: "Wrap remotes in React Error Boundaries and configure runtime timeout rules.",
      seniorAnswer: "Runtime failures in micro frontends are inevitable (e.g., remote bundle returns 404, or has a JS crash). We wrap every federated remote mount point in a custom React Error Boundary. If a remote fails to load or throws a runtime exception, the boundary intercepts the error, reports the stack trace to our telemetry system, and renders a fallback UI. We also configure connection timeout gates inside our dynamic script loading utility.",
      followUps: ["How do you implement dynamic script loaders?", "What should a fallback UI look like?"],
      commonMistakes: ["Assuming remote CDN bundles are 100% available.", "Not implementing route-level catch blocks."],
      relatedLabs: ["lab-3"],
      relatedProjects: ["proj-2"]
    },
    {
      id: "q-12",
      question: "How do you handle remote loading failure?",
      difficulty: "Senior",
      topic: "Resilience",
      shortAnswer: "Implement dynamic script injection with retries and render custom fallback components.",
      seniorAnswer: "Instead of declaring remotes statically in the Webpack configuration (which crashes the app if the manifest is missing at startup), we load remotes dynamically using runtime script injection. We write a loader utility that fetches the remoteEntry URL, checks for errors, retries the request up to 3 times, and resolves to a fallback component if it fails. The shell continues to load, displaying a local fallback message.",
      followUps: ["What is static vs dynamic federation?", "How do you write a fallback script loader?"],
      commonMistakes: ["Using static configurations that make the shell dependent on remote uptime.", "No retry limits on failed scripts."],
      relatedLabs: ["lab-3"],
      relatedProjects: ["proj-2"]
    },
    {
      id: "q-13",
      question: "How do you roll back one micro frontend?",
      difficulty: "Senior",
      topic: "Deployment",
      shortAnswer: "Update the remoteEntry version file or rollback the pointer inside your metadata routing hub.",
      seniorAnswer: "Because each micro frontend is deployed independently, rolling back does not require redeploying the shell. We maintain a routing metadata file (e.g., manifests.json) hosted on a CDN that lists all active remoteEntry endpoints. To roll back, we update this JSON file via our CI/CD pipeline to point to the previous version's build path (e.g., /catalog/v1.2.0/remoteEntry.js instead of /catalog/v1.2.1/remoteEntry.js) and purge the CDN cache.",
      followUps: ["Why is a metadata manifest hub preferred?", "How does CDN caching affect rollback times?"],
      commonMistakes: ["Rebuilding the entire remote repository to rollback.", "Depending on docker container image swaps for frontend rolls."],
      relatedLabs: ["lab-5"],
      relatedProjects: ["proj-3"]
    },
    {
      id: "q-14",
      question: "How do you prevent duplicate React bundles?",
      difficulty: "Senior",
      topic: "Performance",
      shortAnswer: "Declare React as a singleton with strict version validation in the Module Federation plugin config.",
      seniorAnswer: "To prevent multiple React bundles from loading (which bloats download sizes and breaks context states), React must be declared as a singleton. In the `ModuleFederationPlugin` configuration of both the host and remotes, we define `'react'` and `'react-dom'` as shared singletons: `shared: { react: { singleton: true, requiredVersion: deps.react } }`. We also implement bundle analyzers in our CI builds to assert that vendor chunk distributions remain clean.",
      followUps: ["What is requiredVersion?", "What happens if versions mismatch?"],
      commonMistakes: ["Failing to mark React as a singleton.", "Ignoring console warnings regarding dependency mismatches."],
      relatedLabs: ["lab-2"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-15",
      question: "How do you design contract testing?",
      difficulty: "Senior",
      topic: "Testing",
      shortAnswer: "Validate that exposed routes, events payloads, and shared types are locked and verified during CI steps.",
      seniorAnswer: "In micro frontends, E2E tests are slow and flaky. Instead, we use contract testing. We define TS interfaces for shared payloads, Custom Event schemas, and exposed component prop contracts in a shared definitions package. In the CI pipeline, we run checks using automated tools (e.g. Pact or custom JSON schema validators) to ensure a remote's exposes match the types expected by the shell, rejecting compiles if a contract break occurs.",
      followUps: ["How do contract tests differ from integration tests?", "Can TypeScript types serve as contracts?"],
      commonMistakes: ["Relying exclusively on global cypress E2E tests.", "Deploying remotes without automated type validations against the shell."],
      relatedLabs: [],
      relatedProjects: ["proj-3"]
    },
    {
      id: "q-16",
      question: "Design a micro frontend architecture for an e-commerce platform.",
      difficulty: "Architect",
      topic: "System Design",
      shortAnswer: "Build a shell housing Catalog, Cart, Checkout, and Profile remotes with independent deploy pipelines and runtime event contracts.",
      seniorAnswer: "I would architect the platform around an App Shell (Host) and multiple remote sub-applications composed at runtime. The Shell manages authentication, global layouts (Navbar/Footer), routing mappings, error boundaries, and telemetry. Remotes represent business subdomains: Catalog Remote, Search Remote, Cart Remote, Checkout Remote, and User Profile Remote. Remotes are lazy loaded per route. Communication utilizes query strings for filters, and window-level Custom Events for cart increments. We enforce strict error isolation with boundary fallback screens, publish CDN version manifests for rollbacks, and run contract checking in CI to verify boundary type safeties.",
      followUps: ["How do you handle search SEO pages initial load?", "How do you share checkout state?"],
      commonMistakes: ["Drawing a single giant server structure.", "Ignoring CDN configurations, version caching, and rollback steps."],
      relatedLabs: ["lab-5"],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-17",
      question: "How would you support 10 frontend teams working independently?",
      difficulty: "Architect",
      topic: "Governance",
      shortAnswer: "Define clear domain boundaries, provide shared CI templates, and enforce runtime contracts via platform governance.",
      seniorAnswer: "Supporting 10 independent teams requires balancing autonomy and governance. I would define strict monorepo workspaces or isolated repositories with clear folder/package boundaries. The platform team provides boilerplate templates containing standard Webpack, TypeScript, and linting configurations. We establish contract validation in CI pipelines, restrict direct remotes-to-remotes imports, enforce shared singleton configurations for core dependencies, and require error boundaries on all exposed entries.",
      followUps: ["What is the role of a frontend platform team?", "How do you prevent teams from diverging on tech choices?"],
      commonMistakes: ["Allowing absolute freedom with no dependency coordination.", "Requiring a central gatekeeper team to approve every release."],
      relatedLabs: [],
      relatedProjects: ["proj-1"]
    },
    {
      id: "q-18",
      question: "How would you design observability for micro frontends?",
      difficulty: "Architect",
      topic: "Observability",
      shortAnswer: "Inject correlation IDs into analytics beacons, track remote load latencies, and log client errors with remote tags.",
      seniorAnswer: "Observability in composed environments requires tracking user sessions across boundaries. The shell sets a correlation session ID passed to all logs. We instrument remote script loading times (LCP and download duration) using the PerformanceObserver API. Client-side error logs sent to our telemetry service (e.g. Sentry) are tagged with `remoteName` and `commitHash` dynamically by parsing the error origin stack traces, allowing us to immediately assign errors to the correct team's repository.",
      followUps: ["How do you trace client errors back to remote source maps?", "How do you track user clicks across remotes?"],
      commonMistakes: ["Logging all errors under the shell app, making it hard to identify the broken remote.", "No telemetry tracking for remote load failures."],
      relatedLabs: [],
      relatedProjects: ["proj-2"]
    },
    {
      id: "q-19",
      question: "How would you manage version compatibility between shell and remotes?",
      difficulty: "Architect",
      topic: "Governance",
      shortAnswer: "Define backwards-compatible API structures, align shared versions, and use contract testing in the pipeline.",
      seniorAnswer: "Version compatibility is handled at three levels: 1. Runtime dependencies: We enforce lockstep versions for singletons (React, design-system tokens) using semver ranges. 2. Component contracts: Exposed parameters (props/events) must be backward compatible. If a remote changes its props interface, it must support both the old and new prop variations until the shell updates. 3. Contract Tests: CI verification asserts remote compatibility before CDN manifest updates go live.",
      followUps: ["How do you coordinate breaking changes?", "What is semantic versioning in micro frontends?"],
      commonMistakes: ["Assuming all remotes compile together.", "Ignoring prop validation checks in runtime mounts."],
      relatedLabs: [],
      relatedProjects: ["proj-3"]
    },
    {
      id: "q-20",
      question: "When would you reject micro frontends in a system design interview?",
      difficulty: "Architect",
      topic: "Decision Making",
      shortAnswer: "If team size is small, build coordination is simple, or SEO/web performance is the absolute priority.",
      seniorAnswer: "I would reject micro frontends in an interview if: 1. The scale is small (under 15 developers) and team coordination is not a bottleneck. 2. Low-end device performance or strict SEO load metrics are the primary product goals (such as an public landing page). Composing multiple bundles at runtime increases LCP, and server-side rendering for federated apps is complex. 3. The organization lacks basic CI/CD automation or monorepo workspace familiarity, as the operational overhead would grind development to a halt.",
      followUps: ["What is the latency cost of Module Federation?", "How does SSR complicate micro frontends?"],
      commonMistakes: ["Recommending micro frontends as a universal performance optimization.", "Failing to state when a monolith is superior."],
      relatedLabs: [],
      relatedProjects: ["proj-3"]
    }
  ],
  mockInterview: [
    {
      id: "mock-lvl-1",
      level: "Fundamentals",
      questions: [
        {
          id: "m-q1",
          question: "What are micro frontends?",
          modelAnswer: "Micro frontends are an architectural pattern where a large frontend is split into smaller, independently owned parts, usually aligned to business domains or teams. Each part can be developed, tested, and deployed separately.",
          followUpQuestions: ["Why not just use a component library?", "What role does the shell app play?"],
          strongSignals: [
            "Mentions ownership and team autonomy",
            "Mentions independent deployment cycle",
            "Identifies alignment with business subdomains"
          ],
          weakSignals: [
            "Only describes it as loading multiple React apps",
            "Fails to mention tradeoffs or added complexities"
          ],
          redFlags: [
            "Claiming micro frontends are designed to make web pages load faster"
          ],
          relatedConcepts: ["Shell Architecture", "Domain Ownership"],
          relatedLabs: ["lab-1"]
        },
        {
          id: "m-q2",
          question: "Why would a company choose micro frontends?",
          modelAnswer: "They help large teams work independently, reduce release coordination, and scale frontend development. They are most useful when a frontend becomes too large for one team or one release train.",
          followUpQuestions: ["What problems do they create?", "How do you evaluate if a company needs them?"],
          strongSignals: [
            "Focuses on organizational scaling bottlenecks",
            "Connects release speed to team structures",
            "Mentions scaling release trains"
          ],
          weakSignals: [
            "Focuses only on technical reasons like mixing React and Angular",
            "Fails to mention deployment coordinates"
          ],
          redFlags: [
            "Recommending them for a team of 3 developers"
          ],
          relatedConcepts: ["Autonomy", "Scaling Release Trains"],
          relatedLabs: []
        },
        {
          id: "m-q3",
          question: "When should you not use micro frontends?",
          modelAnswer: "You should avoid them for small apps or teams that do not need independent deployment. In those cases, the complexity is usually higher than the benefit.",
          followUpQuestions: ["What is a better alternative?", "How do you structure a modular monolith?"],
          strongSignals: [
            "Identifies modular monoliths as a superior alternative for smaller setups",
            "Highlights added tooling, performance, and coordination costs",
            "Recognizes when complexity outweighs team velocity benefits"
          ],
          weakSignals: [
            "Assumes micro frontends are always the final target",
            "Fails to define modular boundaries in monoliths"
          ],
          redFlags: [
            "Believing micro frontends are a good fit for all projects regardless of size"
          ],
          relatedConcepts: ["Modular Monolith", "Operational Overhead"],
          relatedLabs: []
        }
      ]
    },
    {
      id: "mock-lvl-2",
      level: "Intermediate",
      questions: [
        {
          id: "m-q6",
          question: "How do micro frontends communicate?",
          modelAnswer: "They usually communicate through browser events, a shared contract, URL state, or a lightweight event bus. The key is to keep communication minimal and explicit so apps stay decoupled.",
          followUpQuestions: ["Why not share one global store?", "What are the risks of using custom event namespaces?"],
          strongSignals: [
            "Champions shared-nothing architecture",
            "Prefers URL query strings and backend APIs as primary states",
            "Identifies global state sharing as a decoupling anti-pattern"
          ],
          weakSignals: [
            "Recommends sharing Redux store across remotes",
            "Uses window properties indiscriminately for data sharing"
          ],
          redFlags: [
            "Suggesting sharing a single global Redux or Zustand state object across independent remote applications"
          ],
          relatedConcepts: ["Decoupled Communication", "Event Bus"],
          relatedLabs: ["lab-4"]
        },
        {
          id: "m-q7",
          question: "How do you handle routing?",
          modelAnswer: "The shell usually owns top-level routing, while each micro app owns routes inside its own boundary. This avoids route conflicts and makes each team responsible for its own navigation logic.",
          followUpQuestions: ["How do you support deep links?", "How do you synchronize route history variables?"],
          strongSignals: [
            "Defines clear routing boundaries between Shell and Remotes",
            "Explains wildcard matching for dynamic remote routing",
            "Detailing state synchronization between host and remote routing contexts"
          ],
          weakSignals: [
            "Allowing remotes to override top-level routes directly",
            "Assuming full page reloads occur during route changes"
          ],
          redFlags: [
            "Not having a strategy for resolving deep links to nested remote views"
          ],
          relatedConcepts: ["Wildcard Routing", "History Sync"],
          relatedLabs: []
        }
      ]
    },
    {
      id: "mock-lvl-3",
      level: "Senior/System Design",
      questions: [
        {
          id: "m-q11",
          question: "Design a micro frontend architecture for an e-commerce platform.",
          modelAnswer: "I would design the platform around a shell app and multiple domain-owned remotes. The shell would own global layout, top-level routing, authentication bootstrap, navigation, feature flag bootstrap, error boundaries, and remote loading. The remotes would be split by business domain: Catalog Remote, Search Remote, Cart Remote, Checkout Remote, Profile Remote, Orders Remote, and Marketing Remote. Each remote would have its own repository or package boundary, CI/CD pipeline, test suite, deployment lifecycle, and ownership team. For state, I would avoid a giant shared global store. Product listing state should stay inside catalog. Cart state should be backend-driven and exposed through cart APIs. Cross-app communication should happen through URL state, explicit events, or backend APIs. For reliability, each remote should be wrapped in an error boundary with fallback UI. For deployment safety, I would use versioned remote manifests, feature flags, monitoring, and rollback support.",
          followUpQuestions: ["How would you manage cross-app cart state?", "How does this layout impact LCP?"],
          strongSignals: [
            "Defines shell responsibilities vs remote domain scopes",
            "Explains error boundaries wrapping federated mount points",
            "Proposes manifest JSON files on CDN for atomic rollbacks",
            "Enforces contract validation in CI pipelines"
          ],
          weakSignals: [
            "Drawing layout boxes without explaining loading mechanisms",
            "Ignoring failure isolation and deployment rollback paths"
          ],
          redFlags: [
            "Recommending build-time composition using npm packages for rapid updates",
            "Failing to address bundle duplication or React singletons configuration"
          ],
          relatedConcepts: ["Shell orchestration", "Resilient boundaries", "CDN deployment manifests"],
          relatedProjects: ["proj-1"]
        }
      ]
    }
  ],
  rapidFireQuestions: [
    "What is the difference between micro frontends and microservices?",
    "What is a remote entry in Module Federation?",
    "What is the risk of over-sharing dependencies?",
    "How do you do auth across micro apps?",
    "What is the role of a design system?",
    "What is the best way to support rollback?",
    "How do you measure performance in a composed frontend?",
    "What is the most common anti-pattern in micro frontends?"
  ],
  scoringRubric: [
    {
      level: "Fundamentals",
      scores: [
        { score: 1, description: "Gives only buzzwords, cannot define host/remote separation." },
        { score: 2, description: "Understands splitting frontend code but views it as simple code splitting." },
        { score: 3, description: "Explains team ownership and independent deployment cycles clearly." },
        { score: 4, description: "Understands core tradeoffs and explicitly defines when not to use it." },
        { score: 5, description: "Connects micro frontends to organizational scaling, release autonomy, and architectural complexity constraints." }
      ]
    },
    {
      level: "Intermediate",
      scores: [
        { score: 1, description: "Does not understand host/remote communication or routing boundaries." },
        { score: 2, description: "Knows Module Federation terms but cannot explain vendor configuration tradeoffs." },
        { score: 3, description: "Explains routing synchronization, custom events communication, and shared libraries." },
        { score: 4, description: "Understands singleton dependencies config, remote loading boundaries, fallback UIs, and contract testing." },
        { score: 5, description: "Can design safe runtime composition with manifest configurations, observability taggings, and atomic rolls." }
      ]
    },
    {
      level: "Senior/System Design",
      scores: [
        { score: 1, description: "Proposes generic dashboard layouts, ignores team bounds and deployments." },
        { score: 2, description: "Splits apps into remote containers but ignores governance and testing validation rules." },
        { score: 3, description: "Defines shell, remotes, routing history sync, auth sessions, and CDN deployments." },
        { score: 4, description: "Covers error boundary failure isolation, performance latency optimization, metric observability, and rollback." },
        { score: 5, description: "Makes strong tradeoff decisions, explains when micro frontends should be rejected, and details monorepo workspaces configuration." }
      ]
    }
  ],
  redFlags: [
    {
      answer: "Micro frontends are just multiple React apps running on the same page.",
      whyWeak: "Misses the core organizational motivation of team autonomy, release independence, and boundary decoupling."
    },
    {
      answer: "Every page should be built as a separate micro frontend remote.",
      whyWeak: "Shows overengineering. Page-level splits within a single domain should be handled via code splitting and standard lazy routing."
    },
    {
      answer: "We can share a single global Redux store across all micro frontends to make state updates easy.",
      whyWeak: "Creates a tight coupling bottleneck. Any state change contract change in one app can break other apps at runtime, defeating release independence."
    },
    {
      answer: "Teams should be allowed to use any UI framework they want (React, Angular, Svelte) to build their remotes.",
      whyWeak: "Allows technology sprawl. Loading multiple frameworks in the browser heavily increases bundle size, slows page load times, and degrades UX consistency."
    },
    {
      answer: "If a remote application fails to load, it is okay for the entire page to display a crash screen.",
      whyWeak: "Lack of failure isolation mindset. A failure in a non-critical remote (e.g. recommendation carousel) must degrade gracefully with a fallback UI."
    }
  ],
  strongCandidatePhrases: [
    "Micro frontends are an organizational scaling pattern first and a technical pattern second.",
    "I would not choose micro frontends unless the team structure and release model justify the complexity.",
    "The shell should coordinate composition, not become a business-logic dumping ground.",
    "If two micro frontends need constant communication, the boundary is probably wrong.",
    "Independent deployment is only safe when contracts, versioning, rollback, and observability are designed properly.",
    "A modular monolith is often better than micro frontends for small teams."
  ],
  commonMistakes: [
    "Using micro frontends for a small team or application where a modular monolith would suffice.",
    "Sharing too much state globally, which introduces hidden coupling and runtime dependency risks.",
    "Creating a heavy, complex shell containing business domain rules instead of keeping it lightweight.",
    "Allowing every remote team to choose different UI patterns and frameworks, destroying layout consistency.",
    "Loading all remotes upfront instead of lazy loading bundles per route boundaries.",
    "Failing to handle remote script load errors, allowing single remote crashes to bring down the shell.",
    "Ignoring dependency version conflicts, resulting in duplicate React bundles loading in the browser.",
    "Omitting automated contract checking inside CI compilation pipelines.",
    "Lacking an atomic rollback strategy for remote assets.",
    "No clear domain ownership boundaries defined for remote assets."
  ],
  architectChecklist: [
    "Do we have multiple autonomous frontend teams?",
    "Are domains and boundary contexts clearly separated?",
    "Do teams require independent deployment cycles?",
    "Do we have strong CI/CD and deployment pipeline maturity?",
    "Do we have a shared design system and design tokens?",
    "Are domain ownership boundaries clearly defined?",
    "Can we monitor remote script load failure rates in production?",
    "Is there a pointer-based rollback strategy for CDN remoteEntry files?",
    "Do we manage dependency versions and enforce singleton locks?",
    "Is the added operational and performance complexity fully justified?"
  ],
  references: [
    {
      title: "Micro Frontends - Martin Fowler",
      url: "https://martinfowler.com/articles/micro-frontends.html",
      description: "The classic foundational article introducing micro frontends architectures, composition styles, and team alignments.",
      type: "Architecture"
    },
    {
      title: "Micro Frontends Resource Hub",
      url: "https://micro-frontends.org",
      description: "The original site containing techniques, recipes, and strategies for building composed web applications.",
      type: "Official"
    },
    {
      title: "Webpack Module Federation Documentation",
      url: "https://webpack.js.org/concepts/module-federation/",
      description: "Official guide on configuring Module Federation hosts, remotes, and shared dependency scopes.",
      type: "Official"
    },
    {
      title: "AWS Prescriptive Guidance: Micro-frontends",
      url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html",
      description: "Cloud-native architectures and deployment strategies for scale frontend compositions on CDN infrastructures.",
      type: "Architecture"
    },
    {
      title: "Module Federation Official Site",
      url: "https://module-federation.io",
      description: "The official platform for module federation documentation, tools, and plugins across various compilers.",
      type: "Official"
    },
    {
      title: "Top Micro Frontend Interview Questions and Answers",
      url: "https://www.index.dev/interview-questions/micro-frontend",
      description: "Interview-focused question bank for testing micro frontend systems architecture knowledge.",
      type: "Interview"
    },
    {
      title: "Mastering Micro Frontends: 9 Patterns Every Developer Should Know",
      url: "https://blog.bitsrc.io/mastering-microfrontends-9-patterns-every-developer-should-know-397081673770",
      description: "Useful resource detailing runtime composition patterns, routing styles, and deployment boundaries.",
      type: "Article"
    }
  ]
};
