import WelcomeCardContent from './WelcomeCardContent';
import WelcomeCardHeader from './WelcomeCardHeader';

const WelcomeCard = () => (
  <div className="md:w-[80%] max-w-xl">
    <WelcomeCardHeader />
    <WelcomeCardContent />
  </div>
);

export default WelcomeCard;
