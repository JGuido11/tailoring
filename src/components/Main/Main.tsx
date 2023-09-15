import { Header } from "../Header/Header";
import { useDrawer } from "../../Context/DrawerContent";
import { Drawer } from "../Drawer/drawer";
import { Contact } from "../Contact/contact";
import { FirstSection } from "../FirstSection/firtsSection";
import { Footer } from "../Footer/footer";
import { ReneeSection } from "../ReneeSection/reneeSection";
import { Products } from "../Products/products";
import { Promotions } from "../Promotions/promotion";
import { Depositions } from "../Depositions/deposition";
import { Instagram } from "../Social Media/instagram";
import "../../styles/css/styles.css";

export function Main() {
  const { isDrawerOpen } = useDrawer();

  return isDrawerOpen ? (
    <Drawer />
  ) : (
    <>
      <div className="main__wrapper">
        <Header />
        <FirstSection />
      </div>
      <ReneeSection />
      <Promotions />
      <Products />
      <Depositions />
      <Contact />
      <Footer />
      <Instagram />
    </>
  );
}
