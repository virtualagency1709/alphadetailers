import React from 'react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
      title: 'Dust-Free Infrared Bay',
      desc: 'Climate controlled short-wave curing zone'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-3.13 8.75-7 9.87-3.87-1.12-7-5.35-7-9.87V6.3l7-3.11 7 3.11V11z" />
        </svg>
      ),
      title: '100% Genuine TPU Films',
      desc: 'Instant heat self-healing & anti-yellowing'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ),
      title: 'Certified Master Detailers',
      desc: 'Surgical paint gauge depth inspection'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: 'Delhi NCR Pickup & Drop',
      desc: 'Enclosed insured carrier transport available'
    }
  ];

  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {trustItems.map((item, idx) => (
          <div key={idx} className="trust-card">
            <div className="trust-icon-box">
              {item.icon}
            </div>
            <div className="trust-info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
