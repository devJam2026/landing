import { SystemDesignContentStatus } from "./tracks";

export type SystemDesignSubmodule = {
  id: string;
  slug: string;
  trackSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  status: SystemDesignContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
  projectMapping: string[];
  interviewValue: string[];
  detailedExplanation?: string;
  interviewQuestions?: { question: string; answer: string; }[];
};

export const systemDesignSubmodules: Record<string, SystemDesignSubmodule> = {
  // Track 1: Foundation Submodules
  "what-is-system-design": {
    id: "what-is-system-design",
    slug: "what-is-system-design",
    trackSlug: "foundation",
    moduleSlug: "system-design-intro",
    title: "Introduction to System Design",
    description: "Understand the core scope of system design, architectural boundaries, and scaling models.",
    status: "coming-soon",
    whatYouWillLearn: [
      "The role of the system design architect",
      "Monoliths vs microservices architecture",
      "Vertical vs horizontal scaling models"
    ],
    whyItMatters: "Building a foundation in scaling patterns keeps system designers from selecting overly complex systems prematurely.",
    conceptsCovered: ["Monolith vs Microservices", "Horizontal Scaling", "SLA Boundaries"],
    projectMapping: ["requirement-breakdown-lab"],
    interviewValue: [
      "Explain the downsides of vertical scaling limits",
      "Propose monolith decomposition pathways to teams"
    ],
    detailedExplanation: "System design is the process of defining architecture, modules, interfaces, and data constraints for a system to satisfy specified requirements. Novice designers often jump to adding databases, caching servers, and message queues without understanding the core constraints. Staff engineers clarify functional constraints, identify traffic/storage limits, outline database tables, and evaluate hardware bottlenecks beforehand.",
    interviewQuestions: [
      {
        question: "When is vertical scaling preferred over horizontal scaling?",
        answer: "Vertical scaling (adding more CPU/RAM to a single server) is preferred when the application is simple, database transaction ACID controls are heavily needed on a single node, and the traffic limits fit comfortably within single large instance boundaries, saving complex distributed networking sync overheads."
      }
    ]
  },
  "functional-vs-non-functional": {
    id: "functional-vs-non-functional",
    slug: "functional-vs-non-functional",
    trackSlug: "foundation",
    moduleSlug: "system-design-intro",
    title: "Requirements Gathering",
    description: "Clarify system requirements and differentiate functional features from performance metrics.",
    status: "coming-soon",
    whatYouWillLearn: [
      "Functional requirements specs definition",
      "Non-functional requirements mapping (latency, availability, SLAs)",
      "How to set target scopes in interview environments"
    ],
    whyItMatters: "Failing to define clear requirements leads to over-engineering and designing systems that do not resolve target constraints.",
    conceptsCovered: ["Functional Requirements", "Non-Functional Requirements", "Service Level Agreements"],
    projectMapping: ["requirement-breakdown-lab"],
    interviewValue: [
      "Translate ambiguous requests into clear technical requirements specifications",
      "Estimate target availability percentages (e.g. 99.99%) requirements"
    ],
    detailedExplanation: "Requirements shape the system architecture. Functional requirements describe WHAT the system does (e.g., users can upload images). Non-functional requirements specify HOW WELL the system performs (e.g., upload must complete within 2 seconds, system availability must exceed 99.9%). Clearly defining these at the start of a design session guides technical selection tradeoffs.",
    interviewQuestions: [
      {
        question: "What is the difference between availability and reliability?",
        answer: "Availability measures the percentage of time a system remains operational and accessible to handle client requests. Reliability measures the system's ability to perform its function without failures over a given interval. A system can have high availability (e.g. returns mock database screens quickly) but low reliability (e.g. queries transactions fail frequently)."
      }
    ]
  },
  "capacity-estimation-core": {
    id: "capacity-estimation-core",
    slug: "capacity-estimation-core",
    trackSlug: "foundation",
    moduleSlug: "requirements-estimation",
    title: "Back-of-the-Envelope Estimation",
    description: "Calculate bandwidth, memory cache sizes, CPU core needs, and disk storage requirements.",
    status: "coming-soon",
    whatYouWillLearn: [
      "Data size math conversions (KB, MB, GB, TB, PB)",
      "Calculating queries per second (QPS) targets",
      "Estimating read/write cache sizing boundaries"
    ],
    whyItMatters: "Accurate storage estimations help teams avoid connection timeouts and size cluster hardware resources correctly.",
    conceptsCovered: ["QPS Calculations", "Data Sizing Math", "Cache Sizing Estimations"],
    projectMapping: ["capacity-estimation-calculator"],
    interviewValue: [
      "Estimate network bandwidth needs for global write heavy workloads",
      "Calculate cache database size using the 80/20 query access rule"
    ]
  }
};
