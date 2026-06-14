import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-navy font-sans selection:bg-accent/30 selection:text-accent">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-20">
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-accent focus-visible:text-accent"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
          Back to projects
        </Link>
        {children}
      </div>
    </div>
  );
}
