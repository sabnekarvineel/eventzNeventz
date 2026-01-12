import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Experienced Team',
      description: 'Over 15 years of experience with skilled event professionals.'
    },
    {
      id: 2,
      title: 'On-Time Execution',
      description: 'We guarantee timely delivery of all event logistics and services.'
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any queries.'
    },
    {
      id: 4,
      title: 'Premium Quality',
      description: 'Luxury venues and services for unforgettable experiences.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Industry-leading event services and expertise</p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-block">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
