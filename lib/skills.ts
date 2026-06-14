import { DATA } from "@/lib/constants";
import type { SkillGroupKey } from "@/lib/types";

export const SKILL_GROUP_LABELS: Record<SkillGroupKey, string> = {
  testing: "Testing & QA",
  practices: "Engineering Practices",
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  stateManagement: "State Management",
  tools: "Tools & Platforms",
};

export const SKILL_GROUP_ORDER: SkillGroupKey[] = [
  "testing",
  "practices",
  "languages",
  "frameworks",
  "stateManagement",
  "tools",
];

export function getSkillGroups() {
  return SKILL_GROUP_ORDER.map((key) => ({
    key,
    label: SKILL_GROUP_LABELS[key],
    items: DATA.skills[key],
  }));
}
