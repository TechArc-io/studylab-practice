# Setup

## Prerequisites

- Git 2.40 or newer
- Node.js 24 LTS
- npm 11
- A GitHub account

## Verify the baseline

After cloning your fork, run:

```bash
node --version
npm --version
npm ci
npm run check
```

Do not begin an assignment with a failing baseline. If a command fails before your changes, capture the exact command and output and ask your mentor before continuing.

Copy `.env.example` to `.env.local` only when an assignment needs local configuration. Never commit `.env.local`.
