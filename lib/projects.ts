import { DATA } from "@/lib/constants";
import type { Project, ProjectCategory } from "@/lib/types";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  security: "Security",
  "developer-tools": "Developer Tools",
  testing: "Testing & Quality",
  experiments: "Experiments",
  productivity: "Productivity",
  "e-commerce": "E-commerce",
};

export function getFeaturedProjects(): Project[] {
  return DATA.projects.filter((project) => project.featured);
}

export function getOtherProjects(): Project[] {
  return DATA.projects.filter((project) => !project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return DATA.projects.find((project) => project.slug === slug);
}
