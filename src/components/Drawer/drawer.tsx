import { useDrawer } from "../../Context/DrawerContent";
import "../../styles/css/styles.css";

export function Drawer() {
  const { handleCloseDrawer } = useDrawer();

  return (
    <div className="Drawer__container">
      <div className="closeButton" onClick={handleCloseDrawer}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <div className="links">
        <a href="#company" onClick={handleCloseDrawer}>
          Empresa
        </a>
        <a href="#camisaria" onClick={handleCloseDrawer}>
          Camisaria
        </a>
        <a href="#tailoring" onClick={handleCloseDrawer}>
          Alfaiataria
        </a>
        <a href="#deposition" onClick={handleCloseDrawer}>
          Depoimento
        </a>
        <a href="#contact" onClick={handleCloseDrawer}>
          Contact
        </a>
      </div>
    </div>
  );
}
