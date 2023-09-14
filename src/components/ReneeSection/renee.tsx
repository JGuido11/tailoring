import "../../styles/css/styles.css";
import reneeImg from "../../Assets/Icons/Icon_Write_gold.png"
import reneeImgDesktop from "../../Assets/images/bannerRenee.png"

export function Renee() {
  return (
    <div className="reneeSection">
      <img src={reneeImgDesktop} alt="GK & Chogah" />

      <div className="reneeInfo">
        <div className="reneeSection__renee">
          <h1>Raul Dubois</h1>

          <div className="divider" />

          <img src={reneeImg} alt="GK & Chogah" />
        </div>

        <div className="reneeSection__description">
          <p>
            Com um histórico de mais de três décadas no ramo de confecção
            personalizada de camisas, calças e ternos, contamos com uma equipe
            de profissionais experientes e altamente capacitados.
          </p>
          <p>
            Para cada cliente, é criado um padrão exclusivo que é cuidadosamente
            desenvolvido de acordo com suas medidas corporais. Essas medidas são
            obtidas pessoalmente pelo Sr. Raul, seja no escritório ou na
            residência do cliente.
          </p>
        </div>

        <div className="reneeSection__quoteSection">
          <p className="quote">
            “Nossa meta é exceder as expectativas dos nossos clientes,
            garantindo que eles fiquem satisfeitos ao utilizar nossos produtos.
            Buscamos alcançar isso por meio de um relacionamento transparente e
            sincero, onde valorizamos o ser humano em todas as interações.”
          </p>
          <span className="material-symbols-outlined">format_quote</span>
          <p className="author">GK & Chogah</p>
        </div>

        <button className="reneeSection__button">
          <a
            href="https://api.whatsapp.com/send?phone=5511945501193&text=Olá%2C gostaria de agendar uma visita."
            target="_blank"
          >
            Agende uma visita!
          </a>
        </button>
      </div>
    </div>
  );
}
