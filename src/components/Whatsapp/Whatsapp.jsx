import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css'; // Optional for additional styling

const WhatsAppButton = () => {
  const whatsappNumber = '1234567890'; // Replace with your actual WhatsApp number
  const message = 'Hello EssayGenie, I need help with my essay!'; // Default message
  
  const handleClick = () => {
    // Open WhatsApp with the predefined message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button-container">
      <button 
        onClick={handleClick}
        className="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;