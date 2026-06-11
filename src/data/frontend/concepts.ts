export type FrontendConceptNote = {
  slug: string;
  title: string;
  overview: string;
  whyExists: string;
  intuition: string;
  visualization: string;
  complexity: string;
  productionUseCases: string[];
};

export const frontendConcepts: Record<string, FrontendConceptNote> = {
  "browser-loading": {
    slug: "browser-loading",
    title: "Browser Loading & DOM Construction",
    overview: "DOM construction resolves raw character arrays into semantic nodes which browser engines paint to visual layout grids.",
    whyExists: "Browsers need structured maps (the DOM tree) to compute node positions, apply styling overrides, and bind javascript handlers.",
    intuition: "Think of parsing code like reading a blueprint. You parse raw blueprints into walls, windows, and doors coordinates before arranging physical furniture configurations.",
    visualization: `
HTML String: "<div><p>Hello</p></div>"
Tokens:       [ StartTag"div", StartTag"p", Character"Hello", EndTag"p", EndTag"div" ]
DOM Tree:
      div
       |
       p
       |
    "Hello"
    `,
    complexity: "| Operation | Time Complexity | Notes |\n| :--- | :---: | :--- |\n| DOM Tree Node Build | O(N) | Sequential tokens scan over document character bytes |\n| CSS Selectors Matching | O(D * M) | Depth of DOM tree multiplied by matched stylesheet rules |",
    productionUseCases: [
      "Asset Budget Limits: Estimating script load delays dynamically prior to initial layout paint.",
      "SEO Crawler Optimization: Structuring semantics markup nodes to increase page rank indexes."
    ]
  },
  "event-loop": {
    slug: "event-loop",
    title: "Event Loop and Asynchronous Task Queues",
    overview: "The Event Loop schedules and executes calls, flushes promise handlers microtasks, and coordinates repaint animation updates.",
    whyExists: "JavaScript runs on a single main thread. Without an event loop scheduler queue, async timers and network loads would freeze layout animations.",
    intuition: "Think of a restaurant waiter. They take orders (macrotasks) sequentially, but immediately serve quick requests like refilling water (microtasks) before moving to next table.",
    visualization: `
Main Call Stack:   [ executeScript() ] (runs item, then clears)
Microtasks Queue:  [ promiseCallback1, promiseCallback2 ] (must empty completely)
Macrotask Queue:   [ setTimeoutCallback, networkEvent ] (runs one per turn)
    `,
    complexity: "| Operation | Priority | Time Complexity | Notes |\n| :--- | :---: | :---: | :--- |\n| Microtask Execution | High | O(1) | Executes immediately after stack empties |\n| Macrotask Execution | Low | O(1) | Executes one item from queue per event loop cycle |",
    productionUseCases: [
      "UI Responsiveness: Chunking long calculations loops utilizing setImmediate loops to prevent UI frames drop.",
      "State Updates Debounce: Scheduling state modifications flushes inside microtask callbacks to minimize paints."
    ]
  }
};
