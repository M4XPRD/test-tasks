import { createContext } from 'react';
import { GameLogicContextTypes } from '../types/contextTypes';

const defaultValues = {
  currentPlayer: '',
  turns: 0,
  enteredCities: [],
  activeLetter: '',
  timeLeft: 120,
  gameOver: { reason: '', isFinished: false },
  handleNextTurn: () => {},
  handleTurnValidation: () => {},
};

const GameLogicContext = createContext<GameLogicContextTypes>(defaultValues);

export default GameLogicContext;
