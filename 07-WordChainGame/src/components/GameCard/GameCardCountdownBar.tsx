import useGameLogic from '../../hooks/gameLogicHook';
import countdownWidthPercent from '../../utils/countdownWidthPercent';

const GameCardCountdownBar = () => {
  const { timeLeft } = useGameLogic();

  return (
    <div className="w-[100%] bg-gray-100 h-[5px]">
      <div
        className="bg-violet-300 h-[5px]"
        style={{ width: countdownWidthPercent(timeLeft, 120) }}
      />
    </div>
  );
};

export default GameCardCountdownBar;
