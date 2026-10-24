# 🧪 SauceDemo - Suite de Pruebas QA Manual y Automatización E2E

Proyecto integral de Control de Calidad (QA) enfocado en la evaluación funcional, visual y automatizada de la aplicación web [SauceDemo E-Commerce](https://www.saucedemo.com). Este repositorio documenta todo el ciclo de vida de las pruebas, desde el análisis manual y el diseño BDD hasta la automatización End-to-End utilizando frameworks modernos de la industria.

---

## 📌 Resumen del Proyecto

- **Aplicación Objetivo:** SauceDemo (Swag Labs)
- **QA Lead / Autora:** Cande Zamora
- **Estado:** Fase 1 (Manual & BDD) y Fase 2 (Automatización E2E) **Completadas**
- **Tech Stack:**
  - **Testing Manual & BDD:** Sintaxis Gherkin (Español), Markdown.
  - **Automatización:** Playwright, TypeScript, Node.js, `pnpm`.
  - **Arquitectura:** Page Object Model (POM).
  - **Control de Versiones:** Git & GitHub.

---

## 📂 Estructura del Repositorio

| Directorio / Archivo                   | Descripción                                                                                                                                                    |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[`BUG-REPORT.md`](./BUG-REPORT.md)** | Reporte detallado de defectos funcionales y visuales con severidad, pasos de reproducción y evidencias.                                                        |
| **[`TEST-PLAN.md`](./TEST-PLAN.md)**   | Plan de pruebas estratégico que incluye alcance, matriz de usuarios y escenarios BDD (Gherkin).                                                                |
| **[`pages/`](./pages/)**               | Clases del patrón **Page Object Model (POM)**: encapsulamiento de selectores y acciones de usuario (`LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`). |
| **[`tests/`](./tests/)**               | Suites de pruebas automatizadas E2E ejecutadas con Playwright.                                                                                                 |
| **[`images/`](./images/)**             | Capturas de pantalla vinculadas como evidencia en el reporte de fallos.                                                                                        |

---

## 🎯 Metodología y Arquitectura

1. **Fase 1 - QA Manual y BDD:**
   - Pruebas funcionales y exploratorias de flujos críticos.
   - Casos de prueba redactados en formato `Dado-Cuando-Entonces` (Gherkin) en español como puente entre negocio y desarrollo.
   - Categorización de defectos por severidad.

2. **Fase 2 - QA Automation (Playwright + TypeScript + POM):**
   - **Page Object Model (POM):** Desacoplamiento total entre los selectores/acciones de las pantallas (`pages/`) y la lógica de ejecución de los tests (`tests/`), garantizando alta mantenibilidad y escalabilidad.
   - **Independencia de Pruebas:** Tests limpios y modulares que replican recorridos reales de usuario (Happy Paths y casos negativos).

---

## 🚀 Hoja de Ruta (Roadmap)

- [x] Suite de Reporte de Defectos (`BUG-REPORT.md`)
- [x] Plan de Pruebas y Escenarios BDD (`TEST-PLAN.md`)
- [x] Configuración del entorno de automatización (TypeScript, Playwright, `pnpm`)
- [x] Implementación de la arquitectura Page Object Model (POM)
- [x] Automatización de suites de Autenticación, Inventario, Carrito y Checkout E2E
- [ ] Integración de Pipeline CI/CD con GitHub Actions (Próximamente)

---

## ⚙️ Guía de Ejecución Local

Si deseas clonar este repositorio y ejecutar las pruebas automatizadas en tu equipo:

1. **Clonar el repositorio:**

   ```bash
   git clone [https://github.com/Nelicah/saucedemo-qa-manual](https://github.com/Nelicah/saucedemo-qa-manual)
   cd saucedemo-qa-manual
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. Ejecutar las pruebas automatizadas
   - Ejecutar en modo headless (por defecto):
   ```bash
   pnpm exec playwright test
   ```

   - Ejecutar visualizando el navegador:
   ```bash
   pnpm exec playwright test --headed
   ```

   - Ver el reporte HTML detallado:
   ```bash
   pnpm exec playwright showreport
   ```

---

## 📬 Contacto & Links

- **Portfolio / Web:** [nelicah-dev.onrender.com](https://nelicah-dev.onrender.com/)
- **LinkedIn:** [Cande Zamora](https://www.linkedin.com/in/cande-zamora-125301349)
