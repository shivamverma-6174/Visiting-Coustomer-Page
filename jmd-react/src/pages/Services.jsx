import React from 'react';
import { Music, Car, Speaker, Star, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesList = [
    { name: 'DJ (डीजे)', icon: <Music size={30}/>, desc: 'High quality sound setup for all your events.' },
    { name: 'Band Baggi (बैंड बग्गी)', icon: <Star size={30}/>, desc: 'Traditional and royal band baggi for the groom.' },
    { name: 'Bhangada (भांगड़ा)', icon: <Activity size={30}/>, desc: 'Energetic Punjabi Bhangada dancers.' },
    { name: 'Rath (रथ)', icon: <Car size={30}/>, desc: 'Beautiful decorated rath for weddings.' },
    { name: 'Road Light (रोड लाइट)', icon: <Zap size={30}/>, desc: 'Bright and attractive moving lights for the baarat.' },
    { name: 'Vintage Car (विंटेज कार)', icon: <Car size={30}/>, desc: 'Classic vintage cars for a royal entry.' },
    { name: 'Baraat on Wheel (बारात ऑन व्हील)', icon: <Speaker size={30}/>, desc: 'Full mobile DJ setup moving with the baarat (2 Vehicles).' },
    { name: 'Double Decker (डबल डेकर)', icon: <Speaker size={30}/>, desc: 'Massive double decker DJ setup.' },
    { name: 'Road Show (रोड शो)', icon: <Star size={30}/>, desc: 'Complete setup for political or promotional road shows.' },
    { name: 'Event Full Setup', icon: <Speaker size={30}/>, desc: '1 Dedicated vehicle for full event sound and lighting.' },
  ];

  return (
    <div className="page-container">
      <h1 className="section-title">Our Premium Services</h1>
      <p style={{textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: '#555'}}>
        VIP Baarat ke liye hamare paas sabhi suvidhayein uplabdh hain.
      </p>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-img-wrapper" style={{background: 'var(--maroon)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px'}}>
              <div style={{color: 'var(--white)', transform: 'scale(2)'}}>
                {service.icon}
              </div>
            </div>
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
