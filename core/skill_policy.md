# Skill Policy

This document defines governance rules for OpenCode skills.

---

## Ownership

* Skills are system assets, not agent assets.
* Skills are versioned and reusable.
* Skills never embed business decisions.

---

## Responsibility Separation

* Skills define execution patterns.
* Agents define responsibility boundaries.
* Specs define correctness.

---

## Modification Rules

A skill may be modified only when:

* A pattern changes globally.
* A framework introduces breaking changes.
* A bug is identified in the execution logic.

---

## Prohibited Content

Skills must not contain:

* Business rules.
* Product decisions.
* UI design choices.
* Architectural ownership.

---

## Versioning

* Semantic versioning is required.
* Minor versions introduce compatible improvements.
* Major versions introduce breaking changes.

---

## Agent Permissions

| Agent | Allowed Skill Categories |
|------|-------------------------|
| architect | Architecture, Documentation |
| mentor | Architecture |
| implementer | Frontend, Backend, Testing |
| test-agent | Testing |
| git-agent | Workflow |
| accessibility-auditor | Frontend |
| security-auditor | Backend, Frontend |

---

This policy enforces semantic boundaries and prevents responsibility leakage.

