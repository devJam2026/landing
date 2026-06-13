import type { FrontendArticle } from "../../articles";

export const authenticationAuthorizationMicroFrontends: FrontendArticle = {
  slug: "authentication-authorization-micro-frontends",
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
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Authentication and authorization become more complex when a frontend is split into multiple independently owned micro apps."
    },
    {
      type: "paragraph",
      text: "In a monolithic frontend, auth is usually simple:"
    },
    {
      type: "code",
      language: "text",
      code: "One app\nOne router\nOne session provider\nOne auth guard\nOne token handling flow"
    },
    {
      type: "paragraph",
      text: "In a micro frontend system, you may have:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\nCatalog Remote\nCart Remote\nCheckout Remote\nProfile Remote\nOrders Remote\nAdmin Remote"
    },
    {
      type: "paragraph",
      text: "Now the questions become:"
    },
    {
      type: "code",
      language: "text",
      code: "Who checks whether the user is logged in?\nWho refreshes the token?\nHow do remotes know the current user?\nCan remotes access tokens?\nWho handles logout?\nWhere should permission checks happen?\nWhat happens when the session expires?"
    },
    {
      type: "paragraph",
      text: "This article explains how to design authentication and authorization in micro frontends in a clean, secure, and interview-ready way."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Authentication vs Authorization"
    },
    {
      type: "paragraph",
      text: "Before designing the system, separate these two concepts."
    },
    {
      type: "heading",
      level: 3,
      text: "Authentication"
    },
    {
      type: "paragraph",
      text: "Authentication answers:"
    },
    {
      type: "code",
      language: "text",
      code: "Who is the user?"
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Login",
        "Logout",
        "Session validation",
        "Token refresh",
        "Identity bootstrap"
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Authorization"
    },
    {
      type: "paragraph",
      text: "Authorization answers:"
    },
    {
      type: "code",
      language: "text",
      code: "What is the user allowed to do?"
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Can the user view orders?",
        "Can the user edit profile?",
        "Can the user access admin tools?",
        "Can the user place an order?",
        "Can the user use a payment method?"
      ]
    },
    {
      type: "paragraph",
      text: "Simple rule:"
    },
    {
      type: "blockquote",
      text: "Authentication = identity\nAuthorization = permission"
    },
    {
      type: "paragraph",
      text: "In micro frontends, the shell often handles authentication bootstrap, while remotes handle feature-level authorization."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Core Auth Principle"
    },
    {
      type: "paragraph",
      text: "The recommended principle is:"
    },
    {
      type: "blockquote",
      text: "The shell should own authentication bootstrap, but remotes and backend APIs must still enforce authorization."
    },
    {
      type: "paragraph",
      text: "The shell can answer:"
    },
    {
      type: "list",
      items: [
        "Is the user logged in?",
        "What is the session status?",
        "Should this protected route load?",
        "Should we redirect to login?"
      ]
    },
    {
      type: "paragraph",
      text: "The remote can answer:"
    },
    {
      type: "list",
      items: [
        "Can this user use this feature?",
        "Should this button be visible?",
        "Can this user edit this resource?"
      ]
    },
    {
      type: "paragraph",
      text: "The backend must answer:"
    },
    {
      type: "list",
      items: [
        "Is this request actually allowed?"
      ]
    },
    {
      type: "paragraph",
      text: "Frontend checks improve UX."
    },
    {
      type: "paragraph",
      text: "Backend checks protect the system."
    },
    {
      type: "heading",
      level: 2,
      text: "3. High-Level Auth Architecture"
    },
    {
      type: "paragraph",
      text: "A common architecture:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: "                    ┌──────────────────────┐\n                    │       Browser         │\n                    └──────────┬───────────┘\n                               │\n                               ▼\n                    ┌──────────────────────┐\n                    │      Shell App        │\n                    │ Auth Bootstrap        │\n                    │ Session Provider      │\n                    │ Route Guard           │\n                    └──────────┬───────────┘\n                               │\n          ┌────────────────────┼────────────────────┐\n          │                    │                    │\n          ▼                    ▼                    ▼\n┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐\n│ Profile Remote  │  │ Orders Remote   │  │ Checkout Remote │\n│ Feature AuthZ   │  │ Feature AuthZ   │  │ Feature AuthZ   │\n└────────┬────────┘  └────────┬────────┘  └────────┬────────┘\n         │                    │                    │\n         ▼                    ▼                    ▼\n┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐\n│ Profile API     │  │ Orders API      │  │ Checkout API    │\n│ Backend AuthZ   │  │ Backend AuthZ   │  │ Backend AuthZ   │\n└─────────────────┘  └─────────────────┘  └─────────────────┘"
    },
    {
      type: "paragraph",
      text: "The shell gives a consistent authentication experience."
    },
    {
      type: "paragraph",
      text: "The remotes apply domain-specific permission logic."
    },
    {
      type: "paragraph",
      text: "The backend enforces real security."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Shell Responsibilities"
    },
    {
      type: "paragraph",
      text: "The shell usually owns platform-level authentication concerns."
    },
    {
      type: "paragraph",
      text: "Shell responsibilities:"
    },
    {
      type: "code",
      language: "text",
      code: "Login detection\nSession bootstrap\nToken refresh orchestration\nLogout handling\nGlobal route protection\nIdentity context provider\nAuth loading state\nRedirect to login\nRedirect after login\nSession expiry handling"
    },
    {
      type: "paragraph",
      text: "Example shell flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /orders\n      │\n      ▼\nShell checks session\n      │\n      ├── Not logged in → redirect to /login?redirect=/orders\n      │\n      └── Logged in → load Orders Remote"
    },
    {
      type: "paragraph",
      text: "This keeps the global authentication experience consistent."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Remote Responsibilities"
    },
    {
      type: "paragraph",
      text: "Remotes should not usually own the global login flow."
    },
    {
      type: "paragraph",
      text: "They should own domain-specific authorization and UX behavior."
    },
    {
      type: "paragraph",
      text: "Remote responsibilities:"
    },
    {
      type: "code",
      language: "text",
      code: "Feature-level permission checks\nRole-based UI visibility\nDomain route restrictions\nCalling domain APIs\nHandling 401/403 responses gracefully\nDisplaying permission-specific empty states"
    },
    {
      type: "paragraph",
      text: "Example: Orders Remote"
    },
    {
      type: "list",
      items: [
        "Orders Remote checks if user can view order history",
        "Calls Orders API",
        "Handles 403 forbidden response",
        "Shows “You do not have access to this order” if needed"
      ]
    },
    {
      type: "paragraph",
      text: "Example: Checkout Remote"
    },
    {
      type: "list",
      items: [
        "Checkout Remote checks if user can place order",
        "Checks delivery/payment eligibility",
        "Calls Checkout API",
        "Handles payment/session authorization errors"
      ]
    },
    {
      type: "paragraph",
      text: "The remote owns the domain experience."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Backend Responsibilities"
    },
    {
      type: "paragraph",
      text: "Backend APIs must enforce real authorization."
    },
    {
      type: "paragraph",
      text: "Never rely only on frontend checks."
    },
    {
      type: "paragraph",
      text: "Backend responsibilities:"
    },
    {
      type: "list",
      items: [
        "Validate access token/session",
        "Validate user permissions",
        "Validate resource ownership",
        "Reject unauthorized requests",
        "Reject forbidden actions",
        "Apply business rules",
        "Audit sensitive actions"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "User manually calls:\nGET /orders/order_123"
    },
    {
      type: "paragraph",
      text: "Even if the frontend hides the order page, the backend must still verify:"
    },
    {
      type: "list",
      items: [
        "Does this user own order_123?",
        "Is the user allowed to view it?"
      ]
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "Frontend authorization improves user experience, but backend authorization protects the system."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Identity Context"
    },
    {
      type: "paragraph",
      text: "The shell can provide a safe identity context to remotes."
    },
    {
      type: "paragraph",
      text: "Example identity context:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"isAuthenticated\": true,\n  \"userId\": \"user_123\",\n  \"displayName\": \"Avick\",\n  \"roles\": [\"customer\"],\n  \"locale\": \"en-IN\",\n  \"currency\": \"INR\"\n}"
    },
    {
      type: "paragraph",
      text: "This is useful for rendering UI."
    },
    {
      type: "paragraph",
      text: "But be careful."
    },
    {
      type: "paragraph",
      text: "Do not expose sensitive data unnecessarily."
    },
    {
      type: "paragraph",
      text: "Avoid passing:"
    },
    {
      type: "list",
      items: [
        "Raw access tokens through props",
        "Refresh tokens",
        "Secrets",
        "Payment data",
        "Sensitive profile data",
        "Full permission graph if not needed"
      ]
    },
    {
      type: "paragraph",
      text: "Give remotes only what they need."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Token Handling"
    },
    {
      type: "paragraph",
      text: "Token handling must be designed carefully."
    },
    {
      type: "paragraph",
      text: "Common options:"
    },
    {
      type: "list",
      items: [
        "HTTP-only secure cookies",
        "In-memory token storage",
        "Auth SDK managed session",
        "Backend session",
        "Token passed through API layer"
      ]
    },
    {
      type: "paragraph",
      text: "Avoid storing sensitive tokens in:"
    },
    {
      type: "list",
      items: [
        "localStorage",
        "sessionStorage",
        "Custom browser events",
        "Global window variables",
        "URL query params"
      ]
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "/cart?token=eyJhbGciOi..."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "window.__ACCESS_TOKEN__ = token"
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "list",
      items: [
        "Use HTTP-only secure cookies where possible.",
        "Let API calls include credentials safely.",
        "Keep token access centralized."
      ]
    },
    {
      type: "paragraph",
      text: "Exact implementation depends on your auth provider and backend architecture, but the principle is stable:"
    },
    {
      type: "blockquote",
      text: "Do not spread token handling across every remote."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Should Remotes Access Tokens?"
    },
    {
      type: "paragraph",
      text: "Ideally, remotes should not directly manage tokens."
    },
    {
      type: "paragraph",
      text: "Better options:"
    },
    {
      type: "list",
      items: [
        "Shell/auth provider initializes session.",
        "API client attaches credentials.",
        "Backend validates session/token.",
        "Remotes call domain APIs through approved clients."
      ]
    },
    {
      type: "paragraph",
      text: "If remotes directly handle tokens, you risk:"
    },
    {
      type: "list",
      items: [
        "Inconsistent refresh logic",
        "Security leaks",
        "Different token storage strategies",
        "Hard logout coordination",
        "Duplicate auth code",
        "Inconsistent error handling"
      ]
    },
    {
      type: "paragraph",
      text: "A platform-owned auth layer keeps behavior consistent."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Session Bootstrap Flow"
    },
    {
      type: "paragraph",
      text: "When the app starts, the shell can bootstrap session state."
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Browser loads Shell\n      │\n      ▼\nShell initializes auth provider\n      │\n      ▼\nShell checks existing session\n      │\n      ├── Loading → show app skeleton\n      ├── Unauthenticated → public routes only\n      └── Authenticated → identity context ready"
    },
    {
      type: "paragraph",
      text: "Then routes can load remotes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Authenticated user opens /profile\n      │\n      ▼\nShell confirms session\n      │\n      ▼\nShell loads Profile Remote\n      │\n      ▼\nProfile Remote fetches profile data"
    },
    {
      type: "paragraph",
      text: "Do not load protected remotes before the auth state is known unless the route supports it safely."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Token Refresh Flow"
    },
    {
      type: "paragraph",
      text: "Token/session refresh should be centralized."
    },
    {
      type: "paragraph",
      text: "Bad approach:"
    },
    {
      type: "list",
      items: [
        "Catalog Remote refreshes token.",
        "Cart Remote refreshes token.",
        "Checkout Remote refreshes token.",
        "Profile Remote refreshes token."
      ]
    },
    {
      type: "paragraph",
      text: "This can cause race conditions and inconsistent behavior."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "list",
      items: [
        "Shell/auth provider handles refresh.",
        "Remotes use API layer.",
        "401 handling is standardized."
      ]
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "API request receives 401\n      │\n      ▼\nAuth layer attempts refresh\n      │\n      ├── Refresh succeeds → retry request\n      └── Refresh fails → logout or redirect to login"
    },
    {
      type: "paragraph",
      text: "This keeps auth behavior consistent."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Logout Flow"
    },
    {
      type: "paragraph",
      text: "Logout must clear the full application session."
    },
    {
      type: "paragraph",
      text: "A good logout flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User clicks logout\n      │\n      ▼\nShell calls auth logout\n      │\n      ▼\nSession/cookies cleared\n      │\n      ▼\nIn-memory identity context cleared\n      │\n      ▼\nRemotes are notified through safe event/context update\n      │\n      ▼\nUser redirected to login or public home"
    },
    {
      type: "paragraph",
      text: "Remotes should respond to logout by clearing sensitive local UI state."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "Cart Remote clears in-memory cart summary.",
        "Profile Remote clears profile cache.",
        "Orders Remote clears order list cache."
      ]
    },
    {
      type: "paragraph",
      text: "Do not rely on remotes to perform the primary logout."
    },
    {
      type: "paragraph",
      text: "The shell/auth layer should own it."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Protected Routes"
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
      text: "Shell-level protected route flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /orders\n      │\n      ▼\nShell checks auth state\n      │\n      ├── unauthenticated → /login?redirect=/orders\n      └── authenticated → load Orders Remote"
    },
    {
      type: "paragraph",
      text: "Remote-level feature guard:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Orders Remote loads\n      │\n      ▼\nChecks permission/resource access\n      │\n      ├── allowed → render orders\n      └── forbidden → show no-access state"
    },
    {
      type: "paragraph",
      text: "Both levels are useful."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Public Routes"
    },
    {
      type: "paragraph",
      text: "Not all routes need authentication."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "/",
        "/categories/:slug",
        "/search",
        "/product/:id",
        "/campaign/:slug"
      ]
    },
    {
      type: "paragraph",
      text: "Public remotes should still be careful."
    },
    {
      type: "paragraph",
      text: "They may have mixed behavior:"
    },
    {
      type: "list",
      items: [
        "Anonymous user can view product.",
        "Logged-in user can see personalized price or wishlist."
      ]
    },
    {
      type: "paragraph",
      text: "The shell can provide optional identity context."
    },
    {
      type: "paragraph",
      text: "Remote should handle both states."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "Product Remote\n├── Anonymous: show product\n└── Logged in: show wishlist and personalized offers"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "15. Authorization Models"
    },
    {
      type: "paragraph",
      text: "Common frontend authorization models:"
    },
    {
      type: "list",
      items: [
        "Role-based access control",
        "Permission-based access control",
        "Feature-flag-based access",
        "Resource ownership checks",
        "Plan/subscription-based access"
      ]
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "Admin can access admin remote.",
        "Customer can view own orders.",
        "Premium user can access premium feature.",
        "Store manager can edit catalog."
      ]
    },
    {
      type: "paragraph",
      text: "Frontend can hide or show UI based on these rules, but backend must enforce them."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Role-Based UI"
    },
    {
      type: "paragraph",
      text: "Role-based UI can live inside remotes."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "Customer sees profile details",
        "Support agent sees customer assistance panel",
        "Admin sees account control tools"
      ]
    },
    {
      type: "paragraph",
      text: "The shell should not know every domain-specific permission."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Shell decides whether profile edit button appears."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Profile Remote decides profile feature visibility using identity/permissions."
    },
    {
      type: "paragraph",
      text: "The shell may provide the identity summary, but the remote owns the domain UI."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Permission Context"
    },
    {
      type: "paragraph",
      text: "Instead of passing raw roles everywhere, some systems expose a permission context."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"permissions\": [\n    \"orders:view\",\n    \"profile:edit\",\n    \"checkout:place_order\"\n  ]\n}"
    },
    {
      type: "paragraph",
      text: "A remote can check:"
    },
    {
      type: "list",
      items: [
        "Can user perform profile:edit?",
        "Can user perform orders:view?",
        "Can user perform checkout:place_order?"
      ]
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "More precise than roles",
        "Easier feature checks",
        "Clearer domain permissions"
      ]
    },
    {
      type: "paragraph",
      text: "Risk:"
    },
    {
      type: "list",
      items: [
        "Too much permission logic duplicated in frontend",
        "Large permission object exposed unnecessarily"
      ]
    },
    {
      type: "paragraph",
      text: "Keep it minimal and safe."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Handling 401 and 403"
    },
    {
      type: "paragraph",
      text: "Remotes must handle API auth failures gracefully."
    },
    {
      type: "heading",
      level: 3,
      text: "401 Unauthorized"
    },
    {
      type: "paragraph",
      text: "Means:"
    },
    {
      type: "blockquote",
      text: "User is not authenticated or session expired."
    },
    {
      type: "paragraph",
      text: "Possible behavior:"
    },
    {
      type: "list",
      items: [
        "Trigger refresh",
        "Redirect to login",
        "Show session expired message"
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "403 Forbidden"
    },
    {
      type: "paragraph",
      text: "Means:"
    },
    {
      type: "blockquote",
      text: "User is authenticated but not allowed."
    },
    {
      type: "paragraph",
      text: "Possible behavior:"
    },
    {
      type: "list",
      items: [
        "Show no-access page",
        "Hide restricted action",
        "Show permission error"
      ]
    },
    {
      type: "paragraph",
      text: "Do not treat 401 and 403 the same."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "list",
      items: [
        "401 → login required",
        "403 → access denied"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "19. Auth and Routing"
    },
    {
      type: "paragraph",
      text: "Auth is closely tied to routing."
    },
    {
      type: "paragraph",
      text: "Example protected flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /checkout\n      │\n      ▼\nShell checks auth\n      │\n      ├── not logged in → /login?redirect=/checkout\n      └── logged in → load Checkout Remote"
    },
    {
      type: "paragraph",
      text: "After login:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Login success\n      │\n      ▼\nRedirect back to /checkout"
    },
    {
      type: "paragraph",
      text: "This preserves user intent."
    },
    {
      type: "paragraph",
      text: "Bad UX:"
    },
    {
      type: "blockquote",
      text: "User tries checkout.\nLogin succeeds.\nUser lands on homepage.\nCart journey is lost."
    },
    {
      type: "paragraph",
      text: "Good UX:"
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
      text: "20. Auth and Deep Linking"
    },
    {
      type: "paragraph",
      text: "Deep links must work with auth."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/orders/order_123"
    },
    {
      type: "paragraph",
      text: "Flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens deep link\n      │\n      ▼\nShell checks auth\n      │\n      ├── not logged in → login with redirect\n      └── logged in → load Orders Remote\n                              │\n                              ▼\n                      Orders Remote checks order access"
    },
    {
      type: "paragraph",
      text: "If user does not own the order:"
    },
    {
      type: "blockquote",
      text: "Show 403/no access"
    },
    {
      type: "paragraph",
      text: "If order does not exist:"
    },
    {
      type: "blockquote",
      text: "Show 404/not found"
    },
    {
      type: "paragraph",
      text: "Auth, routing, and domain validation must work together."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Cross-App Auth Events"
    },
    {
      type: "paragraph",
      text: "Some global auth events are useful."
    },
    {
      type: "paragraph",
      text: "Examples:"
    },
    {
      type: "list",
      items: [
        "auth:logged-in",
        "auth:logged-out",
        "auth:session-expired",
        "auth:token-refreshed"
      ]
    },
    {
      type: "paragraph",
      text: "Use carefully."
    },
    {
      type: "paragraph",
      text: "Good event:"
    },
    {
      type: "blockquote",
      text: "auth:logged-out\nPayload:\n{\n  reason: \"user_action\"\n}"
    },
    {
      type: "paragraph",
      text: "Bad event:"
    },
    {
      type: "blockquote",
      text: "auth:token-refreshed\nPayload:\n{\n  accessToken: \"...\"\n}"
    },
    {
      type: "paragraph",
      text: "Never pass raw tokens through browser events."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Auth State and Browser Storage"
    },
    {
      type: "paragraph",
      text: "Be careful with browser storage."
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "list",
      items: [
        "localStorage for access tokens",
        "sessionStorage for refresh tokens",
        "localStorage as cross-remote auth API"
      ]
    },
    {
      type: "paragraph",
      text: "Safer options often include:"
    },
    {
      type: "list",
      items: [
        "HTTP-only secure cookies",
        "Backend-managed session",
        "Auth SDK-managed secure flow",
        "In-memory short-lived token access"
      ]
    },
    {
      type: "paragraph",
      text: "The exact choice depends on architecture, but never spread storage decisions across remotes."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Security Risks"
    },
    {
      type: "paragraph",
      text: "Common security risks in micro frontend auth:"
    },
    {
      type: "table",
      headers: ["Risk", "Why It Is Dangerous"],
      rows: [
        ["Tokens in localStorage", "XSS exposure"],
        ["Tokens in URL", "Leaks through logs/history"],
        ["Tokens in browser events", "Any listener may read them"],
        ["Remote owns refresh logic", "Inconsistent and risky"],
        ["Shell trusts frontend-only permissions", "Backend bypass possible"],
        ["Sensitive identity passed to all remotes", "Data exposure"],
        ["Untrusted remote loaded", "Executable JS risk"],
        ["Logout does not clear remote cache", "Sensitive data may remain"],
        ["Different auth handling per remote", "Inconsistent security"]
      ]
    },
    {
      type: "paragraph",
      text: "Security must be centralized where possible and enforced at the backend."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Auth in E-commerce Example"
    },
    {
      type: "paragraph",
      text: "Route access:"
    },
    {
      type: "table",
      headers: ["Route", "Auth Required?", "Owner"],
      rows: [
        ["/", "No", "Home Remote"],
        ["/categories/:slug", "No", "Catalog Remote"],
        ["/product/:id", "No", "Product Remote"],
        ["/cart", "Optional/depends", "Cart Remote"],
        ["/checkout", "Usually yes", "Checkout Remote"],
        ["/profile", "Yes", "Profile Remote"],
        ["/orders", "Yes", "Orders Remote"],
        ["/admin", "Yes + role", "Admin Remote"]
      ]
    },
    {
      type: "paragraph",
      text: "Example checkout flow:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "User opens /checkout\n      │\n      ▼\nShell checks login\n      │\n      ├── anonymous → /login?redirect=/checkout\n      └── authenticated → load Checkout Remote"
    },
    {
      type: "paragraph",
      text: "Checkout Remote then checks:"
    },
    {
      type: "list",
      items: [
        "Can user place order?",
        "Is cart valid?",
        "Is delivery address allowed?",
        "Is payment method valid?"
      ]
    },
    {
      type: "paragraph",
      text: "Backend finally enforces all rules."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Multi-Tenant / Role-Based Systems"
    },
    {
      type: "paragraph",
      text: "In enterprise apps, auth may include tenant or organization context."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"userId\": \"user_123\",\n  \"tenantId\": \"tenant_456\",\n  \"roles\": [\"admin\"],\n  \"permissions\": [\"users:view\", \"billing:edit\"]\n}"
    },
    {
      type: "paragraph",
      text: "Micro frontend implications:"
    },
    {
      type: "list",
      items: [
        "Shell bootstraps tenant context.",
        "Remote checks domain permissions.",
        "APIs validate tenant access.",
        "Route changes preserve tenant scope."
      ]
    },
    {
      type: "paragraph",
      text: "Example routes:"
    },
    {
      type: "list",
      items: [
        "/org/acme/users",
        "/org/acme/billing",
        "/org/acme/audit-logs"
      ]
    },
    {
      type: "paragraph",
      text: "Tenant context must be consistent across remotes."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Testing Auth in Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Test auth at multiple levels."
    },
    {
      type: "paragraph",
      text: "Test cases:"
    },
    {
      type: "list",
      items: [
        "Unauthenticated user opens protected route.",
        "User logs in and returns to original route.",
        "Session expires while remote is open.",
        "Remote receives 403 from API.",
        "Logout clears shell and remote state.",
        "Deep link to protected nested route works.",
        "Role-based UI appears correctly.",
        "Unauthorized user cannot access admin remote."
      ]
    },
    {
      type: "paragraph",
      text: "Important E2E journeys:"
    },
    {
      type: "list",
      items: [
        "Login → profile",
        "Login → checkout",
        "Session expiry → redirect",
        "Logout → protected route blocked",
        "Admin user → admin page allowed",
        "Normal user → admin page denied"
      ]
    },
    {
      type: "paragraph",
      text: "Auth bugs can create both security and UX problems."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Observability for Auth"
    },
    {
      type: "paragraph",
      text: "Track auth-related events:"
    },
    {
      type: "list",
      items: [
        "Login success/failure",
        "Logout",
        "Session refresh success/failure",
        "Protected route redirects",
        "401 responses",
        "403 responses",
        "Session expiry",
        "Auth provider errors",
        "Remote permission failures"
      ]
    },
    {
      type: "paragraph",
      text: "Useful fields:"
    },
    {
      type: "code",
      language: "text",
      code: "route\nremoteName\nshellVersion\nremoteVersion\nauthState\nerrorType\npermission\nuserRoleGroup"
    },
    {
      type: "paragraph",
      text: "Do not log sensitive tokens or private user data."
    },
    {
      type: "heading",
      level: 2,
      text: "28. Common Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Each remote implements its own login", "Inconsistent UX/security"],
        ["Tokens passed through props/events", "Security risk"],
        ["Tokens stored in localStorage", "XSS exposure"],
        ["Shell owns all permission logic", "Shell becomes domain-aware"],
        ["Remotes trust frontend-only permissions", "Backend bypass risk"],
        ["No session refresh strategy", "Random auth failures"],
        ["No logout coordination", "Sensitive stale data"],
        ["Same handling for 401 and 403", "Wrong UX"],
        ["No redirect preservation", "Broken user journeys"],
        ["Auth logic duplicated everywhere", "Maintenance and security risk"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "29. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. Where should authentication live in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Authentication bootstrap should usually live in the shell or platform layer. The shell can initialize the session, handle login/logout, refresh tokens, and protect top-level routes. Remotes consume safe identity context and handle domain-specific authorization."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. Where should authorization live?"
    },
    {
      type: "paragraph",
      text: "Authorization should exist at multiple levels. The shell can handle broad route protection, remotes can handle feature-level permissions, and backend APIs must enforce real authorization. Frontend checks are not enough for security."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. Should remotes access tokens directly?"
    },
    {
      type: "paragraph",
      text: "Ideally no. Token handling should be centralized through the shell/auth provider or approved API layer. Passing tokens to every remote increases security risk and creates inconsistent refresh/logout behavior."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How do you handle session expiry?"
    },
    {
      type: "paragraph",
      text: "The shared auth layer should detect session expiry or refresh failure, clear identity context, notify the app safely, and redirect the user to login while preserving the original route where appropriate."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How do you handle logout across remotes?"
    },
    {
      type: "paragraph",
      text: "The shell/auth layer should own logout. After logout, it clears the session and identity context, notifies remotes safely, and redirects the user. Remotes should clear sensitive in-memory data when auth state changes."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What is the biggest security mistake in micro frontend auth?"
    },
    {
      type: "paragraph",
      text: "One major mistake is spreading token handling across remotes or exposing tokens through localStorage, browser events, URL params, or global variables. Another is relying only on frontend permission checks without backend enforcement."
    },
    {
      type: "heading",
      level: 2,
      text: "30. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“How would you design authentication and authorization in micro frontends?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would keep authentication bootstrap in the shell or platform layer. The shell would initialize the auth provider, check the session, handle token refresh, protect top-level routes, manage logout, and preserve redirect URLs after login.\n\nRemotes would not implement their own login flows. They would consume a safe identity context from the shell, such as user ID, logged-in status, locale, and minimal role or permission information. Each remote would handle feature-level authorization inside its domain. For example, Orders Remote decides whether the user can view order history, and Checkout Remote decides whether the user can access specific checkout actions.\n\nBackend APIs must still enforce authorization because frontend checks are only for user experience, not real security.\n\nI would avoid passing raw tokens through props, browser events, localStorage, or URLs. Token/session handling should be centralized through the platform auth layer or secure API client.\n\nThe key principle is: shell owns authentication bootstrap, remotes own domain authorization UX, and backend APIs enforce security."
    },
    {
      type: "heading",
      level: 2,
      text: "31. Final Auth Checklist"
    },
    {
      type: "checklist",
      items: [
        "Does the shell own authentication bootstrap?",
        "Is login/logout centralized?",
        "Is token/session refresh centralized?",
        "Are protected routes guarded?",
        "Is redirect-after-login preserved?",
        "Do remotes avoid implementing separate login flows?",
        "Is identity context minimal and safe?",
        "Are raw tokens kept out of browser events and URLs?",
        "Are tokens avoided in localStorage where possible?",
        "Do remotes handle feature-level authorization?",
        "Do backend APIs enforce real authorization?",
        "Are 401 and 403 handled differently?",
        "Does logout clear sensitive remote state?",
        "Are auth failures observable?",
        "Are deep links to protected routes supported?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "32. Summary"
    },
    {
      type: "paragraph",
      text: "Authentication and authorization in micro frontends require clear ownership."
    },
    {
      type: "paragraph",
      text: "Recommended model:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns authentication bootstrap.\nShell owns top-level route protection.\nRemotes own feature-level authorization UX.\nBackend APIs enforce real authorization.\nToken handling is centralized.\nIdentity context is minimal and safe.\nLogout is coordinated globally."
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "code",
      language: "text",
      code: "Each remote having its own login flow.\nPassing tokens through events or URLs.\nStoring sensitive tokens casually in browser storage.\nPutting all permission logic in the shell.\nTrusting frontend-only authorization."
    },
    {
      type: "paragraph",
      text: "The strongest takeaway:"
    },
    {
      type: "blockquote",
      text: "In micro frontends, authentication should be centralized for consistency, authorization should be domain-aware, and real security must be enforced by the backend."
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
