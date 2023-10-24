import { useEffect, useState } from 'react';
import promoVideo from '../assets/promo-video.mp4';
import QR126 from '../assets/QR-126.svg';
import useApp from '../hooks/appHook';

const PromoBanner = () => {
  const [isBannerShown, setIsBannerShown] = useState(false);
  const { nextStep } = useApp();

  useEffect(() => {
    setTimeout(() => setIsBannerShown(true), 1000);
  }, []);

  return (
    <div className="promo-container">
      <video src={promoVideo} autoPlay loop muted controlsList="nodownload" />
      <div className={`qr-container ${isBannerShown && 'shown'}`}>
        <h1>
          <p>
            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          </p>
          <p>
            ПОДАРИТЕ ЕМУ СОБАКУ!
          </p>
        </h1>
        <img src={QR126} alt="QR-код" />
        <h2>
          <p>
            Сканируйте QR-код
          </p>
          <p>
            или нажмите ОК
          </p>
        </h2>
        <button type="button" onClick={() => nextStep()}>ОК</button>
      </div>
    </div>
  );
};

export default PromoBanner;
