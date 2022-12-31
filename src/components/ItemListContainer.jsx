import { GiKnifeFork } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AllProducts from "../utils/Products.json";
import ItemList from "./ItemList.jsx";
import CustomFetch from "../utils/CustomFetch";

/** DOMICILIOS VIEW**/

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    consumeApiProducts();
  }, [products]);

  const consumeApiProducts = () => {
    CustomFetch(
      2000,
      AllProducts.filter((products) => {
        if (idCategoria === undefined) return products;
        return products.categoria.toLowerCase() === idCategoria;
      })
    )
      .then((data) => setProducts(data))
      .catch((error) => console.log(error)); 
  };

  return (
    <div className="burguer-content">
      <section className="burguer-content__img"></section>
      <section className="burguer-domicilios">
        <div className="burguer-domicilios__titulo">
          <span>
            {idCategoria === undefined
              ? "PRODUCTOS"
              : idCategoria.toUpperCase()}
          </span>
          <GiKnifeFork />
        </div>
      </section>
      <ItemList data={products}/>
    </div>
  );
};
export default ItemListContainer;
