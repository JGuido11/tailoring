import '../../styles/css/styles.css';

export function FirstSection() {
  return (
    <div className="FS__container">
      <div className="FS__content">
        <div className="title">
          <p>Ter o seu</p>
          <h1>ALFAIATE</h1>
          <p>é sinônimo de elegância.</p>
        </div>

        <p className="description">
          Compre hoje, <span>pague em até 3x com 12% de desconto</span> e tenha
          10 meses para confeccionar!
        </p>

        <button>
          <a href="https://api.whatsapp.com/send?phone=5511945501193&text=Olá%2C gostaria de fazer um orçamento." target="_blank">
            Faça já um orçamento
          </a>
        </button>
      </div>
    </div>
  );
}