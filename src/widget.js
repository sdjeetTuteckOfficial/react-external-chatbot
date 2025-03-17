import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './Chatbot';

const mountChatbot = () => {
  if (document.getElementById('chatbot-container')) return; // Prevent multiple instances

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  ReactDOM.render(<Chatbot />, chatbotContainer);
};

// Expose loadChatbot globally for external use
window.loadChatbot = mountChatbot;
