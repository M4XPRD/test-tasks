import QR110 from '../assets/QR-110.svg';
import closeButton from '../assets/close-button.svg';

const Confirm = () => (
  <div className="phone-container">
    <section className="phone-input">
      <div>
        <h1 className="phone-h1">
          ЗАЯВКА ПРИНЯТА
        </h1>
        <p className="phone-p">
          Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
        </p>
      </div>
    </section>
    <div className="phone-elements-group">
      <button type="button">
        <img src={closeButton} alt="Закрыть окно" />
      </button>
      <div className="qr-block">
        <p>СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img src={QR110} alt="QR-код: дополнительная информация" />
      </div>
    </div>
  </div>
);

export default Confirm;
