import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import CaseStudySection, {
  CaseStudyArchitectureFlow,
  CaseStudyCodeBlock,
  CaseStudyDecisionList,
  CaseStudyLimitationList,
  CaseStudyOutcomeList,
} from "@/components/case-study/CaseStudySection";
import { PROJECT_CATEGORY_LABELS } from "@/lib/projects";
import type { CaseStudy, Project } from "@/lib/types";

interface CaseStudyViewProps {
  project: Project;
  caseStudy: CaseStudy;
}

export default function CaseStudyView({
  project,
  caseStudy,
}: CaseStudyViewProps) {
  return (
    <CaseStudyLayout>
      <article>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </span>
            {project.status === "coming-soon" && (
              <span className="rounded-full border border-slate/30 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate">
                Coming Soon
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-lightest-slate sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-light-slate">
            {project.tagline}
          </p>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded border-2 border-slate/20 bg-slate/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={project.external}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Live demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-accent"
              aria-label={`View ${project.title} source code`}
            >
              <SiGithub size={18} />
              Source code
            </a>
          </div>

          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <div className="space-y-12">
          <CaseStudySection id="overview" title="Overview">
            <p>{caseStudy.overview}</p>
          </CaseStudySection>

          <CaseStudySection id="problem" title="Problem">
            <p>{caseStudy.problem}</p>
          </CaseStudySection>

          <CaseStudySection id="approach" title="Approach">
            <p>{caseStudy.approach}</p>
          </CaseStudySection>

          {caseStudy.architecture && caseStudy.architecture.length > 0 && (
            <CaseStudySection id="architecture" title="How a Message Flows">
              <CaseStudyArchitectureFlow steps={caseStudy.architecture} />
            </CaseStudySection>
          )}

          {caseStudy.codeSnippet && (
            <CaseStudySection id="code" title="Code Highlight">
              <CaseStudyCodeBlock {...caseStudy.codeSnippet} />
            </CaseStudySection>
          )}

          {caseStudy.decisions.length > 0 && (
            <CaseStudySection id="decisions" title="Key Decisions">
              <CaseStudyDecisionList decisions={caseStudy.decisions} />
            </CaseStudySection>
          )}

          {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
            <CaseStudySection id="outcomes" title="Outcomes">
              <CaseStudyOutcomeList outcomes={caseStudy.outcomes} />
            </CaseStudySection>
          )}

          {caseStudy.limitations && caseStudy.limitations.length > 0 && (
            <CaseStudySection id="limitations" title="Limitations & Trade-offs">
              <p className="mb-4 text-light-slate">
                Documenting what the system does not protect against is as
                important as what it does.
              </p>
              <CaseStudyLimitationList limitations={caseStudy.limitations} />
            </CaseStudySection>
          )}

          {caseStudy.lessonsLearned && caseStudy.lessonsLearned.length > 0 && (
            <CaseStudySection id="learnings" title="What I Learned">
              <CaseStudyOutcomeList outcomes={caseStudy.lessonsLearned} />
            </CaseStudySection>
          )}

          {caseStudy.videoUrl ? (
            <CaseStudySection id="build-notes" title="Build Notes">
              <div className="aspect-video overflow-hidden rounded border border-slate/20">
                <iframe
                  src={caseStudy.videoUrl}
                  title={`${project.title} build walkthrough`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CaseStudySection>
          ) : (
            <CaseStudySection id="build-notes" title="Build Notes">
              <p className="rounded-md border border-dashed border-slate/30 bg-light-navy/20 p-5 text-light-slate">
                Video walkthrough coming in a future update — documenting how
                this project was built, the tradeoffs involved, and what broke
                along the way.
              </p>
            </CaseStudySection>
          )}
        </div>

        <footer className="mt-16 border-t border-slate/20 pt-8">
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate transition hover:text-accent"
          >
            ← View all projects
          </Link>
        </footer>
      </article>
    </CaseStudyLayout>
  );
}
