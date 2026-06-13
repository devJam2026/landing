import type { FrontendArticle } from "../../articles";

export const microFrontendsEcommerceSystemDesign: FrontendArticle = {
  slug: "micro-frontends-ecommerce-system-design",
  title: "Micro Frontends System Design: Design an E-commerce Platform",
  description: "Design a production-grade e-commerce frontend using micro frontends, including shell architecture, domain remotes, routing, auth, cart state, checkout reliability, deployment, rollback, observability, and interview tradeoffs.",
  difficulty: "Architect",
  readTime: "20 min read",
  tags: [
    "Micro Frontends",
    "System Design",
    "E-commerce",
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
      text: "Designing a micro frontend system for an e-commerce platform is one of the best ways to understand frontend architecture at senior and architect level."
    },
    {
      type: "paragraph",
      text: "It combines almost every important frontend system design topic:"
    },
    {
      type: "code",
      language: "text",
      code: `Routing
Authentication
Cart state
Checkout reliability
Runtime composition
Shared design system
Independent deployment
Rollback
Observability
Performance
Team ownership`
    },
    {
      type: "paragraph",
      text: "This article walks through how to design a production-grade e-commerce frontend using micro frontends."
    },
    {
      type: "paragraph",
      text: "The goal is not only to build the system, but also to explain it confidently in interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Problem Statement"
    },
    {
      type: "paragraph",
      text: "We need to design the frontend architecture for a large e-commerce platform."
    },
    {
      type: "paragraph",
      text: "The platform has multiple product areas:"
    },
    {
      type: "code",
      language: "text",
      code: `Home
Catalog
Search
Product Details
Cart
Checkout
Orders
Profile
Marketing
Recommendations`
    },
    {
      type: "paragraph",
      text: "Multiple teams work on the frontend: Catalog Team, Search Team, Cart Team, Checkout Team, Orders Team, Profile Team, Marketing Team, Platform Team, and Design System Team."
    },
    {
      type: "paragraph",
      text: "Currently, all teams work inside one large frontend monolith. This creates delivery and ownership problems."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Existing Monolith Problem"
    },
    {
      type: "paragraph",
      text: "The current architecture splits directories internally under a single codebase structure:"
    },
    {
      type: "code",
      language: "text",
      code: `frontend-monolith
├── home
├── catalog
├── search
├── product-details
├── cart
├── checkout
├── orders
├── profile
├── marketing
├── shared
└── app-shell`
    },
    {
      type: "paragraph",
      text: "At first, this is simple. But as the product and teams grow, issues appear."
    },
    {
      type: "table",
      headers: ["Problem", "Impact"],
      rows: [
        ["Many teams in one repo", "Merge conflicts and coordination overhead"],
        ["One shared build", "Slow CI/CD pipeline"],
        ["One release cycle", "Teams block each other"],
        ["Shared dependencies everywhere", "Upgrade risk"],
        ["Unclear ownership", "Bugs move between teams"],
        ["Large bundle", "Performance degradation"],
        ["Risky checkout changes", "Business-critical flow can break"],
        ["Hard migration", "New architecture is difficult to introduce"]
      ]
    },
    {
      type: "paragraph",
      text: "A frontend monolith is not always bad. But when team scale and release independence become major bottlenecks, micro frontends become a possible solution."
    },
    {
      type: "heading",
      level: 2,
      text: "3. System Design Goal"
    },
    {
      type: "paragraph",
      text: "The goal is to split the e-commerce frontend into independently owned domain apps while keeping one seamless user experience."
    },
    {
      type: "paragraph",
      text: "We want:"
    },
    {
      type: "list",
      items: [
        "Independent team ownership",
        "Independent deployment",
        "Clear domain boundaries",
        "Shared UI consistency",
        "Safe routing",
        "Reliable checkout",
        "Minimal cross-app coupling",
        "Rollback support",
        "Production observability",
        "Good performance"
      ]
    },
    {
      type: "paragraph",
      text: "We do not want:"
    },
    {
      type: "list",
      items: [
        "A distributed mess",
        "A giant global shared store",
        "Every page as a separate micro frontend",
        "A shell app full of business logic",
        "Uncontrolled dependency versions",
        "Runtime failures without fallback"
      ]
    },
    {
      type: "blockquote",
      text: "Independent teams, independent deployment, shared user experience."
    },
    {
      type: "heading",
      level: 2,
      text: "4. High-Level Architecture"
    },
    {
      type: "paragraph",
      text: "Recommended architecture layout diagram:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `                    ┌────────────────────────┐
                  │        Browser          │
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │        Shell App        │
                  │ Layout | Auth | Nav     │
                  │ Routing | Remote Loader │
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
      text: "A more complete system splits into several independent modules loaded by the Shell App:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
├── Home Remote
├── Catalog Remote
├── Search Remote
├── Product Details Remote
├── Cart Remote
├── Checkout Remote
├── Orders Remote
├── Profile Remote
├── Marketing Remote
└── Recommendations Remote`
    },
    {
      type: "heading",
      level: 2,
      text: "5. Domain Boundary Design"
    },
    {
      type: "paragraph",
      text: "Choosing good boundaries is the most important decision. A good micro frontend boundary should have clear business ownership, independent release need, limited communication with other domains, clear route ownership, clear API ownership, and clear team ownership."
    },
    {
      type: "table",
      headers: ["Remote", "Owned By", "Responsibility"],
      rows: [
        ["Home Remote", "Marketing/Home Team", "Homepage, hero sections, campaign blocks"],
        ["Catalog Remote", "Catalog Team", "Category pages, listing, filters, sorting"],
        ["Search Remote", "Search Team", "Search results, suggestions, search filters"],
        ["Product Details Remote", "Product Team", "PDP, product media, product info"],
        ["Cart Remote", "Cart Team", "Cart page, cart drawer, quantity updates"],
        ["Checkout Remote", "Checkout Team", "Address, delivery, payment, order placement"],
        ["Orders Remote", "Orders Team", "Order history, order details, reorder"],
        ["Profile Remote", "Profile Team", "Account, address book, preferences"],
        ["Marketing Remote", "Marketing Team", "Campaign banners, landing pages"],
        ["Recommendations Remote", "Personalization Team", "Similar products, recommendations widgets"]
      ]
    },
    {
      type: "paragraph",
      text: "Avoid overly tiny boundaries. A bad split creates too much runtime overhead and coordination (e.g. creating separate remotes for Button, Header, Price, Image, and Filter). A good split uses larger vertical blocks (e.g. Catalog Remote, Cart Remote, Checkout Remote, and Profile Remote)."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Shell App Responsibilities"
    },
    {
      type: "paragraph",
      text: "The shell is the host/container application. It should own platform-level concerns:"
    },
    {
      type: "list",
      items: [
        "Global layout",
        "Header and footer frame",
        "Top-level routing",
        "Authentication bootstrap",
        "Remote loading",
        "Global navigation",
        "Feature flag bootstrap",
        "Error boundaries",
        "Fallback UI",
        "Global analytics initialization",
        "Remote version awareness"
      ]
    },
    {
      type: "paragraph",
      text: "Example layout structure:"
    },
    {
      type: "code",
      language: "text",
      code: `Shell App
├── App Layout
├── Header
├── Footer
├── Auth Guard
├── Route Config
├── Remote Loader
├── Error Boundary Wrapper
├── Feature Flag Provider
└── Analytics Bootstrap`
    },
    {
      type: "paragraph",
      text: "The shell should not own domain business logic. Bad shell responsibilities include: cart calculations, product filtering logic, payment validation, order history rules, or search rankings."
    },
    {
      type: "blockquote",
      text: "The shell should coordinate composition, not become a business-logic dumping ground."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Remote App Responsibilities"
    },
    {
      type: "paragraph",
      text: "Each remote owns its own domain experience."
    },
    {
      type: "paragraph",
      text: "Example configurations:"
    },
    {
      type: "code",
      language: "text",
      code: `Catalog Remote owns: Category page, PLP, filters, sorting, pagination, card rendering, and Catalog APIs.
Cart Remote owns: Cart page, cart drawer, cart summary, updates, promo code UI, and Cart APIs.
Checkout Remote owns: Address forms, delivery choice, payment steps, order reviews, order placement, and Payment APIs.`
    },
    {
      type: "paragraph",
      text: "Each remote should be independently testable and deployable."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Routing Design"
    },
    {
      type: "paragraph",
      text: "A simple routing model defines:"
    },
    {
      type: "blockquote",
      text: "Shell owns top-level routes. Remotes own nested routes inside their boundaries."
    },
    {
      type: "paragraph",
      text: "Example route paths:"
    },
    {
      type: "code",
      language: "text",
      code: `/                         → Home Remote
/categories/:categorySlug → Catalog Remote
/search                   → Search Remote
/product/:productId       → Product Details Remote
/cart                     → Cart Remote
/checkout                 → Checkout Remote
/orders                   → Orders Remote
/profile                  → Profile Remote`
    },
    {
      type: "paragraph",
      text: "URLs must be shareable, bookmarkable, and refresh-safe. Avoid bad designs where page works only when navigated from the home page. In a good design, opening `/categories/shoes?sort=price` directly loads the correct remote entries cleanly."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Runtime Loading Sequence"
    },
    {
      type: "paragraph",
      text: "When a user visits `/cart`, the shell app loads first, checks route configurations, fetches the remote Entry manifest, downloads the chunks, mounts the Cart component inside the shell layout container, and triggers Cart APIs to render the UI."
    },
    {
      type: "paragraph",
      text: "If the remote fails to load at runtime, the Shell catches the error, logs the load failure to telemetry, and displays a graceful fallback UI placeholder, keeping the navigation, header, and footer active."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Module Federation Design"
    },
    {
      type: "paragraph",
      text: "Using Module Federation, host configures remote CDN endpoints, e.g. mapping `catalogApp` to `https://cdn.company.com/catalog/remoteEntry.js`."
    },
    {
      type: "paragraph",
      text: "Exposed assets are configured cleanly: `catalogApp` exposes `./CatalogPage`, `./ProductList`, and `./CategoryRouteConfig`, while `cartApp` exposes `./CartPage`, `./CartDrawer`, and `./CartBadgeProvider`."
    },
    {
      type: "blockquote",
      text: "Expose public contracts, not internal implementation details."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Shared Dependency Strategy"
    },
    {
      type: "paragraph",
      text: "Shared dependencies must be controlled carefully."
    },
    {
      type: "table",
      headers: ["Dependency", "Strategy"],
      rows: [
        ["React", "Singleton"],
        ["React DOM", "Singleton"],
        ["Design system", "Shared with strict versioning"],
        ["Analytics SDK", "Shared or initialized by shell"],
        ["Auth SDK", "Usually shell-owned/shared carefully"],
        ["Router", "Be careful; shell owns top-level routing"],
        ["API clients", "Domain-owned"],
        ["Business logic", "Domain-owned"],
        ["Global store", "Avoid unless strongly justified"]
      ]
    },
    {
      type: "paragraph",
      text: "React must be a singleton because duplicate React bundles in the browser run in separate instances, causing hooks and context state scopes to fail."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Design System Strategy"
    },
    {
      type: "paragraph",
      text: "A large e-commerce platform must look like one product. To maintain consistency, utilize a shared design system that distributes tokens, spacing, colors, and reusable stateless UI components (like buttons, modals, cards, and forms)."
    },
    {
      type: "paragraph",
      text: "Each remote imports and references these tokens. Without strict design system governance, teams will introduce divergent styling rules, broken layout behaviors, and inconsistent loading feedback, destroying the cohesive UX."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Cart State Design"
    },
    {
      type: "paragraph",
      text: "Sharing a giant global Redux store across remotes is an anti-pattern because it tightly couples the codebases. A better approach is making the Cart API the source of truth:"
    },
    {
      type: "code",
      language: "text",
      code: `Product Details Remote
    │
    │ add item (Cart API call)
    ▼
Cart API
    │
    │ returns updated count
    ▼
Cart Updated Event (explicit event bus payload)
    │
    ▼
Shell Header updates cart count badge`
    },
    {
      type: "blockquote",
      text: "Business-critical state like cart should be backend-first, not hidden inside a shared frontend store."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Checkout Reliability Design"
    },
    {
      type: "paragraph",
      text: "As a critical conversion path, the checkout flow requires maximum resilience. Use stable version pinning for checkout remotes rather than always pointing to latest builds. Implement dynamic preloading of the checkout bundle as soon as the user interacts with the cart, wrapping checkout components with strict local error boundaries and form cache recovery layers."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Authentication and Authorization"
    },
    {
      type: "paragraph",
      text: "The Shell bootstraps login sessions, monitors token refreshes, and exposes identity context. Remotes check user roles locally to enable or disable features (e.g. showing shipping updates). Always remember:"
    },
    {
      type: "blockquote",
      text: "Frontend authorization improves UX, but backend APIs must enforce real authorization. Never trust client-side checks only."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Communication Between Remotes"
    },
    {
      type: "paragraph",
      text: "Recommended communication path hierarchy is: URL state (query params for filters), Backend APIs (cart quantities), Custom DOM Events (badge updates), and Shell auth context (session tokens)."
    },
    {
      type: "blockquote",
      text: "If two micro frontends communicate constantly, the boundary is probably wrong."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Performance Design"
    },
    {
      type: "paragraph",
      text: "Performance budget risks and solutions in composed architectures:"
    },
    {
      type: "table",
      headers: ["Performance Risk", "Architectural Solution"],
      rows: [
        ["Duplicate React bundles", "Singleton shared dependency settings"],
        ["Loading every remote upfront", "Route-level dynamic lazy loading"],
        ["Checkout slow transition", "Preload checkout remote after cart activity"],
        ["Large design system bundle", "Tree-shaking and token-based exports"],
        ["Runtime load waterfalls", "Prefetch critical remote chunks in advance"],
        ["Layout shifts", "Reserve container spaces with skeleton screens"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "18. Failure Isolation"
    },
    {
      type: "paragraph",
      text: "Wrap remotes inside independent React error boundaries at the composition level. If the recommendations widget crashes, display a blank frame or minor fallback element without breaking the page's core header, navigation, and purchase buttons."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Deployment Strategy"
    },
    {
      type: "paragraph",
      text: "Each remote repository contains its own build, test, and release configuration, producing versioned bundle files pushed to a CDN. In CI checkpoints, run automated contract tests and bundle analyzers before promoting a build."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Remote Manifest Strategy"
    },
    {
      type: "paragraph",
      text: "Deployments should update a central JSON version manifest file on a CDN instead of referencing dynamic CDN pointers directly. This ensures that the shell loads specific, validated, and promote-tested bundle URLs for each route, allowing for immediate version locks and canary releases."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Rollback Strategy"
    },
    {
      type: "paragraph",
      text: "When a bug is discovered in a remote deployment, update the CDN manifest to point back to the previous version's build path and purge the CDN caching headers. The shell will instantly load the older, stable remote bundle without rebuilding the shell itself."
    },
    {
      type: "blockquote",
      text: "A micro frontend architecture is not production-ready unless each remote can be rolled back safely."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Testing Strategy"
    },
    {
      type: "paragraph",
      text: "To avoid flaky global E2E scripts, combine unit testing inside remotes with strict contract checks at deployment gates, asserting that exposed module interfaces, event formats, routing paths, and shared package versions remain compatible."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Observability Design"
    },
    {
      type: "paragraph",
      text: "Logging systems must tag errors with the owning remote name and commit version. Inject a global session correlation ID into all server query headers, and track remote download latencies using browser performance logging APIs."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Security Design"
    },
    {
      type: "paragraph",
      text: "Enforce Content Security Policies (CSP) to restrict scripts loading to verified CDN origins, apply strict CORS validation rules, and avoid sharing authorization tokens or user keys via DOM custom events."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Team Ownership Model"
    },
    {
      type: "paragraph",
      text: "Establish clear boundaries: a Platform Team owns the Shell and remote loaders; a Design System Team owns UI components; and separate Product Teams own respective remotes (Catalog, Cart, Checkout, Profile), managing their own tests, builds, and on-call logs."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Governance Model"
    },
    {
      type: "paragraph",
      text: "Autonomy does not mean complete isolation. Establish platform standards for dependency locking, bundle size budgets, telemetry tracking, and event naming formats, while leaving teams free to choose internal folder structures and compile patterns."
    },
    {
      type: "blockquote",
      text: "The goal is not unlimited freedom. The goal is safe autonomy."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Common Tradeoffs"
    },
    {
      type: "table",
      headers: ["Decision Option", "Architectural Benefit", "Architectural Drawback"],
      rows: [
        ["Runtime composition", "Maximum deployment decoupling", "Higher runtime loading failure risk"],
        ["Shared design system library", "Consistent visual identity", "Coordination overhead during upgrades"],
        ["Shell-controlled routing", "Predictable global navigation", "Shell must maintain route domain map"],
        ["Backend-driven cart state", "Reliable single source of truth", "High latency on poor networks"],
        ["CDN versioned manifests", "Safe atomic rollback operations", "Added deployment orchestration layer"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "28. When to Reject Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Reject this architecture if the engineering team is small (under 15 devs), the application is simple, or a unified release train is sufficient. In these scenarios, the tooling and coordination overhead will drag down velocity. Recommend a modular monolith instead."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Interview-Ready Final Answer"
    },
    {
      type: "paragraph",
      text: "To pitch this design successfully:"
    },
    {
      type: "blockquote",
      text: "I would design the platform using a shell app and multiple domain-owned remotes. The shell would own global layout, top-level routing, authentication bootstrap, remote loading, feature flag initialization, and error boundaries. The remotes would be split by business domains such as catalog, search, product details, cart, checkout, orders, and profile. Each remote would have its own team, repository or package boundary, CI/CD pipeline, test suite, deployment lifecycle, and monitoring dashboard. For communication, I would avoid a giant shared global store. I would use URL state for filters and search, backend APIs as the source of truth for cart and checkout, and small explicit events for cross-app notifications like cart count updates. The key tradeoff is that micro frontends improve team autonomy and independent releases, but they add complexity in runtime loading, dependency sharing, testing, observability, and governance. I would only choose this architecture when the team structure and release model justify the complexity."
    },
    {
      type: "heading",
      level: 2,
      text: "30. Final Architecture Checklist"
    },
    {
      type: "checklist",
      items: [
        "Are domain boundaries clear?",
        "Does each remote have an owning team?",
        "Does each remote have independent CI/CD?",
        "Does the shell avoid domain business logic?",
        "Is routing ownership clearly defined?",
        "Does deep linking work?",
        "Is cart state backend-first?",
        "Is checkout treated as a critical flow?",
        "Are React and React DOM shared safely?",
        "Is there a shared design system?",
        "Are remotes wrapped with error boundaries?",
        "Is fallback UI available?",
        "Are contract tests in place?",
        "Is rollback per remote possible?",
        "Is observability per remote available?",
        "Are performance budgets defined?",
        "Is the architecture simpler than the problem it solves?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "31. Summary"
    },
    {
      type: "paragraph",
      text: "Designing an e-commerce platform with micro frontends is first and foremost an organizational scaling exercise. Autonomy is only safe when governance, contracts, resilient boundaries, and automated rollback configurations are designed properly from day one."
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
        "Module Federation Official Site (https://module-federation.io)"
      ]
    }
  ]
};
