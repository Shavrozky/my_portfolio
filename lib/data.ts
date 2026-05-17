import {
  BrainCircuit,
  Camera,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Mail,
  MonitorDot,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";

export const identity = {
  name: "Hallo, Saya Muhammad Rizky Suryanata",
  role: "AI Engineer",
  tagline: "Building practical AI systems for real-world operations.",
  bio: "I design and build AI-powered digital products focused on computer vision, LLM workflows, operational monitoring, and production-ready web applications.",
  email: "hello@example.com",
};

export const navItems = [
  { label: "Home", href: "#home", translationKey: "navHome" },
  { label: "About", href: "#about", translationKey: "navAbout" },
  { label: "Skills", href: "#skills", translationKey: "navSkills" },
  { label: "Projects", href: "#projects", translationKey: "navProjects" },
  { label: "Experience", href: "#experience", translationKey: "navExperience" },
  { label: "Education", href: "#education", translationKey: "navEducation" },
  { label: "Testimonials", href: "#recommendations", translationKey: "navTestimonials" },
  { label: "Contact", href: "#contact", translationKey: "navContact" },
] as const;

export const focusAreas = [
  "Computer Vision",
  "LLM Systems",
  "AI Products",
  "Fullstack Apps",
];

export const stats = [
  { label: "AI Projects", value: "12+", icon: BrainCircuit },
  { label: "Fullstack Apps", value: "18+", icon: Code2 },
  { label: "Deployments", value: "8+", icon: Cloud },
  { label: "Research Prototypes", value: "15+", icon: Sparkles },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    icon: ServerCog,
    skills: ["Node.js", "Express", "FastAPI", "Elysia", "REST API"],
  },
  {
    category: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: ["Python", "Computer Vision", "LLM", "RAG", "Hugging Face", "OpenAI-compatible API"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "Drizzle ORM"],
  },
  {
    category: "DevOps / Deployment",
    icon: Cloud,
    skills: ["Docker", "Vercel", "Cloud Run", "VPS", "Nginx", "GitHub Actions"],
  },
  {
    category: "Tools",
    icon: MonitorDot,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Linux"],
  },
];

export const projects = [
  {
    slug: "mlenz",
    title: "MLenz",
    category: "Computer Vision System",
    summary:
      "AI-powered mining analytics camera system for safety monitoring, productivity visibility, and real-time violation detection.",
    description:
      "MLenz is a computer vision-based analytics platform for mining environments. The system helps monitor safety compliance, detect operational violations, process visual events, and integrate AI camera analytics into real-world industrial workflows. It combines object detection, PPE detection, OCR, event logging, and system integration to support safer and more visible mining operations.",
    impact:
      "Helps mining teams reduce manual monitoring effort, detect safety violations faster, and transform camera feeds into actionable operational intelligence.",
    features: [
      "Object detection and tracking for people and heavy equipment",
      "PPE detection for helmet, vest, boots, and gloves",
      "Vehicle violation monitoring for speed, safe distance, contraflow, and restricted zones",
      "OCR for person vest ID and vehicle number recognition",
      "Event logging, queue system, and spool system",
      "Integration with MQTT, REST API, and MinIO object storage",
    ],
    tags: ["Computer Vision", "YOLO", "Mining Analytics"],
    tech: ["Computer Vision", "YOLO", "OCR", "AI Camera Analytics", "Event Processing", "MQTT", "REST API", "MinIO", "Safety Monitoring"],
    status: "Computer Vision",
    demoVideo: "/videos/output_rain_violation.mp4",
    dashboardImage: "/dashboard-mlenz.png",
    icon: BrainCircuit,
  },
  {
    slug: "mia",
    title: "MIA",
    category: "AI Assistant Platform",
    summary:
      "Internal AI assistant platform that helps teams access knowledge, retrieve information, and complete workflows faster.",
    description:
      "MIA is an internal AI assistant product focused on knowledge access, workflow support, and conversational interaction. The platform helps users find information more naturally, reduce repetitive lookup tasks, and interact with internal systems using language model-powered assistance. It combines conversational UX, retrieval workflows, prompt orchestration, and integration layers for practical workplace productivity.",
    impact:
      "Helps teams access internal knowledge faster, reduce friction in repetitive workflows, and turn scattered information into structured conversational support.",
    features: [
      "Chat-based assistant interface",
      "Suggested prompts and guided responses",
      "Document search and contextual knowledge retrieval",
      "Answer synthesis from indexed information",
      "Prompt orchestration and workflow assistance",
      "Internal system lookup and workflow support",
    ],
    tags: ["LLM", "RAG", "AI Assistant"],
    tech: ["LLM", "RAG", "AI Assistant", "Conversational UI", "Knowledge Retrieval", "Prompt Engineering", "Workflow Automation"],
    status: "LLM System",
    icon: Sparkles,
  },
  {
    slug: "mzone",
    title: "Mzone",
    category: "Safety Response Platform",
    summary:
      "Centralized SOS call center and safety response system for incident reporting, escalation, and emergency coordination.",
    description:
      "Mzone is a safety-focused operational platform built for mining environments. It centralizes SOS reporting, incident monitoring, alert escalation, and emergency response coordination across dashboards, mobile applications, and communication infrastructure. The system helps teams respond faster to emergency events while keeping incidents documented for audit, investigation, and safety evaluation.",
    impact:
      "Helps mining safety teams coordinate emergency responses faster, document incidents systematically, and improve visibility across operational safety workflows.",
    features: [
      "Centralized SOS call center workflow",
      "Real-time incident reporting and monitoring",
      "Alert handling and escalation management",
      "Dashboard and mobile app integration",
      "Operational event tracking",
      "Incident documentation for audit and investigation",
      "Notification and response coordination",
    ],
    tags: ["Safety System", "Monitoring", "Alerting"],
    tech: ["Operational Monitoring", "Safety System", "Incident Reporting", "Alerting", "Escalation Workflow", "Dashboard", "Mobile Integration"],
    status: "Safety Platform",
    dashboardImage: "/dashboard-mzone.png",
    icon: MonitorDot,
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "PT Minergo Visi Maxima",
    period: "May 2025 - Present",
    description:
      "Building AI systems that connect machine learning models, product interfaces, and operational workflows. My work focuses on turning AI capabilities into practical tools for monitoring, automation, safety, and decision support.",
    highlights: ["Computer Vision", "LLM Workflows", "AI Products", "Operational Monitoring"],
  },
  {
    role: "Technical Writer",
    company: "PT Minergo Visi Maxima",
    period: "Feb 2025 - May 2025",
    description:
      "Produced clear technical documentation, user guides, product references, and internal knowledge materials to support product adoption, reduce ambiguity, and improve communication between technical and non-technical users.",
    highlights: ["Technical Documentation", "User Guides", "Product Knowledge", "Workflow Clarity"],
  },
  {
    role: "Digital Marketing",
    company: "PT Banti Tekno Investama",
    period: "Nov 2020 - Jan 2024",
    description:
      "Handled digital marketing strategy and execution across content, campaigns, audience communication, and reporting, building a strong foundation in user behavior, messaging, analytics, and business communication.",
    highlights: ["Content Planning", "Campaign Execution", "Performance Reporting", "Business Communication"],
  },
];

export const testimonials = [
  {
    name: "Ahmad Nasser Ambari",
    role: "Technical Delivery Lead | Software Engineer | Product Implementation",
    relation: "Worked with Rizky on different teams",
    date: "January 13, 2026",
    source: "LinkedIn Recommendation",
    quote:
      "Rizky was extremely helpful in documenting project development. He summarized technical requirements and discussions into clear, neat, and easy-to-understand documentation, while staying responsive to changes and feedback. His contributions greatly supported a smooth development process and coordination between teams.",
  },
  {
    name: "Yanuar Fabien",
    role: "Professional Colleague",
    relation: "Worked with Rizky on the same team",
    date: "December 17, 2025",
    source: "LinkedIn Recommendation",
    quote:
      "Surya is very detail-oriented in understanding data quality. He often identifies bias or anomalies before training and recommends improving the data instead of forcing a model that only looks good by metrics. He is systematic in experimentation, documents every trial, compares results objectively, and understands that reliable models must consider latency, monitoring, retraining strategy, and production integration.",
  },
  {
    name: "Muhammad Rafly Raihan Sumardi",
    role: "Figma Mastery | Design System Expert | Product Research Specialist",
    relation: "Worked with Rizky on the same team",
    date: "December 17, 2025",
    source: "LinkedIn Recommendation",
    quote:
      "Surya is highly adaptable and competent across different fields. His career journey from procurement, technical writing, and then AI Engineering shows strong growth and versatility. He is also supportive, easy-going, and able to create a comfortable work environment without unnecessary boundaries between colleagues.",
  },
  {
    name: "Haris Muzakki Indra",
    role: "Software Engineer | DevOps & Cloud Computing | Computer Science Student | Tech Enthusiast",
    relation: "Worked with Rizky on the same team",
    date: "December 17, 2025",
    source: "LinkedIn Recommendation",
    quote:
      "Working with Surya was a very positive experience. He is communicative, quick to learn, and highly responsible in every task. He understands technical needs well, actively discusses effective solutions, collaborates openly, and consistently completes his work neatly and on time.",
  },
  {
    name: "Ferry Ananda Febian",
    role: "Software Engineer | JavaScript - Node.js - React - Cloud",
    relation: "Worked with Rizky on the same team",
    date: "July 20, 2025",
    source: "LinkedIn Recommendation",
    quote:
      "Bang Surya is a great engineer, easy to work with, and always ready to help the team. He is skilled in machine learning, backend development, data, and has a strong learning spirit. I truly recommend him.",
  },
];

export const education = [
  {
    degree: "Bachelor of Management",
    school: "Universitas Cyber Asia",
    period: "2020 - 2024",
    description:
      "Studied management, business operations, organizational planning, and decision-making. This background helps me understand business problems, design structured workflows, and build AI solutions that align with real operational needs.",
  },
  {
    degree: "Computer Science / Informatics",
    school: "LP3I Balikpapan College",
    period: "2018 - 2020",
    description:
      "Built a technical foundation in programming, networking, computer systems, and web development. This became the base for my transition into software engineering, fullstack development, and applied AI systems.",
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Network },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
];
