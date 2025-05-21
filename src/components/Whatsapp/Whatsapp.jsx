import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '+254717778496';
  const message = 'Hello EssayGenie, I need help with my essay! Can you help please?';
  const preFilledMessage = `Hello! Thank you for contacting EssayGenie.com - the best assignment help platform for all your high school and college needs. Please hold on and save our contact while our support team connects with you. We typically respond within 5 minutes during business hours (9AM-5PM).`;

  const handleClick = () => {
    const useShortMessage = window.confirm("Do you want to send a custom message?");
    const finalMessage = useShortMessage ? message : preFilledMessage;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '1000',
      display: 'flex', 
      alignItems: 'center'
    }}>
      <button 
        onClick={handleClick}
        style={{
          display: 'flex',
          marginLeft: '10px'
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
        
        <FaWhatsapp style={{ fontSize: '24px',display: 'flex', alignItems: 'center' }} />
        <span>Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
