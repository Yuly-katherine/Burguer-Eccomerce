
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import PaymentOptions from "./PaymentOptions";
import CreateOrder from "./CreateOrder.jsx";


const Cart = () => {
  const contextInfo = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Mi pedido</h1>
        {contextInfo.cartList.length > 0 && (
          <button
            className="cart-header__btn"
            onClick={contextInfo.deleteAllProducts}
          >
            Eliminar todos
          </button>
        )}
      </div>
      <div className="cart-products">
        {contextInfo.cartList.length !== 0 ? (
          <div className="products-info">
            <div className="products-info__header">
              <span>Producto</span>
              <span>Nombre</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Total</span>
            </div>
            {contextInfo.cartList.map((product, index) => (
              <div className="products-info__product" key={index}>
                <img
                  className="product-img"
                  src={product.imagen}
                  alt={product.nombre}
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <span>{product.cantidad}</span>
                <span>${product.totalProducto}</span>
                <button
                  className="product-delete"
                  onClick={() => contextInfo.deleteProduct(product.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div>
              <hr />
              <CreateOrder/>
              <PaymentOptions/>
            </div>
          </div>
        ) : (
          <div className="cart-products__noProduct">
            Cuando agregues productos se verán aquí.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
