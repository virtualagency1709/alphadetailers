import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const shouldReduceMotion = useReducedMotion();

  // Gentle reveal animation with prefers-reduced-motion fallback
  const fadeInSlide = (delay = 0, yOffset = 18) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: yOffset },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  const imageReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.97, y: 14 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: {
          duration: 0.7,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        },
      };

  return (
    <section className="hero-section" id="hero" aria-label="Alpha Detailers Automotive Studio Hero">
      {/* Cinematic Studio Glow & Vignette */}
      <div className="hero-glow-bg" aria-hidden="true" />
      <div className="hero-radial-vignette" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column: Studio Content & Conversion Focus */}
        <div className="hero-content">
          
          {/* Eyebrow Label */}
          <motion.div
            className="hero-eyebrow"
            {...fadeInSlide(0.05, 12)}
          >
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span className="hero-eyebrow-text">PREMIUM AUTOMOTIVE DETAILING • DELHI</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="hero-title"
            {...fadeInSlide(0.15, 20)}
          >
            Protect the Paint.{' '}
            <br className="hero-title-break" />
            <span className="hero-title-accent">Elevate the Drive.</span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            className="hero-desc"
            {...fadeInSlide(0.25, 18)}
          >
            Premium ceramic coating, paint protection film, and expert detailing engineered to keep your car looking exceptional.
          </motion.p>

          {/* Primary & Secondary Call To Actions */}
          <motion.div
            className="hero-cta-group"
            {...fadeInSlide(0.35, 16)}
          >
            <motion.button
              type="button"
              className="btn btn-primary hero-btn-primary open-booking-modal"
              id="hero-cta-primary"
              onClick={() => onOpenBooking()}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              aria-label="Book Your Studio Slot at Alpha Detailers"
            >
              <span>Book Your Studio Slot</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.a
              href="#services"
              className="btn btn-secondary hero-btn-secondary"
              id="hero-cta-secondary"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              aria-label="Explore Our Services"
            >
              <span>Explore Our Services</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Factually Accurate Trust Indicators */}
          <motion.div
            className="hero-trust-bar"
            {...fadeInSlide(0.45, 14)}
          >
            <div className="hero-trust-item">
              <span className="hero-trust-check" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="hero-trust-label">Premium Car Care</span>
            </div>

            <span className="hero-trust-separator" aria-hidden="true" />

            <div className="hero-trust-item">
              <span className="hero-trust-check" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="hero-trust-label">Expert Detailing</span>
            </div>

            <span className="hero-trust-separator" aria-hidden="true" />

            <div className="hero-trust-item">
              <span className="hero-trust-check" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="hero-trust-label">Delhi Studio</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Cinematic Automotive Studio Visual */}
        <motion.div
          className="hero-visual-wrapper"
          {...imageReveal}
        >
          <div className="hero-visual-frame">
            <img
              src="/assets/images/studio-luxury-car.jpg"
              alt="Ultra-luxury sports car inside Alpha Detailers Delhi modern detailing studio under hexagonal LED illumination"
              className="hero-car-image"
              width="1280"
              height="720"
              fetchPriority="high"
              loading="eager"
            />

            {/* Subtle Studio Lighting Vignette */}
            <div className="hero-image-vignette" aria-hidden="true" />

            {/* Restrained Studio Bay Indicator */}
            <div className="hero-studio-status-pill">
              <span className="status-indicator-dot" aria-hidden="true" />
              <span className="status-text">CLIMATE BAY • DELHI STUDIO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
