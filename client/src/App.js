import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import HappyClients from './components/HappyClients';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const bookingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHero = () => scrollToSection(heroRef);
  const scrollToAbout = () => scrollToSection(aboutRef);
  const scrollToServices = () => scrollToSection(servicesRef);
  const scrollToBooking = () => scrollToSection(bookingRef);
  const scrollToTestimonials = () => scrollToSection(testimonialsRef);
  const scrollToWhyChoose = () => scrollToSection(whyChooseRef);
  const scrollToContact = () => scrollToSection(contactRef);

  const navLinks = {
    home: scrollToHero,
    about: scrollToAbout,
    services: scrollToServices,
    booking: scrollToBooking,
    testimonials: scrollToTestimonials,
    whyChoose: scrollToWhyChoose,
    contact: scrollToContact
  };

  return (
    <div className="App">
      <Navbar navLinks={navLinks} />
      <section ref={heroRef}>
        <Hero scrollToBooking={scrollToBooking} scrollToContact={scrollToContact} />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={servicesRef}>
        <Services scrollToBooking={scrollToBooking} />
      </section>
      <section ref={bookingRef}>
        <Booking />
      </section>
      <section ref={testimonialsRef}>
         <Testimonials />
       </section>
       <section>
         <HappyClients />
       </section>
       <section ref={whyChooseRef}>
         <WhyChooseUs />
       </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <section>
        <CTA scrollToBooking={scrollToBooking} />
      </section>
      <Footer scrollToHero={scrollToHero} />
    </div>
  );
}

export default App;
