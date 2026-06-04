// Dynamic Course Manager - Visión Trading Pro (42-Day Intensive)

// 42 Days Syllabus Data
const courseData = window.courseData || {};
const pilarQuizzes = {
  1: [
    {
      q: "¿Cuál es el enfoque estoico principal ante un resultado perdedor en una operación individual?",
      options: [
        "Aceptar que el mercado es probabilístico y el resultado de un trade individual no está bajo tu control.",
        "Buscar la revancha inmediata para recuperar la pérdida antes del cierre.",
        "Cambiar de estrategia porque el sistema ha fallado."
      ],
      answer: 0,
      explanation: "Aceptar que el resultado de un trade individual es incierto y fuera de tu control reduce el apego y la frustración emocional."
    },
    {
      q: "¿Qué es el sesgo de falsas expectativas en el trading de futuros?",
      options: [
        "Pensar que puedes obtener dinero fácil y rápido sin un control estricto de riesgo.",
        "Aceptar que el drawdown es una parte normal del negocio.",
        "Entender que la consistencia requiere tiempo y disciplina."
      ],
      answer: 0,
      explanation: "El sesgo de falsas expectativas nubla el juicio técnico y lleva al trader a asumir riesgos desproporcionados buscando enriquecimiento rápido."
    },
    {
      q: "¿Cómo se define un Short Squeeze en el mercado de futuros?",
      options: [
        "Un aumento acelerado de precio provocado por la liquidación forzosa de posiciones vendedoras.",
        "Una caída abrupta de precio debido a ventas institucionales.",
        "Una consolidación lateral del precio con bajo volumen."
      ],
      answer: 0,
      explanation: "El cierre forzado de posiciones cortas (que se ejecuta como órdenes de compra al mercado) provoca un aumento parabólico en el precio."
    },
    {
      q: "¿Qué es una trampa técnica o 'fakeout' en la lectura de precios?",
      options: [
        "Un rompimiento falso de soporte o resistencia diseñado para atrapar liquidez antes de un giro.",
        "Una orden de mercado que se ejecuta con deslizamiento.",
        "El cruce de una media móvil en un gráfico de velas."
      ],
      answer: 0,
      explanation: "Los fakeouts se producen cuando las instituciones empujan el precio más allá de un soporte/resistencia para activar stops minoristas y contrapartida."
    },
    {
      q: "¿Cuál es la única variable que un trader controla al 100% en el mercado de futuros?",
      options: [
        "El riesgo exacto que asume en cada operación antes de entrar.",
        "La dirección exacta que tomará el precio en la sesión.",
        "El balance neto de ganancias al final del mes."
      ],
      answer: 0,
      explanation: "Controlar el riesgo unitario (dónde sitúas tu stop loss y con qué volumen entras) es la única variable controlable bajo tu poder."
    }
  ],
  2: [
    {
      q: "Si pierdes el 50% de tu cuenta de trading, ¿qué porcentaje de rentabilidad necesitas ganar sobre el saldo restante solo para volver al punto inicial (breakeven)?",
      options: [
        "50%",
        "75%",
        "100% (Duplicar el capital restante)"
      ],
      answer: 2,
      explanation: "Perder el 50% reduce tu capital a la mitad. Para volver al capital inicial, debes duplicar (100% de ganancia) tu balance restante."
    },
    {
      q: "Con un Ratio Riesgo/Beneficio (R:R) de 1:2, ¿cuál es la tasa mínima de acierto requerida para estar en ganancias netas (sin contar comisiones)?",
      options: [
        "Aproximadamente 34% o más",
        "Exactamente 50%",
        "Por encima de 60%"
      ],
      answer: 0,
      explanation: "Con un R:R 1:2, ganar 1 operación compensa 2 pérdidas. A partir del 34% de acierto, el resultado neto de la muestra es matemáticamente positivo."
    },
    {
      q: "¿Qué dicta el protocolo estoico ante el secuestro emocional provocado por pérdidas consecutivas?",
      options: [
        "Apagar el ordenador e irse inmediatamente, aceptando el límite de pérdida diaria programado.",
        "Aumentar el tamaño de la posición para recuperar lo perdido rápidamente.",
        "Cambiar de activo a uno más volátil como el Nasdaq para compensar."
      ],
      answer: 0,
      explanation: "El drawdown diario actúa como cinturón de seguridad. Al tocar el límite, apagar la plataforma frena la destructiva toma de decisiones emocional."
    },
    {
      q: "En la bitácora técnica de procesos, ¿cómo se califica un trade ganador que violó las reglas del plan?",
      options: [
        "Como un excelente trade que demuestra intuición de mercado.",
        "Como un mal trade con resultado fortuito que pone en peligro la consistencia futura.",
        "Como un trade neutral que no requiere análisis."
      ],
      answer: 1,
      explanation: "Seguir las reglas define la consistencia. Un trade ganador fuera del plan fomenta indisciplina y hábitos destructivos a largo plazo."
    },
    {
      q: "¿Cómo calculas el tamaño de posición (contratos) si tu Stop Loss técnico está situado a mayor distancia de lo habitual?",
      options: [
        "Mantienes el mismo número de contratos y aceptas mayor pérdida.",
        "Reduces proporcionalmente el número de contratos para que el riesgo en dólares siga siendo el mismo.",
        "Aumentas los contratos para compensar la distancia."
      ],
      answer: 1,
      explanation: "El riesgo monetario es fijo (ej. 1% por trade). Si el Stop Loss técnico es amplio, el número de contratos debe disminuir para mantener el mismo riesgo."
    }
  ],
  3: [
    {
      q: "En una tendencia alcista estructural, ¿cómo se denominan los puntos clave de mínimos?",
      options: [
        "Mínimos más Bajos (LL)",
        "Mínimos más Altos (HL)",
        "Máximos más Altos (HH)"
      ],
      answer: 1,
      explanation: "Una tendencia alcista consiste en una sucesión de Máximos más Altos (HH) y Mínimos más Altos (HL)."
    },
    {
      q: "¿Qué confirmación técnica es obligatoria para validar un Quiebre de Estructura (BOS)?",
      options: [
        "Que una mecha de vela cruce el nivel y regrese rápido.",
        "Que el cuerpo de una vela cierre por fuera del último nivel estructural.",
        "Que el oscilador RSI esté en sobrecompra."
      ],
      answer: 1,
      explanation: "Un BOS requiere un cierre con cuerpo de vela fuera del nivel para confirmar la intención institucional de desplazar el precio."
    },
    {
      q: "¿Cuál es la diferencia entre un soporte minorista clásico y una zona de demanda de valor?",
      options: [
        "El soporte minorista es una zona de acumulación de medias móviles.",
        "La zona de demanda se localiza en el origen de un fuerte movimiento impulsivo previo que rompió estructura.",
        "No existe ninguna diferencia, son términos idénticos."
      ],
      answer: 1,
      explanation: "Las zonas de demanda representan áreas donde el volumen institucional desplazó el precio de forma agresiva, dejando órdenes pendientes."
    },
    {
      q: "En el Setup de Confluencia Visión Pro, ¿cuál es la función de la EMA 200?",
      options: [
        "Indicar el nivel exacto de toma de beneficios.",
        "Actuar como filtro direccional inquebrantable (compras sobre ella, cortos bajo ella).",
        "Medir la sobrecompra del oscilador."
      ],
      answer: 1,
      explanation: "La EMA 200 sirve de brújula de tendencia mayor para alinear todas nuestras operaciones a favor de la dirección dominante del mercado."
    },
    {
      q: "¿Cómo confirmamos la confluencia de momentum utilizando el oscilador RSI 14?",
      options: [
        "Cuando el RSI cruza la línea central de 50 en la misma dirección de la tendencia de la EMA 200.",
        "Cuando el RSI entra en la zona extrema de sobreventa.",
        "Cuando el RSI permanece plano cerca de cero."
      ],
      answer: 0,
      explanation: "El cruce de la línea 50 en el RSI valida que el impulso de corto plazo está alineado a favor del flujo tendencial."
    }
  ],
  4: [
    {
      q: "¿Qué propósito principal persigue la checklist pre-market de 5 puntos del operador?",
      options: [
        "Aumentar el número de operaciones ejecutadas por sesión.",
        "Actuar como un filtro objetivo para eliminar la aleatoriedad y la ejecución emocional.",
        "Predecir con exactitud hacia dónde irá el precio en la apertura."
      ],
      answer: 1,
      explanation: "La checklist actúa como protocolo de despegue para asegurar que sólo se ejecutan operaciones con confluencias técnicas preestablecidas."
    },
    {
      q: "Al auditar semanalmente tus estadísticas, ¿qué representa un 'Profit Factor' de 1.5?",
      options: [
        "Que tus ganancias brutas equivalen a 1.5 veces tus pérdidas brutas (operativa saludable).",
        "Que has perdido el 50% de la cuenta.",
        "Que tienes una tasa de acierto del 15%."
      ],
      answer: 0,
      explanation: "El Profit Factor mide la relación ganancias/pérdidas. Un ratio superior a 1.2 indica un sistema y una operativa rentables."
    },
    {
      q: "En el diario de errores, ¿cómo se clasifica el acto de entrar tarde a un trade debido al miedo a perder la oportunidad?",
      options: [
        "Error Técnico de trazado.",
        "Error Emocional de disciplina (FOMO).",
        "Ejecución perfecta del plan."
      ],
      answer: 1,
      explanation: "Entrar de forma impulsiva por miedo a perderse el trade es una manifestación clásica de FOMO (error emocional)."
    },
    {
      q: "¿Cuál es la regla de oro estoica del protocolo de cierre de sesión?",
      options: [
        "Mantener la plataforma abierta todo el día para vigilar el precio.",
        "Guardar capturas, registrar los datos en la bitácora y apagar por completo las pantallas.",
        "Seguir operando si la sesión fue perdedora."
      ],
      answer: 1,
      explanation: "El apagado de pantallas protege tu psicología del aburrimiento o la frustración, forzando la desconexión mental y la disciplina."
    },
    {
      q: "En el ciclo de mejora Kaizen, ¿cuál es el paso posterior a identificar un error recurrente en tu bitácora?",
      options: [
        "Lamentar el capital perdido y dudar de la estrategia.",
        "Diseñar e implementar una medida correctiva específica y obligatoria en tu comportamiento.",
        "Ignorar el error y esperar que no se repita en la siguiente sesión."
      ],
      answer: 1,
      explanation: "Kaizen consiste en corregir desviaciones mediante medidas accionables concretas para blindar el comportamiento en la siguiente sesión."
    }
  ],
  5: [
    {
      q: "¿Qué representa un Order Block (OB) válido en el trading institucional?",
      options: [
        "Cualquier vela de consolidación en el centro de un rango operativo lateral.",
        "La última vela en sentido opuesto previa a una expansión impulsiva de fuerte volumen que genera un BOS.",
        "El cruce de las bandas de Bollinger con alto volumen de contratos."
      ],
      answer: 1,
      explanation: "Un OB válido requiere haber generado una ruptura estructural (BOS) y haber dejado ineficiencias de entrega (FVG) en su expansión."
    },
    {
      q: "¿Por qué las instituciones financieras buscan cazar la liquidez de los soportes y resistencias minoristas (sweeps)?",
      options: [
        "Para inyectar volatilidad al mercado sin un fin transaccional.",
        "Para activar los Stop Losses minoristas (ventas/compras a mercado) y usarlos como contrapartida para llenar sus órdenes gigantes a precio de descuento.",
        "Para cerrar sus plataformas de negociación antes del fin de semana."
      ],
      answer: 1,
      explanation: "Las instituciones necesitan contrapartida de volumen para rellenar sus órdenes millonarias sin desplazar el precio en su contra; los sweeps proveen esa liquidez."
    },
    {
      q: "¿Qué define a un Fair Value Gap (FVG) o ineficiencia de precios?",
      options: [
        "Una secuencia de 3 velas donde la mecha de la primera y de la tercera no se solapan, dejando un vacío transaccional.",
        "Un gap de apertura de mercado de futuros el domingo por la tarde.",
        "Una consolidación estrecha que dura más de dos horas sin volumen."
      ],
      answer: 0,
      explanation: "El FVG representa una entrega ineficiente del precio donde sólo hubo participación de compras o ventas, y el mercado tiende a rebalancearlo en el futuro."
    },
    {
      q: "En el análisis top-down fractal, ¿cuál es la combinación ideal de marcos temporales?",
      options: [
        "Buscar el sesgo direccional y las zonas de interés en HTF (1H/4H), y esperar el gatillo y confirmación BOS en LTF (1m/5m).",
        "Operar en 1 minuto sin mirar gráficos mayores.",
        "Analizar en mensual para operar contratos de scalping rápido en segundos."
      ],
      answer: 0,
      explanation: "El marco HTF proporciona el sesgo y la zona de alta probabilidad, mientras que el marco LTF permite refinar la entrada para optimizar el R:R."
    },
    {
      q: "Si trazamos un rango operativo desde el origen del impulso hasta su fin, ¿dónde debemos situar las compras?",
      options: [
        "En la Zona Premium (por encima del 50% del rango) porque el precio sube rápido.",
        "En la Zona de Descuento (por debajo del 50% del rango) para comprar a precios baratos.",
        "En el precio de equilibrio exacto del 50% sin importar confluencias."
      ],
      answer: 1,
      explanation: "Comprar en descuento (barato) en confluencia con OB y FVG es la regla de oro mayorista de la especulación institucional."
    }
  ],
  6: [
    {
      q: "En la subasta de Volumen, ¿qué es el POC (Point of Control) y qué utilidad tiene?",
      options: [
        "El precio con mayor volumen de contratos negociados; actúa como imán del precio y punto de equilibrio dinámico.",
        "El nivel de precio más alto alcanzado en la sesión de futuros.",
        "Una señal de cruce de medias móviles en el perfil de volumen."
      ],
      answer: 0,
      explanation: "El POC es el nivel más negociado de la sesión, representando la zona de máxima aceptación de valor por parte de compradores y vendedores."
    },
    {
      q: "¿Cuál es la regla de oro para evitar la cancelación inmediata de una cuenta financiada (Prop Firm)?",
      options: [
        "Operar el máximo tamaño de contratos permitido desde el primer día.",
        "Respetar de forma inquebrantable el límite de pérdida diaria (drawdown) y no dejarse llevar por la frustración.",
        "Aumentar el riesgo tras cada operación fallida para recuperar rápido."
      ],
      answer: 1,
      explanation: "El control riguroso del drawdown diario y total es el único requisito ineludible que exigen las firmas de fondeo institucional."
    },
    {
      q: "¿Qué beneficio psicológico y matemático aporta la toma de parciales a R:R 1:1 y mover el Stop Loss a Breakeven?",
      options: [
        "Elimina las pérdidas futuras asegurando ganancias y transformando el trade en una operación libre de riesgo.",
        "Garantiza que siempre ganarás el 100% de las operaciones.",
        "Te obliga a pasar más horas mirando los gráficos."
      ],
      answer: 0,
      explanation: "Cobrar parciales y poner breakeven asegura ganancias reales en la cuenta y elimina el riesgo financiero, liberando al trader de estrés."
    },
    {
      q: "¿Qué porcentaje de riesgo monetario máximo por operación dicta el checklist definitivo de Visión Trading Pro?",
      options: [
        "El 5% de la cuenta.",
        "Exactamente el 1% del capital (o menos), calculado de forma estricta según la distancia del stop loss.",
        "Un número de contratos fijo sin importar la volatilidad."
      ],
      answer: 1,
      explanation: "Arriesgar máximo el 1% (o menos) es la armadura del trader estoico para preservar su capital de trabajo a largo plazo."
    },
    {
      q: "Para tratar el trading como un negocio consistente a largo plazo, ¿cómo debes gestionar tus retiros (payouts)?",
      options: [
        "Gastar todo el beneficio en bienes de consumo de inmediato.",
        "Asignar capital de forma inteligente a impuestos, colchón de drawdown operativo, y transferir a tu cuenta de capital propio (Capital Invisible).",
        "Dejar todo el beneficio en la cuenta de fondeo para operar con el máximo tamaño de contratos."
      ],
      answer: 1,
      explanation: "Retirar y distribuir capital hacia el ahorro patrimonial y la reserva de drawdown es la base del crecimiento de un negocio consistente."
    }
  ],
  7: [
    {
      q: "¿Qué es un Fair Value Gap (FVG)?",
      options: [
        "Un soporte histórico de polaridad.",
        "Un desequilibrio de 3 velas donde el precio se entregó de forma unilateral dejando un vacío.",
        "El volumen transaccionado en el POC."
      ],
      answer: 1,
      explanation: "Un FVG es un desequilibrio de 3 velas provocado por una inyección unilateral agresiva de capital."
    },
    {
      q: "¿Cómo se compone la estructura de 3 velas de un FVG alcista?",
      options: [
        "La mecha de la vela 1 y la mecha de la vela 3 no se solapan, dejando un vacío.",
        "La vela 2 tiene que ser roja.",
        "Las tres velas cierran al mismo precio exacto."
      ],
      answer: 0,
      explanation: "La ineficiencia es la distancia entre el máximo de la vela 1 y el mínimo de la vela 3."
    },
    {
      q: "¿Qué representa el consecuent encroachment (CE) de un FVG?",
      options: [
        "El 50% de la ineficiencia, que actúa como nivel de reacción sensible.",
        "El cierre de la vela 3.",
        "El máximo de la vela 1."
      ],
      answer: 0,
      explanation: "El 50% (CE) de un FVG es un nivel clave de soporte/resistencia algorítmica."
    }
  ],
  8: [
    {
      q: "¿Qué significa la fractalidad del mercado?",
      options: [
        "Que los patrones se repiten de forma idéntica en cualquier escala temporal.",
        "Que el mercado solo sube en temporalidades de 1 minuto.",
        "Que las noticias macro son fractales."
      ],
      answer: 0,
      explanation: "La fractalidad demuestra que el comportamiento del precio se repite en todas las escalas temporales."
    },
    {
      q: "¿Cuál es el Bias en el análisis multitemporal?",
      options: [
        "La dirección dominante del rango de temporalidad mayor (HTF).",
        "El quiebre de medias móviles en temporalidad menor.",
        "El número de contratos operados."
      ],
      answer: 0,
      explanation: "El Bias HTF determina hacia dónde empuja la marea el flujo de órdenes institucional."
    },
    {
      q: "¿Qué es la alineación temporal perfecta en SMC?",
      options: [
        "Identificar un POI HTF y esperar un CHoCH + FVG local en temporalidad LTF.",
        "Que la sesión de Nueva York y Londres coincidan.",
        "Operar a favor de los osciladores en diario."
      ],
      answer: 0,
      explanation: "Alinear temporalidades reduce el stop loss y amplifica enormemente el ratio R:R."
    }
  ],
  9: [
    {
      q: "¿Qué hace la regla del Trailing Drawdown en una Prop Firm?",
      options: [
        "Persigue el saldo máximo de tu cuenta en tiempo real, limitando tu pérdida máxima.",
        "Permite pérdidas ilimitadas.",
        "Aumenta tus lotes automáticamente."
      ],
      answer: 0,
      explanation: "El trailing drawdown se actualiza con el saldo máximo de la cuenta, reduciendo tu margen de error."
    },
    {
      q: "¿Cuál es el objetivo principal de una Prop Firm al evaluarte?",
      options: [
        "Comprobar que eres disciplinado y respetas el control de riesgo contratado.",
        "Que ganes el 100% de la cuenta en un solo trade.",
        "Que uses el máximo apalancamiento."
      ],
      answer: 0,
      explanation: "Las firmas buscan traders aburridos y constantes que no quemen cuentas."
    },
    {
      q: "¿Cómo se debe gestionar una cuenta financiada?",
      options: [
        "Con metas diarias pequeñas (0.5% - 1% diario) y gestión estricta del riesgo.",
        "Duplicando los lotes tras cada ganancia.",
        "Ignorando el límite de pérdida diaria."
      ],
      answer: 0,
      explanation: "Metas pequeñas reducen el estrés psicológico y protegen el colchón de drawdown."
    }
  ],
  10: [
    {
      q: "¿En qué consiste la gestión activa de posición?",
      options: [
        "Tomar beneficios parciales en hitos clave y mover el stop loss a breakeven.",
        "Dejar correr pérdidas sin stop.",
        "Añadir más contratos a posiciones perdedoras."
      ],
      answer: 0,
      explanation: "Tomar parciales y mover a breakeven elimina el riesgo monetario del trade."
    },
    {
      q: "¿Cuál es el enfoque correcto para el escalamiento de contratos?",
      options: [
        "Aumentar lotes gradualmente basados en el crecimiento matemático de tu colchón de drawdown.",
        "Doblar lotes tras una pérdida.",
        "Usar siempre el mismo tamaño sin importar la cuenta."
      ],
      answer: 0,
      explanation: "El escalamiento debe ser geométrico, controlado y basado en el balance disponible."
    },
    {
      q: "¿Qué representa el Capital Invisible en tu plan patrimonial?",
      options: [
        "Tu portafolio de inversión patrimonial de largo plazo financiado por retiros de trading.",
        "Las pérdidas no documentadas.",
        "El saldo disponible en tu broker de demostración."
      ],
      answer: 0,
      explanation: "El Capital Invisible es la transferencia de beneficios especulativos a activos de protección."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };

const loadProgress = () => {
  const savedProgress = localStorage.getItem("vision_63day_progress");
  const daysKeys = Object.keys(courseData).slice(0, 63);
  
  // Reset runtime representation
  daysKeys.forEach((key, index) => {
    if (courseData[key]) {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
    }
  });
  Object.keys(pilarPassedStates).forEach(k => {
    pilarPassedStates[k] = false;
  });

  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      if (parsed.days) {
        daysKeys.forEach(key => {
          if (courseData[key] && parsed.days[key]) {
            courseData[key].completed = parsed.days[key].completed || false;
            courseData[key].unlocked = parsed.days[key].unlocked || false;
          }
        });
      }
      if (parsed.quizzes) {
        Object.keys(pilarPassedStates).forEach(k => {
          pilarPassedStates[k] = parsed.quizzes[k] || false;
        });
      }
    } catch (e) {
      console.error("Error parsing progress", e);
    }
  }

  // Override dynamically in memory if global admin unlock is active
  const globalUnlock = localStorage.getItem("admin_unlock_course_globally") === "true";
  if (globalUnlock) {
    daysKeys.forEach(key => {
      if (courseData[key]) {
        courseData[key].unlocked = true;
      }
    });
    Object.keys(pilarPassedStates).forEach(k => {
      pilarPassedStates[k] = true;
    });
  }

  // Override dynamically in memory if a pilar is blocked by admin
  daysKeys.forEach(key => {
    if (courseData[key]) {
      const dayNum = parseInt(key.replace("day", ""));
      const pilarId = Math.floor((dayNum - 1) / 7) + 1;
      const isPilarActive = localStorage.getItem("admin_pilar_" + pilarId + "_active") !== "false";
      if (!isPilarActive) {
        courseData[key].unlocked = false;
      }
    }
  });
  Object.keys(pilarPassedStates).forEach(k => {
    const isPilarActive = localStorage.getItem("admin_pilar_" + k + "_active") !== "false";
    if (!isPilarActive) {
      pilarPassedStates[k] = false;
    }
  });

  updateUIProgress();
};

// Save state to localStorage
const saveProgress = () => {
  const globalUnlock = localStorage.getItem("admin_unlock_course_globally") === "true";
  const daysState = {};
  const daysKeys = Object.keys(courseData).slice(0, 63);
  
  daysKeys.forEach((key, index) => {
    let isRealUnlocked = index === 0;
    if (index > 0) {
      const prevKey = daysKeys[index - 1];
      isRealUnlocked = courseData[prevKey] && courseData[prevKey].completed;
    }
    
    daysState[key] = {
      completed: courseData[key].completed,
      unlocked: globalUnlock ? isRealUnlocked : courseData[key].unlocked
    };
  });

  let quizzesState = {};
  if (globalUnlock) {
    const saved = localStorage.getItem("vision_63day_progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        quizzesState = parsed.quizzes || {};
      } catch(e) {}
    }
  } else {
    quizzesState = pilarPassedStates;
  }

  const stateToSave = {
    days: daysState,
    quizzes: quizzesState
  };
  localStorage.setItem("vision_63day_progress", JSON.stringify(stateToSave));
};

// Update progress bar and unlock states
const updateUIProgress = () => {
  let completedCount = 0;
  const totalDays = 63;
  const daysKeys = Object.keys(courseData).slice(0, 63);

  daysKeys.forEach(key => {
    if (courseData[key] && courseData[key].completed) completedCount++;
  });

  const percentage = Math.round((completedCount / totalDays) * 100);
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  
  if (progressText) progressText.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;

  // Toggle Certificate tab in sidebar if course is completed
  const certMenuItem = document.getElementById("menu-item-certificate");
  if (certMenuItem) {
    const allPassed = Object.values(pilarPassedStates).every(val => val === true);
    certMenuItem.style.display = allPassed ? "block" : "none";
  }

  lucide.createIcons();
};

// Reset academy progress
window.resetAcademyProgress = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 63 días y tu bitácora?")) {
    localStorage.removeItem("vision_63day_progress");
    localStorage.removeItem("vision_simulator_balance");
    const daysKeys = Object.keys(courseData).slice(0, 63);
    daysKeys.forEach((key, index) => {
      if (courseData[key]) {
        courseData[key].completed = false;
        courseData[key].unlocked = index === 0;
      }
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
  }
};

// Unlock all lessons and quizzes
window.unlockAllLessons = () => {
  if (confirm("¿Deseas desbloquear todas las lecciones del curso y evaluaciones para navegar libremente?")) {
    const daysKeys = Object.keys(courseData).slice(0, 63);
    daysKeys.forEach(key => {
      if (courseData[key]) {
        courseData[key].unlocked = true;
      }
    });
    pilarPassedStates = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    alert("¡Todas las lecciones y evaluaciones han sido desbloqueadas con éxito!");
  }
};

// Lock all lessons (except Day 1)
window.lockAllLessons = () => {
  if (confirm("¿Estás seguro de que deseas volver a bloquear todas las lecciones del curso (excepto el Día 1) para rehacer el camino paso a paso?")) {
    const daysKeys = Object.keys(courseData).slice(0, 63);
    daysKeys.forEach((key, index) => {
      if (courseData[key]) {
        courseData[key].completed = false;
        courseData[key].unlocked = index === 0;
      }
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    alert("Todas las lecciones han sido bloqueadas nuevamente con éxito.");
  }
};

// Sidebar navigation click routing
const showSection = (sectionId) => {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const targetMenuItem = document.querySelector(`[data-target="${sectionId}"]`);
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  activeSection = sectionId;
  stopAllSpeech();

  if (sectionId === "glossary") {
    renderGlossary();
  } else if (sectionId === "certificate") {
    renderCertificate();
  }
};

// Open Specific Pilar from Welcome Screen
window.openPillar = (pilarId) => {
  const isPilarActive = localStorage.getItem("admin_pilar_" + pilarId + "_active") !== "false";
  if (!isPilarActive) {
    alert("Este pilar ha sido bloqueado temporalmente por el mentor.");
    return;
  }
  const startDayNum = (pilarId - 1) * 7 + 1;
  window.location.href = `template_leccion.html?day=${startDayNum}`;
};

// Render Collapsible sidebar week list
const renderAcademicMenu = () => {
  const container = document.getElementById("academic-menu-container");
  if (!container) return;

  let html = "";
  const pilares = window.courseModules || [
    { id: 1, name: "Pilar 1: Fundamentos de la Subasta Financiera (Psicología y Mecánica)", icon: "brain" },
    { id: 2, name: "Pilar 2: Matemáticas del Riesgo y Ruina (Gestión de Capital)", icon: "shield-check" },
    { id: 3, name: "Pilar 3: Estructura del Mercado y Tendencias (Acción del Precio)", icon: "trending-up" },
    { id: 4, name: "Pilar 4: Filtros Operativos y Confluencias (EMA 200 y RSI)", icon: "activity" },
    { id: 5, name: "Pilar 5: Bloques de Órdenes (Order Blocks Institucionales)", icon: "box" },
    { id: 6, name: "Pilar 6: Liquidez Avanzada (Stops Sweeps y Pools de Liquidez)", icon: "target" },
    { id: 7, name: "Pilar 7: Vacíos de Liquidez (Fair Value Gaps y Rebalanceos)", icon: "split" },
    { id: 8, name: "Pilar 8: Análisis Multitemporal Fractal (Top-Down de H4 a M1)", icon: "layers" },
    { id: 9, name: "Pilar 9: Especialización de Firmas de Fondeo (Prop Firms y Drawdown)", icon: "award" }
  ];

  pilares.forEach(pilar => {
    const pilarDays = Object.values(courseData).filter(d => d.pilar === pilar.id);
    const isOpen = activePilarAccordion === pilar.id;
    
    html += `
      <div class="pilar-group ${isOpen ? 'open' : ''}" id="pilar-group-${pilar.id}">
        <div class="pilar-header" onclick="window.togglePilarAccordion(${pilar.id})">
          <span style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="${pilar.icon}" style="width:14px; height:14px; color: ${isOpen ? 'var(--color-accent)' : 'var(--text-secondary)'}"></i>
            ${pilar.name}
          </span>
          <i data-lucide="${isOpen ? 'chevron-down' : 'chevron-right'}" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        </div>
        <div class="pilar-sub-list">
    `;
    
    pilarDays.forEach(day => {
      const isActive = activeSection === "academy-day" && activeDayId === day.id;
      const isLocked = !day.unlocked;
      
      let statusIcon = '<i data-lucide="lock" class="status-locked" style="width:12px; height:12px;"></i>';
      if (day.completed) {
        statusIcon = '<i data-lucide="check-circle" class="status-completed" style="width:12px; height:12px; color:var(--color-bull);"></i>';
      } else if (day.unlocked) {
        statusIcon = '<i data-lucide="circle" class="status-unlocked" style="width:12px; height:12px; color:var(--color-accent);"></i>';
      }

      html += `
        <div class="day-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="${isLocked ? '' : `window.loadDay('${day.id}')`}">
          <span>Día ${day.id.replace("day", "")}: ${day.title}</span>
          <span class="menu-status">${statusIcon}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
};

window.togglePilarAccordion = (pilarId) => {
  activePilarAccordion = activePilarAccordion === pilarId ? null : pilarId;
  renderAcademicMenu();
};

const getGraphicForDay = (dayNum) => {
  const width = 500;
  const height = 220;
  let elementsHtml = "";
  let title = "";

  // Common SVG Helpers for clean educational diagrams
  const cardBackground = () => `
    <rect width="${width}" height="${height}" fill="#080a0f" rx="10" stroke="#242f3d" stroke-width="1.5" />
  `;

  const text = (x, y, str, size = 11, color = "#f3f4f6", anchor = "start", weight = "normal") => `
    <text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="system-ui, -apple-system, sans-serif" font-weight="${weight}" text-anchor="${anchor}">${str}</text>
  `;

  const line = (x1, y1, x2, y2, color = "#242f3d", w = 1.5, dash = "") => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ""} />
  `;

  const rect = (x, y, w, h, fill = "none", stroke = "none", strokeW = 1, dash = "") => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}" ${dash ? `stroke-dasharray="${dash}"` : ""} rx="4" />
  `;

  const circle = (x, y, r, fill = "#3b82f6", stroke = "none", strokeW = 1) => `
    <circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}" />
  `;

  const arrow = (x1, y1, x2, y2, color = "#f59e0b", w = 2) => `
    <defs>
      <marker id="arr-${dayNum}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="${color}" />
      </marker>
    </defs>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-end="url(#arr-${dayNum})" />
  `;

  const wave = (points, color = "#3b82f6", w = 3) => {
    let d = "";
    points.forEach((p, idx) => {
      d += (idx === 0 ? "M " : "L ") + `${p[0]},${p[1]}`;
    });
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" />`;
  };

  // Draw base background card
  elementsHtml += cardBackground();

  switch (dayNum) {
    case 1:
      title = "El Precio es la Única Realidad";
      elementsHtml += wave([[40, 160], [100, 120], [160, 140], [220, 90], [280, 110], [360, 60], [420, 80]], "rgba(59, 130, 246, 0.4)", 2);
      elementsHtml += wave([[40, 160], [100, 120], [160, 140], [220, 90], [280, 110], [360, 60]], "#3b82f6", 3.5);
      
      elementsHtml += circle(360, 60, 6, "#10b981");
      elementsHtml += line(360, 60, 460, 60, "#10b981", 1.5, "3,3");
      elementsHtml += text(420, 52, "Precio Actual", 9, "#10b981", "middle", "bold");
      
      elementsHtml += arrow(330, 130, 355, 75, "#f59e0b");
      elementsHtml += rect(220, 130, 210, 26, "#1b222c", "#f59e0b", 1);
      elementsHtml += text(325, 146, "Aceptación Objetiva del Precio", 9.5, "#f3f4f6", "middle", "bold");
      break;

    case 2:
      title = "FOMO y Pánico en la Curva de Precios";
      elementsHtml += wave([[40, 150], [100, 140], [180, 60], [220, 45], [260, 120], [320, 165], [380, 175], [440, 110]], "#3b82f6", 3);
      
      // Peak FOMO
      elementsHtml += circle(220, 45, 6, "#ef4444");
      elementsHtml += line(220, 45, 220, 90, "#ef4444", 1, "2,2");
      elementsHtml += rect(170, 90, 100, 22, "#1b222c", "#ef4444", 1);
      elementsHtml += text(220, 104, "FOMO (Comprar Techo)", 8.5, "#ef4444", "middle", "bold");

      // Panic Bottom
      elementsHtml += circle(380, 175, 6, "#ef4444");
      elementsHtml += line(380, 175, 380, 130, "#ef4444", 1, "2,2");
      elementsHtml += rect(330, 100, 100, 22, "#1b222c", "#ef4444", 1);
      elementsHtml += text(380, 114, "PÁNICO (Vender Suelo)", 8.5, "#ef4444", "middle", "bold");
      break;

    case 3:
      title = "Distribución Aleatoria de Resultados";
      const outcomes = ["W", "L", "L", "W", "W", "L", "W", "L", "W", "W"];
      outcomes.forEach((t, i) => {
        const x = 50 + i * 40;
        const color = t === "W" ? "#10b981" : "#ef4444";
        elementsHtml += `
          <rect x="${x}" y="85" width="28" height="28" fill="${color}15" stroke="${color}" stroke-width="2" rx="4" />
          <text x="${x + 14}" y="103" fill="${color}" font-size="12" font-family="system-ui" text-anchor="middle" font-weight="bold">${t}</text>
        `;
      });
      elementsHtml += text(250, 150, "Muestra de 10 Operaciones (60% Acierto)", 11, "#f3f4f6", "middle", "bold");
      elementsHtml += text(250, 168, "El resultado de cada operación individual es 100% aleatorio", 9, "#9ca3af", "middle");
      break;

    case 4:
      title = "SSL Sweep (Barrido de Liquidez)";
      elementsHtml += line(40, 120, 460, 120, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 112, "Soporte Obvio Minorista (Zonas de Stops acumulados)", 9.5, "#ef4444");
      
      elementsHtml += wave([[40, 90], [120, 110], [200, 90], [280, 120], [300, 150], [330, 80], [420, 60]], "#3b82f6", 3.5);
      
      // Sweep indicator
      elementsHtml += circle(300, 150, 6, "#10b981");
      elementsHtml += arrow(300, 190, 300, 160, "#10b981");
      elementsHtml += text(300, 203, "Caza de Liquidez e Inyección Alcista", 9.5, "#10b981", "middle", "bold");
      break;

    case 5:
      title = "Short Squeeze (Compras Forzadas)";
      elementsHtml += line(40, 110, 460, 110, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 102, "Resistencia Minorista (Buy Stops de vendedores)", 9.5, "#ef4444");
      
      elementsHtml += wave([[40, 130], [120, 120], [200, 125], [260, 110], [280, 45], [340, 35]], "#3b82f6", 3.5);
      
      // Breakout arrow
      elementsHtml += circle(280, 45, 5, "#10b981");
      elementsHtml += arrow(250, 85, 275, 55, "#10b981");
      elementsHtml += text(240, 98, "Cascada de Compras (Squeeze)", 9.5, "#10b981", "middle", "bold");
      break;

    case 6:
      title = "Falso Rompimiento (Fakeout)";
      elementsHtml += line(40, 100, 460, 100, "rgba(255, 255, 255, 0.2)", 1.5, "3,3");
      elementsHtml += text(50, 92, "Resistencia de Valor", 9, "#9ca3af");
      
      // Stylized candle structure showing rejection
      elementsHtml += `
        <!-- Left candle (bull) -->
        <rect x="180" y="110" width="16" height="40" fill="#10b981" rx="2" />
        <line x1="188" y1="95" x2="188" y2="160" stroke="#10b981" stroke-width="1.5" />
        
        <!-- Fakeout candle (long upper wick, close inside) -->
        <rect x="240" y="105" width="16" height="15" fill="#ef4444" rx="2" />
        <line x1="248" y1="55" x2="248" y2="135" stroke="#ef4444" stroke-width="2" />
      `;
      
      elementsHtml += circle(248, 55, 5, "#ef4444");
      elementsHtml += arrow(330, 60, 260, 65, "#ef4444");
      elementsHtml += text(340, 64, "Rompimiento Falso", 9.5, "#ef4444", "start", "bold");
      break;

    case 7:
      title = "Escudo de Control Mental Estoico";
      elementsHtml += `
        <path d="M 250,45 C 280,45 305,55 305,90 C 305,135 250,165 250,165 C 250,165 195,135 195,90 C 195,55 220,45 250,45 Z" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" stroke-width="3" />
        <path d="M 250,60 L 250,145 M 220,90 L 280,90" stroke="#3b82f6" stroke-width="2.5" />
        <text x="250" y="32" fill="#f3f4f6" font-size="12" font-weight="bold" text-anchor="middle">MANIFIESTO ESTOICO</text>
        <text x="120" y="95" fill="#ef4444" font-size="9.5" font-weight="bold" text-anchor="end">EMOCIÓN / FOMO</text>
        <text x="380" y="95" fill="#10b981" font-size="9.5" font-weight="bold" text-anchor="start">DISCIPLINA / RIESGO</text>
      `;
      break;

    case 8:
      title = "Matemáticas de Gestión de Capital";
      // Equity curves
      let safePts = [];
      let ruinPts = [];
      let sVal = 100;
      let rVal = 100;
      for(let i=0; i<12; i++) {
        let x = 60 + i * 32;
        sVal -= 1;
        rVal = rVal * 0.90;
        safePts.push(`${x},${170 - sVal * 1.1}`);
        ruinPts.push(`${x},${170 - rVal * 1.1}`);
      }

      elementsHtml += `
        <path d="M 60,60 L ${safePts.join(' L ')}" fill="none" stroke="#10b981" stroke-width="3" />
        <path d="M 60,60 L ${ruinPts.join(' L ')}" fill="none" stroke="#ef4444" stroke-width="3" />
        <text x="60" y="45" fill="#9ca3af" font-size="9">Capital de Trabajo Inicial: $10,000</text>
        <text x="420" y="${170 - sVal * 1.1 + 3}" fill="#10b981" font-size="9" font-weight="bold">Riesgo 1% (Seguro)</text>
        <text x="420" y="${170 - rVal * 1.1 + 3}" fill="#ef4444" font-size="9" font-weight="bold">Riesgo 10% (Ruina)</text>
      `;
      break;

    case 9:
      title = "Asimetría Matemática R:R 1:2";
      elementsHtml += line(60, 110, 440, 110, "#3b82f6", 2);
      elementsHtml += text(70, 100, "Nivel de Entrada", 9.5, "#3b82f6", "start", "bold");
      
      // TP and SL boxes
      elementsHtml += `
        <rect x="140" y="40" width="220" height="70" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="1.2" rx="4" />
        <text x="250" y="78" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">BENEFICIO (TP 1:2) +$200</text>
        
        <rect x="140" y="110" width="220" height="35" fill="rgba(239, 68, 68, 0.08)" stroke="#ef4444" stroke-width="1.2" rx="4" />
        <text x="250" y="132" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">RIESGO (SL 1:1) -$100</text>
      `;
      break;

    case 10:
      title = "Límite Diario de Pérdida (Drawdown)";
      elementsHtml += wave([[40, 60], [120, 80], [200, 130], [280, 150]], "#ef4444", 3);
      elementsHtml += line(40, 140, 460, 140, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 132, "Límite Máximo de Pérdida Diaria (2%)", 9.5, "#ef4444");
      
      elementsHtml += circle(280, 150, 6, "#ef4444");
      elementsHtml += rect(190, 168, 120, 24, "#1b222c", "#ef4444", 1.2);
      elementsHtml += text(250, 184, "DETENER OPERATIVA", 9.5, "#ef4444", "middle", "bold");
      break;

    case 11:
      title = "Parámetros de la Bitácora";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="6"/>
        <line x1="40" y1="75" x2="460" y2="75" stroke="#242f3d" />
        <text x="250" y="60" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Registro de Auditoría de Procesos</text>
        <g fill="#9ca3af" font-size="9" transform="translate(60, 95)">
          <text x="0" y="0">1. SETUP OPERADO:</text>
          <text x="140" y="0" fill="#f3f4f6">Confluencia Visión Pro</text>
          <text x="0" y="22">2. CAPITAL EXPUESTO:</text>
          <text x="140" y="22" fill="#3b82f6" font-weight="bold">1% de la Cuenta ($100)</text>
          <text x="0" y="44">3. ESTADO MENTAL:</text>
          <text x="140" y="44" fill="#10b981" font-weight="bold">Cuidado y Enfoque Estoico</text>
        </g>
      `;
      break;

    case 12:
      title = "Proceso Operativo Real";
      elementsHtml += `
        <rect x="60" y="40" width="380" height="135" fill="#131a22" stroke="#242f3d" rx="6" />
        <g fill="#9ca3af" font-size="9" transform="translate(80, 70)">
          <text x="0" y="0">Resultado Bruto:</text>
          <text x="240" y="0" fill="#10b981" font-weight="bold" text-anchor="end">+$250.00</text>
          <text x="0" y="22">Deslizamiento (Slippage):</text>
          <text x="240" y="22" fill="#ef4444" font-weight="bold" text-anchor="end">-$20.00</text>
          <text x="0" y="44">Comisión Operativa:</text>
          <text x="240" y="44" fill="#ef4444" font-weight="bold" text-anchor="end">-$5.00</text>
        </g>
        <line x1="80" y1="140" x2="320" y2="140" stroke="#242f3d" />
        <text x="80" y="160" fill="#f3f4f6" font-size="10" font-weight="bold">Resultado Neto Real:</text>
        <text x="320" y="160" fill="#10b981" font-size="11.5" font-weight="bold" text-anchor="end">+$225.00</text>
      `;
      break;

    case 13:
      title = "Construcción de un Sistema Repetible";
      elementsHtml += `
        <g font-weight="bold" font-size="10" text-anchor="middle">
          <rect x="40" y="85" width="80" height="35" fill="#131a22" stroke="#242f3d" rx="4" />
          <text x="80" y="106" fill="#f3f4f6">1. Reglas</text>
          <rect x="150" y="85" width="90" height="35" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" rx="4" />
          <text x="195" y="106" fill="#3b82f6">2. Ejecución</text>
          <rect x="270" y="85" width="85" height="35" fill="#131a22" stroke="#242f3d" rx="4" />
          <text x="312.5" y="106" fill="#f3f4f6">3. Muestra 100</text>
          <rect x="380" y="85" width="80" height="35" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" rx="4" />
          <text x="420" y="106" fill="#10b981">4. Esperanza</text>
        </g>
      `;
      elementsHtml += arrow(120, 102, 150, 102, "#3b82f6");
      elementsHtml += arrow(240, 102, 270, 102, "#3b82f6");
      elementsHtml += arrow(355, 102, 380, 102, "#10b981");
      break;

    case 14:
      title = "Cálculo Dinámico de Contratos";
      elementsHtml += `
        <rect x="60" y="50" width="150" height="60" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="1.2" rx="4" />
        <text x="135" y="72" fill="#f3f4f6" font-size="9.5" font-weight="bold" text-anchor="middle">Stop Loss Estrecho (10 pts)</text>
        <text x="135" y="92" fill="#10b981" font-size="11.5" font-weight="bold" text-anchor="middle">2 Contratos MES</text>
        
        <rect x="290" y="50" width="150" height="60" fill="rgba(239, 68, 68, 0.04)" stroke="#ef4444" stroke-width="1.2" rx="4" />
        <text x="365" y="72" fill="#f3f4f6" font-size="9.5" font-weight="bold" text-anchor="middle">Stop Loss Amplio (20 pts)</text>
        <text x="365" y="92" fill="#ef4444" font-size="11.5" font-weight="bold" text-anchor="middle">1 Contrato MES</text>

        <path d="M 220,80 L 280,80" stroke="#f59e0b" stroke-dasharray="2,2" stroke-width="1.2" marker-end="url(#arr-14)" />
        <text x="250" y="135" fill="#f3f4f6" font-size="10" font-weight="bold" text-anchor="middle">El riesgo monetario total es el mismo en ambos setups ($100)</text>
      `;
      break;

    case 15:
      title = "Estructura de Mercado (Tendencia Alcista)";
      elementsHtml += wave([[40, 160], [100, 100], [140, 120], [210, 60], [250, 85], [320, 30], [360, 50], [420, 15]], "#3b82f6", 3.5);
      
      elementsHtml += circle(100, 100, 4, "#3b82f6"); elementsHtml += text(100, 85, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(210, 60, 4, "#3b82f6"); elementsHtml += text(210, 45, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(320, 30, 4, "#3b82f6"); elementsHtml += text(320, 15, "HH", 9.5, "#3b82f6", "middle", "bold");
      
      elementsHtml += circle(140, 120, 4, "#10b981"); elementsHtml += text(140, 136, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(250, 85, 4, "#10b981"); elementsHtml += text(250, 101, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(360, 50, 4, "#10b981"); elementsHtml += text(360, 66, "HL", 9.5, "#10b981", "middle", "bold");
      break;

    case 16:
      title = "Quiebre de Estructura (BOS Bajista)";
      elementsHtml += wave([[40, 140], [100, 80], [160, 110], [220, 50], [280, 125], [320, 140]], "#3b82f6", 3.5);
      
      elementsHtml += line(160, 110, 340, 110, "#ef4444", 1.2, "3,3");
      elementsHtml += circle(280, 125, 5, "#ef4444");
      elementsHtml += text(345, 114, "BOS Bajista (Quiebre)", 9.5, "#ef4444", "start", "bold");
      break;

    case 17:
      title = "Zonas de Oferta y Demanda";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="35" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="52" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE OFERTA INSTITUCIONAL (Ventas)</text>
        
        <rect x="40" y="135" width="420" height="35" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="157" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE DEMANDA INSTITUCIONAL (Compras)</text>
      `;
      break;

    case 18:
      title = "Acción del Precio Pura";
      elementsHtml += `
        <!-- Stylized pinbar pattern -->
        <line x1="250" y1="50" x2="250" y2="150" stroke="#10b981" stroke-width="3" />
        <rect x="242" y="50" width="16" height="25" fill="#10b981" rx="2" />
        <circle cx="250" cy="150" r="6" fill="#10b981" />
        <text x="250" y="172" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Pinbar Alcista (Rechazo de Mínimos)</text>
      `;
      break;

    case 19:
      title = "La Ley de Polaridad";
      elementsHtml += line(40, 110, 460, 110, "#f59e0b", 2);
      elementsHtml += text(45, 100, "Resistencia Antigua", 9, "#f59e0b");
      elementsHtml += text(45, 125, "Soporte Nuevo (Polaridad)", 9, "#10b981", "start", "bold");
      
      elementsHtml += wave([[60, 160], [130, 130], [200, 140], [270, 80], [330, 110], [410, 50]], "#3b82f6", 3);
      elementsHtml += circle(330, 110, 6, "#10b981");
      break;

    case 20:
      title = "EMA 200 y Momentum RSI";
      elementsHtml += wave([[40, 80], [120, 110], [200, 90], [280, 60], [360, 80], [440, 40]], "#3b82f6", 3.5);
      elementsHtml += wave([[40, 120], [120, 115], [200, 105], [280, 95], [360, 90], [440, 80]], "#f59e0b", 2);
      elementsHtml += text(440, 70, "EMA 200 (Filtro)", 9, "#f59e0b", "end");
      
      // RSI panel
      elementsHtml += `
        <rect x="40" y="145" width="420" height="40" fill="#131a22" stroke="#242f3d" rx="4" />
        <line x1="40" y1="165" x2="460" y2="165" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="2,2" />
        <text x="50" y="157" fill="#9ca3af" font-size="7.5">RSI 14 (Línea 50)</text>
        <path d="M 50,180 L 150,170 L 250,162 L 350,152 L 450,150" fill="none" stroke="#10b981" stroke-width="1.8" />
        <circle cx="250" cy="162" r="3.5" fill="#10b981" />
      `;
      break;

    case 21:
      title = "Faro de Dirección";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <path d="M 235,160 L 245,65 L 255,65 L 265,160 Z" fill="#1b222c" stroke="#3b82f6" stroke-width="2" />
        <rect x="242" y="52" width="16" height="13" fill="#f59e0b" rx="1.5" />
        <polygon points="250,58 100,20 100,120" fill="rgba(245, 158, 11, 0.05)" />
        <polygon points="250,58 400,20 400,120" fill="rgba(245, 158, 11, 0.05)" />
        <text x="250" y="45" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">ESTRUCTURA = EL FARO DE DIRECCIÓN</text>
      `;
      break;

    case 22:
      title = "Cronograma Diario del Operador";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="8" />
        <line x1="60" y1="100" x2="440" y2="100" stroke="#242f3d" stroke-width="4" />
        
        <circle cx="100" cy="100" r="8" fill="#3b82f6" />
        <text x="100" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">08:00 AM</text>
        <text x="100" y="120" fill="#9ca3af" font-size="8.5" text-anchor="middle">Pre-market</text>

        <circle cx="250" cy="100" r="8" fill="#10b981" />
        <text x="250" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">09:30 AM</text>
        <text x="250" y="120" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">Sesión Abierta</text>

        <circle cx="400" cy="100" r="8" fill="#f59e0b" />
        <text x="400" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">12:00 PM</text>
        <text x="400" y="120" fill="#9ca3af" font-size="8.5" text-anchor="middle">Cierre & Bitácora</text>
      `;
      break;

    case 23:
      title = "Checklist pre-market Visión Pro";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="48" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Lista de Confluencias de Entrada</text>
      `;
      const checklist = [
        "1. ¿Filtro direccional de tendencia EMA 200 verificado?",
        "2. ¿Filtro de momentum RSI 14 cruzado y confirmado?",
        "3. ¿Entrada en zona de soporte/resistencia estructural?",
        "4. ¿Gestión de riesgo asignada exactamente en el 1%?"
      ];
      checklist.forEach((str, i) => {
        const y = 68 + i * 26;
        elementsHtml += `
          <rect x="80" y="${y}" width="14" height="14" fill="none" stroke="#10b981" stroke-width="1.5" rx="3" />
          <polyline points="83 ${y+7}, 86 ${y+10}, 91 ${y+4}" fill="none" stroke="#10b981" stroke-width="2" />
          <text x="105" y="${y + 11}" fill="#f3f4f6" font-size="9.5">${str}</text>
        `;
      });
      break;

    case 24:
      title = "Pulsaciones vs Enfoque Estoico";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <rect x="50" y="50" width="165" height="110" fill="rgba(239, 68, 68, 0.02)" stroke="rgba(239, 68, 68, 0.15)" />
        <text x="132.5" y="70" fill="#ef4444" font-size="9.5" font-weight="bold" text-anchor="middle">Operativa por Impulso (Reactividad)</text>
        <text x="132.5" y="110" fill="#9ca3af" font-size="8.5" text-anchor="middle">Miedo a perder, FOMO, sobreoperar</text>

        <rect x="260" y="50" width="185" height="110" fill="rgba(16, 185, 129, 0.02)" stroke="rgba(16, 185, 129, 0.15)" />
        <text x="352.5" y="70" fill="#10b981" font-size="9.5" font-weight="bold" text-anchor="middle">Ejecución Estoica (Neutralidad)</text>
        <text x="352.5" y="110" fill="#9ca3af" font-size="8.5" text-anchor="middle">Acepta el riesgo y la probabilidad</text>
      `;
      break;

    case 25:
      title = "Apagado y Cierre Operativo";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#ef4444" stroke-width="1.5" rx="8" />
        <circle cx="250" cy="90" r="30" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="3" />
        <line x1="250" y1="72" x2="250" y2="92" stroke="#ef4444" stroke-width="5" stroke-linecap="round" />
        <text x="250" y="145" fill="#f3f4f6" font-size="12" font-weight="bold" text-anchor="middle">SISTEMA APAGADO</text>
      `;
      break;

    case 26:
      title = "Métricas Reales vs Planificadas";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <rect x="320" y="48" width="10" height="10" fill="#3b82f6" />
        <text x="335" y="56" fill="#9ca3af" font-size="8.5" font-family="Arial">Objetivo</text>
        <rect x="380" y="48" width="10" height="10" fill="#10b981" />
        <text x="395" y="56" fill="#9ca3af" font-size="8.5" font-family="Arial">Logrado</text>

        <rect x="90" y="70" width="20" height="70" fill="#3b82f6" />
        <rect x="112" y="80" width="20" height="60" fill="#10b981" />
        <text x="111" y="152" fill="#f3f4f6" font-size="8.5" text-anchor="middle">Acierto (50% vs 43%)</text>

        <rect x="230" y="80" width="20" height="60" fill="#3b82f6" />
        <rect x="252" y="60" width="20" height="80" fill="#10b981" />
        <text x="251" y="152" fill="#f3f4f6" font-size="8.5" text-anchor="middle">Ratio R:R (1:2 vs 1:2.4)</text>
      `;
      break;

    case 27:
      title = "Agrupación de Errores Operativos";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <circle cx="160" cy="105" r="50" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="20" />
        <circle cx="160" cy="105" r="30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="15" />
        <circle cx="160" cy="105" r="10" fill="#f59e0b" />
        
        <circle cx="150" cy="100" r="4" fill="#3b82f6" />
        <circle cx="162" cy="112" r="4" fill="#3b82f6" />
        <text x="230" y="85" fill="#3b82f6" font-size="9.5" font-weight="bold">Errores Técnicos (En el setup)</text>

        <circle cx="130" cy="75" r="4" fill="#ef4444" />
        <circle cx="190" cy="130" r="4" fill="#ef4444" />
        <text x="230" y="125" fill="#ef4444" font-size="9.5" font-weight="bold">Errores de Disciplina (FOMO)</text>
      `;
      break;

    case 28:
      title = "Bucle de Mejora Continua Estoica";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <path d="M 250,55 A 45,45 0 1,1 205,100" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arr-28)" />
        <path d="M 205,100 A 45,45 0 0,1 250,145" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arr-28)" />
        <path d="M 250,145 A 45,45 0 0,1 250,55" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-28)" />
        
        <text x="250" y="80" fill="#3b82f6" font-size="8.5" font-weight="bold" text-anchor="middle">1. AUDITAR</text>
        <text x="180" y="115" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">2. MEDIR</text>
        <text x="320" y="115" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">3. CORREGIR</text>
      `;
      break;

    case 29:
      title = "Order Block (OB) e Intervención Algorítmica";
      elementsHtml += `
        <!-- OB candle (bear) -->
        <rect x="80" y="110" width="20" height="40" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1.5" />
        <line x1="90" y1="90" x2="90" y2="160" stroke="#ef4444" stroke-width="1.2" />
        
        <!-- Big bull candle (breakout) -->
        <rect x="130" y="50" width="22" height="100" fill="#10b981" stroke="#10b981" />
        <line x1="141" y1="30" x2="141" y2="160" stroke="#10b981" stroke-width="1.5" />
        
        <!-- Pullback mitigation candle -->
        <rect x="240" y="110" width="20" height="25" fill="#ef4444" stroke="#ef4444" />
        <line x1="250" y1="95" x2="250" y2="145" stroke="#ef4444" />

        <!-- OB Area marker -->
        <rect x="80" y="110" width="180" height="40" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3" />
        <text x="170" y="125" fill="#10b981" font-size="8" font-weight="bold">Zona de Mitigación (Order Block)</text>

        <circle cx="250" cy="120" r="5" fill="#10b981" />
        <text x="250" y="85" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Mitigación (Entrada)</text>
      `;
      break;

    case 30:
      title = "sweeps de Liquidez (SSL / BSL)";
      elementsHtml += `
        <line x1="40" y1="120" x2="460" y2="120" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="50" y="112" fill="#ef4444" font-size="9">Sell Stops Pool (Soporte Obvio Minorista)</text>

        <!-- Wave sweeping -->
        <path d="M 60,80 L 150,120 L 220,90 L 290,120 L 310,155 L 350,60" fill="none" stroke="#3b82f6" stroke-width="3" />
        
        <circle cx="310" cy="155" r="5" fill="#10b981" />
        <text x="310" y="202" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Barrido de Stops (SSL Sweep)</text>
      `;
      break;

    case 31:
      title = "Fair Value Gap (Ineficiencias)";
      elementsHtml += `
        <!-- Candle 1 -->
        <rect x="80" y="120" width="18" height="30" fill="#10b981" />
        <line x1="89" y1="100" x2="89" y2="160" stroke="#10b981" />
        
        <!-- Candle 2 (aggressive expansion) -->
        <rect x="140" y="40" width="18" height="110" fill="#10b981" />
        <line x1="149" y1="20" x2="149" y2="160" stroke="#10b981" />

        <!-- Candle 3 -->
        <rect x="200" y="20" width="18" height="40" fill="#10b981" />
        <line x1="209" y1="10" x2="209" y2="80" stroke="#10b981" />

        <!-- FVG box between C1 high and C3 low -->
        <rect x="89" y="80" width="120" height="20" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,3" />
        <text x="149" y="93" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">Fair Value Gap (FVG)</text>
      `;
      break;

    case 32:
      title = "Fractalidad del Mercado";
      elementsHtml += `
        <!-- Left Panel: HTF Bias -->
        <rect x="35" y="40" width="180" height="130" fill="#131a22" stroke="#242f3d" stroke-width="1.5" rx="6" />
        <text x="125" y="55" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">HTF BIAS (Marco 1H)</text>
        <path d="M 50,150 L 100,110 L 140,120 L 200,60" fill="none" stroke="#3b82f6" stroke-width="2.5" />
        <circle cx="200" cy="60" r="4.5" fill="#f59e0b" />

        <!-- Right Panel: LTF Gatillo -->
        <rect x="285" y="40" width="180" height="130" fill="#131a22" stroke="#242f3d" stroke-width="1.5" rx="6" />
        <text x="375" y="55" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">LTF GATILLO (Marco 1m)</text>
        <path d="M 295,130 L 320,110 L 335,118 L 365,90 L 380,98 L 420,55" fill="none" stroke="#10b981" stroke-width="1.8" />
        
        <!-- Connection Arrow -->
        <path d="M 225,105 L 275,105" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr-32)" />
      `;
      break;

    case 33:
      title = "Zonas Premium y Descuento";
      elementsHtml += `
        <!-- Equilibrium line -->
        <line x1="40" y1="100" x2="460" y2="100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
        <text x="450" y="93" fill="#f59e0b" font-size="8.5" text-anchor="end">Precio de Equilibrio (50%)</text>
        
        <!-- Premium Box (Red) -->
        <rect x="40" y="30" width="420" height="70" fill="rgba(239, 68, 68, 0.04)" stroke="#ef4444" stroke-width="0.8" />
        <text x="50" y="52" fill="#ef4444" font-size="9.5" font-weight="bold">ZONA PREMIUM: CARO (Solo Ventas)</text>
        
        <!-- Discount Box (Green) -->
        <rect x="40" y="100" width="420" height="70" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="0.8" />
        <text x="50" y="160" fill="#10b981" font-size="9.5" font-weight="bold">ZONA DE DESCUENTO: BARATO (Solo Compras)</text>
      `;
      break;

    case 34:
      title = "Mitigación y Breaker Blocks";
      const brY = 110;
      elementsHtml += `
        <!-- Original OB box that was broken -->
        <rect x="60" y="${brY}" width="160" height="40" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
        <text x="70" y="${brY + 15}" fill="#3b82f6" font-size="8" font-weight="bold">OB Bajista Roto</text>
        
        <!-- Wave retest -->
        <path d="M 40,150 L 140,80 L 180,95 L 260,40 L 320,110 L 380,50" fill="none" stroke="#f3f4f6" stroke-width="3" />
        
        <!-- Retest circle and label -->
        <circle cx="320" cy="110" r="6" fill="#f59e0b" />
        <text x="320" y="135" fill="#f59e0b" font-size="9.5" font-weight="bold" text-anchor="middle">Breaker Block (Test de Soporte)</text>
      `;
      break;

    case 35:
      title = "POC y Subasta de Perfil de Volumen";
      const drawHorizontalVolumeBar = (y, w, isPOC) => {
        const color = isPOC ? "#ef4444" : "#3b82f6";
        return `
          <rect x="${440 - w}" y="${y}" width="${w}" height="8" fill="${color}" fill-opacity="${isPOC ? 0.35 : 0.15}" stroke="${color}" stroke-opacity="0.3" stroke-width="0.5" rx="1" />
        `;
      };
      
      elementsHtml += `
        <!-- Profile bars -->
        ${drawHorizontalVolumeBar(35, 45, false)}
        ${drawHorizontalVolumeBar(50, 60, false)}
        ${drawHorizontalVolumeBar(65, 85, false)}
        ${drawHorizontalVolumeBar(80, 110, false)}
        ${drawHorizontalVolumeBar(95, 175, true)} // POC peak
        ${drawHorizontalVolumeBar(110, 130, false)}
        ${drawHorizontalVolumeBar(125, 95, false)}
        ${drawHorizontalVolumeBar(140, 55, false)}
        ${drawHorizontalVolumeBar(155, 30, false)}

        <!-- POC horizontal line -->
        <line x1="40" y1="99" x2="440" y2="99" stroke="#ef4444" stroke-width="1.8" />
        <rect x="150" y="85" width="150" height="15" fill="#0c1017" rx="2" stroke="#ef4444" stroke-width="0.8" />
        <text x="225" y="96" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">POC (Punto de Control de Volumen Máximo)</text>
      `;
      break;

    case 36:
      title = "Reglas de Drawdown Institucional";
      elementsHtml += `
        <rect x="50" y="40" width="400" height="130" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="62" fill="#f3f4f6" font-size="11.5" font-weight="bold" text-anchor="middle">Límites de Preservación de Cuentas Fondeadas</text>
        
        <g font-size="9.5" fill="#9ca3af" transform="translate(80, 92)">
          <text x="0" y="0">Límite Diario (2%):</text>
          <text x="240" y="0" fill="#ef4444" font-weight="bold" text-anchor="end">-$1,000.00 USD</text>

          <text x="0" y="24">Límite Total (5%):</text>
          <text x="240" y="24" fill="#ef4444" font-weight="bold" text-anchor="end">-$2,500.00 USD</text>

          <text x="0" y="48">Target de Beneficio:</text>
          <text x="240" y="48" fill="#10b981" font-weight="bold" text-anchor="end">+$3,000.00 USD</text>
        </g>
      `;
      break;

    case 37:
      title = "Cierres Parciales y Riesgo Cero";
      const entryY = 110;
      const stopY = 145;
      const targetY = 75;
      
      elementsHtml += `
        <!-- Entry line -->
        <line x1="40" y1="${entryY}" x2="440" y2="${entryY}" stroke="#3b82f6" stroke-width="1.5" />
        <text x="45" y="${entryY - 5}" fill="#3b82f6" font-size="8.5">Nivel de Entrada (2 Contratos)</text>

        <!-- SL line original -->
        <line x1="40" y1="${stopY}" x2="440" y2="${stopY}" stroke="#ef4444" stroke-dasharray="2,2" stroke-width="1" opacity="0.5" />
        <text x="45" y="${stopY + 11}" fill="#ef4444" font-size="8.5" opacity="0.6">SL Original (-$100)</text>

        <!-- 1:1 Target met -->
        <line x1="40" y1="${targetY}" x2="440" y2="${targetY}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" />
        <text x="45" y="${targetY - 5}" fill="#10b981" font-size="8.5">R:R 1:1 Met (Cierre del 50% +$50 y SL a Entrada/Riesgo Cero)</text>
      `;
      break;

    case 38:
      title = "El Checklist de Visión Trading Pro";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#2962ff" stroke-width="1.5" rx="8" />
        <text x="250" y="48" fill="#2962ff" font-size="11.5" font-weight="bold" text-anchor="middle">Checklist Institucional de Confluencias</text>
      `;
      const finalRules = [
        "1. Contexto HTF: ¿Identificamos Order Block / FVG de 1H?",
        "2. Caza de Stops: ¿Ocurrió barrido de liquidez previo (SSL/BSL)?",
        "3. Gatillo Estructural: ¿Ocurrió BOS de confirmación local en 1m?",
        "4. Zona de Rango: ¿Buscamos operar en Descuento (largos) o Premium?"
      ];
      finalRules.forEach((str, i) => {
        const y = 66 + i * 26;
        elementsHtml += `
          <circle cx="75" cy="${y}" r="8" fill="rgba(41,98,255,0.1)" stroke="#2962ff" stroke-width="1.5" />
          <polyline points="72 ${y}, 74 ${y+3}, 78 ${y-3}" fill="none" stroke="#2962ff" stroke-width="2" />
          <text x="95" y="${y + 3}" fill="#f3f4f6" font-size="9.5" font-weight="bold">${str}</text>
        `;
      });
      break;

    case 39:
      title = "Curva de Crecimiento y Consistencia";
      elementsHtml += `
        <text x="250" y="45" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">PLAN DE ESCALAMIENTO PROFESIONAL</text>
        <line x1="60" y1="160" x2="440" y2="160" stroke="#242f3d" stroke-width="1.5" />
        <line x1="60" y1="60" x2="60" y2="160" stroke="#242f3d" stroke-width="1.5" />
        
        <path d="M 60,160 Q 180,150 260,100 T 420,60" fill="none" stroke="#10b981" stroke-width="3" />
        <circle cx="260" cy="100" r="5" fill="#f59e0b" />
        <text x="260" y="85" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">Retiro Seguro ($2,500)</text>
        
        <circle cx="420" cy="60" r="5" fill="#10b981" />
        <text x="425" y="52" fill="#10b981" font-size="8.5" font-weight="bold">Cuenta Duplicada / Escalamiento</text>
      `;
      break;

    case 40:
      title = "Gestión de Retiros y Payouts";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="6" />
        <text x="250" y="62" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Distribución de Beneficios (Prop Firm)</text>
        
        <g fill="#9ca3af" font-size="9.5" transform="translate(60, 95)">
          <text x="0" y="0">1. RETIRO SOLICITADO:</text>
          <text x="180" y="0" fill="#10b981" font-weight="bold">80% / 90% para el Trader</text>
          
          <text x="0" y="24">2. COLCHÓN DE DRAWDOWN:</text>
          <text x="180" y="24" fill="#3b82f6" font-weight="bold">Mantener reserva de seguridad</text>
          
          <text x="0" y="48">3. CAPITAL INVISIBLE:</text>
          <text x="180" y="48" fill="#f59e0b" font-weight="bold">Invertir en cuenta de fondos propios</text>
        </g>
      `;
      break;

    case 41:
      title = "Plan de Interés Compuesto y Negocio";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="52" fill="#f3f4f6" font-size="10" font-weight="bold" text-anchor="middle">CRECIMIENTO ANUAL DE CAPITAL INVISIBLE</text>
        
        <!-- Bar 1 -->
        <rect x="100" y="110" width="30" height="40" fill="#3b82f6" rx="2" />
        <text x="115" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 1</text>
        
        <!-- Bar 2 -->
        <rect x="170" y="90" width="30" height="60" fill="#3b82f6" rx="2" />
        <text x="185" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 3</text>
        
        <!-- Bar 3 -->
        <rect x="240" y="70" width="30" height="80" fill="#3b82f6" rx="2" />
        <text x="255" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 6</text>
        
        <!-- Bar 4 (Gold) -->
        <rect x="310" y="45" width="30" height="105" fill="#2962ff" rx="2" />
        <text x="325" y="165" fill="#2962ff" font-size="8" font-weight="bold" text-anchor="middle">Mes 12</text>
      `;
      break;

    case 42:
      title = "Diploma de Certificación Final";
      elementsHtml += `
        <rect x="80" y="30" width="340" height="150" fill="#131a22" stroke="#2962ff" stroke-width="3" rx="4" />
        <rect x="88" y="38" width="324" height="134" fill="none" stroke="rgba(41,98,255,0.2)" stroke-width="1.2" />
        
        <text x="250" y="65" fill="#2962ff" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="2">DIPLOMA DE CERTIFICACIÓN</text>
        <text x="250" y="85" fill="#9ca3af" font-size="7.5" text-anchor="middle">OTORGADO POR COMPLETAR EXPOSITIVAMENTE LA MASTERCLASS</text>
        <text x="250" y="110" fill="#f3f4f6" font-size="14" font-weight="bold" text-anchor="middle">MAESTRÍA EN TRADING PROFESIONAL</text>
        
        <text x="350" y="142" fill="#2962ff" font-size="7" font-weight="bold" text-anchor="middle">Firma: Visión Trading Pro</text>
      `;
      break;

    default:
      return "";
  }

  return `
    <div class="lesson-chart">
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${elementsHtml}
      </svg>
      <div class="lesson-chart-title">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: var(--color-accent);"></i>
        <span>Diagrama de Apoyo: ${title}</span>
      </div>
    </div>
  `;
};

  // Load Day details dynamically
window.loadDay = (dayId) => {
  const day = courseData[dayId];
  if (!day || !day.unlocked) return;

  activeDayId = dayId;
  activeSection = "academy-day";

  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const academyDaySection = document.getElementById("academy-day");
  if (academyDaySection) {
    academyDaySection.classList.add("active");
  }

  // Set visual texts
  document.getElementById("academy-day-title").innerHTML = `<i data-lucide="book-open"></i> Día ${dayId.replace("day", "")}: ${day.title}`;
  
  const dayNum = parseInt(dayId.replace("day", ""));
  const graphicHtml = getGraphicForDay(dayNum);
  document.getElementById("academy-day-content").innerHTML = (graphicHtml || "") + day.content;
  document.getElementById("academy-challenge-text").innerText = day.challenge;
  
  document.getElementById("btn-narrate-day").setAttribute("data-day", dayId);

  // Load saved challenge text
  const savedResponse = localStorage.getItem(`vision_challenge_${dayId}`) || "";
  document.getElementById("challenge-response").value = savedResponse;

  // Toggle Quiz displaying if review day
  const quizCard = document.getElementById("academy-quiz-card");
  
  if ([7, 14, 21, 28, 35, 42].includes(dayNum)) {
    quizCard.style.display = "block";
    renderPilarQuiz(day.pilar);
  } else {
    quizCard.style.display = "none";
  }

  // Toggle Next Lesson button
  const nextBtn = document.getElementById("btn-next-lesson-audio");
  if (nextBtn) {
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      nextBtn.style.display = "inline-flex";
    } else {
      nextBtn.style.display = "none";
    }
  }

  activePilarAccordion = day.pilar;
  renderAcademicMenu();
  stopAllSpeech();
  lucide.createIcons();
};

const renderPilarQuiz = (pilarId) => {
  activeQuizAnswers = {};
  const container = document.getElementById("academy-quiz-container");
  if (!container) return;

  const questions = pilarQuizzes[pilarId];
  if (!questions) return;

  let html = `<div class="quiz-questions-wrapper">`;

  questions.forEach((qObj, qIndex) => {
    html += `
      <div class="quiz-question-block" style="margin-bottom: 24px; border-bottom: 1px dashed var(--border-color); padding-bottom: 20px;" data-q-index="${qIndex}">
        <p class="quiz-question" style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${qIndex + 1}. ${qObj.q}</p>
        <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">
    `;

    qObj.options.forEach((opt, optIndex) => {
      html += `
        <button class="quiz-option" onclick="handleSelectOption(${pilarId}, ${qIndex}, ${optIndex}, this)">
          ${opt}
        </button>
      `;
    });

    html += `
        </div>
        <div class="quiz-feedback" id="feedback-pilar-${pilarId}-${qIndex}"></div>
      </div>
    `;
  });

  html += `</div>`;

  // Submit button
  html += `
    <div class="quiz-action-bar">
      <button class="btn-oro-liquido" id="btn-submit-quiz-pilar" onclick="submitPilarQuiz(${pilarId})" disabled style="padding: 10px 24px; border-radius: var(--radius-sm); font-size: 0.85rem; display: inline-flex; align-items: center; gap: 8px;">
        <i data-lucide="check"></i> Evaluar Cuestionario Semanal
      </button>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
};

// Handle quiz option selecting
window.handleSelectOption = (pilarId, qIndex, optIndex, buttonElement) => {
  if (pilarPassedStates[pilarId]) return; // Stop if already passed

  const questionBlock = buttonElement.closest(".quiz-question-block");
  questionBlock.querySelectorAll(".quiz-option").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.borderColor = "var(--border-color)";
    btn.style.background = "var(--bg-tertiary)";
  });

  buttonElement.style.borderColor = "var(--color-accent)";
  buttonElement.style.background = "rgba(59, 130, 246, 0.08)";

  activeQuizAnswers[qIndex] = optIndex;

  const total = pilarQuizzes[pilarId].length;
  const answered = Object.keys(activeQuizAnswers).length;
  
  const submitBtn = document.getElementById("btn-submit-quiz-pilar");
  if (submitBtn) {
    submitBtn.disabled = answered !== total;
  }
};

// Evaluate Pilar Quiz answers
window.submitPilarQuiz = (pilarId) => {
  const container = document.getElementById("academy-quiz-container");
  const questions = pilarQuizzes[pilarId];
  let correctCount = 0;

  questions.forEach((qObj, qIndex) => {
    const selected = activeQuizAnswers[qIndex];
    const questionBlock = container.querySelector(`[data-q-index="${qIndex}"]`);
    const options = questionBlock.querySelectorAll(".quiz-option");
    const feedbackEl = document.getElementById(`feedback-pilar-${pilarId}-${qIndex}`);

    options.forEach(btn => btn.classList.add("disabled"));

    if (selected === qObj.answer) {
      correctCount++;
      options[selected].classList.add("correct");
      feedbackEl.className = "quiz-feedback correct";
      feedbackEl.innerHTML = `<strong>🟢 ¡Correcto!</strong> ${qObj.explanation}`;
    } else {
      options[selected].classList.add("incorrect");
      options[qObj.answer].classList.add("correct");
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = `<strong>🔴 Incorrecto.</strong> ${qObj.explanation}`;
    }
  });

  const passed = correctCount === questions.length;
  const actionBar = container.querySelector(".quiz-action-bar");

  if (passed) {
    pilarPassedStates[pilarId] = true;
    
    // Mark the review day as completed
    courseData[activeDayId].completed = true;
    
    // Unlock next day
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      courseData[nextDayId].unlocked = true;
    }

    saveProgress();
    updateUIProgress();
    renderAcademicMenu();

    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle">5/5</div>
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">🎉 Pilar Aprobado con Éxito</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Has asimilado perfectamente las reglas innegociables de este pilar.</p>
        ${courseData[nextDayId]
          ? `<button class="btn-oro-liquido" onclick="window.loadDay('${nextDayId}')" style="padding: 10px 24px; border-radius: var(--radius-sm); font-size: 0.85rem;">Siguiente Semana <i data-lucide='arrow-right'></i></button>`
          : `<button class="btn-oro-liquido" onclick="showSection('certificate')" style="padding: 10px 24px; border-radius: var(--radius-sm); font-size: 0.85rem;">Obtener Mi Diploma <i data-lucide='award'></i></button>`
        }
      </div>
    `;
  } else {
    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle fail">${correctCount}/5</div>
        <h4 style="color: var(--color-bear); margin-bottom: 8px;">⚠️ Cuestionario No Superado</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Para avanzar de pilar debes responder correctamente el 100% de las preguntas operativas.</p>
        <button class="btn-oro-borde" onclick="renderPilarQuiz(${pilarId})" style="padding: 10px 24px; border-radius: var(--radius-sm); font-size: 0.85rem;">Reintentar Cuestionario</button>
      </div>
    `;
  }
  lucide.createIcons();
};

// Technical Glossary terms database
const glossaryTerms = [
  { term: "CME (Chicago Mercantile Exchange)", desc: "El mercado y bolsa regulada centralizada más grande del mundo para la negociación de contratos de futuros de índices, divisas y materias primas." },
  { term: "Margin Call (Llamada de Margen)", desc: "Aviso de advertencia del broker cuando el capital de tu cuenta cae por debajo del margen de mantenimiento debido a pérdidas flotantes. Conlleva la liquidación inmediata de posiciones." },
  { term: "Daily Drawdown", desc: "El límite máximo de pérdidas permitido en un solo día operativo. Sirve de freno financiero para proteger al trader de rachas perdedoras desastrosas." },
  { term: "BOS (Break of Structure)", desc: "Quiebre de Estructura. Ocurre cuando el precio quiebra con fuerza el último mínimo ascendente (HL) en tendencia alcista o el máximo descendente (LH) en tendencia bajista, indicando giros." },
  { term: "Tick y Punto", desc: "Fluctuaciones de precio. Un Tick es el movimiento mínimo de cotización (0.25 en ES/NQ). Un Punto equivale a 4 ticks enteros ($50 en ES, $20 en NQ por contrato)." },
  { term: "FVG (Fair Value Gap)", desc: "Iniciativa e ineficiencia en el precio provocada por compras o ventas agresivas que dejan un desequilibrio de liquidez en un patrón de 3 velas consecutivas." },
  { term: "Order Block (Bloque de Órdenes)", desc: "Zonas de precios donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado y donde se espera una reacción fuerte." },
  { term: "Slippage (Deslizamiento)", desc: "La diferencia de precio entre el valor solicitado de tu orden de compra/venta y el precio real al que se ejecuta en el mercado debido a la volatilidad." },
  { term: "Asimetría Matemática", desc: "La relación donde la ganancia promedio de tus aciertos es considerablemente mayor a la pérdida promedio de tus trades perdedores (R:B 1:2 o superior)." },
  { term: "FOMO", desc: "Miedo a quedar fuera (Fear of Missing Out). Impulso psicológico destructivo que empuja al trader a comprar precios inflados o vender precios bajos sin esperar a su setup." }
];

const renderGlossary = () => {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  let html = "";
  glossaryTerms.forEach(item => {
    html += `
      <div class="concept-card">
        <div class="concept-card-title"><i data-lucide="book-open" style="width:14px; height:14px; color:var(--color-accent);"></i> ${item.term}</div>
        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-top: 5px;">${item.desc}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
  lucide.createIcons();
};

// Render Certificate Completion info
const renderCertificate = () => {
  const nameInput = document.getElementById("cert-student-name");
  const dateText = document.getElementById("cert-date-str");
  
  if (nameInput) {
    const storedName = localStorage.getItem("vision_student_name") || "Trader Consistente";
    nameInput.textContent = storedName;
  }
  if (dateText) {
    dateText.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};

const getApiKey = () => {
  const stored = localStorage.getItem("vision_elevenlabs_api_key");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  }
  return stored.trim();
};

const getVoiceId = () => {
  const stored = localStorage.getItem("vision_elevenlabs_voice_id");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "ErXwobaYiN019PkySvjV"; // Default voice ID (Antoni - Hombre Humano)
  }
  return stored.trim();
};

// Audio Narration functions with ElevenLabs & Browser Web Speech
let activeAudio = null;
let activeNarratorButton = null;

const stopAllSpeech = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  const btn = document.getElementById("btn-narrate-day");
  if (btn) {
    btn.classList.remove("active");
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    const span = btn.querySelector("span");
    if (span) span.textContent = "Narrar Lección";
    const icon = btn.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", "volume-2");
  }
  lucide.createIcons();
  activeNarratorButton = null;
};

const handleNarrateClick = async (dayId, button) => {
  if (button === activeNarratorButton) {
    stopAllSpeech();
    return;
  }

  stopAllSpeech();

  const day = courseData[dayId];
  if (!day) return;

  // Read only the educational content, stripping HTML tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = day.content;
  let textToRead = tempDiv.innerText || tempDiv.textContent || "";

  // Replace $ followed by number with "[number] dólares" and other currency references to avoid TTS pronouncing $ as "pesos"
  textToRead = textToRead.replace(/\$(\d+(?:[.,]\d+)?)/g, "$1 dólares");
  textToRead = textToRead.replace(/\$/g, " dólares ");
  textToRead = textToRead.replace(/USD/gi, " dólares ");

  // Strip Markdown symbols like * or _ to make it read like a natural human voice (no pronouncing "asterisco", etc.)
  textToRead = textToRead.replace(/[*_#`~]/g, "");
  textToRead = textToRead.replace(/\s+/g, " "); // collapse whitespace
  const apiKey = getApiKey();
  const voiceId = getVoiceId();

  if (apiKey) {
    try {
      button.disabled = true;
      button.classList.add("loading");
      button.querySelector("span").textContent = "Generando Audio...";
      
      console.log(`[Narrador] Enviando petición a ElevenLabs. Voice ID: ${voiceId}`);
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey
        },
        body: JSON.stringify({
          text: textToRead.substring(0, 4800), // Safety cap limit
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.85,
            style: 0.05,
            use_speaker_boost: true
          }
        })
      });

      if (!response.ok) {
        let errMsg = `Código ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson && errJson.detail && errJson.detail.message) {
            errMsg = errJson.detail.message;
          }
        } catch (e) {
          errMsg = response.statusText || errMsg;
        }
        throw new Error(errMsg);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      activeAudio = new Audio(audioUrl);
      
      button.disabled = false;
      button.classList.remove("loading");
      button.classList.add("active");
      button.style.background = "rgba(16, 185, 129, 0.15)";
      button.style.color = "var(--color-bull)";
      button.style.borderColor = "var(--color-bull)";
      button.querySelector("span").textContent = "Detener";
      button.querySelector("i").setAttribute("data-lucide", "square");
      lucide.createIcons();
      activeNarratorButton = button;

      console.log(`[Narrador] Reproduciendo audio generado por ElevenLabs.`);
      activeAudio.play();
      activeAudio.onended = () => {
        stopAllSpeech();
      };
    } catch (err) {
      button.disabled = false;
      button.classList.remove("loading");
      button.querySelector("span").textContent = "Narrar Lección";
      console.warn(`[Narrador] Error con ElevenLabs: ${err.message}. Usando fallback.`);
      console.warn(`Error con ElevenLabs: ${err.message}. Usando el narrador gratuito por defecto...`);
      speakBrowser(textToRead, button);
    }
  } else {
    console.log(`[Narrador] No hay API Key configurada. Usando Web Speech API del navegador.`);
    speakBrowser(textToRead, button);
  }
};

const speakBrowser = (text, button) => {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz.");
    return;
  }

  window.speechSynthesis.cancel();
  const cleanText = text.replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "es-ES";
  
  const voices = window.speechSynthesis.getVoices();
  // Intentar buscar una voz en español masculina por nombre/palabras clave
  let esVoice = voices.find(v => {
    const nameLower = v.name.toLowerCase();
    const isSpanish = v.lang.startsWith("es-ES") || v.lang.startsWith("es");
    const isMale = nameLower.includes("male") || 
                   nameLower.includes("hombre") || 
                   nameLower.includes("jorge") || 
                   nameLower.includes("alvaro") || 
                   nameLower.includes("david") || 
                   nameLower.includes("julio");
    return isSpanish && isMale;
  });

  if (!esVoice) {
    esVoice = voices.find(v => v.lang.startsWith("es-ES") || v.lang.startsWith("es"));
  }

  if (esVoice) {
    utterance.voice = esVoice;
  }

  utterance.onstart = () => {
    button.classList.add("active");
    button.style.background = "rgba(59, 130, 246, 0.15)";
    button.style.color = "var(--color-accent)";
    button.style.borderColor = "var(--color-accent)";
    button.querySelector("span").textContent = "Detener";
    button.querySelector("i").setAttribute("data-lucide", "square");
    lucide.createIcons();
    activeNarratorButton = button;
  };

  utterance.onend = () => {
    stopAllSpeech();
  };

  utterance.onerror = () => {
    stopAllSpeech();
  };

  window.speechSynthesis.speak(utterance);
};



// Initialize app components on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Force initialize or upgrade the API Key if empty, corrupt, or matching the old key
  const currentKey = localStorage.getItem("vision_elevenlabs_api_key");
  const defaultKey = "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  const oldKey = "sk_d3c40fb422b9d257c30601542793b1787034f3e29f41d984";

  if (!currentKey || currentKey === "null" || currentKey === "undefined" || currentKey.trim() === "" || currentKey === oldKey) {
    localStorage.setItem("vision_elevenlabs_api_key", defaultKey);
  }

  // Set default voice ID to ErXwobaYiN019PkySvjV if not already set or if it's the old one
  const storedVoice = localStorage.getItem("vision_elevenlabs_voice_id");
  if (!storedVoice || storedVoice === "c6rAmJGsdzNWAIVkws45" || storedVoice === "null" || storedVoice === "undefined") {
    localStorage.setItem("vision_elevenlabs_voice_id", "ErXwobaYiN019PkySvjV");
  }

  // Navigation Menu Event Listeners
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showSection(target);
    });
  });

  // Narrate click listener
  const btnNarrate = document.getElementById("btn-narrate-day");
  if (btnNarrate) {
    btnNarrate.addEventListener("click", () => {
      const dayId = btnNarrate.getAttribute("data-day");
      handleNarrateClick(dayId, btnNarrate);
    });
  }

  // Save Challenge Response listener
  const btnSaveChallenge = document.getElementById("btn-save-challenge");
  if (btnSaveChallenge) {
    btnSaveChallenge.addEventListener("click", () => {
      const response = document.getElementById("challenge-response").value.trim();
      if (!response) {
        alert("Escribe una respuesta para el desafío de hoy antes de guardarlo en tu bitácora.");
        return;
      }

      localStorage.setItem(`vision_challenge_${activeDayId}`, response);
      alert("¡Entrada de Bitácora Guardada con Éxito!");

      const dayNum = parseInt(activeDayId.replace("day", ""));
      const isExamDay = [7, 15, 22, 30].includes(dayNum);

      if (!isExamDay) {
        courseData[activeDayId].completed = true;
        
        const nextDayId = `day${dayNum + 1}`;
        if (courseData[nextDayId]) {
          courseData[nextDayId].unlocked = true;
        }
        
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        const pilarId = courseData[activeDayId].pilar;
        if (pilarPassedStates[pilarId]) {
          courseData[activeDayId].completed = true;
          const nextDayId = `day${dayNum + 1}`;
          if (courseData[nextDayId]) {
            courseData[nextDayId].unlocked = true;
          }
          saveProgress();
          updateUIProgress();
          renderAcademicMenu();
        } else {
          alert("Desafío guardado. Recuerda que para avanzar debes aprobar el examen semanal de abajo con 100% de aciertos.");
        }
      }
    });
  }

  // Toggle Focus Mode listener
  const btnToggleFocus = document.getElementById("btn-toggle-focus");
  if (btnToggleFocus) {
    btnToggleFocus.addEventListener("click", () => {
      const body = document.body;
      body.classList.toggle("focus-mode-active");
      
      const span = btnToggleFocus.querySelector("span");
      const icon = btnToggleFocus.querySelector("i");
      
      if (body.classList.contains("focus-mode-active")) {
        span.textContent = "Salir Enfoque";
        if (icon) icon.setAttribute("data-lucide", "minimize-2");
      } else {
        span.textContent = "Modo Enfoque";
        if (icon) icon.setAttribute("data-lucide", "maximize-2");
      }
      lucide.createIcons();
    });
  }



  // Print Certificate listener
  const btnPrintCert = document.getElementById("btn-print-cert");
  if (btnPrintCert) {
    btnPrintCert.addEventListener("click", () => {
      // Prompt for name customization
      const currentName = localStorage.getItem("vision_student_name") || "Trader Consistente";
      const customizedName = prompt("Escribe tu nombre y apellido tal como deseas que aparezca en tu diploma:", currentName);
      
      if (customizedName !== null && customizedName.trim() !== "") {
        localStorage.setItem("vision_student_name", customizedName.trim());
        renderCertificate();
        window.print();
      } else if (customizedName !== null) {
        alert("Por favor introduce un nombre válido.");
      }
    });
  }

  // Audio settings modal setup
  const btnAudioSettings = document.getElementById("btn-audio-settings");
  const audioSettingsModal = document.getElementById("audio-settings-modal");
  const btnCloseAudioModal = document.getElementById("btn-close-audio-modal");
  const btnSaveAudioSettings = document.getElementById("btn-save-audio-settings");
  const elApiKeyInput = document.getElementById("el-api-key");
  const elVoiceSelect = document.getElementById("el-voice-select");
  const elCustomVoiceGroup = document.getElementById("el-custom-voice-group");
  const elVoiceIdInput = document.getElementById("el-voice-id");

  if (btnAudioSettings) {
    elApiKeyInput.value = getApiKey();

    // Initialize voice select from localStorage
    const savedVoiceId = localStorage.getItem("vision_elevenlabs_voice_id") || "ErXwobaYiN019PkySvjV";
    if (elVoiceSelect) {
      if (["c6rAmJGsdzNWAIVkws45", "ErXwobaYiN019PkySvjV"].includes(savedVoiceId)) {
        elVoiceSelect.value = savedVoiceId;
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
      } else {
        elVoiceSelect.value = "custom";
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
      }
      if (elVoiceIdInput) elVoiceIdInput.value = savedVoiceId;
    }

    if (elVoiceSelect) {
      elVoiceSelect.addEventListener("change", () => {
        if (elVoiceSelect.value === "custom") {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
        } else {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
          if (elVoiceIdInput) elVoiceIdInput.value = elVoiceSelect.value;
        }
      });
    }

    btnAudioSettings.addEventListener("click", () => {
      audioSettingsModal.style.display = "flex";
    });

    btnCloseAudioModal.addEventListener("click", () => {
      audioSettingsModal.style.display = "none";
    });

    btnSaveAudioSettings.addEventListener("click", () => {
      const apiKey = elApiKeyInput.value.trim();
      const voiceId = elVoiceIdInput ? elVoiceIdInput.value.trim() : "";
      
      if (apiKey) {
        localStorage.setItem("vision_elevenlabs_api_key", apiKey);
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
      }

      if (voiceId) {
        localStorage.setItem("vision_elevenlabs_voice_id", voiceId);
      } else {
        localStorage.removeItem("vision_elevenlabs_voice_id");
      }

      alert("Configuración de audio guardada correctamente.");
      audioSettingsModal.style.display = "none";
    });

    audioSettingsModal.addEventListener("click", (e) => {
      if (e.target === audioSettingsModal) {
        audioSettingsModal.style.display = "none";
      }
    });
  }

  // Apply pilar locks to the welcome index page cards
  const applyWelcomePilarLocks = () => {
    const cards = document.querySelectorAll(".module-card-list .module-card");
    if (!cards || cards.length === 0) return;
    cards.forEach((card, index) => {
      const pilarId = index + 1;
      const isPilarActive = localStorage.getItem("admin_pilar_" + pilarId + "_active") !== "false";
      if (!isPilarActive) {
        card.classList.add("locked-pilar");
        card.removeAttribute("onclick");
        card.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          alert("Este pilar ha sido bloqueado temporalmente por el mentor.");
        });
        const arrowIcon = card.querySelector(".module-card-arrow");
        if (arrowIcon) {
          arrowIcon.setAttribute("data-lucide", "lock");
          arrowIcon.style.opacity = "0.5";
        }
      }
    });
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

  // Load progress, render accordions, render glossary
  loadProgress();
  renderAcademicMenu();
  renderGlossary();
  applyWelcomePilarLocks();

  // Hash routing support
  const hash = window.location.hash.replace("#", "");
  if (["welcome", "calculator", "simulator", "glossary", "certificate"].includes(hash)) {
    showSection(hash);
  } else {
    showSection("welcome");
  }
});

// Global Function to navigate to the next lesson and trigger audio narration automatically
window.goToNextLesson = (autoPlayAudio) => {
  const currentDayNum = parseInt(activeDayId.replace("day", ""));
  const nextDayId = `day${currentDayNum + 1}`;

  if (currentDayNum >= 63) {
    alert("Has completado todo el curso. ¡Felicidades, Trader Soberano!");
    return;
  }

  // Save current challenge response automatically if they wrote something
  const responseField = document.getElementById("challenge-response");
  const responseText = responseField ? responseField.value.trim() : "";

  if (responseText) {
    localStorage.setItem(`vision_challenge_${activeDayId}`, responseText);
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const isExamDay = (dayNum % 7 === 0);

    if (!isExamDay) {
      courseData[activeDayId].completed = true;
      courseData[nextDayId].unlocked = true;
      saveProgress();
      updateUIProgress();
      renderAcademicMenu();
    } else {
      const pilarId = courseData[activeDayId].pilar;
      if (pilarPassedStates[pilarId]) {
        courseData[activeDayId].completed = true;
        courseData[nextDayId].unlocked = true;
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        alert("Desafío guardado. Recuerda que para avanzar de pilar debes aprobar la evaluación semanal de abajo.");
        return;
      }
    }
  } else if (!courseData[nextDayId].unlocked) {
    alert("Debes escribir y registrar tu respuesta al desafío de hoy antes de avanzar.");
    return;
  }

  // Load next day
  window.loadDay(nextDayId);

  // Auto-play audio if requested
  if (autoPlayAudio) {
    setTimeout(() => {
      const btnNarrate = document.getElementById("btn-narrate-day");
      if (btnNarrate) {
        handleNarrateClick(nextDayId, btnNarrate);
      }
    }, 450);
  }
};
