import Item from "./Item.jsx";

const ItemList = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="domicilios-productos">
          {data.map((element) => (
            <Item key={element.id} product={element} />
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default ItemList;
