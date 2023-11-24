import EndgameCardButton from './EndgameCardButton';
import EndgameCardResults from './EndgameCardResults';
import EndgameCardStats from './EndgameCardStats';

const EndgameCard = () => (
  <div className="
  flex
  flex-col
  gap-[32px]
  justify-center
  items-center
  w-[576px]
  h-[485px]
  text-black
  text-xl
  rounded-t-[16px]
  bg-white
  rounded-b-[16px]
  shadow-md
  md:w-[80%]
  md:h-[360px]
  md:text-sm
  sm:h-[450px]
  vsm:h-[510px]
  "
  >
    <EndgameCardResults />
    <EndgameCardStats />
    <EndgameCardButton />
  </div>
);

export default EndgameCard;
