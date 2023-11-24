import useGameLogic from '../../hooks/gameLogicHook';

const EndgameCardResults = () => {
  const { currentPlayer, gameOver } = useGameLogic();
  const { reason } = gameOver;

  return (
    <>
      {currentPlayer === 'human' ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">Твой противник победил!</p>
          <p className="text-center">
            {reason === 'no-time-left'
              ? 'К сожалению, твое время вышло!'
              : 'Список городов закончился'}
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">Поздравляем тебя с победой!</p>
          <p className="text-center">
            {reason === 'no-time-left'
              ? 'Твой противник не вспомнил нужный город!'
              : 'Список городов закончился'}
          </p>
        </div>
      )}
      <div className="text-center">
        <p className={`${currentPlayer === 'human' ? 'text-green-600' : 'text-red-600'} text-3xl font-semibold`}>00:00</p>
      </div>
    </>
  );
};

export default EndgameCardResults;
