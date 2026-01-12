import React from 'react';
import './Services.css';

function Services({ scrollToBooking }) {
  const services = [
    {
      id: 1,
      title: 'Weddings',
      description: 'Create your dream wedding with our comprehensive planning and execution services.'
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: 'Professional corporate events, conferences, and team building activities.'
    },
    {
      id: 3,
      title: 'Music & Concerts',
      description: 'Bring your favorite artists and create unforgettable concert experiences.'
    },
    {
      id: 4,
      title: 'Tech & College Events',
      description: 'Innovative tech conferences, hackathons, and college festival management.'
    },
    {
      id: 5,
      title: 'Private Parties',
      description: 'Intimate gatherings and celebrations tailored to your preferences.'
    },
    {
      id: 6,
      title: 'Community Events',
      description: 'Large-scale community events and public gatherings with professional management.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive event solutions for every occasion</p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="btn btn-primary service-btn" onClick={scrollToBooking}>
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
