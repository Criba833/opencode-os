# Skill: vue.composable.create

## Purpose

Generate a Vue composable following OpenCode architecture rules.

## Trigger

Use when stateful or reusable logic is required outside components.

## Input Contract

| Field          | Type   | Required |
| -------------- | ------ | -------- |
| name           | string | yes      |
| responsibility | string | yes      |
| specReference  | string | yes      |

## Output

| Field    | Description               |
| -------- | ------------------------- |
| filePath | src/composables/{name}.ts |
| code     | Vue composable code       |

## Rules

- Must start with use prefix
- No UI logic
- No direct API calls unless specified
- Must expose readonly state when possible

## Failure Conditions

- Name not starting with use
- Responsibility unclear
- Spec reference missing
