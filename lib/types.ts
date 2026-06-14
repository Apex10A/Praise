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
