import QR110 from '../assets/QR-110.svg';
import closeButtonDark from '../assets/close-button-dark.svg';

const Confirm = () => (
  <div className="main-container">
    <section className="left-block">
      <div className="confirm-block">
        <h1 className="confirm-h1">
          <p>
            ЗАЯВКА
          </p>
          <p>
            ПРИНЯТА
          </p>
        </h1>
        <div className="confirm-p">
          <p>Держите телефон под рукой.</p>
          <p>Скоро с Вами свяжется наш менеджер.</p>
        </div>
      </div>
    </section>
    <section className="right-block">
      <button type="button">
        <img src={closeButtonDark} alt="Закрыть окно" />
      </button>
      <div className="qr-block">
        <p>СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img src={QR110} alt="QR-код: дополнительная информация" />
      </div>
    </section>
  </div>
);

export default Confirm;
