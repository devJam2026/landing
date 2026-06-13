import { DifficultyLevel } from "./tracksIndex";

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "blockquote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "code"; language: string; filename?: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "diagram"; diagramType: "architecture" | "flow" | "sequence" | "tree"; content: string };

export interface FrontendArticle {
  slug: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  readTime: string;
  tags: string[];
  track: string;
  pillar: string;
  status: "Published" | "Coming Soon";
  date: string;
  sections: ArticleSection[];
}

import { microFrontendsCompleteGuide } from "./articles/micro-frontends/micro-frontends-complete-guide";
import { moduleFederationDeepDive } from "./articles/micro-frontends/module-federation-deep-dive";
import { microFrontendsEcommerceSystemDesign } from "./articles/micro-frontends/micro-frontends-ecommerce-system-design";
import { communicationBetweenMicroFrontends } from "./articles/micro-frontends/communication-between-micro-frontends";
import { microFrontendTestingStrategy } from "./articles/micro-frontends/micro-frontend-testing-strategy";
import { microFrontendDeploymentObservability } from "./articles/micro-frontends/micro-frontend-deployment-observability";
import { microFrontendsVsModularMonolith } from "./articles/micro-frontends/micro-frontends-vs-modular-monolith";
import { migratingMonolithToMicroFrontends } from "./articles/micro-frontends/migrating-monolith-to-micro-frontends";
import { microFrontendShellAppDesign } from "./articles/micro-frontends/micro-frontend-shell-app-design";
import { routingDeepLinkingMicroFrontends } from "./articles/micro-frontends/routing-deep-linking-micro-frontends";
import { authenticationAuthorizationMicroFrontends } from "./articles/micro-frontends/authentication-authorization-micro-frontends";
import { sharedDependenciesVersioningMicroFrontends } from "./articles/micro-frontends/shared-dependencies-versioning-micro-frontends";
import { designSystemGovernanceMicroFrontends } from "./articles/micro-frontends/design-system-governance-micro-frontends";
import { performanceOptimizationMicroFrontends } from "./articles/micro-frontends/performance-optimization-micro-frontends";
import { errorBoundariesFailureIsolationMicroFrontends } from "./articles/micro-frontends/error-boundaries-failure-isolation-micro-frontends";
import { microFrontendInterviewQuestions } from "./articles/micro-frontends/micro-frontend-interview-questions";

export const frontendArticles: Record<string, FrontendArticle> = {
  "micro-frontends-complete-guide": microFrontendsCompleteGuide,
  "module-federation-deep-dive": moduleFederationDeepDive,
  "micro-frontends-ecommerce-system-design": microFrontendsEcommerceSystemDesign,
  "communication-between-micro-frontends": communicationBetweenMicroFrontends,
  "micro-frontend-testing-strategy": microFrontendTestingStrategy,
  "micro-frontend-deployment-observability": microFrontendDeploymentObservability,
  "micro-frontends-vs-modular-monolith": microFrontendsVsModularMonolith,
  "migrating-monolith-to-micro-frontends": migratingMonolithToMicroFrontends,
  "micro-frontend-shell-app-design": microFrontendShellAppDesign,
  "routing-deep-linking-micro-frontends": routingDeepLinkingMicroFrontends,
  "authentication-authorization-micro-frontends": authenticationAuthorizationMicroFrontends,
  "shared-dependencies-versioning-micro-frontends": sharedDependenciesVersioningMicroFrontends,
  "design-system-governance-micro-frontends": designSystemGovernanceMicroFrontends,
  "performance-optimization-micro-frontends": performanceOptimizationMicroFrontends,
  "error-boundaries-failure-isolation-micro-frontends": errorBoundariesFailureIsolationMicroFrontends,
  "micro-frontend-interview-questions": microFrontendInterviewQuestions,
};
