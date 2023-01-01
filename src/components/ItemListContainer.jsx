import { GiKnifeFork } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {fetchFromFireStore} from "../utils/FirestoreFetch.jsx"
import ItemList from "./ItemList.jsx";

/** DOMICILIOS VIEW**/

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    fetchFromFireStore(idCategoria)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, [idCategoria]);

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
      <ItemList data={products} />
    </div>
  );
};
export default ItemListContainer;
