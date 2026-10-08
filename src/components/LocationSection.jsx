import React from 'react';

export default function LocationSection() {
  return (
    <section className="location-section" id="studio-location">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Delhi Detailing Studio
          </div>
          <h2 className="section-title">VISIT OUR <span className="text-gradient-red">DELHI WORKSHOP</span></h2>
          <p className="section-subtitle">
            Located on 5th Pustha Road in South Gamri, Delhi. Equipped with state-of-the-art infrared curing, dedicated wash bay, and customer VIP lounge.
          </p>
        </div>

        <div className="location-grid">
          {/* Google My Business Verification Card */}
          <div>
            <div className="gmb-badge-card">
              <div className="gmb-header-row">
                <span className="gmb-business-name">ALPHA DETAILERS</span>
                <div className="gmb-badge-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Google Verified Studio
                </div>
              </div>

              <div className="gmb-rating-hero">
                <span className="gmb-big-score">5.0</span>
                <div className="gmb-stars-wrap">
                  <div className="gmb-stars-icons">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="gmb-verified-count">100% 5-Star Verified Customer Feedback</span>
                </div>
              </div>

              <div className="gmb-info-list">
                <div className="gmb-info-item">
                  <div className="gmb-info-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="gmb-info-text">
                    <strong>Studio Address</strong>
                    <p>4, 5th Pustha Rd, South Gamri, Gamri Village, Delhi, 110053</p>
                  </div>
                </div>

                <div className="gmb-info-item">
                  <div className="gmb-info-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div className="gmb-info-text">
                    <strong>Operational Hours</strong>
                    <p>Opens 9:30 AM Daily (Mon - Sun, 9:30 AM to 8:30 PM)</p>
                  </div>
                </div>

                <div className="gmb-info-item">
                  <div className="gmb-info-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="gmb-info-text">
                    <strong>Direct Helpdesk & WhatsApp</strong>
                    <p>+91 96965 46862 • Immediate Studio Slot Confirmation</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=4,+5th+Pustha+Rd,+South+Gamri,+Gamri+Village,+Delhi,+110053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="btn-directions"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                  <span>Get Directions (Maps)</span>
                </a>
                <a href="tel:+919696546862" className="btn btn-secondary" id="btn-call-desk">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call Studio Desk</span>
                </a>
              </div>
            </div>

            {/* GMB Screenshot Verification Snippet */}
            <div className="gmb-screen-preview">
              <img
                src="/assets/images/gmb-screenshot.png"
                alt="Google My Business profile for Alpha Detailers Delhi"
                className="gmb-thumb"
              />
              <div className="gmb-thumb-info">
                <span className="gmb-thumb-title">Official Google Maps Listing</span>
                <span className="gmb-thumb-address">4, 5th Pustha Rd, South Gamri, Delhi • 5.0 Star</span>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Map */}
          <div className="location-map-wrap">
            <iframe
              className="map-iframe"
              title="Alpha Detailers Delhi Location"
              src="https://maps.google.com/maps?q=4,+5th+Pustha+Rd,+South+Gamri,+Gamri+Village,+Delhi,+110053&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
