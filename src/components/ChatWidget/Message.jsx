import React from 'react';
import './ChatWidget.css';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <div className="message-content">
        {message.text}
      </div>
      <div className="message-timestamp">
        {message.timestamp}
      </div>
    </div>
  );
};

export default Message;
