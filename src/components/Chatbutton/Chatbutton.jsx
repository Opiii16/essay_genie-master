import React from 'react';
import './ChatButton.css'; // Uncomment this line

const ChatButton = ({ onClick }) => {
  return (
    <button 
      className="btn btn-info chat-button" 
      onClick={onClick}
      aria-label="Chat with Soma"
    >
      <span className="chat-text">Chat with Soma</span>
      <span role="img" aria-hidden="true" className="chat-icon">💬</span>
    </button>
  );
};

export default ChatButton;

