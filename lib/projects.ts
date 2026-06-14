import { DATA } from "@/lib/constants";
import type { Project, ProjectCategory } from "@/lib/types";

export { hasCaseStudy } from "@/lib/case-studies";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  security: "Security",
  "developer-tools": "Developer Tools",
  testing: "Testing & Quality",
  experiments: "Experiments",
  productivity: "Productivity",
  "e-commerce": "E-commerce",
};

export const PROJECT_CATEGORY_ORDER: ProjectCategory[] = [
  "security",
  "developer-tools",
  "testing",
  "experiments",
  "productivity",
  "e-commerce",
];

export type ProjectCategoryFilter = ProjectCategory | "all";

export function getAllProjects(): Project[] {
  return DATA.projects;
}

export function getFeaturedProjects(): Project[] {
  return DATA.projects.filter((project) => project.featured);
}

export function getOtherProjects(): Project[] {
  return DATA.projects.filter((project) => !project.featured);
}

export function getUsedProjectCategories(): ProjectCategory[] {
  const used = new Set(DATA.projects.map((project) => project.category));
  return PROJECT_CATEGORY_ORDER.filter((category) => used.has(category));
}

export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategoryFilter
): Project[] {
  if (category === "all") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}

export function countProjectsByCategory(
  projects: Project[],
  category: ProjectCategoryFilter
): number {
  return filterProjectsByCategory(projects, category).length;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return DATA.projects.find((project) => project.slug === slug);
}
