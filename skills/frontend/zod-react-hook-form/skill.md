---
name: zod-react-hook-form
description: >
  Zod 4 schemas and React Hook Form integration patterns for type-safe forms.
  Trigger: When creating forms with validation and type inference using Zod and React Hook Form.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Form validation and schema integration"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- When building forms in React that require validation.
- When type-safe form data is needed via Zod schemas.
- When integrating Zod with React Hook Form for minimal boilerplate.

## Critical Patterns

### Zod

- Always define strict schemas using `z.object()`.
- Reuse schemas for API and form validation to avoid duplication.
- Use `.refine()` for cross-field validation.

### React Hook Form

- Register inputs using `register()` or `Controller` for controlled components.
- Integrate `zodResolver(schema)` from `@hookform/resolvers/zod`.
- Use defaultValues and reset() to control form state.

### Combined Patterns

- Keep schemas and UI components in sync.
- Avoid manual validation; let Zod enforce rules.
- Keep forms modular: separate field groups into components.

## Code Examples

```typescript
// assets/snippets/zod-schemas.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// assets/snippets/react-hook-form-example.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./zod-schemas";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginFormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register("password")} placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Login</button>
    </form>
  );
}










```

## commands

# Install dependencies

npm install zod react-hook-form @hookform/resolvers

# Run TypeScript type checking

tsc --noEmit

## Resources

Templates: See assets/snippets/
for reusable Zod schemas and React Hook Form examples.

Documentation: See references/zod-rhf-reference.md
for best practices and extended patterns.
