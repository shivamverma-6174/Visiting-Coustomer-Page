import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-brand">
        <img src="/images/logo.jpg" alt="JMD DJ Logo" />
        <h1>JMD <span>DJ</span></h1>
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>

      <div className="nav-contact">
        <a href="tel:+919452211014" className="btn btn-primary">
          <PhoneCall size={20} /> 
          <span className="hidden md:inline">Call Now</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
