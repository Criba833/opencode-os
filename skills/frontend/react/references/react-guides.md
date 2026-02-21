# React + Next.js Local Guides

## Component Patterns

- Prefer **Server Components** for static data
- Use `"use client"` only when necessary
- Keep components small and focused
- Pass props, avoid global state unless necessary

## Hooks Patterns

- Custom hooks for reusable logic
- Keep hook names starting with `use`
- Avoid side effects in render

## Routing

- Use Next.js App Router (`app/` folder)
- Use `Link` for client navigation
- Use `usePathname` or `useRouter` for navigation state

## Styling

- Prefer Tailwind CSS or modular CSS
- Avoid inline styles for large projects

## Project Conventions

- TS strict mode enabled
- Components + hooks in separate folders
- All new hooks go into `assets/hooks-template.ts` if reusable
