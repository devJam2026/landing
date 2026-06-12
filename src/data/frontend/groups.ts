export type FrontendGroup = {
  id: string;
  order: number;
  title: string;
  description: string;
  badge: string;
  trackIds: string[];
};

export const frontendGroups: FrontendGroup[] = [
  {
    id: "group-a",
    order: 1,
    title: "Group A: Core Frontend Foundation",
    description: "Master the essential mechanics of the browser rendering engine, modern scripting environments, and structural component layout rules.",
    badge: "Foundation",
    trackIds: ["track-1", "track-2", "track-3"],
  },
  {
    id: "group-b",
    order: 2,
    title: "Group B: Framework & Runtime Ecosystem",
    description: "Deep dive into component models, virtual trees, next-generation meta-frameworks, BFF (Backend-for-Frontend) patterns, and server-side execution runtime setups.",
    badge: "Ecosystem",
    trackIds: ["track-4", "track-5", "track-6", "track-7", "track-8"],
  },
  {
    id: "group-c",
    order: 3,
    title: "Group C: API, Data & Backend Integration",
    description: "Architect secure client state models, synchronize local cache configurations, design robust backend data contracts, and establish resilient service gateways.",
    badge: "Integration",
    trackIds: ["track-9", "track-10"],
  },
  {
    id: "group-d",
    order: 4,
    title: "Group D: Frontend Architecture & Engineering Patterns",
    description: "Define structural directories, establish boundaries for micro frontends, compile multi-workspace monorepos, and abstract enterprise design systems.",
    badge: "Patterns",
    trackIds: ["track-11", "track-12", "track-13", "track-14", "track-15", "track-16"],
  },
  {
    id: "group-e",
    order: 5,
    title: "Group E: Non-Functional Requirements for Frontend Systems",
    description: "Guarantee low latency Core Web Vitals, write secure network headers, resolve strict WCAG accessibility rules, and set up robust production telemetry diagnostics.",
    badge: "Engineering",
    trackIds: [
      "track-17",
      "track-18",
      "track-19",
      "track-20",
      "track-21",
      "track-22",
      "track-23",
      "track-24",
    ],
  },
  {
    id: "group-f",
    order: 6,
    title: "Group F: Frontend System Design & Interview Case Studies",
    description: "Deconstruct complex functional specifications, design feed systems, collaborative visual engines, and review Staff-level technical tradeoffs.",
    badge: "System Design",
    trackIds: ["track-25", "track-26"],
  },
  {
    id: "group-g",
    order: 7,
    title: "Group G: Master Projects / Capstones",
    description: "Build production-ready architectures, mock-interview practice libraries, and end-to-end telemetry observability nodes.",
    badge: "Capstones",
    trackIds: ["track-27"],
  },
];
