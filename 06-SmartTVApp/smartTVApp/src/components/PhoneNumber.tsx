import QR110 from '../assets/QR-110.svg';
import closeButton from '../assets/close-button.svg';

const PhoneNumber = () => (
  <main className="main-container">
    <section className="left-block">
      <form className="phone-input-form">
        <h1 className="phone-h1">
          Введите ваш номер мобильного телефона
        </h1>
        <div className="phone-number">+7(___)___-__-__</div>
        <p className="phone-p">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </p>
        <div className="input-buttons">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="clear-input">СТЕРЕТЬ</button>
          <button type="button">0</button>
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
        <button type="submit" className="confirm-number">ПОДТВЕРДИТЬ НОМЕР</button>
      </form>
    </section>
    <section className="right-block">
      <button type="button">
        <img src={closeButton} alt="Закрыть окно" />
      </button>
      <div className="qr-block">
        <p>СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img src={QR110} alt="QR-код: дополнительная информация" />
      </div>
    </section>
  </main>
);

export default PhoneNumber;
