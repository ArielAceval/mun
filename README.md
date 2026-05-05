<div align="center">

# 🌙 MUN — Nuestro Primer Ciclo

### Aplicación móvil de acompañamiento menstrual para niñas

*Educación, seguimiento y apoyo durante la pre-menarquia, menarquia y primeros años de menstruación*

![Estado](https://img.shields.io/badge/Estado-Prototipo%20Activo-pink)
![Ionic](https://img.shields.io/badge/Ionic-8.0-blue?logo=ionic)
![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)
![Capacitor](https://img.shields.io/badge/Capacitor-8.3-green?logo=capacitor)
![Licencia](https://img.shields.io/badge/Licencia-MIT-lightgrey)

</div>

---

## 📖 Descripción

**MUN** es una aplicación móvil (iOS y Android) que acompaña a niñas y sus cuidadores durante el proceso de la primera menstruación. A través de contenido educativo, un calendario de seguimiento del ciclo, registro de síntomas y bienestar, y un sistema de preguntas anónimas respondidas por profesionales, MUN busca normalizar y empoderar esta etapa de la vida.

La app cuenta con **MUNI**, una hermana mayor virtual de 13 años que guía a las niñas con calidez y conocimiento a lo largo de toda la experiencia.

### ✨ Funcionalidades clave

| Módulo | Descripción |
|---|---|
| 🔐 **Login / Registro** | Autenticación simulada con roles diferenciados (Niña / Cuidador/a) |
| 📅 **Mi Ciclo** | Calendario de seguimiento menstrual privado |
| 💭 **Cómo me Siento** | Registro diario de estado de ánimo y síntomas físicos |
| 📚 **Aprende & Diviértete** | Videos, cuentos animados, guías de nutrición y ejercicios |
| ❓ **Preguntas Anónimas** | Sistema de preguntas respondidas por profesionales de MUN |
| 🤗 **Panel Cuidador/a** | Tips y consejos de acompañamiento coordinados con el ciclo |
| 🌸 **MUNI Avatar** | Hermana mayor virtual guía durante toda la experiencia |

---

## 🗂️ Versiones

| Versión | Descripción | Estado |
|---|---|---|
| **MUN Estándar** | Versión principal, lenguaje estándar | 🔴 En desarrollo |
| **MUN Para Todas** | Contextos vulnerables, funciones offline, foco socioeconómico | 🟡 Planificado |
| **MUN Sens** | Niñas neurodivergentes: pictogramas, colores, narración de audio | 🟡 Planificado |

> Las tres versiones comparten el mismo código base. Las diferencias son de lenguaje, assets y configuración de accesibilidad.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| ![Ionic](https://img.shields.io/badge/-Ionic-3880FF?logo=ionic&logoColor=white) | 8.0 | Framework UI móvil |
| ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white) | 20.0 | Framework web (Standalone Components) |
| ![Capacitor](https://img.shields.io/badge/-Capacitor-119EFF?logo=capacitor&logoColor=white) | 8.3 | Runtime nativo iOS/Android |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.9 | Lenguaje principal |
| ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?logo=sass&logoColor=white) | — | Estilos |
| ![Ionicons](https://img.shields.io/badge/-Ionicons-3880FF?logo=ionic&logoColor=white) | 7.0 | Iconografía |

---

## 📋 Requisitos Previos

- **Node.js** ≥ 18.x → [descargar](https://nodejs.org)
- **npm** ≥ 9.x (incluido con Node.js)
- **Ionic CLI** → `npm install -g @ionic/cli`
- **Git** → [descargar](https://git-scm.com)

Para builds nativos (opcional):
- **Xcode** ≥ 14 (solo macOS, para iOS)
- **Android Studio** (para Android)

---

## 🚀 Guía de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/munsens-prototipo-v1.git
cd munsens-prototipo-v1

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
ionic serve
```

La app estará disponible en `http://localhost:8100`

> 💡 **Tip:** Para simular vista móvil, abre Chrome DevTools (`F12`) → ícono de dispositivo (`Ctrl+Shift+M`) → selecciona iPhone 12 Pro.

---

## ⚙️ Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Levanta servidor de desarrollo con live reload |
| `npm run build` | Build de producción |
| `npm run watch` | Build en modo watch |
| `npm test` | Tests unitarios con Karma/Jasmine |
| `npm run lint` | Análisis estático del código |
| `ionic cap build ios` | Compila para iOS |
| `ionic cap build android` | Compila para Android |
| `ionic cap sync` | Sincroniza assets con proyectos nativos |

---

## 📁 Estructura de Carpetas

```
munsens-prototipo-v1/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts       # Autenticación simulada (localStorage)
│   │   │   └── models/                   # Interfaces y tipos de datos
│   │   ├── pages/
│   │   │   ├── login/                    # Login y registro con diseño acuarela
│   │   │   ├── tabs-nina/                # Navegación principal (niña)
│   │   │   │   ├── home/                 # Mi Ciclo — dashboard
│   │   │   │   ├── tracker/              # Cómo me Siento hoy
│   │   │   │   ├── learn/                # Aprende & Diviértete
│   │   │   │   └── profile/              # Para Tí
│   │   │   └── tabs-cuidador/            # Navegación cuidador/a
│   │   │       ├── dashboard/            # Resumen general
│   │   │       └── tips/                 # Guías de acompañamiento
│   │   └── shared/
│   │       └── components/
│   │           └── big-sister/           # Avatar MUNI (hermana mayor virtual)
│   ├── assets/
│   │   ├── avatars/
│   │   │   └── muni-avatar.png           # Avatar MUNI
│   │   ├── mockups/                      # Referencias visuales del diseño
│   │   └── images/
│   └── theme/
│       └── variables.scss                # Tokens de color MUN
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── package.json
```

---

## 👤 Perfiles de Usuario

### 🌸 Niña
- Calendario y datos del ciclo completamente privados
- Puede asociar hasta 3 tutores/as (1 administrador/a + 2 secundarios)
- Puede compartir su calendario con un/a cuidador/a si así lo desea

### 🤗 Cuidador/a
- Recibe consejos coordinados con el ciclo (sin acceso a datos privados)
- Acceso a guías de acompañamiento profesional

---

## 🗺️ Roadmap

### ✅ Fase 1 — Prototipo Base (actual)
- [x] Estructura Ionic/Angular/Capacitor
- [x] Theme y tokens de color MUN
- [x] Pantalla de bienvenida y tracker de síntomas
- [x] Login/Registro simulado con roles diferenciados

### 🔄 Fase 2 — Funcionalidades Core
- [ ] Dashboard "Mi Ciclo" con calendario interactivo
- [ ] Onboarding con encuesta inicial
- [ ] Módulo educativo "Aprende & Diviértete"
- [ ] Sistema de preguntas anónimas con profesionales
- [ ] Notificaciones diferenciadas por rol

### 🔮 Fase 3 — Versiones Adaptadas
- [ ] MUN Para Todas (modo offline, descarga progresiva)
- [ ] MUN Sens (pictogramas, accesibilidad, narración de audio)
- [ ] Integración con telemedicina gratuita

### 🏗️ Fase 4 — Producción
- [ ] Backend real y base de datos
- [ ] Panel de profesionales MUN
- [ ] Publicación en App Store y Google Play

---

## 🤝 Contribuir

¿Quieres colaborar? Lee nuestra [guía de contribución](CONTRIBUTING.md).

---

## 📄 Licencia

MIT © Josefa Fica Ávila — Ver [LICENSE](LICENSE) para más detalles.

---

## 📬 Contacto

**Josefa Fica Ávila** — Creadora del proyecto MUN

[![Instagram](https://img.shields.io/badge/@mun__box-E4405F?logo=instagram&logoColor=white)](https://instagram.com/mun_box)
[![Email](https://img.shields.io/badge/josefa@fica.cl-D14836?logo=gmail&logoColor=white)](mailto:josefa@fica.cl)
[![WhatsApp](https://img.shields.io/badge/+56971325877-25D366?logo=whatsapp&logoColor=white)](https://wa.me/56971325877)

---
<div align="center"><i>MUN — Nuestro primer ciclo 🌙</i></div>