export type SystemDesignContentStatus =
  | "complete"
  | "in-progress"
  | "placeholder"
  | "coming-soon";

export type SystemDesignCurriculumTrack = {
  id: string;
  slug: string;
  title: string;
  order: number;
  description: string;
  status: SystemDesignContentStatus;
  modules: string[];
  plannedProjects: string[];
  learningOutcomes: string[];
  interviewValue: string[];
};

export const systemDesignTracks: SystemDesignCurriculumTrack[] = [
  {
    id: "foundation",
    slug: "foundation",
    title: "Track 1: System Design Foundation",
    order: 1,
    description: "Learn functional vs non-functional requirement boundaries, capacity estimations, and tradeoffs frameworks.",
    status: "coming-soon",
    modules: ["system-design-intro", "requirements-estimation", "design-tradeoffs"],
    plannedProjects: ["requirement-breakdown-lab", "capacity-estimation-calculator", "system-design-canvas"],
    learningOutcomes: [
      "Gather functional and non-functional requirements from ambiguous problems",
      "Estimate CPU, memory, and bandwidth requirements under constraints",
      "Explain availability vs consistency compromises"
    ],
    interviewValue: [
      "Defend capacity estimation numbers under audit checks",
      "Structure design presentations with clear architectural priorities"
    ]
  },
  {
    id: "networking-web",
    slug: "networking-web",
    title: "Track 2: Networking and Web Architecture",
    order: 2,
    description: "Understand TCP/IP packets routing, TLS handshake security, reverse proxies, and API gateways workflows.",
    status: "coming-soon",
    modules: ["dns-lifecycle", "network-protocols-core", "load-balancer-proxies", "api-gateways"],
    plannedProjects: ["request-lifecycle-visualizer", "cdn-cache-simulator", "api-gateway-routing-lab"],
    learningOutcomes: [
      "Trace client request loops from search inputs to servers endpoints",
      "Leverage CDN cache tierings to minimize main database reads",
      "Configure custom routing rules inside secure API gateways"
    ],
    interviewValue: [
      "Compare Layer-4 load balancing speeds with Layer-7 content routing",
      "Propose SSL termination strategies to reduce connection handshakes latency"
    ]
  },
  {
    id: "api-design",
    slug: "api-design",
    title: "Track 3: API Design",
    order: 3,
    description: "Design robust API contracts using REST, GraphQL, and gRPC patterns under strict backward compatibility.",
    status: "coming-soon",
    modules: ["api-paradigms", "pagination-sorting", "idempotency-control", "versioning-contracts"],
    plannedProjects: ["rest-api-design-lab", "graphql-vs-rest", "idempotent-payment-api", "api-versioning-playground"],
    learningOutcomes: [
      "Enforce API idempotency key validations to prevent double payment submissions",
      "Implement cursor-based paginated results to scale database queries",
      "Compare gRPC binary transfers efficiency with JSON serialization payloads"
    ],
    interviewValue: [
      "Defend REST vs GraphQL designs based on clients payload requirements",
      "Explain versioning strategies preventing client crashes on schema modifications"
    ]
  },
  {
    id: "database-design",
    slug: "database-design",
    title: "Track 4: Database Design",
    order: 4,
    description: "Master SQL vs NoSQL selections, indexing configurations, sharding, and ACID transaction boundaries.",
    status: "coming-soon",
    modules: ["sql-nosql-core", "indexes-query-costs", "replication-sharding", "acid-transactions"],
    plannedProjects: ["database-schema-design", "index-performance-visualizer", "sql-nosql-decision-lab", "transaction-simulator"],
    learningOutcomes: [
      "Select optimal data stores matching write-heavy vs read-heavy patterns",
      "Design database shards schemas preventing key hot-spot partitions",
      "Tune indexes structures minimizing lookup page scans"
    ],
    interviewValue: [
      "Explain read-replication lag compromises inside distributed query models",
      "Compare transactional locking constraints in relational engines vs document models"
    ]
  },
  {
    id: "caching-systems",
    slug: "caching-systems",
    title: "Track 5: Caching Systems",
    order: 5,
    description: "Design low-latency applications caching tiers, invalidation heuristics, and stampede mitigations.",
    status: "coming-soon",
    modules: ["caching-strategies", "redis-operations", "invalidation-policies", "caching-traps"],
    plannedProjects: ["cache-strategy-simulator", "redis-cache-lab", "cache-invalidation-playground", "hot-key-detection-dashboard"],
    learningOutcomes: [
      "Configure write-behind and cache-aside storage synchronization rules",
      "Mitigate cache stampede using localized lock leases",
      "Implement Redis cluster cluster-keys setups to route hot data queries"
    ],
    interviewValue: [
      "Propose mitigations preventing cache stampede on global updates",
      "Compare consistent hashing setups on Redis cache cluster nodes"
    ]
  },
  {
    id: "load-balancing-scaling",
    slug: "load-balancing-scaling",
    title: "Track 6: Load Balancing and Scaling",
    order: 6,
    description: "Scale applications horizontally, balance requests streams, and configure circuit breaker failovers.",
    status: "coming-soon",
    modules: ["horizontal-vs-vertical", "lb-algorithms", "health-checks-autoscaling", "reliability-patterns"],
    plannedProjects: ["load-balancer-simulation", "autoscaling-decision-lab", "circuit-breaker-playground", "backpressure-demo"],
    learningOutcomes: [
      "Build circuit breakers triggers stopping downstream cascade faults",
      "Configure dynamic autoscaling groups triggers monitoring requests depth",
      "Understand backpressure systems blocking load overflows"
    ],
    interviewValue: [
      "Analyze tradeoffs of sticky sessions setups on load balancers nodes",
      "Structure graceful degradation fallbacks when server instances offline"
    ]
  },
  {
    id: "message-queues-async",
    slug: "message-queues-async",
    title: "Track 7: Message Queues & Async Processing",
    order: 7,
    description: "Deconstruct asynchronous systems, Kafka partitioning, RabbitMQ queues, and dead-letter pipelines.",
    status: "coming-soon",
    modules: ["why-async-queues", "kafka-vs-rabbitmq", "dlq-retry-strategies", "event-driven-architecture"],
    plannedProjects: ["notification-queue-system", "order-processing-pipeline", "dead-letter-queue-lab", "kafka-event-stream-simulator"],
    learningOutcomes: [
      "Configure Kafka cluster partitioning to guarantee events ordering ordering",
      "Implement dead-letter queue (DLQ) retry backoffs on processing errors",
      "Design event-driven transactions decoupling payment from notifications"
    ],
    interviewValue: [
      "Defend log-based stream brokers vs message brokers designs",
      "Compare at-least-once delivery duplicates resolution strategies in clients"
    ]
  },
  {
    id: "distributed-systems",
    slug: "distributed-systems",
    title: "Track 8: Distributed Systems",
    order: 8,
    description: "Study leader election algorithms, CAP theorem limits, sharding maps, and quorum operations.",
    status: "coming-soon",
    modules: ["distributed-fundamentals", "consensus-consensus", "cap-quorum-math", "partitioning-sharding"],
    plannedProjects: ["kv-store-simulator", "consistent-hashing-visualizer", "leader-election-lab", "quorum-read-write-simulator"],
    learningOutcomes: [
      "Map consistent hashing slots configurations dynamically to server nodes",
      "Calculate read/write quorum offsets ensuring consistency constraints",
      "Deploy consensus nodes resolving leader elections split-brain issues"
    ],
    interviewValue: [
      "Apply CAP Theorem compromises limits to real-world store design",
      "Analyze partition failure behaviors under strict Quorum configs"
    ]
  },
  {
    id: "consistency-reliability",
    slug: "consistency-reliability",
    title: "Track 9: Consistency and Reliability",
    order: 9,
    description: "Design consistent transaction boundaries using outbox databases, saga flows, and distributed locks.",
    status: "coming-soon",
    modules: ["consistency-models", "saga-pattern", "transactional-outbox", "reliability-architectures"],
    plannedProjects: ["consistency-model-simulator", "saga-payment-flow", "outbox-pattern-lab", "idempotency-key-service"],
    learningOutcomes: [
      "Coordinate multi-service data updates utilizing saga compensating actions",
      "Write atomic outbox records syncing message brokers events",
      "Implement distributed locking mechanisms using Redis leases configurations"
    ],
    interviewValue: [
      "Propose strategies handling transactional failures inside distributed systems",
      "Compare two-phase commit locks bottlenecks with Saga-based transactions"
    ]
  },
  {
    id: "storage-systems",
    slug: "storage-systems",
    title: "Track 10: Storage Systems",
    order: 10,
    description: "Build robust file, media, and object storage configurations managing chunked multi-part uploads.",
    status: "coming-soon",
    modules: ["blob-object-storage", "upload-pipelines", "cdn-asset-delivery", "large-file-handling"],
    plannedProjects: ["file-upload-service", "image-storage-pipeline", "video-metadata-system", "presigned-url-upload-lab"],
    learningOutcomes: [
      "Configure pre-signed URL uploads isolating backend instances",
      "Implement multi-part chunked files streams to prevent request timeout limits",
      "Optimize content delivery networks (CDNs) cache invalidations for media updates"
    ],
    interviewValue: [
      "Detail metadata database modeling schemas for billions of media objects",
      "Design systems capable of scaling to support parallel video transcoders"
    ]
  },
  {
    id: "search-recommendation",
    slug: "search-recommendation",
    title: "Track 11: Search and Recommendation Systems",
    order: 11,
    description: "Design autocomplete text match databases, inverted index models, and ranking systems.",
    status: "coming-soon",
    modules: ["search-mechanics", "elasticsearch-indexing", "fuzzy-autocomplete", "recommendation-ranking"],
    plannedProjects: ["autocomplete-system", "mini-search-engine", "product-search-system", "recommendation-feed-simulator"],
    learningOutcomes: [
      "Construct inverted index structures resolving fuzzy queries fast",
      "Design autocomplete pipelines using trie data structures in memory",
      "Scale search cluster node replication balancing lookup latency"
    ],
    interviewValue: [
      "Explain indexing updates pipelines mapping document writes to search indices",
      "Design query parsers sorting products catalogs dynamically based on user context"
    ]
  },
  {
    id: "real-time-systems",
    slug: "real-time-systems",
    title: "Track 12: Real-Time Systems",
    order: 12,
    description: "Scale live websocket connection grids, pub/sub topologies, and presence updates tracking.",
    status: "coming-soon",
    modules: ["websockets-sse", "pubsub-brokers", "presence-tracking", "chat-message-ordering"],
    plannedProjects: ["realtime-chat-system", "live-notification-system", "collaborative-cursor-demo", "live-sports-score-system"],
    learningOutcomes: [
      "Maintain active concurrent WebSocket connections inside cluster grids",
      "Design sequence numbers generator engines ensuring message delivery order",
      "Optimize presence servers memory utilization using Redis hash buckets"
    ],
    interviewValue: [
      "Detail server routing fanout systems broadcast-broadcasting to million viewers",
      "Compare long polling, Server-Sent Events, and WebSockets options"
    ]
  },
  {
    id: "security-abuse",
    slug: "security-abuse",
    title: "Track 13: Security, Abuse Prevention, and Rate Limiting",
    order: 13,
    description: "Design secure API gateways authorizations, sliding window rate limiters, and bot abuse detectors.",
    status: "coming-soon",
    modules: ["security-auth-jwt", "rate-limiting-algorithms", "bot-abuse-prevention", "audit-logs-design"],
    plannedProjects: ["rate-limiter-system", "auth-service-design", "abuse-detection-pipeline", "audit-logging-system"],
    learningOutcomes: [
      "Build sliding window rate limit counters using Redis sorted sets",
      "Enforce JSON Web Tokens verification rules on API endpoints",
      "Implement append-only audit log streams tracking administrative writes"
    ],
    interviewValue: [
      "Defend token bucket vs leaky bucket algorithm behaviors under burst request limits",
      "Propose defenses protecting APIs from credential stuffing and bot DDoS"
    ]
  },
  {
    id: "observability-incident",
    slug: "observability-incident",
    title: "Track 14: Observability and Incident Management",
    order: 14,
    description: "Implement OpenTelemetry tracing setups, metrics log consolidations, and SLO alert rules.",
    status: "coming-soon",
    modules: ["logging-metrics-tracing", "opentelemetry-standard", "slos-slo-alerts", "incident-debugging"],
    plannedProjects: ["observability-dashboard", "distributed-tracing-lab", "incident-simulation-system", "slo-error-budget-tracker"],
    learningOutcomes: [
      "Configure distributed context propagation tracing requests across services",
      "Construct metric counters monitoring target error thresholds",
      "Design SLO warning systems triggering alerts on database connections exhausts"
    ],
    interviewValue: [
      "Detail incident root-cause analysis steps resolving performance regressions",
      "Propose strategies to isolate logs metrics overheads from production write paths"
    ]
  },
  {
    id: "case-studies",
    slug: "case-studies",
    title: "Track 15: System Design Case Studies",
    order: 15,
    description: "Design WhatsApp, YouTube, Uber, and Instagram. Complete senior-level system design layouts.",
    status: "coming-soon",
    modules: ["url-shortener-case", "newsfeed-architecture", "video-sharing-youtube", "ride-hailing-uber", "chat-system-whatsapp"],
    plannedProjects: ["design-url-shortener", "design-youtube", "design-whatsapp", "design-uber", "design-instagram", "design-google-drive", "design-payment-system", "design-notification-system"],
    learningOutcomes: [
      "Design systems using clear data schemas, storage boundaries, and caches",
      "Address video transcodings, geo-spatial query routing, and write bottlenecks",
      "Draw system architecture diagrams detailing load balancers and database shards"
    ],
    interviewValue: [
      "Present complete design specifications for real-world platforms",
      "Analyze single points of failures in complex distributed topologies"
    ]
  },
  {
    id: "interview-mastery",
    slug: "interview-mastery",
    title: "Track 16: System Design Interview Mastery",
    order: 16,
    description: "Train structure communication, requirement clarifications, estimation limits, and bottleneck deep-dives.",
    status: "coming-soon",
    modules: ["clarification-frameworks", "back-of-envelope-math", "deep-dive-handling", "failure-recovery-communication"],
    plannedProjects: ["design-interview-simulator", "architecture-diagram-casebook", "tradeoff-decision-journal", "design-review-lab"],
    learningOutcomes: [
      "Drive system design interviews using a structured engineering checklist",
      "Estimate bandwidth requirements live during whiteboard presentations",
      "Present tradeoffs between relational databases and key-value datastores"
    ],
    interviewValue: [
      "Defend database sharding decisions against replication topologies",
      "Expose memory bottlenecks inside high-throughput queue systems"
    ]
  }
];
