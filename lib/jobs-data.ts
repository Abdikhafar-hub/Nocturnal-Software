export type JobType = "Full-time" | "Contract" | "Internship"
export type LocationType = "Remote" | "Hybrid" | "On-site"

export interface Job {
  id: string
  title: string
  location: LocationType
  type: JobType
  summary: string
  responsibilities: string[]
  requiredSkills: string[]
  niceToHaveSkills: string[]
  successMetrics: string[]
  toolsAndTech: string[]
  growthOpportunities: string[]
}

export const jobs: Job[] = [
  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    location: "Remote",
    type: "Full-time",
    summary: "Design and maintain cloud infrastructure, CI/CD pipelines, and deployment systems. Ensure system reliability, scalability, and security for our AI-driven software solutions.",
    responsibilities: [
      "Design and manage cloud infrastructure across AWS, Azure, or GCP",
      "Build and maintain CI/CD pipelines for automated deployments",
      "Implement infrastructure as code using Terraform, CloudFormation, or similar",
      "Monitor system performance, reliability, and security",
      "Automate deployment, scaling, and maintenance processes",
      "Ensure compliance with security best practices and standards",
      "Troubleshoot infrastructure issues and optimize costs",
      "Collaborate with development teams to support their infrastructure needs",
    ],
    requiredSkills: [
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Understanding of CI/CD principles and practices",
      "Familiarity with infrastructure as code (Terraform, CloudFormation, Ansible)",
      "Experience with Linux and shell scripting",
      "Understanding of networking and security fundamentals",
    ],
    niceToHaveSkills: [
      "Experience with Kubernetes orchestration and management",
      "Knowledge of monitoring and logging tools (Prometheus, Grafana, CloudWatch)",
      "Understanding of serverless architectures",
      "Experience with GitOps practices",
      "Familiarity with multi-cloud deployments",
      "Knowledge of disaster recovery and backup strategies",
    ],
    successMetrics: [
      "Maintain high system uptime (99.9%+) and reliability",
      "Automate deployment and scaling processes effectively",
      "Ensure security and compliance standards are met",
      "Optimize infrastructure costs while maintaining performance",
      "Support development teams with timely infrastructure solutions",
      "Reduce deployment time and improve developer productivity",
    ],
    toolsAndTech: [
      "Cloud Platforms: AWS, Azure, GCP",
      "Containers: Docker, Kubernetes, Docker Compose",
      "CI/CD: GitHub Actions, GitLab CI, Jenkins, CircleCI",
      "IaC: Terraform, CloudFormation, Ansible, Pulumi",
      "Monitoring: Prometheus, Grafana, CloudWatch, Datadog",
      "Scripting: Bash, Python, PowerShell",
    ],
    growthOpportunities: [
      "Advance to Senior Infrastructure Engineer or Cloud Architect",
      "Specialize in specific cloud platforms or technologies",
      "Lead infrastructure projects and initiatives",
      "Mentor junior infrastructure engineers",
      "Contribute to infrastructure best practices and standards",
      "Explore emerging technologies like edge computing and serverless",
    ],
  },
  {
    id: "sales-marketing-specialist",
    title: "Sales and Marketing Specialist",
    location: "Hybrid",
    type: "Full-time",
    summary: "Drive business growth by developing and executing sales and marketing strategies. Build relationships with clients, promote our AI services, and help scale our business.",
    responsibilities: [
      "Develop and execute marketing strategies to promote AI services",
      "Identify and pursue new business opportunities and leads",
      "Build and maintain relationships with potential and existing clients",
      "Create compelling marketing content (blogs, case studies, social media)",
      "Manage sales pipeline and track performance metrics",
      "Conduct product demonstrations and client presentations",
      "Collaborate with technical team to understand and communicate product capabilities",
      "Attend industry events, conferences, and networking opportunities",
      "Analyze market trends and competitor activities",
    ],
    requiredSkills: [
      "Strong communication and presentation skills",
      "Experience in B2B sales or marketing, preferably in tech/AI sector",
      "Ability to understand and explain technical concepts to non-technical audiences",
      "Proficiency in CRM tools and sales processes",
      "Strong networking and relationship-building abilities",
      "Basic understanding of AI/ML technologies and their business applications",
    ],
    niceToHaveSkills: [
      "Experience with digital marketing tools (Google Ads, LinkedIn Ads, SEO)",
      "Content creation skills (writing, video, design)",
      "Knowledge of marketing automation platforms",
      "Experience in SaaS or software services sales",
      "Understanding of AI industry trends and use cases",
      "Multilingual capabilities",
    ],
    successMetrics: [
      "Meet or exceed sales targets and revenue goals",
      "Generate qualified leads and convert them to customers",
      "Build strong client relationships leading to repeat business",
      "Create effective marketing campaigns with measurable ROI",
      "Contribute to brand awareness and market presence",
      "Maintain accurate sales forecasts and pipeline management",
    ],
    toolsAndTech: [
      "CRM: Salesforce, HubSpot, Pipedrive",
      "Marketing: Google Analytics, Google Ads, LinkedIn Ads",
      "Content: WordPress, Canva, Adobe Creative Suite",
      "Communication: Slack, Zoom, Microsoft Teams",
      "Analytics: Google Analytics, Mixpanel, Hotjar",
      "Email Marketing: Mailchimp, SendGrid, ConvertKit",
    ],
    growthOpportunities: [
      "Advance to Sales Manager or Marketing Manager",
      "Specialize in specific industries or market segments",
      "Lead sales and marketing teams",
      "Develop expertise in AI/ML market positioning",
      "Build a strong network in the tech industry",
      "Contribute to strategic business development initiatives",
    ],
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    location: "Hybrid",
    type: "Full-time",
    summary: "Develop and deploy AI/ML models that solve real-world problems. Work on cutting-edge projects from research to production, building intelligent systems that drive business value.",
    responsibilities: [
      "Design and implement machine learning models for various applications",
      "Preprocess and analyze data for ML applications",
      "Deploy ML models to production environments with proper monitoring",
      "Optimize model performance, accuracy, and efficiency",
      "Collaborate with data scientists, engineers, and product teams",
      "Stay updated with latest AI/ML research and trends",
      "Document models, experiments, and best practices",
      "Participate in code reviews and maintain ML codebase quality",
    ],
    requiredSkills: [
      "Strong foundation in machine learning and deep learning",
      "Proficiency in Python and ML libraries (TensorFlow, PyTorch, scikit-learn)",
      "Understanding of data preprocessing and feature engineering",
      "Experience with model evaluation and validation techniques",
      "Knowledge of statistics and probability",
      "Familiarity with version control (Git) and software development practices",
    ],
    niceToHaveSkills: [
      "Experience with NLP or computer vision applications",
      "Knowledge of MLOps practices and tools",
      "Familiarity with cloud ML services (AWS SageMaker, Azure ML, GCP Vertex AI)",
      "Experience with model deployment and serving (FastAPI, Flask, TensorFlow Serving)",
      "Research publications or contributions to ML community",
      "Understanding of model interpretability and explainability",
    ],
    successMetrics: [
      "Develop models that meet accuracy and performance requirements",
      "Successfully deploy models to production with proper monitoring",
      "Contribute to ML best practices and documentation",
      "Stay current with ML research and apply new techniques effectively",
      "Collaborate effectively with cross-functional teams",
      "Deliver ML solutions that drive measurable business value",
    ],
    toolsAndTech: [
      "Languages: Python, R",
      "ML Frameworks: TensorFlow, PyTorch, scikit-learn, XGBoost, LightGBM",
      "Data Processing: Pandas, NumPy, Spark, Dask",
      "Deployment: Docker, Kubernetes, FastAPI, Flask, TensorFlow Serving",
      "Cloud ML: AWS SageMaker, Azure ML, GCP Vertex AI",
      "MLOps: MLflow, Weights & Biases, Kubeflow",
    ],
    growthOpportunities: [
      "Advance to Senior ML Engineer or ML Architect",
      "Lead ML research initiatives and projects",
      "Specialize in specific AI domains (NLP, CV, Reinforcement Learning, etc.)",
      "Present at conferences and publish research papers",
      "Build ML platform and infrastructure",
      "Mentor junior ML engineers and data scientists",
    ],
  },
]

