import { Header } from "../Header/Header";
import { useDrawer } from "../../Context/DrawerContent";
import { Drawer } from "../Drawer/drawer";
// import { FirstSection } from "../FirstSection/firtsSection";
import TailoringForm from "../Forms/Tailoring-form";
import TailoringPage from "../TailorinPage/Tailoring";
import "../../styles/css/styles.css";

export function Main() {
  const { isDrawerOpen } = useDrawer();

  return isDrawerOpen ? (
    <Drawer />
  ) : (
    <>
      <div className="main__wrapper">
        <Header />
        {/* <FirstSection /> */}
      </div>
      <TailoringForm />
      <TailoringPage />
    </>
  );
}
