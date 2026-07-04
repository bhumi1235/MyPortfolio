export const personal = {
  name: 'Bhumika Saxena',
  title: 'Software Engineer & AI/ML Developer',
  tagline: 'Building production backend systems and LLM tooling that ships.',
  email: 'bhumikasaxena4590@gmail.com',
  phone: '+91-91703 40834',
  // Replace these with your actual profile URLs
  github: 'https://github.com/bhumi1235',
  linkedin: 'https://www.linkedin.com/in/bhumika-saxena1/',
  leetcode: 'https://leetcode.com/u/bhumika312/',
  resumePath: '/Bhumika_Amazon_Resume (1).pdf',
}

export const projects = [
  {
    id: 'token-engine',
    name: 'Token Engine',
    subtitle: 'LLM Context Optimization Framework',
    year: '2026',
    featured: true,
    summary:
      'A framework-agnostic engine that slashes LLM token consumption without sacrificing response quality — semantic chunking, embedding retrieval, and adaptive task planning under one decoupled interface.',
    highlights: [
      '65.5% reduction in LLM token usage at 470ms end-to-end latency',
      'Semantic chunking + embedding-based retrieval via Sentence Transformers',
      'Adaptive task planner dynamically adjusts context budget per request',
      'Decoupled interface layer — FastAPI, MCP, LangChain, CrewAI — all atop one core engine',
      'Added Claude Desktop and Cursor MCP support without modifying the optimizer or embedding logic',
    ],
    tech: ['Python', 'FastAPI', 'Groq API', 'Sentence Transformers', 'Docker', 'MCP', 'GitHub Actions'],
    github: 'https://github.com/bhumi1235/Dev-tools-File-optimizer-V1',
    demo: null,   // PLACEHOLDER — add demo URL if available
  },
  {
    id: 'async-pipeline',
    name: 'Async Transaction Processing Pipeline',
    subtitle: 'AI-Powered Financial Data System',
    year: '2026',
    featured: false,
    summary:
      'An async financial data pipeline that handles cleaning, anomaly detection, and LLM-based classification — returning non-blocking job responses while workers process in the background.',
    highlights: [
      'Non-blocking REST API with Celery workers and Redis broker',
      'Persistent job-state tracking in PostgreSQL across pipeline stages',
      'Batched Gemini API classification with exponential-backoff retry logic',
      'Scaling design: AWS S3 for object storage, PgBouncer for connection pooling, Redis caching',
    ],
    tech: ['Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Docker', 'Gemini API'],
    github: 'https://github.com/bhumi1235/ai-transaction-processing-pipeline',
    demo: null,
  },
  {
    id: 'apex-intelligence',
    name: 'Apex Intelligence',
    subtitle: 'AI-Powered Formula 1 Race Intelligence Platform',
    year: '2026',
    featured: false,
    summary:
      'A full-stack F1 race intelligence platform combining an XGBoost prediction pipeline, a counterfactual race simulator, and a five-pillar driver Skill Score system with full explainability.',
    highlights: [
      'XGBoost pipeline trained on 2020–2025 race, driver, and circuit data',
      'What-If Simulator re-runs race outcomes with grid changes, DNFs, and weather — outputs a Chaos Index',
      'Five-pillar driver Skill Score with per-circuit model confidence and feature importance',
      'Full-stack: FastAPI backend, Next.js + TypeScript frontend, Dockerized deployment',
    ],
    tech: ['Python', 'TypeScript', 'Next.js', 'FastAPI', 'XGBoost', 'Docker'],
    github: 'https://github.com/bhumi1235/Apex_Intelligence-Formula-1-',
    demo: null,
  },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Black Cube Solutions',
    location: 'Dubai (Remote)',
    period: 'Jan 2026 – Jun 2026',
    tech: ['Node.js', 'Express.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git'],
    bullets: [
      'Shipped 50+ production REST APIs across 3 enterprise systems as a core engineer in a 2–3 person team, owning design through deployment.',
      'Designed auth and RBAC systems from ambiguous requirements, enabling role-based workflows across all platforms.',
      'Designed PostgreSQL schemas from scratch for 3 products and optimized MongoDB queries under high-frequency load.',
      'Built the Class Plus frontend end-to-end in Next.js/TypeScript — from database to UI.',
      'Coordinated across 11 repositories with continuous code review and debugging over a 6-month engagement.',
    ],
  },
]

export const skills = {
  Languages: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C/C++'],
  'Backend & Databases': ['FastAPI', 'Node.js', 'Express.js', 'Next.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'Celery', 'Cloudinary'],
  'AI / ML': ['PyTorch', 'XGBoost', 'Scikit-learn', 'Sentence Transformers', 'Pandas', 'NumPy'],
  'Core CS': ['Data Structures & Algorithms', 'System Design', 'Object-Oriented Design', 'Operating Systems', 'Computer Networks'],
  'Developer Tools': ['Git', 'Docker', 'GitHub Actions', 'Postman', 'Vercel', 'Railway', 'VS Code'],
}

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'IMS Engineering College, Ghaziabad',
  period: '2023 – 2027',
  cgpa: '8.5 / 10',
  specialization: 'Artificial Intelligence & Machine Learning',
}

export const achievements = [
  {
    title: 'Smart India Hackathon 2025 — Grand Finalist',
    description: 'Built a disaster response platform and represented the institute at the national grand finale — one of India\'s largest student hackathons.',
    icon: 'trophy',
  },
  {
    title: 'President, GeeksforGeeks Student Chapter',
    description: 'Led the chapter by organizing coding contests, technical workshops, and peer-learning sessions on data structures, algorithms, and software development.',
    icon: 'star',
  },
]
