import { SystemDesignContentStatus } from "./tracks";

export type SystemDesignExternalLink = {
  label: string;
  url?: string;
  status: "available" | "coming-soon" | "not-applicable";
};

export type SystemDesignProject = {
  id: string;
  slug: string;
  title: string;
  pillar: "System Design";
  trackSlug: string;
  moduleSlug?: string;
  concept: string;
  description: string;
  status: SystemDesignContentStatus;

  problemStatement: string;
  whatItTeaches: string;
  whyItMatters: string;

  conceptsCovered: string[];
  learningOutcomes: string[];
  interviewQuestions: string[];

  architecture: {
    summary: string;
    diagramType: "flow" | "system" | "component" | "sequence";
    nodes: string[];
    edges: string[];
  };

  dataFlow: string[];
  techStack: string[];
  implementationPlan: string[];

  github: SystemDesignExternalLink;
  liveDemo: SystemDesignExternalLink;
  lab?: SystemDesignExternalLink;
  docs?: SystemDesignExternalLink;

  relatedProjects: string[];
  futureImprovements: string[];

  evidence?: {
    repoChecked?: boolean;
    repoExists?: boolean;
    demoChecked?: boolean;
    demoExists?: boolean;
    notes?: string[];
  };
};

export const systemDesignProjects: Record<string, SystemDesignProject> = {
  "requirement-breakdown-lab": {
    id: "P1",
    slug: "requirement-breakdown-lab",
    title: "Requirement Breakdown Lab",
    pillar: "System Design",
    trackSlug: "foundation",
    moduleSlug: "system-design-intro",
    concept: "Functional vs Non-Functional constraints mapping",
    description: "An interactive workspace helping engineers translate vague product specs into strict functional limits and service level objectives.",
    status: "coming-soon",
    problemStatement: "Vague specifications lead to scope creep and incorrect database choices.",
    whatItTeaches: "It teaches mapping business actions to API scopes and setting availability targets.",
    whyItMatters: "Requirements drive technical decisions; without them, designers over-engineer system setups.",
    conceptsCovered: ["Functional requirements", "SLO/SLA boundaries", "Ambiguity resolution"],
    learningOutcomes: [
      "Detail functional APIs interfaces",
      "Calculate target availability metrics under constraints"
    ],
    interviewQuestions: ["How do functional requirements differ from non-functional metrics?"],
    architecture: {
      summary: "Client side workspace helping users drag and drop business rules to generate an SLA specification document.",
      diagramType: "flow",
      nodes: ["Spec Text Input", "Parsing Parser", "Constraints Evaluator", "SLA Document Output"],
      edges: ["Spec Text Input -> Parsing Parser", "Parsing Parser -> Constraints Evaluator", "Constraints Evaluator -> SLA Document Output"]
    },
    dataFlow: [
      "1. User pastes specifications paragraph.",
      "2. Evaluator scans metrics keywords.",
      "3. Dashboard renders functional limits checklist."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["capacity-estimation-calculator"],
    futureImprovements: []
  },
  "capacity-estimation-calculator": {
    id: "P2",
    slug: "capacity-estimation-calculator",
    title: "Capacity Estimation Calculator",
    pillar: "System Design",
    trackSlug: "foundation",
    moduleSlug: "requirements-estimation",
    concept: "Network bandwidth, RAM cache, and Disk sizing estimation",
    description: "Calculator designed to compute storage requirements, memory cache parameters, and bandwidth capacity bounds for millions of active users.",
    status: "coming-soon",
    problemStatement: "Incorrect calculations lead to database provisioning failures and connection timeouts under peak loads.",
    whatItTeaches: "It teaches data sizing conversions, network throughput math, and Redis memory sizing calculations.",
    whyItMatters: "Proving capacity metrics validates system scalability during system architecture reviews.",
    conceptsCovered: ["QPS Math", "Storage Capacity", "Bandwidth estimations"],
    learningOutcomes: [
      "Calculate storage needs for billions of database rows",
      "Estimate peak bandwidth specifications under burst load rules"
    ],
    interviewQuestions: ["How do you calculate the cache memory size needed using the 80/20 query access rule?"],
    architecture: {
      summary: "Client-side estimation engine parsing parameters inputs to dynamically export server hardware sheets.",
      diagramType: "component",
      nodes: ["Parameters Inputs", "Math Processor", "Hardware Sheets Generator", "Costs Panel"],
      edges: ["Parameters Inputs -> Math Processor", "Math Processor -> Hardware Sheets Generator", "Hardware Sheets Generator -> Costs Panel"]
    },
    dataFlow: [
      "1. User enters write QPS and average row size.",
      "2. Processor computes daily disk storage metrics.",
      "3. System suggests instances limits configuration."
    ],
    techStack: ["React", "TypeScript", "CSS Variables"],
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["requirement-breakdown-lab"],
    futureImprovements: []
  },
  "system-design-canvas": {
    id: "P3",
    slug: "system-design-canvas",
    title: "System Design Canvas",
    pillar: "System Design",
    trackSlug: "foundation",
    moduleSlug: "design-tradeoffs",
    concept: "Architectural Compromises & CAP theorem modeling",
    description: "Workspace allowing designers to build system architectures diagrams, annotate nodes database options, and evaluate consistency tradeoffs.",
    status: "coming-soon",
    problemStatement: "Designers often construct database graphs without documenting failure recovery scenarios and CAP tradeoffs.",
    whatItTeaches: "It teaches database schema structure modeling, sharding partitions selections, and read-replica lags.",
    whyItMatters: "Documenting tradeoffs clarifies why specific databases are selected under partition compromises.",
    conceptsCovered: ["CAP Theorem modeling", "Database selection tradeoffs", "Whiteboard presentation"],
    learningOutcomes: [
      "Deconstruct system dependencies pathways",
      "Map backup recovery steps under partition failure simulations"
    ],
    interviewQuestions: ["Why are ACID properties hard to maintain in distributed databases configurations?"],
    architecture: {
      summary: "Diagram canvas supporting drag-and-drop system nodes blocks to calculate system availability metrics.",
      diagramType: "system",
      nodes: ["Canvas Editor", "Nodes Catalog", "Tradeoffs Analyzer", "Export Spec Generator"],
      edges: ["Canvas Editor -> Tradeoffs Analyzer", "Nodes Catalog -> Canvas Editor", "Tradeoffs Analyzer -> Export Spec Generator"]
    },
    dataFlow: [
      "1. User connects database node block to load balancer block.",
      "2. Analyzer scans replication rules.",
      "3. Dashboard warns on potential single point of failure."
    ],
    techStack: ["React", "TypeScript", "HTML5 Canvas"],
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: [],
    futureImprovements: []
  }
};
