---
name: vue-nuxt
description: >
  Guides AI to create and manage Vue + Nuxt + Nuxt Modules projects and components.
  Trigger: When user requests Vue/Nuxt component, composable, or project guidance.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- Creating reusable Vue 3 / Nuxt 3 components
- Developing composables (custom hooks) in Nuxt
- Managing modules/plugins for Nuxt projects
- Following best UI/UX patterns in Vue + Nuxt

**Don't use this skill when:**

- The task is purely HTML/CSS (use frontend-css skill)
- Only static content is required
- Documentation already exists (link to references)

---

## Critical Patterns

- Use `<script setup>` syntax for Vue 3 components
- Prefer composables for reusable logic (`useXxx`)
- Nuxt Modules go under `modules/` in project
- Tailwind CSS for styling (if available)
- Separate assets (components, composables) and references
- Always use TypeScript for strict typing in composables

---

## Code Examples

### Minimal Component Template

See `assets/component-template.vue`

### Minimal Composable Template

See `assets/composables-template.ts`

---

## Commands

```bash
# Create a new Nuxt project
npx nuxi init my-project
cd my-project
npm install

# Run dev server
npm run dev

# Generate static site
npm run build
npm run preview


Resources

Templates: See assets/
 for components and composables

Documentation: See references/
 for local guides



```
