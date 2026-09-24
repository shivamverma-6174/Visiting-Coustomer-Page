import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>JMD DJ</h2>
          <p>The Complete Solution For Your VIP Baarat. Event Full Setup & Baraat on Wheels.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Contact Info</h4>
          <ul>
            <li><Phone size={16} /> +91 94522 11014 (Main)</li>
            <li><Phone size={16} /> +91 70540 75703</li>
            <li><MapPin size={16} /> Maghar, Uttar Pradesh</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JMD DJ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
