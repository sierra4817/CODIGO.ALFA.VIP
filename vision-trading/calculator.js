// Futures Position Calculator
document.addEventListener("DOMContentLoaded", () => {
  const calcCapital = document.getElementById("calc-capital");
  const calcRiskPct = document.getElementById("calc-risk-pct");
  const calcAsset = document.getElementById("calc-asset");
  const calcSlTicks = document.getElementById("calc-sl-ticks");

  // Output Elements
  const resRiskMoney = document.getElementById("res-risk-money");
  const resPointValue = document.getElementById("res-point-value");
  const resSlValue1Contract = document.getElementById("res-sl-value-1contract");
  const resContracts = document.getElementById("res-contracts");
  const resWarningMsg = document.getElementById("res-warning-msg");

  // Contract specs: Point Value (multiplier)
  const contractSpecs = {
    ES: 50,    // $50 per full point
    MES: 5,    // $5 per full point
    NQ: 20,    // $20 per full point
    MNQ: 2,    // $2 per full point
    CL: 1000,  // $1000 per full point (1.00 point movement = $1000. 0.01 tick = $10)
    MCL: 100   // $100 per full point (1.00 point movement = $100. 0.01 tick = $1)
  };

  const calculatePosition = () => {
    const capital = parseFloat(calcCapital.value) || 0;
    const riskPct = parseFloat(calcRiskPct.value) || 0;
    const asset = calcAsset.value;
    const slPoints = parseFloat(calcSlTicks.value) || 0;

    // Calculate maximum money at risk
    const riskMoney = capital * (riskPct / 100);
    resRiskMoney.textContent = `$${riskMoney.toFixed(2)}`;

    // Get point value for the asset
    const pointValue = contractSpecs[asset] || 0;
    resPointValue.textContent = `$${pointValue.toFixed(2)}`;

    // Calculate SL value for 1 contract
    const slValue1Contract = slPoints * pointValue;
    resSlValue1Contract.textContent = `$${slValue1Contract.toFixed(2)}`;

    // Calculate contracts to buy/sell
    if (slValue1Contract > 0) {
      const optimalContracts = riskMoney / slValue1Contract;
      
      // Highlight exact size (with precision)
      resContracts.textContent = `${optimalContracts.toFixed(2)} Contratos`;

      // Helper message
      const isMicro = asset.startsWith("M");
      const baseAsset = isMicro ? asset.substring(1) : asset;
      const minRequired = 1.0;

      if (optimalContracts < 1) {
        if (!isMicro) {
          const microEq = asset === "ES" ? "MES" : asset === "NQ" ? "MNQ" : "MCL";
          resWarningMsg.innerHTML = `⚠️ El tamaño calculado es menor a 1 contrato Mini. Te recomendamos cambiar al contrato Micro <strong>${microEq}</strong> para poder gestionar este riesgo adecuadamente.`;
        } else {
          resWarningMsg.innerHTML = `⚠️ El tamaño es inferior a 1 contrato Micro. Tu capital es demasiado pequeño para este nivel de stop loss con una gestión de riesgo del ${riskPct}%. Deberías reducir el Stop Loss o aumentar tu capital.`;
        }
      } else {
        const roundedDown = Math.floor(optimalContracts);
        resWarningMsg.innerHTML = `✅ <strong>Estrategia recomendada:</strong> Opera <strong>${roundedDown}</strong> contrato(s) de ${asset}. Redondeamos hacia abajo para mantener el riesgo estrictamente bajo el ${riskPct}%.`;
      }
    } else {
      resContracts.textContent = "0.00 Contratos";
      resWarningMsg.textContent = "⚠️ Ingresa un Stop Loss válido mayor que cero.";
    }
  };

  // Attach event listeners
  [calcCapital, calcRiskPct, calcAsset, calcSlTicks].forEach(element => {
    element.addEventListener("input", calculatePosition);
    element.addEventListener("change", calculatePosition);
  });

  // Run initial calculation
  calculatePosition();

  // Export Plan PDF Logic
  const exportTradingPlan = () => {
    const capital = document.getElementById("calc-capital").value || "10000";
    const riskPct = document.getElementById("calc-risk-pct").value || "1";
    const assetSelect = document.getElementById("calc-asset");
    const assetName = assetSelect ? assetSelect.options[assetSelect.selectedIndex].text : "E-mini S&P 500 (ES)";
    const slPuntos = document.getElementById("calc-sl-ticks").value || "10";
    
    const riskMoney = document.getElementById("res-risk-money") ? document.getElementById("res-risk-money").textContent : `$${(capital * riskPct / 100).toFixed(2)}`;
    const contracts = document.getElementById("res-contracts") ? document.getElementById("res-contracts").textContent : "0 Contratos";
    
    const planWindow = window.open("", "_blank");
    planWindow.document.write(`
      <html>
      <head>
        <title>Plan de Trading Personalizado - Visión Trading Pro</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #ffffff;
            color: #0b0e14;
            padding: 45px;
            line-height: 1.6;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #10b981;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .title {
            font-size: 24px;
            font-weight: bold;
            color: #0b0e14;
            margin: 0;
            letter-spacing: 1.5px;
          }
          .subtitle {
            font-size: 11px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-top: 5px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 15px;
            font-weight: bold;
            color: #10b981;
            border-bottom: 1.5px solid #e5e7eb;
            padding-bottom: 5px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .item {
            background: #f9fafb;
            padding: 12px 16px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
          }
          .label {
            font-size: 10px;
            color: #6b7280;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 0.5px;
          }
          .value {
            font-size: 16px;
            font-weight: bold;
            color: #0b0e14;
            margin-top: 4px;
          }
          .rules-list {
            padding-left: 20px;
            margin: 0;
          }
          .rules-list li {
            margin-bottom: 12px;
          }
          .footer {
            margin-top: 60px;
            text-align: center;
            font-size: 11px;
            color: #9ca3af;
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">PLAN DE TRADING PERSONALIZADO</div>
          <div class="subtitle">Estrategia Cuantitativa - Visión Trading Pro</div>
        </div>
        
        <div class="section">
          <div class="section-title">Parámetros de Capital y Gestión de Riesgo</div>
          <div class="grid">
            <div class="item">
              <div class="label">Capital Operativo</div>
              <div class="value">$${parseFloat(capital).toLocaleString('en-US', {minimumFractionDigits: 2})} USD</div>
            </div>
            <div class="item">
              <div class="label">Riesgo Permitido por Operación</div>
              <div class="value">${riskPct}% por Operación</div>
            </div>
            <div class="item">
              <div class="label">Riesgo Máximo en Dinero</div>
              <div class="value" style="color: #ef4444;">${riskMoney}</div>
            </div>
            <div class="item">
              <div class="label">Tamaño de Posición Óptimo</div>
              <div class="value" style="color: #3b82f6;">${contracts}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Reglas Operativas de Ejecución</div>
          <ul class="rules-list">
            <li><strong>Dirección de Tendencia (Filtro EMA 200)</strong>: Solo buscar compras si el precio está arriba de la EMA 200. Solo buscar ventas si está abajo. Está terminantemente prohibido operar en contra de la pendiente de la EMA 200.</li>
            <li><strong>Gatillo de Impulso (RSI 14)</strong>: Esperar el cruce de RSI sobre la línea central de 50 (en vela cerrada) para largos o bajo 50 para cortos. La entrada se realiza estrictamente en la apertura de la vela siguiente.</li>
            <li><strong>Fijación del Stop Loss Técnico</strong>: Ubicar el Stop Loss 1 punto por debajo del mínimo de oscilación reciente (Swing Low) para largos o por encima del máximo reciente (Swing High) para cortos. No usar tamaños aleatorios.</li>
            <li><strong>Salida Asimétrica Take Profit</strong>: Colocar el Take Profit exactamente a un ratio 1:2. Por cada dólar arriesgado en el stop loss, ir a buscar dos dólares de ganancia en el take profit.</li>
            <li><strong>Drawdown Máximo Diario</strong>: Pérdida diaria máxima fijada en 2 operaciones fallidas consecutivas (2%). Al alcanzar este límite, se apagarán las pantallas de inmediato sin excepciones emocionales.</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Compromiso de Disciplina</div>
          <p><em>"Entiendo que el mercado es un entorno de probabilidades y no de certezas. Mi trabajo no es tener la razón en cada operación individual, sino ejecutar mi ventaja estadística con disciplina inquebrantable y dejar que las matemáticas jueguen a mi favor en el largo plazo."</em></p>
        </div>

        <div class="footer">
          Plan de Trading Personalizado &copy; 2026. Generado bajo la guía de Visión Trading Pro.
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `);
    planWindow.document.close();
  };

  const btnExportPlan = document.getElementById("btn-export-plan");
  if (btnExportPlan) {
    btnExportPlan.addEventListener("click", exportTradingPlan);
  }
});
