import type { FrontendArticle } from "../../articles";

export const microFrontendsCompleteGuide: FrontendArticle = {
  slug: "micro-frontends-complete-guide",
  title: "Micro Frontends: Complete Beginner to Architect Guide",
  description: "Learn micro frontends from fundamentals to architect-level system design, including shell apps, remotes, Module Federation, routing, auth, deployment, testing, and interview preparation.",
  difficulty: "Intermediate",
  readTime: "18 min read",
  tags: [
    "Micro Frontends",
    "Frontend Architecture",
    "Module Federation",
    "System Design",
    "Interview Prep"
  ],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 12, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Micro frontends are one of the most important architecture patterns for senior frontend engineers and frontend architects."
    },
    {
      type: "paragraph",
      text: "But they are also one of the most misunderstood."
    },
    {
      type: "paragraph",
      text: "Many developers think micro frontends simply mean:"
    },
    {
      type: "blockquote",
      text: "“Split one React app into many React apps.”"
    },
    {
      type: "paragraph",
      text: "That is not the full picture."
    },
    {
      type: "paragraph",
      text: "Micro frontends are not just about splitting code. They are about splitting ownership, releases, deployment pipelines, and business domains across multiple frontend teams."
    },
    {
      type: "paragraph",
      text: "A good micro frontend architecture helps large teams move independently."
    },
    {
      type: "paragraph",
      text: "A bad micro frontend architecture creates runtime failures, duplicated dependencies, inconsistent UI, shared state chaos, and a distributed frontend monolith."
    },
    {
      type: "paragraph",
      text: "This guide explains micro frontends from beginner level to architect level. By the end, you should be able to explain micro frontends clearly in interviews and design a production-grade micro frontend system."
    },
    {
      type: "heading",
      level: 2,
      text: "1. What Are Micro Frontends?"
    },
    {
      type: "paragraph",
      text: "A micro frontend is an architectural pattern where a large frontend application is divided into smaller, independently owned and independently deployable frontend applications."
    },
    {
      type: "paragraph",
      text: "Each micro frontend usually maps to a business domain or product area."
    },
    {
      type: "paragraph",
      text: "For example, an e-commerce platform can be split like this:"
    },
    {
      type: "diagram",
      diagramType: "tree",
      content: `E-commerce Platform
├── Shell App
├── Catalog Micro App
├── Search Micro App
├── Product Details Micro App
├── Cart Micro App
├── Checkout Micro App
├── Orders Micro App
└── Profile Micro App`
    },
    {
      type: "paragraph",
      text: "Each micro app can have its own:"
    },
    {
      type: "list",
      items: [
        "Team",
        "Repository",
        "Build pipeline",
        "Deployment lifecycle",
        "Testing strategy",
        "Runtime ownership",
        "Monitoring dashboard"
      ]
    },
    {
      type: "paragraph",
      text: "The user still sees one product, but internally the frontend is composed from multiple independently owned pieces."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Why Do Micro Frontends Exist?"
    },
    {
      type: "paragraph",
      text: "Micro frontends exist because large frontend monoliths become difficult to scale across teams."
    },
    {
      type: "paragraph",
      text: "In the early stage of a product, one frontend application is usually fine."
    },
    {
      type: "diagram",
      diagramType: "tree",
      content: `Single Frontend App
├── Home
├── Products
├── Cart
├── Checkout
├── Profile
└── Orders`
    },
    {
      type: "paragraph",
      text: "This works well when:"
    },
    {
      type: "list",
      items: [
        "The team is small",
        "The product is simple",
        "The release cycle is shared",
        "The build time is acceptable",
        "The ownership model is clear"
      ]
    },
    {
      type: "paragraph",
      text: "But as the product grows, problems start appearing."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Problems in a Large Frontend Monolith"
    },
    {
      type: "paragraph",
      text: "A large frontend monolith often suffers from these issues:"
    },
    {
      type: "table",
      headers: ["Problem", "What Happens"],
      rows: [
        ["Too many teams in one codebase", "Teams block each other"],
        ["Slow builds", "Every change takes longer to validate"],
        ["Risky deployments", "A small change can affect unrelated areas"],
        ["Shared release cycle", "One team’s delay can block everyone"],
        ["Tight coupling", "Domains become dependent on each other"],
        ["Difficult migration", "Moving to a new framework becomes risky"],
        ["Unclear ownership", "Nobody knows who owns which part"]
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Catalog team changes product filters
Cart team changes cart drawer
Checkout team changes payment page
Profile team changes address book

All changes go through the same app, same build, same release, and same risk surface.`
    },
    {
      type: "paragraph",
      text: "This is where micro frontends can help."
    },
    {
      type: "heading",
      level: 2,
      text: "4. What Problem Do Micro Frontends Solve?"
    },
    {
      type: "paragraph",
      text: "Micro frontends solve the problem of frontend organizational scaling."
    },
    {
      type: "paragraph",
      text: "They help when multiple frontend teams need to work independently on one product."
    },
    {
      type: "table",
      headers: ["Monolithic Frontend Problem", "Micro Frontend Benefit"],
      rows: [
        ["One large codebase", "Domain-specific codebases"],
        ["One release pipeline", "Independent deployments"],
        ["Team coordination overhead", "Team autonomy"],
        ["High release risk", "Smaller release surface"],
        ["Hard migration", "Incremental migration"],
        ["Shared ownership confusion", "Clear domain ownership"]
      ]
    },
    {
      type: "blockquote",
      text: "Micro frontends are an organizational scaling pattern first and a technical pattern second."
    },
    {
      type: "paragraph",
      text: "They should not be introduced only because they sound modern."
    },
    {
      type: "paragraph",
      text: "They should be introduced when team structure, domain ownership, and release independence justify the complexity."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Micro Frontends vs Component Libraries"
    },
    {
      type: "paragraph",
      text: "This is a common interview question."
    },
    {
      type: "paragraph",
      text: "A component library and a micro frontend are not the same thing."
    },
    {
      type: "table",
      headers: ["Component Library", "Micro Frontend"],
      rows: [
        ["Provides reusable UI components", "Provides independently deployable frontend apps"],
        ["Shared across teams", "Owned by separate teams"],
        ["Imported at build time", "Often loaded at runtime"],
        ["Helps UI consistency", "Helps team autonomy and release independence"],
        ["Example: Button, Modal, Card", "Example: Cart App, Checkout App, Profile App"]
      ]
    },
    {
      type: "paragraph",
      text: "A component library gives you reusable building blocks."
    },
    {
      type: "paragraph",
      text: "A micro frontend gives you independently owned product areas."
    },
    {
      type: "paragraph",
      text: "You often need both."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Design System
├── Button
├── Modal
├── Input
├── Card
└── Theme Tokens

Micro Frontends
├── Catalog App uses Design System
├── Cart App uses Design System
└── Checkout App uses Design System`
    },
    {
      type: "paragraph",
      text: "The design system keeps the product visually consistent."
    },
    {
      type: "paragraph",
      text: "The micro frontend architecture keeps teams independently productive."
    },
    {
      type: "heading",
      level: 2,
      text: "6. High-Level Micro Frontend Architecture"
    },
    {
      type: "paragraph",
      text: "A common architecture uses a shell app and multiple remote apps."
    },
    {
      type: "diagram",
      diagramType: "architecture",
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
 │ Catalog Remote          │                  │ Cart Remote             │
 │ Team: Catalog           │                  │ Team: Checkout          │
 └─────────────────────────┘                  └─────────────────────────┘
            │                                             │
            ▼                                             ▼
 ┌─────────────────────────┐                  ┌─────────────────────────┐
 │ Catalog API             │                  │ Cart API                │
 └─────────────────────────┘                  └─────────────────────────┘`
    },
    {
      type: "paragraph",
      text: "The shell app gives the user one unified experience."
    },
    {
      type: "paragraph",
      text: "The remote apps provide domain-specific functionality."
    },
    {
      type: "heading",
      level: 2,
      text: "7. What Is the Shell App?"
    },
    {
      type: "paragraph",
      text: "The shell app, also called the host app, is the container application."
    },
    {
      type: "paragraph",
      text: "It usually owns:"
    },
    {
      type: "list",
      items: [
        "Global layout",
        "Top-level navigation",
        "Authentication bootstrap",
        "Top-level routing",
        "Remote loading",
        "Feature flag initialization",
        "Global error boundaries",
        "Shared page frame"
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
├── Sidebar
├── Footer
├── Auth Guard
├── Route Config
└── Remote Loader`
    },
    {
      type: "paragraph",
      text: "The shell should coordinate the experience, but it should not become a dumping ground for all business logic."
    },
    {
      type: "blockquote",
      text: "The shell should own composition concerns, not domain business logic."
    },
    {
      type: "heading",
      level: 2,
      text: "8. What Is a Remote App?"
    },
    {
      type: "paragraph",
      text: "A remote app is a separately built frontend application that exposes one or more modules to the shell."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Catalog Remote
├── ProductListPage
├── ProductFilterPanel
├── ProductCard
└── Catalog API Client

Cart Remote
├── CartPage
├── CartDrawer
├── CartSummary
└── Cart API Client`
    },
    {
      type: "paragraph",
      text: "Each remote should own its own domain logic."
    },
    {
      type: "paragraph",
      text: "For example:"
    },
    {
      type: "code",
      language: "text",
      code: `Catalog Remote owns:
- Product listing
- Filters
- Sorting
- Product cards
- Catalog API calls

Cart Remote owns:
- Cart items
- Quantity changes
- Cart summary
- Cart API calls`
    },
    {
      type: "paragraph",
      text: "This keeps ownership clear."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Common Micro Frontend Composition Approaches"
    },
    {
      type: "paragraph",
      text: "There are multiple ways to compose micro frontends."
    },
    {
      type: "table",
      headers: ["Approach", "How It Works", "Best For", "Main Risk"],
      rows: [
        ["Build-time composition", "Micro apps are bundled together during build", "Simpler setups", "Less deployment independence"],
        ["Runtime composition", "Shell loads micro apps at runtime", "Independent deployment", "Runtime loading failures"],
        ["Server-side composition", "Server assembles page fragments", "SEO/performance control", "Server complexity"],
        ["Edge-side composition", "CDN/edge composes fragments", "Global scale", "Operational complexity"],
        ["iframe composition", "Apps are isolated inside iframes", "Strong isolation", "Poor UX and communication"],
        ["Web Components", "Apps expose custom elements", "Framework flexibility", "Tooling and integration complexity"],
        ["Module Federation", "Runtime loading of exposed modules", "Modern JS apps", "Dependency/version complexity"]
      ]
    },
    {
      type: "paragraph",
      text: "The most common modern approach in React/webpack ecosystems is runtime composition using Module Federation."
    },
    {
      type: "heading",
      level: 2,
      text: "10. What Is Module Federation?"
    },
    {
      type: "paragraph",
      text: "Module Federation is a webpack 5 feature that allows one application to load code exposed by another application at runtime."
    },
    {
      type: "paragraph",
      text: "In simple terms:"
    },
    {
      type: "blockquote",
      text: "Shell App loads code from Remote App when needed."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
└── loads productApp/ProductList from Product Remote`
    },
    {
      type: "paragraph",
      text: "The remote exposes a module."
    },
    {
      type: "paragraph",
      text: "The shell consumes it."
    },
    {
      type: "code",
      language: "text",
      code: `Product Remote exposes:
productApp/ProductList

Shell consumes:
productApp/ProductList`
    },
    {
      type: "paragraph",
      text: "This allows teams to deploy remotes independently without rebuilding the shell every time."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Host, Remote, and remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Module Federation has a few important terms."
    },
    {
      type: "table",
      headers: ["Term", "Meaning"],
      rows: [
        ["Host", "The app that consumes remote modules"],
        ["Remote", "The app that exposes modules"],
        ["remoteEntry.js", "Runtime manifest used to load remote modules"],
        ["Exposes", "Modules made available by the remote"],
        ["Shared", "Dependencies shared between host and remote"],
        ["Singleton", "A shared dependency loaded only once"]
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
├── loads remoteEntry.js
├── resolves exposed module
├── loads remote bundle
└── renders remote component`
    },
    {
      type: "paragraph",
      text: "Runtime flow:"
    },
    {
      type: "code",
      language: "text",
      code: `User opens /products
    │
    ▼
Shell app loads
    │
    ▼
Shell checks route config
    │
    ▼
Shell fetches product remoteEntry.js
    │
    ▼
Product remote bundle loads
    │
    ▼
Product app mounts inside shell
    │
    ▼
Product UI renders`
    },
    {
      type: "paragraph",
      text: "This is powerful, but it also introduces runtime risk."
    },
    {
      type: "paragraph",
      text: "If remoteEntry.js fails to load, the shell must handle it gracefully."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Runtime Loading Sequence"
    },
    {
      type: "paragraph",
      text: "A typical runtime loading sequence looks like this:"
    },
    {
      type: "diagram",
      diagramType: "sequence",
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
      type: "paragraph",
      text: "The key point:"
    },
    {
      type: "blockquote",
      text: "The shell does not need to bundle every micro app at build time. It can load the required remote when the user visits a route or feature."
    },
    {
      type: "paragraph",
      text: "This improves independent deployment, but it requires strong reliability design."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Shared Dependencies"
    },
    {
      type: "paragraph",
      text: "Shared dependencies are libraries used by both the shell and remotes."
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
        "Utility libraries",
        "Analytics SDK",
        "Auth SDK"
      ]
    },
    {
      type: "paragraph",
      text: "If shared dependencies are not managed carefully, you can get:"
    },
    {
      type: "list",
      items: [
        "Duplicate bundles",
        "Version conflicts",
        "Runtime crashes",
        "Inconsistent UI behavior",
        "Large JavaScript payloads"
      ]
    },
    {
      type: "paragraph",
      text: "React and React DOM are often configured as singleton dependencies."
    },
    {
      type: "paragraph",
      text: "That means the shell and remotes reuse one instance instead of loading multiple copies."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Dependency Sharing Best Practices"
    },
    {
      type: "paragraph",
      text: "Use these rules:"
    },
    {
      type: "list",
      items: [
        "Share only what must be shared.",
        "Keep versions aligned.",
        "Use singleton for React and React DOM.",
        "Avoid sharing unstable business logic.",
        "Avoid making the shell dependent on remote internals.",
        "Prefer explicit contracts over hidden imports."
      ]
    },
    {
      type: "paragraph",
      text: "A good dependency policy:"
    },
    {
      type: "table",
      headers: ["Dependency Type", "Recommendation"],
      rows: [
        ["React / React DOM", "Share as singleton"],
        ["Design system", "Share with strict versioning"],
        ["Utility helpers", "Share carefully"],
        ["Business logic", "Keep inside domain remotes"],
        ["API clients", "Usually domain-owned"],
        ["Global store", "Avoid unless strongly justified"]
      ]
    },
    {
      type: "blockquote",
      text: "Over-sharing dependencies can turn independent micro frontends into a tightly coupled distributed monolith."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Communication Between Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Micro frontends often need to communicate."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Cart Remote updates cart count
Shell Header displays cart count
Checkout Remote needs latest cart state`
    },
    {
      type: "paragraph",
      text: "Common communication patterns:"
    },
    {
      type: "table",
      headers: ["Pattern", "Use Case", "Risk"],
      rows: [
        ["URL state", "Route-level filters, search params", "Limited for complex state"],
        ["Custom events", "Loose communication", "Hard to debug at scale"],
        ["Event bus", "Pub-sub communication", "Hidden coupling"],
        ["Backend as source of truth", "Business-critical state", "More API dependency"],
        ["Browser storage", "Simple persistence", "Security and sync issues"],
        ["Shared store", "Global app state", "Tight coupling"]
      ]
    },
    {
      type: "paragraph",
      text: "The safest rule:"
    },
    {
      type: "list",
      items: [
        "Prefer: URL state, Backend state, Explicit event contracts, Small event payloads.",
        "Avoid: Large shared global stores, Direct imports between remotes, Hidden coupling through browser storage."
      ]
    },
    {
      type: "blockquote",
      text: "If two micro frontends need constant communication, the boundary is probably wrong."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Routing in Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Routing must be designed carefully."
    },
    {
      type: "paragraph",
      text: "A good model is:"
    },
    {
      type: "blockquote",
      text: "Shell owns top-level routes. Remote apps own internal routes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell owns:
/
/products
/cart
/checkout
/profile

Catalog Remote owns:
/products/list
/products/category/:id
/products/search

Profile Remote owns:
/profile/details
/profile/address
/profile/orders`
    },
    {
      type: "paragraph",
      text: "Routing Models Summary:"
    },
    {
      type: "table",
      headers: ["Routing Model", "Explanation"],
      rows: [
        ["Shell-owned routing", "Shell controls all top-level routes"],
        ["Remote-owned routing", "Micro app manages nested routes"],
        ["Hybrid routing", "Shell owns top-level, remotes own internal navigation"]
      ]
    },
    {
      type: "paragraph",
      text: "Recommended model layout:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell owns:
- Global navigation
- Auth guard
- Layout
- Top-level routes

Remote owns:
- Domain screens
- Internal tabs
- Feature-level navigation`
    },
    {
      type: "paragraph",
      text: "This avoids route conflicts and keeps ownership clear."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Deep Linking and Refresh"
    },
    {
      type: "paragraph",
      text: "Deep links must work."
    },
    {
      type: "paragraph",
      text: "If a user opens `/products/category/shoes`, the system should load:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
└── Catalog Remote
  └── Category Page`
    },
    {
      type: "paragraph",
      text: "If the user refreshes the page, it should still work."
    },
    {
      type: "paragraph",
      text: "To support this:"
    },
    {
      type: "list",
      items: [
        "Define route ownership clearly.",
        "Make remotes aware of their base path.",
        "Configure server fallback correctly.",
        "Avoid relying only on in-memory navigation state.",
        "Use URL state for shareable page state."
      ]
    },
    {
      type: "paragraph",
      text: "Bad architecture:"
    },
    {
      type: "blockquote",
      text: "The page works only when navigated from the home page."
    },
    {
      type: "paragraph",
      text: "Good architecture:"
    },
    {
      type: "blockquote",
      text: "The page works from direct URL, refresh, bookmark, and shared link."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Authentication and Authorization"
    },
    {
      type: "paragraph",
      text: "Authentication should usually be handled by the shell."
    },
    {
      type: "paragraph",
      text: "The shell can own:"
    },
    {
      type: "list",
      items: [
        "Login bootstrap",
        "Token refresh",
        "Session state",
        "Global route protection",
        "Identity context"
      ]
    },
    {
      type: "paragraph",
      text: "Remote apps can own:"
    },
    {
      type: "list",
      items: [
        "Feature-level authorization",
        "Role-based UI behavior",
        "Domain API calls",
        "Permission-aware rendering"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell authenticates the user.
Catalog Remote checks whether the user can see restricted products.
Checkout Remote checks whether the user can place orders.
Profile Remote checks whether the user can edit address details.`
    },
    {
      type: "paragraph",
      text: "Important point to remember:"
    },
    {
      type: "blockquote",
      text: "The shell may provide identity context, but backend APIs must still enforce authorization. Never trust only frontend checks."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Design System and UI Consistency"
    },
    {
      type: "paragraph",
      text: "Micro frontends can easily start looking like different products if there is no design governance."
    },
    {
      type: "paragraph",
      text: "To avoid this, teams should use:"
    },
    {
      type: "list",
      items: [
        "Shared design system",
        "Design tokens",
        "Common typography scale",
        "Shared spacing rules",
        "Common accessibility standards",
        "Reusable components",
        "UX review process"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: `Catalog team should not invent its own button style.
Cart team should not invent its own modal behavior.
Checkout team should not ignore accessibility guidelines.`
    },
    {
      type: "paragraph",
      text: "A shared design system helps maintain one user experience across many independently owned apps. But the design system must be stable and versioned carefully. If the design system breaks, many remotes can break."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Performance Risks"
    },
    {
      type: "paragraph",
      text: "Micro frontends can hurt performance if designed badly."
    },
    {
      type: "table",
      headers: ["Risk", "Cause", "Solution"],
      rows: [
        ["Duplicate React bundles", "Bad shared dependency config", "Use singleton shared dependencies"],
        ["Slow initial load", "Loading all remotes upfront", "Lazy load per route"],
        ["Runtime failure", "Remote unavailable", "Add fallback UI"],
        ["Layout shift", "Remote loads late", "Reserve layout space"],
        ["Cache issue", "Old remoteEntry.js", "Versioned manifest strategy"],
        ["Network waterfall", "Too many chunks", "Preload critical remotes"],
        ["Large shared libraries", "Over-sharing dependencies", "Audit bundle size"]
      ]
    },
    {
      type: "paragraph",
      text: "Performance strategy rules:"
    },
    {
      type: "list",
      items: [
        "Lazy load non-critical remotes.",
        "Preload critical routes.",
        "Avoid loading every remote upfront.",
        "Track route-level Web Vitals.",
        "Monitor remote load time.",
        "Prevent duplicate dependency bundles."
      ]
    },
    {
      type: "blockquote",
      text: "Micro frontends do not automatically improve performance. They improve ownership. Performance depends on loading strategy, dependency governance, and runtime composition design."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Failure Isolation"
    },
    {
      type: "paragraph",
      text: "One micro frontend should not crash the full product."
    },
    {
      type: "paragraph",
      text: "Example structure:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
├── Header
├── Navigation
├── Catalog Remote
│   └── Error Boundary
├── Cart Remote
│   └── Error Boundary
└── Checkout Remote
  └── Error Boundary`
    },
    {
      type: "paragraph",
      text: "If the cart remote fails, show fallback UI:"
    },
    {
      type: "blockquote",
      text: "“Cart is temporarily unavailable. Please refresh or try again later.”"
    },
    {
      type: "paragraph",
      text: "The shell should remain functional."
    },
    {
      type: "paragraph",
      text: "Failure isolation requires:"
    },
    {
      type: "list",
      items: [
        "Error boundaries",
        "Fallback UI",
        "Remote loading timeout",
        "Retry strategy",
        "Monitoring",
        "Graceful degradation"
      ]
    },
    {
      type: "paragraph",
      text: "Contrast designs:"
    },
    {
      type: "table",
      headers: ["Bad Architecture Design", "Good Architecture Design"],
      rows: [
        ["Cart remote fails → entire page crashes.", "Cart remote fails → shell stays alive and shows local fallback."]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "22. Testing Strategy"
    },
    {
      type: "paragraph",
      text: "Micro frontends need testing at multiple levels."
    },
    {
      type: "table",
      headers: ["Test Type", "What It Tests"],
      rows: [
        ["Unit tests", "Components and logic inside each remote"],
        ["Contract tests", "Shell and remote interface agreement"],
        ["Integration tests", "Shell loading remotes correctly"],
        ["E2E tests", "Full user journeys across apps"],
        ["Visual regression tests", "UI consistency across teams"],
        ["Performance tests", "Bundle size, remote loading, Web Vitals"]
      ]
    },
    {
      type: "paragraph",
      text: "Contract testing is especially important. It verifies things like:"
    },
    {
      type: "list",
      items: [
        "Does the remote expose the expected module?",
        "Does the shell pass the expected props?",
        "Are event payloads still compatible?",
        "Did a route contract change?",
        "Did a shared dependency version break compatibility?"
      ]
    },
    {
      type: "paragraph",
      text: "Without contract tests, independent deployment becomes risky."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Deployment Strategy"
    },
    {
      type: "paragraph",
      text: "Each micro frontend should ideally have its own deployment pipeline."
    },
    {
      type: "code",
      language: "text",
      code: `Catalog Team Repo ──► CI/CD ──► CDN ──► remoteEntry.js
Cart Team Repo ─────► CI/CD ──► CDN ──► remoteEntry.js
Checkout Team Repo ─► CI/CD ──► CDN ──► remoteEntry.js

Shell App ──────────► Loads remotes at runtime`
    },
    {
      type: "paragraph",
      text: "Each remote should have:"
    },
    {
      type: "list",
      items: [
        "Independent build",
        "Independent test suite",
        "Independent deployment",
        "Versioned artifact",
        "Rollback strategy",
        "Monitoring dashboard"
      ]
    },
    {
      type: "paragraph",
      text: "But independent deployment does not mean uncontrolled deployment. You still need:"
    },
    {
      type: "list",
      items: [
        "Contract validation",
        "Environment promotion",
        "Feature flags",
        "Release health checks",
        "Version compatibility",
        "Rollback plan"
      ]
    },
    {
      type: "blockquote",
      text: "Independent deployment is only safe when contracts, monitoring, and rollback are designed properly."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Rollback Strategy"
    },
    {
      type: "paragraph",
      text: "Rollback is critical in production micro frontend systems."
    },
    {
      type: "paragraph",
      text: "If the checkout remote breaks, you should not need to redeploy the entire frontend."
    },
    {
      type: "paragraph",
      text: "Possible rollback strategies:"
    },
    {
      type: "list",
      items: [
        "Keep previous remote versions available.",
        "Use versioned remote manifests.",
        "Pin shell to a known stable remote.",
        "Use feature flags to disable broken flows.",
        "Maintain CDN cache strategy carefully."
      ]
    },
    {
      type: "paragraph",
      text: "Example rollback execution flow:"
    },
    {
      type: "code",
      language: "text",
      code: `checkout@1.2.0 → broken
rollback to checkout@1.1.9
shell continues loading stable checkout remote`
    },
    {
      type: "paragraph",
      text: "The rollback process should be tested before production incidents happen."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Observability"
    },
    {
      type: "paragraph",
      text: "Micro frontend observability should answer:"
    },
    {
      type: "list",
      items: [
        "Which remote failed?",
        "Which version failed?",
        "Which route failed?",
        "Which user journey was affected?",
        "Was it a loading error, runtime error, or API error?",
        "Did Web Vitals degrade after deployment?"
      ]
    },
    {
      type: "paragraph",
      text: "Telemetry metrics to track:"
    },
    {
      type: "list",
      items: [
        "Remote load failures",
        "JavaScript errors per remote",
        "Route-level Web Vitals",
        "Version health",
        "Deployment success/failure",
        "User journey failures",
        "API failures by domain"
      ]
    },
    {
      type: "paragraph",
      text: "Good observability makes debugging possible in a distributed frontend architecture. Without it, teams blame each other during incidents."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Migration from Monolith to Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Do not rewrite the full frontend at once."
    },
    {
      type: "paragraph",
      text: "Use an incremental migration strategy. This is often called the strangler approach."
    },
    {
      type: "paragraph",
      text: "Migration steps:"
    },
    {
      type: "list",
      items: [
        "Step 1: Identify domain boundaries.",
        "Step 2: Choose one low-risk, high-value area.",
        "Step 3: Extract it as a remote.",
        "Step 4: Compose it inside the existing app.",
        "Step 5: Add independent build and deployment.",
        "Step 6: Add monitoring and fallback.",
        "Step 7: Repeat with the next domain."
      ]
    },
    {
      type: "paragraph",
      text: "Example Extraction Route Queue:"
    },
    {
      type: "code",
      language: "text",
      code: `Start with Product Listing.
Then extract Cart.
Then extract Profile.
Then extract Checkout.`
    },
    {
      type: "paragraph",
      text: "Avoid starting with checkout if it is too risky."
    },
    {
      type: "paragraph",
      text: "A good first candidate is usually:"
    },
    {
      type: "list",
      items: [
        "Important enough to prove value",
        "Small enough to extract safely",
        "Clear domain ownership",
        "Limited communication with other areas"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "27. When Not to Use Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Micro frontends are not always the right choice."
    },
    {
      type: "paragraph",
      text: "Avoid them when:"
    },
    {
      type: "list",
      items: [
        "The team is small.",
        "The app is simple.",
        "The product is early-stage.",
        "Independent deployment is not needed.",
        "There are no clear domain boundaries.",
        "The organization lacks CI/CD maturity.",
        "The design system is weak.",
        "The team cannot manage runtime complexity."
      ]
    },
    {
      type: "paragraph",
      text: "In these cases, use a modular monolith. A modular monolith can still be clean:"
    },
    {
      type: "code",
      language: "javascript",
      code: `src/
├── features/
│   ├── catalog/
│   ├── cart/
│   ├── checkout/
│   └── profile/
├── shared/
└── app/`
    },
    {
      type: "paragraph",
      text: "This gives structure without distributed runtime complexity."
    },
    {
      type: "blockquote",
      text: "I would choose a modular monolith until team scale, domain ownership, and release independence justify micro frontends."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Common Anti-Patterns"
    },
    {
      type: "paragraph",
      text: "Avoid these mistakes:"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Every page is a micro frontend", "Overengineering"],
        ["One global Redux store for all remotes", "Tight coupling"],
        ["Shell owns all business logic", "Shell becomes a new monolith"],
        ["No design system", "UI becomes inconsistent"],
        ["No contract testing", "Independent releases become unsafe"],
        ["No fallback UI", "One remote can break the product"],
        ["No version strategy", "Rollback becomes difficult"],
        ["Too much shared dependency logic", "Hidden coupling"],
        ["Different teams use random UI frameworks", "UX and maintenance pain"],
        ["No observability", "Production debugging becomes chaotic"]
      ]
    },
    {
      type: "paragraph",
      text: "A simple rule:"
    },
    {
      type: "blockquote",
      text: "If a micro frontend cannot be owned, deployed, monitored, and rolled back independently, the architecture is incomplete."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Architect Decision Table"
    },
    {
      type: "paragraph",
      text: "Use this table when designing micro frontends."
    },
    {
      type: "table",
      headers: ["Decision", "Recommended Choice", "Why"],
      rows: [
        ["Composition", "Runtime composition", "Enables independent deployment"],
        ["Routing", "Shell owns top-level routes", "Prevents route conflicts"],
        ["Auth", "Shell owns login/session bootstrap", "Centralized user context"],
        ["State", "Local or backend-first", "Avoids tight coupling"],
        ["UI consistency", "Shared design system", "Keeps one product experience"],
        ["Dependency sharing", "Minimal + singleton React", "Avoids duplication"],
        ["Testing", "Contract + E2E", "Catches integration failures"],
        ["Deployment", "Independent CI/CD", "Enables team autonomy"],
        ["Rollback", "Versioned remote manifest", "Safer recovery"],
        ["Monitoring", "Per-remote tracking", "Faster debugging"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "30. Example: E-commerce Micro Frontend Design"
    },
    {
      type: "paragraph",
      text: "Problem Context:"
    },
    {
      type: "paragraph",
      text: "A large retail company has multiple teams: Catalog Team, Search Team, Cart Team, Checkout Team, Orders Team, Profile Team, and Marketing Team. They all work in one frontend monolith."
    },
    {
      type: "paragraph",
      text: "Problems include: builds are slow, teams block each other, releases are risky, ownership is unclear, and one bug can delay the full release."
    },
    {
      type: "paragraph",
      text: "Proposed architecture layout:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `                    ┌────────────────────────┐
                  │        Shell App        │
                  │ Layout | Auth | Nav     │
                  └───────────┬────────────┘
                              │
      ┌───────────────────────┼───────────────────────┐
      │                       │                       │
      ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ Catalog Remote│       │ Cart Remote   │       │ Checkout Remote│
│ Catalog Team  │       │ Cart Team     │       │ Checkout Team  │
└───────┬───────┘       └───────┬───────┘       └───────┬───────┘
      │                       │                       │
      ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ Catalog API   │       │ Cart API      │       │ Payment API   │
└───────────────┘       └───────────────┘       └───────────────┘`
    },
    {
      type: "paragraph",
      text: "Architecture decisions summary:"
    },
    {
      type: "table",
      headers: ["Decision", "Choice"],
      rows: [
        ["Composition", "Runtime composition"],
        ["Technology", "React + Module Federation"],
        ["Routing", "Shell-owned top-level routing"],
        ["Shared UI", "Design system package"],
        ["Auth", "Shell-owned authentication"],
        ["State", "Backend-first cart state"],
        ["Communication", "URL + explicit events"],
        ["Deployment", "Independent remote deployments"],
        ["Reliability", "Error boundaries + fallback UI"],
        ["Observability", "Per-remote logging and metrics"]
      ]
    },
    {
      type: "paragraph",
      text: "This is a strong interview design because it covers ownership, runtime loading, routing, auth, state, deployment, and reliability."
    },
    {
      type: "heading",
      level: 2,
      text: "31. Strong Interview Answers"
    },
    {
      type: "heading",
      level: 3,
      text: "Question: What problem do micro frontends solve?"
    },
    {
      type: "paragraph",
      text: "Micro frontends solve the problem of scaling frontend development across multiple teams."
    },
    {
      type: "paragraph",
      text: "In a large frontend monolith, all teams work in the same codebase, share the same build pipeline, and depend on the same release cycle. This creates coordination overhead and increases release risk."
    },
    {
      type: "paragraph",
      text: "With micro frontends, the application is split by business domain. For example, catalog, cart, checkout, orders, and profile can be separate micro apps. Each team can build, test, and deploy independently."
    },
    {
      type: "paragraph",
      text: "However, micro frontends add complexity in routing, dependency sharing, testing, observability, and deployment. I would only choose them when team autonomy and independent release cycles justify that complexity."
    },
    {
      type: "heading",
      level: 3,
      text: "Question: How would you design communication between micro frontends?"
    },
    {
      type: "paragraph",
      text: "I would keep communication minimal and contract-driven."
    },
    {
      type: "paragraph",
      text: "For route-level state, I would prefer URL parameters. For business-critical state like cart or checkout, I would prefer backend APIs as the source of truth. For simple cross-app notifications, I might use custom events or a small event bus with documented event names and payload shapes."
    },
    {
      type: "paragraph",
      text: "I would avoid a large shared global store because it tightly couples independently deployed apps."
    },
    {
      type: "paragraph",
      text: "If two micro frontends need constant communication, I would revisit the domain boundary because they may belong together."
    },
    {
      type: "heading",
      level: 3,
      text: "Question: How would you handle failure in a remote app?"
    },
    {
      type: "paragraph",
      text: "I would wrap each remote in an error boundary and provide fallback UI. The shell should not crash just because one remote failed to load."
    },
    {
      type: "paragraph",
      text: "I would also track remote load errors, runtime errors, and version information in monitoring. For critical flows, I would use feature flags, retry logic, and rollback support."
    },
    {
      type: "paragraph",
      text: "The goal is graceful degradation. A cart remote failure should affect the cart experience, not the entire product shell."
    },
    {
      type: "heading",
      level: 2,
      text: "32. Strong Candidate Phrases"
    },
    {
      type: "paragraph",
      text: "Use these in interviews:"
    },
    {
      type: "list",
      items: [
        "\"Micro frontends are an organizational scaling pattern first and a technical pattern second.\"",
        "\"I would not choose micro frontends unless team ownership and release independence justify the complexity.\"",
        "\"The shell should coordinate composition, not become a business-logic dumping ground.\"",
        "\"If two micro frontends need constant communication, the boundary is probably wrong.\"",
        "\"Independent deployment requires contract testing, versioning, rollback, and observability.\"",
        "\"A modular monolith is often better than micro frontends for small teams.\""
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "33. Final Revision Checklist"
    },
    {
      type: "paragraph",
      text: "Before choosing micro frontends, ask:"
    },
    {
      type: "checklist",
      items: [
        "Do we have multiple frontend teams?",
        "Are domains clearly separated?",
        "Do teams need independent deployment?",
        "Do we have CI/CD maturity?",
        "Do we have a shared design system?",
        "Do we have ownership boundaries?",
        "Can we monitor remote failures?",
        "Do we have rollback support?",
        "Can we manage dependency versions?",
        "Is the added complexity justified?"
      ]
    },
    {
      type: "paragraph",
      text: "If most answers are no, choose a modular monolith. If most answers are yes, micro frontends may be a good fit."
    },
    {
      type: "heading",
      level: 2,
      text: "34. Summary"
    },
    {
      type: "paragraph",
      text: "Micro frontends are powerful, but they are not free."
    },
    {
      type: "paragraph",
      text: "They help large organizations split frontend ownership across teams and deploy product areas independently."
    },
    {
      type: "paragraph",
      text: "A good micro frontend architecture includes:"
    },
    {
      type: "list",
      items: [
        "Clear domain boundaries",
        "Shell and remote architecture",
        "Runtime composition strategy",
        "Routing ownership",
        "Authentication design",
        "Minimal communication",
        "Shared design system",
        "Dependency governance",
        "Contract testing",
        "Independent deployment",
        "Rollback strategy",
        "Observability",
        "Failure isolation"
      ]
    },
    {
      type: "paragraph",
      text: "The best senior engineers do not blindly recommend micro frontends. They explain the tradeoff. They know when to use them. They know when to reject them."
    },
    {
      type: "blockquote",
      text: "Micro frontends are worth it when frontend team scale and release independence matter more than architectural simplicity."
    },
    {
      type: "heading",
      level: 2,
      text: "References"
    },
    {
      type: "list",
      items: [
        "Micro Frontends — Martin Fowler (https://martinfowler.com/articles/micro-frontends.html)",
        "Micro Frontends (https://micro-frontends.org)",
        "webpack Module Federation Documentation (https://webpack.js.org/concepts/module-federation/)",
        "AWS Prescriptive Guidance: Micro-frontends (https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html)",
        "Module Federation Official Site (https://module-federation.io)",
        "Mastering Micro Frontends: 9 Patterns Every Developer Should Know (https://blog.bitsrc.io/mastering-microfrontends-9-patterns-every-developer-should-know-397081673770)"
      ]
    }
  ]
};
