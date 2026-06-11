export type SystemDesignConceptNote = {
  slug: string;
  title: string;
  overview: string;
  whyExists: string;
  intuition: string;
  visualization: string;
  complexity: string;
  productionUseCases: string[];
};

export const systemDesignConcepts: Record<string, SystemDesignConceptNote> = {
  "requirements-gathering": {
    slug: "requirements-gathering",
    title: "Requirements Gathering Frameworks",
    overview: "Requirements gathering partitions an ambiguous design request into strict functional boundaries and non-functional SLA targets.",
    whyExists: "Without clarifying requirements, engineers risk building over-designed, low-efficiency architectures that fail to resolve the core problem.",
    intuition: "Think of mapping architectural boundaries. You need to know how many rooms, bathrooms, and stories are required before purchasing concrete and steel.",
    visualization: `
Ambiguous request: "Design YouTube"
Functional scope:    [ Upload Video ][ Stream Video ][ Search Video ]
Non-functional scope: [ High Availability ][ Low Latency Streaming ][ Mobile Friendly ]
    `,
    complexity: "| Category | Target Metric | Metric Scale |\n| :--- | :---: | :--- |\n| Core Latency | Video Start Delay | < 500ms globally |\n| Availability | Global System Uptime | 99.99% (Four Nines) |",
    productionUseCases: [
      "Whiteboard Case Studies: Outlining system limits before presenting database cluster topologies.",
      "Service Level Agreement definition: Setting thresholds for service timeout alerts configurations."
    ]
  },
  "capacity-estimation": {
    slug: "capacity-estimation",
    title: "Capacity Estimation Math",
    overview: "Capacity estimations compute disk space, server memory caches, and bandwidth limits to size resource clusters accurately.",
    whyExists: "Without capacity calculations, clusters suffer from database storage exhaustions and packet drop congestions.",
    intuition: "Think of provisioning a water reservoir. You estimate daily family consumption volumes before deciding on the size of the storage tank.",
    visualization: `
Daily QPS: 100,000,000 requests
Average row: 200 bytes
Daily Write Storage: 100M * 200 bytes = 20 GB/day
5-year Storage:      20 GB * 365 * 5 = 36.5 TB
    `,
    complexity: "| Estimation Target | Average Ratio | Time Scale |\n| :--- | :---: | :--- |\n| Cache Sizing | 20% of daily data | Handles 80% of queries traffic |\n| Network Bandwidth | Write QPS * Row Size | Determines server bandwidth caps |",
    productionUseCases: [
      "Database Partitioning Sizing: Sizing cluster shards configurations prior to database deployment.",
      "Bandwidth Cost Calculations: Planning server egress pricing overheads inside cloud budgets."
    ]
  }
};
