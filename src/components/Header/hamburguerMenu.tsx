import { useDrawer } from "../../Context/DrawerContent";
import "../../styles/css/styles.css";

export function HamburguerMenu() {
  const { handleOpenDrawer } = useDrawer();

  return (
    <div className="hamburguer" onClick={handleOpenDrawer}>
      <span className="material-symbols-outlined">menu</span>
    </div>
  );
}
