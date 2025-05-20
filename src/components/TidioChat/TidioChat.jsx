import React, { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    // Load Tidio script
    const script = document.createElement('script');
    script.src = "//code.tidio.co/YOUR_TIDIO_KEY.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      const tidioScript = document.querySelector('#tidio-chat-code');
      if (tidioScript) {
        document.body.removeChild(tidioScript);
      }
    };
  }, []);

  // Optional: Custom button to trigger Tidio chat
  const openTidioChat = () => {
    if (window.tidioChatApi) {
      window.tidioChatApi.open();
    } else {
      console.log('Tidio chat not loaded yet');
    }
  };

  return (
    <div className="tidio-wrapper">
      {/* Optional custom trigger button */}
      <button 
        onClick={openTidioChat}
        className="tidio-custom-button"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#2D3748',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9998,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        aria-label="Open live chat"
      >
        💬
      </button>
    </div>
  );
};

export default TidioChat;