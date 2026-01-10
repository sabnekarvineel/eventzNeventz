import React from 'react';
import './CTA.css';

function CTA({ scrollToBooking }) {
  return (
    <section className="cta">
      <div className="cta-background">
        <div className="cta-gradient"></div>
      </div>

      <div className="container cta-content">
        <h2 className="cta-title">Ready to Plan Your Event?</h2>
        <p className="cta-subtitle">
          Don't wait! Reserve your slot now and let us create an unforgettable experience
        </p>
        <button className="btn btn-primary cta-button" onClick={scrollToBooking}>
          Reserve Your Slot Now
        </button>
      </div>
    </section>
  );
}

export default CTA;
