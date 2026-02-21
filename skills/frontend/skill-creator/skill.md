---
name: skill-creator
description: >
  Creates new AI agent skills following the Agent Skills spec.
  Trigger: When user asks to create a new skill, add agent instructions, or document patterns for AI.
license: Apache-2.0
metadata:
  author: prowler-cloud
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Creating new skills"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## When to Use

Use this skill when:

- A reusable pattern or workflow needs to be formalized into an AI skill
- You want to ensure project-specific conventions are applied consistently
- Decision trees or step-by-step guidance are required for AI execution
- Creating or updating a skill for agents or OS System

**Do NOT use this skill when:**

- Documentation already exists (link via references/)
- The task is trivial or one-off
- The workflow doesn’t need AI guidance

---

## Critical Patterns

- **Always** define frontmatter: `name`, `description`, `license`, `metadata.version`, `metadata.author`, `scope`, `auto_invoke`
- **Use assets/** for code templates, schemas, examples
- **Use references/** for local docs (`docs/developer-guide/*.mdx`)
- **Ensure skill is reusable**: no one-off logic
- **Follow naming conventions**:
  - Generic skill: `{technology}` (e.g., `typescript`, `react-hooks`)
  - Prowler-specific: `prowler-{component}` (e.g., `prowler-ui`)
- **Register skill in AGENTS.md** after creation

---

## Skill Structure

skills/frontend/skill-creator/
├── SKILL.md # This file
├── assets/ # Optional templates, JSON schemas
│ ├── skill-template.md
│ └── skill-schema.json
└── references/ # Local docs references
└── agents.md

---

## Code Examples

### Create a new skill using template

```bash
# Copy template to new skill folder
cp skills/frontend/skill-creator/assets/skill-template.md skills/frontend/{new-skill}/SKILL.md

# Update frontmatter
sed -i 's/{skill-name}/{new-skill}/g' skills/frontend/{new-skill}/SKILL.md

# Add references if needed
mkdir -p skills/frontend/{new-skill}/references
cp skills/frontend/skill-creator/references/agents.md skills/frontend/{new-skill}/references/

| `{new-skill}` | Description of skill | [SKILL.md](skills/frontend/{new-skill}/SKILL.md) |


# List all skills
ls skills/frontend/

# Create a new skill folder with template
bash skills/frontend/skill-creator/assets/create-skill.sh {new-skill}

# Validate frontmatter and scope
grep -E 'name:|scope:|auto_invoke:' skills/frontend/{new-skill}/SKILL.md



## Resources

Templates: assets/
for skill templates and JSON schemas

Documentation: references/
for AGENTS.md and internal developer guides

Best Practices: Follow critical patterns for reusable, professional, and consistent skills



---

✅ **Checklist aplicado en el SKILL.md**:

- Frontmatter completo y correcto (`scope: [root, ui]`)
- Estructura de archivos sugerida y escalable
- Assets y references locales para reutilización
- Comandos prácticos para crear y registrar nuevas skills
- Decision tree y criterios claros de cuándo usar
- Reutilizable, profesional y listo para integrarse en OS System

---

Si quieres, puedo generar **ahora mismo el paquete de assets** para este `skill-creator`, incluyendo:

- `skill-template.md` con frontmatter editable
- `skill-schema.json` para validación de nuevas skills
- Script `create-skill.sh` para automatizar creación de skills

Esto dejaría el **paquete completo listo para uso inmediato**.

¿Continuamos con eso?
```
