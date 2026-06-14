"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { hasCaseStudy, PROJECT_CATEGORY_LABELS } from "@/lib/projects";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "featured" | "default";
}

export default function ProjectCard({
  project,
  index,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const showCaseStudy = hasCaseStudy(project.slug);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={isFeatured ? "mb-16 last:mb-0" : "mb-12 last:mb-0"}
    >
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg ${
            isFeatured ? "lg:group-hover:border lg:group-hover:border-accent/20" : ""
          }`}
        />

        <div className="z-10 sm:order-2 sm:col-span-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </span>
            {project.status === "coming-soon" && (
              <span className="rounded-full border border-slate/30 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate">
                Coming Soon
              </span>
            )}
          </div>

          <h3 className={isFeatured ? "text-lg" : "text-base"}>
            {showCaseStudy ? (
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-accent focus-visible:text-accent group/link"
                href={`/projects/${project.slug}`}
              >
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block" />
                <span>
                  {project.title}{" "}
                  <span className="inline-block">
                    <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </span>
              </Link>
            ) : (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-accent focus-visible:text-accent group/link"
                href={project.external}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block" />
                <span>
                  {project.title}{" "}
                  <span className="inline-block">
                    <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </span>
              </a>
            )}
          </h3>

          {isFeatured && (
            <p className="mt-2 text-sm font-medium leading-normal text-light-slate">
              {project.tagline}
            </p>
          )}

          <p className="mt-2 text-sm leading-normal text-slate">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4">
            {showCaseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="z-20 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Read case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            )}
            <a
              href={project.external}
              target="_blank"
              rel="noreferrer"
              className="z-20 inline-flex items-center gap-1 text-sm text-slate hover:text-accent"
            >
              Live demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="z-20 text-slate hover:text-accent"
              aria-label={`View ${project.title} source code`}
            >
              <SiGithub size={18} />
            </a>
          </div>

          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10 sm:order-1 sm:col-span-3 mt-2 sm:mt-0">
          {showCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className={`relative block aspect-video w-full overflow-hidden rounded border-2 border-slate/20 bg-slate/10 transition group-hover:border-slate/50 ${
                isFeatured ? "lg:aspect-[4/3]" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </Link>
          ) : (
            <div
              className={`relative aspect-video w-full overflow-hidden rounded border-2 border-slate/20 bg-slate/10 transition group-hover:border-slate/50 ${
                isFeatured ? "lg:aspect-[4/3]" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
}
