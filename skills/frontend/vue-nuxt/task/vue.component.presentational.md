# Skill: vue.component.presentational

## Purpose

Generate a UI-only Vue component.

## Trigger

Use when component is visual only.

## Input Contract

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| name          | string | yes      |
| props         | object | yes      |
| specReference | string | yes      |

## Output

| Field    | Description                  |
| -------- | ---------------------------- |
| filePath | src/components/ui/{name}.vue |
| code     | Vue SFC                      |

## Rules

- No business logic
- No stores
- No API calls
- Must be fully accessible
