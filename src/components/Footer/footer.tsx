import "../../styles/css/styles.css";

export function Footer() {
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer__container">
      <div className="goldDivider" />

      <div className="content">
        <div className="data">
          <div className="reneeData">
            {/* <img src={logoDarkImg} alt="Logo Renee Trajar" /> adicionar a logo do cliente*/}
          </div>
          <p className="copyRight">
            Copyright: 2023 © GK & Chogah <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className="arrowBox" onClick={handleScrollTop}>
          <span className="material-symbols-outlined">arrow_upward_alt</span>
        </div>
      </div>
    </footer>
  );
}
