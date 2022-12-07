const ItemDetail = ({product}) => {
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
        <span className="product-precio">${product.precio}</span>
        <button className="product-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
