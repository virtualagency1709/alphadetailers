import React from 'react';

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      {/* WhatsApp Floating Action */}
      <a
        href="https://wa.me/919696546862?text=Hello%20Alpha%20Detailers%2C%20I%20am%20interested%20in%20booking%20a%20detailing%20slot%20at%20your%20Delhi%20studio."
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.202.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.136-.134.301-.35.452-.525.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.3-1.055 1.03-1.055 2.513 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.151 4.551.72.311 1.282.497 1.72.637.724.23 1.382.198 1.903.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.34 5.01L2 22l5.08-1.33c1.47.8 3.13 1.23 4.96 1.23 5.53 0 10.04-4.51 10.04-10.04S17.57 2 12.04 2z" />
        </svg>
        <span className="fab-tooltip">Chat with Studio</span>
      </a>

      {/* Phone Call Floating Action */}
      <a
        href="tel:+919696546862"
        className="fab-btn fab-call"
        title="Call Alpha Detailers"
        aria-label="Call Alpha Detailers"
      >
        <svg viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="fab-tooltip">Call Desk (+91 96965 46862)</span>
      </a>
    </div>
  );
}
