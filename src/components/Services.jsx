import React from 'react';

export default function Services({ onOpenBooking }) {
  const servicesList = [
    {
      id: 'ppf',
      title: 'Paint Protection Film (PPF)',
      modalKey: 'Paint Protection Film (PPF)',
      image: '/assets/images/ppf-install.jpg',
      badge: '10-Year Warranty',
      time: '3 - 4 Days',
      shortDesc: 'Paint protection against everyday wear and road debris.',
      desc: 'Optically clear 200-micron self-healing aliphatic TPU film engineered to protect factory paint against rock chips, scratches, road debris, and acid rain.',
      perks: [
        'Instant Heat-Activated Thermal Self-Healing',
        '100% Anti-Yellowing German Adhesive',
        'Available in High Gloss or Satin Matte'
      ],
      priceLabel: 'Package Coverage',
      price: 'Full Front / Full Body',
      btnText: 'Book Studio Slot'
    },
    {
      id: 'ceramic',
      title: 'Ceramic Coating (10H Diamond)',
      modalKey: '10H Ceramic Coating',
      image: '/assets/images/ceramic-coating.jpg',
      badge: '3-5 Year Certified',
      time: '24 - 36 Hours',
      shortDesc: 'Long-lasting gloss and easier maintenance.',
      desc: 'Permanent chemical bond SiO2 nano-coating providing intense mirror depth, 110° hydrophobic contact angle, UV defense, and effortless maintenance.',
      perks: [
        'Super-Hydrophobic Lotus Water-Beading',
        'Infrared Short-Wave Cured at 65°C',
        'Certified 3-5 Year Studio Warranty'
      ],
      priceLabel: 'Starting From',
      price: '₹14,999*',
      btnText: 'Book Studio Slot'
    },
    {
      id: 'correction',
      title: 'Multi-Stage Paint Correction',
      modalKey: 'Multi-Stage Paint Correction',
      image: '/assets/images/paint-correction.jpg',
      badge: '95%+ Swirl Removal',
      time: '6 - 8 Hours',
      shortDesc: 'Professional treatment to improve paint clarity and reduce visible swirl marks.',
      desc: 'Dual-action and rotary machine compounding under high-CRI inspection halos to level holograms, buffer swirls, spider webbing, and clearcoat hazing.',
      perks: [
        'Ultrasonic Micron Clearcoat Thickness Audit',
        'Jeweler-Grade Micro-Finishing Compound',
        'Restores Wet-Look Showroom Mirror Gloss'
      ],
      priceLabel: 'Starting From',
      price: '₹6,999*',
      btnText: 'Book Studio Slot'
    },
    {
      id: 'detailing',
      title: 'Car Detailing & Deep Cleaning',
      modalKey: 'Interior Steam & Leather Spa',
      image: '/assets/images/interior-detailing.jpg',
      badge: 'Steam Sanitized',
      time: '4 - 5 Hours',
      shortDesc: 'Thorough interior and exterior detailing.',
      desc: '140°C pressurized clinical steam extraction, pH-balanced leather feeding balm, AC vent disinfection, and multi-stage exterior decontamination.',
      perks: [
        'Complete AC Duct & Vent Disinfection',
        'Matte Natural Leather Conditioning',
        'Ozone Anti-Bacterial Odor Treatment'
      ],
      priceLabel: 'Starting From',
      price: '₹4,499*',
      btnText: 'Book Studio Slot'
    },
    {
      id: 'graphene',
      title: 'Graphene Matrix Coating',
      modalKey: 'Graphene Matrix Coating',
      image: '/assets/images/hero-supercar.jpg',
      badge: '7-Year Apex Shield',
      time: '36 - 48 Hours',
      shortDesc: 'Advanced Reduced Graphene Oxide lattice for ultimate defense.',
      desc: 'State-of-the-art Reduced Graphene Oxide shield offering superior heat dissipation on dark paints, anti-water spotting, and high chemical durability down to pH 12.',
      perks: [
        'Superior Anti-Water Spot Formulation',
        'Reduced Surface Heat On Dark Panels',
        'Resistant Down to pH 12 Alkaline Wash'
      ],
      priceLabel: 'Starting From',
      price: '₹22,999*',
      btnText: 'Book Studio Slot'
    },
    {
      id: 'wash',
      title: 'Hyper Foam Wash & Decontamination',
      modalKey: 'Hyper Foam Wash',
      image: '/assets/images/snow-foam-wash.jpg',
      badge: '3-Bucket Protocol',
      time: '60 - 90 Mins',
      shortDesc: 'Scratch-free wash with iron fallout and underbody wash.',
      desc: 'pH-neutral thick snow foam pre-soak, iron fallout chemical dissolution, clay bar decontamination, high-pressure underbody chassis flush, and blow dry.',
      perks: [
        '100% Scratch-Free Grit Guard Technique',
        'High-Pressure Underbody Chassis Flush',
        'Plush 1000 GSM Microfiber Blow Dry'
      ],
      priceLabel: 'Starting From',
      price: '₹1,499*',
      btnText: 'Book Studio Slot'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header as requested */}
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#e50914">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Certified Detailing Craftsmanship</span>
          </div>

          <h2 className="section-title">
            OUR PREMIUM <span className="text-gradient-red">DETAILING SERVICES</span>
          </h2>

          <p className="section-subtitle">
            Precision detailing, advanced paint protection and premium care for your vehicle.
          </p>
        </div>

        {/* Responsive Services Grid */}
        <div className="services-grid">
          {servicesList.map((svc) => (
            <div key={svc.id} className="service-card" id={`service-${svc.id}`}>
              {svc.image && (
                <div className="service-img-wrap">
                  <img src={svc.image} alt={svc.title} className="service-img" loading="lazy" />
                  {svc.badge && (
                    <div className="service-badge-pill">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#e50914">
                        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                      </svg>
                      <span>{svc.badge}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="service-body">
                <div className="service-icon-row">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                  </div>
                  <div className="service-time">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>{svc.time}</span>
                  </div>
                </div>

                <h3 className="service-title">{svc.title}</h3>
                
                <p className="service-short-desc">{svc.shortDesc}</p>
                <p className="service-desc">{svc.desc}</p>

                <ul className="service-perks">
                  {svc.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#e50914" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <div className="service-price-tag">
                    <span>{svc.priceLabel}</span>
                    <span>{svc.price}</span>
                  </div>

                  <div className="service-actions-row">
                    <a
                      href="#estimator"
                      className="btn-service-details"
                      title={`View package details for ${svc.title}`}
                    >
                      View Details
                    </a>
                    <button
                      className="btn btn-primary btn-sm service-book-btn"
                      onClick={() => onOpenBooking(svc.modalKey)}
                      aria-label={`Book Studio Slot for ${svc.title}`}
                    >
                      <span>Book Slot</span>
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
