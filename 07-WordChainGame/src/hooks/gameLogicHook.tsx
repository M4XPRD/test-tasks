import { useContext } from 'react';
import GameLogicContext from '../contexts/GameLogicContext';

const useGameLogic = () => useContext(GameLogicContext);

export default useGameLogic;
