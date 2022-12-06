const Item = ({ product }) => {
  return (
    <div className="cards">
      <img className="cards__img" src={product.imagen} />
      <div className="cards__info">
        <p className="cards-titulo">{product.nombre}</p>
        <span className="cards-descripcion">{product.descripcion}</span>
        <span className="cards-precio">${product.precio}</span>
        <button className="cards-btn">Agregar</button>
      </div>
    </div>
  );
};

export default Item;
