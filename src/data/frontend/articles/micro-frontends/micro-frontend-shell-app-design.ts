import type { FrontendArticle } from "../../articles";

export const microFrontendShellAppDesign: FrontendArticle = {
  slug: "micro-frontend-shell-app-design",
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
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "The shell app is one of the most important parts of a micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "It is also one of the easiest parts to design badly."
    },
    {
      type: "paragraph",
      text: "A good shell app gives users one seamless product experience while allowing multiple teams to own and deploy their domain apps independently."
    },
    {
      type: "paragraph",
      text: "A bad shell app becomes a new frontend monolith."
    },
    {
      type: "paragraph",
      text: "The most important principle is:"
    },
    {
      type: "blockquote",
      text: "The shell should coordinate composition, not own every domain’s business logic."
    },
    {
      type: "paragraph",
      text: "This article explains how to design a production-ready shell app for micro frontends, what it should own, what it should not own, and how to explain it in senior frontend interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "1. What Is the Shell App?"
    },
    {
      type: "paragraph",
      text: "The shell app is the main container application in a micro frontend system."
    },
    {
      type: "paragraph",
      text: "It is sometimes called:"
    },
    {
      type: "code",
      language: "text",
      code: "Host app\nContainer app\nPlatform app\nComposition app\nRoot app"
    },
    {
      type: "paragraph",
      text: "Its job is to compose multiple independently owned frontend applications into one user experience."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Header\n├── Navigation\n├── Auth Bootstrap\n├── Route Config\n├── Remote Loader\n├── Error Boundaries\n└── Loads:\n    ├── Catalog Remote\n    ├── Cart Remote\n    ├── Checkout Remote\n    ├── Profile Remote\n    └── Orders Remote"
    },
    {
      type: "paragraph",
      text: "The shell is the entry point that users load first."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Why the Shell Exists"
    },
    {
      type: "paragraph",
      text: "Without a shell, each micro frontend would feel like a separate product."
    },
    {
      type: "paragraph",
      text: "The shell provides:"
    },
    {
      type: "code",
      language: "text",
      code: "One application frame\nOne navigation model\nOne authentication bootstrap\nOne top-level routing system\nOne remote loading strategy\nOne global error handling strategy\nOne consistent user journey"
    },
    {
      type: "paragraph",
      text: "The shell gives users continuity while teams remain independent internally."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "The shell creates a unified product experience from independently owned frontend domains."
    },
    {
      type: "heading",
      level: 2,
      text: "3. High-Level Shell Architecture"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: "                    ┌──────────────────────┐\n                    │       Browser         │\n                    └──────────┬───────────┘\n                               │\n                               ▼\n                    ┌──────────────────────┐\n                    │      Shell App        │\n                    │ Layout/Auth/Routing   │\n                    └──────────┬───────────┘\n                               │\n        ┌──────────────────────┼──────────────────────┐\n        │                      │                      │\n        ▼                      ▼                      ▼\n┌───────────────┐      ┌───────────────┐      ┌───────────────┐\n│ Catalog Remote│      │ Cart Remote   │      │ Checkout Remote│\n└───────────────┘      └───────────────┘      └───────────────┘"
    },
    {
      type: "paragraph",
      text: "The shell does not need to own all business logic."
    },
    {
      type: "paragraph",
      text: "It owns the composition layer."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Core Responsibilities of the Shell"
    },
    {
      type: "paragraph",
      text: "The shell usually owns platform-level responsibilities:"
    },
    {
      type: "code",
      language: "text",
      code: "Global layout\nTop-level routing\nNavigation\nAuthentication bootstrap\nRemote loading\nFeature flag bootstrap\nGlobal error boundaries\nFallback UI\nAnalytics initialization\nDesign system provider\nTheme and locale providers\nRemote manifest loading\nVersion awareness"
    },
    {
      type: "paragraph",
      text: "These are cross-cutting platform concerns."
    },
    {
      type: "paragraph",
      text: "They are not domain-specific business rules."
    },
    {
      type: "heading",
      level: 2,
      text: "5. What the Shell Should Own"
    },
    {
      type: "heading",
      level: 3,
      text: "5.1 Global Layout"
    },
    {
      type: "paragraph",
      text: "The shell can own:"
    },
    {
      type: "code",
      language: "text",
      code: "Header\nFooter\nSidebar\nGlobal navigation\nPage frame\nGlobal notification area"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell Layout\n├── Header\n├── Main Content Slot\n├── Footer\n└── Toast Region"
    },
    {
      type: "paragraph",
      text: "The remote renders inside the content slot."
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n└── Main Content Slot\n    └── Catalog Remote"
    },
    {
      type: "paragraph",
      text: "This keeps the user experience consistent."
    },
    {
      type: "heading",
      level: 3,
      text: "5.2 Top-Level Routing"
    },
    {
      type: "paragraph",
      text: "The shell should usually own top-level route decisions."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/                         → Home Remote\n/categories/:slug         → Catalog Remote\n/search                   → Search Remote\n/product/:id              → Product Details Remote\n/cart                     → Cart Remote\n/checkout                 → Checkout Remote\n/profile                  → Profile Remote\n/orders                   → Orders Remote"
    },
    {
      type: "paragraph",
      text: "The shell decides which remote should load for each top-level route."
    },
    {
      type: "paragraph",
      text: "The remote can own nested routes inside its domain."
    },
    {
      type: "code",
      language: "text",
      code: "Profile Remote owns:\n/profile/details\n/profile/addresses\n/profile/preferences"
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "The shell owns top-level routing, while remotes own domain-level routing."
    },
    {
      type: "heading",
      level: 3,
      text: "5.3 Authentication Bootstrap"
    },
    {
      type: "paragraph",
      text: "The shell usually initializes authentication."
    },
    {
      type: "paragraph",
      text: "It can own:"
    },
    {
      type: "code",
      language: "text",
      code: "Login detection\nSession bootstrap\nToken refresh\nLogout handling\nAuth provider setup\nGlobal auth guard\nIdentity context"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell starts\n  │\n  ▼\nCheck session\n  │\n  ▼\nLoad identity summary\n  │\n  ▼\nRender protected route\n  │\n  ▼\nPass safe identity context to remote"
    },
    {
      type: "paragraph",
      text: "But the shell should not be the only authorization layer."
    },
    {
      type: "paragraph",
      text: "Remotes and backend APIs must still enforce feature/domain authorization."
    },
    {
      type: "heading",
      level: 3,
      text: "5.4 Remote Loading"
    },
    {
      type: "paragraph",
      text: "The shell loads remotes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens /cart\n      │\n      ▼\nShell matches /cart route\n      │\n      ▼\nShell reads remote manifest\n      │\n      ▼\nShell loads cart remoteEntry.js\n      │\n      ▼\nCart Remote renders"
    },
    {
      type: "paragraph",
      text: "The shell should handle:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote URL resolution\nRemote version lookup\nLoading state\nTimeout\nError handling\nFallback UI\nRetry if appropriate"
    },
    {
      type: "paragraph",
      text: "This is one of the shell’s most important production responsibilities."
    },
    {
      type: "heading",
      level: 3,
      text: "5.5 Error Boundaries"
    },
    {
      type: "paragraph",
      text: "Each remote should be wrapped in an error boundary."
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Catalog Remote\n│   └── Error Boundary\n├── Cart Remote\n│   └── Error Boundary\n└── Checkout Remote\n    └── Error Boundary"
    },
    {
      type: "paragraph",
      text: "If a remote fails, the shell should not go blank."
    },
    {
      type: "paragraph",
      text: "Expected behavior:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote fails\n      │\n      ▼\nShell catches error\n      │\n      ▼\nFallback UI shown\n      │\n      ▼\nError logged with remote name/version\n      │\n      ▼\nHeader and navigation remain usable"
    },
    {
      type: "heading",
      level: 3,
      text: "5.6 Feature Flag Bootstrap"
    },
    {
      type: "paragraph",
      text: "The shell can initialize the feature flag client."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell loads user context\n      │\n      ▼\nShell initializes feature flags\n      │\n      ▼\nRemote receives relevant flag context"
    },
    {
      type: "paragraph",
      text: "Feature flags may control:"
    },
    {
      type: "code",
      language: "text",
      code: "Which remote version is loaded\nWhether a new remote is enabled\nWhether a new checkout step is shown\nCanary rollout percentage\nKill switch behavior"
    },
    {
      type: "paragraph",
      text: "But domain-specific feature behavior should still live inside the owning remote."
    },
    {
      type: "heading",
      level: 3,
      text: "5.7 Global Analytics Initialization"
    },
    {
      type: "paragraph",
      text: "The shell can initialize analytics."
    },
    {
      type: "paragraph",
      text: "It can own:"
    },
    {
      type: "code",
      language: "text",
      code: "Analytics SDK setup\nPage view tracking\nRoute transition tracking\nGlobal user/session fields\nRemote version metadata"
    },
    {
      type: "paragraph",
      text: "Remotes can emit domain events:"
    },
    {
      type: "code",
      language: "text",
      code: "catalog:product-clicked\ncart:item-added\ncheckout:completed\nprofile:address-updated"
    },
    {
      type: "paragraph",
      text: "The shell/platform layer can normalize and send them."
    },
    {
      type: "paragraph",
      text: "This avoids every remote implementing analytics differently."
    },
    {
      type: "heading",
      level: 3,
      text: "5.8 Design System Provider"
    },
    {
      type: "paragraph",
      text: "The shell can provide global design system context:"
    },
    {
      type: "code",
      language: "text",
      code: "Theme\nColor mode\nTypography baseline\nLocale\nDirection\nGlobal CSS reset\nDesign tokens"
    },
    {
      type: "paragraph",
      text: "But remotes should still import and use the design system correctly."
    },
    {
      type: "paragraph",
      text: "The shell should not manually style each remote’s domain UI."
    },
    {
      type: "heading",
      level: 2,
      text: "6. What the Shell Should Not Own"
    },
    {
      type: "paragraph",
      text: "A shell becomes dangerous when it starts owning domain logic."
    },
    {
      type: "paragraph",
      text: "The shell should not own:"
    },
    {
      type: "code",
      language: "text",
      code: "Product filtering logic\nCart calculation logic\nCheckout validation rules\nPayment flow logic\nOrder history business rules\nProfile form business logic\nSearch ranking logic\nPromotion rules"
    },
    {
      type: "paragraph",
      text: "Bad shell:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Header\n├── Routing\n├── Auth\n├── Cart calculation\n├── Checkout rules\n├── Product filters\n├── Search business logic\n└── Order history logic"
    },
    {
      type: "paragraph",
      text: "This is just a new monolith."
    },
    {
      type: "paragraph",
      text: "Good shell:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Layout\n├── Routing\n├── Auth bootstrap\n├── Remote loading\n├── Error boundaries\n├── Feature flags\n└── Analytics bootstrap"
    },
    {
      type: "paragraph",
      text: "Domain logic remains inside remotes or backend services."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Shell vs Remote Responsibility Table"
    },
    {
      type: "table",
      headers: ["Concern", "Shell Owns", "Remote Owns"],
      rows: [
        ["Global layout", "Yes", "No"],
        ["Top-level routing", "Yes", "No"],
        ["Nested domain routing", "No", "Yes"],
        ["Auth bootstrap", "Yes", "No"],
        ["Feature-level authorization", "No", "Yes"],
        ["Product filters", "No", "Catalog Remote"],
        ["Cart business logic", "No", "Cart Remote"],
        ["Checkout steps", "No", "Checkout Remote"],
        ["Remote loading", "Yes", "No"],
        ["Error boundary wrapper", "Yes", "Remote can add local boundaries too"],
        ["Domain API calls", "No", "Yes"],
        ["Global analytics setup", "Yes", "Domain events"],
        ["Design system usage", "Provides context", "Uses components"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "8. Shell Routing Design"
    },
    {
      type: "paragraph",
      text: "A typical route map:"
    },
    {
      type: "code",
      language: "text",
      code: "const routeMap = {\n  \"/\": \"homeApp\",\n  \"/categories/:slug\": \"catalogApp\",\n  \"/search\": \"searchApp\",\n  \"/product/:id\": \"productApp\",\n  \"/cart\": \"cartApp\",\n  \"/checkout\": \"checkoutApp\",\n  \"/profile/*\": \"profileApp\",\n  \"/orders/*\": \"ordersApp\"\n}"
    },
    {
      type: "paragraph",
      text: "The shell maps routes to remotes."
    },
    {
      type: "paragraph",
      text: "Then the selected remote handles domain UI."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/profile/addresses\n      │\n      ▼\nShell matches /profile/*\n      │\n      ▼\nShell loads Profile Remote\n      │\n      ▼\nProfile Remote renders Addresses page"
    },
    {
      type: "paragraph",
      text: "This gives predictable ownership."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Shell Remote Manifest Design"
    },
    {
      type: "paragraph",
      text: "The shell should not hardcode every remote URL forever."
    },
    {
      type: "paragraph",
      text: "A manifest-based model is often better."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"catalogApp\": {\n    \"version\": \"2.3.1\",\n    \"url\": \"https://cdn.company.com/catalog/2.3.1/remoteEntry.js\",\n    \"owner\": \"catalog-team\"\n  },\n  \"cartApp\": {\n    \"version\": \"1.8.4\",\n    \"url\": \"https://cdn.company.com/cart/1.8.4/remoteEntry.js\",\n    \"owner\": \"cart-team\"\n  },\n  \"checkoutApp\": {\n    \"version\": \"1.4.2\",\n    \"url\": \"https://cdn.company.com/checkout/1.4.2/remoteEntry.js\",\n    \"owner\": \"checkout-team\"\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "code",
      language: "text",
      code: "Version visibility\nRollback support\nEnvironment promotion\nCanary rollout\nRemote ownership tracking"
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "The shell should know which remote to load, but not the internal implementation of that remote."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Shell Loading States"
    },
    {
      type: "paragraph",
      text: "Remote loading should have good UX."
    },
    {
      type: "paragraph",
      text: "Possible states:"
    },
    {
      type: "code",
      language: "text",
      code: "Idle\nLoading remote\nRemote loaded\nRemote failed\nRemote timed out\nFallback shown\nRetrying"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens /cart\n      │\n      ▼\nShell shows cart skeleton\n      │\n      ▼\nCart remote loads\n      │\n      ▼\nCart page renders"
    },
    {
      type: "paragraph",
      text: "For slow remotes, use skeletons."
    },
    {
      type: "paragraph",
      text: "For failed remotes, use fallback UI."
    },
    {
      type: "paragraph",
      text: "For critical remotes, consider retry and rollback."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Fallback UI Design"
    },
    {
      type: "paragraph",
      text: "Fallback UI should match business criticality."
    },
    {
      type: "heading",
      level: 3,
      text: "Marketing Remote Fails"
    },
    {
      type: "blockquote",
      text: "This section is temporarily unavailable."
    },
    {
      type: "heading",
      level: 3,
      text: "Catalog Remote Fails"
    },
    {
      type: "blockquote",
      text: "We are having trouble loading products. Please refresh or try again."
    },
    {
      type: "heading",
      level: 3,
      text: "Cart Remote Fails"
    },
    {
      type: "blockquote",
      text: "Cart is temporarily unavailable. Your items are safe. Please try again."
    },
    {
      type: "heading",
      level: 3,
      text: "Checkout Remote Fails"
    },
    {
      type: "blockquote",
      text: "We are unable to load checkout right now. Your cart is saved. Please try again shortly."
    },
    {
      type: "paragraph",
      text: "Checkout fallback should be more careful because it affects revenue."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Shell Error Logging"
    },
    {
      type: "paragraph",
      text: "When a remote fails, the shell should log enough context."
    },
    {
      type: "paragraph",
      text: "Log fields:"
    },
    {
      type: "code",
      language: "text",
      code: "remoteName\nremoteVersion\nshellVersion\nroute\nerrorType\nchunkUrl\nmanifestVersion\nuserJourney\nteamOwner\ntimestamp"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"remoteName\": \"cartApp\",\n  \"remoteVersion\": \"1.8.4\",\n  \"shellVersion\": \"3.2.0\",\n  \"route\": \"/cart\",\n  \"errorType\": \"ChunkLoadError\",\n  \"teamOwner\": \"cart-team\"\n}"
    },
    {
      type: "paragraph",
      text: "This makes incidents actionable."
    },
    {
      type: "paragraph",
      text: "Bad log:"
    },
    {
      type: "blockquote",
      text: "Frontend error occurred."
    },
    {
      type: "paragraph",
      text: "Good log:"
    },
    {
      type: "blockquote",
      text: "cartApp v1.8.4 failed to load on /cart due to ChunkLoadError."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Shell and Shared State"
    },
    {
      type: "paragraph",
      text: "The shell should own only small platform-level state."
    },
    {
      type: "paragraph",
      text: "Appropriate shell state:"
    },
    {
      type: "code",
      language: "text",
      code: "Auth identity summary\nTheme\nLocale\nFeature flags\nGlobal notifications\nNavigation state\nExperiment assignment"
    },
    {
      type: "paragraph",
      text: "Avoid putting domain state in the shell:"
    },
    {
      type: "code",
      language: "text",
      code: "Full cart state\nCheckout form data\nProduct filters\nSearch results\nOrder history\nPayment state"
    },
    {
      type: "paragraph",
      text: "State ownership table:"
    },
    {
      type: "table",
      headers: ["State", "Owner"],
      rows: [
        ["Theme", "Shell"],
        ["Locale", "Shell"],
        ["Auth summary", "Shell/auth provider"],
        ["Cart", "Cart API + Cart Remote"],
        ["Checkout", "Checkout API/session + Checkout Remote"],
        ["Product filters", "URL + Catalog Remote"],
        ["Search results", "Search Remote"],
        ["Orders", "Orders Remote"]
      ]
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "The shell should not become a global state dumping ground."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Shell and Communication"
    },
    {
      type: "paragraph",
      text: "The shell can mediate simple global communication."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Cart Remote emits cart:updated\n      │\n      ▼\nShell Header updates cart badge"
    },
    {
      type: "paragraph",
      text: "This is fine because the shell owns the header."
    },
    {
      type: "paragraph",
      text: "But avoid this:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote asks Shell to update Checkout business rules\nCheckout Remote reads Catalog internal state through Shell\nCart Remote stores full cart in Shell"
    },
    {
      type: "paragraph",
      text: "The shell should coordinate cross-cutting UI, not become a hidden service layer."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Shell and Auth Flow"
    },
    {
      type: "paragraph",
      text: "Auth flow example:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens /orders\n      │\n      ▼\nShell checks session\n      │\n      ├── not logged in → redirect to login\n      │\n      └── logged in → load Orders Remote\n                           │\n                           ▼\n                    Orders Remote checks permissions"
    },
    {
      type: "paragraph",
      text: "The shell handles global authentication."
    },
    {
      type: "paragraph",
      text: "The remote handles feature-specific authorization."
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Backend APIs must still enforce authorization. Frontend checks are not security boundaries."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Shell and Feature Flags"
    },
    {
      type: "paragraph",
      text: "The shell can initialize flags and pass safe context to remotes."
    },
    {
      type: "paragraph",
      text: "Flag types:"
    },
    {
      type: "code",
      language: "text",
      code: "Platform flags\nRemote enable/disable flags\nExperiment flags\nPermission flags\nKill-switch flags\nCanary rollout flags"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "checkout_new_payment_step = true\ncart_drawer_v2_enabled = false\ncatalog_remote_rollout = 25%"
    },
    {
      type: "paragraph",
      text: "Shell-level use:"
    },
    {
      type: "code",
      language: "text",
      code: "Should this remote load?\nWhich version should load?\nShould fallback route be used?"
    },
    {
      type: "paragraph",
      text: "Remote-level use:"
    },
    {
      type: "code",
      language: "text",
      code: "Should this domain feature appear?\nShould this component use new behavior?"
    },
    {
      type: "heading",
      level: 2,
      text: "17. Shell and Performance"
    },
    {
      type: "paragraph",
      text: "The shell strongly affects performance."
    },
    {
      type: "paragraph",
      text: "Performance risks:"
    },
    {
      type: "code",
      language: "text",
      code: "Loading all remotes upfront\nLarge shared shell bundle\nDuplicate dependencies\nRemote loading waterfall\nBlocking auth before any UI appears\nNo preloading strategy"
    },
    {
      type: "paragraph",
      text: "Good practices:"
    },
    {
      type: "code",
      language: "text",
      code: "Lazy load route remotes\nPreload likely next remotes\nKeep shell bundle small\nShare React safely\nTrack remote load time\nAvoid loading all domain code in shell\nUse skeletons for remote loading"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "User adds item to cart\n      │\n      ▼\nShell preloads Cart Remote\n      │\n      ▼\nUser opens cart faster"
    },
    {
      type: "paragraph",
      text: "For checkout:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens cart\n      │\n      ▼\nShell preloads Checkout Remote"
    },
    {
      type: "heading",
      level: 2,
      text: "18. Shell Bundle Size"
    },
    {
      type: "paragraph",
      text: "The shell should stay lightweight."
    },
    {
      type: "paragraph",
      text: "It should include:"
    },
    {
      type: "code",
      language: "text",
      code: "Routing\nLayout\nAuth bootstrap\nRemote loader\nPlatform providers\nError boundaries"
    },
    {
      type: "paragraph",
      text: "It should not include:"
    },
    {
      type: "code",
      language: "text",
      code: "Every remote’s components\nAll domain business logic\nAll product listing code\nAll checkout code\nAll cart code"
    },
    {
      type: "paragraph",
      text: "If the shell bundle becomes huge, micro frontends lose their performance benefit."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Shell Security Responsibilities"
    },
    {
      type: "paragraph",
      text: "The shell should enforce safe loading rules."
    },
    {
      type: "paragraph",
      text: "Security concerns:"
    },
    {
      type: "code",
      language: "text",
      code: "Only load trusted remote origins\nUse HTTPS\nValidate manifest source\nAvoid exposing secrets\nUse Content Security Policy where possible\nDo not pass tokens through browser events\nProtect auth context"
    },
    {
      type: "paragraph",
      text: "Remember:"
    },
    {
      type: "blockquote",
      text: "A remote is executable JavaScript loaded into the user’s browser."
    },
    {
      type: "paragraph",
      text: "The shell should never load arbitrary remote URLs from untrusted sources."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Shell Testing Strategy"
    },
    {
      type: "paragraph",
      text: "Test the shell separately."
    },
    {
      type: "paragraph",
      text: "Shell tests should cover:"
    },
    {
      type: "code",
      language: "text",
      code: "Route matching\nRemote loading\nRemote fallback\nAuth guard\nFeature flag bootstrap\nLayout rendering\nError boundary behavior\nManifest parsing\nRemote version logging\nNavigation behavior"
    },
    {
      type: "paragraph",
      text: "Important integration tests:"
    },
    {
      type: "code",
      language: "text",
      code: "/cart loads Cart Remote\n/cart shows fallback if Cart Remote fails\n/checkout requires authenticated user\n/profile deep link loads Profile Remote\nremote manifest missing entry shows safe error"
    },
    {
      type: "paragraph",
      text: "The shell must be extremely reliable because every route depends on it."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Shell Observability"
    },
    {
      type: "paragraph",
      text: "The shell should capture remote runtime information."
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote load success\nRemote load failure\nRemote load duration\nFallback shown\nRemote version\nShell version\nRoute\nUser journey\nChunk load errors\nManifest fetch errors"
    },
    {
      type: "paragraph",
      text: "Example dashboard:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell Dashboard\n├── Remote load failure rate\n├── Route-level fallback count\n├── Manifest health\n├── Active remote versions\n├── Shell runtime errors\n└── Web Vitals by route"
    },
    {
      type: "paragraph",
      text: "The shell is the best place to observe composition health."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Shell Ownership"
    },
    {
      type: "paragraph",
      text: "The shell should usually be owned by a platform team."
    },
    {
      type: "paragraph",
      text: "Platform team owns:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell architecture\nRemote loading standards\nRoute standards\nManifest format\nAuth bootstrap\nFeature flag bootstrap\nObservability standards\nFallback patterns\nShared dependency policy"
    },
    {
      type: "paragraph",
      text: "Domain teams own their remotes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "table",
      headers: ["Team", "Owns"],
      rows: [
        ["Platform Team", "Shell App"],
        ["Catalog Team", "Catalog Remote"],
        ["Cart Team", "Cart Remote"],
        ["Checkout Team", "Checkout Remote"],
        ["Design System Team", "UI library and tokens"]
      ]
    },
    {
      type: "paragraph",
      text: "This prevents ownership confusion."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Shell Governance"
    },
    {
      type: "paragraph",
      text: "The shell should enforce platform rules."
    },
    {
      type: "paragraph",
      text: "Governance areas:"
    },
    {
      type: "code",
      language: "text",
      code: "Route naming conventions\nRemote naming conventions\nManifest format\nShared dependency policy\nFallback UI requirements\nAuth integration rules\nAnalytics event standards\nPerformance budgets\nSecurity rules\nObservability fields"
    },
    {
      type: "paragraph",
      text: "But the shell should not block every domain release unnecessarily."
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "The shell should enable safe autonomy, not centralize all decisions."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Shell Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Shell owns all business logic", "Becomes a new monolith"],
        ["Shell stores full cart/checkout state", "Tight coupling"],
        ["Shell imports remote internals", "Breaks ownership"],
        ["Shell loads every remote upfront", "Performance issue"],
        ["Shell has no fallback UI", "One remote failure breaks product"],
        ["Shell hardcodes all versions forever", "Poor deployment flexibility"],
        ["Shell allows untrusted remote URLs", "Security risk"],
        ["Shell becomes release bottleneck", "Defeats micro frontend purpose"],
        ["Shell ignores observability", "Debugging becomes hard"],
        ["Shell owns design system implementation", "Confuses platform and UI library roles"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "25. Shell Design Decision Table"
    },
    {
      type: "table",
      headers: ["Decision", "Recommended Choice", "Why"],
      rows: [
        ["Routing", "Shell owns top-level routes", "Prevents route conflicts"],
        ["Nested routes", "Remote-owned", "Preserves domain ownership"],
        ["Auth", "Shell bootstrap", "Consistent login/session"],
        ["Authorization", "Remote + backend", "Domain-specific control"],
        ["State", "Platform state only", "Avoids shell monolith"],
        ["Remote loading", "Manifest-based", "Supports rollback/versioning"],
        ["Fallback", "Required per remote", "Failure isolation"],
        ["Analytics", "Shell initializes", "Consistent instrumentation"],
        ["Business logic", "Remote/backend", "Clear ownership"],
        ["Observability", "Shell captures remote health", "Faster debugging"]
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
      text: "Q1. What is the shell app in micro frontends?"
    },
    {
      type: "paragraph",
      text: "The shell app is the host/container application that provides global layout, top-level routing, authentication bootstrap, remote loading, error boundaries, and a unified user experience. It composes independently owned remotes into one product."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. What should the shell own?"
    },
    {
      type: "paragraph",
      text: "The shell should own platform-level concerns such as global layout, top-level routing, auth bootstrap, feature flag bootstrap, remote loading, fallback UI, global analytics initialization, and error boundaries."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. What should not live in the shell?"
    },
    {
      type: "paragraph",
      text: "Domain business logic should not live in the shell. Product filters, cart calculations, checkout rules, payment logic, and profile business rules should stay inside remotes or backend services."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How do you prevent the shell from becoming a monolith?"
    },
    {
      type: "paragraph",
      text: "Keep the shell focused on composition concerns. Enforce clear ownership boundaries, avoid domain state in the shell, avoid importing remote internals, and keep business logic inside domain remotes or backend APIs."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How should the shell handle remote failure?"
    },
    {
      type: "paragraph",
      text: "The shell should wrap remotes in error boundaries, show fallback UI, keep global navigation alive, log errors with remote name/version/route, and support retry or rollback for critical flows."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. Should the shell own authentication?"
    },
    {
      type: "paragraph",
      text: "The shell should usually own authentication bootstrap, session detection, token refresh, and global route protection. But remotes and backend APIs should still enforce feature-level authorization."
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
      text: "“What should the shell app do in a micro frontend architecture?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "The shell app should own the platform-level composition concerns. That includes global layout, top-level routing, authentication bootstrap, remote loading, feature flag initialization, error boundaries, fallback UI, and global analytics setup.\n\nIt should not own domain business logic. For example, cart calculations should belong to the Cart Remote or Cart API, product filtering should belong to the Catalog Remote, and checkout rules should belong to the Checkout Remote or backend services.\n\nI would also keep the shell lightweight. It should lazy-load remotes by route, read remote URLs from a manifest, wrap each remote in error boundaries, and log remote load failures with remote name, version, route, and shell version.\n\nThe key design principle is that the shell coordinates the experience without becoming a new monolith."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Final Shell Checklist"
    },
    {
      type: "checklist",
      items: [
        "Does the shell own only platform concerns?",
        "Are domain business rules kept out of the shell?",
        "Does the shell own top-level routing?",
        "Do remotes own nested/domain routing?",
        "Does the shell bootstrap auth?",
        "Do remotes handle feature-level authorization?",
        "Does the shell load remotes through a manifest?",
        "Does each remote have fallback UI?",
        "Are remote load errors logged with version and owner?",
        "Is the shell bundle kept small?",
        "Are critical remotes preloaded appropriately?",
        "Is untrusted remote loading blocked?",
        "Are feature flags initialized safely?",
        "Is the shell observable?",
        "Is ownership clearly defined?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "29. Summary"
    },
    {
      type: "paragraph",
      text: "The shell app is the backbone of a micro frontend architecture."
    },
    {
      type: "paragraph",
      text: "It should provide:"
    },
    {
      type: "code",
      language: "text",
      code: "Unified layout\nTop-level routing\nAuthentication bootstrap\nRemote loading\nFallback UI\nError isolation\nFeature flag bootstrap\nGlobal analytics\nObservability"
    },
    {
      type: "paragraph",
      text: "But it should not become a dumping ground for business logic."
    },
    {
      type: "paragraph",
      text: "The best shell apps are boring, stable, lightweight, and platform-focused."
    },
    {
      type: "paragraph",
      text: "Final takeaway:"
    },
    {
      type: "blockquote",
      text: "The shell should compose the product experience, not become the product’s business brain."
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
