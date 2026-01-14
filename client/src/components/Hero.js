import React from 'react';
import './Hero.css';
import CelebrationAnimation from './CelebrationAnimation';

function Hero({ scrollToBooking, scrollToContact }) {
  return (
    <section className="hero">
      <CelebrationAnimation />
      
      <div className="hero-content">
        <h1 className="hero-title">Create Unforgettable Events</h1>
        <p className="hero-subtitle">
          Premium event planning & booking for weddings, corporate events, concerts, and more
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToBooking}>
            Book Your Slot
          </button>
          <button className="btn btn-secondary" onClick={scrollToContact}>
            Contact Event Team
          </button>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
}

export default Hero;
