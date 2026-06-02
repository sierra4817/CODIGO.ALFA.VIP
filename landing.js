/**
 * Ecosistema AS - Landing Page JS Controller
 * Albert Sierra - High Conversion Web Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Initialize Real-Time Total Counter & Withdrawals Ticker
  initWithdrawalsWidget();

  // 2. Initialize 3D Testimonials Carousel
  initTestimonialsCarousel();

  // 3. Smooth scrolling for nav links
  initSmoothScroll();
});

/**
 * Manages the live cumulative withdrawal counter and vertical notification feed
 */
function initWithdrawalsWidget() {
  const counterEl = document.getElementById('live-total-counter');
  const feedEl = document.getElementById('withdrawals-feed');
  const statsTodayEl = document.getElementById('stats-today');
  const statsActiveEl = document.getElementById('stats-active');
  
  if (!counterEl || !feedEl) return;

  // Initial values
  let currentTotal = parseFloat(localStorage.getItem('as_ecosystem_total_withdrawals')) || 5420150;
  let todayCount = parseInt(statsTodayEl ? statsTodayEl.textContent : 142) || 142;
  let activeCount = parseInt(statsActiveEl ? statsActiveEl.textContent : 450) || 450;
  
  // Format currency helper
  const formatCurrency = (val) => {
    return '$' + Math.floor(val).toLocaleString('en-US') + ' USD';
  };

  // Set initial counter value
  counterEl.textContent = formatCurrency(currentTotal);

  // Student details pool for random feed generation
  const students = [
    { name: 'Mateo Ramos', country: 'co Colombia', min: 2500, max: 15000 },
    { name: 'Sofía Méndez', country: 'es España', min: 5000, max: 28000 },
    { name: 'Lucas González', country: 'ar Argentina', min: 1200, max: 8500 },
    { name: 'Valentina Silva', country: 'cl Chile', min: 3000, max: 18000 },
    { name: 'Javier Herrera', country: 'mx México', min: 4000, max: 22000 },
    { name: 'Isabella Duarte', country: 'pe Perú', min: 1800, max: 11000 },
    { name: 'Nicolás Castro', country: 'uy Uruguay', min: 6000, max: 35000 },
    { name: 'Camila Rojas', country: 'co Colombia', min: 3200, max: 16500 },
    { name: 'Gabriel Soto', country: 'es España', min: 7500, max: 45000 },
    { name: 'Elena Ortiz', country: 'mx México', min: 2200, max: 13000 },
    { name: 'Diego Benítez', country: 'cl Chile', min: 2900, max: 14500 },
    { name: 'Mariana Vega', country: 'cr Costa Rica', min: 5000, max: 20000 }
  ];

  // Helper to get random item from pool
  const getRandomStudent = () => {
    const student = students[Math.floor(Math.random() * students.length)];
    const amount = Math.floor(Math.random() * (student.max - student.min) + student.min);
    return {
      name: student.name,
      country: student.country,
      amount: amount,
      time: Math.floor(Math.random() * 5 + 1) // 1 to 5 minutes ago
    };
  };

  // Add notification to DOM and animate
  const addNotification = (data, isInitial = false) => {
    const card = document.createElement('div');
    card.className = 'withdrawal-card slide-in';
    
    // Clean flag emoji prefix from country string
    const countryParts = data.country.split(' ');
    const flagCode = countryParts[0];
    const countryName = countryParts.slice(1).join(' ');

    card.innerHTML = `
      <div class="withdrawal-info">
        <span class="withdrawal-student">${data.name} (${countryName})</span>
        <span class="withdrawal-status">Retiro Confirmado</span>
      </div>
      <div class="withdrawal-meta">
        <span class="withdrawal-amount">+$${data.amount.toLocaleString('en-US')} USD</span>
        <span class="withdrawal-time">Hace ${data.time} min${data.time > 1 ? 's' : ''}</span>
      </div>
    `;

    // Add to top of list
    feedEl.insertBefore(card, feedEl.firstChild);

    // Keep max 4 cards in viewport
    while (feedEl.children.length > 4) {
      feedEl.removeChild(feedEl.lastChild);
    }

    // Increment metrics (only if it's a dynamic real-time update, not initial population)
    if (!isInitial) {
      animateCounter(currentTotal, currentTotal + data.amount, 1500);
      currentTotal += data.amount;
      localStorage.setItem('as_ecosystem_total_withdrawals', currentTotal.toString());
      
      // Slightly increment other stats
      todayCount += 1;
      if (statsTodayEl) {
        statsTodayEl.textContent = todayCount;
        statsTodayEl.style.transform = 'scale(1.2)';
        setTimeout(() => statsTodayEl.style.transform = 'scale(1)', 300);
      }
      
      if (Math.random() > 0.7) {
        activeCount += Math.floor(Math.random() * 2) + 1;
        if (statsActiveEl) statsActiveEl.textContent = activeCount;
      }
    }
  };

  // Smooth counter animation
  const animateCounter = (start, end, duration) => {
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easeProgress;
      
      counterEl.textContent = formatCurrency(currentVal);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counterEl.textContent = formatCurrency(end);
      }
    };
    
    requestAnimationFrame(update);
  };

  // Populate initially
  for (let i = 0; i < 3; i++) {
    addNotification(getRandomStudent(), true);
  }

  // Set Interval for real-time withdrawals (every 5-8 seconds)
  const runFeedScheduler = () => {
    const nextInterval = Math.random() * 3000 + 5000; // 5s to 8s
    setTimeout(() => {
      addNotification(getRandomStudent());
      runFeedScheduler();
    }, nextInterval);
  };
  
  runFeedScheduler();
}

/**
 * Manages the 3D Testimonials Carousel logic
 */
function initTestimonialsCarousel() {
  const track = document.getElementById('testimonial-carousel-track');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  
  if (!track) return;
  
  const cards = Array.from(track.children);
  if (cards.length === 0) return;

  // Active index starts in the middle
  let currentIndex = Math.floor(cards.length / 2);

  const updateCarousel = () => {
    const total = cards.length;
    
    cards.forEach((card, index) => {
      // Calculate wrapped offset (shortest distance in circle)
      let offset = index - currentIndex;
      
      if (offset < -Math.floor(total / 2)) {
        offset += total;
      } else if (offset > Math.floor(total / 2)) {
        offset -= total;
      }
      
      // Remove previous position classes
      card.classList.remove('active', 'prev', 'next', 'hidden-slide');
      
      // Assign positional class
      if (offset === 0) {
        card.classList.add('active');
        card.onclick = null;
      } else if (offset === -1) {
        card.classList.add('prev');
        card.onclick = () => { currentIndex = index; updateCarousel(); };
      } else if (offset === 1) {
        card.classList.add('next');
        card.onclick = () => { currentIndex = index; updateCarousel(); };
      } else {
        card.classList.add('hidden-slide');
        card.onclick = null;
      }
    });
  };

  // Nav actions
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    });
  }

  // Keyboard navigation when focusing track area
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }
  });

  // Drag/Swipe Support for touchscreens
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 70) {
      if (diff > 0) {
        // swipe left -> next
        currentIndex = (currentIndex + 1) % cards.length;
      } else {
        // swipe right -> prev
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      }
      updateCarousel();
      isDragging = false;
    }
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isDragging = false;
  }, { passive: true });

  // Initial call
  updateCarousel();
}

/**
 * Video Modal control handlers (accessible globally)
 */
window.openVideoModal = function(videoId) {
  const modal = document.getElementById('video-overlay-modal');
  const iframe = document.getElementById('modal-youtube-iframe');
  
  if (!modal || !iframe) return;
  
  // Load autoplaying embed safely
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-overlay-modal');
  const iframe = document.getElementById('modal-youtube-iframe');
  
  if (!modal || !iframe) return;
  
  // Unload source to stop playback immediately
  iframe.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = ''; // restore scrolling
};

/**
 * Soft scroll handler for page navigation links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        
        // Offset slightly to account for fixed navbar header
        const navbarHeight = document.getElementById('nav-header')?.offsetHeight || 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Unified Lead Capture Modal Funnel Logic
 */
window.activeLeadAction = null;

window.openLeadModal = function(action) {
  // Check if subscriber email is already saved
  const savedEmail = localStorage.getItem('capital_invisible_subscriber');
  if (savedEmail) {
    // Skip modal and go straight to success
    window.handleLeadSuccess(action);
    return;
  }

  window.activeLeadAction = action;
  const modal = document.getElementById('lead-capture-modal');
  const modalContent = modal.querySelector('.lead-modal-content');
  const titleEl = document.getElementById('lead-modal-title');
  const descEl = document.getElementById('lead-modal-desc');
  const submitBtn = document.getElementById('btn-submit-lead-funnel');
  const form = document.getElementById('lead-capture-form');
  const emailInput = document.getElementById('lead-email');

  // Reset form and button
  form.reset();
  submitBtn.disabled = false;
  submitBtn.style.opacity = "";
  submitBtn.querySelector('span').textContent = "Desbloquear Acceso Instantáneo";
  
  // Safely reset icon to prevent crash if replaced by Lucide SVG
  const icon = submitBtn.querySelector('i') || submitBtn.querySelector('svg');
  if (icon) {
    icon.setAttribute('data-lucide', 'unlock');
  }

  // Customize layout depending on action
  if (action === 'simulator') {
    modalContent.className = 'lead-modal-content glow-cyan';
    titleEl.textContent = 'Desbloquear Simulador Gratis';
    descEl.textContent = 'Introduce tu correo electrónico privado para acceder de inmediato al simulador interactivo de futuros Nasdaq y S&P 500.';
    submitBtn.querySelector('span').textContent = "Acceder al Simulador Gratis";
  } else if (action === 'chapter1') {
    modalContent.className = 'lead-modal-content glow-gold';
    titleEl.textContent = 'Descargar Capítulo 1 Gratis';
    descEl.textContent = 'Introduce tu correo electrónico privado para iniciar la descarga del Capítulo 1 del Manifiesto "Comprar, Pedir Prestado, Morir".';
    submitBtn.querySelector('span').textContent = "Descargar Capítulo 1 Gratis";
  }

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Re-run Lucide Icons to render icon inside modal
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

window.closeLeadModal = function() {
  const modal = document.getElementById('lead-capture-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.handleLeadSubmit = function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('lead-email');
  const submitBtn = document.getElementById('btn-submit-lead-funnel');
  
  if (!emailInput || !emailInput.value) return;
  const email = emailInput.value;

  // Set loading state on button
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.7";
  submitBtn.querySelector('span').textContent = "PROCESANDO ACCESO...";
  
  // Save email to LocalStorage (aligns with book landing page script)
  localStorage.setItem('capital_invisible_subscriber', email);

  // Submit email to Formspree
  fetch('https://formspree.io/f/mbdpqqpv', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      action: window.activeLeadAction === 'simulator' ? 'Simulador gratis (Home)' : 'Descarga Capítulo 1 (Home)',
      _subject: `Nuevo Lead Ecosistema AS: ${email}`
    })
  })
  .then(() => {
    window.closeLeadModal();
    window.handleLeadSuccess(window.activeLeadAction);
  })
  .catch((error) => {
    console.error('Error registering lead on Formspree:', error);
    // Fallback: grant access anyway to prevent user blocking
    window.closeLeadModal();
    window.handleLeadSuccess(window.activeLeadAction);
  });
};

window.handleLeadSuccess = function(action) {
  if (action === 'simulator') {
    // Redirect to simulator in the same tab (immune to browser popup blockers)
    window.location.href = 'vision-trading/template_leccion.html';
  } else if (action === 'chapter1') {
    // Trigger download of local PDF
    const link = document.createElement('a');
    link.href = 'capital-invisible/PRUEBA_LIBRO_FINAL_MAQUETADO.pdf';
    link.download = 'Capital_Invisible_Capitulo_1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

window.handleContactSubmit = function(event) {
  event.preventDefault();
  
  const form = document.getElementById('contact-form-el');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('btn-submit-contact');
  const successState = document.getElementById('contact-success-state');
  
  if (!form || !nameInput || !emailInput || !messageInput || !submitBtn || !successState) return;
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Set loading state on button
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.7";
  submitBtn.querySelector('span').textContent = "ENVIANDO MENSAJE...";
  
  // Submit contact message to Formspree
  fetch('https://formspree.io/f/mbdpqqpv', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      action: 'Mensaje de Contacto (Home)',
      _subject: `Nuevo Mensaje de Contacto: ${name}`
    })
  })
  .then(() => {
    // Hide form
    form.style.display = 'none';
    // Show success state
    successState.style.display = 'flex';
    
    // Re-run Lucide to render icon in success state
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  })
  .catch((error) => {
    console.error('Error submitting contact form:', error);
    // Fallback: show success anyway so user experience is smooth
    form.style.display = 'none';
    successState.style.display = 'flex';
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
};

