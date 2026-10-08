import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          
          {/* Google 5.0 Rating Pill */}
          <div className="hero-rating-pill">
            <div className="hero-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="hero-rating-text">5.0 GOOGLE VERIFIED • DELHI STUDIO</span>
          </div>

          <h1 className="hero-title">
            UNRIVALED MIRROR GLOSS. <span className="text-gradient-red">ULTIMATE ARMOR.</span>
          </h1>

          <p className="hero-desc">
            Delhi's premier automotive aesthetic sanctuary. Safeguard your prized possession with <strong>Self-Healing TPU Paint Protection Film (PPF)</strong>, surgical <strong>Multi-Stage Paint Correction</strong>, and permanent <strong>10H Diamond Ceramic Coating</strong> inside our dust-free climate bay.
          </p>

          <div className="hero-cta-group">
            <button
              className="btn btn-primary open-booking-modal"
              id="hero-cta-primary"
              onClick={() => onOpenBooking()}
            >
              <span>Book Studio Slot</span>
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <a href="#estimator" className="btn btn-secondary" id="hero-cta-estimator">
              <span>Calculate Cost</span>
              <svg viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a
              href="https://wa.me/919696546862?text=Hi%20Alpha%20Detailers%2C%20I%20want%20to%20consult%20regarding%20Ceramic%2FPPF%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="hero-cta-whatsapp"
            >
              <svg viewBox="0 0 24 24" style={{ fill: '#fff' }}>
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.202.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.136-.134.301-.35.452-.525.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.3-1.055 1.03-1.055 2.513 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.151 4.551.72.311 1.282.497 1.72.637.724.23 1.382.198 1.903.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22l5.08-1.33c1.47.8 3.13 1.23 4.96 1.23 5.53 0 10.04-4.51 10.04-10.04S17.57 2 12.04 2z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Metrics Row */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-num">1,200<span>+</span></span>
              <span className="stat-label">Cars Perfected</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10<span>H</span></span>
              <span className="stat-label">Hardness Shield</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10<span>Yr</span></span>
              <span className="stat-label">PPF Warranty</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5.0<span>★</span></span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="hero-visual-card">
          <img
            src="/assets/images/hero-supercar.jpg"
            alt="Pagani Supercar in Alpha Detailers Studio under Hexagonal Lights"
            className="hero-car-img"
          />
          
          {/* Interactive Floating Badges */}
          <div className="floating-badge badge-top-right">
            <svg viewBox="0 0 24 24" style={{ fill: '#e50914' }}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <div className="floating-badge-text">
              <span className="floating-badge-title">10H Ceramic Hydrophobic</span>
              <span className="floating-badge-sub">99.8% Water & Swirl Repellent</span>
            </div>
          </div>

          <div className="floating-badge badge-bottom-left">
            <svg viewBox="0 0 24 24" style={{ fill: '#f59e0b' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="floating-badge-text">
              <span className="floating-badge-title">Delhi GMB Verified</span>
              <span className="floating-badge-sub">5.0 Star Rated Automotive Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
