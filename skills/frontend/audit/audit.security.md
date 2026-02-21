# Skill: audit.security.frontend

## Purpose

Review frontend code for security risks.

## Trigger

Use after implementation.

## Input Contract

| Field | Type   | Required |
| ----- | ------ | -------- |
| path  | string | yes      |

## Output

| Field           | Description |
| --------------- | ----------- |
| issues          | list        |
| recommendations | list        |
| severity        | level       |
