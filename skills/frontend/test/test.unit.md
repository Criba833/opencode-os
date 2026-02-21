# Skill: test.unit.generate

## Purpose

Generate unit tests from spec acceptance criteria.

## Trigger

Use when TDD or regression tests are required.

## Input Contract

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| target        | string | yes      |
| specReference | string | yes      |

## Output

| Field    | Description                 |
| -------- | --------------------------- |
| filePath | tests/unit/{target}.spec.ts |
| code     | Vitest test file            |

## Rules

- Tests must fail if implementation missing
- No implementation code
