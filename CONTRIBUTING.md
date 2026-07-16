# Contributing as a learner

This is a training repository. Contributions should demonstrate the workflow, not bypass it.

## One assignment, one branch, one pull request

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git switch -c assignment/ms-react-ui-accessible-list
```

Use the assignment ID in the branch name and pull-request title. Keep unrelated cleanup out of the change.

## Before requesting review

1. Re-read the assignment acceptance checks.
2. Run every verification command from the assignment.
3. Review `git diff --check` and your complete diff.
4. Fill in the pull-request template with what changed, how it was tested, accessibility impact, and what remains uncertain.
5. Open the pull request against `main` in your own fork. Include `[assignment-id]` in its title and link the Astudylab assignment ID—never private learner or organization data.
6. Wait for `Practice quality` to pass before requesting mentor review.

## Review behavior

- Respond to feedback with a new commit so the learning history remains visible.
- Do not resolve a conversation until the requested change is addressed or discussed.
- Never force-push after review begins unless the mentor explicitly asks.
- Do not open routine assignment pull requests against the canonical upstream repository.
- Merge into your fork only after mentor approval; the reviewed PR remains the evidence submitted to Astudylab.

See [docs/git-workflow.md](docs/git-workflow.md) and [docs/code-review.md](docs/code-review.md) for detailed guidance.
