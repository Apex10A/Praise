"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import {
  filterProjectsByCategory,
  getAllProjects,
  getFeaturedProjects,
  getOtherProjects,
  type ProjectCategoryFilter,
} from "@/lib/projects";

function buildProjectCounts() {
  const allProjects = getAllProjects();
  const counts: Record<ProjectCategoryFilter, number> = {
    all: allProjects.length,
    security: 0,
    "developer-tools": 0,
    testing: 0,
    experiments: 0,
    productivity: 0,
    "e-commerce": 0,
  };

  for (const project of allProjects) {
    counts[project.category]++;
  }

  return counts;
}

function EmptyFilterState({ category }: { category: ProjectCategoryFilter }) {
  return (
    <p className="rounded-md border border-dashed border-slate/30 bg-light-navy/20 px-5 py-8 text-center text-sm text-slate">
      No projects in this category yet.
      {category !== "all" && " Try another filter."}
    </p>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryFilter>("all");

  const projectCounts = useMemo(() => buildProjectCounts(), []);

  const featuredProjects = useMemo(
    () => filterProjectsByCategory(getFeaturedProjects(), activeCategory),
    [activeCategory]
  );

  const otherProjects = useMemo(
    () => filterProjectsByCategory(getOtherProjects(), activeCategory),
    [activeCategory]
  );

  const hasResults = featuredProjects.length + otherProjects.length > 0;

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="projects-heading" title="Projects" />

      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate">
        Selected work where architecture, security, and engineering discipline
        matter as much as the UI — with detailed case studies on featured
        projects.
      </p>

      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        projectCounts={projectCounts}
      />

      {!hasResults ? (
        <EmptyFilterState category={activeCategory} />
      ) : (
        <>
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-light-slate">
                Featured
              </h3>
              <ul className="group/list">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    variant="featured"
                  />
                ))}
              </ul>
            </div>
          )}

          {otherProjects.length > 0 && (
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-light-slate">
                More Projects
              </h3>
              <ul className="group/list">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    variant="default"
                  />
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
}
