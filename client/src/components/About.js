import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [stats, setStats] = useState({
    experience: 0,
    events: 0,
    clients: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('.about-content');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { experience: 15, events: 500, clients: 2000 };

    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setStats({
        experience: Math.floor(targets.experience * progress),
        events: Math.floor(targets.events * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Crafting extraordinary experiences for over a decade</p>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              EventzNEventz is a premier event planning and coordination company dedicated to transforming 
              your visions into unforgettable experiences. With a team of creative professionals, we bring 
              excellence to every detail of your event.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To deliver world-class event experiences that exceed expectations while maintaining 
              transparent communication and competitive pricing.
            </p>

            <div className="founder-section">
              <div className="founder-avatar">
                <img src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1737271198/pc0nk6lvpw1uvkas3kwf.jpg" alt="Narsingh Khadke" />
              </div>
              <div className="founder-info">
                <h4>Narsingh Khadke</h4>
                <p>Founder & Event Director</p>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.experience}+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.events}+</div>
              <div className="stat-label">Events Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
