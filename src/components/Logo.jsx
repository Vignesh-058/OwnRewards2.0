import React from 'react';
import logoImg from '../assets/Ownreward icon.svg';

const Logo = ({ className = "", size = 32 }) => {
  return (
    <div className={`logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <span style={{ fontSize: `${size * 0.52}px`, fontWeight: '800', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.02em' }}>
        own<span style={{ color: 'var(--primary)' }}>Rewards</span>
      </span>
    </div>
  );
};

export default Logo;
