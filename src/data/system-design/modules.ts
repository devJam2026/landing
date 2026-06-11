import { SystemDesignContentStatus } from "./tracks";

export type SystemDesignModule = {
  id: string;
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  status: SystemDesignContentStatus;
  submodules: string[];
  projects: string[];
  labs: string[];
  learningOutcomes: string[];
  interviewQuestions: string[];
};

export const systemDesignModules: Record<string, SystemDesignModule> = {
  // Track 1 Modules
  "system-design-intro": {
    id: "system-design-intro",
    slug: "system-design-intro",
    trackSlug: "foundation",
    title: "Module 1.1: System Design Frameworks",
    description: "Learn functional vs non-functional requirements boundaries, latencies, and scalability concepts.",
    status: "coming-soon",
    submodules: ["what-is-system-design", "functional-vs-non-functional"],
    projects: ["requirement-breakdown-lab"],
    labs: [],
    learningOutcomes: ["Differentiate functional requirements from system SLA metrics", "Identify performance bottlenecks under high concurrent loads"],
    interviewQuestions: ["How do you start a system design interview round?"]
  },
  "requirements-estimation": {
    id: "requirements-estimation",
    slug: "requirements-estimation",
    trackSlug: "foundation",
    title: "Module 1.2: Capacity Estimation",
    description: "Perform back-of-the-envelope calculations for storage, memory, CPU core limits, and network bandwidth constraints.",
    status: "coming-soon",
    submodules: ["capacity-estimation-core"],
    projects: ["capacity-estimation-calculator"],
    labs: [],
    learningOutcomes: ["Calculate daily database storage requirements for millions of active users", "Estimate total read/write network bandwidth targets"],
    interviewQuestions: ["Why are capacity estimations important in system design interviews?"]
  },
  "design-tradeoffs": {
    id: "design-tradeoffs",
    slug: "design-tradeoffs",
    trackSlug: "foundation",
    title: "Module 1.3: Balancing Tradeoffs",
    description: "Evaluate architectural compromises between availability, consistency, cost, and latency.",
    status: "coming-soon",
    submodules: ["tradeoff-thinking-framework"],
    projects: ["system-design-canvas"],
    labs: [],
    learningOutcomes: ["Analyze availability vs consistency tradeoffs in partition failures", "Optimize costs by choosing appropriate storage tiers"],
    interviewQuestions: ["Explain how CAP theorem influences database selection decisions."]
  },

  // Track 2 Modules
  "dns-lifecycle": {
    id: "dns-lifecycle",
    slug: "dns-lifecycle",
    trackSlug: "networking-web",
    title: "Module 2.1: DNS & Routing",
    description: "Deconstruct DNS resolution queries loops, anycast routing routes, and browser caches mappings.",
    status: "coming-soon",
    submodules: ["dns-routing-lifecycle"],
    projects: ["request-lifecycle-visualizer"],
    labs: [],
    learningOutcomes: ["Trace DNS lookup round-trips steps", "Utilize DNS geo-routing rules to redirect traffic"],
    interviewQuestions: ["Describe what happens step-by-step when resolving a domain name."]
  },
  "network-protocols-core": {
    id: "network-protocols-core",
    slug: "network-protocols-core",
    trackSlug: "networking-web",
    title: "Module 2.2: Networking Protocols",
    description: "Deep dive into TCP windows, HTTP headers, TLS negotiation, and packet loss recovery operations.",
    status: "coming-soon",
    submodules: ["tcp-tls-http-protocols"],
    projects: [],
    labs: [],
    learningOutcomes: ["Optimize TCP congestion window limits for low-latency transfers", "Verify TLS certificate validation handshakes"],
    interviewQuestions: ["Compare TCP connections overheads with UDP packet transmissions in streaming."]
  },
  "load-balancer-proxies": {
    id: "load-balancer-proxies",
    slug: "load-balancer-proxies",
    trackSlug: "networking-web",
    title: "Module 2.3: Load Balancers & Proxies",
    description: "Examine Layer-4 vs Layer-7 load balancing algorithms, forward/reverse proxies, and SSL terminations.",
    status: "coming-soon",
    submodules: ["reverse-proxy-load-balancer"],
    projects: ["cdn-cache-simulation"],
    labs: [],
    learningOutcomes: ["Distribute queries traffic using round-robin and least-connections rules", "Secure backend instances using reverse proxies boundaries"],
    interviewQuestions: ["Compare reverse proxies functionalities against API gateways setups."]
  },
  "api-gateways": {
    id: "api-gateways",
    slug: "api-gateways",
    trackSlug: "networking-web",
    title: "Module 2.4: API Gateways",
    description: "Manage request routing rules, rate limit throttles, metadata headers transformations, and secure keys checks.",
    status: "coming-soon",
    submodules: ["api-gateway-routing"],
    projects: ["api-gateway-routing-lab"],
    labs: [],
    learningOutcomes: ["Configure dynamic routing rules on secure API gateways", "Implement authentication checks on request filters layers"],
    interviewQuestions: ["What are the core responsibilities of an API Gateway in microservices?"]
  }
};
