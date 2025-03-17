import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatbotRef = useRef(null);

  // Handle clicks outside the chatbot to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Function to send messages
  const sendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Hello! How can I assist you today? 😊', sender: 'bot' },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#0078FF',
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          ref={chatbotRef}
          style={{
            width: '350px',
            height: '450px',
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '80px',
            right: '0',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: '#0078FF',
              color: '#fff',
              padding: '14px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Chatbot
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '12px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? '#0078FF' : '#F0F0F0',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  padding: '10px 14px',
                  borderRadius: '18px',
                  marginBottom: '5px',
                  maxWidth: '75%',
                  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: '#F0F0F0',
                  color: '#000',
                  padding: '10px 14px',
                  borderRadius: '18px',
                  maxWidth: '75%',
                  fontSize: '14px',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}
              >
                <span style={{ animation: 'blink 1s infinite' }}>⠿</span>
                <span style={{ animation: 'blink 1s infinite 0.2s' }}>⠿</span>
                <span style={{ animation: 'blink 1s infinite 0.4s' }}>⠿</span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div
            style={{
              display: 'flex',
              borderTop: '1px solid #ddd',
              padding: '10px',
              background: '#fff',
            }}
          >
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
              }}
              placeholder='Type a message...'
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: '8px',
                padding: '10px 14px',
                background: '#0078FF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background 0.3s ease-in-out',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Keyframe Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
