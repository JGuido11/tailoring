import { useDrawer } from "../../Context/DrawerContent";
import { Drawer } from "../Drawer/drawer";
import TailoringPage from "../TailorinPage/Tailoring";
import { NavBar } from "../Header/navbar";
import "../../styles/css/styles.css";

export function Main() {
  const { isDrawerOpen } = useDrawer();

  return isDrawerOpen ? (
    <Drawer />
  ) : (
    <>
      <div className="main__wrapper">
        <NavBar />
        <TailoringPage />
      </div>
    </>
  );
}
