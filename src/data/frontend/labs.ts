import { FrontendContentStatus } from "./tracks";
import { FrontendExternalLink } from "./projects";

export type FrontendLab = {
  slug: string;
  name: string;
  pillar: "Frontend Architect";
  trackSlug: string;
  status: FrontendContentStatus;
  goal: string;
  tech: string[];
  github: FrontendExternalLink;
  liveDemo: FrontendExternalLink;
};

export const frontendLabs: Record<string, FrontendLab> = {
  "browser-rendering-visualizer": {
    slug: "browser-rendering-visualizer",
    name: "Browser Rendering Visualizer",
    pillar: "Frontend Architect",
    trackSlug: "foundation",
    status: "coming-soon",
    goal: "Animate layouts painting, CSSOM updates blocking, and GPU compositing pipeline structures.",
    tech: ["TypeScript", "React", "Framer Motion"],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" }
  },
  "event-loop-playground": {
    slug: "event-loop-playground",
    name: "Event Loop Simulator",
    pillar: "Frontend Architect",
    trackSlug: "foundation",
    status: "coming-soon",
    goal: "Step through execution stacks queues flushes for timers and promise resolutions.",
    tech: ["TypeScript", "React", "CSS Transitions"],
    github: { label: "GitHub", status: "coming-soon" },
    liveDemo: { label: "Live Demo", status: "coming-soon" }
  }
};
