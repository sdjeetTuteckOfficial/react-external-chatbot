import React, { useState } from 'react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm just a bot! 🤖", sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <div
      style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}
    >
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
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            width: '320px',
            height: '400px',
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '80px',
            right: '0',
          }}
        >
          <div
            style={{
              background: '#0078FF',
              color: '#fff',
              padding: '12px',
              textAlign: 'center',
            }}
          >
            Chatbot
          </div>

          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    maxWidth: '75%',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                    background: msg.sender === 'user' ? '#0078FF' : '#EAEAEA',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

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
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                outline: 'none',
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
