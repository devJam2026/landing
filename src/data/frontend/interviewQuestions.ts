export type FrontendInterviewQuestion = {
  id: string;
  moduleSlug: string;
  question: string;
  answer: string;
};

export const frontendInterviewQuestions: Record<string, FrontendInterviewQuestion[]> = {
  "browser-loading": [
    {
      id: "fe-q1",
      moduleSlug: "browser-loading",
      question: "How do styles block rendering while scripts block parsing in the browser loading phase?",
      answer: "DOM parsing runs sequentially. When the HTML parser hits a `<script>` tag, it stops parsing the document to fetch and run the JavaScript, since the script could modify the DOM via `document.write`. By contrast, `<link rel='stylesheet'>` does not block the HTML parser. However, because JS can query styling attributes, the browser pauses script execution (and rendering) until the CSSOM tree is fully constructed, meaning styles block rendering and script execution."
    }
  ],
  "js-engine": [
    {
      id: "fe-q2",
      moduleSlug: "js-engine",
      question: "What is the difference between microtasks and macrotasks queues in V8 execution, and how do they impact page responsiveness?",
      answer: "Macrotasks (like `setTimeout`, `setInterval`, and user interaction callbacks) are processed one at a time per loop cycle. Microtasks (like `Promise.then` and `queueMicrotask`) are processed immediately after the current execution context clears and before rendering. If microtasks schedule more microtasks recursively, V8 will process them indefinitely, starving the macrotask queue and blocking browser repaint updates, causing the UI to freeze."
    }
  ]
};
