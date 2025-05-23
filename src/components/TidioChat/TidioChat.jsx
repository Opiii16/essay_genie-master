import React, { useState } from 'react';

const TidioChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Chatbot response logic
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input === 'quit') {
      return { text: "Goodbye! Have a nice day.", status: 'end' };
    }
    else if (input.match(/hi|hello|hey/)) {
      return { text: ["Hello! How can I assist you today?", "Hi there! How can I help?"][Math.floor(Math.random() * 2)], status: 'continue' };
    }
    else if (input.includes('how are you')) {
      return { text: ["I'm doing great, thanks for asking!", "I'm good, how about you?"][Math.floor(Math.random() * 2)], status: 'continue' };
    }
    else if (input.match(/(.*)assistance(.*)/)) {
      return { text: "I'd be happy to assist you. Could you please share more details about what you need help with? Whether it's course information, technical support, or general guidance, I'm here to help.", status: 'continue' };
    }
    // Service-specific responses
    else if (input.match(/essay writing/i)) {
      return {
        text: "Our Essay Writing service provides custom, plagiarism-free essays tailored to your requirements. To get started, please share your subject, word count, and deadline!",
        status: 'continue'
      };
    }
    else if (input.match(/tutors/i)) {
      return {
        text: "We connect you with expert tutors for 1-on-1 sessions in various subjects. Let me know which subject you need help with and your preferred schedule!",
        status: 'continue'
      };
    }
    else if (input.match(/homework help/i)) {
      return {
        text: "Our Homework Help service provides step-by-step solutions. Please share your specific question or upload the problem you're working on!",
        status: 'continue'
      };
    }
    else if (input.match(/essaygenie ai/i)) {
      return {
        text: "EssayGenie AI can generate draft essays instantly! Just provide your topic and any specific requirements, and I'll create a structured outline or full essay for you.",
        status: 'continue'
      };
    }
    else if (input.match(/sample papers/i)) {
      return {
        text: "We have a library of sample papers across various subjects. Let me know which subject or type of paper you're looking for, and I'll share relevant examples!",
        status: 'continue'
      };
    }
    else if (input.match(/plagiarism/i)) {
      return {
        text: "Our Plagiarism Check tool scans your work against billions of sources. You can upload your file (PDF/DOC) or paste text directly to check for originality.",
        status: 'continue'
      };
    }
    // Other existing responses
    else if (input.match(/(.*)research(.*)/i)) {
      return {
        text: "Our research assistance service helps you find credible sources, structure your literature review, and develop strong arguments. Need help with a specific topic?",
        status: 'continue'
      };
    }
    else if (input.match(/(.*)citation(.*)|(.*)reference(.*)/i)) {
      return {
        text: "We can help with proper citations in APA, MLA, Chicago, or Harvard style. Just let me know which format you need and the sources you're using!",
        status: 'continue'
      };
    }
    else if (input.match(/(.*)thesis(.*)|(.*)dissertation(.*)/i)) {
      return {
        text: "Thesis and dissertation support includes: topic selection, proposal writing, chapter structuring, and editing. Which part are you working on?",
        status: 'continue'
      };
    }
    else if (input.match(/(.*)edit(.*)|(.*)proofread(.*)/i)) {
      return {
        text: "Our editing service checks for grammar, clarity, structure, and academic tone. You can upload your draft for a free sample edit!",
        status: 'continue'
      };
    }
    else if (input.match(/(.*)admission(.*)|(.*)personal statement(.*)/i)) {
      return {
        text: "We specialize in crafting compelling admission essays and personal statements that highlight your unique strengths. Want to discuss your application goals?",
        status: 'continue'
      };
    }
    else if (input.match(/(.*)deadline(.*)/i)) {
      return {
        text: "Facing a tight deadline? Our urgent writing service can deliver quality essays in as little as 3 hours. What's your due date and requirements?",
        status: 'continue'
      };
    }
    else {
      return { text: "Sorry, I didn't understand that. Could you rephrase?", status: 'continue' };
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
    // Get and add bot response after a short delay
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      setMessages(prev => [...prev, { text: response.text, sender: "bot" }]);
      
      // If user said 'quit', close chat after delay
      if (response.status === 'end') {
        setTimeout(() => setIsChatOpen(false), 1500);
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
    // Reset conversation when opening chat
    if (!isChatOpen) {
      setMessages([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '40px', right: '20px', zIndex: 1000 }}>
      {/* Chat Icon */}
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
          src="/assets/images/chatbot.png" 
          alt="Chatbot" 
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