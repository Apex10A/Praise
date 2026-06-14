"use client";

import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";

export default function Projects() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="projects-heading" title="Projects" />

      <div className="mb-12">
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate">
          Selected work where architecture, security, and engineering discipline
          matter as much as the UI — with deeper case studies coming soon.
        </p>

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
    </section>
  );
}
