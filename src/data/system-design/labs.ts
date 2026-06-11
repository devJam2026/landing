import { SystemDesignContentStatus } from "./tracks";
import { SystemDesignExternalLink } from "./projects";

export type SystemDesignLab = {
  slug: string;
  name: string;
  pillar: "System Design";
  trackSlug: string;
  status: SystemDesignContentStatus;
  goal: string;
  tech: string[];
  github: SystemDesignExternalLink;
  liveDemo: SystemDesignExternalLink;
};

export const systemDesignLabs: Record<string, SystemDesignLab> = {
  "requirement-breakdown-lab": {
    slug: "requirement-breakdown-lab",
    name: "Requirement Breakdown Lab",
    pillar: "System Design",
    trackSlug: "foundation",
    status: "coming-soon",
    goal: "Translate vague product specifications into functional limits and service level objectives.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" }
  },
  "capacity-estimation-calculator": {
    slug: "capacity-estimation-calculator",
    name: "Capacity Estimation Calculator",
    pillar: "System Design",
    trackSlug: "foundation",
    status: "coming-soon",
    goal: "Compute network bandwidth, RAM cache parameters, and disk space configurations dynamically.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" }
  }
};
