import { habitTrackerCaseStudy, lanternCaseStudy } from "@/lib/case-studies/data";
import { mutterboxCaseStudy } from "@/lib/case-studies/mutterbox";
import type { CaseStudy } from "@/lib/types";

const CASE_STUDIES: CaseStudy[] = [
  mutterboxCaseStudy,
  lanternCaseStudy,
  habitTrackerCaseStudy,
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
