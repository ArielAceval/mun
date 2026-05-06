# 🤝 Guía de Contribución — MUN

¡Gracias por tu interés en contribuir a MUN! Este documento explica cómo colaborar de forma ordenada.

---

## 📋 Antes de Empezar

- Lee el [README](README.md) para entender el proyecto
- Revisa los [issues abiertos](../../issues) para ver qué se necesita
- Si quieres proponer algo nuevo, abre un issue primero antes de codear

---

## 🔀 Flujo de Trabajo

### 1. Fork y clonar

```bash
# Haz fork desde GitHub, luego:
git clone https://github.com/TU-USUARIO/munsens-prototipo-v1.git
cd munsens-prototipo-v1
npm install
```

### 2. Estructura de ramas

| Rama | Uso |
|---|---|
| `main` | Código estable y protegido. No se toca directamente. |
| `develop` | Rama de desarrollo activo. Base para nuevas features. |
| `feature/nombre` | Una feature específica (ej: `feature/calendario-ciclo`) |
| `fix/nombre` | Corrección de bug (ej: `fix/login-validacion`) |

### 3. Crear tu rama

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-de-tu-feature
```

### 4. Desarrollar y commitear

Usamos **Conventional Commits**:

```bash
git commit -m "feat: agregar calendario interactivo"
git commit -m "fix: corregir validación de email en login"
git commit -m "style: ajustar colores de botones"
git commit -m "docs: actualizar README con nuevas rutas"
git commit -m "refactor: reorganizar estructura de carpetas"
```

### 5. Push y Pull Request

```bash
git push origin feature/nombre-de-tu-feature
```

Luego crea un Pull Request en GitHub apuntando a `develop` con:
- **Título** claro describiendo el cambio
- **Descripción** de qué hace y por qué
- **Screenshots** si hay cambios visuales

---

## ✅ Checklist antes de hacer PR

- [ ] El código compila sin errores (`npm run build`)
- [ ] No hay warnings nuevos de lint (`npm run lint`)
- [ ] Los cambios visuales fueron probados en vista móvil (Chrome DevTools)
- [ ] El commit message sigue Conventional Commits

---

## 🎨 Guía de Estilo

- **Framework:** Ionic Angular con **Standalone Components** (sin NgModules)
- **Estilos:** SCSS, usar variables de `src/theme/variables.scss`
- **Colores MUN:** rosa `#e8909f`, teal `#5bbfb5`, lavanda `#b8a9d9`
- **Tipografía:** Playfair Display (títulos), Dancing Script (taglines)
- **Idioma del código:** inglés para variables/funciones, español para textos de UI

---

## 🐛 Reportar un Bug

Abre un issue con:
1. Descripción del problema
2. Pasos para reproducirlo
3. Comportamiento esperado vs. actual
4. Screenshot o video si aplica
5. Dispositivo / navegador donde ocurre

---

## 💬 ¿Dudas?

Escribe a josefa@fica.cl o abre un issue con la etiqueta `question`.