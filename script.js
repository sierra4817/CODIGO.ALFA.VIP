/**
 * Ecosistema AS - Main Dashboard Controller
 * Albert Sierra - Cloud Ecosystem
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set greeting according to local time
  setDynamicGreeting();

  // Load metrics from subprojects (localStorage integration)
  loadEcosystemStats();

  // Initialize Quick Risk Calculator
  initQuickCalculator();
});

/**
 * Generates and sets a personalized greeting based on local time
 */
function setDynamicGreeting() {
  const greetingEl = document.getElementById('hero-greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greetingText = '';

  if (hour >= 6 && hour < 12) {
    greetingText = 'Buenos días, Albert';
  } else if (hour >= 12 && hour < 20) {
    greetingText = 'Buenas tardes, Albert';
  } else {
    greetingText = 'Buenas noches, Albert';
  }

  greetingEl.textContent = `${greetingText}.`;
}

/**
 * Reads local storage data populated by subprojects to show unified metrics
 */
function loadEcosystemStats() {
  // 1. Course progress (Visión Trading Pro)
  const savedProgress = localStorage.getItem('vision_70day_progress') || localStorage.getItem('vision_30day_progress');
  let completedDaysCount = 0;
  const totalDays = 70;
  let progressPct = 0;

  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      if (parsed && parsed.days) {
        Object.keys(parsed.days).forEach(key => {
          if (parsed.days[key].completed) {
            completedDaysCount++;
          }
        });
      }
    } catch (e) {
      console.error("Error reading course progress from localStorage:", e);
    }
  }

  progressPct = Math.round((completedDaysCount / totalDays) * 100);

  // Update UI Elements for Course progress
  const pctLabel = document.getElementById('course-pct-label');
  const pctBar = document.getElementById('course-pct-bar');
  const statCompleted = document.getElementById('stat-completed-days');

  if (pctLabel) pctLabel.textContent = `${progressPct}%`;
  if (pctBar) pctBar.style.width = `${progressPct}%`;
  if (statCompleted) statCompleted.textContent = `${completedDaysCount} / ${totalDays}`;

  // 2. Count challenges answered in Bitácora
  let challengesCount = 0;
  for (let i = 1; i <= 70; i++) {
    const response = localStorage.getItem(`vision_challenge_day${i}`);
    if (response && response.trim() !== '') {
      challengesCount++;
    }
  }
  const statChallenges = document.getElementById('stat-challenges');
  if (statChallenges) statChallenges.textContent = challengesCount.toString();

  // 3. Simulated Account Balance
  const savedBalance = localStorage.getItem('vision_simulator_balance');
  let balanceVal = 10000.00;
  if (savedBalance) {
    const parsed = parseFloat(savedBalance);
    if (!isNaN(parsed)) {
      balanceVal = parsed;
    }
  }
  const statBalance = document.getElementById('stat-balance');
  if (statBalance) {
    statBalance.textContent = `$${balanceVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // 4. Manifesto Subscription Status
  const subscriberEmail = localStorage.getItem('capital_invisible_subscriber');
  const statManifesto = document.getElementById('stat-manifesto');
  const manifestoStatusBox = document.getElementById('manifesto-status-box');
  const statusText = document.getElementById('manifesto-status-text');

  if (subscriberEmail && subscriberEmail.trim() !== '') {
    if (statManifesto) {
      statManifesto.textContent = 'Suscrito (Libre)';
      statManifesto.style.color = '#10b981';
    }
    if (manifestoStatusBox) {
      manifestoStatusBox.classList.add('unlocked-state');
      
      const lockIcon = manifestoStatusBox.querySelector('.lucide-lock');
      const unlockIcon = manifestoStatusBox.querySelector('.lucide-unlock');
      
      if (lockIcon) lockIcon.style.display = 'none';
      if (unlockIcon) unlockIcon.style.display = 'inline-block';
    }
    if (statusText) {
      statusText.innerHTML = `Acceso Desbloqueado <span style="font-size:0.7rem; opacity:0.6;">(${subscriberEmail})</span>`;
    }
  }
}

/**
 * Initializes listeners and calculation formula for the Quick Risk Calculator widget
 */
function initQuickCalculator() {
  const qcCapital = document.getElementById('qc-capital');
  const qcRisk = document.getElementById('qc-risk-pct');
  const qcAsset = document.getElementById('qc-asset');
  const qcSlPts = document.getElementById('qc-sl-pts');

  if (!qcCapital || !qcRisk || !qcAsset || !qcSlPts) return;

  const calculate = () => {
    const capital = parseFloat(qcCapital.value) || 0;
    const riskPct = parseFloat(qcRisk.value) || 0;
    const asset = qcAsset.value;
    const slPts = parseFloat(qcSlPts.value) || 0.25;

    // Risk amount in dollars
    const lossMoney = capital * (riskPct / 100);

    // Active specifications matching futures contract sizes
    const specs = {
      ES: 50,  // E-mini S&P 500
      MES: 5,  // Micro E-mini S&P 500
      NQ: 20,  // E-mini Nasdaq 100
      MNQ: 2   // Micro E-mini Nasdaq 100
    };

    const pointValue = specs[asset] || 50;

    // Calculation formula: Position Size = Loss / (Stop Loss Distance in points * Point Value)
    let contracts = 0;
    if (slPts > 0) {
      contracts = lossMoney / (slPts * pointValue);
    }

    // Update UI Results
    const resLoss = document.getElementById('qc-res-loss');
    const resContracts = document.getElementById('qc-res-contracts');

    if (resLoss) {
      resLoss.textContent = `$${lossMoney.toFixed(2)}`;
    }
    if (resContracts) {
      resContracts.textContent = `${contracts.toFixed(2)} Contratos`;
      // Highlighting warning color if decimal size is too small for mini
      if (contracts < 1.0 && (asset === 'ES' || asset === 'NQ')) {
        resContracts.innerHTML = `${contracts.toFixed(2)} <span style="font-size:0.65rem; color:#f59e0b; display:block; font-weight:normal;">(Considera Micro ${asset === 'ES' ? 'MES' : 'MNQ'})</span>`;
      }
    }
  };

  // Attach event listeners
  [qcCapital, qcRisk, qcAsset, qcSlPts].forEach(element => {
    element.addEventListener('input', calculate);
    element.addEventListener('change', calculate);
  });

  // Calculate immediately on load
  calculate();
}
