import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import VideoEmbed from "@/components/build-notes/VideoEmbed";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import ProjectThumbnail from "@/components/ProjectThumbnail";
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

function BuildNotesSection({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy: CaseStudy;
}) {
  const buildNote = caseStudy.buildNote;

  if (!buildNote) {
    return null;
  }

  return (
    <CaseStudySection id="build-notes" title="Build Notes">
      <p className="mb-6 text-light-slate">{buildNote.summary}</p>

      {buildNote.topics.length > 0 && (
        <ul
          className="mb-6 flex flex-wrap gap-2"
          aria-label="Topics covered in build notes"
        >
          {buildNote.topics.map((topic) => (
            <li key={topic}>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      )}

      {buildNote.videoUrl ? (
        <VideoEmbed
          url={buildNote.videoUrl}
          title={`${project.title} build walkthrough`}
        />
      ) : (
        <p className="rounded-md border border-dashed border-slate/30 bg-light-navy/20 p-5 text-light-slate">
          Video walkthrough coming soon — this page will host a recording
          documenting how this project was built, the tradeoffs involved, and
          what broke along the way.
        </p>
      )}
    </CaseStudySection>
  );
}

export default function CaseStudyView({
  project,
  caseStudy,
}: CaseStudyViewProps) {
  return (
    <CaseStudyLayout>
      <article>
        <header className="grid gap-8 border-b border-slate/20 pb-10 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pb-12">
          <div className="lg:col-span-5 lg:pt-1">
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

            <h1 className="text-3xl font-bold tracking-tight text-lightest-slate sm:text-[2.5rem] sm:leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-light-slate sm:text-lg">
              {project.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate/15 pt-6">
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
              {caseStudy.buildNote && (
                <Link
                  href="#build-notes"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-accent"
                >
                  Build notes
                </Link>
              )}
            </div>

            <ul
              className="mt-5 flex flex-wrap gap-2"
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
          </div>

          <div className="lg:col-span-7">
            <ProjectThumbnail
              src={project.image}
              alt={project.title}
              priority
              variant="detail"
            />
          </div>
        </header>

        <div className="mt-10 space-y-0 lg:mt-12">
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
            <CaseStudySection
              id="architecture"
              title={caseStudy.architectureTitle ?? "How It Works"}
            >
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

          <BuildNotesSection project={project} caseStudy={caseStudy} />
        </div>

        <footer className="mt-12 border-t border-slate/20 pt-8 lg:mt-14">
          <Link
            href="/#build-notes"
            className="text-sm font-medium text-slate transition hover:text-accent"
          >
            ← View all build notes
          </Link>
        </footer>
      </article>
    </CaseStudyLayout>
  );
}
