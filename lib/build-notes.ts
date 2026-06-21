import { getAllCaseStudies } from "@/lib/case-studies";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/lib/types";

export interface BuildNoteEntry {
  slug: string;
  project: Project;
  summary: string;
  topics: string[];
  duration?: string;
  videoUrl?: string;
  hasVideo: boolean;
  href: string;
}

export function getBuildNotes(): BuildNoteEntry[] {
  return getAllCaseStudies()
    .filter((caseStudy) => {
      if (!caseStudy.buildNote) {
        return false;
      }
      const project = getProjectBySlug(caseStudy.slug);
      return Boolean(project?.featured);
    })
    .map((caseStudy) => {
      const project = getProjectBySlug(caseStudy.slug)!;
      const buildNote = caseStudy.buildNote!;

      return {
        slug: caseStudy.slug,
        project,
        summary: buildNote.summary,
        topics: buildNote.topics,
        duration: buildNote.duration,
        videoUrl: buildNote.videoUrl,
        hasVideo: Boolean(buildNote.videoUrl),
        href: `/projects/${caseStudy.slug}#build-notes`,
      };
    });
}

export function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    if (
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "youtube.com"
    ) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (parsed.hostname === "www.youtube-nocookie.com") {
      return url;
    }
  } catch {
    return url;
  }

  return url;
}
