# Security

This public learning repository must never contain secrets, production data, private learner details, or customer information.

- Use `.env.local` for local secrets; it is ignored by Git.
- Use fake data in examples and tests.
- Before committing, inspect `git diff --staged` for tokens, passwords, email addresses, and copied production payloads.
- If a secret is committed, revoke it immediately. Deleting the line in a later commit does not remove it from Git history.

Report a repository security concern privately through the security contact listed by the TechArc-io organization. Do not open a public issue containing an exploitable detail or secret.
