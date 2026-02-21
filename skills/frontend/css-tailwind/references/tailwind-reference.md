# Tailwind, SASS & CSS Reference

## Tailwind Patterns

- Prefer semantic classes (bg-primary, text-slate-400)
- Avoid hex values and var() in className
- Use cn() for conditional/merged classes
- Dynamic values: use `style={{ width: `${x}%` }}`

## SASS Best Practices

- Keep nesting shallow (≤3 levels)
- Variables start with `$theme-` prefix
- Use mixins for reusable UI patterns
- Separate layout, typography, and components logically

## CSS Guidelines

- Include a reset at the top of the project
- Use low specificity
- Use classes over inline styles
- Prefer mobile-first responsive rules

## Useful Commands

- Compile SASS: `sass assets/snippets/sass-mixins.scss dist/styles.css --style=compressed`
- Build Tailwind: `npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify`
