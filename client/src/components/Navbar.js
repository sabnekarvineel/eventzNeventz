import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (callback) => {
    callback();
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', callback: navLinks.home },
    { label: 'About', callback: navLinks.about },
    { label: 'Services', callback: navLinks.services },
    { label: 'Testimonials', callback: navLinks.testimonials },
    { label: 'Why Choose Us', callback: navLinks.whyChoose },
    { label: 'Contact', callback: navLinks.contact }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick(navLinks.home)}>
          <span className="logo-icon">✨</span>
          EventzNEventz
        </div>
        
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <span 
                className="nav-link" 
                onClick={() => handleNavClick(item.callback)}
              >
                {item.label}
              </span>
            </li>
          ))}
          <li className="nav-item book-btn-container">
            <button 
              className="btn btn-primary book-btn"
              onClick={() => handleNavClick(navLinks.booking)}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
