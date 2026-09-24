import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Contact Us</h1>
      
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center'}}>
        <motion.div 
          style={{flex: '1', minWidth: '300px', background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
             <img src="/images/logo.jpg" alt="JMD DJ Mascot" style={{width: '150px', borderRadius: '50%', border: '4px solid var(--gold)'}} />
             <h2 style={{color: 'var(--maroon)', marginTop: '15px'}}>JMD DJ</h2>
          </div>

          <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div style={{background: 'var(--maroon)', color: 'white', padding: '10px', borderRadius: '50%'}}>
              <Phone size={24} />
            </div>
            <div>
              <h4 style={{margin: 0}}>Call Us (Main)</h4>
              <p style={{margin: 0, fontSize: '1.2rem'}}>+91 94522 11014</p>
            </div>
          </div>

          <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div style={{background: 'var(--maroon)', color: 'white', padding: '10px', borderRadius: '50%'}}>
              <Phone size={24} />
            </div>
            <div>
              <h4 style={{margin: 0}}>Alternate Number</h4>
              <p style={{margin: 0, fontSize: '1.2rem'}}>+91 70540 75703</p>
            </div>
          </div>

          <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div style={{background: 'var(--maroon)', color: 'white', padding: '10px', borderRadius: '50%'}}>
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{margin: 0}}>Location</h4>
              <p style={{margin: 0}}>Maghar, Uttar Pradesh</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{flex: '1.5', minWidth: '300px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114002.50284489816!2d83.03362145322961!3d26.75708899890989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39916d2b4f9715a3%3A0xbcc0e2b141973ff2!2sMaghar%2C%20Uttar%20Pradesh%20271825!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0, minHeight: '400px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
