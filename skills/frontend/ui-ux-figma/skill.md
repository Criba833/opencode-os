---
name: ui-ux-figma
description: >
  Design and prototyping patterns using Figma for UI/UX consistency and efficiency.
  Trigger: When creating, updating, or documenting design components and flows in Figma.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Figma design workflow and component usage"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

- Creating or updating UI components in Figma.
- Designing responsive layouts and flows.
- Documenting reusable design patterns for developers.
- Standardizing typography, color palettes, and spacing.

## Critical Patterns

### Design System
- Maintain a consistent color palette, typography, and spacing.
- Use reusable components with variants for scalability.
- Keep components modular for flexibility.

### Figma Workflow
- Organize files into Pages: Components, Screens, Prototypes.
- Name layers and frames clearly for developer handoff.
- Use auto-layout for responsive components.
- Document interactions and states using Figma Variants.

### Developer Handoff
- Include annotations for spacing, typography, and colors.
- Export assets in standard formats: SVG for icons, PNG/WebP for images.
- Provide Figma link with permissions for access.

## Code / Asset Examples

- **Assets/Templates**:
  - `figma-components.figma` → Ready-to-use component library.
  - `design-system.sketch` → Optional Sketch file for alternate tooling.

- **References/Best Practices**:
  - Guidelines on typography, spacing, and responsive layout.
  - Standardized interaction patterns.

## Commands / Tips

```bash
# Figma CLI (optional) for exporting assets
npm install -g figma-cli

# Export assets
figma export --file <file-id> --format svg,png --output ./assets


## Resources

Templates: See assets/templates/
 for component libraries.

Documentation: See references/figma-best-practices.md
 for design rules and patterns.