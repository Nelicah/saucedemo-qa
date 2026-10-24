# 📋 Plan de Pruebas (Test Plan) - SauceDemo QA Manual Suite

**Proyecto:** Aplicación E-Commerce SauceDemo  
**URL Objetivo:** https://www.saucedemo.com  
**Autora:** Cande Zamora  
**Versión:** 1.0.0  
**Fecha:** Octubre 2026

---

## 1. 🎯 Objetivos y Alcance (Scope)

### 1.1 Dentro del Alcance (In-Scope)

- **Autenticación:** Funcionalidad de inicio de sesión con credenciales válidas, usuario bloqueado e incorrectas.
- **Catálogo de Productos:** Vista de inventario, ordenación de productos (A-Z, Z-A, precio ascendente, precio descendente) y vista detallada.
- **Gestión del Carrito:** Añadir y eliminar artículos desde el inventario y la página del carrito, estado del contador del carrito.
- **Flujo de Checkout:** Paso 1 (Validación de datos del usuario), Paso 2 (Resumen y cálculo de totales) y Paso 3 (Confirmación del pedido).
- **UI/UX y Responsividad:** Inspección visual de elementos y coherencia del diseño en escritorio.

### 1.2 Fuera del Alcance (Out-of-Scope)

- **Validación de API / Backend:** Pruebas directas de bases de datos o endpoints REST (enfocado exclusivamente en la interfaz Web UI).
- **Pruebas de Carga y Rendimiento:** Simulación de usuarios concurrentes o pruebas de estrés del servidor.
- **Pruebas de Seguridad y Penetración:** Análisis de vulnerabilidades o inyecciones SQL/XSS más allá de las validaciones básicas de formularios.

---

## 2. 💻 Entorno de Pruebas y Credenciales

### 2.1 Entorno de Pruebas

- **Navegadores:** Google Chrome (Última versión), Mozilla Firefox (Última versión)
- **Dispositivos:** Escritorio / Desktop (1920x1080)
- **Tipo de Pruebas:** Pruebas Manuales Funcionales e Inspección UI/UX

### 2.2 Cuentas de Prueba (Proporcionadas por SauceDemo)

| Tipo de Usuario             | Usuario                   | Contraseña     | Comportamiento Esperado                            |
| :-------------------------- | :------------------------ | :------------- | :------------------------------------------------- |
| **Standard User**           | `standard_user`           | `secret_sauce` | Acceso funcional completo sin restricciones        |
| **Locked Out User**         | `locked_out_user`         | `secret_sauce` | Acceso denegado con mensaje de error               |
| **Problem User**            | `problem_user`            | `secret_sauce` | Fallos visuales y funcionales (ej. imágenes rotas) |
| **Performance Glitch User** | `performance_glitch_user` | `secret_sauce` | Retardos en tiempos de respuesta                   |
| **Error User**              | `error_user`              | `secret_sauce` | Dispara errores en operaciones de carrito/checkout |
| **Visual User**             | `visual_user`             | `secret_sauce` | Desalineación de elementos de la interfaz          |

---

## 3. 🧪 Estrategia de Pruebas

### 3.1 Tipos de Pruebas Ejecutadas

- **Pruebas Funcionales:** Verificación de los flujos principales de usuario a extremo (login, catálogo, carrito, checkout).
- **Pruebas Negativas y Casos Borde:** Validación de entradas inválidas, usuarios bloqueados y campos obligatorios vacíos.
- **Inspección Visual (UI/UX):** Verificación de alineación, imágenes rotas y responsividad básica.

### 3.2 Criterios de Aceptación (Pass / Fail)

- **Criterio de Aprobación (Pass):** Todos los flujos críticos (Login, Carrito, Checkout) pasan sin bloqueadores de Severidad 1 (Crítica) o Severidad 2 (Alta).
- **Criterio de Fallo (Fail):** Presencia de bloqueadores funcionales en el proceso de autenticación o pago.

---

## 4. 📝 Escenarios de Prueba (Formato BDD / Gherkin)

### Grupo de Escenarios 1: Autenticación y Control de Acceso

```gherkin
Escenario: Inicio de sesión exitoso con credenciales estándar
  Dado que el usuario está en la página de inicio de sesión de SauceDemo "[https://www.saucedemo.com](https://www.saucedemo.com)"
  Cuando el usuario introduce el usuario "standard_user" y la contraseña "secret_sauce"
  Y hace clic en el botón "Login"
  Entonces el usuario debe ser redirigido a la página de inventario "/inventory.html"
  Y la lista de productos debe ser visible

Escenario: Inicio de sesión fallido con usuario bloqueado
  Dado que el usuario está en la página de inicio de sesión de SauceDemo
  Cuando el usuario introduce el usuario "locked_out_user" y la contraseña "secret_sauce"
  Y hace clic en el botón "Login"
  Entonces se debe mostrar un mensaje de error "Epic sadface: Sorry, this user has been locked out."
  Y el usuario permanece en la página de login

Escenario: Inicio de sesión fallido con contraseña incorrecta
  Dado que el usuario está en la página de inicio de sesión de SauceDemo
  Cuando el usuario introduce el usuario "standard_user" y la contraseña "invalid_password"
  Y hace clic en el botón "Login"
  Entonces se debe mostrar un mensaje de error "Epic sadface: Username and password do not match any user in this service"
```

### Grupo de Escenarios 2: Catálogo y Operaciones de Carrito

```gherkin
Escenario: Añadir producto al carrito desde el catálogo
  Dado que el usuario ha iniciado sesión como "standard_user"
  Cuando el usuario hace clic en "Add to cart" en el producto "Sauce Labs Backpack"
  Entonces el contador del icono del carrito debe actualizarse a "1"
  Y el texto del botón debe cambiar a "Remove"

Escenario: Ordenar productos por precio de menor a mayor
  Dado que el usuario ha iniciado sesión y está en la página de inventario
  Cuando el usuario selecciona "Price (low to high)" en el desplegable de ordenación
  Entonces los productos deben mostrarse ordenados por precio ascendente
```

### Grupo de Escenarios 3: Flujo de Checkout y Formulario

```gherkin
Escenario: Finalización exitosa del proceso de compra
  Dado que el usuario ha añadido "Sauce Labs Backpack" al carrito
  Y el usuario está en la página "Checkout: Your Information"
  Cuando el usuario completa el Nombre "Cande", Apellido "Zamora" y Código Postal "25001"
  Y hace clic en "Continue"
  Y hace clic en "Finish" en la página de resumen del pedido
  Entonces se debe mostrar el encabezado "Thank you for your order!"
  Y el carrito de compras debe quedar vacío

Escenario: Validación de formulario de checkout con campos vacíos
  Dado que el usuario está en la página "Checkout: Your Information" con productos en el carrito
  Cuando el usuario deja todos los campos vacíos y hace clic en "Continue"
  Entonces se debe mostrar el mensaje de error "Error: First Name is required"
```

### Grupo de Escenarios 4: Errores Visuales y Comportamientos Especiales (Problem & Visual Users)

```gherkin
Escenario: Detección de imágenes rotas con usuario problemático
  Dado que el usuario ha iniciado sesión como "problem_user"
  Cuando el usuario navega a la página de catálogo/inventario
  Entonces las imágenes de los productos deben cargarse correctamente sin enlaces rotos o imágenes genéricas sustitutivas

Escenario: Error en el proceso de eliminación de artículos del carrito
  Dado que el usuario ha iniciado sesión como "error_user"
  Y ha añadido "Sauce Labs Backpack" al carrito
  Cuando el usuario intenta eliminar el producto desde la página del carrito
  Entonces el sistema debe permitir la eliminación del artículo sin congelar la interfaz ni lanzar excepciones en consola

Escenario: Verificación de alineación e interfaz visual
  Dado que el usuario ha iniciado sesión como "visual_user"
  Cuando el usuario observa los elementos del menú y los botones de acción
  Entonces la disposición de los elementos UI debe mantener la alineación e integridad según el diseño responsivo esperado
```
