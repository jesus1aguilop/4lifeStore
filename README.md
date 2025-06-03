![Store](https://github.com/user-attachments/assets/89114e94-75e8-460f-892e-b42b7abee0bc)

# 🛒 Tienda 4Life + Panel Administrativo

Bienvenido a la plataforma de catálogo de productos 4Life, diseñada para promover y gestionar productos como distribuidor autorizado. Este sistema permite mostrar productos organizados por categoría, y redirigir a los usuarios al sitio oficial de compra usando tu código de distribuidor. Incluye un **panel administrativo seguro** para gestionar el contenido de la tienda.

---

## 🚀 Tecnologías utilizadas

### 🧩 Frontend (Cliente)
- ⚛️ React.js
- 🔐 Clerk (autenticación del administrador)
- 🎨 Tailwind CSS
- 📡 Axios

### 🛠️ Backend (Servidor)
- 🐍 Python + FastAPI
- 🔥 Firebase Firestore (NoSQL)
- 🔐 Firebase Admin SDK
- 🧼 Pydantic (validación de datos)

---

## 🧰 Funcionalidades

### 🛍️ Tienda pública
- Navegación por categorías
- Vista de productos con imagen, descripción y botón de compra
- Redirección a la tienda oficial 4Life con código de distribuidor
- Abierta sin login

### 🔒 Panel administrativo
- Login seguro con Clerk (solo para admins)
- CRUD de productos
- CRUD de categorías
- Validaciones en formularios
- Control de acceso para usuarios autorizados

---

## 🧱 Estructura de la base de datos (Firebase Firestore)

| Colección      | Descripción                          |
|----------------|--------------------------------------|
| `productos`    | Productos disponibles en la tienda   |
| `categorias`   | Agrupación por categoría             |
| `admins`       | Usuarios con acceso administrativo   |
| `estadisticas` | (Opcional) Métricas de clics/visitas |

---

## 🌱 Futuras mejoras (visión SaaS)
- Multitienda para múltiples distribuidores
- Personalización por tienda
- Multilenguaje (ES / EN)
- Estadísticas en tiempo real
- Soporte para subdominios personalizados

---

## 📦 Instalación y desarrollo local (próximamente…)

> La guía paso a paso para ejecutar el proyecto estará disponible próximamente.

---

## 🙌 Autor

Desarrollado con ❤️ por **Jesús** — apasionado por el código, el diseño limpio y los proyectos con propósito.

---

