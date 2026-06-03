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

  // Initialize Admin Panel Switches
  initAdminPanel();

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
  const savedProgress = localStorage.getItem('vision_63day_progress') || localStorage.getItem('vision_7day_progress') || localStorage.getItem('vision_70day_progress') || localStorage.getItem('vision_30day_progress');
  let completedDaysCount = 0;
  const totalDays = 63;
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
  for (let i = 1; i <= 63; i++) {
    const response = localStorage.getItem(`vision_challenge_day${i}`) || localStorage.getItem(`vision_challenge_day_${i}`);
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
  const forceCapitalUnlock = localStorage.getItem('admin_unlock_capital_invisible') === 'true';
  const subscriberEmail = localStorage.getItem('capital_invisible_subscriber');
  const statManifesto = document.getElementById('stat-manifesto');
  const manifestoStatusBox = document.getElementById('manifesto-status-box');
  const statusText = document.getElementById('manifesto-status-text');

  if (forceCapitalUnlock || (subscriberEmail && subscriberEmail.trim() !== '')) {
    if (statManifesto) {
      statManifesto.textContent = forceCapitalUnlock ? 'Desbloqueado (Admin)' : 'Suscrito (Libre)';
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
      statusText.innerHTML = forceCapitalUnlock ? 
        `Acceso Desbloqueado <span style="font-size:0.7rem; opacity:0.6;">(Forzado por Admin)</span>` :
        `Acceso Desbloqueado <span style="font-size:0.7rem; opacity:0.6;">(${subscriberEmail})</span>`;
    }
  } else {
    if (statManifesto) {
      statManifesto.textContent = 'Bloqueado';
      statManifesto.style.color = '';
    }
    if (manifestoStatusBox) {
      manifestoStatusBox.classList.remove('unlocked-state');
      
      const lockIcon = manifestoStatusBox.querySelector('.lucide-lock');
      const unlockIcon = manifestoStatusBox.querySelector('.lucide-unlock');
      
      if (lockIcon) lockIcon.style.display = 'inline-block';
      if (unlockIcon) unlockIcon.style.display = 'none';
    }
    if (statusText) {
      statusText.textContent = 'Contenido Reservado (Requiere Correo)';
    }
  }

  // 5. Visibility Controls
  const hideMasterclass = localStorage.getItem('admin_hide_masterclass') === 'true';
  const hideVision = localStorage.getItem('admin_hide_vision_trading') === 'true';
  const hideCapital = localStorage.getItem('admin_hide_capital_invisible') === 'true';

  const masterclassPromo = document.getElementById('masterclass-promo-header');
  const cardVision = document.getElementById('card-vision-trading');
  const cardCapital = document.getElementById('card-capital-invisible');

  if (masterclassPromo) masterclassPromo.style.display = hideMasterclass ? 'none' : 'block';
  if (cardVision) cardVision.style.display = hideVision ? 'none' : 'block';
  if (cardCapital) cardCapital.style.display = hideCapital ? 'none' : 'block';
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

/**
 * Initializes listeners and values for the admin switches
 */
function initAdminPanel() {
  const toggleMasterclass = document.getElementById('toggle-admin-masterclass');
  const toggleVision = document.getElementById('toggle-admin-vision');
  const toggleVisionUnlock = document.getElementById('toggle-admin-vision-unlock');
  const toggleCapital = document.getElementById('toggle-admin-capital');
  const toggleCapitalUnlock = document.getElementById('toggle-admin-capital-unlock');

  if (!toggleMasterclass) return; // If we aren't on the dashboard page with admin panel

  // 1. Load initial checkbox states from localStorage (default to checked for visibilities)
  toggleMasterclass.checked = localStorage.getItem('admin_hide_masterclass') !== 'true';
  toggleVision.checked = localStorage.getItem('admin_hide_vision_trading') !== 'true';
  toggleVisionUnlock.checked = localStorage.getItem('admin_unlock_course_globally') === 'true';
  toggleCapital.checked = localStorage.getItem('admin_hide_capital_invisible') !== 'true';
  toggleCapitalUnlock.checked = localStorage.getItem('admin_unlock_capital_invisible') === 'true';

  // 1.1 Load and attach event listeners for the 9 Pilares
  for (let i = 1; i <= 9; i++) {
    const togglePilar = document.getElementById('toggle-admin-pilar-' + i);
    if (togglePilar) {
      togglePilar.checked = localStorage.getItem('admin_pilar_' + i + '_active') !== 'false';
      togglePilar.addEventListener('change', function() {
        localStorage.setItem('admin_pilar_' + i + '_active', this.checked.toString());
        loadEcosystemStats();
      });
    }
  }

  // 2. Set up event listeners
  toggleMasterclass.addEventListener('change', function() {
    localStorage.setItem('admin_hide_masterclass', (!this.checked).toString());
    loadEcosystemStats();
  });

  toggleVision.addEventListener('change', function() {
    localStorage.setItem('admin_hide_vision_trading', (!this.checked).toString());
    loadEcosystemStats();
  });

  toggleVisionUnlock.addEventListener('change', function() {
    localStorage.setItem('admin_unlock_course_globally', this.checked.toString());
    loadEcosystemStats();
  });

  toggleCapital.addEventListener('change', function() {
    localStorage.setItem('admin_hide_capital_invisible', (!this.checked).toString());
    loadEcosystemStats();
  });

  toggleCapitalUnlock.addEventListener('change', function() {
    localStorage.setItem('admin_unlock_capital_invisible', this.checked.toString());
    loadEcosystemStats();
  });
}

/**
 * Admin Action: Reset progress, simulator balance and challenges from the dashboard
 */
function adminResetProgress() {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 63 días, bitácora y balance del simulador?")) {
    localStorage.removeItem("vision_63day_progress");
    localStorage.removeItem("vision_simulator_balance");
    localStorage.setItem("admin_unlock_course_globally", "false");
    
    // Uncheck toggle if it exists on page
    const toggleVisionUnlock = document.getElementById('toggle-admin-vision-unlock');
    if (toggleVisionUnlock) {
      toggleVisionUnlock.checked = false;
    }

    // Reset all pilar locks to active/unlocked
    for (let i = 1; i <= 9; i++) {
      localStorage.removeItem(`admin_pilar_${i}_active`);
      const togglePilar = document.getElementById('toggle-admin-pilar-' + i);
      if (togglePilar) {
        togglePilar.checked = true;
      }
    }
    
    for (let i = 1; i <= 63; i++) {
      localStorage.removeItem(`vision_challenge_day${i}`);
      localStorage.removeItem(`vision_challenge_day_${i}`);
    }
    
    alert("Todo tu progreso en el ecosistema ha sido reiniciado a los valores de fábrica.");
    loadEcosystemStats(); // Reload metrics in the dashboard
  }
}

/**
 * Admin Action: Reset subscription status of Capital Invisible
 */
function adminResetCapital() {
  if (confirm("¿Estás seguro de que deseas reiniciar el registro de suscriptor de Capital Invisible? Esto volverá a bloquear el acceso al Capítulo 1.")) {
    localStorage.removeItem("capital_invisible_subscriber");
    localStorage.setItem("admin_unlock_capital_invisible", "false");
    
    // Uncheck toggle if it exists on page
    const toggleCapitalUnlock = document.getElementById('toggle-admin-capital-unlock');
    if (toggleCapitalUnlock) {
      toggleCapitalUnlock.checked = false;
    }
    
    alert("El registro de suscriptor ha sido eliminado.");
    loadEcosystemStats();
  }
}
