import "../../styles/css/styles.css";
import { Product } from "../Product/product";
import { shirtsPros, tailoringPros } from "../../utils/pros";
import suit from "../../Assets/images/suits.png";
import tie from "../../Assets/images/ties.png"

export function Products() {
  return (
    <div className="Products__container">
      <div id="shirts" />
      <Product
        imgUrl={tie}
        title="Shirting"
        description="Handcrafted"
        pros={shirtsPros}
      />

      <div className="divider" />

      <div id="tailoring" />
      <Product
        imgUrl={suit}
        title="Tailoring"
        description="Completely handmade to order"
        pros={tailoringPros}
      />

      <button className="button">Make a Budget</button>
    </div>
  );
}
