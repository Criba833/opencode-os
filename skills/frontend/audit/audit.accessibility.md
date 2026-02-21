# Skill: audit.accessibility.wcag

## Purpose

Audit UI components against WCAG 2.1 AA requirements.

## Trigger

Use after UI components are implemented.

## Input Contract

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| componentPath | string | yes      |
| framework     | string | yes      |

## Output

| Field           | Description     |
| --------------- | --------------- | ------ | ---- |
| violations      | List of issues  |
| recommendations | Fix suggestions |
| severity        | low             | medium | high |

## Rules

- Do not modify code
- Only report findings
