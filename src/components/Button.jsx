import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  leftIcon,
  rightIcon,
  onClick,
  ...props 
}) => {
  const baseClass = `btn btn-${variant} hover-glow ${className}`;
  
  return (
    <button id="button-btn-1" 
      className={baseClass}
      onClick={onClick}
      
      
      {...props}
    >
      {leftIcon && <span className="btn-icon-left" style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>{leftIcon}</span>}
      {icon && <span className="btn-icon" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
      {rightIcon && <span className="btn-icon-right" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
