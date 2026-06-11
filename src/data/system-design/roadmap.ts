export type SystemDesignRoadmapNode = {
  id: string;
  title: string;
  trackSlug: string;
  order: number;
  description: string;
  milestone: string;
  isComplete: boolean;
};

export const systemDesignRoadmap: SystemDesignRoadmapNode[] = [
  {
    id: "step-1",
    title: "1. System Design Foundation",
    trackSlug: "foundation",
    order: 1,
    description: "Master functional requirements gathering, back-of-the-envelope storage estimation formulas, and CAP theorem tradeoffs frameworks.",
    milestone: "Complete 3 foundation canvas exercises specifying SLA targets.",
    isComplete: false
  },
  {
    id: "step-2",
    title: "2. Networking & Web Architecture",
    trackSlug: "networking-web",
    order: 2,
    description: "Understand TCP routing latency, TLS handshake steps, reverse proxy configurations, and API gateways workflows.",
    milestone: "Build request lifecycle simulations tracing network round-trips.",
    isComplete: false
  },
  {
    id: "step-3",
    title: "3. API Design",
    trackSlug: "api-design",
    order: 3,
    description: "Design robust REST/GraphQL/gRPC APIs contract mappings, idempotency control keys, and cursor-based pagination.",
    milestone: "Deploy payment API configurations ensuring execution safety.",
    isComplete: false
  },
  {
    id: "step-4",
    title: "4. Database Design",
    trackSlug: "database-design",
    order: 4,
    description: "Model SQL normalization structures, NoSQL document schemas, database partitioning indexes, and replication logs.",
    milestone: "Structure transactional database tables avoiding partition hot-spots.",
    isComplete: false
  },
  {
    id: "step-5",
    title: "5. Caching Systems",
    order: 5,
    trackSlug: "caching-systems",
    description: "Configure write-behind and write-through synchronizations, TTL cache invalidations policies, and hot-key caches mappings.",
    milestone: "Deploy Redis caching clusters configurations.",
    isComplete: false
  },
  {
    id: "step-6",
    title: "6. Load Balancing and Scaling",
    order: 6,
    trackSlug: "load-balancing-scaling",
    description: "Configure load balancing weight distributions, autoscaling groups metrics thresholds, and circuit breakers cascades protection.",
    milestone: "Simulate circuit breaker trip triggers on request overload models.",
    isComplete: false
  },
  {
    id: "step-7",
    title: "7. Message Queues & Async Processing",
    order: 7,
    trackSlug: "message-queues-async",
    description: "Design async task worker groups, Kafka partitions event streaming, and dead-letter queue (DLQ) retry backoffs.",
    milestone: "Assemble notification retry pipelines with backoff retry.",
    isComplete: false
  },
  {
    id: "step-8",
    title: "8. Distributed Systems",
    order: 8,
    trackSlug: "distributed-systems",
    description: "Model leader election algorithms, consistent hashing data distributions, and quorum read/write equations checks.",
    milestone: "Simulate keys redistribution patterns in consistent hashing rings.",
    isComplete: false
  },
  {
    id: "step-9",
    title: "9. Consistency and Reliability",
    order: 9,
    trackSlug: "consistency-reliability",
    description: "Enforce eventual consistency rules, transactional outbox patterns, and saga compensation flows.",
    milestone: "Implement transaction rollback plans on multi-service updates.",
    isComplete: false
  },
  {
    id: "step-10",
    title: "10. Storage Systems",
    order: 10,
    trackSlug: "storage-systems",
    description: "Configure chunked multi-part media uploads, CDN caching strategies, and pre-signed object uploads.",
    milestone: "Build object upload interfaces preventing server buffer overruns.",
    isComplete: false
  },
  {
    id: "step-11",
    title: "11. Search & Recommendation Systems",
    order: 11,
    trackSlug: "search-recommendation",
    description: "Design autocomplete prefix query indexes, inverted index data models, and ranking scoring equations.",
    milestone: "Deploy index search templates responding to fuzzy user requests.",
    isComplete: false
  },
  {
    id: "step-12",
    title: "12. Real-Time Systems",
    order: 12,
    trackSlug: "real-time-systems",
    description: "Scale websocket network connections grids, server-sent events (SSE) logs, and user presence tracking metrics.",
    milestone: "Build chat systems ensuring correct sequence order delivery.",
    isComplete: false
  },
  {
    id: "step-13",
    title: "13. Security, Abuse Prevention, and Rate Limiting",
    order: 13,
    trackSlug: "security-abuse",
    description: "Build sliding window rate limiters counters, secure authentication cookies attributes, and bot detection pipelines.",
    milestone: "Deploy sliding window rate limit checkers in Redis.",
    isComplete: false
  },
  {
    id: "step-14",
    title: "14. Observability and Incident Management",
    order: 14,
    trackSlug: "observability-incident",
    description: "Configure OpenTelemetry trace context propagation across microservices, metrics collections, and SLO warning configurations.",
    milestone: "Deploy incident tracking tools logging cluster performance.",
    isComplete: false
  },
  {
    id: "step-15",
    title: "15. System Design Case Studies",
    order: 15,
    trackSlug: "case-studies",
    description: "Analyze production architectures specifications: YouTube, WhatsApp, Uber, payment platforms, and newsfeeds.",
    milestone: "Assemble whiteboard layout architectures detailing dependencies.",
    isComplete: false
  },
  {
    id: "step-16",
    title: "16. System Design Interview Mastery",
    order: 16,
    trackSlug: "interview-mastery",
    description: "Prepare whiteboard presentations structures, live capacity estimations, failure recovery drills, and senior engineer tradeoffs communication.",
    milestone: "Document portfolio design books and design review logs.",
    isComplete: false
  }
];
