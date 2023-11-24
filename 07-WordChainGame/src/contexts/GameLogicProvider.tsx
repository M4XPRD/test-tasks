import {
  useEffect, useMemo, useState,
} from 'react';
import GameLogicContext from './GameLogicContext';
import { ProviderProps } from '../types/contextTypes';
import citiesList from '../utils/citiesList';
import standardizeWord from '../utils/standardizeWord';
import useNavigation from '../hooks/navigationHook';
import restrictedLetters from '../utils/restrictedLetters';

const GameLogicProvider = ({ children }: ProviderProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<string>('');
  const [activeLetter, setActiveLetter] = useState<string>('');
  const [gameCitiesList, setGameCitiesList] = useState<string[]>(Object.assign([], citiesList));
  const [enteredCities, setEnteredCities] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [gameOver, setGameOver] = useState({ reason: '', isFinished: false });
  const [turns, setTurns] = useState<number>(0);

  const { page } = useNavigation();

  const handleNextTurn = () => {
    setTurns((previousAmount) => previousAmount + 1);
    setCurrentPlayer((previousPlayer) => (previousPlayer === 'human' ? 'ai' : 'human'));
  };

  const checkLoseCondition = () => {
    const filteredCities = gameCitiesList.filter((city) => city.startsWith(activeLetter));
    if (filteredCities.length === 0) {
      return true;
    }
    return false;
  };

  const setupNewActiveLetter = (newCity: string) => {
    const penultimateNumber = 2;
    const lastLetter = newCity[newCity.length - 1].toUpperCase();
    const penultimateLetter = newCity[newCity.length - penultimateNumber].toUpperCase();
    const firstCondition = restrictedLetters.includes(lastLetter);
    const secondCondition = gameCitiesList.filter((city) => city.startsWith(lastLetter));

    const filteredLastLetter = firstCondition || secondCondition.length === 0
      ? penultimateLetter
      : lastLetter;

    setActiveLetter(filteredLastLetter);
  };

  const updateCitiesList = (enteredCity: string): void => {
    const usedCityIndex = gameCitiesList.indexOf(enteredCity);
    gameCitiesList.splice(usedCityIndex, 1);
  };

  const handleTurnValidation = (newCity: string) => {
    const standardizedWord = standardizeWord(newCity);

    const firstCondition = standardizedWord.startsWith(activeLetter);
    const secondCondition = gameCitiesList.includes(standardizedWord);
    const thirdCondition = !enteredCities.includes(standardizedWord);

    if (firstCondition && secondCondition && thirdCondition) {
      setupNewActiveLetter(standardizedWord);
      setEnteredCities((prevEnteredCities) => [...prevEnteredCities, standardizedWord]);
      updateCitiesList(standardizedWord);
      handleNextTurn();
    } else {
      console.log('Ошибка');
    }
  };

  const handleAiTurn = () => {
    const pickRandomCity = () => {
      const filteredCities = gameCitiesList.filter((city) => city.startsWith(activeLetter));
      const randomIndex = Math.floor(Math.random() * filteredCities.length);
      return filteredCities[randomIndex];
    };
    const pickedCity = pickRandomCity();
    handleTurnValidation(pickedCity);
    setupNewActiveLetter(pickedCity);
  };

  /* 2-minutes countdown */

  useEffect(() => {
    const updateTimer = () => {
      if (gameOver.isFinished) {
        return;
      }
      if (page === 2) {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            setGameOver((previousState) => ({
              ...previousState,
              reason: 'no-time-left',
              isFinished: true,
            }));
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    setTimeLeft(120);
    return () => clearInterval(timerInterval);
  }, [currentPlayer, page]);

  /* Game reset */

  useEffect(() => {
    if (page === 1) {
      setTurns(0);
      setCurrentPlayer('human');
      setGameCitiesList(Object.assign([], citiesList));
      setEnteredCities(Object.assign([]));
      setGameOver((previousState) => ({
        ...previousState,
        reason: '',
        isFinished: false,
      }));
      setActiveLetter('');
    }
  }, [page]);

  /* AI response and it's time */

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (currentPlayer === 'ai' && page === 2) {
      const minDelay = 2000;
      const maxDelay = 5000;
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

      timeoutId = setTimeout(() => {
        handleAiTurn();
      }, randomDelay);
    } else if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPlayer, page]);

  /* Lose condition check */

  useEffect(() => {
    if (checkLoseCondition()) {
      setTimeout(() => {
        setGameOver((previousState) => ({
          ...previousState,
          reason: 'no-cities-left',
          isFinished: true,
        }));
      }, 3000);
    }
  }, [currentPlayer]);

  const providedData = useMemo(
    () => ({
      currentPlayer,
      turns,
      timeLeft,
      activeLetter,
      gameOver,
      handleNextTurn,
      enteredCities,
      handleTurnValidation,
    }),
    [
      currentPlayer,
      turns,
      timeLeft,
      activeLetter,
      gameOver,
      handleNextTurn,
      enteredCities,
      handleTurnValidation,
    ],
  );

  return (
    <GameLogicContext.Provider value={providedData}>
      {children}
    </GameLogicContext.Provider>
  );
};

export default GameLogicProvider;
