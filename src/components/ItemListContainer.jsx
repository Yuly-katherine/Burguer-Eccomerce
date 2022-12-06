import { GiKnifeFork } from "react-icons/gi";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import CustomFetch from "../utils/CustomFetch";
import AllProducts from "../utils/Products.json";

const Domicilios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    CustomFetch(2000, AllProducts)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="burguer-content">
      <section className="burguer-content__img"></section>
      <section className="burguer-domicilios">
        <div className="burguer-domicilios__titulo">
          <span>Productos</span>
          <GiKnifeFork />
        </div>
      </section>
      <ItemList data={products}/>
    </div>
  );
};
export default Domicilios;
