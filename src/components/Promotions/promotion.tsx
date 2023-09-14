import "../../styles/css/styles.css";

export function Promotions() {
  return (
    <div className="Promotions__container">
      <div className="Promotions__content">
        <div className="promotion">
          <h1>Incredible Conditions</h1>
          <span>Buy today and garantee:</span>
          <ul className="Promotions__guaranteesList">
            <li>12% discount and payment in 3x;</li>
            <li>
              Conditions very special for <span>Limited Time</span>;
            </li>
          </ul>
          <button className="Promotions__button">
            <a
              href="https://api.whatsapp.com/send?phone=5511945501193&text=Olá%2C gostaria de fazer um orçamento."
              target="_blank"
            >
              garantee this very special condition!!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
