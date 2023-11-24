import GameCardHeader from './GameCardHeader';
import GameCardCountdownBar from './GameCardCountdownBar';
import GameCardMainField from './GameCardMainField';
import GameCardInputForm from './GameCardInputForm';

const GameCard = () => (
  <div className="w-[576px] h-[464px] md:w-[80%]">
    <GameCardHeader />
    <GameCardCountdownBar />
    <GameCardMainField />
    <GameCardInputForm />
  </div>
);

export default GameCard;
