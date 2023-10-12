import { useDrawer } from "../../Context/DrawerContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Drawer } from "../Drawer/drawer";
// import TailoringPage from "../TailorinPage/Tailoring";
import { NavBar } from "../Header/navbar";
// import OrderList from "../TailorinPage/OrderList";
import "../../styles/css/styles.css";

export function Main() {
  const { isDrawerOpen } = useDrawer();

  return (
    <Router>
      {isDrawerOpen ? (
        <Drawer />
      ) : (
        <div className="main__wrapper">
          <NavBar />
          <Routes>
            <Route path="../TailorinPage/Tailoring" />
            <Route path="../TailorinPage/OrderList" /> 
            {/* Outras rotas aqui */}
          </Routes>
        </div>
      )}
    </Router>
  );
}