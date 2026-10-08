import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      initials: 'RK',
      name: 'Rohit Kashyap',
      car: 'BMW 530d M-Sport • Ceramic Coating',
      quote: '"Brought my BMW 5 Series for full 10H ceramic coating and paint correction. The gloss is unbelievable — water literally dances off the bonnet! Their Gamri studio has proper infrared curing lamps and clean bays. The best car detailing in Delhi!"'
    },
    {
      initials: 'VS',
      name: 'Vikramaditya Sharma',
      car: 'Land Rover Defender • Full TPU PPF',
      quote: '"Installed self-healing TPU PPF on my new Defender. The edge wrapping is clean with zero bubbles or stretch lines. Alpha Detailers treat every vehicle like their own. 5 stars without a doubt!"'
    },
    {
      initials: 'AM',
      name: 'Aman Malhotra',
      car: 'Mercedes C220d • Interior Spa & Polish',
      quote: '"The steam interior detailing removed 3 years of coffee stains and dust from the leather seats. It smells fresh and looks like it just rolled out of the showroom. Excellent pricing and super friendly team."'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            Client Endorsements
          </div>
          <h2 className="section-title">PRAISE FROM <span className="text-gradient-red">CAR ENTHUSIASTS</span></h2>
          <p className="section-subtitle">
            Real owners who demanded unmatched perfection and chose Alpha Detailers in Delhi.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="test-stars">
                {[...Array(5)].map((_, sIdx) => (
                  <svg key={sIdx} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="test-quote">{rev.quote}</p>
              <div className="test-author-row">
                <div className="test-avatar">{rev.initials}</div>
                <div className="test-meta">
                  <span className="test-name">{rev.name}</span>
                  <span className="test-car">{rev.car}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
