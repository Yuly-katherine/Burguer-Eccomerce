import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  

  const addToCart = (product, quantity) => {
    const existingProduct = cartList.includes(product);
    if (existingProduct === true) {
        product.cantidad += quantity;
        product.totalProducto = product.cantidad * product.precio; 
        setCartList([...cartList])
    } else {
      product.cantidad = quantity;
      product.totalProducto = quantity * product.precio; 
      setCartList([...cartList, product]);
    }
  };

  const calculateQuantity = () => {
    let quantity = 0;
    cartList.forEach((el) => {
      quantity += el.cantidad
    })
    return quantity;
  }

  const calculateSubTotal = () => {
    let subTotal = 0;
    cartList.forEach((el) => {
      subTotal += el.totalProducto
    })
    return subTotal;
  }

  const deleteProduct = (productId) => {
    const filterCartList = cartList.filter((el) => el.id !== productId)
    setCartList([...filterCartList]);
  };

  const deleteAllProducts = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteProduct, deleteAllProducts, calculateQuantity , calculateSubTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
