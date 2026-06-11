import { FrontendContentStatus } from "./tracks";

export type FrontendSubmodule = {
  id: string;
  slug: string;
  trackSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  status: FrontendContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
  projectMapping: string[];
  interviewValue: string[];
  detailedExplanation?: string;
  interviewQuestions?: { question: string; answer: string; }[];
};

export const frontendSubmodules: Record<string, FrontendSubmodule> = {
  // Track 1: Foundation Submodules
  "how-browsers-load-page": {
    id: "how-browsers-load-page",
    slug: "how-browsers-load-page",
    trackSlug: "foundation",
    moduleSlug: "browser-loading",
    title: "How Browsers Load a Page",
    description: "Deep dive into the critical rendering path steps and browser networking request cycles.",
    status: "coming-soon",
    whatYouWillLearn: [
      "Critical rendering path stages",
      "Parsing phase blocking and asynchronous scripts",
      "How CSS blocks rendering while JS blocks parsing"
    ],
    whyItMatters: "Understanding browser load cycles is vital to diagnostic page speed bottlenecks and improving initial rendering timings.",
    conceptsCovered: ["Parsing Blocking", "Script Loading Heuristics", "Browser Networking Lifecycle"],
    projectMapping: ["browser-rendering-visualizer"],
    interviewValue: [
      "Trace rendering phases from initial index HTML parse to complete screen paint",
      "Compare async vs defer script loading attributes"
    ],
    detailedExplanation: "When a browser fetches a page, it requests resources in order. It starts by constructing the Document Object Model (DOM) from HTML tags. During parsing, if it encounters a standard script tag, it halts DOM parsing to fetch and execute that script. By contrast, styles do not block DOM parsing but they do block script execution and rendering, as the browser needs the CSSOM to construct the final Render Tree.",
    interviewQuestions: [
      {
        question: "Explain the visual differences between script loading with async vs defer.",
        answer: "Both async and defer fetch scripts in the background without blocking HTML parsing. However, an async script executes immediately once it finishes fetching (which pauses HTML parsing), whereas a defer script waits for HTML parsing to complete entirely and executes in original document order right before the DOMContentLoaded event."
      }
    ]
  },
  "dns-tcp-tls-frontend": {
    id: "dns-tcp-tls-frontend",
    slug: "dns-tcp-tls-frontend",
    trackSlug: "foundation",
    moduleSlug: "browser-loading",
    title: "DNS, TCP, TLS, and HTTP Fundamentals",
    description: "Analyze low-level network connections and how they impact initial frontend latency.",
    status: "coming-soon",
    whatYouWillLearn: [
      "DNS resolution queries workflow",
      "TCP handshake steps and latency overheads",
      "TLS security negotiations and HTTP request cycles"
    ],
    whyItMatters: "Large payload files are slow to transfer when initial network connection setups suffer from high handshake overheads.",
    conceptsCovered: ["TCP Handshake", "TLS Negotiation", "DNS Pre-fetching"],
    projectMapping: [],
    interviewValue: [
      "Detail network optimizations like DNS pre-fetching and pre-connecting",
      "Analyze the impact of high-latency connections on Time to First Byte (TTFB)"
    ],
    detailedExplanation: "A network request involves several handshakes before data moves. First, the domain name is mapped to an IP address via DNS lookup. Next, a TCP connection is established via a 3-way handshake. If HTTPS is used, a TLS handshake negotiates encryption keys. Each of these steps requires round-trips (RTT) to the server, which can result in several hundred milliseconds of latency before the initial HTML bytes are received.",
    interviewQuestions: [
      {
        question: "How do you minimize initial connection setup latency in frontend applications?",
        answer: "We can pre-warm connections by adding resource hints to our HTML head. For example, `<link rel='dns-prefetch' href='https://api.example.com'>` resolves domain names early, while `<link rel='preconnect' href='https://api.example.com'>` goes a step further by performing the TCP handshake and TLS negotiation in the background before the actual data request is made."
      }
    ]
  },
  "js-execution-model": {
    id: "js-execution-model",
    slug: "js-execution-model",
    trackSlug: "foundation",
    moduleSlug: "js-engine",
    title: "JavaScript Execution Model",
    description: "Understand the single-threaded nature of JS execution, execution contexts, call stack, and memory scopes.",
    status: "coming-soon",
    whatYouWillLearn: [
      "V8 JIT compilation and execution phases",
      "Call Stack executions and scoping closures",
      "Memory allocation and garbage collection sweeps"
    ],
    whyItMatters: "JavaScript runs on a single main thread. Long-running code blocks block user interactions, leading to poor responsiveness.",
    conceptsCovered: ["Call Stack", "Scope Chains", "V8 Engine Heap"],
    projectMapping: ["event-loop-playground"],
    interviewValue: [
      "Trace scope closures lifetime under memory constraints",
      "Deconstruct call stack overflows limits"
    ]
  },
  "event-loop-microtasks": {
    id: "event-loop-microtasks",
    slug: "event-loop-microtasks",
    trackSlug: "foundation",
    moduleSlug: "js-engine",
    title: "Event Loop, Microtasks & Macrotasks",
    description: "Trace how tasks are scheduled, queued, and executed in order to keep rendering smooth.",
    status: "coming-soon",
    whatYouWillLearn: [
      "Macrotask queue operations (setTimeout, events)",
      "Microtask queue execution priority (Promises, queueMicrotask)",
      "Rendering queue synchronization (requestAnimationFrame)"
    ],
    whyItMatters: "Mismanaging async tasks cause unexpected execution order bugs and UI frame drops.",
    conceptsCovered: ["Task Queue", "Microtask Priority", "Animation Frame Scheduler"],
    projectMapping: ["event-loop-playground"],
    interviewValue: [
      "Trace execution outputs for mixed timeout and promise code snippets",
      "Explain the exact point when browser paint cycles occur in relation to tasks queues"
    ]
  }
};
