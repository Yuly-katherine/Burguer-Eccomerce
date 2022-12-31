import ItemCount from "./ItemCount.jsx";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    Swal.fire({
      text: "¿Quieres agregar este producto?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ffce12",
      cancelButtonColor: "#000",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        setItemCount(quantity);
        addToCart(product, quantity);
        Swal.fire({
          title: "Bien hecho!",
          text: "Tu producto se ha agregado al carrito.",
          icon: "success",
          confirmButtonColor: "#ffce12",
        });
      }
    });
  };

  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.imagen}
        alt="producto"
      />

      <div className="product-detail__info">
      <h1 className="product-title">{product.nombre}</h1>
        <span className="product-descripcion">{product.descripcion}</span>
        <span className="product-price">${product.precio}</span>
        {itemCount === 0 ? (
          <ItemCount  onAdd={onAdd} />
        ) : (
          <Link to="/carrito">
            <button className="product-button">Comprobar pedido</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
