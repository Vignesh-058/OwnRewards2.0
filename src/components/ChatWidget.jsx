import React, { useState } from 'react';
import { MessageCircle, X, ArrowLeft, Paperclip, Mic } from 'lucide-react';
import './ChatWidget.css';
import OwnRewardIcon from '../assets/Ownreward icon.svg';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget-wrapper">
      {isOpen && (
        <div className="chat-widget-window">
          <div className="chat-window-header">
            <button className="chat-header-btn-left" onClick={() => setIsOpen(false)}>
              <ArrowLeft size={18} />
            </button>
            <div className="chat-header-info">
              <div className="chat-header-avatar-wrap">
                <div className="chat-header-avatar">
                  <img src={OwnRewardIcon} alt="OwnRewards" />
                </div>
                <div className="chat-status-dot"></div>
              </div>
              <div className="chat-header-text">
                <h3>Welcome to OwnRewards...</h3>
                <p>Explore OwnRewards in seconds.</p>
              </div>
            </div>
            <button className="chat-header-btn-right" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-window-body">
            <div className="chat-timestamp-pill">TODAY</div>
            
            <div className="chat-message-group">
              <div className="chat-message-sender">OWNREWARDS ASSISTANT</div>
              <div className="chat-bubble">
                <p>Welcome! How can I assist you today</p>
                <span className="chat-time">03:19 PM</span>
              </div>
            </div>
          </div>
          
          <div className="chat-window-footer">
            <div className="chat-input-wrapper">
              <input type="text" placeholder="Write a message..." />
              <div className="chat-input-actions">
                <button><Paperclip size={18} /></button>
                <button><Mic size={18} /></button>
              </div>
            </div>
          </div>
          <div className="chat-window-branding">
            Powered by <img src={OwnRewardIcon} alt="OwnRewards" className="branding-icon" /> OwnRewards
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button 
          className="chat-widget-fab-round" 
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Chat"
        >
          <MessageCircle size={32} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
