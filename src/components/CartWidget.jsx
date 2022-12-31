import { BsCart4 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";


const CartWidget = () => {
  const { calculateQuantity, cartList } = useContext(CartContext);

  return(
    <div className="cartWidget">
      {
        cartList.length !== 0
        ?<Badge pill bg="secondary">{calculateQuantity()}</Badge>
        : ""
      }
    <div className="burguer-cart">
        <BsCart4 />
    </div>
    </div>
  )
}
export default CartWidget
