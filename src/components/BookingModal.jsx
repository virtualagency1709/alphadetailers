import React, { useState, useEffect, useRef } from 'react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: initialService || '10H Ceramic Coating',
    date: '',
    notes: ''
  });

  const formRef = useRef(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Robust body scroll lock & scroll restoration
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY !== undefined) {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
    }

    return () => {
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY !== undefined) {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldMap = {
      'modal-name': 'name',
      'modal-phone': 'phone',
      'modal-car': 'car',
      'modal-service': 'service',
      'modal-date': 'date',
      'modal-notes': 'notes'
    };
    const key = fieldMap[id] || id;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Keep focused input visible when virtual keyboard opens on mobile
  const handleInputFocus = (e) => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
      setTimeout(() => {
        if (e.target && typeof e.target.scrollIntoView === 'function') {
          e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 250);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, car, service, date, notes } = formData;

    const message = `Hello Alpha Detailers Studio Delhi! I would like to book a service slot:
• Client Name: ${name}
• Contact: ${phone}
• Vehicle Model: ${car}
• Selected Service: ${service}
• Preferred Date: ${date}
${notes ? `• Special Notes: ${notes}` : ''}

Please confirm slot availability at your Gamri Village / 5th Pustha Rd studio.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918851221573?text=${encoded}`, '_blank');
    onClose();
  };

  // Disallow past dates
  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''} booking-modal`}
      id="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Mobile Pull Handle */}
        <div className="modal-grab-bar" aria-hidden="true">
          <div className="modal-grab-indicator" />
        </div>

        {/* Pinned Modal Header */}
        <div className="modal-header">
          <button
            className="modal-close-btn"
            id="modal-close-btn"
            aria-label="Close booking modal"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <h3 className="modal-title" id="modal-title">
            BOOK YOUR <span className="text-gradient-red">STUDIO SLOT</span>
          </h3>
          <p className="modal-desc">
            Reserve your car's climate-controlled bay at Alpha Detailers Delhi.
          </p>
        </div>

        {/* Scrollable Form Content */}
        <form
          ref={formRef}
          id="booking-form"
          className="modal-form-content booking-modal__content"
          onFocus={handleInputFocus}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="modal-name">Your Full Name</label>
              <input
                type="text"
                id="modal-name"
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="modal-phone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="modal-phone"
                className="form-input"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="modal-car">Vehicle Make & Model</label>
              <input
                type="text"
                id="modal-car"
                className="form-input"
                placeholder="e.g. BMW M4 / Fortuner / Verna"
                value={formData.car}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="modal-service">Interested Service</label>
              <select
                id="modal-service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="10H Ceramic Coating">10H Ceramic Coating (3-5 Years)</option>
                <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                <option value="Graphene Matrix Coating">Graphene Matrix Coating</option>
                <option value="Multi-Stage Paint Correction">Multi-Stage Paint Correction</option>
                <option value="Interior Steam & Leather Spa">Interior Steam & Leather Spa</option>
                <option value="Hyper Foam Wash">Hyper Foam Wash & Decontamination</option>
                <option value="3-Month Wash Club">3-Month Maintenance Wash Club</option>
                <option value="Ceramic Armor Sovereign">Ceramic Armor Sovereign (3-Year)</option>
                <option value="Apex PPF Armor">Apex PPF Armor (Full Body)</option>
                <option value="Free Studio Paint Inspection">Free Studio Paint Inspection</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modal-date">Preferred Booking Date</label>
            <input
              type="date"
              id="modal-date"
              className="form-input"
              min={todayDateString}
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modal-notes">Specific Requests / Paint Defects (Optional)</label>
            <textarea
              id="modal-notes"
              className="form-textarea"
              rows="3"
              placeholder="Tell us if you have swirls, scratches, or prefer pickup & drop in Delhi NCR..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            id="modal-submit-btn"
            className="btn btn-primary modal-submit-btn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Confirm & Send to Studio WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
