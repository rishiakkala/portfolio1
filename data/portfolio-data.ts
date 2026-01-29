export interface SkillCategory {
    design: string[];
    tools: { category: string; items: string[] }[];
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    location?: string;
    focusAreas?: string;
    notableWork?: string;
    reflection?: string;
    coursework?: string;
    isPresent?: boolean;
}

export interface ImpactBlock {
    title: string;
    how: string[];
    outcome: string[];
}

export interface Experience {
    role: string;
    organization: string;
    organizationLink?: string;
    period: string;
    framing: string;
    systemFocus: string;
    impactBlocks: ImpactBlock[];
    learnings: string[];
}

export interface Project {
    title: string;
    thesis: string;
    description: string;
    features: string[];
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Publication {
    title: string;
    focus: string;
    venue: string;
    contribution: string;
    year: string;
    link?: string;
}

export const portfolioData = {
    hero: {
        name: "Rishi Akkala",
        role: "AI/ML Engineer & Researcher",
        tagline: "Building intelligent systems that solve real-world problems",
    },

    about: {
        paragraphs: [
            "I build AI systems centered around RAG, agentic workflows, and intelligent orchestration.",
            "My work focuses on designing end-to-end pipelines where language models interact with data, tools, and other models to solve real problems. Through projects spanning RAG-based applications, conversational agents, and ML-driven systems, I aim to build solutions that are scalable, robust, and grounded in practical constraints."
        ],
        principles: [
            "Design retrieval before generation",
            "Treat agents as systems, not scripts",
            "Measure failure modes, not just accuracy"
        ],
        metrics: [
            { label: "Publications", value: "1+" },
            { label: "Projects Built", value: "10" },
            { label: "Achievements", value: "5+" }
        ]
    },

    skills: {
        design: [
            "RAG pipelines for knowledge-grounded AI",
            "Agent workflows for task planning and automation",
            "Evaluation systems for reliability and failure analysis",
            "Data pipelines for ingestion, transformation, and retrieval",
            "Backend services for AI-driven applications",
            "Deployment architectures for scalable systems",
        ],
        tools: [
            { category: "Programming", items: ["Python", "Java", "C", "R", "Bash"] },
            { category: "Data & Databases", items: ["MySQL", "MongoDB", "Pandas", "NumPy", "Power BI", "Apache Spark"] },
            { category: "Machine Learning & AI", items: ["TensorFlow", "Scikit-learn", "LangChain"] },
            { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "Node.js", "Flask"] },
            { category: "Tools & DevOps", items: ["Git", "GitHub", "CI/CD", "API Integration"] },
            { category: "Cloud", items: ["AWS", "GCP"] },
        ],
    } as SkillCategory,

    education: [
        {
            degree: "Bachelor of Technology in Computer Engineering (Artificial Intelligence)",
            institution: "Amrita Vishwa Vidyapeetham",
            year: "2022 - Present",
            location: "Amaravati, Andhra Pradesh",
            focusAreas: "Machine Learning, Data Structures, AI Systems, Distributed Computing",
            notableWork: "AI/ML projects, research-oriented coursework, system-level implementations",
            reflection: "This phase shaped my interest in system-level AI and real-world constraints.",
            isPresent: true,
        },
        {
            degree: "Senior Secondary Education",
            institution: "Sri Chaitanya College",
            year: "2020 - 2022",
            location: "Hyderabad, India",
            reflection: "Established strong analytical foundations in mathematics and logical reasoning.",
        },
    ] as Education[],

    experience: [
        {
            role: "Aircraft Detection Using YOLOV8",
            organization: "Defence Research and Development Laboratory (DRDL) - DRDO",
            period: "May 2025 - June 2025",
            framing: "Mission-critical computer vision system under real-world constraints",
            systemFocus: "Real-time Computer Vision",
            impactBlocks: [
                {
                    title: "Enabled real-time aircraft detection for defense imagery",
                    how: [
                        "Designed and trained YOLOv8 models on 10,000+ diverse images and videos",
                        "Led a 5-member cross-functional team"
                    ],
                    outcome: [
                        "Achieved 92% accuracy",
                        "Delivered 2 weeks ahead of schedule"
                    ]
                }
            ],
            learnings: [
                "Dataset quality mattered more than model complexity",
                "Observability was critical for real-time CV systems"
            ]
        },
        {
            role: "Analysing Income Statement with LLM",
            organization: "Infosys Springboard",
            period: "Nov 2024 - Jan 2025",
            framing: "Production-oriented LLM system for financial document understanding",
            systemFocus: "LLM Applications & Automation",
            impactBlocks: [
                {
                    title: "Automated analysis of complex financial datasets",
                    how: [
                        "Built an AI-powered analyzer with LangChain and Mistral API",
                        "Designed a Streamlit interface supporting 100+ daily queries"
                    ],
                    outcome: [
                        "60% reduction in manual effort for 500+ documents",
                        "Accelerated multi-departmental decision making"
                    ]
                }
            ],
            learnings: [
                "Prompt calibration is more effective than larger context windows for finance",
                "Data sanitation at the ingestion layer prevents hallucination"
            ]
        },
    ] as Experience[],

    projects: [
        {
            title: "Multi-Agent Orchestration Framework (DOTG)",
            thesis: "Coordinating autonomous agents under real-world constraints",
            description: "A modular framework for orchestrating multiple AI agents capable of task decomposition, tool execution, and recovery-aware coordination in complex workflows.",
            features: [
                "Designed dynamic task decomposition and agent-to-agent coordination mechanisms",
                "Implemented tool execution pipelines with failure handling, retries, and fallback logic",
                "Built extensible agent interfaces to support evaluation, logging, and orchestration strategies",
                "Emphasized reliability and observability in long-running agent workflows"
            ],
            technologies: ["Python", "LangChain", "OpenAI API"],
            github: "https://github.com/rishiakkala/DOTG",
        },
        {
            title: "Aircraft Detection Using YOLOv8",
            thesis: "Real-time computer vision system for aircraft detection at scale",
            description: "An end-to-end object detection pipeline built for high-accuracy aircraft detection across diverse aerial imagery and video streams.",
            features: [
                "Trained and optimized YOLOv8 models on 10,000+ diverse images and video frames",
                "Achieved ~92% detection accuracy under varying environmental conditions",
                "Designed real-time inference workflows suitable for operational deployment",
                "Focused on dataset quality, augmentation, and evaluation under real-world constraints"
            ],
            technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
            github: "https://github.com/rishiakkala/Aircraft-Detection-Using-YOLOv8",
        },
        {
            title: "Analysing Income Statements with LLMs",
            thesis: "LLM-powered system for automated financial document understanding",
            description: "An AI-driven application that extracts, summarizes, and answers natural language queries over financial income statements using large language models.",
            features: [
                "Built a document ingestion and parsing pipeline for structured financial data",
                "Implemented LLM-based extraction and summarization using LangChain and Mistral API",
                "Reduced manual analysis effort by ~60% across 500+ financial documents",
                "Developed a Streamlit interface supporting 100+ natural language queries per day"
            ],
            technologies: ["Python", "LangChain", "Mistral API", "Streamlit"],
            github: "https://github.com/rishiakkala/Analysing_Income_Statement_with_LLM",
        },
        {
            title: "Instrukt AI Agents",
            thesis: "Modular terminal-first AI agent environment",
            description: "A terminal-driven AI agent environment enabling creation, instruction, and orchestration of modular AI agents.",
            features: [
                "Built a terminal-based AI system for orchestrating agent workflows",
                "Designed extensible agent interfaces to attach tools and document indexes",
                "Created an agent runtime that leverages secure containers (like Docker)",
                "Enabled retrieval and question-answering via indexed data within the environment"
            ],
            technologies: ["Python", "LangChain", "Textual"],
            github: "https://github.com/rishiakkala/Instrukt-AI-Agents",
        },
        {
            title: "NFT TrustScore: Credibility Scoring for NFT Assets",
            thesis: "On-chain + off-chain analysis for NFT risk and trust assessment",
            description: "A system that evaluates the trustworthiness of NFT assets by analyzing smart contract behavior, transaction history, creator signals, and marketplace metadata to generate a unified trust score.",
            features: [
                "Designed a feature-driven trust scoring pipeline combining on-chain transaction metrics and off-chain metadata",
                "Engineered signals such as wallet behavior, ownership dispersion, trading velocity, and contract activity",
                "Implemented scoring logic to flag potential scams, wash trading, and low-credibility assets",
                "Built a modular architecture to support new risk signals and scoring strategies"
            ],
            technologies: ["Python", "Web3 / Blockchain APIs", "Pandas", "Scoring & Heuristic Modeling"],
            github: "https://github.com/rishiakkala/NFT_TrustScore",
        },
        {
            title: "Hybrid Movie Recommendation System",
            thesis: "Collaborative filtering + deep learning for personalized recommendations at scale",
            description: "A hybrid recommendation engine that combines collaborative filtering techniques with deep learning models to deliver accurate and personalized movie recommendations.",
            features: [
                "Implemented user–item collaborative filtering using matrix factorization techniques",
                "Integrated deep learning models to capture non-linear user preference patterns",
                "Designed a hybrid strategy to mitigate cold-start problems",
                "Evaluated models using RMSE and MSE on benchmark datasets"
            ],
            technologies: ["Python", "Apache Spark / PySpark", "Deep Learning", "MovieLens"],
            github: "https://github.com/rishiakkala/Hybrid-Movie-Recommendation-System-using-Collaborative-Filtering-and-Deep-Learning",
        }
    ] as Project[],

    publications: [
        {
            title: "Enhanced Classification of Migraine Headaches: Leveraging Machine Learning, Deep Learning, and Bayesian Networks with Data Augmentation",
            focus: "Research Focus · Medical AI · Classification · Bayesian Modeling",
            venue: "International Conference on Artificial Intelligence and Data Engineering (AIDE)",
            contribution: "Proposed a hybrid ML–DL–Bayesian framework with data augmentation to improve migraine classification on limited clinical datasets.",
            year: "May 2025",
            link: "https://ieeexplore.ieee.org/document/10987334",
        },
    ] as Publication[],

    contact: {
        email: "rishiakkala6@gmail.com",
        github: "https://github.com/rishiakkala",
        linkedin: "https://linkedin.com/in/rishiakkala",
        instagram: "https://www.instagram.com/rishiakkala/",
        resume: "https://drive.google.com/file/d/1KbpizEmTV02-ZRA7sxp5D_45vzjzaPqV/view?usp=sharing",
    },
};
