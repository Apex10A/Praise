"use client";

import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="mb-12 scroll-mt-16 lg:hidden md:mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 font-mono text-sm text-accent">{DATA.role}</p>
        <h2 className="text-3xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          {DATA.headline}
        </h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-slate sm:text-4xl">
          {DATA.headlineAccent}
        </p>
        <p className="mt-6 max-w-lg leading-relaxed text-slate">{DATA.intro}</p>
      </motion.div>
    </section>
  );
}
