---
name: typescript
description: >
  Provides TypeScript patterns, best practices, and templates for frontend development.
  Trigger: When user requests TypeScript guidance, snippets, or validation.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "TypeScript guidance"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- Creating new TypeScript components or utilities
- Validating TypeScript code patterns
- Enforcing OpenCode frontend TS standards
- Generating type-safe snippets for AI agents

## Critical Patterns

- Always use strict typing
- Prefer `interface` for public object shapes
- Use `type` for union, intersection, and complex types
- Keep functions pure and typed
- Separate concerns: types, utils, components

## Code Examples

````ts
// Minimal React + TS component
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

# Validate all TS files
npx tsc --noEmit

# Run linter
npx eslint "src/**/*.{ts,tsx}"


Resources

Assets: See assets/
 for templates and snippets

References: See references/
 for internal docs and best practices



---

## 4️⃣ Assets

### `ts-template.ts`
```ts
// Template for creating a new TS utility function
export const {functionName} = ({params}: {paramTypes}) => {
  // Implement logic here
  return {returnValue};
};
````
