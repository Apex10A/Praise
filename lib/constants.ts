import type { Experience, Project } from "@/lib/types";

export const DATA = {
  name: "Praise Afolabi",
  role: "Frontend Engineer",
  location: "Akure, Ondo State",
  phone: "+234 816 086 2773",
  email: "pafolabi740@gmail.com",
  headline: "I build accessible frontends.",
  headlineAccent: "I write the tests too.",
  intro:
    "I ship pixel-perfect interfaces backed by unit, integration, and E2E tests.",
  about: `I'm a frontend engineer who builds polished, accessible UI and writes the tests that back it up. Testing is part of how I ship components, structure state, and catch regressions before they reach users.

Currently, I'm on the Engineering team at <strong class="text-lightest-slate">Cleaques</strong>, building the frontend for a diaspora-focused travel platform. I drive work across components, tooling, and patterns, partnering with designers and engineers to keep accessibility in the foundation.

Previously, I've worked across <strong class="text-lightest-slate">fintech startups and growth-stage companies</strong>, building accessible interfaces, cross-platform components, and critical product flows under real-world constraints.

I'm a <strong class="text-lightest-slate">two-time HNG Internship finalist</strong>, one of Africa's most competitive developer programs, which pushed me to build fast and think clearly under pressure. My testing stack includes Vitest, Playwright, and React Testing Library — covering unit, integration, and end-to-end layers, including offline PWA behavior.

In my spare time, you can usually find me drawing, flipping through a self-development book, running a career mode on PES 17, or watching FC Barcelona — because some of us just never gave up on them.`,
  experience: [
    {
      company: "Cleaques",
      role: "Frontend Engineer",
      period: "Oct 2024 – Present",
      location: "Remote",
      url: "https://app.booking.cleaques.com",
      description: [
        "Building the frontend for a diaspora-focused travel platform covering flights, stays, and rides.",
        "Developed a multi-service vendor dashboard for real-time listing management and integrated a digital wallet with in-app payment flows.",
        "Crafted fluid UI animations and complex booking states using Framer Motion and Zustand.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "Jira",
        "Figma",
      ],
    },
    {
      company: "VeendHQ",
      role: "Frontend Engineer",
      period: "Jun 2024 – Nov 2025",
      location: "Onsite · Lagos, Nigeria",
      url: "https://veendhq.com",
      description: [
        "Built fintech products for payroll loans and BNPL services at a Techstars-backed startup serving civil servants.",
        "Developed cross-platform UI components across Next.js and React Native with Chakra UI.",
        "Owned critical financial flows — loan applications and repayment dashboards — under strict fintech design and compliance standards.",
      ],
      technologies: [
        "Next.js",
        "React Native",
        "Chakra UI",
        "Redux",
        "Bitbucket",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "mutterbox",
      title: "MutterBox — E2EE Messaging",
      tagline: "End-to-end encryption where the server never sees plaintext.",
      description:
        "Built with the Web Crypto API using hybrid encryption — AES-GCM for message encryption and RSA-OAEP for key exchange. Private keys are generated on the client, wrapped with PBKDF2-derived keys, and stored exclusively in IndexedDB, with real-time messaging via WebSocket and optimistic UI updates.",
      featured: true,
      category: "security",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Crypto API",
        "IndexedDB",
        "WebSocket",
        "RSA-OAEP",
        "AES-GCM",
      ],
      github: "https://github.com/Apex10A/E2e-Encryption-app",
      external: "https://e2e-encryption-app.vercel.app/",
      image: "/e2e.png",
    },
    {
      slug: "lantern",
      title: "Lantern — Visual Query Builder",
      tagline: "Compose nested database filters visually — no raw SQL required.",
      description:
        "Schema-driven condition cards with unlimited AND/OR nesting, drag-and-drop reorder, live SQL/MongoDB/GraphQL preview, real-time validation, mock execution against sample datasets, and import/export JSON with presets and snapshots.",
      featured: true,
      category: "developer-tools",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Framer Motion",
        "@dnd-kit",
        "Vitest",
        "React Testing Library",
      ],
      github: "https://github.com/Apex10A/query-builder",
      external: "https://query-builder-six-gamma.vercel.app/",
      image: "/lantern.png",
    },
    {
      slug: "habit-tracker-pwa",
      title: "Habit Tracker PWA",
      tagline: "Spec-driven PWA with full unit, integration, and E2E coverage.",
      description:
        "Built from a formal Technical Requirements Document with strict data contracts, deterministic route behavior, and a multi-layer test suite. Includes local authentication, habit management with streak tracking, and offline support via a custom service worker.",
      featured: true,
      category: "testing",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vitest",
        "Playwright",
        "React Testing Library",
        "PWA",
      ],
      github: "https://github.com/Apex10A/Habit-tracker-mobile-first",
      external: "https://habit-tracker-mobile-first.vercel.app/",
      image: "/habit-tracker.png",
    },
    {
      slug: "ai-page-summarizer",
      title: "AI Page Summarizer",
      tagline: "Manifest V3 extension with a security-first Gemini API architecture.",
      description:
        "Extracts content from any webpage and generates structured AI summaries. The API key lives exclusively in the background service worker — never exposed to content scripts or the popup — with bullet-point summaries, key insights, and a 24-hour URL-based cache.",
      featured: false,
      category: "security",
      technologies: [
        "Chrome Extension",
        "Manifest V3",
        "JavaScript",
        "Gemini API",
        "Service Worker",
        "Chrome Storage API",
      ],
      github: "https://github.com/Apex10A/AI-Page-Summarizer-Chrome-Extension",
      external: "https://github.com/Apex10A/AI-Page-Summarizer-Chrome-Extension",
      image: "/extension.png",
    },
    {
      slug: "gbejaqr",
      title: "GbejaQR",
      tagline: "Real-time QR verification to catch phishing and malicious redirects.",
      description:
        "A security-focused web application with AI-powered threat detection, deep link analysis with redirect exposure, and a privacy-first scanning engine optimized for mobile performance.",
      featured: false,
      category: "security",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Apex10A",
      external: "https://v0-gbeja-qr-landing-page-design.vercel.app/",
      image: "/gbejaa.png",
    },
    {
      slug: "editorial-portfolio-sveltekit",
      title: "Editorial Portfolio — SvelteKit",
      tagline: "Newspaper-inspired portfolio exploring Svelte 5 runes and GSAP motion.",
      description:
        "A framework exploration project with a front-page hero layout, editorial typography, GSAP scroll animations, a custom halftone canvas portrait renderer, and structured content sections driven by Svelte 5 runes.",
      featured: false,
      category: "experiments",
      technologies: [
        "SvelteKit",
        "Svelte 5",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Vite",
      ],
      github: "https://github.com/Apex10A/svelte-kit-portfolio",
      external: "https://svelte-kit-portfolio.vercel.app/",
      image: "/portfolio.png",
    },
    {
      slug: "invoice-app",
      title: "Invoice App",
      tagline: "Lightweight invoice management for freelancers and small businesses.",
      description:
        "Real-time total calculations, status-based filtering, local data persistence via localStorage, and a fully responsive design with native dark mode support.",
      featured: false,
      category: "productivity",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Apex10A",
      external: "https://invoice-app-inky-nine.vercel.app/",
      image: "/invoice.png",
    },
    {
      slug: "vendra",
      title: "Vendra",
      tagline: "Multi-vendor marketplace with vendor dashboards and role-based auth.",
      description:
        "A comprehensive e-commerce platform connecting independent sellers and customers through a unified marketplace, with real-time sales analytics, advanced product filtering, secure multi-role authentication, and order management backed by Prisma and PostgreSQL.",
      featured: false,
      category: "e-commerce",
      status: "coming-soon",
      technologies: [
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "Tailwind CSS",
        "Neon.js",
        "Redux",
      ],
      github: "https://github.com/Apex10A",
      external: "https://vendra.com",
      image: "/vendraa.png",
    },
  ] satisfies Project[],
  education: [
    {
      degree: "B.Eng. Software Engineering",
      institution: "Federal University of Technology, Akure (FUTA)",
      location: "Akure, Nigeria",
      period: "Aug 2020 – Aug 2026 (Expected)",
      description: [
        "Building a solid foundation in software engineering principles, algorithms, data structures, and system design.",
        "Applied academic knowledge through multiple hands-on software projects covering web development, application architecture, and software optimisation.",
      ],
    },
  ],
  awards: [
    {
      title: "HNG Internship Finalist",
      description:
        "Back-to-back finalist in HNG 11 and HNG 12, two of Africa's most competitive developer internship programs (certified).",
    },
  ],
  socials: {
    github: "https://github.com/Apex10A",
    linkedin: "https://linkedin.com/in/pafolabi740",
    twitter: "https://x.com/dev_apexxr",
    instagram: "https://instagram.com",
    email: "mailto:pafolabi740@gmail.com",
  },
  resume: {
    url: "/resume.pdf",
    fileName: "Praise-Afolabi-Resume.pdf",
  },
  hiring: {
    status: "Open to opportunities",
    headline: "Let's build something solid.",
    message:
      "I'm open to frontend engineering roles — especially teams that value accessible UI and developers who write their own tests. Whether you're hiring or just want to talk shop, my inbox is open.",
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Build Notes", href: "#build-notes" },
    { name: "Contact", href: "#contact" },
  ],
};
