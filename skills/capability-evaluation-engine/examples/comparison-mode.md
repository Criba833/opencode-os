# Comparison Mode

## capability-evaluation-engine — Multi-Capability Comparison

This mode allows structured comparison between multiple capabilities.

---

## Activation

/evaluate [React, Vue, Svelte] --context="Frontend for SaaS MVP" --mode=compare

---

## Output

Produces:

1. Individual research-output.json for each capability
2. comparison-matrix.md

---

## comparison-matrix.md Structure

| Capability | Fit Score | Technical Risk | Lock-in | Learning Curve | Recommendation |
| ---------- | --------- | -------------- | ------- | -------------- | -------------- |

Includes short executive comparison summary.

---

## Rules

- No automatic ranking beyond fit_score.
- No forced decision.
- Human remains decision authority.
- Same deterministic evaluation structure per capability.

---

## Use Cases

- Frontend framework selection
- CMS selection
- Database selection
- AI provider comparison
- Design tooling decision

---

## Enterprise Note

Comparison mode improves decision transparency and auditability.
Recommended when:

- Client-facing justification required
- Financial commitment involved
- Strategic direction affected
