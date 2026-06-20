"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getBuildNotes } from "@/lib/build-notes";
import { PROJECT_CATEGORY_LABELS } from "@/lib/projects";

export default function BuildNotes() {
  const buildNotes = getBuildNotes();

  if (buildNotes.length === 0) {
    return null;
  }

  return (
    <section
      id="build-notes"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="build-notes-heading" title="Build Notes" />

      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate">
        Building is easy — understanding how it actually works is not. These
        walkthroughs document how each featured project was built, the tradeoffs
        involved, and what broke along the way.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2">
        {buildNotes.map((entry, index) => (
          <motion.li
            key={entry.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={entry.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-md border border-slate/20 bg-light-navy/20 transition hover:border-accent/30 hover:bg-light-navy/40"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-slate/20 bg-[#d8dee8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                <Image
                  src={entry.project.image}
                  alt={entry.project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 transition group-hover:opacity-100">
                  <PlayCircle
                    className="h-12 w-12 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                    entry.hasVideo
                      ? "border border-accent/30 bg-accent/10 text-accent"
                      : "border border-slate/30 bg-navy/80 text-slate"
                  }`}
                >
                  {entry.hasVideo
                    ? entry.duration
                      ? `Watch · ${entry.duration}`
                      : "Watch"
                    : "Video coming soon"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {PROJECT_CATEGORY_LABELS[entry.project.category]}
                </span>
                <h3 className="font-medium text-lightest-slate group-hover:text-accent">
                  {entry.project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {entry.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics covered">
                  {entry.topics.map((topic) => (
                    <li key={topic}>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  {entry.hasVideo ? "Watch walkthrough" : "Read build notes"}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
