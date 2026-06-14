import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      <h1 className="text-2xl font-bold text-lightest-slate">Project not found</h1>
      <p className="mt-2 text-slate">
        This case study doesn&apos;t exist or hasn&apos;t been published yet.
      </p>
      <Link
        href="/#projects"
        className="mt-6 text-sm font-medium text-accent hover:underline"
      >
        Back to projects
      </Link>
    </div>
  );
}
