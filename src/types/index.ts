// ── Portfolio Types ──────────────────────────────────────────────────────────

export interface Personal {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  typingTitles: string[];
  openToWork: boolean;
}

export interface SkillItem {
  name: string;
  level: 'Familiar' | 'Working Knowledge' | 'Intermediate' | 'Experienced';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  tools: string[];
  description: string;
  businessProblem: string;
  dataset?: string;
  process: string[];
  keyInsights: string[];
  outcome: string;
  github?: string;
  demo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  relevant?: string[];
}

export interface Certification {
  name: string;
  provider: string;
  status: 'Completed' | 'In Progress';
  credentialUrl?: string;
  icon: string;
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  tools: string[];
}

export interface Profile {
  platform: string;
  url: string;
  description: string;
  icon: string;
  color: string;
}

export interface SnapshotCard {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  icon: string;
}
