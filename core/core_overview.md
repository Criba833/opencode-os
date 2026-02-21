# OpenCode Skills System

This document defines the OpenCode Skills System. The system provides a deterministic, model-agnostic, and human-in-control mechanism to orchestrate agent behavior through reusable, structured skills.

---

## Purpose

The OpenCode Skills System enables:

* Deterministic agent execution.
* Reusable and portable skill definitions.
* Clear separation between **what** (specs), **who** (agents), and **how** (skills).
* Model-agnostic orchestration across Copilot, Claude, Gemini, and future AI systems.

---

## Core Principles

* Skills are execution patterns, not decisions.
* Agents orchestrate skills, but never redefine them.
* Specs define correctness.
* Auto-invoke rules define determinism.
* Humans retain final authority.

---

## System Components

The Skills System is composed of:

* **Skill Categories** – Logical classification of skills.
* **Skill Policy** – Governance rules for skill usage.
* **Auto-Invoke Mapping** – Deterministic mapping between actions and skills.
* **Individual Skills** – Reusable execution patterns.

---

## Relationship With Agents

Agents do not own knowledge.
Agents apply skills.

Skills define *how* work is executed.
Agents define *who* executes the work.

---

## Deterministic Orchestration

When a user request is processed:

1. The system detects intent.
2. The auto-invoke map selects the skill.
3. The agent loads the skill.
4. The agent executes using the skill instructions.

This guarantees stable and repeatable behavior across models.

---

## Files

* categories.md
* skill-policy.md
* auto-invoke-map.md

Each file is mandatory for a complete OpenCode Skills System.

