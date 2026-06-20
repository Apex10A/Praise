import type { CaseStudyDecision } from "@/lib/types";

export default function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-slate/15 pt-10 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-4 sm:grid-cols-8 sm:gap-8 lg:gap-10">
        <h2 className="sm:col-span-2 sm:sticky sm:top-24 sm:self-start text-xs font-bold uppercase tracking-[0.2em] text-light-slate">
          {title}
        </h2>
        <div className="sm:col-span-6 text-sm leading-relaxed text-slate">
          {children}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyDecisionList({
  decisions,
}: {
  decisions: CaseStudyDecision[];
}) {
  return (
    <ul className="space-y-4">
      {decisions.map((decision) => (
        <li
          key={decision.title}
          className="rounded-md border border-slate/20 bg-light-navy/40 p-5"
        >
          <h3 className="font-medium text-lightest-slate">{decision.title}</h3>
          <p className="mt-2">
            <span className="font-medium text-light-slate">Choice: </span>
            {decision.choice}
          </p>
          <p className="mt-2">
            <span className="font-medium text-light-slate">Why: </span>
            {decision.rationale}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyOutcomeList({ outcomes }: { outcomes: string[] }) {
  return (
    <ul className="space-y-2">
      {outcomes.map((outcome) => (
        <li
          key={outcome}
          className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
        >
          {outcome}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs font-semibold text-accent"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <p className="pt-0.5">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function CaseStudyCodeBlock({
  file,
  language,
  code,
  caption,
}: {
  file: string;
  language: string;
  code: string;
  caption: string;
}) {
  return (
    <figure>
      <figcaption className="mb-3 text-light-slate">{caption}</figcaption>
      <div className="overflow-hidden rounded-md border border-slate/20 bg-light-navy/60">
        <div className="border-b border-slate/20 px-4 py-2 font-mono text-xs text-slate">
          {file}
        </div>
        <pre
          className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-light-slate"
          data-language={language}
        >
          <code>{code}</code>
        </pre>
      </div>
    </figure>
  );
}

export function CaseStudyLimitationList({
  limitations,
}: {
  limitations: string[];
}) {
  return (
    <ul className="space-y-3">
      {limitations.map((limitation) => (
        <li
          key={limitation}
          className="rounded-md border border-slate/20 bg-light-navy/20 p-4 text-light-slate"
        >
          {limitation}
        </li>
      ))}
    </ul>
  );
}
