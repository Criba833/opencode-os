# Skill: prisma.schema.generate

## Purpose

Generate Prisma schema model.

## Trigger

Use when Data Contract must be persisted.

## Input Contract

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| entityName    | string | yes      |
| fields        | object | yes      |
| specReference | string | yes      |

## Output

| Field    | Description          |
| -------- | -------------------- |
| filePath | prisma/schema.prisma |
| code     | Prisma model         |

## Rules

- Always include id
- snake_case for DB mapping
- camelCase for Prisma fields
