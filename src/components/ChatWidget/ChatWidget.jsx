import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import useChat from './useChat';
import './ChatWidget.css';

const ChatWidget = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const { messages, sendMessage, isTyping } = useChat();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <h3>Chat with Soma</h3>
        <button onClick={onClose} className="close-chat">×</button>
      </div>
      
      <div className="chat-messages">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="message bot">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWidget;
