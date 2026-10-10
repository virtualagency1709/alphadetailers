/**
 * ALPHA DETAILERS - AUTOMOTIVE DETAILING STUDIO
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initBeforeAfterSlider();
  initCostEstimator();
  initBookingModal();
  initFaqAccordion();
  initMobileNav();
  initHeaderScroll();
  initSmoothScroll();
});

/* ===================================================================
   1. PARTICLES CANVAS (Subtle Crimson Embers Drifting Upward)
   =================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(width / 22), 55);
  const particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 0.7 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = Math.random() * 0.003 + 0.001;
      this.color = Math.random() > 0.3 ? '229, 9, 20' : '255, 60, 80';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeSpeed;

      if (this.y < -10 || this.opacity <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(229, 9, 20, 0.7)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================================================================
   2. INTERACTIVE BEFORE & AFTER COMPARISON SLIDER
   =================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.ba-slider-container');
  const afterWrap = document.querySelector('.ba-image-after');
  const handle = document.querySelector('.ba-handle');

  if (!container || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let posX = clientX - rect.left;

    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;

    afterWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events (Mobile)
  container.addEventListener(
    'touchstart',
    (e) => {
      isDragging = true;
      if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
    },
    { passive: true }
  );

  window.addEventListener(
    'touchmove',
    (e) => {
      if (!isDragging) return;
      if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
    },
    { passive: true }
  );

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ===================================================================
   3. VEHICLE SIZE & DETAILING PACKAGE ESTIMATOR
   =================================================================== */
function initCostEstimator() {
  const carButtons = document.querySelectorAll('.car-type-btn');
  const pkgButtons = document.querySelectorAll('.pkg-type-btn');
  const priceDisplay = document.getElementById('calc-price-display');
  const durationDisplay = document.getElementById('calc-duration-display');
  const warrantyDisplay = document.getElementById('calc-warranty-display');
  const whatsappQuoteBtn = document.getElementById('calc-whatsapp-btn');

  if (!carButtons.length || !pkgButtons.length) return;

  // Pricing Matrix (Approximate studio benchmark in Delhi INR)
  const pricingData = {
    hatchback: {
      ceramic: { price: '₹14,999 - ₹18,999', time: '24 Hours', warranty: '3 Years' },
      graphene: { price: '₹22,999 - ₹26,999', time: '24-36 Hours', warranty: '5 Years' },
      ppf: { price: '₹65,000 - ₹85,000', time: '2-3 Days', warranty: '5-7 Years' }
    },
    sedan: {
      ceramic: { price: '₹18,999 - ₹22,999', time: '24-36 Hours', warranty: '3 Years' },
      graphene: { price: '₹26,999 - ₹31,999', time: '36 Hours', warranty: '5 Years' },
      ppf: { price: '₹75,000 - ₹95,000', time: '3-4 Days', warranty: '5-7 Years' }
    },
    luxury: {
      ceramic: { price: '₹24,999 - ₹29,999', time: '36-48 Hours', warranty: '3-5 Years' },
      graphene: { price: '₹34,999 - ₹42,999', time: '48 Hours', warranty: '5-7 Years' },
      ppf: { price: '₹95,000 - ₹1,35,000', time: '4-5 Days', warranty: '7-10 Years' }
    },
    suv: {
      ceramic: { price: '₹28,999 - ₹34,999', time: '48 Hours', warranty: '3-5 Years' },
      graphene: { price: '₹39,999 - ₹48,999', time: '48 Hours', warranty: '5-7 Years' },
      ppf: { price: '₹1,20,000 - ₹1,65,000', time: '4-5 Days', warranty: '7-10 Years' }
    }
  };

  let selectedCar = 'luxury';
  let selectedPkg = 'ceramic';

  function recalculate() {
    const data = pricingData[selectedCar]?.[selectedPkg];
    if (!data) return;

    if (priceDisplay) priceDisplay.textContent = data.price;
    if (durationDisplay) durationDisplay.textContent = data.time;
    if (warrantyDisplay) warrantyDisplay.textContent = data.warranty;

    // Build pre-filled WhatsApp link
    if (whatsappQuoteBtn) {
      const carName = getCarName(selectedCar);
      const pkgName = getPkgName(selectedPkg);
      const message = `Hi Alpha Detailers Delhi! I used your online estimator for my vehicle:
• Category: ${carName}
• Desired Service: ${pkgName}
• Estimated Quote: ${data.price} (${data.warranty} Warranty)

I would like to book a studio slot or free paint inspection. Please share availability.`;

      const encoded = encodeURIComponent(message);
      // Business WhatsApp number
      whatsappQuoteBtn.href = `https://wa.me/918851221573?text=${encoded}`;
    }
  }

  function getCarName(key) {
    switch (key) {
      case 'hatchback': return 'Hatchback / Premium Compact';
      case 'sedan': return 'Executive Sedan';
      case 'luxury': return 'Luxury German / Sports Car';
      case 'suv': return 'Full-Size SUV / Supercar';
      default: return key;
    }
  }

  function getPkgName(key) {
    switch (key) {
      case 'ceramic': return '10H Diamond Ceramic Coating';
      case 'graphene': return 'Advanced Graphene Matrix Shield';
      case 'ppf': return 'Self-Healing TPU Paint Protection Film (PPF)';
      default: return key;
    }
  }

  carButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      carButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCar = btn.getAttribute('data-car');
      recalculate();
    });
  });

  pkgButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      pkgButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPkg = btn.getAttribute('data-pkg');
      recalculate();
    });
  });

  // Initial calculation
  recalculate();
}

/* ===================================================================
   4. BOOKING MODAL & DIRECT WHATSAPP DISPATCH
   =================================================================== */
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const openButtons = document.querySelectorAll('.open-booking-modal');
  const closeButton = document.querySelector('.modal-close-btn');
  const bookingForm = document.getElementById('booking-form');

  if (!modal) return;

  function openModal(preselectedService = '') {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (preselectedService && bookingForm) {
      const serviceSelect = bookingForm.querySelector('#modal-service');
      if (serviceSelect) {
        serviceSelect.value = preselectedService;
      }
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission -> WhatsApp
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name')?.value || '';
      const phone = document.getElementById('modal-phone')?.value || '';
      const car = document.getElementById('modal-car')?.value || '';
      const service = document.getElementById('modal-service')?.value || '';
      const date = document.getElementById('modal-date')?.value || '';
      const notes = document.getElementById('modal-notes')?.value || '';

      const message = `Hello Alpha Detailers Studio Delhi! I would like to book a service slot:
• Client Name: ${name}
• Contact: ${phone}
• Vehicle Model: ${car}
• Selected Service: ${service}
• Preferred Date: ${date}
${notes ? `• Special Notes: ${notes}` : ''}

Please confirm slot availability at your Gamri Village / 5th Pustha Rd studio.`;

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/918851221573?text=${encoded}`, '_blank');
      closeModal();
    });
  }
}

/* ===================================================================
   5. FAQ ACCORDION
   =================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

/* ===================================================================
   6. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  links.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ===================================================================
   7. HEADER SCROLL & ACTIVE LINK HIGHLIGHT
   =================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   8. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
