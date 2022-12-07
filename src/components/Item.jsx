import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <img className="cards__img" src={product.imagen} />
      <div className="cards__info">
        <p className="cards-titulo">{product.nombre}</p>
        <span className="cards-descripcion">{product.descripcion}</span>
        <span className="cards-precio">${product.precio}</span>
        <Link to={`/producto/${product.id}`}>
          <button className="cards-btn">Agregar</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
