import type { FrontendArticle } from "../../articles";

export const moduleFederationDeepDive: FrontendArticle = {
  slug: "module-federation-deep-dive",
  title: "Module Federation Deep Dive for Micro Frontends",
  description: "Understand webpack Module Federation from fundamentals to production architecture, including host, remote, remoteEntry.js, exposes, shared dependencies, singleton React, runtime loading, deployment, and failure handling.",
  difficulty: "Senior",
  readTime: "16 min read",
  tags: [
    "Module Federation",
    "Micro Frontends",
    "webpack",
    "Frontend Architecture",
    "Interview Prep"
  ],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 12, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Module Federation is one of the most popular ways to build micro frontends in modern JavaScript applications."
    },
    {
      type: "paragraph",
      text: "It allows one frontend application to load code from another frontend application at runtime."
    },
    {
      type: "paragraph",
      text: "That one idea unlocks a powerful architecture:"
    },
    {
      type: "code",
      language: "text",
      code: `Different teams
Different codebases
Different builds
Different deployments
One composed user experience`
    },
    {
      type: "paragraph",
      text: "But Module Federation is also easy to misunderstand."
    },
    {
      type: "paragraph",
      text: "It is not just a way to import components from another app."
    },
    {
      type: "paragraph",
      text: "It is a runtime architecture pattern that affects deployment, dependency sharing, versioning, testing, rollback, and observability."
    },
    {
      type: "paragraph",
      text: "This guide explains Module Federation from beginner level to production architect level."
    },
    {
      type: "heading",
      level: 2,
      text: "1. What Is Module Federation?"
    },
    {
      type: "paragraph",
      text: "Module Federation is a webpack 5 feature that allows multiple independently built applications to share and consume code at runtime."
    },
    {
      type: "paragraph",
      text: "In simple words:"
    },
    {
      type: "blockquote",
      text: "One application can expose code, and another application can load that code when needed."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Product App exposes ProductList
Shell App loads ProductList at runtime`
    },
    {
      type: "paragraph",
      text: "This is useful for micro frontends because the shell app does not need to bundle every feature during its own build."
    },
    {
      type: "paragraph",
      text: "Instead, each remote app can be built and deployed independently."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Why Module Federation Matters"
    },
    {
      type: "paragraph",
      text: "Before Module Federation, frontend applications usually shared code in these ways:"
    },
    {
      type: "code",
      language: "text",
      code: `npm packages
monorepo libraries
script tags
iframes
build-time imports`
    },
    {
      type: "paragraph",
      text: "These approaches work, but they have limitations."
    },
    {
      type: "table",
      headers: ["Approach", "Limitation"],
      rows: [
        ["npm package", "Requires rebuilding consumers after package updates"],
        ["Monorepo library", "Often still tied to one build/release process"],
        ["Script tag", "Harder dependency and type management"],
        ["iframe", "Strong isolation but poor UX integration"],
        ["Build-time import", "No true independent runtime deployment"]
      ]
    },
    {
      type: "paragraph",
      text: "Module Federation solves a specific problem:"
    },
    {
      type: "blockquote",
      text: "How can one app consume another app’s code without rebuilding itself every time?"
    },
    {
      type: "paragraph",
      text: "That is why it is powerful for micro frontends."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Core Mental Model"
    },
    {
      type: "paragraph",
      text: "Think of Module Federation like this:"
    },
    {
      type: "code",
      language: "text",
      code: `Remote App
exposes something

Host App
consumes that exposed thing`
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `cartApp exposes CartPage
shellApp consumes CartPage`
    },
    {
      type: "paragraph",
      text: "Architecture:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `┌────────────────────┐
│     Shell App      │
│      Host          │
└─────────┬──────────┘
        │ loads at runtime
        ▼
┌────────────────────┐
│     Cart App       │
│     Remote         │
│ exposes CartPage   │
└────────────────────┘`
    },
    {
      type: "paragraph",
      text: "The shell does not directly own the cart code."
    },
    {
      type: "paragraph",
      text: "The cart team can build and deploy the cart remote independently."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Important Terms"
    },
    {
      type: "table",
      headers: ["Term", "Meaning"],
      rows: [
        ["Host", "Application that consumes remote modules"],
        ["Remote", "Application that exposes modules"],
        ["Exposes", "Modules/components made available by a remote"],
        ["Remotes", "Remote applications configured inside the host"],
        ["remoteEntry.js", "Runtime manifest used by host to discover and load remote modules"],
        ["Shared dependencies", "Libraries shared between host and remote"],
        ["Singleton", "Shared dependency loaded as one instance"],
        ["Eager loading", "Loads dependency upfront"],
        ["Lazy loading", "Loads remote only when needed"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "5. Host Application"
    },
    {
      type: "paragraph",
      text: "The host is usually the shell app."
    },
    {
      type: "paragraph",
      text: "It owns:"
    },
    {
      type: "list",
      items: [
        "Global layout",
        "Navigation",
        "Top-level routes",
        "Authentication bootstrap",
        "Remote loading",
        "Fallback UI",
        "Error boundaries"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
├── Header
├── Navigation
├── Auth Guard
├── Route Config
└── Remote Loader`
    },
    {
      type: "paragraph",
      text: "The host consumes modules from remote apps."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `/products → load productApp/ProductList
/cart → load cartApp/CartPage
/checkout → load checkoutApp/CheckoutPage`
    },
    {
      type: "paragraph",
      text: "The host should coordinate composition. It should not become a place where every remote’s business logic is dumped."
    },
    {
      type: "blockquote",
      text: "The host should own composition concerns, not domain business logic."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Remote Application"
    },
    {
      type: "paragraph",
      text: "The remote is an independently built application that exposes modules."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Product Remote
├── ProductListPage
├── ProductFilters
├── ProductCard
└── Product API client`
    },
    {
      type: "paragraph",
      text: "The remote may expose:"
    },
    {
      type: "list",
      items: [
        "Page components",
        "Widgets",
        "Feature modules",
        "Route configs",
        "Utility modules"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `productApp exposes:
- ProductListPage
- ProductDetailsPage
- ProductRecommendationsWidget`
    },
    {
      type: "paragraph",
      text: "In a clean architecture, a remote owns its business domain."
    },
    {
      type: "paragraph",
      text: "The product remote should own product listing logic. The cart remote should own cart logic. The checkout remote should own checkout logic."
    },
    {
      type: "heading",
      level: 2,
      text: "7. What Is remoteEntry.js?"
    },
    {
      type: "paragraph",
      text: "remoteEntry.js is the runtime entry file generated by the remote application."
    },
    {
      type: "paragraph",
      text: "It acts like a manifest that tells the host:"
    },
    {
      type: "list",
      items: [
        "What modules are exposed",
        "Where chunks can be loaded from",
        "How dependencies should be resolved",
        "How runtime loading should happen"
      ]
    },
    {
      type: "paragraph",
      text: "Runtime flow:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
    │
    │ fetches remoteEntry.js
    ▼
Remote container initialized
    │
    │ resolves exposed module
    ▼
Remote chunks loaded
    │
    ▼
Remote component rendered`
    },
    {
      type: "paragraph",
      text: "Without remoteEntry.js, the host does not know how to load the remote."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Runtime Loading Flow"
    },
    {
      type: "paragraph",
      text: "When a user visits a route, this is what can happen:"
    },
    {
      type: "code",
      language: "text",
      code: `User opens /cart
    │
    ▼
Shell app loads
    │
    ▼
Shell checks route configuration
    │
    ▼
Shell identifies cartApp remote
    │
    ▼
Shell fetches cart remoteEntry.js
    │
    ▼
Shell loads exposed CartPage module
    │
    ▼
Cart remote chunks load
    │
    ▼
CartPage renders inside shell
    │
    ▼
Cart API fetches cart data
    │
    ▼
Cart UI appears`
    },
    {
      type: "paragraph",
      text: "This is runtime composition. The cart app can be deployed separately from the shell."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Build-Time Import vs Runtime Federation"
    },
    {
      type: "paragraph",
      text: "This distinction is very important."
    },
    {
      type: "heading",
      level: 3,
      text: "Build-Time Import"
    },
    {
      type: "code",
      language: "text",
      code: `Shell imports ProductList during build
Shell bundle contains ProductList
Changing ProductList requires shell rebuild`
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "typescript",
      code: `import { ProductList } from "@company/product";`
    },
    {
      type: "heading",
      level: 3,
      text: "Runtime Federation"
    },
    {
      type: "code",
      language: "text",
      code: `Shell loads ProductList at runtime
ProductList comes from product remote
Product remote can deploy independently`
    },
    {
      type: "paragraph",
      text: "Conceptually:"
    },
    {
      type: "blockquote",
      text: "Build-time import = coupled at build time. Runtime federation = connected at runtime."
    },
    {
      type: "paragraph",
      text: "Comparison:"
    },
    {
      type: "table",
      headers: ["Area", "Build-Time Import", "Runtime Federation"],
      rows: [
        ["Deployment", "Consumer rebuild needed", "Remote can deploy independently"],
        ["Runtime risk", "Lower", "Higher"],
        ["Simplicity", "Simpler", "More complex"],
        ["Team autonomy", "Lower", "Higher"],
        ["Version control", "Package version", "Runtime manifest/version strategy"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "10. Exposes"
    },
    {
      type: "paragraph",
      text: "exposes define what a remote makes available to other apps."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `cartApp exposes:
./CartPage
./CartDrawer
./CartSummary`
    },
    {
      type: "paragraph",
      text: "The host can then consume these exposed modules."
    },
    {
      type: "paragraph",
      text: "Good exposes are stable and intentional. Bad exposes leak internal implementation details."
    },
    {
      type: "table",
      headers: ["Good Exposes Practice", "Bad Exposes Practice"],
      rows: [
        ["Expose CartPage", "Expose internal reducer"],
        ["Expose CartWidget", "Expose random utility"],
        ["Expose route config", "Expose private component"],
        ["", "Expose API implementation details"]
      ]
    },
    {
      type: "blockquote",
      text: "Expose stable public contracts, not internal implementation details."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Remotes"
    },
    {
      type: "paragraph",
      text: "The host configures which remotes it can load."
    },
    {
      type: "paragraph",
      text: "Example conceptual mapping:"
    },
    {
      type: "code",
      language: "text",
      code: `productApp → https://cdn.company.com/product/remoteEntry.js
cartApp → https://cdn.company.com/cart/remoteEntry.js
checkoutApp → https://cdn.company.com/checkout/remoteEntry.js`
    },
    {
      type: "paragraph",
      text: "The shell uses this mapping to know where to fetch each remote."
    },
    {
      type: "paragraph",
      text: "In production, this mapping may come from:"
    },
    {
      type: "list",
      items: [
        "Static config",
        "Environment variables",
        "Remote manifest service",
        "Feature flag service",
        "Deployment registry"
      ]
    },
    {
      type: "paragraph",
      text: "The more dynamic the setup, the more governance you need."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Shared Dependencies"
    },
    {
      type: "paragraph",
      text: "Shared dependencies are libraries used by both host and remotes."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "React",
        "React DOM",
        "Design system",
        "Router package",
        "Analytics SDK",
        "Auth SDK",
        "Utility libraries"
      ]
    },
    {
      type: "paragraph",
      text: "Without proper sharing, each remote may load its own copy."
    },
    {
      type: "paragraph",
      text: "That can cause: large bundle size, duplicate React instances, hook errors, inconsistent state, runtime crashes, and version conflicts."
    },
    {
      type: "paragraph",
      text: "Shared dependency management is one of the most important production concerns in Module Federation."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Singleton Dependencies"
    },
    {
      type: "paragraph",
      text: "A singleton dependency is loaded only once and shared across host and remotes."
    },
    {
      type: "paragraph",
      text: "React is the classic example."
    },
    {
      type: "paragraph",
      text: "Why? Because multiple React instances can cause serious issues, especially with hooks and context."
    },
    {
      type: "blockquote",
      text: "Shell uses React instance A. Remote uses React instance B. Shared context or hooks behave unexpectedly."
    },
    {
      type: "paragraph",
      text: "Recommended config list:"
    },
    {
      type: "list",
      items: [
        "React → singleton",
        "React DOM → singleton",
        "Design system runtime → often singleton",
        "Auth SDK → often singleton",
        "Analytics SDK → depends on architecture"
      ]
    },
    {
      type: "paragraph",
      text: "But do not mark everything as singleton blindly. Overusing singleton dependencies creates hidden coupling."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Dependency Sharing Strategy"
    },
    {
      type: "table",
      headers: ["Dependency Type", "Recommendation"],
      rows: [
        ["React / React DOM", "Share as singleton"],
        ["Design system", "Share with strict versioning"],
        ["Router", "Be careful; routing ownership matters"],
        ["Utility functions", "Usually avoid runtime sharing unless stable"],
        ["API clients", "Keep domain-owned"],
        ["Business logic", "Do not share through federation casually"],
        ["State stores", "Avoid global shared state unless required"]
      ]
    },
    {
      type: "paragraph",
      text: "Strong rules to enforce:"
    },
    {
      type: "list",
      items: [
        "Share platform-level dependencies.",
        "Keep business logic inside the owning domain."
      ]
    },
    {
      type: "paragraph",
      text: "Bad architecture coupling examples:"
    },
    {
      type: "list",
      items: [
        "Cart remote imports product business logic from product remote.",
        "Checkout remote depends on cart internal reducer.",
        "Shell imports internal functions from every remote."
      ]
    },
    {
      type: "paragraph",
      text: "This creates distributed coupling."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Version Mismatch Problems"
    },
    {
      type: "paragraph",
      text: "Version mismatch is a common production issue."
    },
    {
      type: "paragraph",
      text: "Example: Shell expects productApp/ProductList v2 props, but product remote deploys ProductList v3 with breaking props, causing the shell to crash at runtime."
    },
    {
      type: "paragraph",
      text: "Possible mismatch issues:"
    },
    {
      type: "list",
      items: [
        "Breaking prop changes",
        "Changed event payloads",
        "Missing exposed module",
        "Different shared dependency version",
        "Removed route contract",
        "Remote deployed before shell is compatible"
      ]
    },
    {
      type: "paragraph",
      text: "Recommended solutions:"
    },
    {
      type: "list",
      items: [
        "Versioned contracts",
        "Contract tests",
        "Backward-compatible changes",
        "Deployment promotion checks",
        "Feature flags",
        "Version pinning",
        "Remote manifest governance"
      ]
    },
    {
      type: "paragraph",
      text: "Independent deployment requires compatibility discipline."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Remote Loading Failures"
    },
    {
      type: "paragraph",
      text: "Because remotes are loaded at runtime, they can fail."
    },
    {
      type: "paragraph",
      text: "Common causes:"
    },
    {
      type: "list",
      items: [
        "remoteEntry.js is unavailable",
        "CDN outage",
        "Network failure",
        "Wrong remote URL",
        "Remote deployed with bad bundle",
        "Shared dependency conflict",
        "Chunk loading error",
        "CORS issue",
        "Cache mismatch"
      ]
    },
    {
      type: "table",
      headers: ["Bad Behavior Design", "Good Behavior Design"],
      rows: [
        ["Remote fails → full shell crashes", "Remote fails → fallback UI appears. Shell remains usable. Error is logged with remote name and version"]
      ]
    },
    {
      type: "paragraph",
      text: "Fallback example text: Cart is temporarily unavailable. Please refresh or try again later."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Error Boundary Strategy"
    },
    {
      type: "paragraph",
      text: "Each remote should be wrapped with an error boundary."
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
├── Product Remote
│   └── Error Boundary
├── Cart Remote
│   └── Error Boundary
└── Checkout Remote
  └── Error Boundary`
    },
    {
      type: "paragraph",
      text: "The error boundary should capture: remoteName, remoteVersion, route, user action if available, error message, stack trace, and deployment version."
    },
    {
      type: "paragraph",
      text: "For critical flows like checkout, you may need stronger fallback strategies:"
    },
    {
      type: "list",
      items: [
        "Retry loading remote",
        "Redirect to stable fallback route",
        "Disable feature flag",
        "Rollback remote version",
        "Show support message"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "18. Lazy Loading Remotes"
    },
    {
      type: "paragraph",
      text: "Do not load every remote upfront."
    },
    {
      type: "paragraph",
      text: "Bad setup example:"
    },
    {
      type: "code",
      language: "text",
      code: `User opens homepage
Shell loads catalog
Shell loads cart
Shell loads checkout
Shell loads profile
Shell loads orders`
    },
    {
      type: "paragraph",
      text: "Good setup example:"
    },
    {
      type: "code",
      language: "text",
      code: `User opens homepage
Shell loads only required remotes
Cart remote loads when user visits /cart
Checkout remote loads when user visits /checkout`
    },
    {
      type: "paragraph",
      text: "Lazy loading improves initial load performance. But for critical paths, you can preload strategically."
    },
    {
      type: "paragraph",
      text: "Example: When a user adds an item to the cart, preload the checkout remote in the background to improve checkout transition speed."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Caching Strategy"
    },
    {
      type: "paragraph",
      text: "Caching is tricky with Module Federation."
    },
    {
      type: "paragraph",
      text: "If remoteEntry.js is cached too aggressively, the shell may load old remote metadata. If chunks are not cached properly, performance suffers."
    },
    {
      type: "paragraph",
      text: "Common caching strategy:"
    },
    {
      type: "list",
      items: [
        "remoteEntry.js → short cache or versioned URL",
        "hashed chunks → long cache",
        "manifest/config → controlled cache"
      ]
    },
    {
      type: "paragraph",
      text: "Example chunks hashing:"
    },
    {
      type: "code",
      language: "text",
      code: `remoteEntry.js
main.8s7d9f.js
vendor.2a9sd1.js`
    },
    {
      type: "paragraph",
      text: "Hashed chunks can be cached long-term because the filename changes when content changes. The remote entry or manifest needs careful version control."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Deployment Models"
    },
    {
      type: "paragraph",
      text: "There are multiple deployment models."
    },
    {
      type: "heading",
      level: 3,
      text: "Latest Remote Model"
    },
    {
      type: "blockquote",
      text: "shell → cart/latest/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Benefit: Simple, fast independent deployment."
    },
    {
      type: "paragraph",
      text: "Risk: A bad remote deploy can break the shell immediately."
    },
    {
      type: "heading",
      level: 3,
      text: "Version-Pinned Model"
    },
    {
      type: "blockquote",
      text: "shell → cart/1.4.2/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Benefit: Safer compatibility, controlled rollout."
    },
    {
      type: "paragraph",
      text: "Risk: Requires release coordination."
    },
    {
      type: "heading",
      level: 3,
      text: "Manifest-Based Model"
    },
    {
      type: "code",
      language: "json",
      code: `{
"cartApp": "https://cdn.company.com/cart/1.4.2/remoteEntry.js",
"productApp": "https://cdn.company.com/product/2.1.0/remoteEntry.js"
}`
    },
    {
      type: "paragraph",
      text: "Benefit: Flexible, supports rollback, and supports environment promotion."
    },
    {
      type: "paragraph",
      text: "This is often the best production approach for large systems."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Rollback Strategy"
    },
    {
      type: "paragraph",
      text: "Rollback must be designed before production incidents."
    },
    {
      type: "paragraph",
      text: "If the cart remote version 1.5.0 breaks, you should be able to switch back to 1.4.2 quickly."
    },
    {
      type: "code",
      language: "text",
      code: `cartApp: 1.5.0 → broken
cartApp: 1.4.2 → stable`
    },
    {
      type: "paragraph",
      text: "Rollback options include: revert remote deployment, update remote manifest, pin shell to older version, disable feature flag, or route traffic to stable remote."
    },
    {
      type: "blockquote",
      text: "Independent deployment is only safe when rollback is independent too."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Contract Testing"
    },
    {
      type: "paragraph",
      text: "Contract testing verifies that host and remote still agree."
    },
    {
      type: "paragraph",
      text: "It can validate: exposed module exists, expected props are supported, event names are unchanged, event payload shape is compatible, route contract is stable, and shared dependency range is compatible."
    },
    {
      type: "paragraph",
      text: "Example contract payload validation:"
    },
    {
      type: "code",
      language: "text",
      code: `CartPage must accept:
- userId
- locale
- currency

CartUpdated event must emit:
- itemCount
- cartId`
    },
    {
      type: "paragraph",
      text: "If the cart team changes this contract, CI should catch it before deployment. Without contract testing, runtime federation becomes risky."
    },
    {
      type: "heading",
      level: 2,
      text: "23. E2E Testing"
    },
    {
      type: "paragraph",
      text: "E2E tests validate full user journeys."
    },
    {
      type: "paragraph",
      text: "Example journeys:"
    },
    {
      type: "list",
      items: [
        "Search product → add to cart → checkout",
        "Login → view orders → reorder",
        "Open product page → change quantity → cart count updates"
      ]
    },
    {
      type: "paragraph",
      text: "E2E tests catch issues across boundaries, such as routing bugs, remote loading failures, auth context issues, shared dependency conflicts, event communication bugs, and layout integration issues."
    },
    {
      type: "paragraph",
      text: "Do not rely only on unit tests. Micro frontend bugs often happen at integration points."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Observability"
    },
    {
      type: "paragraph",
      text: "Module Federation requires per-remote observability."
    },
    {
      type: "paragraph",
      text: "Track metrics such as: remote load time, remote load failure, remote version, route where remote loaded, JavaScript errors by remote, chunk loading errors, Web Vitals by route, deployment health, and fallback UI frequency."
    },
    {
      type: "paragraph",
      text: "Useful log fields example:"
    },
    {
      type: "code",
      language: "json",
      code: `{
"remoteName": "cartApp",
"remoteVersion": "1.4.2",
"route": "/cart",
"shellVersion": "2.0.1",
"userSessionId": "session_982a1s",
"errorType": "ChunkLoadError",
"chunkUrl": "https://cdn.company.com/cart/chunks/312.js"
}`
    },
    {
      type: "paragraph",
      text: "Good observability answers: Which remote failed? Which version failed? Which route failed? Was it a network issue or runtime issue? Did the problem start after deployment? How many users were affected?"
    },
    {
      type: "heading",
      level: 2,
      text: "25. Security Considerations"
    },
    {
      type: "paragraph",
      text: "Module Federation loads code at runtime, so security matters."
    },
    {
      type: "paragraph",
      text: "Important concerns:"
    },
    {
      type: "list",
      items: [
        "Only load remotes from trusted origins.",
        "Use HTTPS.",
        "Apply strict CORS policies.",
        "Avoid exposing secrets in frontend config.",
        "Validate event payloads.",
        "Do not pass sensitive data through browser events.",
        "Use CSP where possible.",
        "Protect deployment pipelines."
      ]
    },
    {
      type: "blockquote",
      text: "A remote app is still executable JavaScript running inside the user’s browser. If a remote is compromised, the user experience can be compromised."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Common Anti-Patterns"
    },
    {
      type: "paragraph",
      text: "Avoid these common federation anti-patterns:"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Sharing everything", "Creates hidden coupling"],
        ["Exposing internal modules", "Breaks encapsulation"],
        ["Loading all remotes upfront", "Hurts performance"],
        ["No fallback UI", "Remote failure breaks product"],
        ["No contract tests", "Independent deployment becomes unsafe"],
        ["Shell owns all domain logic", "Shell becomes new monolith"],
        ["Every team uses random dependency versions", "Runtime instability"],
        ["No version strategy", "Rollback becomes difficult"],
        ["Latest remote always in production", "Higher blast radius"],
        ["No observability", "Debugging becomes guesswork"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "27. Production Checklist"
    },
    {
      type: "paragraph",
      text: "Before using Module Federation in production, ask:"
    },
    {
      type: "checklist",
      items: [
        "Do we have clear host and remote ownership?",
        "Are exposed modules stable and intentional?",
        "Are React and React DOM shared safely?",
        "Do we have a version strategy?",
        "Do we have contract tests?",
        "Do we have fallback UI for remote failures?",
        "Can we roll back one remote independently?",
        "Are remote load errors monitored?",
        "Are Web Vitals tracked per route?",
        "Is remoteEntry.js caching configured carefully?",
        "Are remotes loaded only from trusted origins?",
        "Do we avoid sharing business internals?"
      ]
    },
    {
      type: "paragraph",
      text: "If these are missing, the implementation may work locally but fail operationally."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. What is Module Federation?"
    },
    {
      type: "paragraph",
      text: "Module Federation is a webpack 5 feature that allows one application to expose modules and another application to consume them at runtime. It is useful for micro frontends because independently built apps can be composed without rebuilding the host every time."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. What is the difference between host and remote?"
    },
    {
      type: "paragraph",
      text: "The host is the consuming application, usually the shell. The remote is the application that exposes modules. The host loads remote modules at runtime through the remote entry file."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. What is remoteEntry.js?"
    },
    {
      type: "paragraph",
      text: "remoteEntry.js is the runtime manifest generated by the remote. It tells the host what modules are exposed and how to load the remote chunks."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. Why do we share React as a singleton?"
    },
    {
      type: "paragraph",
      text: "React should usually be shared as a singleton to avoid loading multiple React instances. Multiple React instances can cause issues with hooks, context, and bundle size."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. What are the risks of Module Federation?"
    },
    {
      type: "paragraph",
      text: "The main risks are runtime loading failures, version mismatches, shared dependency conflicts, caching issues, and harder debugging. These risks can be reduced with fallback UI, contract testing, versioned manifests, rollback strategy, and observability."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. How do you handle remote failure?"
    },
    {
      type: "paragraph",
      text: "Wrap each remote with an error boundary, show fallback UI, log the error with remote name and version, and support retry or rollback for critical flows."
    },
    {
      type: "heading",
      level: 3,
      text: "Q7. How do you safely deploy remotes independently?"
    },
    {
      type: "paragraph",
      text: "Use versioned contracts, CI checks, contract testing, feature flags, environment promotion, release health monitoring, and rollback support."
    },
    {
      type: "heading",
      level: 3,
      text: "Q8. What should not be exposed from a remote?"
    },
    {
      type: "paragraph",
      text: "Internal reducers, private components, unstable utilities, and domain implementation details should not be exposed. A remote should expose stable public modules only."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks: \"How would you use Module Federation in a large e-commerce frontend?\""
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would use a shell app as the host and domain-specific remotes for catalog, cart, checkout, orders, and profile. The shell would own global layout, top-level routing, authentication bootstrap, and remote loading. Each remote would own its domain UI and business logic. I would use Module Federation to load remotes at runtime, but I would not treat it as just a component-sharing tool. I would design around production concerns: shared dependency governance, singleton React, contract testing, fallback UI, versioned remote manifests, rollback, and per-remote observability. For state, I would avoid a giant shared store. Cart and checkout state should be backend-driven, with small explicit events only where needed. The goal is independent team deployment with a consistent and reliable user experience."
    },
    {
      type: "heading",
      level: 2,
      text: "30. Summary"
    },
    {
      type: "paragraph",
      text: "Module Federation is powerful because it allows independently built frontend applications to compose at runtime."
    },
    {
      type: "paragraph",
      text: "It enables: independent deployment, runtime composition, team autonomy, domain-owned frontend apps, and flexible micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "But it also introduces: runtime failure risk, dependency version complexity, caching challenges, contract compatibility issues, observability needs, and rollback requirements."
    },
    {
      type: "paragraph",
      text: "The best engineers do not just say \"Use Module Federation.\" They explain how to use it safely in production."
    },
    {
      type: "blockquote",
      text: "Module Federation gives you runtime composition, but production readiness comes from contracts, versioning, fallback UI, rollback, and observability."
    },
    {
      type: "heading",
      level: 2,
      text: "References"
    },
    {
      type: "list",
      items: [
        "webpack Module Federation Documentation (https://webpack.js.org/concepts/module-federation/)",
        "Module Federation Official Site (https://module-federation.io)",
        "Micro Frontends (https://micro-frontends.org)",
        "Micro Frontends — Martin Fowler (https://martinfowler.com/articles/micro-frontends.html)",
        "AWS Prescriptive Guidance: Micro-frontends (https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html)"
      ]
    }
  ]
};
