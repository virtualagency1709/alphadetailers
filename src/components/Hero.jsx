import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const shouldReduceMotion = useReducedMotion();

  // Subtle staggered reveal with prefers-reduced-motion fallback
  const fadeUp = (delay = 0, yOffset = 16) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: yOffset },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  const imageReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: {
          duration: 0.65,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        },
      };

  return (
    <section className="hero-section" id="hero" aria-label="Alpha Detailers Automotive Studio Showroom">
      {/* Subtle Ambient Studio Glow */}
      <div className="hero-glow-bg" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column — 48% Width: Content & Service Details */}
        <div className="hero-content">
          
          {/* Eyebrow Badge: Google 5.0 Rating */}
          <motion.div
            className="hero-rating-pill"
            {...fadeUp(0.05, 10)}
          >
            <div className="hero-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="star-icon">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="hero-rating-text">5.0 Rated Automotive Detailing Studio • Delhi</span>
          </motion.div>

          {/* Bold Main Headline */}
          <motion.h1
            className="hero-title"
            {...fadeUp(0.12, 16)}
          >
            UNRIVALLED MIRROR GLOSS.<br />
            <span className="hero-title-accent">ULTIMATE ARMOR.</span>
          </motion.h1>

          {/* Short, Professional Service Description */}
          <motion.p
            className="hero-desc"
            {...fadeUp(0.2, 16)}
          >
            Give your vehicle a showroom-worthy finish with premium Paint Protection Film (PPF), multi-stage paint correction, and advanced ceramic coating — delivered in a professional detailing environment in Delhi.
          </motion.p>

          {/* CTA Buttons: Primary, Secondary, Third (WhatsApp) */}
          <motion.div
            className="hero-cta-group"
            {...fadeUp(0.28, 14)}
          >
            {/* Primary CTA: Red */}
            <motion.button
              type="button"
              className="btn btn-primary hero-btn hero-btn-red open-booking-modal"
              id="hero-cta-primary"
              onClick={() => onOpenBooking()}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              aria-label="Book Studio Slot at Alpha Detailers"
            >
              <span>Book Studio Slot</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Secondary CTA: Dark Outlined */}
            <motion.a
              href="#services"
              className="btn btn-secondary hero-btn hero-btn-dark"
              id="hero-cta-secondary"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              aria-label="Explore Detailing Services"
            >
              <span>Explore Services</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>

            {/* Third CTA: WhatsApp Green */}
            <motion.a
              href="https://wa.me/918851221573?text=Hi%20Alpha%20Detailers%2C%20I%20want%20to%20consult%20regarding%20Ceramic%2FPPF%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn hero-btn-whatsapp"
              id="hero-cta-whatsapp"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              aria-label="WhatsApp Alpha Detailers Studio"
            >
              <svg className="btn-icon-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.202.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.136-.134.301-.35.452-.525.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.3-1.055 1.03-1.055 2.513 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.151 4.551.72.311 1.282.497 1.72.637.724.23 1.382.198 1.903.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22l5.08-1.33c1.47.8 3.13 1.23 4.96 1.23 5.53 0 10.04-4.51 10.04-10.04S17.57 2 12.04 2z" />
              </svg>
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Horizontal Service Highlights Strip */}
          <motion.div
            className="hero-services-strip"
            {...fadeUp(0.36, 12)}
          >
            {/* Service 1: PPF */}
            <div className="hero-service-card">
              <div className="hero-service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="hero-service-meta">
                <h2 className="hero-service-name">Paint Protection Film (PPF)</h2>
                <p className="hero-service-tag">Paint protection & scratch resistance</p>
              </div>
            </div>

            {/* Service 2: Paint Correction */}
            <div className="hero-service-card">
              <div className="hero-service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                </svg>
              </div>
              <div className="hero-service-meta">
                <h2 className="hero-service-name">Paint Correction</h2>
                <p className="hero-service-tag">Swirl & imperfection elimination</p>
              </div>
            </div>

            {/* Service 3: 10H Ceramic Coating */}
            <div className="hero-service-card">
              <div className="hero-service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                </svg>
              </div>
              <div className="hero-service-meta">
                <h2 className="hero-service-name">10H Ceramic Coating</h2>
                <p className="hero-service-tag">Mirror gloss & hydrophobic armor</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column — 52% Width: Automotive Showroom Showcase */}
        <motion.div
          className="hero-visual-col"
          {...imageReveal}
        >
          <div className="hero-showroom-frame">
            <img
              src="/assets/images/studio-luxury-car.jpg"
              alt="Luxury sports car with mirror ceramic finish inside Alpha Detailers modern Delhi detailing studio"
              className="hero-showroom-img"
              width="1280"
              height="720"
              fetchPriority="high"
              loading="eager"
            />

            {/* Subtle Gradient Vignette */}
            <div className="hero-showroom-vignette" aria-hidden="true" />

            {/* Maximum 2 Small Trust/Protection Overlay Badges */}
            <div className="hero-overlay-badge badge-top-right">
              <div className="overlay-icon-dot" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="overlay-badge-text">
                <span className="overlay-badge-title">Self-Healing TPU Film</span>
                <span className="overlay-badge-sub">Optical Clarity • Heat Activated</span>
              </div>
            </div>

            <div className="hero-overlay-badge badge-bottom-left">
              <div className="overlay-icon-dot dot-red" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                </svg>
              </div>
              <div className="overlay-badge-text">
                <span className="overlay-badge-title">10H Ceramic Hydrophobic</span>
                <span className="overlay-badge-sub">99.8% Water & Swirl Repellent</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
