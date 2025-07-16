import React from 'react';
import './ResetButton.css';

function ResetButton({ onReset }) {
  return (
    <button 
      className="reset-button" 
      onClick={onReset}
    >
      New Game
    </button>
  );
}

export default ResetButton; 