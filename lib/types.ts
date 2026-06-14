export type ProjectCategory =
  | "security"
  | "developer-tools"
  | "testing"
  | "experiments"
  | "productivity"
  | "e-commerce";

export type ProjectStatus = "live" | "coming-soon";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  category: ProjectCategory;
  status?: ProjectStatus;
  technologies: string[];
  github: string;
  external: string;
  image: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  stateManagement: string[];
  tools: string[];
  testing: string[];
  practices: string[];
}

export type SkillGroupKey = keyof Skills;

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
}

export interface Award {
  title: string;
  description: string;
}
