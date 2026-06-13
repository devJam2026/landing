import type { FrontendArticle } from "../../articles";

export const microFrontendInterviewQuestions: FrontendArticle = {
  slug: "micro-frontend-interview-questions",
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
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Micro frontends are a common topic in senior frontend, frontend lead, and frontend architect interviews."
    },
    {
      type: "paragraph",
      text: "But interviewers rarely ask only:"
    },
    {
      type: "code",
      language: "text",
      code: "What are micro frontends?"
    },
    {
      type: "paragraph",
      text: "They usually go deeper:"
    },
    {
      type: "code",
      language: "text",
      code: "When would you use them?\nWhen would you avoid them?\nHow do you design the shell?\nHow do remotes communicate?\nHow do you handle routing?\nHow do you handle authentication?\nHow do you avoid duplicate React?\nHow do you test independent deployments?\nWhat happens if one remote fails?\nHow do you deploy and roll back safely?"
    },
    {
      type: "paragraph",
      text: "This article gives you interview-ready answers from beginner level to architect level."
    },
    {
      type: "paragraph",
      text: "The goal is not memorization."
    },
    {
      type: "paragraph",
      text: "The goal is to help you explain micro frontends like a senior engineer who understands tradeoffs."
    },
    {
      type: "heading",
      level: 2,
      text: "1. How to Answer Micro Frontend Questions"
    },
    {
      type: "paragraph",
      text: "A strong answer should include four things:"
    },
    {
      type: "code",
      language: "text",
      code: "Definition\nProblem solved\nTradeoffs\nProduction concerns"
    },
    {
      type: "paragraph",
      text: "Weak answer:"
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends mean splitting frontend into multiple apps."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends split a large frontend into independently owned and independently deployable domain applications. They help large teams move independently, but they add complexity around routing, shared dependencies, testing, deployment, observability, and failure isolation."
    },
    {
      type: "paragraph",
      text: "That difference matters."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Beginner Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. What are micro frontends?"
    },
    {
      type: "paragraph",
      text: "Micro frontends are an architectural pattern where a large frontend application is split into smaller, independently owned frontend applications."
    },
    {
      type: "paragraph",
      text: "Each micro frontend usually represents a business domain."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote\nCart Remote\nCheckout Remote\nProfile Remote\nOrders Remote"
    },
    {
      type: "paragraph",
      text: "These are composed together by a shell or host app to create one user experience."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontends are like microservices for the frontend, but the main goal is not just splitting code. The real goal is independent ownership, independent deployment, and domain-level autonomy for large frontend teams."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. Why do companies use micro frontends?"
    },
    {
      type: "paragraph",
      text: "Companies use micro frontends when one frontend monolith becomes difficult for many teams to work on together."
    },
    {
      type: "paragraph",
      text: "Common reasons:"
    },
    {
      type: "code",
      language: "text",
      code: "Large frontend codebase\nSlow build and test pipeline\nMany teams blocked by one release cycle\nUnclear ownership\nDifficult migration from old technology\nNeed for independent deployment"
    },
    {
      type: "paragraph",
      text: "Good answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontends are useful when team scale and release independence become bigger problems than code organization."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. Are micro frontends only about performance?"
    },
    {
      type: "paragraph",
      text: "No."
    },
    {
      type: "paragraph",
      text: "Micro frontends are mainly about:"
    },
    {
      type: "code",
      language: "text",
      code: "Team ownership\nIndependent deployment\nDomain boundaries\nIncremental migration\nRelease autonomy"
    },
    {
      type: "paragraph",
      text: "They can improve performance if implemented with route-level lazy loading and shared dependency governance."
    },
    {
      type: "paragraph",
      text: "But they can also hurt performance if every remote ships duplicate dependencies or creates runtime loading waterfalls."
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "Micro frontends do not automatically improve performance. They improve ownership and deployment autonomy. Performance still needs deliberate design."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. What is a shell app?"
    },
    {
      type: "paragraph",
      text: "The shell app is the host or container application that composes micro frontends into one product."
    },
    {
      type: "paragraph",
      text: "The shell usually owns:"
    },
    {
      type: "code",
      language: "text",
      code: "Global layout\nTop-level routing\nAuthentication bootstrap\nRemote loading\nError boundaries\nFallback UI\nFeature flag bootstrap\nAnalytics initialization"
    },
    {
      type: "paragraph",
      text: "The shell should not own domain business logic."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "The shell coordinates the experience. It should not become the new frontend monolith."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. What is a remote app?"
    },
    {
      type: "paragraph",
      text: "A remote app is an independently built and deployed frontend application that owns a specific domain."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote owns cart UI and cart behavior.\nCheckout Remote owns checkout flow.\nProfile Remote owns profile pages."
    },
    {
      type: "paragraph",
      text: "A remote can be loaded by the shell at runtime."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "A remote owns domain UI and behavior. It should be independently testable, deployable, observable, and rollback-safe."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Intermediate Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What is Module Federation?"
    },
    {
      type: "paragraph",
      text: "Module Federation is a webpack feature that allows one JavaScript application to load code from another independently built application at runtime."
    },
    {
      type: "paragraph",
      text: "In micro frontends, it is commonly used to let a shell app load remote apps."
    },
    {
      type: "paragraph",
      text: "Important concepts:"
    },
    {
      type: "code",
      language: "text",
      code: "Host\nRemote\nremoteEntry.js\nExposes\nShared dependencies\nSingleton dependencies"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Module Federation enables runtime composition, where the shell can load remote modules without rebuilding the full application."
    },
    {
      type: "heading",
      level: 3,
      text: "Q7. What is remoteEntry.js?"
    },
    {
      type: "paragraph",
      text: "remoteEntry.js is the runtime entry file exposed by a remote application."
    },
    {
      type: "paragraph",
      text: "It tells the host:"
    },
    {
      type: "code",
      language: "text",
      code: "Which modules the remote exposes\nHow to load those modules\nWhat shared dependencies are required\nWhere chunks can be loaded from"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "cartApp/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "The shell loads this file to access something like:"
    },
    {
      type: "code",
      language: "text",
      code: "cartApp/CartPage"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "remoteEntry.js is the handshake file between host and remote."
    },
    {
      type: "heading",
      level: 3,
      text: "Q8. What is the difference between build-time and runtime composition?"
    },
    {
      type: "heading",
      level: 4,
      text: "Build-time composition"
    },
    {
      type: "paragraph",
      text: "All code is combined during build."
    },
    {
      type: "code",
      language: "text",
      code: "App imports package.\nBuild creates one artifact.\nDeployment happens together."
    },
    {
      type: "heading",
      level: 4,
      text: "Runtime composition"
    },
    {
      type: "paragraph",
      text: "The shell loads remote code at runtime."
    },
    {
      type: "code",
      language: "text",
      code: "Shell loads remoteEntry.js.\nRemote code is fetched dynamically.\nRemote can deploy independently."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Build-time composition is simpler, but runtime composition gives more deployment independence."
    },
    {
      type: "heading",
      level: 3,
      text: "Q9. What are exposed modules?"
    },
    {
      type: "paragraph",
      text: "Exposed modules are the modules a remote makes available to the shell."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote exposes:\n./CartPage\n./CartDrawer\n./MiniCart"
    },
    {
      type: "paragraph",
      text: "The shell can then load those modules."
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Exposed modules are part of the remote contract. Changing them can break the shell."
    },
    {
      type: "heading",
      level: 3,
      text: "Q10. What are shared dependencies?"
    },
    {
      type: "paragraph",
      text: "Shared dependencies are libraries that the shell and remotes agree to share instead of bundling separately."
    },
    {
      type: "paragraph",
      text: "Common examples:"
    },
    {
      type: "code",
      language: "text",
      code: "React\nReact DOM\nDesign system\nAuth SDK\nAnalytics SDK"
    },
    {
      type: "paragraph",
      text: "React and React DOM are often shared as singletons to avoid multiple React instances."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Shared dependencies reduce duplication, but they need governance. Sharing too much creates coupling."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Architecture Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q11. How would you design a micro frontend architecture for an e-commerce platform?"
    },
    {
      type: "paragraph",
      text: "A strong architecture:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Home Remote\n├── Catalog Remote\n├── Product Details Remote\n├── Cart Remote\n├── Checkout Remote\n├── Profile Remote\n└── Orders Remote"
    },
    {
      type: "paragraph",
      text: "The shell owns:"
    },
    {
      type: "code",
      language: "text",
      code: "Global layout\nTop-level routing\nAuth bootstrap\nRemote loading\nError boundaries\nFeature flags\nAnalytics"
    },
    {
      type: "paragraph",
      text: "Each remote owns its domain."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote → category pages, filters, sorting\nCart Remote → cart page, quantity updates\nCheckout Remote → address, delivery, payment, review\nOrders Remote → order history and order details"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "I would split by business domain, not by UI widgets. Each remote should have clear ownership, independent CI/CD, contract tests, fallback UI, observability, and rollback support."
    },
    {
      type: "heading",
      level: 3,
      text: "Q12. How do you decide micro frontend boundaries?"
    },
    {
      type: "paragraph",
      text: "Good boundaries follow business domains."
    },
    {
      type: "paragraph",
      text: "Good examples:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog\nCart\nCheckout\nOrders\nProfile\nSearch"
    },
    {
      type: "paragraph",
      text: "Bad boundaries:"
    },
    {
      type: "code",
      language: "text",
      code: "Button\nHeader text\nProduct image\nSmall filter component\nPrice label"
    },
    {
      type: "paragraph",
      text: "Decision checklist:"
    },
    {
      type: "code",
      language: "text",
      code: "Can one team own it?\nCan it deploy independently?\nCan it be tested independently?\nDoes it have clear route ownership?\nDoes it have limited communication with other domains?\nCan it fail without breaking the whole app?"
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "A good micro frontend boundary is an ownership boundary, not just a component boundary."
    },
    {
      type: "heading",
      level: 3,
      text: "Q13. What should the shell own?"
    },
    {
      type: "paragraph",
      text: "The shell should own platform-level concerns:"
    },
    {
      type: "code",
      language: "text",
      code: "Global layout\nTop-level routing\nAuth bootstrap\nRemote loading\nFallback UI\nError boundaries\nFeature flag initialization\nAnalytics initialization\nTheme and locale providers\nRemote manifest loading"
    },
    {
      type: "paragraph",
      text: "It should not own:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart calculations\nCheckout rules\nProduct filtering logic\nPayment behavior\nOrder business rules\nDomain API logic"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "The shell should coordinate composition, not own business logic."
    },
    {
      type: "heading",
      level: 3,
      text: "Q14. What should remotes own?"
    },
    {
      type: "paragraph",
      text: "Remotes should own domain-specific UI and behavior."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote owns filters, sorting, category listing.\nCart Remote owns cart UI and cart interactions.\nCheckout Remote owns checkout steps and validation UX.\nProfile Remote owns profile pages and account settings."
    },
    {
      type: "paragraph",
      text: "Remotes should own:"
    },
    {
      type: "code",
      language: "text",
      code: "Domain components\nDomain routes\nDomain API calls\nDomain state\nDomain tests\nDomain observability\nDomain deployment"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "A remote should be independently owned, independently deployable, and independently observable."
    },
    {
      type: "heading",
      level: 3,
      text: "Q15. How do micro frontends communicate?"
    },
    {
      type: "paragraph",
      text: "Prefer communication methods that keep remotes loosely coupled."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "code",
      language: "text",
      code: "URL state\nBackend APIs\nSmall custom events\nShell-mediated platform context\nEvent bus with strict contracts"
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "code",
      language: "text",
      code: "Direct remote-to-remote imports\nShared global store for everything\nReading hidden localStorage keys\nMutating another remote’s state"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Communication should happen through explicit contracts, not private implementation details."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Routing Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q16. Who owns routing in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Usually:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns top-level routing.\nRemotes own nested domain routing."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell:\n/checkout/* → Checkout Remote\n\nCheckout Remote:\n/checkout/address\n/checkout/delivery\n/checkout/payment\n/checkout/review"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "The shell owns route selection. The remote owns route interpretation."
    },
    {
      type: "heading",
      level: 3,
      text: "Q17. How do you support deep linking?"
    },
    {
      type: "paragraph",
      text: "Deep linking means direct URLs should work."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/profile/addresses"
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "code",
      language: "text",
      code: "Server returns shell app.\nShell matches /profile/*.\nShell loads Profile Remote.\nProfile Remote renders Addresses page."
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "code",
      language: "text",
      code: "Hosting/server must fallback to shell index.html for client-side routes."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Deep links work when the shell can route directly to the correct remote and the remote can interpret its nested path."
    },
    {
      type: "heading",
      level: 3,
      text: "Q18. How do you avoid route conflicts?"
    },
    {
      type: "paragraph",
      text: "Use:"
    },
    {
      type: "code",
      language: "text",
      code: "Central route registry\nRoute ownership documentation\nRoute naming conventions\nCI validation\nPlatform review for top-level routes"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/* → Catalog Remote\n/product/:id → Product Remote\n/cart → Cart Remote"
    },
    {
      type: "paragraph",
      text: "Avoid overlapping ownership."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Every route should have exactly one owner."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Authentication and Authorization Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q19. Where should authentication live?"
    },
    {
      type: "paragraph",
      text: "Authentication bootstrap usually belongs in the shell or platform layer."
    },
    {
      type: "paragraph",
      text: "The shell can own:"
    },
    {
      type: "code",
      language: "text",
      code: "Session bootstrap\nLogin/logout\nToken refresh orchestration\nProtected route checks\nRedirect after login\nIdentity context"
    },
    {
      type: "paragraph",
      text: "Remotes consume safe identity context."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Authentication should be centralized for consistency. Remotes should not each implement their own login flow."
    },
    {
      type: "heading",
      level: 3,
      text: "Q20. Where should authorization live?"
    },
    {
      type: "paragraph",
      text: "Authorization should happen at multiple levels."
    },
    {
      type: "code",
      language: "text",
      code: "Shell → broad route protection\nRemote → feature-level permission UX\nBackend → real security enforcement"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell checks if user is logged in for /orders.\nOrders Remote checks if user can view this order.\nOrders API enforces ownership."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Frontend authorization improves UX, but backend authorization protects the system."
    },
    {
      type: "heading",
      level: 3,
      text: "Q21. Should remotes access tokens directly?"
    },
    {
      type: "paragraph",
      text: "Ideally no."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell/auth provider manages session.\nApproved API layer attaches credentials.\nRemotes call domain APIs.\nTokens are not passed through props, events, URLs, or localStorage."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Token handling should be centralized and secure. Spreading token logic across remotes creates security and consistency problems."
    },
    {
      type: "heading",
      level: 2,
      text: "7. State Management Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q22. Should micro frontends share one global store?"
    },
    {
      type: "paragraph",
      text: "Usually no."
    },
    {
      type: "paragraph",
      text: "A shared global store creates tight coupling."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog writes global state.\nCart reads catalog state.\nCheckout mutates cart state.\nProfile depends on checkout state."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns platform state.\nRemotes own domain state.\nBackend owns business-critical state.\nURL owns shareable route state."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Sharing a state library is okay. Sharing one global store across all remotes is usually risky."
    },
    {
      type: "heading",
      level: 3,
      text: "Q23. Where should cart state live?"
    },
    {
      type: "paragraph",
      text: "For e-commerce, cart state is business-critical."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "code",
      language: "text",
      code: "Backend/API owns source of truth.\nCart Remote owns cart UI state.\nShell may show cart badge from a small cart summary.\nOther remotes communicate through events or API updates."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Product Remote adds item.\nCart API updates cart.\nCart Remote/Header gets updated summary."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Cart is too important to live only in frontend memory. Backend should be the source of truth."
    },
    {
      type: "heading",
      level: 3,
      text: "Q24. When should URL state be used?"
    },
    {
      type: "paragraph",
      text: "Use URL state for shareable route-level state."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "code",
      language: "text",
      code: "Search query\nFilters\nSorting\nPagination\nSelected tab\nCategory slug\nProduct ID"
    },
    {
      type: "paragraph",
      text: "Avoid URL state for:"
    },
    {
      type: "code",
      language: "text",
      code: "Tokens\nPayment data\nFull cart object\nPrivate user data\nLarge JSON payloads"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "URL state is ideal for navigation and shareable state, not sensitive or complex application state."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Testing Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q25. How do you test micro frontends?"
    },
    {
      type: "paragraph",
      text: "Use multiple layers:"
    },
    {
      type: "code",
      language: "text",
      code: "Unit tests inside each remote\nComponent tests\nContract tests\nShell + remote integration tests\nE2E tests for critical journeys\nVisual regression tests\nPerformance checks\nDeployment smoke tests\nProduction monitoring"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Unit tests prove a remote works alone. Contract and integration tests prove it works inside the product."
    },
    {
      type: "heading",
      level: 3,
      text: "Q26. What is contract testing in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Contract testing verifies that shell and remotes agree on integration points."
    },
    {
      type: "paragraph",
      text: "Contracts include:"
    },
    {
      type: "code",
      language: "text",
      code: "Exposed modules\nProps\nEvents\nEvent payloads\nRoutes\nShared dependency expectations\nFeature flags"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote must expose ./CartPage.\nCartPage must accept userId, locale, currency.\nCart Remote must emit cart:updated with itemCount."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Contract tests protect independent deployment."
    },
    {
      type: "heading",
      level: 3,
      text: "Q27. What E2E tests are important?"
    },
    {
      type: "paragraph",
      text: "Test critical user journeys across remotes."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "code",
      language: "text",
      code: "Search → Product Details → Add to Cart → Checkout\nLogin → Orders\nProfile address update → Checkout address selection\nCart quantity update → Checkout total update"
    },
    {
      type: "paragraph",
      text: "Do not test every small UI detail with E2E."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "E2E tests should focus on cross-remote business-critical journeys."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Deployment and Rollback Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q28. How do you deploy micro frontends independently?"
    },
    {
      type: "paragraph",
      text: "Each remote should have its own CI/CD pipeline."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Repo → Build → Test → Publish versioned artifact → CDN → Update manifest"
    },
    {
      type: "paragraph",
      text: "The shell loads remotes through:"
    },
    {
      type: "code",
      language: "text",
      code: "remoteEntry.js\nRemote manifest\nVersioned URLs"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Independent deployment is safe only when contracts, smoke tests, observability, and rollback are in place."
    },
    {
      type: "heading",
      level: 3,
      text: "Q29. What is a remote manifest?"
    },
    {
      type: "paragraph",
      text: "A remote manifest maps remote names to active versions and URLs."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"cartApp\": {\n    \"version\": \"1.8.4\",\n    \"url\": \"https://cdn.company.com/cart/1.8.4/remoteEntry.js\",\n    \"rollbackVersion\": \"1.8.3\",\n    \"owner\": \"cart-team\"\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "code",
      language: "text",
      code: "Controlled rollout\nRollback\nVersion visibility\nEnvironment promotion\nCanary release"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "A manifest gives runtime flexibility without blindly loading the latest remote."
    },
    {
      type: "heading",
      level: 3,
      text: "Q30. How do you roll back one micro frontend?"
    },
    {
      type: "paragraph",
      text: "Keep previous versions available and switch the manifest back."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "cartApp v1.8.5 fails.\nManifest points back to cartApp v1.8.4.\nShell loads stable version.\nCart team investigates v1.8.5."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "A remote rollback should not require redeploying the entire shell unless the shell itself is broken."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Performance Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q31. How do you optimize micro frontend performance?"
    },
    {
      type: "paragraph",
      text: "Use:"
    },
    {
      type: "code",
      language: "text",
      code: "Lightweight shell\nRoute-level lazy loading\nControlled preloading\nReact singleton\nShared dependency governance\nBundle budgets per remote\nVersioned caching\nSkeleton UI\nWeb Vitals monitoring per route and remote"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontend performance is not automatic. It requires governance across loading, dependencies, caching, and monitoring."
    },
    {
      type: "heading",
      level: 3,
      text: "Q32. How do you avoid duplicate React bundles?"
    },
    {
      type: "paragraph",
      text: "Configure React and React DOM as shared singleton dependencies and enforce version policy."
    },
    {
      type: "paragraph",
      text: "Also monitor bundles in CI."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "React should usually be shared as a singleton, but singleton must be combined with version governance."
    },
    {
      type: "heading",
      level: 3,
      text: "Q33. How do you prevent layout shift when remotes load?"
    },
    {
      type: "paragraph",
      text: "Use:"
    },
    {
      type: "code",
      language: "text",
      code: "Stable shell layout\nReserved content space\nSkeletons matching final dimensions\nDefined image dimensions\nEarly CSS loading\nAvoid late layout-changing styles"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Async remote loading should not cause the page to jump."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Failure Isolation Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q34. What happens if one remote fails?"
    },
    {
      type: "paragraph",
      text: "The shell should remain stable."
    },
    {
      type: "paragraph",
      text: "Expected behavior:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote fails.\nShell catches failure.\nFallback UI appears.\nNavigation remains usable.\nError is logged with remote name/version.\nOwning team is alerted.\nRollback is possible."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontends are not truly independent unless they can fail independently."
    },
    {
      type: "heading",
      level: 3,
      text: "Q35. Are React error boundaries enough?"
    },
    {
      type: "paragraph",
      text: "No."
    },
    {
      type: "paragraph",
      text: "Error boundaries catch render-time errors, but not all failures."
    },
    {
      type: "paragraph",
      text: "You also need:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote loading failure handling\nChunk load error handling\nTimeouts\nRetry strategy\nAPI error states\nObservability\nRollback"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Error boundaries are necessary, but they are only one layer of failure isolation."
    },
    {
      type: "heading",
      level: 3,
      text: "Q36. How do you test remote failure?"
    },
    {
      type: "paragraph",
      text: "Simulate:"
    },
    {
      type: "code",
      language: "text",
      code: "remoteEntry.js 404\nChunk load failure\nRemote render crash\nRemote timeout\nAPI 500\nAPI 401/403\nMalformed manifest"
    },
    {
      type: "paragraph",
      text: "Verify:"
    },
    {
      type: "code",
      language: "text",
      code: "Fallback UI\nRetry behavior\nNavigation stability\nError logging\nAlerting\nRollback readiness"
    },
    {
      type: "heading",
      level: 2,
      text: "12. Design System Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q37. How do you keep UI consistent across micro frontends?"
    },
    {
      type: "paragraph",
      text: "Use a governed design system."
    },
    {
      type: "paragraph",
      text: "It should include:"
    },
    {
      type: "code",
      language: "text",
      code: "Design tokens\nReusable components\nAccessibility patterns\nDocumentation\nVersioning policy\nVisual regression tests\nContribution process"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontends can be independently built, but they should be consistently experienced."
    },
    {
      type: "heading",
      level: 3,
      text: "Q38. What should not go into the design system?"
    },
    {
      type: "paragraph",
      text: "Avoid domain-specific business components."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "code",
      language: "text",
      code: "CheckoutPaymentStep\nCartPromotionCalculator\nProductRankingCard\nOrderCancellationPanel"
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "code",
      language: "text",
      code: "Button\nInput\nModal\nToast\nCard\nFormField\nTabs\nSkeleton"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "The design system should contain reusable UI primitives and patterns, not domain business logic."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Architect-Level Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q39. When would you choose micro frontends over a modular monolith?"
    },
    {
      type: "paragraph",
      text: "Choose micro frontends when:"
    },
    {
      type: "code",
      language: "text",
      code: "Multiple teams own different domains.\nIndependent deployment is required.\nRelease coordination is a bottleneck.\nDomains are stable.\nCI/CD maturity is high.\nDesign system exists.\nTesting and observability are ready.\nRollback is possible."
    },
    {
      type: "paragraph",
      text: "Choose modular monolith when:"
    },
    {
      type: "code",
      language: "text",
      code: "Small team\nEarly product\nUnclear domains\nNo need for independent deployment\nLow CI/CD maturity"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "I would start with a modular monolith and move to micro frontends only when team scale and independent deployment justify the complexity."
    },
    {
      type: "heading",
      level: 3,
      text: "Q40. When would you reject micro frontends?"
    },
    {
      type: "paragraph",
      text: "Reject them when:"
    },
    {
      type: "code",
      language: "text",
      code: "One team owns the app.\nDomains are unclear.\nThe app is small.\nNo independent deployment is needed.\nThere is no design system.\nThere is no platform team.\nTesting/observability maturity is low.\nThe motivation is only “modern architecture.”"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "Micro frontends solve organizational and deployment problems. If those problems do not exist, they may be overengineering."
    },
    {
      type: "heading",
      level: 3,
      text: "Q41. How would you migrate a monolith to micro frontends?"
    },
    {
      type: "paragraph",
      text: "Use a strangler pattern."
    },
    {
      type: "paragraph",
      text: "Steps:"
    },
    {
      type: "code",
      language: "text",
      code: "1. Modularize the monolith.\n2. Identify domain boundaries.\n3. Introduce shell app.\n4. Extract one low-risk remote first.\n5. Route traffic gradually.\n6. Add monitoring and rollback.\n7. Repeat for other domains.\n8. Extract checkout/auth later, not first."
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "I would avoid a big-bang rewrite and start with a low-risk domain like catalog, profile, or marketing."
    },
    {
      type: "heading",
      level: 3,
      text: "Q42. How do you prevent the shell from becoming a new monolith?"
    },
    {
      type: "paragraph",
      text: "Keep business logic out of the shell."
    },
    {
      type: "paragraph",
      text: "The shell should own:"
    },
    {
      type: "code",
      language: "text",
      code: "Routing\nLayout\nAuth bootstrap\nRemote loading\nFallback UI\nAnalytics setup\nFeature flags"
    },
    {
      type: "paragraph",
      text: "Remotes should own:"
    },
    {
      type: "code",
      language: "text",
      code: "Domain UI\nDomain state\nDomain APIs\nDomain behavior\nDomain tests"
    },
    {
      type: "paragraph",
      text: "Strong answer:"
    },
    {
      type: "blockquote",
      text: "The shell should compose the product, not become the product’s business brain."
    },
    {
      type: "heading",
      level: 2,
      text: "14. System Design Mock Interview"
    },
    {
      type: "heading",
      level: 3,
      text: "Prompt"
    },
    {
      type: "paragraph",
      text: "Design a micro frontend architecture for a large e-commerce platform."
    },
    {
      type: "paragraph",
      text: "Requirements:"
    },
    {
      type: "code",
      language: "text",
      code: "Multiple teams own catalog, cart, checkout, profile, and orders.\nTeams need independent deployment.\nCheckout is business-critical.\nSEO matters for category and product pages.\nThe system must support rollback and observability."
    },
    {
      type: "heading",
      level: 3,
      text: "Strong Answer Structure"
    },
    {
      type: "paragraph",
      text: "Start with domain split:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\nCatalog Remote\nProduct Details Remote\nCart Remote\nCheckout Remote\nProfile Remote\nOrders Remote"
    },
    {
      type: "paragraph",
      text: "Explain shell responsibilities:"
    },
    {
      type: "code",
      language: "text",
      code: "Top-level routing\nGlobal layout\nAuth bootstrap\nRemote loader\nFeature flags\nError boundaries\nAnalytics\nManifest loading"
    },
    {
      type: "paragraph",
      text: "Explain routing:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/* → Catalog Remote\n/product/:id → Product Remote\n/cart → Cart Remote\n/checkout/* → Checkout Remote\n/profile/* → Profile Remote\n/orders/* → Orders Remote"
    },
    {
      type: "paragraph",
      text: "Explain deployment:"
    },
    {
      type: "code",
      language: "text",
      code: "Each remote has independent CI/CD.\nArtifacts are versioned and published to CDN.\nShell loads remotes through manifest.\nCritical remotes like checkout use controlled rollout."
    },
    {
      type: "paragraph",
      text: "Explain failure isolation:"
    },
    {
      type: "code",
      language: "text",
      code: "Each remote is wrapped in an error boundary.\nRemote loading failures show fallback UI.\nErrors include remote name/version.\nCheckout failure triggers alert and rollback."
    },
    {
      type: "paragraph",
      text: "Explain performance:"
    },
    {
      type: "code",
      language: "text",
      code: "Route-level lazy loading.\nPreload cart/checkout at likely points.\nReact singleton.\nBundle budgets per remote.\nWeb Vitals by route and remote."
    },
    {
      type: "paragraph",
      text: "Finish with tradeoffs:"
    },
    {
      type: "blockquote",
      text: "This gives team autonomy and independent deployment, but adds complexity around routing, testing, dependency sharing, observability, and governance."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Rapid-Fire Questions"
    },
    {
      type: "table",
      headers: ["Question", "Short Answer"],
      rows: [
        ["Main goal of micro frontends?", "Independent ownership and deployment"],
        ["Best boundary?", "Business domain"],
        ["What should shell own?", "Platform concerns"],
        ["What should shell avoid?", "Domain business logic"],
        ["Routing model?", "Shell top-level, remote nested"],
        ["Communication style?", "Explicit contracts"],
        ["Best state owner for cart?", "Backend + Cart Remote"],
        ["React sharing?", "Singleton with version governance"],
        ["Testing focus?", "Contracts + integration + E2E"],
        ["Deployment model?", "Independent CI/CD + manifest"],
        ["Rollback model?", "Manifest points to previous version"],
        ["Failure handling?", "Error boundary + fallback + monitoring"],
        ["Performance risk?", "Duplicate deps and loading waterfalls"],
        ["UI consistency?", "Governed design system"],
        ["When to reject MFEs?", "Small team / unclear domains / no deployment need"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "16. Red Flag Answers"
    },
    {
      type: "paragraph",
      text: "Avoid these:"
    },
    {
      type: "code",
      language: "text",
      code: "“Micro frontends are always better than monoliths.”"
    },
    {
      type: "code",
      language: "text",
      code: "“We should split every component into a remote.”"
    },
    {
      type: "code",
      language: "text",
      code: "“The shell can store all shared business state.”"
    },
    {
      type: "code",
      language: "text",
      code: "“We do not need contract tests.”"
    },
    {
      type: "code",
      language: "text",
      code: "“If one remote fails, the user can refresh.”"
    },
    {
      type: "code",
      language: "text",
      code: "“We can load all remotes on app startup.”"
    },
    {
      type: "code",
      language: "text",
      code: "“Every remote can use any React version.”"
    },
    {
      type: "code",
      language: "text",
      code: "“Frontend permission checks are enough for security.”"
    },
    {
      type: "paragraph",
      text: "These answers show shallow production understanding."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Strong Candidate Phrases"
    },
    {
      type: "paragraph",
      text: "Use these in interviews:"
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends solve team-scaling and deployment autonomy problems, not just code-splitting problems."
    },
    {
      type: "code",
      language: "text",
      code: "The shell should coordinate composition, not own domain business logic."
    },
    {
      type: "code",
      language: "text",
      code: "A good remote boundary is an ownership boundary."
    },
    {
      type: "code",
      language: "text",
      code: "Independent deployment is only safe with contracts, observability, and rollback."
    },
    {
      type: "code",
      language: "text",
      code: "The shell owns route selection; the remote owns route interpretation."
    },
    {
      type: "code",
      language: "text",
      code: "Unit tests prove a remote works alone; integration tests prove it works inside the product."
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends are not truly independent unless they can fail independently."
    },
    {
      type: "code",
      language: "text",
      code: "A modular monolith is often the better first architecture."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Final Revision Checklist"
    },
    {
      type: "paragraph",
      text: "Before your interview, revise:"
    },
    {
      type: "checklist",
      items: [
        "Definition of micro frontends",
        "When to use and when to avoid",
        "Shell vs remote responsibilities",
        "Module Federation concepts",
        "remoteEntry.js",
        "Shared dependencies and React singleton",
        "Routing and deep linking",
        "Auth and authorization",
        "Communication patterns",
        "State ownership",
        "Contract testing",
        "E2E testing",
        "Independent deployment",
        "Manifest-based rollback",
        "Failure isolation",
        "Performance optimization",
        "Design system governance",
        "Migration strategy",
        "E-commerce system design example"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "19. Summary"
    },
    {
      type: "paragraph",
      text: "Micro frontend interviews are not about memorizing buzzwords."
    },
    {
      type: "paragraph",
      text: "They test whether you understand:"
    },
    {
      type: "list",
      items: [
        "Architecture boundaries",
        "Team ownership",
        "Deployment independence",
        "Runtime composition",
        "Routing",
        "Authentication",
        "Communication",
        "Testing",
        "Performance",
        "Failure isolation",
        "Governance",
        "Tradeoffs"
      ]
    },
    {
      type: "paragraph",
      text: "The strongest final answer is:"
    },
    {
      type: "blockquote",
      text: "I would use micro frontends only when team scale, domain ownership, and independent deployment justify the complexity. I would design a lightweight shell, domain-owned remotes, explicit contracts, route-level loading, shared dependency governance, contract testing, rollback, observability, and failure isolation."
    },
    {
      type: "paragraph",
      text: "That is the level expected from senior frontend and frontend architect interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "References"
    },
    {
      type: "list",
      items: [
        "Micro Frontends — Martin Fowler: https://martinfowler.com/articles/micro-frontends.html",
        "Micro Frontends: https://micro-frontends.org",
        "webpack Module Federation Documentation: https://webpack.js.org/concepts/module-federation/",
        "Module Federation Official Site: https://module-federation.io",
        "AWS Prescriptive Guidance: Micro-frontends: https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html"
      ]
    }
  ]
};
