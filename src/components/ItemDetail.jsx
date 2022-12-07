import ItemCount from "./ItemCount.jsx"

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
        <span className="product-price">${product.precio}</span>
        <ItemCount initial={1}/>
      </div>
    </div>
  );
};

export default ItemDetail;
