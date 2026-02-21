### 4️⃣ references/figma-best-practices.md

```markdown
# Figma UI/UX Best Practices

## Naming Conventions

- Frames: `screen/home`, `component/button-primary`
- Layers: `btn-primary/text`, `input-email/field`
- Pages: `Components`, `Screens`, `Prototypes`

## Layout

- Use 8px or 4px grid system for spacing.
- Use Auto-layout for flexible components.
- Group and align layers consistently.

## Typography

- Headings: H1, H2, H3 → use consistent font sizes.
- Body text: Maintain line-height for readability.
- Tokens: Use variables for fonts and sizes.

## Colors

- Primary / Secondary / Neutral / Feedback
- Define variables for dark/light modes.
- Use accessible contrast ratios (WCAG AA minimum).

## Components

- Reusable with Variants for different states.
- Modular design to allow composition.
- Document interactions and hover/focus states.

## Developer Handoff

- Export assets as SVG, PNG, WebP depending on usage.
- Annotate spacing, padding, margins.
- Provide clear link with access permissions.
  ✅ Con esto, el paquete UI/UX Design (Figma) queda completamente funcional y listo para OpenCode.

El siguiente paquete sería React + Next.js + React Hooks + React Router, siguiendo el mismo patrón de assets y references.

¿Continuamos con ese?

You said:
figma-components.figma
│ │ └── design-system.sketch no entoiendo als extensiones de sso archivo y me das un archivo .md

ChatGPT said:
Ah, entiendo tu confusión, Criba 😅. Déjame aclarar esto bien:

.figma y .sketch

No son archivos de texto; son formatos binarios/proprietarios usados por Figma y Sketch respectivamente.

No puedes escribir su contenido en un .md. Son archivos de diseño reales que se abren con sus programas.

La carpeta assets/templates/ solo contiene estos archivos para referencia y exportación de componentes, no código.

.md dentro de references/

Es un archivo de documentación, que sí es texto. Sirve para:

Explicar las mejores prácticas de UI/UX.

Dar reglas de naming, layout, colores, etc.

Dar instrucciones para los desarrolladores sobre cómo usar los assets.

En otras palabras:

assets/templates/
├── figma-components.figma <-- archivo real de Figma, binario
└── design-system.sketch <-- archivo real de Sketch, binario

references/
└── figma-best-practices.md <-- archivo de texto, documentación
Resumen:

Assets → Archivos reales de diseño (Figma / Sketch / otros).

References → Archivos .md de guía y documentación.

Esto sí es la práctica profesional, mantener los archivos binarios separados de la documentación de reglas.

Si quieres, puedo generar un ejemplo de “asset template” en formato de código exportable (como SVG o JSON de componentes) que sí puedas incluir directamente en OpenCode, para que no dependas de software propietario.

¿Quieres que haga eso?
```
