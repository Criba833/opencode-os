# OpenCode Adapter

This document defines how the OpenCode CLI integrates with the OpenCode Skills System.

---

## Purpose

The adapter ensures that OpenCode CLI respects:

* Auto Invoke Map
* Skill Policy
* Skill Contracts
* Agent Responsibilities

---

## Prompt Injection Rule

Before agent execution, OpenCode must prepend:

1. Selected Skill definition.
2. Skill Policy excerpt.
3. Agent responsibility summary.

---

## Execution Contract

OpenCode CLI must:

* Never modify Skill content.
* Never modify Agent rules.
* Never bypass auto-invoke resolution.

---

## Model Independence

This adapter applies equally to:

* Copilot
* Claude
* Gemini
* Any future model

---

## Logging

OpenCode should log:

* Detected action
* Selected skill
* Selected agent
* Execution result

---

This file enables OpenCode to act as a deterministic agent orchestrator.

