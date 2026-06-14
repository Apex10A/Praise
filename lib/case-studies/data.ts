import type { CaseStudy } from "@/lib/types";

export const mutterboxCaseStudy = {
  slug: "mutterbox",
  overview:
    "MutterBox is a real-time messaging app where encryption happens entirely on the client. The server relays ciphertext only — it never has access to private keys or plaintext messages.",
  problem:
    "Most chat apps ask users to trust the platform with their messages. I wanted to prove I could build E2EE in the browser using native Web Crypto APIs — without third-party crypto libraries — while still supporting multi-device key recovery and real-time delivery.",
  approach:
    "Hybrid encryption on the client: RSA-OAEP for key exchange, AES-GCM for message bodies. Private keys are generated in-browser, wrapped with PBKDF2-derived keys, and persisted in IndexedDB. WebSocket handles delivery with optimistic UI while ciphertext is in flight.",
  decisions: [
    {
      title: "Key storage",
      choice: "IndexedDB with PBKDF2-wrapped private keys",
      rationale:
        "Keys never leave the client. Wrapping with a user-derived key allows restoration on new devices without sending private key material to the server.",
    },
  ],
  outcomes: [
    "Server-side message handlers operate on ciphertext only",
    "Client generates and restores key pairs without a trusted third party",
    "Optimistic UI keeps the chat responsive during WebSocket round-trips",
  ],
} satisfies CaseStudy;

export const lanternCaseStudy = {
  slug: "lantern",
  overview:
    "Lantern is a visual query builder that turns nested filter logic into SQL, MongoDB, or GraphQL — with live preview, validation, and mock execution against sample datasets.",
  problem:
    "Non-technical stakeholders and junior developers often need complex filtered queries but struggle with nested AND/OR logic in raw query languages. Errors usually show up at runtime, not while composing the query.",
  approach:
    "Schema-driven condition cards stored in Zustand, with @dnd-kit for drag-and-drop reordering. A query engine serializes the tree into multiple output formats, validates conditions against the schema in real time, and runs mock execution against bundled sample data.",
  decisions: [
    {
      title: "State model",
      choice: "Normalized condition tree in Zustand",
      rationale:
        "Nested AND/OR groups need immutable updates and predictable reordering. A flat store with explicit group IDs made drag-and-drop and serialization easier to test.",
    },
  ],
  outcomes: [
    "Live preview updates as conditions change",
    "Validation catches type mismatches before mock execution",
    "JSON import/export preserves complex filter trees",
  ],
} satisfies CaseStudy;

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
