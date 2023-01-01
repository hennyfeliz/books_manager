import { Button } from "./ButtonComponent";
import "./Element.css"



export const Element = ({titulo, precio}) => {
  return (
    <div className="product m-4">
      <img
        src="https://picsum.photos/180"
        alt="products"
        className="product_img"
      />
      <h2 className="product_name">{titulo}</h2>
      <div className="product_details">
        {/* <p className="product_oldprice">300</p> */}
        <p className="product_newprice">${precio} US</p>
        <Button />
      </div>
    </div>
  );
};