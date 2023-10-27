/* eslint-disable max-len */
import {
  ChangeEvent,
  RefObject,
  useCallback, useEffect, useRef, useState,
} from 'react';
import QR110 from '../assets/QR-110.svg';
import closeButton from '../assets/close-button.svg';
import useApp from '../hooks/appHook';
import formatPhoneNumber from '../utils/formatNumber';
import numberPattern from '../utils/numberPattern';
import inputButtons from '../utils/inputButtons';

type Refs = {
  [key: string]: RefObject<HTMLButtonElement>;
};

const PhoneNumber = () => {
  const { closeApp, nextPage } = useApp();
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const shownNumber = phoneNumber.length === 0 ? numberPattern : formatPhoneNumber(phoneNumber);

  // Refs section

  const inputRefs = inputButtons.reduce((acc: Refs, button: string) => {
    acc[button] = useRef<HTMLButtonElement>(null);
    return acc;
  }, {});
  const closeWindowRef = useRef<HTMLButtonElement>(null);
  const checkboxRef = useRef(null);
  const confirmPhoneRef = useRef(null);

  const refs: Refs = {
    ...inputRefs,
    closeWindowRef,
    checkboxRef,
    confirmPhoneRef,
  };

  // Refs section end

  const navigationMap: {
    [key: string]: {
      [direction: string]: string | RefObject<HTMLButtonElement>;
    };
  } = {
    1: {
      ArrowUp: closeWindowRef,
      ArrowRight: '2',
      ArrowDown: '4',
      ArrowLeft: '3',
    },
    2: {
      ArrowUp: closeWindowRef,
      ArrowRight: '3',
      ArrowDown: '5',
      ArrowLeft: '1',
    },
    3: {
      ArrowUp: closeWindowRef,
      ArrowRight: '1',
      ArrowDown: '6',
      ArrowLeft: '2',
    },
    4: {
      ArrowUp: '1',
      ArrowRight: '5',
      ArrowDown: '7',
      ArrowLeft: '6',
    },
    5: {
      ArrowUp: '2',
      ArrowRight: '6',
      ArrowDown: '8',
      ArrowLeft: '4',
    },
    6: {
      ArrowUp: '3',
      ArrowRight: '4',
      ArrowDown: '9',
      ArrowLeft: '5',
    },
    7: {
      ArrowUp: '4',
      ArrowRight: '8',
      ArrowDown: 'СТЕРЕТЬ',
      ArrowLeft: '9',
    },
    8: {
      ArrowUp: '5',
      ArrowRight: '9',
      ArrowDown: 'СТЕРЕТЬ',
      ArrowLeft: '7',
    },
    9: {
      ArrowUp: '6',
      ArrowRight: '7',
      ArrowDown: '0',
      ArrowLeft: '8',
    },
    0: {
      ArrowUp: '9',
      ArrowRight: 'СТЕРЕТЬ',
      ArrowDown: checkboxRef,
      ArrowLeft: 'СТЕРЕТЬ',
    },
    СТЕРЕТЬ: {
      ArrowUp: '8',
      ArrowRight: '0',
      ArrowDown: checkboxRef,
      ArrowLeft: '0',
    },
    closeWindowRef: {
      ArrowUp: '2',
      ArrowRight: '1',
      ArrowDown: '2',
      ArrowLeft: '3',
    },
    checkboxRef: {
      ArrowUp: 'СТЕРЕТЬ',
      ArrowRight: '0',
      ArrowDown: confirmPhoneRef,
      ArrowLeft: 'СТЕРЕТЬ',
    },
    confirmPhoneRef: { ArrowUp: checkboxRef, ArrowDown: closeWindowRef },
  };

  const handleButtonClick = (sign: string) => {
    if (sign !== 'СТЕРЕТЬ' && phoneNumber.length !== 10) {
      setPhoneNumber((prevState) => [...prevState, sign]);
    } else if (sign === 'СТЕРЕТЬ') {
      setPhoneNumber((prevState) => prevState.slice(0, -1));
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleKeyInput = useCallback(
    (event: KeyboardEvent) => {
      const currentFocusKey = Object
        .keys(refs)
        .find((key) => document.activeElement === refs[key].current);

      if (
        !currentFocusKey
        && !document.activeElement?.classList.contains('close-button')
      ) {
        switch (event.key) {
          case 'ArrowDown':
            inputRefs['2'].current?.focus();
            break;
          case 'ArrowLeft':
            inputRefs['1'].current?.focus();
            break;
          case 'ArrowRight':
            inputRefs['3'].current?.focus();
            break;
          case 'ArrowUp':
            closeWindowRef.current?.focus();
            break;
          default:
            break;
        }
      }

      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          if (currentFocusKey) {
            const newFocusKeyOrRef = navigationMap[currentFocusKey][event.key];
            if (newFocusKeyOrRef) {
              if (typeof newFocusKeyOrRef === 'string') {
                inputRefs[newFocusKeyOrRef].current?.focus();
              } else {
                newFocusKeyOrRef.current?.focus();
              }
            }
          }
          break;
        case 'Backspace':
          handleButtonClick('СТЕРЕТЬ');
          break;
        default:
          if (inputButtons.includes(event.key)) {
            handleButtonClick(event.key);
          }
          break;
      }
    },
    [phoneNumber, inputRefs, navigationMap, inputButtons, handleButtonClick],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput);

    return () => {
      window.removeEventListener('keydown', handleKeyInput);
    };
  }, [handleKeyInput]);

  return (
    <main className="main-container">
      <section className="left-block">
        <form className="phone-input-form" onSubmit={() => nextPage()}>
          <h1 className="phone-h1">Введите ваш номер мобильного телефона</h1>
          <div className="phone-number">{shownNumber}</div>
          <p className="phone-p">
            и с Вами свяжется наш менеджер для дальнейшей консультации
          </p>
          <div className="input-buttons">
            {inputButtons.map((sign) => (
              <button
                key={sign}
                type="button"
                ref={inputRefs[sign]}
                className={sign === 'СТЕРЕТЬ' ? 'clear-input' : ''}
                onClick={() => handleButtonClick(sign)}
              >
                {sign}
              </button>
            ))}
          </div>
          <div className="checkbox">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                ref={checkboxRef}
                id="checkbox"
                onChange={handleCheckboxChange}
              />
            </label>
            <div className="checkbox-text">
              <p>Согласие на обработку</p>
              <p>персональных данных</p>
            </div>
          </div>
          {/* <div className="error-message">
          <p>НЕВЕРНО ВВЕДЁН НОМЕР</p>
        </div> */}
          <button
            type="submit"
            className="confirm-number"
            disabled={phoneNumber.length < 10 || !isChecked}
            ref={confirmPhoneRef}
          >
            ПОДТВЕРДИТЬ НОМЕР
          </button>
        </form>
      </section>
      <section className="right-block">
        <button
          type="button"
          onClick={() => closeApp()}
          className="close-button"
          ref={closeWindowRef}
        >
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
