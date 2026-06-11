import { AIContentStatus } from "./tracks";
import { DevJamExternalLink } from "./projects";

export type AILab = {
  slug: string;
  name: string;
  pillar: "AI Engineer";
  trackSlug: string;
  status: AIContentStatus;
  goal: string;
  tech: string[];
  github: DevJamExternalLink;
  liveDemo: DevJamExternalLink;
};

export const aiLabs: Record<string, AILab> = {
  "tokenizer-visualizer": {
    slug: "tokenizer-visualizer",
    name: "Tokenizer Visualizer",
    pillar: "AI Engineer",
    trackSlug: "foundation",
    status: "in-progress",
    goal: "Visualize BPE (Byte Pair Encoding) character tokens divisions, vocabulary mappings, and input costs.",
    tech: ["TypeScript", "React", "CSS Variables"],
    github: {
      label: "GitHub",
      url: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      status: "available"
    },
    liveDemo: {
      label: "Live Demo",
      url: "/labs/tokenizer-visualizer",
      status: "available"
    }
  },
  "activation-visualizer": {
    slug: "activation-visualizer",
    name: "Activation Function Visualizer",
    pillar: "AI Engineer",
    trackSlug: "neural-networks",
    status: "coming-soon",
    goal: "Animate values passing through Sigmoid, Tanh, ReLU, and GeLU thresholds showing gradient calculations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    }
  },
  "transformer-block-visualizer": {
    slug: "transformer-block-visualizer",
    name: "Transformer Block Visualizer",
    pillar: "AI Engineer",
    trackSlug: "transformers",
    status: "coming-soon",
    goal: "Step through Multi-Head attention splits and Layer Normalizations in a styled flow dashboard.",
    tech: ["TypeScript", "Framer Motion", "SVG"],
    github: {
      label: "GitHub",
      status: "coming-soon"
    },
    liveDemo: {
      label: "Live Demo",
      status: "coming-soon"
    }
  }
};
