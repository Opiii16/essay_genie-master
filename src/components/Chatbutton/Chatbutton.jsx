import React, { useState } from 'react';
import './ChatButton.css';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle the chat window
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [newMessage, setNewMessage] = useState(''); // State for the current message input

  // Function to toggle chat window visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Function to handle message sending
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]); // Add new message
      setNewMessage(''); // Clear input field
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'Soma', text: 'How can I help you?' }, // Simulate Soma's reply
        ]);
      }, 1000); // Simulate response delay
    }
  };

  return (
    <div>
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
            <button onClick={toggleChat} className="close-btn">X</button>
          </div>
          <div className="chat-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === 'You' ? 'message-sent' : 'message-received'}`}>
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <input 
                type="text" 
                className="chat-input" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Type a message..." 
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Send message on Enter key
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
