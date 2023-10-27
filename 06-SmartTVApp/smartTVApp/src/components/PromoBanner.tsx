import { useEffect, useRef, useState } from 'react';
import promoVideo from '../assets/promo-video.mp4';
import QR126 from '../assets/QR-126.svg';
import useApp from '../hooks/appHook';

const PromoBanner = () => {
  const [isBannerShown, setIsBannerShown] = useState(false);
  const { nextPage } = useApp();
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => setIsBannerShown(true), 1000);
  }, []);

  useEffect(() => {
    continueButtonRef.current?.focus();
  }, []);

  return (
    <main className="promo-container">
      <video src={promoVideo} autoPlay loop muted controlsList="nodownload" />
      <section className={`qr-container ${isBannerShown && 'shown'}`}>
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
        <button type="button" onClick={() => nextPage()} ref={continueButtonRef}>ОК</button>
      </section>
    </main>
  );
};

export default PromoBanner;
