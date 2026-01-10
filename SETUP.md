# Quick Setup Guide

## 📋 Prerequisites
- Node.js installed (download from nodejs.org)
- Terminal/Command Prompt access

## 🚀 Quick Start (5 minutes)

### Step 1: Open Terminal in Project Root
Navigate to: `C:\Users\Sabnekar Vineel\OneDrive\Desktop\EventzNEventz`

### Step 2: Install Server Dependencies
```bash
cd server
npm install
```

### Step 3: Install Client Dependencies  
```bash
cd ../client
npm install
```

### Step 4: Start Backend Server
Open a new terminal and run from server folder:
```bash
cd server
npm start
```
✅ Backend running on http://localhost:5000

### Step 5: Start Frontend App
Open another terminal and run from client folder:
```bash
cd client
npm start
```
✅ Frontend opens at http://localhost:3000

## ✨ What's Ready to Use

### Sections Implemented:
1. ✅ Navbar with smooth navigation
2. ✅ Hero section with animations
3. ✅ About us with counter stats
4. ✅ Services grid (6 services)
5. ✅ Featured events showcase
6. ✅ Booking form (no login needed)
7. ✅ Testimonials carousel
8. ✅ Why choose us
9. ✅ Contact form with map
10. ✅ CTA banner
11. ✅ Footer

### Features:
- 🎨 Dark luxury theme with gold accents
- 📱 Fully responsive design
- ⚡ Smooth scrolling navigation
- 💬 Contact & Booking forms
- 🎯 No database needed
- 🔒 No authentication required
- 100% CSS styling

## 📝 File Structure

```
EventzNEventz/
├── server/
│   ├── server.js (Backend API)
│   └── package.json
├── client/
│   ├── public/ (HTML)
│   ├── src/
│   │   ├── components/ (All sections)
│   │   ├── App.js (Main app)
│   │   └── App.css (Global styles)
│   └── package.json
└── README.md (Full documentation)
```

## 🔧 Troubleshooting

### Port 5000 already in use
```bash
# Change PORT in .env file
# Or kill the process using that port
```

### Port 3000 already in use
```bash
# React will ask to use a different port
# Press 'Y' to use port 3001
```

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

## 📞 API Testing

### Test Booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John",
    "phone":"1234567890",
    "email":"john@test.com",
    "eventType":"Weddings",
    "date":"2024-06-15",
    "time":"02:00 PM",
    "attendees":"100"
  }'
```

### Test Contact
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Jane",
    "email":"jane@test.com",
    "message":"Hello!"
  }'
```

## 🎯 Next Steps

1. **Customize Content:**
   - Update company name/info in components
   - Change testimonials in Testimonials.js
   - Update services list in Services.js

2. **Add Images:**
   - Replace emoji icons with actual images
   - Add event photos
   - Upload team photos

3. **Connect Email:**
   - Integrate with email service (Nodemailer, SendGrid)
   - Send confirmation emails on bookings

4. **Deploy:**
   - Frontend: Vercel, Netlify
   - Backend: Heroku, Railway, Render

## 📚 Learning Resources

- React Docs: https://react.dev
- Express Docs: https://expressjs.com
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- Responsive Design: https://web.dev/responsive-web-design-basics/

## 💡 Tips

- Keep backend running in one terminal
- Use different terminal for frontend
- Clear browser cache if styles don't update
- Check browser console (F12) for errors
- Mobile test: Open DevTools → Toggle device toolbar

## 🎉 You're Ready!

Your premium event landing website is now running. Start customizing and enjoy!

Questions? Check README.md for more details.
