import { AIContentStatus } from "./tracks";

export type AISubmodule = {
  id: string;
  slug: string;
  trackSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  status: AIContentStatus;
  whatYouWillLearn: string[];
  whyItMatters: string;
  conceptsCovered: string[];
  projectMapping: string[];
  interviewValue: string[];
  detailedExplanation?: string;
  interviewQuestions?: { question: string; answer: string; }[];
};

export const aiSubmodules: Record<string, AISubmodule> = {
  // Python for AI Systems Submodules
  "python-refresh-for-ai": {
    id: "python-refresh-for-ai",
    slug: "python-refresh-for-ai",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Python refresh for AI developers",
    description: "Variables, functions, loops, conditionals, list comprehensions, error handling, and file operations.",
    status: "complete",
    whatYouWillLearn: [
      "Variables, functions, loops, conditionals",
      "Lists, tuples, dictionaries, sets",
      "List comprehensions and generator expressions",
      "Error handling with try/except blocks",
      "File reading/writing operations"
    ],
    whyItMatters: "Python is the lingua franca of AI engineering. A solid grasp of the basics is crucial for writing clean code.",
    conceptsCovered: ["Variables", "Loops", "Dictionaries", "List Comprehension", "File Handling"],
    projectMapping: ["ai-data-cleaning-playground"],
    interviewValue: ["Write clean, idiomatic Python code under pressure"]
  },
  "python-data-handling": {
    id: "python-data-handling",
    slug: "python-data-handling",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Python data handling",
    description: "Reading and processing CSV, JSON, TXT data, data cleaning, type conversion, and handling missing values.",
    status: "complete",
    whatYouWillLearn: [
      "Reading CSV, JSON, and raw TXT files",
      "Working with structured and unstructured data formats",
      "Cleaning raw string inputs",
      "Handling missing values and null checks",
      "Type conversion and parsing safety"
    ],
    whyItMatters: "AI applications consume unstructured data. Processing inputs safely prevents downstream failures.",
    conceptsCovered: ["CSV", "JSON Parsing", "Data Cleaning", "Type Casting"],
    projectMapping: ["ai-data-cleaning-playground"],
    interviewValue: ["Build safe input parsers that handle edge-cases and corrupt files"]
  },
  "numpy-for-ai": {
    id: "numpy-for-ai",
    slug: "numpy-for-ai",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "NumPy for AI",
    description: "Vectorized array operations, matrix mathematics, broadcasting, dot products, and shape manipulation.",
    status: "complete",
    whatYouWillLearn: [
      "Initializing NumPy arrays and matrices",
      "Vector and matrix mathematics",
      "Understanding array broadcasting rules",
      "Calculating dot products and matrix products",
      "Reshaping and manipulating dimensions (squeeze, transpose)"
    ],
    whyItMatters: "Deep learning models compute on tensors. NumPy is the mathematical backbone of tensor operations.",
    conceptsCovered: ["NumPy Array", "Vectorization", "Broadcasting", "Matrix Multiplication"],
    projectMapping: ["numpy-vector-playground"],
    interviewValue: ["Perform vectorized computations without using slow Python loops"]
  },
  "pandas-for-ml": {
    id: "pandas-for-ml",
    slug: "pandas-for-ml",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Pandas for ML workflows",
    description: "DataFrames, filtering, grouping, selecting feature/target columns, and exploratory data analysis.",
    status: "complete",
    whatYouWillLearn: [
      "Loading data into Pandas DataFrames",
      "Filtering, querying, and grouping datasets",
      "Isolating feature columns vs target columns",
      "Handling missing data inside DataFrames",
      "Basic exploratory data analysis and statistics"
    ],
    whyItMatters: "Data preparation consumes 80% of ML workflows. Pandas makes querying and preprocessing datasets highly efficient.",
    conceptsCovered: ["DataFrame", "Series", "Feature Column", "Target Column"],
    projectMapping: ["numpy-vector-playground"],
    interviewValue: ["Manipulate large datasets, group features, and clean target columns in memory"]
  },
  "python-oop-for-ai": {
    id: "python-oop-for-ai",
    slug: "python-oop-for-ai",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Python OOP for AI systems",
    description: "Classes, objects, configuration classes, pipeline-style architecture, and reusable service components.",
    status: "complete",
    whatYouWillLearn: [
      "Creating classes, attributes, and methods",
      "Designing pipeline-style code architectures",
      "Building configuration container classes",
      "Constructing reusable AI service components"
    ],
    whyItMatters: "Production code needs structure. OOP allows wrapping weights, APIs, and pipelines into maintainable objects.",
    conceptsCovered: ["Class", "Object", "Pipeline Pattern", "Configuration Class"],
    projectMapping: ["fastapi-ml-inference-starter"],
    interviewValue: ["Design modular, object-oriented systems for pipeline execution"]
  },
  "python-typing-validation": {
    id: "python-typing-validation",
    slug: "python-typing-validation",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Python typing and validation",
    description: "Type hints, dataclasses, Pydantic basics, and function contracts.",
    status: "complete",
    whatYouWillLearn: [
      "Writing type hints (List, Dict, Union, Optional)",
      "Defining structured dataclasses",
      "Creating Pydantic validation schemas",
      "Enforcing strict function contracts"
    ],
    whyItMatters: "Dynamic Python code is prone to runtime type errors. Static typing and Pydantic schemas enforce database and API safety.",
    conceptsCovered: ["Type Hints", "Dataclasses", "Pydantic Schema", "Validation Gate"],
    projectMapping: ["fastapi-ml-inference-starter"],
    interviewValue: ["Enforce runtime type-safety on JSON requests using Pydantic"]
  },
  "fastapi-basics-for-ai": {
    id: "fastapi-basics-for-ai",
    slug: "fastapi-basics-for-ai",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "FastAPI basics for AI",
    description: "Request/response models, inference endpoints, environment configurations, and server deployments.",
    status: "complete",
    whatYouWillLearn: [
      "Creating API endpoints and HTTP routers",
      "Mapping JSON bodies to Pydantic request models",
      "Returning structured responses",
      "Loading model weights on startup",
      "Injecting environment variables"
    ],
    whyItMatters: "Deploying model predictions requires web interfaces. FastAPI is the fastest standard for python microservices.",
    conceptsCovered: ["FastAPI Router", "Request Model", "Startup Event", "Environment Variables"],
    projectMapping: ["fastapi-ml-inference-starter"],
    interviewValue: ["Design high-performance prediction API interfaces"]
  },
  "async-python-for-ai": {
    id: "async-python-for-ai",
    slug: "async-python-for-ai",
    trackSlug: "python-for-ai-systems",
    moduleSlug: "python-for-ai-systems",
    title: "Async Python for AI workloads",
    description: "Async/await loops, concurrent requests, batch processing, and latency optimizations.",
    status: "complete",
    whatYouWillLearn: [
      "Writing asynchronous functions with async and await",
      "Executing parallel tasks concurrently using asyncio",
      "Designing batch processing pipelines",
      "Minimizing API request latency overheads"
    ],
    whyItMatters: "LLM queries and model inferences are slow network I/O calls. Async execution prevents blockages, speeding up processing.",
    conceptsCovered: ["async / await", "asyncio", "Concurrency", "Batch Ingestion"],
    projectMapping: ["async-ai-batch-processor"],
    interviewValue: ["Avoid thundering herd timeouts when calling third-party LLM providers concurrently"]
  },

  // Machine Learning Foundations Submodules
  "what-is-machine-learning": {
    id: "what-is-machine-learning",
    slug: "what-is-machine-learning",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "What is machine learning?",
    description: "Rule-based systems vs ML, supervised vs unsupervised learning, regression vs classification, training vs inference.",
    status: "complete",
    whatYouWillLearn: [
      "Rule-based code vs data-driven machine learning",
      "Supervised vs unsupervised learning paradigms",
      "Classification vs regression tasks",
      "The lifecycle of training vs inference"
    ],
    whyItMatters: "Understanding the difference between logic engineering and statistical modeling is key to selecting the right tool.",
    conceptsCovered: ["Supervised Learning", "Unsupervised Learning", "Inference Cycle", "Data-driven Code"],
    projectMapping: ["ml-model-evaluation-dashboard"],
    interviewValue: ["Articulate the transition from hard-coded rules to learned feature distributions"]
  },
  "ml-workflow": {
    id: "ml-workflow",
    slug: "ml-workflow",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "ML workflow",
    description: "Dataset collection, feature engineering, train/test split, model training, evaluation, and deployment basics.",
    status: "complete",
    whatYouWillLearn: [
      "Building dataset ingestion gates",
      "Splitting datasets into train, validation, and test subsets",
      "Training baseline models and evaluating outcomes",
      "The basics of saving weights and serving predictions"
    ],
    whyItMatters: "Following a structured pipeline ensures models are evaluated on unseen data, preventing fake accuracy.",
    conceptsCovered: ["Train/Test Split", "Baseline Model", "Evaluation Cycle", "Pipeline Architecture"],
    projectMapping: ["ml-model-evaluation-dashboard"],
    interviewValue: ["Explain why training on evaluation datasets causes model overfitting and failure in production"]
  },
  "data-preprocessing": {
    id: "data-preprocessing",
    slug: "data-preprocessing",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Data preprocessing",
    description: "Missing values, outlier detection, categorical encoding, feature scaling, standardization, and data leakage.",
    status: "complete",
    whatYouWillLearn: [
      "Imputing missing values and dropping bad data",
      "Detecting outliers and standardizing scales",
      "Encoding categories (One-Hot, Label encoding)",
      "Preventing features data leakage during transformations"
    ],
    whyItMatters: "Garbage in, garbage out. Cleaning feature representations directly determines the model's accuracy limit.",
    conceptsCovered: ["Missing Imputation", "Outliers", "Categorical Encoding", "Standardization", "Data Leakage"],
    projectMapping: ["house-price-prediction"],
    interviewValue: ["Explain why preprocessing transformations must be fitted ONLY on training data to prevent leakage"]
  },
  "regression-foundations": {
    id: "regression-foundations",
    slug: "regression-foundations",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Regression",
    description: "Linear regression, multiple linear regression, polynomial regression, MAE, MSE, RMSE, and R2 score.",
    status: "complete",
    whatYouWillLearn: [
      "Understanding linear relationships and slopes",
      "Executing multiple and polynomial regression models",
      "Calculating loss metrics: MAE, MSE, RMSE",
      "Evaluating predictions fit using the R2 score"
    ],
    whyItMatters: "Regression predicts continuous numerical values, such as cost estimation, token counts, or house values.",
    conceptsCovered: ["Linear Regression", "Mean Squared Error", "R2 Score", "Loss Minimization"],
    projectMapping: ["house-price-prediction"],
    interviewValue: ["Compare Mean Absolute Error (MAE) and Mean Squared Error (MSE) outlier sensitivity"]
  },
  "classification-foundations": {
    id: "classification-foundations",
    slug: "classification-foundations",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Classification",
    description: "Logistic regression, K-Nearest Neighbors, Decision Trees, Random Forests, Naive Bayes, and SVM basics.",
    status: "complete",
    whatYouWillLearn: [
      "Predicting binary states using logistic regression",
      "Understanding KNN boundaries and Decision Tree splits",
      "Scaling tree ensembles using Random Forests",
      "Naively modeling probabilities with Naive Bayes"
    ],
    whyItMatters: "Classification routes queries, identifies scams, and filters toxic inputs.",
    conceptsCovered: ["Logistic Regression", "Decision Tree", "Random Forest", "Ensemble Methods"],
    projectMapping: ["customer-churn-predictor", "spam-message-classifier"],
    interviewValue: ["Explain the difference between bagging in Random Forests and boosting in gradient boosters"]
  },
  "model-evaluation-foundations": {
    id: "model-evaluation-foundations",
    slug: "model-evaluation-foundations",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Model evaluation",
    description: "Accuracy, precision, recall, F1 score, confusion matrix, and ROC-AUC curve.",
    status: "complete",
    whatYouWillLearn: [
      "Why dataset classification accuracy is misleading on unbalanced inputs",
      "Calculating Precision and Recall fractions",
      "Balancing precision vs recall using F1 scores",
      "Plotting confusion matrices and ROC-AUC boundaries"
    ],
    whyItMatters: "A spam filter that flags good emails has high accuracy but breaks user trust. Precision and recall track true cost trade-offs.",
    conceptsCovered: ["Precision", "Recall", "F1 Score", "Confusion Matrix", "ROC-AUC"],
    projectMapping: ["ml-model-evaluation-dashboard"],
    interviewValue: ["Select the correct evaluation metrics for imbalanced datasets"]
  },
  "feature-engineering-foundations": {
    id: "feature-engineering-foundations",
    slug: "feature-engineering-foundations",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Feature engineering",
    description: "Numerical, categorical, datetime, text features, Bag of Words, and TF-IDF.",
    status: "complete",
    whatYouWillLearn: [
      "Extracting features from datetime strings",
      "Aggregating numerical bounds",
      "Representing text inputs using Bag of Words frequency counters",
      "Weighting terms importance using TF-IDF statistics"
    ],
    whyItMatters: "Algorithms process numbers. Converting dates, categories, and text into vectors allows classifiers to map patterns.",
    conceptsCovered: ["Feature Engineering", "Bag of Words", "TF-IDF Vectorization", "Token Frequencies"],
    projectMapping: ["spam-message-classifier", "product-review-sentiment-analyzer"],
    interviewValue: ["Explain how TF-IDF discounts frequent background terms to isolate key vocabulary meanings"]
  },
  "unsupervised-learning-foundations": {
    id: "unsupervised-learning-foundations",
    slug: "unsupervised-learning-foundations",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Unsupervised learning",
    description: "K-Means clustering, dimensionality reduction, PCA basics, and vector similarity thinking.",
    status: "complete",
    whatYouWillLearn: [
      "Grouping unlabelled records using K-Means clustering",
      "Finding structural clusters using similarity distances",
      "Reducing feature dimensions using PCA",
      "Mapping relationships in high-dimensional vector spaces"
    ],
    whyItMatters: "Unsupervised learning extracts patterns from unlabelled datasets, such as client segmentations.",
    conceptsCovered: ["K-Means Clustering", "Principal Component Analysis", "Dimensionality Reduction"],
    projectMapping: ["triage-insight-clustering", "dimensionality-reduction-visualizer"],
    interviewValue: ["Explain how K-Means selects centroid centroids to partition space mathematically"]
  },
  "model-selection-tuning": {
    id: "model-selection-tuning",
    slug: "model-selection-tuning",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "Model selection and tuning",
    description: "Cross-validation, hyperparameter tuning, grid search, and the bias-variance tradeoff.",
    status: "complete",
    whatYouWillLearn: [
      "Splitting validations recursively using Cross-Validation",
      "Optimizing settings using Grid Search and Random Search",
      "Deconstructing Bias vs Variance errors",
      "Balancing models between underfitting and overfitting"
    ],
    whyItMatters: "Tuning ensures models generalize well to unseen inputs instead of memorizing training datasets.",
    conceptsCovered: ["Cross-Validation", "Grid Search", "Bias-Variance Tradeoff", "Overfitting"],
    projectMapping: ["ml-model-evaluation-dashboard"],
    interviewValue: ["Contrast bias and variance errors, explaining how regularizations resolve high variance"]
  },
  "ml-deployment-thinking": {
    id: "ml-deployment-thinking",
    slug: "ml-deployment-thinking",
    trackSlug: "machine-learning-foundations",
    moduleSlug: "machine-learning-foundations",
    title: "ML deployment thinking",
    description: "Saving/loading models, API service loops, model drift, and monitoring quality.",
    status: "complete",
    whatYouWillLearn: [
      "Saving weights using Joblib or Pickle files",
      "Loading weights inside inference service loops",
      "Detecting input data distribution changes (Model Drift)",
      "Monitoring prediction accuracy over time"
    ],
    whyItMatters: "A model in a notebook is useless. Deployment exposes weights as API endpoints for applications.",
    conceptsCovered: ["Serialization", "Model Ingestion", "Data Drift", "API Gateways"],
    projectMapping: ["customer-churn-predictor"],
    interviewValue: ["Outline the architecture of a continuous monitoring loop detecting prediction drift"]
  },

  // Deep Learning Fundamentals Submodules
  "neural-network-intuition": {
    id: "neural-network-intuition",
    slug: "neural-network-intuition",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Neural network intuition",
    description: "Artificial neurons, weights, bias, activation functions, and output predictions.",
    status: "complete",
    whatYouWillLearn: [
      "Understanding biological vs artificial neurons",
      "The role of weights as strength scales",
      "Applying Bias parameters to shift output thresholds",
      "Computing weighted sums and returning outputs"
    ],
    whyItMatters: "Neural networks mimic structural connections to solve complex non-linear classification mappings.",
    conceptsCovered: ["Artificial Neuron", "Weights Matrix", "Bias Term", "Weighted Sum"],
    projectMapping: ["neural-network-from-scratch"],
    interviewValue: ["Explain the physical purpose of the bias term inside an artificial neuron"]
  },
  "perceptron-and-mlp": {
    id: "perceptron-and-mlp",
    slug: "perceptron-and-mlp",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Perceptron and MLP",
    description: "Single perceptron models, dense layers, hidden representations, and forward propagation.",
    status: "complete",
    whatYouWillLearn: [
      "Tracing limits of single-layer Perceptrons (the XOR problem)",
      "Constructing Multi-Layer Perceptrons (MLPs)",
      "Hidden representation transformations",
      "Executing forward propagation matrix multiplications"
    ],
    whyItMatters: "Deep representation networks stack hidden layers to capture hierarchical features.",
    conceptsCovered: ["Perceptron", "Multi-Layer Perceptron", "Hidden Layer", "Forward Pass"],
    projectMapping: ["neural-network-from-scratch"],
    interviewValue: ["Prove why single-layer perceptrons cannot solve the XOR logic classification task"]
  },
  "activation-functions-dl": {
    id: "activation-functions-dl",
    slug: "activation-functions-dl",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Activation functions",
    description: "Sigmoid, Tanh, ReLU, Softmax, and the importance of non-linearity in deep models.",
    status: "complete",
    whatYouWillLearn: [
      "Mathematical properties of Sigmoid and Tanh",
      "Resolving vanishing gradients using ReLU",
      "Returning probabilities using Softmax",
      "Why non-linear activation shapes are required to stack hidden representation matrices"
    ],
    whyItMatters: "Without non-linear activations, stacking multiple dense layers collapses mathematically into a single linear operation.",
    conceptsCovered: ["Sigmoid Activation", "ReLU Activation", "Softmax Probability", "Non-linearity"],
    projectMapping: ["overfitting-visualizer"],
    interviewValue: ["Prove mathematically that a network without activation functions is equivalent to a single linear layer"]
  },
  "loss-functions-dl": {
    id: "loss-functions-dl",
    slug: "loss-functions-dl",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Loss functions",
    description: "MSE, Binary Cross Entropy, Categorical Cross Entropy, and loss vs validation metrics.",
    status: "complete",
    whatYouWillLearn: [
      "Mean Squared Error (MSE) calculations",
      "Binary Cross Entropy loss for binary targets",
      "Categorical Cross Entropy for multi-class targets",
      "The difference between differentiable Loss functions and non-differentiable Metrics"
    ],
    whyItMatters: "The optimizer adjusts model weights to minimize the loss. Selecting the correct loss determines convergence behavior.",
    conceptsCovered: ["Binary Cross Entropy", "Categorical Cross Entropy", "Differentiable Loss", "Model Metrics"],
    projectMapping: ["neural-network-from-scratch"],
    interviewValue: ["Derive the gradients update equations for Binary Cross Entropy loss"]
  },
  "backpropagation-intuition": {
    id: "backpropagation-intuition",
    slug: "backpropagation-intuition",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Backpropagation intuition",
    description: "Gradients, the chain rule, weight update loops, and learning rates.",
    status: "complete",
    whatYouWillLearn: [
      "Understanding loss gradient vectors",
      "Calculating partial derivatives using the Chain Rule",
      "Backpropagating error values layers-by-layers",
      "Updating weights based on learning rates"
    ],
    whyItMatters: "Backpropagation is the engine that allows neural networks to learn from error outputs.",
    conceptsCovered: ["Gradient Vector", "Chain Rule Math", "Weight Updates", "Learning Rate scale"],
    projectMapping: ["neural-network-from-scratch"],
    interviewValue: ["Calculate weight updates for a simple 3-layer MLP by applying the chain rule manually"]
  },
  "optimizers-dl": {
    id: "optimizers-dl",
    slug: "optimizers-dl",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Optimizers",
    description: "Gradient Descent, SGD, Mini-batch updates, Adam optimization, and learning rate impacts.",
    status: "complete",
    whatYouWillLearn: [
      "Classical batch Gradient Descent limits",
      "Stochastic Gradient Descent (SGD) iterations",
      "Balancing convergence speed using Mini-batch updates",
      "Adaptive gradient updates with Adam optimizer momentum parameters"
    ],
    whyItMatters: "Optimizers adjust how gradients update weights to ensure fast convergence while avoiding local minima.",
    conceptsCovered: ["Stochastic Gradient Descent", "Mini-batch SGD", "Adam Optimizer", "Momentum Parameters"],
    projectMapping: ["mnist-digit-classifier"],
    interviewValue: ["Explain how Adam combines momentum and RMSProp adaptive updates to scale training gradients"]
  },
  "overfitting-regularization": {
    id: "overfitting-regularization",
    slug: "overfitting-regularization",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Overfitting and regularization",
    description: "Dropout, L2 weight decay, early stopping, and train/validation/test partitions.",
    status: "complete",
    whatYouWillLearn: [
      "Identifying overfitting in train/val loss curves",
      "Adding Dropout layers to disable random nodes",
      "Penalizing weights magnitude using L2 regularization",
      "Halting training using Early Stopping thresholds"
    ],
    whyItMatters: "Regularizations force models to learn generalized features instead of memorizing data records.",
    conceptsCovered: ["Dropout Layer", "L2 Regularization", "Early Stopping", "Validation Curves"],
    projectMapping: ["overfitting-visualizer"],
    interviewValue: ["Describe how Dropout operates during training vs inference modes"]
  },
  "embeddings-introduction": {
    id: "embeddings-introduction",
    slug: "embeddings-introduction",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Embeddings introduction",
    description: "One-hot encodings, dense vectors representations, word embeddings, embedding layers, and semantic similarity foundations.",
    status: "complete",
    whatYouWillLearn: [
      "One-Hot encoding vocabulary limits",
      "Projecting sparse codes into continuous dense vectors",
      "Learning semantics using word embedding models (Word2Vec)",
      "Embedding layer lookups mechanics"
    ],
    whyItMatters: "Embeddings capture semantic connections between words, allowing transformers to process text as mathematical vectors.",
    conceptsCovered: ["One-hot Encoding", "Dense Vector representation", "Embedding Layer", "Semantic Space"],
    projectMapping: ["word-embedding-playground"],
    interviewValue: ["Explain how continuous word embeddings resolve the semantic vocabulary limits of one-hot tokens"]
  },
  "sequence-models-introduction": {
    id: "sequence-models-introduction",
    slug: "sequence-models-introduction",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Sequence models introduction",
    description: "Why feedforward MLPs fail on sequences, RNN intuition, LSTM structures, padding, tokenization, and text classification.",
    status: "complete",
    whatYouWillLearn: [
      "Why standard neural networks fail to capture temporal order sequences",
      "Tracking history steps using Recurrent Neural Networks (RNNs)",
      "Controlling gate updates using LSTMs and GRUs",
      "Standard tokenization, padding, and text classification"
    ],
    whyItMatters: "Language is sequential. Sequence models maintain memory representations over time steps to process context.",
    conceptsCovered: ["Recurrent Neurons", "LSTM Gate equations", "Sequence Padding", "Text Classifier"],
    projectMapping: ["simple-rnn-text-classifier"],
    interviewValue: ["Detail the gating mechanics of LSTMs that prevent vanishing gradient errors in long inputs"]
  },
  "cnn-basics": {
    id: "cnn-basics",
    slug: "cnn-basics",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "CNN basics",
    description: "Grid data representations, filters, convolution steps, pooling, and image classification.",
    status: "complete",
    whatYouWillLearn: [
      "Representing grid data as multidimensional arrays",
      "Mapping local visual features using Convolution filters",
      "Reducing dimensionality using Pooling operations",
      "Stacking CNN blocks for image classification"
    ],
    whyItMatters: "CNNs learn spatial hierarchies of features, making them standard for image processing applications.",
    conceptsCovered: ["Convolution Filter", "Feature Map", "Max Pooling", "Spatial Invariance"],
    projectMapping: ["cnn-image-classifier"],
    interviewValue: ["Explain how parameter sharing and local receptive fields scale CNNs vs MLPs for grid inputs"]
  },
  "deep-learning-frameworks": {
    id: "deep-learning-frameworks",
    slug: "deep-learning-frameworks",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "Deep learning frameworks",
    description: "PyTorch vs TensorFlow ecosystems, dataset generators, model architectures, loss targets, training loops, and loading/saving checkpoints.",
    status: "complete",
    whatYouWillLearn: [
      "PyTorch and TensorFlow syntax layouts",
      "Custom Dataset loader class wrappers",
      "Writing training loops from scratch",
      "Saving and reloading network weights checkpoints"
    ],
    whyItMatters: "Frameworks provide autograd engines and GPU acceleration steps required to train large networks.",
    conceptsCovered: ["PyTorch Tensor", "Autograd Engine", "DataLoader", "Training Loop Loop"],
    projectMapping: ["binary-classification-keras"],
    interviewValue: ["Outline a clean PyTorch training loop showing zero_grad, forward, backward, and optimizer steps"]
  },
  "deep-learning-to-transformers": {
    id: "deep-learning-to-transformers",
    slug: "deep-learning-to-transformers",
    trackSlug: "deep-learning-fundamentals",
    moduleSlug: "deep-learning-fundamentals",
    title: "From deep learning to transformers",
    description: "The parallel processing limits of RNNs, the birth of attention, and bridging embeddings to attention layers.",
    status: "complete",
    whatYouWillLearn: [
      "The sequential bottleneck of RNN recurrences (no parallel training)",
      "Why attention scales sequence context without hidden state decays",
      "How token embeddings connect to Attention matrix keys and queries"
    ],
    whyItMatters: "Transformers resolved sequence modeling constraints by replacing recurrences with self-attention, enabling modern LLMs.",
    conceptsCovered: ["Sequential Bottleneck", "Parallel Ingestion", "Self-Attention transition"],
    projectMapping: ["word-embedding-playground"],
    interviewValue: ["Contrast the training speed and context recall characteristics of RNNs vs Self-Attention networks"]
  },

  // Tokenization Submodules
  "what-is-tokenization": {
    id: "what-is-tokenization",
    slug: "what-is-tokenization",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "What Is Tokenization?",
    description: "Learn how raw text is converted into tokens and token IDs before entering an LLM.",
    status: "complete",
    whatYouWillLearn: [
      "Understand what tokens are",
      "Explain token IDs",
      "Describe the LLM input pipeline"
    ],
    whyItMatters: "Tokenization is the entry gate to any language model. A poor tokenizer splits text inefficiently, inflating context window costs and degrading generation accuracy.",
    conceptsCovered: ["Token", "Token ID", "Tokenizer Vocabulary", "Embedding Lookup"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain why raw emojis or spelling variations can inflate token counts",
      "Describe how out-of-vocabulary terms are resolved in tokenizers"
    ],
    detailedExplanation: "Tokenization translates unstructured text into a sequence of discrete integers (tokens) corresponding to indices in the model's embedding matrix. LLMs do not read characters directly. Instead, they operate on these numerical IDs."
  },
  "tokenization-algorithms": {
    id: "tokenization-algorithms",
    slug: "tokenization-algorithms",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Character, Word & Subword Tokenization",
    description: "Compare character-level, word-level, and subword tokenization with simple examples.",
    status: "complete",
    whatYouWillLearn: [
      "Compare tokenizer types",
      "Understand why subwords are used",
      "Identify tokenization trade-offs"
    ],
    whyItMatters: "Modern models use subword splits to balance vocabulary size against context efficiency.",
    conceptsCovered: ["Character Tokenization", "Word Tokenization", "Subword Tokenization"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the OOV bottleneck in word-based tokenizers"
    ]
  },
  "bpe-wordpiece": {
    id: "bpe-wordpiece",
    slug: "bpe-wordpiece",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "BPE, WordPiece & SentencePiece",
    description: "Deep dive into common tokenizer algorithms used by modern NLP and LLM systems.",
    status: "complete",
    whatYouWillLearn: [
      "Explain Byte Pair Encoding",
      "Understand WordPiece",
      "Understand SentencePiece and Unigram"
    ],
    whyItMatters: "BPE is the standard algorithm used by GPT-4 and Llama models to build subword vocabularies.",
    conceptsCovered: ["Byte Pair Encoding", "WordPiece", "SentencePiece"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the merge logic of the Byte Pair Encoding (BPE) algorithm"
    ]
  },
  "token-ids-vocabulary": {
    id: "token-ids-vocabulary",
    slug: "token-ids-vocabulary",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Token IDs, Vocabulary & Embeddings",
    description: "Connect tokens to vocabulary IDs, embeddings, and the transformer input pipeline.",
    status: "complete",
    whatYouWillLearn: [
      "Explain tokenizer vocabulary",
      "Understand token IDs",
      "Connect tokens to embeddings"
    ],
    whyItMatters: "Tokenization ends with IDs; the model starts with embeddings. Understanding this interface is key to understanding neural NLP.",
    conceptsCovered: ["Vocabulary Table", "Embedding Lookup", "Hidden Dimension"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Explain the connection between token IDs and the embedding matrix"
    ]
  },
  "token-cost": {
    id: "token-cost",
    slug: "token-cost",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Token Inflation, Context Window & API Cost",
    description: "Learn why token count affects LLM pricing, context length, latency, and production architecture.",
    status: "complete",
    whatYouWillLearn: [
      "Estimate token usage",
      "Understand token inflation",
      "Optimize prompts for cost"
    ],
    whyItMatters: "Non-English languages can consume up to 4x more tokens for the same sentence, leading to high cost inflation.",
    conceptsCovered: ["Token Inflation", "API Pricing", "Context Limits"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Detail how token inflation affects pricing and context windows in international applications"
    ]
  },
  "rag-agents": {
    id: "rag-agents",
    slug: "rag-agents",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization in RAG & AI Agents",
    description: "Understand how tokenization affects chunking, retrieval, memory, and agent workflows.",
    status: "complete",
    whatYouWillLearn: [
      "Design token-aware RAG chunks",
      "Control agent memory size",
      "Reduce context waste"
    ],
    whyItMatters: "Chunking database documents by characters instead of token counts causes vector search mismatches and context overflows.",
    conceptsCovered: ["Token Chunking", "Agent Loops", "Memory Trimming"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "How does tokenization affect document chunking in RAG pipelines?"
    ]
  },
  "interview-guide": {
    id: "interview-guide",
    slug: "interview-guide",
    trackSlug: "foundation",
    moduleSlug: "tokenization",
    title: "Tokenization Interview Guide",
    description: "Prepare clear interview answers for tokenizer, BPE, token IDs, context window, and cost questions.",
    status: "complete",
    whatYouWillLearn: [
      "Answer tokenization interview questions",
      "Explain BPE clearly",
      "Connect tokenization to production systems"
    ],
    whyItMatters: "Syllabus interviews frequently focus on boundaries and trade-offs of tokenization systems.",
    conceptsCovered: ["Vocabulary Trade-offs", "BPE Merges", "UTF-8 Fallback"],
    projectMapping: ["tokenizer-visualizer-studio"],
    interviewValue: [
      "Defend the choice of a 32k vs 128k vocabulary size to a senior panel"
    ]
  },

  // Context Engineering Submodules
  "what-is-context-window": {
    id: "what-is-context-window",
    slug: "what-is-context-window",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "What is a Context Window?",
    description: "Explore model memory capacities, input/output limits, and token budgets.",
    status: "in-progress",
    whatYouWillLearn: [
      "The architectural boundaries of model context windows",
      "Separating input vs output token allocations",
      "Cost math behind scaling context windows"
    ],
    whyItMatters: "A model context window is a hard limit. Exceeding it throws API errors, while fill bounds degrade retrieval accuracy.",
    conceptsCovered: ["Context Capacity", "Token Limits", "Compute Complexity"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Explain why prompt context complexity scales quadratically with sequence length in standard attention layers"
    ],
    detailedExplanation: "The context window is the maximum sequence length (input + output tokens) that a model can process in a single inference step. In standard transformer architectures, the self-attention layer computes relationship values between every pair of tokens. This results in quadratic O(N^2) time and space complexity, meaning that doubling the sequence length quadruples the GPU memory and processing steps required.",
    interviewQuestions: [
      {
        question: "Explain the 'Lost in the Middle' phenomenon in long context windows.",
        answer: "Studies show that LLMs are much better at retrieving information placed at the absolute beginning or end of a long prompt context. Information buried in the middle of a 32k or 128k token window is often neglected because the attention mechanism distributes its weights too thinly across the sequence."
      }
    ]
  },
  "context-budget-management": {
    id: "context-budget-management",
    slug: "context-budget-management",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Context Budget Management",
    description: "Learn chat history growth, system prompt overheads, and token constraints.",
    status: "in-progress",
    whatYouWillLearn: [
      "Tracking session history tokens inflation",
      "Protecting slots for system instructions",
      "Setting threshold safety margins"
    ],
    whyItMatters: "In multi-turn chat applications, history token usage grows exponentially. Active budget management prevents early failures.",
    conceptsCovered: ["Chat History Token Growth", "System Prompt Allocations", "Safety Thresholds"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Propose a memory architecture that prevents chat session context window exhaustion in heavy enterprise applications"
    ],
    detailedExplanation: "Managing token budgets requires dynamically tracking the length of system prompts, user queries, retrieved RAG context, and active conversation history. If the combined token length approaches the model's limit, the application must apply compression, truncation, or history-trimming policies. This prevents context exhaustion API errors and maintains low latency.",
    interviewQuestions: [
      {
        question: "How do you calculate and reserve space for output tokens in a strict budget plan?",
        answer: "We count the input tokens using a local tokenizer library (like tiktoken) before calling the API. If the limit is C and we want to reserve O tokens for the model's answer, we ensure the input tokens never exceed C - O, dynamically trimming the chat history if needed."
      }
    ]
  },
  "prompt-trimming-strategies": {
    id: "prompt-trimming-strategies",
    slug: "prompt-trimming-strategies",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Prompt Trimming & Memory",
    description: "Implement sliding windows, summarization memory, and truncation logics.",
    status: "in-progress",
    whatYouWillLearn: [
      "Building a sliding window history trimmer",
      "Using model summaries as memory buffers",
      "Trimming older conversation turns based on token limits"
    ],
    whyItMatters: "Trimming context intelligently retains semantic history without wasting API costs on redundant text.",
    conceptsCovered: ["Sliding Window History", "Summarized History Memory", "Token Truncation Logic"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Compare sliding window truncation vs recursive summarization memory in conversational search agents"
    ],
    detailedExplanation: "To prevent history from exhausting the context window, several strategies can be employed. Sliding Window Truncation discards the oldest messages when the token count exceeds a threshold. Recursive Summarization uses a smaller LLM in the background to summarize older turns into a compact summary paragraph, which is appended to the system prompt, preserving history themes in few tokens.",
    interviewQuestions: [
      {
        question: "What are the trade-offs of using sliding windows vs summarization memory?",
        answer: "Sliding windows are cheap and preserve exact message details but completely forget older topics. Summarization memory preserves the general context of older conversations but incurs background API latency/costs and can introduce hallucinated summary states."
      }
    ]
  },
  "sliding-window-conversation": {
    id: "sliding-window-conversation",
    slug: "sliding-window-conversation",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Sliding Window Conversation State",
    description: "Manage dynamic conversation histories using sliding token limits.",
    status: "in-progress",
    whatYouWillLearn: [
      "Track active chat queues",
      "Prune history based on tiktoken indices",
      "Keep system prompts pinned"
    ],
    whyItMatters: "Without dynamic window pruning, conversations crash immediately when crossing token bounds.",
    conceptsCovered: ["Chat history queue", "tiktoken limits", "Pinned system directives"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Describe how to build a token-safe chat queue keeping system inputs pinned"
    ]
  },
  "context-overflow-failures": {
    id: "context-overflow-failures",
    slug: "context-overflow-failures",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Context Overflow Failure Modes",
    description: "Debug context window overflow errors and build automatic repair gates.",
    status: "in-progress",
    whatYouWillLearn: [
      "Diagnose 400 Bad Request errors",
      "Implement prompt compression",
      "Structure fallback models routing"
    ],
    whyItMatters: "Exceeding token limits throws bad request exceptions; developers must catch these safely.",
    conceptsCovered: ["400 Bad Request", "Prompt compression", "API Fallbacks"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Explain how to catch and automatically recover from API context bounds errors"
    ]
  },
  "context-interview": {
    id: "context-interview",
    slug: "context-interview",
    trackSlug: "foundation",
    moduleSlug: "context-engineering",
    title: "Context Engineering in Interviews",
    description: "Answering context limits and search scaling questions in live technical panels.",
    status: "in-progress",
    whatYouWillLearn: [
      "Explaining context compression",
      "Sizing prompt structures",
      "Resolving 'needle in a haystack' retrieval degradation issues"
    ],
    whyItMatters: "System designers must show how they manage prompt structures to optimize costs and latency.",
    conceptsCovered: ["Context Compression", "Haystack Degradation", "Cost Bounds"],
    projectMapping: ["context-window-diagnostics"],
    interviewValue: [
      "Propose strategies to maintain high retrieval accuracy when injecting 100k+ tokens into a context window"
    ],
    detailedExplanation: "Interviewers want to see how you design production setups that remain robust under heavy user interactions. When discussing context windows, emphasize practical limits (lost-in-the-middle, cost constraints) rather than just stating the theoretical limits (e.g., 200k tokens). Explain how you combine local embedding lookups with dynamic prompt builders to structure inputs.",
    interviewQuestions: [
      {
        question: "How do you evaluate if a model is successfully retrieving information from a 100k token window?",
        answer: "We perform a 'Needle in a Haystack' evaluation: we insert a specific fact (the needle) at varying depths (from 0% to 100%) in a large body of random text (the haystack) and query the model to retrieve it. This generates a recall heatmap identifying depth vulnerabilities."
      }
    ]
  },

  // Sampling & Generation Submodules
  "hyperparameter-definitions": {
    id: "hyperparameter-definitions",
    slug: "hyperparameter-definitions",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Hyperparameter Definitions",
    description: "Master Temperature, Top-p, Top-k, Max Tokens, and Penalties.",
    status: "complete",
    whatYouWillLearn: [
      "Defining hyperparameter properties",
      "Controlling model output lengths",
      "Using presence and frequency penalties to prevent word repetitions"
    ],
    whyItMatters: "Tuning parameters transforms a model from a repetitive generator to a creative, balanced engine.",
    conceptsCovered: ["Temperature", "Top-p & Top-k", "Repetition Penalties"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Explain how frequency penalty checks occur during the next-token selection cycle"
    ],
    detailedExplanation: "Hyperparameters control the token selection process at the model's output layer. While the model's weights remain fixed, adjusting hyperparameters like Temperature, Top-p, and penalties modifies the probability distribution of potential next tokens, shifting the output from highly deterministic to highly creative.",
    interviewQuestions: [
      {
        question: "What is the difference between Frequency Penalty and Presence Penalty?",
        answer: "Frequency Penalty penalizes tokens based on how many times they have already appeared in the output, preventing word loops. Presence Penalty penalizes a token if it has appeared at least once, encouraging the model to introduce new topics/words."
      }
    ]
  },
  "softmax-sampling-mechanics": {
    id: "softmax-sampling-mechanics",
    slug: "softmax-sampling-mechanics",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Softmax & Sampling Mechanics",
    description: "Study how raw model logits are turned into output probability distributions.",
    status: "complete",
    whatYouWillLearn: [
      "How Softmax scales model output scores",
      "Scaling the probability curve using Temperature",
      "Pruning vocabulary candidates using Top-p nucleus thresholds"
    ],
    whyItMatters: "Sampling mechanics explain how models choose words, determining creativity vs accuracy.",
    conceptsCovered: ["Softmax Function", "Logits Probability Scaling", "Nucleus Pruning"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Derive the formula for Temperature scaling inside Softmax, explaining why lower temperatures yield flatter, repetitive predictions"
    ],
    detailedExplanation: "The model outputs raw values called logits for every token in the vocabulary. The Softmax function converts these logits into a probability distribution summing to 1. Temperature (T) scales the logits: Logits = Logits / T. When T is low (e.g. 0.1), the differences between logits are amplified, concentrating the probability on the absolute top candidate. When T is high, the distribution flattens, giving lower-ranked tokens a higher chance of selection.",
    interviewQuestions: [
      {
        question: "Explain why Temperature cannot be set to 0 mathematically, and how APIs implement it.",
        answer: "If T = 0, division by zero occurs (Logits / 0). To implement Temperature = 0, APIs bypass Softmax sampling altogether and perform 'greedy decoding', selecting the token with the highest raw logit value."
      }
    ]
  },
  "top-k-top-p": {
    id: "top-k-top-p",
    slug: "top-k-top-p",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Top-k vs Top-p Sampling",
    description: "Compare cumulative distribution thresholds against fixed count cuts.",
    status: "complete",
    whatYouWillLearn: [
      "Define Top-k limits",
      "Explain Top-p cumulative nucleus",
      "Combine K and P limits"
    ],
    whyItMatters: "Dynamic threshold filtering prevents low-probability vocabulary choices from corrupting responses.",
    conceptsCovered: ["Top-k sorting", "Top-p cumulative sorting", "Vocabulary pruning"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Explain how nucleus sampling isolates the contextually relevant vocabulary subset"
    ]
  },
  "frequency-presence-penalty": {
    id: "frequency-presence-penalty",
    slug: "frequency-presence-penalty",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Frequency and Presence Penalty",
    description: "Learn how repetition penalties modify logit states dynamically.",
    status: "complete",
    whatYouWillLearn: [
      "Contrast frequency vs presence penalty",
      "Adjust logits penalty values",
      "Prevent vocabulary loops"
    ],
    whyItMatters: "Penalties prevent models from getting stuck in infinite repeating sentence loops.",
    conceptsCovered: ["Frequency penalty math", "Presence penalty rules", "Repetition prevention"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Detail how repetition penalties degrade or enhance text flow variety"
    ]
  },
  "deterministic-creative": {
    id: "deterministic-creative",
    slug: "deterministic-creative",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Deterministic vs. Creative Generation",
    description: "Determine configurations to obtain stable structured outputs vs. creative copywriting.",
    status: "complete",
    whatYouWillLearn: [
      "Configure JSON settings",
      "Set creative entropy margins",
      "Map seed parameters"
    ],
    whyItMatters: "Different use cases require different setups: databases require deterministic keys; copywriting needs creativity.",
    conceptsCovered: ["Deterministic constraints", "Creative entropy", "Seed repeatability"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Propose hyperparameter combinations for parsing schemas vs generating essays"
    ]
  },
  "sampling-interview": {
    id: "sampling-interview",
    slug: "sampling-interview",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Sampling Interview Guide",
    description: "Answer complex hyperparameters questions in live technical panels.",
    status: "complete",
    whatYouWillLearn: [
      "Explain Temperature = 0 variations",
      "Derive Softmax scaling",
      "Explain seed limits"
    ],
    whyItMatters: "Engineers must defend parameter choices based on cost, latency, and repeatability metrics.",
    conceptsCovered: ["Greedy decoding", "Logit float variations", "GPU parallelism timing"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Defend why Temperature = 0 cannot guarantee exact reproducibility on parallel cluster pools"
    ]
  },
  "deterministic-generation": {
    id: "deterministic-generation",
    slug: "deterministic-generation",
    trackSlug: "foundation",
    moduleSlug: "sampling-generation",
    title: "Deterministic vs. Creative Generation",
    description: "Determine configurations to obtain stable structured outputs vs. creative copywriting.",
    status: "complete",
    whatYouWillLearn: [
      "Configurations for deterministic data extractions",
      "Tuning parameters for creative copywriting tasks",
      "Why multi-GPU clustering can cause slight response variations"
    ],
    whyItMatters: "Enterprise data processors require deterministic JSON structures. Copywriting systems require high entropy.",
    conceptsCovered: ["Deterministic Extraction", "Creative Copywriting Entropy", "Non-Deterministic Runtimes"],
    projectMapping: ["hyperparameter-playground"],
    interviewValue: [
      "Propose configurations to secure maximum determinism when parsing complex data schemas from unstructured logs"
    ],
    detailedExplanation: "In enterprise workloads, obtaining reliable structured data (like JSON) requires high determinism. This is achieved by setting Temperature to 0, using Top-p = 1, and using guided decoding. Conversely, creative tasks require high entropy (higher Temperature, active penalties) to prevent repetitive clichés and encourage diverse vocabulary splits.",
    interviewQuestions: [
      {
        question: "Why can an LLM respond with different outputs even at Temperature = 0 on cloud endpoints?",
        answer: "Modern cloud APIs route queries to large clusters of GPUs executing calculations in parallel. Minor hardware timing differences or out-of-order execution in floating-point operations can cause rounding differences (non-associative float addition: (A + B) + C !== A + (B + C)). This creates tiny logit shifts that can change the chosen token at critical selection points."
      }
    ]
  },

  // Helper function style submodule generation for coming soon/planned lessons
  // 1.4 Prompt Engineering Submodules
  "what-is-prompt-engineering": {
    id: "what-is-prompt-engineering", slug: "what-is-prompt-engineering", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "What is Prompt Engineering?", description: "Learn how prompts act as code to configure large language model behaviors.", status: "complete",
    whatYouWillLearn: ["Explain prompt instructions role", "Setup basic templates", "Configure system roles"],
    whyItMatters: "Systematic prompt structures are the first line of defense to control LLM agent execution constraints.",
    conceptsCovered: ["System directives", "User templates", "Prompt engineering code"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Contrast prompt programming vs code programming in model workflows"]
  },
  "instruction-design": {
    id: "instruction-design", slug: "instruction-design", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Instruction Design", description: "Deconstruct system instructions, delimiters, and target response structures.", status: "complete",
    whatYouWillLearn: ["Use text delimiters", "Write clear constraints", "Optimize instruction paths"],
    whyItMatters: "Clear directives and delimiters isolate untrusted user inputs, preventing parsing errors.",
    conceptsCovered: ["XML Delimiters", "PIN rules", "Directives layouts"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Explain how XML delimiters sandbox user inputs from model system rules"]
  },
  "few-shot-zero-shot": {
    id: "few-shot-zero-shot", slug: "few-shot-zero-shot", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Few-shot and Zero-shot Prompting", description: "Learn when to provide examples in prompts to guide model logic.", status: "complete",
    whatYouWillLearn: ["Structure few-shot examples", "Contrast zero-shot vs few-shot", "Avoid example selection bias"],
    whyItMatters: "Providing clear context examples helps models learn specialized formats without fine-tuning weights.",
    conceptsCovered: ["Few-shot templates", "Zero-shot baselines", "Formatting guides"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Design a type-safe few-shot prompt using markdown list formats"]
  },
  "classification-prompts": {
    id: "classification-prompts", slug: "classification-prompts", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Classification Prompts", description: "Build templates to sort unstructured inputs into categorical buckets.", status: "complete",
    whatYouWillLearn: ["Implement class templates", "Map confidence outputs", "Handle boundary cases"],
    whyItMatters: "Classifiers are the workhorses of AI agent routing pipelines.",
    conceptsCovered: ["Binary labeling", "Intent routing classification", "Threshold rules"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Detail how to structure few-shot examples to isolate scams from normal inputs"]
  },
  "prompt-injection-basics": {
    id: "prompt-injection-basics", slug: "prompt-injection-basics", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Prompt Injection Basics", description: "Learn how users bypass system prompts and how to write basic defenses.", status: "complete",
    whatYouWillLearn: ["Identify system bypasses", "Implement injection filters", "Use XML/JSON isolation tags"],
    whyItMatters: "Adversarial prompts can hijack model logic, leading to server leaks or toxic generations.",
    conceptsCovered: ["System prompt bypasses", "Adversarial text filtering", "Model sandboxing"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Explain three strategies to prevent prompt injection in customer-facing chat forms"]
  },
  "explainable-responses": {
    id: "explainable-responses", slug: "explainable-responses", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Explainable AI Responses", description: "Generate structured thought chains prior to final answers to improve accuracy.", status: "complete",
    whatYouWillLearn: ["Setup Chain-of-Thought (CoT)", "Isolate reasoning outputs", "Verify intermediate steps"],
    whyItMatters: "Requesting reasoning first leverages the transformer's next-token capacity to compile logic before locking final answers.",
    conceptsCovered: ["Chain of Thought", "Reasoning blocks", "Self-reflection steps"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Explain why computing reasoning tokens first decreases classification error rates"]
  },
  "prompt-interview-guide": {
    id: "prompt-interview-guide", slug: "prompt-interview-guide", trackSlug: "foundation", moduleSlug: "prompt-engineering",
    title: "Prompt Engineering Interview Guide", description: "Prepare for senior panels asking about prompt architectures and scaling.", status: "complete",
    whatYouWillLearn: ["Discuss prompt versioning", "Defend fine-tuning vs prompting", "Evaluate prompt regressions"],
    whyItMatters: "Candidates must show that they treat prompts as versioned code blocks rather than text files.",
    conceptsCovered: ["Prompt lifecycle", "Weights fine-tuning vs prompt templates", "Validation sets"],
    projectMapping: ["ai-scam-detector"],
    interviewValue: ["Explain how to evaluate prompt template changes in CI systems"]
  },

  // 1.5 Structured Output Submodules
  "why-raw-text-breaks": {
    id: "why-raw-text-breaks", slug: "why-raw-text-breaks", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Why Raw LLM Text Breaks Apps", description: "Study why trailing commas, markdown ticks, and typos cause crash loops.", status: "complete",
    whatYouWillLearn: ["Explain JSON parse failures", "Analyze JSON structure anomalies", "Identify input drift issues"],
    whyItMatters: "LLM output is statistically generated, meaning minor casing drifts can crash standard JSON parsers.",
    conceptsCovered: ["JSON parsing loops", "Syntax anomalies", "Drift bugs"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Explain why raw markdown blocks cause JSON parse errors in backend API gates"]
  },
  "json-schema-basics": {
    id: "json-schema-basics", slug: "json-schema-basics", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "JSON Schema Basics", description: "Define JSON schema targets to instruct models on required output structures.", status: "complete",
    whatYouWillLearn: ["Write JSON Schemas", "Enforce array formats", "Setup enum constraints"],
    whyItMatters: "Structuring expectations as standard JSON Schemas allows API providers to apply token-level filters.",
    conceptsCovered: ["JSON Schema rules", "Enum bounds", "Array mappings"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Draft a raw JSON schema that restricts model outputs to strict classifications keys"]
  },
  "zod-validation": {
    id: "zod-validation", slug: "zod-validation", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Zod Validation", description: "Validate runtime JSON strings against type-safe TypeScript schemas.", status: "complete",
    whatYouWillLearn: ["Build Zod schemas", "Parse unstructured strings", "Extract validation errors"],
    whyItMatters: "Zod provides runtime shape checking and type inferences for TypeScript applications.",
    conceptsCovered: ["Zod structures", "Safe parsing", "TypeScript integration"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Write a Zod schema validation script that handles malformed model inputs safely"]
  },
  "enum-array-constraints": {
    id: "enum-array-constraints", slug: "enum-array-constraints", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Enum and Array Constraints", description: "Configure complex schema criteria to restrict model choices.", status: "complete",
    whatYouWillLearn: ["Define enum ranges", "Structure nested arrays", "Validate key names"],
    whyItMatters: "Enforcing strict vocabulary lists limits the model's capacity to hallucinate unknown tags.",
    conceptsCovered: ["Enum validation", "Nested array structures", "Tag restrictions"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Explain how enum constraints restrict next-token probabilities during decoding"]
  },
  "retry-repair-strategies": {
    id: "retry-repair-strategies", slug: "retry-repair-strategies", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Retry and Repair Strategies", description: "Design self-correcting middleware that queries models recursively with error details.", status: "complete",
    whatYouWillLearn: ["Build repair prompts", "Track retry counts", "Set timeout gates"],
    whyItMatters: "Rather than throwing errors immediately, applications can ask models to fix their own malformed JSON payloads.",
    conceptsCovered: ["Self-correction loops", "Error log parsing", "Backoff retry caps"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Design a repair loop prompt containing Zod validation error structures"]
  },
  "production-logging": {
    id: "production-logging", slug: "production-logging", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Production Logging & Prompt Versioning", description: "Log parsing failures and manage schema changes over model versions.", status: "complete",
    whatYouWillLearn: ["Log parsing failures", "Version templates", "Monitor schema regressions"],
    whyItMatters: "Tracking schema failure rates maps structural reliability across model API updates.",
    conceptsCovered: ["Error metrics logs", "Semantic versioning", "Log collectors"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Propose a schema version tracking design for logging prompt failures in DataDog"]
  },
  "structured-output-interview": {
    id: "structured-output-interview", slug: "structured-output-interview", trackSlug: "foundation", moduleSlug: "structured-output",
    title: "Structured Output Interview Guide", description: "Defend schema validation designs to senior technical panels.", status: "complete",
    whatYouWillLearn: ["Compare client vs provider modes", "Explain repair overheads", "Settle schema limits"],
    whyItMatters: "Architects must justify client validation vs provider-native structures based on latency and lock-in costs.",
    conceptsCovered: ["JSON mode comparisons", "Network latency overheads", "Lock-in limits"],
    projectMapping: ["structured-output-validator"],
    interviewValue: ["Defend client-side Zod validation vs model-native JSON constraints in multi-model pipelines"]
  },

  // 1.6 Production LLM Processing Submodules
  "batch-processing": {
    id: "batch-processing", slug: "batch-processing", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Batch Processing with LLMs", description: "Learn how to bundle requests into batch jobs to optimize throughput and cost.", status: "coming-soon",
    whatYouWillLearn: ["Define batch formats", "Explain batch API cost benefits", "Schedule offline jobs"],
    whyItMatters: "Batch jobs execute offline, bypassing active rate limits and cutting token costs in half.",
    conceptsCovered: ["Offline batch APIs", "JSONL files formatting", "Async scheduler loops"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Explain the cost benefit of using asynchronous batch endpoints for customer feedback pipelines"]
  },
  "async-queues": {
    id: "async-queues", slug: "async-queues", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Async Queues", description: "Manage task backlogs using queues to prevent server overload.", status: "coming-soon",
    whatYouWillLearn: ["Structure task queues", "Manage queue concurrency", "Handle worker dropouts"],
    whyItMatters: "Buffered queues serialize API request streams, preventing sudden spikes from exhausting model access slots.",
    conceptsCovered: ["Worker thread tasks", "Concurrency pools", "Queue backlogs buffers"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Propose an async queue architecture utilizing Redis for parallel review processing"]
  },
  "rate-limits": {
    id: "rate-limits", slug: "rate-limits", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Rate Limits", description: "Track requests-per-minute (RPM) and tokens-per-minute (TPM) limits.", status: "coming-soon",
    whatYouWillLearn: ["Monitor RPM and TPM limits", "Calculate token consumption", "Avoid rate limit errors"],
    whyItMatters: "API providers enforce strict RPM/TPM bounds; exceeding them causes 429 exceptions.",
    conceptsCovered: ["RPM and TPM boundaries", "Pre-flight token tracking", "429 Rate Limit error codes"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["How do you track token consumption dynamically inside worker threads to prevent 429 errors?"]
  },
  "retry-backoff": {
    id: "retry-backoff", slug: "retry-backoff", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Retry and Backoff", description: "Implement retry loops with exponential backoff and jitter.", status: "coming-soon",
    whatYouWillLearn: ["Write exponential backoff loops", "Add random jitter to queries", "Define max retry limits"],
    whyItMatters: "Exponential backoff delays retries recursively, while jitter prevents synchronized request collisions.",
    conceptsCovered: ["Exponential backoff math", "Jitter random scaling", "Retry gate limits"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Explain why adding randomized jitter is required to prevent thundering herd spikes on rate limits"]
  },
  "cost-tracking": {
    id: "cost-tracking", slug: "cost-tracking", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Cost Tracking", description: "Monitor token spending and calculate unit costs across pipelines.", status: "coming-soon",
    whatYouWillLearn: ["Track token budgets", "Report billing metrics", "Audit high-cost prompts"],
    whyItMatters: "Runaway agent loops can consume thousands of dollars in minutes without real-time tracking safeguards.",
    conceptsCovered: ["Token trackers logs", "Cost caps alerts", "Budget monitoring metrics"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Detail a design to automatically terminate active LLM worker threads if cost thresholds are violated"]
  },
  "human-review": {
    id: "human-review", slug: "human-review", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Human Review Workflow", description: "Add approval interfaces for low-confidence model extractions.", status: "coming-soon",
    whatYouWillLearn: ["Setup fallback review boards", "Route ambiguous tasks", "Collect human corrections"],
    whyItMatters: "Safety-critical actions (financial logs, legal edits) require human verification gates.",
    conceptsCovered: ["Human in the loop (HITL)", "Safety score gates", "Review dashboard routing"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Design an AI task pipeline that routes extractions with confidence scores below 85% to a human reviewer"]
  },
  "production-processing-interview": {
    id: "production-processing-interview", slug: "production-processing-interview", trackSlug: "foundation", moduleSlug: "production-processing",
    title: "Production Processing Interview Guide", description: "Defend batch queue designs to system architecture panels.", status: "coming-soon",
    whatYouWillLearn: ["Scale concurrent workers", "Explain backoff logic", "Audit queue capacities"],
    whyItMatters: "Interviewers look for system scalability choices that remain resilient under massive concurrent traffic.",
    conceptsCovered: ["Scaling worker concurrency", "Resilient backoff patterns", "Queue audit parameters"],
    projectMapping: ["product-review-insight-generator"],
    interviewValue: ["Defend your queue capacity limits and concurrency choices during a system design panel"]
  },

  // 1.7 Embeddings Submodules
  "what-are-embeddings": {
    id: "what-are-embeddings", slug: "what-are-embeddings", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "What are Embeddings?", description: "Understand how text maps to high-dimensional coordinate spaces.", status: "coming-soon",
    whatYouWillLearn: ["Explain dense vectors", "Describe vector spaces", "Map concepts to coordinates"],
    whyItMatters: "Embeddings represent unstructured words as dense numerical maps, enabling mathematical similarity matches.",
    conceptsCovered: ["Dense vectors float arrays", "Vector spaces geometry", "Semantic indexing mappings"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Detail how a text embedding model translates semantic definitions to coordinates"]
  },
  "vector-similarity": {
    id: "vector-similarity", slug: "vector-similarity", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Vector Similarity", description: "Compare Cosine, Dot Product, and L2 distance metrics.", status: "coming-soon",
    whatYouWillLearn: ["Calculate vector angles", "Compare dot products", "Contrast similarity metrics"],
    whyItMatters: "Selecting the wrong similarity metric causes retrieval mismatch errors depending on vector lengths.",
    conceptsCovered: ["Euclidean L2 distances", "Dot products mapping", "Angle cosine similarities"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Compare the mathematical properties and performance differences of L2 distance vs Cosine similarity"]
  },
  "cosine-similarity": {
    id: "cosine-similarity", slug: "cosine-similarity", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Cosine Similarity", description: "Deep dive into Cosine Similarity calculations and normalization.", status: "coming-soon",
    whatYouWillLearn: ["Write Cosine similarity code", "Normalize float vectors", "Verify angle sizes"],
    whyItMatters: "Cosine similarity checks the angle alignment of vectors, making it length-invariant.",
    conceptsCovered: ["Cosine similarity formula", "Vector normalizations math", "Theta alignment angles"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Implement a Cosine similarity function in TypeScript using native array operations"]
  },
  "chunking-embeddings": {
    id: "chunking-embeddings", slug: "chunking-embeddings", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Chunking for Embeddings", description: "Analyze fixed-size, recursive, and semantic document chunking.", status: "coming-soon",
    whatYouWillLearn: ["Implement character chunking", "Setup recursive chunkers", "Evaluate semantic splits"],
    whyItMatters: "Poor chunking cuts sentences in half, causing vector databases to fail to retrieve relevant passages.",
    conceptsCovered: ["Character overlaps", "Recursive token chunking", "Semantic split boundaries"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Explain the trade-offs of fixed-size character chunking vs recursive paragraph chunking in document parsing"]
  },
  "embedding-tradeoffs": {
    id: "embedding-tradeoffs", slug: "embedding-tradeoffs", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Embedding Model Tradeoffs", description: "Compare dimensions sizes, context limits, and cost profiles.", status: "coming-soon",
    whatYouWillLearn: ["Compare dimension sizes", "Audit context limits", "Estimate vector storage"],
    whyItMatters: "Higher dimensions increase recall accuracy but consume significantly more memory and search latency.",
    conceptsCovered: ["Dimensions footprints", "Context limits boundaries", "Vector storage costs"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["How does doubling the embedding dimension size affect vector DB search speeds and query index sizes?"]
  },
  "matching-architecture": {
    id: "matching-architecture", slug: "matching-architecture", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Resume/JD Matching Architecture", description: "Design ATS pipelines that match profiles using similarity scores.", status: "coming-soon",
    whatYouWillLearn: ["Design matching grids", "Plot radar match scores", "Filter low-confidence fits"],
    whyItMatters: "ATS software relies on embeddings to match skills conceptually, ignoring exact spelling variations.",
    conceptsCovered: ["Similarity match grids", "Radar chart visualization datasets", "Resume parsers pipelines"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Detail an ATS parser architecture mapping candidates profiles to job descriptions using cosine vectors"]
  },
  "embeddings-interview": {
    id: "embeddings-interview", slug: "embeddings-interview", trackSlug: "foundation", moduleSlug: "embeddings",
    title: "Embeddings Interview Guide", description: "Prepare for technical interviews focused on vector calculations.", status: "coming-soon",
    whatYouWillLearn: ["Answer similarity questions", "Explain dimensionality issues", "Settle chunk bounds"],
    whyItMatters: "Candidates must show a deep mathematical grasp of vector structures to pass senior ML interviews.",
    conceptsCovered: ["High-dimensional vectors", "Curse of dimensionality math", "Overlap buffer sizing"],
    projectMapping: ["resume-jd-matcher"],
    interviewValue: ["Explain the 'curse of dimensionality' and why distance metrics behave abnormally in 1536+ dimensions"]
  },

  // 1.8 Vector Databases Submodules
  "why-vector-dbs": {
    id: "why-vector-dbs", slug: "why-vector-dbs", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Why Vector Databases Exist", description: "Understand the database limitations that led to dedicated vector stores.", status: "coming-soon",
    whatYouWillLearn: ["Explain search indexing gaps", "Differentiate SQL vs Vector DBs", "Manage dimension scales"],
    whyItMatters: "Traditional indexes (B-Trees) fail to query multidimensional spaces under low latency.",
    conceptsCovered: ["B-Tree limitations", "Vector indexing tables", "High-dimensional searches"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Why do relational databases perform poorly when running nearest-neighbor searches on embedding vectors?"]
  },
  "indexing-ann": {
    id: "indexing-ann", slug: "indexing-ann", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Indexing and ANN Search", description: "Explore Approximate Nearest Neighbor graphs and quantization mechanics.", status: "coming-soon",
    whatYouWillLearn: ["Explain HNSW structures", "Describe Product Quantization", "Trade recall for latency"],
    whyItMatters: "ANN algorithms trade slight search accuracy for massive gains in query latency.",
    conceptsCovered: ["HNSW proximity graphs", "Product Quantization compression", "Accuracy vs speed tradeoff"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["How does Hierarchical Navigable Small World (HNSW) build multi-layer indexes to speed up ANN searches?"]
  },
  "metadata-filtering": {
    id: "metadata-filtering", slug: "metadata-filtering", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Metadata Filtering", description: "Filter search queries using categorical metadata and scalar tags.", status: "coming-soon",
    whatYouWillLearn: ["Implement post-filtering", "Set pre-filtering boundaries", "Avoid index fragmentation"],
    whyItMatters: "Post-filtering can cause results starvation if top matching vectors are excluded by categorical rules.",
    conceptsCovered: ["Pre-filtering pipelines", "Post-filtering bounds", "Metadata index tables"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Contrast pre-filtering vs post-filtering and explain why pre-filtering avoids results starvation"]
  },
  "hybrid-search": {
    id: "hybrid-search", slug: "hybrid-search", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Hybrid Search", description: "Combine sparse keyword search indexes with dense semantic vector lookups.", status: "coming-soon",
    whatYouWillLearn: ["Combine BM25 and embeddings", "Normalize ranking scores", "Tuning hybrid weights"],
    whyItMatters: "Hybrid searches capture both exact keyword terms (product IDs, codes) and conceptual semantic queries.",
    conceptsCovered: ["Sparse BM25 indexes", "Reciprocal Rank Fusion (RRF)", "Hybrid weights tuning"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Explain how Reciprocal Rank Fusion (RRF) merges results from keyword and semantic vector search paths"]
  },
  "search-architecture": {
    id: "search-architecture", slug: "search-architecture", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Product Search Architecture", description: "Design e-commerce search indexes matching queries to catalog tags.", status: "coming-soon",
    whatYouWillLearn: ["Structure search queries", "Configure indexing graphs", "Optimize queries latency"],
    whyItMatters: "Building a latency-optimized search engine requires pre-filtering categories and caching query paths.",
    conceptsCovered: ["E-commerce indexes", "Product tagging pipelines", "Caching vector results"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Design an e-commerce search architecture that handles catalog matches and inventory updates in real-time"]
  },
  "vector-db-failures": {
    id: "vector-db-failures", slug: "vector-db-failures", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Vector DB Failure Modes", description: "Diagnose indexing errors, recall degradation, and memory exhaustion.", status: "coming-soon",
    whatYouWillLearn: ["Analyze recall metrics", "Prevent memory exhaustion", "Setup indexing triggers"],
    whyItMatters: "Indices stored in VRAM can cause server crashes if vector sizes outgrow hardware memory budgets.",
    conceptsCovered: ["Recall degradation rates", "RAM/VRAM consumption trackers", "Dynamic index updates"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Explain how index fragmentation occurs during rapid document upserts and deletes in a vector index"]
  },
  "vector-db-interview": {
    id: "vector-db-interview", slug: "vector-db-interview", trackSlug: "foundation", moduleSlug: "vector-databases",
    title: "Vector DB Interview Guide", description: "Prepare for system architecture interviews focused on vector databases.", status: "coming-soon",
    whatYouWillLearn: ["Compare Pinecone vs Chroma", "Detail HNSW configurations", "Explain hybrid scoring"],
    whyItMatters: "Architects must justify database software choices based on security, hosting models, and cost constraints.",
    conceptsCovered: ["Serverless vector backends", "Self-hosted Chroma/FAISS setups", "Graph index structures"],
    projectMapping: ["semantic-product-search"],
    interviewValue: ["Compare self-hosting Chroma/FAISS indexes against deploying to serverless Pinecone engines"]
  },

  // 1.9 Self-Attention Submodules
  "why-self-attention": {
    id: "why-self-attention",
    slug: "why-self-attention",
    trackSlug: "foundation",
    moduleSlug: "self-attention",
    title: "Why Self-Attention Was Needed",
    description: "Compare recurrent constraints against parallel attention calculations.",
    status: "in-progress",
    whatYouWillLearn: [
      "Explain sequential bottlenecks",
      "Describe recurrence limits",
      "Introduce attention idea"
    ],
    whyItMatters: "RNNs process tokens one-by-one, which blocks parallel GPU training and degrades long-context memory.",
    conceptsCovered: ["Sequential bottlenecks", "Vanishing recurrent gradients", "Parallel attention scaling"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: [
      "Explain the fundamental training limitations of RNNs/LSTMs that led to the attention mechanism"
    ]
  },
  "query-key-value": {
    id: "query-key-value", slug: "query-key-value", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Query, Key and Value", description: "Deconstruct the role of projection matrices in generating Q, K, and V.", status: "in-progress",
    whatYouWillLearn: ["Explain QKV projections", "Verify vector shapes", "Define projection weights"],
    whyItMatters: "Q, K, and V map inputs into separate spaces, allowing models to query context patterns mathematically.",
    conceptsCovered: ["QKV linear projections", "Weights matrices shapes", "Linear mapping transforms"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["Explain the physical analogy of Query, Key, and Value vectors using database terminology"]
  },
  "scaled-dot-product": {
    id: "scaled-dot-product", slug: "scaled-dot-product", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Scaled Dot Product Attention", description: "Derive the mathematical formula of scaled dot-product attention.", status: "in-progress",
    whatYouWillLearn: ["Compute QK^T matrix", "Scale by key dimensions", "Apply softmax functions"],
    whyItMatters: "Scaling scores prevents Softmax outputs from reaching flat regions where gradients vanish.",
    conceptsCovered: ["QK^T dot product math", "Square root key dimension scaling", "Softmax normalizations curves"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["Derive why self-attention values must be scaled by 1/sqrt(dk) to prevent gradient vanishing"]
  },
  "attention-weights": {
    id: "attention-weights", slug: "attention-weights", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Attention Weights", description: "Visualize token attention relationships using heatmaps.", status: "in-progress",
    whatYouWillLearn: ["Render attention heatmaps", "Read attention weights", "Identify semantic ties"],
    whyItMatters: "Attention heatmaps show exactly how much weight the model allocates to surrounding context terms.",
    conceptsCovered: ["Attention weight arrays", "Alignment maps visualizers", "Semantic connection coordinates"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["Explain how to interpret an attention matrix heatmap displaying pronoun coreference ties"]
  },
  "causal-masking": {
    id: "causal-masking", slug: "causal-masking", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Causal Masking", description: "Implement causal mask filters to enforce autoregressive generation constraints.", status: "in-progress",
    whatYouWillLearn: ["Write causal masks", "Prevent future token access", "Verify decoding shapes"],
    whyItMatters: "Decoder-only models must not see future words during training to learn autoregressive prediction rules.",
    conceptsCovered: ["Lower triangular matrices", "Negative infinity logit masks", "Autoregressive constraints"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["How does applying a causal attention mask prevent next-token leakage during parallel batch training?"]
  },
  "multi-head-attention": {
    id: "multi-head-attention", slug: "multi-head-attention", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Multi-head Attention", description: "Split query, key, and value vectors across multiple parallel heads.", status: "in-progress",
    whatYouWillLearn: ["Split vector dimensions", "Run parallel heads attention", "Concatenate heads outputs"],
    whyItMatters: "Multi-head attention lets models attend to different categories of information (e.g. grammar and names) simultaneously.",
    conceptsCovered: ["Parallel attention splits", "Dimensionality splits", "Head outputs concatenation"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["Detail how inputs tensors are split and recombined across Multi-Head Attention blocks"]
  },
  "attention-interview": {
    id: "attention-interview", slug: "attention-interview", trackSlug: "foundation", moduleSlug: "self-attention",
    title: "Attention Interview Guide", description: "Prepare for mathematical questions focused on attention layers.", status: "in-progress",
    whatYouWillLearn: ["Explain sqrt(dk) scaling", "Derive space complexity", "Draw QKV flows"],
    whyItMatters: "Attention math is the most heavily grilled topic in AI engineering design panels.",
    conceptsCovered: ["Scaled dot product formulas", "Quadratic space scales", "Data routing diagrams"],
    projectMapping: ["mini-attention-notebook"],
    interviewValue: ["Write out the full scaled dot-product attention equation, defining every variable dimension"]
  },

  // 1.10 Transformers Submodules
  "transformer-block-overview": {
    id: "transformer-block-overview", slug: "transformer-block-overview", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Transformer Block Overview", description: "Analyze the sequence flow of a decoder-only block.", status: "in-progress",
    whatYouWillLearn: ["Explain block data flow", "Identify layer nodes", "Contrast encoder vs decoder"],
    whyItMatters: "Stacking transformer blocks is what gives models the capacity to represent complex language hierarchies.",
    conceptsCovered: ["Decoder block loops", "Data pipeline steps", "Layer stack designs"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Draw and detail the execution paths of a standard decoder block from input to output logits"]
  },
  "residual-connections": {
    id: "residual-connections", slug: "residual-connections", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Attention + Residual Connection", description: "Understand how skip connections preserve gradient flows.", status: "in-progress",
    whatYouWillLearn: ["Explain skip connections", "Prevent gradient vanishing", "Verify vector addition shapes"],
    whyItMatters: "Residual connections bypass layers directly, preventing gradients from shrinking to zero during backpropagation.",
    conceptsCovered: ["Skip connections logic", "Vanishing gradients prevention", "Tensor addition dimensions"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Explain why residual skip connections are mathematically required to train very deep neural networks"]
  },
  "layernorm": {
    id: "layernorm", slug: "layernorm", trackSlug: "foundation", moduleSlug: "transformers",
    title: "LayerNorm", description: "Deconstruct mean-variance normalization across feature layers.", status: "in-progress",
    whatYouWillLearn: ["Calculate layer statistics", "Compare Pre-LN vs Post-LN", "Analyze scaling weights"],
    whyItMatters: "Layer Normalization stabilizes learning by scaling values to standard distributions at each layer.",
    conceptsCovered: ["Mean-variance normalizations", "Pre-LN vs Post-LN stability", "Normalization weights parameters"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Why does modern decoder architectures (like Llama/GPT) use Pre-LN instead of Post-LN?"]
  },
  "feed-forward-net": {
    id: "feed-forward-net", slug: "feed-forward-net", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Feed Forward Network", description: "Explore multi-layer perceptrons and non-linear activations inside blocks.", status: "in-progress",
    whatYouWillLearn: ["Write FFN projections", "Understand GeLU role", "Map hidden dimension sizes"],
    whyItMatters: "While attention maps connections, the FFN applies non-linear mappings to refine individual token details.",
    conceptsCovered: ["Two-layer MLP projects", "GeLU non-linearities", "Hidden dimension multipliers"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Explain why a non-linear Feed Forward Network (FFN) sublayer is needed in addition to self-attention"]
  },
  "decoder-only": {
    id: "decoder-only", slug: "decoder-only", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Decoder-only Architecture", description: "Analyze GPT/Llama models and causal decoding loops.", status: "in-progress",
    whatYouWillLearn: ["Map autoregressive loops", "Verify causal splits", "Describe output logits projection"],
    whyItMatters: "Modern generative LLMs are almost exclusively decoder-only, utilizing causal masking to generate text.",
    conceptsCovered: ["Autoregressive decoding loop", "Causal splits filters", "Output logits projection matrix"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Explain how a decoder-only LLM generates text one token at a time autoregressively"]
  },
  "transformer-failures": {
    id: "transformer-failures", slug: "transformer-failures", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Transformer Failure Modes", description: "Diagnose gradient explosion, representation collapse, and VRAM leaks.", status: "in-progress",
    whatYouWillLearn: ["Diagnose gradient blowups", "Mitigate training collapse", "Track KV cache VRAM"],
    whyItMatters: "Large scale models suffer from training instabilities and KV Cache memory leaks in production.",
    conceptsCovered: ["Gradient explosions", "Representation collapse metrics", "KV Cache memory logs"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["What is a KV Cache, and how does it optimize generation speed at the cost of VRAM memory?"]
  },
  "transformer-interview": {
    id: "transformer-interview", slug: "transformer-interview", trackSlug: "foundation", moduleSlug: "transformers",
    title: "Transformer Interview Guide", description: "Prepare for engineering interviews focused on transformer architectures.", status: "in-progress",
    whatYouWillLearn: ["Draw block layouts", "Defend Pre-LN choices", "Compare attention types"],
    whyItMatters: "Candidates must be able to sketch out the entire decoder block stack on demand to pass senior interviews.",
    conceptsCovered: ["Decoder block stacking", "Pre-LN normalizations choice", "Attention math maps"],
    projectMapping: ["mini-transformer-block-explainer"],
    interviewValue: ["Draw a block diagram of a decoder layer, showing normalizations, residuals, attention, and FFNs"]
  },

  // 1.11 LLM Evaluation Submodules
  "why-evals-matter": {
    id: "why-evals-matter", slug: "why-evals-matter", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Why LLM Evaluation Matters", description: "Understand the risks of manual verification and prompt updates.", status: "coming-soon",
    whatYouWillLearn: ["Explain evaluation goals", "Contrast unit tests vs evals", "Audit evaluation costs"],
    whyItMatters: "Evaluating prompts manually is slow and fails to detect regressions across edge cases.",
    conceptsCovered: ["Prompt regression risks", "Evals vs unit tests", "Evaluation tokens costs"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["Why is automated prompt evaluation essential before releasing prompt updates to production?"]
  },
  "golden-datasets": {
    id: "golden-datasets", slug: "golden-datasets", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Golden Datasets", description: "Curate representative datasets of user prompts and ideal answers.", status: "coming-soon",
    whatYouWillLearn: ["Structure golden test sets", "Gather edge case prompts", "Maintain test data hygiene"],
    whyItMatters: "An evaluation suite is only as good as the prompts and edge cases stored in its golden dataset.",
    conceptsCovered: ["Golden evaluation sets", "Edge case collections", "Test dataset curation"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["How do you compile a golden dataset that represents real user queries and edge cases?"]
  },
  "eval-metrics": {
    id: "eval-metrics", slug: "eval-metrics", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Accuracy, Precision and Recall", description: "Measure accuracy on classifications and structured completions.", status: "coming-soon",
    whatYouWillLearn: ["Calculate precision scores", "Evaluate recall performance", "Classify confusion matrices"],
    whyItMatters: "Traditional string overlap metrics fail to measure conceptual accuracy in open-ended generations.",
    conceptsCovered: ["Classification accuracy metrics", "Precision-Recall balances", "Confusion matrix logs"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["Why do traditional NLP metrics (like BLEU or ROUGE) fail when evaluating LLM summaries?"]
  },
  "faithfulness-hallucinations": {
    id: "faithfulness-hallucinations", slug: "faithfulness-hallucinations", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Faithfulness and Hallucination Checks", description: "Detect hallucinated statements in RAG outputs using source references.", status: "coming-soon",
    whatYouWillLearn: ["Detect hallucinations", "Calculate faithfulness metrics", "Verify context grounding"],
    whyItMatters: "Preventing silent hallucinations is the number one requirement for enterprise RAG platforms.",
    conceptsCovered: ["Hallucination metrics", "Faithfulness scoring checks", "Context grounding validation"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["Detail how you calculate a faithfulness score by comparing model output claims against RAG context"]
  },
  "llm-as-a-judge": {
    id: "llm-as-a-judge", slug: "llm-as-a-judge", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "LLM-as-a-Judge", description: "Design LLM evaluation templates with robust grading rubrics.", status: "coming-soon",
    whatYouWillLearn: ["Write grading rubrics", "Minimize judge model bias", "Validate judge scores"],
    whyItMatters: "Using larger models to grade completions allows automated evaluation of open-ended conversational text.",
    conceptsCovered: ["Judge rubrics formatting", "Order and casing biases", "Inter-annotator agreement statistics"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["What are the biases of the LLM-as-a-Judge pattern, and how do you mitigate order or length bias?"]
  },
  "regression-cicd": {
    id: "regression-cicd", slug: "regression-cicd", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Regression Testing in CI/CD", description: "Integrate evaluation checks into automated deployment pipelines.", status: "coming-soon",
    whatYouWillLearn: ["Write CLI eval scripts", "Integrate evals with GitHub Actions", "Block regressive commits"],
    whyItMatters: "Automated evaluations running on git commits block prompt updates that degrade generation quality.",
    conceptsCovered: ["Vitest eval runners", "GitHub Actions test runs", "Commit checker blocks"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["How do you set up an evaluation step in a GitHub Actions pipeline that blocks merging if accuracy drops?"]
  },
  "eval-interview": {
    id: "eval-interview", slug: "eval-interview", trackSlug: "foundation", moduleSlug: "llm-evaluation",
    title: "Evaluation Interview Guide", description: "Prepare for engineering interviews focused on evaluation systems.", status: "coming-soon",
    whatYouWillLearn: ["Defend evaluation metrics", "Explain LLM-as-a-judge biases", "Scale evaluations cost-effectively"],
    whyItMatters: "Candidates must show how they measure system performance and contain API test expenditures at scale.",
    conceptsCovered: ["Evaluation metric defenses", "Judge model compromises", "Cost containment bounds"],
    projectMapping: ["llm-evaluation-lab"],
    interviewValue: ["How do you balance evaluation accuracy, execution time, and API token costs in automated pipelines?"]
  }
};
