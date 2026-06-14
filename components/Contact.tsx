"use client";

import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="contact-heading" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-2 font-mono text-sm text-accent">{DATA.hiring.status}</p>
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-lightest-slate sm:text-4xl">
          {DATA.hiring.headline}
        </h3>
        <p className="mb-8 leading-relaxed text-slate">{DATA.hiring.message}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DATA.socials.email}
            className="inline-flex items-center gap-2 rounded border border-accent px-8 py-3.5 font-mono text-sm text-accent transition hover:bg-accent/10 focus-visible:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </a>
          <a
            href={DATA.resume.url}
            download={DATA.resume.fileName}
            className="inline-flex items-center gap-2 rounded border border-slate/40 px-8 py-3.5 font-mono text-sm text-light-slate transition hover:border-slate hover:text-lightest-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download resume
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              href={DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`tel:${DATA.phone.replace(/\s/g, "")}`}
              className="text-slate transition hover:text-accent"
            >
              {DATA.phone}
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
