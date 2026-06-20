"use client";

import SectionHeading from "@/components/SectionHeading";
import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeading id="about-heading" title="About" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <div className="mb-8 hidden max-w-2xl lg:block">
          <p className="text-2xl font-bold tracking-tight text-lightest-slate">
            {DATA.headline}
          </p>
          <p className="mt-1 text-xl font-bold tracking-tight text-slate">
            {DATA.headlineAccent}
          </p>
        </div> */}

        <div className="text-left">
          <p
            className="text-slate leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: DATA.about.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
