import { useState, useEffect } from "react";
import CustomFetch from "../utils/CustomFetch";
import AllProducts from "../utils/Products.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
// import {fetchOneFromFireStore} from "../utils/FirestoreFetch.jsx";

const itemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    consumedApiProducts();
    // fetchOneFromFireStore(idProducto)
    // .then((result) => console.log(result))
    // .catch((err) => console.log(err));
  }, []);

  const consumedApiProducts = () => {
    CustomFetch(
      1000,
      AllProducts.find((product) => product.id === parseInt(idProducto))
    )
      .then((data) => setProductDetail(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="burguer-content">
      {Object.keys(productDetail).length === 0 ? (
        <div className="loading">
          <img
            src="https://i.ibb.co/nj1f0WK/burger.png"
            className="loading__img"
            width="50"
            height="50"
            alt="Burguerlogo"
          />
          <span className="loading__text">Cargando...</span>
        </div>
      ) : (
        <ItemDetail product={productDetail} />
      )}
    </div>
  );
};

export default itemDetailContainer;
