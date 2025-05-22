// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css';

const WhatsAppButton = () => {
  const whatsappNumber = '+254791042547';
  const message = 'Hello EssayGenie, I need help with my essay! Can you help please?';
  const preFilledMessage = `Hello! Thank you for contacting EssayGenie.com - the best assignment help platform for all your high school and college needs. Please hold on and save our contact while our support team connects with you. We typically respond within 5 minutes during business hours (9AM-5PM).`;

  const handleClick = () => {
    const useShortMessage = window.confirm("Do you want to send a custom message?");
    const finalMessage = useShortMessage ? message : preFilledMessage;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`, '_blank');
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
