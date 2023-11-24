import { useEffect } from 'react';
import useGameLogic from '../../hooks/gameLogicHook';
import useNavigation from '../../hooks/navigationHook';

const GameCardMainField = () => {
  const { turns, enteredCities, gameOver } = useGameLogic();
  const { handleNextPage } = useNavigation();

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-scroll');

    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [enteredCities]);

  useEffect(() => {
    if (gameOver.isFinished) {
      handleNextPage();
    }
  }, [gameOver]);

  return (
    <>
      <section className="flex flex-col h-[276px] gap-[8px] pt-[40px] bg-white prose-sm overflow-y-scroll no-scrollbar">
        {turns < 1 ? (
          <div className="flex justify-center items-center h-[100%] prose-sm text-gray-400 text-center">
            Первый участник вспоминает города...
          </div>
        ) : (
          enteredCities.map((city: string, index) => (
            <div
              key={city}
              className={`h-[36px] pl-3 pr-3 pt-[6px] pb-[6px] rounded-tl-xl rounded-tr-xl ${
                index % 2 === 0
                  ? 'self-end bg-violet-500 text-white rounded-br-none rounded-bl-xl mr-[16px]'
                  : 'self-start bg-violet-50 text-grey-700 rounded-br-xl rounded-bl-none ml-[16px]'
              }`}
            >
              {city}
            </div>
          ))
        )}
      </section>
      <h1
        className={`text-center bg-white prose-sm pt-[20px] ${
          turns < 1 ? 'text-white' : 'text-gray-400'
        }`}
      >
        {`Всего перечислено городов: ${enteredCities.length}`}
      </h1>
    </>
  );
};

export default GameCardMainField;
