"use client";

import { DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-accent font-mono mb-4 text-sm">04. What&apos;s Next?</h2>
        <h3 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl mb-6">
          Get In Touch
        </h3>
        <p className="text-slate mb-10 leading-relaxed">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <a
          href={DATA.socials.email}
          className="inline-block rounded border border-accent px-10 py-4 font-mono text-sm text-accent transition-all hover:bg-accent/10 focus-visible:bg-accent/10 outline-none"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
