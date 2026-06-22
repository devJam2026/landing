export interface PipelineStep {
  name: string;
  meaning: string;
  description: string;
  example: string;
}

export interface LessonItem {
  slug: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Interview";
  duration: string;
  description: string;
  outcomes: string[];
}

export interface FoundationProject {
  name: string;
  repo: string;
  githubUrl: string;
  labUrl?: string;
  requirementsUrl?: string;
  description: string;
  techStack: string[];
}

export interface FoundationModule {
  slug: string;
  moduleNumber: string;
  title: string;
  status: "complete" | "in-progress" | "coming-soon";
  summary: string;
  badges: string[];
  masteryOutcomes: string[];
  pipelineSteps: PipelineStep[];
  lessons: LessonItem[];
  quickCheatsheet: string[];
  project: FoundationProject;
  capstoneDescription: string;
  interviewQuestions: string[];
  productionChecklist: string[];
  previousSlug: string | null;
  nextSlug: string | null;
}

export const foundationModulesData: Record<string, FoundationModule> = {
  "python-for-ai-systems": {
    slug: "python-for-ai-systems",
    moduleNumber: "0",
    title: "Python for AI Systems",
    status: "complete",
    summary: "A quick revision module focused on Python skills required for AI systems, ML pipelines, LLM apps, RAG tools, backend APIs, and production AI workflows.",
    badges: ["Beginner Friendly", "Revision Focus", "Standard Setup"],
    masteryOutcomes: [
      "Write clean, idiomatic Python using modern syntax conventions.",
      "Load, clean, and preprocess CSV, JSON, and unstructured text datasets.",
      "Understand multi-dimensional arrays, vectorization, and matrix maths in NumPy.",
      "Manipulate data streams using Pandas DataFrames and Series.",
      "Structure reusable service pipelines using Object-Oriented Programming (OOP) patterns.",
      "Secure backend safety using type hints, dataclasses, and Pydantic validation schemas.",
      "Create high-performance prediction API servers with FastAPI routers.",
      "Implement concurrent async asyncio tasks to fetch LLM APIs without blocking threads."
    ],
    pipelineSteps: [
      { name: "Unstructured Data", meaning: "Raw csv/json data inputs", description: "Unstructured logs, CSV records, or JSON payloads loaded from files.", example: "\"{'id': 1, 'text': '...'}\"" },
      { name: "Pydantic Parse", meaning: "Validation and type checks", description: "Passing raw objects through validation schemas to verify data constraints.", example: "Pydantic validated UserQuery" },
      { name: "Vector Ops", meaning: "NumPy matrix scaling", description: "Converting numerical features into matrices and executing broadcasting vector arithmetic.", example: "array([[0.1, 0.8], [0.9, 0.2]])" },
      { name: "FastAPI Route", meaning: "Expose HTTP router", description: "Directing structured input parameters to active prediction functions.", example: "POST /predict -> returns prediction" },
      { name: "Async Processing", meaning: "Concurrent fetch loops", description: "Executing multiple external model requests in parallel using asyncio queues.", example: "asyncio.gather(requests)" }
    ],
    lessons: [
      { slug: "python-refresh-for-ai", title: "Python refresh for AI developers", difficulty: "Beginner", duration: "10 min read", description: "Variables, lists, dicts, list comprehensions, exceptions, and file handlers.", outcomes: ["Write loops and conditionals", "Use list comprehensions", "Handle file exceptions"] },
      { slug: "python-data-handling", title: "Python data handling", difficulty: "Beginner", duration: "12 min read", description: "Ingesting CSV and JSON files, parsing data, and handling null elements.", outcomes: ["Read structured text files", "Clean bad string records", "Verify data types"] },
      { slug: "numpy-for-ai", title: "NumPy for AI", difficulty: "Intermediate", duration: "15 min read", description: "Vectorized array calculations, broadcasting, dot products, and reshapes.", outcomes: ["Perform matrix math", "Apply broadcasting rules", "Transpose array dimensions"] },
      { slug: "pandas-for-ml", title: "Pandas for ML workflows", difficulty: "Intermediate", duration: "14 min read", description: "DataFrames querying, grouping features, and exploratory metrics analysis.", outcomes: ["Filter DataFrame records", "Isolate feature matrices", "Group statistics metrics"] },
      { slug: "python-oop-for-ai", title: "Python OOP for AI systems", difficulty: "Intermediate", duration: "12 min read", description: "Config containers, pipeline architectures, and service object components.", outcomes: ["Write custom pipeline classes", "Structure config objects", "Build service controllers"] },
      { slug: "python-typing-validation", title: "Python typing and validation", difficulty: "Intermediate", duration: "12 min read", description: "Static typing, Dataclasses, and Pydantic validation schemas.", outcomes: ["Add type hints", "Write validation models", "Handle parsing exceptions"] },
      { slug: "fastapi-basics-for-ai", title: "FastAPI basics for AI", difficulty: "Intermediate", duration: "14 min read", description: "API endpoints, request models, model weights loading, and configurations.", outcomes: ["Create POST routes", "Accept request payloads", "Load model weights"] },
      { slug: "async-python-for-ai", title: "Async Python for AI workloads", difficulty: "Advanced", duration: "16 min read", description: "Async/await loops, asyncio concurrency, and batch API executions.", outcomes: ["Implement async routines", "Run concurrent requests", "Build batch pipelines"] }
    ],
    quickCheatsheet: [
      "Vectorized operations in NumPy execute in C, bypassing slow Python loops.",
      "Pydantic parses inputs at runtime, throwing clean errors before code executes.",
      "FastAPI compiles Pydantic schemas into OpenAPI docs automatically.",
      "Always load model weights once during server startup, not inside request loops.",
      "Async operations prevent threads blocking while waiting for external model network responses."
    ],
    project: {
      name: "AI Data Ingestion Pipeline",
      repo: "ai-data-ingestion-pipeline",
      githubUrl: "https://github.com/devJam2026/ai-data-ingestion-pipeline",
      requirementsUrl: "/projects/ai-data-cleaning-playground",
      description: "Build a structured Python pipeline that parses raw datasets, validates shapes using Pydantic, and exposes batch prediction endpoints using FastAPI.",
      techStack: ["Python", "FastAPI", "NumPy", "Pydantic", "Pandas"]
    },
    capstoneDescription: "Create a complete server microservice. It loads raw transaction records, cleans string values, executes matrix scaling calculations using NumPy, validates data integrity using Pydantic schemas, and handles concurrent client predictions concurrently via async routers.",
    interviewQuestions: [
      "Explain the performance differences between a Python list loop and a NumPy vectorized array operation.",
      "How does Pydantic compare to manual validation checks in production pipelines?",
      "Why is async concurrency (asyncio) preferred over multi-threading for calling remote model APIs?"
    ],
    productionChecklist: [
      "Use static type checkers (mypy) to audit type signatures",
      "Validate API request payloads using strict Pydantic schemas",
      "Pre-load model weights on application startup to optimize request times",
      "Configure concurrent batch limits to prevent rate limit thundering herds",
      "Deploy background health checkers verifying API server status"
    ],
    previousSlug: null,
    nextSlug: "machine-learning-foundations"
  },
  "machine-learning-foundations": {
    slug: "machine-learning-foundations",
    moduleNumber: "0A",
    title: "Machine Learning Foundations",
    status: "complete",
    summary: "A required foundation module covering classical ML concepts, model training, feature engineering, evaluation, and deployment thinking before moving into deep learning and LLMs.",
    badges: ["Required Foundation", "Mathematical Intuition", "Pipeline Design"],
    masteryOutcomes: [
      "Understand supervised learning through regression and classification",
      "Build regression models using structured data",
      "Build classification models and interpret business outcomes",
      "Apply NLP vectorization for text classification",
      "Evaluate ML models using practical metrics",
      "Understand unsupervised clustering for insight discovery",
      "Use dimensionality reduction to simplify and visualize high-dimensional data"
    ],
    pipelineSteps: [
      { name: "Preprocessing", meaning: "Clean and scale data", description: "Imputing missing features and standardizing scales to prevent data leakage.", example: "StandardScaler fitted transformations" },
      { name: "Feature Matrix", meaning: "Build X and y datasets", description: "Dividing cleaned attributes into feature matrix (X) and label vector (y).", example: "X: features; y: targets" },
      { name: "Model Training", meaning: "Minimize loss vectors", description: "Fitting weights to match target outputs using optimization rules.", example: "RandomForestClassifier.fit(X, y)" },
      { name: "Evaluation Matrix", meaning: "Verify precision recall", description: "Checking validation accuracies, confusion scores, and AUC margins.", example: "F1 Score calculated: 0.88" },
      { name: "API Deployment", meaning: "Serialize and serve", description: "Exporting model weights as serialized payloads and loading them into API prediction services.", example: "Joblib loads model inside API" }
    ],
    lessons: [
      { slug: "what-is-machine-learning", title: "What is machine learning?", difficulty: "Beginner", duration: "10 min read", description: "Rules-based vs ML code, supervised vs unsupervised learning, and classification vs regression.", outcomes: ["Explain ML workflows", "Contrast supervised vs unsupervised", "Identify regression goals"] },
      { slug: "ml-workflow", title: "ML workflow", difficulty: "Beginner", duration: "12 min read", description: "Ingestion, feature selection, validation splits, fitting weights, and evaluations.", outcomes: ["Perform train/test splits", "Set up validation sets", "Analyze baseline models"] },
      { slug: "data-preprocessing", title: "Data preprocessing", difficulty: "Intermediate", duration: "15 min read", description: "Imputations, outliers, standardizations, categorical encodings, and leakage.", outcomes: ["Impute missing data", "Encode categorical features", "Prevent feature leaks"] },
      { slug: "regression-foundations", title: "Regression", difficulty: "Intermediate", duration: "13 min read", description: "Linear and polynomial regressions, MSE, MAE, and R2 coefficients.", outcomes: ["Build linear regressions", "Evaluate R2 scores", "Analyze continuous predictions"] },
      { slug: "classification-foundations", title: "Classification", difficulty: "Intermediate", duration: "14 min read", description: "Logistic regressions, decision boundaries, random forests, and KNN.", outcomes: ["Train logistic models", "Tune Decision Trees", "Run Random Forest estimators"] },
      { slug: "model-evaluation-foundations", title: "Model evaluation", difficulty: "Intermediate", duration: "12 min read", description: "Accuracy traps, precision-recall tradeoffs, F1 scales, and ROC-AUC curves.", outcomes: ["Interpret confusion matrices", "Calculate F1 scores", "Evaluate AUC boundaries"] },
      { slug: "feature-engineering-foundations", title: "Feature engineering", difficulty: "Intermediate", duration: "14 min read", description: "Handling dates, numeric bins, bag of words, and TF-IDF statistics.", outcomes: ["Build text features", "Construct TF-IDF vectors", "Verify word frequency matrix"] },
      { slug: "unsupervised-learning-foundations", title: "Unsupervised learning", difficulty: "Intermediate", duration: "12 min read", description: "K-Means cluster segmentations, PCA dimensionality reductions, and vector distances.", outcomes: ["Run K-Means partitions", "Apply PCA transforms", "Measure cluster similarities"] },
      { slug: "model-selection-tuning", title: "Model selection and tuning", difficulty: "Intermediate", duration: "13 min read", description: "Cross-validation folds, Grid searches, and bias-variance tradeoff mappings.", outcomes: ["Set cross-validation loops", "Run grid search algorithms", "Diagnose overfitting bounds"] },
      { slug: "ml-deployment-thinking", title: "ML deployment thinking", difficulty: "Advanced", duration: "15 min read", description: "Pickling weights, service loading, monitoring accuracy drift, and logs.", outcomes: ["Serialize model weights", "Build model API services", "Detect data distribution drift"] }
    ],
    quickCheatsheet: [
      "Always split train/test sets before performing any scaling preprocessing transformations.",
      "Standardization scales features to mean=0, std=1; normalization fits bounds to 0-1.",
      "Accuracy is highly deceptive on imbalanced datasets. Use F1-Score or ROC-AUC.",
      "TF-IDF weights words by scaling down terms that appear frequently across all documents.",
      "PCA reduces dimensional footprints while retaining maximum input variance."
    ],
    project: {
      name: "ML House Price Prediction",
      repo: "ml-house-price-prediction",
      githubUrl: "https://github.com/devJam2026/ml-house-price-prediction",
      requirementsUrl: "/projects/house-price-prediction",
      description: "Learn supervised regression by predicting continuous values from structured data. The main use case is house price prediction, and the same concepts can also be extended to a student score prediction dataset.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"]
    },
    capstoneDescription: "Create a tabular prediction system. It preprocesses missing entries, standardizes continuous scales, trains multiple supervised classifiers, tunes settings using grid search cross-validation, and exposes the serialized model as a FastAPI microservice.",
    interviewQuestions: [
      "Explain regression vs classification",
      "Explain MAE, MSE, RMSE, and R²",
      "Explain confusion matrix, precision, recall, F1-score, and ROC-AUC",
      "Explain why accuracy alone can be misleading",
      "Explain overfitting, underfitting, and bias-variance tradeoff",
      "Explain clustering and when unsupervised learning is useful",
      "Explain dimensionality reduction and why PCA/t-SNE/UMAP are useful",
      "Explain how classical ML concepts connect to GenAI, embeddings, RAG, and agentic AI systems"
    ],
    productionChecklist: [
      "Fit preprocessing scalers ONLY on training datasets to prevent features leakage",
      "Store evaluations metrics in continuous dashboards to check for regressions",
      "Monitor input data distributions to flag semantic model drift early",
      "Enforce concurrency locks on Joblib model loaders during microservice scaleups",
      "Run automated unit tests checking prediction shapes on mock records"
    ],
    previousSlug: "python-for-ai-systems",
    nextSlug: "deep-learning-fundamentals"
  },
  "deep-learning-fundamentals": {
    slug: "deep-learning-fundamentals",
    moduleNumber: "0B",
    title: "Deep Learning Fundamentals",
    status: "complete",
    summary: "A required foundation module covering neural networks, training loops, loss functions, optimizers, embeddings, RNNs, CNNs, and the bridge from deep learning to transformers.",
    badges: ["Required Foundation", "Deep Architecture", "Tensor Math"],
    masteryOutcomes: [
      "Understand artificial neuron weights, biases, and matrix dimensions.",
      "Construct Multi-Layer Perceptrons (MLPs) and execute forward propagation.",
      "Compare Sigmoid, Tanh, ReLU, and GeLU activation function characteristics.",
      "Calculate binary and categorical cross-entropy losses.",
      "Explain backpropagation partial derivatives and learning rate updates.",
      "Tune model parameters using SGD, momentum, and Adam optimizers.",
      "Mitigate overfitting errors using dropout, L2 regularization, and early stopping.",
      "Deconstruct continuous word embeddings and semantic mapping metrics.",
      "Develop recurrent sequence classifiers (RNN, LSTM, GRU) with token padding.",
      "Understand convolution layers, filters, and image classifier steps.",
      "Write custom training loops from scratch using PyTorch or Keras.",
      "Deconstruct RNN sequence bottlenecks and translate embeddings to transformer attention structures."
    ],
    pipelineSteps: [
      { name: "Forward Pass", meaning: "Matrix dot product pass", description: "Computing linear transformations and activation projections layers-by-layers.", example: "Z = XW + b -> A = ReLU(Z)" },
      { name: "Loss Computation", meaning: "Evaluate outputs error", description: "Measuring prediction distances from true labels using cross-entropy rules.", example: "Categorical Cross Entropy Loss" },
      { name: "Backward Pass", meaning: "Compute weights gradients", description: "Executing chain-rule partial derivatives backpropagating error directions.", example: "dLoss/dWeight computed" },
      { name: "Optimize Step", meaning: "Adjust network weights", description: "Updating weights using Adam optimizer momentum adjustments.", example: "Weight = Weight - learning_rate * dWeight" },
      { name: "Checkpoints", meaning: "Save weights state", description: "Exporting model states files and embeddings lookup layers.", example: "PyTorch model.pt serialized" }
    ],
    lessons: [
      { slug: "neural-network-intuition", title: "Neural network intuition", difficulty: "Beginner", duration: "10 min read", description: "Artificial neuron parameters, weights matrix, biases, and weighted sums.", outcomes: ["Explain neuron weights", "Describe bias offsets", "Understand forward predictions"] },
      { slug: "perceptron-and-mlp", title: "Perceptron and MLP", difficulty: "Beginner", duration: "12 min read", description: "Single layer limitations (XOR), dense stacks, and forward propagation.", outcomes: ["Build multi-layer MLPs", "Explain hidden dimensions", "Trace matrix inputs"] },
      { slug: "activation-functions-dl", title: "Activation functions", difficulty: "Intermediate", duration: "14 min read", description: "Sigmoids, ReLU, GeLU, and why non-linearity is required to stack representation layers.", outcomes: ["Compare activations curves", "Understand non-linearity role", "Analyze gradient saturation"] },
      { slug: "loss-functions-dl", title: "Loss functions", difficulty: "Intermediate", duration: "11 min read", description: "MSE, binary/categorical cross-entropy, and loss outputs vs validation metrics.", outcomes: ["Calculate entropy loss", "Contrast loss vs metric", "Verify gradients derivatives"] },
      { slug: "backpropagation-intuition", title: "Backpropagation intuition", difficulty: "Advanced", duration: "18 min read", description: "Loss gradients, partial derivatives chain rules, and weight update loops.", outcomes: ["Calculate chain rule steps", "Derive gradient directions", "Trace error back-prop"] },
      { slug: "optimizers-dl", title: "Optimizers", difficulty: "Intermediate", duration: "15 min read", description: "SGD, mini-batch updates, learning rate decay, and Adam adaptive adjustments.", outcomes: ["Trace SGD weight updates", "Understand Adam momentum", "Set validation learning rates"] },
      { slug: "overfitting-regularization", title: "Overfitting and regularization", difficulty: "Intermediate", duration: "14 min read", description: "Dropout ratios, L2 weight decays, early stopping parameters, and validations.", outcomes: ["Apply dropout layers", "Configure L2 decay", "Track validation losses"] },
      { slug: "embeddings-introduction", title: "Embeddings introduction", difficulty: "Intermediate", duration: "13 min read", description: "One-hot limits, dense projections, embedding layer lookups, and semantics.", outcomes: ["Structure embedding layers", "Map token coordinates", "Measure semantic angles"] },
      { slug: "sequence-models-introduction", title: "Sequence models introduction", difficulty: "Advanced", duration: "16 min read", description: "RNN memory loops, LSTM/GRU gating equations, padding, and text classification.", outcomes: ["Trace recurrent states", "Deconstruct LSTM gates", "Pad sequence token lists"] },
      { slug: "cnn-basics", title: "CNN basics", difficulty: "Intermediate", duration: "14 min read", description: "Multidimensional image matrices, convolution sweeps, kernels, and pooling.", outcomes: ["Perform convolution sweeps", "Set max pooling filters", "Build image classifiers"] },
      { slug: "deep-learning-frameworks", title: "Deep learning frameworks", difficulty: "Intermediate", duration: "15 min read", description: "PyTorch vs TensorFlow ecosystems, DataLoader loaders, model templates, and training loops.", outcomes: ["Write PyTorch structures", "Build DataLoader loops", "Serialize model states"] },
      { slug: "deep-learning-to-transformers", title: "From deep learning to transformers", difficulty: "Advanced", duration: "16 min read", description: "RNN sequence bottlenecks, the birth of attention, and connecting embeddings to queries/keys/values.", outcomes: ["Identify sequence bottlenecks", "Explain attention origin", "Bridge embeddings to QKV"] }
    ],
    quickCheatsheet: [
      "Without non-linear activations, multi-layer MLPs collapse into simple linear classifiers.",
      "Vanishing gradients occur when backpropagated error updates shrink to zero in deep Sigmoid networks.",
      "Dropout active during training disables nodes randomly, preventing co-adaptation.",
      "LSTMs regulate historical sequence context using cell states and forget gates.",
      "RNN recurrences process tokens sequentially, creating an execution bottleneck that attention resolves."
    ],
    project: {
      name: "Neural Network From Scratch Lab",
      repo: "neural-network-from-scratch-lab",
      githubUrl: "https://github.com/devJam2026/neural-network-from-scratch-lab",
      requirementsUrl: "/projects/neural-network-from-scratch",
      description: "Build an artificial neural network from scratch using NumPy, implementing forward propagation, cross-entropy, and gradient descent updates manually.",
      techStack: ["Python", "NumPy", "PyTorch"]
    },
    capstoneDescription: "Create a deep learning classifier. It formats text sequences into dense token embeddings, trains recurrent LSTM and CNN layers using PyTorch autograd loops, monitors training curves to apply early stopping, and saves serialized weights checkpoints.",
    interviewQuestions: [
      "Differentiate between Sigmoid, ReLU, and GeLU, explaining how ReLU avoids vanishing gradients.",
      "Detail the mathematical equations and gating states of an LSTM cell block.",
      "Explain the sequential processing limits of RNN architectures and why it prevents parallel training."
    ],
    productionChecklist: [
      "Standardize tensor dimensions across input layer loaders",
      "Add dropout layers to prevent model representations overfitting",
      "Scale models training using mixed-precision FP16 operations",
      "Inject random seed variables to ensure weights initializations repeatability",
      "Track system memory constraints during batch loops iterations"
    ],
    previousSlug: "machine-learning-foundations",
    nextSlug: "tokenization"
  },
  "tokenization": {
    slug: "tokenization",
    moduleNumber: "1.1",
    title: "Tokenization Hub",
    status: "complete",
    summary: "Before an LLM can understand text, it must first break language into tokens. In this module, you will learn how raw text becomes token IDs, how tokenizer algorithms like BPE and WordPiece work, why non-English text can increase token usage, and how tokenization affects API cost, context windows, RAG pipelines, and AI agents.",
    badges: ["Beginner Friendly", "Interview Focused", "Production Relevant"],
    masteryOutcomes: [
      "Explain what tokens are and why LLMs process numbers instead of raw strings.",
      "Understand token IDs and tokenizer vocabularies mapping rules.",
      "Compare character-level, word-level, and subword tokenization models.",
      "Describe BPE, WordPiece, and SentencePiece merging statistics.",
      "Analyze token inflation, API cost margins, and context window limits.",
      "Connect token boundary counts to RAG chunking and agent memory loops."
    ],
    pipelineSteps: [
      { name: "Text", meaning: "Human-readable input", description: "Human-readable text input by the user. E.g., 'I love AI'. Characters are the base representation.", example: "\"I love AI\"" },
      { name: "Tokens", meaning: "Text broken into chunks", description: "Text is broken into smaller chunks (words or subwords) by the tokenizer algorithm. Spaces are preserved.", example: "[\"I\", \" love\", \" AI\"]" },
      { name: "Token IDs", meaning: "Numeric representations", description: "Each unique token is mapped to an integer value representing its index position in the model's vocabulary table.", example: "[40, 3047, 15592]" },
      { name: "Embeddings", meaning: "Projected dense vectors", description: "Token IDs are projected into a high-dimensional vector space (e.g. 4096 dimensions) via embedding lookup weights.", example: "[[0.12, -0.45, ...], [0.89, 0.01, ...], ...]" },
      { name: "Transformer", meaning: "Context processing", description: "Self-attention layers process the dense vectors in parallel to encode contextual relationships and predict next tokens.", example: "Attention weight map & probability distribution computed" },
      { name: "Output Tokens", meaning: "Generated and decoded text", description: "Predicted token IDs are sampled and decoded back into human-readable text output.", example: "[105, 301] → \"You're welcome\"" }
    ],
    lessons: [
      {
        slug: "what-is-tokenization",
        title: "What Is Tokenization?",
        difficulty: "Beginner",
        duration: "12 min read",
        description: "Learn how raw text is converted into tokens and token IDs before entering an LLM.",
        outcomes: ["Understand what tokens are", "Explain token IDs", "Describe the LLM input pipeline"]
      },
      {
        slug: "tokenization-algorithms",
        title: "Character, Word & Subword Tokenization",
        difficulty: "Beginner",
        duration: "15 min read",
        description: "Compare character-level, word-level, and subword tokenization with simple examples.",
        outcomes: ["Compare tokenizer types", "Understand why subwords are used", "Identify tokenization trade-offs"]
      },
      {
        slug: "bpe-wordpiece",
        title: "BPE, WordPiece & SentencePiece",
        difficulty: "Intermediate",
        duration: "18 min read",
        description: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
        outcomes: ["Explain Byte Pair Encoding", "Understand WordPiece", "Understand SentencePiece and Unigram"]
      },
      {
        slug: "token-ids-vocabulary",
        title: "Token IDs, Vocabulary & Embeddings",
        difficulty: "Beginner",
        duration: "14 min read",
        description: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
        outcomes: ["Explain tokenizer vocabulary", "Understand token IDs", "Connect tokens to embeddings"]
      },
      {
        slug: "token-cost",
        title: "Token Inflation, Context Window & API Cost",
        difficulty: "Intermediate",
        duration: "16 min read",
        description: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
        outcomes: ["Estimate token usage", "Understand token inflation", "Optimize prompts for cost"]
      },
      {
        slug: "rag-agents",
        title: "Tokenization in RAG & AI Agents",
        difficulty: "Intermediate",
        duration: "18 min read",
        description: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
        outcomes: ["Design token-aware RAG chunks", "Control agent memory size", "Reduce context waste"]
      },
      {
        slug: "interview-guide",
        title: "Tokenization Interview Guide",
        difficulty: "Interview",
        duration: "20 min read",
        description: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
        outcomes: ["Answer tokenization interview questions", "Explain BPE clearly", "Connect tokenization to production systems"]
      }
    ],
    quickCheatsheet: [
      "Text → Tokens → IDs → Embeddings is the core entry pipeline structure.",
      "1 English word !== 1 token. In fact, subword splits merge fragments.",
      "Input + Output = Total. API bills measure the total of both prompts.",
      "Token count affects cost & latency. Shorter prompts yield faster generations.",
      "Chunking in RAG must measure token indices, not characters lengths."
    ],
    project: {
      name: "Tokenizer Visualizer Studio",
      repo: "tokenizer-visualizer-studio",
      githubUrl: "https://github.com/devJam2026/tokenizer-visualizer-studio",
      labUrl: "/labs/tokenizer-visualizer",
      requirementsUrl: "/projects/tokenizer-visualizer-studio",
      description: "Build a dynamic web app to highlight token borders, trace byte merges, and audit API billing.",
      techStack: ["TypeScript", "React", "Tailwind CSS", "tiktoken"]
    },
    capstoneDescription: "Apply what you learn in these lessons to build a fully functional developer tool. You will build a frontend interface that accepts user string input, and visually highlights token divisions using dynamic HSL styling. The application allows developers to compare how tiktoken (cl100k_base), BERT (WordPiece), and SentencePiece split coding parameters, Unicode characters, non-English text, and emojis.",
    interviewQuestions: [
      "What is tokenization in LLMs?",
      "Why do LLMs use subword tokenization?",
      "What is the difference between token and token ID?",
      "How does BPE work?",
      "Why does token count affect API cost?",
      "Why can non-English text consume more tokens?",
      "How does tokenization affect RAG chunking?",
      "How does tokenization affect agent memory?"
    ],
    productionChecklist: [
      "Track input and output tokens for API calls",
      "Estimate API cost before sending large requests",
      "Use token-aware chunking limits for RAG documents",
      "Summarize or trim old chat history recursively",
      "Avoid unnecessary prompt repetition in system instructions",
      "Test multilingual inputs for token inflation",
      "Compress large tool outputs before returning them to LLMs",
      "Implement retry/fallback systems for context window overflows"
    ],
    previousSlug: "deep-learning-fundamentals",
    nextSlug: "context-engineering"
  },
  "context-engineering": {
    slug: "context-engineering",
    moduleNumber: "1.2",
    title: "Context Engineering",
    status: "in-progress",
    summary: "Large Language Models operate within rigid memory budgets. In this module, you will learn to manage context capacities, implement message-trimming strategies, summarize chat histories recursively, and build context-aware prompts that maximize information density while minimizing API costs.",
    badges: ["Intermediate", "System Design Focus", "VRAM Economics"],
    masteryOutcomes: [
      "Understand the mechanics of context windows and context budget allocation.",
      "Implement sliding window conversation history truncation models.",
      "Utilize summarization loops to compress historical conversational turns.",
      "Understand RAG query packaging constraints and avoid needle-in-a-haystack decay.",
      "Optimize prompt lengths to minimize latency, token consumption, and cost.",
      "Handle context overflow scenarios and implement API error fallbacks."
    ],
    pipelineSteps: [
      { name: "Text", meaning: "Raw input parameters", description: "The raw text block from chat, RAG retrievals, and system instructions.", example: "\"History + retrieved documents + user prompt...\"" },
      { name: "Messages", meaning: "Role-scoped arrays", description: "Structuring text into System, User, and Assistant message dictionaries.", example: "[{role: 'system', content: '...'}, {role: 'user', content: '...'}]" },
      { name: "Token Budget", meaning: "Compute local lengths", description: "Running local tiktoken evaluations to measure the current prompt length against the model limit.", example: "Total size calculated: 6,400 tokens / 8,192 limit" },
      { name: "Trim/Summarize", meaning: "Apply history filters", description: "Trimming the oldest chat turns or executing background summarizers to fit the budget.", example: "Discarded 2 oldest turns; compressed history using a summary buffer" },
      { name: "Packed Prompt", meaning: "Compile optimized text", description: "Assembling system instructions, summary context, and current query into a single string.", example: "\"System: [Rules] Summary: [State] User: [Query]\"" },
      { name: "Model Response", meaning: "Generate reply", description: "The model receives the packed prompt and outputs the completion within the remaining token buffer.", example: "Answer generated (250 tokens), token budget cleared" }
    ],
    lessons: [
      { slug: "what-is-context-window", title: "What is a Context Window?", difficulty: "Beginner", duration: "10 min read", description: "Understand model memory capacities, input/output splits, and token bounds.", outcomes: ["Explain memory limitations", "Describe context quadratic scaling", "Differentiate input/output budgets"] },
      { slug: "context-budget-management", title: "Context Budget Management", difficulty: "Intermediate", duration: "12 min read", description: "Learn session history scaling, system overheads, and token constraints.", outcomes: ["Track message inflation", "Allocate space for output tokens", "Set warning thresholds"] },
      { slug: "prompt-trimming-strategies", title: "Prompt Trimming & Memory", difficulty: "Intermediate", duration: "15 min read", description: "Implement sliding windows, summarization memory, and truncation logics.", outcomes: ["Implement history sliders", "Compare sliding windows vs summarizers", "Build text truncation loops"] },
      { slug: "sliding-window-conversation", title: "Sliding Window Conversation State", difficulty: "Intermediate", duration: "11 min read", description: "Manage dynamic conversation histories using sliding token limits.", outcomes: ["Track active chat queues", "Prune history based on tiktoken indices", "Keep system prompts pinned"] },
      { slug: "context-overflow-failures", title: "Context Overflow Failure Modes", difficulty: "Advanced", duration: "14 min read", description: "Debug context window overflow errors and build automatic repair gates.", outcomes: ["Diagnose 400 Bad Request errors", "Implement prompt compression", "Structure fallback models routing"] },
      { slug: "context-interview", title: "Context Engineering in Interviews", difficulty: "Interview", duration: "15 min read", description: "Prepare for engineering interviews focused on long-context architecture.", outcomes: ["Discuss 'lost-in-the-middle' retrieval", "Defend history compression", "Settle memory budgets"] }
    ],
    quickCheatsheet: [
      "Total tokens = Input prompt + Output generation. Keep a safety buffer.",
      "Self-attention compute scales quadratically O(N^2) with sequence length.",
      "The 'Lost in the Middle' rule: LLMs recall facts at prompt extremes best.",
      "Always pin the System Prompt; truncate only User/Assistant chat history.",
      "Use local tokenizers (tiktoken) to calculate bounds before hitting the API."
    ],
    project: {
      name: "Context Window Diagnostics",
      repo: "context-window-diagnostics",
      githubUrl: "https://github.com/devJam2026/context-window-diagnostics",
      requirementsUrl: "/projects/context-window-diagnostics",
      description: "Build a diagnostic dashboard to simulate token budgeting, sliding window truncation, and history summaries.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "tiktoken"]
    },
    capstoneDescription: "Create a developer tool that analyzes chat logs to diagnose context window usage. The tool calculates prompt token sizes, alerts developers when they cross budget boundaries, simulates sliding window truncation, and showcases how recursive summarization keeps prompt payloads lightweight.",
    interviewQuestions: [
      "How do you manage chat context limits in a production support bot that operates over multi-hour conversations?",
      "Explain the 'Lost in the Middle' phenomenon in long context windows.",
      "What are the trade-offs of using sliding windows vs summarization memory?",
      "How do you calculate and reserve space for output tokens in a strict budget plan?",
      "How do you evaluate if a model is successfully retrieving information from a 100k token window?"
    ],
    productionChecklist: [
      "Calculate prompt token size using tiktoken before executing API requests",
      "Enforce hard caps on history message counts and prune oldest entries dynamically",
      "Utilize background summarization for conversations extending beyond 10 turns",
      "Inject RAG documents prioritized by semantic relevance scores",
      "Reserve at least 15% of the total context window for the model's generated answer",
      "Setup monitoring alerts for API errors returning context window length violations"
    ],
    previousSlug: "tokenization",
    nextSlug: "sampling-generation"
  },
  "sampling-generation": {
    slug: "sampling-generation",
    moduleNumber: "1.3",
    title: "Sampling and Generation",
    status: "complete",
    summary: "Language models output raw logits that must be transformed into readable text. In this module, you will master the hyperparameters that govern LLM generation. Explore Temperature, Softmax distribution curves, Top-k and Top-p sampling filters, and penalties that prevent repetitive loops.",
    badges: ["Intermediate", "Logits Math", "Tuning Guide"],
    masteryOutcomes: [
      "Explain how Temperature alters the logits probability distribution.",
      "Differentiate between Top-k and Top-p sampling boundaries.",
      "Implement presence and frequency penalties to stop word repetition.",
      "Configure hyperparameters for deterministic JSON vs creative copy.",
      "Explain why Temperature = 0 does not guarantee 100% reproducibility."
    ],
    pipelineSteps: [
      { name: "Logits", meaning: "Raw output scores", description: "The model's final linear layer outputs raw float values for every token in the vocabulary table.", example: "[12.5, -4.2, 8.9, ...]" },
      { name: "Softmax", meaning: "Convert to probabilities", description: "Softmax mathematical transforms scale logits into a probability distribution summing to 1.0.", example: "[0.72, 0.01, 0.25, ...]" },
      { name: "Temperature", meaning: "Scale probability curves", description: "Dividing logits by Temperature before Softmax. Low T concentrates probability; High T flattens it.", example: "T = 0.2 → [0.98, 0.00, 0.02]; T = 1.5 → [0.45, 0.20, 0.35]" },
      { name: "Top-k / Top-p", meaning: "Prune candidate lists", description: "Top-k keeps the top K tokens; Top-p keeps only the top tokens whose cumulative probability reaches P.", example: "Top-p = 0.9 keeps tokens adding up to 90% probability, pruning the tail" },
      { name: "Penalties", meaning: "Apply repetition filters", description: "Frequency and presence penalties lower logits of tokens that have already been generated.", example: "Decreased logit for 'AI' because it appeared twice already" },
      { name: "Output Tokens", meaning: "Select final word", description: "The final probability distribution is sampled to select the token ID, which is decoded into text.", example: "Token index 15592 chosen → 'AI'" }
    ],
    lessons: [
      { slug: "hyperparameter-definitions", title: "Hyperparameter Definitions", difficulty: "Beginner", duration: "10 min read", description: "Master Temperature, Top-p, Top-k, Max Tokens, and Penalties.", outcomes: ["Define hyperparameter roles", "Control text lengths", "Utilize repetition penalties"] },
      { slug: "softmax-sampling-mechanics", title: "Temperature and Softmax", difficulty: "Intermediate", duration: "14 min read", description: "Study how raw model logits are turned into output probability distributions.", outcomes: ["Apply Softmax formula", "Explain Temperature math", "Understand greedy decoding"] },
      { slug: "top-k-top-p", title: "Top-k vs Top-p Sampling", difficulty: "Intermediate", duration: "12 min read", description: "Compare cumulative distribution thresholds against fixed count cuts.", outcomes: ["Define Top-k limits", "Explain Top-p cumulative nucleus", "Combine K and P limits"] },
      { slug: "frequency-presence-penalty", title: "Frequency and Presence Penalty", difficulty: "Intermediate", duration: "11 min read", description: "Learn how repetition penalties modify logit states dynamically.", outcomes: ["Contrast frequency vs presence penalty", "Adjust logits penalty values", "Prevent vocabulary loops"] },
      { slug: "deterministic-creative", title: "Deterministic vs Creative Generation", difficulty: "Intermediate", duration: "13 min read", description: "Determine configurations to obtain stable structured outputs vs creative copywriting.", outcomes: ["Configure JSON settings", "Set creative entropy margins", "Map seed parameters"] },
      { slug: "sampling-interview", title: "Sampling Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Answer complex hyperparameters questions in live technical panels.", outcomes: ["Explain Temperature = 0 variations", "Derive Softmax scaling", "Explain seed limits"] }
    ],
    quickCheatsheet: [
      "Low Temperature (e.g. 0.1) concentrates probability on the top choice: best for JSON.",
      "High Temperature (e.g. 1.0+) spreads probability: best for creative copy.",
      "Top-p (nucleus sampling) limits selection to tokens within a cumulative percentage.",
      "Frequency Penalty scales with word count; Presence Penalty applies a flat penalty.",
      "Setting Temperature = 0 changes sampling to greedy argmax decoding."
    ],
    project: {
      name: "Hyperparameter Playground",
      repo: "hyperparameter-playground",
      githubUrl: "https://github.com/devJam2026/hyperparameter-playground",
      requirementsUrl: "/projects/hyperparameter-playground",
      description: "Interactive settings dashboard to inspect how Temperature, Top-p, and penalties alter Softmax probability distributions.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"]
    },
    capstoneDescription: "Build an interactive playground that simulates LLM decoding math. Users adjust sliders for Temperature, Top-p, and penalties, and instantly see how the raw logits of a token vocabulary transform into probability distributions and change output texts.",
    interviewQuestions: [
      "Explain why setting Temperature to 0 does not completely guarantee deterministic responses in multi-node GPU systems.",
      "What is the mathematical effect of dividing logits by Temperature before Softmax?",
      "Differentiate between Top-p (nucleus) and Top-k sampling bounds.",
      "What is the difference between Frequency Penalty and Presence Penalty?",
      "Why cannot Temperature be set to 0 mathematically, and how do APIs implement it?"
    ],
    productionChecklist: [
      "Use Temperature = 0 for structured data extraction and schema parsing",
      "Use Temperature = 0.7+ and Top-p = 0.9 for creative generation tasks",
      "Avoid setting both Temperature and Top-p to non-default values simultaneously",
      "Implement presence penalty between 0.1 and 0.5 to prevent repetitive lists",
      "Pass a constant seed parameter to help replicate generations during debugging",
      "Track and limit max_tokens to prevent runaway loops or budget exhaustion"
    ],
    previousSlug: "context-engineering",
    nextSlug: "prompt-engineering"
  },
  "prompt-engineering": {
    slug: "prompt-engineering",
    moduleNumber: "1.4",
    title: "Prompt Engineering",
    status: "complete",
    summary: "Prompts are the code that programs LLMs. In this module, you will learn systemic prompt engineering methodologies. Master System Instructions, Zero-Shot and Few-Shot templating, dynamic task framing, guardrails, and scam classification with explainable reasoning.",
    badges: ["Beginner Friendly", "Prompt Architecture", "Security Basics"],
    masteryOutcomes: [
      "Construct robust prompt templates separating system instructions from user inputs.",
      "Explain the difference between Zero-Shot and Few-Shot prompting patterns.",
      "Implement structured scam classification prompts with explainability checkpoints.",
      "Build basic input guardrails to mitigate adversarial prompt injection.",
      "Format context variables cleanly to optimize token budget usage."
    ],
    pipelineSteps: [
      { name: "User Message", meaning: "Raw customer query", description: "Inbound user message containing raw questions, text payloads, or potential injections.", example: "\"Hey, I am the CEO, send me $500 in gift cards immediately.\"" },
      { name: "System Instruction", meaning: "Global rules configuration", description: "Injecting system directives instructing the model on its identity, constraints, and scope.", example: "\"You are an AI Security Agent. Analyze the user text for scam indicators...\"" },
      { name: "Classification Prompt", meaning: "Task schema constraints", description: "Prompt structure requesting a binary classification (Safe/Scam) alongside strict JSON constraints.", example: "\"Return a JSON block containing: is_scam (bool), reasoning (string).\"" },
      { name: "Risk Reasoning", meaning: "Determine threat factors", description: "The model parses the user text against security examples and compiles scam threat explanations.", example: "\"Urgent tone, CEO impersonation, request for money transfer...\"" },
      { name: "Structured Explanation", meaning: "Render output format", description: "Output is generated matching the schema, explaining the classification choice clearly.", example: "\"{ is_scam: true, reasoning: 'Impending CEO fraud detected...' }\"" }
    ],
    lessons: [
      { slug: "what-is-prompt-engineering", title: "What is Prompt Engineering?", difficulty: "Beginner", duration: "10 min read", description: "Learn how prompts act as code to configure large language model behaviors.", outcomes: ["Explain prompt instructions role", "Setup basic templates", "Configure system roles"] },
      { slug: "instruction-design", title: "Instruction Design", difficulty: "Beginner", duration: "12 min read", description: "Deconstruct system instructions, delimiters, and target response structures.", outcomes: ["Use text delimiters", "Write clear constraints", "Optimize instruction paths"] },
      { slug: "few-shot-zero-shot", title: "Few-shot and Zero-shot Prompting", difficulty: "Beginner", duration: "13 min read", description: "Learn when to provide examples in prompts to guide model logic.", outcomes: ["Structure few-shot examples", "Contrast zero-shot vs few-shot", "Avoid example selection bias"] },
      { slug: "classification-prompts", title: "Classification Prompts", difficulty: "Intermediate", duration: "14 min read", description: "Build templates to sort unstructured inputs into categorical buckets.", outcomes: ["Implement class templates", "Map confidence outputs", "Handle boundary cases"] },
      { slug: "prompt-injection-basics", title: "Prompt Injection Basics", difficulty: "Intermediate", duration: "15 min read", description: "Learn how users bypass system prompts and how to write basic defenses.", outcomes: ["Identify system bypasses", "Implement injection filters", "Use XML/JSON isolation tags"] },
      { slug: "explainable-responses", title: "Explainable AI Responses", difficulty: "Intermediate", duration: "12 min read", description: "Generate structured thought chains prior to final answers to improve accuracy.", outcomes: ["Setup Chain-of-Thought (CoT)", "Isolate reasoning outputs", "Verify intermediate steps"] },
      { slug: "prompt-interview-guide", title: "Prompt Engineering Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for senior panels asking about prompt architectures and scaling.", outcomes: ["Discuss prompt versioning", "Defend fine-tuning vs prompting", "Evaluate prompt regressions"] }
    ],
    quickCheatsheet: [
      "Separate instructions and untrusted user input using clear delimiters like XML tags.",
      "Few-shot examples are highly effective for teaching complex formatting and tone.",
      "Chain-of-Thought (reasoning before answering) improves performance on logic and math.",
      "Adversarial prompt injection attempts to override system rules via user inputs.",
      "Keep templates versioned in source control alongside application code."
    ],
    project: {
      name: "AI Scam Detector",
      repo: "ai-scam-detector",
      githubUrl: "https://github.com/devJam2026/ai-scam-detector",
      requirementsUrl: "/projects/ai-scam-detector",
      description: "Build an AI scam classifier using few-shot prompt templates, XML input isolation, and reasoning fields.",
      techStack: ["React", "TypeScript", "Tailwind CSS"]
    },
    capstoneDescription: "Build a security classifier that scans text messages for scams. You will construct a prompt template containing system security directives, XML delimiters to sandbox user text, and few-shot examples of fraud. The model outputs structured JSON detailing the scam risk level and a step-by-step security breakdown.",
    interviewQuestions: [
      "How do you design a few-shot prompt template that protects model classifications from text prompt injections?",
      "Explain the difference between System, User, and Assistant prompt scopes.",
      "What is Chain-of-Thought prompting, and why does it improve reasoning outputs?",
      "How do you mitigate prompt injection attacks in user-facing LLM inputs?",
      "Compare the efficiency of prompt classifications against fine-tuning a small model."
    ],
    productionChecklist: [
      "Isolate user input inside XML tags (e.g. <user_input>text</user_input>) in the prompt",
      "Add explicit instructions to reject system instructions override commands",
      "Include at least 3-5 few-shot examples for complex classification tasks",
      "Request step-by-step reasoning (Chain-of-Thought) before returning final labels",
      "Version control prompt templates as files in Git, not as database strings",
      "Evaluate prompt changes against a static set of test cases to prevent regressions"
    ],
    previousSlug: "sampling-generation",
    nextSlug: "structured-output"
  },
  "structured-output": {
    slug: "structured-output",
    moduleNumber: "1.5",
    title: "Structured Output",
    status: "complete",
    summary: "Unstructured text completions break application logic. In this module, you will learn to force models to return data matching strict schemas. Understand JSON Schema, implement schema validations using Zod, build self-repairing retry loops, and trace validation error logs.",
    badges: ["Advanced", "Zod Schemas", "Type Safety"],
    masteryOutcomes: [
      "Explain why raw LLM outputs break standard backend applications.",
      "Define JSON Schemas to enforce array and enum constraints.",
      "Construct Zod validation gates to verify model completions.",
      "Implement self-repairing retry loops that feed parse errors back to the model.",
      "Compare model-provider native structured modes against client-side parsers."
    ],
    pipelineSteps: [
      { name: "Raw Message", meaning: "User input query", description: "Inbound request requesting structured data extraction.", example: "\"Get all items from invoice: 1 apple ($3), 2 bananas ($4)\"" },
      { name: "LLM Completion", meaning: "Unvalidated text block", description: "The model outputs a completion string containing JSON, occasionally with markdown ticks.", example: "```json\n{ \"items\": [ { \"name\": \"apple\", \"price\": 3 }, ... ] }\n```" },
      { name: "JSON Contract", meaning: "Extract text contents", description: "Parsing the raw string, stripping markdown code ticks, and loading it into a JSON object.", example: "\"{ 'items': [ { 'name': 'apple', 'price': 3 }... ] }\"" },
      { name: "Schema Validation", meaning: "Zod verification gate", description: "Passing the JSON object through a Zod schema to verify data shapes, types, and enums.", example: "ZodError: Expected number, received string for 'price'" },
      { name: "Typed Payload", meaning: "Auto-repair & Resolve", description: "If validation fails, retry by sending the error log back to the model to correct the JSON structure.", example: "Model corrects output → JSON parsed and validated as TypeSafeInvoice" },
      { name: "Application Action", meaning: "Backend ingestion", description: "The type-safe payload is safely written to databases or passed to subsequent API services.", example: "Invoice items recorded in PostgreSQL, transaction complete" }
    ],
    lessons: [
      { slug: "why-raw-text-breaks", title: "Why Raw LLM Text Breaks Apps", difficulty: "Beginner", duration: "10 min read", description: "Study why trailing commas, markdown ticks, and typos cause crash loops.", outcomes: ["Explain JSON parse failures", "Analyze JSON structure anomalies", "Identify input drift issues"] },
      { slug: "json-schema-basics", title: "JSON Schema Basics", difficulty: "Intermediate", duration: "12 min read", description: "Define JSON schema targets to instruct models on required output structures.", outcomes: ["Write JSON Schemas", "Enforce array formats", "Setup enum constraints"] },
      { slug: "zod-validation", title: "Zod Validation", difficulty: "Intermediate", duration: "13 min read", description: "Validate runtime JSON strings against type-safe TypeScript schemas.", outcomes: ["Build Zod schemas", "Parse unstructured strings", "Extract validation errors"] },
      { slug: "enum-array-constraints", title: "Enum and Array Constraints", difficulty: "Intermediate", duration: "11 min read", description: "Configure complex schema criteria to restrict model choices.", outcomes: ["Define enum ranges", "Structure nested arrays", "Validate key names"] },
      { slug: "retry-repair-strategies", title: "Retry and Repair Strategies", difficulty: "Advanced", duration: "16 min read", description: "Design self-correcting middleware that queries models recursively with error details.", outcomes: ["Build repair prompts", "Track retry counts", "Set timeout gates"] },
      { slug: "production-logging", title: "Production Logging & Prompt Versioning", difficulty: "Intermediate", duration: "12 min read", description: "Log parsing failures and manage schema changes over model versions.", outcomes: ["Log parsing failures", "Version templates", "Monitor schema regressions"] },
      { slug: "structured-output-interview", title: "Structured Output Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Defend schema validation designs to senior technical panels.", outcomes: ["Compare client vs provider modes", "Explain repair overheads", "Settle schema limits"] }
    ],
    quickCheatsheet: [
      "JSON parsing fails when models add markdown code ticks (```json) or comments.",
      "Zod validates type safety, regex patterns, enum lists, and number ranges at runtime.",
      "Self-repair: Feed the invalid JSON and the Zod error message back to the LLM to fix it.",
      "Native Structured Outputs (e.g. OpenAI JSON Mode) guarantee schema compliance at the API level.",
      "Always set a maximum retry count (usually 2 or 3) to prevent expensive API loops."
    ],
    project: {
      name: "Structured Output Validator",
      repo: "structured-output-validator",
      githubUrl: "https://github.com/devJam2026/structured-output-validator",
      requirementsUrl: "/projects/structured-output-validator",
      description: "Build a validation middleware that parses raw model outputs, runs Zod checks, and triggers correction prompts on failure.",
      techStack: ["TypeScript", "Zod", "React"]
    },
    capstoneDescription: "Create a schema validation middleware. It takes raw text completions from an LLM, parses the JSON payload, checks it against a Zod configuration, and—if malformed—automatically structures a repair prompt containing the error log, allowing the model to repair its own response.",
    interviewQuestions: [
      "How do you enforce type safety on completions when calling models that do not support native structured modes?",
      "Compare Zod schema validations on the client vs structured modes on the model provider API layer.",
      "How do you design a self-repairing retry loop for malformed JSON outputs?",
      "What are the latency and cost implications of running retry repair loops in production?",
      "How do you handle schema versioning when migrating prompt templates?"
    ],
    productionChecklist: [
      "Use model-provider native structured outputs (e.g. response_format: json_object) when available",
      "Define schemas using Zod and automatically generate JSON Schema definitions for prompts",
      "Catch parse exceptions and log them to trace structural failure rates",
      "Implement a self-repair loop with a maximum of 2 retries to prevent runaway cost accumulation",
      "Strip markdown wrappers (e.g. ```json) using regex before parsing JSON strings",
      "Define strict enums and disable additionalProperties in schemas to limit vocabulary drift"
    ],
    previousSlug: "prompt-engineering",
    nextSlug: "production-processing"
  },
  "production-processing": {
    slug: "production-processing",
    moduleNumber: "1.6",
    title: "Production LLM Processing",
    status: "coming-soon",
    summary: "Scaling LLMs in production requires shifting from single requests to batch operations. In this module, you will learn to scale ingestion pipelines. Master concurrency management, batch API jobs, rate limits, queues, exponential backoff, cost tracking, and human-in-the-loop validation.",
    badges: ["Advanced", "Scaling Pipelines", "System Architecture"],
    masteryOutcomes: [
      "Design rate-limit compliant processing pipelines for high-throughput workloads.",
      "Build concurrent processing loops utilizing async queues and worker pools.",
      "Implement exponential backoff and jitter to resolve API rate limits.",
      "Track token expenditures and monitor API costs across parallel workers.",
      "Integrate human approval gates for high-risk automated classifications."
    ],
    pipelineSteps: [
      { name: "Reviews", meaning: "Raw comments backlog", description: "Inbound customer reviews loaded from data stores into processing pipelines.", example: "1,000 product reviews added to queue" },
      { name: "Queue", meaning: "Async buffer queue", description: "Buffered queue managing processing ordering and concurrency constraints.", example: "Messages queued in local memory or Redis buffer" },
      { name: "Batch Worker", meaning: "Concurrent worker pool", description: "Parallel worker threads extracting reviews and compiling api requests.", example: "5 concurrent worker tasks active" },
      { name: "LLM Extraction", meaning: "Trigger API queries", description: "Executing concurrent API requests, tracking rate limits (RPM/TPM) carefully.", example: "Sending batches using retry policies" },
      { name: "Validation", meaning: "Verify outputs shape", description: "Parsing responses, verifying schema constraints, and managing API failures.", example: "Zod check verifies rating structure" },
      { name: "Dashboard", meaning: "Log execution progress", description: "Recording cost stats, concurrency graphs, and queuing latency metrics.", example: "Cost logged: $0.45; Rate: 120 reviews/min" }
    ],
    lessons: [
      { slug: "batch-processing", title: "Batch Processing with LLMs", difficulty: "Intermediate", duration: "12 min read", description: "Learn how to bundle requests into batch jobs to optimize throughput and cost.", outcomes: ["Define batch formats", "Explain batch API cost benefits", "Schedule offline jobs"] },
      { slug: "async-queues", title: "Async Queues", difficulty: "Intermediate", duration: "14 min read", description: "Manage task backlogs using queues to prevent server overload.", outcomes: ["Structure task queues", "Manage queue concurrency", "Handle worker dropouts"] },
      { slug: "rate-limits", title: "Rate Limits", difficulty: "Intermediate", duration: "11 min read", description: "Track requests-per-minute (RPM) and tokens-per-minute (TPM) limits.", outcomes: ["Monitor RPM and TPM limits", "Calculate token consumption", "Avoid rate limit errors"] },
      { slug: "retry-backoff", title: "Retry and Backoff", difficulty: "Advanced", duration: "15 min read", description: "Implement retry loops with exponential backoff and jitter.", outcomes: ["Write exponential backoff loops", "Add random jitter to queries", "Define max retry limits"] },
      { slug: "cost-tracking", title: "Cost Tracking", difficulty: "Intermediate", duration: "12 min read", description: "Monitor token spending and calculate unit costs across pipelines.", outcomes: ["Track token budgets", "Report billing metrics", "Audit high-cost prompts"] },
      { slug: "human-review", title: "Human Review Workflow", difficulty: "Intermediate", duration: "13 min read", description: "Add approval interfaces for low-confidence model extractions.", outcomes: ["Setup fallback review boards", "Route ambiguous tasks", "Collect human corrections"] },
      { slug: "production-processing-interview", title: "Production Processing Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Defend batch queue designs to system architecture panels.", outcomes: ["Scale concurrent workers", "Explain backoff logic", "Audit queue capacities"] }
    ],
    quickCheatsheet: [
      "Batch APIs can cut token costs by 50% for non-urgent offline processing.",
      "Rate limits are enforced on Requests Per Minute (RPM) and Tokens Per Minute (TPM).",
      "Exponential backoff doubles wait times between retries (e.g. 1s, 2s, 4s, 8s).",
      "Jitter adds random noise to backoff delays to prevent synchronized request spikes.",
      "Add human-in-the-loop gates for actions with high financial or security impact."
    ],
    project: {
      name: "Product Review Insight Generator",
      repo: "product-review-insight-generator",
      githubUrl: "https://github.com/devJam2026/product-review-insight-generator",
      description: "Build an ingestion queue that concurrently processes customer comments, respects rate limits, and tracks API spend.",
      techStack: ["Node.js", "TypeScript", "React"]
    },
    capstoneDescription: "Build a batch review processor. It accepts a list of product reviews, queues them for analysis, processes them concurrently within RPM/TPM rate limits, retries failures using exponential backoff, and tracks overall processing costs.",
    interviewQuestions: [
      "Design a batch review ingestion system handling 10,000 requests per minute under tight model provider rate limits.",
      "What is the role of jitter in retry policies, and why is it needed?",
      "How do you track and contain API token costs across large parallel processing pipelines?",
      "Explain the trade-offs between real-time inference and asynchronous batch APIs.",
      "How do you design a human-in-the-loop approval workflow for low-confidence model outputs?"
    ],
    productionChecklist: [
      "Use asynchronous provider batch APIs for all non-interactive background workloads",
      "Implement client-side concurrency limits to regulate active API requests",
      "Add retry loops with exponential backoff and randomized jitter to handle rate limit errors",
      "Log input and output token counts per request to track API costs in real-time",
      "Set up local token bucket rate limiters to pre-emptively throttle outgoing requests",
      "Implement a fallback human-review queue for outputs scoring below safety thresholds"
    ],
    previousSlug: "structured-output",
    nextSlug: "embeddings"
  },
  "embeddings": {
    slug: "embeddings",
    moduleNumber: "1.7",
    title: "Embeddings",
    status: "coming-soon",
    summary: "Large Language Models represent concepts as coordinates in high-dimensional space. In this module, you will learn how embeddings capture semantic meaning. Compare vector distances, compute Cosine Similarity manually, chunk documents, and build a resume-to-job matching pipeline.",
    badges: ["Intermediate", "Vector Math", "Semantic Analysis"],
    masteryOutcomes: [
      "Explain what vector embeddings are and how they represent semantic concepts.",
      "Calculate Cosine Similarity, Dot Product, and Euclidean distance metrics.",
      "Understand chunking strategies and compare character vs token boundaries.",
      "Compare embedding models by dimension sizes, performance, and costs.",
      "Design semantic similarity search interfaces to map textual inputs."
    ],
    pipelineSteps: [
      { name: "Text", meaning: "Raw document inputs", description: "Unstructured text documents to be embedded and matched.", example: "\"Experienced software engineer skilled in TypeScript and Next.js...\"" },
      { name: "Chunks", meaning: "Apply chunking logic", description: "Segmenting documents into smaller blocks to fit embedding models context limits.", example: "\"TS/Next.js developer...\" (100 token chunk)" },
      { name: "Embedding Model", meaning: "Extract dense vector", description: "Sending text chunks to an embedding model to convert characters to floats.", example: "Model outputs a 1536-dimensional array of floats" },
      { name: "Vector", meaning: "Coordinate coordinates", description: "The dense float array representing the chunk's position in vector space.", example: "[0.012, -0.045, 0.189, ...]" },
      { name: "Similarity Score", meaning: "Compute cosine angle", description: "Running similarity calculations between vectors to measure their alignment.", example: "Cosine Similarity: 0.89 (High similarity)" },
      { name: "Match Explanation", meaning: "Synthesize summary", description: "Generating a summary matching qualification coordinates against job profiles.", example: "\"Strong match in modern frontend frameworks...\"" }
    ],
    lessons: [
      { slug: "what-are-embeddings", title: "What are Embeddings?", difficulty: "Beginner", duration: "10 min read", description: "Understand how text maps to high-dimensional coordinate spaces.", outcomes: ["Explain dense vectors", "Describe vector spaces", "Map concepts to coordinates"] },
      { slug: "vector-similarity", title: "Vector Similarity", difficulty: "Intermediate", duration: "12 min read", description: "Compare Cosine, Dot Product, and L2 distance metrics.", outcomes: ["Calculate vector angles", "Compare dot products", "Contrast similarity metrics"] },
      { slug: "cosine-similarity", title: "Cosine Similarity", difficulty: "Intermediate", duration: "11 min read", description: "Deep dive into Cosine Similarity calculations and normalization.", outcomes: ["Write Cosine similarity code", "Normalize float vectors", "Verify angle sizes"] },
      { slug: "chunking-embeddings", title: "Chunking for Embeddings", difficulty: "Intermediate", duration: "13 min read", description: "Analyze fixed-size, recursive, and semantic document chunking.", outcomes: ["Implement character chunking", "Setup recursive chunkers", "Evaluate semantic splits"] },
      { slug: "embedding-tradeoffs", title: "Embedding Model Tradeoffs", difficulty: "Intermediate", duration: "11 min read", description: "Compare dimensions sizes, context limits, and cost profiles.", outcomes: ["Compare dimension sizes", "Audit context limits", "Estimate vector storage"] },
      { slug: "matching-architecture", title: "Resume/JD Matching Architecture", difficulty: "Intermediate", duration: "14 min read", description: "Design ATS pipelines that match profiles using similarity scores.", outcomes: ["Design matching grids", "Plot radar match scores", "Filter low-confidence fits"] },
      { slug: "embeddings-interview", title: "Embeddings Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for technical interviews focused on vector calculations.", outcomes: ["Answer similarity questions", "Explain dimensionality issues", "Settle chunk bounds"] }
    ],
    quickCheatsheet: [
      "Embeddings turn text into fixed-size float vectors (e.g. 1536 dimensions).",
      "Cosine Similarity measures the angle between vectors, ignoring magnitude.",
      "Dot Product is fast but sensitive to document lengths (requires normalized vectors).",
      "Recursive chunking splits text on paragraphs first, then sentences, then words.",
      "Larger vector dimensions capture more detail but increase storage and search latency."
    ],
    project: {
      name: "Resume / JD Matcher",
      repo: "resume-jd-matcher",
      githubUrl: "https://github.com/devJam2026/resume-jd-matcher",
      description: "Build a semantic resume screener that embeds resumes and matches them against job descriptions.",
      techStack: ["React", "TypeScript", "Chart.js"]
    },
    capstoneDescription: "Build a resume screening tool. It accepts resume documents, parses text into chunks, generates vector embeddings using an API, calculates Cosine Similarity against job descriptions, and renders a match report.",
    interviewQuestions: [
      "Why does cosine similarity fail to represent semantic matches when document lengths differ heavily?",
      "Explain the difference between Cosine Similarity, Dot Product, and Euclidean Distance.",
      "How do you determine the optimal chunk size and overlap when embedding documents?",
      "Why is normalization required before running Dot Product similarity calculations?",
      "Explain how dimensionality reduction algorithms (like t-SNE) are used to visualize vector spaces."
    ],
    productionChecklist: [
      "Normalize embedding vectors before saving them to improve search performance",
      "Use token-aware recursive chunking instead of naive character chunking",
      "Include a chunk overlap buffer (usually 10-20%) to preserve context boundaries",
      "Select embedding dimension sizes matching database storage and latency bounds",
      "Sanurize input text (strip HTML, markdown) before passing it to embedding models",
      "Compute Cosine Similarity to compare documents of varying lengths"
    ],
    previousSlug: "production-processing",
    nextSlug: "vector-databases"
  },
  "vector-databases": {
    slug: "vector-databases",
    moduleNumber: "1.8",
    title: "Vector Databases",
    status: "coming-soon",
    summary: "Standard databases query by keys; vector databases query by coordinates. In this module, you will learn how vector indexes scale. Master Approximate Nearest Neighbor (ANN) search, indexing algorithms like HNSW, metadata filtering, and hybrid search pipelines.",
    badges: ["Advanced", "Database Design", "Search Indexing"],
    masteryOutcomes: [
      "Explain why traditional database indexes are unsuitable for high-dimensional vectors.",
      "Understand Approximate Nearest Neighbor (ANN) search algorithms conceptually.",
      "Configure metadata filters and implement post-filtering vs pre-filtering.",
      "Design hybrid search setups combining sparse BM25 and dense vectors.",
      "Debug vector search failure modes such as recall loss and high search latency."
    ],
    pipelineSteps: [
      { name: "Product Data", meaning: "Raw inventory items", description: "Catalog documents to be indexed, tagged, and loaded into databases.", example: "Product: 'Waterproof Running Shoes' ($80)" },
      { name: "Embeddings", meaning: "Generate product vector", description: "Converting product metadata and descriptions into coordinates.", example: "\"shoes, waterproof, running\" → [0.034, -0.012, 0.201, ...]" },
      { name: "Vector Index", meaning: "Insert into DB index", description: "Indexing vectors into structural graphs (e.g. HNSW) alongside metadata tags.", example: "Vector written to index with metadata: { category: 'footwear' }" },
      { name: "Query Vector", meaning: "Embed search text", description: "User enters search terms, which are converted into a query vector.", example: "\"rainproof sneakers\" → [0.031, -0.015, 0.198, ...]" },
      { name: "ANN Search", meaning: "Graph index search", description: "Navigating the HNSW index graph to find coordinates close to the query vector.", example: "HNSW checks adjacent nodes, returns waterproof shoes" },
      { name: "Ranked Results", meaning: "Merge & Sort listings", description: "Filtering results, applying hybrid ranking scores, and outputting matching items.", example: "Waterproof Running Shoes returned as top match" }
    ],
    lessons: [
      { slug: "why-vector-dbs", title: "Why Vector Databases Exist", difficulty: "Beginner", duration: "10 min read", description: "Understand the database limitations that led to dedicated vector stores.", outcomes: ["Explain search indexing gaps", "Differentiate SQL vs Vector DBs", "Manage dimension scales"] },
      { slug: "indexing-ann", title: "Indexing and ANN Search", difficulty: "Intermediate", duration: "15 min read", description: "Explore Approximate Nearest Neighbor graphs and quantization mechanics.", outcomes: ["Explain HNSW structures", "Describe Product Quantization", "Trade recall for latency"] },
      { slug: "metadata-filtering", title: "Metadata Filtering", difficulty: "Intermediate", duration: "12 min read", description: "Filter search queries using categorical metadata and scalar tags.", outcomes: ["Implement post-filtering", "Set pre-filtering boundaries", "Avoid index fragmentation"] },
      { slug: "hybrid-search", title: "Hybrid Search", difficulty: "Intermediate", duration: "13 min read", description: "Combine sparse keyword search indexes with dense semantic vector lookups.", outcomes: ["Combine BM25 and embeddings", "Normalize ranking scores", "Tuning hybrid weights"] },
      { slug: "search-architecture", title: "Product Search Architecture", difficulty: "Intermediate", duration: "14 min read", description: "Design e-commerce search indexes matching queries to catalog tags.", outcomes: ["Structure search queries", "Configure indexing graphs", "Optimize queries latency"] },
      { slug: "vector-db-failures", title: "Vector DB Failure Modes", difficulty: "Advanced", duration: "12 min read", description: "Diagnose indexing errors, recall degradation, and memory exhaustion.", outcomes: ["Analyze recall metrics", "Prevent memory exhaustion", "Setup indexing triggers"] },
      { slug: "vector-db-interview", title: "Vector DB Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for system architecture interviews focused on vector databases.", outcomes: ["Compare Pinecone vs Chroma", "Detail HNSW configurations", "Explain hybrid scoring"] }
    ],
    quickCheatsheet: [
      "Exact K-Nearest Neighbor search is too slow O(N) for large scale datasets.",
      "Approximate Nearest Neighbor (ANN) trades search accuracy for speed.",
      "HNSW (Hierarchical Navigable Small World) builds multi-layer graphs for fast search.",
      "Pre-filtering restricts the search space before running vector calculations; post-filtering filters after.",
      "Hybrid search blends sparse keyword scores (BM25) with dense vector scores."
    ],
    project: {
      name: "Semantic Product Search",
      repo: "semantic-product-search",
      githubUrl: "https://github.com/devJam2026/semantic-product-search",
      description: "Build an inventory catalog utilizing vector databases, metadata filtering, and hybrid search routing.",
      techStack: ["React", "TypeScript", "Tailwind CSS"]
    },
    capstoneDescription: "Build a product search catalog. It converts product listings into embeddings, stores them in a local vector index, executes search queries using hybrid rankings, and applies metadata filters to restrict matches.",
    interviewQuestions: [
      "Explain the difference between dense retrieval and sparse retrieval in search engines.",
      "Why is approximate nearest neighbor (ANN) search required instead of exact k-NN queries at scale?",
      "Explain the difference between pre-filtering and post-filtering in vector databases.",
      "How does Hierarchical Navigable Small World (HNSW) navigate high-dimensional graphs?",
      "How do you evaluate vector search performance using recall and precision metrics?"
    ],
    productionChecklist: [
      "Use pre-filtering rather than post-filtering to prevent search results starvation",
      "Configure index refresh rates to minimize real-time write latency impact",
      "Determine indexing graph properties (M, efConstruction) balancing search speed and accuracy",
      "Incorporate BM25 keyword indices alongside dense embeddings to handle exact matches",
      "Verify query latencies (p99) under concurrent search loads",
      "Monitor indexing recall rates periodically against exact k-NN calculations"
    ],
    previousSlug: "embeddings",
    nextSlug: "self-attention"
  },
  "self-attention": {
    slug: "self-attention",
    moduleNumber: "1.9",
    title: "Self-Attention",
    status: "in-progress",
    summary: "The attention mechanism is the engine of the transformer. In this module, you will learn the math behind self-attention. Deconstruct Query, Key, and Value projections, scaled dot-product attention, causal masking, and multi-head partitions.",
    badges: ["Advanced", "Math Heavy", "Architecture Core"],
    masteryOutcomes: [
      "Compute Query, Key, and Value matrices from token input vectors.",
      "Calculate Scaled Dot-Product Attention matrices step-by-step.",
      "Explain why attention scores are scaled by the square root of key dimensions.",
      "Implement causal masking to prevent models from seeing future tokens.",
      "Understand Multi-Head Attention splitting and vector concatenations."
    ],
    pipelineSteps: [
      { name: "Tokens", meaning: "Tokenized text segments", description: "Input sequence converted to token IDs and embeddings.", example: "[\"I\", \" love\", \" AI\"]" },
      { name: "Embeddings", meaning: "Load vector values", description: "Tokens mapped to input vectors, combined with positional coordinate values.", example: "[x1, x2, x3] (each vector d_model dimensions)" },
      { name: "Q/K/V", meaning: "Generate QKV matrices", description: "Multiplying input vectors by Wq, Wk, Wv projection matrices to generate Q, K, and V vectors.", example: "Queries (Q), Keys (K), Values (V) matrices computed" },
      { name: "Scores", meaning: "QK dot product matrix", description: "Multiplying Queries by transposed Keys to measure alignment scores between all tokens.", example: "QK^T scores matrix (raw similarity coordinates)" },
      { name: "Softmax Weights", meaning: "Scale & Apply Softmax", description: "Scaling scores by sqrt(dk) and applying Softmax to compute attention weights.", example: "Softmax(QK^T / sqrt(dk)) → attention weights sum to 1.0 per row" },
      { name: "Contextual Token", meaning: "Weighted sum of V", description: "Multiplying attention weights by Value vectors to compute contextual representations.", example: "Contextualized output vectors containing semantic relations" }
    ],
    lessons: [
      { slug: "why-self-attention", title: "Why Attention Was Needed", difficulty: "Beginner", duration: "10 min read", description: "Compare recurrent constraints against parallel attention calculations.", outcomes: ["Explain sequential bottlenecks", "Describe recurrence limits", "Introduce attention idea"] },
      { slug: "query-key-value", title: "Query, Key and Value", difficulty: "Intermediate", duration: "12 min read", description: "Deconstruct the role of projection matrices in generating Q, K, and V.", outcomes: ["Explain QKV projections", "Verify vector shapes", "Define projection weights"] },
      { slug: "scaled-dot-product", title: "Scaled Dot Product Attention", difficulty: "Advanced", duration: "15 min read", description: "Derive the mathematical formula of scaled dot-product attention.", outcomes: ["Compute QK^T matrix", "Scale by key dimensions", "Apply softmax functions"] },
      { slug: "attention-weights", title: "Attention Weights", difficulty: "Intermediate", duration: "11 min read", description: "Visualize token attention relationships using heatmaps.", outcomes: ["Render attention heatmaps", "Read attention weights", "Identify semantic ties"] },
      { slug: "causal-masking", title: "Causal Masking", difficulty: "Advanced", duration: "13 min read", description: "Implement causal mask filters to enforce autoregressive generation constraints.", outcomes: ["Write causal masks", "Prevent future token access", "Verify decoding shapes"] },
      { slug: "multi-head-attention", title: "Multi-head Attention", difficulty: "Advanced", duration: "14 min read", description: "Split query, key, and value vectors across multiple parallel heads.", outcomes: ["Split vector dimensions", "Run parallel heads attention", "Concatenate heads outputs"] },
      { slug: "attention-interview", title: "Attention Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for mathematical questions focused on attention layers.", outcomes: ["Explain sqrt(dk) scaling", "Derive space complexity", "Draw QKV flows"] }
    ],
    quickCheatsheet: [
      "Query = what you search for; Key = what you match against; Value = contents to extract.",
      "Attention formula: Softmax(QK^T / sqrt(dk))V.",
      "Scaling by sqrt(dk) prevents softmax gradients from vanishing under high dimensions.",
      "Causal masking sets future token scores to -infinity before softmax.",
      "Multi-Head Attention allows the model to attend to different parts of the prompt simultaneously."
    ],
    project: {
      name: "Mini Attention Notebook",
      repo: "mini-attention-notebook",
      githubUrl: "https://github.com/devJam2026/mini-attention-notebook",
      requirementsUrl: "/projects/mini-attention-notebook",
      description: "Self-contained interactive workbook computing step-by-step scaled dot-product attention scores from raw matrices input.",
      techStack: ["React", "TypeScript", "Math.js"]
    },
    capstoneDescription: "Build a workbook simulator that demonstrates attention calculations. It projects Query, Key, and Value vectors, runs matrix multiplications, scales scores, applies causal masking, and renders attention heatmaps.",
    interviewQuestions: [
      "Why is self-attention scaled by the square root of key dimension size?",
      "Explain how causal masking prevents models from looking at future token values during autoregressive generation.",
      "Explain the Query, Key, Value analogy in attention mechanisms.",
      "What is the time and space complexity of self-attention calculations, and why?",
      "Why does Multi-Head Attention yield better representations than Single-Head Attention?"
    ],
    productionChecklist: [
      "Scale attention scores by 1/sqrt(dk) to ensure training gradient stability",
      "Apply causal masks to attention scores when training decoder-only architectures",
      "Verify tensor dimensionality matches across query, key, value matrix transformations",
      "Implement FlashAttention algorithms when deploying custom models to optimize GPU memory",
      "Plot attention heatmaps to inspect how tokens weight semantic relations",
      "Pre-compute and cache key-value states (KV Cache) to accelerate autoregressive generation"
    ],
    previousSlug: "vector-databases",
    nextSlug: "transformers"
  },
  "transformers": {
    slug: "transformers",
    moduleNumber: "1.10",
    title: "Transformers",
    status: "in-progress",
    summary: "Large Language Models are composed of stacked transformer blocks. In this module, you will deconstruct the transformer architecture. Learn the sequence flow of a decoder block, residual skip connections, layer normalizations, feed-forward networks, and output logits projection.",
    badges: ["Advanced", "System Design", "Block-by-Block"],
    masteryOutcomes: [
      "Explain the data flow inside a decoder-only transformer block.",
      "Describe the role of residual skip connections in preventing gradient vanishing.",
      "Compare pre-layer normalization (Pre-LN) and post-layer normalization (Post-LN).",
      "Understand the Feed Forward Network (FFN) sublayer configuration.",
      "Map why transformer blocks are stacked to capture hierarchical language representations."
    ],
    pipelineSteps: [
      { name: "Input Embeddings", meaning: "Initial vector states", description: "Tokens embeddings are loaded, combined with positional coordinate offsets.", example: "Sequence representations loaded (size: [Batch, SeqLen, d_model])" },
      { name: "Self-Attention", meaning: "Measure token relations", description: "Multi-Head Attention captures token relations, generating contextualized outputs.", example: "QKV attention runs, scores compiled" },
      { name: "Residual Add", meaning: "Add initial signals", description: "Adding input embeddings directly to the attention output to bypass layers.", example: "Initial embeddings added back to prevent signal loss" },
      { name: "LayerNorm", meaning: "Normalize activations", description: "Layer Normalization scales activations to improve training stability.", example: "Mean-variance scaled to bounds" },
      { name: "FFN", meaning: "Non-linear projections", description: "Feed Forward Network projects vectors to higher dimensions and applies non-linear activations.", example: "Two-layer MLP projects vectors through GeLU activation" },
      { name: "Output Representation", meaning: "Compile final vector", description: "Final residual addition and layer normalization compiles contextual token states.", example: "Representations ready for the next block or vocabulary projection" }
    ],
    lessons: [
      { slug: "transformer-block-overview", title: "Transformer Block Overview", difficulty: "Beginner", duration: "10 min read", description: "Analyze the sequence flow of a decoder-only block.", outcomes: ["Explain block data flow", "Identify layer nodes", "Contrast encoder vs decoder"] },
      { slug: "residual-connections", title: "Attention + Residual Connection", difficulty: "Intermediate", duration: "12 min read", description: "Understand how skip connections preserve gradient flows.", outcomes: ["Explain skip connections", "Prevent gradient vanishing", "Verify vector addition shapes"] },
      { slug: "layernorm", title: "LayerNorm", difficulty: "Intermediate", duration: "11 min read", description: "Deconstruct mean-variance normalization across feature layers.", outcomes: ["Calculate layer statistics", "Compare Pre-LN vs Post-LN", "Analyze scaling weights"] },
      { slug: "feed-forward-net", title: "Feed Forward Network", difficulty: "Intermediate", duration: "12 min read", description: "Explore multi-layer perceptrons and non-linear activations inside blocks.", outcomes: ["Write FFN projections", "Understand GeLU role", "Map hidden dimension sizes"] },
      { slug: "decoder-only", title: "Decoder-only Architecture", difficulty: "Advanced", duration: "13 min read", description: "Analyze GPT/Llama models and causal decoding loops.", outcomes: ["Map autoregressive loops", "Verify causal splits", "Describe output logits projection"] },
      { slug: "transformer-failures", title: "Transformer Failure Modes", difficulty: "Advanced", duration: "14 min read", description: "Diagnose gradient explosion, representation collapse, and VRAM leaks.", outcomes: ["Diagnose gradient blowups", "Mitigate training collapse", "Track KV cache VRAM"] },
      { slug: "transformer-interview", title: "Transformer Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for engineering interviews focused on transformer architectures.", outcomes: ["Draw block layouts", "Defend Pre-LN choices", "Compare attention types"] }
    ],
    quickCheatsheet: [
      "Transformer blocks stack self-attention, layer normalization, and feed-forward networks.",
      "Residual connections prevent vanishing gradients by creating direct paths for backpropagation.",
      "Layer Normalization stabilizes training by scaling mean and variance along features.",
      "Modern LLMs use Pre-LN, which normalizes inputs before attention/FFN sublayers.",
      "The Feed Forward Network (FFN) applies non-linear mappings to refine token features."
    ],
    project: {
      name: "Mini Transformer Block Explainer",
      repo: "mini-transformer-block-explainer",
      githubUrl: "https://github.com/devJam2026/mini-transformer-block-explainer",
      description: "Interactive visual deconstruction of a standard decoder block, outlining normalizations, skip links, and output projections.",
      techStack: ["React", "TypeScript", "Framer Motion"]
    },
    capstoneDescription: "Build a block simulator that demonstrates the internal data paths of a decoder block. Users follow vectors as they undergo normalizations, attention calculations, residual additions, and non-linear projections.",
    interviewQuestions: [
      "Why did Multi-Head Attention replace single-head attention in production LLM backbones?",
      "Explain the role of residual skip connections in preventing gradient vanishing.",
      "Compare pre-layer normalization (Pre-LN) and post-layer normalization (Post-LN) configurations.",
      "Why do we need a non-linear Feed Forward Network (FFN) sublayer in addition to self-attention?",
      "Why do we stack multiple transformer blocks instead of building a single deep block?"
    ],
    productionChecklist: [
      "Configure residual connections to add inputs before normalizations (Pre-LN setup)",
      "Set FFN hidden dimension sizes to approximately 4x the model dimension (d_model)",
      "Verify tensor shapes match exactly before executing residual addition loops",
      "Use SwiGLU or GeLU non-linear activations inside FFN projections",
      "Track block activation sizes to prevent VRAM memory overflows",
      "Monitor training gradient norms to catch gradient explosion early"
    ],
    previousSlug: "self-attention",
    nextSlug: "llm-evaluation"
  },
  "llm-evaluation": {
    slug: "llm-evaluation",
    moduleNumber: "1.11",
    title: "LLM Evaluation",
    status: "coming-soon",
    summary: "Evaluations determine if a model is production-ready. In this module, you will learn to construct evaluation suites. Master golden datasets, accuracy metrics, faithfulness checks, LLM-as-a-Judge setups, and automated regression testing in CI/CD pipelines.",
    badges: ["Advanced", "Quality Assurance", "CI/CD Evals"],
    masteryOutcomes: [
      "Create golden datasets containing target inputs and expected outputs.",
      "Measure accuracy, precision, recall, and toxicity on model completions.",
      "Compute faithfulness and context recall score targets on RAG outputs.",
      "Implement LLM-as-a-Judge scoring systems with robust rating rubrics.",
      "Automate regression evaluation scripts as test checks in CI/CD loops."
    ],
    pipelineSteps: [
      { name: "Test Set", meaning: "Golden evaluation set", description: "A curated dataset of benchmark questions, expected answers, and source context references.", example: "100 security prompt test cases loaded" },
      { name: "Prompt Version", meaning: "Active prompt template", description: "The candidate prompt template to be evaluated against the test set.", example: "Scam detector prompt v2.1" },
      { name: "Model Output", meaning: "Compile completions", description: "Running model completions on all dataset entries in parallel.", example: "100 model responses generated" },
      { name: "Evaluator", meaning: "Run scoring checks", description: "Applying metric evaluators, Zod checkers, or judge models to evaluate outputs.", example: "LLM-as-a-judge scores faithfulness on a 1-5 scale" },
      { name: "Metrics", meaning: "Compile final reports", description: "Aggregating individual scores into accuracy, recall, cost, and latency metrics.", example: "Faithfulness: 4.8/5; Cost: $0.12; Latency: 450ms" },
      { name: "Regression Report", meaning: "Publish commit status", description: "Comparing metric trends to block commits if quality degrades.", example: "No regressions found, CI/CD check passes" }
    ],
    lessons: [
      { slug: "why-evals-matter", title: "Why LLM Evaluation Matters", difficulty: "Beginner", duration: "10 min read", description: "Understand the risks of manual verification and prompt updates.", outcomes: ["Explain evaluation goals", "Contrast unit tests vs evals", "Audit evaluation costs"] },
      { slug: "golden-datasets", title: "Golden Datasets", difficulty: "Intermediate", duration: "12 min read", description: "Curate representative datasets of user prompts and ideal answers.", outcomes: ["Structure golden test sets", "Gather edge case prompts", "Maintain test data hygiene"] },
      { slug: "eval-metrics", title: "Accuracy, Precision and Recall", difficulty: "Intermediate", duration: "11 min read", description: "Measure accuracy on classifications and structured completions.", outcomes: ["Calculate precision scores", "Evaluate recall performance", "Classify confusion matrices"] },
      { slug: "faithfulness-hallucinations", title: "Faithfulness and Hallucination Checks", difficulty: "Advanced", duration: "14 min read", description: "Detect hallucinated statements in RAG outputs using source references.", outcomes: ["Detect hallucinations", "Calculate faithfulness metrics", "Verify context grounding"] },
      { slug: "llm-as-a-judge", title: "LLM-as-a-Judge", difficulty: "Advanced", duration: "13 min read", description: "Design LLM evaluation templates with robust grading rubrics.", outcomes: ["Write grading rubrics", "Minimize judge model bias", "Validate judge scores"] },
      { slug: "regression-cicd", title: "Regression Testing in CI/CD", difficulty: "Advanced", duration: "14 min read", description: "Integrate evaluation checks into automated deployment pipelines.", outcomes: ["Write CLI eval scripts", "Integrate evals with GitHub Actions", "Block regressive commits"] },
      { slug: "eval-interview", title: "Evaluation Interview Guide", difficulty: "Interview", duration: "15 min read", description: "Prepare for engineering interviews focused on evaluation systems.", outcomes: ["Defend evaluation metrics", "Explain LLM-as-a-judge biases", "Scale evaluations cost-effectively"] }
    ],
    quickCheatsheet: [
      "Golden datasets require high-quality, representative, and statically preserved prompts.",
      "RAG evaluation metrics measure Faithfulness (grounding) and Answer Relevance.",
      "LLM-as-a-Judge uses a larger model (e.g. GPT-4) to grade smaller model outputs.",
      "Limit judge models bias by using clear rubrics, multiple grades, and swap-ordering.",
      "Run evaluation tests inside CI pipelines to block regressions before deployments."
    ],
    project: {
      name: "LLM Evaluation Lab",
      repo: "llm-evaluation-lab",
      githubUrl: "https://github.com/devJam2026/llm-evaluation-lab",
      description: "Regression evaluation dashboard testing prompt templates against golden datasets, checking faithfulness and schema compliance.",
      techStack: ["TypeScript", "Vitest", "React"]
    },
    capstoneDescription: "Build an evaluation laboratory dashboard. It loads golden datasets of prompts, runs test variants, computes accuracy and faithfulness scores, and generates comparative regression reports.",
    interviewQuestions: [
      "How do you evaluate semantic faithfulness on dynamic, open-ended LLM outputs at scale?",
      "Explain the LLM-as-a-Judge pattern and how you mitigate its inherent biases.",
      "How do you design a CI/CD test action that prevents prompt quality regressions?",
      "Why are traditional metrics like BLEU or ROUGE insufficient for modern LLM evaluation?",
      "How do you balance evaluation accuracy, execution time, and API token costs?"
    ],
    productionChecklist: [
      "Establish a golden dataset of at least 50 representative user prompts before deploying updates",
      "Benchmark prompt accuracy changes across Git commits in automated test runs",
      "Set up LLM-as-a-judge evaluation prompts using strict, multi-point grading rubrics",
      "Log production inputs and completions recursively to detect data drift",
      "Measure and alert on p99 execution latencies alongside cost bounds",
      "Enforce safety filters evaluating toxicity and PII compliance on all completions"
    ],
    previousSlug: "transformers",
    nextSlug: null
  }
};
