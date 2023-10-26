/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import QR110 from '../assets/QR-110.svg';
import closeButton from '../assets/close-button.svg';
import useApp from '../hooks/appHook';
import formatPhoneNumber from '../utils/formatNumber';
import numberPattern from '../utils/numberPattern';

const PhoneNumber = () => {
  const { closeApp, nextPage } = useApp();
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

  const inputButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'СТЕРЕТЬ', '0'];
  const shownNumber = phoneNumber.length === 0 ? numberPattern : formatPhoneNumber(phoneNumber);

  const handleButtonClick = (sign: string) => {
    if (sign !== 'СТЕРЕТЬ' && phoneNumber.length !== 10) {
      setPhoneNumber((prevState) => [...prevState, sign]);
    } else if (sign === 'СТЕРЕТЬ') {
      setPhoneNumber((prevState) => prevState.slice(0, -1));
    }
  };

  const handleKeyInput = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Backspace':
        handleButtonClick('СТЕРЕТЬ');
        break;
      default:
        if (inputButtons.includes(event.key)) {
          handleButtonClick(event.key);
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput);

    return () => {
      window.removeEventListener('keydown', handleKeyInput);
    };
  }, [phoneNumber]);

  return (
    <main className="main-container">
      <section className="left-block">
        <form className="phone-input-form" onSubmit={() => nextPage()}>
          <h1 className="phone-h1">
            Введите ваш номер мобильного телефона
          </h1>
          <div className="phone-number">{shownNumber}</div>
          <p className="phone-p">
            и с Вами свяжется наш менеджер для дальнейшей консультации
          </p>
          <div className="input-buttons">
            {inputButtons.map((sign) => (
              <button
                key={sign}
                type="button"
                className={sign === 'СТЕРЕТЬ' ? 'clear-input' : ''}
                onClick={() => handleButtonClick(sign)}
              >
                {sign}
              </button>
            ))}
          </div>
          <div className="checkbox">
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
            </label>
            <div className="checkbox-text">
              <p>Согласие на обработку</p>
              <p>персональных данных</p>
            </div>
          </div>
          {/* <div className="error-message">
          <p>НЕВЕРНО ВВЕДЁН НОМЕР</p>
        </div> */}
          <button type="submit" className="confirm-number" disabled={phoneNumber.length < 10}>ПОДТВЕРДИТЬ НОМЕР</button>
        </form>
      </section>
      <section className="right-block">
        <button type="button" onClick={() => closeApp()}>
          <img src={closeButton} alt="Закрыть окно" />
        </button>
        <div className="qr-block">
          <p>СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
          <img src={QR110} alt="QR-код: дополнительная информация" />
        </div>
      </section>
    </main>
  );
};

export default PhoneNumber;
