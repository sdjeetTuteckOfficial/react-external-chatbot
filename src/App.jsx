import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './Chatbot'; // Ensure Chatbot is in a separate file

const mountChatbot = () => {
  if (document.getElementById('chatbot-container')) return; // Prevent multiple instances

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  ReactDOM.render(<Chatbot />, chatbotContainer);
};

// Expose globally so external websites can call window.loadChatbot()
window.loadChatbot = mountChatbot;
