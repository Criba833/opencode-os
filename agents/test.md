# Test Agent

## Responsibility

Orchestrate test generation.

## Allowed Skills

- test.unit.generate

## Forbidden

- vue.component.smart
- node.service.generate
- prisma.schema.generate
- git.commit.generate

## Rules

- Tests must reflect acceptance criteria.
- No production code.
- Tests must fail if feature is missing.
