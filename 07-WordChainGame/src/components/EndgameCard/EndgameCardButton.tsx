import useNavigation from '../../hooks/navigationHook';

const EndgameCardButton = () => {
  const { handleNextPage } = useNavigation();
  return (
    <button
      type="button"
      className="bg-violet-600 w-[180px] text-base min-h-[40px] rounded-[4px] text-white self-center font-medium"
      onClick={handleNextPage}
    >
      Начать новую игру
    </button>
  );
};

export default EndgameCardButton;
