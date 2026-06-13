import type { FrontendArticle } from "../../articles";

export const communicationBetweenMicroFrontends: FrontendArticle = {
  slug: "communication-between-micro-frontends",
  title: "Communication Between Micro Frontends",
  description: "Learn how micro frontends communicate safely using URL state, backend APIs, custom events, event buses, shared contracts, and why large global stores often create tight coupling.",
  difficulty: "Senior",
  readTime: "15 min read",
  tags: ["Micro Frontends", "Frontend Architecture", "State Management", "System Design", "Interview Prep"],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 12, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Communication is one of the hardest parts of micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "It is also one of the most common senior frontend interview topics."
    },
    {
      type: "paragraph",
      text: "Many developers understand the basic idea of micro frontends:"
    },
    {
      type: "blockquote",
      text: "Split a large frontend into independently owned frontend apps."
    },
    {
      type: "paragraph",
      text: "But the real challenge starts when those apps need to talk to each other."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Product Details Remote adds item to cart.\nCart Remote owns cart state.\nShell Header shows cart count.\nCheckout Remote needs latest cart information.\nAnalytics needs to track the event."
    },
    {
      type: "paragraph",
      text: "If communication is designed badly, micro frontends quickly become a distributed monolith."
    },
    {
      type: "paragraph",
      text: "This article explains how micro frontends should communicate in production systems, what patterns to use, what to avoid, and how to explain these decisions in interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Why Communication Is Hard in Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Micro frontends are designed to be independently owned and independently deployed."
    },
    {
      type: "paragraph",
      text: "That means each micro app should have its own boundary."
    },
    {
      type: "paragraph",
      text: "But real products are connected."
    },
    {
      type: "paragraph",
      text: "In an e-commerce system:"
    },
    {
      type: "blockquote",
      text: "Catalog affects Product Details.\nProduct Details affects Cart.\nCart affects Checkout.\nCheckout affects Orders.\nProfile affects Checkout address."
    },
    {
      type: "paragraph",
      text: "The challenge is:"
    },
    {
      type: "blockquote",
      text: "How do we let apps collaborate without making them tightly coupled?"
    },
    {
      type: "paragraph",
      text: "Bad communication creates:"
    },
    {
      type: "list",
      items: [
        "Hidden dependencies",
        "Runtime breakages",
        "Shared state chaos",
        "Hard debugging",
        "Unclear ownership",
        "Circular dependencies",
        "Deployment coupling"
      ]
    },
    {
      type: "paragraph",
      text: "Good communication creates:"
    },
    {
      type: "list",
      items: [
        "Clear contracts",
        "Low coupling",
        "Independent deployment",
        "Predictable data flow",
        "Easier testing",
        "Better ownership"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "2. Core Rule"
    },
    {
      type: "paragraph",
      text: "The most important rule:"
    },
    {
      type: "blockquote",
      text: "Micro frontends should communicate as little as possible."
    },
    {
      type: "paragraph",
      text: "Communication should be intentional, documented, and contract-driven."
    },
    {
      type: "paragraph",
      text: "If two micro frontends communicate constantly, one of these may be true:"
    },
    {
      type: "list",
      items: [
        "The boundary is wrong.",
        "The domains are too tightly related.",
        "The split is too granular.",
        "The state ownership is unclear."
      ]
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "If two micro frontends need constant communication, the boundary is probably wrong."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Communication Pattern Overview"
    },
    {
      type: "paragraph",
      text: "Common communication patterns:"
    },
    {
      type: "table",
      headers: ["Pattern", "Best For", "Risk"],
      rows: [
        ["URL state", "Route-level state, filters, search", "Limited for complex state"],
        ["Backend as source of truth", "Business-critical state", "More API dependency"],
        ["Custom browser events", "Simple cross-app notifications", "Harder to trace at scale"],
        ["Event bus", "Pub-sub communication", "Can become hidden coupling"],
        ["Shell-mediated communication", "Global UI updates", "Shell can become too smart"],
        ["Shared client store", "Truly global state", "Tight coupling"],
        ["Browser storage", "Simple persistence", "Sync/security issues"],
        ["Direct remote imports", "Rare stable contracts", "Runtime coupling risk"]
      ]
    },
    {
      type: "paragraph",
      text: "Recommended order:"
    },
    {
      type: "list",
      items: [
        "Prefer URL state when the state belongs in the URL.",
        "Prefer backend APIs for business-critical state.",
        "Use explicit events for small notifications.",
        "Use an event bus only with strong governance.",
        "Avoid large shared global stores.",
        "Avoid direct dependency on another remote’s internals."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "4. URL-Based Communication"
    },
    {
      type: "paragraph",
      text: "URL state is one of the cleanest communication mechanisms."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "/search?q=shoes\n/categories/men?page=2&sort=price-low-to-high\n/products/123?variant=blue"
    },
    {
      type: "paragraph",
      text: "This works well for:"
    },
    {
      type: "list",
      items: [
        "Search query",
        "Filters",
        "Sorting",
        "Pagination",
        "Selected category",
        "Selected tab",
        "Shareable page state"
      ]
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Refresh-safe",
        "Bookmarkable",
        "Shareable",
        "Easy to debug",
        "Works across remotes",
        "Does not require shared memory"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Shell routes user to:\n/categories/shoes?sort=price&page=2\n\nCatalog Remote reads:\ncategory = shoes\nsort = price\npage = 2"
    },
    {
      type: "paragraph",
      text: "The shell does not need to know the internal filter state."
    },
    {
      type: "paragraph",
      text: "The Catalog Remote owns the interpretation of that URL."
    },
    {
      type: "heading",
      level: 2,
      text: "5. When URL State Is Not Enough"
    },
    {
      type: "paragraph",
      text: "URL state is not suitable for everything."
    },
    {
      type: "paragraph",
      text: "Avoid putting this in the URL:"
    },
    {
      type: "list",
      items: [
        "Sensitive data",
        "Large objects",
        "Payment details",
        "Auth tokens",
        "Full cart contents",
        "Large form state",
        "Private user data"
      ]
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "/checkout?cardNumber=4111111111111111"
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "/checkout/payment"
    },
    {
      type: "paragraph",
      text: "The checkout state should be stored securely through backend/session APIs, not exposed in the URL."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Backend as Source of Truth"
    },
    {
      type: "paragraph",
      text: "For business-critical state, backend APIs should usually be the source of truth."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Cart",
        "Checkout session",
        "User profile",
        "Order history",
        "Payment status",
        "Inventory",
        "Pricing",
        "Promotions"
      ]
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "paragraph",
      text: "Because this state must be:"
    },
    {
      type: "list",
      items: [
        "Consistent",
        "Secure",
        "Recoverable",
        "Auditable",
        "Shared across devices",
        "Validated by backend rules"
      ]
    },
    {
      type: "paragraph",
      text: "Example cart flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: `Product Details Remote\n      │\n      │ Add item to cart\n      ▼\nCart API\n      │\n      │ Updated cart saved\n      ▼\nCart Updated Event\n      │\n      ▼\nShell Header updates cart count`
    },
    {
      type: "paragraph",
      text: "The frontend event is only a notification."
    },
    {
      type: "paragraph",
      text: "The real cart state lives in the backend."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "Business-critical state like cart and checkout should be backend-first, not hidden inside a shared frontend store."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Custom Browser Events"
    },
    {
      type: "paragraph",
      text: "Custom events are useful for lightweight communication."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Cart Remote updates cart count.\nShell Header needs to update badge."
    },
    {
      type: "paragraph",
      text: "Event:"
    },
    {
      type: "blockquote",
      text: "cart:updated"
    },
    {
      type: "paragraph",
      text: "Payload:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "cartId": "cart_123",\n  "itemCount": 4\n}`
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: `Product Details Remote\n      │\n      │ dispatches cart:updated\n      ▼\nShell Header\n      │\n      │ updates cart badge\n      ▼\nUser sees new cart count`
    },
    {
      type: "paragraph",
      text: "Custom events are good when:"
    },
    {
      type: "list",
      items: [
        "The message is small.",
        "The payload is stable.",
        "The receiving app does not need internal sender details.",
        "The event represents a domain-level fact."
      ]
    },
    {
      type: "paragraph",
      text: "Example good events:"
    },
    {
      type: "list",
      items: [
        "cart:updated",
        "user:logged-out",
        "wishlist:item-added",
        "search:submitted",
        "checkout:completed"
      ]
    },
    {
      type: "paragraph",
      text: "Bad events:"
    },
    {
      type: "list",
      items: [
        "cart:setInternalReducerState",
        "product:updatePrivateHookValue",
        "checkout:mutateStepComponent"
      ]
    },
    {
      type: "paragraph",
      text: "Events should describe business/domain facts, not internal implementation details."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Event Contract Design"
    },
    {
      type: "paragraph",
      text: "Events should have explicit contracts."
    },
    {
      type: "paragraph",
      text: "A good event contract includes:"
    },
    {
      type: "list",
      items: [
        "Event name",
        "Owner",
        "Payload shape",
        "Version",
        "Description",
        "Consumers",
        "Backward compatibility rules"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Event: cart:updated\nOwner: Cart Team\nVersion: 1\nDescription: Emitted when cart item count changes.\nPayload:\n{\n  cartId: string;\n  itemCount: number;\n}\nConsumers:\n- Shell Header\n- Analytics"
    },
    {
      type: "paragraph",
      text: "This avoids hidden coupling."
    },
    {
      type: "paragraph",
      text: "If the Cart Team changes the payload, contract tests should catch it."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Event Naming Rules"
    },
    {
      type: "paragraph",
      text: "Use predictable event names."
    },
    {
      type: "paragraph",
      text: "Good naming:"
    },
    {
      type: "list",
      items: [
        "domain:event",
        "cart:updated",
        "cart:item-added",
        "user:logged-out",
        "checkout:completed",
        "search:submitted"
      ]
    },
    {
      type: "paragraph",
      text: "Avoid vague names:"
    },
    {
      type: "list",
      items: [
        "update",
        "change",
        "data",
        "notify",
        "refresh"
      ]
    },
    {
      type: "paragraph",
      text: "Avoid implementation-based names:"
    },
    {
      type: "list",
      items: [
        "redux:dispatch",
        "component:set-state",
        "cartReducer:update"
      ]
    },
    {
      type: "paragraph",
      text: "Events should describe business/domain facts, not internal implementation details."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Event Bus Pattern"
    },
    {
      type: "paragraph",
      text: "An event bus provides publish/subscribe communication."
    },
    {
      type: "paragraph",
      text: "Concept:"
    },
    {
      type: "blockquote",
      text: "Remote A publishes event.\nRemote B subscribes to event."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Cart Remote publishes cart:updated\nShell Header subscribes to cart:updated\nAnalytics subscribes to cart:updated"
    },
    {
      type: "paragraph",
      text: "Architecture:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `                    ┌────────────────┐\n                    │   Event Bus     │\n                    └───────┬────────┘\n                            │\n          ┌─────────────────┼─────────────────┐\n          │                 │                 │\n          ▼                 ▼                 ▼\n   Shell Header        Analytics        Recommendations`
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Loose coupling",
        "Multiple consumers",
        "Simple notification flow"
      ]
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "list",
      items: [
        "Hidden dependencies",
        "Hard debugging",
        "No clear ownership",
        "Event storms",
        "Undocumented payloads",
        "Runtime-only failures"
      ]
    },
    {
      type: "paragraph",
      text: "Use an event bus carefully."
    },
    {
      type: "paragraph",
      text: "It should not become a global dumping ground."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Shell-Mediated Communication"
    },
    {
      type: "paragraph",
      text: "Sometimes the shell can coordinate communication."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Cart Remote emits cart count update.\nShell owns Header.\nShell updates cart badge."
    },
    {
      type: "paragraph",
      text: "This is reasonable because the shell owns global layout."
    },
    {
      type: "paragraph",
      text: "But the shell should not contain domain logic."
    },
    {
      type: "paragraph",
      text: "Good shell role:"
    },
    {
      type: "list",
      items: [
        "Listen for cart count updates.",
        "Update header badge.",
        "Route to checkout.",
        "Show global notification."
      ]
    },
    {
      type: "paragraph",
      text: "Bad shell role:"
    },
    {
      type: "list",
      items: [
        "Calculate cart totals.",
        "Apply promo codes.",
        "Validate payment rules.",
        "Manage product filters.",
        "Own checkout step logic."
      ]
    },
    {
      type: "paragraph",
      text: "Strong rule:"
    },
    {
      type: "blockquote",
      text: "The shell can coordinate global UI, but domain logic should stay inside remotes or backend services."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Shared Store Pattern"
    },
    {
      type: "paragraph",
      text: "A shared client-side store means multiple micro frontends read and write the same frontend state."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "All remotes use one shared Redux store."
    },
    {
      type: "paragraph",
      text: "This is tempting, but risky."
    },
    {
      type: "paragraph",
      text: "Problems:"
    },
    {
      type: "list",
      items: [
        "Tight coupling",
        "Shared release assumptions",
        "Hard versioning",
        "Hidden dependencies",
        "Conflicting updates",
        "Difficult testing",
        "Reduced team autonomy"
      ]
    },
    {
      type: "paragraph",
      text: "Bad architecture:"
    },
    {
      type: "blockquote",
      text: "Catalog Remote writes to global store.\nCart Remote reads catalog slice.\nCheckout Remote mutates cart slice.\nProfile Remote depends on checkout state."
    },
    {
      type: "paragraph",
      text: "This can become worse than a monolith because dependencies are now distributed at runtime."
    },
    {
      type: "heading",
      level: 2,
      text: "13. When Shared Store Is Acceptable"
    },
    {
      type: "paragraph",
      text: "A shared store is not always wrong."
    },
    {
      type: "paragraph",
      text: "It can be acceptable for small, stable, platform-level state."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Theme",
        "Locale",
        "Feature flags",
        "Auth identity summary",
        "Global notification state"
      ]
    },
    {
      type: "paragraph",
      text: "But even here, keep it minimal."
    },
    {
      type: "paragraph",
      text: "Avoid storing:"
    },
    {
      type: "list",
      items: [
        "Full cart state",
        "Checkout form state",
        "Product listing state",
        "Search result state",
        "Payment state",
        "Domain business rules"
      ]
    },
    {
      type: "paragraph",
      text: "Decision table:"
    },
    {
      type: "table",
      headers: ["State", "Recommended Owner"],
      rows: [
        ["Theme", "Shell/platform"],
        ["Locale", "Shell/platform"],
        ["Auth identity summary", "Shell/auth provider"],
        ["Cart", "Backend + Cart Remote"],
        ["Checkout", "Backend/session + Checkout Remote"],
        ["Product filters", "URL + Catalog Remote"],
        ["Search query", "URL + Search Remote"],
        ["Orders", "Orders Remote + Orders API"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "14. Browser Storage"
    },
    {
      type: "paragraph",
      text: "Browser storage includes:"
    },
    {
      type: "list",
      items: [
        "localStorage",
        "sessionStorage",
        "IndexedDB",
        "Cookies"
      ]
    },
    {
      type: "paragraph",
      text: "It can be useful for:"
    },
    {
      type: "list",
      items: [
        "Theme preference",
        "Recently viewed items",
        "Non-sensitive draft state",
        "Experiment assignment"
      ]
    },
    {
      type: "paragraph",
      text: "But it has risks:"
    },
    {
      type: "list",
      items: [
        "Security issues",
        "Sync issues",
        "Stale data",
        "No clear ownership",
        "Race conditions",
        "Hard cleanup"
      ]
    },
    {
      type: "paragraph",
      text: "Avoid using browser storage as a secret communication channel between remotes."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Cart Remote writes private cart state to localStorage.\nCheckout Remote reads it secretly."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Cart Remote saves non-sensitive UI preference.\nCheckout uses backend session for real checkout state."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Direct Imports Between Remotes"
    },
    {
      type: "paragraph",
      text: "Directly importing one remote’s internal code is usually a bad idea."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Checkout Remote imports Cart Remote's internal reducer.\nCatalog Remote imports Search Remote's private hook.\nShell imports utility functions from every remote."
    },
    {
      type: "paragraph",
      text: "Why this is bad:"
    },
    {
      type: "list",
      items: [
        "Breaks encapsulation",
        "Creates deployment coupling",
        "Makes internal changes risky",
        "Blurs ownership",
        "Creates runtime compatibility issues"
      ]
    },
    {
      type: "paragraph",
      text: "If something must be shared, expose a stable public contract."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "blockquote",
      text: "Cart Remote exposes CartSummaryWidget.\nCart API exposes cart data.\nCart emits cart:updated event."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Communication in E-commerce Example"
    },
    {
      type: "paragraph",
      text: "Scenario:"
    },
    {
      type: "blockquote",
      text: "User views product details.\nUser clicks Add to Cart.\nHeader cart count updates.\nCart page shows updated item.\nCheckout uses latest cart."
    },
    {
      type: "paragraph",
      text: "Recommended design:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: `Product Details Remote\n      │\n      │ POST /cart/items\n      ▼\nCart API\n      │\n      │ returns updated cart summary\n      ▼\nProduct Details Remote emits cart:updated\n      │\n      ▼\nShell Header updates cart badge\n      │\n      ▼\nCart Remote fetches latest cart from Cart API when opened\n      │\n      ▼\nCheckout Remote creates checkout session from backend cart`
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "list",
      items: [
        "The event updates the UI badge.",
        "The backend owns the real cart.",
        "The Cart Remote owns cart page behavior.",
        "The Checkout Remote owns checkout session behavior."
      ]
    },
    {
      type: "paragraph",
      text: "This is clean because ownership is clear."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Sequence Diagram: Add to Cart"
    },
    {
      type: "diagram",
      diagramType: "sequence",
      content: `User\n │\n │ clicks Add to Cart\n ▼\nProduct Details Remote\n │\n │ POST /cart/items\n ▼\nCart API\n │\n │ returns updated itemCount\n ▼\nProduct Details Remote\n │\n │ emits cart:updated\n ▼\nShell Header\n │\n │ updates cart badge\n ▼\nAnalytics\n │\n │ tracks add_to_cart`
    },
    {
      type: "paragraph",
      text: "This sequence avoids direct coupling between Product Details, Cart, Shell, and Analytics."
    },
    {
      type: "paragraph",
      text: "They communicate through backend APIs and explicit events."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Communication in Search and Catalog"
    },
    {
      type: "paragraph",
      text: "Search and catalog can communicate through URL state."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "/search?q=laptop&sort=price"
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "blockquote",
      text: "Search Remote updates URL query params.\nCatalog/Search results read query params.\nUser refreshes page.\nSame state is restored from URL."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Bookmarkable",
        "Shareable",
        "Refresh-safe",
        "No shared store needed"
      ]
    },
    {
      type: "paragraph",
      text: "Good for:"
    },
    {
      type: "list",
      items: [
        "Search query",
        "Filters",
        "Sort option",
        "Pagination",
        "Category slug"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "19. Communication in Auth"
    },
    {
      type: "paragraph",
      text: "Authentication is usually shell-owned."
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "blockquote",
      text: "Shell authenticates user.\nShell provides identity context.\nRemotes consume identity summary.\nRemotes call domain APIs with valid auth context.\nBackend enforces authorization."
    },
    {
      type: "paragraph",
      text: "Identity context may include:"
    },
    {
      type: "list",
      items: [
        "userId",
        "displayName",
        "roles summary",
        "locale",
        "logged-in status"
      ]
    },
    {
      type: "paragraph",
      text: "Do not expose:"
    },
    {
      type: "list",
      items: [
        "Secrets",
        "Raw tokens in events",
        "Sensitive user data",
        "Payment data"
      ]
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Frontend auth context improves UX. Backend authorization protects the system."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Communication in Analytics"
    },
    {
      type: "paragraph",
      text: "Analytics often crosses all domains."
    },
    {
      type: "paragraph",
      text: "Recommended approach:"
    },
    {
      type: "blockquote",
      text: "Shell initializes analytics SDK.\nRemotes emit domain analytics events.\nAnalytics layer normalizes and sends data."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "catalog:product-clicked\ncart:item-added\ncheckout:payment-submitted\norder:placed"
    },
    {
      type: "paragraph",
      text: "Avoid each remote implementing analytics differently."
    },
    {
      type: "paragraph",
      text: "Governance should define:"
    },
    {
      type: "list",
      items: [
        "Event naming",
        "Payload standards",
        "PII rules",
        "Required fields",
        "Versioning",
        "Testing"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "21. Contract Testing for Communication"
    },
    {
      type: "paragraph",
      text: "Communication contracts should be tested."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "list",
      items: [
        "Event names",
        "Payload shapes",
        "Required fields",
        "Optional fields",
        "Backward compatibility",
        "Route contracts",
        "Shared context contracts"
      ]
    },
    {
      type: "paragraph",
      text: "Example contract test:"
    },
    {
      type: "blockquote",
      text: "When cart item is added,\ncart:updated event must include:\n- cartId\n- itemCount"
    },
    {
      type: "paragraph",
      text: "If a team removes itemCount, the test should fail before deployment."
    },
    {
      type: "paragraph",
      text: "Without contract tests, independent deployment becomes dangerous."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Observability for Communication"
    },
    {
      type: "paragraph",
      text: "You should be able to debug cross-app communication."
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "list",
      items: [
        "Event name",
        "Publisher remote",
        "Consumer remote",
        "Payload version",
        "Route",
        "Shell version",
        "Remote version",
        "Timestamp",
        "Error/failure"
      ]
    },
    {
      type: "paragraph",
      text: "Example log:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "event": "cart:updated",\n  "publisher": "productDetailsRemote",\n  "consumer": "shellHeader",\n  "payloadVersion": "1",\n  "route": "/product/123",\n  "productDetailsVersion": "2.4.1",\n  "shellVersion": "3.1.0"\n}`
    },
    {
      type: "paragraph",
      text: "This helps answer:"
    },
    {
      type: "list",
      items: [
        "Which app published the event?",
        "Which app consumed it?",
        "Did the payload change?",
        "Did the issue start after a deployment?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "23. Security Considerations"
    },
    {
      type: "paragraph",
      text: "Communication between micro frontends happens in the browser, so be careful."
    },
    {
      type: "paragraph",
      text: "Rules:"
    },
    {
      type: "list",
      items: [
        "Do not pass secrets through events.",
        "Do not pass tokens through custom events.",
        "Do not store sensitive state in localStorage.",
        "Validate event payloads.",
        "Do not trust client-side authorization.",
        "Avoid exposing private user data.",
        "Keep payment data out of frontend communication channels."
      ]
    },
    {
      type: "paragraph",
      text: "Bad event payload:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "cardNumber": "4111111111111111",\n  "cvv": "123"\n}`
    },
    {
      type: "paragraph",
      text: "Good event payload:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "checkoutStep": "payment-submitted",\n  "status": "pending"\n}`
    },
    {
      type: "heading",
      level: 2,
      text: "24. Performance Considerations"
    },
    {
      type: "paragraph",
      text: "Communication can affect performance."
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "list",
      items: [
        "Too many events",
        "Large payloads",
        "Event loops",
        "Repeated API calls",
        "Unnecessary re-renders",
        "Global store updates triggering many apps"
      ]
    },
    {
      type: "paragraph",
      text: "Best practices:"
    },
    {
      type: "list",
      items: [
        "Keep event payloads small.",
        "Avoid high-frequency global events.",
        "Debounce where needed.",
        "Use URL state for route-level state.",
        "Avoid global store updates for local UI changes.",
        "Monitor event-driven re-render impact."
      ]
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Catalog emits event on every mouse move.\nAll remotes subscribe and re-render."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Catalog emits event only when user applies filters."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Communication Decision Table"
    },
    {
      type: "table",
      headers: ["Need", "Recommended Pattern"],
      rows: [
        ["Product filters", "URL state"],
        ["Search query", "URL state"],
        ["Cart data", "Backend API"],
        ["Cart badge update", "Custom event"],
        ["Checkout session", "Backend/session API"],
        ["User identity summary", "Shell auth context"],
        ["Theme", "Shared platform context"],
        ["Locale", "Shared platform context"],
        ["Analytics", "Shared analytics event contract"],
        ["Large form state", "Remote-owned or backend session"],
        ["Payment state", "Backend/payment provider"],
        ["Global notification", "Shell-mediated event"],
        ["Recently viewed", "Browser storage or backend profile"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "26. Common Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["One global Redux store for all remotes", "Tight coupling"],
        ["Passing sensitive data through events", "Security risk"],
        ["Using localStorage as hidden API", "Hard to debug and insecure"],
        ["Directly importing another remote’s internals", "Breaks ownership"],
        ["Too many chatty events", "Indicates wrong boundary"],
        ["Undocumented event payloads", "Runtime breakage"],
        ["Shell owns all state", "Shell becomes a monolith"],
        ["Every remote listens to every event", "Hidden dependency chaos"],
        ["No contract tests", "Unsafe independent deployment"],
        ["No observability", "Difficult production debugging"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "27. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. How do micro frontends communicate?"
    },
    {
      type: "paragraph",
      text: "Micro frontends can communicate using URL state, backend APIs, custom events, event buses, shell-mediated context, or shared state. I prefer URL state for route-level data, backend APIs for business-critical state, and small explicit events for simple notifications. I avoid large shared global stores because they create tight coupling."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. Why not use one global Redux store?"
    },
    {
      type: "paragraph",
      text: "A global Redux store couples independently deployed applications to one shared state shape. If one team changes the state structure, other remotes may break at runtime. It also reduces team autonomy and makes testing/versioning harder. I would only use shared state for small, stable platform-level state like theme, locale, or identity summary."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. How would you handle cart state across micro frontends?"
    },
    {
      type: "paragraph",
      text: "I would make the Cart API the source of truth. The Cart Remote owns cart UI. Product Details can call the Cart API to add an item and emit a small cart:updated event with item count. The Shell Header can update the badge from that event. Checkout should fetch or create checkout state from backend cart/session APIs."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. When should you use URL state?"
    },
    {
      type: "paragraph",
      text: "Use URL state for shareable, refresh-safe state like search query, filters, sorting, pagination, selected category, and selected tab. Do not use it for sensitive or large private data."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. What is a good event contract?"
    },
    {
      type: "paragraph",
      text: "A good event contract defines the event name, owner, payload shape, version, consumers, and backward compatibility rules. For example, cart:updated may include cartId and itemCount, owned by the Cart Team."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What is the biggest communication anti-pattern?"
    },
    {
      type: "paragraph",
      text: "The biggest anti-pattern is using a shared global store or event bus as a dumping ground for all cross-app communication. This creates hidden coupling and turns micro frontends into a distributed monolith."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“How would you design communication between micro frontends in an e-commerce app?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would first minimize cross-app communication by choosing clear domain boundaries.\n\nFor route-level state like search query, filters, sorting, and pagination, I would use URL state so the page remains shareable and refresh-safe.\n\nFor business-critical state like cart, checkout, profile, and orders, I would use backend APIs as the source of truth. For example, Product Details can call the Cart API when a user adds an item. After the API succeeds, it can emit a small cart:updated event with item count so the Shell Header can update the badge.\n\nI would avoid a giant shared Redux store because it couples independently deployed remotes to one shared state shape. I would only share small platform-level state like theme, locale, auth summary, and feature flags.\n\nFor custom events, I would define explicit contracts with event names, payload shapes, versioning, owners, and consumers. I would also add contract tests and observability so we can detect payload changes and production failures.\n\nThe goal is low coupling, clear ownership, and predictable data flow."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Final Checklist"
    },
    {
      type: "checklist",
      items: [
        "Is the communication really needed?",
        "Can this be solved through URL state?",
        "Should the backend be the source of truth?",
        "Is the event payload small and stable?",
        "Is the event contract documented?",
        "Is there an owning team for the event?",
        "Are consumers known?",
        "Are contract tests in place?",
        "Is sensitive data excluded?",
        "Is communication observable?",
        "Are we avoiding global shared state?",
        "Does frequent communication indicate a wrong boundary?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "30. Summary"
    },
    {
      type: "paragraph",
      text: "Communication between micro frontends should be minimal, explicit, and contract-driven."
    },
    {
      type: "paragraph",
      text: "Recommended strategy:"
    },
    {
      type: "blockquote",
      text: "URL state for route-level state\nBackend APIs for business-critical state\nCustom events for small notifications\nShell context for platform-level state\nShared stores only for rare, stable global state"
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "blockquote",
      text: "Large global stores\nHidden localStorage contracts\nDirect imports between remotes\nUndocumented event payloads\nChatty event buses\nSensitive data in browser events"
    },
    {
      type: "paragraph",
      text: "The strongest interview takeaway:"
    },
    {
      type: "blockquote",
      text: "Micro frontend communication should preserve independence. If communication creates tight coupling, the architecture is failing."
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
        "AWS Prescriptive Guidance: Micro-frontends (https://docs.aws.amazon.com/prescriptive-guidance/latest/micro-frontends-aws/introduction.html)",
        "webpack Module Federation Documentation (https://webpack.js.org/concepts/module-federation/)",
        "Module Federation Official Site (https://module-federation.io)"
      ]
    }
  ]
};
