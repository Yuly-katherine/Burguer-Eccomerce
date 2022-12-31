import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

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
              <div className="total-info">
              <span className="total-info__subtotal"> Subtotal ${contextInfo.calculateSubTotal()}</span>
              <span className="total-info__msg"> IVA incluido y envíos calculados en el checkout</span>
              <button className="total-info__btn">Checkout</button>
              </div>
              <div className="opciones-pago">
                <h5>Opciones de pago</h5>
                <span>Aceptamos los siguientes métodos de pago:</span>
                <ul className="opciones-pago__lista">
                  <li className="opcion_imagen">
                    <img
                      src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-03.svg"
                      alt="amex"
                    />
                  </li>
                  <li className="opcion_imagen">
                    <img
                      src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-04.svg"
                      alt="Mastercard"
                    />
                  </li>
                  <li className="opcion_imagen">
                    <img
                      src="https://www.falabella.com.co/static/RDF/site/basket/img/fbra_card_visa_new.png"
                      alt="Visa"
                    />
                  </li>
                  <li className="opcion_imagen">
                    <img
                      src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-06.svg"
                      alt="Dinners"
                    />
                  </li>
                  <li className="opcion_imagen">
                    <img
                      src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-07.svg"
                      alt="pse"
                    />
                  </li>
                </ul>
              </div>
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
