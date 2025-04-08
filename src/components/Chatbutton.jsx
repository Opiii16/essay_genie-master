import React from 'react';
// import './ChatButton.css'; // Import CSS for styling

function ChatButton() {
  return (
    <button className="simple-chat-button" type="button">
      <span>Chat with Soma</span>
      <span role="img" aria-label="speech bubble" className="chat-icon">💬</span>
    </button>
  );
}

export default ChatButton;