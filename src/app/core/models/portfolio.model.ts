export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
  isExternal?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  company?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: 'Enterprise' | 'Mobile & Canvas' | 'Full-Stack';
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedin: string;
  github: string;
  summary: string;
  yearsOfExperience: string;
  profileImage: string;
  resumeFileName: string;
  resumeFilePath: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  stats: { label: string; value: string; helper?: string }[];
}

