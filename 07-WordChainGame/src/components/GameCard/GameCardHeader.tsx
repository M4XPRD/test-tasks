import useGameLogic from '../../hooks/gameLogicHook';
import formatTime from '../../utils/formatTime';

const GameCardHeader = () => {
  const { currentPlayer, timeLeft } = useGameLogic();

  const playerText = currentPlayer === 'human'
    ? 'Сейчас ваша очередь'
    : 'Сейчас очередь соперника';

  return (
    <header className="flex flex-row justify-between items-center w-full text-center bg-white rounded-t-[16px] h-[64px] border-gray-100 pl-[16px] pr-[16px]">
      <span className="prose-base md:prose-sm text-left mr-[20px]">{playerText}</span>
      <span className="prose-xl md:prose-base">{formatTime(timeLeft)}</span>
    </header>
  );
};

export default GameCardHeader;
