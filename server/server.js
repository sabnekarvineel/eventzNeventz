const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Business email
const BUSINESS_EMAIL = 'eventzneventz@gmail.com';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for bookings and inquiries
let bookings = [];
let inquiries = [];

// Routes

// Booking endpoint
app.post('/api/bookings', (req, res) => {
  const { name, phone, email, eventType, date, time, attendees, notes } = req.body;

  // Validation
  if (!name || !phone || !email || !eventType || !date || !time || !attendees) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const booking = {
    id: Date.now(),
    name,
    phone,
    email,
    eventType,
    date,
    time,
    attendees,
    notes,
    createdAt: new Date()
  };

  bookings.push(booking);

  console.log(`📅 New Booking Received:
  Name: ${name}
  Phone: ${phone}
  Email: ${email}
  Event Type: ${eventType}
  Date: ${date}
  Time: ${time}
  Attendees: ${attendees}
  Notes: ${notes}
  
  📧 Send confirmation email to: ${email}
  📧 Business notification to: ${BUSINESS_EMAIL}
  `);

  res.status(201).json({
    message: 'Booking successful! We will contact you soon.',
    booking
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const inquiry = {
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date()
  };

  inquiries.push(inquiry);

  console.log(`💬 New Contact Message Received:
  Name: ${name}
  Email: ${email}
  Message: ${message}
  
  📧 Business notification to: ${BUSINESS_EMAIL}
  `);

  res.status(201).json({
    message: 'Message received! We will get back to you soon.',
    inquiry
  });
});

// Get all bookings (for testing)
app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

// Get all inquiries (for testing)
app.get('/api/inquiries', (req, res) => {
  res.json(inquiries);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
