const express = require('express');
const cors = require('cors');
const mailgun = require('mailgun.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Business email
const BUSINESS_EMAIL = 'eventzneventz@gmail.com';

// Mailgun configuration
const mg = new mailgun.Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: process.env.MAILGUN_DOMAIN || ''
});

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for bookings and inquiries
let bookings = [];
let inquiries = [];

// Routes

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
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

  // Send customer confirmation email
  const customerMailOptions = {
    from: BUSINESS_EMAIL,
    to: email,
    subject: 'Booking Confirmation - EventzNEventz',
    html: `
      <h2>Booking Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for booking with EventzNEventz! We have received your booking request.</p>
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Event Type:</strong> ${eventType}</li>
        <li><strong>Event Date:</strong> ${date}</li>
        <li><strong>Preferred Time:</strong> ${time}</li>
        <li><strong>Number of Attendees:</strong> ${attendees}</li>
        <li><strong>Special Requests:</strong> ${notes || 'None'}</li>
      </ul>
      <p>We will contact you soon at ${phone} to discuss further details.</p>
      <p>Best regards,<br>EventzNEventz Team</p>
    `
  };

  // Send business notification email
  const businessMailOptions = {
    from: BUSINESS_EMAIL,
    to: BUSINESS_EMAIL,
    subject: 'New Booking - EventzNEventz',
    html: `
      <h2>New Booking Received</h2>
      <h3>Customer Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h3>Event Details:</h3>
      <ul>
        <li><strong>Event Type:</strong> ${eventType}</li>
        <li><strong>Event Date:</strong> ${date}</li>
        <li><strong>Preferred Time:</strong> ${time}</li>
        <li><strong>Number of Attendees:</strong> ${attendees}</li>
        <li><strong>Special Requests:</strong> ${notes || 'None'}</li>
      </ul>
    `
  };

  try {
    // Send customer confirmation email
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: BUSINESS_EMAIL,
      to: email,
      subject: customerMailOptions.subject,
      html: customerMailOptions.html
    });

    // Send business notification email
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: BUSINESS_EMAIL,
      to: BUSINESS_EMAIL,
      subject: businessMailOptions.subject,
      html: businessMailOptions.html
    });

    console.log(`📅 New Booking Received:
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Event Type: ${eventType}
    Date: ${date}
    Time: ${time}
    Attendees: ${attendees}
    Notes: ${notes}
    
    ✅ Confirmation email sent to: ${email}
    ✅ Business notification sent to: ${BUSINESS_EMAIL}
    `);

    res.status(201).json({
      message: 'Booking successful! We will contact you soon.',
      booking
    });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(201).json({
      message: 'Booking received but email notification failed. We will contact you soon.',
      booking
    });
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
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

  // Send customer acknowledgment email
  const customerMailOptions = {
    from: BUSINESS_EMAIL,
    to: email,
    subject: 'Message Received - EventzNEventz',
    html: `
      <h2>Thank You for Contacting Us</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p><strong>Your Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p>Our team will contact you shortly.</p>
      <p>Best regards,<br>EventzNEventz Team</p>
    `
  };

  // Send business notification email
  const businessMailOptions = {
    from: BUSINESS_EMAIL,
    to: BUSINESS_EMAIL,
    subject: 'New Contact Message - EventzNEventz',
    html: `
      <h2>New Contact Message Received</h2>
      <h3>Sender Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    // Send customer acknowledgment email
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: BUSINESS_EMAIL,
      to: email,
      subject: customerMailOptions.subject,
      html: customerMailOptions.html
    });

    // Send business notification email
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: BUSINESS_EMAIL,
      to: BUSINESS_EMAIL,
      subject: businessMailOptions.subject,
      html: businessMailOptions.html
    });

    console.log(`💬 New Contact Message Received:
    Name: ${name}
    Email: ${email}
    Message: ${message}
    
    ✅ Acknowledgment sent to: ${email}
    ✅ Business notification sent to: ${BUSINESS_EMAIL}
    `);

    res.status(201).json({
      message: 'Message received! We will get back to you soon.',
      inquiry
    });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(201).json({
      message: 'Message received but email notification failed. We will get back to you soon.',
      inquiry
    });
  }
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
