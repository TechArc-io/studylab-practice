import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const catalog = JSON.parse(readFileSync(resolve(root, "curriculum-map.json"), "utf8"));
const errors = [];
const ids = new Set();

if (catalog.repository !== "TechArc-io/studylab-practice") {
  errors.push("repository must remain TechArc-io/studylab-practice");
}

for (const assignment of catalog.assignments ?? []) {
  if (ids.has(assignment.id)) errors.push(`duplicate assignment id: ${assignment.id}`);
  ids.add(assignment.id);
  if (!catalog.modules?.includes(assignment.moduleId)) {
    errors.push(`${assignment.id} references unknown module ${assignment.moduleId}`);
  }
  if (assignment.submission?.target !== "learner-fork") {
    errors.push(`${assignment.id} must submit to the learner's fork`);
  }
  if (assignment.submission?.evidence !== "github-pr") {
    errors.push(`${assignment.id} must use GitHub pull-request evidence`);
  }
  if (!assignment.submission?.requiredChecks?.includes("Practice quality")) {
    errors.push(`${assignment.id} must require the Practice quality check`);
  }
  const path = resolve(root, assignment.path ?? "");
  if (!assignment.path?.startsWith("assignments/") || !existsSync(path)) {
    errors.push(`${assignment.id} has a missing assignment path: ${assignment.path}`);
    continue;
  }
  const body = readFileSync(path, "utf8");
  if (!body.includes(`\`${assignment.id}\``)) {
    errors.push(`${assignment.path} does not declare stable id ${assignment.id}`);
  }
  if (!body.includes("docs/git-workflow.md") && assignment.id !== "ms-git-collab") {
    errors.push(`${assignment.path} must link to the shared Git workflow`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`✓ curriculum map: ${ids.size} stable assignments aligned`);
