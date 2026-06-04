// Visión Trading Pro - Interactive Futures Simulator
document.addEventListener("DOMContentLoaded", () => {
  const chartCanvas = document.getElementById("chartCanvas");
  const rsiCanvas = document.getElementById("rsiCanvas");
  const currentPriceEl = document.getElementById("sim-current-price");
  const simAssetSelect = document.getElementById("sim-asset-select");
  const toggleEmaBtn = document.getElementById("toggle-ema");
  const toggleRsiBtn = document.getElementById("toggle-rsi");
  const simSpeedSelect = document.getElementById("sim-speed");

  // Account Elements
  const simBalanceEl = document.getElementById("sim-balance");
  const simPnlEl = document.getElementById("sim-pnl");
  const simMarginEl = document.getElementById("sim-margin");

  // Order Inputs
  const simLeverageSelect = document.getElementById("sim-leverage");
  const simContractsInput = document.getElementById("sim-contracts");
  const simSlDistInput = document.getElementById("sim-sl-dist");
  const simTpDistInput = document.getElementById("sim-tp-dist");
  const btnBuy = document.getElementById("btn-buy");
  const btnSell = document.getElementById("btn-sell");

  // Active Position Layout
  const activePositionWidget = document.getElementById("sim-active-position");
  const posTypeBadge = document.getElementById("pos-type-badge");
  const posEntryPriceEl = document.getElementById("pos-entry-price");
  const posSlPriceEl = document.getElementById("pos-sl-price");
  const posTpPriceEl = document.getElementById("pos-tp-price");
  const btnClosePosition = document.getElementById("btn-close-position");

  // Canvas contexts
  const ctxMain = chartCanvas.getContext("2d");
  const ctxRsi = rsiCanvas.getContext("2d");

  // Web Audio API Sound Generator
  const playSound = (type) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const playTone = (freq, duration, typeOsc = "sine", delay = 0) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = typeOsc;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        
        gainNode.gain.setValueAtTime(0.12, ctx.currentTime + delay);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };

      if (type === "buy" || type === "sell") {
        // High rising beep
        playTone(660, 0.1, "sine");
        playTone(987.77, 0.15, "sine", 0.06); // B5
      } else if (type === "close") {
        // Sliding down neutral tone
        playTone(523.25, 0.1, "triangle"); // C5
        playTone(392.00, 0.15, "triangle", 0.06); // G4
      } else if (type === "win") {
        // Success major chord arpeggio
        playTone(523.25, 0.08, "sine");      // C5
        playTone(659.25, 0.08, "sine", 0.06);  // E5
        playTone(783.99, 0.08, "sine", 0.12);  // G5
        playTone(1046.50, 0.22, "sine", 0.18); // C6
      } else if (type === "loss") {
        // Low buzzy buzzer
        playTone(220, 0.15, "sawtooth");
        playTone(146.83, 0.3, "sawtooth", 0.08); // D3
      } else if (type === "liquidate") {
        // Repeating alarm sound
        playTone(293.66, 0.15, "sawtooth");
        playTone(196.00, 0.15, "sawtooth", 0.2);
        playTone(293.66, 0.15, "sawtooth", 0.4);
        playTone(196.00, 0.25, "sawtooth", 0.6);
      }
    } catch (e) {
      console.warn("Audio Context blocked:", e);
    }
  };

  // Contract specs matching calculator
  const contractSpecs = {
    ES: { name: "E-mini S&P 500", pointValue: 50, tickSize: 0.25, initialPrice: 4800 },
    NQ: { name: "E-mini Nasdaq 100", pointValue: 20, tickSize: 0.25, initialPrice: 17200 }
  };

  // Simulator State
  let activeAsset = "ES";
  let specs = contractSpecs[activeAsset];
  let priceHistory = []; // Array of candles: { open, high, low, close, rsi, ema200, buySignal, sellSignal }
  let currentCandle = null; // { open, high, low, close, ticks: [] }
  let lastPrice = specs.initialPrice;
  
  // Indicators toggle
  let showEma = true;
  let showRsi = true;

  // Account State
  let account = {
    balance: (() => {
      const saved = localStorage.getItem("vision_simulator_balance");
      return saved !== null ? parseFloat(saved) : 10000.0;
    })(),
    position: null, // { type: 'BUY'|'SELL', entryPrice, contracts, leverage, sl, tp, margin }
  };
  if (simBalanceEl) {
    simBalanceEl.textContent = `$${account.balance.toFixed(2)}`;
  }
  const statBalanceInit = document.getElementById("stat-balance");
  if (statBalanceInit) {
    statBalanceInit.textContent = `$${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // Simulation parameters
  let ticksPerCandle = 10;
  let currentTickCount = 0;
  let simInterval = null;
  let baseSpeedMs = 500; // time per tick
  let trendDirection = 1; // 1 = bullish, -1 = bearish, 0 = range
  let trendDuration = 100; // candles before switching trends
  let trendCount = 0;
  
  const resizeCanvases = () => {
    // Set internal resolution based on CSS size
    chartCanvas.width = chartCanvas.parentElement.clientWidth;
    chartCanvas.height = chartCanvas.clientHeight || 500;
    rsiCanvas.width = rsiCanvas.parentElement.clientWidth;
    rsiCanvas.height = rsiCanvas.clientHeight || 120;
    drawChart();
  };

  // Generate historical data
  const generateInitialData = () => {
    priceHistory = [];
    specs = contractSpecs[activeAsset];
    lastPrice = specs.initialPrice;
    
    // Set random seed factors
    let tempPrice = lastPrice - 150 * specs.tickSize * 2;
    let localTrend = 1;
    let localTrendCounter = 0;

    // Generate 320 historical candles (so EMA 200 is fully formed)
    for (let i = 0; i < 320; i++) {
      if (localTrendCounter++ > 50) {
        localTrend = Math.random() > 0.4 ? (localTrend === 1 ? -1 : 1) : 0;
        localTrendCounter = 0;
      }
      
      const bias = localTrend * 0.15;
      const volatility = specs.tickSize * 15;
      
      const open = tempPrice;
      const move1 = (Math.random() - 0.5 + bias) * volatility;
      const move2 = (Math.random() - 0.5 + bias) * volatility;
      const close = tempPrice + move1 + move2;
      
      const high = Math.max(open, close) + Math.random() * specs.tickSize * 6;
      const low = Math.min(open, close) - Math.random() * specs.tickSize * 6;

      // Align to tick size
      const align = (val) => Math.round(val / specs.tickSize) * specs.tickSize;
      
      const candle = {
        open: align(open),
        high: align(high),
        low: align(low),
        close: align(close)
      };

      priceHistory.push(candle);
      tempPrice = candle.close;
    }

    lastPrice = tempPrice;
    calculateIndicators();
  };

  // Indicators calculation
  const calculateIndicators = () => {
    // 1. EMA 200 Calculation
    const emaPeriod = 200;
    const k = 2 / (emaPeriod + 1);
    
    // Simple SMA for first 200 elements to start
    let sum = 0;
    for (let i = 0; i < emaPeriod; i++) {
      sum += priceHistory[i].close;
    }
    let ema = sum / emaPeriod;
    priceHistory[emaPeriod - 1].ema200 = ema;

    for (let i = emaPeriod; i < priceHistory.length; i++) {
      ema = priceHistory[i].close * k + ema * (1 - k);
      priceHistory[i].ema200 = ema;
    }

    // 2. RSI 14 Calculation (Wilder's smoothing)
    const rsiPeriod = 14;
    let gains = [];
    let losses = [];

    // Calculate changes
    for (let i = 1; i < priceHistory.length; i++) {
      const diff = priceHistory[i].close - priceHistory[i - 1].close;
      gains.push(diff > 0 ? diff : 0);
      losses.push(diff < 0 ? -diff : 0);
    }

    // Average Gain/Loss (Initial SMA)
    let avgGain = 0;
    let avgLoss = 0;
    for (let i = 0; i < rsiPeriod; i++) {
      avgGain += gains[i];
      avgLoss += losses[i];
    }
    avgGain /= rsiPeriod;
    avgLoss /= rsiPeriod;

    // First RSI
    let rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    priceHistory[rsiPeriod].rsi = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));

    // Wilder's Smoothing
    for (let i = rsiPeriod + 1; i < priceHistory.length; i++) {
      const idx = i - 1; // gains/losses offset by 1
      avgGain = (avgGain * (rsiPeriod - 1) + gains[idx]) / rsiPeriod;
      avgLoss = (avgLoss * (rsiPeriod - 1) + losses[idx]) / rsiPeriod;
      
      rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      priceHistory[i].rsi = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));
    }

    // 3. Strategy Signal Flags: EMA 200 + RSI 50 crossover
    for (let i = 1; i < priceHistory.length; i++) {
      const prev = priceHistory[i - 1];
      const curr = priceHistory[i];
      
      curr.buySignal = false;
      curr.sellSignal = false;

      if (curr.ema200 && curr.rsi && prev.rsi) {
        // Buy: Price > EMA 200 AND RSI crosses above 50
        if (curr.close > curr.ema200 && prev.rsi <= 50 && curr.rsi > 50) {
          curr.buySignal = true;
        }
        // Sell: Price < EMA 200 AND RSI crosses below 50
        if (curr.close < curr.ema200 && prev.rsi >= 50 && curr.rsi < 50) {
          curr.sellSignal = true;
        }
      }
    }
  };

  // Set active price and calculate simulated live ticks
  const generateTick = () => {
    // Manage Trend regime
    if (trendCount++ > trendDuration) {
      trendDirection = Math.random() > 0.45 ? (trendDirection === 1 ? -1 : 1) : 0;
      trendDuration = 50 + Math.floor(Math.random() * 80);
      trendCount = 0;
    }

    const volatility = specs.tickSize * 2.5;
    const bias = trendDirection * specs.tickSize * 0.4;
    
    // Tick change
    const delta = (Math.random() - 0.5 + bias) * volatility;
    // Align to tick size
    const tickChange = Math.round(delta / specs.tickSize) * specs.tickSize;
    
    lastPrice += tickChange;
    
    // Update active candle
    if (!currentCandle) {
      currentCandle = {
        open: lastPrice,
        high: lastPrice,
        low: lastPrice,
        close: lastPrice,
        ticks: [lastPrice]
      };
    } else {
      currentCandle.close = lastPrice;
      currentCandle.high = Math.max(currentCandle.high, lastPrice);
      currentCandle.low = Math.min(currentCandle.low, lastPrice);
      currentCandle.ticks.push(lastPrice);
    }

    currentTickCount++;

    // Update UI Price Text
    currentPriceEl.textContent = lastPrice.toFixed(2);
    const prevClose = priceHistory[priceHistory.length - 1].close;
    if (lastPrice >= prevClose) {
      currentPriceEl.className = "asset-price bullish";
    } else {
      currentPriceEl.className = "asset-price bearish";
    }

    // Process active position PnL & liquidations
    processPosition();

    // If candle completes
    if (currentTickCount >= ticksPerCandle) {
      // Push candle to history
      priceHistory.push({
        open: currentCandle.open,
        high: currentCandle.high,
        low: currentCandle.low,
        close: currentCandle.close
      });

      // Shift history to avoid memory bloop
      if (priceHistory.length > 500) {
        priceHistory.shift();
      }

      // Re-calculate indicators on completed candle
      calculateIndicators();
      
      // Clear tick state
      currentCandle = null;
      currentTickCount = 0;
    }

    drawChart();
  };

  // Draw Main & RSI Canvases
  const drawChart = () => {
    if (priceHistory.length === 0) return;

    // Clear Canvas
    ctxMain.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
    ctxRsi.clearRect(0, 0, rsiCanvas.width, rsiCanvas.height);

    const visibleCandles = 60;
    const paddingRight = 80;
    const paddingLeft = 10;
    const chartHeight = chartCanvas.height - 40;
    const chartWidth = chartCanvas.width - paddingRight - paddingLeft;
    
    const candleWidth = chartWidth / visibleCandles;

    // Get range of visible data to scale Y axis
    let visibleSlice = priceHistory.slice(-visibleCandles);
    
    // Add current forming candle to list for rendering
    if (currentCandle) {
      visibleSlice.push(currentCandle);
      if (visibleSlice.length > visibleCandles) {
        visibleSlice.shift();
      }
    }

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    visibleSlice.forEach(c => {
      minPrice = Math.min(minPrice, c.low);
      maxPrice = Math.max(maxPrice, c.high);
      if (c.ema200 && showEma) {
        minPrice = Math.min(minPrice, c.ema200);
        maxPrice = Math.max(maxPrice, c.ema200);
      }
    });

    // Add padding to Y scale
    const priceRange = maxPrice - minPrice || 1;
    minPrice -= priceRange * 0.08;
    maxPrice += priceRange * 0.08;

    // Function to convert price to canvas Y coordinate
    const priceToY = (price) => {
      return chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * (chartHeight - 30) + 15;
    };

    // Draw Grid Lines
    ctxMain.strokeStyle = "#17202b";
    ctxMain.lineWidth = 1;
    ctxMain.font = "10px Space Grotesk";
    ctxMain.fillStyle = "#6b7280";
    ctxMain.textAlign = "left";

    // Horizontal Grid Lines & Price labels
    const gridLinesCount = 5;
    for (let i = 0; i <= gridLinesCount; i++) {
      const gridPrice = minPrice + (priceRange * i) / gridLinesCount;
      const y = priceToY(gridPrice);
      
      ctxMain.beginPath();
      ctxMain.moveTo(0, y);
      ctxMain.lineTo(chartCanvas.width - paddingRight, y);
      ctxMain.stroke();

      // Draw price text on Y axis margin
      ctxMain.fillText(gridPrice.toFixed(2), chartCanvas.width - paddingRight + 8, y + 4);
    }

    // Draw Candlesticks & Signals
    visibleSlice.forEach((c, idx) => {
      const x = paddingLeft + idx * candleWidth + candleWidth / 2;
      const yOpen = priceToY(c.open);
      const yClose = priceToY(c.close);
      const yHigh = priceToY(c.high);
      const yLow = priceToY(c.low);
      
      const isBull = c.close >= c.open;
      const color = isBull ? "#37ca37" : "#e93d3d";
      
      // 1. Draw wick
      ctxMain.strokeStyle = color;
      ctxMain.lineWidth = 1.5;
      ctxMain.beginPath();
      ctxMain.moveTo(x, yHigh);
      ctxMain.lineTo(x, yLow);
      ctxMain.stroke();

      // 2. Draw body
      ctxMain.fillStyle = color;
      const rectX = x - (candleWidth * 0.7) / 2;
      const rectY = Math.min(yOpen, yClose);
      const rectH = Math.max(Math.abs(yOpen - yClose), 1.5); // At least 1.5px high
      ctxMain.fillRect(rectX, rectY, candleWidth * 0.7, rectH);

      // 3. Draw Strategy signals (Buy/Sell flags)
      if (c.buySignal) {
        ctxMain.fillStyle = "#37ca37";
        ctxMain.beginPath();
        // Green Triangle pointing up below candle
        ctxMain.moveTo(x, yLow + 8);
        ctxMain.lineTo(x - 5, yLow + 16);
        ctxMain.lineTo(x + 5, yLow + 16);
        ctxMain.fill();
      }
      if (c.sellSignal) {
        ctxMain.fillStyle = "#e93d3d";
        ctxMain.beginPath();
        // Red Triangle pointing down above candle
        ctxMain.moveTo(x, yHigh - 8);
        ctxMain.lineTo(x - 5, yHigh - 16);
        ctxMain.lineTo(x + 5, yHigh - 16);
        ctxMain.fill();
      }
    });

    // Draw EMA 200 Line
    if (showEma) {
      ctxMain.strokeStyle = "#DFBA73";
      ctxMain.lineWidth = 2;
      ctxMain.beginPath();
      let firstEma = true;

      visibleSlice.forEach((c, idx) => {
        if (c.ema200) {
          const x = paddingLeft + idx * candleWidth + candleWidth / 2;
          const y = priceToY(c.ema200);
          if (firstEma) {
            ctxMain.moveTo(x, y);
            firstEma = false;
          } else {
            ctxMain.lineTo(x, y);
          }
        }
      });
      ctxMain.stroke();
    }

    // Draw Position, SL & TP horizontal guidelines if active
    if (account.position) {
      const pos = account.position;
      const drawHorizontalLine = (price, color, lineStyle, text) => {
        const y = priceToY(price);
        ctxMain.strokeStyle = color;
        ctxMain.lineWidth = 1;
        ctxMain.setLineDash(lineStyle);
        ctxMain.beginPath();
        ctxMain.moveTo(0, y);
        ctxMain.lineTo(chartCanvas.width - paddingRight, y);
        ctxMain.stroke();
        ctxMain.setLineDash([]); // clear dash

        // Draw tag background
        ctxMain.fillStyle = color;
        ctxMain.fillRect(chartCanvas.width - paddingRight, y - 8, paddingRight - 5, 16);
        
        ctxMain.fillStyle = "#ffffff";
        ctxMain.font = "bold 9px Space Grotesk";
        ctxMain.textAlign = "center";
        ctxMain.fillText(text, chartCanvas.width - paddingRight + (paddingRight / 2), y + 3);
      };

      const posColor = pos.type === "BUY" ? "#37ca37" : "#e93d3d";
      drawHorizontalLine(pos.entryPrice, posColor, [4, 4], `${pos.type === "BUY" ? "L" : "S"} @ ${pos.entryPrice}`);
      
      if (pos.sl) {
        drawHorizontalLine(pos.sl, "#e93d3d", [2, 2], `SL: ${pos.sl}`);
      }
      if (pos.tp) {
        drawHorizontalLine(pos.tp, "#37ca37", [2, 2], `TP: ${pos.tp}`);
      }
    }

    // ==========================================
    // DRAW RSI CANVAS
    // ==========================================
    if (showRsi) {
      const rsiHeight = rsiCanvas.height - 20;
      const rsiWidth = rsiCanvas.width - paddingRight - paddingLeft;
      
      // Helper scale Y (RSI is 0-100)
      const rsiToY = (rsiVal) => {
        return rsiHeight - (rsiVal / 100) * (rsiHeight - 10) + 10;
      };

      // Draw Grid Lines (30, 50, 70)
      ctxRsi.strokeStyle = "#17202b";
      ctxRsi.lineWidth = 1;
      
      const levels = [30, 50, 70];
      levels.forEach(lvl => {
        const y = rsiToY(lvl);
        
        if (lvl === 50) {
          ctxRsi.strokeStyle = "rgba(55, 202, 55, 0.4)"; // highlight center line
          ctxRsi.setLineDash([2, 4]);
        } else {
          ctxRsi.strokeStyle = "#1e293b";
          ctxRsi.setLineDash([]);
        }

        ctxRsi.beginPath();
        ctxRsi.moveTo(0, y);
        ctxRsi.lineTo(rsiCanvas.width - paddingRight, y);
        ctxRsi.stroke();
        ctxRsi.setLineDash([]);

        ctxRsi.fillStyle = lvl === 50 ? "#37ca37" : "#4b5563";
        ctxRsi.font = "9px Space Grotesk";
        ctxRsi.textAlign = "left";
        ctxRsi.fillText(lvl.toString(), rsiCanvas.width - paddingRight + 8, y + 3);
      });

      // Draw RSI line
      ctxRsi.strokeStyle = "#37ca37"; // Cian Algorítmico
      ctxRsi.lineWidth = 1.5;
      ctxRsi.beginPath();
      
      let firstRsi = true;
      visibleSlice.forEach((c, idx) => {
        if (c.rsi) {
          const x = paddingLeft + idx * candleWidth + candleWidth / 2;
          const y = rsiToY(c.rsi);
          if (firstRsi) {
            ctxRsi.moveTo(x, y);
            firstRsi = false;
          } else {
            ctxRsi.lineTo(x, y);
          }
        }
      });
      ctxRsi.stroke();
    }
  };

  // Trade Execution & Management Logic
  const processPosition = () => {
    if (!account.position) {
      simPnlEl.textContent = "$0.00";
      simPnlEl.className = "balance-val";
      simMarginEl.textContent = "$0.00";
      return;
    }

    const pos = account.position;
    let pnlPoints = 0;

    if (pos.type === "BUY") {
      pnlPoints = lastPrice - pos.entryPrice;
    } else {
      pnlPoints = pos.entryPrice - lastPrice;
    }

    const rawPnL = pnlPoints * pos.contracts * specs.pointValue;
    
    // Update PnL display
    simPnlEl.textContent = `${rawPnL >= 0 ? "+" : ""}$${rawPnL.toFixed(2)}`;
    simPnlEl.className = `balance-val ${rawPnL >= 0 ? "pnl-positive" : "pnl-negative"}`;

    // Update Margin display
    simMarginEl.textContent = `$${pos.margin.toFixed(2)}`;

    // 1. Check Stop Loss / Take Profit triggers
    let triggered = false;
    let reason = "";

    if (pos.sl) {
      if (pos.type === "BUY" && lastPrice <= pos.sl) {
        triggered = true;
        reason = "Stop Loss alcanzado (Pérdida)";
      } else if (pos.type === "SELL" && lastPrice >= pos.sl) {
        triggered = true;
        reason = "Stop Loss alcanzado (Pérdida)";
      }
    }

    if (pos.tp) {
      if (pos.type === "BUY" && lastPrice >= pos.tp) {
        triggered = true;
        reason = "Take Profit alcanzado (Ganancia)";
      } else if (pos.type === "SELL" && lastPrice <= pos.tp) {
        triggered = true;
        reason = "Take Profit alcanzado (Ganancia)";
      }
    }

    // 2. Margin Call Liquidation
    const equity = account.balance + rawPnL;
    if (equity < pos.margin * 0.4) {
      triggered = true;
      reason = "Liquidación forzada por falta de margen (Margin Call)";
    }

    if (triggered) {
      closePosition(rawPnL, reason);
    }
  };

  // Open position
  const openPosition = (type) => {
    if (account.position) {
      alert("Ya tienes una operación abierta. Ciérrala antes de abrir una nueva.");
      return;
    }

    const contracts = parseFloat(simContractsInput.value) || 0;
    if (contracts <= 0) {
      alert("Introduce un número válido de contratos.");
      return;
    }

    const leverage = parseFloat(simLeverageSelect.value) || 20;
    const slDist = parseFloat(simSlDistInput.value) || 0;
    const tpDist = parseFloat(simTpDistInput.value) || 0;

    // Margin requirement calculation
    // Margin = (Position Value) / Leverage
    // Position Value = Contracts * Entry Price * Point Value
    const entryPrice = lastPrice;
    const positionValue = contracts * entryPrice * specs.pointValue;
    const requiredMargin = positionValue / leverage;

    if (account.balance < requiredMargin) {
      alert(`Margen insuficiente. Requieres $${requiredMargin.toFixed(2)} pero tu balance es $${account.balance.toFixed(2)}.`);
      return;
    }

    // Calculate absolute SL & TP prices
    let sl = null;
    let tp = null;

    if (slDist > 0) {
      sl = type === "BUY" ? entryPrice - slDist : entryPrice + slDist;
    }
    if (tpDist > 0) {
      tp = type === "BUY" ? entryPrice + tpDist : entryPrice - tpDist;
    }

    // Save position state
    account.position = {
      type,
      entryPrice,
      contracts,
      leverage,
      sl,
      tp,
      margin: requiredMargin
    };

    // Play order open sound
    playSound(type.toLowerCase());

    // Update UI Position details
    activePositionWidget.style.display = "block";
    posTypeBadge.className = `position-badge ${type === "BUY" ? "long" : "short"}`;
    posTypeBadge.textContent = `${type === "BUY" ? "Largo" : "Corto"} ${contracts} ${activeAsset}`;
    posEntryPriceEl.textContent = entryPrice.toFixed(2);
    posSlPriceEl.textContent = sl ? sl.toFixed(2) : "-";
    posTpPriceEl.textContent = tp ? tp.toFixed(2) : "-";

    drawChart();
  };

  // Close active position
  const closePosition = (finalPnL, reason = "Cierre manual") => {
    if (!account.position) return;

    // Apply PnL to balance
    account.balance += finalPnL;
    try {
      localStorage.setItem("vision_simulator_balance", account.balance.toString());
    } catch (e) {
      console.warn("Could not save simulator balance:", e);
    }
    
    // Play corresponding sound effect
    if (reason.includes("Liquidación")) {
      playSound("liquidate");
    } else if (reason.includes("Stop Loss")) {
      playSound("loss");
    } else if (reason.includes("Take Profit")) {
      playSound("win");
    } else {
      playSound("close");
    }

    // Alert user
    alert(`${reason}. P&L Final: ${finalPnL >= 0 ? "+" : ""}$${finalPnL.toFixed(2)}`);

    // Reset account state
    account.position = null;

    // Hide Widget
    activePositionWidget.style.display = "none";
    simBalanceEl.textContent = `$${account.balance.toFixed(2)}`;
    const statBalanceClose = document.getElementById("stat-balance");
    if (statBalanceClose) {
      statBalanceClose.textContent = `$${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    simPnlEl.textContent = "$0.00";
    simPnlEl.className = "balance-val";
    simMarginEl.textContent = "$0.00";

    drawChart();
  };

  // Restart Sim on Asset change
  const handleAssetChange = () => {
    activeAsset = simAssetSelect.value;
    specs = contractSpecs[activeAsset];
    
    // Clear active position
    if (account.position) {
      account.position = null;
      activePositionWidget.style.display = "none";
    }

    generateInitialData();
    drawChart();

    // Dynamically update TradingView widget if active
    if (typeof currentViewMode !== "undefined" && currentViewMode === "tv") {
      createTVWidget(activeAsset);
    }
  };

  // Toggle indicators visibility
  const setupToggleListeners = () => {
    toggleEmaBtn.addEventListener("click", () => {
      showEma = !showEma;
      toggleEmaBtn.classList.toggle("active", showEma);
      drawChart();
    });

    toggleRsiBtn.addEventListener("click", () => {
      showRsi = !showRsi;
      toggleRsiBtn.classList.toggle("active", showRsi);
      
      // Hide or show RSI Canvas
      if (showRsi) {
        rsiCanvas.style.display = "block";
      } else {
        rsiCanvas.style.display = "none";
      }
      resizeCanvases();
    });
  };

  // Change simulation tick speed
  const setupSpeedControl = () => {
    const handleSpeedChange = () => {
      if (simInterval) clearInterval(simInterval);
      
      const multiplier = parseInt(simSpeedSelect.value) || 1;
      const speed = baseSpeedMs / multiplier;
      
      simInterval = setInterval(generateTick, speed);
    };

    simSpeedSelect.addEventListener("change", handleSpeedChange);
    handleSpeedChange(); // Start
  };

  // Initial calls
  generateInitialData();
  setupToggleListeners();
  setupSpeedControl();

  // Attach button events
  btnBuy.addEventListener("click", () => openPosition("BUY"));
  btnSell.addEventListener("click", () => openPosition("SELL"));
  btnClosePosition.addEventListener("click", () => {
    if (account.position) {
      // Calculate final PnL
      const pos = account.position;
      const pnlPoints = pos.type === "BUY" ? (lastPrice - pos.entryPrice) : (pos.entryPrice - lastPrice);
      const finalPnL = pnlPoints * pos.contracts * specs.pointValue;
      closePosition(finalPnL, "Cierre manual por el usuario");
    }
  });

  simAssetSelect.addEventListener("change", handleAssetChange);

  // ==========================================================================
  // TradingView & MT5 Widget Integration & View Toggling Lobe
  // ==========================================================================
  const btnChartSim = document.getElementById("btn-chart-sim");
  const btnChartTv = document.getElementById("btn-chart-tv");
  const btnChartMt = document.getElementById("btn-chart-mt");
  const simCanvasContainer = document.getElementById("sim-canvas-container");
  const simTvContainer = document.getElementById("sim-tv-container");
  const simMtContainer = document.getElementById("sim-mt-container");
  const mt5Iframe = document.getElementById("mt5_iframe");
  const simChartControls = document.getElementById("sim-chart-controls");

  // Real chart state helpers
  const realChartInfoCard = document.getElementById("real-chart-info-card");
  const simBalanceCard = document.getElementById("sim-balance-card");
  const simOrderCard = document.getElementById("sim-order-card");

  window.currentViewMode = "sim"; // Global tracking

  window.createTVWidget = (symbol) => {
    // Map ES -> E-mini S&P 500 futures, NQ -> Nasdaq E-mini futures
    const tvSymbol = symbol === "NQ" ? "CME_MINI:NQ1!" : "CME_MINI:ES1!";
    
    const chartDiv = document.getElementById("tradingview_chart");
    if (chartDiv) {
      chartDiv.innerHTML = "";
    }
    
    if (typeof TradingView !== "undefined") {
      new TradingView.widget({
        "autosize": true,
        "symbol": tvSymbol,
        "interval": "5",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "es",
        "toolbar_bg": "#131722",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_chart"
      });
    }
  };

  const loadTradingViewScriptAndWidget = (symbol) => {
    if (typeof TradingView === "undefined") {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.type = "text/javascript";
      script.onload = () => {
        window.createTVWidget(symbol);
      };
      document.head.appendChild(script);
    } else {
      window.createTVWidget(symbol);
    }
  };

  const switchViewMode = (mode) => {
    window.currentViewMode = mode;
    
    // Toggle active state classes
    btnChartSim?.classList.toggle("active", mode === "sim");
    btnChartTv?.classList.toggle("active", mode === "tv");
    btnChartMt?.classList.toggle("active", mode === "mt");

    // Hide all containers
    if (simCanvasContainer) simCanvasContainer.style.display = "none";
    if (simTvContainer) simTvContainer.style.display = "none";
    if (simMtContainer) simMtContainer.style.display = "none";

    if (mode === "tv" || mode === "mt") {
      // Show info card explaining real charting
      if (realChartInfoCard) realChartInfoCard.style.display = "block";
      
      // Dim and disable the simulated balance and order placing controls
      if (simBalanceCard) {
        simBalanceCard.style.opacity = "0.35";
        simBalanceCard.style.pointerEvents = "none";
      }
      if (simOrderCard) {
        simOrderCard.style.opacity = "0.35";
        simOrderCard.style.pointerEvents = "none";
      }

      // Dim speed controls and filters
      if (simChartControls) {
        simChartControls.style.opacity = "0.3";
        simChartControls.style.pointerEvents = "none";
      }

      if (mode === "tv") {
        if (simTvContainer) simTvContainer.style.display = "block";
        loadTradingViewScriptAndWidget(activeAsset);
      } else {
        if (simMtContainer) simMtContainer.style.display = "block";
        // Lazy load MT4 WebTerminal on demand
        if (mt5Iframe && !mt5Iframe.src) {
          mt5Iframe.src = "https://web.metatrader.app/terminal?theme=dark&startup_version=4&lang=es";
        }
      }
    } else {
      // Simulador Pro Mode
      if (simCanvasContainer) simCanvasContainer.style.display = "block";
      
      // Hide real chart warning card
      if (realChartInfoCard) realChartInfoCard.style.display = "none";

      // Re-enable and restore full opacities for simulated order panel
      if (simBalanceCard) {
        simBalanceCard.style.opacity = "1";
        simBalanceCard.style.pointerEvents = "auto";
      }
      if (simOrderCard) {
        simOrderCard.style.opacity = "1";
        simOrderCard.style.pointerEvents = "auto";
      }

      if (simChartControls) {
        simChartControls.style.opacity = "1";
        simChartControls.style.pointerEvents = "auto";
      }
      
      setTimeout(resizeCanvases, 80);
    }
  };

  if (btnChartSim) btnChartSim.addEventListener("click", () => switchViewMode("sim"));
  if (btnChartTv) btnChartTv.addEventListener("click", () => switchViewMode("tv"));
  if (btnChartMt) btnChartMt.addEventListener("click", () => switchViewMode("mt"));

  // Toggle Chart Height/Size Listener
  const btnToggleSize = document.getElementById("btn-toggle-size");
  if (btnToggleSize) {
    btnToggleSize.addEventListener("click", () => {
      const isLarge = simCanvasContainer.classList.toggle("large-chart");
      if (simTvContainer) simTvContainer.classList.toggle("large-chart");
      if (simMtContainer) simMtContainer.classList.toggle("large-chart");
      
      const chartCanvas = document.getElementById("chartCanvas");
      
      if (isLarge) {
        simCanvasContainer.style.minHeight = "750px";
        if (chartCanvas) chartCanvas.style.height = "750px";
        if (simTvContainer) {
          simTvContainer.style.height = "750px";
          simTvContainer.style.minHeight = "750px";
          simTvContainer.style.maxHeight = "1200px";
        }
        if (simMtContainer) {
          simMtContainer.style.height = "750px";
          simMtContainer.style.minHeight = "750px";
          simMtContainer.style.maxHeight = "1200px";
        }
        btnToggleSize.innerHTML = `<i data-lucide="minimize-2" style="width: 14px; height: 14px; color: #cbd5e1;"></i> <span>Reducir</span>`;
      } else {
        simCanvasContainer.style.minHeight = "500px";
        if (chartCanvas) chartCanvas.style.height = "500px";
        if (simTvContainer) {
          simTvContainer.style.height = "500px";
          simTvContainer.style.minHeight = "480px";
          simTvContainer.style.maxHeight = "800px";
        }
        if (simMtContainer) {
          simMtContainer.style.height = "500px";
          simMtContainer.style.minHeight = "480px";
          simMtContainer.style.maxHeight = "800px";
        }
        btnToggleSize.innerHTML = `<i data-lucide="maximize-2" style="width: 14px; height: 14px; color: #cbd5e1;"></i> <span>Agrandar</span>`;
      }
      
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
      
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 50);
    });
  }

  // Responsive canvases
  window.addEventListener("resize", resizeCanvases);
  setTimeout(resizeCanvases, 200); // Give browser rendering a small window
});
