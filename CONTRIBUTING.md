# Contributing as a learner

This is a training repository. Contributions should demonstrate the workflow, not bypass it.

## One assignment, one branch, one pull request

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git switch -c assignment/ms-react-ui
```

Use the assignment ID in the branch name and pull-request title. Keep unrelated cleanup out of the change.

## Before requesting review

1. Re-read the assignment acceptance checks.
2. Run every verification command from the assignment.
3. Review `git diff --check` and your complete diff.
4. Fill in the pull-request template with what changed, how it was tested, accessibility impact, and what remains uncertain.
5. Link the Astudylab task or assignment ID—never private learner or organization data.

## Review behavior

- Respond to feedback with a new commit so the learning history remains visible.
- Do not resolve a conversation until the requested change is addressed or discussed.
- Never force-push after review begins unless the mentor explicitly asks.
- Never merge your own training pull request into upstream.

See [docs/git-workflow.md](docs/git-workflow.md) and [docs/code-review.md](docs/code-review.md) for detailed guidance.
