/**
 * Capital Invisible - Interactive Logic & Cinematic Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if logo transparent exists or adjust styles
  console.log("Capital Invisible Landing Page Loaded.");
});

/**
 * Handle subscription form submission with a high-end cinematic transition
 * @param {Event} event - Form submit event
 */
function handleSubscription(event) {
  event.preventDefault();

  const form = document.getElementById('lead-form');
  const emailInput = document.getElementById('user-email');
  const submitBtn = document.getElementById('btn-submit-lead');
  const successState = document.getElementById('success-state');
  const systemSection = document.getElementById('system-section');

  // 1. Guard check
  if (!emailInput.value) return;
  const email = emailInput.value;

  // 2. Button Loading State
  submitBtn.disabled = true;
  submitBtn.innerHTML = "PROCESANDO ACCESO...";
  submitBtn.style.letterSpacing = "0.3em";
  submitBtn.style.opacity = "0.7";

  // Function to show success UI and persist local subscriber state
  const showSuccessUI = () => {
    form.style.transition = "opacity 0.4s ease";
    form.style.opacity = "0";
    
    setTimeout(() => {
      form.style.display = "none";
      
      // Reveal success state containing the download link
      successState.style.display = "flex";
      
      // Illuminate and Reveal the complete System (Phase 2 Conversion)
      systemSection.classList.remove('initially-hidden');
      systemSection.classList.add('revealed');
      
      // Smooth Scroll to the Upsell / Product card after a short moment
      setTimeout(() => {
        systemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add a gentle pulse animation to the main conversion button to draw attention
        const buyBtn = document.getElementById('payhip-buy-btn');
        if (buyBtn) {
          buyBtn.style.transform = "scale(1.02)";
          buyBtn.style.boxShadow = "0 0 30px rgba(191, 149, 63, 0.6)";
          
          setTimeout(() => {
            buyBtn.style.transform = "";
            buyBtn.style.boxShadow = "";
          }, 800);
        }
      }, 900);
      
    }, 400);

    // Save subscriber email in localStorage
    try {
      localStorage.setItem('capital_invisible_subscriber', email);
    } catch (e) {
      console.warn("Storage not available:", e);
    }
  };

  // Submit email to Formspree
  fetch('https://formspree.io/f/mbdpqqpv', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      action: 'Descarga Capítulo 1 (Página Libro)',
      _subject: `Nuevo Lead Capital Invisible: ${email}`
    })
  })
  .then(() => {
    showSuccessUI();
  })
  .catch((error) => {
    console.error('Error registering lead on Formspree:', error);
    // Fallback: grant access anyway
    showSuccessUI();
  });
}

/**
 * TECHNICAL INTEGRATION NOTES FOR PAYHIP:
 * 
 * If you want to use the native Payhip Newsletter subscription popup/iframe, you can do so in two ways:
 * 
 * Option A (RECOMMENDED): Keep this exact code and design, and connect the form to an automation tool (like Zapier, Make, 
 * or a simple webhook) or direct subscription endpoint.
 * 
 * Option B: Paste the Payhip subscription iframe code directly inside the <div class="form-container"> block of index.html.
 * In your Payhip Settings (under Marketing > Newsletter > Post-signup message), configure the redirect or text:
 * "Descarga tu Ebook gratuito aquí: [Enlace a tu PDF en GitHub]"
 * 
 * Below that message in Payhip, you can insert a link that redirects back to this page with a query parameter (e.g. ?subscribed=true)
 * or write a script to auto-scroll to the product section if they return.
 * 
 * Example helper code to check if they returned after subscribing:
 */
window.addEventListener('load', () => {
  const forceUnlock = localStorage.getItem('admin_unlock_capital_invisible') === 'true';
  const subscriberEmail = localStorage.getItem('capital_invisible_subscriber');
  
  if (forceUnlock || (subscriberEmail && subscriberEmail.trim() !== '')) {
    const form = document.getElementById('lead-form');
    const successState = document.getElementById('success-state');
    const systemSection = document.getElementById('system-section');
    
    if (form && successState && systemSection) {
      form.style.display = "none";
      successState.style.display = "flex";
      systemSection.classList.remove('initially-hidden');
      systemSection.classList.add('revealed');
    }
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('subscribed') === 'true') {
      const form = document.getElementById('lead-form');
      const successState = document.getElementById('success-state');
      const systemSection = document.getElementById('system-section');
      
      if (form && successState && systemSection) {
        form.style.display = "none";
        successState.style.display = "flex";
        systemSection.classList.remove('initially-hidden');
        systemSection.classList.add('revealed');
        
        setTimeout(() => {
          systemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
      }
    }
  }
});
