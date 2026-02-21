# Auto-Invoke Mapping

This document defines deterministic mappings between detected actions and skills.

The system must always load the mapped skill before execution.

---

## Frontend

| Action | Skill |
|------|-------|
| Creating Vue component | vue-component |
| Creating composable | vue-composable |
| Creating Nuxt page | nuxt-page |
| Creating React component | react-component |
| Creating Astro component | astro-component |
| Creating store | pinia-store |

---

## Backend

| Action | Skill |
|------|-------|
| Writing Prisma model | prisma-schema |
| Writing API route | node-api |
| Writing SQL query | postgres-query |
| Creating auth handler | auth-handler |
| Writing validation schema | validation-schema |

---

## Testing

| Action | Skill |
|------|-------|
| Writing unit tests | vitest |
| Writing E2E tests | playwright |
| Writing API tests | api-testing |
| Creating regression tests | regression-suite |

---

## Workflow

| Action | Skill |
|------|-------|
| Creating commit | git-commit |
| Writing PR | pr-description |
| Writing release notes | release-notes |

---

## Rules

* Only one primary skill is auto-invoked per action.
* Secondary skills may be loaded manually.
* Auto-invoke mappings must remain stable across versions.

---

This file is the foundation of OpenCode deterministic orchestration.

