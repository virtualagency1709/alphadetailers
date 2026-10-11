import React, { useState, useRef, useEffect } from 'react';

// Curated authentic Instagram Reels from official account @alphadetailers21
export const INSTAGRAM_REELS = [
  {
    id: 'reel-viral-combo',
    shortcode: 'DeHhMzQS1-C',
    permalink: 'https://www.instagram.com/reel/DeHhMzQS1-C/',
    embedUrl: 'https://www.instagram.com/reel/DeHhMzQS1-C/embed/',
    title: 'Alpha Detailers Viral Combo ₹1299',
    service: 'Detailing & Deep Cleaning',
    serviceModalKey: 'Interior Steam & Leather Spa',
    views: '59.7K Views',
    badge: '🔥 Most Viral in Delhi',
    desc: 'High-pressure snow foam bath, steam degreasing, engine bay detailing & complete interior hygiene.',
    thumbnail: '/images/snow-foam-wash.jpg',
    duration: '0:45'
  },
  {
    id: 'reel-thar-ppf',
    shortcode: 'DeTu_73SU8v',
    permalink: 'https://www.instagram.com/reel/DeTu_73SU8v/',
    embedUrl: 'https://www.instagram.com/reel/DeTu_73SU8v/embed/',
    title: 'Self-Healing PPF on Mahindra Thar',
    service: 'Paint Protection Film (PPF)',
    serviceModalKey: 'Paint Protection Film (PPF)',
    views: '1.7K Views',
    badge: '🛡️ Unlimited Panel Replacement',
    desc: 'Thermoplastic polyurethane armor applied in surgical dust-free hex-bay with edge-wrapped seamless fit.',
    thumbnail: '/images/ppf-install.jpg',
    duration: '0:38'
  },
  {
    id: 'reel-anti-rust',
    shortcode: 'DeEPlSxRGcM',
    permalink: 'https://www.instagram.com/reel/DeEPlSxRGcM/',
    embedUrl: 'https://www.instagram.com/reel/DeEPlSxRGcM/embed/',
    title: 'Anti-Rust Coating & Underbody Armor',
    service: 'Underbody & Anti-Rust Armor',
    serviceModalKey: 'Hyper Foam Wash',
    views: '6.4K Views',
    badge: '⚡ Heavy Duty Protection',
    desc: 'Hydraulic hoist undercarriage inspection, rust neutralization, and thick rubberized anti-corrosion barrier.',
    thumbnail: '/images/studio-luxury-car.jpg',
    duration: '0:32'
  },
  {
    id: 'reel-bmw-ceramic',
    shortcode: 'DeBl5U8xcyZ',
    permalink: 'https://www.instagram.com/reel/DeBl5U8xcyZ/',
    embedUrl: 'https://www.instagram.com/reel/DeBl5U8xcyZ/embed/',
    title: 'BMW Luxury Ceramic & Detailing',
    service: '10H Ceramic Coating',
    serviceModalKey: '10H Ceramic Coating',
    views: '5.4K Views',
    badge: '✨ Ultra High Gloss',
    desc: 'Multi-stage machine compounding and 99.9% Si02 hydrophobic ceramic lamination on luxury German paintwork.',
    thumbnail: '/images/ceramic-coating.jpg',
    duration: '0:50'
  },
  {
    id: 'reel-paint-correction',
    shortcode: 'Dd6Jn-fyiH8',
    permalink: 'https://www.instagram.com/reel/Dd6Jn-fyiH8/',
    embedUrl: 'https://www.instagram.com/reel/Dd6Jn-fyiH8/embed/',
    title: 'Surgical Paint Correction Treatment',
    service: 'Paint Correction',
    serviceModalKey: 'Multi-Stage Paint Correction',
    views: 'Studio Showcase',
    badge: '💎 Swirl Elimination',
    desc: 'Eliminating 95%+ of rotary swirls, buffer trails and micro-marring under high-intensity inspection LEDs.',
    thumbnail: '/images/paint-correction.jpg',
    duration: '0:42'
  },
  {
    id: 'reel-deep-interior',
    shortcode: 'DdyTWTrS_C-',
    permalink: 'https://www.instagram.com/reel/DdyTWTrS_C-/',
    embedUrl: 'https://www.instagram.com/reel/DdyTWTrS_C-/embed/',
    title: 'Full Vehicle Detailing Rejuvenation',
    service: 'Car Detailing & Deep Cleaning',
    serviceModalKey: 'Interior Steam & Leather Spa',
    views: 'Studio Showcase',
    badge: '🧼 Deep Steam Spa',
    desc: 'Steam sanitization, leather conditioning balm, wheel caliper ceramic, and high-gloss tire dressing.',
    thumbnail: '/images/interior-detailing.jpg',
    duration: '0:35'
  }
];

export default function WorkShowcase({ onOpenBooking }) {
  const [activeReelId, setActiveReelId] = useState(null);
  const [loadingEmbed, setLoadingEmbed] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const totalScroll = scrollWidth - clientWidth;
    if (totalScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollLeft / totalScroll)));
    }
  };

  useEffect(() => {
    checkScroll();
    const current = carouselRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (current) current.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handlePlayReel = (reelId) => {
    if (activeReelId === reelId) {
      setActiveReelId(null);
      setLoadingEmbed(false);
    } else {
      setActiveReelId(reelId);
      setLoadingEmbed(true);
    }
  };

  const handleClosePlayer = (e) => {
    e.stopPropagation();
    setActiveReelId(null);
    setLoadingEmbed(false);
  };

  return (
    <section className="work-showcase-section" id="our-work">
      <div className="container">
        {/* 1. Work Showcasing Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#e50914" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>OUR WORK IN ACTION</span>
          </div>

          <h2 className="section-title">
            REAL CARS. <span className="text-gradient-red">REAL TRANSFORMATIONS.</span>
          </h2>

          <p className="section-subtitle">
            See how we transform, protect and perfect vehicles with professional automotive detailing.
          </p>
        </div>

        {/* Carousel Navigation Header (Controls) */}
        <div className="reels-controls-row">
          <div className="reels-account-badge">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="url(#ig-grad)">
              <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Official Instagram Reels</span>
            <span className="account-tag">@alphadetailers21</span>
          </div>

          <div className="reels-nav-arrows">
            <button
              className="reel-nav-btn"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Reels"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <button
              className="reel-nav-btn"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Reels"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2 & 3. Reel Cards Carousel & Grid */}
        <div className="reels-carousel-track" ref={carouselRef}>
          {INSTAGRAM_REELS.map((reel) => {
            const isPlaying = activeReelId === reel.id;

            return (
              <div
                key={reel.id}
                className={`reel-card ${isPlaying ? 'is-playing' : ''}`}
                id={`card-${reel.id}`}
              >
                {/* 9:16 Aspect Ratio Media Box */}
                <div className="reel-media-wrapper">
                  {isPlaying ? (
                    /* Official Instagram Embed / Player Mechanism */
                    <div className="reel-embed-container">
                      {loadingEmbed && (
                        <div className="reel-embed-loader">
                          <div className="loader-spinner"></div>
                          <span>Loading Studio Reel...</span>
                        </div>
                      )}
                      <iframe
                        src={reel.embedUrl}
                        title={reel.title}
                        className="reel-iframe"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        allow="encrypted-media; clipboard-write;"
                        onLoad={() => setLoadingEmbed(false)}
                      ></iframe>
                      <button
                        className="btn-close-embed"
                        onClick={handleClosePlayer}
                        title="Close video player"
                        aria-label="Close video player"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    /* Initial High-Speed Optimized Thumbnail Card */
                    <div
                      className="reel-poster-box"
                      onClick={() => handlePlayReel(reel.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handlePlayReel(reel.id);
                        }
                      }}
                      aria-label={`Play Reel: ${reel.title}`}
                    >
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="reel-poster-img"
                        loading="lazy"
                      />
                      <div className="reel-gradient-overlay"></div>

                      {/* Top Badges */}
                      <div className="reel-top-badges">
                        <span className="reel-service-pill">{reel.service}</span>
                        <span className="reel-views-pill">{reel.views}</span>
                      </div>

                      {/* Center Glowing Play Icon */}
                      <div className="reel-play-trigger">
                        <div className="play-pulse-ring"></div>
                        <div className="play-icon-circle">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="play-tap-hint">Tap to Play</span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="reel-bottom-info">
                        {reel.badge && <span className="reel-feature-badge">{reel.badge}</span>}
                        <h3 className="reel-card-title">{reel.title}</h3>
                        <p className="reel-card-desc">{reel.desc}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Row: Watch on Instagram + Preselect Booking */}
                <div className="reel-card-actions">
                  <a
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-watch-instagram"
                    title={`Watch "${reel.title}" on Instagram`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Watch on Instagram</span>
                  </a>

                  <button
                    className="btn-book-treatment"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(reel.serviceModalKey);
                    }}
                    title={`Book studio slot for ${reel.service}`}
                  >
                    <span>Book Slot</span>
                    <svg viewBox="0 0 24 24" width="12" height="12">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Scroll Indicator Bar */}
        <div className="reels-scroll-bar-wrap">
          <div
            className="reels-scroll-bar-fill"
            style={{ width: `${Math.max(18, scrollProgress * 100)}%` }}
          ></div>
        </div>

        {/* 6. Instagram Follow CTA Button */}
        <div className="instagram-cta-wrapper">
          <a
            href="https://www.instagram.com/alphadetailers21/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-follow-instagram"
            aria-label="Follow Alpha Detailers on Instagram"
          >
            <span className="ig-button-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <span className="ig-button-text">FOLLOW US ON INSTAGRAM</span>
            <span className="ig-button-arrow">→</span>
          </a>
          <p className="instagram-sub-text">
            Join <strong>540+ car enthusiasts</strong> in Delhi NCR • Daily Studio Stories, Walkthroughs & Detailing ASMR
          </p>
        </div>

        {/* 7. Booking Conversion Card: "Want the Same Finish for Your Car?" */}
        <div className="reels-finish-conversion-card">
          <div className="conversion-glow-backdrop"></div>
          <div className="conversion-content">
            <div className="conversion-badge-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#e50914">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Delhi NCR's Flagship Studio</span>
            </div>
            <h3 className="conversion-heading">Want the Same Finish for Your Car?</h3>
            <p className="conversion-subheading">
              Secure your studio bay slot today for clinical paint correction, 10H ceramic coating, or self-healing TPU PPF.
            </p>
          </div>

          <div className="conversion-cta-action">
            <button
              className="btn btn-primary btn-lg conversion-book-btn"
              onClick={() => onOpenBooking('10H Ceramic Coating')}
            >
              <span>Book Studio Slot</span>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
