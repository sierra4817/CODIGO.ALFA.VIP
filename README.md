# Ecosistema AS - Albert Sierra

Este es el repositorio central del **Ecosistema Financiero AS** en la nube, diseñado para unificar tus plataformas patrimoniales, educativas y operativas en un único entorno coordinado.

---

## Arquitectura del Proyecto

El ecosistema está estructurado como una plataforma modular en la que cada componente opera de manera independiente pero sincronizada a través de la memoria local del navegador (`localStorage`):

```
Ecosistema-AS/
│
├── index.html                 # Portal/Dashboard Principal (Hub Central)
├── style.css                  # Estilos premium del Dashboard (Glassmorphism & Gold Theme)
├── script.js                  # Lógica del Portal (Integración de estadísticas y calculadora rápida)
│
├── capital-invisible/         # Landing page y captación del Manifiesto "Comprar, Pedir Prestado, Morir"
│   └── ...
│
└── vision-trading/            # Plataforma de educación, bitácora y simulador "Visión Trading Pro"
    └── ...
```

---

## Características Principales

### 1. Portal Central (Dashboard)
* **Estética de Alta Gama**: Interfaz oscura con variables CSS armonizadas, tarjetas con efecto cristal (*glassmorphism*) y bordes iluminados que responden a las interacciones del cursor.
* **Estadísticas Dinámicas**:
  * **Progreso de la Masterclass**: Muestra de forma visual el avance del curso de 30 días en base a las lecciones marcadas como completadas.
  * **Retos Bitácora**: Cuenta automáticamente cuántos retos operativos has respondido y guardado.
  * **Balance del Simulador**: Sincroniza y muestra tu saldo actual en dólares de la cuenta de simulación.
  * **Estado de Suscripción**: Detecta si has descargado el Capítulo 1 del Manifiesto y muestra tu estado de acceso de manera personalizada.
* **Calculadora de Riesgo Rápida**: Un widget integrado en el dashboard que te permite calcular en 3 clics el tamaño de posición óptimo en contratos Mini o Micro (ES, MES, NQ, MNQ) en base a tu capital y la distancia de tu Stop Loss técnico.

### 2. Visión Trading Pro (`/vision-trading`)
* **Curso de 30 Días**: Módulos diarios enfocados en el pilar psicológico (estoicismo), gestión del riesgo, análisis técnico puro sin indicadores retrasados y rutina de ejecución.
* **Simulador Gráfico**: Un lienzo interactivo que grafica velas de futuros en tiempo real, calcula P&L flotantes, simula apalancamiento, y permite compras/ventas inmediatas al mercado con cálculo de margen.
* **Síntesis de Voz**: Integración opcional de voz con ElevenLabs o el motor nativo del navegador para narrar los desafíos e instrucciones de forma oral.

### 3. Capital Invisible (`/capital-invisible`)
* **Embudo de Captación**: Landing page premium que regala el primer capítulo y la guía de inicio a cambio de un email.
* **Suscripción Local**: Persiste el correo del suscriptor en `localStorage` para desbloquear el estado del manifiesto en el dashboard central.

---

## Cómo Ejecutar en Local

Para ver y probar todo el ecosistema de manera local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sierra4817/Ecosistema-AS.git
   ```
2. Abre el archivo raíz `index.html` en tu navegador web de preferencia.
3. Puedes navegar sin problemas a través de las diferentes plataformas mediante los botones del portal y los enlaces de retorno en la cabecera de cada aplicación.
