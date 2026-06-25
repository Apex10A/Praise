import { aiPageSummarizerCaseStudy } from "@/lib/case-studies/ai-page-summarizer";
import { cryptoflowCaseStudy } from "@/lib/case-studies/cryptoflow";
import { habitTrackerCaseStudy } from "@/lib/case-studies/habit-tracker-pwa";
import { lanternCaseStudy } from "@/lib/case-studies/lantern";
import { mutterboxCaseStudy } from "@/lib/case-studies/mutterbox";
import type { CaseStudy } from "@/lib/types";

const CASE_STUDIES: CaseStudy[] = [
  aiPageSummarizerCaseStudy,
  cryptoflowCaseStudy,
  lanternCaseStudy,
  habitTrackerCaseStudy,
  mutterboxCaseStudy,
];

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((caseStudy) => caseStudy.slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}

export function hasCaseStudy(slug: string): boolean {
  return CASE_STUDIES.some((caseStudy) => caseStudy.slug === slug);
}
