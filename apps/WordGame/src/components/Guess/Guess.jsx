import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';


function Guess({previousGuesses, answer}) {


  return (
    <div className="guess-results">
      {previousGuesses.map(({guess, key}) => (
        <p className="guess" key={key}>{checkGuess(guess, answer).map(
          ({letter, status}, index)=>(
            <span className={`cell ${status ?? ''}`} key={index}>{letter}</span>
          )
        )}</p>
      ))}
      {range(NUM_OF_GUESSES_ALLOWED-previousGuesses.length).map(
        (_, index)=>(
          <p className="guess" key={index}>
            {range(5).map((_, index)=>
            <span className="cell" key={index}></span>
            )}
            </p>
          )
      )}
      
    </div>

  );
}

export default Guess;
