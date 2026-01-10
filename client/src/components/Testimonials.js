import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      event: 'Wedding Planning',
      text: 'EventzNEventz made our wedding day absolutely perfect! Every detail was executed flawlessly.',
      rating: 5,
      avatar: '👰‍♀️'
    },
    {
      id: 2,
      name: 'Michael Chen',
      event: 'Corporate Event',
      text: 'Professional team, great communication, and outstanding execution. Highly recommended!',
      rating: 5,
      avatar: '💼'
    },
    {
      id: 3,
      name: 'Emma Williams',
      event: 'Music Concert',
      text: 'The concert was spectacular! The organization and logistics were impeccable.',
      rating: 5,
      avatar: '🎙️'
    },
    {
      id: 4,
      name: 'David Martinez',
      event: 'Tech Conference',
      text: 'Best tech event I\'ve attended. Amazing venues, great speakers, and perfect timing.',
      rating: 5,
      avatar: '🏆'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Happy Clients</h2>
        <p className="section-subtitle">Over 2000+ satisfied customers worldwide</p>

        <div className="testimonials-container">
          <div className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="testimonial-card card">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-event">{testimonial.event}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button prev" onClick={handlePrev}>
            ❮
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            ❯
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
