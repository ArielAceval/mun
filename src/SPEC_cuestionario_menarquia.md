# SPEC: Pantalla de Cuestionario Diagnóstico de Menarquia
## MUN SENS · Mayo 2026

---

## Contexto del proyecto

MUN SENS es una plataforma femtech para niñas neurodivergentes en etapa de menarquia. Esta pantalla se integra al flujo existente de la niña, después del onboarding y antes de entrar al home principal.

Seguir exactamente los mismos patrones de diseño, componentes y estilos ya implementados en el proyecto.

---

## Navegación

El cuestionario se ubica entre el onboarding de la niña y el home principal, siguiendo este orden:

```
Login → Onboarding Niña → Cuestionario Menarquia (NUEVA) → Home (Mi Ciclo)
```

Acceso secundario: desde la sección de perfil de la niña, con opción de actualizar respuestas.

---

## Descripción funcional

Cuestionario diagnóstico de 20 preguntas organizado en 5 bloques temáticos. Se presenta una pregunta por pantalla. La niña puede pausar y continuar después — el progreso se guarda automáticamente.

Las respuestas son privadas para la niña. El tutor no las ve. Se usan de forma agregada y anonimizada para el dashboard institucional.

---

## Estructura general de la pantalla

- Título de la sección: "Cuéntame cómo estás"
- Avatar Big Sister flotante con mensajes de aliento según el bloque
- Barra de progreso visible en todo momento, segmentada por bloques (5 segmentos)
- Indicador de pregunta actual: "Pregunta X de 20"
- Botón para salir y continuar después
- Al finalizar: pantalla de confirmación y regreso al home

---

## Bloques y preguntas

### BLOQUE 1 — Lo que sé sobre la menstruación

**Pregunta 1** — ¿Sabes qué es la regla, menstruación o menarquia?
Selección única: Sí, lo tengo claro / Más o menos / No, no lo sé bien

**Pregunta 2** — ¿Sabes por qué se produce?
Selección única: Sí / No / Tengo dudas

**Pregunta 3** — ¿Alguien te explicó qué era la menarquia? ¿Quién?
Selección múltiple: Mamá / Papá / Abuela u otro familiar / Profesora / Amiga / Internet o redes sociales / Nadie me explicó

---

### BLOQUE 2 — Cómo me sentí y cómo me siento

**Pregunta 4** — ¿Cómo te sentiste cuando te llegó la menarquia?
Escala de emojis: 😨 Asustada / 😕 Confundida / 😐 Normal / 🙂 Tranquila / 😊 Bien
Si aún no le ha llegado, adaptar el texto a "¿Cómo crees que te sentirías?"

**Pregunta 5** — ¿Pudiste hablar con alguien de confianza en ese momento? ¿Con quién?
Selección única: Sí / No / Prefiero no decirlo
Si elige Sí: mostrar campo de texto libre "¿Con quién?"

**Pregunta 6** — ¿Hay algo que te preocupe o te dé miedo sobre este cambio?
Selección múltiple: El dolor / El sangrado / Que alguien se entere / No saber qué hacer / Los cambios en mi cuerpo / Nada, estoy bien / Otra cosa (campo de texto libre)

**Pregunta 7** — ¿Sientes que es algo natural o te resulta incómodo hablar de ello?
Escala deslizable del 1 al 5
Extremo izquierdo: "Me cuesta mucho hablar de esto"
Extremo derecho: "Es algo totalmente natural para mí"

**Pregunta 20** — ¿Te incomoda menstruar? ¿Por qué?
Selección única: Sí / No / A veces
Si elige Sí o A veces: mostrar campo de texto libre "¿Qué es lo que más te molesta?"

---

### BLOQUE 3 — Mi ciclo y mis síntomas

**Pregunta 8** — ¿A qué edad te llegó tu primera menstruación?
Selector numérico de 8 a 17 años
Opción adicional: Todavía no me ha llegado

**Pregunta 9** — ¿Cuando llega tu menstruación es con dolor?
Selección única: Sí, siempre / A veces / No, sin dolor / Todavía no me ha llegado

**Pregunta 10** — ¿El dolor te impide hacer tus actividades normales (clases, deporte, quedar con amigas)?
Selección única: Sí, me quedo en casa / A veces me cuesta / No me afecta / No he tenido dolor
Mostrar solo si la respuesta a la pregunta 9 fue Sí o A veces

**Pregunta 11** — ¿Has notado otros cambios en estos días?
Selección múltiple: Dolor en los pechos / Dolor de cabeza / Más cansancio / Cambios de humor / Náuseas / Hinchazón / Ninguno

**Pregunta 12** — ¿Cómo describirías el sangrado?
Selección visual con 3 niveles ilustrados: Leve (manchitas) / Moderado / Abundante
Ocultar si la niña indicó que todavía no le ha llegado la menstruación

---

### BLOQUE 4 — Lo que uso y cómo me cuido

**Pregunta 13** — ¿Qué productos estás usando para el sangrado?
Selección múltiple con íconos: Toallita desechable / Tampón / Calzón menstrual / Copa menstrual / Toallita de tela / No sé o no uso ninguno
Pregunta secundaria inmediata: ¿Te sientes cómoda con ellos? Sí / No / Más o menos

**Pregunta 14** — ¿Sabes cada cuánto tiempo es recomendable cambiar el producto que usas?
Selección única: Sí, lo sé / No estoy segura / No lo sé

**Pregunta 15** — ¿Tienes alguna duda sobre cómo cuidarte la zona íntima durante estos días?
Selección única: Sí / No, lo tengo claro / Nunca me lo han explicado
Si elige Sí: mostrar campo de texto libre "¿Qué dudas tienes?"

**Pregunta 16** — ¿Llevas un registro de qué día llegó tu menstruación?
Selección única: Sí, llevo registro / Lo intento pero no siempre / No, no sé cómo / No me había dado cuenta de que era importante

---

### BLOQUE 5 — Lo que sé (y lo que no) sobre mi cuerpo

**Pregunta 17** — ¿Qué cosas sobre la menstruación te generan dudas o crees que son mitos?
Selección múltiple: Que no me puedo bañar / Que no puedo hacer deporte / Que no puedo comer ciertas cosas / Que el dolor es normal y hay que aguantarlo / Que la primera vez duele mucho / Ninguna, tengo todo claro / Otra cosa (campo de texto libre)

**Pregunta 18** — ¿Sabías que durante los primeros dos años es normal que la regla sea irregular?
Selección única: Sí, lo sabía / No lo sabía / Sí, pero me preocupaba igual
Al responder, mostrar una pequeña tarjeta informativa con un dato educativo breve

**Pregunta 19** — ¿Tienes claro que la llegada de la menstruación significa que tu cuerpo está madurando y que existe la posibilidad de un embarazo?
Selección única: Sí, lo entiendo / Lo había escuchado pero no tenía claro / No, no lo sabía
Si responde No lo sabía: mostrar tarjeta que la dirija al contenido educativo de la app

---

## Lógica condicional

- Si la niña indicó que todavía no le ha llegado la menstruación: ocultar preguntas 10, 12, 13, 14, 15, 16 y adaptar el texto de las preguntas 4, 5 y 6 en tono hipotético
- Si pregunta 9 = Sin dolor: ocultar pregunta 10
- Si pregunta 5 = Sí: mostrar campo de texto "¿Con quién?"
- Si pregunta 6 incluye Otra cosa: mostrar campo de texto libre
- Si pregunta 15 = Sí: mostrar campo de texto "¿Qué dudas tienes?"
- Si pregunta 17 incluye Otra cosa: mostrar campo de texto libre
- Si pregunta 19 = No lo sabía: mostrar tarjeta de derivación a contenido educativo
- Si pregunta 20 = Sí o A veces: mostrar campo de texto libre

---

## UX y comportamiento

- Una pregunta por pantalla, nunca formulario largo
- Botón Siguiente siempre visible en la parte inferior
- Botón Atrás en la parte superior izquierda
- Las respuestas se guardan al pasar a la siguiente pregunta
- Al salir sin terminar, guardar el progreso y ofrecer continuar al volver
- Al completar cada bloque: pantalla de transición con mensaje positivo de la Big Sister
- Al finalizar el cuestionario: pantalla de celebración con mensaje de la Big Sister y botón para ir al home

---

## Estados

- Primera vez: comienza desde el bloque 1
- Con progreso parcial: ofrece continuar desde donde quedó
- Completado: muestra resumen y opción de editar
- Modo revisión (desde perfil): permite actualizar respuestas ya guardadas

---

## Datos para el dashboard institucional

Las respuestas se usan de forma agregada y anonimizada para calcular indicadores que se muestran en el dashboard B2B de la institución licenciada:

- Porcentaje de niñas que sabían qué era la menarquia antes de que llegara
- Porcentaje que recibió explicación de un adulto vs. de internet
- Edad promedio de menarquia
- Porcentaje con dolor que impide actividades
- Síntomas más frecuentes
- Distribución de productos menstruales en uso
- Porcentaje que lleva registro del ciclo
- Porcentaje con miedos activos (señal de necesidad de intervención)
- Mitos más frecuentes
- Porcentaje que no sabía sobre la posibilidad de embarazo

---

## Prioridad de desarrollo

Primera iteración: Bloque 1, Bloque 3, barra de progreso, guardado automático y pantalla de finalización.
Segunda iteración: Bloques 2, 4 y 5.

---

*Especificación para el proyecto MUN SENS · Mayo 2026*
*Consultas sobre lógica de negocio → josefa@fica.cl*