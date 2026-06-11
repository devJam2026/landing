import { FrontendContentStatus } from "./tracks";

export type FrontendExternalLink = {
  label: string;
  url?: string;
  status: "available" | "coming-soon" | "not-applicable";
};

export type FrontendProject = {
  id: string;
  slug: string;
  title: string;
  pillar: "Frontend Architect";
  trackSlug: string;
  moduleSlug?: string;
  concept: string;
  description: string;
  status: FrontendContentStatus;

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

  github: FrontendExternalLink;
  liveDemo: FrontendExternalLink;
  lab?: FrontendExternalLink;
  docs?: FrontendExternalLink;

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

export const frontendProjects: Record<string, FrontendProject> = {
  "browser-rendering-visualizer": {
    id: "P1",
    slug: "browser-rendering-visualizer",
    title: "Browser Rendering Visualizer",
    pillar: "Frontend Architect",
    trackSlug: "foundation",
    moduleSlug: "rendering-pipeline",
    concept: "Critical Rendering Path Stages & Layout Shifting",
    description: "An interactive laboratory animating parsing, DOM construction, render trees alignment, paint cycles, and GPU compositing transitions.",
    status: "coming-soon",
    problemStatement: "Engineers struggles to isolate performance problems between slow scripts execution, reflow triggers, and paint times.",
    whatItTeaches: "It teaches step-by-step layout flow, composite operations, and visual regression detection.",
    whyItMatters: "Minimizing layout calculation costs directly helps engineers optimize Core Web Vitals metrics like CLS and LCP.",
    conceptsCovered: ["DOM Construction", "CSSOM Trees", "GPU Compositing Layers"],
    learningOutcomes: [
      "Detail browser layout flow triggers",
      "Avoid reflow triggers using composite transformations animations"
    ],
    interviewQuestions: ["Describe the difference between reflow and repaint phases."],
    architecture: {
      summary: "Visual simulation showing HTML tags converted to DOM nodes and styled by matching CSS rules.",
      diagramType: "flow",
      nodes: ["Raw Document", "DOM Parser", "CSSOM Mapper", "Render Tree", "Paint Engine"],
      edges: ["Raw Document -> DOM Parser", "DOM Parser -> Render Tree", "CSSOM Mapper -> Render Tree", "Render Tree -> Paint Engine"]
    },
    dataFlow: [
      "1. Input HTML text enters local parser loop.",
      "2. Visualizer logs tree conversion phases.",
      "3. Styles properties map to respective visual nodes.",
      "4. UI animate paint layers step-by-step."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    implementationPlan: [
      "1. Build step-by-step parser animations schema.",
      "2. Create custom CSS parser mockup metrics.",
      "3. Render responsive grid layers."
    ],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["event-loop-playground"],
    futureImprovements: []
  },
  "event-loop-playground": {
    id: "P2",
    slug: "event-loop-playground",
    title: "JavaScript Event Loop Playground",
    pillar: "Frontend Architect",
    trackSlug: "foundation",
    moduleSlug: "js-engine",
    concept: "Call Stack scheduling and Microtasks queue priority",
    description: "Interactive laboratory simulating Call Stack execution, microtask queues priority (Promises), and macrotasks timings (setTimeout).",
    status: "coming-soon",
    problemStatement: "Asynchronous execution ordering creates hard-to-debug layout paint and data updates timing errors.",
    whatItTeaches: "It teaches macrotasks vs microtasks scheduling boundaries, call stack scopes, and paint cycles synchronization.",
    whyItMatters: "Understanding tasks queue priority enables developers to run CPU-intensive operations without freezing interactive frames.",
    conceptsCovered: ["Call Stack Scopes", "Microtasks Priority Queue", "Browser Repaint Handlers"],
    learningOutcomes: [
      "Trace promise execution priorities",
      "Explain task starvation issues under dense microtask queues loops"
    ],
    interviewQuestions: ["Why do promise handlers execute prior to timeout timers even if scheduled at similar times?"],
    architecture: {
      summary: "Simulated execution stack console showing calls push, execute, pop, and queues flush animations.",
      diagramType: "component",
      nodes: ["Input Code Script", "Engine Interpreter", "Execution Call Stack", "Microtasks Queue", "Macrotasks Queue", "Event Loop Scheduler"],
      edges: ["Input Code Script -> Engine Interpreter", "Engine Interpreter -> Execution Call Stack", "Execution Call Stack -> Microtasks Queue", "Microtasks Queue -> Event Loop Scheduler"]
    },
    dataFlow: [
      "1. User writes async code execution scripts.",
      "2. Scheduler maps calls to appropriate queues.",
      "3. Event loop executes call stack items sequentially.",
      "4. UI shows tasks priority flushes."
    ],
    techStack: ["React", "TypeScript", "CSS variables"],
    implementationPlan: [
      "1. Build call stack execution engine mockup.",
      "2. Style queues using distinct colors grids.",
      "3. Add step controls toggles."
    ],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: ["browser-rendering-visualizer"],
    futureImprovements: []
  },
  "typescript-type-safety-lab": {
    id: "P3",
    slug: "typescript-type-safety-lab",
    title: "TypeScript Type Safety Lab",
    pillar: "Frontend Architect",
    trackSlug: "foundation",
    moduleSlug: "typescript-fundamentals",
    concept: " Discriminated Unions & Generics constraints validation",
    description: "Playground compiling generic schemas validations, strict boundaries assertions, and narrowings.",
    status: "coming-soon",
    problemStatement: "Poorly typed systems pass loose constraints checking, leading to runtime failures inside APIs connections.",
    whatItTeaches: "It teaches generics mapping, utility type builders, and discriminated unions architectures.",
    whyItMatters: "Strong TypeScript typing guarantees API call parameters safety and boosts development velocity.",
    conceptsCovered: ["Generics Constraints", "Type Narrowing Guards", "Discriminated Unions"],
    learningOutcomes: [
      "Build generic API response type schemas",
      "Narrow loose JSON objects safely into strongly typed interfaces"
    ],
    interviewQuestions: ["What are utility types and how do you write custom type maps?"],
    architecture: {
      summary: "Client side workspace validator compiling code snippets to analyze type guards boundaries.",
      diagramType: "system",
      nodes: ["Code Editor Input", "TS Compiler Mockup", "AST Validation Gate", "Errors Logger Console"],
      edges: ["Code Editor Input -> TS Compiler Mockup", "TS Compiler Mockup -> AST Validation Gate", "AST Validation Gate -> Errors Logger Console"]
    },
    dataFlow: [
      "1. User writes typed structures.",
      "2. Compiler validates type narrowing mappings.",
      "3. Errors output to console visual indicators."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    implementationPlan: [],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" },
    relatedProjects: [],
    futureImprovements: []
  }
};
