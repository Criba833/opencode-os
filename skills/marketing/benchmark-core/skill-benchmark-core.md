# 🧠 Benchmark Core Skill

Version: 3.0
Location: /marketing/skill-benchmark-core.md

---

## PURPOSE

Benchmark Core es una skill agnóstica de industria diseñada para analizar, evaluar y comparar proyectos digitales o físicos utilizando:

- Análisis estructural visible (no scraping profundo)
- Evaluación estratégica
- Puntuación objetiva
- Comparación competitiva o interna

Aplicable a:

- Web
- Apps
- SaaS
- Productos digitales
- Productos físicos
- Servicios

---

# OUTPUT STRUCTURE (STRICTLY DETERMINISTIC)

El resultado SIEMPRE debe generarse exactamente en este orden:

1. Input Summary
2. Research Analysis
3. Technology Analysis
4. UX/UI Analysis
5. Marketing Analysis
6. Functional Benchmark
7. Scoring Summary
8. Competitive Comparison (if applicable)
9. Strategic Insights
10. JSON Output

No alterar el orden.  
No eliminar secciones.  
Si no aplica, escribir: "Not applicable".

---

# INPUT SPECIFICATION

```yaml
benchmark_target:
  name:
  url:
  category:
  region:

analysis_scope:
  research: true
  technology: true
  ux_ui: true
  marketing: true
  functional: true

comparison_mode: standalone | multi | internal

scoring_scale:
  min: 0
  max: 5

weights:
  research: 1
  technology: 1
  ux_ui: 1
  marketing: 1
  functional: 1
```

Default scoring scale: 0–5  
Default weight per section: 1

---

# 1️⃣ INPUT SUMMARY

Describir:

- Nombre del proyecto
- Categoría
- Región
- Tipo de benchmark (standalone / multi / internal)
- Alcance activado

---

# 2️⃣ RESEARCH ANALYSIS

Evaluar estructuralmente (solo lo visible):

- Tipo de producto o servicio
- Público objetivo
- Propuesta de valor principal
- Posicionamiento
- Modelo de negocio inferido
- Diferenciación competitiva visible

Scoring (0–5):

0 = Confuso o incoherente  
1 = Débil  
2 = Parcial  
3 = Claro estándar  
4 = Bien definido  
5 = Muy claro y diferenciado

---

# 3️⃣ TECHNOLOGY ANALYSIS

Evaluar solo elementos visibles o razonablemente inferibles:

- Framework detectado o inferido
- CMS (si aplica)
- Performance percibida
- SEO estructural básico
- Tracking visible
- Seguridad (HTTPS)

Si no verificable → marcar explícitamente como "Not verifiable".

Scoring (0–5):

0 = Obsoleto o problemático  
1 = Bajo  
2 = Básico  
3 = Estándar actual  
4 = Moderno  
5 = Optimizado y sólido

---

# 4️⃣ UX/UI ANALYSIS

Evaluar:

- Claridad del layout
- Jerarquía visual
- CTA prominence
- Fluidez de navegación
- Consistencia visual
- Responsive design
- Microinteracciones visibles
- Accesibilidad básica

Scoring (0–5):

0 = Alta fricción  
1 = Problemático  
2 = Mejorable  
3 = Funcional  
4 = Muy bueno  
5 = Excelente experiencia

---

# 5️⃣ MARKETING ANALYSIS

Evaluar:

- Headline principal
- Tagline
- Claridad del mensaje
- Tono de comunicación
- Estrategia de CTA
- Prueba social
- Elementos de confianza
- Estructura de conversión visible

Scoring (0–5):

0 = Débil o genérico  
1 = Poco claro  
2 = Aceptable  
3 = Competente  
4 = Persuasivo  
5 = Estratégicamente sólido

---

# 6️⃣ FUNCTIONAL BENCHMARK

Definir funcionalidades clave según categoría.

Para cada feature:

- Presence: Yes / No
- Quality Score: 0–5

Calcular promedio funcional.

Si no aplica (ej. producto físico sin features digitales):
"Not applicable".

---

# 7️⃣ SCORING SUMMARY

Mostrar:

Research: X/5  
Technology: X/5  
UX/UI: X/5  
Marketing: X/5  
Functional: X/5

Calcular total:

If no weights:
Total = suma simple (máx 25)

If weights definidos:
Weighted Total = Σ(score × weight)

Clasificación:

0–10 → Bajo  
11–17 → Competitivo  
18–22 → Fuerte  
23–25 → Líder

---

# 8️⃣ COMPETITIVE COMPARISON

Solo si comparison_mode = multi o internal.

Generar tabla:

| Factor | Project A | Project B | Project C |

Identificar:

- Mejor por categoría
- Mejor puntaje total
- Diferencias clave

---

# 9️⃣ STRATEGIC INSIGHTS

Siempre incluir:

## Strengths

Fortalezas estructurales o estratégicas.

## Weaknesses

Debilidades críticas.

## Opportunities

Oportunidades claras de mejora.

## Risks

Riesgos competitivos o técnicos.

## Recommendations

Acciones concretas y priorizadas.

---

# 🔟 JSON OUTPUT (MANDATORY — LAST SECTION)

```json
{
  "project_name": "",
  "category": "",
  "scores": {
    "research": 0,
    "technology": 0,
    "ux_ui": 0,
    "marketing": 0,
    "functional": 0,
    "total": 0
  },
  "classification": "",
  "mode": "standalone",
  "strengths": [],
  "weaknesses": [],
  "opportunities": [],
  "risks": []
}
```

Si es multi:

```json
{
  "comparison": [
    {
      "project": "",
      "total_score": 0
    }
  ],
  "leader": ""
}
```

---

# BEHAVIORAL RULES

- No inventar datos técnicos no visibles.
- No asumir tecnología no verificable.
- Mantener tono analítico.
- No usar lenguaje promocional.
- Respetar estructura estricta.
- JSON siempre al final.
- No omitir secciones.

---

# END OF SKILL
