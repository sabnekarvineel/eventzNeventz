import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [stats, setStats] = useState({
    experience: 0,
    events: 0,
    clients: 0
  });
  const [selectedVideo, setSelectedVideo] = useState(null);

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

          <div className="gallery-section">
          <h2 className="gallery-title">Our Work Showcase</h2>
          <div className="gallery-grid">
           <div className="gallery-item">
             <img src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1768217651/b29cbac3-62c2-4d8e-9c49-6a8f56b09242_txesng.jpg" alt="Wedding Event" />
             <div className="gallery-overlay">
               <p>Luxury Wedding</p>
             </div>
           </div>
           <div className="gallery-item">
             <img src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1768217736/bf76e637-3c2a-438b-9682-8be6c21a4450_hlmocp.jpg" alt="Corporate Event" />
             <div className="gallery-overlay">
               <p>Corporate Conference</p>
             </div>
           </div>
           <div className="gallery-item">
             <img src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1737209243/i3h8ueylpukax4tj3zey.jpg" alt="Birthday Party" />
             <div className="gallery-overlay">
               <p>Birthday Celebration</p>
             </div>
           </div>
           <div className="gallery-item">
             <img src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1737210946/qqstrzncymdvl5u4kdxc.jpg" alt="Concert Event" />
             <div className="gallery-overlay">
               <p>Live Entertainment</p>
             </div>
           </div>
           <div 
             className="gallery-item gallery-video" 
             onClick={() => setSelectedVideo('https://res.cloudinary.com/dqpxq0ljn/video/upload/v1738251580/jxugukgxuwtj910misi5.mp4')}
           >
             <video className="video-preview" muted>
               <source src="https://res.cloudinary.com/dqpxq0ljn/video/upload/v1738251580/jxugukgxuwtj910misi5.mp4" type="video/mp4" />
             </video>
             <div className="video-overlay-play">
               <svg className="play-icon" viewBox="0 0 24 24" fill="white">
                 <path d="M8 5v14l11-7z" />
               </svg>
             </div>
             <div className="gallery-overlay">
               <p>Live Entertainment Highlights</p>
             </div>
           </div>
           <div 
             className="gallery-item gallery-video" 
             onClick={() => setSelectedVideo('https://res.cloudinary.com/dqpxq0ljn/video/upload/v1768221117/WhatsApp_Video_2026-01-11_at_6.39.01_PM_ucpr8u.mp4')}
           >
             <video className="video-preview" muted>
               <source src="https://res.cloudinary.com/dqpxq0ljn/video/upload/v1768221117/WhatsApp_Video_2026-01-11_at_6.39.01_PM_ucpr8u.mp4" type="video/mp4" />
             </video>
             <div className="video-overlay-play">
               <svg className="play-icon" viewBox="0 0 24 24" fill="white">
                 <path d="M8 5v14l11-7z" />
               </svg>
             </div>
             <div className="gallery-overlay">
               <p>Wedding Highlights</p>
             </div>
           </div>
           </div>
           </div>
           </div>

           {selectedVideo && (
           <div className="video-modal" onClick={() => setSelectedVideo(null)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedVideo(null)}>×</button>
              <video controls autoPlay>
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
           </div>
           )}
           </section>
           );
           }
           
           export default About;
