---
name: react-next
description: >
  Patterns and best practices for React 19 + Next.js App Router, Hooks, and React Router.
  Trigger: When creating React components, pages, hooks, or routing in Next.js projects.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Writing React + Next.js components, hooks, and routing"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- Building React 19 components for Next.js applications
- Implementing client/server components with App Router
- Creating React Hooks following best practices
- Using React Router or Next.js routing for navigation
- Refactoring legacy React code to modern patterns

## Critical Patterns

### Server Components First

```typescript
// ✅ Default: Server Component
export default async function Page() {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}

// ✅ Client Component - only when needed
"use client";
export function Interactive() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
}





// ✅ Let React Compiler handle it
function Component({ items }) {
  const filtered = items.filter(x => x.active);
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

  const handleClick = (id) => console.log(id);

  return <List items={sorted} onClick={handleClick} />;
}

// ✅ Named imports only
import { useState, useEffect, useRef } from "react";

// ❌ Never default or * imports
import React from "react";
import * as React from "react";


Hooks and Client State

useState, useEffect, useRef, useContext → only in "use client" components

use() → suspend promises in Server Components

useActionState → manage server actions with pending state


// ✅ React 19: ref is just a prop
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

Next.js Routing

App Router: app/ folder preferred

Use Link for client navigation

"use client";

import { useState } from "react";

function ToggleButton() {
  const [on, setOn] = useState(false);
  return <button onClick={() => setOn(!on)}>{on ? "On" : "Off"}</button>;
}

// Server Component fetching data
export default async function UsersPage() {
  const users = await fetch("/api/users").then(r => r.json());
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}


Commands
# Create new React component
npx generate-react-component MyComponent --path=components/

# Create Next.js page
touch app/users/page.tsx

# Start dev server
npm run dev

# Run lint and type-check
npm run lint
npm run tsc


assets/
├── hooks-template.ts          # Snippets for custom hooks
└── component-template.tsx     # Minimal React + TSX component template


references/
└── react-guides.md            # Local docs with React + Next.js patterns


```
