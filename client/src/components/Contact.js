import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS
emailjs.init('RbQoUmwLGwPgJmAwt');

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Save contact message to backend
      await axios.post('https://eventzneventz.onrender.com/api/contact', formData);

      // Send confirmation email to customer
      await emailjs.send('service_vahmbbt', 'template_71vzta5', {
        email: formData.email,
        message: formData.message
      });

      // Send business notification
      await emailjs.send('service_vahmbbt', 'template_71vzta5', {
        email: 'eventzneventz@gmail.com',
        message: formData.message
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with our event team</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <div className="info-icon">📲</div>
              <h3>Phone</h3>
              <p>+91 92909 76561</p>
              <p>Available 24/7</p>
            </div>

            <div className="info-block">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>eventzneventz@gmail.com</p>
              <p>Available 24/7</p>
            </div>

            <div className="info-block">
              <div className="info-icon">🗺️</div>
              <h3>Location</h3>
              <p>Shubhodaya Residency</p>
              <p>Spring Fields Colony, Jeedimetla</p>
              <p>Secunderabad, Telangana 500067</p>
            </div>

            <div className="social-links">
              <a href="https://facebook.com/EventzNeventz" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/nk_eventzneventz" target="_blank" rel="noopener noreferrer" className="social-btn instagram-icon" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/narsingh-khadke-615188107/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.736 0-9.646h3.554v1.366c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.738 1.395 3.738 4.393v5.497zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.581 11.019H3.819V9.934h3.099v10.518zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="whatsapp-btn-container">
              <a href="https://wa.me/919290976561" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            {success && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1659381548516!2d78.4128!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sShubhodaya%20Residency%2C%20Spring%20Fields%20Colony%2C%20Jeedimetla%2C%20Secunderabad%2C%20Telangana%20500067!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
