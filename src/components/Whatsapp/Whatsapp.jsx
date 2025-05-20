import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '0717778496'; // Replace with your actual number
  const message = 'Hello EssayGenie, I need help with my essay!';
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '1000'
    }}>
      <button 
        onClick={handleClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '15px 25px',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          fontSize: '16px'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp style={{ fontSize: '24px' }} />
        <span>Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;