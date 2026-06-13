import type { FrontendArticle } from "../../articles";

export const microFrontendTestingStrategy: FrontendArticle = {
  slug: "micro-frontend-testing-strategy",
  title: "Micro Frontend Testing Strategy",
  description: "Learn how to test micro frontends using unit tests, contract tests, integration tests, E2E tests, visual regression, performance checks, deployment validation, and production monitoring.",
  difficulty: "Senior",
  readTime: "16 min read",
  tags: ["Micro Frontends", "Testing", "Contract Testing", "E2E Testing", "Frontend Architecture", "Interview Prep"],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 12, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Testing micro frontends is harder than testing a normal frontend application."
    },
    {
      type: "paragraph",
      text: "In a monolithic frontend, most code is built, tested, and deployed together."
    },
    {
      type: "paragraph",
      text: "In a micro frontend architecture, different parts of the UI may be:"
    },
    {
      type: "blockquote",
      text: "Owned by different teams\nBuilt in different repositories\nDeployed independently\nLoaded at runtime\nConnected through contracts\nDependent on shared libraries\nComposed inside a shell app"
    },
    {
      type: "paragraph",
      text: "That means a micro frontend system can pass all unit tests and still fail in production when the shell tries to load a remote."
    },
    {
      type: "paragraph",
      text: "This is why micro frontends need a broader testing strategy."
    },
    {
      type: "paragraph",
      text: "A strong testing strategy should answer:"
    },
    {
      type: "blockquote",
      text: "Does each remote work independently?\nDoes the shell load each remote correctly?\nAre contracts between shell and remotes still valid?\nDo user journeys work across multiple remotes?\nDoes the UI remain consistent?\nCan we catch performance regressions?\nCan we safely deploy and roll back one remote?"
    },
    {
      type: "paragraph",
      text: "This article explains how to test micro frontends from unit level to production readiness."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Why Testing Micro Frontends Is Different"
    },
    {
      type: "paragraph",
      text: "Micro frontends introduce new failure points."
    },
    {
      type: "paragraph",
      text: "In a normal frontend app, failure usually happens inside one build."
    },
    {
      type: "paragraph",
      text: "In micro frontends, failure can happen between independently deployed apps."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Shell App expects Cart Remote to expose ./CartPage\nCart Remote deploys a new version and removes ./CartPage\nShell loads /cart\nRuntime failure happens"
    },
    {
      type: "paragraph",
      text: "The shell may not know this during its own build."
    },
    {
      type: "paragraph",
      text: "That is why micro frontend testing must cover runtime integration, contracts, deployment, and observability."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Common Failure Scenarios"
    },
    {
      type: "paragraph",
      text: "Micro frontend failures often happen at boundaries."
    },
    {
      type: "table",
      headers: ["Failure", "Example"],
      rows: [
        ["Missing exposed module", "Shell expects cartApp/CartPage, but remote removed it"],
        ["Prop contract mismatch", "Shell passes userId, remote now expects customerId"],
        ["Event contract mismatch", "Remote emits cart:update, shell listens for cart:updated"],
        ["Shared dependency conflict", "Shell and remote load incompatible React versions"],
        ["Routing conflict", "Two remotes claim the same route"],
        ["Auth context issue", "Remote expects user context before shell provides it"],
        ["Styling mismatch", "Remote ships UI that breaks design consistency"],
        ["Remote load failure", "remoteEntry.js fails due to CDN/network issue"],
        ["Chunk load error", "Remote entry loads but child chunk fails"],
        ["Performance regression", "Remote adds a large dependency and slows route load"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "3. Micro Frontend Test Pyramid"
    },
    {
      type: "paragraph",
      text: "A practical test pyramid for micro frontends looks like this:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `                             ┌────────────────────┐\n                             │ Production Checks  │\n                             │ Monitoring / SLOs  │\n                             └────────────────────┘\n                           ┌────────────────────────┐\n                           │ E2E User Journey Tests │\n                           └────────────────────────┘\n                        ┌──────────────────────────────┐\n                        │ Integration / Composition     │\n                        │ Shell + Remote Tests          │\n                        └──────────────────────────────┘\n                     ┌────────────────────────────────────┐\n                     │ Contract Tests                      │\n                     │ Shell ↔ Remote Agreements           │\n                     └────────────────────────────────────┘\n                  ┌──────────────────────────────────────────┐\n                  │ Unit / Component Tests                    │\n                  │ Inside Each Remote                        │\n                  └──────────────────────────────────────────┘`
    },
    {
      type: "paragraph",
      text: "Unit tests are still important."
    },
    {
      type: "paragraph",
      text: "But micro frontends need additional layers because the biggest risks happen at integration boundaries."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Testing Layers Overview"
    },
    {
      type: "table",
      headers: ["Test Type", "Purpose", "Example"],
      rows: [
        ["Unit tests", "Test isolated logic/components", "Cart quantity increment"],
        ["Component tests", "Test UI behavior inside a remote", "Product filter panel"],
        ["Contract tests", "Verify shell and remote agree", "CartPage props and events"],
        ["Integration tests", "Verify shell loads remote correctly", "/cart renders Cart Remote"],
        ["E2E tests", "Verify full user journeys", "Search → add to cart → checkout"],
        ["Visual regression tests", "Verify UI consistency", "Button, card, modal styling"],
        ["Performance tests", "Verify load budgets", "Cart route JS size"],
        ["Deployment smoke tests", "Verify deployed remote health", "remoteEntry.js reachable"],
        ["Production monitoring", "Verify real user health", "Remote load failures by version"]
      ]
    },
    {
      type: "paragraph",
      text: "Each layer catches a different class of problems."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Unit Testing Each Remote"
    },
    {
      type: "paragraph",
      text: "Each micro frontend should have its own unit tests."
    },
    {
      type: "paragraph",
      text: "Example: Cart Remote"
    },
    {
      type: "blockquote",
      text: "Cart Remote\n├── CartPage\n├── CartItem\n├── CartSummary\n├── QuantitySelector\n└── PromoCodeForm"
    },
    {
      type: "paragraph",
      text: "Unit test examples:"
    },
    {
      type: "blockquote",
      text: "QuantitySelector increments quantity.\nCartSummary calculates subtotal display.\nPromoCodeForm validates empty promo code.\nCartItem renders unavailable product state."
    },
    {
      type: "paragraph",
      text: "Unit tests should stay inside the remote’s ownership boundary."
    },
    {
      type: "paragraph",
      text: "They should not depend on the shell app."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "Cart Remote tests cart UI behavior independently."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "Cart Remote unit tests depend on Shell Header implementation."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Component Testing"
    },
    {
      type: "paragraph",
      text: "Component tests verify UI behavior inside each remote."
    },
    {
      type: "paragraph",
      text: "Good candidates:"
    },
    {
      type: "list",
      items: ["Product filters", "Cart drawer", "Checkout address form", "Profile address book", "Search suggestions", "Order status card"]
    },
    {
      type: "paragraph",
      text: "Example test cases for Catalog Remote:"
    },
    {
      type: "blockquote",
      text: "User selects brand filter.\nFilter chip appears.\nURL query params update.\nProduct list reloads.\nClear filter removes chip."
    },
    {
      type: "paragraph",
      text: "Component tests should mock remote dependencies such as APIs, auth context, or feature flags."
    },
    {
      type: "paragraph",
      text: "They should not require every other micro frontend to run."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Contract Testing"
    },
    {
      type: "paragraph",
      text: "Contract testing is one of the most important parts of micro frontend testing."
    },
    {
      type: "paragraph",
      text: "A contract test verifies that two independently deployed parts still agree."
    },
    {
      type: "paragraph",
      text: "Example contracts:"
    },
    {
      type: "blockquote",
      text: "Shell expects Cart Remote to expose ./CartPage.\nShell passes props: userId, locale, currency.\nCart Remote emits event: cart:updated.\ncart:updated payload includes itemCount."
    },
    {
      type: "paragraph",
      text: "If the Cart Remote changes any of these in a breaking way, the contract test should fail before deployment."
    },
    {
      type: "heading",
      level: 2,
      text: "8. What Contracts Should Be Tested?"
    },
    {
      type: "paragraph",
      text: "Test these contracts:"
    },
    {
      type: "list",
      items: ["Exposed module names", "Expected props", "Event names", "Event payload shapes", "Route ownership", "Shared dependency versions", "Auth context expectations", "Feature flag names", "Design system version compatibility"]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Contract: Cart Remote\n\nExposes:\n- ./CartPage\n- ./CartDrawer\n\nCartPage props:\n- userId: string\n- locale: string\n- currency: string\n\nEvents:\n- cart:updated\n\nPayload:\n{\n  cartId: string;\n  itemCount: number;\n}"
    },
    {
      type: "paragraph",
      text: "This makes shell/remote integration safer."
    },
    {
      type: "paragraph",
      text: "If the Cart Team changes the payload, contract tests should catch it."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Contract Testing Example"
    },
    {
      type: "paragraph",
      text: "Scenario:"
    },
    {
      type: "blockquote",
      text: "Shell listens for cart:updated event.\nCart Remote emits cart:item-updated instead.\nHeader cart count never updates."
    },
    {
      type: "paragraph",
      text: "Contract test should catch this."
    },
    {
      type: "paragraph",
      text: "Contract expectation:"
    },
    {
      type: "blockquote",
      text: "When cart is updated,\nCart Remote must emit:\nevent name: cart:updated\npayload: { cartId, itemCount }"
    },
    {
      type: "paragraph",
      text: "Failure:"
    },
    {
      type: "blockquote",
      text: "Expected event cart:updated\nReceived event cart:item-updated"
    },
    {
      type: "paragraph",
      text: "This is much cheaper to catch in CI than production."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Integration Testing Shell and Remotes"
    },
    {
      type: "paragraph",
      text: "Integration tests verify that the shell can actually load and compose remotes."
    },
    {
      type: "paragraph",
      text: "Example test cases:"
    },
    {
      type: "list",
      items: ["Open /products and verify Catalog Remote renders.", "Open /cart and verify Cart Remote renders.", "Open /checkout and verify Checkout Remote renders.", "Remote loading failure shows fallback UI.", "Auth-protected remote redirects unauthenticated user."]
    },
    {
      type: "paragraph",
      text: "Integration tests should validate composition behavior."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Shell route: /cart\nExpected:\n- Shell layout visible\n- Header visible\n- Cart Remote loaded\n- Cart page content visible\n- No remote loading error"
    },
    {
      type: "paragraph",
      text: "This catches issues that unit tests cannot."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Testing Runtime Loading"
    },
    {
      type: "paragraph",
      text: "Runtime loading is a major risk in Module Federation."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "list",
      items: ["remoteEntry.js is reachable.", "Remote exposes expected modules.", "Remote chunks load correctly.", "Shell handles timeout.", "Shell handles failed remote.", "Shell renders fallback UI."]
    },
    {
      type: "paragraph",
      text: "Failure scenarios to simulate:"
    },
    {
      type: "list",
      items: ["Remote URL is wrong.", "remoteEntry.js returns 404.", "Remote chunk fails to load.", "Remote loads but throws runtime error.", "Remote is slow to respond.", "Remote exposes missing module."]
    },
    {
      type: "paragraph",
      text: "A production-ready shell must handle these cases gracefully."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Error Boundary Testing"
    },
    {
      type: "paragraph",
      text: "Each remote should be wrapped with an error boundary."
    },
    {
      type: "paragraph",
      text: "Test cases:"
    },
    {
      type: "list",
      items: ["Remote component throws error.", "Shell catches the error.", "Fallback UI is displayed.", "Navigation remains usable.", "Error is logged with remote name and version."]
    },
    {
      type: "paragraph",
      text: "Example expected behavior:"
    },
    {
      type: "blockquote",
      text: "Cart Remote crashes\n↓\nShell still renders header and navigation\n↓\nCart fallback appears\n↓\nError is sent to monitoring"
    },
    {
      type: "paragraph",
      text: "Bad behavior:"
    },
    {
      type: "blockquote",
      text: "Cart Remote crashes\n↓\nEntire app becomes blank"
    },
    {
      type: "heading",
      level: 2,
      text: "13. E2E Testing"
    },
    {
      type: "paragraph",
      text: "E2E tests validate real user journeys across multiple micro frontends."
    },
    {
      type: "paragraph",
      text: "Important e-commerce journeys:"
    },
    {
      type: "list",
      items: ["Search product → open PDP → add to cart → checkout", "Login → view orders → reorder", "Open category → apply filters → add product to cart", "Update cart quantity → checkout total updates", "Profile address → checkout address selection"]
    },
    {
      type: "paragraph",
      text: "These tests are valuable because they cross remote boundaries."
    },
    {
      type: "paragraph",
      text: "Example journey:"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: `Catalog Remote\n      │\n      ▼\nProduct Details Remote\n      │\n      ▼\nCart Remote\n      │\n      ▼\nCheckout Remote`
    },
    {
      type: "paragraph",
      text: "A unit test cannot validate this full flow."
    },
    {
      type: "heading",
      level: 2,
      text: "14. E2E Testing Strategy"
    },
    {
      type: "paragraph",
      text: "Do not test everything with E2E."
    },
    {
      type: "paragraph",
      text: "Use E2E for critical flows."
    },
    {
      type: "paragraph",
      text: "Recommended E2E coverage:"
    },
    {
      type: "list",
      items: ["Login", "Search", "Add to cart", "Checkout", "Payment handoff", "Order confirmation", "Profile address update"]
    },
    {
      type: "paragraph",
      text: "Avoid using E2E for every small UI detail."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "blockquote",
      text: "E2E test for every button color and every empty state."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "blockquote",
      text: "E2E test for business-critical journeys.\nComponent/visual tests for UI details."
    },
    {
      type: "paragraph",
      text: "E2E tests are powerful but expensive and slower."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Visual Regression Testing"
    },
    {
      type: "paragraph",
      text: "Micro frontends are owned by different teams, so UI consistency can break."
    },
    {
      type: "paragraph",
      text: "Visual regression testing catches:"
    },
    {
      type: "list",
      items: ["Different button styles", "Broken spacing", "Wrong typography", "Incorrect modal layout", "Broken responsive layout", "Design system regression", "Unexpected layout shift"]
    },
    {
      type: "paragraph",
      text: "Important areas:"
    },
    {
      type: "list",
      items: ["Header", "Product cards", "Cart summary", "Checkout form", "Buttons", "Modals", "Error states", "Loading skeletons"]
    },
    {
      type: "paragraph",
      text: "This is especially useful when many remotes use one shared design system."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Accessibility Testing"
    },
    {
      type: "paragraph",
      text: "Accessibility should be tested across all remotes."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "list",
      items: ["Keyboard navigation", "Focus management", "ARIA labels", "Color contrast", "Form error messages", "Modal focus trap", "Screen reader labels", "Semantic HTML"]
    },
    {
      type: "paragraph",
      text: "Checkout is especially important."
    },
    {
      type: "paragraph",
      text: "Bad accessibility in checkout can directly affect revenue and user trust."
    },
    {
      type: "paragraph",
      text: "Accessibility should not be optional per team."
    },
    {
      type: "paragraph",
      text: "Accessibility should be part of the shared platform quality bar."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Performance Testing"
    },
    {
      type: "paragraph",
      text: "Micro frontends can create performance problems."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "list",
      items: ["Bundle size per remote", "Duplicate dependencies", "Remote loading time", "Route-level Web Vitals", "Chunk waterfall", "Time to interactive", "Interaction latency", "Layout shift"]
    },
    {
      type: "paragraph",
      text: "Example budgets:"
    },
    {
      type: "blockquote",
      text: "Catalog route JS budget: 250 KB gzipped\nCart route JS budget: 180 KB gzipped\nCheckout route JS budget: 220 KB gzipped\nRemote load time budget: < 500 ms from CDN\nCLS budget: < 0.1\nINP budget: good threshold"
    },
    {
      type: "paragraph",
      text: "Performance should be measured per route and per remote version."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Shared Dependency Testing"
    },
    {
      type: "paragraph",
      text: "Shared dependencies can break runtime behavior."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "list",
      items: ["React is not duplicated.", "React DOM is not duplicated.", "Design system version is compatible.", "Auth SDK version is compatible.", "Router dependency does not conflict."]
    },
    {
      type: "paragraph",
      text: "Common issue:"
    },
    {
      type: "blockquote",
      text: "Shell uses React 18.\nRemote bundles another React instance.\nHooks/context break unexpectedly."
    },
    {
      type: "paragraph",
      text: "A build or CI check should detect duplicate critical dependencies."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Deployment Smoke Tests"
    },
    {
      type: "paragraph",
      text: "Every remote deployment should run smoke tests."
    },
    {
      type: "paragraph",
      text: "Example checks:"
    },
    {
      type: "list",
      items: ["remoteEntry.js is reachable.", "Remote manifest is valid.", "Expected exposed modules exist.", "Remote chunks are available.", "Remote can render in isolated preview.", "Shell can load remote in staging."]
    },
    {
      type: "paragraph",
      text: "Deployment smoke tests catch broken builds before production traffic reaches them."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Cart Remote deployed\n↓\nSmoke test hits cart remoteEntry.js\n↓\nVerifies ./CartPage exists\n↓\nLoads CartPage in preview shell\n↓\nDeployment marked healthy"
    },
    {
      type: "heading",
      level: 2,
      text: "20. Preview Environments"
    },
    {
      type: "paragraph",
      text: "Preview environments are extremely useful."
    },
    {
      type: "paragraph",
      text: "For each remote pull request, create a preview URL."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "cart-pr-248.preview.company.com/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Then test it inside a preview shell."
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: ["Review remote in realistic shell", "Catch integration issues earlier", "Allow designers/product managers to verify UI", "Run E2E tests before merge"]
    },
    {
      type: "paragraph",
      text: "This reduces production surprises."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Release Validation"
    },
    {
      type: "paragraph",
      text: "Before promoting a remote to production, validate:"
    },
    {
      type: "list",
      items: ["Unit tests pass.", "Contract tests pass.", "Integration tests pass.", "Critical E2E tests pass.", "Bundle budget passes.", "Accessibility checks pass.", "Visual regression checks pass.", "Remote smoke test passes.", "Monitoring metadata is attached.", "Rollback version is available."]
    },
    {
      type: "paragraph",
      text: "This is especially important for checkout and payment-related remotes."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Production Monitoring as Testing"
    },
    {
      type: "paragraph",
      text: "Testing does not end after deployment."
    },
    {
      type: "paragraph",
      text: "Production monitoring is part of the quality strategy."
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "list",
      items: ["Remote load failures", "Chunk load errors", "JavaScript errors by remote", "Fallback UI frequency", "Route-level Web Vitals", "Conversion funnel drops", "API errors by domain", "Deployment health", "Error rate by remote version"]
    },
    {
      type: "paragraph",
      text: "Example alert:"
    },
    {
      type: "blockquote",
      text: "checkoutApp v1.4.3\nremote_load_failed increased from 0.1% to 4%\nTrigger rollback"
    },
    {
      type: "paragraph",
      text: "This is how micro frontend systems become operable."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Testing Ownership"
    },
    {
      type: "table",
      headers: ["Team", "Owns"],
      rows: [
        ["Platform Team", "Shell integration, remote loading, contracts, standards"],
        ["Catalog Team", "Catalog unit/component tests, catalog contracts"],
        ["Cart Team", "Cart tests, cart events, cart API integration"],
        ["Checkout Team", "Checkout E2E, reliability, form validation"],
        ["Design System Team", "Visual regression and accessibility standards"],
        ["QA/Platform", "Cross-remote journey validation"]
      ]
    },
    {
      type: "paragraph",
      text: "Ownership must be clear."
    },
    {
      type: "paragraph",
      text: "If nobody owns cross-app tests, production will expose the gaps."
    },
    {
      type: "heading",
      level: 2,
      text: "24. CI/CD Quality Gates"
    },
    {
      type: "paragraph",
      text: "A good CI/CD pipeline includes gates."
    },
    {
      type: "paragraph",
      text: "For each remote:"
    },
    {
      type: "list",
      items: ["Type check", "Lint", "Unit tests", "Component tests", "Contract tests", "Bundle size check", "Accessibility check", "Visual regression check", "Security check", "Build artifact generation", "Remote manifest validation", "Smoke test"]
    },
    {
      type: "paragraph",
      text: "For shell:"
    },
    {
      type: "list",
      items: ["Route integration tests", "Remote contract compatibility", "Fallback UI tests", "Auth integration tests", "E2E critical paths", "Manifest validation"]
    },
    {
      type: "paragraph",
      text: "CI should prevent unsafe independent deployment."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Example Testing Matrix"
    },
    {
      type: "table",
      headers: ["Area", "Unit", "Contract", "Integration", "E2E", "Visual", "Perf"],
      rows: [
        ["Catalog", "Yes", "Yes", "Yes", "Partial", "Yes", "Yes"],
        ["Product Details", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
        ["Cart", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
        ["Checkout", "Yes", "Yes", "Yes", "Critical", "Yes", "Critical"],
        ["Orders", "Yes", "Yes", "Partial", "Partial", "Yes", "Yes"],
        ["Profile", "Yes", "Yes", "Partial", "Partial", "Yes", "Yes"],
        ["Shell", "Yes", "Yes", "Critical", "Critical", "Yes", "Critical"]
      ]
    },
    {
      type: "paragraph",
      text: "Checkout gets heavier test coverage because it is business-critical."
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
        ["Only unit testing remotes", "Misses runtime composition bugs"],
        ["No contract tests", "Independent deployment becomes unsafe"],
        ["No remote failure tests", "Shell may crash in production"],
        ["Testing only happy paths", "Critical failures go unnoticed"],
        ["No visual tests", "UI consistency degrades"],
        ["No performance budgets", "Bundle size grows silently"],
        ["No deployment smoke tests", "Broken remote can go live"],
        ["No production monitoring", "Issues are discovered by users"],
        ["One team owns all tests", "Domain ownership becomes unclear"],
        ["E2E tests for everything", "Slow, brittle pipeline"]
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
      text: "Q1. What types of tests are important for micro frontends?"
    },
    {
      type: "paragraph",
      text: "Micro frontends need unit tests, component tests, contract tests, integration tests, E2E tests, visual regression tests, performance checks, deployment smoke tests, and production monitoring. Unit tests are not enough because many failures happen at the runtime boundary between shell and remotes."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. What is contract testing in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Contract testing verifies that the shell and remotes agree on exposed modules, props, event names, payload shapes, route contracts, and shared dependency expectations. It helps catch breaking changes before independent deployments reach production."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. Why are E2E tests important?"
    },
    {
      type: "paragraph",
      text: "E2E tests validate complete user journeys across multiple remotes. For example, search product, add to cart, checkout, and order confirmation. These flows often cross multiple micro frontend boundaries, so unit tests cannot fully validate them."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How do you test remote loading failure?"
    },
    {
      type: "paragraph",
      text: "Simulate failures such as remoteEntry returning 404, chunk load error, slow remote response, or remote runtime crash. Verify that the shell shows fallback UI, keeps navigation alive, and logs the error with remote name and version."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How do you make independent deployment safe?"
    },
    {
      type: "paragraph",
      text: "Use contract tests, deployment smoke tests, preview environments, versioned remote manifests, critical E2E checks, monitoring, and rollback support. Independent deployment without validation is risky."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What should be tested before deploying a checkout remote?"
    },
    {
      type: "paragraph",
      text: "Checkout should have unit tests, form validation tests, contract tests, integration tests with shell, critical E2E tests, accessibility tests, visual regression tests, performance checks, smoke tests, monitoring metadata, and rollback readiness."
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
      text: "“How would you test a micro frontend architecture?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would test it at multiple layers because the main risk is not only inside each remote, but also at runtime boundaries.\n\nEach remote should have unit and component tests for its own UI and domain logic. Then I would add contract tests to verify that the shell and remotes agree on exposed modules, props, event names, payload shapes, route ownership, and shared dependency versions.\n\nNext, I would add integration tests to verify that the shell can load each remote correctly and show fallback UI when remote loading fails. For business-critical journeys, I would use E2E tests such as search, add to cart, checkout, and order confirmation.\n\nI would also add visual regression tests for design consistency, accessibility checks for usability, performance budgets for each remote, and deployment smoke tests to confirm remoteEntry.js and exposed modules are healthy.\n\nFinally, I would treat production monitoring as part of the testing strategy. I would track remote load failures, chunk errors, fallback frequency, Web Vitals, and error rates by remote version. That makes independent deployment safer and debuggable."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Final Testing Checklist"
    },
    {
      type: "checklist",
      items: [
        "Unit tests pass.",
        "Component tests pass.",
        "Contract tests pass.",
        "Exposed modules are validated.",
        "Event payloads are validated.",
        "Shared dependency versions are compatible.",
        "Shell integration works.",
        "Remote failure fallback works.",
        "Critical E2E journeys pass.",
        "Visual regression checks pass.",
        "Accessibility checks pass.",
        "Bundle size budget passes.",
        "remoteEntry.js is reachable.",
        "Deployment smoke test passes.",
        "Monitoring metadata is attached.",
        "Rollback target is available."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "30. Summary"
    },
    {
      type: "paragraph",
      text: "Testing micro frontends requires more than normal frontend testing."
    },
    {
      type: "paragraph",
      text: "You must test:"
    },
    {
      type: "blockquote",
      text: "Individual remote behavior\nShell and remote contracts\nRuntime composition\nRemote loading failure\nCross-remote user journeys\nVisual consistency\nAccessibility\nPerformance\nDeployment health\nProduction behavior"
    },
    {
      type: "paragraph",
      text: "The most important idea:"
    },
    {
      type: "blockquote",
      text: "Micro frontend testing must protect independent deployment."
    },
    {
      type: "paragraph",
      text: "If teams deploy independently, tests must verify that independent changes do not break the composed product."
    },
    {
      type: "paragraph",
      text: "A good final takeaway:"
    },
    {
      type: "blockquote",
      text: "Unit tests prove a remote works alone. Contract, integration, and E2E tests prove it works inside the product."
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
