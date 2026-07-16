# `ms-realworld-ci` — Add tests and a green CI pipeline

**Outcome:** design a proportionate safety net and make it reproducible on every pull request.

## Scenario

Choose one behavior added in an earlier assignment whose regression would harm a learner. Improve its tests and the repository’s automated feedback.

## Steps

1. Create `assignment/ms-realworld-ci` from updated `main`.
2. Write down the failure you want the test to catch.
3. Prove the new test fails for the broken behavior, then restore the implementation.
4. Improve `.github/workflows/ci.yml` so pull requests run install, lint, typecheck, tests, and build with dependency caching and least privilege.
5. Keep passing output concise and make failures point to the affected layer.

## Acceptance checks

- Tests verify user-visible or domain behavior, not private implementation details.
- The test is demonstrated red before green in the PR notes.
- CI uses `npm ci`, the repository Node version, and read-only default permissions.
- All required jobs are green on the submitted PR.

## Verify

```bash
npm ci
npm run check
git diff --check
```

## Explain in your PR

What regression does each test prevent? Why did you choose that test level? What CI failure would be easiest to diagnose now?
