import type { CaseStudy } from "@/lib/types";

export const lanternCaseStudy = {
  slug: "lantern",
  overview:
    "Lantern is a visual query builder that lets developers and analysts compose nested database filters without writing SQL by hand. Build condition cards, nest AND/OR groups to any depth, preview SQL/MongoDB/GraphQL output in real time, validate against a schema, and run queries against bundled mock datasets — all in the browser.",
  problem:
    "Nested filter logic is hard to get right in raw query languages — one misplaced parenthesis breaks the whole query, and errors usually surface at runtime against a real database. I wanted a tool where the UI enforces structure, operators match field types, validation catches mistakes before execution, and the same filter tree exports to multiple query formats without rewriting it.",
  approach:
    "The core is a recursive query tree — a discriminated union of rules (field / operator / value) and groups (AND/OR with children). `ConditionGroup` renders itself recursively; `RuleRow` handles leaves. Every mutation flows through pure tree helpers (`cloneRoot`, `updateNodeInTree`, `reorderChildren`) into a Zustand store, which recomputes validation on each change. Separate generator modules serialize the same tree into SQL, MongoDB, and GraphQL filters; a client-side executor evaluates the tree against in-memory mock data for instant feedback.",
  architecture: [
    "User selects a schema — fields, types, and allowed operators are driven by the data source definition.",
    "Rules and nested AND/OR groups are added in the builder UI; each node gets a stable nanoid for reconciliation and drag-and-drop.",
    "Tree mutations go through immutable helpers in `lib/utils/tree.ts`, then into the Zustand store.",
    "Validation walks the tree on every update — empty groups, type mismatches, and invalid operators surface per-node.",
    "The preview panel memoizes output from the current tree — SQL, MongoDB `$and`/`$or` JSON, or GraphQL-style filters.",
    "The executor evaluates the same tree against bundled mock users/orders datasets with pagination and sorting.",
    "Import/export preserves the full tree as versioned JSON; presets and history snapshots store named queries.",
  ],
  architectureTitle: "How a Query Flows",
  codeSnippet: {
    file: "lib/engine/sql-generator.ts",
    language: "typescript",
    caption:
      "The SQL generator recursively walks the same tree the UI renders — groups become parenthesized AND/OR clauses, rules become WHERE conditions.",
    code: `function nodeToSql(node: QueryNode): string | null {
  if (node.type === "rule") {
    return ruleToSql(node);
  }

  const parts = node.children
    .map(nodeToSql)
    .filter((p): p is string => p !== null && p.length > 0);

  if (parts.length === 0) return null;
  const joiner = node.logic.toUpperCase();
  return \`(\${parts.join(\` \${joiner} \`)})\`;
}

export function generateSql(root: QueryRoot, schema: DataSourceSchema) {
  const where = nodeToSql(root);
  const base = \`SELECT * FROM \${schema.tableName}\`;
  if (!where) return \`\${base};\`;
  return \`\${base}\\nWHERE \${where};\`;
}`,
  },
  decisions: [
    {
      title: "Query representation",
      choice: "Discriminated union tree — `QueryRule | QueryGroup`",
      rationale:
        "Rules and groups share an `id` but behave differently. A discriminated union on `type` makes recursive rendering, validation, and serialization type-safe — TypeScript narrows correctly in each branch.",
    },
    {
      title: "State management",
      choice: "Zustand store + pure tree mutation helpers",
      rationale:
        "The tree changes frequently (add, remove, reorder, collapse). Keeping mutations in testable pure functions and the store thin avoids reducer boilerplate while making tree CRUD easy to unit test in isolation.",
    },
    {
      title: "UI composition",
      choice: "Recursive `ConditionGroup` with scoped @dnd-kit per group",
      rationale:
        "Nested groups map naturally to recursive components. Scoping drag-and-drop to each group's sortable context keeps lists small and avoids global DnD complexity when trees get deep.",
    },
    {
      title: "Output formats",
      choice: "Separate generators from one shared AST",
      rationale:
        "SQL, MongoDB, and GraphQL have different syntax but the same logical tree. One `QueryRoot` feeds three generators plus the executor — add a format without touching the builder UI.",
    },
    {
      title: "Execution model",
      choice: "Client-side mock executor against bundled datasets",
      rationale:
        "For a portfolio tool, instant feedback matters more than hitting a real database. An in-memory executor proves the tree logic works; swapping `executor.ts` for an API route is the production path.",
    },
    {
      title: "Immutability strategy",
      choice: "JSON clone via `cloneRoot` before patching",
      rationale:
        "Simple and sufficient for UI-scale trees. Structural sharing libraries would help at huge scale, but JSON clone keeps the mutation model easy to reason about and test.",
    },
  ],
  outcomes: [
    "Unlimited nesting depth with AND/OR groups, drag-and-drop reorder, and collapsible panels",
    "Schema-driven operators and inputs — strings, numbers, booleans, dates, and enums each get appropriate controls",
    "Live preview across SQL, MongoDB, and GraphQL formats from a single filter tree",
    "Per-node validation catches empty groups, type mismatches, and invalid operators before mock execution",
    "Vitest coverage on SQL generation, validation, executor filtering, tree CRUD, and import/export safety",
    "Keyboard shortcuts, query history, presets, themes, and JSON import/export for a complete builder UX",
  ],
  limitations: [
    "Client-only execution — queries run against mock data in-memory, not a live database connection.",
    "SQL output is generic SQL-like strings, not dialect-specific (PostgreSQL vs MySQL vs SQLite differ on edge cases).",
    "JSON clone immutability is fine for typical tree sizes but would need a structural library if trees grew to hundreds of nodes.",
    "Regex and between operators depend on user input quality — validation helps but can't catch every semantic error a real DB would.",
    "Import enforces max depth and node count, but malformed JSON from external sources still needs careful sanitization in production.",
  ],
  lessonsLearned: [
    "Tree UIs are really two problems — a data model and a mutation API. Nail `cloneRoot`, `updateNodeInTree`, and `findNode` first; the React components become straightforward.",
    "Validation belongs in the engine, not scattered in components. Walking the same AST for validation, SQL generation, and execution keeps behavior consistent.",
    "Scoped drag-and-drop per group was the difference between a flaky DnD experience and one that works at nested depth.",
    "Multiple output formats from one tree is a strong architecture test — if the model can't serialize cleanly to SQL and MongoDB, the UI model is probably wrong.",
  ],
  buildNote: {
    summary:
      "Building a visual query builder from the data model up — recursive condition trees, live SQL/MongoDB preview, drag-and-drop nesting, and why the tree mutation API mattered more than the UI.",
    topics: [
      "Recursive trees",
      "Query engines",
      "Zustand",
      "Drag-and-drop",
      "Vitest",
    ],
  },
} satisfies CaseStudy;
