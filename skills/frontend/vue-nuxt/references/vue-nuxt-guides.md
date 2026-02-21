# Vue + Nuxt Local Guides

## Component Patterns

- Use `<script setup>` syntax
- Keep components small and focused
- Props validation via TypeScript interface
- Scoped styling whenever possible

## Composables Patterns

- Reusable logic in `composables/` folder
- Start function names with `use` (`useToggle`, `useFetch`)
- Avoid side effects in template render

## Nuxt Modules

- Custom modules go under `modules/` folder
- Use `defineNuxtModule` for module creation
- Always provide options interface for TypeScript

## Styling

- Tailwind preferred
- Scoped CSS as fallback
- Avoid inline styles for maintainability

## Project Conventions

- TypeScript strict mode enabled
- Components and composables separated
- Modules documented in `references/` for internal team
