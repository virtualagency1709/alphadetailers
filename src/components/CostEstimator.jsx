import React, { useState } from 'react';

export default function CostEstimator({ onOpenBooking }) {
  const [selectedCar, setSelectedCar] = useState('luxury');
  const [selectedPkg, setSelectedPkg] = useState('ceramic');

  const pricingData = {
    hatchback: {
      ceramic: { price: '₹14,999 - ₹18,999', time: '24 Hours', warranty: '3 Years' },
      graphene: { price: '₹22,999 - ₹26,999', time: '24-36 Hours', warranty: '5 Years' },
      ppf: { price: '₹65,000 - ₹85,000', time: '2-3 Days', warranty: '5-7 Years' }
    },
    sedan: {
      ceramic: { price: '₹18,999 - ₹22,999', time: '24-36 Hours', warranty: '3 Years' },
      graphene: { price: '₹26,999 - ₹31,999', time: '36 Hours', warranty: '5 Years' },
      ppf: { price: '₹75,000 - ₹95,000', time: '3-4 Days', warranty: '5-7 Years' }
    },
    luxury: {
      ceramic: { price: '₹24,999 - ₹29,999', time: '36-48 Hours', warranty: '3-5 Years' },
      graphene: { price: '₹34,999 - ₹42,999', time: '48 Hours', warranty: '5-7 Years' },
      ppf: { price: '₹95,000 - ₹1,35,000', time: '4-5 Days', warranty: '7-10 Years' }
    },
    suv: {
      ceramic: { price: '₹28,999 - ₹34,999', time: '48 Hours', warranty: '3-5 Years' },
      graphene: { price: '₹39,999 - ₹48,999', time: '48 Hours', warranty: '5-7 Years' },
      ppf: { price: '₹1,20,000 - ₹1,65,000', time: '4-5 Days', warranty: '7-10 Years' }
    }
  };

  const currentData = pricingData[selectedCar][selectedPkg];

  const getCarName = (key) => {
    switch (key) {
      case 'hatchback': return 'Hatchback / Premium Compact';
      case 'sedan': return 'Executive Sedan';
      case 'luxury': return 'Luxury German / Sports Car';
      case 'suv': return 'Full-Size SUV / Supercar';
      default: return key;
    }
  };

  const getPkgName = (key) => {
    switch (key) {
      case 'ceramic': return '10H Diamond Ceramic Coating';
      case 'graphene': return 'Advanced Graphene Matrix Shield';
      case 'ppf': return 'Self-Healing TPU Paint Protection Film (PPF)';
      default: return key;
    }
  };

  const carName = getCarName(selectedCar);
  const pkgName = getPkgName(selectedPkg);
  const message = `Hi Alpha Detailers Delhi! I used your online estimator for my vehicle:
• Category: ${carName}
• Desired Service: ${pkgName}
• Estimated Quote: ${currentData.price} (${currentData.warranty} Warranty)

I would like to book a studio slot or free paint inspection. Please share availability.`;

  const whatsappUrl = `https://wa.me/918851221573?text=${encodeURIComponent(message)}`;

  return (
    <section className="estimator-section" id="estimator">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            Instant Transparent Estimation
          </div>
          <h2 className="section-title">CALCULATE YOUR <span className="text-gradient-red">STUDIO QUOTE</span></h2>
          <p className="section-subtitle">
            Select your vehicle segment and defense package to receive an immediate transparent estimation with warranty specifications.
          </p>
        </div>

        <div className="estimator-box">
          {/* 1. Select Car Category */}
          <div className="selector-label">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" stroke="currentColor" strokeWidth="2" />
              <circle cx="7" cy="14" r="1.5" fill="currentColor" />
              <circle cx="17" cy="14" r="1.5" fill="currentColor" />
            </svg>
            STEP 1: SELECT YOUR VEHICLE CLASS
          </div>

          <div className="car-types-grid">
            <div
              className={`car-type-btn ${selectedCar === 'hatchback' ? 'active' : ''}`}
              onClick={() => setSelectedCar('hatchback')}
            >
              <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" /></svg>
              <span>Hatchback</span>
              <small>Polo, i20, Swift, Mini</small>
            </div>

            <div
              className={`car-type-btn ${selectedCar === 'sedan' ? 'active' : ''}`}
              onClick={() => setSelectedCar('sedan')}
            >
              <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" /></svg>
              <span>Sedan / C-SUV</span>
              <small>City, Verna, Creta, Seltos</small>
            </div>

            <div
              className={`car-type-btn ${selectedCar === 'luxury' ? 'active' : ''}`}
              onClick={() => setSelectedCar('luxury')}
            >
              <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" /></svg>
              <span>Luxury / Sports</span>
              <small>BMW, Audi, Mercedes, Porsche</small>
            </div>

            <div
              className={`car-type-btn ${selectedCar === 'suv' ? 'active' : ''}`}
              onClick={() => setSelectedCar('suv')}
            >
              <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" /></svg>
              <span>Flagship SUV</span>
              <small>Fortuner, Defender, Range Rover, Urus</small>
            </div>
          </div>

          {/* 2. Select Coating / PPF Package */}
          <div className="selector-label">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            STEP 2: CHOOSE DEFENSE PACKAGE
          </div>

          <div className="package-types-grid">
            <div
              className={`pkg-type-btn ${selectedPkg === 'ceramic' ? 'active' : ''}`}
              onClick={() => setSelectedPkg('ceramic')}
            >
              <div className="pkg-type-header">
                <span className="pkg-type-title">10H Diamond Ceramic</span>
                <span className="pkg-type-badge">Popular</span>
              </div>
              <p className="pkg-type-desc">Multi-stage paint correction + 10H dual coat + Glass + Alloys</p>
            </div>

            <div
              className={`pkg-type-btn ${selectedPkg === 'graphene' ? 'active' : ''}`}
              onClick={() => setSelectedPkg('graphene')}
            >
              <div className="pkg-type-header">
                <span className="pkg-type-title">Graphene Matrix 10H</span>
                <span className="pkg-type-badge">Advanced</span>
              </div>
              <p className="pkg-type-desc">Reduced graphene oxide, anti-water spots, 7-year resilience</p>
            </div>

            <div
              className={`pkg-type-btn ${selectedPkg === 'ppf' ? 'active' : ''}`}
              onClick={() => setSelectedPkg('ppf')}
            >
              <div className="pkg-type-header">
                <span className="pkg-type-title">Self-Healing TPU (PPF)</span>
                <span className="pkg-type-badge">Maximum Armor</span>
              </div>
              <p className="pkg-type-desc">200-micron thermoplastic polyurethane full protection film</p>
            </div>
          </div>

          {/* Dynamic Calculation Card */}
          <div className="calc-result-card">
            <div className="calc-stat-block">
              <span className="calc-stat-label">Estimated Studio Investment</span>
              <span className="calc-stat-val price" id="calc-price-display">{currentData.price}</span>
            </div>

            <div className="calc-stat-block">
              <span className="calc-stat-label">Duration & Warranty</span>
              <span className="calc-stat-val" id="calc-duration-display">{currentData.time}</span>
              <small style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
                Warranty: <strong id="calc-warranty-display" style={{ color: '#ff4d5a' }}>{currentData.warranty}</strong>
              </small>
            </div>

            <div className="calc-action">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                id="calc-whatsapp-btn"
                style={{ width: '100%' }}
              >
                <svg viewBox="0 0 24 24" style={{ fill: '#fff', width: '18px', height: '18px' }}>
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.202.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.136-.134.301-.35.452-.525.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.3-1.055 1.03-1.055 2.513 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.151 4.551.72.311 1.282.497 1.72.637.724.23 1.382.198 1.903.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22l5.08-1.33c1.47.8 3.13 1.23 4.96 1.23 5.53 0 10.04-4.51 10.04-10.04S17.57 2 12.04 2z" />
                </svg>
                <span>Lock In Quote on WhatsApp</span>
              </a>
              <button
                className="btn btn-secondary open-booking-modal"
                style={{ width: '100%' }}
                onClick={() => onOpenBooking('Free Studio Paint Inspection')}
              >
                <span>Schedule Free Paint Inspection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
