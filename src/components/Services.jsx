import React from 'react';

export default function Services({ onOpenBooking }) {
  const servicesList = [
    {
      id: 'ppf',
      title: 'Paint Protection Film (PPF)',
      image: '/assets/images/ppf-install.jpg',
      badge: '10 Yr Warranty',
      time: '3 - 4 Days',
      desc: 'Optically clear 200-micron aliphatic TPU film with instant thermal self-healing capabilities against rock chips, keys, road debris, and acid rain.',
      perks: [
        'Self-Healing Under Sunlight/Heat',
        '100% Anti-Yellowing German Adhesive',
        'Available in High Gloss or Satin Matte'
      ],
      priceLabel: 'Coverage',
      price: 'Full Front / Full Body',
      btnText: 'Book PPF'
    },
    {
      id: 'ceramic',
      title: '10H Diamond Ceramic Coating',
      image: '/assets/images/ceramic-coating.jpg',
      badge: 'Most Popular',
      time: '24 - 36 Hours',
      desc: 'Permanent chemical bond SiO2 nano-coating providing unmatched depth of color, super-hydrophobic lotus effect, and heavy UV oxidation defense.',
      perks: [
        '110°+ Water Contact Hydrophobic Angle',
        '3-5 Year Certified Studio Warranty',
        'Infrared Heat Lamp Cured'
      ],
      priceLabel: 'Starting From',
      price: '₹14,999*',
      btnText: 'Book Coating'
    },
    {
      id: 'graphene',
      title: 'Graphene Matrix Coating',
      image: '/assets/images/hero-supercar.jpg',
      badge: 'Apex Shield',
      time: '36 - 48 Hours',
      desc: 'State-of-the-art Reduced Graphene Oxide lattice offering superior heat dissipation, anti-water spotting protection, and chemical durability down to pH 12.',
      perks: [
        'Superior Anti-Water Spot Formulation',
        'High Heat Dissipation On Dark Paints',
        'Up to 7 Years Durability'
      ],
      priceLabel: 'Starting From',
      price: '₹22,999*',
      btnText: 'Book Graphene'
    },
    {
      id: 'correction',
      title: 'Multi-Stage Paint Correction',
      image: '/assets/images/paint-correction.jpg',
      badge: '95%+ Correction',
      time: '6 - 8 Hours',
      desc: 'Rotary and dual-action compound cutting and jeweler-grade finishing polish to eliminate 95%+ of holograms, heavy swirls, and sanding scratches.',
      perks: [
        'Ultrasonic Clearcoat Micron Measurement',
        'Diminishing Abrasive Micro-Polishing',
        'Deep Wet-Look Mirror Gloss Restoration'
      ],
      priceLabel: 'Starting From',
      price: '₹6,999*',
      btnText: 'Book Polish'
    },
    {
      id: 'interior',
      title: 'Interior Deep Steam & Leather Spa',
      image: '/assets/images/interior-detailing.jpg',
      badge: '140°C Steam',
      time: '4 - 5 Hours',
      desc: 'Hospital-grade pressurized steam sanitization, leather conditioning with pH-balanced balms, carpet hot water extraction, and anti-bacterial ozone treatment.',
      perks: [
        'Complete AC Duct & Vent Disinfection',
        'Matte Finish Leather Feed & Softening',
        'Odor & Allergen Eliminating Ozone Gas'
      ],
      priceLabel: 'Starting From',
      price: '₹4,499*',
      btnText: 'Book Interior'
    },
    {
      id: 'wash',
      title: 'Hyper Foam Wash & Decontamination',
      image: '/assets/images/snow-foam-wash.jpg',
      badge: '3-Bucket Method',
      time: '60 - 90 Mins',
      desc: 'Non-contact pH-neutral snow foam bath, iron fallout chemical dissolution, clay bar decontamination, underbody blast, and plush microfiber towel blow dry.',
      perks: [
        '100% Scratch-Free Grit Guard Technique',
        'High-Pressure Underbody Chassis Wash',
        'Wheel Well & Caliper Degreasing'
      ],
      priceLabel: 'Starting From',
      price: '₹1,499*',
      btnText: 'Book Wash'
    },
    {
      id: 'wheels',
      title: 'Alloy Wheel & Caliper Ceramic',
      time: '3 Hours',
      desc: '800°C heat-resistant ceramic nano-coating formulated specifically for rims and brake calipers to repel baked-in metallic brake dust and road grime.',
      perks: [
        'Effortless Brake Dust Wash-Off',
        'High-Heat Caliper Sealant',
        'Maintains Ultra Mirror Luster'
      ],
      priceLabel: '4 Wheels',
      price: '₹4,999*',
      btnText: 'Book Wheels'
    },
    {
      id: 'glass',
      title: 'Windshield & Glass Hydrophobic Shield',
      time: '2 Hours',
      desc: 'Fluorine-based chemical bond glass sealant that beads rain off at 45 km/h without wipers, drastically improving nighttime and monsoon visibility in Delhi.',
      perks: [
        'Eliminates Water Spot Etching',
        'Wiper Chatter Free Formula',
        'Crystal Clarity in Monsoon Rain'
      ],
      priceLabel: 'All Glass',
      price: '₹3,499*',
      btnText: 'Book Glass'
    },
    {
      id: 'engine',
      title: 'Engine Bay Cosmetic Restoration',
      time: '90 Mins',
      desc: 'Safe dry-steam degreasing, electrical harness masking, carbon deposit removal, and non-greasy satin silicone dressing on plastics and rubber hoses.',
      perks: [
        '100% Safe For Sensors & ECUs',
        'Repels Rodents & Dust Build-up',
        'Showroom Fresh Engine Bay Aesthetic'
      ],
      priceLabel: 'Service Price',
      price: '₹1,999*',
      btnText: 'Book Engine'
    },
    {
      id: 'headlight',
      title: 'Headlight Restoration & UV Shield',
      time: '60 Mins',
      desc: 'Wet sanding yellowed foggy polycarbonate headlights, jewel compounding to optical clarity, and sealing with durable ceramic UV inhibitors.',
      perks: [
        'Restores 100% Night Beam Output',
        'Anti-Yellowing 2-Year Guarantee',
        'Crystal Clear Polycarbonate Clarity'
      ],
      priceLabel: 'Both Pairs',
      price: '₹1,799*',
      btnText: 'Book Lights'
    },
    {
      id: 'fabric',
      title: 'Leather & Fabric Nano-Shield',
      time: '3 Hours',
      desc: 'Hydrophobic textile and leather impregnation guarding upholstery against denim dye transfer, liquid coffee spills, grease, and ultraviolet fading.',
      perks: [
        'Repels Accidental Spills Instantly',
        'Breathable OEM Leather Feel',
        'Zero Chemical Odor'
      ],
      priceLabel: 'Interior Cabin',
      price: '₹4,999*',
      btnText: 'Book Leather'
    },
    {
      id: 'concierge',
      title: 'Alpha Concierge Bespoke Care',
      time: 'Custom Time',
      desc: 'Tailored custom paintwork restoration, vinyl color change accent wraps, carbon fiber PPF installations, and private collection fleet maintenance.',
      perks: [
        'Dedicated Studio Bay Assignment',
        'Personalized Photo/Video Progress Logs',
        'Private Fleet Management Program'
      ],
      priceLabel: 'Consultation',
      price: 'On Inspection',
      btnText: 'Consult Now'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Precision Engineering
          </div>
          <h2 className="section-title">OUR STUDIO <span className="text-gradient-red">SERVICES</span></h2>
          <p className="section-subtitle">
            From self-healing thermoplastic polyurethane films to nano-molecular graphene lattices, discover our full spectrum of elite vehicle defense.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((svc) => (
            <div key={svc.id} className="service-card">
              {svc.image && (
                <div className="service-img-wrap">
                  <img src={svc.image} alt={svc.title} className="service-img" />
                  {svc.badge && (
                    <div className="service-badge-pill">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#e50914">
                        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                      </svg>
                      {svc.badge}
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
                    {svc.time}
                  </div>
                </div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-perks">
                  {svc.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {' '}{perk}
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <div className="service-price-tag">
                    <span>{svc.priceLabel}</span>
                    <span>{svc.price}</span>
                  </div>
                  <button
                    className="btn btn-outline-red open-booking-modal"
                    onClick={() => onOpenBooking(svc.title)}
                  >
                    {svc.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
