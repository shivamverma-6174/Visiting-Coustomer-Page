import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a href="https://www.instagram.com/jmd_dj_maghar?stkn=MXB5c251MGtxaTczYQ==" target="_blank" rel="noreferrer" className="float-btn instagram">
        <Instagram size={28} />
      </a>
      <a href="https://wa.me/919452211014" target="_blank" rel="noreferrer" className="float-btn whatsapp">
        <MessageCircle size={28} />
      </a>
      <a href="tel:+919452211014" className="float-btn call">
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingContact;
