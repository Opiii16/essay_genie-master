import React, { useState } from 'react';

const TidioChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How are you?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
    setTimeout(() => {
      if (inputValue.toLowerCase().includes('hey') || inputValue.toLowerCase().includes('hi')) {
        setMessages(prev => [...prev, { text: "I'm an AI assistant. How can I help you today?", sender: "bot" }]);
      } else {
        setMessages(prev => [...prev, { text: "Yes i can!!! Please hold on for a minute while our support team connects with you...Thank you for reaching out", sender: "bot" }]);
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
      {/* EssayGenie Icon */}
      <div 
        onClick={toggleChat}
        style={{
          position: 'absolute',
          bottom: '0',
          right: isChatOpen ? '380px' : '0',
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
          border: '1px solid #ccc',
          background: 'linear-gradient(135deg, #0077b6, #00b4d8)'
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

      {/* Chat Widget */}
      {isChatOpen && (
        <div style={{ 
          width: '350px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '0',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {/* Chat header with gradient */}
          <div style={{
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #0077b6, #7400b8)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0 }}>Chat with Soma</h3>
            <button 
              onClick={toggleChat}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '0',
                margin: '0'
              }}
            >
              ×
            </button>
          </div>
          
          {/* Chat messages */}
          <div style={{ 
            height: '250px', 
            overflowY: 'auto',
            padding: '16px',
            backgroundColor: 'white'
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
                  background: msg.sender === 'user' 
                    ? 'linear-gradient(135deg, #0077b6, #00b4d8)' 
                    : 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  color: msg.sender === 'user' ? 'white' : 'black',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div style={{ 
            padding: '12px 16px',
            backgroundColor: '#f1f1f1',
            borderTop: '1px solid #ddd'
          }}>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  marginRight: '8px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, #0077b6, #7400b8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    opacity: 0.9
                  }
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TidioChat;
