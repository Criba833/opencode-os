# Fast Evaluation Mode

## capability-evaluation-engine — Compact Protocol

This mode is designed for rapid decision scenarios where:

- Time is limited
- Risk exposure is moderate
- A full evaluation is not required
- Early-stage idea validation is needed

It preserves deterministic structure but compresses depth.

---

## Activation

/evaluate <capability> --context="<project goal>" --mode=fast

---

## Output Structure (Compressed)

research-output.json includes only:

- context_summary
- capability_classification
- strategic_alignment (fit_score + justification)
- architecture_impact (integration_complexity only)
- risk_matrix (technical_risk + vendor_lock_in)
- cost_implications (initial_cost only)
- recommendation_tier
- executive_summary

---

## When to Use Fast Mode

- MVP exploration
- Early ideation
- Comparing 2–3 similar tools
- Internal brainstorming

---

## When NOT to Use Fast Mode

- Enterprise contracts
- Compliance-heavy environments
- High financial exposure
- Long-term architectural foundations
- Vendor lock-in risk scenarios

---

## Principle

Fast Mode reduces analysis depth but NEVER changes structure.
It preserves comparability and determinism.
