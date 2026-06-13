import type { FrontendArticle } from "../../articles";

export const routingDeepLinkingMicroFrontends: FrontendArticle = {
  slug: "routing-deep-linking-micro-frontends",
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
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Routing is one of the most important design decisions in micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "A micro frontend system can have independent teams, separate remotes, and runtime loading, but if routing is not designed properly, the user experience quickly breaks."
    },
    {
      type: "paragraph",
      text: "Common routing failures include:"
    },
    {
      type: "list",
      items: [
        "Direct URLs do not work.",
        "Page refresh breaks the remote.",
        "Two micro apps claim the same route.",
        "The shell knows too much about remote internals.",
        "Remote apps cannot manage nested pages.",
        "Auth redirects behave inconsistently.",
        "Browser back/forward navigation breaks."
      ]
    },
    {
      type: "paragraph",
      text: "A strong micro frontend routing design should support:"
    },
    {
      type: "list",
      items: [
        "Top-level route ownership",
        "Nested route ownership",
        "Deep linking",
        "Refresh safety",
        "Auth guards",
        "Fallback routes",
        "Route-level remote loading",
        "SEO where needed",
        "Clear team ownership"
      ]
    },
    {
      type: "paragraph",
      text: "This article explains how to design routing and deep linking in micro frontends from beginner level to senior frontend architect level."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Why Routing Is Hard in Micro Frontends"
    },
    {
      type: "paragraph",
      text: "In a normal frontend monolith, routing is usually centralized."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "frontend-app\n├── /products\n├── /product/:id\n├── /cart\n├── /checkout\n├── /profile\n└── /orders"
    },
    {
      type: "paragraph",
      text: "One app owns the route table."
    },
    {
      type: "paragraph",
      text: "In micro frontends, route ownership is distributed."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Catalog Remote\n├── Product Details Remote\n├── Cart Remote\n├── Checkout Remote\n├── Profile Remote\n└── Orders Remote"
    },
    {
      type: "paragraph",
      text: "Now the question becomes:"
    },
    {
      type: "code",
      language: "text",
      code: "Who owns /products?\nWho owns /profile/addresses?\nWho owns /checkout/payment?\nWho handles auth redirect?\nWho handles refresh?\nWho loads the right remote?"
    },
    {
      type: "paragraph",
      text: "Without clear route ownership, micro frontends become chaotic."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Core Routing Principle"
    },
    {
      type: "paragraph",
      text: "The safest routing principle is:"
    },
    {
      type: "blockquote",
      text: "The shell owns top-level routing. Remotes own nested routing inside their domain boundary."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns:\n/products\n/product/:id\n/cart\n/checkout\n/profile\n/orders\n\nProfile Remote owns:\n/profile/details\n/profile/addresses\n/profile/preferences\n\nCheckout Remote owns:\n/checkout/address\n/checkout/delivery\n/checkout/payment\n/review"
    },
    {
      type: "paragraph",
      text: "This gives both control and autonomy."
    },
    {
      type: "paragraph",
      text: "The shell knows which remote to load."
    },
    {
      type: "paragraph",
      text: "The remote controls its internal domain flow."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Shell-Owned Routing"
    },
    {
      type: "paragraph",
      text: "In shell-owned routing, the shell decides which remote should load for a route."
    },
    {
      type: "paragraph",
      text: "Example route map:"
    },
    {
      type: "code",
      language: "text",
      code: "/                         → Home Remote\n/categories/:categorySlug → Catalog Remote\n/search                   → Search Remote\n/product/:productId       → Product Details Remote\n/cart                     → Cart Remote\n/checkout                 → Checkout Remote\n/profile/*                → Profile Remote\n/orders/*                 → Orders Remote"
    },
    {
      type: "paragraph",
      text: "The shell owns:"
    },
    {
      type: "list",
      items: [
        "Top-level paths",
        "Route-to-remote mapping",
        "Auth guards",
        "Layout selection",
        "Fallback route",
        "Remote loading",
        "Route-level error boundaries"
      ]
    },
    {
      type: "paragraph",
      text: "Example flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /cart\n      │\n      ▼\nShell matches /cart\n      │\n      ▼\nShell loads Cart Remote\n      │\n      ▼\nCart Remote renders Cart Page"
    },
    {
      type: "paragraph",
      text: "This is predictable and easy to explain in interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Remote-Owned Routing"
    },
    {
      type: "paragraph",
      text: "Remote-owned routing means the remote manages its own internal screens."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Profile Remote\n├── /profile/details\n├── /profile/addresses\n├── /profile/payment-methods\n└── /profile/preferences"
    },
    {
      type: "paragraph",
      text: "The shell does not need to know every internal profile page."
    },
    {
      type: "paragraph",
      text: "It only needs to know:"
    },
    {
      type: "code",
      language: "text",
      code: "/profile/* → Profile Remote"
    },
    {
      type: "paragraph",
      text: "Then the Profile Remote decides what to render."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Domain team owns its own navigation.",
        "Shell stays simple.",
        "Remote can add internal pages without shell release.",
        "Route ownership is clear."
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "If remotes define routes carelessly, route conflicts can happen."
      ]
    },
    {
      type: "paragraph",
      text: "So route prefixes must be governed."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Hybrid Routing Model"
    },
    {
      type: "paragraph",
      text: "Most production micro frontend systems use a hybrid model."
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns top-level route selection.\nRemote owns nested route behavior."
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
      text: "This model gives the best balance."
    },
    {
      type: "table",
      headers: ["Concern", "Owner"],
      rows: [
        ["Top-level path", "Shell"],
        ["Domain route subtree", "Remote"],
        ["Auth guard", "Shell + Remote"],
        ["Internal tabs/pages", "Remote"],
        ["Fallback route", "Shell"],
        ["Domain redirects", "Remote"],
        ["Global navigation", "Shell"]
      ]
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "The shell should know which domain owns a route, but it should not need to know every internal screen of that domain."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Route Ownership Table"
    },
    {
      type: "paragraph",
      text: "For an e-commerce platform:"
    },
    {
      type: "table",
      headers: ["Route", "Owner", "Remote"],
      rows: [
        ["/", "Shell/Home", "Home Remote"],
        ["/categories/:slug", "Catalog Team", "Catalog Remote"],
        ["/search", "Search Team", "Search Remote"],
        ["/product/:id", "Product Team", "Product Details Remote"],
        ["/cart", "Cart Team", "Cart Remote"],
        ["/checkout/*", "Checkout Team", "Checkout Remote"],
        ["/profile/*", "Profile Team", "Profile Remote"],
        ["/orders/*", "Orders Team", "Orders Remote"],
        ["/campaign/:slug", "Marketing Team", "Marketing Remote"]
      ]
    },
    {
      type: "paragraph",
      text: "This table should be documented."
    },
    {
      type: "paragraph",
      text: "Without route ownership documentation, routing conflicts become common."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Route-Level Remote Loading"
    },
    {
      type: "paragraph",
      text: "Routes often map to remote loading."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /products\n      │\n      ▼\nShell route matcher\n      │\n      ▼\nLoad Catalog Remote\n      │\n      ▼\nRender Catalog page"
    },
    {
      type: "paragraph",
      text: "Runtime loading sequence:"
    },
    {
      type: "diagram",
      diagramType: "sequence",
      content: "User opens /profile/addresses\n      │\n      ▼\nShell loads\n      │\n      ▼\nShell matches /profile/*\n      │\n      ▼\nShell fetches profile remoteEntry.js\n      │\n      ▼\nProfile Remote loads\n      │\n      ▼\nProfile Remote matches /profile/addresses\n      │\n      ▼\nAddress Book page renders"
    },
    {
      type: "paragraph",
      text: "This keeps remote loading lazy and route-driven."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Deep Linking"
    },
    {
      type: "paragraph",
      text: "Deep linking means a user can directly open a URL and land on the correct page."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "https://example.com/categories/shoes?page=2&sort=price"
    },
    {
      type: "paragraph",
      text: "This should work even if the user:"
    },
    {
      type: "list",
      items: [
        "Opens the URL in a new tab",
        "Refreshes the page",
        "Shares the link",
        "Bookmarks the link",
        "Navigates through browser history"
      ]
    },
    {
      type: "paragraph",
      text: "A good micro frontend architecture must support deep linking."
    },
    {
      type: "paragraph",
      text: "Bad behavior:"
    },
    {
      type: "blockquote",
      text: "/products works only if user navigated from homepage."
    },
    {
      type: "paragraph",
      text: "Good behavior:"
    },
    {
      type: "blockquote",
      text: "/products works from direct URL, refresh, bookmark, and shared link."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Deep Linking Flow"
    },
    {
      type: "paragraph",
      text: "Example: user directly opens `/profile/addresses`."
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Browser requests /profile/addresses\n      │\n      ▼\nServer returns Shell App\n      │\n      ▼\nShell reads current route\n      │\n      ▼\nShell matches /profile/*\n      │\n      ▼\nShell loads Profile Remote\n      │\n      ▼\nProfile Remote reads /profile/addresses\n      │\n      ▼\nProfile Remote renders Address Book page"
    },
    {
      type: "paragraph",
      text: "Important requirement:"
    },
    {
      type: "blockquote",
      text: "The server or hosting layer must fallback to the shell app for client-side routes."
    },
    {
      type: "paragraph",
      text: "Otherwise refresh can return 404."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Refresh Handling"
    },
    {
      type: "paragraph",
      text: "Refresh is one of the most common problems."
    },
    {
      type: "paragraph",
      text: "If the user refreshes:"
    },
    {
      type: "code",
      language: "text",
      code: "/profile/addresses"
    },
    {
      type: "paragraph",
      text: "the server must not look for a physical file at that path."
    },
    {
      type: "paragraph",
      text: "Instead, it should return the shell app."
    },
    {
      type: "paragraph",
      text: "Then the shell and remote handle routing in the browser."
    },
    {
      type: "paragraph",
      text: "Expected flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Refresh /profile/addresses\n      │\n      ▼\nServer returns shell index.html\n      │\n      ▼\nShell loads Profile Remote\n      │\n      ▼\nProfile Remote renders Addresses page"
    },
    {
      type: "paragraph",
      text: "If server fallback is missing:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Refresh /profile/addresses\n      │\n      ▼\n404 Not Found"
    },
    {
      type: "paragraph",
      text: "That is a routing infrastructure bug."
    },
    {
      type: "heading",
      level: 2,
      text: "11. URL State"
    },
    {
      type: "paragraph",
      text: "URL state is useful for route-level state."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "/categories/shoes?page=2&sort=price-low-to-high",
        "/search?q=laptop&brand=apple",
        "/orders?status=delivered",
        "/profile/preferences?tab=notifications"
      ]
    },
    {
      type: "paragraph",
      text: "Good URL state:"
    },
    {
      type: "list",
      items: [
        "Search query",
        "Filters",
        "Sorting",
        "Pagination",
        "Selected tab",
        "Category slug",
        "Product ID"
      ]
    },
    {
      type: "paragraph",
      text: "Bad URL state:"
    },
    {
      type: "list",
      items: [
        "Auth token",
        "Payment data",
        "Full cart object",
        "Sensitive user data",
        "Large JSON payload",
        "Private session state"
      ]
    },
    {
      type: "paragraph",
      text: "URL state should be shareable, meaningful, and safe."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Query Params Ownership"
    },
    {
      type: "paragraph",
      text: "The remote that owns the route should own the meaning of its query params."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/shoes?sort=price&page=2"
    },
    {
      type: "paragraph",
      text: "The shell knows:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/:slug → Catalog Remote"
    },
    {
      type: "paragraph",
      text: "The Catalog Remote owns:"
    },
    {
      type: "list",
      items: [
        "sort",
        "page",
        "filter",
        "brand",
        "priceRange"
      ]
    },
    {
      type: "paragraph",
      text: "The shell should not parse every catalog filter."
    },
    {
      type: "paragraph",
      text: "That would make the shell too domain-aware."
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "The shell owns route selection; the remote owns route interpretation."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Nested Routes"
    },
    {
      type: "paragraph",
      text: "Nested routes are common inside remotes."
    },
    {
      type: "paragraph",
      text: "Example: Checkout Remote"
    },
    {
      type: "code",
      language: "text",
      code: "/checkout/address\n/checkout/delivery\n/checkout/payment\n/checkout/review"
    },
    {
      type: "paragraph",
      text: "The shell should usually map:"
    },
    {
      type: "code",
      language: "text",
      code: "/checkout/* → Checkout Remote"
    },
    {
      type: "paragraph",
      text: "Then Checkout Remote owns the internal step routing."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Checkout team can change checkout flow.",
        "Shell does not need release for every step change.",
        "Domain logic stays inside checkout."
      ]
    },
    {
      type: "paragraph",
      text: "But for business-critical flows, route changes should still be governed and tested."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Navigation Between Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Navigation can happen between remotes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote → Product Details Remote\nProduct Details Remote → Cart Remote\nCart Remote → Checkout Remote"
    },
    {
      type: "paragraph",
      text: "Recommended approach:"
    },
    {
      type: "list",
      items: [
        "Use shell/router navigation contract.",
        "Avoid direct remote-to-remote imports.",
        "Use URLs as navigation boundaries."
      ]
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Catalog Remote imports ProductDetails internal navigation function."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Catalog Remote navigates to /product/123.\nShell loads Product Details Remote."
    },
    {
      type: "paragraph",
      text: "This keeps remotes decoupled."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Browser Back and Forward"
    },
    {
      type: "paragraph",
      text: "Browser navigation must work."
    },
    {
      type: "paragraph",
      text: "Example journey:"
    },
    {
      type: "code",
      language: "text",
      code: "/products\n/product/123\n/cart\n/checkout"
    },
    {
      type: "paragraph",
      text: "Back button should go:"
    },
    {
      type: "code",
      language: "text",
      code: "/checkout → /cart → /product/123 → /products"
    },
    {
      type: "paragraph",
      text: "To support this:"
    },
    {
      type: "list",
      items: [
        "Use browser history correctly.",
        "Avoid hidden in-memory route state.",
        "Keep route state in URL where appropriate.",
        "Ensure remotes integrate with shell router."
      ]
    },
    {
      type: "paragraph",
      text: "If each remote creates its own disconnected history incorrectly, browser navigation can break."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Auth Guards and Protected Routes"
    },
    {
      type: "paragraph",
      text: "Some routes require authentication."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "/profile",
        "/orders",
        "/checkout"
      ]
    },
    {
      type: "paragraph",
      text: "Shell can own global auth protection."
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /orders\n      │\n      ▼\nShell checks session\n      │\n      ├── not logged in → redirect to /login?redirect=/orders\n      │\n      └── logged in → load Orders Remote"
    },
    {
      type: "paragraph",
      text: "Remote can own feature-level permission checks."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Orders Remote checks whether user can view this specific order."
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Shell handles authentication bootstrap. Remotes and backend APIs still enforce authorization."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Redirect Handling"
    },
    {
      type: "paragraph",
      text: "Redirects should preserve user intent."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens /checkout\nNot logged in\nRedirect to /login?redirect=/checkout\nAfter login\nReturn to /checkout"
    },
    {
      type: "paragraph",
      text: "This is important for conversion."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "User opens /checkout\nRedirect to login\nAfter login goes to homepage\nCart flow is lost"
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Return user to original route after successful login."
    },
    {
      type: "paragraph",
      text: "Redirect logic should be consistent across remotes."
    },
    {
      type: "paragraph",
      text: "The shell is usually the right place for global redirect rules."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Route Conflicts"
    },
    {
      type: "paragraph",
      text: "Route conflicts happen when two remotes claim the same path."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote claims /products/*\nProduct Remote also claims /products/:id"
    },
    {
      type: "paragraph",
      text: "This creates ambiguity."
    },
    {
      type: "paragraph",
      text: "Avoid with:"
    },
    {
      type: "list",
      items: [
        "Central route registry",
        "Route ownership documentation",
        "Route naming conventions",
        "CI checks for duplicate routes",
        "Platform review for new top-level routes"
      ]
    },
    {
      type: "paragraph",
      text: "Good ownership:"
    },
    {
      type: "blockquote",
      text: "/categories/* → Catalog Remote\n/product/:id → Product Details Remote"
    },
    {
      type: "paragraph",
      text: "Bad ownership:"
    },
    {
      type: "blockquote",
      text: "/products/* → multiple remotes"
    },
    {
      type: "heading",
      level: 2,
      text: "19. Route Registry"
    },
    {
      type: "paragraph",
      text: "A route registry documents route ownership."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"/\": {\n    \"owner\": \"home-team\",\n    \"remote\": \"homeApp\"\n  },\n  \"/categories/*\": {\n    \"owner\": \"catalog-team\",\n    \"remote\": \"catalogApp\"\n  },\n  \"/product/:id\": {\n    \"owner\": \"product-team\",\n    \"remote\": \"productApp\"\n  },\n  \"/cart\": {\n    \"owner\": \"cart-team\",\n    \"remote\": \"cartApp\"\n  },\n  \"/checkout/*\": {\n    \"owner\": \"checkout-team\",\n    \"remote\": \"checkoutApp\"\n  }\n}"
    },
    {
      type: "paragraph",
      text: "A route registry helps with:"
    },
    {
      type: "list",
      items: [
        "Ownership",
        "Documentation",
        "Conflict prevention",
        "Remote loading",
        "Monitoring",
        "SEO planning",
        "Testing"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "20. Fallback Routes"
    },
    {
      type: "paragraph",
      text: "Fallback routes are important."
    },
    {
      type: "paragraph",
      text: "Types of fallback:"
    },
    {
      type: "list",
      items: [
        "404 route",
        "Remote loading failure fallback",
        "Unauthorized fallback",
        "Deprecated route redirect",
        "Maintenance fallback"
      ]
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Unknown route → 404 page",
        "Cart remote fails → Cart unavailable fallback",
        "Unauthenticated user → login redirect",
        "Old route → redirect to new route"
      ]
    },
    {
      type: "paragraph",
      text: "A shell should handle global fallback behavior."
    },
    {
      type: "paragraph",
      text: "Remotes can handle domain-specific fallback states."
    },
    {
      type: "heading",
      level: 2,
      text: "21. SEO Considerations"
    },
    {
      type: "paragraph",
      text: "SEO matters for public pages like:"
    },
    {
      type: "list",
      items: [
        "Home",
        "Category pages",
        "Product pages",
        "Marketing landing pages",
        "Content pages"
      ]
    },
    {
      type: "paragraph",
      text: "SEO may be less important for:"
    },
    {
      type: "list",
      items: [
        "Cart",
        "Checkout",
        "Profile",
        "Orders",
        "Admin pages"
      ]
    },
    {
      type: "paragraph",
      text: "If SEO is important, consider:"
    },
    {
      type: "list",
      items: [
        "Server-side rendering",
        "Static rendering",
        "Edge composition",
        "Metadata ownership",
        "Canonical URLs",
        "Structured data",
        "Fast LCP"
      ]
    },
    {
      type: "paragraph",
      text: "Micro frontends can support SEO, but runtime-only client rendering may not be enough for all pages."
    },
    {
      type: "paragraph",
      text: "For e-commerce, category and product pages often need stronger SEO handling."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Route Metadata Ownership"
    },
    {
      type: "paragraph",
      text: "Routes often need metadata:"
    },
    {
      type: "list",
      items: [
        "Title",
        "Description",
        "Canonical URL",
        "Open Graph tags",
        "Breadcrumbs",
        "Structured data"
      ]
    },
    {
      type: "paragraph",
      text: "Ownership should follow domain."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "Catalog Remote owns category metadata.",
        "Product Remote owns product metadata.",
        "Marketing Remote owns campaign metadata."
      ]
    },
    {
      type: "paragraph",
      text: "The shell may provide the mechanism to set metadata, but the remote owns the domain data."
    },
    {
      type: "paragraph",
      text: "Rule:"
    },
    {
      type: "blockquote",
      text: "Platform provides metadata infrastructure; domain remote provides metadata content."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Analytics and Routing"
    },
    {
      type: "paragraph",
      text: "Route changes should be tracked consistently."
    },
    {
      type: "paragraph",
      text: "Shell can track:"
    },
    {
      type: "list",
      items: [
        "Page views",
        "Route transitions",
        "Remote loaded",
        "Remote load time",
        "Remote load failure",
        "Shell version",
        "Remote version"
      ]
    },
    {
      type: "paragraph",
      text: "Remotes can track domain events:"
    },
    {
      type: "list",
      items: [
        "catalog:filter-applied",
        "product:add-to-cart-clicked",
        "cart:quantity-changed",
        "checkout:payment-submitted"
      ]
    },
    {
      type: "paragraph",
      text: "This avoids inconsistent analytics across remotes."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Testing Routing"
    },
    {
      type: "paragraph",
      text: "Routing must be tested."
    },
    {
      type: "paragraph",
      text: "Test cases:"
    },
    {
      type: "list",
      items: [
        "Direct open /profile/addresses works.",
        "Refresh /profile/addresses works.",
        "Back/forward navigation works.",
        "Auth redirect preserves original route.",
        "Unknown route shows 404.",
        "Remote load failure shows fallback.",
        "Nested remote route renders correctly.",
        "Route conflict checks pass.",
        "SEO metadata renders for public pages."
      ]
    },
    {
      type: "paragraph",
      text: "Testing deep links is especially important."
    },
    {
      type: "paragraph",
      text: "Do not test only navigation clicks from homepage."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Common Routing Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Shell knows every internal remote screen", "Shell becomes too coupled"],
        ["Remotes claim overlapping routes", "Route conflicts"],
        ["No refresh fallback", "Deep links break"],
        ["State kept only in memory", "Shared links fail"],
        ["Query params parsed by shell for all domains", "Shell becomes domain-aware"],
        ["Direct remote-to-remote navigation imports", "Coupling"],
        ["No route registry", "Ownership confusion"],
        ["No auth redirect preservation", "Bad user experience"],
        ["Client-only rendering for SEO-critical pages", "Poor discoverability"],
        ["No route-level monitoring", "Debugging route issues is hard"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "26. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. Who should own routing in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Usually the shell owns top-level routing, while each remote owns nested routing inside its domain. This prevents route conflicts while allowing domain teams to control their internal navigation."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. How do you support deep links?"
    },
    {
      type: "paragraph",
      text: "The server should fallback to the shell app for client-side routes. The shell should match the top-level route, load the correct remote, and the remote should interpret its nested path and query parameters."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. How do you avoid route conflicts?"
    },
    {
      type: "paragraph",
      text: "Use a central route registry, route ownership documentation, naming conventions, and CI checks to prevent multiple remotes from claiming the same route."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How should URL query params be handled?"
    },
    {
      type: "paragraph",
      text: "The remote that owns the route should usually own the meaning of its query params. For example, Catalog Remote should interpret filter, sort, and pagination params for category pages."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How do you handle protected routes?"
    },
    {
      type: "paragraph",
      text: "The shell should handle authentication bootstrap and global route guards. Remotes should handle feature-level authorization, and backend APIs must enforce real authorization."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. How do you handle navigation between remotes?"
    },
    {
      type: "paragraph",
      text: "Use URL-based navigation through the shell/router. A remote should navigate to a route like /product/123 or /cart, and the shell should load the appropriate remote. Avoid direct imports between remotes."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“How would you design routing in a micro frontend architecture?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would use a hybrid routing model. The shell would own top-level routes and decide which remote to load. For example, /categories/* loads the Catalog Remote, /cart loads the Cart Remote, and /checkout/* loads the Checkout Remote.\n\nInside each domain, the remote would own nested routing. For example, the Checkout Remote can own /checkout/address, /checkout/payment, and /checkout/review.\n\nFor deep linking, the server should always return the shell app for client-side routes. Then the shell matches the route, loads the correct remote, and the remote renders the correct nested page. Query params like filters, sorting, and pagination should be owned by the remote that owns the route.\n\nI would also maintain a route registry to avoid conflicts, use auth guards in the shell for protected routes, preserve redirect URLs after login, and test direct URL access, refresh, browser back/forward, and fallback behavior.\n\nThe key principle is that the shell owns route selection, while remotes own route interpretation."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Final Routing Checklist"
    },
    {
      type: "checklist",
      items: [
        "Does the shell own top-level routes?",
        "Do remotes own nested routes?",
        "Is every route mapped to one owner?",
        "Is there a route registry?",
        "Do deep links work?",
        "Does refresh work?",
        "Does browser back/forward work?",
        "Are query params owned by the correct remote?",
        "Are protected routes guarded?",
        "Does login redirect preserve original URL?",
        "Are route conflicts prevented?",
        "Are unknown routes handled?",
        "Are remote loading failures handled?",
        "Is SEO considered for public routes?",
        "Are route transitions observable?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "29. Summary"
    },
    {
      type: "paragraph",
      text: "Routing in micro frontends should be simple, explicit, and ownership-driven."
    },
    {
      type: "paragraph",
      text: "Recommended model:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns top-level routing.\nRemotes own nested domain routing.\nURLs are the boundary between domains.\nDeep links and refresh must work.\nQuery params belong to the route owner.\nProtected routes need shell auth and remote/backend authorization."
    },
    {
      type: "paragraph",
      text: "The strongest takeaway:"
    },
    {
      type: "blockquote",
      text: "The shell should own route selection, and the remote should own route interpretation."
    },
    {
      type: "paragraph",
      text: "This keeps routing predictable without turning the shell into a domain-aware monolith."
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
