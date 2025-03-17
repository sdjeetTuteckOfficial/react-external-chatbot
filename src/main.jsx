import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from './Chatbot';

const mountChatbot = () => {
  if (document.getElementById('chatbot-container')) return; // Prevent duplicate instances

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  const root = ReactDOM.createRoot(chatbotContainer);
  root.render(<Chatbot />);
};

// Expose globally
window.loadChatbot = mountChatbot;
