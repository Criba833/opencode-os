# OpenCode Resolver

The resolver enforces deterministic orchestration between user intent, skills, and agents.

---

## Resolution Order

1. Parse user intent.
2. Match intent to auto-invoke mapping.
3. Load primary skill.
4. Assign Implementer agent.
5. Validate stack compatibility.
6. Execute skill.

---

## Stack Validation Rule

If requested stack and project stack conflict:

- Execution MUST stop.
- The system MUST request user confirmation.
- The system MUST NOT adapt technologies automatically.

---

## Skill Enforcement Rules

- Only one primary skill is auto-invoked.
- Secondary skills require manual instruction.
- Skills cannot be modified by agents.

---

## Agent Enforcement Rules

- Architect decides structure.
- Mentor advises.
- Implementer executes.
- Auditors review.
- Workflow documents.

---

## Failure Handling

If resolution fails:

- The system must explain the conflict.
- The system must request clarification.

---

The resolver is the authority that governs all OpenCode agent behavior.

