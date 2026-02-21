# capability-evaluation-engine — Usage Guide

## When to Use

Use when:

- Choosing core technology
- Evaluating vendor dependency
- Assessing platform risk
- Planning MVP foundations
- Considering major integration
- High financial or brand exposure decisions

Do NOT use for trivial tools.

---

## Command Pattern

/evaluate <capability> --context="<project goal>"

---

## Example 1 — MVP Evaluation

/evaluate Liferay 7.4 --context="B2B enterprise portal MVP for LATAM distribution company. Budget medium. Risk tolerance low."

---

## Example 2 — Technology Stack Decision

/evaluate React + Vite --context="Frontend foundation for scalable SaaS platform. MVP stage. High growth expectation."

---

## Example 3 — Design Tool Evaluation

/evaluate Figma --context="Design system foundation for multi-product startup. Team of 4 designers."

---

## Output Artifacts

1. research-output.json → For agents
2. research-summary.md → For humans
3. Optional: decision log entry (manual)

---

## Integration Flow

1. Mentor runs evaluation
2. Human reviews
3. Human decides
4. Architect consumes JSON
5. Spec formalizes
