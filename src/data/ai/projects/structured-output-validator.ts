export type ProjectFeature = {
  title: string;
  description: string;
};

export type ConceptBlock = {
  title: string;
  description: string;
};

export type Requirement = {
  id: string;
  requirement: string;
};

export type FileStructureItem = {
  path: string;
  description: string;
};

export type ApiContract = {
  endpoint: string;
  method: string;
  requestBody?: string;
  successResponse?: string;
  errorResponse?: string;
};

export type CodeExample = {
  title: string;
  code: string;
  description: string;
};

export type FailureCase = {
  title: string;
  description: string;
};

export type Milestone = {
  title: string;
  description: string;
};

export type ProjectLinks = {
  github?: string;
  liveDemo?: string;
  architectureDoc?: string;
  videoWalkthrough?: string;
};

export type AiProjectDetail = {
  slug: string;
  moduleId: string;
  title: string;
  subtitle: string;
  status: "available" | "coming-soon" | "in-progress";
  overview: string;
  problemStatement: string;
  learningObjectives: string[];
  features: ProjectFeature[];
  concepts: ConceptBlock[];
  functionalRequirements: Requirement[];
  nonFunctionalRequirements: Requirement[];
  architectureFlow: string[];
  backendStructure: FileStructureItem[];
  frontendStructure: FileStructureItem[];
  apiContracts: ApiContract[];
  dataModels: CodeExample[];
  validationLifecycle: string[];
  failureCases: FailureCase[];
  interviewQuestions: string[];
  interviewExplanation: string;
  milestones: Milestone[];
  links: ProjectLinks;
  futureImprovements: string[];
  keySkills: string[];
  techStack: string[];
  backendTree?: string;
  frontendTree?: string;
};

export const structuredOutputValidatorDetail: AiProjectDetail = {
  slug: "structured-output",
  moduleId: "structured-output",
  title: "Structured Output Validator",
  subtitle: "Build a type-safe LLM output validation system that converts unpredictable model responses into reliable, schema-validated JSON.",
  status: "coming-soon",
  overview: "Structured Output Validator is a production-style AI engineering project that teaches how to safely consume LLM responses inside real software systems.\n\nLLMs naturally generate free-form text, but production applications often need strict JSON structures. This project shows how to request structured output, parse raw model responses, validate them using schemas, handle malformed responses, retry failed generations, and return reliable typed data to the frontend.",
  problemStatement: "LLMs are excellent at generating natural language, but real applications cannot depend on raw text responses. A backend service, fraud detector, resume matcher, SEO analyzer, product insight dashboard, or agent workflow usually needs predictable structured data.\n\nThis project solves the problem of converting unstructured LLM completions into schema-safe JSON using validation models, retry policies, repair prompts, and frontend inspection tools.",
  learningObjectives: [
    "Why raw LLM output is risky in software systems",
    "Why structured output is needed and how to design it",
    "How schema validation works at the API gateway layer",
    "How Pydantic validates LLM responses in Python",
    "How retry and repair logic improves AI reliability",
    "How frontend interfaces inspect validation success/failure",
    "How to explain this project during technical AI interviews"
  ],
  features: [
    {
      title: "1. Prompt Input Playground",
      description: "User can enter raw text, email, message, review, resume content, or any sample input for parsing."
    },
    {
      title: "2. Schema Selector",
      description: "User can select predefined schemas including Scam Detection, Product Review Insight, Resume Match, or Generic JSON Extraction."
    },
    {
      title: "3. LLM Response Generator",
      description: "Backend routes prompts to the LLM provider, injecting schema instructions to enforce structured completions."
    },
    {
      title: "4. JSON Validator",
      description: "Backend validates the raw text completions using Pydantic model configurations."
    },
    {
      title: "5. Error Inspector",
      description: "Provides full debugging views displaying missing fields, wrong data types, invalid enum selections, and out-of-range confidence scores."
    },
    {
      title: "6. Retry & Repair Engine",
      description: "Retries or repairs bad completions using a feedback loop that sends errors back to the model for correction."
    },
    {
      title: "7. Validated Output Viewer",
      description: "Displays final valid JSON, validation logs, raw model output text, and total repair iteration attempts."
    }
  ],
  concepts: [
    {
      title: "Why LLM Output Is Unreliable",
      description: "Models are probabilistic and do not guarantee syntax validity. They can return extra text, unescaped characters, or hallucinated fields."
    },
    {
      title: "Prompt JSON vs JSON Mode vs Function Calling",
      description: "Compare baseline prompt constraints, model JSON mode enforcements, and native tool-calling parameter mappings."
    },
    {
      title: "Schema-Based Validation",
      description: "Define schemas that incoming raw outputs must satisfy, shifting evaluation checks to structured data."
    },
    {
      title: "Pydantic Models",
      description: "Use Python's standard parsing library to declare strong types, enums, boundaries, and custom validations."
    },
    {
      title: "Type Safety in AI APIs",
      description: "Compile and enforce strict TypeScript/Python contracts, converting raw inference responses into validated objects."
    },
    {
      title: "Retry Policies",
      description: "Construct client-side retry rules to handle network drops, timeouts, and temporary validation failures."
    },
    {
      title: "Repair Prompts",
      description: "Construct dynamic corrections prompting the model to repair malformed JSON based on parsed compiler error logs."
    },
    {
      title: "Guardrails",
      description: "Incorporate safety check blocks blocking toxic or malicious outputs prior to database updates."
    },
    {
      title: "Production AI Reliability",
      description: "Implement strategies like schema fallback defaults and circuit breakers to guarantee runtime stability."
    },
    {
      title: "Structured Outputs for Agents & RAG",
      description: "How structured outputs enable reliable agent tool calls, decision routing, and semantic data extractions."
    }
  ],
  functionalRequirements: [
    { id: "FR-01", requirement: "User can enter an input prompt/message" },
    { id: "FR-02", requirement: "User can select a predefined output schema" },
    { id: "FR-03", requirement: "System sends request to LLM with structured output instruction" },
    { id: "FR-04", requirement: "System receives raw LLM response" },
    { id: "FR-05", requirement: "System parses raw response into JSON" },
    { id: "FR-06", requirement: "System validates response against Pydantic schema" },
    { id: "FR-07", requirement: "System shows valid JSON output if validation passes" },
    { id: "FR-08", requirement: "System shows validation errors if validation fails" },
    { id: "FR-09", requirement: "System retries failed output generation based on retry policy" },
    { id: "FR-10", requirement: "System attempts repair for malformed JSON" },
    { id: "FR-11", requirement: "System displays retry count, validation status, and error reason" },
    { id: "FR-12", requirement: "User can compare raw response vs validated response" }
  ],
  nonFunctionalRequirements: [
    { id: "NFR-01", requirement: "API response should be fast for small inputs" },
    { id: "NFR-02", requirement: "Validation errors should be readable" },
    { id: "NFR-03", requirement: "System should not expose API keys to frontend" },
    { id: "NFR-04", requirement: "Frontend should handle loading, success, and error states" },
    { id: "NFR-05", requirement: "Backend should log validation failures" },
    { id: "NFR-06", requirement: "System should be extensible for new schemas" },
    { id: "NFR-07", requirement: "UI should work well on desktop and mobile" },
    { id: "NFR-08", requirement: "Code should be interview-ready and easy to explain" },
    { id: "NFR-09", requirement: "Backend should handle invalid user input safely" },
    { id: "NFR-10", requirement: "Project should support future LLM provider changes" }
  ],
  architectureFlow: [
    "User Input",
    "Frontend Playground",
    "FastAPI Backend",
    "Prompt Builder",
    "LLM Provider",
    "Raw Model Response",
    "JSON Parser",
    "Pydantic Validator",
    "Retry / Repair Engine",
    "Validated JSON Response",
    "Frontend Result Viewer"
  ],
  backendStructure: [
    { path: "apps/api/main.py", description: "Application entrypoint initializing FastAPI instance and routes middleware." },
    { path: "apps/api/routes/validate.py", description: "BFF routes processing requests, mapping configurations, and running validations." },
    { path: "apps/api/schemas/", description: "Pydantic models folder containing ScamDetectionOutput, ReviewInsight, and ResumeMatch models." },
    { path: "apps/api/services/llm_client.py", description: "API proxy wrapper directing queries to OpenAI or alternative LLM API." },
    { path: "apps/api/services/repair_engine.py", description: "Self-correcting repair loop requesting model updates with error context logs." }
  ],
  frontendStructure: [
    { path: "apps/web/app/structured-output/page.tsx", description: "Syllabus details container embedding layout panels." },
    { path: "apps/web/components/PromptInput.tsx", description: "User input form handling long text payloads." },
    { path: "apps/web/components/SchemaSelector.tsx", description: "Dropdown element switching active validation types." },
    { path: "apps/web/components/ErrorInspector.tsx", description: "Debugging display listing error logs and paths." },
    { path: "apps/web/components/RetryTimeline.tsx", description: "Logs display tracing repair operations." }
  ],
  apiContracts: [
    {
      endpoint: "POST /api/validate-output",
      method: "POST",
      requestBody: JSON.stringify({
        input: "Your account will be blocked. Click this link immediately to verify payment.",
        schema_type: "scam_detection",
        max_retries: 2
      }, null, 2),
      successResponse: JSON.stringify({
        status: "valid",
        schema_type: "scam_detection",
        retry_count: 0,
        data: {
          classification: "scam",
          confidence: 0.92,
          risk_factors: ["Urgency", "Suspicious link", "Account threat"],
          safe_action: "Do not click the link"
        }
      }, null, 2),
      errorResponse: JSON.stringify({
        status: "invalid",
        schema_type: "scam_detection",
        retry_count: 2,
        errors: [
          {
            field: "confidence",
            message: "Value must be between 0 and 1"
          }
        ],
        raw_output: "{ \"classification\": \"scam\", \"confidence\": 120 }"
      }, null, 2)
    }
  ],
  dataModels: [
    {
      title: "Pydantic Model Schema",
      code: `from typing import Literal
from pydantic import BaseModel, Field

class ScamDetectionOutput(BaseModel):
    classification: Literal["scam", "safe", "suspicious"]
    confidence: float = Field(ge=0, le=1)
    risk_factors: list[str]
    safe_action: str`,
      description: "This schema ensures that the LLM cannot return arbitrary or invalid data. The confidence field must stay between 0 and 1, and classification must match one of the allowed values."
    }
  ],
  validationLifecycle: [
    "Step 1: User submits input prompt",
    "Step 2: Backend selects schema config",
    "Step 3: Prompt builder injects schema instructions",
    "Step 4: LLM generates response completion",
    "Step 5: Parser extracts JSON brackets",
    "Step 6: Pydantic validates data properties",
    "Step 7: If valid, return typed response",
    "Step 8: If invalid, retry or repair using compiler logs",
    "Step 9: Return final validation status to frontend"
  ],
  failureCases: [
    {
      title: "Malformed JSON",
      description: "The model returns text before or after the JSON braces block."
    },
    {
      title: "Missing Required Field",
      description: "The model fails to output a required property defined in the schema."
    },
    {
      title: "Wrong Data Type",
      description: "The model returns confidence as a string (e.g. '0.9') instead of a float number."
    },
    {
      title: "Invalid Enum Value",
      description: "The model returns an invalid enum value (e.g., 'dangerous') instead of 'scam', 'safe', or 'suspicious'."
    },
    {
      title: "Hallucinated Fields",
      description: "The model adds extra fields not expected by the Pydantic schema."
    },
    {
      title: "Invalid Range Constraints",
      description: "The model returns confidence as 120 instead of a value between 0 and 1."
    }
  ],
  interviewExplanation: "In production AI systems, we cannot directly trust raw LLM text. I built a structured output validation layer where the backend defines strict schemas using Pydantic. The LLM response is parsed, validated, and either accepted, repaired, retried, or rejected. This makes the AI system safer, type-safe, easier to debug, and suitable for downstream automation.",
  interviewQuestions: [
    "Why is raw LLM output risky in production?",
    "What is the difference between JSON mode and schema validation?",
    "How does Pydantic help in AI applications?",
    "How would you handle malformed JSON from an LLM?",
    "What retry strategy would you use for failed validation?",
    "How do structured outputs help agents and RAG pipelines?",
    "How would you monitor validation failures in production?",
    "What is the difference between validation and guardrails?",
    "How would you design this for multiple schema types?",
    "How would you safely expose this system to the frontend?"
  ],
  milestones: [
    {
      title: "Milestone 1: Static UI Blueprint",
      description: "Build the page layout, input panel, schema selector, and output viewer."
    },
    {
      title: "Milestone 2: Backend API Setup",
      description: "Create FastAPI endpoint routing logic and request/response schemas."
    },
    {
      title: "Milestone 3: Pydantic Validation",
      description: "Add schemas for scam detection, review insights, resume match, and generic JSON extraction."
    },
    {
      title: "Milestone 4: LLM Integration",
      description: "Connect backend service wrappers to OpenAI or any compatible LLM endpoint."
    },
    {
      title: "Milestone 5: Retry and Repair Engine",
      description: "Implement retry logics and recursive repair prompt generation."
    },
    {
      title: "Milestone 6: Frontend Integration",
      description: "Hook UI components to backend endpoints and display valid/invalid states."
    },
    {
      title: "Milestone 7: Production Documentation",
      description: "Add README guidelines, architecture flows, and deploy configurations."
    }
  ],
  links: {
    github: undefined,
    liveDemo: undefined,
    architectureDoc: undefined,
    videoWalkthrough: undefined
  },
  futureImprovements: [
    "Add multiple LLM provider support (Anthropic, Gemini, local models)",
    "Add streaming output validation handling chunked tokens in flight",
    "Add schema generation from natural language input descriptions",
    "Add validation analytics dashboard monitoring latency and accuracy",
    "Add saved validation history tracking logs",
    "Add user-defined custom schemas sandbox",
    "Add LangChain / Instructor / Guardrails comparison reference documentation",
    "Add agent tool-call validation support mapping parameters",
    "Add observability telemetry tracking validation failure rates",
    "Add cost tracking for retry attempts"
  ],
  keySkills: [
    "Structured LLM output design",
    "JSON parsing",
    "Schema validation",
    "Pydantic models",
    "Retry policies",
    "Repair prompts",
    "AI API design",
    "Frontend error inspection",
    "Production AI reliability"
  ],
  techStack: [
    "Frontend: Next.js, React, TypeScript, Tailwind CSS",
    "Backend: Python, FastAPI",
    "Validation: Pydantic",
    "LLM: OpenAI / compatible API",
    "Testing: Pytest",
    "Deployment: Vercel + Render/Railway"
  ],
  backendTree: `apps/api
├── main.py
├── routes
│   └── validate.py
├── schemas
│   ├── scam_detection.py
│   ├── product_review.py
│   ├── resume_match.py
│   └── generic_extraction.py
├── services
│   ├── llm_client.py
│   ├── prompt_builder.py
│   ├── output_parser.py
│   ├── validator.py
│   └── repair_engine.py
├── core
│   ├── config.py
│   └── errors.py
└── tests
    ├── test_validator.py
    └── test_repair_engine.py`,
  frontendTree: `apps/web
├── app
│   └── structured-output
│       └── page.tsx
├── components
│   ├── PromptInput.tsx
│   ├── SchemaSelector.tsx
│   ├── ValidationResult.tsx
│   ├── JsonViewer.tsx
│   ├── ErrorInspector.tsx
│   └── RetryTimeline.tsx
├── lib
│   └── api.ts
└── types
    └── structured-output.ts`
};
