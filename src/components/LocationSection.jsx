import React from 'react';

// Reusable Studio Information Row Component
function InfoRow({ icon, title, description }) {
  return (
    <div className="location-info-row">
      <div className="location-info-icon-box" aria-hidden="true">
        {icon}
      </div>
      <div className="location-info-body">
        <span className="location-info-title">{title}</span>
        <p className="location-info-desc">{description}</p>
      </div>
    </div>
  );
}

export default function LocationSection() {
  const gmbUrl = "https://maps.google.com/?q=4,+5th+Pustha+Rd,+South+Gamri,+Gamri+Village,+Delhi,+110053";

  return (
    <section className="location-section" id="studio-location" aria-label="Alpha Detailers Delhi Workshop Location">
      <div className="container location-container">
        
        {/* Centered Heading & Intro */}
        <div className="location-heading-wrap">
          <div className="location-eyebrow-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>DELHI DETAILING STUDIO</span>
          </div>

          <h2 className="location-main-title">
            VISIT OUR DELHI <span className="title-red-gradient">WORKSHOP</span>
          </h2>

          <p className="location-main-subtitle">
            Visit our professional detailing studio in South Gamri, Delhi, for premium paint protection, paint correction and ceramic coating services.
          </p>
        </div>

        {/* Main Two-Column Layout (48% Left / 52% Right) */}
        <div className="location-main-grid">
          
          {/* Left Column (48%): Studio Information Card */}
          <div className="studio-info-card">
            
            {/* Brand Header */}
            <div className="studio-card-header">
              <h3 className="studio-brand-name">ALPHA DETAILERS</h3>
              <div className="studio-verified-pill">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Google Verified Studio</span>
              </div>
            </div>

            {/* Rating Row */}
            <div className="studio-rating-hero">
              <span className="studio-rating-score">5.0</span>
              <div className="studio-rating-meta">
                <div className="studio-rating-stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="gold-star-icon" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="studio-rating-label">Google Verified Rating • Delhi Studio</span>
              </div>
            </div>

            {/* Reusable Information Rows */}
            <div className="studio-info-rows">
              
              {/* Row 1: Studio Address */}
              <InfoRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                }
                title="Studio Address"
                description="4, 5th Pustha Rd, South Gamri, Gamri Village, Delhi, 110053"
              />

              {/* Row 2: Operational Hours */}
              <InfoRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                title="Operational Hours"
                description="Mon–Sun, 9:30 AM–8:30 PM (Opens 9:30 AM Daily)"
              />

              {/* Row 3: Direct Helpdesk & WhatsApp */}
              <InfoRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                title="Direct Helpdesk & WhatsApp"
                description="+91 88512 21573 / +91 84478 23046 • Immediate Studio Slot Confirmation"
              />
            </div>

            {/* Action Buttons: Get Directions & Call Desk */}
            <div className="studio-actions-row">
              <a
                href={gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary studio-btn-primary"
                id="btn-directions"
                aria-label="Get Directions to Alpha Detailers on Google Maps"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+918851221573"
                className="btn btn-secondary studio-btn-secondary"
                id="btn-call-desk"
                aria-label="Call Alpha Detailers Studio Desk"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Studio Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column (52%): Top-Aligned Map Embed & Official Google Listing Card */}
          <div className="studio-map-column">
            
            {/* Google Maps Interactive Frame */}
            <div className="studio-map-frame">
              <iframe
                className="studio-map-iframe"
                title="Alpha Detailers Delhi Studio Location on Google Maps"
                src="https://maps.google.com/maps?q=4,+5th+Pustha+Rd,+South+Gamri,+Gamri+Village,+Delhi,+110053&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Official Google Maps Listing Card (Positioned directly under map with 16px gap) */}
            <div className="gmb-listing-card">
              <img
                src="/assets/images/gmb-screenshot.png"
                alt="Google Verified Listing Thumbnail for Alpha Detailers Delhi"
                className="gmb-listing-thumb"
                width="54"
                height="54"
                loading="lazy"
              />
              <div className="gmb-listing-details">
                <div className="gmb-listing-title-row">
                  <span className="gmb-listing-title">Official Google Maps Listing</span>
                  <span className="gmb-listing-score-pill">5.0 ★ Google Verified</span>
                </div>
                <p className="gmb-listing-address">
                  4, 5th Pustha Rd, South Gamri, Gamri Village, Delhi, 110053
                </p>
              </div>
              <a
                href={gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gmb-listing-action-btn"
                aria-label="View Alpha Detailers on Google Maps"
              >
                <span>View on Maps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
