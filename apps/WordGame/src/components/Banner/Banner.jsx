import React from 'react';
import './Banner.css';

function Banner({ children, className = '', ...props }) {
  return (
    <div className={`banner ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Banner; 