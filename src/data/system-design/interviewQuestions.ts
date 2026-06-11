export type SystemDesignInterviewQuestion = {
  id: string;
  moduleSlug: string;
  question: string;
  answer: string;
};

export const systemDesignInterviewQuestions: Record<string, SystemDesignInterviewQuestion[]> = {
  "system-design-intro": [
    {
      id: "sd-q1",
      moduleSlug: "system-design-intro",
      question: "How do functional requirements differ from non-functional requirements in System Design?",
      answer: "Functional requirements define the specific features and behaviors of the system (e.g., 'a user can send a message', 'a user can search for a product'). Non-functional requirements define the quality attributes and constraints of the system (e.g., 'system availability must be 99.99%', 'API latency must be below 200ms', 'data must be stored securely'). Both drive different parts of the architecture (APIs vs caching and sharding)."
    }
  ],
  "requirements-estimation": [
    {
      id: "sd-q2",
      moduleSlug: "requirements-estimation",
      question: "How do you calculate cache memory requirements using the 80/20 rule?",
      answer: "The 80/20 rule suggests that 20% of the data (the hot data) receives 80% of the read traffic. To size the cache, calculate the total read data volume generated in a single day (e.g. daily read requests * average query response size). Then, allocate memory to cache exactly 20% of this daily volume to serve the majority of requests from memory, reducing database read load."
    }
  ]
};
