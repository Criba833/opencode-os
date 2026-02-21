# Skill: node.service.generate

## Purpose

Generate a Node.js service class.

## Trigger

Use when business logic service is required.

## Input Contract

| Field            | Type   | Required |
| ---------------- | ------ | -------- |
| name             | string | yes      |
| responsibilities | string | yes      |
| specReference    | string | yes      |

## Output

| Field    | Description            |
| -------- | ---------------------- |
| filePath | src/services/{name}.ts |
| code     | Service class          |

## Rules

- No HTTP logic
- No DB logic unless specified
- Pure business logic only
