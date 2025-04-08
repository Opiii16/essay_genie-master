import { useState, useEffect } from 'react';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Mock API connection
  const sendMessage = async (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate API response after 1-2 seconds
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: `I received: "${text}". This is Soma's automated response.`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return { messages, sendMessage, isTyping };
};

export default useChat;
