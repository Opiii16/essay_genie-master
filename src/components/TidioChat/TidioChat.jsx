import React, { useState } from 'react';

const TidioChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
    // Simulate bot response
    setTimeout(() => {
      if (inputValue.toLowerCase().includes('hey') || inputValue.toLowerCase().includes('hi')) {
        setMessages(prev => [...prev, { text: "Hi there! What can I help you with?", sender: "bot" }]);
      } else {
        setMessages(prev => [...prev, { text: "I'm an AI assistant. How can I help you today?", sender: "bot" }]);
      }
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={{ 
      marginLeft: '20px', // Added 20px left margin
      maxWidth: '400px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Chat with Soma</h3>
      
      <div style={{ 
        height: '300px', 
        overflowY: 'auto',
        marginBottom: '16px',
        padding: '8px',
        backgroundColor: 'white',
        borderRadius: '4px'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            margin: '8px 0'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
              backgroundColor: msg.sender === 'user' ? '#007bff' : '#e9ecef',
              color: msg.sender === 'user' ? 'white' : 'black'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {!isConnected && (
        <div style={{ color: 'red', marginBottom: '8px' }}>
          Connection error - working in offline mode
        </div>
      )}

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginRight: '8px'
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TidioChat;
