# Skill: vue.component.smart

## Purpose

Generate a Vue smart component with business logic.

## Trigger

Use when a component manages data, state, or interactions.

## Input Contract

| Field            | Type   | Required |
| ---------------- | ------ | -------- |
| name             | string | yes      |
| props            | object | yes      |
| responsibilities | string | yes      |
| specReference    | string | yes      |

## Output

| Field    | Description               |
| -------- | ------------------------- |
| filePath | src/components/{name}.vue |
| code     | Vue SFC                   |

## Rules

- Must use <script setup>
- Business logic allowed
- UI logic minimal
- Accessibility attributes required
-

## Failure Conditions

- Missing responsibilities
- UI-only logic

## Stack Constraint

This skill MUST NOT be executed in React or Next.js projects.
Execution must stop if Vue is not detected.
