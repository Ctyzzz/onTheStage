import React, { useState } from 'react';
import './ChatBot.scss';
import closedIcon from '@public/botClosedIcon.svg';
import openIcon from '@public/botOpenIcon.svg';
import axios from 'axios';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { fromBot: true, text: 'Привет! Я – онлайн бот, как я могу тебе помочь?' }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (text: string) => {
    if (text.trim()) {
      setMessages([...messages, { fromBot: false, text }]);
      try {
        const response = await axios.post('http://127.0.0.1:8000/chat', {
          user_input: text,
          username: 'user1' // Сюда имя пользователя, динамеческое
        });
        setMessages((prevMessages) => [
          ...prevMessages,
          { fromBot: true, text: response.data.response }
        ]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className={`chat-bot ${isOpen ? 'open' : 'closed'}`}>
      <button className="chat-toggle" onClick={toggleChat}>
        <img src={isOpen ? openIcon : closedIcon} alt="Toggle Chat" />
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.fromBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <ChatInput onSend={sendMessage} />
        </div>
      )}
    </div>
  );
};

const ChatInput: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Напишите сообщение..."
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
};

export default ChatBot;
