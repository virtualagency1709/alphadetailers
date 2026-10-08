import React from 'react';

export default function Memberships({ onOpenBooking }) {
  const tiers = [
    {
      id: 'wash-club',
      name: '3-Month Wash Club',
      subtitle: '12 Intensive Washes Included',
      price: '₹7,999',
      period: '/ quarter',
      featured: false,
      features: [
        '12 Full Exterior Snow Foam Washes',
        'High-Pressure Underbody & Arches Blast',
        'Full Cabin Vacuuming (Seats, Mats & Boot)',
        'Dashboard & 4-Door Panels Polished',
        'Alloy Wheel Decontamination & Tyre Dressing',
        'Laying Disposable Protective Floor Paper'
      ],
      btnText: 'Enroll In Club',
      btnClass: 'btn-secondary'
    },
    {
      id: 'sovereign',
      name: 'Ceramic Armor Sovereign',
      subtitle: '3-Year Shield & Maintenance',
      price: '₹21,999',
      period: '/ package',
      featured: true,
      badgeTop: 'Most Recommended',
      features: [
        '3-Stage Surgical Paint Correction & Swirl Erase',
        'Double Layer 10H Diamond Ceramic Infusion',
        'Full Windshield & Glass Hydrophobic Nano-Shield',
        'Complete Alloy Wheel Face & Barrel Ceramic',
        'Interior Deep Steam Sanitization & Leather Spa',
        '2 Free Half-Yearly Ceramic Booster Coats'
      ],
      btnText: 'Book Sovereign Shield',
      btnClass: 'btn-primary'
    },
    {
      id: 'apex-ppf',
      name: 'Apex PPF Armor',
      subtitle: 'Full Vehicle TPU Self-Healing',
      price: '₹85,000+',
      period: '',
      featured: false,
      features: [
        'Full Body Aliphatic 200µ TPU Film Wrap',
        'Instant Self-Healing of Rock Scratches & Swirls',
        'Ceramic Top Coat Applied Directly Over Film',
        'Computer Pre-Cut Digital Templates For Precision',
        '10-Year Anti-Yellowing & Peeling Warranty',
        'Free 30-Day Edge Inspection & Inspection Audit'
      ],
      btnText: 'Consult PPF Master',
      btnClass: 'btn-secondary'
    }
  ];

  return (
    <section className="membership-section" id="memberships">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Comprehensive Care Plans
          </div>
          <h2 className="section-title">STUDIO PACKAGES & <span className="text-gradient-red">MEMBERSHIPS</span></h2>
          <p className="section-subtitle">
            Keep your pride and joy perpetually immaculate with our periodic maintenance and annual membership tiers.
          </p>
        </div>

        <div className="membership-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`membership-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.badgeTop && (
                <div className="membership-badge-top">{tier.badgeTop}</div>
              )}
              <div className="membership-header">
                <h3 className="membership-name">{tier.name}</h3>
                <span className="membership-subtitle">{tier.subtitle}</span>
                <div className="membership-price">
                  {tier.price} <span>{tier.period}</span>
                </div>
              </div>
              <ul className="membership-features">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {' '}{feat}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${tier.btnClass} open-booking-modal`}
                style={{ width: '100%' }}
                onClick={() => onOpenBooking(tier.name)}
              >
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
