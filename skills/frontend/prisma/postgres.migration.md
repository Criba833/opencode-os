# Skill: postgres.migration.generate

## Purpose

Generate SQL migration from Prisma model.

## Trigger

Use after Prisma schema generation.

## Input Contract

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| migrationName | string | yes      |
| specReference | string | yes      |

## Output

| Field    | Description       |
| -------- | ----------------- |
| filePath | prisma/migrations |
| code     | SQL migration     |
