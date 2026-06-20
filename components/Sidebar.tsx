"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          <Link href="/">{DATA.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {DATA.role}
        </h2>
        <p className="mt-4 hidden max-w-xs leading-normal text-slate lg:block">
          {DATA.intro}
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {DATA.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="group relative flex items-center py-3"
                  href={link.href}
                >
                  <span
                    className={cn(
                      "mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate motion-reduce:transition-none",
                      activeSection === link.href.slice(1) && "w-16 bg-lightest-slate"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightest-slate group-focus-visible:text-lightest-slate motion-reduce:transition-none",
                      activeSection === link.href.slice(1) && "text-lightest-slate"
                    )}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 hidden flex-col gap-3 lg:flex">
          <a
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </a>
          <a
            href={DATA.resume.url}
            download={DATA.resume.fileName}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-accent"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download resume
          </a>
        </div>
      </div>

      <ul className="ml-1 mt-8 flex items-center lg:hidden" aria-label="Social media">
         {/* Mobile socials could go here if needed, but the prompt asked for fixed right sidebar */}
      </ul>
    </header>
  );
}
