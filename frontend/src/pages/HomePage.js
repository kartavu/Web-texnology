import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Webcam from 'react-webcam';
import './HomePage.css';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const [mainChat, setMainChat] = useState([
    { id: 1, text: 'Привет всем!', author: 'User1', likes: 15 },
    { id: 2, text: 'Как дела?', author: 'User2', likes: 8 }
  ]);

  const [qaChat, setQaChat] = useState([
    { id: 1, text: 'Как работает эта платформа?', author: 'User3', likes: 3 }
  ]);

  const [activeChat, setActiveChat] = useState('main');
  const [newMessage, setNewMessage] = useState('');

  // Улучшенные настройки видео
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      author: user ? user.firstName : 'Гость',
      likes: 0
    };

    if (activeChat === 'main') {
      setMainChat([...mainChat, newMsg]);
    } else {
      setQaChat([...qaChat, newMsg]);
    }

    setNewMessage('');
  };

  const handleLike = (messageId) => {
    if (activeChat === 'main') {
      setMainChat(mainChat.map(msg =>
        msg.id === messageId
          ? { ...msg, likes: msg.likes + 1 }
          : msg
      ));
    } else {
      setQaChat(qaChat.map(msg =>
        msg.id === messageId
          ? { ...msg, likes: msg.likes + 1 }
          : msg
      ));
    }
  };

  const currentMessages = activeChat === 'main' ? mainChat : qaChat;

  return (
    <div className="home-container">
      <div className="video-wrapper">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="video-player"
        />
      </div>

      <div className="chat-box">
        <div className="chat-header">
          <button
            onClick={() => setActiveChat('main')}
            className={`chat-tab ${activeChat === 'main' ? 'active' : ''}`}
          >
            Чат
          </button>
          <button
            onClick={() => (user ? setActiveChat('qa') : navigate('/register'))}
            className={`chat-tab ${activeChat === 'qa' ? 'active' : ''}`}
          >
            Вопрос/Ответ
          </button>
        </div>

        <div className="chat-messages">
          {currentMessages.map(msg => (
            <div key={msg.id} className="chat-message">
              <div className="message-content">
                <span className="author">{msg.author}</span>
                <span className="text">{msg.text}</span>
              </div>
              <button
                className="like-button"
                onClick={() => handleLike(msg.id)}
                aria-label="Лайк"
              >
                ❤️ <span className="like-count">{msg.likes}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          {user ? (
            <div className="message-input-container">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Введите сообщение..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="message-input"
              />
              <button onClick={handleSendMessage} className="send-button">
                →
              </button>
            </div>
          ) : (
            <button onClick={() => navigate('/register')} className="register-prompt">
              Хотите отправить сообщение?<br />
              Зарегистрируйтесь
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
