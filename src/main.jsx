import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from './Chatbot';

// Define the chatbot mounting function
const mountChatbot = () => {
  // Prevent multiple instances
  if (document.getElementById('chatbot-container')) return;

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  ReactDOM.createRoot(chatbotContainer).render(<Chatbot />);
};

// ✅ Ensure `loadChatbot` is defined on the window object
window.loadChatbot = mountChatbot;

// ✅ Call `loadChatbot()` only after it's defined
window.onload = () => {
  if (typeof window.loadChatbot === 'function') {
    window.loadChatbot();
  }
};
