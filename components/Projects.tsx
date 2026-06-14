"use client";

import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2
        id={id}
        className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only"
      >
        {title}
      </h2>
    </div>
  );
}

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
