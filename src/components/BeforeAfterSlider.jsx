import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let posX = clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;
    const percentage = (posX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className="before-after-section" id="before-after">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" />
            </svg>
            Surgical Paint Restoration
          </div>
          <h2 className="section-title">THE ALPHA <span className="text-gradient-red">TRANSFORMATION</span></h2>
          <p className="section-subtitle">
            Drag the interactive slider to witness how our studio eliminates spiderweb swirls, buffer marks, and deep oxidation into an unblemished, deep-gloss mirror reflection.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="ba-slider-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Image (Underneath) */}
          <div className="ba-image-wrapper ba-image-before">
            <img
              src="/assets/images/paint-before.jpg"
              alt="Car paint with severe swirls and scratches before detailing"
              className="ba-img"
            />
            <div className="ba-badge ba-badge-before">BEFORE: Scratched & Swirled</div>
          </div>

          {/* After Image (Clipped on top) */}
          <div
            className="ba-image-wrapper ba-image-after"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/assets/images/paint-after.jpg"
              alt="Car paint after ceramic coating and paint correction with mirror finish"
              className="ba-img"
            />
            <div className="ba-badge ba-badge-after">AFTER: 10H Ceramic Mirror Shield</div>
          </div>

          {/* Slider Divider & Handle */}
          <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
            <div className="ba-handle-btn">
              <svg viewBox="0 0 24 24">
                <path d="M8 7l-5 5 5 5V7zm8 0v10l5-5-5-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="ba-helper-note">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Click, drag, or touch across the image to inspect micro-detail clarity</span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
