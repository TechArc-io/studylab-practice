# Git workflow

The upstream repository is `TechArc-io/studylab-practice`. Your fork belongs to you.

```bash
git remote -v
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
git switch -c assignment/ASSIGNMENT-ID
```

Commit complete ideas with clear imperative messages. Before pushing:

```bash
git status
git diff --check
git diff --stat upstream/main...HEAD
npm run check
git push -u origin assignment/ASSIGNMENT-ID
```

Open a pull request from your fork branch into the upstream `main` branch. Keep your fork; it accumulates the evidence from the whole pathway.
