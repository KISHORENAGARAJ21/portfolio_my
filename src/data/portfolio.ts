import type {
  Personal, SkillCategory, Project,
  Education, Certification, Experience,
  Profile, SnapshotCard
} from '../types';

// ── Personal Info ─────────────────────────────────────────────────────────────
export const personal: Personal = {
  name: 'Kishore N',
  title: 'Data Analyst',
  headline: 'Transforming Raw Data into Actionable Insights',
  location: 'Chennai, Tamil Nadu, India',
  email: 'kishorenagarai2241@gmail.com',
  phone: '+91-8270315524',
  linkedin: 'https://www.linkedin.com/in/kishore-nagaraj-a9b095270/',
  github: 'https://github.com/KISHORENAGARAJ21',
  typingTitles: [
    'Data Analyst',
    'SQL & Python Developer',
    'BI & Visualization Analyst',
    'Data-Driven Problem Solver',
    'Power BI Dashboard Builder',
  ],
  openToWork: true,
};

// ── About ─────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a detail-oriented Data Analyst fresher with a strong foundation in statistics, SQL, and data visualization. Currently pursuing B.E. in Artificial Intelligence and Data Science at Dhanalakshmi Srinivasan College of Engineering, I'm passionate about transforming raw data into insights that drive real business decisions.",
    "I enjoy the full analytics lifecycle — from cleaning messy datasets and running exploratory analyses to building interactive dashboards in Power BI and writing optimized SQL queries. My academic projects have given me hands-on experience with retail sales analytics and customer churn prediction using Python and machine learning.",
    "Beyond technical skills, I care deeply about communicating insights clearly to both technical and non-technical audiences. I believe great data analysis isn't just about finding patterns — it's about telling the story behind the numbers.",
  ],
  focus: [
    { icon: '📊', label: 'Data Analysis', desc: 'EDA, statistics & pattern recognition' },
    { icon: '🗄️', label: 'SQL Querying', desc: 'Complex joins, window functions & aggregations' },
    { icon: '📈', label: 'BI Dashboards', desc: 'Power BI & Tableau interactive reports' },
    { icon: '🐍', label: 'Python Analytics', desc: 'Pandas, NumPy, Matplotlib & Scikit-learn' },
  ],
};

// ── Analytics Snapshot ────────────────────────────────────────────────────────
export const snapshotCards: SnapshotCard[] = [
  { label: 'Projects', value: 2, description: 'Analytics Projects', icon: '📁' },
  { label: 'Certifications', value: 2, description: 'Professional Certs', icon: '🏅' },
  { label: 'Technologies', value: 15, suffix: '+', description: 'Tools & Languages', icon: '🛠️' },
  { label: 'CGPA', value: 8.2, description: 'Academic Score / 10', icon: '🎓' },
  { label: 'Internship', value: 1, description: 'Industry Experience', icon: '💼' },
  { label: 'Dashboards', value: 1, description: 'Built & Deployed', icon: '📊' },
];

// ── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '🔬',
    color: 'from-cyan-500 to-teal-400',
    skills: [
      { name: 'Pandas', level: 'Intermediate' },
      { name: 'NumPy', level: 'Intermediate' },
      { name: 'Excel (Advanced)', level: 'Intermediate' },
      { name: 'Data Cleaning', level: 'Intermediate' },
      { name: 'Exploratory Data Analysis', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data Visualization',
    icon: '📊',
    color: 'from-purple-500 to-indigo-400',
    skills: [
      { name: 'Power BI', level: 'Intermediate' },
      { name: 'Tableau', level: 'Working Knowledge' },
      { name: 'Matplotlib', level: 'Intermediate' },
      { name: 'Seaborn', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'SQL & Databases',
    icon: '🗄️',
    color: 'from-indigo-500 to-blue-400',
    skills: [
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Working Knowledge' },
      { name: 'MS SQL Server', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Analytics Concepts',
    icon: '📐',
    color: 'from-teal-500 to-green-400',
    skills: [
      { name: 'Statistics & Probability', level: 'Intermediate' },
      { name: 'A/B Testing', level: 'Familiar' },
      { name: 'Data Modeling', level: 'Working Knowledge' },
      { name: 'KPI Reporting', level: 'Intermediate' },
      { name: 'Logistic Regression', level: 'Familiar' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-pink-500 to-purple-400',
    skills: [
      { name: 'Jupyter Notebook', level: 'Intermediate' },
      { name: 'Google Sheets', level: 'Intermediate' },
      { name: 'MS Excel (Macros & Pivot)', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Working Knowledge' },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'retail-sales',
    title: 'Retail Sales Performance Dashboard',
    category: 'Business Intelligence',
    tags: ['Power BI', 'SQL', 'Excel', 'Dashboard', 'Sales Analytics'],
    tools: ['Power BI', 'SQL', 'Excel'],
    description:
      'An end-to-end analytics project that analyzed over 50,000 retail transaction records to uncover sales trends, profitability patterns, and customer behavior across regions and product categories.',
    businessProblem:
      'Retailers often struggle with disjointed reporting. The goal was to consolidate transaction data into a single interactive dashboard enabling stakeholders to monitor KPIs and make data-backed inventory decisions.',
    dataset: '50,000+ retail transaction records across regions and product categories',
    process: [
      'Data Collection & Understanding',
      'SQL Data Extraction (joins, subqueries, window functions)',
      'Data Cleaning & Transformation in Excel',
      'KPI Design (Revenue, Profit Margin, Customer Segments)',
      'Interactive Power BI Dashboard Development',
      'Insight Communication & Recommendations',
    ],
    keyInsights: [
      'Identified underperforming product categories with high inventory but low revenue contribution',
      'Discovered regional sales disparities that warranted targeted stocking strategies',
      'Customer segmentation revealed distinct high-value vs. at-risk buyer groups',
      'Dashboard insights could support a 12% improvement in inventory planning accuracy',
    ],
    outcome:
      'Delivered an interactive Power BI dashboard with dynamic filters for region, category, and time period. Insights presented could support a 12% improvement in inventory planning accuracy.',
    github: 'https://github.com/KISHORENAGARAJ21',
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Analysis',
    category: 'Python Data Analysis',
    tags: ['Python', 'EDA', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Telecom'],
    tools: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    description:
      'A comprehensive exploratory data analysis and baseline machine learning project on a telecom customer dataset to identify churn drivers and build a predictive classification model.',
    businessProblem:
      'Customer churn is a critical challenge for telecom companies. The goal was to identify key churn signals and build a model to flag at-risk customers before they leave.',
    dataset: 'Telecom customer dataset with features including contract type, tenure, monthly charges, and service usage patterns',
    process: [
      'Exploratory Data Analysis on telecom customer dataset',
      'Data Cleaning: Missing values, outliers & categorical encoding',
      'Feature Engineering & Correlation Analysis',
      'Visualizations to surface key churn drivers',
      'Logistic Regression baseline model training',
      'Model evaluation & insight communication',
    ],
    keyInsights: [
      'Month-to-month contract customers showed significantly higher churn rates',
      'Customers with shorter tenure were disproportionately likely to churn',
      'Higher monthly charges correlated with increased churn probability',
      'Key churn predictors were successfully visualized for non-technical stakeholders',
    ],
    outcome:
      'Logistic regression baseline model achieved 82% classification accuracy. Churn driver visualizations created to communicate findings to a non-technical audience effectively.',
    github: 'https://github.com/KISHORENAGARAJ21',
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: 'B.E. in Artificial Intelligence and Data Science',
    institution: 'Dhanalakshmi Srinivasan College of Engineering, Perambalur',
    period: 'Nov 2022 – May 2026',
    score: '8.2',
    scoreType: 'CGPA',
    relevant: [
      'Statistics & Probability',
      'Database Management Systems',
      'Python Programming',
      'Machine Learning',
      'Data Structures & Algorithms',
      'Business Analytics',
      'Data Visualization',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Sri Vidya Mandir Matriculation HR Sec School',
    period: 'Jun 2020 – May 2022',
    score: '78',
    scoreType: 'Percentage',
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    name: 'Google Data Analytics Professional Certificate',
    provider: 'Google / Coursera',
    status: 'Completed',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Microsoft Power BI Data Analyst Associate (PL-300)',
    provider: 'Microsoft',
    status: 'In Progress',
    icon: '📊',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    name: 'SQL for Data Science',
    provider: 'Coursera',
    status: 'Completed',
    icon: '🗄️',
    color: 'from-purple-500 to-indigo-400',
  },
  {
    name: 'HackerRank SQL (5-Star)',
    provider: 'HackerRank',
    status: 'Completed',
    icon: '⭐',
    color: 'from-green-500 to-teal-400',
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Glowlogics Solution',
    location: 'Bangalore',
    period: 'Jun 2025 – Aug 2025',
    responsibilities: [
      'Assisted in preparing weekly MIS reports using Excel and SQL for the operations team',
      'Automated repetitive reporting tasks using Excel macros, reducing manual effort by 30%',
      'Supported the analytics team in building ad-hoc dashboards for stakeholder review',
    ],
    tools: ['Excel', 'SQL', 'Excel Macros', 'Power BI'],
  },
];

// ── Profiles ──────────────────────────────────────────────────────────────────
export const profiles: Profile[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/KISHORENAGARAJ21',
    description: 'Source code, analytics projects, and repositories',
    icon: 'FaGithub',
    color: 'from-gray-600 to-gray-800',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kishore-nagaraj-a9b095270/',
    description: 'Professional network, experience, and recommendations',
    icon: 'FaLinkedin',
    color: 'from-blue-600 to-blue-800',
  },
];

// ── Analytics Workflow Steps ──────────────────────────────────────────────────
export const workflowSteps = [
  {
    step: '01',
    title: 'Understand',
    desc: 'Define the business problem and analytical objectives',
    icon: '🎯',
    color: '#00d4ff',
  },
  {
    step: '02',
    title: 'Collect',
    desc: 'Gather data from relational databases, Excel files and external sources',
    icon: '📥',
    color: '#3b82f6',
  },
  {
    step: '03',
    title: 'Clean',
    desc: 'Handle missing values, outliers, duplicates and categorical encoding',
    icon: '🧹',
    color: '#6366f1',
  },
  {
    step: '04',
    title: 'Explore',
    desc: 'EDA with statistics, distributions, correlations and patterns',
    icon: '🔍',
    color: '#8b5cf6',
  },
  {
    step: '05',
    title: 'Analyze',
    desc: 'SQL queries, Python scripts, and statistical techniques',
    icon: '⚙️',
    color: '#a855f7',
  },
  {
    step: '06',
    title: 'Visualize',
    desc: 'Power BI dashboards, Tableau reports, Matplotlib & Seaborn charts',
    icon: '📊',
    color: '#c084fc',
  },
  {
    step: '07',
    title: 'Communicate',
    desc: 'Deliver insights, recommendations and business impact to stakeholders',
    icon: '💡',
    color: '#e879f9',
  },
];
