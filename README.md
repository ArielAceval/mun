# MUN — Nuestro Primer Ciclo 🌙

Aplicación móvil de acompañamiento menstrual para niñas en etapa de pre-menarquia, menarquia y primeros años de menstruación. Desarrollada para el proyecto **MUN Box** por Josefa Fica Ávila.

---

## Índice

- [Versiones de la App](#versiones-de-la-app)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Flujo de Navegación](#flujo-de-navegación)
- [Perfiles de Usuario](#perfiles-de-usuario)
- [Módulos Funcionales](#módulos-funcionales)
- [Estado Actual del Prototipo](#estado-actual-del-prototipo)
- [Roadmap](#roadmap)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)

---

## Versiones de la App

El proyecto contempla tres versiones que comparten el mismo núcleo base:

| Versión | Nombre | Descripción | Prioridad |
|---|---|---|---|
| 1 | **MUN Estándar** | Versión principal. Lenguaje estándar, contenido completo. | 🔴 Alta |
| 2 | **MUN Para Todas** | Orientada a contextos vulnerables. Funcionalidades clave offline. Enfoque socioeconómico en recopilación de datos. | 🟡 Media |
| 3 | **MUN Sens** | Para niñas neurodivergentes. Personalización de colores, sonidos y narración de textos. Pictogramas del ciclo. | 🟡 Media |

> Las versiones 2 y 3 son adaptaciones de la versión Estándar en lenguaje, ilustraciones y configuración de accesibilidad. El núcleo de código es compartido.

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework UI | Ionic Framework | ^8.0.0 |
| Framework Web | Angular (Standalone Components) | ^20.0.0 |
| Runtime nativo | Capacitor | 8.3.0 |
| Lenguaje | TypeScript | ~5.9.0 |
| Estilos | SCSS | — |
| Iconos | Ionicons | ^7.0.0 |
| Plataformas objetivo | iOS, Android | — |

> **Nota sobre dispositivos chinos:** Fabricantes como Huawei (sin Google Play Services) requieren distribución vía **AppGallery** o APK directo. Capacitor soporta la compilación de APK estándar que funciona en estos dispositivos. No requiere una plataforma separada, pero sí pruebas específicas de compatibilidad.

---

## Arquitectura del Proyecto

### Decisión: Una sola app con modos, no tres apps separadas

La app detecta el modo activo (Estándar / Para Todas / Sens) mediante un servicio de configuración. Esto permite:

- Mantener un solo código base y un solo proceso de publicación en stores
- Compartir lógica de calendario, tracker y contenido
- Diferenciar solo en tema visual, textos y assets según el modo

### Decisión: Roles de usuario separados desde el login

Dos perfiles con navegación completamente independiente:

- **Niña** — acceso al dashboard personal, tracker, contenido educativo y perfil
- **Cuidador** — acceso a tips y guías de acompañamiento. Sin acceso a los datos privados de la niña

---

## Estructura de Carpetas

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── auth.service.ts          # Rol activo (niña | cuidador)
│   │   │   ├── cycle.service.ts         # Lógica del ciclo menstrual
│   │   │   ├── config.service.ts        # Modo de app (estándar | para-todas | sens)
│   │   │   └── storage.service.ts       # Persistencia local (Capacitor Preferences)
│   │   └── models/
│   │       ├── user.model.ts
│   │       ├── cycle.model.ts
│   │       └── notification.model.ts
│   │
│   ├── pages/
│   │   ├── login/                       # Selección "Soy Niña" / "Soy Cuidador"
│   │   ├── onboarding/                  # Encuesta inicial personalización
│   │   │
│   │   ├── tabs-nina/                   # Shell de navegación (niña)
│   │   │   ├── home/                    # Mi Ciclo — dashboard principal
│   │   │   ├── tracker/                 # Cómo me Siento hoy
│   │   │   ├── learn/                   # Aprende & Diviértete
│   │   │   └── profile/                 # Para Tí — configuración y productos
│   │   │
│   │   └── tabs-cuidador/               # Shell de navegación (cuidador)
│   │       ├── dashboard/               # Resumen general
│   │       └── tips/                    # Guías y consejos de acompañamiento
│   │
│   └── shared/
│       └── components/
│           ├── big-sister/              # Avatar guía animado
│           └── cycle-calendar/          # Componente reutilizable de calendario
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── avatars/
│
└── theme/
    └── variables.scss                   # Tokens de color y tipografía MUN
```

---

## Flujo de Navegación

```
/ (raíz)
└── /login
      ├── [Soy Niña]
      │     └── /onboarding
      │           └── /tabs-nina
      │                 ├── /home        ← pantalla principal
      │                 ├── /tracker     ← registro diario
      │                 ├── /learn       ← contenido educativo
      │                 └── /profile     ← perfil y configuración
      │
      └── [Soy Cuidador]
            └── /tabs-cuidador
                  ├── /dashboard         ← resumen general
                  └── /tips              ← guías de acompañamiento
```

---

## Perfiles de Usuario

### Niña (usuario principal)
- Registro con autorización del tutor (menores de 14 años, según legislación vigente)
- Perfil y datos del ciclo: solo ella puede modificarlos
- Calendario menstrual: **privado**. El cuidador no puede verlo directamente
- Puede optar por compartir su calendario con un cuidador de forma voluntaria
- Puede tener hasta **3 tutores asociados**, uno como administrador principal

### Cuidador
- Hasta 3 cuidadores por niña (1 administrador + 2 secundarios aprobados por el administrador)
- Recibe **notificaciones tipo consejo** coordinadas con las fechas del ciclo de la niña, sin revelar datos específicos
- No tiene comunicación directa con la niña dentro de la app
- Puede recibir alerta si la niña activa una señal de necesidad de apoyo

### Profesional MUN (administrador de contenido)
- Recibe notificaciones de preguntas sin respuesta automática
- Revisa y aprueba respuestas antes de publicarlas
- Gestiona actualización de contenido educativo (videos, textos, FAQs)

---

## Módulos Funcionales

### 1. Calendario y Seguimiento del Ciclo
- Registro de flujo, síntomas, estado de ánimo y productos usados
- Datos privados de la niña
- Funciona **offline** en MUN Para Todas (descarga progresiva por etapa)

### 2. Tracker de Bienestar
- Registro emocional y sensorial diario
- Emojis e iconos ilustrativos (especialmente relevante para MUN Sens)

### 3. Contenido Educativo
- Organizado por etapas: pre-menarquia → menarquia → primeros años
- Formatos: videos, textos, cuentos animados, guías de nutrición, ejercicios de suelo pélvico
- Pictogramas del ciclo para MUN Sens
- Narración de textos en audio para MUN Sens

### 4. Sistema de Preguntas Anónimas
- La niña puede hacer preguntas que no están en el contenido existente
- Notificación automática al profesional MUN correspondiente
- Moderación de preguntas inapropiadas (respuesta genérica + registro para análisis)
- La respuesta aprobada queda disponible para futuras usuarias con la misma pregunta

### 5. Notificaciones Diferenciadas
- **Niñas:** contenido educativo, recordatorios del ciclo, apoyo emocional
- **Cuidadores:** tips de acompañamiento coordinados con el ciclo (sin revelar datos)

### 6. Sistema de Alertas de Apoyo
- La app detecta patrones fuera del rango de normalidad (ej: sangrado excesivo)
- Sugiere a la niña pedir apoyo a su tutor
- En MUN Para Todas: sugiere acudir al colegio o centro médico; acceso a telemedicina gratuita (en evaluación)

### 7. Recopilación de Datos (anonimizados)
**MUN Estándar:** productos usados y motivo, edad de primera menstruación, entorno familiar, síntomas, método de alivio más efectivo del kit.

**MUN Para Todas:** lo anterior + entorno socioeconómico, escolar y emocional.

---

## Estado Actual del Prototipo

| Pantalla / Módulo | Estado |
|---|---|
| Theme y colores MUN | ✅ Implementado |
| Tab1 — Pantalla de bienvenida | 🟡 Parcial (estilos y estructura) |
| Tab2 — Tracker de ánimo | 🟠 Iniciado (bug: usa `*ngFor` de NgModule, incompatible con standalone) |
| Tab3 — Contenido | ❌ Template vacío |
| Login / Selección de perfil | ❌ Pendiente |
| Onboarding / Encuesta inicial | ❌ Pendiente |
| Tabs Niña / Cuidador separados | ❌ Pendiente (rutas unificadas aún) |

> **Bug conocido en Tab2:** `*ngFor` requiere importar `NgFor` o `CommonModule` en el componente standalone. Sin esto, la grilla de emojis no renderiza.

---

## Roadmap

### Fase 1 — Prototipo Funcional (MUN Estándar)
1. Refactor de rutas: login → onboarding → tabs por rol
2. Pantalla de login con selección de perfil
3. Corrección de Tab2 (tracker) y migración a nueva estructura
4. Dashboard "Mi Ciclo" con calendario
5. Módulo "Aprende & Diviértete" (contenido estático inicial)
6. Vista básica de Cuidador con tips

### Fase 2 — Funcionalidades Core
7. Sistema de preguntas anónimas
8. Notificaciones diferenciadas
9. Gestión de tutores (hasta 3, con administrador)
10. Sistema de alertas de apoyo temprano

### Fase 3 — Versiones Adaptadas
11. MUN Para Todas (modo offline, descarga progresiva)
12. MUN Sens (personalización de colores/sonidos, narración, pictogramas)

### Fase 4 — Backend y Datos
13. Autenticación real y gestión de perfiles
14. Panel de profesionales MUN
15. Recopilación de datos anonimizados y exportación

---

## Cómo Ejecutar el Proyecto

### Requisitos previos
- Node.js ≥ 18
- npm ≥ 9
- Ionic CLI: `npm install -g @ionic/cli`

### Instalación

```bash
git clone <repo-url>
cd munsens-prototipo-v1
npm install
```

### Desarrollo web

```bash
ionic serve
# o
npm start
```

### Compilar para dispositivo

```bash
# iOS
ionic cap build ios

# Android
ionic cap build android
```

### Ejecutar tests

```bash
npm test
```

---

## Contacto

**Josefa Fica Ávila** — [@mun_box](https://instagram.com/mun_box) — josefa@fica.cl

---

*MUN — Nuestro primer ciclo*