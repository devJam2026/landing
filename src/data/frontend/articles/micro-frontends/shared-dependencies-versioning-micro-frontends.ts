import type { FrontendArticle } from "../../articles";

export const sharedDependenciesVersioningMicroFrontends: FrontendArticle = {
  slug: "shared-dependencies-versioning-micro-frontends",
  title: "Shared Dependencies and Versioning in Micro Frontends",
  description: "Learn how to manage shared dependencies in micro frontend architecture, including React singleton, design system versioning, shared libraries, dependency conflicts, contract compatibility, and production governance.",
  difficulty: "Architect",
  readTime: "15 min read",
  tags: [
    "Micro Frontends",
    "Shared Dependencies",
    "Versioning",
    "Module Federation",
    "Frontend Architecture"
  ],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Shared dependencies are one of the most dangerous parts of micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "Micro frontends promise independent ownership and independent deployment."
    },
    {
      type: "paragraph",
      text: "But if dependencies are shared badly, the system becomes tightly coupled again."
    },
    {
      type: "paragraph",
      text: "Common problems include:"
    },
    {
      type: "list",
      items: [
        "Duplicate React bundles",
        "Multiple React instances",
        "Broken hooks or context",
        "Design system version mismatch",
        "Runtime dependency conflicts",
        "Large JavaScript payloads",
        "Incompatible remote versions",
        "Hidden coupling through shared libraries"
      ]
    },
    {
      type: "paragraph",
      text: "A strong micro frontend system needs clear dependency rules."
    },
    {
      type: "paragraph",
      text: "This article explains how to manage shared dependencies and versioning in micro frontends from senior frontend to architect level."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Why Shared Dependencies Matter"
    },
    {
      type: "paragraph",
      text: "In a micro frontend system, multiple applications may run together in one browser page."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Catalog Remote\n├── Cart Remote\n├── Checkout Remote\n├── Profile Remote\n└── Orders Remote"
    },
    {
      type: "paragraph",
      text: "Each app may use:"
    },
    {
      type: "code",
      language: "text",
      code: "React\nReact DOM\nRouter\nDesign system\nDate utilities\nAnalytics SDK\nAuth SDK\nState library\nAPI clients"
    },
    {
      type: "paragraph",
      text: "If every remote bundles its own copy of every dependency, the page can become slow and unstable."
    },
    {
      type: "paragraph",
      text: "If every dependency is shared globally, the apps become tightly coupled."
    },
    {
      type: "paragraph",
      text: "The challenge is balance."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Core Principle"
    },
    {
      type: "paragraph",
      text: "The most important rule is:"
    },
    {
      type: "blockquote",
      text: "Share platform-level dependencies carefully. Keep domain business logic inside the owning remote."
    },
    {
      type: "paragraph",
      text: "Good shared dependencies:"
    },
    {
      type: "list",
      items: [
        "React",
        "React DOM",
        "Design system runtime",
        "Theme tokens",
        "Analytics SDK",
        "Auth provider",
        "Stable utility packages"
      ]
    },
    {
      type: "paragraph",
      text: "Risky shared dependencies:"
    },
    {
      type: "list",
      items: [
        "Domain API clients",
        "Business rules",
        "Reducers",
        "Feature-specific hooks",
        "Remote internal components",
        "Checkout validation logic",
        "Cart calculation logic"
      ]
    },
    {
      type: "paragraph",
      text: "If too much is shared, independent deployment becomes an illusion."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Types of Dependencies"
    },
    {
      type: "paragraph",
      text: "Not all dependencies should be treated the same."
    },
    {
      type: "table",
      headers: ["Dependency Type", "Example", "Sharing Strategy"],
      rows: [
        ["Runtime framework", "React, Vue, Angular", "Usually shared carefully"],
        ["Renderer", "React DOM", "Usually singleton"],
        ["Design system", "Button, Modal, tokens", "Shared with strict versioning"],
        ["Platform SDK", "Auth, analytics, feature flags", "Shared or shell-owned"],
        ["Utility library", "date-fns, lodash", "Case-by-case"],
        ["Router", "React Router", "Be careful"],
        ["State library", "Redux, Zustand", "Avoid global sharing by default"],
        ["API client", "Cart API client", "Usually domain-owned"],
        ["Business logic", "Checkout rules", "Do not share globally"],
        ["Internal components", "ProductCard internals", "Do not expose casually"]
      ]
    },
    {
      type: "paragraph",
      text: "This table should guide dependency decisions."
    },
    {
      type: "heading",
      level: 2,
      text: "4. What Is a Shared Dependency?"
    },
    {
      type: "paragraph",
      text: "A shared dependency is a library that the host and remotes agree to use together instead of each bundling their own copy."
    },
    {
      type: "paragraph",
      text: "In Module Federation terms, dependencies can be configured as shared."
    },
    {
      type: "paragraph",
      text: "Conceptually:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App uses React\nCart Remote uses React\nCatalog Remote uses React\n\nInstead of loading React three times,\nthe system can share one compatible React instance."
    },
    {
      type: "paragraph",
      text: "This can reduce bundle duplication and prevent runtime issues."
    },
    {
      type: "paragraph",
      text: "But sharing must be intentional."
    },
    {
      type: "heading",
      level: 2,
      text: "5. What Is a Singleton Dependency?"
    },
    {
      type: "paragraph",
      text: "A singleton dependency means only one instance of the dependency should exist at runtime."
    },
    {
      type: "paragraph",
      text: "React is the most common example."
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "paragraph",
      text: "Because multiple React instances can break assumptions around:"
    },
    {
      type: "list",
      items: [
        "Hooks",
        "Context",
        "React reconciler behavior",
        "Shared providers",
        "Design system context"
      ]
    },
    {
      type: "paragraph",
      text: "Example problem:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell uses React instance A.\nCart Remote bundles React instance B.\nA component uses context from instance A.\nRemote reads context through instance B.\nUnexpected behavior occurs."
    },
    {
      type: "paragraph",
      text: "For React-based micro frontends, React and React DOM are usually configured as singletons."
    },
    {
      type: "heading",
      level: 2,
      text: "6. React Singleton Strategy"
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "list",
      items: [
        "React → singleton",
        "React DOM → singleton"
      ]
    },
    {
      type: "paragraph",
      text: "Reason:"
    },
    {
      type: "list",
      items: [
        "Avoid duplicate React instances.",
        "Avoid hooks/context issues.",
        "Reduce bundle size.",
        "Keep rendering behavior consistent."
      ]
    },
    {
      type: "paragraph",
      text: "But singleton does not remove the need for version discipline."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Shell expects React 18.\nRemote requires React 19-only APIs.\nRuntime compatibility breaks."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "All remotes follow approved React version policy.\nUpgrades are coordinated through platform governance."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "React should usually be shared as a singleton, but singleton does not replace version governance."
    },
    {
      type: "heading",
      level: 2,
      text: "7. React DOM Singleton"
    },
    {
      type: "paragraph",
      text: "React DOM should normally match React."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "React 18 with incompatible React DOM version"
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "React and React DOM follow the same approved version range."
    },
    {
      type: "paragraph",
      text: "Why it matters:"
    },
    {
      type: "list",
      items: [
        "Rendering behavior",
        "Hydration",
        "Concurrent features",
        "Root creation",
        "Event system"
      ]
    },
    {
      type: "paragraph",
      text: "React and React DOM should be treated as platform-level dependencies, not random per-team choices."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Design System Sharing"
    },
    {
      type: "paragraph",
      text: "A shared design system is usually required in large micro frontend systems."
    },
    {
      type: "paragraph",
      text: "It provides:"
    },
    {
      type: "code",
      language: "text",
      code: "Buttons\nInputs\nModals\nCards\nTypography\nSpacing\nTheme tokens\nAccessibility patterns\nLoading states\nError states"
    },
    {
      type: "paragraph",
      text: "Without a shared design system, micro frontends can feel like separate products."
    },
    {
      type: "paragraph",
      text: "Bad result:"
    },
    {
      type: "list",
      items: [
        "Catalog uses one button style.",
        "Cart uses another modal behavior.",
        "Checkout uses different form validation UI.",
        "Profile uses different spacing and typography."
      ]
    },
    {
      type: "paragraph",
      text: "Good result:"
    },
    {
      type: "list",
      items: [
        "All remotes use the same design tokens and approved components."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "9. Design System Versioning"
    },
    {
      type: "paragraph",
      text: "Design system versioning is tricky."
    },
    {
      type: "paragraph",
      text: "If every remote uses a different version, UI inconsistency grows."
    },
    {
      type: "paragraph",
      text: "If all remotes must upgrade together, independent deployment suffers."
    },
    {
      type: "paragraph",
      text: "Possible strategies:"
    },
    {
      type: "heading",
      level: 3,
      text: "Strategy 1: Strict Single Version"
    },
    {
      type: "blockquote",
      text: "All remotes use design-system@2.4.0"
    },
    {
      type: "paragraph",
      text: "Benefit:"
    },
    {
      type: "list",
      items: [
        "Maximum consistency"
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "Coordinated upgrades can slow teams"
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Strategy 2: Compatible Version Range"
    },
    {
      type: "blockquote",
      text: "Allowed versions: 2.x"
    },
    {
      type: "paragraph",
      text: "Benefit:"
    },
    {
      type: "list",
      items: [
        "More flexibility"
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "Minor visual differences possible"
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Strategy 3: Token Stability + Component Versioning"
    },
    {
      type: "blockquote",
      text: "Design tokens stable\nComponents versioned\nBreaking changes controlled"
    },
    {
      type: "paragraph",
      text: "This is often the most practical enterprise model."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Design System Upgrade Policy"
    },
    {
      type: "paragraph",
      text: "A good policy:"
    },
    {
      type: "list",
      items: [
        "Breaking changes require migration guide.",
        "Design tokens should be backward compatible.",
        "Deprecated components have removal timelines.",
        "Critical accessibility fixes are prioritized.",
        "Visual regression tests run across major remotes.",
        "Upgrade windows are communicated."
      ]
    },
    {
      type: "paragraph",
      text: "Design system changes can affect many remotes."
    },
    {
      type: "paragraph",
      text: "Treat them like platform changes."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Router Dependency Concerns"
    },
    {
      type: "paragraph",
      text: "Routing is sensitive in micro frontends."
    },
    {
      type: "paragraph",
      text: "If shell and remotes all use routing libraries independently, issues can happen."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "Shell uses React Router.",
        "Profile Remote uses React Router.",
        "Checkout Remote uses custom routing."
      ]
    },
    {
      type: "paragraph",
      text: "This is not always wrong, but ownership must be clear."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "list",
      items: [
        "Shell owns top-level routing.",
        "Remote owns nested routing.",
        "Navigation uses URL boundaries."
      ]
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "list",
      items: [
        "Remote directly mutates shell router internals.",
        "Shell parses every remote internal route.",
        "Multiple routers fight over browser history."
      ]
    },
    {
      type: "paragraph",
      text: "Router dependencies should be managed carefully."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Utility Library Sharing"
    },
    {
      type: "paragraph",
      text: "Utility libraries like `lodash`, `date-fns`, or formatting helpers may be shared."
    },
    {
      type: "paragraph",
      text: "But do not over-optimize too early."
    },
    {
      type: "paragraph",
      text: "Questions to ask:"
    },
    {
      type: "list",
      items: [
        "Is the dependency large?",
        "Is it used by many remotes?",
        "Is the version stable?",
        "Will sharing create coupling?",
        "Is duplication cheaper than runtime coordination?"
      ]
    },
    {
      type: "paragraph",
      text: "Small utility duplication may be acceptable."
    },
    {
      type: "paragraph",
      text: "A large shared SDK may need governance."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Auth SDK Sharing"
    },
    {
      type: "paragraph",
      text: "Auth is usually platform-level."
    },
    {
      type: "paragraph",
      text: "Options:"
    },
    {
      type: "list",
      items: [
        "Shell owns auth SDK.",
        "Shell provides safe identity context.",
        "Remotes call APIs through approved client."
      ]
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "list",
      items: [
        "Every remote initializes its own auth SDK.",
        "Every remote handles token refresh.",
        "Every remote stores tokens differently."
      ]
    },
    {
      type: "paragraph",
      text: "Auth dependency decisions affect security."
    },
    {
      type: "paragraph",
      text: "Usually, auth should be centralized or platform-owned."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Analytics SDK Sharing"
    },
    {
      type: "paragraph",
      text: "Analytics often crosses all remotes."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "list",
      items: [
        "Shell initializes analytics SDK.",
        "Remotes emit domain events.",
        "Platform analytics layer normalizes and sends events."
      ]
    },
    {
      type: "paragraph",
      text: "This avoids each remote implementing analytics differently."
    },
    {
      type: "paragraph",
      text: "Example events:"
    },
    {
      type: "list",
      items: [
        "catalog:filter-applied",
        "cart:item-added",
        "checkout:payment-submitted",
        "profile:address-updated"
      ]
    },
    {
      type: "paragraph",
      text: "Analytics SDK can be shared, but event contracts must be governed."
    },
    {
      type: "heading",
      level: 2,
      text: "15. State Library Sharing"
    },
    {
      type: "paragraph",
      text: "Sharing a state library is not the same as sharing state."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "All remotes may use Zustand."
    },
    {
      type: "paragraph",
      text: "This is different from:"
    },
    {
      type: "blockquote",
      text: "All remotes use one global Zustand store."
    },
    {
      type: "paragraph",
      text: "Sharing the library can be okay."
    },
    {
      type: "paragraph",
      text: "Sharing one global store is risky."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "list",
      items: [
        "Catalog writes into global store.",
        "Cart reads catalog slice.",
        "Checkout mutates cart slice.",
        "Profile depends on checkout state."
      ]
    },
    {
      type: "paragraph",
      text: "This creates tight coupling."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "list",
      items: [
        "Each remote owns its domain state.",
        "Shell owns only platform state.",
        "Backend owns business-critical state."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "16. API Client Sharing"
    },
    {
      type: "paragraph",
      text: "API clients are often better domain-owned."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "code",
      language: "text",
      code: "sharedApiClient\n├── catalog APIs\n├── cart APIs\n├── checkout APIs\n├── orders APIs\n└── profile APIs"
    },
    {
      type: "paragraph",
      text: "If every remote imports one giant API client, domains become coupled."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "list",
      items: [
        "Catalog Remote -> Catalog API client",
        "Cart Remote -> Cart API client",
        "Checkout Remote -> Checkout API client",
        "Orders Remote -> Orders API client"
      ]
    },
    {
      type: "paragraph",
      text: "Shared low-level HTTP utilities may be fine."
    },
    {
      type: "paragraph",
      text: "But domain API clients should usually stay with domain ownership."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Business Logic Sharing"
    },
    {
      type: "paragraph",
      text: "Avoid sharing domain business logic casually."
    },
    {
      type: "paragraph",
      text: "Bad shared logic:"
    },
    {
      type: "list",
      items: [
        "cartCalculationRules",
        "checkoutPaymentRules",
        "productRankingRules",
        "orderEligibilityRules",
        "promotionEngine"
      ]
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "list",
      items: [
        "Business logic changes frequently.",
        "Ownership becomes unclear.",
        "Versioning becomes risky.",
        "Different domains may need different behavior.",
        "Backend should often own critical business rules."
      ]
    },
    {
      type: "paragraph",
      text: "If business logic is critical, it likely belongs in backend services or domain-owned packages with strict contracts."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Hidden Coupling Through Shared Libraries"
    },
    {
      type: "paragraph",
      text: "Shared libraries can hide coupling."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "shared-commerce-utils\n├── calculateCartTotal\n├── getProductFilters\n├── validateCheckoutStep\n├── formatOrderStatus\n└── applyPromotion"
    },
    {
      type: "paragraph",
      text: "At first, this looks convenient."
    },
    {
      type: "paragraph",
      text: "Later, every remote depends on it."
    },
    {
      type: "paragraph",
      text: "One change can break everyone."
    },
    {
      type: "paragraph",
      text: "This becomes a shared monolith."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "blockquote",
      text: "shared-platform-utils -> stable, generic utilities\ndomain logic -> domain-owned"
    },
    {
      type: "heading",
      level: 2,
      text: "19. Version Mismatch Problems"
    },
    {
      type: "paragraph",
      text: "Version mismatch can break at runtime."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Shell expects CartPage prop: userId. Cart Remote changed prop to customerId.",
        "Shell listens for cart:updated. Cart Remote emits cart:item-updated.",
        "Shell expects design-system Button v2 behavior. Remote uses Button v3 with breaking change.",
        "Remote requires React feature not supported by shell’s React version."
      ]
    },
    {
      type: "paragraph",
      text: "These are not always caught at build time."
    },
    {
      type: "paragraph",
      text: "Because apps deploy independently, runtime compatibility matters."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Semantic Versioning"
    },
    {
      type: "paragraph",
      text: "Semantic versioning helps communicate change impact."
    },
    {
      type: "code",
      language: "text",
      code: "MAJOR.MINOR.PATCH"
    },
    {
      type: "paragraph",
      text: "Meaning:"
    },
    {
      type: "list",
      items: [
        "PATCH = bug fix, no breaking change",
        "MINOR = backward-compatible feature",
        "MAJOR = breaking change"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "design-system 2.4.1 -> patch",
        "design-system 2.5.0 -> minor",
        "design-system 3.0.0 -> major breaking change"
      ]
    },
    {
      type: "paragraph",
      text: "But semantic versioning only works if teams follow it honestly."
    },
    {
      type: "paragraph",
      text: "A “minor” release with breaking changes is dangerous."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Contract Versioning"
    },
    {
      type: "paragraph",
      text: "Micro frontends need contract versioning, not only package versioning."
    },
    {
      type: "paragraph",
      text: "Contracts include:"
    },
    {
      type: "list",
      items: [
        "Exposed modules",
        "Props",
        "Events",
        "Payloads",
        "Routes",
        "Shared context",
        "Feature flags",
        "Design system expectations"
      ]
    },
    {
      type: "paragraph",
      text: "Example contract:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote exposes:\n./CartPage\n\nCartPage props:\n{\n  userId: string;\n  locale: string;\n  currency: string;\n}\n\nEvents:\ncart:updated\nPayload:\n{\n  cartId: string;\n  itemCount: number;\n}"
    },
    {
      type: "paragraph",
      text: "Changing this requires compatibility planning."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Backward Compatibility"
    },
    {
      type: "paragraph",
      text: "Independent deployment is safer when changes are backward compatible."
    },
    {
      type: "paragraph",
      text: "Bad breaking change:"
    },
    {
      type: "blockquote",
      text: "Remove itemCount from cart:updated payload."
    },
    {
      type: "paragraph",
      text: "Better migration:"
    },
    {
      type: "list",
      items: [
        "Step 1: Add new field itemSummary while keeping itemCount.",
        "Step 2: Update consumers to use itemSummary.",
        "Step 3: Verify all consumers migrated.",
        "Step 4: Remove itemCount in next major version."
      ]
    },
    {
      type: "paragraph",
      text: "Backward-compatible changes allow staggered deployments."
    },
    {
      type: "paragraph",
      text: "This is critical when shell and remotes are released independently."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Version Pinning"
    },
    {
      type: "paragraph",
      text: "Version pinning means using a specific approved version."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "checkoutApp -> 1.4.2",
        "cartApp -> 1.8.4",
        "catalogApp -> 2.3.1"
      ]
    },
    {
      type: "paragraph",
      text: "This can be done through a manifest."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Predictable runtime behavior",
        "Rollback support",
        "Auditability",
        "Safer critical flows"
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "More release coordination",
        "Version management overhead"
      ]
    },
    {
      type: "paragraph",
      text: "Use version pinning for critical domains like checkout."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Version Ranges"
    },
    {
      type: "paragraph",
      text: "Version ranges allow compatible flexibility."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "design-system: ^2.4.0"
    },
    {
      type: "paragraph",
      text: "This means compatible 2.x upgrades may be accepted."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Less manual coordination",
        "Faster patch adoption"
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "Unexpected behavior if compatibility is not truly maintained"
      ]
    },
    {
      type: "paragraph",
      text: "For critical shared dependencies, version ranges should be controlled by platform policy."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Remote Manifest Versioning"
    },
    {
      type: "paragraph",
      text: "A remote manifest can track active versions."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"cartApp\": {\n    \"version\": \"1.8.4\",\n    \"url\": \"https://cdn.company.com/cart/1.8.4/remoteEntry.js\",\n    \"owner\": \"cart-team\",\n    \"rollbackVersion\": \"1.8.3\"\n  },\n  \"checkoutApp\": {\n    \"version\": \"1.4.2\",\n    \"url\": \"https://cdn.company.com/checkout/1.4.2/remoteEntry.js\",\n    \"owner\": \"checkout-team\",\n    \"rollbackVersion\": \"1.4.1\"\n  }\n}"
    },
    {
      type: "paragraph",
      text: "This enables:"
    },
    {
      type: "list",
      items: [
        "Controlled rollout",
        "Environment promotion",
        "Rollback",
        "Version visibility",
        "Incident ownership"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "26. Dependency Governance"
    },
    {
      type: "paragraph",
      text: "Large micro frontend systems need governance."
    },
    {
      type: "paragraph",
      text: "Platform team should define:"
    },
    {
      type: "list",
      items: [
        "Approved React version",
        "Approved shared dependency list",
        "Design system version policy",
        "Dependency upgrade process",
        "Breaking change policy",
        "Security patch process",
        "Bundle budget policy",
        "Shared library ownership",
        "Contract testing requirements"
      ]
    },
    {
      type: "paragraph",
      text: "Governance prevents chaos."
    },
    {
      type: "paragraph",
      text: "But it should not block teams unnecessarily."
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "The goal is safe autonomy, not unlimited freedom."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Dependency Upgrade Strategy"
    },
    {
      type: "paragraph",
      text: "A safe upgrade strategy:"
    },
    {
      type: "list",
      items: [
        "1. Identify dependency and affected remotes.",
        "2. Check breaking changes.",
        "3. Upgrade shell or platform layer first if needed.",
        "4. Test remotes in preview shell.",
        "5. Run contract and integration tests.",
        "6. Roll out gradually.",
        "7. Monitor errors and Web Vitals.",
        "8. Keep rollback option."
      ]
    },
    {
      type: "paragraph",
      text: "For React or design system upgrades, do not let every team upgrade randomly."
    },
    {
      type: "paragraph",
      text: "Coordinate through platform governance."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Security and Dependency Risk"
    },
    {
      type: "paragraph",
      text: "Shared dependencies can introduce security risk."
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "list",
      items: [
        "Vulnerable dependency used by many remotes",
        "Untrusted remote loads compromised code",
        "Old design system version has accessibility/security bugs",
        "Auth SDK mismatch causes token handling issues"
      ]
    },
    {
      type: "paragraph",
      text: "Security practices:"
    },
    {
      type: "list",
      items: [
        "Dependency scanning",
        "Approved package registry",
        "Lockfile policy",
        "SBOM if required",
        "Patch process",
        "CDN artifact integrity",
        "Trusted remote origins"
      ]
    },
    {
      type: "paragraph",
      text: "Micro frontends increase the number of deployable artifacts, so dependency security must be systematic."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Performance Impact"
    },
    {
      type: "paragraph",
      text: "Dependency sharing affects performance."
    },
    {
      type: "paragraph",
      text: "Performance risks:"
    },
    {
      type: "list",
      items: [
        "Duplicate React bundles",
        "Duplicate design system bundles",
        "Large shared vendor chunks",
        "Multiple date libraries",
        "Remote loading waterfall",
        "Unnecessary polyfills per remote"
      ]
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "list",
      items: [
        "Bundle size per remote",
        "Shared dependency duplication",
        "Route-level JavaScript size",
        "Remote load time",
        "Web Vitals"
      ]
    },
    {
      type: "paragraph",
      text: "A shared dependency strategy should improve performance without creating excessive coupling."
    },
    {
      type: "heading",
      level: 2,
      text: "30. Common Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Sharing every library", "Creates hidden coupling"],
        ["Sharing business logic globally", "Creates distributed monolith"],
        ["No React singleton", "Duplicate React/runtime issues"],
        ["Every remote uses random React versions", "Runtime instability"],
        ["Design system breaking changes without migration", "UI breakages"],
        ["One giant shared utils package", "Hidden domain coupling"],
        ["Shared global store", "Tight coupling"],
        ["No contract versioning", "Runtime breakages"],
        ["No manifest/version visibility", "Debugging and rollback harder"],
        ["No dependency governance", "Architecture chaos"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "31. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. How do you share dependencies safely in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Share only truly common platform-level dependencies. React and React DOM are usually shared as singletons. The design system can be shared with strict versioning. Business logic and domain API clients should usually stay inside the owning remote. Shared dependency decisions should be governed by platform rules."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. Why should React be a singleton?"
    },
    {
      type: "paragraph",
      text: "React should usually be singleton to avoid multiple React instances on the same page. Multiple instances can cause problems with hooks, context, rendering behavior, and bundle size. But singleton still requires version governance."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. Should all remotes share one global store?"
    },
    {
      type: "paragraph",
      text: "Usually no. Sharing one global store tightly couples independently deployed remotes to one state shape. It makes versioning, testing, and ownership harder. Prefer remote-owned state, URL state, backend state, and small platform-level shared context."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How do you manage design system versions?"
    },
    {
      type: "paragraph",
      text: "Use a clear versioning policy, backward-compatible tokens, migration guides for breaking changes, visual regression tests, and coordinated upgrades for major versions. The design system should support consistency without blocking every team."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. What happens if shell and remote use incompatible dependency versions?"
    },
    {
      type: "paragraph",
      text: "You can get runtime crashes, duplicated bundles, broken hooks/context, design inconsistencies, or contract mismatches. This should be prevented through version policy, contract tests, CI checks, and manifest-controlled rollout."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What should not be shared?"
    },
    {
      type: "paragraph",
      text: "Internal reducers, private hooks, business rules, checkout validation logic, cart calculation rules, domain API clients, and unstable internal components should not be shared casually. These create hidden coupling and reduce team autonomy."
    },
    {
      type: "heading",
      level: 2,
      text: "32. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“How would you manage shared dependencies in micro frontends?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would classify dependencies into platform dependencies and domain dependencies.\n\nPlatform dependencies like React, React DOM, design system, auth SDK, analytics SDK, and feature flag client can be shared carefully. React and React DOM should usually be shared as singletons to avoid duplicate React instances and hooks/context problems.\n\nBut I would avoid sharing domain business logic, internal reducers, domain API clients, or feature-specific hooks across remotes. Those should stay inside the owning domain or backend services.\n\nFor versioning, I would use platform governance. The platform team should define approved versions, compatibility ranges, breaking change rules, and upgrade processes. I would also use contract tests for exposed modules, props, events, and shared context. For runtime remotes, I would track active versions through a manifest so we can control rollout and rollback.\n\nThe key is to share enough to keep the product consistent and performant, but not so much that independent micro frontends become tightly coupled."
    },
    {
      type: "heading",
      level: 2,
      text: "33. Final Checklist"
    },
    {
      type: "checklist",
      items: [
        "Are React and React DOM shared safely?",
        "Is there an approved React version policy?",
        "Is the design system versioned?",
        "Are design system breaking changes governed?",
        "Are business rules kept out of shared utilities?",
        "Are domain API clients owned by domains?",
        "Is global shared state avoided?",
        "Are contract versions documented?",
        "Are exposed modules stable?",
        "Are event payloads versioned?",
        "Is the remote manifest tracking active versions?",
        "Are dependency conflicts checked in CI?",
        "Are duplicate bundles monitored?",
        "Are security vulnerabilities scanned?",
        "Is rollback possible if a dependency upgrade breaks production?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "34. Summary"
    },
    {
      type: "paragraph",
      text: "Shared dependencies can make or break a micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "Good sharing gives:"
    },
    {
      type: "list",
      items: [
        "Consistent React runtime",
        "Smaller bundles",
        "Shared design system",
        "Consistent platform behavior",
        "Better user experience"
      ]
    },
    {
      type: "paragraph",
      text: "Bad sharing creates:"
    },
    {
      type: "list",
      items: [
        "Tight coupling",
        "Runtime conflicts",
        "Hidden dependencies",
        "Version chaos",
        "Distributed monolith",
        "Production instability"
      ]
    },
    {
      type: "paragraph",
      text: "Recommended model:"
    },
    {
      type: "code",
      language: "text",
      code: "Share platform-level dependencies carefully.\nKeep domain logic inside domains.\nUse singleton for React and React DOM.\nVersion the design system responsibly.\nAvoid global shared state.\nUse contracts and manifests for compatibility.\nGovern upgrades through platform standards."
    },
    {
      type: "paragraph",
      text: "The strongest takeaway:"
    },
    {
      type: "blockquote",
      text: "In micro frontends, dependency sharing is not just a bundler configuration. It is an architecture governance decision."
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
        "Micro Frontends — Martin Fowler (https://martinfowler.com/articles/micro-frontends.html)",
        "Micro Frontends (https://micro-frontends.org)",
        "AWS Prescriptive Guidance: Micro-frontends (https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html)"
      ]
    }
  ]
};
