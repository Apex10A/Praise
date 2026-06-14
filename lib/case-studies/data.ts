import type { CaseStudy } from "@/lib/types";

export const habitTrackerCaseStudy = {
  slug: "habit-tracker-pwa",
  overview:
    "A spec-driven Progressive Web App for habit tracking — built from a formal Technical Requirements Document with strict data contracts and a multi-layer test suite.",
  problem:
    "Side projects often skip specs and tests, which makes refactors risky and offline behavior unpredictable. I wanted to treat this app like production work: defined contracts, deterministic routes, and coverage across unit, integration, and E2E layers.",
  approach:
    "Started from a written TRD before writing feature code. Defined data shapes upfront, built route behavior to match the spec exactly, and layered Vitest for units, React Testing Library for integration, and Playwright for E2E — including offline PWA scenarios via a custom service worker.",
  decisions: [
    {
      title: "Development process",
      choice: "Spec-first with test layers matched to risk",
      rationale:
        "High-risk paths (auth, streak calculations, offline sync) got integration and E2E coverage. Pure utilities stayed at the unit layer to keep the suite fast.",
    },
  ],
  outcomes: [
    "Route behavior matches the TRD without ad-hoc exceptions",
    "Service worker enables offline habit logging and sync on reconnect",
    "Test suite covers unit, integration, and E2E layers including PWA offline flows",
  ],
} satisfies CaseStudy;
