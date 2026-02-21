# SKILL: capability-evaluation-engine

## Purpose

Provide structured, medium-depth evaluation of a capability
(technology, tool, framework, service, platform, design system, protocol, etc.)
within a specific project context.

This skill clarifies decision terrain.

It does NOT:

- Design architecture
- Generate specs
- Make final decisions
- Replace human judgment

It produces:

1. research-output.json (machine-consumable)
2. research-summary.md (human-readable)

---

## Activation Mode

Manual only.

Example:

/evaluate <capability> --context="<project goal>"

---

## Required Input

The evaluation MUST include:

- Capability name
- Project context
- Business objective
- Stage (MVP / Growth / Enterprise / Migration)
- Risk tolerance (low / medium / high)
- Budget sensitivity (low / medium / high)

If context is missing, request clarification.

---

## Allowed Actions

- Web documentation lookup
- Pricing lookup
- Ecosystem review
- Community activity check
- Version verification
- Comparative research

---

## Output Structure (Deterministic)

The output ALWAYS follows the exact same structure.

---

### research-output.json

{
"context_summary": "",
"capability_classification": "",
"primary_use_cases": [],
"strategic_alignment": {
"fit_score": 0-10,
"justification": ""
},
"architecture_impact": {
"integration_complexity": "low | medium | high",
"dependency_surface": [],
"scalability_impact": "",
"operational_overhead": ""
},
"learning_curve": {
"level": "low | medium | high",
"team_readiness": "",
"estimated_onboarding_time": ""
},
"ecosystem_maturity": {
"community_strength": "low | medium | high",
"documentation_quality": "low | medium | high",
"update_frequency": "",
"long_term_viability": ""
},
"risk_matrix": {
"technical_risk": "low | medium | high",
"vendor_lock_in": "low | medium | high",
"compliance_exposure": "low | medium | high",
"brand_reputation_risk": "low | medium | high",
"maintenance_risk": "low | medium | high"
},
"cost_implications": {
"initial_cost": "",
"long_term_cost": "",
"scaling_cost_risk": ""
},
"alternatives": [],
"replacement_difficulty": "low | medium | high",
"recommendation_tier": "green | yellow | red",
"executive_summary": ""
}

---

### research-summary.md

Human-readable version of the exact same structure,
with concise but analytical explanation.

---

## Constraints

- No hype language.
- No decision imposition.
- No architectural prescriptions.
- No speculative claims without justification.
- Keep medium-depth (concise but analytical).

---

## Integration Rule

This skill feeds:

Mentor → Human → Architect

Architect may consume research-output.json.

Spec Agent may reference executive_summary.

---

## Enterprise Safety Layer

Always evaluate:

- Compliance surface
- Brand impact
- Vendor concentration risk
- Exit strategy viability

---

End of skill definition.
