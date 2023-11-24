import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode,
};

export type NavigatorContext = {
  page: number,
  handleNextPage: () => void,
  handleResetApp: () => void,
};

export type GameLogicContextTypes = {
  currentPlayer: string,
  turns: number,
  enteredCities: string[],
  activeLetter: string,
  timeLeft: number,
  gameOver: { reason: string, isFinished: boolean },
  handleNextTurn: () => void,
  handleTurnValidation: (city: string) => void,
};
