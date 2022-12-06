import Spinner from "react-bootstrap/Spinner";
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
        <div className="spinner">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </>
  );
};

export default ItemList;
