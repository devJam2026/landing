import type { FrontendArticle } from "../../articles";

export const microFrontendsVsModularMonolith: FrontendArticle = {
  slug: "micro-frontends-vs-modular-monolith",
  title: "Micro Frontends vs Modular Monolith",
  description: "Understand when to choose micro frontends, when to prefer a modular frontend monolith, and how to explain the tradeoffs in senior frontend architecture interviews.",
  difficulty: "Senior",
  readTime: "14 min read",
  tags: [
    "Micro Frontends",
    "Modular Monolith",
    "Frontend Architecture",
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
      text: "Micro frontends are powerful, but they are not always the right choice."
    },
    {
      type: "paragraph",
      text: "One of the strongest signals in a senior frontend or frontend architect interview is not saying:"
    },
    {
      type: "blockquote",
      text: "“Use micro frontends everywhere.”"
    },
    {
      type: "paragraph",
      text: "A stronger answer is:"
    },
    {
      type: "blockquote",
      text: "“I would first check whether a modular monolith is enough. I would only choose micro frontends if team ownership, domain boundaries, and independent deployment justify the added complexity.”"
    },
    {
      type: "paragraph",
      text: "This article compares **micro frontends** and **modular monoliths** so you can make better architecture decisions and explain the tradeoffs confidently in interviews."
    },
    {
      type: "heading",
      level: 2,
      text: "1. The Core Question"
    },
    {
      type: "paragraph",
      text: "When a frontend application grows, teams often ask:"
    },
    {
      type: "code",
      language: "text",
      code: "Should we split this into micro frontends?"
    },
    {
      type: "paragraph",
      text: "But the better question is:"
    },
    {
      type: "code",
      language: "text",
      code: "Do we need runtime independence, or do we only need better internal structure?"
    },
    {
      type: "paragraph",
      text: "If the problem is messy code organization, a modular monolith may be enough."
    },
    {
      type: "paragraph",
      text: "If the problem is multiple teams blocking each other because of shared release cycles, micro frontends may be worth considering."
    },
    {
      type: "heading",
      level: 2,
      text: "2. What Is a Frontend Monolith?"
    },
    {
      type: "paragraph",
      text: "A frontend monolith is a single frontend application that contains all product features."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "frontend-app\n├── home\n├── catalog\n├── product-details\n├── cart\n├── checkout\n├── orders\n├── profile\n└── shared"
    },
    {
      type: "paragraph",
      text: "It has:"
    },
    {
      type: "code",
      language: "text",
      code: "One repository\nOne build pipeline\nOne deployment\nOne runtime\nOne dependency graph\nOne release cycle"
    },
    {
      type: "paragraph",
      text: "This is not automatically bad."
    },
    {
      type: "paragraph",
      text: "For many products, this is the simplest and most effective architecture."
    },
    {
      type: "heading",
      level: 2,
      text: "3. When a Monolith Works Well"
    },
    {
      type: "paragraph",
      text: "A frontend monolith works well when:"
    },
    {
      type: "code",
      language: "text",
      code: "The team is small.\nThe product is still evolving quickly.\nThe release cycle is shared.\nThe codebase is manageable.\nThe app has limited domains.\nThe CI/CD pipeline is not a bottleneck.\nIndependent deployment is not required."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Startup MVP\nInternal dashboard\nSmall SaaS app\nSingle-team product\nMarketing site\nSimple admin portal"
    },
    {
      type: "paragraph",
      text: "In these cases, micro frontends may create more problems than they solve."
    },
    {
      type: "heading",
      level: 2,
      text: "4. What Is a Modular Monolith?"
    },
    {
      type: "paragraph",
      text: "A modular monolith is still one deployable frontend application, but the code is organized into clear modules."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "src/\n├── app/\n├── features/\n│   ├── catalog/\n│   ├── cart/\n│   ├── checkout/\n│   ├── orders/\n│   └── profile/\n├── shared/\n│   ├── ui/\n│   ├── hooks/\n│   ├── utils/\n│   └── config/\n└── platform/\n    ├── auth/\n    ├── routing/\n    └── analytics/"
    },
    {
      type: "paragraph",
      text: "The key idea:"
    },
    {
      type: "code",
      language: "text",
      code: "One deployment\nBut clear internal boundaries"
    },
    {
      type: "paragraph",
      text: "A modular monolith gives you structure without distributed runtime complexity."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Modular Monolith Characteristics"
    },
    {
      type: "paragraph",
      text: "A good modular monolith has:"
    },
    {
      type: "code",
      language: "text",
      code: "Feature-based folders\nClear domain ownership\nRestricted imports\nShared design system\nConsistent routing\nCentralized build\nSingle deployment pipeline\nStrong internal boundaries"
    },
    {
      type: "paragraph",
      text: "Example rule:"
    },
    {
      type: "code",
      language: "text",
      code: "checkout should not import internal files from catalog\ncart should not mutate checkout state\nfeatures should use shared contracts, not private internals"
    },
    {
      type: "paragraph",
      text: "Even inside one app, you can still enforce architectural discipline."
    },
    {
      type: "heading",
      level: 2,
      text: "6. What Are Micro Frontends?"
    },
    {
      type: "paragraph",
      text: "Micro frontends split the frontend into independently owned and independently deployable applications."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Shell App\n├── Catalog Remote\n├── Cart Remote\n├── Checkout Remote\n├── Orders Remote\n└── Profile Remote"
    },
    {
      type: "paragraph",
      text: "Each remote may have:"
    },
    {
      type: "code",
      language: "text",
      code: "Own repository\nOwn build pipeline\nOwn deployment\nOwn team\nOwn runtime artifact\nOwn monitoring\nOwn rollback path"
    },
    {
      type: "paragraph",
      text: "The shell composes them into one product experience."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Micro Frontend Characteristics"
    },
    {
      type: "paragraph",
      text: "Micro frontends are useful when you need:"
    },
    {
      type: "code",
      language: "text",
      code: "Independent team ownership\nIndependent deployment\nDomain-level release autonomy\nRuntime composition\nIncremental migration\nPer-domain scaling\nTechnology migration flexibility"
    },
    {
      type: "paragraph",
      text: "But they also introduce:"
    },
    {
      type: "code",
      language: "text",
      code: "Runtime loading failures\nDependency sharing complexity\nRouting coordination\nTesting complexity\nVersion compatibility issues\nDeployment governance\nObservability requirements\nRollback complexity"
    },
    {
      type: "paragraph",
      text: "Micro frontends move complexity from the codebase into architecture and operations."
    },
    {
      type: "heading",
      level: 2,
      text: "8. High-Level Comparison"
    },
    {
      type: "table",
      headers: ["Area", "Modular Monolith", "Micro Frontends"],
      rows: [
        ["Deployment", "One deployment", "Multiple independent deployments"],
        ["Runtime", "One runtime app", "Composed runtime apps"],
        ["Complexity", "Lower", "Higher"],
        ["Team autonomy", "Medium", "High"],
        ["Release independence", "Low/medium", "High"],
        ["Build setup", "Simpler", "More complex"],
        ["Testing", "Easier", "More layers needed"],
        ["Observability", "Simpler", "Per-remote needed"],
        ["Rollback", "Whole app rollback", "Per-remote rollback"],
        ["Best for", "Small/mid teams", "Large multi-team products"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "9. Team Size Decision"
    },
    {
      type: "paragraph",
      text: "Team size is one of the biggest decision factors."
    },
    {
      type: "table",
      headers: ["Team Situation", "Better Choice"],
      rows: [
        ["1 frontend team", "Modular monolith"],
        ["2 small teams", "Modular monolith"],
        ["3–4 teams with clear domains", "Modular monolith or micro frontends"],
        ["5+ frontend teams", "Micro frontends may help"],
        ["Many teams blocked by one release train", "Micro frontends likely useful"]
      ]
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Micro frontends solve team-scaling problems more than code-splitting problems."
    },
    {
      type: "paragraph",
      text: "If one team owns everything, micro frontends are usually unnecessary."
    },
    {
      type: "heading",
      level: 2,
      text: "10. Domain Boundary Decision"
    },
    {
      type: "paragraph",
      text: "Micro frontends need strong domain boundaries."
    },
    {
      type: "paragraph",
      text: "Good domains:"
    },
    {
      type: "code",
      language: "text",
      code: "Catalog\nCart\nCheckout\nOrders\nProfile\nSearch"
    },
    {
      type: "paragraph",
      text: "Bad domains:"
    },
    {
      type: "code",
      language: "text",
      code: "Button\nHeader text\nProduct image\nPrice label\nSmall filter component"
    },
    {
      type: "paragraph",
      text: "If boundaries are too small, the system becomes fragmented."
    },
    {
      type: "paragraph",
      text: "Decision rule:"
    },
    {
      type: "code",
      language: "text",
      code: "If the domain can be owned, tested, deployed, monitored, and rolled back independently, it may be a good micro frontend boundary."
    },
    {
      type: "paragraph",
      text: "If not, keep it inside a modular monolith."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Deployment Comparison"
    },
    {
      type: "heading",
      level: 3,
      text: "Modular Monolith Deployment"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Single repo\n   │\n   ▼\nSingle CI/CD pipeline\n   │\n   ▼\nSingle build artifact\n   │\n   ▼\nSingle deployment"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "code",
      language: "text",
      code: "Simple\nPredictable\nEasy rollback\nNo runtime composition risk"
    },
    {
      type: "paragraph",
      text: "Limitations:"
    },
    {
      type: "code",
      language: "text",
      code: "All teams share release cycle\nOne broken area can block deployment\nLarge builds can become slow"
    },
    {
      type: "heading",
      level: 3,
      text: "Micro Frontend Deployment"
    },
    {
      type: "diagram",
      diagramType: "flow",
      content: "Catalog Repo ──► Catalog Deployment\nCart Repo ─────► Cart Deployment\nCheckout Repo ─► Checkout Deployment\nShell Repo ────► Shell Deployment"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "code",
      language: "text",
      code: "Independent releases\nPer-team ownership\nSmaller deployment blast radius\nFaster domain-level delivery"
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "code",
      language: "text",
      code: "Version mismatch\nRuntime loading failure\nShared dependency conflict\nRollback coordination\nManifest governance needed"
    },
    {
      type: "heading",
      level: 2,
      text: "12. Testing Comparison"
    },
    {
      type: "heading",
      level: 3,
      text: "Modular Monolith Testing"
    },
    {
      type: "paragraph",
      text: "Testing is simpler because everything is built together."
    },
    {
      type: "code",
      language: "text",
      code: "Unit tests\nComponent tests\nIntegration tests\nE2E tests"
    },
    {
      type: "paragraph",
      text: "The build catches many issues before deployment."
    },
    {
      type: "heading",
      level: 3,
      text: "Micro Frontend Testing"
    },
    {
      type: "paragraph",
      text: "Testing needs more layers:"
    },
    {
      type: "code",
      language: "text",
      code: "Unit tests per remote\nContract tests\nShell integration tests\nRemote loading tests\nE2E cross-remote tests\nVisual regression tests\nDeployment smoke tests\nProduction monitoring"
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "paragraph",
      text: "Because independent deployment creates integration risk."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "Unit tests prove a remote works alone. Contract and integration tests prove it works inside the product."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Performance Comparison"
    },
    {
      type: "paragraph",
      text: "A modular monolith can become large if not optimized."
    },
    {
      type: "paragraph",
      text: "Common risks:"
    },
    {
      type: "code",
      language: "text",
      code: "Large JavaScript bundle\nToo much shared code\nPoor code splitting\nSlow builds"
    },
    {
      type: "paragraph",
      text: "But micro frontends also have performance risks:"
    },
    {
      type: "code",
      language: "text",
      code: "Duplicate dependencies\nRemote loading waterfall\nMultiple runtime chunks\nremoteEntry.js loading cost\nInconsistent caching\nLayout shift from late-loaded remotes"
    },
    {
      type: "paragraph",
      text: "Micro frontends do not automatically improve performance."
    },
    {
      type: "paragraph",
      text: "They improve ownership and deployment independence."
    },
    {
      type: "paragraph",
      text: "Performance still needs:"
    },
    {
      type: "code",
      language: "text",
      code: "Route-level lazy loading\nBundle budgets\nShared dependency governance\nPreloading critical remotes\nWeb Vitals monitoring"
    },
    {
      type: "heading",
      level: 2,
      text: "14. Complexity Comparison"
    },
    {
      type: "paragraph",
      text: "Micro frontends add complexity in areas that modular monoliths avoid."
    },
    {
      type: "table",
      headers: ["Concern", "Modular Monolith", "Micro Frontends"],
      rows: [
        ["Routing", "Simple central routing", "Shell/remote ownership required"],
        ["Auth", "One app-level auth flow", "Shell + remote context design"],
        ["State", "One state model possible", "State ownership must be explicit"],
        ["Deployment", "One pipeline", "Many pipelines"],
        ["Rollback", "Roll back full app", "Roll back individual remotes"],
        ["Monitoring", "One app dashboard", "Per-remote observability"],
        ["Dependency", "One dependency graph", "Shared dependency strategy"],
        ["Failure", "App-level errors", "Remote-specific fallback needed"]
      ]
    },
    {
      type: "paragraph",
      text: "This is why micro frontends should not be introduced casually."
    },
    {
      type: "heading",
      level: 2,
      text: "15. Organizational Comparison"
    },
    {
      type: "paragraph",
      text: "A modular monolith is usually easier when teams are closely coordinated."
    },
    {
      type: "paragraph",
      text: "Micro frontends are useful when team autonomy matters more."
    },
    {
      type: "table",
      headers: ["Organization Type", "Better Choice"],
      rows: [
        ["Small startup", "Modular monolith"],
        ["Single product squad", "Modular monolith"],
        ["Product with 2 frontend teams", "Modular monolith first"],
        ["Large retail platform", "Micro frontends possible"],
        ["Enterprise with many domain teams", "Micro frontends useful"],
        ["Multiple teams blocked by one release cycle", "Micro frontends strong fit"]
      ]
    },
    {
      type: "paragraph",
      text: "Architecture should reflect the organization."
    },
    {
      type: "paragraph",
      text: "If the organization does not have independent ownership, micro frontends will not magically create it."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Decision Framework"
    },
    {
      type: "paragraph",
      text: "Ask these questions before choosing micro frontends:"
    },
    {
      type: "code",
      language: "text",
      code: "Do we have multiple frontend teams?\nAre domains clearly separated?\nDo teams need independent deployments?\nIs the shared release cycle slowing delivery?\nDo we have CI/CD maturity?\nDo we have a shared design system?\nCan we manage dependency versions?\nCan we monitor remote failures?\nCan we roll back one domain independently?\nIs the added complexity justified?"
    },
    {
      type: "paragraph",
      text: "If most answers are **no**, choose modular monolith."
    },
    {
      type: "paragraph",
      text: "If most answers are **yes**, micro frontends may be worth it."
    },
    {
      type: "heading",
      level: 2,
      text: "17. When to Choose a Modular Monolith"
    },
    {
      type: "paragraph",
      text: "Choose a modular monolith when:"
    },
    {
      type: "code",
      language: "text",
      code: "The team is small.\nThe app is early-stage.\nThe product changes rapidly.\nDomain boundaries are unclear.\nOne deployment pipeline is acceptable.\nCI/CD is not a bottleneck.\nThe team wants simplicity.\nThe app does not need independent frontend releases."
    },
    {
      type: "paragraph",
      text: "Example structure:"
    },
    {
      type: "code",
      language: "text",
      code: "src/\n├── features/\n│   ├── catalog/\n│   ├── cart/\n│   ├── checkout/\n│   └── profile/\n├── shared/\n│   ├── ui/\n│   ├── hooks/\n│   └── utils/\n└── app/\n    ├── routes/\n    ├── providers/\n    └── layout/"
    },
    {
      type: "paragraph",
      text: "This is often the best first architecture."
    },
    {
      type: "heading",
      level: 2,
      text: "18. How to Make a Modular Monolith Strong"
    },
    {
      type: "paragraph",
      text: "A modular monolith should not be messy."
    },
    {
      type: "paragraph",
      text: "Use:"
    },
    {
      type: "code",
      language: "text",
      code: "Feature-based folders\nClear import rules\nShared design system\nDomain-level ownership\nRoute-level code splitting\nTesting boundaries\nType-safe contracts\nLint rules for module boundaries"
    },
    {
      type: "paragraph",
      text: "Example boundary rule:"
    },
    {
      type: "code",
      language: "text",
      code: "features/checkout cannot import from features/cart/internal\nfeatures/checkout can call shared cart contract or API"
    },
    {
      type: "paragraph",
      text: "This gives many benefits of modularity without runtime federation."
    },
    {
      type: "heading",
      level: 2,
      text: "19. When to Choose Micro Frontends"
    },
    {
      type: "paragraph",
      text: "Choose micro frontends when:"
    },
    {
      type: "code",
      language: "text",
      code: "Multiple teams own different domains.\nIndependent deployment is required.\nThe frontend monolith blocks delivery.\nDomains are stable and well understood.\nCI/CD maturity is high.\nDesign system maturity is high.\nTeams can own monitoring and incidents.\nRollback per domain is needed."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "text",
      code: "Large e-commerce platform\n├── Catalog Team\n├── Cart Team\n├── Checkout Team\n├── Orders Team\n├── Profile Team\n└── Platform Team"
    },
    {
      type: "paragraph",
      text: "Here, micro frontends can help because ownership and release independence matter."
    },
    {
      type: "heading",
      level: 2,
      text: "20. When Micro Frontends Are Overengineering"
    },
    {
      type: "paragraph",
      text: "Micro frontends are overengineering when:"
    },
    {
      type: "code",
      language: "text",
      code: "There is only one frontend team.\nThe app has fewer than a few major domains.\nNo team needs independent deployment.\nThe shell and remotes are owned by the same people.\nThere is no design system.\nThere is no contract testing.\nThere is no rollback strategy.\nThe only motivation is “modern architecture.”"
    },
    {
      type: "paragraph",
      text: "Bad reason:"
    },
    {
      type: "code",
      language: "text",
      code: "We should use micro frontends because big companies use them."
    },
    {
      type: "paragraph",
      text: "Good reason:"
    },
    {
      type: "code",
      language: "text",
      code: "We have six frontend teams blocked by a shared release pipeline, with clear domain ownership and mature CI/CD."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Migration Path: Modular Monolith First"
    },
    {
      type: "paragraph",
      text: "A practical strategy:"
    },
    {
      type: "code",
      language: "text",
      code: "Start with a modular monolith.\nEnforce domain boundaries.\nAdd route-level code splitting.\nIntroduce shared design system.\nImprove CI/CD.\nMeasure team bottlenecks.\nMove to micro frontends only when needed."
    },
    {
      type: "paragraph",
      text: "This avoids premature complexity."
    },
    {
      type: "paragraph",
      text: "Example evolution:"
    },
    {
      type: "code",
      language: "text",
      code: "Stage 1: Monolith\nStage 2: Modular monolith\nStage 3: Route-level code splitting\nStage 4: Extract one remote\nStage 5: Micro frontend platform"
    },
    {
      type: "paragraph",
      text: "You do not need to jump from monolith directly to micro frontends."
    },
    {
      type: "heading",
      level: 2,
      text: "22. Interview Decision Table"
    },
    {
      type: "paragraph",
      text: "Use this in interviews."
    },
    {
      type: "table",
      headers: ["Situation", "Recommendation"],
      rows: [
        ["Small team building MVP", "Modular monolith"],
        ["Two teams sharing one app", "Modular monolith with boundaries"],
        ["Many teams blocked by release coordination", "Micro frontends"],
        ["Need independent deployment per domain", "Micro frontends"],
        ["No CI/CD maturity", "Modular monolith"],
        ["No clear domain boundaries", "Modular monolith"],
        ["Strong platform team exists", "Micro frontends possible"],
        ["Checkout requires safer releases", "Micro frontend with version pinning"],
        ["UI consistency is weak", "Fix design system first"],
        ["Performance budget is tight", "Be careful with runtime composition"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "23. Common Mistakes"
    },
    {
      type: "table",
      headers: ["Mistake", "Why It Is Wrong"],
      rows: [
        ["Choosing micro frontends too early", "Adds complexity before value"],
        ["Treating micro frontends as code splitting", "Misses ownership and deployment purpose"],
        ["Ignoring modular monolith option", "Overengineering"],
        ["Splitting by UI widgets", "Creates too many small remotes"],
        ["No team ownership", "Boundaries become meaningless"],
        ["No deployment independence", "Defeats purpose"],
        ["No contract testing", "Runtime breakages"],
        ["No design system", "UI inconsistency"],
        ["No observability", "Production debugging chaos"],
        ["Shell owns all business logic", "Shell becomes new monolith"]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "24. Strong Interview Answer"
    },
    {
      type: "paragraph",
      text: "If an interviewer asks:"
    },
    {
      type: "blockquote",
      text: "“Would you choose micro frontends or a modular monolith?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would not choose micro frontends by default.\n\nI would first check whether the problem is code organization or team/release scalability.\n\nIf the app is owned by one or two teams and independent deployment is not required, I would choose a modular monolith. I would organize the code by domain, enforce import boundaries, use route-level code splitting, and keep shared UI in a design system.\n\nIf there are many teams owning stable business domains, and the shared frontend release cycle is slowing delivery, then micro frontends may be justified. In that case, I would design a shell app with domain-owned remotes, independent CI/CD, contract testing, shared dependency governance, fallback UI, rollback, and per-remote observability.\n\nThe key tradeoff is simplicity versus autonomy. A modular monolith is simpler. Micro frontends provide more team independence but add runtime and operational complexity."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Red Flag Answers"
    },
    {
      type: "paragraph",
      text: "Avoid these in interviews:"
    },
    {
      type: "code",
      language: "text",
      code: "“Micro frontends are always better.”"
    },
    {
      type: "code",
      language: "text",
      code: "“We should make every page a micro frontend.”"
    },
    {
      type: "code",
      language: "text",
      code: "“Micro frontends are just multiple React apps.”"
    },
    {
      type: "code",
      language: "text",
      code: "“We do not need a modular monolith if micro frontends exist.”"
    },
    {
      type: "code",
      language: "text",
      code: "“Independent deployment is easy; just deploy each app separately.”"
    },
    {
      type: "code",
      language: "text",
      code: "“The shell can own all shared business logic.”"
    },
    {
      type: "paragraph",
      text: "These answers show shallow architecture thinking."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Final Checklist"
    },
    {
      type: "checklist",
      items: [
        "Do multiple teams own different domains?",
        "Is release coordination a real bottleneck?",
        "Are domain boundaries stable?",
        "Is independent deployment required?",
        "Is CI/CD mature enough?",
        "Is there a shared design system?",
        "Can we test contracts?",
        "Can we monitor per remote?",
        "Can we roll back per remote?",
        "Is runtime complexity acceptable?"
      ]
    },
    {
      type: "paragraph",
      text: "If the answer is mostly no:"
    },
    {
      type: "code",
      language: "text",
      code: "Choose modular monolith."
    },
    {
      type: "paragraph",
      text: "If the answer is mostly yes:"
    },
    {
      type: "code",
      language: "text",
      code: "Micro frontends may be justified."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Summary"
    },
    {
      type: "paragraph",
      text: "A modular monolith and micro frontends are not enemies."
    },
    {
      type: "paragraph",
      text: "They solve different problems."
    },
    {
      type: "paragraph",
      text: "A modular monolith gives:"
    },
    {
      type: "code",
      language: "text",
      code: "Simplicity\nSingle deployment\nClear internal structure\nLower runtime complexity\nFaster early development"
    },
    {
      type: "paragraph",
      text: "Micro frontends give:"
    },
    {
      type: "code",
      language: "text",
      code: "Independent team ownership\nIndependent deployment\nDomain-level release autonomy\nIncremental migration\nLarge-team scalability"
    },
    {
      type: "paragraph",
      text: "The strongest architecture decision is not choosing the most advanced pattern."
    },
    {
      type: "paragraph",
      text: "It is choosing the simplest pattern that solves the real problem."
    },
    {
      type: "paragraph",
      text: "Final takeaway:"
    },
    {
      type: "blockquote",
      text: "Start with a modular monolith. Move to micro frontends only when team scale, domain ownership, and independent deployment justify the complexity."
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
