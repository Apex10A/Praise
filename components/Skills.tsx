"use client";

import SectionHeading from "@/components/SectionHeading";
import { DATA } from "@/lib/constants";
import { getSkillGroups } from "@/lib/skills";
import { motion } from "framer-motion";
import { Award as AwardIcon, GraduationCap } from "lucide-react";

function SkillPills({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-light-slate">
      {children}
    </h3>
  );
}

export default function Skills() {
  const skillGroups = getSkillGroups();

  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="skills-heading" title="Skills & Credentials" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate">
          Frontend engineering with a strong testing practice — from component
          tests and E2E flows to spec-driven development and offline PWA
          coverage.
        </p>

        {/* <SubsectionTitle>Technical Skills</SubsectionTitle>
        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={
                group.key === "testing" || group.key === "practices"
                  ? "sm:col-span-2 rounded-md border border-accent/10 bg-accent/5 p-5"
                  : ""
              }
            >
              <h4 className="mb-3 text-sm font-medium text-lightest-slate">
                {group.label}
              </h4>
              <SkillPills items={group.items} label={group.label} />
            </motion.div>
          ))}
        </div>

        <SubsectionTitle>Awards</SubsectionTitle>
        <ul className="mb-16 space-y-6">
          {DATA.awards.map((award, index) => (
            <motion.li
              key={award.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10" />
              <div className="relative z-10 flex gap-4">
                <AwardIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-medium text-lightest-slate">
                    {award.title}
                  </h4>
                  <p className="mt-1 text-sm leading-normal text-slate">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        <SubsectionTitle>Education</SubsectionTitle>
        <ol className="group/list">
          {DATA.education.map((entry, index) => (
            <motion.li
              key={entry.degree}
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
                  aria-label={entry.period}
                >
                  {entry.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <div className="flex gap-3">
                    <GraduationCap
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent lg:hidden"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-medium leading-snug text-lightest-slate">
                        {entry.degree}
                      </h4>
                      <p className="mt-1 text-sm text-light-slate">
                        {entry.institution} · {entry.location}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {entry.description.map((line) => (
                          <li
                            key={line}
                            className="relative pl-5 text-sm leading-normal text-slate before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol> */}
      </motion.div>
    </section>
  );
}
