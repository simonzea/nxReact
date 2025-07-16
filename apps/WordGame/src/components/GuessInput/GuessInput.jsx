import React from 'react';
import './GuessInput.css';

function GuessInput({ onSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      onSubmit(guess);
      setGuess(''); // Clear the input after submission
    }
  };

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required 
        disabled={disabled} 
        minLength={5} 
        maxLength={5} 
        id="guess-input" 
        type="text" 
        value={guess} 
        onChange={handleChange} 
        pattern="[a-z,A-Z]{5}" 
      />
    </form>
  );
}

export default GuessInput; 