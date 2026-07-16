# Curriculum alignment

This repository supports the Astudylab frontend pathway without duplicating the lessons. Astudylab teaches and checks understanding; this repository provides the sustained workspace where learners apply it.

## Progression

| Astudylab module | Practice area | Evidence |
| --- | --- | --- |
| Orientation & environment | Setup and baseline quality gate | Local verification notes |
| Semantic HTML & accessibility | `foundations/index.html` | Accessible document change |
| CSS & responsive layout | `foundations/styles.css` | Responsive layout change |
| JavaScript foundations | `foundations/app.js` | Interactive behavior and debugging notes |
| Git & GitHub | [`ms-git-collab`](assignments/01-git-collaboration.md) | Reviewed pull request |
| Package management & tooling | `package.json` and lockfile | Reproducible command change |
| TypeScript | [`ms-ts-types`](assignments/02-typescript-data-boundary.md) | Typed boundary pull request |
| React | [`ms-react-ui`](assignments/03-react-accessible-list.md) | Accessible component pull request |
| React data & effects | `src/components/PracticeList.tsx` | Explicit async states and cleanup |
| React forms & testing | `src/components/PracticeForm.tsx` and tests | Validated form and component tests |
| Next.js App Router | [`ms-next-route`](assignments/04-next-route-action.md) | Route and Server Action pull request |
| Server, data & security | `src/lib/` | Validated, tenant-aware server boundary |
| Quality, testing & CI | [`ms-realworld-ci`](assignments/05-quality-ci.md) | Tests and green CI |
| Responsible AI workflow | [`ms-ai-workflow`](assignments/06-responsible-ai.md) | Defensible AI-assisted pull request |
| Capstone | [`capstone-frontend`](assignments/07-capstone.md) | Reviewed PR, deployment, and rationale |

## Assignment contract

Assignment filenames and IDs are stable because Astudylab links learning progress to them. A task may become clearer over time, but its ID and intended evidence must not change without a coordinated Astudylab release.

Every reviewed assignment includes:

- a realistic scenario and bounded outcome;
- prerequisites and estimated effort;
- acceptance checks observable by a reviewer;
- exact local verification commands;
- a pull-request evidence requirement;
- reflection prompts that make the learner explain the work.

Completing files or opening a pull request is not automatically a pass. The mentor reviews the submitted evidence against the rubric shown in Astudylab.
