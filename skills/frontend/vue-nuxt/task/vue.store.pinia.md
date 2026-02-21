# Skill: vue.store.pinia.create

## Purpose

Generate a Pinia store following OpenCode architecture rules.

## Trigger

Use when shared application state is required.

## Input Contract

| Field         | Type     | Required |
| ------------- | -------- | -------- |
| name          | string   | yes      |
| state         | object   | yes      |
| actions       | string[] | yes      |
| specReference | string   | yes      |

## Output

| Field    | Description          |
| -------- | -------------------- |
| filePath | src/stores/{name}.ts |
| code     | Pinia store code     |

## Rules

- Store name must start with use
- No UI logic
- No API calls unless explicitly requested
- State must be strongly typed

## Failure Conditions

- Missing state
- Missing actions
- Invalid naming
