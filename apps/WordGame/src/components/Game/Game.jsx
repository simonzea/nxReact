import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessInput from '../GuessInput/GuessInput';
import Keyboard from '../Keyboard/Keyboard';
import ResetButton from '../ResetButton/ResetButton';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const newAnswer = sample(WORDS);
    console.info({ answer: newAnswer });
    return newAnswer;
  });
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const handleSubmit = (guess) => {
    const nextGuess = [...previousGuesses, {key: crypto.randomUUID(), guess: guess}]
    setPreviousGuesses(nextGuess);
    const answerCheck = checkGuess(guess, answer).every(({status})=>status === 'correct');
    if(answerCheck){
      setGameStatus('won');
    }
    if(nextGuess.length === NUM_OF_GUESSES_ALLOWED && !answerCheck){
      setGameStatus('lost');
    }
  }

  const handleReset = () => {
    const newAnswer = sample(WORDS);
    console.info({ answer: newAnswer });
    setAnswer(newAnswer);
    setPreviousGuesses([]);
    setGameStatus('running');
  }
  
  // Convert previous guesses to validated guesses format for keyboard
  const validatedGuesses = previousGuesses.map(guessObj => 
    checkGuess(guessObj.guess, answer)
  );

  return (
    <>
    <ResetButton onReset={handleReset} />
    <Guess previousGuesses={previousGuesses} answer={answer} />
    <GuessInput 
      onSubmit={handleSubmit}
      disabled={gameStatus !== 'running'}
    />
    <Keyboard validatedGuesses={validatedGuesses} />
    {gameStatus === 'won' && <WonBanner guessCount={previousGuesses.length} />}
    {gameStatus === 'lost' && <LostBanner answer={answer} />}
  </>);
}

export default Game;
