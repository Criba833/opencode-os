# Zod + React Hook Form Reference

## Patterns

- Use `zodResolver` to integrate Zod with React Hook Form.
- Keep schemas in a separate file for reuse.
- Always infer form types via `z.infer<typeof schema>`.
- Avoid manual validation; let Zod handle it.

## Best Practices

- One schema per form; reuse when possible.
- For cross-field validation, use `.refine()`.
- Controlled components: use `Controller`.
- Provide clear error messages in schemas.

## Commands

- Install dependencies: `npm install zod react-hook-form @hookform/resolvers`
- Type check: `tsc --noEmit`
