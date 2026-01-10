# EventzNEventz - Premium Event Landing Website

A complete MERN stack premium event landing website with no authentication required. Built with React, Express, Node.js, and pure CSS.

## Features

✨ **10 Core Sections:**
- Hero/Landing Section with smooth scrolling CTAs
- About Us with animated counters
- Services Grid with 6 event types
- Featured Events Showcase
- Slot Booking Form (no login required)
- Happy Clients Testimonials Carousel
- Why Choose Us Section
- Contact Form with Google Maps
- Call-to-Action Banner
- Premium Footer

🎨 **Design:**
- Dark luxury theme with gold accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- 100% CSS styling (no external CSS frameworks)
- Gradient backgrounds and custom components

⚙️ **Tech Stack:**
- **Frontend:** React 18
- **Backend:** Express.js
- **Styling:** Pure CSS3
- **HTTP Client:** Axios
- **No Database:** In-memory storage

## Project Structure

```
EventzNEventz/
├── server/
│   ├── server.js          # Express server
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── FeaturedEvents.js
│   │   │   ├── Booking.js
│   │   │   ├── Testimonials.js
│   │   │   ├── WhyChooseUs.js
│   │   │   ├── Contact.js
│   │   │   ├── CTA.js
│   │   │   ├── Footer.js
│   │   │   └── [individual .css files]
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── .env
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Server Dependencies

```bash
cd server
npm install
```

### Step 2: Install Client Dependencies

```bash
cd client
npm install
```

### Step 3: Start the Backend Server

From the `server` folder:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The server will run on `http://localhost:5000`

### Step 4: Start the React App

From the `client` folder (in a new terminal):
```bash
npm start
```

The app will open at `http://localhost:3000`

## API Endpoints

### Booking Endpoint
**POST** `/api/bookings`
```json
{
  "name": "John Doe",
  "phone": "+1234567890",
  "email": "john@example.com",
  "eventType": "Weddings",
  "date": "2024-06-15",
  "time": "02:00 PM",
  "attendees": "150",
  "notes": "Special requests..."
}
```

### Contact Endpoint
**POST** `/api/contact`
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Your message..."
}
```

## Features Breakdown

### 1. Hero Section
- Full-screen landing with gradient orbs
- Smooth scroll to booking & contact sections
- Premium typography and animations

### 2. About Section
- Brand story and mission
- Animated counter stats:
  - 15+ Years of Experience
  - 500+ Events Completed
  - 2000+ Happy Clients

### 3. Services Section
- 6 service cards with emoji icons:
  - Weddings
  - Corporate Events
  - Music & Concerts
  - Tech & College Events
  - Private Parties
  - Community Events
- Hover animations on cards

### 4. Featured Events
- 4 showcase event cards
- Event details with dates and locations
- Quick booking action

### 5. Booking Form
- No login required
- Form fields:
  - Full Name, Phone, Email
  - Event Type Dropdown
  - Date Picker
  - Time Slot Selection
  - Number of Attendees
  - Special Requests Textarea
- Real-time validation
- Success/Error messages

### 6. Testimonials
- Auto-sliding carousel (5 seconds)
- Manual navigation controls
- Star ratings
- Pause on hover

### 7. Why Choose Us
- 6 feature blocks:
  - Experienced Team
  - On-Time Execution
  - Transparent Pricing
  - Custom Planning
  - 24/7 Support
  - Premium Quality

### 8. Contact Section
- Contact form (name, email, message)
- Contact info display:
  - Phone number
  - Email address
  - Physical address
- Social media links
- WhatsApp click-to-chat integration
- Embedded Google Map

### 9. CTA Banner
- Eye-catching conversion section
- Prominent booking button

### 10. Footer
- Brand logo and tagline
- Quick navigation links
- Social media icons
- Copyright information

## Styling Highlights

- **Dark Theme:** `#0a0a0a` primary background
- **Gold Accent:** `#d4af37` primary color
- **Smooth Transitions:** 0.3s ease on all interactive elements
- **Responsive Grid:** Auto-fit columns for all sections
- **Custom Scrollbar:** Gold-themed scrollbar styling
- **Glassmorphism:** Semi-transparent elements with backdrop blur
- **Gradient Overlays:** Multiple gradient backgrounds for depth

## Customization

### Colors
Update the primary colors in CSS files:
- Primary Gold: `#d4af37`
- Dark Background: `#0a0a0a`
- Card Background: `#1a1a1a`, `#2a2a2a`

### Content
- Update company name and contact info in Footer & Contact sections
- Modify testimonials in Testimonials.js
- Change services in Services.js
- Update featured events in FeaturedEvents.js

### Animations
- Modify animation durations in CSS files
- Adjust transition timings for different effects
- Update Intersection Observer threshold in About.js for counter animations

## Performance Tips

1. Image optimization (use WebP format)
2. Code splitting for components
3. Lazy loading for sections
4. CDN for static assets
5. Minify CSS and JavaScript for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- [ ] Add payment gateway integration
- [ ] Email confirmation system
- [ ] Admin dashboard
- [ ] Real database integration (MongoDB)
- [ ] Blog section
- [ ] Photo gallery with lightbox
- [ ] Video testimonials
- [ ] Booking calendar with real-time availability

## License

Free to use and modify for your event business.

## Support

For questions or support, contact: hello@eventzneventz.com

---

**Built with ❤️ for premium event planning**
