# Architecture

The repository has two deliberately separate learning surfaces.

## Browser foundations

`foundations/` is plain HTML, CSS, and JavaScript. It teaches the browser platform without JSX, bundling, or framework abstractions.

## Product starter

`app/` is the Next.js App Router entry point. `src/components/` owns interactive UI, `src/data/` owns typed sample data, and `src/lib/` owns validation and domain boundaries. Tests live outside production code in `tests/`.

The baseline stays small and green. Assignments ask learners to add explicit behavior—routes, forms, data states, server validation, and tests—without hiding the learning objective inside a large production application.

## Boundaries

- Treat external and form data as `unknown` until validated.
- Keep secrets and authorization decisions on the server.
- Prefer Server Components; add `"use client"` only where browser state or events are required.
- Keep accessible names, focus order, loading, empty, error, and success states observable.
- Add a test at the lowest useful level and keep the complete quality gate green.
