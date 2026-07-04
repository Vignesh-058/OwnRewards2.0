import React from 'react';
import logoImg from '../assets/Ownreward icon.svg';

const Logo = ({ className = "", size = 32 }) => {
  return (
    <div className={`logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={logoImg} alt="OwnRewards Logo" width={size} height={size} style={{ display: 'block' }} />
      <span style={{ fontSize: `${size * 0.52}px`, fontWeight: '800', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.02em' }}>
        Own<span style={{ color: 'var(--primary)' }}>Rewards</span>
      </span>
    </div>
  );
};

export default Logo;
