import React from 'react';
import './Keyboard.css';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

function Keyboard({ validatedGuesses }) {
  // Create a map of letter statuses based on validated guesses
  const letterStatuses = {};
  
  validatedGuesses.forEach(guess => {
    guess.forEach(({ letter, status }) => {
      // Only update if the status is better (correct > misplaced > incorrect)
      const currentStatus = letterStatuses[letter];
      if (!currentStatus || 
          (status === 'correct') ||
          (status === 'misplaced' && currentStatus !== 'correct') ||
          (status === 'incorrect' && currentStatus !== 'correct' && currentStatus !== 'misplaced')) {
        letterStatuses[letter] = status;
      }
    });
  });

  const getKeyClassName = (key) => {
    const status = letterStatuses[key];
    if (!status) return 'key';
    return `key ${status}`;
  };

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map(key => (
            <button
              key={key}
              className={getKeyClassName(key)}
              disabled
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard; 