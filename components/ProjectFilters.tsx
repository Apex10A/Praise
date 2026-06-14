"use client";

import { cn } from "@/lib/utils";
import {
  PROJECT_CATEGORY_LABELS,
  getUsedProjectCategories,
  type ProjectCategoryFilter,
} from "@/lib/projects";

interface ProjectFiltersProps {
  activeCategory: ProjectCategoryFilter;
  onCategoryChange: (category: ProjectCategoryFilter) => void;
  projectCounts: Record<ProjectCategoryFilter, number>;
}

export default function ProjectFilters({
  activeCategory,
  onCategoryChange,
  projectCounts,
}: ProjectFiltersProps) {
  const categories = getUsedProjectCategories();

  return (
    <div
      className="mb-8 flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      <FilterButton
        label="All"
        count={projectCounts.all}
        isActive={activeCategory === "all"}
        onClick={() => onCategoryChange("all")}
      />
      {categories.map((category) => (
        <FilterButton
          key={category}
          label={PROJECT_CATEGORY_LABELS[category]}
          count={projectCounts[category]}
          isActive={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
}

function FilterButton({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
        isActive
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-slate/30 bg-transparent text-slate hover:border-slate/50 hover:text-light-slate"
      )}
    >
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
          isActive ? "bg-accent/20 text-accent" : "bg-slate/20 text-slate"
        )}
        aria-hidden="true"
      >
        {count}
      </span>
    </button>
  );
}
