import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: Brand Info */}
        <div className="footer-brand">
          <a href="#" className="brand-logo" style={{ marginBottom: '1rem' }}>
            <img src="/assets/images/alpha-logo.png" alt="Alpha Detailers Shield Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">ALPHA <span>DETAILERS</span></span>
              <span className="brand-tag">AUTOMOTIVE STUDIO • DELHI</span>
            </div>
          </a>
          <p>
            The apex standard of luxury vehicle aesthetic preservation in Delhi. Specializing in 10H ceramic coatings, thermoplastic self-healing PPF, and surgical paint restoration.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Paint Protection Film (PPF)</a></li>
            <li><a href="#services">10H Ceramic Coating</a></li>
            <li><a href="#services">Graphene Matrix Shield</a></li>
            <li><a href="#services">Multi-Stage Paint Correction</a></li>
            <li><a href="#services">Deep Steam Interior Spa</a></li>
            <li><a href="#services">Alloy Wheel & Caliper Ceramic</a></li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#before-after">Before & After</a></li>
            <li><a href="#estimator">Cost Estimator</a></li>
            <li><a href="#memberships">Packages & Clubs</a></li>
            <li><a href="#process">The Alpha Protocol</a></li>
            <li><a href="#studio-location">Delhi Location</a></li>
          </ul>
        </div>

        {/* Col 4: Studio Contact */}
        <div className="footer-col">
          <h4>Delhi Studio Location</h4>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            <span>4, 5th Pustha Rd, South Gamri, Gamri Village, Delhi, 110053</span>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" /></svg>
            <span>+91 96965 46862</span>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
            <span>Opens 9:30 AM Daily</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 ALPHA DETAILERS. All Rights Reserved. Delhi's Accredited Car Detailing Studio.</p>
        <p>Precision • Passion • Perfection</p>
      </div>
    </footer>
  );
}
