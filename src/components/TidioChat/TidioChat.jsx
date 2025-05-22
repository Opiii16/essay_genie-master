import React, { useState } from 'react';

const TidioChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
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

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div style={{ position: 'fixed', bottom: '40px', right: '20px', zIndex: 1000 }}>
      {/* EssayGenie Icon - Replaced WhatsApp icon */}
      <div 
        onClick={toggleChat}
        style={{
          position: 'absolute',
          bottom: '0',
          right: isChatOpen ? '380px' : '0',
          // backgroundColor: '#000000', // Changed from WhatsApp green to white
          color: 'white',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          transition: 'right 0.3s ease',
          zIndex: 1001,
          border: '1px solid #ccc' // Added border for visibility
        }}
      >
        <img 
          src="/assets/images/essaygenie.png" 
          alt="EssayGenie Chat" 
          style={{
            width: '70px',
            height: '70px',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Chat Widget - No changes below this line */}
      {isChatOpen && (
        <div style={{ 
          width: '350px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>Chat with Soma</h3>
          
          <div style={{ 
            height: '250px', 
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
      )}
    </div>
  );
};

export default TidioChat;