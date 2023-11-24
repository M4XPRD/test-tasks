import useGameLogic from '../../hooks/gameLogicHook';

const EndgameCardStats = () => {
  const { enteredCities } = useGameLogic();
  const lastEnteredCity = enteredCities[enteredCities.length - 1];

  return (
    <>
      <div className="flex flex-col justify-center items-center text-gray-700">
        <span className="text-center">{`Всего было перечислено городов: ${enteredCities.length}`}</span>
        <span className="text-center">
          {enteredCities.length < 5
            ? 'Неплохо, но нужно разыграться! '
            : 'Хороший результат!'}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl md:text-sm text-center">Последний город, названный победителем:</p>
        <p className="text-2xl md:text-sm font-semibold text-center">
          {lastEnteredCity || 'Не назван :('}
        </p>
      </div>
    </>
  );
};

export default EndgameCardStats;
