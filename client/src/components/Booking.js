import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './Booking.css';

// Initialize EmailJS
emailjs.init('RbQoUmwLGwPgJmAwt');

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    time: '',
    attendees: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const eventTypes = ['Weddings', 'Corporate Events', 'Music & Concerts', 'Tech Events', 'Private Parties', 'Community Events', 'Mice Events'];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.eventType || !formData.date || !formData.time || !formData.attendees) {
      setError('Please fill all required fields');
      return;
    }

    // Phone validation - 10 digits only
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setError('Phone number must be 10 digits');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Save booking to backend
      const response = await axios.post('https://eventzneventz.onrender.com/api/bookings', formData);

      // Send confirmation email via EmailJS
      await emailjs.send('service_vahmbbt', 'template_fn09o7i', {
        to_email: formData.email,
        event_type: formData.eventType,
        event_date: formData.date,
        event_time: formData.time,
        attendees: formData.attendees,
        notes: formData.notes
      });

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        date: '',
        time: '',
        attendees: '',
        notes: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking">
      <div className="container">
        <h2 className="section-title">Book Your Event</h2>
        <p className="section-subtitle">Reserve your slot with us - No login required</p>

        <div className="booking-form-container">
          {success && (
            <div className="success-message">
              ✓ Booking submitted successfully! We'll contact you soon at {formData.email}
            </div>
          )}

          {error && (
            <div className="error-message">
              ✗ {error}
            </div>
          )}

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select an event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Event Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="attendees">Number of Attendees *</label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleChange}
                placeholder="Enter expected number of attendees"
                min="1"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">Special Requests (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requests or preferences?"
                rows="4"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Reserve Your Slot'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
