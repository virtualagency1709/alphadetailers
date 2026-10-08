import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: initialService || '10H Ceramic Coating',
    date: '',
    notes: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
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
    window.open(`https://wa.me/919696546862?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      id="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <button className="modal-close-btn" aria-label="Close dialog" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <h3 className="modal-title" id="modal-title">BOOK YOUR <span className="text-gradient-red">STUDIO SLOT</span></h3>
          <p className="modal-desc">Reserve your car's climate-controlled bay at Alpha Detailers Delhi.</p>
        </div>

        <form id="booking-form" onSubmit={handleSubmit}>
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
              rows="2"
              placeholder="Tell us if you have swirls, scratches, or prefer pickup & drop in Delhi NCR..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Confirm & Send to Studio WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
