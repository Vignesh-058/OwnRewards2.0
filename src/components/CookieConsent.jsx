import React, { useState, useEffect } from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const handleModal = (e) => setIsModalVisible(e.detail.isVisible);
    window.addEventListener('exitModalState', handleModal);
    return () => window.removeEventListener('exitModalState', handleModal);
  }, []);

  useEffect(() => {
    const rawConsent = localStorage.getItem('ownRewards_cookie_consent_v4');
    
    if (!rawConsent) {
      setIsVisible(true);
      return;
    }

    try {
      const consent = JSON.parse(rawConsent);
      
      // If rejected, check if enough time has passed to ask again
      if (consent.status === 'rejected') {
        const timePassed = Date.now() - consent.timestamp;
        
        // 1 minute in milliseconds (change this to 24 * 60 * 60 * 1000 for 24 hours)
        const REASK_TIME_MS = 60 * 1000; 
        
        if (timePassed > REASK_TIME_MS) {
          setIsVisible(true);
        }
      }
    } catch (e) {
      // Fallback if they have the old string format
      if (rawConsent !== 'accepted') setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ownRewards_cookie_consent_v4', JSON.stringify({ status: 'accepted', timestamp: Date.now() }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('ownRewards_cookie_consent_v4', JSON.stringify({ status: 'rejected', timestamp: Date.now() }));
    setIsVisible(false);
    
    // Automatically bring it back after 1 minute if they don't refresh the page
    setTimeout(() => {
      setIsVisible(true);
    }, 60 * 1000);
  };

  if (!isVisible || isModalVisible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="cookie-banner">
        <div className="cookie-banner-left">
          <div className="cookie-banner-icon">
            <Plus size={20} color="var(--primary)" />
          </div>
          <div className="cookie-banner-content">
            <h3 className="cookie-banner-title">Your Privacy on OwnRewards</h3>
            <p className="cookie-banner-text">
              OwnRewards uses cookies to provide a secure loyalty dashboard experience, save your session preferences, and analyze platform traffic. By clicking "Accept All", you consent to our use of these technologies. You can customize your settings via "Manage Preferences".
            </p>
            <a href="#" className="cookie-banner-link" onClick={(e) => e.preventDefault()}>
              Read the OwnRewards Cookie Policy <ChevronRight size={14} />
            </a>
          </div>
        </div>
        
        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-manage">Manage Preferences</button>
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>Reject All</button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>Accept All</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
