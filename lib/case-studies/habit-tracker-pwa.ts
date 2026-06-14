import type { CaseStudy } from "@/lib/types";

export const habitTrackerCaseStudy = {
  slug: "habit-tracker-pwa",
  overview:
    "A spec-driven Progressive Web App for tracking daily habits and streaks — built from a formal Technical Requirements Document with strict data contracts, deterministic route behavior, localStorage persistence, offline app-shell caching, and a multi-layer test suite spanning unit, integration, and E2E layers.",
  problem:
    "Side projects often skip specs and tests. Features get bolted on, route guards become inconsistent, streak logic breaks silently, and offline behavior is an afterthought. I wanted to treat this like production work: write the requirements first, define data shapes upfront, match route behavior exactly to the spec, and prove it with tests at the right layers — including PWA offline scenarios.",
  approach:
    "I started from a written TRD before feature code. Core logic lives in pure `lib/` modules (`auth.ts`, `habits.ts`, `streaks.ts`, `validators.ts`) that are testable without React. The UI is a thin layer over those functions. Data persists in three explicit localStorage keys. A custom service worker caches the app shell for offline navigation. Vitest covers pure logic with coverage reporting, React Testing Library covers form flows, and Playwright covers full user journeys including session persistence and offline loading.",
  architecture: [
    "TRD defines Habit/User/Session types, route rules, and acceptance criteria before implementation begins.",
    "Splash screen at `/` reads the session from localStorage and redirects to `/dashboard` or `/login` after a timed delay.",
    "Protected routes (`/dashboard`) reject unauthenticated users; auth forms write to `habit-tracker-users` and `habit-tracker-session`.",
    "Habit CRUD and completion toggles flow through pure lib functions with immutable updates — `toggleHabitCompletion` returns a new object, never mutates in place.",
    "Streak count is derived from ISO date strings in `completions[]` via `calculateCurrentStreak` — no separate streak field to drift out of sync.",
    "Service worker caches the app shell (`/`, manifest, icons); navigate requests fall back to cached `/` when the network is unavailable.",
    "Test pyramid: Vitest for streaks/validators/habits/auth units → RTL for signup/login/habit form → Playwright for redirects, isolation, persistence, and offline.",
  ],
  architectureTitle: "How the App Works",
  codeSnippet: {
    file: "src/lib/streaks.ts",
    language: "typescript",
    caption:
      "Streak logic is a pure function over completion dates — easy to unit test with edge cases and date overrides, no React or storage coupling.",
    code: `export const calculateCurrentStreak = (
  completions: string[],
  todayOverride?: string
): number => {
  const today = todayOverride || new Date().toISOString().split("T")[0];
  const completionSet = new Set(completions);

  if (!completionSet.has(today)) {
    return 0;
  }

  let streak = 0;
  const currentDate = new Date(today);

  while (completionSet.has(currentDate.toISOString().split("T")[0])) {
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return streak;
};`,
  },
  decisions: [
    {
      title: "Development process",
      choice: "Spec-first — TRD before feature code",
      rationale:
        "The TRD locked down data contracts, route behavior, and acceptance criteria upfront. When tests failed, I knew whether the code or the spec was wrong — instead of guessing what the app was supposed to do.",
    },
    {
      title: "Logic placement",
      choice: "Pure functions in `lib/`, thin React components",
      rationale:
        "Auth, habit CRUD, streak calculation, and validation don't need the DOM. Keeping them in testable modules meant unit tests ran fast and didn't need to mount components for every edge case.",
    },
    {
      title: "Persistence",
      choice: "Three explicit localStorage keys",
      rationale:
        "`habit-tracker-users`, `habit-tracker-session`, and `habit-tracker-habits` keep concerns separated. Habits are filtered by `userId` from the session — no cross-user data leaks in the UI when the filter is applied correctly.",
    },
    {
      title: "Habit mutations",
      choice: "Immutable updates — functions return new objects",
      rationale:
        "`toggleHabitCompletion` returns a new Habit with an updated `completions` array instead of mutating in place. Predictable state transitions make unit tests straightforward and reduce subtle UI bugs on re-render.",
    },
    {
      title: "Test layering",
      choice: "Unit → integration → E2E, matched to risk",
      rationale:
        "Streak math and validators got Vitest units with coverage. Form flows got RTL integration tests. Redirects, user isolation, persistence, and offline behavior got Playwright E2E — because those require a real browser context.",
    },
    {
      title: "Offline support",
      choice: "Custom service worker with app-shell caching",
      rationale:
        "A hand-written `sw.js` caches `/`, the manifest, and icons. Navigate requests fall back to the cached shell when offline — enough to prove PWA behavior without over-engineering background sync for a localStorage-only demo app.",
    },
  ],
  outcomes: [
    "Route behavior matches the TRD — splash redirect, protected dashboard, logout to login",
    "Multi-layer test suite: Vitest units (streaks, validators, habits, auth), RTL integration (auth + habit forms), Playwright E2E (10 scenarios including offline)",
    "Streak updates immediately on habit completion with test-verified `1🔥` display",
    "User habit isolation — dashboard only shows habits belonging to the logged-in userId",
    "Session and habit data persist across page reloads",
    "App shell loads from cache when the network is unavailable after initial visit",
  ],
  limitations: [
    "localStorage is device- and browser-bound — clearing site data wipes everything; no cloud sync.",
    "Daily frequency only — the `Habit` type hardcodes `frequency: 'daily'` with no weekly or custom schedules.",
    "Client-side auth stores passwords in localStorage for demo purposes — not production-safe.",
    "Service worker caches the app shell, not dynamic habit data — offline use depends on data already being in localStorage from a prior online session.",
    "No conflict resolution or multi-device sync — each browser is an independent data island.",
  ],
  lessonsLearned: [
    "Writing the TRD first felt slow on day one but saved days of rework — route guards and data shapes were arguments I had once, not repeatedly in code review.",
    "Pure lib functions are the best ROI for unit tests. Streak edge cases (missing today, gaps in dates) were caught in milliseconds, not through slow E2E runs.",
    "Playwright was essential for the behaviors units can't reach: redirect timing, localStorage seeding across pages, and offline context simulation.",
    "PWA offline testing needs a deliberate sequence — load online first, cache the shell, then go offline. Skipping that order produces flaky or meaningless offline tests.",
  ],
  buildNote: {
    summary:
      "Spec-driven PWA development from TRD to test suite — defining data contracts first, layering unit/integration/E2E tests by risk, and the exact sequence for testing offline behavior.",
    topics: [
      "Spec-driven dev",
      "Test pyramid",
      "PWA",
      "Service workers",
      "Playwright",
    ],
  },
} satisfies CaseStudy;
