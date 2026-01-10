import React from 'react';
import './FeaturedEvents.css';

function FeaturedEvents({ scrollToBooking }) {
  const events = [
    {
      id: 1,
      title: 'Summer Music Festival 2024',
      date: '15 June 2024',
      location: 'Central Park, City',
      description: 'Experience the biggest music festival with top artists and amazing vibes.',
      image: '🎭'
    },
    {
      id: 2,
      title: 'Tech Summit 2024',
      date: '22 July 2024',
      location: 'Innovation Hub, Downtown',
      description: 'The largest tech conference bringing together innovators and leaders.',
      image: '🚀'
    },
    {
      id: 3,
      title: 'Winter Wedding Showcase',
      date: '10 December 2024',
      location: 'Grand Ballroom',
      description: 'Premium wedding showcase featuring the latest trends and vendors.',
      image: '💎'
    },
    {
      id: 4,
      title: 'Corporate Gala Dinner',
      date: '28 February 2024',
      location: 'Five-Star Hotel',
      description: 'Elegant gala dinner for corporate partners and industry leaders.',
      image: '🥂'
    }
  ];

  return (
    <section className="featured-events">
      <div className="container">
        <h2 className="section-title">Featured Events</h2>
        <p className="section-subtitle">Check out our upcoming premium events</p>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card card">
              <div className="event-image">{event.image}</div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-meta">
                <span className="event-date">📅 {event.date}</span>
                <span className="event-location">📍 {event.location}</span>
              </div>
              <p className="event-description">{event.description}</p>
              <button className="btn btn-primary" onClick={scrollToBooking}>
                Book This Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedEvents;
