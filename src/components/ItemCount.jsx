import { BsPlusLg } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import {useState} from "react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);
 
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count !== 1) return setCount(count - 1);
  };

  return (
    <div className="product-counter">
      <div>
        <button className="product-counter__btn" onClick={increment}>
          <BsPlusLg />
        </button>
        <input
          className="product-counter__input"
          type="number"
          min="1"
          pattern="^[0-9]+"
          id="cantidad"
          placeholder={count}
        />
        <button className="product-counter__btn" onClick={decrement}>
          <RiSubtractFill />
        </button>
      </div>
      <button className="product-btn" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
