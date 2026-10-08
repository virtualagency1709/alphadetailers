import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <a href="#" className="brand-logo" id="header-logo-link">
            <img src="/assets/images/alpha-logo.png" alt="Alpha Detailers Shield Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">ALPHA <span>DETAILERS</span></span>
              <span className="brand-tag">AUTOMOTIVE STUDIO • DELHI</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#before-after" className="nav-link">Before / After</a></li>
            <li><a href="#estimator" className="nav-link">Price Estimator</a></li>
            <li><a href="#memberships" className="nav-link">Packages</a></li>
            <li><a href="#process" className="nav-link">Our Process</a></li>
            <li><a href="#studio-location" className="nav-link">Delhi Studio</a></li>
          </ul>

          {/* Header Action */}
          <div className="nav-actions">
            <a href="tel:+919696546862" className="header-phone" title="Call Alpha Detailers">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+91 96965 46862</span>
            </a>
            <button
              className="btn btn-primary open-booking-modal"
              id="header-book-btn"
              onClick={() => onOpenBooking()}
            >
              <span>Book Studio Slot</span>
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <button
              className="mobile-menu-btn"
              id="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setDrawerOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${drawerOpen ? 'open' : ''}`}
        id="drawer-backdrop"
        onClick={closeDrawer}
      />

      {/* Mobile Nav Drawer */}
      <aside className={`mobile-nav-drawer ${drawerOpen ? 'open' : ''}`} id="drawer-menu">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img src="/assets/images/alpha-logo.png" alt="Logo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>ALPHA <span style={{ color: '#e50914' }}>DETAILERS</span></span>
            </div>
            <button
              className="mobile-nav-close"
              id="drawer-close"
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              aria-label="Close Menu"
              onClick={closeDrawer}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li><a href="#services" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Services</a></li>
            <li><a href="#before-after" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Before & After</a></li>
            <li><a href="#estimator" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Price Estimator</a></li>
            <li><a href="#memberships" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Packages</a></li>
            <li><a href="#process" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Our Process</a></li>
            <li><a href="#studio-location" className="mobile-nav-link" onClick={closeDrawer} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Delhi Studio</a></li>
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '2rem' }}>
          <a
            href="https://wa.me/919696546862?text=Hello%20Alpha%20Detailers%2C%20I%20want%20to%20inquire%20about%20detailing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
          >
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: '#fff' }}>
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.202.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.136-.134.301-.35.452-.525.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.3-1.055 1.03-1.055 2.513 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.151 4.551.72.311 1.282.497 1.72.637.724.23 1.382.198 1.903.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22l5.08-1.33c1.47.8 3.13 1.23 4.96 1.23 5.53 0 10.04-4.51 10.04-10.04S17.57 2 12.04 2z" />
            </svg>
            Chat on WhatsApp
          </a>
          <button
            className="btn btn-primary open-booking-modal"
            style={{ width: '100%' }}
            onClick={() => {
              closeDrawer();
              onOpenBooking();
            }}
          >
            Book Studio Slot
          </button>
        </div>
      </aside>
    </>
  );
}
