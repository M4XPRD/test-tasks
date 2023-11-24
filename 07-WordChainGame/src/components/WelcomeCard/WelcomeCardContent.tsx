/* eslint-disable max-len */
import useNavigation from '../../hooks/navigationHook';
import rules from '../../utils/gameRules';

const WelcomeCardContent = () => {
  const { handleNextPage } = useNavigation();

  return (
    <div className="flex flex-col justify-center items-center h-[283px] bg-white rounded-b-[16px] prose-sm shadow-md md:h-[360px] sm:h-[450px] vsm:h-[510px]">
      <section className="flex flex-col justify-evenly pt-[24px] pl-[24px] pr-[24px] h-[235px] text-gray-700 text-sm">
        <div className="flex flex-col gap-[24px] justify-start h-inherit">
          <div>Цель: Назвать как можно больше реальных городов.</div>
          <ul className="m-0">
            {rules.map(({ key, text }) => (
              <li key={key} className="m-0 text-sm">
                {text}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-violet-600 w-[126px] min-h-[40px] rounded-[4px] text-white self-center prose-base font-medium text-base mb-[24px]"
            onClick={handleNextPage}
          >
            Начать игру
          </button>
        </div>
      </section>
    </div>
  );
};

export default WelcomeCardContent;
