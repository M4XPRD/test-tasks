import { useEffect, useRef, useState } from 'react';
import promoVideo from '../assets/promo-video.mp4';
import QR126 from '../assets/QR-126.svg';
import useApp from '../hooks/appHook';

const PromoBanner = () => {
  const [isBannerShown, setIsBannerShown] = useState(false);
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    nextPage, page, playbackTime, saveTime,
  } = useApp();

  useEffect(() => {
    setTimeout(() => setIsBannerShown(true), 5000);
  }, []);

  useEffect(() => {
    continueButtonRef.current?.focus();
    videoRef.current?.play();
  }, []);

  useEffect(() => {
    if (page === 1 && videoRef.current) {
      const currentTimestamp = videoRef.current;
      currentTimestamp.currentTime = playbackTime;
      videoRef.current?.play();
    }
  }, [page]);

  const handleContinue = () => {
    if (page === 1 && videoRef.current) {
      videoRef.current?.pause();
      const currentTimestamp = videoRef.current?.currentTime;
      saveTime(currentTimestamp);
    }
    nextPage();
  };

  return (
    <main className="promo-container">
      <video src={promoVideo} loop muted controlsList="nodownload" ref={videoRef} />
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
        <button type="button" onClick={() => handleContinue()} ref={continueButtonRef}>ОК</button>
      </section>
    </main>
  );
};

export default PromoBanner;
