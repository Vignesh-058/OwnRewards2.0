import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <div 
      className={`glass-card ${className} ${hoverEffect ? 'hover-effect' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
