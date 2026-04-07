"use client";

import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-accent font-mono mb-4">Hi, my name is</h1>
        <h2 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-7xl">
          {DATA.name}.
        </h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate sm:text-6xl">
          I build things for the web.
        </h3>
        <p className="mt-6 max-w-lg leading-relaxed text-slate">
          {DATA.intro}
        </p>
      </motion.div>
    </section>
  );
}
