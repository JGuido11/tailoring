import "../../styles/css/styles.css";

export function NavBar() {
  return (
    <nav className="navBar">
      <a href="../../Context/ExportCSV">Export</a>
      <a href="./TailorinPage/OrderList">Order List</a>
      {/*<a href="#alfaiataria">Alfaiataria</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#contato">Contato</a> */}
    </nav>
  );
}
