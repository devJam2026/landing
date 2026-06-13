import type { FrontendArticle } from "../../articles";

export const microFrontendDeploymentObservability: FrontendArticle = {
  slug: "micro-frontend-deployment-observability",
  title: "Micro Frontend Deployment, Rollback, and Observability",
  description: "Learn how to deploy micro frontends safely using independent CI/CD pipelines, remote manifests, version pinning, rollback strategies, feature flags, monitoring, tracing, Web Vitals, and production health dashboards.",
  difficulty: "Architect",
  readTime: "17 min read",
  tags: ["Micro Frontends", "Deployment", "Observability", "Rollback", "Frontend Architecture", "Interview Prep"],
  track: "micro-frontends",
  pillar: "frontend-architect",
  status: "Published",
  date: "June 12, 2026",
  sections: [
    {
      type: "paragraph",
      text: "Micro frontends are not production-ready just because they are split into multiple apps."
    },
    {
      type: "paragraph",
      text: "The real test is this:"
    },
    {
      type: "blockquote",
      text: "Can each micro frontend be deployed, monitored, and rolled back safely without breaking the full product?"
    },
    {
      type: "paragraph",
      text: "Many teams adopt micro frontends for independent deployment, but they forget the operational side."
    },
    {
      type: "paragraph",
      text: "That creates serious problems:"
    },
    {
      type: "blockquote",
      text: "A remote deploy breaks production.\nThe shell loads an incompatible remote.\nThe wrong version is cached.\nNobody knows which remote caused the issue.\nRollback requires redeploying everything.\nMonitoring shows “frontend error” but not which team owns it."
    },
    {
      type: "paragraph",
      text: "This article explains how to design deployment, rollback, and observability for production-grade micro frontend systems."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Why Deployment Is Different in Micro Frontends"
    },
    {
      type: "paragraph",
      text: "In a monolithic frontend, deployment is simple conceptually:"
    },
    {
      type: "blockquote",
      text: "One app\nOne build\nOne artifact\nOne deployment\nOne rollback"
    },
    {
      type: "paragraph",
      text: "In micro frontends, deployment becomes distributed:"
    },
    {
      type: "blockquote",
      text: "Shell App\nCatalog Remote\nCart Remote\nCheckout Remote\nProfile Remote\nOrders Remote\nDesign System\nShared Manifest"
    },
    {
      type: "paragraph",
      text: "Each part may have its own:"
    },
    {
      type: "blockquote",
      text: "Repository\nBuild pipeline\nArtifact\nCDN path\nVersion\nRelease schedule\nRollback process\nMonitoring dashboard\nOwning team"
    },
    {
      type: "paragraph",
      text: "This gives teams independence, but also introduces runtime coordination problems."
    },
    {
      type: "heading",
      level: 2,
      text: "2. The Core Deployment Goal"
    },
    {
      type: "paragraph",
      text: "The goal is not just independent deployment."
    },
    {
      type: "paragraph",
      text: "The real goal is safe independent deployment."
    },
    {
      type: "paragraph",
      text: "A good micro frontend deployment system should support:"
    },
    {
      type: "blockquote",
      text: "Independent releases\nVersion compatibility\nControlled rollout\nEnvironment promotion\nFast rollback\nPer-remote monitoring\nRemote health checks\nFallback UI\nIncident ownership"
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "Independent deployment is only safe when contracts, monitoring, and rollback are designed properly."
    },
    {
      type: "heading",
      level: 2,
      text: "3. Basic Deployment Architecture"
    },
    {
      type: "paragraph",
      text: "A simple deployment model:"
    },
    {
      type: "blockquote",
      text: "Catalog Repo ──► CI/CD ──► CDN ──► catalog/remoteEntry.js\nCart Repo ─────► CI/CD ──► CDN ──► cart/remoteEntry.js\nCheckout Repo ─► CI/CD ──► CDN ──► checkout/remoteEntry.js\n\nShell App ─────► Loads remotes at runtime"
    },
    {
      type: "paragraph",
      text: "Architecture diagram:"
    },
    {
      type: "diagram",
      diagramType: "architecture",
      content: `                    ┌──────────────────────┐\n                    │      Shell App        │\n                    │  Route + Remote Load  │\n                    └──────────┬───────────┘\n                               │\n           ┌───────────────────┼───────────────────┐\n           │                   │                   │\n           ▼                   ▼                   ▼\n┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐\n│ Catalog Remote  │  │ Cart Remote     │  │ Checkout Remote │\n│ CDN Artifact    │  │ CDN Artifact    │  │ CDN Artifact    │\n└─────────────────┘  └─────────────────┘  └─────────────────┘`
    },
    {
      type: "paragraph",
      text: "This is the foundation, but production systems usually need more control."
    },
    {
      type: "heading",
      level: 2,
      text: "4. Deployment Models"
    },
    {
      type: "paragraph",
      text: "There are three common deployment models."
    },
    {
      type: "heading",
      level: 2,
      text: "5. Model 1: Always Load Latest Remote"
    },
    {
      type: "paragraph",
      text: "In this model, the shell always loads the latest remote."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "https://cdn.company.com/cart/latest/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Simple setup",
        "Fast independent deployment",
        "No shell update needed",
        "Easy for early-stage adoption"
      ]
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "list",
      items: [
        "A bad remote deploy affects production immediately",
        "Rollback can be messy",
        "Shell and remote compatibility can break",
        "Harder to audit exact versions"
      ]
    },
    {
      type: "paragraph",
      text: "This model is acceptable for low-risk domains or early experiments."
    },
    {
      type: "paragraph",
      text: "But for critical flows like checkout, it is usually too risky."
    },
    {
      type: "heading",
      level: 2,
      text: "6. Model 2: Version-Pinned Remote"
    },
    {
      type: "paragraph",
      text: "In this model, the shell loads a specific version."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "https://cdn.company.com/cart/1.8.4/remoteEntry.js"
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "More predictable",
        "Safer compatibility",
        "Clear rollback target",
        "Easier audit trail"
      ]
    },
    {
      type: "paragraph",
      text: "Risks:"
    },
    {
      type: "list",
      items: [
        "More release coordination",
        "Shell config may need updates",
        "Slower rollout if fully manual"
      ]
    },
    {
      type: "paragraph",
      text: "This is safer than always loading latest."
    },
    {
      type: "paragraph",
      text: "But managing many versions manually can become operationally heavy."
    },
    {
      type: "heading",
      level: 2,
      text: "7. Model 3: Manifest-Based Deployment"
    },
    {
      type: "paragraph",
      text: "In this model, the shell loads remote URLs from a manifest."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "catalogApp": {\n    "version": "2.3.1",\n    "url": "https://cdn.company.com/catalog/2.3.1/remoteEntry.js"\n  },\n  "cartApp": {\n    "version": "1.8.4",\n    "url": "https://cdn.company.com/cart/1.8.4/remoteEntry.js"\n  },\n  "checkoutApp": {\n    "version": "1.4.2",\n    "url": "https://cdn.company.com/checkout/1.4.2/remoteEntry.js"\n  }\n}`
    },
    {
      type: "paragraph",
      text: "Benefits:"
    },
    {
      type: "list",
      items: [
        "Controlled rollout",
        "Easy rollback",
        "Environment promotion",
        "Per-remote version visibility",
        "Release governance",
        "Canary support",
        "Feature flag integration"
      ]
    },
    {
      type: "paragraph",
      text: "This is usually the best model for large production systems."
    },
    {
      type: "paragraph",
      text: "Strong interview phrase:"
    },
    {
      type: "blockquote",
      text: "A manifest-based deployment model gives runtime flexibility without blindly trusting the latest remote."
    },
    {
      type: "heading",
      level: 2,
      text: "8. Recommended Production Model"
    },
    {
      type: "paragraph",
      text: "For a large e-commerce system, use a hybrid strategy."
    },
    {
      type: "table",
      headers: ["Domain", "Deployment Strategy"],
      rows: [
        ["Marketing Remote", "Latest or fast rollout"],
        ["Catalog Remote", "Latest with monitoring"],
        ["Search Remote", "Manifest-controlled"],
        ["Cart Remote", "Manifest-controlled"],
        ["Checkout Remote", "Version-pinned / manifest-controlled"],
        ["Profile Remote", "Manifest-controlled"],
        ["Orders Remote", "Manifest-controlled"]
      ]
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "paragraph",
      text: "Not all domains have equal business risk."
    },
    {
      type: "paragraph",
      text: "Checkout should be more conservative than marketing banners."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "Marketing can move fast.\nCheckout must move safely."
    },
    {
      type: "paragraph",
      text: "This is the kind of tradeoff interviewers expect from senior engineers."
    },
    {
      type: "heading",
      level: 2,
      text: "9. CI/CD Pipeline for Each Remote"
    },
    {
      type: "paragraph",
      text: "Each micro frontend should have its own pipeline."
    },
    {
      type: "paragraph",
      text: "Recommended pipeline:"
    },
    {
      type: "blockquote",
      text: "Code Commit\n   │\n   ▼\nInstall Dependencies\n   │\n   ▼\nType Check\n   │\n   ▼\nLint\n   │\n   ▼\nUnit Tests\n   │\n   ▼\nComponent Tests\n   │\n   ▼\nContract Tests\n   │\n   ▼\nBuild Remote Artifact\n   │\n   ▼\nBundle Size Check\n   │\n   ▼\nSecurity Check\n   │\n   ▼\nUpload to CDN\n   │\n   ▼\nDeployment Smoke Test\n   │\n   ▼\nUpdate Manifest / Promote Version"
    },
    {
      type: "paragraph",
      text: "Pipeline goals:"
    },
    {
      type: "list",
      items: [
        "Prevent broken remotes",
        "Validate exposed modules",
        "Preserve compatibility",
        "Attach version metadata",
        "Enable rollback"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "10. What Should Be Published?"
    },
    {
      type: "paragraph",
      text: "Each remote deployment should publish:"
    },
    {
      type: "list",
      items: [
        "remoteEntry.js",
        "Hashed JavaScript chunks",
        "CSS assets",
        "Source maps if allowed",
        "Build metadata",
        "Version file",
        "Health endpoint or manifest record"
      ]
    },
    {
      type: "paragraph",
      text: "Example artifact structure:"
    },
    {
      type: "blockquote",
      text: "cart/\n└── 1.8.4/\n    ├── remoteEntry.js\n    ├── main.a82d91.js\n    ├── vendor.71ba2c.js\n    ├── styles.772c1.css\n    ├── build-meta.json\n    └── health.json"
    },
    {
      type: "paragraph",
      text: "Build metadata example:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "remote": "cartApp",\n  "version": "1.8.4",\n  "commitSha": "a91b22f",\n  "buildTime": "2026-06-12T10:30:00Z",\n  "owner": "Cart Team"\n}`
    },
    {
      type: "paragraph",
      text: "This helps observability and incident response."
    },
    {
      type: "heading",
      level: 2,
      text: "11. Remote Manifest Design"
    },
    {
      type: "paragraph",
      text: "A remote manifest should answer:"
    },
    {
      type: "list",
      items: [
        "Which remote should be loaded?",
        "Which version is active?",
        "Where is remoteEntry.js?",
        "Who owns it?",
        "Is it healthy?",
        "Can it be rolled back?"
      ]
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "cartApp": {\n    "version": "1.8.4",\n    "url": "https://cdn.company.com/cart/1.8.4/remoteEntry.js",\n    "owner": "cart-team",\n    "status": "healthy",\n    "rollbackVersion": "1.8.3"\n  }\n}`
    },
    {
      type: "paragraph",
      text: "A good manifest enables:"
    },
    {
      type: "list",
      items: [
        "Runtime remote selection",
        "Rollback",
        "Canary release",
        "Environment promotion",
        "Incident ownership"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "12. Environment Promotion"
    },
    {
      type: "paragraph",
      text: "Use separate manifests per environment."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "dev-manifest.json\nqa-manifest.json\nstaging-manifest.json\nproduction-manifest.json"
    },
    {
      type: "paragraph",
      text: "Promotion flow:"
    },
    {
      type: "blockquote",
      text: "Cart Remote v1.8.4\n   │\n   ▼\nDev Manifest\n   │\n   ▼\nQA Manifest\n   │\n   ▼\nStaging Manifest\n   │\n   ▼\nProduction Manifest"
    },
    {
      type: "paragraph",
      text: "This gives control."
    },
    {
      type: "paragraph",
      text: "A remote should not jump directly to production without validation."
    },
    {
      type: "heading",
      level: 2,
      text: "13. Canary Deployment"
    },
    {
      type: "paragraph",
      text: "Canary rollout means releasing to a small percentage first."
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "5% users → cartApp v1.8.4\n95% users → cartApp v1.8.3"
    },
    {
      type: "paragraph",
      text: "Monitor:"
    },
    {
      type: "list",
      items: [
        "Remote load failures",
        "JavaScript errors",
        "Cart conversion",
        "Add-to-cart success rate",
        "Checkout transition rate",
        "Web Vitals",
        "Fallback UI frequency"
      ]
    },
    {
      type: "paragraph",
      text: "If healthy, increase rollout:"
    },
    {
      type: "blockquote",
      text: "5% → 25% → 50% → 100%"
    },
    {
      type: "paragraph",
      text: "If unhealthy, rollback quickly."
    },
    {
      type: "heading",
      level: 2,
      text: "14. Feature Flags"
    },
    {
      type: "paragraph",
      text: "Feature flags are useful for risky changes."
    },
    {
      type: "paragraph",
      text: "Use them for:"
    },
    {
      type: "list",
      items: [
        "New checkout step",
        "New cart drawer",
        "New recommendation widget",
        "New payment method UI",
        "New search filter experience"
      ]
    },
    {
      type: "paragraph",
      text: "Feature flags help because you can disable a feature without redeploying."
    },
    {
      type: "paragraph",
      text: "Feature flags are not a replacement for rollback."
    },
    {
      type: "paragraph",
      text: "Use both."
    },
    {
      type: "blockquote",
      text: "Feature flag = disable behavior\nRollback = restore stable artifact"
    },
    {
      type: "heading",
      level: 2,
      text: "15. Caching Strategy"
    },
    {
      type: "paragraph",
      text: "Caching is critical."
    },
    {
      type: "paragraph",
      text: "Bad caching can cause stale or broken remotes."
    },
    {
      type: "paragraph",
      text: "Recommended approach:"
    },
    {
      type: "table",
      headers: ["Asset", "Cache Strategy"],
      rows: [
        ["remoteEntry.js", "Short cache or versioned URL"],
        ["Hashed chunks", "Long cache"],
        ["Manifest file", "Short cache / controlled invalidation"],
        ["CSS chunks", "Hashed long cache"],
        ["Build metadata", "Short cache"]
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "remoteEntry.js → careful cache\nmain.a82d91.js → long cache\nvendor.71ba2c.js → long cache\nmanifest.json → short cache"
    },
    {
      type: "paragraph",
      text: "Why?"
    },
    {
      type: "paragraph",
      text: "Hashed chunks change filename when content changes."
    },
    {
      type: "paragraph",
      text: "Manifest and remote entry control runtime loading, so stale cache can cause compatibility issues."
    },
    {
      type: "heading",
      level: 2,
      text: "16. Rollback Strategy"
    },
    {
      type: "paragraph",
      text: "Rollback must be fast and remote-specific."
    },
    {
      type: "paragraph",
      text: "Example incident:"
    },
    {
      type: "blockquote",
      text: "Cart Remote v1.8.5 causes blank cart page."
    },
    {
      type: "paragraph",
      text: "Rollback flow:"
    },
    {
      type: "blockquote",
      text: "1. Monitoring detects high cart error rate.\n2. Cart v1.8.5 is marked unhealthy.\n3. Manifest is updated to cart v1.8.4.\n4. CDN cache is invalidated if needed.\n5. Shell starts loading stable cart remote.\n6. Cart Team investigates v1.8.5."
    },
    {
      type: "paragraph",
      text: "Important:"
    },
    {
      type: "blockquote",
      text: "Rollback should not require redeploying the shell unless the shell itself is broken."
    },
    {
      type: "heading",
      level: 2,
      text: "17. Rollback Models"
    },
    {
      type: "table",
      headers: ["Rollback Model", "How It Works", "Best For"],
      rows: [
        ["Revert deployment", "Redeploy previous remote", "Simple setups"],
        ["Manifest rollback", "Point manifest to older version", "Large systems"],
        ["Feature flag disable", "Turn off risky feature", "Behavior-level rollback"],
        ["Traffic split rollback", "Route users back to stable version", "Canary systems"],
        ["Shell pinning", "Shell pins stable remote version", "Critical flows"]
      ]
    },
    {
      type: "paragraph",
      text: "Recommended:"
    },
    {
      type: "blockquote",
      text: "Use manifest rollback for most remotes.\nUse version pinning for critical checkout flows.\nUse feature flags for risky UI behavior."
    },
    {
      type: "heading",
      level: 2,
      text: "18. Observability: What to Track"
    },
    {
      type: "paragraph",
      text: "A micro frontend system needs per-remote observability."
    },
    {
      type: "paragraph",
      text: "Track:"
    },
    {
      type: "list",
      items: [
        "Remote load success",
        "Remote load failure",
        "Remote load duration",
        "Chunk load errors",
        "JavaScript runtime errors",
        "Fallback UI shown",
        "Remote version",
        "Shell version",
        "Route",
        "User journey",
        "Web Vitals",
        "API errors",
        "Deployment timestamp"
      ]
    },
    {
      type: "paragraph",
      text: "Without this, debugging becomes guesswork."
    },
    {
      type: "heading",
      level: 2,
      text: "19. Useful Log Fields"
    },
    {
      type: "paragraph",
      text: "Every remote-related error should include:"
    },
    {
      type: "list",
      items: [
        "remoteName",
        "remoteVersion",
        "shellVersion",
        "route",
        "errorType",
        "chunkUrl",
        "manifestVersion",
        "deploymentId",
        "commitSha",
        "teamOwner"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "code",
      language: "json",
      code: `{\n  "remoteName": "checkoutApp",\n  "remoteVersion": "1.4.3",\n  "shellVersion": "3.2.0",\n  "route": "/checkout",\n  "errorType": "ChunkLoadError",\n  "chunkUrl": "https://cdn.company.com/checkout/1.4.3/main.js",\n  "teamOwner": "checkout-team"\n}`
    },
    {
      type: "paragraph",
      text: "This makes incident routing easier."
    },
    {
      type: "heading",
      level: 2,
      text: "20. Observability Dashboard"
    },
    {
      type: "paragraph",
      text: "Create dashboards by remote."
    },
    {
      type: "paragraph",
      text: "Dashboard sections:"
    },
    {
      type: "list",
      items: [
        "Remote health",
        "Remote load failure rate",
        "Runtime error rate",
        "Fallback UI frequency",
        "Route-level Web Vitals",
        "Version adoption",
        "Deployment timeline",
        "API error correlation",
        "User journey impact"
      ]
    },
    {
      type: "paragraph",
      text: "Example dashboard:"
    },
    {
      type: "blockquote",
      text: "Checkout Remote Dashboard\n├── Active version: 1.4.2\n├── Load failure rate: 0.04%\n├── Runtime error rate: 0.12%\n├── Checkout conversion: 63%\n├── Fallback UI shown: 42 sessions\n├── INP: Good\n├── CLS: Good\n└── Last deployment: 2 hours ago"
    },
    {
      type: "paragraph",
      text: "This tells teams whether their remote is healthy."
    },
    {
      type: "heading",
      level: 2,
      text: "21. Alerting Strategy"
    },
    {
      type: "paragraph",
      text: "Alerts should be actionable."
    },
    {
      type: "paragraph",
      text: "Good alerts:"
    },
    {
      type: "list",
      items: [
        "checkoutApp remote load failures above 2% for 5 minutes.",
        "cartApp runtime error rate increased after deployment v1.8.5.",
        "catalogApp Web Vitals degraded after release.",
        "remoteEntry.js unavailable for profileApp.",
        "checkout conversion dropped after remote deployment."
      ]
    },
    {
      type: "paragraph",
      text: "Bad alerts:"
    },
    {
      type: "list",
      items: [
        "Frontend error happened.",
        "Something failed.",
        "JavaScript error count increased."
      ]
    },
    {
      type: "paragraph",
      text: "Good alerts identify:"
    },
    {
      type: "list",
      items: [
        "Remote",
        "Version",
        "Route",
        "Severity",
        "Owner",
        "Possible rollback target"
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "22. Web Vitals Monitoring"
    },
    {
      type: "paragraph",
      text: "Track Web Vitals per route and remote."
    },
    {
      type: "paragraph",
      text: "Important metrics:"
    },
    {
      type: "list",
      items: [
        "LCP",
        "INP",
        "CLS",
        "TTFB",
        "Route load time",
        "Remote load time",
        "Chunk load time"
      ]
    },
    {
      type: "paragraph",
      text: "Example:"
    },
    {
      type: "blockquote",
      text: "/catalog route\nCatalog Remote v2.3.1\nLCP increased from 2.1s to 3.8s\nAfter deployment: v2.3.1"
    },
    {
      type: "paragraph",
      text: "This helps detect performance regressions caused by a specific remote release."
    },
    {
      type: "heading",
      level: 2,
      text: "23. Source Maps and Debugging"
    },
    {
      type: "paragraph",
      text: "Source maps help debug production errors."
    },
    {
      type: "paragraph",
      text: "But they must be handled carefully."
    },
    {
      type: "list",
      items: [
        "Upload source maps to monitoring provider.",
        "Do not expose source maps publicly.",
        "Tag source maps with remote version and commit SHA.",
        "Keep source maps aligned with deployed artifacts."
      ]
    },
    {
      type: "paragraph",
      text: "If you cannot map errors back to remote source code, debugging becomes slow."
    },
    {
      type: "heading",
      level: 2,
      text: "24. Ownership and Incident Response"
    },
    {
      type: "paragraph",
      text: "Every remote should have a clear owner."
    },
    {
      type: "table",
      headers: ["Remote", "Owner"],
      rows: [
        ["catalogApp", "Catalog Team"],
        ["cartApp", "Cart Team"],
        ["checkoutApp", "Checkout Team"],
        ["profileApp", "Profile Team"],
        ["shellApp", "Platform Team"]
      ]
    },
    {
      type: "paragraph",
      text: "Incident response should answer:"
    },
    {
      type: "list",
      items: [
        "Who owns the failing remote?",
        "What version is failing?",
        "What changed recently?",
        "Can we roll back?",
        "Is the issue isolated?",
        "Are users blocked?"
      ]
    },
    {
      type: "paragraph",
      text: "Ownership is part of architecture."
    },
    {
      type: "heading",
      level: 2,
      text: "25. Deployment Governance"
    },
    {
      type: "paragraph",
      text: "Independent teams still need shared standards."
    },
    {
      type: "paragraph",
      text: "Central governance should define:"
    },
    {
      type: "list",
      items: [
        "Remote naming rules",
        "Versioning policy",
        "Manifest format",
        "Shared dependency policy",
        "Contract testing requirements",
        "Caching policy",
        "Rollback requirements",
        "Monitoring fields",
        "Alert thresholds",
        "Security requirements",
        "Performance budgets"
      ]
    },
    {
      type: "paragraph",
      text: "Governance should enable safe autonomy."
    },
    {
      type: "paragraph",
      text: "Strong phrase:"
    },
    {
      type: "blockquote",
      text: "The goal is not unlimited freedom. The goal is safe independent delivery."
    },
    {
      type: "heading",
      level: 2,
      text: "26. Security Considerations"
    },
    {
      type: "paragraph",
      text: "Micro frontend deployment must be secure."
    },
    {
      type: "paragraph",
      text: "Rules:"
    },
    {
      type: "list",
      items: [
        "Only load remotes from trusted origins.",
        "Use HTTPS.",
        "Protect deployment credentials.",
        "Use strict CI/CD permissions.",
        "Validate remote URLs.",
        "Use Content Security Policy where possible.",
        "Avoid exposing secrets in frontend config.",
        "Keep source maps private.",
        "Monitor unexpected remote changes."
      ]
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
      text: "If a remote deployment pipeline is compromised, the frontend experience is compromised."
    },
    {
      type: "heading",
      level: 2,
      text: "27. Common Anti-Patterns"
    },
    {
      type: "table",
      headers: ["Anti-Pattern", "Why It Is Bad"],
      rows: [
        ["Always load latest for critical flows", "High production risk"],
        ["No rollback strategy", "Incidents last longer"],
        ["No remote version tracking", "Cannot identify what failed"],
        ["No monitoring per remote", "Debugging becomes guesswork"],
        ["Aggressive remoteEntry caching", "Stale or incompatible remote loads"],
        ["No contract tests before deployment", "Independent releases become unsafe"],
        ["All remotes share one deployment pipeline", "Reduces team autonomy"],
        ["Shell redeploy needed for every remote change", "Defeats purpose of MFEs"],
        ["No clear owner per remote", "Incident response breaks down"],
        ["Feature flags used instead of rollback", "Incomplete recovery strategy"]
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
      text: "Q1. How does independent deployment work in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Each micro frontend has its own build artifact and CI/CD pipeline. The shell loads the remote at runtime using a remote entry or manifest. This allows a team to deploy its domain app without rebuilding the entire frontend, as long as contracts remain compatible."
    },
    {
      type: "heading",
      level: 3,
      text: "Q2. How do you roll back one micro frontend?"
    },
    {
      type: "paragraph",
      text: "The safest approach is to keep previous remote versions available and use a manifest to point the shell back to a stable version. For example, if cart v1.8.5 fails, update the manifest to cart v1.8.4 and invalidate cache if needed."
    },
    {
      type: "heading",
      level: 3,
      text: "Q3. Why is loading latest remote risky?"
    },
    {
      type: "paragraph",
      text: "Because a newly deployed remote can break the shell at runtime if there is a contract mismatch, bad bundle, or dependency conflict. It is especially risky for critical flows like checkout."
    },
    {
      type: "heading",
      level: 3,
      text: "Q4. What should you monitor in micro frontends?"
    },
    {
      type: "paragraph",
      text: "Monitor remote load failures, chunk errors, runtime errors, remote version, route, shell version, fallback UI frequency, API errors, deployment health, and Web Vitals per route."
    },
    {
      type: "heading",
      level: 3,
      text: "Q5. How do you make micro frontend deployment safe?"
    },
    {
      type: "paragraph",
      text: "Use independent CI/CD pipelines, contract tests, versioned manifests, controlled promotion, canary rollout, feature flags, smoke tests, rollback support, and per-remote observability."
    },
    {
      type: "heading",
      level: 3,
      text: "Q6. What is a remote manifest?"
    },
    {
      type: "paragraph",
      text: "A remote manifest is a configuration that maps remote names to their active versions and remoteEntry URLs. It allows the shell to load specific remote versions and supports rollback, promotion, and controlled rollout."
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
      text: "“How would you deploy and monitor micro frontends safely?”"
    },
    {
      type: "paragraph",
      text: "A strong answer:"
    },
    {
      type: "blockquote",
      text: "I would give each micro frontend its own CI/CD pipeline and publish versioned artifacts to a CDN. The shell would not blindly load the latest remote for every domain. Instead, I would use a manifest-based model where each remote name maps to a specific version and remoteEntry URL.\n\nFor low-risk domains like marketing, faster rollout is acceptable. For critical domains like checkout, I would use version pinning or controlled manifest promotion.\n\nBefore deployment, each remote should pass type checks, unit tests, contract tests, bundle size checks, security checks, and deployment smoke tests. After deployment, I would monitor remote load failures, chunk errors, runtime errors, route-level Web Vitals, fallback UI frequency, and business metrics like checkout conversion.\n\nRollback should be remote-specific. If cart v1.8.5 breaks, I should be able to update the manifest back to cart v1.8.4 without redeploying the full shell.\n\nThe key principle is safe independent delivery: teams can deploy independently, but contracts, monitoring, and rollback protect the composed product."
    },
    {
      type: "heading",
      level: 2,
      text: "29. Final Checklist"
    },
    {
      type: "checklist",
      items: [
        "Each remote has its own CI/CD pipeline.",
        "Each remote publishes versioned artifacts.",
        "remoteEntry.js caching is controlled.",
        "Hashed chunks are cached safely.",
        "A remote manifest exists.",
        "Manifest supports environment promotion.",
        "Manifest supports rollback.",
        "Critical remotes are not blindly loading latest.",
        "Contract tests run before deployment.",
        "Deployment smoke tests validate remoteEntry.js.",
        "Remote version is logged at runtime.",
        "Shell version is logged at runtime.",
        "Errors include remote name and owner.",
        "Web Vitals are tracked per route.",
        "Alerts are actionable and owner-based.",
        "Previous remote versions remain available.",
        "Feature flags exist for risky behavior.",
        "Security rules protect remote loading."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "30. Summary"
    },
    {
      type: "paragraph",
      text: "Micro frontend deployment is not only about splitting builds."
    },
    {
      type: "paragraph",
      text: "A production-ready deployment system must include:"
    },
    {
      type: "blockquote",
      text: "Independent CI/CD\nVersioned artifacts\nRemote manifests\nEnvironment promotion\nContract testing\nDeployment smoke tests\nControlled caching\nFeature flags\nCanary rollout\nRollback\nPer-remote observability\nOwner-based alerting\nSecurity controls"
    },
    {
      type: "paragraph",
      text: "The strongest takeaway:"
    },
    {
      type: "blockquote",
      text: "Micro frontends give deployment independence, but production safety comes from versioning, contracts, rollback, and observability."
    },
    {
      type: "paragraph",
      text: "Without those, independent deployment becomes independent failure."
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
