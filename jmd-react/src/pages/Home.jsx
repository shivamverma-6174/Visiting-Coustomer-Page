import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h2 className="hero-tagline">Baarat on Wheels & Event Setup</h2>
          <h1 className="hero-title">THE COMPLETE SOLUTION FOR YOUR <span>VIP BAARAT</span></h1>
          
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services <ArrowRight size={18} />
            </Link>
            <a href="https://maps.app.goo.gl/Yb4f1cTB7xAJdKDR7" target="_blank" rel="noreferrer" className="btn btn-outline">
              <MapPin size={18} /> Our Location
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 className="section-title" style={{color: 'white'}}>Hamari Gadiyan (Our Setups)</h2>
        <p style={{marginBottom: '30px', fontSize: '1.2rem', color: '#ccc'}}>
          Hamare paas 3 gadiyan hain - 2 Baarat on Wheels aur 1 Event Full Setup gadi. 
          Dekhiye hamara dhamakedar setup!
        </p>
        <div className="video-container">
          {/* Embedding Instagram Reel */}
          <iframe 
            src="https://www.instagram.com/p/DXobtwOEvrK/embed" 
            allowTransparency="true" 
            allowFullScreen="true" 
            frameBorder="0" 
            scrolling="no"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Home;
