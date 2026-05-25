import type {
  Stat,
  Experience,
  Project,
  SkillCategory,
  Education,
  Certification,
  Language,
  Passion,
  SocialLink,
} from '../types/portfolio'

export const marqueeItems = [
  'GenAI',
  'MLOps',
  'Multi-Agent',
  'AWS Bedrock',
  'Databricks',
  'Terraform',
]

export const stats: Stat[] = [
  { value: '5+', countTo: 5, suffix: '+', label: "Années d'expérience" },
  { value: '8', countTo: 8, suffix: '', label: 'Entreprises accompagnées' },
  { value: '∞', countTo: null, suffix: '', label: 'Pipelines en prod' },
  { value: '3', countTo: null, suffix: '', label: 'Langues parlées' },
]

export const experience: Experience[] = [
  {
    id: 'cnp',
    period: 'mars 2026 — present',
    duration: '3 mois',
    company: 'CNP Assurances',
    role: 'AI / ML / MLOps Engineer',
    via: 'via Devoteam',
    location: 'Paris',
    desc: "MLOps en environnement réglementé. Industrialisation de pipelines AWS SageMaker et de cas d'usage GenAI sur des données assurance.",
    tags: ['AWS SageMaker', 'MLOps', 'GenAI'],
  },
  {
    id: 'ubisoft',
    period: 'jan 2026 — mars 2026',
    duration: '3 mois',
    company: 'Ubisoft × AWS',
    role: 'Gen AI Engineer',
    via: 'collaboration stratégique',
    location: 'Paris',
    desc: 'Système multi-agent production-ready sur AWS Bedrock AgentCore — orchestrateur central, 2 pipelines RAG (docs + glossaire), agent Jira via MCP. Eval framework LLM-as-judge, infra Terragrunt.',
    tags: ['Strands SDK', 'Bedrock AgentCore', 'Multi-Agent', 'RAG', 'MCP', 'Terragrunt'],
  },
  {
    id: 'decathlon',
    period: 'juil 2024 — déc 2025',
    duration: '1 an 6 mois',
    company: 'Decathlon',
    role: 'Senior ML / MLOps Engineer',
    via: 'AIForecastSupply',
    location: 'Paris',
    desc: 'Plateforme MLOps production-grade pour la prévision de demande & la résilience supply chain. Pipelines Databricks / Spark / Airflow, CI/CD, monitoring drift (Great Expectations + PagerDuty), backfill historique.',
    tags: ['Databricks', 'Spark', 'Airflow', 'CI/CD', 'Great Expectations', 'Forecast'],
  },
  {
    id: 'simple',
    period: 'juil 2024 — août 2024',
    duration: '2 mois',
    company: '+Simple',
    role: 'GenAI Consultant',
    via: 'assurance pro',
    location: null,
    desc: "Assistant GenAI / RAG sur la documentation privée des produits d'assurance, avec guardrails et evaluation.",
    tags: ['RAG', 'Guardrails', 'LLM'],
  },
  {
    id: 'lequipe',
    period: 'juin 2024 — juil 2024',
    duration: '2 mois',
    company: "L'Équipe",
    role: 'AI Engineer',
    via: '"2 Minutes Chrono"',
    location: 'Paris',
    desc: 'Pipeline GenAI end-to-end produisant un podcast olympique quotidien — architecture serverless AWS (CDK, Lambda, Step Functions, Bedrock), TTS via ElevenLabs, déploiement continu.',
    tags: ['AWS CDK', 'Lambda', 'Step Functions', 'Bedrock', 'ElevenLabs'],
  },
  {
    id: 'aircall',
    period: 'juil 2023 — juin 2024',
    duration: '1 an',
    company: 'Aircall',
    role: 'Machine Learning Engineer',
    via: null,
    location: 'Paris',
    desc: 'Chatbots RAG, benchmarks LLM, déploiement et optimisation de services Speech-to-Text et Text-to-Speech à grande échelle. Observabilité Datadog.',
    tags: ['RAG', 'LLM Eval', 'STT/TTS', 'Datadog'],
  },
  {
    id: 'youree',
    period: 'août 2020 — juil 2023',
    duration: '3 ans',
    company: 'Youree',
    role: 'Data Scientist',
    via: 'V2G / smart-charging',
    location: 'Paris',
    desc: 'Prévisions séries temporelles (ARIMA, LSTM, GRU, XGBoost), segmentation client (KMeans, DBSCAN), infra Terraform, cycle ML complet (CI/CD, API, monitoring). R&D avec l\'UTT, conférences, mentorat alternants.',
    tags: ['Time Series', 'LSTM / GRU', 'XGBoost', 'Terraform', 'R&D'],
  },
]

export const projects: Project[] = [
  {
    id: 'multi-agent',
    featured: true,
    span: 12,
    tag: '⭐ Featured — Ubisoft × AWS · 2026',
    titleParts: [
      [{ text: 'Multi-Agent ' }, { text: 'system', italic: true }],
      [{ text: 'sur AWS Bedrock AgentCore' }],
    ],
    desc: 'Système production-ready : orchestrateur central, 2 pipelines RAG agentiques (documentation + glossaire) avec chunking custom Lambda, agent Jira via MCP, eval framework LLM-as-judge sur accuracy / hallucination / latency. Infra industrialisée Terragrunt.',
    tech: ['Strands SDK', 'Bedrock AgentCore', 'RAG', 'MCP', 'Lambda', 'Terragrunt', 'LLM-as-judge'],
    href: '#',
  },
  {
    id: 'mlops-decathlon',
    featured: false,
    span: 7,
    tag: 'Decathlon · 2024–25',
    titleParts: [
      [{ text: 'Plateforme ' }, { text: 'MLOps', italic: true }],
      [{ text: 'forecast supply' }],
    ],
    desc: 'Pipelines Databricks + Spark + Airflow pour ingestion et training à grande échelle. Monitoring drift continu (Great Expectations + PagerDuty), backfill, CI/CD complet.',
    tech: ['Databricks', 'Spark', 'Airflow', 'Great Expectations'],
    href: '#',
  },
  {
    id: '2min-chrono',
    featured: false,
    span: 5,
    tag: "L'Équipe · 2024",
    titleParts: [
      [{ text: '2 Minutes ' }, { text: 'Chrono', italic: true }],
    ],
    desc: 'Pipeline GenAI quotidien : actu → résumé → script → TTS → publication. Serverless AWS de bout en bout.',
    tech: ['CDK', 'Step Functions', 'Bedrock', 'ElevenLabs'],
    href: '#',
  },
  {
    id: 'rag-assurance',
    featured: false,
    span: 4,
    tag: '+Simple · 2024',
    titleParts: [
      [{ text: 'RAG ' }, { text: 'assurance', italic: true }],
    ],
    desc: 'Assistant GenAI sur documentation produit, avec guardrails et eval.',
    tech: ['RAG', 'Guardrails'],
    href: '#',
  },
  {
    id: 'llm-benchmarks',
    featured: false,
    span: 4,
    tag: 'Aircall · 2023–24',
    titleParts: [
      [{ text: 'LLM ' }, { text: 'benchmarks', italic: true }, { text: ' & STT/TTS' }],
    ],
    desc: 'Chatbots RAG, benchmarks LLM, déploiement STT/TTS à l\'échelle, observabilité Datadog.',
    tech: ['LLM Eval', 'STT/TTS'],
    href: '#',
  },
  {
    id: 'v2g-forecasting',
    featured: false,
    span: 4,
    tag: 'Youree · 2020–23',
    titleParts: [
      [{ text: 'V2G ' }, { text: 'forecasting', italic: true }],
    ],
    desc: 'Time series et segmentation pour véhicule-to-grid. Cycle ML complet sur Terraform.',
    tech: ['LSTM', 'XGBoost', 'Terraform'],
    href: '#',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'genai',
    title: 'GenAI & Agents',
    skills: [
      { name: 'AWS Strands SDK', highlight: true },
      { name: 'Bedrock AgentCore', highlight: true },
      { name: 'RAG', highlight: false },
      { name: 'Multi-Agent', highlight: false },
      { name: 'MCP', highlight: false },
      { name: 'LLM-as-judge', highlight: false },
      { name: 'Guardrails', highlight: false },
      { name: 'Embeddings', highlight: false },
      { name: 'Chunking', highlight: false },
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps & Data',
    skills: [
      { name: 'Databricks', highlight: true },
      { name: 'Spark', highlight: false },
      { name: 'Airflow', highlight: false },
      { name: 'MLflow', highlight: false },
      { name: 'Great Expectations', highlight: false },
      { name: 'PagerDuty', highlight: false },
      { name: 'Datadog', highlight: false },
      { name: 'CI/CD', highlight: false },
      { name: 'Databricks Bundles', highlight: false },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & IaC',
    skills: [
      { name: 'AWS', highlight: true },
      { name: 'SageMaker', highlight: false },
      { name: 'Bedrock', highlight: false },
      { name: 'Lambda', highlight: false },
      { name: 'Step Functions', highlight: false },
      { name: 'AWS CDK', highlight: false },
      { name: 'Terraform', highlight: false },
      { name: 'Terragrunt', highlight: false },
      { name: 'Azure DevOps', highlight: false },
      { name: 'Docker', highlight: false },
    ],
  },
  {
    id: 'ml',
    title: 'ML / DL classique',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'TensorFlow', highlight: false },
      { name: 'Keras', highlight: false },
      { name: 'Scikit-learn', highlight: false },
      { name: 'XGBoost', highlight: false },
      { name: 'LSTM / GRU', highlight: false },
      { name: 'ARIMA', highlight: false },
      { name: 'CNN', highlight: false },
      { name: 'OpenCV', highlight: false },
      { name: 'Pandas', highlight: false },
    ],
  },
]

export const education: Education[] = [
  {
    id: 'ensisa',
    years: '2017 — 2020',
    school: 'ENSISA',
    degree: "Ecole Nationale Supérieure d'Ingénieurs Sud Alsace — Diplôme d'ingénieur, Informatique",
  },
  {
    id: 'cpge',
    years: '2015 — 2017',
    school: 'CPGE — MPSI / MP',
    degree: 'Classes préparatoires aux grandes écoles, Mathématiques & Physique',
  },
]

export const certifications: Certification[] = [
  {
    id: 'aws',
    badge: 'AWS',
    issuer: 'Amazon Web Services',
    name: 'Solutions',
    level: 'Architect',
    meta: 'Cloud · Architecture',
    verifyHref: '#',
  },
  {
    id: 'tf',
    badge: 'TF',
    issuer: 'HashiCorp',
    name: 'Terraform',
    level: 'Associate',
    meta: 'Infrastructure as Code',
    verifyHref: '#',
  },
  {
    id: 'snow',
    badge: '❄',
    issuer: 'Snowflake',
    name: 'SnowPro Core',
    level: 'Pro',
    meta: 'Data Platform',
    verifyHref: '#',
  },
]

export const languages: Language[] = [
  { id: 'fr', name: 'Français', level: 'Natif / Bilingue', percent: 100 },
  { id: 'en', name: 'Anglais', level: 'Professionnel', percent: 80 },
  { id: 'es', name: 'Espagnol', level: 'Élémentaire', percent: 30 },
  { id: 'py', name: 'Python', level: 'Au-delà du natif ✨', percent: 90 },
]

export const passions: Passion[] = [
  {
    id: 'dessin',
    num: '01 / Art',
    visual: 'dessin',
    title: 'Dessin réaliste',
    desc: "Portraits au crayon, graphite et fusain. J'aime cette tension entre le regard, la lumière et la patience — c'est l'inverse de l'IA générative, et c'est exactement pour ça que ça me ressource.",
  },
  {
    id: 'sport',
    num: '02 / Mouvement',
    visual: 'sport',
    title: 'Sport & endurance',
    desc: 'Le corps comme contrepoids du clavier. Course, salle, basket — ce qui fait du bien à la tête finit toujours par faire du bien au code.',
  },
  {
    id: 'read',
    num: '03 / Curiosité',
    visual: 'read',
    title: 'Lecture, ciné & code learning',
    desc: 'Toujours un livre ouvert, une série en cours, et un side project sur GitHub. J\'apprends en continu — nouveaux frameworks, papiers, prototypes du week-end.',
  },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'li',
    num: '01',
    name: 'LinkedIn',
    host: 'linkedin.com/in/melchior-obame',
    href: 'https://www.linkedin.com/in/melchior-obame',
  },
  {
    id: 'gh',
    num: '02',
    name: 'GitHub',
    nameItalic: '— side projects',
    host: 'github.com/—',
    href: '#',
  },
  {
    id: 'bl',
    num: '03',
    name: 'Blog / Notes',
    host: 'à venir',
    href: '#',
  },
  {
    id: 'dr',
    num: '04',
    name: 'Carnet',
    nameItalic: 'de dessin',
    host: 'instagram / dribbble — à venir',
    href: '#',
  },
]
