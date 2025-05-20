import React, { useState, useEffect } from 'react';
import './ChatButton.css';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Initial greeting when chat opens
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{ sender: 'Soma', text: 'Hello! How can I assist you today?' }]);
    }
  }, [isChatOpen]);

  // Function to send message to Flask backend
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    // Add user message to chat
    const userMessage = { sender: 'You', text: newMessage };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      // Send message to Flask backend
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage }),
      });

      const data = await response.json();
      
      // Add bot response to chat
      if (data.response) {
        setMessages(prev => [...prev, { sender: 'Soma', text: data.response }]);
      }

      // Close chat if user said 'quit'
      if (data.status === 'end') {
        setTimeout(() => setIsChatOpen(false), 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        sender: 'Soma', 
        text: "Sorry, I'm having trouble connecting. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Button */}
      <button 
        className="btn btn-info chat-button" 
        onClick={toggleChat}
        aria-label="Chat with Soma"
      >
        <span className="chat-text">Chat with Soma</span>
        <span role="img" aria-hidden="true" className="chat-icon">💬</span>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h5>Chat with Soma</h5>
            <button onClick={() => setIsChatOpen(false)} className="close-btn">×</button>
          </div>
          <div className="chat-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`message ${msg.sender === 'You' ? 'message-sent' : 'message-received'}`}
                >
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="message message-received">
                  <strong>Soma:</strong> <span className="typing-indicator">...</span>
                </div>
              )}
            </div>
            <div className="chat-input-container">
              <input 
                type="text" 
                className="chat-input" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Type a message..." 
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button className="send-btn" onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;