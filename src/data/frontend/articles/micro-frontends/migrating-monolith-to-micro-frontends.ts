import type { FrontendArticle } from "../../articles";

export const migratingMonolithToMicroFrontends: FrontendArticle = {
  slug: "migrating-monolith-to-micro-frontends",
  title: "Migrating a Frontend Monolith to Micro Frontends",
  description: "Learn how to migrate a frontend monolith to micro frontends using the strangler pattern, domain boundaries, shell integration, routing migration, shared design system, deployment safety, rollback, and observability.",
  difficulty: "Architect",
  readTime: "16 min read",
  tags: [
    "Micro Frontends",
    "Migration",
    "Frontend Architecture",
    "Strangler Pattern",
    "System Design"
  ],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 13, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Migrating a frontend monolith to micro frontends is not a simple refactor."
    },
    {
      type: "paragraph",
      text: "It is an architecture migration."
    },
    {
      type: "paragraph",
      text: "A bad migration creates:"
    },
    {
      type: "code",
      language: "text",
      code: "Two broken systems\nDuplicate UI\nRouting conflicts\nShared state chaos\nDeployment risk\nTeam confusion\nRuntime failures"
    },
    {
      type: "paragraph",
      text: "A good migration is incremental, domain-driven, measurable, and reversible."
    },
    {
      type: "paragraph",
      text: "The goal is not to rewrite everything."
    },
    {
      type: "paragraph",
      text: "The goal is to safely extract parts of the monolith into independently owned frontend applications while keeping the product working for users."
    },
    {
      type: "paragraph",
      text: "This article explains how to migrate a frontend monolith to micro frontends using a practical, interview-ready approach."
    },
    {
      type: "heading",
      level: 2,
      text: "1. The Starting Point: Frontend Monolith"
    },
    {
      type: "paragraph",
      text: "Most products start with one frontend app."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "frontend-monolith\n├── app\n├── routes\n├── pages\n│   ├── home\n│   ├── catalog\n│   ├── product-details\n│   ├── cart\n│   ├── checkout\n│   ├── orders\n│   └── profile\n├── shared\n│   ├── ui\n│   ├── hooks\n│   ├── utils\n│   └── api\n└── state"
    },
    {
      type: "paragraph",
      text: "This is normal."
    },
    {
      type: "paragraph",
      text: "A monolith is not automatically bad."
    },
    {
      type: "paragraph",
      text: "It becomes a problem when it starts blocking teams and releases."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Why Migrate?"
    },
    {
      type: "paragraph",
      text: "Migration should have a clear business or engineering reason."
    },
    {
      type: "paragraph",
      text: "Good reasons:"
    },
    {
      type: "code",
      language: "text",
      code: "Multiple teams are blocked by one release cycle.\nBuild and test pipelines are too slow.\nOwnership boundaries are unclear.\nA single bug can delay full frontend release.\nTeams need independent deployment.\nThe product has stable business domains.\nThe company wants incremental framework migration."
    },
    {
      type: "paragraph",
      text: "Weak reasons:"
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends are trendy.\nA conference talk recommended it.\nA big company uses it.\nWe want to use Module Federation.\nWe think splitting code automatically improves performance."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "I would migrate to micro frontends only when team ownership and release independence justify the complexity."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Migration Goal"
    },
    {
      type: "paragraph",
      text: "The migration goal should be specific."
    },
    {
      type: "paragraph",
      text: "Bad goal:"
    },
    {
      type: "code",
      language: "text",
      code: "Move frontend to micro frontends."
    },
    {
      type: "paragraph",
      text: "Good goal:"
    },
    {
      type: "code",
      language: "text",
      code: "Extract the catalog domain into an independently built and deployed remote while keeping the existing monolith stable."
    },
    {
      type: "paragraph",
      text: "Better:"
    },
    {
      type: "code",
      language: "text",
      code: "Reduce release coordination between Catalog and Checkout teams by extracting Catalog first, then Cart, then Profile, with rollback support at each step."
    },
    {
      type: "paragraph",
      text: "A migration should improve:"
    },
    {
      type: "code",
      language: "text",
      code: "Team ownership\nRelease independence\nBuild isolation\nDeployment confidence\nRuntime reliability\nObservability"
    },
    {
      type: "heading",
      level: 2,
      text: "4. Do Not Big-Bang Rewrite"
    },
    {
      type: "paragraph",
      text: "The biggest mistake is trying to rewrite the full frontend at once."
    },
    {
      type: "paragraph",
      text: "Bad migration:"
    },
    {
      type: "code",
      language: "text",
      code: "Stop feature development.\nCreate new shell.\nRewrite catalog.\nRewrite cart.\nRewrite checkout.\nRewrite profile.\nReplace monolith after 12 months."
    },
    {
      type: "paragraph",
      text: "Problems:"
    },
    {
      type: "code",
      language: "text",
      code: "Huge delivery risk\nNo incremental value\nFeature freeze pressure\nBusiness changes during rewrite\nHidden bugs discovered late\nHard rollback"
    },
    {
      type: "paragraph",
      text: "Better migration:"
    },
    {
      type: "code",
      language: "text",
      code: "Keep monolith running.\nExtract one domain.\nCompose new remote beside monolith.\nRoute small traffic.\nMeasure.\nStabilize.\nRepeat."
    },
    {
      type: "paragraph",
      text: "This is the strangler approach."
    },
    {
      type: "heading",
      level: 2,
      text: "5. The Strangler Pattern"
    },
    {
      type: "paragraph",
      text: "The strangler pattern means gradually replacing parts of an old system with a new architecture."
    },
    {
      type: "paragraph",
      text: "For frontend migration:"
    },
    {
      type: "code",
      language: "text",
      code: "Existing Monolith\n      │\n      │ extract one domain\n      ▼\nShell + Monolith + One Remote\n      │\n      │ extract next domain\n      ▼\nShell + Multiple Remotes + Smaller Monolith\n      │\n      │ repeat\n      ▼\nMicro Frontend Platform"
    },
    {
      type: "paragraph",
      text: "You do not remove the monolith immediately."
    },
    {
      type: "paragraph",
      text: "You slowly shrink it."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Migration Stages"
    },
    {
      type: "paragraph",
      text: "A practical migration can follow these stages:"
    },
    {
      type: "code",
      language: "text",
      code: "Stage 0: Clean up monolith boundaries\nStage 1: Introduce shell/container\nStage 2: Extract first low-risk remote\nStage 3: Route traffic to remote\nStage 4: Add independent deployment\nStage 5: Add monitoring and rollback\nStage 6: Extract next domain\nStage 7: Retire monolith pieces"
    },
    {
      type: "paragraph",
      text: "This avoids unnecessary risk."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Stage 0: Prepare the Monolith"
    },
    {
      type: "paragraph",
      text: "Before extracting anything, improve the monolith structure."
    },
    {
      type: "paragraph",
      text: "If the monolith is a mess, extracting a remote will be painful."
    },
    {
      type: "paragraph",
      text: "Preparation steps:"
    },
    {
      type: "code",
      language: "text",
      code: "Organize code by domain.\nReduce circular dependencies.\nMove shared UI into design system.\nSeparate domain APIs.\nAdd route-level code splitting.\nAdd tests around critical flows.\nDefine ownership boundaries."
    },
    {
      type: "paragraph",
      text: "Example target structure:"
    },
    {
      type: "code",
      language: "text",
      code: "src/\n├── features/\n│   ├── catalog/\n│   ├── cart/\n│   ├── checkout/\n│   ├── profile/\n│   └── orders/\n├── shared/\n│   ├── ui/\n│   ├── utils/\n│   └── config/\n└── platform/\n    ├── auth/\n    ├── routing/\n    └── analytics/"
    },
    {
      type: "paragraph",
      text: "This may already solve many problems."
    },
    {
      type: "paragraph",
      text: "Sometimes after modularizing the monolith, micro frontends may not be needed yet."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Identify Domain Boundaries"
    },
    {
      type: "paragraph",
      text: "Good boundaries are business-domain boundaries."
    },
    {
      type: "paragraph",
      text: "Good candidates:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog\nSearch\nProduct Details\nCart\nCheckout\nOrders\nProfile\nMarketing"
    },
    {
      type: "paragraph",
      text: "Bad candidates:"
    },
    {
      type: "code",
      language: "text",
      code: "Button\nProduct image\nPrice label\nHeader text\nOne small filter component"
    },
    {
      type: "paragraph",
      text: "Boundary checklist:"
    },
    {
      type: "code",
      language: "text",
      code: "Can one team own this area?\nCan it be tested independently?\nCan it be deployed independently?\nDoes it have clear route ownership?\nDoes it have limited communication with other areas?\nDoes it have its own API/domain model?\nCan it fail without breaking the whole product?"
    },
    {
      type: "paragraph",
      text: "If the answer is no, the boundary may be wrong."
    },
    {
      type: "heading",
      level: 2,
      text: "9. Choosing the First Remote"
    },
    {
      type: "paragraph",
      text: "Do not start with the riskiest domain."
    },
    {
      type: "paragraph",
      text: "Bad first extraction:"
    },
    {
      type: "code",
      language: "text",
      code: "Checkout\nPayment\nAuthentication\nOrder placement"
    },
    {
      type: "paragraph",
      text: "These areas are business-critical and failure-sensitive."
    },
    {
      type: "paragraph",
      text: "Better first candidates:"
    },
    {
      type: "code",
      language: "text",
      code: "Marketing landing page\nProduct listing page\nProfile page\nOrder history page\nRecommendations widget"
    },
    {
      type: "paragraph",
      text: "A good first remote should be:"
    },
    {
      type: "code",
      language: "text",
      code: "Visible enough to prove value\nLow enough risk to recover safely\nClear in ownership\nLimited in cross-app communication\nNot deeply tied to checkout/payment"
    },
    {
      type: "paragraph",
      text: "Example first extraction:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote"
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "code",
      language: "text",
      code: "Clear domain\nOwns category/listing pages\nCan be route-owned\nHigh value\nUsually safer than checkout"
    },
    {
      type: "heading",
      level: 2,
      text: "10. Introduce the Shell App"
    },
    {
      type: "paragraph",
      text: "At some point, you need a shell or container."
    },
    {
      type: "paragraph",
      text: "The shell owns:"
    },
    {
      type: "code",
      language: "text",
      code: "Global layout\nTop-level routing\nNavigation\nAuthentication bootstrap\nRemote loading\nError boundaries\nFallback UI\nFeature flag bootstrap\nAnalytics initialization"
    },
    {
      type: "paragraph",
      text: "During migration, the shell may compose both:"
    },
    {
      type: "code",
      language: "text",
      code: "Old monolith routes\nNew remote routes"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── /                         → Monolith Home\n├── /categories/:slug         → Catalog Remote\n├── /cart                     → Monolith Cart\n├── /checkout                 → Monolith Checkout\n└── /profile                  → Monolith Profile"
    },
    {
      type: "paragraph",
      text: "The shell becomes the migration bridge."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Coexistence Architecture"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: "                    ┌──────────────────────┐\n                    │      Shell App        │\n                    │ Routing/Auth/Layout   │\n                    └──────────┬───────────┘\n                               │\n          ┌────────────────────┴────────────────────┐\n          │                                         │\n          ▼                                         ▼\n┌──────────────────────┐                 ┌──────────────────────┐\n│ Existing Monolith     │                 │ Catalog Remote        │\n│ Cart/Checkout/Profile │                 │ Product Listing       │\n└──────────────────────┘                 └──────────────────────┘"
    },
    {
      type: "paragraph",
      text: "This lets the team extract gradually."
    },
    {
      type: "paragraph",
      text: "The user should not feel the difference."
    },
    {
      type: "heading",
      level: 2,
      text: "12. Routing Migration"
    },
    {
      type: "paragraph",
      text: "Routing is one of the hardest parts."
    },
    {
      type: "paragraph",
      text: "Before migration:"
    },
    {
      type: "code",
      language: "text",
      code: "Monolith owns all routes."
    },
    {
      type: "paragraph",
      text: "During migration:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns top-level route decisions.\nMonolith owns old routes.\nRemote owns extracted route subtree."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/:slug → Catalog Remote\n/cart             → Monolith Cart\n/checkout         → Monolith Checkout\n/profile          → Monolith Profile"
    },
    {
      type: "paragraph",
      text: "After more extraction:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/:slug → Catalog Remote\n/cart             → Cart Remote\n/checkout         → Checkout Remote\n/profile          → Profile Remote"
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Deep links and refresh must work throughout migration."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Handling Deep Links"
    },
    {
      type: "paragraph",
      text: "Deep links must keep working."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/shoes?page=2&sort=price"
    },
    {
      type: "paragraph",
      text: "Expected flow:"
    },
    {
      type: "code",
      language: "text",
      code: "User opens URL directly\n      │\n      ▼\nShell loads\n      │\n      ▼\nShell matches /categories/:slug\n      │\n      ▼\nCatalog Remote loads\n      │\n      ▼\nCatalog Remote reads query params\n      │\n      ▼\nProducts render"
    },
    {
      type: "paragraph",
      text: "Do not rely on in-memory navigation state."
    },
    {
      type: "paragraph",
      text: "Use URL state for route-level state like:"
    },
    {
      type: "code",
      language: "text",
      code: "Search query\nFilters\nSorting\nPagination\nCategory slug\nSelected tab"
    },
    {
      type: "heading",
      level: 2,
      text: "14. Shared Design System Migration"
    },
    {
      type: "paragraph",
      text: "Before extracting remotes, stabilize the design system."
    },
    {
      type: "paragraph",
      text: "If every part of the monolith uses different UI patterns, micro frontends will make inconsistency worse."
    },
    {
      type: "paragraph",
      text: "Design system migration steps:"
    },
    {
      type: "code",
      language: "text",
      code: "Define design tokens.\nCreate shared components.\nMigrate common UI patterns.\nAdd visual regression tests.\nDocument usage guidelines.\nVersion the design system.\nMake remotes consume it consistently."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog remote uses its own buttons.\nCart remote uses another modal system.\nCheckout remote invents new form components."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "code",
      language: "text",
      code: "All remotes use shared design tokens and approved components."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Shared State Migration"
    },
    {
      type: "paragraph",
      text: "Shared state must be handled carefully."
    },
    {
      type: "paragraph",
      text: "Monoliths often have one global store."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Redux Store\n├── auth\n├── catalog\n├── cart\n├── checkout\n├── profile\n└── orders"
    },
    {
      type: "paragraph",
      text: "During migration, avoid exposing the whole store to every remote."
    },
    {
      type: "paragraph",
      text: "Better approach:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell owns platform state.\nRemotes own domain state.\nBackend owns business-critical state."
    },
    {
      type: "table",
      headers: ["State", "Recommended Owner"],
      rows: [
        ["Auth summary", "Shell/auth provider"],
        ["Theme", "Shell/platform"],
        ["Locale", "Shell/platform"],
        ["Product filters", "Catalog Remote + URL"],
        ["Cart", "Cart API + Cart Remote"],
        ["Checkout", "Checkout API/session + Checkout Remote"],
        ["Orders", "Orders API + Orders Remote"],
        ["Profile", "Profile API + Profile Remote"]
      ]
    },
    {
      type: "paragraph",
      text: "Avoid migrating by simply sharing the old global store across all remotes."
    },
    {
      type: "paragraph",
      text: "That creates a distributed monolith."
    },
    {
      type: "heading",
      level: 2,
      text: "16. API and Backend Migration"
    },
    {
      type: "paragraph",
      text: "Frontend boundaries should align with backend/API ownership where possible."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote → Catalog API\nCart Remote → Cart API\nCheckout Remote → Checkout API\nProfile Remote → Profile API\nOrders Remote → Orders API"
    },
    {
      type: "paragraph",
      text: "If the monolith currently uses one large API client, gradually split it."
    },
    {
      type: "paragraph",
      text: "Bad:"
    },
    {
      type: "code",
      language: "text",
      code: "Every remote imports one giant shared API client with all domains."
    },
    {
      type: "paragraph",
      text: "Good:"
    },
    {
      type: "code",
      language: "text",
      code: "Each remote owns or consumes its domain API client."
    },
    {
      type: "paragraph",
      text: "For complex aggregation, consider BFF patterns."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Communication During Migration"
    },
    {
      type: "paragraph",
      text: "During coexistence, the monolith and remote may need to communicate."
    },
    {
      type: "paragraph",
      text: "Use explicit contracts."
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "code",
      language: "text",
      code: "URL state\nBackend state\nSmall custom events\nShell-mediated platform context"
    },
    {
      type: "paragraph",
      text: "Avoid:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote directly mutates monolith store.\nMonolith imports remote internals.\nRemote reads hidden localStorage keys from monolith."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote emits product:viewed\nShell analytics records event\nMonolith does not need to know remote internals"
    },
    {
      type: "heading",
      level: 2,
      text: "18. Deployment Migration"
    },
    {
      type: "paragraph",
      text: "Initially, the extracted remote may deploy with the monolith."
    },
    {
      type: "paragraph",
      text: "But the final goal is independent deployment."
    },
    {
      type: "paragraph",
      text: "Migration steps:"
    },
    {
      type: "code",
      language: "text",
      code: "Step 1: Remote code extracted but deployed with monolith.\nStep 2: Remote has separate build.\nStep 3: Remote artifact published separately.\nStep 4: Shell loads remote at runtime.\nStep 5: Remote has independent CI/CD.\nStep 6: Remote can be rolled back independently."
    },
    {
      type: "paragraph",
      text: "Do not claim success until independent deployment and rollback are working."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Remote Manifest During Migration"
    },
    {
      type: "paragraph",
      text: "Use a manifest to control which remote version the shell loads."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"catalogApp\": {\n    \"version\": \"1.0.0\",\n    \"url\": \"https://cdn.company.com/catalog/1.0.0/remoteEntry.js\",\n    \"owner\": \"catalog-team\",\n    \"rollbackVersion\": \"0.9.8\"\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "code",
      language: "text",
      code: "Controlled rollout\nRollback support\nEnvironment promotion\nPer-remote version visibility\nRelease governance"
    },
    {
      type: "paragraph",
      text: "During migration, this gives safety."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Rollback Strategy"
    },
    {
      type: "paragraph",
      text: "Every extraction must have a rollback plan."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog Remote v1.0.0 fails in production."
    },
    {
      type: "paragraph",
      text: "Rollback options:"
    },
    {
      type: "code",
      language: "text",
      code: "Route /categories back to monolith.\nUpdate manifest to previous remote version.\nDisable feature flag for remote route.\nShow fallback UI."
    },
    {
      type: "paragraph",
      text: "The safest migration includes a route-level fallback."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "/categories/:slug\n   ├── primary: Catalog Remote\n   └── fallback: Monolith Catalog Page"
    },
    {
      type: "paragraph",
      text: "Rollback must be tested before release."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Feature Flags for Migration"
    },
    {
      type: "paragraph",
      text: "Feature flags help control migration risk."
    },
    {
      type: "paragraph",
      text: "Use flags for:"
    },
    {
      type: "code",
      language: "text",
      code: "Enable new catalog remote\nRoute percentage of users to remote\nEnable new cart drawer\nEnable new profile page\nDisable broken remote quickly"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "catalog_remote_enabled = true\ncatalog_remote_rollout_percentage = 10"
    },
    {
      type: "paragraph",
      text: "Rollout plan:"
    },
    {
      type: "code",
      language: "text",
      code: "Internal users → 1% → 10% → 25% → 50% → 100%"
    },
    {
      type: "paragraph",
      text: "Monitor at each stage."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Testing Migration"
    },
    {
      type: "paragraph",
      text: "Migration requires extra testing."
    },
    {
      type: "paragraph",
      text: "Test:"
    },
    {
      type: "code",
      language: "text",
      code: "Old route still works.\nNew remote route works.\nDeep links work.\nRefresh works.\nAuth works.\nShared layout works.\nAnalytics works.\nFallback to monolith works.\nRemote loading failure is handled.\nE2E critical journeys still pass."
    },
    {
      type: "paragraph",
      text: "Example E2E journey:"
    },
    {
      type: "code",
      language: "text",
      code: "Open category page\nApply filter\nOpen product\nAdd to cart\nView cart\nCheckout"
    },
    {
      type: "paragraph",
      text: "If catalog is migrated but checkout is still monolith, the cross-boundary journey must still work."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Observability During Migration"
    },
    {
      type: "paragraph",
      text: "You need to know whether the new remote is healthier than the old monolith route."
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "code",
      language: "text",
      code: "Remote load success/failure\nRemote runtime errors\nRemote version\nRoute\nShell version\nFallback usage\nConversion impact\nWeb Vitals\nAPI errors\nUser journey failures"
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: "{\n  \"route\": \"/categories/shoes\",\n  \"renderer\": \"catalogRemote\",\n  \"remoteVersion\": \"1.0.0\",\n  \"shellVersion\": \"2.4.1\",\n  \"event\": \"remote_loaded\"\n}"
    },
    {
      type: "paragraph",
      text: "Compare:"
    },
    {
      type: "code",
      language: "text",
      code: "Monolith catalog route performance\nvs\nCatalog remote route performance"
    },
    {
      type: "paragraph",
      text: "Migration should be measured, not assumed successful."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Team Ownership During Migration"
    },
    {
      type: "paragraph",
      text: "Migration fails without ownership."
    },
    {
      type: "paragraph",
      text: "Define:"
    },
    {
      type: "table",
      headers: ["Area", "Owner"],
      rows: [
        ["Shell app", "Platform Team"],
        ["Catalog extraction", "Catalog Team"],
        ["Design system", "Design System Team"],
        ["Routing migration", "Platform + Domain Team"],
        ["CI/CD setup", "Platform Team"],
        ["Monitoring", "Platform + Domain Team"],
        ["Rollback process", "Platform + Domain Team"]
      ]
    },
    {
      type: "paragraph",
      text: "Each remote should have:"
    },
    {
      type: "code",
      language: "text",
      code: "Code owner\nDeployment owner\nMonitoring owner\nIncident owner\nDocumentation owner"
    },
    {
      type: "paragraph",
      text: "No ownership means no accountability."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Migration Roadmap Example"
    },
    {
      type: "paragraph",
      text: "A practical migration roadmap:"
    },
    {
      type: "code",
      language: "text",
      code: "Phase 1: Modularize monolith\nPhase 2: Introduce shell routing layer\nPhase 3: Extract Catalog Remote\nPhase 4: Add manifest-based loading\nPhase 5: Add monitoring and rollback\nPhase 6: Extract Profile Remote\nPhase 7: Extract Cart Remote\nPhase 8: Extract Orders Remote\nPhase 9: Extract Checkout Remote last\nPhase 10: Retire old monolith routes"
    },
    {
      type: "paragraph",
      text: "Checkout is extracted later because it is business-critical."
    },
    {
      type: "heading",
      level: 2,
      text: "26. What to Extract First"
    },
    {
      type: "paragraph",
      text: "Good first candidates:"
    },
    {
      type: "code",
      language: "text",
      code: "Marketing landing page\nCatalog listing\nProfile page\nOrder history\nRecommendations widget"
    },
    {
      type: "paragraph",
      text: "Poor first candidates:"
    },
    {
      type: "code",
      language: "text",
      code: "Checkout payment\nAuthentication\nOrder placement\nComplex shared cart logic"
    },
    {
      type: "paragraph",
      text: "Decision table:"
    },
    {
      type: "table",
      headers: ["Candidate", "First Extraction?", "Reason"],
      rows: [
        ["Marketing page", "Good", "Low risk"],
        ["Catalog page", "Good", "Clear domain"],
        ["Profile page", "Good", "Clear ownership"],
        ["Cart", "Medium", "More shared state"],
        ["Checkout", "Poor initially", "Critical flow"],
        ["Auth", "Poor initially", "Platform-critical"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "27. Common Migration Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Big-bang rewrite", "High risk and slow value"],
        ["Extracting checkout first", "Too risky"],
        ["No rollback path", "Production incidents become severe"],
        ["Sharing old global store everywhere", "Creates distributed monolith"],
        ["No shell ownership model", "Routing becomes chaotic"],
        ["No design system", "UI inconsistency grows"],
        ["No contract tests", "Runtime breakage"],
        ["No observability", "Migration health unknown"],
        ["Too many tiny remotes", "Operational overhead"],
        ["Migrating without business reason", "Architecture vanity"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "28. Interview Questions"
    },
    {
      type: "heading",
      level: 3,
      text: "Q1. How would you migrate a frontend monolith to micro frontends?"
    },
    {
      type: "paragraph",
      text: "I would use an incremental strangler approach. First, I would modularize the monolith and identify domain boundaries. Then I would introduce a shell that can route to both old monolith pages and new remotes. I would extract one low-risk, high-value domain first, such as catalog or profile, deploy it independently, monitor it, and add rollback. After it stabilizes, I would repeat with other domains."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. What would you extract first?"
    },
    {
      type: "paragraph",
      text: "I would avoid extracting checkout or authentication first because they are critical flows. I would start with a domain that has clear ownership and limited coupling, such as catalog listing, profile, order history, or a marketing page."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. How do you reduce migration risk?"
    },
    {
      type: "paragraph",
      text: "Use feature flags, route-level fallback, contract tests, remote loading fallback UI, manifest-based versioning, canary rollout, monitoring, and rollback to monolith or previous remote version."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. How do you handle shared state during migration?"
    },
    {
      type: "paragraph",
      text: "I would avoid exposing the old global store to all remotes. Platform-level state like auth, theme, and locale can be provided by the shell. Domain state should live inside the owning remote or backend APIs. Business-critical state like cart and checkout should be backend-first."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How do you know the migration is successful?"
    },
    {
      type: "paragraph",
      text: "The migration is successful when the extracted domain is independently owned, independently deployed, monitored, rollback-safe, integrated with routing/auth/design system, and no longer blocks or depends on the monolith release cycle."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Strong Senior Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“How would you migrate an existing frontend monolith to micro frontends?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would not do a big-bang rewrite. I would use a strangler-style migration.\n\nFirst, I would clean up the monolith by organizing it around domains like catalog, cart, checkout, profile, and orders. Then I would introduce a shell app that owns top-level routing, auth bootstrap, layout, remote loading, and fallback UI.\n\nNext, I would pick one low-risk, high-value boundary such as catalog or profile. I would extract it as a remote, compose it beside the monolith, and route only that path to the new remote. I would use feature flags and a remote manifest so we can roll out gradually and roll back quickly.\n\nI would avoid extracting checkout or auth first because those are critical flows. I would also avoid sharing the old global store across remotes because that creates a distributed monolith. Instead, I would move toward URL state, backend-owned business state, and explicit event contracts.\n\nThe migration is only successful when the extracted remote has independent CI/CD, contract tests, observability, clear ownership, and rollback support."
    },
    {
      type: "heading",
      level: 2,
      text: "30. Final Migration Checklist"
    },
    {
      type: "checklist",
      items: [
        "Is the domain boundary clear?",
        "Does one team own it?",
        "Is it low enough risk for first extraction?",
        "Are route boundaries defined?",
        "Do deep links work?",
        "Is shared UI available through design system?",
        "Is state ownership clear?",
        "Are communication contracts documented?",
        "Can the shell load the remote safely?",
        "Is fallback UI available?",
        "Is route-level rollback possible?",
        "Are feature flags available?",
        "Are contract tests in place?",
        "Is monitoring per remote available?",
        "Can the remote deploy independently?",
        "Can it roll back independently?"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "31. Summary"
    },
    {
      type: "paragraph",
      text: "Migrating from a frontend monolith to micro frontends should be incremental."
    },
    {
      type: "paragraph",
      text: "Do not rewrite everything."
    },
    {
      type: "paragraph",
      text: "Do not start with the riskiest flow."
    },
    {
      type: "paragraph",
      text: "Do not share the old global store everywhere."
    },
    {
      type: "paragraph",
      text: "A good migration follows this path:"
    },
    {
      type: "code",
      language: "text",
      code: "Modularize monolith\nIdentify domains\nIntroduce shell\nExtract one remote\nRoute gradually\nMonitor\nRollback if needed\nRepeat\nRetire old monolith pieces"
    },
    {
      type: "paragraph",
      text: "The strongest takeaway:"
    },
    {
      type: "blockquote",
      text: "A successful micro frontend migration is not measured by how much code was split. It is measured by whether teams can own, deploy, monitor, and roll back their domains independently."
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
