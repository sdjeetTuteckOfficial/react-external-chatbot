import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatbotRef = useRef(null);

  // Function to handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setOpen(false); // Close chatbot when clicking outside
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

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm a chatbot! How can I help?", sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <div
      style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}
    >
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#0078FF',
          border: 'none',
          color: '#fff',
          fontSize: '30px',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          ref={chatbotRef}
          style={{
            width: '320px',
            height: '400px',
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '80px',
            right: '0',
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          <div
            style={{
              background: '#0078FF',
              color: '#fff',
              padding: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Chatbot
          </div>

          <div
            style={{
              flex: 1,
              padding: '10px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? '#0078FF' : '#ddd',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  marginBottom: '5px',
                  maxWidth: '75%',
                }}
              >
                {msg.text}
              </div>
            ))}
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
                padding: '8px 12px',
                background: '#0078FF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
