"use client";

import SectionHeading from "@/components/SectionHeading";
import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";

function ExperienceDescription({ description }: { description: string[] }) {
  if (description.length === 1) {
    return (
      <p className="mt-2 text-sm leading-normal text-slate">{description[0]}</p>
    );
  }

  return (
    <ul className="mt-2 space-y-2">
      {description.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-sm leading-normal text-slate before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="experience-heading" title="Experience" />

      <ol className="group/list">
        {DATA.experience.map((exp, index) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-12 last:mb-0"
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2"
                aria-label={exp.period}
              >
                {exp.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-lightest-slate">
                  <span className="inline-flex items-baseline font-medium leading-tight text-lightest-slate group/link text-base">
                    {exp.role} ·{" "}
                    <span className="transition-colors group-hover:text-accent">
                      {exp.company}
                    </span>
                  </span>
                </h3>
                <p className="mt-1 text-xs text-light-slate">{exp.location}</p>
                <ExperienceDescription description={exp.description} />
                <ul
                  className="mt-4 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {exp.technologies.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
