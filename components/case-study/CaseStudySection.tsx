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
    <section id={id} className="scroll-mt-16">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-light-slate">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-slate">{children}</div>
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
