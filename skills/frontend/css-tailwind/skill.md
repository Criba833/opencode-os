---
name: tailwind-sass-css
description: >
  Tailwind, SASS, and CSS patterns, utilities, and best practices for frontend projects.
  Trigger: When styling with Tailwind, SASS, or vanilla CSS in frontend projects.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Styling frontend components"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- When implementing Tailwind classes dynamically or conditionally.
- When creating reusable SASS mixins or CSS utilities.
- When following best practices in frontend styling.

## Critical Patterns

### Tailwind

- Never use `var()` inside `className`.
- Always use semantic Tailwind classes over hex values.
- Use `cn()` for conditional class merging.
- Apply design system tokens, not arbitrary colors (except escape hatches).

### SASS

- Organize mixins in reusable files (`assets/snippets/sass-mixins.scss`).
- Use nesting no deeper than 3 levels.
- Variables should follow `$theme-*` convention.

### CSS

- Include resets or base utilities in `assets/snippets/css-reset.css`.
- Keep specificity low.
- Avoid inline styles unless dynamic values require it.

## Code Examples

````typescript
// Tailwind dynamic classes
<div className={cn(
  "rounded-lg border",
  isPrimary && "bg-blue-500 text-white",
  disabled && "opacity-50 cursor-not-allowed"
)} />

// SASS mixin
@mixin card($radius: 8px) {
  border-radius: $radius;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

// CSS reset (import)
@import 'css-reset.css';


## Commands

# Compile SASS
sass assets/snippets/sass-mixins.scss dist/styles.css --style=compressed

# Tailwind build
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify


Resources

Templates: See assets/snippets/
 for Tailwind utilities, SASS mixins, and CSS resets.

Documentation: See references/tailwind-reference.md
 for extended patterns and rules.



---

### 2️⃣ assets/snippets/tailwind-utilities.ts

```typescript
// Tailwind utility function for conditional class merging
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Example usage
// const buttonClass = cn("px-4 py-2", isPrimary && "bg-blue-500 text-white");
````
